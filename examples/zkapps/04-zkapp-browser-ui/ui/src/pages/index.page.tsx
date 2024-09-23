import { Field, PublicKey } from 'o1js';
import { useEffect, useState } from 'react';
import GradientBG from '../components/GradientBG.js';
import styles from '../styles/Home.module.css';
import './reactCOIServiceWorker';
import ZkappWorkerClient from './zkappWorkerClient';

let transactionFee = 0.1;
const ZKAPP_ADDRESS = 'B62qpXPvmKDf4SaFJynPsT6DyvuxMS9H1pT4TGonDT26m599m7dS9gP';

export default function Home() {
  const [state, setState] = useState({
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKeyBase58: '',
    zkappPublicKeyBase58: '',
    creatingTransaction: false,
  });
  
  const [zkappWorkerClient, setZkappWorkerClient] = useState<null | ZkappWorkerClient>(null);
  const [hasWallet, setHasWallet] = useState<null | boolean>(null);
  const [displayText, setDisplayText] = useState('');
  const [transactionlink, setTransactionLink] = useState('');

  // -------------------------------------------------------
  // Do Setup

  useEffect(() => {
    const setup = async () => {
      try {
        if (!state.hasBeenSetup) {
          setDisplayText('Loading web worker...');
          console.log('Loading web worker...');
          const zkappWorkerClient = new ZkappWorkerClient();
          setZkappWorkerClient(zkappWorkerClient);

          await new Promise((resolve) => setTimeout(resolve, 5000));

          setDisplayText('Done loading web worker');
          console.log('Done loading web worker');

          await zkappWorkerClient.setActiveInstanceToDevnet();

          const mina = (window as any).mina;

          if (mina == null) {
            setHasWallet(false);
            setDisplayText('Wallet not found.');
            return;
          }

          const publicKeyBase58: string = (await mina.requestAccounts())[0];
          const publicKey = PublicKey.fromBase58(publicKeyBase58);

          console.log(`Using key:${publicKey.toBase58()}`);
          setDisplayText(`Using key:${publicKey.toBase58()}`);

          setDisplayText('Checking if fee payer account exists...');
          console.log('Checking if fee payer account exists...');

          console.log(`Public key to load: ${publicKeyBase58}`);

          const res = await zkappWorkerClient.fetchAccount(
          publicKeyBase58,
          );
          const accountExists = res.error == null;

          await zkappWorkerClient.loadContract();

          console.log('Compiling zkApp...');
          setDisplayText('Compiling zkApp...');
          await zkappWorkerClient.compileContract();
          console.log('zkApp compiled');
          setDisplayText('zkApp compiled...');

          const zkappPublicKey = PublicKey.fromBase58(ZKAPP_ADDRESS);

          await zkappWorkerClient.initZkappInstance(ZKAPP_ADDRESS);

          console.log('Getting zkApp state...');
          setDisplayText('Getting zkApp state...');
          await zkappWorkerClient.fetchAccount(ZKAPP_ADDRESS);
          const currentNum = await zkappWorkerClient.getNum();
          console.log(`Current state in zkApp: ${currentNum.toString()}`);
          setDisplayText('');
          
          setHasWallet(true);
          setState({
            ...state,
            hasBeenSetup: true,
            publicKeyBase58,
            zkappPublicKeyBase58: ZKAPP_ADDRESS,
            accountExists,
            currentNum,
          });
        }
      } catch (error: any) {
        setDisplayText(`Error during setup: ${error.message}`);
        console.error('Error during setup:', error);
      }
    };

    setup();
  }, []);

  // -------------------------------------------------------
  // Wait for account to exist, if it didn't

  useEffect(() => {
    const checkAccountExists = async () => {
      console.log('inside', state.hasBeenSetup)
      console.log('inside ae', state.accountExists)
    
      if (state.hasBeenSetup && !state.accountExists) {
        for (;;) {
          setDisplayText('Checking if fee payer account exists...');
          console.log('Checking if fee payer account exists...');
          const res = await zkappWorkerClient!.fetchAccount(state.publicKeyBase58);
          console.log('response', res)
          const accountExists = res.error == null;
          if (accountExists) {
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        setState({ ...state, accountExists: true });
      }
    };

    checkAccountExists();
  }, [state.hasBeenSetup]);

  // -------------------------------------------------------
  // Send a transaction

  const onSendTransaction = async () => {
    setState({ ...state, creatingTransaction: true });

    setDisplayText('Creating a transaction...');
    console.log('Creating a transaction...');

    await zkappWorkerClient!.fetchAccount(state.publicKeyBase58);

    await zkappWorkerClient!.createUpdateTransaction();

    setDisplayText('Creating proof...');
    console.log('Creating proof...');
    await zkappWorkerClient!.proveUpdateTransaction();

    console.log('Requesting send transaction...');
    setDisplayText('Requesting send transaction...');
    const transactionJSON = await zkappWorkerClient!.getTransactionJSON();

    setDisplayText('Getting transaction JSON...');
    console.log('Getting transaction JSON...');
    const { hash } = await (window as any).mina.sendTransaction({
      transaction: transactionJSON,
      feePayer: {
        fee: transactionFee,
        memo: '',
      },
    });

    const transactionLink = `https://minascan.io/devnet/tx/${hash}`;
    console.log(`View transaction at ${transactionLink}`);

    setTransactionLink(transactionLink);
    setDisplayText(transactionLink);

    setState({ ...state, creatingTransaction: false });
  };

  // -------------------------------------------------------
  // Refresh the current state

  const onRefreshCurrentNum = async () => {
    console.log('Getting zkApp state...');
    setDisplayText('Getting zkApp state...');

    await zkappWorkerClient!.fetchAccount(state.zkappPublicKeyBase58!);
    const currentNum = await zkappWorkerClient!.getNum();
    setState({ ...state, currentNum });
    console.log(`Current state in zkApp: ${currentNum.toString()}`);
    setDisplayText('');
  };

  // -------------------------------------------------------
  // Create UI elements

  let hasWallet;
  if (state.hasWallet != null && !state.hasWallet) {
    const auroLink = 'https://www.aurowallet.com/';
    const auroLinkElem = (
      <a href={auroLink} target="_blank" rel="noreferrer">
        Install Auro wallet here
      </a>
    );
    hasWallet = <div>Could not find a wallet. {auroLinkElem}</div>;
  }

  const stepDisplay = transactionlink ? (
    <a
      href={transactionlink}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'underline' }}
    >
      View transaction
    </a>
  ) : (
    displayText
  );

  let setup = (
    <div
      className={styles.start}
      style={{ fontWeight: 'bold', fontSize: '1.5rem', paddingBottom: '5rem' }}
    >
      {stepDisplay}
      {hasWallet}
    </div>
  );

  let accountDoesNotExist;
  if (state.hasBeenSetup && !state.accountExists) {
    const faucetLink =
      'https://faucet.minaprotocol.com/?address=' + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <div>
        <span style={{ paddingRight: '1rem' }}>Account does not exist.</span>
        <a href={faucetLink} target="_blank" rel="noreferrer">
          Visit the faucet to fund this fee payer account
        </a>
      </div>
    );
  }

  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {
    mainContent = (
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.center} style={{ padding: 0 }}>
          Current state in zkApp: {state.currentNum!.toString()}{' '}
        </div>
        <button
          className={styles.card}
          onClick={onSendTransaction}
          disabled={state.creatingTransaction}
        >
          Send Transaction
        </button>
        <button className={styles.card} onClick={onRefreshCurrentNum}>
          Get Latest State
        </button>
      </div>
    );
  }

  return (
    <GradientBG>
      <div className={styles.main} style={{ padding: 0 }}>
        <div className={styles.center} style={{ padding: 0 }}>
          {setup}
          {accountDoesNotExist}
          {mainContent}
        </div>
      </div>
    </GradientBG>
  );
}
