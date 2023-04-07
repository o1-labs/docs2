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
} from 'snarkyjs';

export class TokenUser extends SmartContract {
  static myTokenPublicKey: PublicKey;

  deploy(args?: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      ...Permissions.default(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: Permissions.proof(),
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
    });
  }

  //@method init() {
  //  super.init();

  //  this.account.provedState.assertEquals(this.account.provedState.get());
  //  this.account.provedState.get().assertFalse();
  //}


  @method sendMyTokens(
    amount: UInt64, 
    destination: PublicKey
  ) {
    const myTokenInstance = new MyToken(TokenUser.myTokenPublicKey);

    const tokenUserContract = new TokenUser(
      this.address,
      myTokenInstance.token.id
    );
    tokenUserContract.subtractTokens(amount);
    const subtractTokens = tokenUserContract.self;
    
    myTokenInstance.approveTransfer(subtractTokens, destination, amount);
  }

  @method subtractTokens(amount: UInt64) {
    // TODO this could let anyone subtract balance, how to do this pattern correctly so that balance is only subtracted if the "other half" of the intended behavior performed? (in this case, tokens being sent elsewhere)
    this.balance.subInPlace(amount);
  }
}
