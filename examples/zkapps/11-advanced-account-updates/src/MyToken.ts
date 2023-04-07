import {
  Account,
  Bool,
  Circuit,
  DeployArgs,
  Field,
  Int64,
  isReady,
  method,
  Mina,
  AccountUpdate,
  Permissions,
  PrivateKey,
  PublicKey,
  SmartContract,
  Token,
  UInt64,
  VerificationKey,
  Struct,
  State,
  state,
  UInt32,
} from 'snarkyjs';

export class MyToken extends SmartContract {
  deploy(args?: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      send: Permissions.proof(),
      editState: Permissions.proof(),
      receive: Permissions.none(),
      editActionState: Permissions.proof(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: Permissions.proof(),
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
      access: Permissions.proof()
    });
  }

  // ----------------------------------------------------------------------

  //@method init() {
  //  super.init();

  //  this.account.provedState.assertEquals(this.account.provedState.get());
  //  this.account.provedState.get().assertFalse();

  //  this.tokenSymbol.set('MYTKN');

  //  let receiverAccountUpdate = this.token.mint({
  //    address: this.address,
  //    amount: UInt64.from(1000),
  //  });

  //  receiverAccountUpdate.account.isNew.assertEquals(Bool(true));

  //  this.balance.subInPlace(Mina.accountCreationFee());
  //}

  // ----------------------------------------------------------------------

  @method mint(
    receiverAddress: PublicKey,
    amount: UInt64,
  ) {
    this.token.mint({
      address: receiverAddress,
      amount,
    });
  }

  @method approveDeploy(deployUpdate: AccountUpdate) {
    // TODO assert not approving anything else
    this.approve(deployUpdate);

    // see if balance change is zero
    let balanceChange = Int64.fromObject(deployUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(0));
  }

  // ----------------------------------------------------------------------

  @method approveTransfer(
    transferUpdate: AccountUpdate,
    to: PublicKey,
    amount: UInt64
  ) {
    // TODO assert not approvign anything else
    this.approve(transferUpdate);

    // see if balance change cancels the amount sent
    let balanceChange = Int64.fromObject(transferUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(amount).neg());

    // add same amount of tokens to the receiving address
    this.token.mint({ address: to, amount });
  }

  // ----------------------------------------------------------------------

  @method transfer(from: PublicKey, to: PublicKey, value: UInt64) {
    this.token.send({ from, to, amount: value });
  }

  // ----------------------------------------------------------------------
}

