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
- [ProvableExtended](README.md#provableextended)
- [Reducer](README.md#reducer)
- [State](README.md#state)
- [ZkappPublicInput](README.md#zkapppublicinput)

### Variables

- [Permissions](README.md#permissions)
- [Poseidon](README.md#poseidon)
- [ZkappPublicInput](README.md#zkapppublicinput-1)
- [isReady](README.md#isready)

### Functions

- [Account](README.md#account)
- [MerkleWitness](README.md#merklewitness)
- [Reducer](README.md#reducer-1)
- [State](README.md#state-1)
- [Struct](README.md#struct)
- [addCachedAccount](README.md#addcachedaccount)
- [arrayProp](README.md#arrayprop)
- [circuitMain](README.md#circuitmain)
- [declareMethods](README.md#declaremethods)
- [declareState](README.md#declarestate)
- [deploy](README.md#deploy)
- [fetchAccount](README.md#fetchaccount)
- [fetchLastBlock](README.md#fetchlastblock)
- [getSrs](README.md#getsrs)
- [matrixProp](README.md#matrixprop)
- [method](README.md#method)
- [prop](README.md#prop)
- [provable](README.md#provable)
- [provablePure](README.md#provablepure)
- [public\_](README.md#public_)
- [recoverVerificationKey](README.md#recoververificationkey)
- [sendZkapp](README.md#sendzkapp)
- [serializeVerificationKey](README.md#serializeverificationkey)
- [setGraphqlEndpoint](README.md#setgraphqlendpoint)
- [shutdown](README.md#shutdown)
- [signFeePayer](README.md#signfeepayer)
- [state](README.md#state-2)
- [verify](README.md#verify)
- [zkappCommandToJson](README.md#zkappcommandtojson)

## References

### PublicKey

Re-exports [PublicKey](classes/Types.PublicKey.md)

## Type Aliases

### DeployArgs

Ƭ **DeployArgs**: { `verificationKey?`: { `data`: `string` ; `hash`: `string` \| [`Field`](classes/Field.md)  } ; `zkappKey?`: [`PrivateKey`](classes/PrivateKey.md)  } \| `undefined`

#### Defined in

[lib/zkapp.ts:1325](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1325)

___

### ProvableExtended

Ƭ **ProvableExtended**<`T`, `TJson`\>: [`Provable`](interfaces/Provable.md)<`T`\> & `ProvableExtension`<`T`, `TJson`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TJson` | `any` |

#### Defined in

[lib/circuit_value.ts:462](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L462)

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
| `actionType` | [`ProvablePure`](interfaces/ProvablePure.md)<`Action`\> |

#### Defined in

[lib/zkapp.ts:1093](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1093)

[lib/zkapp.ts:1479](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1479)

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
| `get` | () => `A` |
| `set` | (`a`: `A`) => `void` |

#### Defined in

[lib/state.ts:25](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/state.ts#L25)

[lib/state.ts:18](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/state.ts#L18)

___

### ZkappPublicInput

Ƭ **ZkappPublicInput**: `Object`

The public input for zkApps consists of certain hashes of the proving AccountUpdate (and its child accountUpdates) which is constructed during method execution.

 For SmartContract proving, a method is run twice: First outside the proof, to obtain the public input, and once in the prover,
 which takes the public input as input. The current transaction is hashed again inside the prover, which asserts that the result equals the input public input,
 as part of the snark circuit. The block producer will also hash the transaction they receive and pass it as a public input to the verifier.
 Thus, the transaction is fully constrained by the proof - the proof couldn't be used to attest to a different transaction.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Field`](classes/Field.md) |
| `calls` | [`Field`](classes/Field.md) |

#### Defined in

[lib/account_update.ts:1677](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L1677)

[lib/account_update.ts:1678](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L1678)

## Variables

### Permissions

• **Permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | () => [`Permissions`](README.md#permissions) |
| `dummy` | () => [`Permissions`](README.md#permissions) |
| `fromJSON` | (`permissions`: { `editSequenceState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `send`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](modules/Types.Json.md#authrequired)  }) => [`Permissions`](README.md#permissions) |
| `fromString` | (`permission`: [`AuthRequired`](modules/Types.Json.md#authrequired)) => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `impossible` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `initial` | () => [`Permissions`](README.md#permissions) |
| `none` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proof` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proofOrSignature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `signature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |

#### Defined in

[lib/account_update.ts:156](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L156)

[lib/account_update.ts:220](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L220)

___

### Poseidon

• `Const` **Poseidon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Sponge` | typeof `Sponge` |
| `get initialState()` | [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |
| `hash` | (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) |
| `update` | (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |

#### Defined in

[lib/hash.ts:36](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/hash.ts#L36)

___

### ZkappPublicInput

• **ZkappPublicInput**: [`ProvablePure`](interfaces/ProvablePure.md)<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }\> & `ProvableExtension`<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }, { `accountUpdate`: `string` = Field; `calls`: `string` = Field }\>

#### Defined in

[lib/account_update.ts:1677](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L1677)

[lib/account_update.ts:1678](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L1678)

___

### isReady

• **isReady**: `Promise`<`undefined`\>

A Promise that resolves when SnarkyJS is ready to be used

#### Defined in

[snarky.d.ts:1185](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L1185)

## Functions

### Account

▸ **Account**(`address`, `tokenId?`): `PreconditionClassType`<`AccountPrecondition`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](classes/Field.md) |

#### Returns

`PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/zkapp.ts:1382](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1382)

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

[lib/merkle_tree.ts:215](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/merkle_tree.ts#L215)

___

### Reducer

▸ **Reducer**<`T`, `A`\>(`reducer`): `ReducerReturn`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProvablePure`](interfaces/ProvablePure.md)<`any`, `T`\> |
| `A` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Object` |
| `reducer.actionType` | `T` |

#### Returns

`ReducerReturn`<`A`\>

#### Defined in

[lib/zkapp.ts:1479](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1479)

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

[lib/state.ts:25](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/state.ts#L25)

___

### Struct

▸ **Struct**<`A`, `T`, `J`, `Pure`\>(`type`, `options?`): (`value`: `T`) => `T` & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](interfaces/Provable.md)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

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
| `T` | extends `unknown` = `InferCircuitValue`<`A`\> |
| `J` | extends `unknown` = `InferJson`<`A`\> |
| `Pure` | extends `boolean` = `IsPure`<`A`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `A` | Object specifying the layout of the `Struct` |
| `options` | `Object` | Advanced option which allows you to force a certain order of object keys |
| `options.customObjectKeys?` | `string`[] | - |

#### Returns

(`value`: `T`) => `T` & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](interfaces/Provable.md)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

Class which you can extend

#### Defined in

[lib/circuit_value.ts:720](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L720)

___

### addCachedAccount

▸ **addCachedAccount**(`account`, `graphqlEndpoint?`): `void`

Fetches an account from the GraphQL endpoint and adds it to the local cache.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `account` | `Object` | `undefined` |
| `account.balance?` | `string` \| `number` \| [`UInt64`](classes/UInt64.md) | `undefined` |
| `account.nonce` | `string` \| `number` \| [`UInt32`](classes/UInt32.md) | `undefined` |
| `account.publicKey` | `string` \| [`PublicKey`](classes/Types.PublicKey.md) | `undefined` |
| `account.tokenId` | `string` | `undefined` |
| `account.zkapp?` | `Object` | `undefined` |
| `account.zkapp.appState` | (`string` \| `number` \| [`Field`](classes/Field.md))[] | `undefined` |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:364](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/fetch.ts#L364)

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
| `elementType` | [`Provable`](interfaces/Provable.md)<`T`\> |
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

[lib/circuit_value.ts:338](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L338)

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

[lib/circuit_value.ts:411](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L411)

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

[lib/zkapp.ts:1459](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1459)

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
| `states` | `Record`<`string`, [`ProvablePure`](interfaces/ProvablePure.md)<`unknown`\>\> |

#### Returns

`void`

#### Defined in

[lib/state.ts:115](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/state.ts#L115)

___

### deploy

▸ **deploy**<`S`\>(`SmartContract`, `__namedParameters`): `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `S` |
| `__namedParameters` | `Object` |
| `__namedParameters.feePayer?` | [`FeePayerSpec`](modules/Mina.md#feepayerspec) |
| `__namedParameters.initialBalance?` | `string` \| `number` |
| `__namedParameters.tokenId?` | [`Field`](classes/Field.md) |
| `__namedParameters.verificationKey` | `Object` |
| `__namedParameters.verificationKey.data` | `string` |
| `__namedParameters.verificationKey.hash` | `string` \| [`Field`](classes/Field.md) |
| `__namedParameters.zkappKey` | [`PrivateKey`](classes/PrivateKey.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/zkapp.ts:1334](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1334)

___

### fetchAccount

▸ **fetchAccount**(`accountInfo`, `graphqlEndpoint?`, `config?`): `Promise`<{ `account`: `Account` ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

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
| `accountInfo.tokenId?` | `string` | `undefined` | - |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` | The graphql endpoint to fetch from |
| `config` | `Object` | `{}` | An object that exposes an additional timeout option |
| `config.timeout` | `undefined` \| `number` | `undefined` | - |

#### Returns

`Promise`<{ `account`: `Account` ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

zkapp information on the specified account or an error is thrown

#### Defined in

[lib/fetch.ts:50](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/fetch.ts#L50)

___

### fetchLastBlock

▸ **fetchLastBlock**(`graphqlEndpoint?`): `Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

Fetches the last block on the Mina network.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |

#### Returns

`Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Defined in

[lib/fetch.ts:393](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/fetch.ts#L393)

___

### getSrs

▸ **getSrs**(`keypair`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keypair` | `any` | SNARK keypair, as returned by Circuit.generateKeypair |

#### Returns

`any`

The SRS (structured reference string), needed to reconstruct the keypair later

#### Defined in

[snarky/addons.js:18](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky/addons.js#L18)

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
| `elementType` | [`Provable`](interfaces/Provable.md)<`T`\> |
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

[lib/circuit_value.ts:347](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L347)

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

[lib/zkapp.ts:93](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L93)

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

[lib/circuit_value.ts:241](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L241)

___

### provable

▸ **provable**<`A`\>(`typeObj`, `options?`): [`ProvableExtended`](README.md#provableextended)<`InferCircuitValue`<`A`\>, `InferJson`<`A`\>\>

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

[`ProvableExtended`](README.md#provableextended)<`InferCircuitValue`<`A`\>, `InferJson`<`A`\>\>

#### Defined in

[lib/circuit_value.ts:465](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L465)

___

### provablePure

▸ **provablePure**<`A`\>(`typeObj`, `options?`): [`ProvablePure`](interfaces/ProvablePure.md)<`InferCircuitValue`<`A`\>\> & `ProvableExtension`<`InferCircuitValue`<`A`\>, `InferJson`<`A`\>\>

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

[`ProvablePure`](interfaces/ProvablePure.md)<`InferCircuitValue`<`A`\>\> & `ProvableExtension`<`InferCircuitValue`<`A`\>, `InferJson`<`A`\>\>

#### Defined in

[lib/circuit_value.ts:642](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L642)

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

[lib/circuit_value.ts:363](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L363)

___

### recoverVerificationKey

▸ **recoverVerificationKey**(`srs`, `serializedVk`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srs` | `any` | the "structured reference string", a set of precomputed values needed for verifying proofs |
| `serializedVk` | `string` | string representation of a Circuit verification key |

#### Returns

`any`

the recovered verification key

#### Defined in

[snarky/addons.js:49](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky/addons.js#L49)

___

### sendZkapp

▸ **sendZkapp**(`json`, `graphqlEndpoint?`, `__namedParameters?`): `Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

Sends a zkApp command (transaction) to the specified GraphQL endpoint.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |
| `__namedParameters` | `Object` | `{}` |
| `__namedParameters.timeout` | `undefined` \| `number` | `undefined` |

#### Returns

`Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

#### Defined in

[lib/fetch.ts:540](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/fetch.ts#L540)

___

### serializeVerificationKey

▸ **serializeVerificationKey**(`verificationKey`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verificationKey` | `any` | the verification key of a Circuit |

#### Returns

`string`

string representation of the verification key

#### Defined in

[snarky/addons.js:27](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky/addons.js#L27)

___

### setGraphqlEndpoint

▸ **setGraphqlEndpoint**(`graphqlEndpoint`): `void`

Specifies the default GraphQL endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:33](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/fetch.ts#L33)

___

### shutdown

▸ **shutdown**(): `Promise`<`undefined`\>

This function *must* be called at the end of a nodejs program, otherwise the
worker threads will continue running and the program will never terminate.
From web applications, this function is a no-op.

#### Returns

`Promise`<`undefined`\>

#### Defined in

[snarky.d.ts:1180](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L1180)

___

### signFeePayer

▸ **signFeePayer**(`transactionJson`, `feePayerKey`, `__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionJson` | `string` |
| `feePayerKey` | `string` \| [`PrivateKey`](classes/PrivateKey.md) |
| `__namedParameters` | `Object` |

#### Returns

`string`

#### Defined in

[lib/zkapp.ts:1416](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1416)

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
| `stateType` | [`ProvablePure`](interfaces/ProvablePure.md)<`A`\> |

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

[lib/state.ts:39](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/state.ts#L39)

___

### verify

▸ **verify**(`proof`, `verificationKey`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | `JsonProof` \| [`Proof`](classes/Proof.md)<`any`\> |
| `verificationKey` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/proof_system.ts:112](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/proof_system.ts#L112)

___

### zkappCommandToJson

▸ **zkappCommandToJson**(`__namedParameters`): [`ZkappCommand`](modules/Types.Json.md#zkappcommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ZkappCommand` |

#### Returns

[`ZkappCommand`](modules/Types.Json.md#zkappcommand)

#### Defined in

[lib/account_update.ts:1564](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/account_update.ts#L1564)
