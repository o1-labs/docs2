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
  // Define zkApp state
  @state(PublicKey) oraclePublicKey = State<PublicKey>();

  // Define zkApp events
  events = {
    verified: Field,
  };

  init() {
    // Initialize zkApp state
    super.init();
    // Set the oracle public key as zkApp on-chain state
    this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
    // Specify that caller should include signature with tx instead of proof
    this.requireSignature();
  }

  @method async verify(id: Field, creditScore: Field, signature: Signature) {
    // Get the oracle public key from the zkApp state
    const oraclePublicKey = this.oraclePublicKey.get();
    this.oraclePublicKey.requireEquals(oraclePublicKey);
    // Evaluate whether the signature is valid for the provided data
    const validSignature = signature.verify(oraclePublicKey, [id, creditScore]);
    // Check that the signature is valid
    validSignature.assertTrue();
    // Check that the provided credit score is 700 or higher
    creditScore.assertGreaterThanOrEqual(Field(700));
    // Emit an event containing the verified user's id
    this.emitEvent('verified', id);
  }
}
