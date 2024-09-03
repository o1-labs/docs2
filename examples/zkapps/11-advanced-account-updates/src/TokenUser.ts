import { MyToken } from './MyToken.js';

import {
  SmartContract,
  method,
  DeployArgs,
  PublicKey,
  Permissions,
  UInt64,
  AccountUpdate,
  TransactionVersion,
} from 'o1js';

export class TokenUser extends SmartContract {
  static tokenSmartContractAddress: PublicKey;

  async deploy(args?: DeployArgs) {
    await super.deploy(args);
    this.account.permissions.set({
      receive: Permissions.none(),
      send: Permissions.none(),
      editState: Permissions.none(),
      editActionState: Permissions.none(),
      setDelegate: Permissions.none(),
      setPermissions: Permissions.none(),
      setVerificationKey: {
        auth: Permissions.none(),
        txnVersion: TransactionVersion.current(),
      },
      setZkappUri: Permissions.none(),
      setTokenSymbol: Permissions.none(),
      incrementNonce: Permissions.none(),
      setVotingFor: Permissions.none(),
      setTiming: Permissions.none(),
      access: Permissions.none(),
    });
  }

  public get tokenHolder() {
    const tokenHolder = new TokenHolder(
      this.address,
      this.tokenContract.tokenId
    );
    return tokenHolder;
  }

  public get tokenContract() {
    if (!TokenUser.tokenSmartContractAddress) {
      throw new Error('Token smart contract address unknown!');
    }
    return new MyToken(TokenUser.tokenSmartContractAddress);
  }

  @method async sendMyTokens(amount: UInt64, destination: PublicKey) {
    const tokenHolder = this.tokenHolder;
    await tokenHolder.transferAway(amount);
    await this.tokenContract.approveTransfer(tokenHolder.self, destination);
  }
}

// ==================================================

export class TokenHolder extends SmartContract {
  static tokenSmartContractAddress: PublicKey;
  public async deploy(args?: DeployArgs) {
    await super.deploy(args);
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
      access: Permissions.none(),
    });
  }

  public get tokenContract() {
    if (!TokenHolder.tokenSmartContractAddress) {
      throw new Error('Token smart contract address unknown!');
    }
    return new MyToken(TokenHolder.tokenSmartContractAddress);
  }

  @method async transferAway(amount: UInt64) {
    // TODO: in a real zkApp, here would be application-specific checks for whether we want to allow sending tokens

    this.balance.subInPlace(amount);
    this.self.body.mayUseToken = AccountUpdate.MayUseToken.ParentsOwnToken;
  }
}
