# SnarkyJS

## Table of contents

### References

- [PublicKey](README.md#publickey)

### Namespaces

- [Encoding](modules/Encoding.md)
- [Encryption](modules/Encryption.md)
- [Experimental](modules/Experimental.md)
- [Mina](modules/Mina.md)
- [Types](modules/Types.md)

### Classes

- [AccountUpdate](classes/AccountUpdate.md)
- [Bool](classes/Bool.md)
- [Character](classes/Character.md)
- [Circuit](classes/Circuit.md)
- [CircuitString](classes/CircuitString.md)
- [CircuitValue](classes/CircuitValue.md)
- [Field](classes/Field.md)
- [Group](classes/Group.md)
- [Int64](classes/Int64.md)
- [Keypair](classes/Keypair.md)
- [Ledger](classes/Ledger.md)
- [MerkleMap](classes/MerkleMap.md)
- [MerkleMapWitness](classes/MerkleMapWitness.md)
- [MerkleTree](classes/MerkleTree.md)
- [PrivateKey](classes/PrivateKey.md)
- [Proof](classes/Proof.md)
- [Scalar](classes/Scalar.md)
- [SelfProof](classes/SelfProof.md)
- [Sign](classes/Sign.md)
- [Signature](classes/Signature.md)
- [SmartContract](classes/SmartContract.md)
- [Token](classes/Token.md)
- [TokenSymbol](classes/TokenSymbol.md)
- [UInt32](classes/UInt32.md)
- [UInt64](classes/UInt64.md)
- [VerificationKey](classes/VerificationKey.md)

### Interfaces

- [Permissions](interfaces/Permissions.md)
- [Provable](interfaces/Provable.md)
- [ProvablePure](interfaces/ProvablePure.md)

### Type Aliases

- [DeployArgs](README.md#deployargs)
- [Empty](README.md#empty)
- [FlexibleProvable](README.md#flexibleprovable)
- [FlexibleProvablePure](README.md#flexibleprovablepure)
- [InferProvable](README.md#inferprovable)
- [JsonProof](README.md#jsonproof)
- [ProvableExtended](README.md#provableextended)
- [Reducer](README.md#reducer)
- [State](README.md#state)
- [Struct](README.md#struct)
- [TransactionStatus](README.md#transactionstatus)
- [Undefined](README.md#undefined)
- [Void](README.md#void)
- [ZkappPublicInput](README.md#zkapppublicinput)

### Variables

- [Empty](README.md#empty-1)
- [Permissions](README.md#permissions)
- [Poseidon](README.md#poseidon)
- [TokenId](README.md#tokenid)
- [Undefined](README.md#undefined-1)
- [Void](README.md#void-1)
- [ZkappPublicInput](README.md#zkapppublicinput-1)
- [isReady](README.md#isready)

### Functions

- [Account](README.md#account)
- [MerkleWitness](README.md#merklewitness)
- [Reducer](README.md#reducer-1)
- [State](README.md#state-1)
- [Struct](README.md#struct-1)
- [addCachedAccount](README.md#addcachedaccount)
- [arrayProp](README.md#arrayprop)
- [checkZkappTransaction](README.md#checkzkapptransaction)
- [circuitMain](README.md#circuitmain)
- [declareMethods](README.md#declaremethods)
- [declareState](README.md#declarestate)
- [fetchAccount](README.md#fetchaccount)
- [fetchEvents](README.md#fetchevents)
- [fetchLastBlock](README.md#fetchlastblock)
- [fetchTransactionStatus](README.md#fetchtransactionstatus)
- [matrixProp](README.md#matrixprop)
- [method](README.md#method)
- [prop](README.md#prop)
- [provable](README.md#provable)
- [provablePure](README.md#provablepure)
- [public\_](README.md#public_)
- [sendZkapp](README.md#sendzkapp)
- [setArchiveGraphqlEndpoint](README.md#setarchivegraphqlendpoint)
- [setGraphqlEndpoint](README.md#setgraphqlendpoint)
- [setGraphqlEndpoints](README.md#setgraphqlendpoints)
- [shutdown](README.md#shutdown)
- [signFeePayer](README.md#signfeepayer)
- [state](README.md#state-2)
- [verify](README.md#verify)

## References

### PublicKey

Re-exports [PublicKey](classes/Types.PublicKey.md)

## Type Aliases

### DeployArgs

Ƭ **DeployArgs**: { `verificationKey?`: { `data`: `string` ; `hash`: `string` \| [`Field`](classes/Field.md)  } ; `zkappKey?`: [`PrivateKey`](classes/PrivateKey.md)  } \| `undefined`

#### Defined in

[lib/zkapp.ts:1508](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1508)

___

### Empty

Ƭ **Empty**: [`Undefined`](README.md#undefined-1)

#### Defined in

[lib/proof_system.ts:80](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L80)

[lib/proof_system.ts:81](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L81)

___

### FlexibleProvable

Ƭ **FlexibleProvable**<`T`\>: [`Provable`](interfaces/Provable.md)<`T`\> \| [`Struct`](README.md#struct)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:77](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L77)

___

### FlexibleProvablePure

Ƭ **FlexibleProvablePure**<`T`\>: [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> \| `StructPure`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:78](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L78)

___

### InferProvable

Ƭ **InferProvable**<`A`\>: `A` extends `Constructor`<infer U\> ? `A` extends [`Provable`](interfaces/Provable.md)<`U`\> ? `U` : `A` extends `Struct`<`U`\> ? `U` : `InferProvableBase`<`A`\> : `InferProvableBase`<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

bindings/lib/provable-snarky.ts:277

___

### JsonProof

Ƭ **JsonProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxProofsVerified` | ``0`` \| ``1`` \| ``2`` |
| `proof` | `string` |
| `publicInput` | `string`[] |
| `publicOutput` | `string`[] |

#### Defined in

[lib/proof_system.ts:187](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L187)

___

### ProvableExtended

Ƭ **ProvableExtended**<`T`, `TJson`\>: [`Provable`](interfaces/Provable.md)<`T`\> & `ProvableExtension`<`T`, `TJson`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TJson` | `any` |

#### Defined in

[lib/circuit_value.ts:67](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L67)

___

### Reducer

Ƭ **Reducer**<`Action`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `Action` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionType` | [`FlexibleProvablePure`](README.md#flexibleprovablepure)<`Action`\> |

#### Defined in

[lib/zkapp.ts:1236](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1236)

[lib/zkapp.ts:1580](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1580)

___

### State

Ƭ **State**<`A`\>: `Object`

Gettable and settable state that can be checked for equality.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assertEquals` | (`a`: `A`) => `void` |
| `assertNothing` | () => `void` |
| `fetch` | () => `Promise`<`undefined` \| `A`\> |
| `fromAppState` | (`appState`: [`Field`](classes/Field.md)[]) => `A` |
| `get` | () => `A` |
| `getAndAssertEquals` | () => `A` |
| `set` | (`a`: `A`) => `void` |

#### Defined in

[lib/state.ts:73](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/state.ts#L73)

[lib/state.ts:20](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/state.ts#L20)

___

### Struct

Ƭ **Struct**<`T`\>: [`ProvableExtended`](README.md#provableextended)<`NonMethods`<`T`\>\> & `Constructor`<`T`\> & { `_isStruct`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:459](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L459)

[lib/circuit_value.ts:72](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L72)

___

### TransactionStatus

Ƭ **TransactionStatus**: ``"INCLUDED"`` \| ``"PENDING"`` \| ``"UNKNOWN"``

INCLUDED: A transaction that is on the longest chain

PENDING: A transaction either in the transition frontier or in transaction pool but is not on the longest chain

UNKNOWN: The transaction has either been snarked, reached finality through consensus or has been dropped

#### Defined in

[lib/fetch.ts:650](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L650)

___

### Undefined

Ƭ **Undefined**: `undefined`

#### Defined in

[lib/proof_system.ts:77](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L77)

[lib/proof_system.ts:78](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L78)

___

### Void

Ƭ **Void**: `undefined`

#### Defined in

[lib/proof_system.ts:82](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L82)

[lib/proof_system.ts:83](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L83)

___

### ZkappPublicInput

Ƭ **ZkappPublicInput**: `Object`

The public input for zkApps consists of certain hashes of the proving
AccountUpdate (and its child accountUpdates) which is constructed during method
execution.

 For SmartContract proving, a method is run twice: First outside the proof, to
obtain the public input, and once in the prover, which takes the public input
as input. The current transaction is hashed again inside the prover, which
asserts that the result equals the input public input, as part of the snark
circuit. The block producer will also hash the transaction they receive and
pass it as a public input to the verifier. Thus, the transaction is fully
constrained by the proof - the proof couldn't be used to attest to a different
transaction.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Field`](classes/Field.md) |
| `calls` | [`Field`](classes/Field.md) |

#### Defined in

[lib/account_update.ts:1935](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L1935)

[lib/account_update.ts:1939](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L1939)

## Variables

### Empty

• **Empty**: `ProvablePureExtended`<`undefined`, ``null``\>

#### Defined in

[lib/proof_system.ts:80](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L80)

[lib/proof_system.ts:81](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L81)

___

### Permissions

• **Permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allImpossible` | () => [`Permissions`](README.md#permissions) |
| `default` | () => [`Permissions`](README.md#permissions) |
| `dummy` | () => [`Permissions`](README.md#permissions) |
| `fromJSON` | (`permissions`: { `access`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editActionState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `send`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](modules/Types.Json.md#authrequired)  }) => [`Permissions`](README.md#permissions) |
| `fromString` | (`permission`: [`AuthRequired`](modules/Types.Json.md#authrequired)) => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `impossible` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `initial` | () => [`Permissions`](README.md#permissions) |
| `none` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proof` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proofOrSignature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `signature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |

#### Defined in

[lib/account_update.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L163)

[lib/account_update.ts:235](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L235)

___

### Poseidon

• `Const` **Poseidon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Sponge` | typeof `Sponge` |
| `hash` | (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) |
| `hashToGroup` | (`input`: [`Field`](classes/Field.md)[]) => { `x`: [`Field`](classes/Field.md) ; `y`: { `x0`: [`Field`](classes/Field.md) ; `x1`: [`Field`](classes/Field.md)  }  } |
| `initialState` | () => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |
| `update` | (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |

#### Defined in

[lib/hash.ts:43](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/hash.ts#L43)

___

### TokenId

• `Const` **TokenId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](classes/Field.md)) => `void` |
| `default` | [`Field`](classes/Field.md) |
| `fromFields` | (`x`: [`Field`](classes/Field.md)[], `aux`: `any`[]) => [`Field`](classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](classes/Field.md)) => [`Field`](classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](classes/Field.md)) => { `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } |
| `derive` | (`tokenOwner`: [`PublicKey`](classes/Types.PublicKey.md), `parentTokenId`: [`Field`](classes/Field.md)) => [`Field`](classes/Field.md) |
| `emptyValue` | () => [`Field`](classes/Field.md) |
| `fromBase58` | (`base58`: `string`) => [`Field`](classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](classes/Field.md) |
| `sizeInFields` | () => `number` |
| `toBase58` | (`t`: [`Field`](classes/Field.md)) => `string` |
| `toJSON` | (`x`: [`Field`](classes/Field.md)) => `string` |

#### Defined in

[lib/account_update.ts:602](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L602)

___

### Undefined

• **Undefined**: `ProvablePureExtended`<`undefined`, ``null``\>

#### Defined in

[lib/proof_system.ts:77](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L77)

[lib/proof_system.ts:78](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L78)

___

### Void

• **Void**: `ProvablePureExtended`<`void`, ``null``\>

#### Defined in

[lib/proof_system.ts:82](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L82)

[lib/proof_system.ts:83](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L83)

___

### ZkappPublicInput

• **ZkappPublicInput**: [`ProvablePure`](interfaces/ProvablePure.md)<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }\> & `ProvableExtension`<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }, { `accountUpdate`: `string` = Field; `calls`: `string` = Field }\>

#### Defined in

[lib/account_update.ts:1935](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L1935)

[lib/account_update.ts:1939](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L1939)

___

### isReady

• **isReady**: `Promise`<`undefined`\>

**`Deprecated`**

`await isReady` is no longer needed. Remove it from your code.

#### Defined in

[snarky.d.ts:1299](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L1299)

## Functions

### Account

▸ **Account**(`address`, `tokenId?`): `Account`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](classes/Field.md) |

#### Returns

`Account`

#### Defined in

[lib/zkapp.ts:1515](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1515)

___

### MerkleWitness

▸ **MerkleWitness**(`height`): typeof `BaseMerkleWitness`

Returns a circuit-compatible Witness for a specific Tree height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | Height of the Merkle Tree that this Witness belongs to. |

#### Returns

typeof `BaseMerkleWitness`

A circuit-compatible Merkle Witness.

#### Defined in

[lib/merkle_tree.ts:236](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L236)

___

### Reducer

▸ **Reducer**<`T`, `A`\>(`reducer`): `ReducerReturn`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FlexibleProvablePure`](README.md#flexibleprovablepure)<`any`\> |
| `A` | extends `any` = [`InferProvable`](README.md#inferprovable)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Object` |
| `reducer.actionType` | `T` |

#### Returns

`ReducerReturn`<`A`\>

#### Defined in

[lib/zkapp.ts:1580](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1580)

___

### State

▸ **State**<`A`\>(): [`State`](README.md#state)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Returns

[`State`](README.md#state)<`A`\>

#### Defined in

[lib/state.ts:73](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/state.ts#L73)

___

### Struct

▸ **Struct**<`A`, `T`, `J`, `Pure`\>(`type`, `options?`): (`value`: `T`) => `T` & { `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](interfaces/Provable.md)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

`Struct` lets you declare composite types for use in snarkyjs circuits.

These composite types can be passed in as arguments to smart contract methods, used for on-chain state variables
or as event / action types.

Here's an example of creating a "Voter" struct, which holds a public key and a collection of votes on 3 different proposals:
```ts
let Vote = { hasVoted: Bool, inFavor: Bool };

class Voter extends Struct({
  publicKey: PublicKey,
  votes: [Vote, Vote, Vote]
}) {}

// use Voter as SmartContract input:
class VoterContract extends SmartContract {
  \@method register(voter: Voter) {
    // ...
  }
}
```
In this example, there are no instance methods on the class. This makes `Voter` type-compatible with an anonymous object of the form
`{ publicKey: PublicKey, votes: Vote[] }`.
This mean you don't have to create instances by using `new Voter(...)`, you can operate with plain objects:
```ts
voterContract.register({ publicKey, votes });
```

On the other hand, you can also add your own methods:
```ts
class Voter extends Struct({
  publicKey: PublicKey,
  votes: [Vote, Vote, Vote]
}) {
  vote(index: number, inFavor: Bool) {
    let vote = this.votes[i];
    vote.hasVoted = Bool(true);
    vote.inFavor = inFavor;
  }
}
```

In this case, you'll need the constructor to create instances of `Voter`. It always takes as input the plain object:
```ts
let emptyVote = { hasVoted: Bool(false), inFavor: Bool(false) };
let voter = new Voter({ publicKey, votes: Array(3).fill(emptyVote) });
voter.vote(1, Bool(true));
```

In addition to creating types composed of Field elements, you can also include auxiliary data which does not become part of the proof.
This, for example, allows you to re-use the same type outside snarkyjs methods, where you might want to store additional metadata.

To declare non-proof values of type `string`, `number`, etc, you can use the built-in objects `String`, `Number`, etc.
Here's how we could add the voter's name (a string) as auxiliary data:
```ts
class Voter extends Struct({
  publicKey: PublicKey,
  votes: [Vote, Vote, Vote],
  fullName: String
}) {}
```

Again, it's important to note that this doesn't enable you to prove anything about the `fullName` string.
From the circuit point of view, it simply doesn't exist!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `T` | extends `unknown` = [`InferProvable`](README.md#inferprovable)<`A`\> |
| `J` | extends `unknown` = `InferJson`<`A`\> |
| `Pure` | extends `boolean` = `IsPure`<`A`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `A` | Object specifying the layout of the `Struct` |
| `options` | `Object` | Advanced option which allows you to force a certain order of object keys |
| `options.customObjectKeys?` | `string`[] | - |

#### Returns

(`value`: `T`) => `T` & { `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](interfaces/Provable.md)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

Class which you can extend

#### Defined in

[lib/circuit_value.ts:459](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L459)

___

### addCachedAccount

▸ **addCachedAccount**(`partialAccount`, `graphqlEndpoint?`): `void`

Adds an account to the local cache, indexed by a GraphQL endpoint.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `partialAccount` | `PartialAccount` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:351](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L351)

___

### arrayProp

▸ **arrayProp**<`T`\>(`elementType`, `length`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`FlexibleProvable`](README.md#flexibleprovable)<`T`\> |
| `length` | `number` |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[lib/circuit_value.ts:364](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L364)

___

### checkZkappTransaction

▸ **checkZkappTransaction**(`txnId`): `Promise`<{ `failureReason`: `string`[] ; `success`: `boolean` = false } \| { `failureReason`: ``null`` = null; `success`: `boolean` = true }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txnId` | `string` |

#### Returns

`Promise`<{ `failureReason`: `string`[] ; `success`: `boolean` = false } \| { `failureReason`: ``null`` = null; `success`: `boolean` = true }\>

#### Defined in

[lib/fetch.ts:498](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L498)

___

### circuitMain

▸ **circuitMain**(`target`, `propertyName`, `_descriptor?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyName` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

#### Returns

`any`

#### Defined in

[lib/circuit.ts:272](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L272)

___

### declareMethods

▸ **declareMethods**<`T`\>(`SmartContract`, `methodArguments`): `void`

`declareMethods` can be used in place of the `@method` decorator
to declare SmartContract methods along with their list of arguments.
It should be placed _after_ the class declaration.
Here is an example of declaring a method `update`, which takes a single argument of type `Field`:
```ts
class MyContract extends SmartContract {
  // ...
  update(x: Field) {
    // ...
  }
}
declareMethods(MyContract, { update: [Field] }); // `[Field]` is the list of arguments!
```
Note that a method of the same name must still be defined on the class, just without the decorator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `T` |
| `methodArguments` | `Record`<`string`, [`Provable`](interfaces/Provable.md)<`unknown`\>[]\> |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:1566](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1566)

___

### declareState

▸ **declareState**<`T`\>(`SmartContract`, `states`): `void`

`declareState` can be used in place of the `@state` decorator to declare on-chain state on a SmartContract.
It should be placed _after_ the class declaration.
Here is an example of declaring a state property `x` of type `Field`.
```ts
class MyContract extends SmartContract {
  x = State<Field>();
  // ...
}
declareState(MyContract, { x: Field });
```

If you're using pure JS, it's _not_ possible to use the built-in class field syntax,
i.e. the following will _not_ work:

```js
// THIS IS WRONG IN JS!
class MyContract extends SmartContract {
  x = State();
}
declareState(MyContract, { x: Field });
```

Instead, add a constructor where you assign the property:
```js
class MyContract extends SmartContract {
  constructor(x) {
    super();
    this.x = State();
  }
}
declareState(MyContract, { x: Field });
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `T` |
| `states` | `Record`<`string`, [`FlexibleProvablePure`](README.md#flexibleprovablepure)<`unknown`\>\> |

#### Returns

`void`

#### Defined in

[lib/state.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/state.ts#L163)

___

### fetchAccount

▸ **fetchAccount**(`accountInfo`, `graphqlEndpoint?`, `«destructured»?`): `Promise`<{ `account`: [`Account`](modules/Types.md#account-1) ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

Gets account information on the specified publicKey by performing a GraphQL query
to the specified endpoint. This will call the 'GetAccountInfo' query which fetches
zkapp related account information.

If an error is returned by the specified endpoint, an error is thrown. Otherwise,
the data is returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accountInfo` | `Object` | `undefined` | - |
| `accountInfo.publicKey` | `string` \| [`PublicKey`](classes/Types.PublicKey.md) | `undefined` | - |
| `accountInfo.tokenId?` | `string` \| [`Field`](classes/Field.md) | `undefined` | - |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` | The graphql endpoint to fetch from |
| `«destructured»` | `Object` | `{}` | - |
| › `timeout` | `undefined` \| `number` | `undefined` | - |

#### Returns

`Promise`<{ `account`: [`Account`](modules/Types.md#account-1) ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

zkapp information on the specified account or an error is thrown

#### Defined in

[lib/fetch.ts:131](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L131)

___

### fetchEvents

▸ **fetchEvents**(`accountInfo`, `graphqlEndpoint?`, `filterOptions?`): `Promise`<{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: { `data`: `string`[] ; `transactionInfo`: { `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

Asynchronously fetches event data for an account from the Mina Archive Node GraphQL API.

**`Async`**

**`Throws`**

If the GraphQL request fails or the response is invalid.

**`Example`**

```ts
const accountInfo = { publicKey: 'B62qiwmXrWn7Cok5VhhB3KvCwyZ7NHHstFGbiU5n7m8s2RqqNW1p1wF' };
const events = await fetchEvents(accountInfo);
console.log(events);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accountInfo` | `Object` | `undefined` | The account information object. |
| `accountInfo.publicKey` | `string` | `undefined` | The account public key. |
| `accountInfo.tokenId?` | `string` | `undefined` | The optional token ID for the account. |
| `graphqlEndpoint?` | `string` | `networkConfig.archiveEndpoint` | The GraphQL endpoint to query. Defaults to the Archive Node GraphQL API. |
| `filterOptions?` | `EventActionFilterOptions` | `{}` | The optional filter options object. |

#### Returns

`Promise`<{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: { `data`: `string`[] ; `transactionInfo`: { `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

A promise that resolves to an array of objects containing event data, block information and transaction information for the account.

#### Defined in

[lib/fetch.ts:820](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L820)

___

### fetchLastBlock

▸ **fetchLastBlock**(`graphqlEndpoint?`): `Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

Fetches the last block on the Mina network.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Defined in

[lib/fetch.ts:394](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L394)

___

### fetchTransactionStatus

▸ **fetchTransactionStatus**(`txId`, `graphqlEndpoint?`): `Promise`<[`TransactionStatus`](README.md#transactionstatus)\>

Fetches the status of a transaction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `txId` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`<[`TransactionStatus`](README.md#transactionstatus)\>

#### Defined in

[lib/fetch.ts:625](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L625)

___

### matrixProp

▸ **matrixProp**<`T`\>(`elementType`, `nRows`, `nColumns`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`FlexibleProvable`](README.md#flexibleprovable)<`T`\> |
| `nRows` | `number` |
| `nColumns` | `number` |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[lib/circuit_value.ts:373](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L373)

___

### method

▸ **method**<`T`\>(`target`, `methodName`, `descriptor`): `void`

A decorator to use in a zkApp to mark a method as callable by anyone.
You can use inside your zkApp class as:

```
\@method myMethod(someArg: Field) {
  // your code here
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](classes/SmartContract.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` & { `constructor`: `any`  } |
| `methodName` | keyof `T` & `string` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:98](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L98)

___

### prop

▸ **prop**(`this`, `target`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `target` | `any` |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:264](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L264)

___

### provable

▸ **provable**<`A`\>(`typeObj`, `options?`): `ProvableExtended`<[`InferProvable`](README.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeObj` | `A` |
| `options?` | `Object` |
| `options.customObjectKeys?` | `string`[] |
| `options.isPure?` | `boolean` |

#### Returns

`ProvableExtended`<[`InferProvable`](README.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

#### Defined in

bindings/lib/provable-snarky.ts:47

___

### provablePure

▸ **provablePure**<`A`\>(`typeObj`, `options?`): [`ProvablePure`](interfaces/ProvablePure.md)<[`InferProvable`](README.md#inferprovable)<`A`\>\> & `ProvableExtension`<[`InferProvable`](README.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeObj` | `A` |
| `options` | `Object` |
| `options.customObjectKeys?` | `string`[] |

#### Returns

[`ProvablePure`](interfaces/ProvablePure.md)<[`InferProvable`](README.md#inferprovable)<`A`\>\> & `ProvableExtension`<[`InferProvable`](README.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

#### Defined in

bindings/lib/provable-snarky.ts:224

___

### public\_

▸ **public_**(`target`, `_key`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `_key` | `string` \| `symbol` |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[lib/circuit.ts:224](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L224)

___

### sendZkapp

▸ **sendZkapp**(`json`, `graphqlEndpoint?`, `«destructured»?`): `Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

Sends a zkApp command (transaction) to the specified GraphQL endpoint.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |
| `«destructured»` | `Object` | `{}` |
| › `timeout` | `undefined` \| `number` | `undefined` |

#### Returns

`Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

#### Defined in

[lib/fetch.ts:655](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L655)

___

### setArchiveGraphqlEndpoint

▸ **setArchiveGraphqlEndpoint**(`graphqlEndpoint`): `void`

Sets up a GraphQL endpoint to be used for fetching information from an Archive Node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:100](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L100)

___

### setGraphqlEndpoint

▸ **setGraphqlEndpoint**(`graphqlEndpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:78](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L78)

___

### setGraphqlEndpoints

▸ **setGraphqlEndpoints**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `string`[] |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:71](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/fetch.ts#L71)

___

### shutdown

▸ **shutdown**(): `Promise`<`undefined`\>

**`Deprecated`**

`shutdown()` is no longer needed, and is a no-op. Remove it from your code.

#### Returns

`Promise`<`undefined`\>

#### Defined in

[snarky.d.ts:1294](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L1294)

___

### signFeePayer

▸ **signFeePayer**(`transactionJson`, `feePayerKey`, `«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionJson` | `string` |
| `feePayerKey` | `string` \| [`PrivateKey`](classes/PrivateKey.md) |
| `«destructured»` | `Object` |

#### Returns

`string`

#### Defined in

[lib/zkapp.ts:1523](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/zkapp.ts#L1523)

___

### state

▸ **state**<`A`\>(`stateType`): (`target`: [`SmartContract`](classes/SmartContract.md) & { `constructor`: `any`  }, `key`: `string`, `_descriptor?`: `PropertyDescriptor`) => `void`

A decorator to use within a zkapp to indicate what will be stored on-chain.
For example, if you want to store a field element `some_state` in a zkapp,
you can use the following in the declaration of your zkapp:

```
@state(Field) some_state = State<Field>();
```

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateType` | [`FlexibleProvablePure`](README.md#flexibleprovablepure)<`A`\> |

#### Returns

`fn`

▸ (`target`, `key`, `_descriptor?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SmartContract`](classes/SmartContract.md) & { `constructor`: `any`  } |
| `key` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

[lib/state.ts:87](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/state.ts#L87)

___

### verify

▸ **verify**(`proof`, `verificationKey`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | [`JsonProof`](README.md#jsonproof) \| [`Proof`](classes/Proof.md)<`any`, `any`\> |
| `verificationKey` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/proof_system.ts:157](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L157)
