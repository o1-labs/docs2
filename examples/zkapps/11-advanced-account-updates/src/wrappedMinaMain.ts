import { WrappedMina } from './WrappedMina.js';
import { TokenPool, TokenPoolWMinaHolder } from './TokenPool.js';
import {
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
  TokenId,
  PublicKey,
} from 'o1js';

// DEX reference code
// https://github.com/o1-labs/o1js/blob/main/src/examples/zkapps/dex/dex.ts

(async () => {
  let doProofs = false;

  let Local = await Mina.LocalBlockchain({
    proofsEnabled: doProofs,
    enforceTransactionLimits: false,
  });

  Mina.setActiveInstance(Local);
  let accountFee = Mina.getNetworkConstants().accountCreationFee;
  let [{ privateKey: feePayerKey, publicKey: feePayerAddress }] =
    Local.testAccounts;

  let wrappedMinaPrivateKey = PrivateKey.random();
  let wrappedMinaPublicKey = wrappedMinaPrivateKey.toPublicKey();

  let tokenPoolPrivateKey = PrivateKey.random();
  let tokenPoolPublicKey = tokenPoolPrivateKey.toPublicKey();

  TokenPool.wrappedMinaPublicKey = wrappedMinaPublicKey;

  let wrappedMinaContract = new WrappedMina(wrappedMinaPublicKey);
  let tokenPoolContract = new TokenPool(tokenPoolPublicKey);
  let wrappedMinaTokenHolder = new TokenPoolWMinaHolder(
    tokenPoolPublicKey,
    wrappedMinaContract.tokenId
  );

  const legend: any = {};
  legend[feePayerAddress.toBase58()] = 'feePayer';
  legend[wrappedMinaPublicKey.toBase58()] = 'wrappedMinaZkApp';
  legend[tokenPoolPublicKey.toBase58()] = 'tokenPoolZkApp';

  const printState = () => {
    const tryGetTokenBalance = (addr: PublicKey, tokenAddr?: PublicKey) => {
      try {
        if (tokenAddr == null) {
          return Mina.getBalance(addr).toBigInt();
        } else {
          return Mina.getBalance(addr, TokenId.derive(tokenAddr)).toBigInt();
        }
      } catch (e) {
        return null;
      }
    };
    console.log('\tuser MINA:', tryGetTokenBalance(feePayerAddress));
    console.log(
      '\tuser WMINA:',
      tryGetTokenBalance(feePayerAddress, wrappedMinaPublicKey)
    );

    console.log(
      '\tWMINA Manager MINA:',
      tryGetTokenBalance(wrappedMinaPublicKey)
    );
    console.log(
      '\tWMINA Manager WMINA:',
      tryGetTokenBalance(wrappedMinaPublicKey, wrappedMinaPublicKey)
    );

    console.log('\tTokenPool MINA:', tryGetTokenBalance(tokenPoolPublicKey));
    console.log(
      '\tTokenPool WMINA:',
      tryGetTokenBalance(tokenPoolPublicKey, wrappedMinaPublicKey)
    );
  };

  let txnI = 0;

  console.log('initial state');

  printState();

  // ------------------------------------------------------------------------

  const deployTx = await Mina.transaction(feePayerAddress, async () => {
    let feePayerUpdate = AccountUpdate.fundNewAccount(feePayerAddress, 3);
    feePayerUpdate.send({ to: wrappedMinaPublicKey, amount: accountFee });
    feePayerUpdate.send({ to: tokenPoolPublicKey, amount: accountFee });

    await wrappedMinaContract.deploy();
    await tokenPoolContract.deploy();

    await wrappedMinaTokenHolder.deploy();
    await wrappedMinaContract.approveUpdate(wrappedMinaTokenHolder.self);
  });
  await deployTx.prove();
  deployTx.sign([feePayerKey, tokenPoolPrivateKey, wrappedMinaPrivateKey]);

  await deployTx.send();

  console.log('deployed');

  printState();

  // ------------------------------------------------------------------------

  const getWMinaTx = await Mina.transaction(feePayerAddress, async () => {
    // this is because the user doesn't have a WMINA address yet
    let feePayerUpdate = AccountUpdate.fundNewAccount(feePayerAddress, 1);
    feePayerUpdate.send({ to: wrappedMinaPublicKey, amount: accountFee });

    // sending MINA to the WMINA contract
    const amount = UInt64.from(10);
    let minaDeposit = AccountUpdate.createSigned(feePayerAddress);
    minaDeposit.send({ to: wrappedMinaPublicKey, amount });

    // getting the WMINA back
    await wrappedMinaContract.mintWrappedMina(amount, feePayerAddress);
  });
  await getWMinaTx.prove();
  getWMinaTx.sign([feePayerKey]);

  await getWMinaTx.send();

  console.log('got WMINA');

  printState();

  // ------------------------------------------------------------------------

  const redeemWMinaTx = await Mina.transaction(feePayerAddress, async () => {
    // getting some WMINA back
    const amount = UInt64.from(5);

    // TODO why does this work here, but not when called from a zkApp
    await wrappedMinaContract.redeemWrappedMinaWithoutApprove(
      feePayerAddress,
      feePayerAddress,
      amount
    );
  });
  await redeemWMinaTx.prove();
  redeemWMinaTx.sign([feePayerKey]);

  await redeemWMinaTx.send();

  console.log('redeemed WMINA');

  printState();

  // ------------------------------------------------------------------------

  const fundTokenPoolTx = await Mina.transaction(feePayerAddress, async () => {
    const amount = UInt64.from(10);
    let minaDeposit = AccountUpdate.createSigned(feePayerAddress);
    minaDeposit.send({ to: wrappedMinaPublicKey, amount });
  });
  await fundTokenPoolTx.prove();
  fundTokenPoolTx.sign([feePayerKey]);

  await fundTokenPoolTx.send();

  console.log('funded tokenPool');

  printState();

  // ------------------------------------------------------------------------

  const tokenPoolExchangeWMinaTx = await Mina.transaction(
    feePayerAddress,
    async () => {
      await tokenPoolContract.moveMinaToWrappedMina(UInt64.from(50));
    }
  );
  await tokenPoolExchangeWMinaTx.prove();
  tokenPoolExchangeWMinaTx.sign([feePayerKey]);

  await tokenPoolExchangeWMinaTx.send();

  console.log('tokenPool exchanged MINA -> WMINA');

  printState();

  // ------------------------------------------------------------------------

  const tokenPoolExchangeMinaTx = await Mina.transaction(
    feePayerAddress,
    async () => {
      await tokenPoolContract.moveWrappedMinaToMina(UInt64.from(35));
    }
  );
  await tokenPoolExchangeMinaTx.prove();
  tokenPoolExchangeMinaTx.sign([feePayerKey]);

  await tokenPoolExchangeMinaTx.send();

  console.log('tokenPool exchanged WMINA -> MINA');

  printState();

  // TODO
  //    6. Withdraw Mina from the TokenPool
  //    7. Withdraw WrappedMina from the TokenPool

  // TODO
  //    * Add a call to the TokenPool contract that does things that should be outside of scope with WrappedMina in the "approve" call (eg Minting inappropriately)
})();
