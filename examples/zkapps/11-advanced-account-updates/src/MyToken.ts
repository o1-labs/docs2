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
} from 'o1js';

export class MyToken extends SmartContract {
  deploy(args?: DeployArgs) {
    super.deploy(args);
    this.account.permissions.set({
      receive: Permissions.none(),
      send: Permissions.proof(),
      editState: Permissions.proof(),
      editActionState: Permissions.proof(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: Permissions.proof(),
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
      access: Permissions.proof(),
    });

    this.account.tokenSymbol.set('MYTKN');

    this.token.mint({ address: this.address, amount: UInt64.from(1000) });
  }

  // ----------------------------------------------------------------------

  @method mintTokens(receiverAddress: PublicKey, amount: UInt64) {
    this.token.mint({ address: receiverAddress, amount });
  }

  @method approveDeploy(deployUpdate: AccountUpdate) {
    this.approve(deployUpdate, AccountUpdate.Layout.NoChildren);

    // check that balance change is zero
    let balanceChange = Int64.fromObject(deployUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(0));
  }

  // ----------------------------------------------------------------------

  @method approveTransfer(transferUpdate: AccountUpdate, receiver: PublicKey) {
    this.approve(transferUpdate, AccountUpdate.Layout.NoChildren);

    let balanceChange = Int64.fromObject(transferUpdate.body.balanceChange);

    // assert that the balance change is negative
    balanceChange.isPositive().not().assertTrue();

    // move the same amount to the receiver
    this.token.mint({ address: receiver, amount: balanceChange.magnitude });
  }

  // ----------------------------------------------------------------------

  @method transfer(from: PublicKey, to: PublicKey, value: UInt64) {
    this.token.send({ from, to, amount: value });
  }

  // ----------------------------------------------------------------------

  public hasNoBalanceChange(accountUpdate: AccountUpdate): Bool {
    // all balance changes of children
    const balanceChanges = accountUpdate.children.accountUpdates.map(
      ({ body: { balanceChange } }) => balanceChange
    );

    // add the self balance change
    balanceChanges.push(accountUpdate.body.balanceChange);

    const balanceChange = balanceChanges.reduce(
      (accumulatedBalanceChange, currentBalanceChange) =>
        Int64.fromObject(accumulatedBalanceChange).add(
          Int64.fromObject(currentBalanceChange)
        ),
      Int64.zero
    );

    return Int64.fromObject(balanceChange).equals(UInt64.zero);
  }

  public assertHasNoBalanceChange(accountUpdate: AccountUpdate) {
    this.hasNoBalanceChange(accountUpdate).assertTrue(
      'Account update has a non-zero balance change'
    );
  }

  // ----------------------------------------------------------------------
}
