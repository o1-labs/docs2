import { MyToken } from './MyToken.js';

import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  PublicKey,
  Permissions,
  UInt64,
  AccountUpdate,
} from 'snarkyjs';

export class TokenUser extends SmartContract {
  static tokenSmartContractAddress: PublicKey;

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
      access: Permissions.none()
    });
  }

  public get tokenHolder() {
    const tokenHolder = new TokenHolder(
      this.address,
      this.tokenContract.token.id
    );
    return tokenHolder;
  }

  public get tokenContract() {
    if (!TokenUser.tokenSmartContractAddress) {
      throw new Error('Token smart contract address unknown!');
    }
    return new MyToken(TokenUser.tokenSmartContractAddress);
  }

  @method sendMyTokens(
    amount: UInt64, 
    destination: PublicKey
  ) {
    const tokenHolder = this.tokenHolder;
    tokenHolder.transfer(destination, amount);
    this.tokenContract.approveTransfer(tokenHolder.self);
  }
}

// ==================================================

export class TokenHolder extends SmartContract {
  static tokenSmartContractAddress: PublicKey;
  public deploy(args?: DeployArgs) {
    super.deploy(args);
    this.account.permissions.set({
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
      access: Permissions.none()
    });
  }

  public get tokenContract() {
    if (!TokenHolder.tokenSmartContractAddress) {
      throw new Error('Token smart contract address unknown!');
    }
    return new MyToken(TokenHolder.tokenSmartContractAddress);
  }

  @method transfer(to: PublicKey, amount: UInt64) {
    const toAccountUpdate = AccountUpdate.create(to, this.tokenId);
    toAccountUpdate.balance.addInPlace(amount);
    toAccountUpdate.body.mayUseToken =
      AccountUpdate.MayUseToken.InheritFromParent;

    this.balance.subInPlace(amount);

    this.self.body.mayUseToken = AccountUpdate.MayUseToken.ParentsOwnToken;
  }
}
