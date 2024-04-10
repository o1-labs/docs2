import {
  Bool,
  DeployArgs,
  Int64,
  method,
  AccountUpdate,
  Permissions,
  PublicKey,
  SmartContract,
  UInt64,
  TransactionVersion,
  TokenContract,
  AccountUpdateForest,
  AccountUpdateTree,
} from 'o1js';

export class MyToken extends TokenContract {
  async deploy() {
    await super.deploy();
    this.account.permissions.set({
      receive: Permissions.none(),
      send: Permissions.proof(),
      editState: Permissions.proof(),
      editActionState: Permissions.proof(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: {
        auth: Permissions.proof(),
        txnVersion: TransactionVersion.current(),
      },
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
      access: Permissions.proof(),
    });

    this.account.tokenSymbol.set('MYTKN');

    this.internal.mint({ address: this.address, amount: UInt64.from(1000) });
  }

  // ----------------------------------------------------------------------
  async approveBase(forest: AccountUpdateForest) {
    this.checkZeroBalanceChange(forest);
  }

  @method async mintTokens(receiverAddress: PublicKey, amount: UInt64) {
    this.internal.mint({ address: receiverAddress, amount });
  }

  @method async approveDeploy(deployUpdate: AccountUpdate) {
    this.approve(deployUpdate);

    // check that balance change is zero
    let balanceChange = Int64.fromObject(deployUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(0));
  }

  // ----------------------------------------------------------------------

  @method async approveTransfer(
    transferUpdate: AccountUpdate,
    receiver: PublicKey
  ) {
    this.approve(transferUpdate);

    let balanceChange = Int64.fromObject(transferUpdate.body.balanceChange);

    // assert that the balance change is negative
    balanceChange.isPositive().not().assertTrue();

    // move the same amount to the receiver
    this.internal.mint({ address: receiver, amount: balanceChange.magnitude });
  }

  // ----------------------------------------------------------------------

  @method async transfer(from: PublicKey, to: PublicKey, value: UInt64) {
    this.internal.send({ from, to, amount: value });
  }

  // ----------------------------------------------------------------------

  // public hasNoBalanceChange(accountUpdate: AccountUpdate): Bool {
  //   // all balance changes of children
  //   const balanceChanges = accountUpdate.children.accountUpdates.map(
  //     ({ body: { balanceChange } }) => balanceChange
  //   );

  //   // add the self balance change
  //   balanceChanges.push(accountUpdate.body.balanceChange);

  //   const balanceChange = balanceChanges.reduce(
  //     (accumulatedBalanceChange, currentBalanceChange) =>
  //       Int64.fromObject(accumulatedBalanceChange).add(
  //         Int64.fromObject(currentBalanceChange)
  //       ),
  //     Int64.zero
  //   );

  //   return Int64.fromObject(balanceChange).equals(UInt64.zero);
  // }

  public assertHasNoBalanceChange(accountUpdate: AccountUpdate) {
    let forest = AccountUpdateForest.from([accountUpdate.extractTree()]);
    this.checkZeroBalanceChange(forest);
  }

  // ----------------------------------------------------------------------
}
