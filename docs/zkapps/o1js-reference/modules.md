[o1js](README.md) / Modules

# o1js

## Table of contents

### Namespaces

- [Bytes](modules/Bytes.md)
- [Crypto](modules/Crypto.md)
- [Encoding](modules/Encoding.md)
- [Encryption](modules/Encryption.md)
- [Experimental](modules/Experimental.md)
- [Lightnet](modules/Lightnet.md)
- [Mina](modules/Mina.md)
- [Pickles](modules/Pickles.md)
- [Snarky](modules/Snarky.md)
- [Types](modules/Types.md)
- [ZkProgram](modules/ZkProgram.md)
- [method](modules/method.md)
- [wasm](modules/wasm.md)

### Classes

- [AccountUpdate](classes/AccountUpdate.md)
- [AccountUpdateForest](classes/AccountUpdateForest.md)
- [AccountUpdateTree](classes/AccountUpdateTree.md)
- [AlmostForeignField](classes/AlmostForeignField.md)
- [CanonicalForeignField](classes/CanonicalForeignField.md)
- [Character](classes/Character.md)
- [Circuit](classes/Circuit.md)
- [CircuitString](classes/CircuitString.md)
- [EcdsaSignature](classes/EcdsaSignature.md)
- [ForeignCurve](classes/ForeignCurve.md)
- [ForeignField](classes/ForeignField.md)
- [Hashed](classes/Hashed.md)
- [Int64](classes/Int64.md)
- [Keypair](classes/Keypair.md)
- [Ledger](classes/Ledger.md)
- [MerkleList](classes/MerkleList.md)
- [MerkleListIterator](classes/MerkleListIterator.md)
- [MerkleMap](classes/MerkleMap.md)
- [MerkleMapWitness](classes/MerkleMapWitness.md)
- [MerkleTree](classes/MerkleTree.md)
- [Nullifier](classes/Nullifier.md)
- [Packed](classes/Packed.md)
- [PrivateKey](classes/PrivateKey.md)
- [Proof](classes/Proof.md)
- [Scalar](classes/Scalar.md)
- [SelfProof](classes/SelfProof.md)
- [Sign](classes/Sign.md)
- [Signature](classes/Signature.md)
- [SmartContract](classes/SmartContract.md)
- [TokenAccountUpdateIterator](classes/TokenAccountUpdateIterator.md)
- [TokenContract](classes/TokenContract.md)
- [TokenSymbol](classes/TokenSymbol.md)
- [UInt32](classes/UInt32.md)
- [UInt64](classes/UInt64.md)
- [UInt8](classes/UInt8.md)
- [Unconstrained](classes/Unconstrained.md)
- [VerificationKey](classes/VerificationKey.md)

### Interfaces

- [Permissions](interfaces/Permissions.md)

### Type Aliases

