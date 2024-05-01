import {
  Int64,
  method,
  AccountUpdate,
  PublicKey,
  UInt64,
  State,
  state,
  TokenContract,
  AccountUpdateForest,
  AccountUpdateTree,
  assert,
  Bool,
  Reducer,
  TokenId,
  Provable,
  Types,
  Permissions,
} from 'o1js';

export { WrappedMina };

const $MINA = TokenId.default;

class WrappedMina extends TokenContract {
  @state(UInt64) totalSupply = State<UInt64>();

  // actions are total supply changes triggered by minting or burning
  totalSupplyReducer = Reducer({ actionType: Int64 });

  @method async init() {
    super.init(); // totalSupply provable starts at 0
  }

  get $wMINA() {
    return this.deriveTokenId();
  }

  // approve any transaction which leaves the token supply unchanged
  @method async approveBase(forest: AccountUpdateForest) {
    let sum = Int64.from(0);

    this.forEachUpdate(forest, (update, usesToken) => {
      sum = Provable.if(usesToken, sum.add(update.balanceChange), sum);
      checkPermissionsUpdate(update);
    });

    sum.assertEquals(Int64.zero);
  }

  @method async wrap(sender: AccountUpdateTree) {
    // get sender update and ensure there are no other updates
    assert(sender.children.isEmpty());
    let senderUpdate = sender.accountUpdate.unhash();
    this.approve(sender);

    // ensure sender is giving away a positive amount of MINA
    senderUpdate.tokenId.assertEquals($MINA);
    let amount = senderUpdate.balanceChange.neg();
    assert(amount.isPositive());

    // move MINA from sender to this contract
    this.balance.addInPlace(amount);

    // mint same amount of wrapped MINA to sender
    let senderTokenUpdate = this.internal.mint({
      address: senderUpdate.publicKey,
      amount: amount.magnitude,
    });
    // allow minting to pay for account creation if the account doesn't exist
    senderTokenUpdate.body.implicitAccountCreationFee = Bool(true);

    // increase total wMINA supply
    this.totalSupplyReducer.dispatch(amount);
  }

  @method async unwrap(sender: AccountUpdateTree) {
    /// get sender update and ensure there are no other updates
    assert(sender.children.isEmpty());
    let senderTokenUpdate = sender.accountUpdate.unhash();
    checkPermissionsUpdate(senderTokenUpdate);
    this.approve(sender);

    // ensure sender is burning a positive amount of wrapped MINA
    senderTokenUpdate.tokenId.assertEquals(this.$wMINA);
    let amount = senderTokenUpdate.balanceChange.neg();
    assert(amount.isPositive());

    // release same amount of MINA in return for burning
    let senderUpdate = this.send({
      to: senderTokenUpdate.publicKey,
      amount: amount.magnitude,
    });
    // allow sending to pay for account creation if the account doesn't exist
    senderUpdate.body.implicitAccountCreationFee = Bool(true);

    // decrease total wMINA supply
    this.totalSupplyReducer.dispatch(amount.neg());
  }

  @method.returns(UInt64) async getBalance(publicKey: PublicKey) {
    let accountUpdate = AccountUpdate.create(publicKey, this.$wMINA);
    return accountUpdate.account.balance.getAndRequireEquals();
  }
}

function checkPermissionsUpdate(update: AccountUpdate) {
  let permissions = update.update.permissions;

  // account must not change its permissions in a way that prevents sending to it
  let { access, receive } = permissions.value;
  let accessIsNone = permissionEquals(access, Permissions.none());
  let receiveIsNone = permissionEquals(receive, Permissions.none());
  let updateAllowed = accessIsNone.and(receiveIsNone);

  // either do an allowed update, or don't change permissions
  assert(updateAllowed.or(permissions.isSome.not()));
}

function permissionEquals(p1: Types.AuthRequired, p2: Types.AuthRequired) {
  return p1.constant
    .equals(p2.constant)
    .and(p1.signatureNecessary.equals(p2.signatureNecessary))
    .and(p1.signatureSufficient.equals(p2.signatureSufficient));
}
