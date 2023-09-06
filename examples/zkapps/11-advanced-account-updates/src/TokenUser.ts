import { MyToken } from './MyToken.js';

import {
  SmartContract,
  method,
  DeployArgs,
  PublicKey,
  Permissions,
  UInt64,
  AccountUpdate,
} from 'o1js';

export class TokenUser extends SmartContract {
  static tokenSmartContractAddress: PublicKey;

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
      access: Permissions.none(),
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

  @method sendMyTokens(amount: UInt64, destination: PublicKey) {
    const tokenHolder = this.tokenHolder;
    tokenHolder.transferAway(amount);
    this.tokenContract.approveTransfer(tokenHolder.self, destination);
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
      editActionState: Permissions.proof(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: Permissions.proof(),
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
      access: Permissions.none(),
    });
  }

  public get tokenContract() {
    if (!TokenHolder.tokenSmartContractAddress) {
      throw new Error('Token smart contract address unknown!');
    }
    return new MyToken(TokenHolder.tokenSmartContractAddress);
  }

  @method transferAway(amount: UInt64) {
    // TODO: in a real zkApp, here would be application-specific checks for whether we want to allow sending tokens

    this.balance.subInPlace(amount);
    this.self.body.mayUseToken = AccountUpdate.MayUseToken.ParentsOwnToken;
  }
}
