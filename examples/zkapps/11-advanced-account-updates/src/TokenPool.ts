import {
  DeployArgs,
  method,
  AccountUpdate,
  Permissions,
  PublicKey,
  SmartContract,
  UInt64,
} from 'o1js';

import { WrappedMina } from './WrappedMina.js';

export class TokenPool extends SmartContract {
  static wrappedMinaPublicKey: PublicKey;

  // ----------------------------------------------------------------------

  @method async moveMinaToWrappedMina(amount: UInt64) {
    this.send({ to: TokenPool.wrappedMinaPublicKey, amount });

    const wrappedMinaContract = new WrappedMina(TokenPool.wrappedMinaPublicKey);
    wrappedMinaContract.mintWrappedMina(amount, this.address);
  }

  // ----------------------------------------------------------------------

  @method async moveWrappedMinaToMina(amount: UInt64) {
    const wrappedMinaContract = new WrappedMina(TokenPool.wrappedMinaPublicKey);
    const wminaContract = new TokenPoolWMinaHolder(
      this.address,
      wrappedMinaContract.tokenId
    );
    wminaContract.burnWMINA(amount);
    const burnWMINA = wminaContract.self;

    wrappedMinaContract.redeemWrappedMinaApprove(burnWMINA, amount);
  }

  // ----------------------------------------------------------------------
}

export class TokenPoolWMinaHolder extends SmartContract {
  @method async burnWMINA(amount: UInt64) {
    // burn WMINA
    this.balance.subInPlace(amount);

    // in return for burnt WMINA, add MINA to TokenPool (only works in transactions that subtract MINA from another account)
    let tokenPool = AccountUpdate.create(this.address);
    tokenPool.balance.addInPlace(amount);
  }
}
