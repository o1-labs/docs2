import {
  Field,
  SmartContract,
  state,
  State,
  method,
  PublicKey,
  Signature,
} from 'o1js';

// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY =
  'B62qoAE4rBRuTgC42vqvEyUqCGhaZsW58SKVW4Ht8aYqP9UTvxFWBgy';

export class OracleExample extends SmartContract {
  // Define contract state

  // Define contract events

  init() {
    super.init();
    // Initialize contract state

    // Specify that caller should include signature with tx instead of proof
    this.requireSignature();
  }

  @method verify(id: Field, creditScore: Field, signature: Signature) {
    // Get the oracle public key from the contract state

    // Evaluate whether the signature is valid for the provided data

    // Check that the signature is valid

    // Check that the provided credit score is greater than 700

    // Emit an event containing the verified users id
    
  }
}
