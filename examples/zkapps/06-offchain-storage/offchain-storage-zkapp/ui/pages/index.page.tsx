import React, { useEffect, useState } from 'react';
import './reactCOIServiceWorker';

import ZkappWorkerClient from './zkappWorkerClient';

import {
  PublicKey,
  PrivateKey,
  Field,
  CircuitString,
  Character,
  Group,
} from 'snarkyjs';

const transactionFee = 100_000_000;

const useLocalTestInstance = true;

async function timeout(seconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export default function Home() {
  const [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    privateKey: null as null | PrivateKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
    currentMessages: null as null | Map<number, Field[]>,
    userMessages: [] as string[],
  });

  // -------------------------------------------------------
  // Do Setup

  useEffect(() => {
    (async () => {
      if (!state.hasBeenSetup) {
        console.log('Loading web worker...');
        const zkappWorkerClient = new ZkappWorkerClient();
        await timeout(5);
        console.log('Done loading web worker');

        if (useLocalTestInstance) {
          await zkappWorkerClient.setActiveInstanceToLocal();
        } else {
          await zkappWorkerClient.setActiveInstanceToBerkeley();
        }

        if (localStorage.privateKey == null) {
          localStorage.privateKey = PrivateKey.random().toBase58();
        }

        let privateKey = PrivateKey.fromBase58(localStorage.privateKey);
        if (useLocalTestInstance) {
          privateKey = await zkappWorkerClient.getLocalPrivateKey();
        }

        console.log('setting storage server...');
        await zkappWorkerClient.setStorageServer('http://localhost:3001');
        console.log('storage server set');

        let publicKey = privateKey.toPublicKey();
        console.log('using key', publicKey.toBase58());

        console.log('checking if account exists...');
        const res = await zkappWorkerClient.fetchAccount({
          publicKey: publicKey!,
        });
        const accountExists = res.error == null;

        await zkappWorkerClient.loadContract();
        console.log('Compiling zkApp...');
        await zkappWorkerClient.compileContract();
        console.log('zkApp compiled');

        let localZkappPrivateKey = PrivateKey.random();

        let zkappPublicKey;
        if (useLocalTestInstance) {
          zkappPublicKey = localZkappPrivateKey.toPublicKey();
        } else {
          zkappPublicKey = PublicKey.fromBase58(
            'B62qrBBEARoG78KLD1bmYZeEirUfpNXoMPYQboTwqmGLtfqAGLXdWpU'
          );
        }

        await zkappWorkerClient.initZkappInstance(zkappPublicKey);

        console.log('getting zkApp state...');
        const reszk = await zkappWorkerClient.fetchAccount({
          publicKey: zkappPublicKey,
        });

        if (useLocalTestInstance || reszk.error != null) {
          console.log('Sending deploy transaction...');
          await zkappWorkerClient.createDeployTransaction(
            privateKey,
            transactionFee,
            localZkappPrivateKey
          );
          await zkappWorkerClient.proveUpdateTransaction();
          let transactionHash = await zkappWorkerClient.sendUpdateTransaction();
          console.log(
            'See transaction at https://berkeley.minaexplorer.com/transaction/' +
              transactionHash
          );

          console.log('Sending init transaction...');
          await zkappWorkerClient.createInitTransaction(
            privateKey,
            localZkappPrivateKey
          );
          await zkappWorkerClient.proveUpdateTransaction();
          transactionHash = await zkappWorkerClient.sendUpdateTransaction();
          console.log(
            'See transaction at https://berkeley.minaexplorer.com/transaction/' +
              transactionHash
          );
        }
        console.log('zkApp state fetched');
        const currentMessages = await zkappWorkerClient.getMessages();
        console.log('current state:', currentMessages.toString());

        setState({
          ...state,
          zkappWorkerClient,
          hasBeenSetup: true,
          publicKey,
          privateKey,
          zkappPublicKey,
          accountExists,
          currentMessages,
        });
      }
    })();
  }, []);

  // -------------------------------------------------------
  // Wait for account to exist, if it didn't
  useEffect(() => {
    (async () => {
      if (state.hasBeenSetup && !state.accountExists) {
        for (;;) {
          console.log('checking if account exists...');
          const res = await state.zkappWorkerClient!.fetchAccount({
            publicKey: state.publicKey!,
          });
          const accountExists = res.error == null;
          if (accountExists) {
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        setState({ ...state, accountExists: true });
      }
    })();
  }, [state.hasBeenSetup]);

  // -------------------------------------------------------
  // Send a transaction

  const makeOnUpdate = (i: number) => {
    return async () => {
      setState({ ...state, creatingTransaction: true });

      const message = state.userMessages[i];
      console.log('Message: ', message);

      await state.zkappWorkerClient!.fetchAccount({
        publicKey: state.publicKey!,
      });
      await state.zkappWorkerClient!.createUpdateTransaction(
        state.privateKey!,
        transactionFee,
        i,
        message
      );

      console.log('creating proof...');
      await state.zkappWorkerClient!.proveUpdateTransaction();

      const transactionHash =
        await state.zkappWorkerClient!.sendUpdateTransaction();

      console.log(
        'See transaction at https://berkeley.minaexplorer.com/transaction/' +
          transactionHash
      );

      setState({ ...state, creatingTransaction: false });
    };
  };

  // -------------------------------------------------------
  // Refresh the current state

  const onRefreshCurrentNum = async () => {
    console.log('getting zkApp state...');
    await state.zkappWorkerClient!.fetchAccount({
      publicKey: state.zkappPublicKey!,
    });
    const currentMessages = await state.zkappWorkerClient!.getMessages();
    console.log('current state:', currentMessages.toString());

    setState({ ...state, currentMessages });
  };

  // -------------------------------------------------------
  // Create UI elements

  let setupText = state.hasBeenSetup
    ? 'SnarkyJS Ready'
    : 'Setting up SnarkyJS...';
  let setup = <div> {setupText} </div>;

  let accountDoesNotExist;
  if (state.hasBeenSetup && !state.accountExists) {
    const faucetLink =
      'https://faucet.minaprotocol.com/?address=' + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <div>
        Account does not exist. Please visit the faucet to fund this account
        <a href={faucetLink} target="_blank" rel="noreferrer">
          {' '}
          [Link]{' '}
        </a>
      </div>
    );
  }

  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {
    var messages = [];
    for (let i = 0; i < 2 ** (8 - 1); i++) {
      let input;
      let onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userMessages = state.userMessages;
        userMessages[i] = event.target.value;
        setState({ ...state, userMessages });
      };

      let signer;
      if (state.currentMessages!.has(i)) {
        const value = state.currentMessages!.get(i)!;
        const publicKeyFields = value.slice(0, 2);
        const publicKey = PublicKey.fromGroup(
          new Group({ x: publicKeyFields[0], y: publicKeyFields[1] })
        );
        const messageFields = value.slice(2);
        const messageChars = messageFields.map((f) => new Character(f));
        const messageCS = CircuitString.fromCharacters(messageChars);
        const message = messageCS.toString();
        input = (
          <input key={i} onChange={onChange}>
            {' '}
            {message}{' '}
          </input>
        );
        const signerLink =
          'https://berkeley.minaexplorer.com/wallet/' + publicKey.toString();
        signer = (
          <a href={signerLink} target="_blank" rel="noreferrer">
            {' '}
            signer{' '}
          </a>
        );
        publicKey.toString();
      } else {
        input = <input key={i} onChange={onChange}></input>;
      }
      let button = <button onClick={makeOnUpdate(i)}> set </button>;
      messages.push(
        <div key={i}>
          {' '}
          {i}: {input} {signer} {button}
        </div>
      );
    }
    mainContent = (
      <div>
        <button onClick={onRefreshCurrentNum}> Get Latest State </button>
        {messages}
      </div>
    );
  }

  return (
    <div>
      {setup}
      {accountDoesNotExist}
      {mainContent}
    </div>
  );
}
