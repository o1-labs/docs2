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
      receive: Permissions.none(),
      send: Permissions.proof(),
      editState: Permissions.proof(),
      //editActionState: Permissions.proof(),
      editSequenceState: Permissions.proof(),
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

    this.tokenSymbol.set('MYTKN');

    let receiverAccountUpdate = this.token.mint({
      address: this.address,
      amount: UInt64.from(1000),
    });

  }

  // ----------------------------------------------------------------------

  @method mintTokens(
    receiverAddress: PublicKey,
    amount: UInt64,
  ) {
    this.token.mint({ address: receiverAddress, amount });
  }

  @method approveDeploy(deployUpdate: AccountUpdate) {
    // TODO should anything else be asserted here for a "safe" deployment?
    this.approve(deployUpdate, AccountUpdate.Layout.NoChildren);

    // see if balance change is zero
    let balanceChange = Int64.fromObject(deployUpdate.body.balanceChange);
    balanceChange.assertEquals(Int64.from(0));
  }

  // ----------------------------------------------------------------------

  @method approveTransfer(
    transferUpdate: AccountUpdate
  ) {
    // TODO should anything else be asserted here for a "safe" deployment?
    this.approve(transferUpdate);

    // TODO should this also assert that all accountUpdates / balanceChanges are for the correct tokenId?
    this.assertHasNoBalanceChange(transferUpdate);
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

