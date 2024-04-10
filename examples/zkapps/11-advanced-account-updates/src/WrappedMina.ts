import {
  Bool,
  DeployArgs,
  Int64,
  method,
  Mina,
  AccountUpdate,
  Permissions,
  PublicKey,
  UInt64,
  State,
  state,
  TokenContract,
} from 'o1js';

export class WrappedMina extends TokenContract {
  async deploy(args?: DeployArgs) {
    await super.deploy(args);
    this.account.permissions.set({
      ...Permissions.default(),
      send: Permissions.proof(),
    });
  }

  @state(UInt64) priorMina = State<UInt64>();

  // ----------------------------------------------------------------------

  @method async init() {
    super.init();

    let receiver = this.internal.mint({
      address: this.address,
      amount: UInt64.from(0),
    });
    // require that the receiving account is new, so this can be only done once
    receiver.account.isNew.requireEquals(Bool(true));
    // pay fees for opened account
    this.balance.subInPlace(Mina.accountCreationFee());
    this.priorMina.set(UInt64.from(0));
  }

  // ----------------------------------------------------------------------

  @method async mintWrappedMina(amount: UInt64, destination: PublicKey) {
    const priorMina = this.priorMina.get();
    this.priorMina.requireEquals(this.priorMina.get());

    const newMina = amount.add(priorMina);

    // TODO is there a way to directly get the balance change for this transaction?
    this.account.balance.requireBetween(newMina, UInt64.MAXINT());

    this.internal.mint({ address: destination, amount });

    this.priorMina.set(newMina);
  }

  // ----------------------------------------------------------------------

  @method async redeemWrappedMinaApprove(
    burnWMINA: AccountUpdate,
    amount: UInt64
  ) {
    let { StaticChildren, NoDelegation } = AccountUpdate.Layout;

    // check that the burn account update has our token id
    burnWMINA.body.tokenId.assertEquals(this.tokenId);

    // approve burn with at most 2 child account updates, which don't get token permissions
    this.approve(burnWMINA, StaticChildren(NoDelegation, NoDelegation));

    // check that the account update burns the specified amount
    let balanceChange = Int64.fromObject(burnWMINA.body.balanceChange);
    balanceChange.assertEquals(Int64.from(amount).neg());

    // in return for burn, decrease our MINA balance (can be picked up as balance increase anywhere it suits the caller)
    this.balance.subInPlace(amount);

    // update priorMina
    const priorMina = this.priorMina.get();
    this.priorMina.requireEquals(this.priorMina.get());
    const newMina = priorMina.sub(amount);
    this.priorMina.set(newMina);
  }

  // ----------------------------------------------------------------------

  @method async redeemWrappedMinaWithoutApprove(
    source: PublicKey,
    destination: PublicKey,
    amount: UInt64
  ) {
    this.internal.burn({ address: source, amount });

    const priorMina = this.priorMina.get();
    this.priorMina.requireEquals(this.priorMina.get());

    const newMina = priorMina.sub(amount);

    this.send({ to: destination, amount });

    this.priorMina.set(newMina);
  }

  // ----------------------------------------------------------------------

  // let a zkapp send tokens to someone, provided the token supply stays constant
  @method async approveUpdateAndSend(
    zkappUpdate: AccountUpdate,
    to: PublicKey,
    amount: UInt64
  ) {
    this.approve(zkappUpdate); // TODO is this secretly approving other changes?

    // see if balance change cancels the amount sent
    let balanceChange = Int64.fromObject(zkappUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(amount).neg());
    // add same amount of tokens to the receiving address
    this.internal.mint({ address: to, amount });
  }

  // ----------------------------------------------------------------------

  // let a zkapp do anything, provided the token supply stays constant
  @method async approveUpdate(zkappUpdate: AccountUpdate) {
    this.approve(zkappUpdate); // TODO is this secretly approving other changes?

    // see if balance change is zero
    let balanceChange = Int64.fromObject(zkappUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(0));
  }

  // ----------------------------------------------------------------------

  @method async transfer(from: PublicKey, to: PublicKey, value: UInt64) {
    this.internal.send({ from, to, amount: value });
  }

  // ----------------------------------------------------------------------

  @method async getBalance(publicKey: PublicKey): UInt64 {
    let accountUpdate = AccountUpdate.create(publicKey, this.tokenId);
    let balance = accountUpdate.account.balance.get();
    accountUpdate.account.balance.requireEquals(
      accountUpdate.account.balance.get()
    );
    return balance;
  }

  // ----------------------------------------------------------------------
}
