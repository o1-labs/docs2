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

### Enumerations

- [FieldType](enums/FieldType.md)

### Classes

- [AccountUpdate](classes/AccountUpdate.md)
- [AccountUpdateForest](classes/AccountUpdateForest.md)
- [AccountUpdateTree](classes/AccountUpdateTree.md)
- [AlmostForeignField](classes/AlmostForeignField.md)
- [Bool](classes/Bool.md)
- [CanonicalForeignField](classes/CanonicalForeignField.md)
- [Character](classes/Character.md)
- [Circuit](classes/Circuit.md)
- [CircuitString](classes/CircuitString.md)
- [CircuitValue](classes/CircuitValue.md)
- [EcdsaSignature](classes/EcdsaSignature.md)
- [Field](classes/Field.md)
- [ForeignCurve](classes/ForeignCurve.md)
- [ForeignField](classes/ForeignField.md)
- [Group](classes/Group.md)
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
- [Token](classes/Token.md)
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
- [Provable](interfaces/Provable.md)
- [ProvablePure](interfaces/ProvablePure.md)

### Type Aliases

- [Bool](modules.md#bool)
- [BoolVar](modules.md#boolvar)
- [Bytes](modules.md#bytes)
- [Cache](modules.md#cache)
- [CacheHeader](modules.md#cacheheader)
- [ConstantField](modules.md#constantfield)
- [DeployArgs](modules.md#deployargs)
- [Empty](modules.md#empty)
- [FeatureFlags](modules.md#featureflags)
- [Field](modules.md#field)
- [FieldConst](modules.md#fieldconst)
- [FieldVar](modules.md#fieldvar)
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
- [Reducer](modules.md#reducer)
- [State](modules.md#state)
- [Struct](modules.md#struct)
- [TransactionStatus](modules.md#transactionstatus)
- [Undefined](modules.md#undefined)
- [VarField](modules.md#varfield)
- [VarFieldVar](modules.md#varfieldvar)
- [Void](modules.md#void)
- [ZkProgram](modules.md#zkprogram)
- [ZkappPublicInput](modules.md#zkapppublicinput)

### Variables

- [Cache](modules.md#cache-1)
- [Crypto](modules.md#crypto)
- [Empty](modules.md#empty-1)
- [FieldConst](modules.md#fieldconst-1)
- [FieldVar](modules.md#fieldvar-1)
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
- [isReady](modules.md#isready)

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
- [VarField](modules.md#varfield-1)
- [ZkProgram](modules.md#zkprogram-1)
- [addCachedAccount](modules.md#addcachedaccount)
- [arrayProp](modules.md#arrayprop)
- [assert](modules.md#assert)
- [checkBitLength](modules.md#checkbitlength)
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
- [getWasm](modules.md#getwasm)
- [matrixProp](modules.md#matrixprop)
- [method](modules.md#method)
- [prop](modules.md#prop)
- [provable](modules.md#provable-2)
- [provablePure](modules.md#provablepure)
- [public\_](modules.md#public_)
- [readVarMessage](modules.md#readvarmessage)
- [scaleShifted](modules.md#scaleshifted)
- [sendZkapp](modules.md#sendzkapp)
- [setArchiveGraphqlEndpoint](modules.md#setarchivegraphqlendpoint)
- [setGraphqlEndpoint](modules.md#setgraphqlendpoint)
- [setGraphqlEndpoints](modules.md#setgraphqlendpoints)
- [setNumberOfWorkers](modules.md#setnumberofworkers)
- [shutdown](modules.md#shutdown)
- [state](modules.md#state-2)
- [toConstantField](modules.md#toconstantfield)
- [toFp](modules.md#tofp)
- [verify](modules.md#verify)
- [withMessage](modules.md#withmessage)

## Type Aliases

### Bool

Ƭ **Bool**: [`Bool`](classes/Bool.md)

#### Defined in

[lib/core.ts:70](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L70)

[lib/core.ts:71](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L71)

___

### BoolVar

Ƭ **BoolVar**: [`FieldVar`](modules.md#fieldvar-1)

#### Defined in

[lib/bool.ts:17](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/bool.ts#L17)

___

### Bytes

Ƭ **Bytes**: `InternalBytes`

#### Defined in

[lib/provable-types/provable-types.ts:16](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L16)

[lib/provable-types/provable-types.ts:5](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L5)

[lib/provable-types/provable-types.ts:19](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L19)

[lib/provable-types/provable-types.ts:20](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L20)

[lib/provable-types/provable-types.ts:21](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L21)

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

[lib/proof-system/cache.ts:31](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/cache.ts#L31)

[lib/proof-system/cache.ts:199](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/cache.ts#L199)

___

### CacheHeader

Ƭ **CacheHeader**: `StepKeyHeader`\<``"step-pk"``\> \| `StepKeyHeader`\<``"step-vk"``\> \| `WrapKeyHeader`\<``"wrap-pk"``\> \| `WrapKeyHeader`\<``"wrap-vk"``\> \| `PlainHeader`\<``"srs"``\> \| `PlainHeader`\<``"lagrange-basis"``\> & `CommonHeader`

A header that is passed to the caching layer, to support rich caching strategies.

Both `uniqueId` and `programId` can safely be used as a file path.

#### Defined in

[lib/proof-system/cache.ts:98](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/cache.ts#L98)

___

### ConstantField

Ƭ **ConstantField**: [`Field`](classes/Field.md) & \{ `value`: `ConstantFieldVar`  }

#### Defined in

[lib/field.ts:109](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L109)

___

### DeployArgs

Ƭ **DeployArgs**: \{ `verificationKey?`: \{ `data`: `string` ; `hash`: `string` \| [`Field`](modules.md#field-1)  } ; `zkappKey?`: [`PrivateKey`](classes/PrivateKey.md)  } \| `undefined`

#### Defined in

[lib/zkapp.ts:1443](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1443)

___

### Empty

Ƭ **Empty**: [`Undefined`](modules.md#undefined-1)

#### Defined in

[lib/proof-system.ts:77](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L77)

[lib/proof-system.ts:78](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L78)

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

[snarky.d.ts:703](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L703)

___

### Field

Ƭ **Field**: [`Field`](classes/Field.md)

#### Defined in

[lib/core.ts:42](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L42)

[lib/core.ts:43](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L43)

___

### FieldConst

Ƭ **FieldConst**: [``0``, `bigint`]

#### Defined in

[lib/field.ts:27](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L27)

[lib/field.ts:36](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L36)

___

### FieldVar

Ƭ **FieldVar**: [[`Constant`](enums/FieldType.md#constant), [`FieldConst`](modules.md#fieldconst-1)] \| [[`Var`](enums/FieldType.md#var), `number`] \| [[`Add`](enums/FieldType.md#add), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)] \| [[`Scale`](enums/FieldType.md#scale), [`FieldConst`](modules.md#fieldconst-1), [`FieldVar`](modules.md#fieldvar-1)]

`FieldVar` is the core data type in snarky. It is eqivalent to `Cvar.t` in OCaml.
It represents a field element that is part of provable code - either a constant or a variable.

**Variables** end up filling the witness columns of a constraint system.
Think of a variable as a value that has to be provided by the prover, and that has to satisfy all the
constraints it is involved in.

**Constants** end up being hard-coded into the constraint system as gate coefficients.
Think of a constant as a value that is known publicly, at compile time, and that defines the constraint system.

Both constants and variables can be combined into an AST using the Add and Scale combinators.

#### Defined in

[lib/field.ts:67](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L67)

[lib/field.ts:76](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L76)

___

### FlexibleProvable

Ƭ **FlexibleProvable**\<`T`\>: [`Provable`](modules.md#provable-1)\<`T`\> \| [`Struct`](modules.md#struct)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit-value.ts:69](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L69)

___

### FlexibleProvablePure

Ƭ **FlexibleProvablePure**\<`T`\>: [`ProvablePure`](interfaces/ProvablePure.md)\<`T`\> \| `StructPure`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit-value.ts:70](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L70)

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

[snarky.d.ts:568](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L568)

___

### GateType

Ƭ **GateType**: ``"Zero"`` \| ``"Generic"`` \| ``"Poseidon"`` \| ``"CompleteAdd"`` \| ``"VarbaseMul"`` \| ``"EndoMul"`` \| ``"EndoMulScalar"`` \| ``"Lookup"`` \| ``"RangeCheck0"`` \| ``"RangeCheck1"`` \| ``"ForeignFieldAdd"`` \| ``"ForeignFieldMul"`` \| ``"Xor16"`` \| ``"Rot64"``

#### Defined in

[snarky.d.ts:545](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L545)

___

### Group

Ƭ **Group**: [`Group`](classes/Group.md)

#### Defined in

[lib/core.ts:76](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L76)

[lib/core.ts:77](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L77)

___

### InferProvable

Ƭ **InferProvable**\<`T`\>: `GenericInferProvable`\<`T`, [`Field`](modules.md#field-1)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

bindings/lib/provable-snarky.ts:46

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

[snarky.d.ts:561](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L561)

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

[lib/proof-system.ts:226](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L226)

___

### MlFeatureFlags

Ƭ **MlFeatureFlags**: [\_: 0, rangeCheck0: MlBool, rangeCheck1: MlBool, foreignFieldAdd: MlBool, foreignFieldMul: MlBool, xor: MlBool, rot: MlBool, lookup: MlBool, runtimeTables: MlBool]

#### Defined in

[snarky.d.ts:714](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L714)

___

### MlPublicKey

Ƭ **MlPublicKey**: [\_: 0, x: FieldConst, isOdd: MlBool]

#### Defined in

[snarky.d.ts:581](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L581)

___

### MlPublicKeyVar

Ƭ **MlPublicKeyVar**: [\_: 0, x: FieldVar, isOdd: BoolVar]

#### Defined in

[snarky.d.ts:582](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L582)

___

### Provable

Ƭ **Provable**\<`T`\>: [`Provable`](interfaces/Provable.md)\<`T`\>

`Provable<T>` is the general circuit type interface. It describes how a type `T` is made up of field elements and auxiliary (non-field element) data.

You will find this as the required input type in a few places in o1js. One convenient way to create a `Provable<T>` is using `Struct`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable.ts:43](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable.ts#L43)

[lib/provable.ts:45](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable.ts#L45)

___

### ProvableExtended

Ƭ **ProvableExtended**\<`T`, `TJson`\>: [`Provable`](modules.md#provable-1)\<`T`\> & `ProvableExtension`\<`T`, `TJson`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TJson` | `any` |

#### Defined in

[lib/circuit-value.ts:59](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L59)

___

### ProvableHashable

Ƭ **ProvableHashable**\<`T`\>: [`Provable`](modules.md#provable-1)\<`T`\> & `Hashable`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/hash.ts:30](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/hash.ts#L30)

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

[lib/zkapp.ts:1166](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1166)

[lib/zkapp.ts:1490](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1490)

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
| `assertEquals` | (`a`: `A`) => `void` |
| `assertNothing` | () => `void` |
| `fetch` | () => `Promise`\<`undefined` \| `A`\> |
| `fromAppState` | (`appState`: [`Field`](classes/Field.md)[]) => `A` |
| `get` | () => `A` |
| `getAndAssertEquals` | () => `A` |
| `getAndRequireEquals` | () => `A` |
| `requireEquals` | (`a`: `A`) => `void` |
| `requireNothing` | () => `void` |
| `set` | (`a`: `A`) => `void` |

#### Defined in

[lib/state.ts:85](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/state.ts#L85)

[lib/state.ts:20](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/state.ts#L20)

___

### Struct

Ƭ **Struct**\<`T`\>: [`ProvableExtended`](modules.md#provableextended)\<`NonMethods`\<`T`\>\> & `Constructor`\<`T`\> & \{ `_isStruct`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit-value.ts:375](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L375)

[lib/circuit-value.ts:64](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L64)

___

### TransactionStatus

Ƭ **TransactionStatus**: ``"INCLUDED"`` \| ``"PENDING"`` \| ``"UNKNOWN"``

INCLUDED: A transaction that is on the longest chain

PENDING: A transaction either in the transition frontier or in transaction pool but is not on the longest chain

UNKNOWN: The transaction has either been snarked, reached finality through consensus or has been dropped

#### Defined in

[lib/mina/graphql.ts:213](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/graphql.ts#L213)

___

### Undefined

Ƭ **Undefined**: `undefined`

#### Defined in

[lib/proof-system.ts:74](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L74)

[lib/proof-system.ts:75](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L75)

___

### VarField

Ƭ **VarField**: [`Field`](classes/Field.md) & \{ `value`: [`VarFieldVar`](modules.md#varfieldvar)  }

#### Defined in

[lib/field.ts:1363](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1363)

[lib/field.ts:110](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L110)

___

### VarFieldVar

Ƭ **VarFieldVar**: [[`Var`](enums/FieldType.md#var), `number`]

#### Defined in

[lib/field.ts:74](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L74)

___

### Void

Ƭ **Void**: `undefined`

#### Defined in

[lib/proof-system.ts:79](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L79)

[lib/proof-system.ts:80](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L80)

___

### ZkProgram

Ƭ **ZkProgram**\<`S`, `T`\>: `ReturnType`\<typeof [`ZkProgram`](modules.md#zkprogram)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |
| `T` | extends \{ [I in string]: Tuple\<PrivateInput\> } |

#### Defined in

[lib/proof-system.ts:244](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L244)

[lib/proof-system.ts:474](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L474)

[lib/proof-system.ts:929](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L929)

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

[lib/account-update.ts:1998](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1998)

[lib/account-update.ts:2002](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L2002)

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

[lib/proof-system/cache.ts:31](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/cache.ts#L31)

[lib/proof-system/cache.ts:199](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/cache.ts#L199)

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

[lib/crypto.ts:8](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/crypto.ts#L8)

[lib/crypto.ts:22](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/crypto.ts#L22)

___

### Empty

• **Empty**: `ProvablePureExtended`\<`undefined`, ``null``\>

#### Defined in

[lib/proof-system.ts:77](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L77)

[lib/proof-system.ts:78](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L78)

___

### FieldConst

• **FieldConst**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | [`FieldConst`](modules.md#fieldconst-1) |
| `0` | [`FieldConst`](modules.md#fieldconst-1) |
| `1` | [`FieldConst`](modules.md#fieldconst-1) |
| `fromBigint` | (`x`: `bigint`) => [`FieldConst`](modules.md#fieldconst-1) |
| `toBigint` | (`x`: [`FieldConst`](modules.md#fieldconst-1)) => `Fp` |
| `equal` | (`x`: [`FieldConst`](modules.md#fieldconst-1), `y`: [`FieldConst`](modules.md#fieldconst-1)) => `boolean` |

#### Defined in

[lib/field.ts:27](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L27)

[lib/field.ts:36](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L36)

___

### FieldVar

• **FieldVar**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | [[`Constant`](enums/FieldType.md#constant), [`FieldConst`](modules.md#fieldconst-1)] |
| `0` | [[`Constant`](enums/FieldType.md#constant), [`FieldConst`](modules.md#fieldconst-1)] |
| `1` | [[`Constant`](enums/FieldType.md#constant), [`FieldConst`](modules.md#fieldconst-1)] |
| `add` | (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) |
| `constant` | (`x`: `bigint` \| [`FieldConst`](modules.md#fieldconst-1)) => `ConstantFieldVar` |
| `isConstant` | (`x`: [`FieldVar`](modules.md#fieldvar-1)) => x is ConstantFieldVar |
| `isVar` | (`x`: [`FieldVar`](modules.md#fieldvar-1)) => x is VarFieldVar |
| `scale` | (`c`: `bigint` \| [`FieldConst`](modules.md#fieldconst-1), `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) |

#### Defined in

[lib/field.ts:67](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L67)

[lib/field.ts:76](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L76)

___

### Gadgets

• `Const` **Gadgets**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Field3` | \{ `provable`: `GenericProvableExtendedPure`\<[[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], [`string`, `string`, `string`], [`Field`](classes/Field.md)\> ; `from`: (`x`: `bigint`) => `Field3` ; `isConstant`: (`x`: `Field3`) => `boolean` ; `toBigint`: (`x`: `Field3`) => `bigint` ; `toBigints`: \<T\>(...`xs`: `T`) => [...\{ [i in string \| number \| symbol]: bigint }[]]  } | - |
| `Field3.provable` | `GenericProvableExtendedPure`\<[[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], [`string`, `string`, `string`], [`Field`](classes/Field.md)\> | `Provable<T>` interface for `Field3 = [Field, Field, Field]`. Note: Witnessing this creates a plain tuple of field elements without any implicit range checks. |
| `Field3.from` | [object Object] | Turn a bigint into a 3-tuple of Fields |
| `Field3.isConstant` | [object Object] | Check whether a 3-tuple of Fields is constant |
| `Field3.toBigint` | [object Object] | Turn a 3-tuple of Fields into a bigint |
| `Field3.toBigints` | [object Object] | Turn several 3-tuples of Fields into bigints |
| `ForeignField` | \{ `Sum`: (`x`: `Field3`) => `Sum` ; `add`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `assertAlmostReduced`: (`xs`: `Field3`[], `f`: `bigint`, `__namedParameters`: \{ `skipMrc`: `undefined` \| `boolean`  }) => `void` ; `assertLessThan`: (`x`: `Field3`, `f`: `bigint`) => `void` ; `assertMul`: (`x`: `Field3` \| `Sum`, `y`: `Field3` \| `Sum`, `z`: `Field3` \| `Sum`, `f`: `bigint`) => `void` ; `div`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `inv`: (`x`: `Field3`, `f`: `bigint`) => `Field3` ; `mul`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `neg`: (`x`: `Field3`, `f`: `bigint`) => `Field3` ; `sub`: (`x`: `Field3`, `y`: `Field3`, `f`: `bigint`) => `Field3` ; `sum`: (`xs`: `Field3`[], `signs`: (`1n` \| `-1n`)[], `f`: `bigint`) => `Field3`  } | Gadgets for foreign field operations. A _foreign field_ is a finite field different from the native field of the proof system. The `ForeignField` namespace exposes operations like modular addition and multiplication, which work for any finite field of size less than 2^259. Foreign field elements are represented as 3 limbs of native field elements. Each limb holds 88 bits of the total, in little-endian order. All `ForeignField` gadgets expect that their input limbs are constrained to the range [0, 2^88). Range checks on outputs are added by the gadget itself. |
| `ForeignField.Sum` | [object Object] | Lazy sum of [Field3](modules.md#field3) elements, which can be used as input to [assertMul](modules.md#assertmul). |
| `ForeignField.add` | [object Object] | Foreign field addition: `x + y mod f` The modulus `f` does not need to be prime. Inputs and outputs are 3-tuples of native Fields. Each input limb is assumed to be in the range [0, 2^88), and the gadget is invalid if this is not the case. The result limbs are guaranteed to be in the same range. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(9n)); let y = Provable.witness(Field3.provable, () => Field3.from(10n)); // range check x and y Gadgets.multiRangeCheck(x); Gadgets.multiRangeCheck(y); // compute x + y mod 17 let z = ForeignField.add(x, y, 17n); Provable.log(z); // ['2', '0', '0'] = limb representation of 2 = 9 + 10 mod 17 ``` **Warning**: The gadget does not assume that inputs are reduced modulo f, and does not prove that the result is reduced modulo f. It only guarantees that the result is in the correct residue class. |
| `ForeignField.assertAlmostReduced` | [object Object] | Prove that each of the given [Field3](modules.md#field3) elements is "almost" reduced modulo f, i.e., satisfies the assumptions required by [mul](modules.md#mul) and other gadgets: - each limb is in the range [0, 2^88) - the most significant limb is less or equal than the modulus, x[2] <= f[2] **Note**: This method is most efficient when the number of input elements is a multiple of 3. **`Throws`** if any of the assumptions is violated. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(4n)); let y = Provable.witness(Field3.provable, () => Field3.from(5n)); let z = Provable.witness(Field3.provable, () => Field3.from(10n)); ForeignField.assertAlmostReduced([x, y, z], f); // now we can use x, y, z as inputs to foreign field multiplication let xy = ForeignField.mul(x, y, f); let xyz = ForeignField.mul(xy, z, f); // since xy is an input to another multiplication, we need to prove that it is almost reduced again! ForeignField.assertAlmostReduced([xy], f); // TODO: would be more efficient to batch this with 2 other elements ``` |
| `ForeignField.assertLessThan` | [object Object] | Prove that x < f for any constant f < 2^264. If f is a finite field modulus, this means that the given field element is fully reduced modulo f. This is a stronger statement than [assertAlmostReduced](classes/ForeignField.md#assertalmostreduced-1) and also uses more constraints; it should not be needed in most use cases. **Note**: This assumes that the limbs of x are in the range [0, 2^88), in contrast to [assertAlmostReduced](classes/ForeignField.md#assertalmostreduced-1) which adds that check itself. **`Throws`** if x is greater or equal to f. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(0x1235n)); // range check limbs of x Gadgets.multiRangeCheck(x); // prove that x is fully reduced mod f Gadgets.ForeignField.assertLessThan(x, f); ``` |
| `ForeignField.assertMul` | [object Object] | Optimized multiplication of sums in a foreign field, for example: `(x - y)*z = a + b + c mod f` Note: This is much more efficient than using [add](modules.md#add) and [sub](modules.md#sub) separately to compute the multiplication inputs and outputs, and then using [mul](modules.md#mul) to constrain the result. The sums passed into this method are "lazy sums" created with [Sum](modules.md#sum). You can also pass in plain [Field3](modules.md#field3) elements. **Assumptions**: The assumptions on the _summands_ are analogous to the assumptions described in [mul](modules.md#mul): - each summand's limbs are in the range [0, 2^88) - summands that are part of a multiplication input satisfy `x[2] <= f[2]` **`Throws`** if the modulus is so large that the second assumption no longer suffices for validity of the multiplication. For small sums and moduli < 2^256, this will not fail. **`Throws`** if the provided multiplication result is not correct modulo f. **`Example`** ```ts // range-check x, y, z, a, b, c ForeignField.assertAlmostReduced([x, y, z], f); Gadgets.multiRangeCheck(a); Gadgets.multiRangeCheck(b); Gadgets.multiRangeCheck(c); // create lazy input sums let xMinusY = ForeignField.Sum(x).sub(y); let aPlusBPlusC = ForeignField.Sum(a).add(b).add(c); // assert that (x - y)*z = a + b + c mod f ForeignField.assertMul(xMinusY, z, aPlusBPlusC, f); ``` |
| `ForeignField.div` | [object Object] | Foreign field division: `x * y^(-1) mod f` See [mul](modules.md#mul) for assumptions on inputs and usage examples. This gadget adds an extra bound check on the result, so it can be used directly in another foreign field multiplication. **`Throws`** Different than [mul](modules.md#mul), this fails on unreduced input `x`, because it checks that `x === (x/y)*y` and the right side will be reduced. |
| `ForeignField.inv` | [object Object] | Foreign field inverse: `x^(-1) mod f` See [mul](modules.md#mul) for assumptions on inputs and usage examples. This gadget adds an extra bound check on the result, so it can be used directly in another foreign field multiplication. |
| `ForeignField.mul` | [object Object] | Foreign field multiplication: `x * y mod f` The modulus `f` does not need to be prime, but has to be smaller than 2^259. **Assumptions**: In addition to the assumption that input limbs are in the range [0, 2^88), as in all foreign field gadgets, this assumes an additional bound on the inputs: `x * y < 2^264 * p`, where p is the native modulus. We usually assert this bound by proving that `x[2] < f[2] + 1`, where `x[2]` is the most significant limb of x. To do this, we use an 88-bit range check on `2^88 - x[2] - (f[2] + 1)`, and same for y. The implication is that x and y are _almost_ reduced modulo f. All of the above assumptions are checked by [assertAlmostReduced](modules.md#assertalmostreduced). **Warning**: This gadget does not add the extra bound check on the result. So, to use the result in another foreign field multiplication, you have to add the bound check on it yourself, again. **`Example`** ```ts // example modulus: secp256k1 prime let f = (1n << 256n) - (1n << 32n) - 0b1111010001n; let x = Provable.witness(Field3.provable, () => Field3.from(f - 1n)); let y = Provable.witness(Field3.provable, () => Field3.from(f - 2n)); // range check x, y and prove additional bounds x[2] <= f[2] ForeignField.assertAlmostReduced([x, y], f); // compute x * y mod f let z = ForeignField.mul(x, y, f); Provable.log(z); // ['2', '0', '0'] = limb representation of 2 = (-1)*(-2) mod f ``` |
| `ForeignField.neg` | [object Object] | Foreign field negation: `-x mod f = f - x` See [add](classes/ForeignField.md#add) for assumptions and usage examples. **`Throws`** fails if `x > f`, where `f - x < 0`. |
| `ForeignField.sub` | [object Object] | Foreign field subtraction: `x - y mod f` See [add](modules.md#add) for assumptions and usage examples. **`Throws`** fails if `x - y < -f`, where the result cannot be brought back to a positive number by adding `f` once. |
| `ForeignField.sum` | [object Object] | Foreign field sum: `xs[0] + signs[0] * xs[1] + ... + signs[n-1] * xs[n] mod f` This gadget takes a list of inputs and a list of signs (of size one less than the inputs), and computes a chain of additions or subtractions, depending on the sign. A sign is of type `1n \| -1n`, where `1n` represents addition and `-1n` represents subtraction. **Note**: For 3 or more inputs, `sum()` uses fewer constraints than a sequence of `add()` and `sub()` calls, because we can avoid range checks on intermediate results. See [add](modules.md#add) for assumptions on inputs. **`Example`** ```ts let x = Provable.witness(Field3.provable, () => Field3.from(4n)); let y = Provable.witness(Field3.provable, () => Field3.from(5n)); let z = Provable.witness(Field3.provable, () => Field3.from(10n)); // range check x, y, z Gadgets.multiRangeCheck(x); Gadgets.multiRangeCheck(y); Gadgets.multiRangeCheck(z); // compute x + y - z mod 17 let sum = ForeignField.sum([x, y, z], [1n, -1n], 17n); Provable.log(sum); // ['16', '0', '0'] = limb representation of 16 = 4 + 5 - 10 mod 17 ``` |
| `SHA256` | \{ `hash`: (`data`: `FlexibleBytes`) => `Bytes`  } | Implementation of the [SHA256 hash function.](https://en.wikipedia.org/wiki/SHA-2) Hash function with 256bit output. Applies the SHA2-256 hash function to a list of byte-sized elements. The function accepts [Bytes](modules/Bytes.md) as the input message, which is a type that represents a static-length list of byte-sized field elements (range-checked using [rangeCheck8](modules.md#rangecheck8)). Alternatively, you can pass plain `number[]`, `bigint[]` or `Uint8Array` to perform a hash outside provable code. Produces an output of [Bytes](modules/Bytes.md) that conforms to the chosen bit length. **`Param`** [Bytes](modules/Bytes.md) representing the message to hash. ```ts let preimage = Bytes.fromString("hello world"); let digest = Gadgets.SHA256.hash(preimage); ``` |
| `SHA256.hash` | [object Object] | - |
| `addMod32` | (`x`: [`Field`](classes/Field.md), `y`: [`Field`](classes/Field.md)) => [`Field`](classes/Field.md) | - |
| `divMod32` | (`n`: [`Field`](classes/Field.md), `quotientBits`: `number`) => \{ `quotient`: [`Field`](classes/Field.md) ; `remainder`: [`Field`](classes/Field.md)  } | - |
| `and` | (`a`: [`Field`](classes/Field.md), `b`: [`Field`](classes/Field.md), `length`: `number`) => [`Field`](classes/Field.md) | Bitwise AND gadget on [Field](modules.md#field-1) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND). The AND gate works by comparing two bits and returning `1` if both bits are `1`, and `0` otherwise. It can be checked by a double generic gate that verifies the following relationship between the values below (in the process it also invokes the [xor](modules.md#xor) gadget which will create additional constraints depending on `length`). The generic gate verifies:\ `a + b = sum` and the conjunction equation `2 * and = sum - xor`\ Where:\ `a + b = sum`\ `a ^ b = xor`\ `a & b = and` You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#and) The `length` parameter lets you define how many bits should be compared. `length` is rounded to the nearest multiple of 16, `paddedLength = ceil(length / 16) * 16`, and both input values are constrained to fit into `paddedLength` bits. The output is guaranteed to have at most `paddedLength` bits as well. **Note:** Specifying a larger `length` parameter adds additional constraints. **Note:** Both [Field](modules.md#field-1) elements need to fit into `2^paddedLength - 1`. Otherwise, an error is thrown and no proof can be generated. For example, with `length = 2` (`paddedLength = 16`), `and()` will fail for any input that is larger than `2**16`. **`Example`** ```typescript let a = Field(3); // ... 000011 let b = Field(5); // ... 000101 let c = Gadgets.and(a, b, 2); // ... 000001 c.assertEquals(1); ``` |
| `compactMultiRangeCheck` | (`xy`: [`Field`](classes/Field.md), `z`: [`Field`](classes/Field.md)) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] | Compact multi-range check This is a variant of [multiRangeCheck](modules.md#multirangecheck) where the first two variables are passed in combined form xy = x + 2^88*y. The gadget - splits up xy into x and y - proves that xy = x + 2^88*y - proves that x, y, z are all in the range [0, 2^88). The split form [x, y, z] is returned. **`Example`** ```ts let [x, y] = Gadgets.compactMultiRangeCheck([xy, z]); ``` **`Throws`** Throws an error if `xy` exceeds 2*88 = 176 bits, or if z exceeds 88 bits. |
| `isInRangeN` | (`n`: `number`, `x`: [`Field`](classes/Field.md)) => [`Bool`](classes/Bool.md) | Checks whether the input value is in the range [0, 2^n). `n` must be a multiple of 16. This function proves that the provided field element can be represented with `n` bits. If the field element exceeds `n` bits, `Bool(false)` is returned and `Bool(true)` otherwise. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); let inRange = Gadgets.isInRangeN(32, x); // return Bool(true) ``` |
| `leftShift32` | (`field`: [`Field`](classes/Field.md), `bits`: `number`) => [`Field`](classes/Field.md) | Performs a left shift operation on the provided [Field](modules.md#field-1) element. This operation is similar to the `<<` shift operation in JavaScript, where bits are shifted to the left, and the overflowing bits are discarded. It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number, where the most significant (32th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 32 bits in size. The output is range checked to 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.leftShift32(x, 2); // left shift by 2 bits y.assertEquals(0b110000); // 48 in binary ``` |
| `leftShift64` | (`field`: [`Field`](classes/Field.md), `bits`: `number`) => [`Field`](classes/Field.md) | Performs a left shift operation on the provided [Field](modules.md#field-1) element. This operation is similar to the `<<` shift operation in JavaScript, where bits are shifted to the left, and the overflowing bits are discarded. It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the shift. Therefore, to safely use `leftShift()`, you need to make sure that the values passed in are range checked to 64 bits. For example, this can be done with [rangeCheck64](modules.md#rangecheck64). **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.leftShift64(x, 2); // left shift by 2 bits y.assertEquals(0b110000); // 48 in binary const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); leftShift64(xLarge, 32); // throws an error since input exceeds 64 bits ``` |
| `multiRangeCheck` | (`limbs`: `Field3`) => `void` | Multi-range check. Proves that x, y, z are all in the range [0, 2^88). This takes 4 rows, so it checks 88*3/4 = 66 bits per row. This is slightly more efficient than 64-bit range checks, which can do 64 bits in 1 row. In particular, the 3x88-bit range check supports bigints up to 264 bits, which in turn is enough to support foreign field multiplication with moduli up to 2^259. **`Example`** ```ts Gadgets.multiRangeCheck([x, y, z]); ``` **`Throws`** Throws an error if one of the input values exceeds 88 bits. |
| `not` | (`a`: [`Field`](classes/Field.md), `length`: `number`, `checked`: `boolean`) => [`Field`](classes/Field.md) | Bitwise NOT gate on [Field](modules.md#field-1) elements. Similar to the [bitwise NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/ Web/JavaScript/Reference/Operators/Bitwise_NOT). **Note:** The NOT gate only operates over the amount of bits specified by the `length` parameter. A NOT gate works by returning `1` in each bit position if the corresponding bit of the operand is `0`, and returning `0` if the corresponding bit of the operand is `1`. The `length` parameter lets you define how many bits to NOT. **Note:** Specifying a larger `length` parameter adds additional constraints. The operation will fail if the length or the input value is larger than 254. NOT is implemented in two different ways. If the `checked` parameter is set to `true` the [xor](modules.md#xor) gadget is reused with a second argument to be an all one bitmask the same length. This approach needs as many rows as an XOR would need for a single negation. If the `checked` parameter is set to `false`, NOT is implemented as a subtraction of the input from the all one bitmask. This implementation is returned by default if no `checked` parameter is provided. You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not) **`Example`** ```ts // not-ing 4 bits with the unchecked version let a = Field(0b0101); let b = Gadgets.not(a,4,false); b.assertEquals(0b1010); // not-ing 4 bits with the checked version utilizing the xor gadget let a = Field(0b0101); let b = Gadgets.not(a,4,true); b.assertEquals(0b1010); ``` **`Throws`** Throws an error if the input value exceeds 254 bits. |
| `rangeCheck16` | (`x`: [`Field`](classes/Field.md)) => `void` | - |
| `rangeCheck32` | (`x`: [`Field`](classes/Field.md)) => `void` | Asserts that the input value is in the range [0, 2^32). This function proves that the provided field element can be represented with 32 bits. If the field element exceeds 32 bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheck32(x); // successfully proves 32-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheck32(xLarge); // throws an error since input exceeds 32 bits ``` **Note**: Small "negative" field element inputs are interpreted as large integers close to the field size, and don't pass the 32-bit check. If you want to prove that a value lies in the int32 range [-2^31, 2^31), you could use `rangeCheck32(x.add(1n << 31n))`. |
| `rangeCheck64` | (`x`: [`Field`](classes/Field.md)) => `void` | Asserts that the input value is in the range [0, 2^64). This function proves that the provided field element can be represented with 64 bits. If the field element exceeds 64 bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheck64(x); // successfully proves 64-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheck64(xLarge); // throws an error since input exceeds 64 bits ``` **Note**: Small "negative" field element inputs are interpreted as large integers close to the field size, and don't pass the 64-bit check. If you want to prove that a value lies in the int64 range [-2^63, 2^63), you could use `rangeCheck64(x.add(1n << 63n))`. |
| `rangeCheck8` | (`x`: [`Field`](classes/Field.md)) => `void` | Asserts that the input value is in the range [0, 2^8). See [rangeCheck64](modules.md#rangecheck64) for analogous details and usage examples. |
| `rangeCheckN` | (`n`: `number`, `x`: [`Field`](classes/Field.md), `message?`: `string`) => `void` | Asserts that the input value is in the range [0, 2^n). `n` must be a multiple of 16. This function proves that the provided field element can be represented with `n` bits. If the field element exceeds `n` bits, an error is thrown. **`Throws`** Throws an error if the input value exceeds `n` bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(12345678n)); Gadgets.rangeCheckN(32, x); // successfully proves 32-bit range const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rangeCheckN(32, xLarge); // throws an error since input exceeds 32 bits ``` |
| `rightShift64` | (`field`: [`Field`](classes/Field.md), `bits`: `number`) => [`Field`](classes/Field.md) | Performs a right shift operation on the provided [Field](modules.md#field-1) element. This is similar to the `>>` shift operation in JavaScript, where bits are moved to the right. The `rightShift64` function utilizes the rotation method internally to implement this operation. * It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. **Important:** The gadgets assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the shift. To safely use `rightShift64()`, you need to make sure that the value passed in is range-checked to 64 bits; for example, using [rangeCheck64](modules.md#rangecheck64). **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); // 12 in binary const y = Gadgets.rightShift64(x, 2); // right shift by 2 bits y.assertEquals(0b000011); // 3 in binary const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); rightShift64(xLarge, 32); // throws an error since input exceeds 64 bits ``` |
| `rotate32` | (`field`: [`Field`](classes/Field.md), `bits`: `number`, `direction`: ``"left"`` \| ``"right"``) => [`Field`](classes/Field.md) | A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript, with the distinction that the bits are circulated to the opposite end of a 32-bit representation rather than being discarded. For a left rotation, this means that bits shifted off the left end reappear at the right end. Conversely, for a right rotation, bits shifted off the right end reappear at the left end. It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number, where the most significant (32th) bit is on the left end and the least significant bit is on the right end. The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation. **Important:** The gadget assumes that its input is at most 32 bits in size. If the input exceeds 32 bits, the gadget is invalid and fails to prove correct execution of the rotation. To safely use `rotate32()`, you need to make sure that the value passed in is range-checked to 32 bits; for example, using [rangeCheck32](modules.md#rangecheck32). **`Throws`** Throws an error if the input value exceeds 32 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); const y = Gadgets.rotate32(x, 2, 'left'); // left rotation by 2 bits const z = Gadgets.rotate32(x, 2, 'right'); // right rotation by 2 bits y.assertEquals(0b110000); z.assertEquals(0b000011); const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rotate32(xLarge, 32, "left"); // throws an error since input exceeds 32 bits ``` |
| `rotate64` | (`field`: [`Field`](classes/Field.md), `bits`: `number`, `direction`: ``"left"`` \| ``"right"``) => [`Field`](classes/Field.md) | A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript, with the distinction that the bits are circulated to the opposite end of a 64-bit representation rather than being discarded. For a left rotation, this means that bits shifted off the left end reappear at the right end. Conversely, for a right rotation, bits shifted off the right end reappear at the left end. It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number, where the most significant (64th) bit is on the left end and the least significant bit is on the right end. The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation. **Important:** The gadget assumes that its input is at most 64 bits in size. If the input exceeds 64 bits, the gadget is invalid and fails to prove correct execution of the rotation. To safely use `rotate64()`, you need to make sure that the value passed in is range-checked to 64 bits; for example, using [rangeCheck64](modules.md#rangecheck64). You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#rotation) **`Throws`** Throws an error if the input value exceeds 64 bits. **`Example`** ```ts const x = Provable.witness(Field, () => Field(0b001100)); const y = Gadgets.rotate64(x, 2, 'left'); // left rotation by 2 bits const z = Gadgets.rotate64(x, 2, 'right'); // right rotation by 2 bits y.assertEquals(0b110000); z.assertEquals(0b000011); const xLarge = Provable.witness(Field, () => Field(12345678901234567890123456789012345678n)); Gadgets.rotate64(xLarge, 32, "left"); // throws an error since input exceeds 64 bits ``` |
| `xor` | (`a`: [`Field`](classes/Field.md), `b`: [`Field`](classes/Field.md), `length`: `number`) => [`Field`](classes/Field.md) | Bitwise XOR gadget on [Field](modules.md#field-1) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR). A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal. This gadget builds a chain of XOR gates recursively. Each XOR gate can verify 16 bit at most. If your input elements exceed 16 bit, another XOR gate will be added to the chain. The `length` parameter lets you define how many bits should be compared. `length` is rounded to the nearest multiple of 16, `paddedLength = ceil(length / 16) * 16`, and both input values are constrained to fit into `paddedLength` bits. The output is guaranteed to have at most `paddedLength` bits as well. **Note:** Specifying a larger `length` parameter adds additional constraints. It is also important to mention that specifying a smaller `length` allows the verifier to infer the length of the original input data (e.g. smaller than 16 bit if only one XOR gate has been used). A zkApp developer should consider these implications when choosing the `length` parameter and carefully weigh the trade-off between increased amount of constraints and security. **Important:** Both [Field](modules.md#field-1) elements need to fit into `2^paddedLength - 1`. Otherwise, an error is thrown and no proof can be generated. For example, with `length = 2` (`paddedLength = 16`), `xor()` will fail for any input that is larger than `2**16`. You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1) **`Throws`** Throws an error if the input values exceed `2^paddedLength - 1`. **`Example`** ```ts let a = Field(0b0101); let b = Field(0b0011); let c = Gadgets.xor(a, b, 4); // xor-ing 4 bits c.assertEquals(0b0110); ``` |

#### Defined in

[lib/gadgets/gadgets.ts:31](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/gadgets/gadgets.ts#L31)

[lib/gadgets/gadgets.ts:822](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/gadgets/gadgets.ts#L822)

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
| `Poseidon` | \{ `Sponge`: typeof `Sponge` ; `hash`: (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) ; `hashPacked`: \<T\>(`type`: `Hashable`\<`T`\>, `value`: `T`) => [`Field`](classes/Field.md) ; `hashToGroup`: (`input`: [`Field`](classes/Field.md)[]) => \{ `x`: [`Field`](classes/Field.md) ; `y`: \{ `x0`: [`Field`](classes/Field.md) ; `x1`: [`Field`](classes/Field.md)  }  } ; `hashWithPrefix`: (`prefix`: `string`, `input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) ; `initialState`: () => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] ; `update`: (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)]  } | - |
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
| `hash` | (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) | Hashes the given field elements using [Poseidon](https://eprint.iacr.org/2019/458.pdf). Alias for `Poseidon.hash()`. ```ts let hash = Hash.hash([a, b, c]); ``` **Important:** This is by far the most efficient hash function o1js has available in provable code. Use it by default, if no compatibility concerns require you to use a different hash function. The Poseidon implementation operates over the native [Pallas base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) and uses parameters generated specifically for the [Mina](https://minaprotocol.com) blockchain. We use a `rate` of 2, which means that 2 field elements are hashed per permutation. A permutation causes 11 rows in the constraint system. You can find the full set of Poseidon parameters [here](https://github.com/o1-labs/o1js-bindings/blob/main/crypto/constants.ts). |

#### Defined in

[lib/hashes-combined.ts:11](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/hashes-combined.ts#L11)

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

[lib/keccak.ts:11](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/keccak.ts#L11)

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

[lib/account-update.ts:198](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L198)

[lib/account-update.ts:273](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L273)

___

### Pickles

• **Pickles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compile` | (`rules`: `MlArray`\<[`Rule`](modules/Pickles.md#rule)\>, `config`: \{ `overrideWrapDomain?`: ``0`` \| ``2`` \| ``1`` ; `publicInputSize`: `number` ; `publicOutputSize`: `number` ; `storable?`: [`Cache`](modules/Pickles.md#cache)  }) => \{ `getVerificationKey`: () => [\_: 0, data: string, hash: FieldConst] ; `provers`: `MlArray`\<[`Prover`](modules/Pickles.md#prover)\> ; `tag`: `unknown` ; `verify`: (`statement`: [`Statement`](modules/Pickles.md#statement)\<[`FieldConst`](modules.md#fieldconst-1)\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  } |
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
| `loadSrsFp` | () => `WasmFpSrs` |
| `loadSrsFq` | () => `WasmFqSrs` |
| `verify` | (`statement`: [`Statement`](modules/Pickles.md#statement)\<[`FieldConst`](modules.md#fieldconst-1)\>, `proof`: `unknown`, `verificationKey`: `string`) => `Promise`\<`boolean`\> |

#### Defined in

[snarky.d.ts:726](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L726)

[snarky.d.ts:773](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L773)

___

### Poseidon

• `Const` **Poseidon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Sponge` | typeof `Sponge` |
| `hash` | (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) |
| `hashPacked` | \<T\>(`type`: `Hashable`\<`T`\>, `value`: `T`) => [`Field`](classes/Field.md) |
| `hashToGroup` | (`input`: [`Field`](classes/Field.md)[]) => \{ `x`: [`Field`](classes/Field.md) ; `y`: \{ `x0`: [`Field`](classes/Field.md) ; `x1`: [`Field`](classes/Field.md)  }  } |
| `hashWithPrefix` | (`prefix`: `string`, `input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) |
| `initialState` | () => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |
| `update` | (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |

#### Defined in

[lib/hash.ts:49](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/hash.ts#L49)

___

### Provable

• **Provable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Array` | \<A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`\<`A`[]\> |
| `asProver` | (`f`: () => `void`) => `void` |
| `assertEqual` | \<T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `void`\<T\>(`x`: `T`, `y`: `T`) => `void` |
| `constraintSystem` | \<T\>(`f`: () => `T`) => \{ `digest`: `string` ; `gates`: [`Gate`](modules.md#gate)[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number` ; `print`: () => `void` ; `summary`: () => `Partial`\<`Record`\<[`GateType`](modules.md#gatetype) \| ``"Total rows"``, `number`\>\>  } |
| `equal` | \<T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => [`Bool`](modules.md#bool-1)\<T\>(`x`: `T`, `y`: `T`) => [`Bool`](modules.md#bool-1) |
| `if` | \<T\>(`condition`: [`Bool`](classes/Bool.md), `type`: [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `T`\<T\>(`condition`: [`Bool`](classes/Bool.md), `x`: `T`, `y`: `T`) => `T` |
| `inCheckedComputation` | () => `boolean` |
| `inProver` | () => `boolean` |
| `isConstant` | \<T\>(`type`: [`Provable`](modules.md#provable-1)\<`T`\>, `x`: `T`) => `boolean` |
| `log` | (...`args`: `any`) => `void` |
| `runAndCheck` | (`f`: () => `void`) => `void` |
| `runUnchecked` | (`f`: () => `void`) => `void` |
| `switch` | \<T, A\>(`mask`: [`Bool`](classes/Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` |
| `witness` | \<T, S\>(`type`: `S`, `compute`: () => `T`) => `T` |
| `toConstant` | \<T\>(`type`: [`Provable`](modules.md#provable-1)\<`T`\>, `value`: `T`) => `T` |

#### Defined in

[lib/provable.ts:43](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable.ts#L43)

[lib/provable.ts:45](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable.ts#L45)

___

### Snarky

• **Snarky**: `Object`

Internal interface to snarky-ml

Note for devs: This module is intended to closely mirror snarky-ml's core, low-level APIs.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool` | \{ `and`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `assertEqual`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `equals`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `not`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `or`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } | - |
| `bool.and` | [object Object] | - |
| `bool.assertEqual` | [object Object] | - |
| `bool.equals` | [object Object] | - |
| `bool.not` | [object Object] | - |
| `bool.or` | [object Object] | - |
| `circuit` | \{ `keypair`: \{ `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } ; `compile`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`) => `unknown` ; `prove`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`, `publicInput`: `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>, `keypair`: `unknown`) => `unknown` ; `verify`: (`publicInput`: `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>, `proof`: `unknown`, `verificationKey`: `unknown`) => `boolean`  } | The circuit API is a low level interface to create zero-knowledge proofs |
| `circuit.keypair` | \{ `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } | - |
| `circuit.keypair.getConstraintSystemJSON` | [object Object] | Returns a low-level JSON representation of the circuit: a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs |
| `circuit.keypair.getVerificationKey` | [object Object] | - |
| `circuit.compile` | [object Object] | Generates a proving key and a verification key for the provable function `main` |
| `circuit.prove` | [object Object] | Proves a statement using the private input, public input and the keypair of the circuit. |
| `circuit.verify` | [object Object] | Verifies a proof using the public input, the proof and the verification key of the circuit. |
| `field` | \{ `add`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `assertBoolean`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertEqual`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertMul`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1), `z`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertSquare`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `compare`: (`bitLength`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [\_: 0, less: FieldVar, lessOrEqual: FieldVar] ; `fromBits`: (`bits`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>) => [`FieldVar`](modules.md#fieldvar-1) ; `mul`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `readVar`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldConst`](modules.md#fieldconst-1) ; `scale`: (`c`: [`FieldConst`](modules.md#fieldconst-1), `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `seal`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [`VarFieldVar`](modules.md#varfieldvar) ; `toBits`: (`length`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\> ; `toConstantAndTerms`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [\_: 0, constant: MlOption\<FieldConst\>, terms: MlList\<MlPair\<FieldConst, number\>\>] ; `truncateToBits16`: (`lengthDiv16`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } | APIs to add constraints on field variables |
| `field.add` | [object Object] | add x, y to get a new AST node Add(x, y); handles if x, y are constants |
| `field.assertBoolean` | [object Object] | x*x === x without handling of constants |
| `field.assertEqual` | [object Object] | x === y without handling of constants |
| `field.assertMul` | [object Object] | x*y === z without handling of constants |
| `field.assertSquare` | [object Object] | x*x === y without handling of constants |
| `field.compare` | [object Object] | check x < y and x <= y |
| `field.fromBits` | [object Object] |  |
| `field.mul` | [object Object] | witnesses z = x*y and constrains it with [assert_r1cs]; handles constants |
| `field.readVar` | [object Object] | evaluates a CVar by walking the AST and reading Vars from a list of public input + aux values |
| `field.scale` | [object Object] | scale x by a constant to get a new AST node Scale(c, x); handles if x is a constant |
| `field.seal` | [object Object] | returns a new witness from an AST (implemented with toConstantAndTerms) |
| `field.toBits` | [object Object] |  |
| `field.toConstantAndTerms` | [object Object] | Unfolds AST to get `x = c + c0*Var(i0) + ... + cn*Var(in)`, returns `(c, [(c0, i0), ..., (cn, in)])`; c is optional |
| `field.truncateToBits16` | [object Object] | returns x truncated to the lowest `16 * lengthDiv16` bits => can be used to assert that x fits in `16 * lengthDiv16` bits. more efficient than `toBits()` because it uses the EC_endoscalar gate; does 16 bits per row (vs 1 bits per row that you can do with generic gates). |
| `gates` | \{ `addFixedLookupTable`: (`id`: `number`, `data`: `MlArray`\<`MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>\>) => `void` ; `addRuntimeTableConfig`: (`id`: `number`, `firstColumn`: `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>) => `void` ; `ecAdd`: (`p1`: `MlGroup`, `p2`: `MlGroup`, `p3`: `MlGroup`, `inf`: [`FieldVar`](modules.md#fieldvar-1), `same_x`: [`FieldVar`](modules.md#fieldvar-1), `slope`: [`FieldVar`](modules.md#fieldvar-1), `inf_z`: [`FieldVar`](modules.md#fieldvar-1), `x21_inv`: [`FieldVar`](modules.md#fieldvar-1)) => `MlGroup` ; `ecEndoscalar`: (`state`: `MlArray`\<[\_: 0, n0: FieldVar, n8: FieldVar, a0: FieldVar, b0: FieldVar, a8: FieldVar, b8: FieldVar, x0: FieldVar, x1: FieldVar, x2: FieldVar, x3: FieldVar]\>) => `void` ; `ecEndoscale`: (`state`: `MlArray`\<[\_: 0, xt: FieldVar, yt: FieldVar, xp: FieldVar, yp: FieldVar, nAcc: FieldVar, xr: FieldVar, yr: FieldVar, s1: FieldVar, s3: FieldVar, b1: FieldVar]\>, `xs`: [`FieldVar`](modules.md#fieldvar-1), `ys`: [`FieldVar`](modules.md#fieldvar-1), `nAcc`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `ecScale`: (`state`: `MlArray`\<[\_: 0, accs: MlArray\<[0, FieldVar, FieldVar]\>, bits: MlArray\<FieldVar\>, ss: MlArray\<FieldVar\>, base: MlGroup, nPrev: Field, nNext: Field]\>) => `void` ; `foreignFieldAdd`: (`left`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `right`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `fieldOverflow`: [`FieldVar`](modules.md#fieldvar-1), `carry`: [`FieldVar`](modules.md#fieldvar-1), `foreignFieldModulus`: [``0``, [`FieldConst`](modules.md#fieldconst-1), [`FieldConst`](modules.md#fieldconst-1), [`FieldConst`](modules.md#fieldconst-1)], `sign`: [`FieldConst`](modules.md#fieldconst-1)) => `void` ; `foreignFieldMul`: (`left`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `right`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `remainder`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `quotient`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `quotientHiBound`: [`FieldVar`](modules.md#fieldvar-1), `product1`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `carry0`: [`FieldVar`](modules.md#fieldvar-1), `carry1p`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `carry1c`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `foreignFieldModulus2`: [`FieldConst`](modules.md#fieldconst-1), `negForeignFieldModulus`: [``0``, [`FieldConst`](modules.md#fieldconst-1), [`FieldConst`](modules.md#fieldconst-1), [`FieldConst`](modules.md#fieldconst-1)]) => `void` ; `generic`: (`sl`: [`FieldConst`](modules.md#fieldconst-1), `l`: [`FieldVar`](modules.md#fieldvar-1), `sr`: [`FieldConst`](modules.md#fieldconst-1), `r`: [`FieldVar`](modules.md#fieldvar-1), `so`: [`FieldConst`](modules.md#fieldconst-1), `o`: [`FieldVar`](modules.md#fieldvar-1), `sm`: [`FieldConst`](modules.md#fieldconst-1), `sc`: [`FieldConst`](modules.md#fieldconst-1)) => `void` ; `lookup`: (`input`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)]) => `void` ; `poseidon`: (`state`: `MlArray`\<[``0``, [`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)]\>) => `void` ; `rangeCheck0`: (`v0`: [`FieldVar`](modules.md#fieldvar-1), `v0p`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `v0c`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `compact`: [`FieldConst`](modules.md#fieldconst-1)) => `void` ; `rangeCheck1`: (`v2`: [`FieldVar`](modules.md#fieldvar-1), `v12`: [`FieldVar`](modules.md#fieldvar-1), `vCurr`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)], `vNext`: [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)]) => `void` ; `raw`: (`kind`: `KimchiGateType`, `values`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>, `coefficients`: `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>) => `void` ; `rotate`: (`field`: [`FieldVar`](modules.md#fieldvar-1), `rotated`: [`FieldVar`](modules.md#fieldvar-1), `excess`: [`FieldVar`](modules.md#fieldvar-1), `limbs`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>, `crumbs`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>, `two_to_rot`: [`FieldConst`](modules.md#fieldconst-1)) => `void` ; `xor`: (`in1`: [`FieldVar`](modules.md#fieldvar-1), `in2`: [`FieldVar`](modules.md#fieldvar-1), `out`: [`FieldVar`](modules.md#fieldvar-1), `in1_0`: [`FieldVar`](modules.md#fieldvar-1), `in1_1`: [`FieldVar`](modules.md#fieldvar-1), `in1_2`: [`FieldVar`](modules.md#fieldvar-1), `in1_3`: [`FieldVar`](modules.md#fieldvar-1), `in2_0`: [`FieldVar`](modules.md#fieldvar-1), `in2_1`: [`FieldVar`](modules.md#fieldvar-1), `in2_2`: [`FieldVar`](modules.md#fieldvar-1), `in2_3`: [`FieldVar`](modules.md#fieldvar-1), `out_0`: [`FieldVar`](modules.md#fieldvar-1), `out_1`: [`FieldVar`](modules.md#fieldvar-1), `out_2`: [`FieldVar`](modules.md#fieldvar-1), `out_3`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `zero`: (`in1`: [`FieldVar`](modules.md#fieldvar-1), `in2`: [`FieldVar`](modules.md#fieldvar-1), `out`: [`FieldVar`](modules.md#fieldvar-1)) => `void`  } | - |
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
| `group` | \{ `scale`: (`p`: `MlGroup`, `s`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>) => `MlGroup`  } | - |
| `group.scale` | [object Object] | - |
| `poseidon` | \{ `sponge`: \{ `absorb`: (`sponge`: `unknown`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => [`FieldVar`](modules.md#fieldvar-1)  } ; `hashToGroup`: (`input`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>) => `MlPair`\<[`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)\> ; `update`: (`state`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>, `input`: `MlArray`\<[`FieldVar`](modules.md#fieldvar-1)\>) => [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)]  } | - |
| `poseidon.sponge` | \{ `absorb`: (`sponge`: `unknown`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => [`FieldVar`](modules.md#fieldvar-1)  } | - |
| `poseidon.sponge.absorb` | [object Object] | - |
| `poseidon.sponge.create` | [object Object] | - |
| `poseidon.sponge.squeeze` | [object Object] | - |
| `poseidon.hashToGroup` | [object Object] | - |
| `poseidon.update` | [object Object] | - |
| `run` | \{ `asProver`: (`f`: () => `void`) => `void` ; `constraintSystem`: (`f`: () => `void`) => \{ `digest`: `string` ; `json`: `JsonConstraintSystem` ; `rows`: `number`  } ; `inProverBlock`: () => `boolean` ; `runAndCheck`: (`f`: () => `void`) => `void` ; `runUnchecked`: (`f`: () => `void`) => `void`  } | APIs that have to do with running provable code |
| `run.asProver` | [object Object] | Runs code as a prover. |
| `run.constraintSystem` | [object Object] | Returns information about the constraint system in the callback function. |
| `run.inProverBlock` | [object Object] | Check whether we are inside an asProver or exists block |
| `run.runAndCheck` | [object Object] | Runs code and checks its correctness. |
| `run.runUnchecked` | [object Object] | Runs code in prover mode, without checking correctness. |
| `exists` | (`sizeInFields`: `number`, `compute`: () => `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>) => `MlArray`\<[`VarFieldVar`](modules.md#varfieldvar)\> | witness `sizeInFields` field element variables Note: this is called "exists" because in a proof, you use it like this: > "I prove that there exists x, such that (some statement)" |
| `existsVar` | (`compute`: () => [`FieldConst`](modules.md#fieldconst-1)) => [`VarFieldVar`](modules.md#varfieldvar) | witness a single field element variable |

#### Defined in

[snarky.d.ts:162](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L162)

[snarky.d.ts:174](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L174)

___

### Test

• `Const` **Test**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encoding` | \{ `memoHashBase58`: (`memoBase58`: `string`) => [`FieldConst`](modules.md#fieldconst-1) ; `memoToBase58`: (`memoString`: `string`) => `string` ; `ofBase58`: (`base58`: `string`, `versionByte`: `number`) => `MlBytes` ; `privateKeyOfBase58`: (`privateKeyBase58`: `string`) => `ScalarConst` ; `privateKeyToBase58`: (`privateKey`: `ScalarConst`) => `string` ; `publicKeyOfBase58`: (`publicKeyBase58`: `string`) => [`MlPublicKey`](modules.md#mlpublickey) ; `publicKeyToBase58`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey)) => `string` ; `toBase58`: (`s`: `MlBytes`, `versionByte`: `number`) => `string` ; `tokenIdOfBase58`: (`fieldBase58`: `string`) => [`FieldConst`](modules.md#fieldconst-1) ; `tokenIdToBase58`: (`field`: [`FieldConst`](modules.md#fieldconst-1)) => `string`  } |
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
| `fieldsFromJson` | \{ `accountUpdate`: (`json`: `string`) => `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>  } |
| `fieldsFromJson.accountUpdate` | [object Object] |
| `hashFromJson` | \{ `accountUpdate`: (`json`: `string`, `networkId`: `string`) => [`FieldConst`](modules.md#fieldconst-1) ; `transactionCommitments`: (`txJson`: `string`, `networkId`: `string`) => \{ `commitment`: [`FieldConst`](modules.md#fieldconst-1) ; `feePayerHash`: [`FieldConst`](modules.md#fieldconst-1) ; `fullCommitment`: [`FieldConst`](modules.md#fieldconst-1)  } ; `zkappPublicInput`: (`txJson`: `string`, `accountUpdateIndex`: `number`) => \{ `accountUpdate`: [`FieldConst`](modules.md#fieldconst-1) ; `calls`: [`FieldConst`](modules.md#fieldconst-1)  }  } |
| `hashFromJson.accountUpdate` | [object Object] |
| `hashFromJson.transactionCommitments` | [object Object] |
| `hashFromJson.zkappPublicInput` | [object Object] |
| `hashInputFromJson` | \{ `accountPrecondition`: (`json`: `String`) => `MlHashInput` ; `body`: (`json`: `String`) => `MlHashInput` ; `networkPrecondition`: (`json`: `String`) => `MlHashInput` ; `packInput`: (`input`: `MlHashInput`) => `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\> ; `permissions`: (`json`: `String`) => `MlHashInput` ; `timing`: (`json`: `String`) => `MlHashInput` ; `update`: (`json`: `String`) => `MlHashInput`  } |
| `hashInputFromJson.accountPrecondition` | [object Object] |
| `hashInputFromJson.body` | [object Object] |
| `hashInputFromJson.networkPrecondition` | [object Object] |
| `hashInputFromJson.packInput` | [object Object] |
| `hashInputFromJson.permissions` | [object Object] |
| `hashInputFromJson.timing` | [object Object] |
| `hashInputFromJson.update` | [object Object] |
| `poseidon` | \{ `hashToGroup`: (`input`: `MlArray`\<[`FieldConst`](modules.md#fieldconst-1)\>) => `MlPair`\<[`FieldConst`](modules.md#fieldconst-1), [`FieldConst`](modules.md#fieldconst-1)\>  } |
| `poseidon.hashToGroup` | [object Object] |
| `signature` | \{ `dummySignature`: () => `string` ; `signFieldElement`: (`messageHash`: [`FieldConst`](modules.md#fieldconst-1), `privateKey`: `ScalarConst`, `networkId`: `string`) => `string`  } |
| `signature.dummySignature` | [object Object] |
| `signature.signFieldElement` | [object Object] |
| `tokenId` | \{ `derive`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey), `tokenId`: [`FieldConst`](modules.md#fieldconst-1)) => [`FieldConst`](modules.md#fieldconst-1) ; `deriveChecked`: (`publicKey`: [`MlPublicKeyVar`](modules.md#mlpublickeyvar), `tokenId`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } |
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

[snarky.d.ts:616](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L616)

___

### TokenId

• `Const` **TokenId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](classes/Field.md)) => `void` |
| `default` | [`Field`](classes/Field.md) |
| `empty` | () => [`Field`](classes/Field.md) |
| `fromFields` | (`x`: [`Field`](classes/Field.md)[], `aux`: `any`[]) => [`Field`](classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](classes/Field.md)) => [`Field`](classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](classes/Field.md)) => \{ `fields?`: [`Field`](classes/Field.md)[] ; `packed?`: [[`Field`](classes/Field.md), `number`][]  } |
| `derive` | (`tokenOwner`: [`PublicKey`](classes/Types.PublicKey.md), `parentTokenId`: [`Field`](classes/Field.md)) => [`Field`](classes/Field.md) |
| `fromBase58` | (`base58`: `string`) => [`Field`](classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](classes/Field.md) |
| `sizeInFields` | () => `number` |
| `toBase58` | (`t`: [`Field`](classes/Field.md)) => `string` |
| `toJSON` | (`x`: [`Field`](classes/Field.md)) => `string` |

#### Defined in

[lib/account-update.ts:553](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L553)

___

### TransactionVersion

• `Const` **TransactionVersion**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `current` | () => [`UInt32`](classes/UInt32.md) |

#### Defined in

[lib/account-update.ts:108](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L108)

___

### Undefined

• **Undefined**: `ProvablePureExtended`\<`undefined`, ``null``\>

#### Defined in

[lib/proof-system.ts:74](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L74)

[lib/proof-system.ts:75](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L75)

___

### Void

• **Void**: `ProvablePureExtended`\<`void`, ``null``\>

#### Defined in

[lib/proof-system.ts:79](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L79)

[lib/proof-system.ts:80](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L80)

___

### ZkappPublicInput

• **ZkappPublicInput**: `ProvablePureExtended`\<\{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }, \{ `accountUpdate`: `string` = Field; `calls`: `string` = Field }\>

#### Defined in

[lib/account-update.ts:1998](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1998)

[lib/account-update.ts:2002](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L2002)

___

### isReady

• **isReady**: `Promise`\<`void`\>

**`Deprecated`**

`await isReady` is no longer needed. Remove it from your code.

#### Defined in

[index.ts:150](https://github.com/o1-labs/o1js/blob/64a4beb/src/index.ts#L150)

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

[lib/zkapp.ts:1450](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1450)

___

### Bool

▸ **Bool**(`...args`): [`Bool`](classes/Bool.md)

A boolean value. You can create it like this:

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: boolean \| Bool \| FieldVar] |

#### Returns

[`Bool`](classes/Bool.md)

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

[lib/core.ts:81](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L81)

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

[lib/provable-types/provable-types.ts:16](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L16)

___

### Field

▸ **Field**(`...args`): [`Field`](classes/Field.md)

A [Field](modules.md#field-1) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field).
Every other provable type is built using the [Field](modules.md#field-1) type.

The field is the [pasta base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) of order 2^254 + 0x224698fc094cf91b992d30ed00000001 ([ORDER](classes/Field.md#order)).

You can create a new Field from everything "field-like" (`bigint`, integer `number`, decimal `string`, `Field`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: string \| number \| bigint \| FieldVar \| FieldConst \| Field] |

#### Returns

[`Field`](classes/Field.md)

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

[lib/core.ts:81](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L81)

___

### Group

▸ **Group**(`...args`): [`Group`](classes/Group.md)

An element of a Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [\{ `x`: `string` \| `number` \| `bigint` \| [`FieldVar`](modules.md#fieldvar-1) \| [`Field`](classes/Field.md) ; `y`: `string` \| `number` \| `bigint` \| [`FieldVar`](modules.md#fieldvar-1) \| [`Field`](classes/Field.md)  }] |

#### Returns

[`Group`](classes/Group.md)

#### Defined in

[lib/core.ts:81](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/core.ts#L81)

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

[lib/merkle-tree.ts:237](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/merkle-tree.ts#L237)

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

[lib/zkapp.ts:1490](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1490)

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

[lib/state.ts:85](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/state.ts#L85)

___

### Struct

▸ **Struct**\<`A`, `T`, `J`, `Pure`\>(`type`): (`value`: `T`) => `T` & \{ `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)\<`T`\> : [`Provable`](modules.md#provable-1)\<`T`\> & \{ `empty`: () => `T` ; `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => \{ `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

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

(`value`: `T`) => `T` & \{ `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)\<`T`\> : [`Provable`](modules.md#provable-1)\<`T`\> & \{ `empty`: () => `T` ; `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => \{ `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

Class which you can extend

#### Defined in

[lib/circuit-value.ts:375](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L375)

___

### VarField

▸ **VarField**(`x`): [`VarField`](modules.md#varfield)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`VarFieldVar`](modules.md#varfieldvar) |

#### Returns

[`VarField`](modules.md#varfield)

#### Defined in

[lib/field.ts:1363](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1363)

___

### ZkProgram

▸ **ZkProgram**\<`StatementType`, `Types`\>(`config`): \{ `analyzeMethods`: () => \{ [I in keyof Types]: ReturnType\<typeof analyzeMethod\> } ; `compile`: (`options?`: \{ `cache?`: [`Cache`](modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](modules.md#field-1)  }  }\> ; `digest`: () => `string` ; `name`: `string` ; `privateInputTypes`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in keyof Types]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

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

\{ `analyzeMethods`: () => \{ [I in keyof Types]: ReturnType\<typeof analyzeMethod\> } ; `compile`: (`options?`: \{ `cache?`: [`Cache`](modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](modules.md#field-1)  }  }\> ; `digest`: () => `string` ; `name`: `string` ; `privateInputTypes`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in keyof Types]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in keyof Types]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Defined in

[lib/proof-system.ts:244](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L244)

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

[lib/fetch.ts:407](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L407)

___

### arrayProp

▸ **arrayProp**\<`T`\>(`elementType`, `length`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\> |
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

[lib/circuit-value.ts:280](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L280)

___

### assert

▸ **assert**(`stmt`, `message?`): asserts stmt

Assert that a statement is true. If the statement is false, throws an error with the given message.
Can be used in provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stmt` | `boolean` \| [`Bool`](classes/Bool.md) |
| `message?` | `string` |

#### Returns

asserts stmt

#### Defined in

[lib/gadgets/common.ts:70](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/gadgets/common.ts#L70)

___

### checkBitLength

▸ **checkBitLength**(`name`, `length`, `maxLength?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `length` | `number` | `undefined` |
| `maxLength` | `number` | `Fp.sizeInBits` |

#### Returns

`void`

#### Defined in

[lib/field.ts:1301](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1301)

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

[lib/fetch.ts:506](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L506)

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

[lib/circuit.ts:233](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit.ts#L233)

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

[lib/foreign-ecdsa.ts:189](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/foreign-ecdsa.ts#L189)

___

### createForeignCurve

▸ **createForeignCurve**(`params`): typeof [`ForeignCurve`](classes/ForeignCurve.md)

Create a class representing an elliptic curve group, which is different from the native [Group](classes/Group.md).

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

[lib/foreign-curve.ts:293](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/foreign-curve.ts#L293)

___

### createForeignField

▸ **createForeignField**(`modulus`): typeof `UnreducedForeignField`

Create a class representing a prime order finite field, which is different from the native [Field](classes/Field.md).

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

[lib/foreign-field.ts:627](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/foreign-field.ts#L627)

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

[lib/zkapp.ts:1476](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1476)

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

[lib/state.ts:175](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/state.ts#L175)

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
| `accountInfo.tokenId?` | `string` \| [`Field`](classes/Field.md) | `undefined` | - |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` | The graphql endpoint to fetch from |
| `«destructured»` | `Object` | `{}` | - |
| › `timeout` | `undefined` \| `number` | `undefined` | - |

#### Returns

`Promise`\<\{ `account`: [`Account`](modules/Types.md#account-1) ; `error`: `undefined`  } \| \{ `account`: `undefined` ; `error`: `FetchError`  }\>

zkapp information on the specified account or an error is thrown

#### Defined in

[lib/fetch.ts:171](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L171)

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

[lib/fetch.ts:637](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L637)

___

### fetchLastBlock

▸ **fetchLastBlock**(`graphqlEndpoint?`): `Promise`\<`PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

Fetches the last block on the Mina network.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`\<`PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Defined in

[lib/fetch.ts:450](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L450)

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

[lib/fetch.ts:587](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L587)

___

### getWasm

▸ **getWasm**(): `WasmModule`

#### Returns

`WasmModule`

#### Defined in

bindings/js/wrapper.d.ts:7

___

### matrixProp

▸ **matrixProp**\<`T`\>(`elementType`, `nRows`, `nColumns`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`FlexibleProvable`](modules.md#flexibleprovable)\<`T`\> |
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

[lib/circuit-value.ts:289](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L289)

___

### method

▸ **method**\<`T`\>(`target`, `methodName`, `descriptor`): `void`

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
| `T` | extends [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` & \{ `constructor`: `any`  } |
| `methodName` | keyof `T` & `string` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:91](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L91)

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

[lib/circuit-value.ts:265](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L265)

___

### provable

▸ **provable**\<`A`\>(`typeObj`, `options?`): `InferredProvable`\<`A`, [`Field`](classes/Field.md)\>

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

`InferredProvable`\<`A`, [`Field`](classes/Field.md)\>

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

bindings/lib/provable-snarky.ts:55

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

[lib/circuit.ts:197](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit.ts#L197)

___

### readVarMessage

▸ **readVarMessage**(`methodName`, `varName`, `varDescription`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `varName` | `string` |
| `varDescription` | `string` |

#### Returns

`string`

#### Defined in

[lib/field.ts:1343](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1343)

___

### scaleShifted

▸ **scaleShifted**(`point`, `shiftedScalar`): [`Group`](classes/Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Group`](classes/Group.md) |
| `shiftedScalar` | [`Scalar`](classes/Scalar.md) |

#### Returns

[`Group`](classes/Group.md)

#### Defined in

[lib/signature.ts:323](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L323)

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

[lib/fetch.ts:607](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L607)

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

[lib/fetch.ts:126](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L126)

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

[lib/fetch.ts:104](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L104)

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

[lib/fetch.ts:97](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L97)

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

[lib/proof-system/workers.ts:15](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system/workers.ts#L15)

___

### shutdown

▸ **shutdown**(): `void`

#### Returns

`void`

**`Deprecated`**

`shutdown()` is no longer needed, and is a no-op. Remove it from your code.

#### Defined in

[index.ts:155](https://github.com/o1-labs/o1js/blob/64a4beb/src/index.ts#L155)

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

[lib/state.ts:99](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/state.ts#L99)

___

### toConstantField

▸ **toConstantField**(`x`, `methodName`, `varName?`, `varDescription?`): [`ConstantField`](modules.md#constantfield)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Field`](classes/Field.md) | `undefined` |
| `methodName` | `string` | `undefined` |
| `varName` | `string` | `'x'` |
| `varDescription` | `string` | `'field element'` |

#### Returns

[`ConstantField`](modules.md#constantfield)

#### Defined in

[lib/field.ts:1318](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1318)

___

### toFp

▸ **toFp**(`x`): `Fp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](classes/Field.md) |

#### Returns

`Fp`

#### Defined in

[lib/field.ts:1259](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1259)

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

[lib/proof-system.ts:190](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L190)

___

### withMessage

▸ **withMessage**(`error`, `message?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `message?` | `string` |

#### Returns

`unknown`

#### Defined in

[lib/field.ts:1277](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/field.ts#L1277)
