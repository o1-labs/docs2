import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  UInt64,
  PublicKey,
  Signature,
  Poseidon,
  MerkleWitness,
} from 'snarkyjs';

class MerkleWitness20 extends MerkleWitness(20) {}

const tokenSymbol = 'MYTKN';

export class WhitelistedTokenContract extends SmartContract {
  @state(UInt64) totalAmountInCirculation = State<UInt64>();
  @state(Field) whitelistTreeRoot = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);

    const permissionToEdit = Permissions.proofOrSignature();

    this.account.permissions.set({
      ...Permissions.default(),
      editState: permissionToEdit,
      setTokenSymbol: permissionToEdit,
      send: permissionToEdit,
      receive: permissionToEdit,
    });
  }

  @method init() {
    super.init();
    this.account.tokenSymbol.set(tokenSymbol);
    this.totalAmountInCirculation.set(UInt64.zero);
  }

  @method initState(whitelistTreeRoot: Field) {
    this.whitelistTreeRoot.set(whitelistTreeRoot);
  }

  @method mint(
    receiverAddress: PublicKey,
    amount: UInt64,
    adminSignature: Signature
  ) {
    let totalAmountInCirculation = this.totalAmountInCirculation.get();
    this.totalAmountInCirculation.assertEquals(totalAmountInCirculation);

    let newTotalAmountInCirculation = totalAmountInCirculation.add(amount);

    adminSignature
      .verify(
        this.address,
        amount.toFields().concat(receiverAddress.toFields())
      )
      .assertTrue();

    this.token.mint({
      address: receiverAddress,
      amount,
    });

    this.totalAmountInCirculation.set(newTotalAmountInCirculation);
  }

  @method addToWhitelist(
    receiverAddress: PublicKey,
    whitelistWitness: MerkleWitness20,
    newWhitelistRoot: Field,
    adminSignature: Signature
  ) {
    const whitelistTreeRoot = this.whitelistTreeRoot.get();
    this.whitelistTreeRoot.assertEquals(whitelistTreeRoot);

    adminSignature.verify(this.address, [newWhitelistRoot]).assertTrue();

    // check leaf was empty
    whitelistWitness.calculateRoot(Field.zero).assertEquals(whitelistTreeRoot);

    // check its the new root
    whitelistWitness
      .calculateRoot(Poseidon.hash(receiverAddress.toFields()))
      .assertEquals(newWhitelistRoot);

    this.whitelistTreeRoot.set(newWhitelistRoot);
  }

  @method sendTokens(
    senderAddress: PublicKey,
    receiverAddress: PublicKey,
    amount: UInt64,
    whitelistWitness: MerkleWitness20
  ) {
    const whitelistTreeRoot = this.whitelistTreeRoot.get();
    this.whitelistTreeRoot.assertEquals(whitelistTreeRoot);

    whitelistWitness
      .calculateRoot(Poseidon.hash(receiverAddress.toFields()))
      .assertEquals(whitelistTreeRoot);

    this.token.send({
      from: senderAddress,
      to: receiverAddress,
      amount,
    });
  }
}