- [Bool](modules.md#bool)
- [Bytes](modules.md#bytes)
- [Cache](modules.md#cache)
- [CacheHeader](modules.md#cacheheader)
- [DeployArgs](modules.md#deployargs)
- [Empty](modules.md#empty)
- [FeatureFlags](modules.md#featureflags)
- [Field](modules.md#field)
- [FlexibleProvable](modules.md#flexibleprovable)
- [FlexibleProvablePure](modules.md#flexibleprovablepure)
- [Gate](modules.md#gate)
- [GateType](modules.md#gatetype)
- [Group](modules.md#group)
- [InferProvable](modules.md#inferprovable)
- [JsonGate](modules.md#jsongate)
- [JsonProof](modules.md#jsonproof)
- [MlFeatureFlags](modules.md#mlfeatureflags)
- [MlPublicKey](modules.md#mlpublickey)
- [MlPublicKeyVar](modules.md#mlpublickeyvar)
- [Provable](modules.md#provable)
- [ProvableExtended](modules.md#provableextended)
- [ProvableHashable](modules.md#provablehashable)
- [ProvablePure](modules.md#provablepure)
- [Reducer](modules.md#reducer)
- [State](modules.md#state)
- [Struct](modules.md#struct)
- [TransactionStatus](modules.md#transactionstatus)
- [Undefined](modules.md#undefined)
- [Void](modules.md#void)
- [WasmModule](modules.md#wasmmodule)
- [ZkProgram](modules.md#zkprogram)
- [ZkappPublicInput](modules.md#zkapppublicinput)

### Variables

- [Cache](modules.md#cache-1)
- [Crypto](modules.md#crypto)
- [Empty](modules.md#empty-1)
- [Gadgets](modules.md#gadgets)
- [Hash](modules.md#hash)
- [Keccak](modules.md#keccak)
- [Permissions](modules.md#permissions)
- [Pickles](modules.md#pickles)
- [Poseidon](modules.md#poseidon)
- [Provable](modules.md#provable-1)
- [Snarky](modules.md#snarky)
- [Test](modules.md#test)
- [TokenId](modules.md#tokenid)
- [TransactionVersion](modules.md#transactionversion)
- [Undefined](modules.md#undefined-1)
- [Void](modules.md#void-1)
- [ZkappPublicInput](modules.md#zkapppublicinput-1)

### Functions

- [Account](modules.md#account)
- [Bool](modules.md#bool-1)
- [Bytes](modules.md#bytes-1)
- [Field](modules.md#field-1)
- [Group](modules.md#group-1)
- [MerkleWitness](modules.md#merklewitness)
- [Reducer](modules.md#reducer-1)
- [State](modules.md#state-1)
- [Struct](modules.md#struct-1)
- [ZkProgram](modules.md#zkprogram-1)
- [addCachedAccount](modules.md#addcachedaccount)
- [assert](modules.md#assert)
- [checkZkappTransaction](modules.md#checkzkapptransaction)
- [circuitMain](modules.md#circuitmain)
- [createEcdsa](modules.md#createecdsa)
- [createForeignCurve](modules.md#createforeigncurve)
- [createForeignField](modules.md#createforeignfield)
- [declareMethods](modules.md#declaremethods)
- [declareState](modules.md#declarestate)
- [fetchAccount](modules.md#fetchaccount)
- [fetchEvents](modules.md#fetchevents)
- [fetchLastBlock](modules.md#fetchlastblock)
- [fetchTransactionStatus](modules.md#fetchtransactionstatus)
- [method](modules.md#method)
- [provable](modules.md#provable-2)
- [provablePure](modules.md#provablepure-1)
- [public\_](modules.md#public_)
- [scaleShifted](modules.md#scaleshifted)
- [sendZkapp](modules.md#sendzkapp)
- [setArchiveGraphqlEndpoint](modules.md#setarchivegraphqlendpoint)
- [setGraphqlEndpoint](modules.md#setgraphqlendpoint)
- [setGraphqlEndpoints](modules.md#setgraphqlendpoints)
- [setNumberOfWorkers](modules.md#setnumberofworkers)
- [state](modules.md#state-2)
- [verify](modules.md#verify)
- [withThreadPool](modules.md#withthreadpool)

## Type Aliases

### Bool

Ƭ **Bool**: `InternalBool`

#### Defined in

[lib/provable/wrapped.ts:70](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L70)

[lib/provable/wrapped.ts:71](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L71)

___

### Bytes

Ƭ **Bytes**: `InternalBytes`

#### Defined in

[lib/provable/wrapped-classes.ts:16](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L16)

[lib/provable/wrapped-classes.ts:5](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L5)

[lib/provable/wrapped-classes.ts:19](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L19)

[lib/provable/wrapped-classes.ts:20](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L20)

[lib/provable/wrapped-classes.ts:21](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L21)

___

### Cache

Ƭ **Cache**: `Object`

Interface for storing and retrieving values, for caching.
`read()` and `write()` can just throw errors on failure.

The data that will be passed to the cache for writing is exhaustively described by the [CacheHeader](modules.md#cacheheader) type.
It represents one of the following:
- The SRS. This is a deterministic lists of curve points (one per curve) that needs to be generated just once,
  to be used for polynomial commitments.
- Lagrange basis commitments. Similar to the SRS, this will be created once for every power-of-2 circuit size.
- Prover and verifier keys for every compiled circuit.

Per smart contract or ZkProgram, several different keys are created:
- a step prover key (`step-pk`) and verification key (`step-vk`) _for every method_.
- a wrap prover key (`wrap-pk`) and verification key (`wrap-vk`) for the entire contract.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `canWrite` | `boolean` | Indicates whether the cache is writable. |
| `debug?` | `boolean` | If `debug` is toggled, `read()` and `write()` errors are logged to the console. By default, cache errors are silent, because they don't necessarily represent an error condition, but could just be a cache miss, or file system permissions incompatible with writing data. |
| `read` | (`header`: [`CacheHeader`](modules.md#cacheheader)) => `undefined` \| `Uint8Array` | Read a value from the cache. |
| `write` | (`header`: [`CacheHeader`](modules.md#cacheheader), `value`: `Uint8Array`) => `void` | Write a value to the cache. |

#### Defined in

[lib/proof-system/cache.ts:31](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/cache.ts#L31)

[lib/proof-system/cache.ts:199](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/cache.ts#L199)

___

### CacheHeader

Ƭ **CacheHeader**: `StepKeyHeader`\<``"step-pk"``\> \| `StepKeyHeader`\<``"step-vk"``\> \| `WrapKeyHeader`\<``"wrap-pk"``\> \| `WrapKeyHeader`\<``"wrap-vk"``\> \| `PlainHeader`\<``"srs"``\> \| `PlainHeader`\<``"lagrange-basis"``\> & `CommonHeader`

A header that is passed to the caching layer, to support rich caching strategies.

Both `uniqueId` and `programId` can safely be used as a file path.

#### Defined in

[lib/proof-system/cache.ts:98](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/cache.ts#L98)

___

### DeployArgs

Ƭ **DeployArgs**: \{ `verificationKey?`: \{ `data`: `string` ; `hash`: `string` \| [`Field`](modules.md#field-1)  }  } \| `undefined`

#### Defined in

[lib/mina/zkapp.ts:1440](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1440)

___

### Empty

Ƭ **Empty**: [`Undefined`](modules.md#undefined-1)

#### Defined in

[lib/proof-system/zkprogram.ts:78](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L78)

[lib/proof-system/zkprogram.ts:79](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L79)

___

### FeatureFlags

Ƭ **FeatureFlags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `foreignFieldAdd` | `boolean` |
| `foreignFieldMul` | `boolean` |
| `lookup` | `boolean` |
| `rangeCheck0` | `boolean` |
| `rangeCheck1` | `boolean` |
| `rot` | `boolean` |
| `runtimeTables` | `boolean` |
| `xor` | `boolean` |

#### Defined in

[snarky.d.ts:587](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L587)

___

### Field

Ƭ **Field**: `InternalField`

#### Defined in

[lib/provable/wrapped.ts:42](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L42)

[lib/provable/wrapped.ts:43](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L43)

___

### FlexibleProvable

Ƭ **FlexibleProvable**\<`T`\>: [`Provable`](modules.md#provable-1)\<`T`\> \| [`Struct`](modules.md#struct)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/types/struct.ts:60](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L60)

___

### FlexibleProvablePure

Ƭ **FlexibleProvablePure**\<`T`\>: [`ProvablePure`](modules.md#provablepure)\<`T`\> \| `StructPure`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/types/struct.ts:61](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L61)

___

### Gate

Ƭ **Gate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coeffs` | `string`[] |
| `type` | [`GateType`](modules.md#gatetype) |
| `wires` | \{ `col`: `number` ; `row`: `number`  }[] |

#### Defined in

[snarky.d.ts:452](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L452)

___

### GateType

Ƭ **GateType**: ``"Zero"`` \| ``"Generic"`` \| ``"Poseidon"`` \| ``"CompleteAdd"`` \| ``"VarbaseMul"`` \| ``"EndoMul"`` \| ``"EndoMulScalar"`` \| ``"Lookup"`` \| ``"RangeCheck0"`` \| ``"RangeCheck1"`` \| ``"ForeignFieldAdd"`` \| ``"ForeignFieldMul"`` \| ``"Xor16"`` \| ``"Rot64"``

#### Defined in

[snarky.d.ts:429](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L429)

___

### Group

Ƭ **Group**: `InternalGroup`

#### Defined in

[lib/provable/wrapped.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L76)

[lib/provable/wrapped.ts:77](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L77)

___

### InferProvable

Ƭ **InferProvable**\<`T`\>: `GenericInferProvable`\<`T`, [`Field`](modules.md#field-1)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/types/provable-derivers.ts:46](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-derivers.ts#L46)

___

### JsonGate

Ƭ **JsonGate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coeffs` | `string`[] |
| `typ` | [`GateType`](modules.md#gatetype) |
| `wires` | \{ `col`: `number` ; `row`: `number`  }[] |

#### Defined in

[snarky.d.ts:445](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L445)

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

[lib/proof-system/zkprogram.ts:227](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L227)

___

### MlFeatureFlags

Ƭ **MlFeatureFlags**: [\_: 0, rangeCheck0: MlBool, rangeCheck1: MlBool, foreignFieldAdd: MlBool, foreignFieldMul: MlBool, xor: MlBool, rot: MlBool, lookup: MlBool, runtimeTables: MlBool]

#### Defined in

[snarky.d.ts:598](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L598)

___

### MlPublicKey

Ƭ **MlPublicKey**: [\_: 0, x: FieldConst, isOdd: MlBool]

#### Defined in

[snarky.d.ts:465](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L465)

___

### MlPublicKeyVar

Ƭ **MlPublicKeyVar**: [\_: 0, x: FieldVar, isOdd: BoolVar]

#### Defined in

[snarky.d.ts:466](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L466)

___

### Provable

Ƭ **Provable**\<`T`\>: `Provable_`\<`T`\>

`Provable<T>` is the general interface for provable types in o1js.

`Provable<T>` describes how a type `T` is made up of [Field](modules.md#field) elements and "auxiliary" (non-provable) data.

`Provable<T>` is the required input type in several methods in o1js.
One convenient way to create a `Provable<T>` is using `Struct`.

All built-in provable types in o1js ([Field](modules.md#field), [Bool](modules.md#bool), etc.) are instances of `Provable<T>` as well.

Note: These methods are meant to be used by the library internally and are not directly when writing provable code.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/provable.ts:49](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/provable.ts#L49)

[lib/provable/provable.ts:51](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/provable.ts#L51)

___

### ProvableExtended

Ƭ **ProvableExtended**\<`T`, `TJson`\>: [`Provable`](modules.md#provable-1)\<`T`\> & `ProvableExtension`\<`T`, `TJson`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TJson` | `any` |

#### Defined in

[lib/provable/types/struct.ts:50](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L50)

___

### ProvableHashable

Ƭ **ProvableHashable**\<`T`\>: [`Provable`](modules.md#provable-1)\<`T`\> & `Hashable`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/crypto/poseidon.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/poseidon.ts#L30)

___

### ProvablePure

Ƭ **ProvablePure**\<`T`\>: `Omit`\<`Provable`\<`T`\>, ``"fromFields"``\> & \{ `fromFields`: (`fields`: `Field`[]) => `T`  }

`ProvablePure<T>` is a special kind of [Provable](modules.md#provable) interface, where the "auxiliary" (non-provable) data is empty.
This means the type consists only of field elements, in that sense it is "pure".
Any instance of `ProvablePure<T>` is also an instance of `Provable<T>` where the "auxiliary" data is empty.

Examples where `ProvablePure<T>` is required are types of on-chain state, events and actions.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/types/provable-intf.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L76)

___

### Reducer

Ƭ **Reducer**\<`Action`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `Action` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionType` | [`FlexibleProvablePure`](modules.md#flexibleprovablepure)\<`Action`\> |

#### Defined in

[lib/mina/zkapp.ts:1162](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1162)

[lib/mina/zkapp.ts:1484](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1484)

___

### State

Ƭ **State**\<`A`\>: `Object`

Gettable and settable state that can be checked for equality.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | () => `Promise`\<`undefined` \| `A`\> |
| `fromAppState` | (`appState`: `Field`[]) => `A` |
| `get` | () => `A` |
| `getAndRequireEquals` | () => `A` |
| `requireEquals` | (`a`: `A`) => `void` |
| `requireNothing` | () => `void` |
| `set` | (`a`: `A`) => `void` |

#### Defined in

[lib/mina/state.ts:73](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/state.ts#L73)

[lib/mina/state.ts:20](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/state.ts#L20)

___

### Struct

Ƭ **Struct**\<`T`\>: [`ProvableExtended`](modules.md#provableextended)\<`NonMethods`\<`T`\>\> & `Constructor`\<`T`\> & \{ `_isStruct`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable/types/struct.ts:136](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L136)

[lib/provable/types/struct.ts:55](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L55)

___

### TransactionStatus

Ƭ **TransactionStatus**: ``"INCLUDED"`` \| ``"PENDING"`` \| ``"UNKNOWN"``

INCLUDED: A transaction that is on the longest chain

PENDING: A transaction either in the transition frontier or in transaction pool but is not on the longest chain

UNKNOWN: The transaction has either been snarked, reached finality through consensus or has been dropped

#### Defined in

[lib/mina/graphql.ts:213](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/graphql.ts#L213)

___

### Undefined

Ƭ **Undefined**: `undefined`

#### Defined in

[lib/proof-system/zkprogram.ts:75](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L75)

[lib/proof-system/zkprogram.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L76)

___

### Void

Ƭ **Void**: `undefined`

#### Defined in

[lib/proof-system/zkprogram.ts:80](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L80)

[lib/proof-system/zkprogram.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L81)

___

### WasmModule

Ƭ **WasmModule**: typeof [`wasm`](modules/wasm.md)

#### Defined in

[snarky.d.ts:52](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L52)

___

### ZkProgram

Ƭ **ZkProgram**\<`S`, `T`\>: `ReturnType`\<typeof [`ZkProgram`](modules.md#zkprogram)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |
| `T` | extends \{ [I in string]: Tuple\<PrivateInput\> } |

#### Defined in

[lib/proof-system/zkprogram.ts:245](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L245)

[lib/proof-system/zkprogram.ts:479](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L479)

[lib/proof-system/zkprogram.ts:947](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L947)

___

### ZkappPublicInput

Ƭ **ZkappPublicInput**: `Object`

The public input for zkApps consists of certain hashes of the proving
account update (and its child updates) which is constructed during method execution.

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
| `accountUpdate` | [`Field`](modules.md#field-1) |
| `calls` | [`Field`](modules.md#field-1) |

#### Defined in

[lib/mina/account-update.ts:1914](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1914)

[lib/mina/account-update.ts:1918](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1918)

## Variables

### Cache

• **Cache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FileSystem` | (`cacheDirectory`: `string`, `debug?`: `boolean`) => [`Cache`](modules.md#cache-1) |
| `FileSystemDefault` | [`Cache`](modules.md#cache-1) |
| `None` | [`Cache`](modules.md#cache-1) |

#### Defined in

[lib/proof-system/cache.ts:31](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/cache.ts#L31)

[lib/proof-system/cache.ts:199](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/cache.ts#L199)

___

### Crypto

• `Const` **Crypto**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `CurveParams` | \{ `Pallas`: `CurveParams` = pallasParams; `Secp256k1`: `CurveParams` = secp256k1Params; `Vesta`: `CurveParams` = vestaParams } | Parameters defining an elliptic curve in short Weierstraß form y^2 = x^3 + ax + b |
| `CurveParams.Pallas` | `CurveParams` | - |
| `CurveParams.Secp256k1` | `CurveParams` | - |
| `CurveParams.Vesta` | `CurveParams` | - |
| `createCurve` | (`params`: `CurveParams`) => \{ `Field`: \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } ; `Scalar`: \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } ; `a`: `bigint` ; `b`: `bigint` ; `cofactor`: `undefined` \| `bigint` ; `hasCofactor`: `boolean` ; `hasEndomorphism`: `boolean` ; `modulus`: `bigint` = p; `name`: `string` ; `one`: \{ `infinity`: `boolean` = false; `x`: `bigint` ; `y`: `bigint`  } ; `order`: `bigint` ; `zero`: `GroupAffine` = affineZero; `Endo`:  ; `add`: (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine` ; `double`: (`g`: `GroupAffine`) => `GroupAffine` ; `equal`: (`g`: `GroupAffine`, `h`: `GroupAffine`) => `boolean` ; `from`: (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` ; `fromNonzero`: (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` ; `isInSubgroup`: (`g`: `GroupAffine`) => `boolean` ; `isOnCurve`: (`g`: `GroupAffine`) => `boolean` ; `negate`: (`g`: `GroupAffine`) => `GroupAffine` ; `scale`: (`g`: `GroupAffine`, `s`: `bigint` \| `boolean`[]) => `GroupAffine` ; `sub`: (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine`  } | Create elliptic curve arithmetic methods. |

#### Defined in

[lib/provable/crypto/crypto.ts:8](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/crypto.ts#L8)

[lib/provable/crypto/crypto.ts:22](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/crypto.ts#L22)

___

### Empty

• **Empty**: `ProvablePureExtended`\<`undefined`, ``null``\>

#### Defined in

[lib/proof-system/zkprogram.ts:78](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L78)

[lib/proof-system/zkprogram.ts:79](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L79)

___

### Gadgets

• `Const` **Gadgets**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Field3` | \{ `provable`: `GenericProvableExtendedPure`\<[`Field`, `Field`, `Field`], [`string`, `string`, `string`], `Field`\> ; `from`: (`x`: `bigint` \| `Field3`) => `Field3` ; `isConstant`: (`x`: `Field3`) => `boolean` ; `toBigint`: (`x`: `Field3`) => `bigint` ; `toBigints`: \<T\>(...`xs`: `T`) => [...\{ [i in string \| number \| symbol]: bigint }[]]  } | - |
| `Field3.provable` | `GenericProvableExtendedPure`\<[`Field`, `Field`, `Field`], [`string`, `string`, `string`], `Field`\> | `Provable<T>` interface for `Field3 = [Field, Field, Field]`. Note: Witnessing this creates a plain tuple of field elements without any implicit range checks. |
| `Field3.from` | [object Object] | Turn a bigint into a 3-tuple of Fields |
| `Field3.isConstant` | [object Object] | Check whether a 3-tuple of Fields is constant |
| `Field3.toBigint` | [object Object] | Turn a 3-tuple of Fields into a bigint |
| `Field3.toBigints` | [object Object] | Turn several 3-tuples of Fields into bigints |
| `ForeignField` | \{ `Sum`: (`x`: `Field3`) => `Sum` ; `add`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `assertAlmostReduced`: (`xs`: `Field3`[], `f`: `bigint`, `__namedParameters`: \{ `skipMrc`: `undefined` \| `boolean`  }) => `void` ; `assertLessThan`: (`x`: `Field3`, `f`: `bigint` \| `Field3`) => `void` ; `assertLessThanOrEqual`: (`x`: `Field3`, `f`: `bigint` \| `Field3`) => `void` ; `assertMul`: (`x`: `Field3` \| `Sum`, `y`: `Field3` \| `Sum`, `z`: `Field3` \| `Sum`, `f`: `bigint`) => `void` ; `div`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `inv`: (`x`: `Field3`, `f`: `bigint`) => `Field3` ; `mul`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `neg`: (`x`: `Field3`, `f`: `bigint`) => `Field3` ; `sub`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `sum`: (`xs`: `Field3`[], `signs`: (`1n` \| `-1n`)[], `f`: `bigint`) => `Field3`  } | Gadgets for foreign field operations. A _foreign field_ is a finite field different from the native field of the proof system. The `ForeignField` namespace exposes operations like modular addition and multiplication, which work for any finite field of size less than 2^259. Foreign field elements are represented as 3 limbs of native field elements. Each limb holds 88 bits of the total, in little-endian order. All `ForeignField` gadgets expect that their input limbs are constrained to the range [0, 2^88). Range checks on outputs are added by the gadget itself. |
| `ForeignField.Sum` | [object Object] | Lazy sum of [Field3](modules.md#field3) elements, which can be used as input to [assertMul](modules.md#assertmul). |
| `ForeignField.add` | [object Object] | Foreign field addition: `x + y mod f` The modulus `f` does not need to be prime. Inputs and outputs are 3-tuples of native Fields. Each input limb is assumed to be in the range [0, 2^88), and the gadget is invalid if this is not the case. The result limbs are guaranteed to be in the same range. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(9n)); let y = Provable.witness(Field3.provable, () => Field3.from(10n)); // range check x and y Gadgets.multiRangeCheck(x); Gadgets.multiRangeCheck(y); // compute x + y mod 17 let z = ForeignField.add(x, y, 17n); Provable.log(z); // ['2', '0', '0'] = limb representation of 2 = 9 + 10 mod 17 ``` **Warning**: The gadget does not assume that inputs are reduced modulo f, and does not prove that the result is reduced modulo f. It only guarantees that the result is in the correct residue class. |
| `ForeignField.assertAlmostReduced` | [object Object] | Prove that each of the given [Field3](modules.md#field3) elements is "almost" reduced modulo f, i.e., satisfies the assumptions required by [mul](modules.md#mul) and other gadgets: - each limb is in the range [0, 2^88) - the most significant limb is less or equal than the modulus, x[2] <= f[2] **Note**: This method is most efficient when the number of input elements is a multiple of 3. **`Throws`** if any of the assumptions is violated. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(4n)); let y = Provable.witness(Field3.provable, () => Field3.from(5n)); let z = Provable.witness(Field3.provable, () => Field3.from(10n)); ForeignField.assertAlmostReduced([x, y, z], f); // now we can use x, y, z as inputs to foreign field multiplication let xy = ForeignField.mul(x, y, f); let xyz = ForeignField.mul(xy, z, f); // since xy is an input to another multiplication, we need to prove that it is almost reduced again! ForeignField.assertAlmostReduced([xy], f); // TODO: would be more efficient to batch this with 2 other elements ``` |
| `ForeignField.assertLessThan` | [object Object] | Prove that x < f for any constant f < 2^264, or for another `Field3` f. If f is a finite field modulus, this means that the given field element is fully reduced modulo f. This is a stronger statement than [assertAlmostReduced](classes/ForeignField.md#assertalmostreduced-1) and also uses more constraints; it should not be needed in most use cases. **Note**: This assumes that the limbs of x are in the range [0, 2^88), in contrast to [assertAlmostReduced](classes/ForeignField.md#assertalmostreduced-1) which adds that check itself. **`Throws`** if x is greater or equal to f. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(0x1235n)); // range check limbs of x Gadgets.multiRangeCheck(x); // prove that x is fully reduced mod f Gadgets.ForeignField.assertLessThan(x, f); ``` |
| `ForeignField.assertLessThanOrEqual` | [object Object] | Prove that x <= f for any constant f < 2^264, or for another `Field3` f. See [assertLessThan](classes/ForeignField.md#assertlessthan) for details and usage examples. |
| `ForeignField.assertMul` | [object Object] | Optimized multiplication of sums in a foreign field, for example: `(x - y)*z = a + b + c mod f` Note: This is much more efficient than using [add](modules.md#add) and [sub](modules.md#sub) separately to compute the multiplication inputs and outputs, and then using [mul](modules.md#mul) to constrain the result. The sums passed into this method are "lazy sums" created with [Sum](modules.md#sum). You can also pass in plain [Field3](modules.md#field3) elements. **Assumptions**: The assumptions on the _summands_ are analogous to the assumptions described in [mul](modules.md#mul): - each summand's limbs are in the range [0, 2^88) - summands that are part of a multiplication input satisfy `x[2] <= f[2]` **`Throws`** if the modulus is so large that the second assumption no longer suffices for validity of the multiplication. For small sums and moduli < 2^256, this will not fail. **`Throws`** if the provided multiplication result is not correct modulo f. **`Example`** ```ts // range-check x, y, z, a, b, c ForeignField.assertAlmostReduced([x, y, z], f); Gadgets.multiRangeCheck(a); Gadgets.multiRangeCheck(b); Gadgets.multiRangeCheck(c); // create lazy input sums let xMinusY = ForeignField.Sum(x).sub(y); let aPlusBPlusC = ForeignField.Sum(a).add(b).add(c); // assert that (x - y)*z = a + b + c mod f ForeignField.assertMul(xMinusY, z, aPlusBPlusC, f); ``` |
| `ForeignField.div` | [object Object] | Foreign field division: `x * y^(-1) mod f` See [mul](modules.md#mul) for assumptions on inputs and usage examples. This gadget adds an extra bound check on the result, so it can be used directly in another foreign field multiplication. **`Throws`** Different than [mul](modules.md#mul), this fails on unreduced input `x`, because it checks that `x === (x/y)*y` and the right side will be reduced. |
| `ForeignField.inv` | [object Object] | Foreign field inverse: `x^(-1) mod f` See [mul](modules.md#mul) for assumptions on inputs and usage examples. This gadget adds an extra bound check on the result, so it can be used directly in another foreign field multiplication. |
| `ForeignField.mul` | [object Object] | Foreign field multiplication: `x * y mod f` The modulus `f` does not need to be prime, but has to be smaller than 2^259. **Assumptions**: In addition to the assumption that input limbs are in the range [0, 2^88), as in all foreign field gadgets, this assumes an additional bound on the inputs: `x * y < 2^264 * p`, where p is the native modulus. We usually assert this bound by proving that `x[2] < f[2] + 1`, where `x[2]` is the most significant limb of x. To do this, we use an 88-bit range check on `2^88 - x[2] - (f[2] + 1)`, and same for y. The implication is that x and y are _almost_ reduced modulo f. All of the above assumptions are checked by [assertAlmostReduced](modules.md#assertalmostreduced). **Warning**: This gadget does not add the extra bound check on the result. So, to use the result in another foreign field multiplication, you have to add the bound check on it yourself, again. **`Example`** ```ts // example modulus: secp256k1 prime let f = (1n << 256n) - (1n << 32n) - 0b1111010001n; let x = Provable.witness(Field3.provable, () => Field3.from(f - 1n)); let y = Provable.witness(Field3.provable, () => Field3.from(f - 2n)); // range check x, y and prove additional bounds x[2] <= f[2] ForeignField.assertAlmostReduced([x, y], f); // compute x * y mod f let z = ForeignField.mul(x, y, f); Provable.log(z); // ['2', '0', '0'] = limb representation of 2 = (-1)*(-2) mod f ``` |
| `ForeignField.neg` | [object Object] | Foreign field negation: `-x mod f = f - x` See [add](classes/ForeignField.md#add) for assumptions and usage examples. **`Throws`** fails if `x > f`, where `f - x < 0`. |
| `ForeignField.sub` | [object Object] | Foreign field subtraction: `x - y mod f` See [add](modules.md#add) for assumptions and usage examples. **`Throws`** fails if `x - y < -f`, where the result cannot be brought back to a positive number by adding `f` once. |
| `ForeignField.sum` | [object Object] | Foreign field sum: `xs[0] + signs[0] * xs[1] + ... + signs[n-1] * xs[n] mod f` This gadget takes a list of inputs and a list of signs (of size one less than the inputs), and computes a chain of additions or subtractions, depending on the sign. A sign is of type `1n \| -1n`, where `1n` represents addition and `-1n` represents subtraction. **Note**: For 3 or more inputs, `sum()` uses fewer constraints than a sequence of `add()` and `sub()` calls, because we can avoid range checks on intermediate results. See [add](modules.md#add) for assumptions on inputs. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(4n)); let y = Provable.witness(Field3.provable, () => Field3.from(5n)); let z = Provable.witness(Field3.provable, () => Field3.from(10n)); // range check x, y, z Gadgets.multiRangeCheck(x); Gadgets.multiRangeCheck(y); Gadgets.multiRangeCheck(z); // compute x + y - z mod 17 let sum = ForeignField.sum([x, y, z], [1n, -1n], 17n); Provable.log(sum); // ['16', '0', '0'] = limb representation of 16 = 4 + 5 - 10 mod 17 ``` |
| `SHA256` | \{ `hash`: (`data`: `FlexibleBytes`) => `Bytes`  } | Implementation of the [SHA256 hash function.](https://en.wikipedia.org/wiki/SHA-2) Hash function with 256bit output. Applies the SHA2-256 hash function to a list of byte-sized elements. The function accepts [Bytes](modules/Bytes.md) as the input message, which is a type that represents a static-length list of byte-sized field elements (range-checked using [rangeCheck8](modules.md#rangecheck8)). Alternatively, you can pass plain `number[]`, `bigint[]` or `Uint8Array` to perform a hash outside provable code. Produces an output of [Bytes](modules/Bytes.md) that conforms to the chosen bit length. **`Param`** [Bytes](modules/Bytes.md) representing the message to hash. ```ts let preimage = Bytes.fromString("hello world"); let digest = Gadgets.SHA256.hash(preimage); ``` |
| `SHA256.hash` | [object Object] | - |
| `addMod32` | (`x`: `Field`, `y`: `Field`) => `Field` | - |
| `divMod32` | (`n`: `Field`, `quotientBits`: `number`) => \{ `quotient`: `Field` ; `remainder`: `Field`  } | - |
| `and` | (`a`: `Field`, `b`: `Field`, `length`: `number`) => `Field` | Bitwise AND gadget on [Field](modules.md#field-1) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND). The AND gate works by comparing two bits and returning `1` if both bits are `1`, and `0` otherwise. It can be checked by a double generic gate that verifies the following relationship between the values below (in the process it also invokes the [xor](modules.md#xor) gadget which will create additional constraints depending on `length`). The generic gate verifies:\ `a + b = sum` and the conjunction equation `2 * and = sum - xor`\ Where:\ `a + b = sum`\ `a ^ b = xor`\ `a & b = and` You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#and) The `length` parameter lets you define how many bits should be compared. `length` is rounded to the nearest multiple of 16, `paddedLength = ceil(length / 16) * 16`, and both input values are constrained to fit into `paddedLength` bits. The output is guaranteed to have at most `paddedLength` bits as well. **Note:** Specifying a larger `length` parameter adds additional constraints. **Note:** Both [Field](modules.md#field-1) elements need to fit into `2^paddedLength - 1`. Otherwise, an error is thrown and no proof can be generated. For example, with `length = 2` (`paddedLength = 16`), `and()` will fail for any input that is larger than `2**16`. **`Example`** ```typescript let a = Field(3); // ... 000011 let b = Field(5); // ... 000101 let c = Gadgets.and(a, b, 2); // ... 000001 c.assertEquals(1); ``` |
| `compactMultiRangeCheck` | (`xy`: `Field`, `z`: `Field`) => [`Field`, `Field`, `Field`] | Compact multi-range check This is a variant of [multiRangeCheck](modules.md#multirangecheck) where the first two variables are passed in combined form xy = x + 2^88*y. The gadget - splits up xy into x and y - proves that xy = x + 2^88*y - proves that x, y, z are all in the range [0, 2^88). The split form [x, y, z] is returned. **`Example`** ```ts let [x, y] = Gadgets.compactMultiRangeCheck([xy, z]); ``` **`Throws`** Throws an error if `xy` exceeds 2*88 = 176 bits, or if z exceeds 88 bits. |
| `isDefinitelyInRangeN` | (`n`: `number`, `x`: `Field`) => `Bool` | Returns a boolean which being true proves that x is in the range [0, 2^n). **Beware**: The output being false does **not** prove that x is not in the range [0, 2^n). This should not be viewed as a standalone provable method but as an advanced helper function for gadgets which need a weakened form of range check. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); let definitelyInRange = Gadgets.isDefinitelyInRangeN(32, x); // could be true or false ``` |
| `leftShift32` | (`field`: `Field`, `bits`: `number`) => `Field` | Performs a left shift operation on the provided [Field](modules.md#field-1) element. This operation is similar to the `<<` shift operation in JavaScript, where bits are shifted to the left, and the overflowing bits are discarded. It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number, where the most significant (32th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 32 bits in size. The output is range checked to 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.leftShift32(x, 2); // left shift by 2 bits y.assertEquals(0b110000); // 48 in binary ``` |
| `leftShift64` | (`field`: `Field`, `bits`: `number`) => `Field` | Performs a left shift operation on the provided [Field](modules.md#field-1) element. This operation is similar to the `<<` shift operation in JavaScript, where bits are shifted to the left, and the overflowing bits are discarded. It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the shift. Therefore, to safely use `leftShift()`, you need to make sure that the values passed in are range checked to 64 bits. For example, this can be done with [rangeCheck64](modules.md#rangecheck64). **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.leftShift64(x, 2); // left shift by 2 bits y.assertEquals(0b110000); // 48 in binary const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); leftShift64(xLarge, 32); // throws an error since input exceeds 64 bits ``` |
| `multiRangeCheck` | (`limbs`: `Field3`) => `void` | Multi-range check. Proves that x, y, z are all in the range [0, 2^88). This takes 4 rows, so it checks 88*3/4 = 66 bits per row. This is slightly more efficient than 64-bit range checks, which can do 64 bits in 1 row. In particular, the 3x88-bit range check supports bigints up to 264 bits, which in turn is enough to support foreign field multiplication with moduli up to 2^259. **`Example`** ```ts Gadgets.multiRangeCheck([x, y, z]); ``` **`Throws`** Throws an error if one of the input values exceeds 88 bits. |
| `not` | (`a`: `Field`, `length`: `number`, `checked`: `boolean`) => `Field` | Bitwise NOT gate on [Field](modules.md#field-1) elements. Similar to the [bitwise NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/ Web/JavaScript/Reference/Operators/Bitwise_NOT). **Note:** The NOT gate only operates over the amount of bits specified by the `length` parameter. A NOT gate works by returning `1` in each bit position if the corresponding bit of the operand is `0`, and returning `0` if the corresponding bit of the operand is `1`. The `length` parameter lets you define how many bits to NOT. **Note:** Specifying a larger `length` parameter adds additional constraints. The operation will fail if the length or the input value is larger than 254. NOT is implemented in two different ways. If the `checked` parameter is set to `true` the [xor](modules.md#xor) gadget is reused with a second argument to be an all one bitmask the same length. This approach needs as many rows as an XOR would need for a single negation. If the `checked` parameter is set to `false`, NOT is implemented as a subtraction of the input from the all one bitmask. This implementation is returned by default if no `checked` parameter is provided. You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not) **`Example`** ```ts // not-ing 4 bits with the unchecked version let a = Field(0b0101); let b = Gadgets.not(a,4,false); b.assertEquals(0b1010); // not-ing 4 bits with the checked version utilizing the xor gadget let a = Field(0b0101); let b = Gadgets.not(a,4,true); b.assertEquals(0b1010); ``` **`Throws`** Throws an error if the input value exceeds 254 bits. |
| `rangeCheck16` | (`x`: `Field`) => `void` | - |
| `rangeCheck32` | (`x`: `Field`) => `void` | Asserts that the input value is in the range [0, 2^32). This function proves that the provided field element can be represented with 32 bits. If the field element exceeds 32 bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheck32(x); // successfully proves 32-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheck32(xLarge); // throws an error since input exceeds 32 bits ``` **Note**: Small "negative" field element inputs are interpreted as large integers close to the field size, and don't pass the 32-bit check. If you want to prove that a value lies in the int32 range [-2^31, 2^31), you could use `rangeCheck32(x.add(1n << 31n))`. |
| `rangeCheck3x12` | (`v0`: `Field`, `v1`: `Field`, `v2`: `Field`) => `void` | Checks that three [Field](modules.md#field-1) elements are in the range [0, 2^12) (using only one row). Internally, this gadget relies on the 12-bit [range check table](https://github.com/o1-labs/proof-systems/blob/master/kimchi/src/circuits/lookup/tables/mod.rs). All three inputs are checked to be included in that table. It's possible to use this as a range check for bit lengths n < 12, by passing in _two values_. - the value to be checked, `x`, to prove that x in [0, 2^12) - x scaled by 2^(12 - n), to prove that either x in [0, 2^n) or `x * 2^(12 - n)` overflows the field size (which is excluded by the first check) Note that both of these checks are necessary to prove x in [0, 2^n). You can find more details about lookups in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=lookup%20gate#lookup) **`Throws`** Throws an error if one of the input values exceeds 2^12. **`Example`** ```typescript let a = Field(4000); rangeCheck3x12(a, Field(0), Field(0)); // works, since `a` is less than 12 bits let aScaled = a.mul(1 << 4); // scale `a`, to assert that it's less than 8 bits rangeCheck3x12(a, aScaled, Field(0)); // throws an error, since `a` is greater than 8 bits (and so `aScaled` is greater than 12 bits) ``` |
| `rangeCheck64` | (`x`: `Field`) => `void` | Asserts that the input value is in the range [0, 2^64). This function proves that the provided field element can be represented with 64 bits. If the field element exceeds 64 bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheck64(x); // successfully proves 64-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheck64(xLarge); // throws an error since input exceeds 64 bits ``` **Note**: Small "negative" field element inputs are interpreted as large integers close to the field size, and don't pass the 64-bit check. If you want to prove that a value lies in the int64 range [-2^63, 2^63), you could use `rangeCheck64(x.add(1n << 63n))`. |
| `rangeCheck8` | (`x`: `Field`) => `void` | Asserts that the input value is in the range [0, 2^8). See [rangeCheck64](modules.md#rangecheck64) for analogous details and usage examples. |
| `rangeCheckN` | (`n`: `number`, `x`: `Field`, `message?`: `string`) => `void` | Asserts that the input value is in the range [0, 2^n). `n` must be a multiple of 16. This function proves that the provided field element can be represented with `n` bits. If the field element exceeds `n` bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds `n` bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheckN(32, x); // successfully proves 32-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheckN(32, xLarge); // throws an error since input exceeds 32 bits ``` |
| `rightShift64` | (`field`: `Field`, `bits`: `number`) => `Field` | Performs a right shift operation on the provided [Field](modules.md#field-1) element. This is similar to the `>>` shift operation in JavaScript, where bits are moved to the right. The `rightShift64` function utilizes the rotation method internally to implement this operation. * It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the shift. To safely use `rightShift64()`, you need to make sure that the value passed in is range-checked to 64 bits; for example, using [rangeCheck64](modules.md#rangecheck64). **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.rightShift64(x, 2); // right shift by 2 bits y.assertEquals(0b000011); // 3 in binary const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); rightShift64(xLarge, 32); // throws an error since input exceeds 64 bits ``` |
| `rotate32` | (`field`: `Field`, `bits`: `number`, `direction`: ``"left"`` \| ``"right"``) => `Field` | A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript, with the distinction that the bits are circulated to the opposite end of a 32-bit representation rather than being discarded. For a left rotation, this means that bits shifted off the left end reappear at the right end. Conversely, for a right rotation, bits shifted off the right end reappear at the left end. It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number, where the most significant (32th) bit is on the left end and the least significant bit is on the right end. The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation. **Important:** The gadget assumes that its input is at most 32 bits in size. If the input exceeds 32 bits, the gadget is invalid and fails to prove correct execution of the rotation. To safely use `rotate32()`, you need to make sure that the value passed in is range-checked to 32 bits; for example, using [rangeCheck32](modules.md#rangecheck32). **`Throws`** Throws an error if the input value exceeds 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); const y = Gadgets.rotate32(x, 2, 'left'); // left rotation by 2 bits const z = Gadgets.rotate32(x, 2, 'right'); // right rotation by 2 bits y.assertEquals(0b110000); z.assertEquals(0b000011); const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rotate32(xLarge, 32, "left"); // throws an error since input exceeds 32 bits ``` |
| `rotate64` | (`field`: `Field`, `bits`: `number`, `direction`: ``"left"`` \| ``"right"``) => `Field` | A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript, with the distinction that the bits are circulated to the opposite end of a 64-bit representation rather than being discarded. For a left rotation, this means that bits shifted off the left end reappear at the right end. Conversely, for a right rotation, bits shifted off the right end reappear at the left end. It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation. **Important:** The gadget assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the rotation. To safely use `rotate64()`, you need to make sure that the value passed in is range-checked to 64 bits; for example, using [rangeCheck64](modules.md#rangecheck64). You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#rotation) **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); const y = Gadgets.rotate64(x, 2, 'left'); // left rotation by 2 bits const z = Gadgets.rotate64(x, 2, 'right'); // right rotation by 2 bits y.assertEquals(0b110000); z.assertEquals(0b000011); const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rotate64(xLarge, 32, "left"); // throws an error since input exceeds 64 bits ``` |
| `xor` | (`a`: `Field`, `b`: `Field`, `length`: `number`) => `Field` | Bitwise XOR gadget on [Field](modules.md#field-1) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR). A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal. This gadget builds a chain of XOR gates recursively. Each XOR gate can verify 16 bit at most. If your input elements exceed 16 bit, another XOR gate will be added to the chain. The `length` parameter lets you define how many bits should be compared. `length` is rounded to the nearest multiple of 16, `paddedLength = ceil(length / 16) * 16`, and both input values are constrained to fit into `paddedLength` bits. The output is guaranteed to have at most `paddedLength` bits as well. **Note:** Specifying a larger `length` parameter adds additional constraints. It is also important to mention that specifying a smaller `length` allows the verifier to infer the length of the original input data (e.g. smaller than 16 bit if only one XOR gate has been used). A zkApp developer should consider these implications when choosing the `length` parameter and carefully weigh the trade-off between increased amount of constraints and security. **Important:** Both [Field](modules.md#field-1) elements need to fit into `2^paddedLength - 1`. Otherwise, an error is thrown and no proof can be generated. For example, with `length = 2` (`paddedLength = 16`), `xor()` will fail for any input that is larger than `2**16`. You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1) **`Throws`** Throws an error if the input values exceed `2^paddedLength - 1`. **`Example`** ```ts let a = Field(0b0101); let b = Field(0b0011); let c = Gadgets.xor(a, b, 4); // xor-ing 4 bits c.assertEquals(0b0110); ``` |

#### Defined in

[lib/provable/gadgets/gadgets.ts:36](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/gadgets/gadgets.ts#L36)

___

### Hash

• `Const` **Hash**: `Object`

A collection of hash functions which can be used in provable code.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Keccak256` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The pre-NIST Keccak hash function with an output length of 256 bits. |
| `Keccak256.hash` | [object Object] | Hashes the given bytes using Keccak-256. This is an alias for `Keccak.preNist(256, bytes)`.\ See [preNist](modules.md#prenist) for details and usage examples. |
| `Keccak384` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The pre-NIST Keccak hash function with an output length of 384 bits. |
| `Keccak384.hash` | [object Object] | Hashes the given bytes using Keccak-384. This is an alias for `Keccak.preNist(384, bytes)`.\ See [preNist](modules.md#prenist) for details and usage examples. |
| `Keccak512` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The pre-NIST Keccak hash function with an output length of 512 bits. |
| `Keccak512.hash` | [object Object] | Hashes the given bytes using Keccak-512. This is an alias for `Keccak.preNist(512, bytes)`.\ See [preNist](modules.md#prenist) for details and usage examples. |
| `Poseidon` | \{ `Sponge`: typeof `Sponge` ; `hash`: (`input`: `Field`[]) => `Field` ; `hashPacked`: \<T\>(`type`: `Hashable`\<`T`\>, `value`: `T`) => `Field` ; `hashToGroup`: (`input`: `Field`[]) => \{ `x`: `Field` ; `y`: \{ `x0`: `Field` ; `x1`: `Field`  }  } ; `hashWithPrefix`: (`prefix`: `string`, `input`: `Field`[]) => `Field` ; `initialState`: () => [`Field`, `Field`, `Field`] ; `update`: (`state`: [`Field`, `Field`, `Field`], `input`: `Field`[]) => [`Field`, `Field`, `Field`]  } | - |
| `Poseidon.Sponge` | typeof `Sponge` | - |
| `Poseidon.hash` | [object Object] | - |
| `Poseidon.hashPacked` | [object Object] | Hashes a provable type efficiently. ```ts let skHash = Poseidon.hashPacked(PrivateKey, secretKey); ``` Note: Instead of just doing `Poseidon.hash(value.toFields())`, this uses the `toInput()` method on the provable type to pack the input into as few field elements as possible. This saves constraints because packing has a much lower per-field element cost than hashing. |
| `Poseidon.hashToGroup` | [object Object] | - |
| `Poseidon.hashWithPrefix` | [object Object] | - |
| `Poseidon.initialState` | [object Object] | - |
| `Poseidon.update` | [object Object] | - |
| `SHA2_256` | \{ `hash`: (`data`: `FlexibleBytes`) => `Bytes` = Gadgets.SHA256.hash } | The SHA2 hash function with an output length of 256 bits. |
| `SHA2_256.hash` | (`data`: `FlexibleBytes`) => `Bytes` | Hashes the given bytes using SHA2-256. This is an alias for `Gadgets.SHA256.hash(bytes)`.\ See [__type](modules.md#__type) for details and usage examples. |
| `SHA3_256` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The SHA3 hash function with an output length of 256 bits. |
| `SHA3_256.hash` | [object Object] | Hashes the given bytes using SHA3-256. This is an alias for `Keccak.nistSha3(256, bytes)`.\ See [nistSha3](modules.md#nistsha3) for details and usage examples. |
| `SHA3_384` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The SHA3 hash function with an output length of 384 bits. |
| `SHA3_384.hash` | [object Object] | Hashes the given bytes using SHA3-384. This is an alias for `Keccak.nistSha3(384, bytes)`.\ See [nistSha3](modules.md#nistsha3) for details and usage examples. |
| `SHA3_512` | \{ `hash`: (`bytes`: `Bytes`) => `Bytes`  } | The SHA3 hash function with an output length of 512 bits. |
| `SHA3_512.hash` | [object Object] | Hashes the given bytes using SHA3-512. This is an alias for `Keccak.nistSha3(512, bytes)`.\ See [nistSha3](modules.md#nistsha3) for details and usage examples. |
| `hash` | (`input`: `Field`[]) => `Field` | Hashes the given field elements using [Poseidon](https://eprint.iacr.org/2019/458.pdf). Alias for `Poseidon.hash()`. ```ts let hash = Hash.hash([a, b, c]); ``` **Important:** This is by far the most efficient hash function o1js has available in provable code. Use it by default, if no compatibility concerns require you to use a different hash function. The Poseidon implementation operates over the native [Pallas base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) and uses parameters generated specifically for the [Mina](https://minaprotocol.com) blockchain. We use a `rate` of 2, which means that 2 field elements are hashed per permutation. A permutation causes 11 rows in the constraint system. You can find the full set of Poseidon parameters [here](https://github.com/o1-labs/o1js-bindings/blob/main/crypto/constants.ts). |

#### Defined in

[lib/provable/crypto/hash.ts:11](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/hash.ts#L11)

___

### Keccak

• `Const` **Keccak**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ethereum` | (`message`: `FlexibleBytes`) => `Bytes` |
| `nistSha3` | (`len`: ``256`` \| ``512`` \| ``384``, `message`: `FlexibleBytes`) => `Bytes` |
| `preNist` | (`len`: ``256`` \| ``512`` \| ``384``, `message`: `FlexibleBytes`) => `Bytes` |

#### Defined in

[lib/provable/crypto/keccak.ts:11](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/keccak.ts#L11)

___

### Permissions

• **Permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allImpossible` | () => [`Permissions`](modules.md#permissions) |
| `default` | () => [`Permissions`](modules.md#permissions) |
| `dummy` | () => [`Permissions`](modules.md#permissions) |
| `fromJSON` | (`permissions`: \{ `access`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editActionState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `send`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVerificationKey`: \{ `auth`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `txnVersion`: `string`  } ; `setVotingFor`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](modules/Types.Json.md#authrequired)  }) => [`Permissions`](modules.md#permissions) |
| `fromString` | (`permission`: [`AuthRequired`](modules/Types.Json.md#authrequired)) => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `impossible` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `initial` | () => [`Permissions`](modules.md#permissions) |
| `none` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proof` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proofOrSignature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `signature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |

#### Defined in

[lib/mina/account-update.ts:210](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L210)

[lib/mina/account-update.ts:285](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L285)

___

### Pickles

• **Pickles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compile` | (`rules`: `MlArray`\<[`Rule`](modules/Pickles.md#rule)\>, `config`: \{ `overrideWrapDomain?`: ``0`` \| ``2`` \| ``1`` ; `publicInputSize`: `number` ; `publicOutputSize`: `number` ; `storable?`: [`Cache`](modules/Pickles.md#cache)  }) => \{ `getVerificationKey`: () => `Promise`\<[\_: 0, data: string, hash: FieldConst]\> ; `provers`: `MlArray`\<[`Prover`](modules/Pickles.md#prover)\> ; `tag`: `unknown` ; `verify`: (`statement`: [`Statement`](modules/Pickles.md#statement)\<`FieldConst`\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  } |
| `decodeVerificationKey` | (`vk`: `string`) => `MlWrapVerificationKey` |
| `dummyProof` | \<N\>(`maxProofsVerified`: `N`, `domainLog2`: `number`) => [`N`, `unknown`] |
| `dummyVerificationKey` | () => [\_: 0, data: string, hash: FieldConst] |
| `encodeVerificationKey` | (`vk`: `MlWrapVerificationKey`) => `string` |
| `proofOfBase64` | \<N\>(`base64`: `string`, `maxProofsVerified`: `N`) => [`N`, `unknown`] |
| `proofToBase64` | (`proof`: [``0`` \| ``2`` \| ``1``, `unknown`]) => `string` |
| `proofToBase64Transaction` | (`proof`: `unknown`) => `string` |
| `util` | \{ `fromMlString`: (`s`: `MlBytes`) => `string` ; `toMlString`: (`s`: `string`) => `MlBytes`  } |
| `util.fromMlString` | [object Object] |
| `util.toMlString` | [object Object] |
| `loadSrsFp` | () => [`WasmFpSrs`](classes/wasm.WasmFpSrs.md) |
| `loadSrsFq` | () => [`WasmFqSrs`](classes/wasm.WasmFqSrs.md) |
| `verify` | (`statement`: [`Statement`](modules/Pickles.md#statement)\<`FieldConst`\>, `proof`: `unknown`, `verificationKey`: `string`) => `Promise`\<`boolean`\> |

#### Defined in

[snarky.d.ts:610](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L610)

[snarky.d.ts:657](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L657)

___

### Poseidon

• `Const` **Poseidon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Sponge` | typeof `Sponge` |
| `hash` | (`input`: `Field`[]) => `Field` |
| `hashPacked` | \<T\>(`type`: `Hashable`\<`T`\>, `value`: `T`) => `Field` |
| `hashToGroup` | (`input`: `Field`[]) => \{ `x`: `Field` ; `y`: \{ `x0`: `Field` ; `x1`: `Field`  }  } |
| `hashWithPrefix` | (`prefix`: `string`, `input`: `Field`[]) => `Field` |
| `initialState` | () => [`Field`, `Field`, `Field`] |
| `update` | (`state`: [`Field`, `Field`, `Field`], `input`: `Field`[]) => [`Field`, `Field`, `Field`] |

#### Defined in

[lib/provable/crypto/poseidon.ts:49](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/poseidon.ts#L49)

___

### Provable

• **Provable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Array` | \<A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`\<`A`[]\> |
| `asProver` | (`f`: () => `void`) => `void` |
| `assertEqual` | \<T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `void`\<T\>(`x`: `T`, `y`: `T`) => `void` |
| `constraintSystem` | (`f`: () => `Promise`\<`void`\> \| () => `void`) => `Promise`\<\{ `digest`: `string` ; `gates`: [`Gate`](modules.md#gate)[] ; `publicInputSize`: `number` ; `rows`: `number` ; `print`: () => `void` ; `summary`: () => `Partial`\<`Record`\<[`GateType`](modules.md#gatetype) \| ``"Total rows"``, `number`\>\>  }\> |
| `equal` | \<T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `Bool`\<T\>(`x`: `T`, `y`: `T`) => `Bool` |
| `if` | \<T\>(`condition`: `Bool`, `type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `T`\<T\>(`condition`: `Bool`, `x`: `T`, `y`: `T`) => `T` |
| `inCheckedComputation` | () => `boolean` |
| `inProver` | () => `boolean` |
| `isConstant` | \<T\>(`type`: [`Provable`](modules.md#provable-1)\<`T`\>, `x`: `T`) => `boolean` |
| `log` | (...`args`: `any`) => `void` |
| `switch` | \<T, A\>(`mask`: `Bool`[], `type`: `A`, `values`: `T`[]) => `T` |
| `witness` | \<T, S\>(`type`: `S`, `compute`: () => `T`) => `T` |
| `witnessAsync` | \<T, S\>(`type`: `S`, `compute`: () => `Promise`\<`T`\>) => `Promise`\<`T`\> |
| `runAndCheck` | (`f`: () => `Promise`\<`void`\> \| () => `void`) => `Promise`\<`void`\> |
| `runUnchecked` | (`f`: () => `Promise`\<`void`\> \| () => `void`) => `Promise`\<`void`\> |
| `toConstant` | \<T\>(`type`: [`Provable`](modules.md#provable-1)\<`T`\>, `value`: `T`) => `T` |

#### Defined in

[lib/provable/provable.ts:49](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/provable.ts#L49)

[lib/provable/provable.ts:51](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/provable.ts#L51)

___

### Snarky

• **Snarky**: `Object`

Internal interface to snarky-ml

Note for devs: This module is intended to closely mirror snarky-ml's core, low-level APIs.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuit` | \{ `keypair`: \{ `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } ; `compile`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`) => `unknown` ; `prove`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`, `publicInput`: `MlArray`\<`FieldConst`\>, `keypair`: `unknown`) => `unknown` ; `verify`: (`publicInput`: `MlArray`\<`FieldConst`\>, `proof`: `unknown`, `verificationKey`: `unknown`) => `boolean`  } | The circuit API is a low level interface to create zero-knowledge proofs |
| `circuit.keypair` | \{ `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } | - |
| `circuit.keypair.getConstraintSystemJSON` | [object Object] | Returns a low-level JSON representation of the circuit: a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs |
| `circuit.keypair.getVerificationKey` | [object Object] | - |
| `circuit.compile` | [object Object] | Generates a proving key and a verification key for the provable function `main` |
| `circuit.prove` | [object Object] | Proves a statement using the private input, public input and the keypair of the circuit. |
| `circuit.verify` | [object Object] | Verifies a proof using the public input, the proof and the verification key of the circuit. |
| `constraintSystem` | \{ `digest`: (`system`: `MlConstraintSystem`) => `string` ; `rows`: (`system`: `MlConstraintSystem`) => `number` ; `toJson`: (`system`: `MlConstraintSystem`) => `JsonConstraintSystem`  } | APIs to interact with a `Backend.R1CS_constraint_system.t` |
| `constraintSystem.digest` | [object Object] | Returns an md5 digest of the constraint system. |
| `constraintSystem.rows` | [object Object] | Returns the number of rows of the constraint system. |
| `constraintSystem.toJson` | [object Object] | Returns a JSON representation of the constraint system. |
| `field` | \{ `assertBoolean`: (`x`: `FieldVar`) => `void` ; `assertEqual`: (`x`: `FieldVar`, `y`: `FieldVar`) => `void` ; `assertMul`: (`x`: `FieldVar`, `y`: `FieldVar`, `z`: `FieldVar`) => `void` ; `assertSquare`: (`x`: `FieldVar`, `y`: `FieldVar`) => `void` ; `readVar`: (`x`: `FieldVar`) => `FieldConst` ; `truncateToBits16`: (`lengthDiv16`: `number`, `x`: `FieldVar`) => `FieldVar`  } | APIs to add constraints on field variables |
| `field.assertBoolean` | [object Object] | x*x === x without handling of constants |
| `field.assertEqual` | [object Object] | x === y without handling of constants |
| `field.assertMul` | [object Object] | x*y === z without handling of constants |
| `field.assertSquare` | [object Object] | x*x === y without handling of constants |
| `field.readVar` | [object Object] | evaluates a CVar by walking the AST and reading Vars from a list of public input + aux values |
| `field.truncateToBits16` | [object Object] | returns x truncated to the lowest `16 * lengthDiv16` bits => can be used to assert that x fits in `16 * lengthDiv16` bits. more efficient than `toBits()` because it uses the EC_endoscalar gate; does 16 bits per row (vs 1 bits per row that you can do with generic gates). |
| `gates` | \{ `addFixedLookupTable`: (`id`: `number`, `data`: `MlArray`\<`MlArray`\<`FieldConst`\>\>) => `void` ; `addRuntimeTableConfig`: (`id`: `number`, `firstColumn`: `MlArray`\<`FieldConst`\>) => `void` ; `ecAdd`: (`p1`: `MlGroup`, `p2`: `MlGroup`, `p3`: `MlGroup`, `inf`: `FieldVar`, `same_x`: `FieldVar`, `slope`: `FieldVar`, `inf_z`: `FieldVar`, `x21_inv`: `FieldVar`) => `MlGroup` ; `ecEndoscalar`: (`state`: `MlArray`\<[\_: 0, n0: FieldVar, n8: FieldVar, a0: FieldVar, b0: FieldVar, a8: FieldVar, b8: FieldVar, x0: FieldVar, x1: FieldVar, x2: FieldVar, x3: FieldVar]\>) => `void` ; `ecEndoscale`: (`state`: `MlArray`\<[\_: 0, xt: FieldVar, yt: FieldVar, xp: FieldVar, yp: FieldVar, nAcc: FieldVar, xr: FieldVar, yr: FieldVar, s1: FieldVar, s3: FieldVar, b1: FieldVar]\>, `xs`: `FieldVar`, `ys`: `FieldVar`, `nAcc`: `FieldVar`) => `void` ; `ecScale`: (`state`: `MlArray`\<[\_: 0, accs: MlArray\<[0, FieldVar, FieldVar]\>, bits: MlArray\<FieldVar\>, ss: MlArray\<FieldVar\>, base: MlGroup, nPrev: Field, nNext: Field]\>) => `void` ; `foreignFieldAdd`: (`left`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `right`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `fieldOverflow`: `FieldVar`, `carry`: `FieldVar`, `foreignFieldModulus`: [``0``, `FieldConst`, `FieldConst`, `FieldConst`], `sign`: `FieldConst`) => `void` ; `foreignFieldMul`: (`left`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `right`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `remainder`: [``0``, `FieldVar`, `FieldVar`], `quotient`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `quotientHiBound`: `FieldVar`, `product1`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`], `carry0`: `FieldVar`, `carry1p`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`], `carry1c`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`], `foreignFieldModulus2`: `FieldConst`, `negForeignFieldModulus`: [``0``, `FieldConst`, `FieldConst`, `FieldConst`]) => `void` ; `generic`: (`sl`: `FieldConst`, `l`: `FieldVar`, `sr`: `FieldConst`, `r`: `FieldVar`, `so`: `FieldConst`, `o`: `FieldVar`, `sm`: `FieldConst`, `sc`: `FieldConst`) => `void` ; `lookup`: (`input`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`]) => `void` ; `poseidon`: (`state`: `MlArray`\<[``0``, `Field`, `Field`, `Field`]\>) => `void` ; `rangeCheck0`: (`v0`: `FieldVar`, `v0p`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`], `v0c`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`], `compact`: `FieldConst`) => `void` ; `rangeCheck1`: (`v2`: `FieldVar`, `v12`: `FieldVar`, `vCurr`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`], `vNext`: [``0``, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`, `FieldVar`]) => `void` ; `raw`: (`kind`: `KimchiGateType`, `values`: `MlArray`\<`FieldVar`\>, `coefficients`: `MlArray`\<`FieldConst`\>) => `void` ; `rotate`: (`field`: `FieldVar`, `rotated`: `FieldVar`, `excess`: `FieldVar`, `limbs`: `MlArray`\<`FieldVar`\>, `crumbs`: `MlArray`\<`FieldVar`\>, `two_to_rot`: `FieldConst`) => `void` ; `xor`: (`in1`: `FieldVar`, `in2`: `FieldVar`, `out`: `FieldVar`, `in1_0`: `FieldVar`, `in1_1`: `FieldVar`, `in1_2`: `FieldVar`, `in1_3`: `FieldVar`, `in2_0`: `FieldVar`, `in2_1`: `FieldVar`, `in2_2`: `FieldVar`, `in2_3`: `FieldVar`, `out_0`: `FieldVar`, `out_1`: `FieldVar`, `out_2`: `FieldVar`, `out_3`: `FieldVar`) => `void` ; `zero`: (`in1`: `FieldVar`, `in2`: `FieldVar`, `out`: `FieldVar`) => `void`  } | - |
| `gates.addFixedLookupTable` | [object Object] | - |
| `gates.addRuntimeTableConfig` | [object Object] | - |
| `gates.ecAdd` | [object Object] | Low-level Elliptic Curve Addition gate. |
| `gates.ecEndoscalar` | [object Object] | - |
| `gates.ecEndoscale` | [object Object] | - |
| `gates.ecScale` | [object Object] | - |
| `gates.foreignFieldAdd` | [object Object] | - |
| `gates.foreignFieldMul` | [object Object] | - |
| `gates.generic` | [object Object] | - |
| `gates.lookup` | [object Object] | - |
| `gates.poseidon` | [object Object] | - |
| `gates.rangeCheck0` | [object Object] | Range check gate |
| `gates.rangeCheck1` | [object Object] | - |
| `gates.raw` | [object Object] | - |
| `gates.rotate` | [object Object] | - |
| `gates.xor` | [object Object] | - |
| `gates.zero` | [object Object] | - |
| `group` | \{ `scale`: (`p`: `MlGroup`, `s`: `MlArray`\<`FieldVar`\>) => `MlGroup`  } | - |
| `group.scale` | [object Object] | - |
| `poseidon` | \{ `sponge`: \{ `absorb`: (`sponge`: `unknown`, `x`: `FieldVar`) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => `FieldVar`  } ; `hashToGroup`: (`input`: `MlArray`\<`FieldVar`\>) => `MlPair`\<`FieldVar`, `FieldVar`\> ; `update`: (`state`: `MlArray`\<`FieldVar`\>, `input`: `MlArray`\<`FieldVar`\>) => [``0``, `FieldVar`, `FieldVar`, `FieldVar`]  } | - |
| `poseidon.sponge` | \{ `absorb`: (`sponge`: `unknown`, `x`: `FieldVar`) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => `FieldVar`  } | - |
| `poseidon.sponge.absorb` | [object Object] | - |
| `poseidon.sponge.create` | [object Object] | - |
| `poseidon.sponge.squeeze` | [object Object] | - |
| `poseidon.hashToGroup` | [object Object] | - |
| `poseidon.update` | [object Object] | - |
| `run` | \{ `state`: \{ `allocVar`: (`state`: `SnarkyState`) => `FieldVar` ; `asProver`: (`state`: `SnarkyState`) => `MlBool` ; `getVariableValue`: (`state`: `SnarkyState`, `x`: `FieldVar`) => `FieldConst` ; `hasWitness`: (`state`: `SnarkyState`) => `MlBool` ; `setAsProver`: (`state`: `SnarkyState`, `value`: `MlBool`) => `void` ; `storeFieldElt`: (`state`: `SnarkyState`, `x`: `FieldConst`) => `FieldVar`  } ; `asProver`: (`f`: () => `void`) => `void` ; `enterAsProver`: (`size`: `number`) => (`fields`: `MlOption`\<`MlArray`\<`FieldConst`\>\>) => `MlArray`\<`VarFieldVar`\> ; `enterConstraintSystem`: () => () => `MlConstraintSystem` ; `enterGenerateWitness`: () => () => [\_: 0, public\_inputs: FieldVector, auxiliary\_inputs: FieldVector] ; `inProver`: () => `MlBool` ; `inProverBlock`: () => `boolean` ; `setEvalConstraints`: (`value`: `MlBool`) => `void`  } | APIs that have to do with running provable code |
| `run.state` | \{ `allocVar`: (`state`: `SnarkyState`) => `FieldVar` ; `asProver`: (`state`: `SnarkyState`) => `MlBool` ; `getVariableValue`: (`state`: `SnarkyState`, `x`: `FieldVar`) => `FieldConst` ; `hasWitness`: (`state`: `SnarkyState`) => `MlBool` ; `setAsProver`: (`state`: `SnarkyState`, `value`: `MlBool`) => `void` ; `storeFieldElt`: (`state`: `SnarkyState`, `x`: `FieldConst`) => `FieldVar`  } | Operations on snarky's internal state |
| `run.state.allocVar` | [object Object] | - |
| `run.state.asProver` | [object Object] | - |
| `run.state.getVariableValue` | [object Object] | - |
| `run.state.hasWitness` | [object Object] | - |
| `run.state.setAsProver` | [object Object] | - |
| `run.state.storeFieldElt` | [object Object] | - |
| `run.asProver` | [object Object] | Runs code as a prover. |
| `run.enterAsProver` | [object Object] | Starts an asProver / witness block and returns a function to finish it. |
| `run.enterConstraintSystem` | [object Object] | Starts constraint system runner and returns a function to finish it. |
| `run.enterGenerateWitness` | [object Object] | Starts witness generation and returns a function to finish it. |
| `run.inProver` | [object Object] | Checks whether Snarky runs in "prover mode", that is, with witnesses |
| `run.inProverBlock` | [object Object] | Check whether we are inside an asProver or exists block |
| `run.setEvalConstraints` | [object Object] | Setting that controls whether snarky throws an exception on violated constraint. |

#### Defined in

[snarky.d.ts:56](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L56)

[snarky.d.ts:68](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L68)

___

### Test

• `Const` **Test**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encoding` | \{ `memoHashBase58`: (`memoBase58`: `string`) => `FieldConst` ; `memoToBase58`: (`memoString`: `string`) => `string` ; `ofBase58`: (`base58`: `string`, `versionByte`: `number`) => `MlBytes` ; `privateKeyOfBase58`: (`privateKeyBase58`: `string`) => `ScalarConst` ; `privateKeyToBase58`: (`privateKey`: `ScalarConst`) => `string` ; `publicKeyOfBase58`: (`publicKeyBase58`: `string`) => [`MlPublicKey`](modules.md#mlpublickey) ; `publicKeyToBase58`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey)) => `string` ; `toBase58`: (`s`: `MlBytes`, `versionByte`: `number`) => `string` ; `tokenIdOfBase58`: (`fieldBase58`: `string`) => `FieldConst` ; `tokenIdToBase58`: (`field`: `FieldConst`) => `string`  } |
| `encoding.memoHashBase58` | [object Object] |
| `encoding.memoToBase58` | [object Object] |
| `encoding.ofBase58` | [object Object] |
| `encoding.privateKeyOfBase58` | [object Object] |
| `encoding.privateKeyToBase58` | [object Object] |
| `encoding.publicKeyOfBase58` | [object Object] |
| `encoding.publicKeyToBase58` | [object Object] |
| `encoding.toBase58` | [object Object] |
| `encoding.tokenIdOfBase58` | [object Object] |
| `encoding.tokenIdToBase58` | [object Object] |
| `fieldsFromJson` | \{ `accountUpdate`: (`json`: `string`) => `MlArray`\<`FieldConst`\>  } |
| `fieldsFromJson.accountUpdate` | [object Object] |
| `hashFromJson` | \{ `accountUpdate`: (`json`: `string`, `networkId`: `string`) => `FieldConst` ; `transactionCommitments`: (`txJson`: `string`, `networkId`: `string`) => \{ `commitment`: `FieldConst` ; `feePayerHash`: `FieldConst` ; `fullCommitment`: `FieldConst`  } ; `zkappPublicInput`: (`txJson`: `string`, `accountUpdateIndex`: `number`) => \{ `accountUpdate`: `FieldConst` ; `calls`: `FieldConst`  }  } |
| `hashFromJson.accountUpdate` | [object Object] |
| `hashFromJson.transactionCommitments` | [object Object] |
| `hashFromJson.zkappPublicInput` | [object Object] |
| `hashInputFromJson` | \{ `accountPrecondition`: (`json`: `String`) => `MlHashInput` ; `body`: (`json`: `String`) => `MlHashInput` ; `networkPrecondition`: (`json`: `String`) => `MlHashInput` ; `packInput`: (`input`: `MlHashInput`) => `MlArray`\<`FieldConst`\> ; `permissions`: (`json`: `String`) => `MlHashInput` ; `timing`: (`json`: `String`) => `MlHashInput` ; `update`: (`json`: `String`) => `MlHashInput`  } |
| `hashInputFromJson.accountPrecondition` | [object Object] |
| `hashInputFromJson.body` | [object Object] |
| `hashInputFromJson.networkPrecondition` | [object Object] |
| `hashInputFromJson.packInput` | [object Object] |
| `hashInputFromJson.permissions` | [object Object] |
| `hashInputFromJson.timing` | [object Object] |
| `hashInputFromJson.update` | [object Object] |
| `poseidon` | \{ `hashToGroup`: (`input`: `MlArray`\<`FieldConst`\>) => `MlPair`\<`FieldConst`, `FieldConst`\>  } |
| `poseidon.hashToGroup` | [object Object] |
| `signature` | \{ `dummySignature`: () => `string` ; `signFieldElement`: (`messageHash`: `FieldConst`, `privateKey`: `ScalarConst`, `networkId`: `string`) => `string`  } |
| `signature.dummySignature` | [object Object] |
| `signature.signFieldElement` | [object Object] |
| `tokenId` | \{ `derive`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey), `tokenId`: `FieldConst`) => `FieldConst` ; `deriveChecked`: (`publicKey`: [`MlPublicKeyVar`](modules.md#mlpublickeyvar), `tokenId`: `FieldVar`) => `FieldVar`  } |
| `tokenId.derive` | [object Object] |
| `tokenId.deriveChecked` | [object Object] |
| `transactionHash` | \{ `examplePayment`: () => `string` ; `hashPayment`: (`payment`: `string`) => `string` ; `hashPaymentV1`: (`payment`: `string`) => `string` ; `hashZkAppCommand`: (`command`: `string`) => `string` ; `serializeCommon`: (`common`: `string`) => \{ `data`: `Uint8Array`  } ; `serializePayment`: (`payment`: `string`) => \{ `data`: `Uint8Array`  } ; `serializePaymentV1`: (`payment`: `string`) => `string`  } |
| `transactionHash.examplePayment` | [object Object] |
| `transactionHash.hashPayment` | [object Object] |
| `transactionHash.hashPaymentV1` | [object Object] |
| `transactionHash.hashZkAppCommand` | [object Object] |
| `transactionHash.serializeCommon` | [object Object] |
| `transactionHash.serializePayment` | [object Object] |
| `transactionHash.serializePaymentV1` | [object Object] |

#### Defined in

[snarky.d.ts:500](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L500)

___

### TokenId

• `Const` **TokenId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: `Field`) => `void` |
| `default` | `Field` |
| `empty` | () => `Field` |
| `fromFields` | (`x`: `Field`[], `aux`: `any`[]) => `Field` |
| `toAuxiliary` | (`x?`: `Field`) => `any`[] |
| `toFields` | (`x`: `Field`) => `Field`[] |
| `toInput` | (`x`: `Field`) => \{ `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  } |
| `derive` | (`tokenOwner`: [`PublicKey`](classes/Types.PublicKey.md), `parentTokenId`: `Field`) => `Field` |
| `fromBase58` | (`base58`: `string`) => `Field` |
| `fromJSON` | (`x`: `string`) => `Field` |
| `sizeInFields` | () => `number` |
| `toBase58` | (`t`: `Field`) => `string` |
| `toJSON` | (`x`: `Field`) => `string` |

#### Defined in

[lib/mina/account-update.ts:562](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L562)

___

### TransactionVersion

• `Const` **TransactionVersion**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current` | () => [`UInt32`](classes/UInt32.md) |

#### Defined in

[lib/mina/account-update.ts:120](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L120)

___

### Undefined

• **Undefined**: `ProvablePureExtended`\<`undefined`, ``null``\>

#### Defined in

[lib/proof-system/zkprogram.ts:75](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L75)

[lib/proof-system/zkprogram.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L76)

___

### Void

• **Void**: `ProvablePureExtended`\<`void`, ``null``\>

#### Defined in

[lib/proof-system/zkprogram.ts:80](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L80)

[lib/proof-system/zkprogram.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L81)

___

### ZkappPublicInput

• **ZkappPublicInput**: `ProvablePureExtended`\<\{ `accountUpdate`: `Field` = Field; `calls`: `Field` = Field }, \{ `accountUpdate`: `string` = Field; `calls`: `string` = Field }\>

#### Defined in

[lib/mina/account-update.ts:1914](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1914)

[lib/mina/account-update.ts:1918](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1918)

## Functions

### Account

▸ **Account**(`address`, `tokenId?`): `Account`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](classes/Types.PublicKey.md) |
| `tokenId?` | `Field` |

#### Returns

`Account`

#### Defined in

[lib/mina/zkapp.ts:1444](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1444)

___

### Bool

▸ **Bool**(`...args`): `Bool`

A boolean value. You can create it like this:

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: boolean \| FieldVar \| Bool] |

#### Returns

`Bool`

**`Example`**

```
const b = Bool(true);
```

You can also combine multiple Bools with boolean operations:

**`Example`**

```ts
const c = Bool(false);

const d = b.or(c).and(false).not();

d.assertTrue();
```

Bools are often created by methods on other types such as `Field.equals()`:

```ts
const b: Bool = Field(5).equals(6);
```

#### Defined in

[lib/provable/wrapped.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L81)

___

### Bytes

▸ **Bytes**(`size`): typeof `Bytes`

A provable type representing an array of bytes.

```ts
class Bytes32 extends Bytes(32) {}

let bytes = Bytes32.fromHex('deadbeef');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

typeof `Bytes`

#### Defined in

[lib/provable/wrapped-classes.ts:16](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped-classes.ts#L16)

___

### Field

▸ **Field**(`...args`): `Field`

A [Field](modules.md#field-1) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field).
Every other provable type is built using the [Field](modules.md#field-1) type.

The field is the [pasta base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) of order 2^254 + 0x224698fc094cf91b992d30ed00000001 (Field.ORDER).

You can create a new Field from everything "field-like" (`bigint`, integer `number`, decimal `string`, `Field`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: string \| number \| bigint \| FieldConst \| FieldVar \| Field] |

#### Returns

`Field`

A [Field](modules.md#field-1) with the value converted from the argument

**`Example`**

```
Field(10n); // Field construction from a bigint
Field(100); // Field construction from a number
Field("1"); // Field construction from a decimal string
```

**Beware**: Fields _cannot_ be constructed from fractional numbers or alphanumeric strings:
```ts
Field(3.141); // ERROR: Cannot convert a float to a field element
Field("abc"); // ERROR: Invalid argument "abc"
```

Creating a Field from a negative number can result in unexpected behavior if you are not familiar with [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic).

**`Example`**

```
const x = Field(-1); // valid Field construction from negative number
const y = Field(Field.ORDER - 1n); // same as `x`
```

**Important**: All the functions defined on a Field (arithmetic, logic, etc.) take their arguments as "field-like".
A Field itself is also defined as a "field-like" element.

#### Defined in

[lib/provable/wrapped.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L81)

___

### Group

▸ **Group**(`...args`): `Group`

An element of a Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [\{ `x`: `string` \| `number` \| `bigint` \| `FieldVar` \| `Field` ; `y`: `string` \| `number` \| `bigint` \| `FieldVar` \| `Field`  }] |

#### Returns

`Group`

#### Defined in

[lib/provable/wrapped.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/wrapped.ts#L81)

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

[lib/provable/merkle-tree.ts:220](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L220)

___

### Reducer

▸ **Reducer**\<`T`, `A`\>(`reducer`): `ReducerReturn`\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FlexibleProvablePure`](modules.md#flexibleprovablepure)\<`any`\> |
| `A` | extends `any` = [`InferProvable`](modules.md#inferprovable)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Object` |
| `reducer.actionType` | `T` |

#### Returns

`ReducerReturn`\<`A`\>

#### Defined in

[lib/mina/zkapp.ts:1484](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1484)

___

### State

▸ **State**\<`A`\>(): [`State`](modules.md#state)\<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Returns

[`State`](modules.md#state)\<`A`\>

#### Defined in

[lib/mina/state.ts:73](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/state.ts#L73)

___

### Struct

▸ **Struct**\<`A`, `T`, `J`, `Pure`\>(`type`): (`value`: `T`) => `T` & \{ `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](modules.md#provablepure)\<`T`\> : [`Provable`](modules.md#provable-1)\<`T`\> & \{ `empty`: () => `T` ; `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => \{ `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

`Struct` lets you declare composite types for use in o1js circuits.

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
This, for example, allows you to re-use the same type outside o1js methods, where you might want to store additional metadata.

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
| `T` | extends `unknown` = [`InferProvable`](modules.md#inferprovable)\<`A`\> |
| `J` | extends `unknown` = `InferJson`\<`A`\> |
| `Pure` | extends `boolean` = `IsPure`\<`A`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `A` | Object specifying the layout of the `Struct` |

#### Returns

(`value`: `T`) => `T` & \{ `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](modules.md#provablepure)\<`T`\> : [`Provable`](modules.md#provable-1)\<`T`\> & \{ `empty`: () => `T` ; `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => \{ `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

Class which you can extend

#### Defined in

[lib/provable/types/struct.ts:136](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L136)

___

### ZkProgram

▸ **ZkProgram**\<`StatementType`, `Types`\>(`config`): \{ `analyzeMethods`: () => `Promise`\<\{ [I in keyof Types]: UnwrapPromise\<ReturnType\<typeof analyzeMethod\>\> }\> ; `compile`: (`options?`: \{ `cache?`: [`Cache`](modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](modules.md#field-1)  }  }\> ; `digest`: () => `Promise`\<`string`\> ; `name`: `string` ; `privateInputTypes`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in keyof Types]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `StatementType` | extends `Object` |
| `Types` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `StatementType` & \{ `methods`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> } ; `name`: `string` ; `overrideWrapDomain?`: ``0`` \| ``2`` \| ``1``  } |

#### Returns

\{ `analyzeMethods`: () => `Promise`\<\{ [I in keyof Types]: UnwrapPromise\<ReturnType\<typeof analyzeMethod\>\> }\> ; `compile`: (`options?`: \{ `cache?`: [`Cache`](modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](modules.md#field-1)  }  }\> ; `digest`: () => `Promise`\<`string`\> ; `name`: `string` ; `privateInputTypes`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in keyof Types]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Defined in

[lib/proof-system/zkprogram.ts:245](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L245)

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

[lib/mina/fetch.ts:407](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L407)

___

### assert

▸ **assert**(`stmt`, `message?`): asserts stmt

Assert that a statement is true. If the statement is false, throws an error with the given message.
Can be used in provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stmt` | `boolean` \| `Bool` |
| `message?` | `string` |

#### Returns

asserts stmt

#### Defined in

[lib/provable/gadgets/common.ts:47](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/gadgets/common.ts#L47)

___

### checkZkappTransaction

▸ **checkZkappTransaction**(`transactionHash`, `blockLength?`): `Promise`\<\{ `failureReason`: `string`[][][] ; `success`: `boolean` = false } \| \{ `failureReason`: ``null`` = null; `success`: `boolean` = true }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transactionHash` | `string` | `undefined` |
| `blockLength` | `number` | `20` |

#### Returns

`Promise`\<\{ `failureReason`: `string`[][][] ; `success`: `boolean` = false } \| \{ `failureReason`: ``null`` = null; `success`: `boolean` = true }\>

#### Defined in

[lib/mina/fetch.ts:506](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L506)

___

### circuitMain

▸ **circuitMain**(`target`, `propertyName`, `_descriptor?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | typeof [`Circuit`](classes/Circuit.md) |
| `propertyName` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

#### Returns

`any`

#### Defined in

[lib/proof-system/circuit.ts:185](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L185)

___

### createEcdsa

▸ **createEcdsa**(`curve`): typeof [`EcdsaSignature`](classes/EcdsaSignature.md)

Create a class [EcdsaSignature](classes/EcdsaSignature.md) for verifying ECDSA signatures on the given curve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | `CurveParams` \| typeof [`ForeignCurve`](classes/ForeignCurve.md) |

#### Returns

typeof [`EcdsaSignature`](classes/EcdsaSignature.md)

#### Defined in

[lib/provable/crypto/foreign-ecdsa.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/foreign-ecdsa.ts#L189)

___

### createForeignCurve

▸ **createForeignCurve**(`params`): typeof [`ForeignCurve`](classes/ForeignCurve.md)

Create a class representing an elliptic curve group, which is different from the native [Group](modules.md#group).

```ts
const Curve = createForeignCurve(Crypto.CurveParams.Secp256k1);
```

`createForeignCurve(params)` takes curve parameters CurveParams as input.
We support `modulus` and `order` to be prime numbers up to 259 bits.

The returned [ForeignCurve](classes/ForeignCurve.md) class represents a _non-zero curve point_ and supports standard
elliptic curve operations like point addition and scalar multiplication.

[ForeignCurve](classes/ForeignCurve.md) also includes to associated foreign fields: `ForeignCurve.Field` and `ForeignCurve.Scalar`, see [createForeignField](modules.md#createforeignfield).

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `CurveParams` |

#### Returns

typeof [`ForeignCurve`](classes/ForeignCurve.md)

#### Defined in

[lib/provable/crypto/foreign-curve.ts:293](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/foreign-curve.ts#L293)

___

### createForeignField

▸ **createForeignField**(`modulus`): typeof `UnreducedForeignField`

Create a class representing a prime order finite field, which is different from the native [Field](modules.md#field).

```ts
const SmallField = createForeignField(17n); // the finite field F_17
```

`createForeignField(p)` takes the prime modulus `p` of the finite field as input, as a bigint.
We support prime moduli up to a size of 259 bits.

The returned [ForeignField](classes/ForeignField.md) class supports arithmetic modulo `p` (addition and multiplication),
as well as helper methods like `assertEquals()` and `equals()`.

_Advanced details:_

Internally, a foreign field element is represented as three native field elements, each of which
represents a limb of 88 bits. Therefore, being a valid foreign field element means that all 3 limbs
fit in 88 bits, and the foreign field element altogether is smaller than the modulus p.

Since the full `x < p` check is expensive, by default we only prove a weaker assertion, `x < 2^ceil(log2(p))`,
see [assertAlmostReduced](classes/ForeignField.md#assertalmostreduced-1) for more details.

This weaker assumption is what we call "almost reduced", and it is represented by the [AlmostForeignField](classes/AlmostForeignField.md) class.
Note that only [AlmostForeignField](classes/AlmostForeignField.md) supports multiplication and inversion, while UnreducedForeignField
only supports addition and subtraction.

This function returns the `Unreduced` class, which will cause the minimum amount of range checks to be created by default.
If you want to do multiplication, you have two options:
- create your field elements using the [AlmostReduced](classes/ForeignField.md#almostreduced) constructor, or using the `.provable` type on that class.
```ts
let x = Provable.witness(ForeignField.AlmostReduced.provable, () => ForeignField.from(5));
```
- create your field elements normally and convert them using `x.assertAlmostReduced()`.
```ts
let xChecked = x.assertAlmostReduced(); // asserts x < 2^ceil(log2(p)); returns `AlmostForeignField`
```

Similarly, there is a separate class [CanonicalForeignField](classes/CanonicalForeignField.md) which represents fully reduced, "canonical" field elements.
To convert to a canonical field element, use [assertCanonical](classes/ForeignField.md#assertcanonical):

```ts
x.assertCanonical(); // asserts x < p; returns `CanonicalForeignField`
```
You will likely not need canonical fields most of the time.

Base types for all of these classes are separately exported as UnreducedForeignField, [AlmostForeignField](classes/AlmostForeignField.md) and [CanonicalForeignField](classes/CanonicalForeignField.md).,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modulus` | `bigint` | the modulus of the finite field you are instantiating |

#### Returns

typeof `UnreducedForeignField`

#### Defined in

[lib/provable/foreign-field.ts:627](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L627)

___

### declareMethods

▸ **declareMethods**\<`T`\>(`SmartContract`, `methodArguments`): `void`

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
| `methodArguments` | `Record`\<`string`, [`Provable`](modules.md#provable-1)\<`unknown`\>[]\> |

#### Returns

`void`

#### Defined in

[lib/mina/zkapp.ts:1470](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1470)

___

### declareState

▸ **declareState**\<`T`\>(`SmartContract`, `states`): `void`

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
| `states` | `Record`\<`string`, [`FlexibleProvablePure`](modules.md#flexibleprovablepure)\<`unknown`\>\> |

#### Returns

`void`

#### Defined in

[lib/mina/state.ts:163](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/state.ts#L163)

___

### fetchAccount

▸ **fetchAccount**(`accountInfo`, `graphqlEndpoint?`, `«destructured»?`): `Promise`\<\{ `account`: [`Account`](modules/Types.md#account-1) ; `error`: `undefined`  } \| \{ `account`: `undefined` ; `error`: `FetchError`  }\>

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
| `accountInfo.tokenId?` | `string` \| `Field` | `undefined` | - |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` | The graphql endpoint to fetch from |
| `«destructured»` | `Object` | `{}` | - |
| › `timeout` | `undefined` \| `number` | `undefined` | - |

#### Returns

`Promise`\<\{ `account`: [`Account`](modules/Types.md#account-1) ; `error`: `undefined`  } \| \{ `account`: `undefined` ; `error`: `FetchError`  }\>

zkapp information on the specified account or an error is thrown

#### Defined in

[lib/mina/fetch.ts:171](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L171)

___

### fetchEvents

▸ **fetchEvents**(`accountInfo`, `graphqlEndpoint?`, `filterOptions?`): `Promise`\<\{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: \{ `data`: `string`[] ; `transactionInfo`: \{ `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

Asynchronously fetches event data for an account from the Mina Archive Node GraphQL API.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accountInfo` | `Object` | `undefined` | The account information object. |
| `accountInfo.publicKey` | `string` | `undefined` | The account public key. |
| `accountInfo.tokenId?` | `string` | `undefined` | The optional token ID for the account. |
| `graphqlEndpoint?` | `string` | `networkConfig.archiveEndpoint` | The GraphQL endpoint to query. Defaults to the Archive Node GraphQL API. |
| `filterOptions?` | `EventActionFilterOptions` | `{}` | The optional filter options object. |

#### Returns

`Promise`\<\{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: \{ `data`: `string`[] ; `transactionInfo`: \{ `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

A promise that resolves to an array of objects containing event data, block information and transaction information for the account.

**`Async`**

**`Throws`**

If the GraphQL request fails or the response is invalid.

**`Example`**

```ts
const accountInfo = { publicKey: 'B62qiwmXrWn7Cok5VhhB3KvCwyZ7NHHstFGbiU5n7m8s2RqqNW1p1wF' };
const events = await fetchEvents(accountInfo);
console.log(events);
```

#### Defined in

[lib/mina/fetch.ts:637](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L637)

___

### fetchLastBlock

▸ **fetchLastBlock**(`graphqlEndpoint?`): `Promise`\<`PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `seed`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `startCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  }  } ; `snarkedLedgerHash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `seed`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `startCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  }  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

Fetches the last block on the Mina network.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`\<`PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `seed`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `startCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  }  } ; `snarkedLedgerHash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `seed`: \{ `isSome`: `Bool` ; `value`: `Field`  } ; `startCheckpoint`: \{ `isSome`: `Bool` ; `value`: `Field`  }  } ; `totalCurrency`: \{ `isSome`: `Bool` ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Defined in

[lib/mina/fetch.ts:450](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L450)

___

### fetchTransactionStatus

▸ **fetchTransactionStatus**(`txId`, `graphqlEndpoint?`): `Promise`\<[`TransactionStatus`](modules.md#transactionstatus)\>

Fetches the status of a transaction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `txId` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`\<[`TransactionStatus`](modules.md#transactionstatus)\>

#### Defined in

[lib/mina/fetch.ts:587](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L587)

___

### method

▸ **method**\<`K`, `T`\>(`target`, `methodName`, `descriptor`, `returnType?`): `void`

A decorator to use in a zkApp to mark a method as provable.
You can use inside your zkApp class as:

```
\@method async myMethod(someArg: Field) {
  // your code here
}
```

To return a value from the method, you have to explicitly declare the return type using the [returns](modules/method.md#returns) decorator:
```
\@method.returns(Field)
async myMethod(someArg: Field): Promise<Field> {
  // your code here
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `T` | extends [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` & \{ [k in string]: Function } |
| `methodName` | `K` & `string` & keyof `T` |
| `descriptor` | `PropertyDescriptor` |
| `returnType?` | [`Provable`](modules.md#provable-1)\<`any`\> |

#### Returns

`void`

#### Defined in

[lib/mina/zkapp.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L101)

___

### provable

▸ **provable**\<`A`\>(`typeObj`, `options?`): `InferredProvable`\<`A`, `Field`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeObj` | `A` |
| `options?` | `Object` |
| `options.isPure?` | `boolean` |

#### Returns

`InferredProvable`\<`A`, `Field`\>

#### Defined in

bindings/lib/provable-generic.ts:23

___

### provablePure

▸ **provablePure**\<`A`\>(`typeObj`): `ProvablePureExtended`\<[`InferProvable`](modules.md#inferprovable)\<`A`\>, `InferJson`\<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeObj` | `A` |

#### Returns

`ProvablePureExtended`\<[`InferProvable`](modules.md#inferprovable)\<`A`\>, `InferJson`\<`A`\>\>

#### Defined in

[lib/provable/types/provable-derivers.ts:55](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-derivers.ts#L55)

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

[lib/proof-system/circuit.ts:149](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L149)

___

### scaleShifted

▸ **scaleShifted**(`point`, `shiftedScalar`): `Group`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Group` |
| `shiftedScalar` | [`Scalar`](classes/Scalar.md) |

#### Returns

`Group`

#### Defined in

[lib/provable/crypto/signature.ts:317](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L317)

___

### sendZkapp

▸ **sendZkapp**(`json`, `graphqlEndpoint?`, `«destructured»?`): `Promise`\<[`undefined`, `FetchError`] \| [`FetchResponse`\<`SendZkAppResponse`\>, `undefined`]\>

Sends a zkApp command (transaction) to the specified GraphQL endpoint.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |
| `«destructured»` | `Object` | `{}` |
| › `timeout` | `undefined` \| `number` | `undefined` |

#### Returns

`Promise`\<[`undefined`, `FetchError`] \| [`FetchResponse`\<`SendZkAppResponse`\>, `undefined`]\>

#### Defined in

[lib/mina/fetch.ts:607](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L607)

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

[lib/mina/fetch.ts:126](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L126)

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

[lib/mina/fetch.ts:104](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L104)

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

[lib/mina/fetch.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/fetch.ts#L97)

___

### setNumberOfWorkers

▸ **setNumberOfWorkers**(`numWorkers`): `void`

Set the number of workers to use for parallelizing the proof generation. By default the number of workers is set to the number of physical CPU cores on your machine, but there may be some instances where you want to set the number of workers manually. Some machines may have a large number of cores, but not enough memory to support that many workers. In that case, you can set the number of workers to a lower number to avoid running out of memory. On the other hand, some machines with heterogeneous cores may benefit from setting the number of workers to a lower number to avoid contention between core types if load-link/store-conditional multithreading is used. Feel free to experiment and see what works best for your use case. Maybe you can squeeze slightly more performance out by tweaking this value :)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numWorkers` | `number` |

#### Returns

`void`

**`Example`**

```typescript
setNumberOfWorkers(2); // set the number of workers to 2
```

#### Defined in

[lib/proof-system/workers.ts:15](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/workers.ts#L15)

___

### state

▸ **state**\<`A`\>(`stateType`): (`target`: [`SmartContract`](classes/SmartContract.md) & \{ `constructor`: `any`  }, `key`: `string`, `_descriptor?`: `PropertyDescriptor`) => `void`

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
| `stateType` | [`FlexibleProvablePure`](modules.md#flexibleprovablepure)\<`A`\> |

#### Returns

`fn`

▸ (`target`, `key`, `_descriptor?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SmartContract`](classes/SmartContract.md) & \{ `constructor`: `any`  } |
| `key` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

[lib/mina/state.ts:87](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/state.ts#L87)

___

### verify

▸ **verify**(`proof`, `verificationKey`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | [`JsonProof`](modules.md#jsonproof) \| [`Proof`](classes/Proof.md)\<`any`, `any`\> |
| `verificationKey` | `string` \| [`VerificationKey`](classes/VerificationKey.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[lib/proof-system/zkprogram.ts:191](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/zkprogram.ts#L191)

___

### withThreadPool

▸ **withThreadPool**\<`T`\>(`run`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | () => `Promise`\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[snarky.d.ts:736](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L736)
