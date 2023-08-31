[o1js](README.md) / Modules

# o1js

## Table of contents

### Namespaces

- [Encoding](modules/Encoding.md)
- [Encryption](modules/Encryption.md)
- [Experimental](modules/Experimental.md)
- [Mina](modules/Mina.md)
- [Pickles](modules/Pickles.md)
- [Snarky](modules/Snarky.md)
- [Types](modules/Types.md)

### Enumerations

- [FieldType](enums/FieldType.md)

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
- [Nullifier](classes/Nullifier.md)
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

- [Bool](modules.md#bool)
- [BoolVar](modules.md#boolvar)
- [ConstantField](modules.md#constantfield)
- [DeployArgs](modules.md#deployargs)
- [Empty](modules.md#empty)
- [Field](modules.md#field)
- [FieldConst](modules.md#fieldconst)
- [FieldVar](modules.md#fieldvar)
- [FlexibleProvable](modules.md#flexibleprovable)
- [FlexibleProvablePure](modules.md#flexibleprovablepure)
- [Gate](modules.md#gate)
- [Group](modules.md#group)
- [InferProvable](modules.md#inferprovable)
- [JsonGate](modules.md#jsongate)
- [JsonProof](modules.md#jsonproof)
- [MlPublicKey](modules.md#mlpublickey)
- [MlPublicKeyVar](modules.md#mlpublickeyvar)
- [Provable](modules.md#provable)
- [ProvableExtended](modules.md#provableextended)
- [Reducer](modules.md#reducer)
- [State](modules.md#state)
- [Struct](modules.md#struct)
- [TransactionStatus](modules.md#transactionstatus)
- [Undefined](modules.md#undefined)
- [Void](modules.md#void)
- [ZkappPublicInput](modules.md#zkapppublicinput)

### Variables

- [Empty](modules.md#empty-1)
- [FieldConst](modules.md#fieldconst-1)
- [FieldVar](modules.md#fieldvar-1)
- [Permissions](modules.md#permissions)
- [Pickles](modules.md#pickles)
- [Poseidon](modules.md#poseidon)
- [Provable](modules.md#provable-1)
- [Snarky](modules.md#snarky)
- [Test](modules.md#test)
- [TokenId](modules.md#tokenid)
- [Undefined](modules.md#undefined-1)
- [Void](modules.md#void-1)
- [ZkappPublicInput](modules.md#zkapppublicinput-1)
- [isReady](modules.md#isready)

### Functions

- [Account](modules.md#account)
- [Bool](modules.md#bool-1)
- [Field](modules.md#field-1)
- [Group](modules.md#group-1)
- [MerkleWitness](modules.md#merklewitness)
- [Reducer](modules.md#reducer-1)
- [State](modules.md#state-1)
- [Struct](modules.md#struct-1)
- [addCachedAccount](modules.md#addcachedaccount)
- [arrayProp](modules.md#arrayprop)
- [checkZkappTransaction](modules.md#checkzkapptransaction)
- [circuitMain](modules.md#circuitmain)
- [declareMethods](modules.md#declaremethods)
- [declareState](modules.md#declarestate)
- [fetchAccount](modules.md#fetchaccount)
- [fetchEvents](modules.md#fetchevents)
- [fetchLastBlock](modules.md#fetchlastblock)
- [fetchTransactionStatus](modules.md#fetchtransactionstatus)
- [isBool](modules.md#isbool)
- [isField](modules.md#isfield)
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
- [shutdown](modules.md#shutdown)
- [state](modules.md#state-2)
- [toConstantField](modules.md#toconstantfield)
- [verify](modules.md#verify)
- [withMessage](modules.md#withmessage)

## Type Aliases

### Bool

Ƭ **Bool**: [`Bool`](classes/Bool.md)

#### Defined in

[lib/core.ts:70](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L70)

[lib/core.ts:71](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L71)

___

### BoolVar

Ƭ **BoolVar**: [`FieldVar`](modules.md#fieldvar-1)

#### Defined in

[lib/bool.ts:17](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/bool.ts#L17)

___

### ConstantField

Ƭ **ConstantField**: [`Field`](classes/Field.md) & { `value`: `ConstantFieldVar`  }

#### Defined in

[lib/field.ts:96](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L96)

___

### DeployArgs

Ƭ **DeployArgs**: { `verificationKey?`: { `data`: `string` ; `hash`: `string` \| [`Field`](modules.md#field-1)  } ; `zkappKey?`: [`PrivateKey`](classes/PrivateKey.md)  } \| `undefined`

#### Defined in

[lib/zkapp.ts:1505](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1505)

___

### Empty

Ƭ **Empty**: [`Undefined`](modules.md#undefined-1)

#### Defined in

[lib/proof_system.ts:60](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L60)

[lib/proof_system.ts:61](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L61)

___

### Field

Ƭ **Field**: [`Field`](classes/Field.md)

#### Defined in

[lib/core.ts:42](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L42)

[lib/core.ts:43](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L43)

___

### FieldConst

Ƭ **FieldConst**: `Uint8Array`

#### Defined in

[lib/field.ts:24](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L24)

[lib/field.ts:33](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L33)

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

[lib/field.ts:67](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L67)

[lib/field.ts:75](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L75)

___

### FlexibleProvable

Ƭ **FlexibleProvable**<`T`\>: [`Provable`](modules.md#provable-1)<`T`\> \| [`Struct`](modules.md#struct)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:62](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L62)

___

### FlexibleProvablePure

Ƭ **FlexibleProvablePure**<`T`\>: [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> \| `StructPure`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:63](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L63)

___

### Gate

Ƭ **Gate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coeffs` | `string`[] |
| `type` | `string` |
| `wires` | { `col`: `number` ; `row`: `number`  }[] |

#### Defined in

[snarky.d.ts:367](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L367)

___

### Group

Ƭ **Group**: [`Group`](classes/Group.md)

#### Defined in

[lib/core.ts:76](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L76)

[lib/core.ts:77](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L77)

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

### JsonGate

Ƭ **JsonGate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coeffs` | `number`[][] |
| `typ` | `string` |
| `wires` | { `col`: `number` ; `row`: `number`  }[] |

#### Defined in

[snarky.d.ts:360](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L360)

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

[lib/proof_system.ts:171](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L171)

___

### MlPublicKey

Ƭ **MlPublicKey**: [\_: 0, x: FieldConst, isOdd: MlBool]

#### Defined in

[snarky.d.ts:380](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L380)

___

### MlPublicKeyVar

Ƭ **MlPublicKeyVar**: [\_: 0, x: FieldVar, isOdd: BoolVar]

#### Defined in

[snarky.d.ts:381](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L381)

___

### Provable

Ƭ **Provable**<`T`\>: [`Provable`](interfaces/Provable.md)<`T`\>

`Provable<T>` is the general circuit type interface. It describes how a type `T` is made up of field elements and auxiliary (non-field element) data.

You will find this as the required input type in a few places in o1js. One convenient way to create a `Provable<T>` is using `Struct`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/provable.ts:45](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/provable.ts#L45)

[lib/provable.ts:47](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/provable.ts#L47)

___

### ProvableExtended

Ƭ **ProvableExtended**<`T`, `TJson`\>: [`Provable`](modules.md#provable-1)<`T`\> & `ProvableExtension`<`T`, `TJson`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TJson` | `any` |

#### Defined in

[lib/circuit_value.ts:52](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L52)

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
| `actionType` | [`FlexibleProvablePure`](modules.md#flexibleprovablepure)<`Action`\> |

#### Defined in

[lib/zkapp.ts:1233](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1233)

[lib/zkapp.ts:1552](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1552)

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

[lib/state.ts:73](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/state.ts#L73)

[lib/state.ts:20](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/state.ts#L20)

___

### Struct

Ƭ **Struct**<`T`\>: [`ProvableExtended`](modules.md#provableextended)<`NonMethods`<`T`\>\> & `Constructor`<`T`\> & { `_isStruct`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/circuit_value.ts:359](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L359)

[lib/circuit_value.ts:57](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L57)

___

### TransactionStatus

Ƭ **TransactionStatus**: ``"INCLUDED"`` \| ``"PENDING"`` \| ``"UNKNOWN"``

INCLUDED: A transaction that is on the longest chain

PENDING: A transaction either in the transition frontier or in transaction pool but is not on the longest chain

UNKNOWN: The transaction has either been snarked, reached finality through consensus or has been dropped

#### Defined in

[lib/fetch.ts:650](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L650)

___

### Undefined

Ƭ **Undefined**: `undefined`

#### Defined in

[lib/proof_system.ts:57](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L57)

[lib/proof_system.ts:58](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L58)

___

### Void

Ƭ **Void**: `undefined`

#### Defined in

[lib/proof_system.ts:62](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L62)

[lib/proof_system.ts:63](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L63)

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
| `accountUpdate` | [`Field`](modules.md#field-1) |
| `calls` | [`Field`](modules.md#field-1) |

#### Defined in

[lib/account_update.ts:1967](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L1967)

[lib/account_update.ts:1971](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L1971)

## Variables

### Empty

• **Empty**: `ProvablePureExtended`<`undefined`, ``null``\>

#### Defined in

[lib/proof_system.ts:60](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L60)

[lib/proof_system.ts:61](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L61)

___

### FieldConst

• **FieldConst**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | `Uint8Array` |
| `0` | `Uint8Array` |
| `1` | `Uint8Array` |
| `fromBigint` | (`x`: `bigint`) => `Uint8Array` |
| `toBigint` | (`x`: `Uint8Array`) => `Fp` |
| `equal` | (`x`: `Uint8Array`, `y`: `Uint8Array`) => `boolean` |

#### Defined in

[lib/field.ts:24](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L24)

[lib/field.ts:33](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L33)

___

### FieldVar

• **FieldVar**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | [[`Constant`](enums/FieldType.md#constant), `Uint8Array`] |
| `0` | [[`Constant`](enums/FieldType.md#constant), `Uint8Array`] |
| `1` | [[`Constant`](enums/FieldType.md#constant), `Uint8Array`] |
| `add` | (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) |
| `constant` | (`x`: `bigint` \| `Uint8Array`) => `ConstantFieldVar` |
| `isConstant` | (`x`: [`FieldVar`](modules.md#fieldvar-1)) => x is ConstantFieldVar |
| `scale` | (`c`: `Uint8Array`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) |

#### Defined in

[lib/field.ts:67](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L67)

[lib/field.ts:75](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L75)

___

### Permissions

• **Permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allImpossible` | () => [`Permissions`](modules.md#permissions) |
| `default` | () => [`Permissions`](modules.md#permissions) |
| `dummy` | () => [`Permissions`](modules.md#permissions) |
| `fromJSON` | (`permissions`: { `access`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editActionState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `send`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](modules/Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](modules/Types.Json.md#authrequired)  }) => [`Permissions`](modules.md#permissions) |
| `fromString` | (`permission`: [`AuthRequired`](modules/Types.Json.md#authrequired)) => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `impossible` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `initial` | () => [`Permissions`](modules.md#permissions) |
| `none` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proof` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proofOrSignature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `signature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |

#### Defined in

[lib/account_update.ts:166](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L166)

[lib/account_update.ts:238](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L238)

___

### Pickles

• **Pickles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compile` | (`rules`: `MlArray`<[`Rule`](modules/Pickles.md#rule)\>, `signature`: { `publicInputSize`: `number` ; `publicOutputSize`: `number`  }) => { `getVerificationKey`: () => [\_: 0, data: string, hash: Uint8Array] ; `provers`: `MlArray`<[`Prover`](modules/Pickles.md#prover)\> ; `tag`: `unknown` ; `verify`: (`statement`: [`Statement`](modules/Pickles.md#statement)<`Uint8Array`\>, `proof`: `unknown`) => `Promise`<`boolean`\>  } |
| `dummyBase64Proof` | () => `string` |
| `dummyVerificationKey` | () => [\_: 0, data: string, hash: Uint8Array] |
| `proofOfBase64` | (`base64`: `string`, `maxProofsVerified`: ``0`` \| ``2`` \| ``1``) => [``0`` \| ``2`` \| ``1``, `unknown`] |
| `proofToBase64` | (`proof`: [``0`` \| ``2`` \| ``1``, `unknown`]) => `string` |
| `proofToBase64Transaction` | (`proof`: `unknown`) => `string` |
| `verify` | (`statement`: [`Statement`](modules/Pickles.md#statement)<`Uint8Array`\>, `proof`: `unknown`, `verificationKey`: `string`) => `Promise`<`boolean`\> |

#### Defined in

[snarky.d.ts:498](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L498)

[snarky.d.ts:516](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L516)

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
| `update` | (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md)[] |

#### Defined in

[lib/hash.ts:42](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/hash.ts#L42)

___

### Provable

• **Provable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Array` | <A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`<`A`[]\> |
| `asProver` | (`f`: () => `void`) => `void` |
| `assertEqual` | <T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `void`<T\>(`x`: `T`, `y`: `T`) => `void` |
| `constraintSystem` | <T\>(`f`: () => `T`) => { `digest`: `string` ; `gates`: [`Gate`](modules.md#gate)[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number`  } |
| `equal` | <T\>(`type`: [`FlexibleProvable`](modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => [`Bool`](modules.md#bool-1)<T\>(`x`: `T`, `y`: `T`) => [`Bool`](modules.md#bool-1) |
| `if` | <T\>(`condition`: [`Bool`](classes/Bool.md), `type`: [`FlexibleProvable`](modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `T`<T\>(`condition`: [`Bool`](classes/Bool.md), `x`: `T`, `y`: `T`) => `T` |
| `inCheckedComputation` | () => `boolean` |
| `inProver` | () => `boolean` |
| `log` | (...`args`: `any`) => `void` |
| `runAndCheck` | (`f`: () => `void`) => `void` |
| `runUnchecked` | (`f`: () => `void`) => `void` |
| `switch` | <T, A\>(`mask`: [`Bool`](classes/Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` |
| `witness` | <T, S\>(`type`: `S`, `compute`: () => `T`) => `T` |

#### Defined in

[lib/provable.ts:45](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/provable.ts#L45)

[lib/provable.ts:47](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/provable.ts#L47)

___

### Snarky

• **Snarky**: `Object`

Internal interface to snarky-ml

Note for devs: This module is intended to closely mirror snarky-ml's core, low-level APIs.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool` | { `and`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `assertEqual`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `equals`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `not`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `or`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } | - |
| `bool.and` | [object Object] | - |
| `bool.assertEqual` | [object Object] | - |
| `bool.equals` | [object Object] | - |
| `bool.not` | [object Object] | - |
| `bool.or` | [object Object] | - |
| `circuit` | { `keypair`: { `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } ; `compile`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`) => `unknown` ; `prove`: (`main`: [`Main`](modules/Snarky.md#main), `publicInputSize`: `number`, `publicInput`: `MlArray`<`Uint8Array`\>, `keypair`: `unknown`) => `unknown` ; `verify`: (`publicInput`: `MlArray`<`Uint8Array`\>, `proof`: `unknown`, `verificationKey`: `unknown`) => `boolean`  } | The circuit API is a low level interface to create zero-knowledge proofs |
| `circuit.keypair` | { `getConstraintSystemJSON`: (`keypair`: `unknown`) => `JsonConstraintSystem` ; `getVerificationKey`: (`keypair`: `unknown`) => `unknown`  } | - |
| `circuit.keypair.getConstraintSystemJSON` | [object Object] | Returns a low-level JSON representation of the circuit: a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs |
| `circuit.keypair.getVerificationKey` | [object Object] | - |
| `circuit.compile` | [object Object] | Generates a proving key and a verification key for the provable function `main` |
| `circuit.prove` | [object Object] | Proves a statement using the private input, public input and the keypair of the circuit. |
| `circuit.verify` | [object Object] | Verifies a proof using the public input, the proof and the verification key of the circuit. |
| `field` | { `add`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `assertBoolean`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertEqual`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertMul`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1), `z`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `assertSquare`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `compare`: (`bitLength`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [\_: 0, less: FieldVar, lessOrEqual: FieldVar] ; `fromBits`: (`bits`: `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\>) => [`FieldVar`](modules.md#fieldvar-1) ; `mul`: (`x`: [`FieldVar`](modules.md#fieldvar-1), `y`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `readVar`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => `Uint8Array` ; `scale`: (`c`: `Uint8Array`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `seal`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1) ; `toBits`: (`length`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\> ; `toConstantAndTerms`: (`x`: [`FieldVar`](modules.md#fieldvar-1)) => [\_: 0, constant: MlOption<Uint8Array\>, terms: MlList<MlTuple<Uint8Array, number\>\>] ; `truncateToBits16`: (`lengthDiv16`: `number`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } | APIs to add constraints on field variables |
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
| `group` | { `ecadd`: (`p1`: `MlGroup`, `p2`: `MlGroup`, `p3`: `MlGroup`, `inf`: [`FieldVar`](modules.md#fieldvar-1), `same_x`: [`FieldVar`](modules.md#fieldvar-1), `slope`: [`FieldVar`](modules.md#fieldvar-1), `inf_z`: [`FieldVar`](modules.md#fieldvar-1), `x21_inv`: [`FieldVar`](modules.md#fieldvar-1)) => `MlGroup` ; `scale`: (`p`: `MlGroup`, `s`: `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\>) => `MlGroup`  } | - |
| `group.ecadd` | [object Object] | Low-level Elliptic Curve Addition gate. |
| `group.scale` | [object Object] | - |
| `poseidon` | { `sponge`: { `absorb`: (`sponge`: `unknown`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => [`FieldVar`](modules.md#fieldvar-1)  } ; `hashToGroup`: (`input`: `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\>) => `MlTuple`<[`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)\> ; `update`: (`state`: `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\>, `input`: `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\>) => [``0``, [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1), [`FieldVar`](modules.md#fieldvar-1)]  } | - |
| `poseidon.sponge` | { `absorb`: (`sponge`: `unknown`, `x`: [`FieldVar`](modules.md#fieldvar-1)) => `void` ; `create`: (`isChecked`: `boolean`) => `unknown` ; `squeeze`: (`sponge`: `unknown`) => [`FieldVar`](modules.md#fieldvar-1)  } | - |
| `poseidon.sponge.absorb` | [object Object] | - |
| `poseidon.sponge.create` | [object Object] | - |
| `poseidon.sponge.squeeze` | [object Object] | - |
| `poseidon.hashToGroup` | [object Object] | - |
| `poseidon.update` | [object Object] | - |
| `run` | { `asProver`: (`f`: () => `void`) => `void` ; `constraintSystem`: (`f`: () => `void`) => { `digest`: `string` ; `json`: `JsonConstraintSystem` ; `rows`: `number`  } ; `inProverBlock`: () => `boolean` ; `runAndCheck`: (`f`: () => `void`) => `void` ; `runUnchecked`: (`f`: () => `void`) => `void`  } | APIs that have to do with running provable code |
| `run.asProver` | [object Object] | Runs code as a prover. |
| `run.constraintSystem` | [object Object] | Returns information about the constraint system in the callback function. |
| `run.inProverBlock` | [object Object] | Check whether we are inside an asProver or exists block |
| `run.runAndCheck` | [object Object] | Runs code and checks its correctness. |
| `run.runUnchecked` | [object Object] | Runs code in prover mode, without checking correctness. |
| `exists` | (`sizeInFields`: `number`, `compute`: () => `MlArray`<`Uint8Array`\>) => `MlArray`<[`FieldVar`](modules.md#fieldvar-1)\> | witness `sizeInFields` field element variables Note: this is called "exists" because in a proof, you use it like this: > "I prove that there exists x, such that (some statement)" |
| `existsVar` | (`compute`: () => `Uint8Array`) => [`FieldVar`](modules.md#fieldvar-1) | witness a single field element variable |

#### Defined in

[snarky.d.ts:139](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L139)

[snarky.d.ts:151](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L151)

___

### Test

• `Const` **Test**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encoding` | { `memoHashBase58`: (`memoBase58`: `string`) => `Uint8Array` ; `memoToBase58`: (`memoString`: `string`) => `string` ; `ofBase58`: (`base58`: `string`, `versionByte`: `number`) => `MlBytes` ; `privateKeyOfBase58`: (`privateKeyBase58`: `string`) => `Uint8Array` ; `privateKeyToBase58`: (`privateKey`: `Uint8Array`) => `string` ; `publicKeyOfBase58`: (`publicKeyBase58`: `string`) => [`MlPublicKey`](modules.md#mlpublickey) ; `publicKeyToBase58`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey)) => `string` ; `toBase58`: (`s`: `MlBytes`, `versionByte`: `number`) => `string` ; `tokenIdOfBase58`: (`fieldBase58`: `string`) => `Uint8Array` ; `tokenIdToBase58`: (`field`: `Uint8Array`) => `string`  } |
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
| `fieldsFromJson` | { `accountUpdate`: (`json`: `string`) => `MlArray`<`Uint8Array`\>  } |
| `fieldsFromJson.accountUpdate` | [object Object] |
| `hashFromJson` | { `accountUpdate`: (`json`: `string`) => `Uint8Array` ; `transactionCommitments`: (`txJson`: `string`) => { `commitment`: [`FieldConst`](modules.md#fieldconst-1) ; `feePayerHash`: [`FieldConst`](modules.md#fieldconst-1) ; `fullCommitment`: [`FieldConst`](modules.md#fieldconst-1)  } ; `zkappPublicInput`: (`txJson`: `string`, `accountUpdateIndex`: `number`) => { `accountUpdate`: [`FieldConst`](modules.md#fieldconst-1) ; `calls`: [`FieldConst`](modules.md#fieldconst-1)  }  } |
| `hashFromJson.accountUpdate` | [object Object] |
| `hashFromJson.transactionCommitments` | [object Object] |
| `hashFromJson.zkappPublicInput` | [object Object] |
| `hashInputFromJson` | { `accountPrecondition`: (`json`: `String`) => `MlHashInput` ; `body`: (`json`: `String`) => `MlHashInput` ; `networkPrecondition`: (`json`: `String`) => `MlHashInput` ; `packInput`: (`input`: `MlHashInput`) => `MlArray`<`Uint8Array`\> ; `permissions`: (`json`: `String`) => `MlHashInput` ; `timing`: (`json`: `String`) => `MlHashInput` ; `update`: (`json`: `String`) => `MlHashInput`  } |
| `hashInputFromJson.accountPrecondition` | [object Object] |
| `hashInputFromJson.body` | [object Object] |
| `hashInputFromJson.networkPrecondition` | [object Object] |
| `hashInputFromJson.packInput` | [object Object] |
| `hashInputFromJson.permissions` | [object Object] |
| `hashInputFromJson.timing` | [object Object] |
| `hashInputFromJson.update` | [object Object] |
| `poseidon` | { `hashToGroup`: (`input`: `MlArray`<`Uint8Array`\>) => `MlTuple`<`Uint8Array`, `Uint8Array`\>  } |
| `poseidon.hashToGroup` | [object Object] |
| `signature` | { `dummySignature`: () => `string` ; `signFieldElement`: (`messageHash`: `Uint8Array`, `privateKey`: `Uint8Array`, `isMainnet`: `boolean`) => `string`  } |
| `signature.dummySignature` | [object Object] |
| `signature.signFieldElement` | [object Object] |
| `tokenId` | { `derive`: (`publicKey`: [`MlPublicKey`](modules.md#mlpublickey), `tokenId`: `Uint8Array`) => `Uint8Array` ; `deriveChecked`: (`publicKey`: [`MlPublicKeyVar`](modules.md#mlpublickeyvar), `tokenId`: [`FieldVar`](modules.md#fieldvar-1)) => [`FieldVar`](modules.md#fieldvar-1)  } |
| `tokenId.derive` | [object Object] |
| `tokenId.deriveChecked` | [object Object] |
| `transactionHash` | { `examplePayment`: () => `string` ; `hashPayment`: (`payment`: `string`) => `string` ; `hashPaymentV1`: (`payment`: `string`) => `string` ; `serializeCommon`: (`common`: `string`) => { `data`: `Uint8Array`  } ; `serializePayment`: (`payment`: `string`) => { `data`: `Uint8Array`  } ; `serializePaymentV1`: (`payment`: `string`) => `string`  } |
| `transactionHash.examplePayment` | [object Object] |
| `transactionHash.hashPayment` | [object Object] |
| `transactionHash.hashPaymentV1` | [object Object] |
| `transactionHash.serializeCommon` | [object Object] |
| `transactionHash.serializePayment` | [object Object] |
| `transactionHash.serializePaymentV1` | [object Object] |

#### Defined in

[snarky.d.ts:415](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/snarky.d.ts#L415)

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

[lib/account_update.ts:610](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L610)

___

### Undefined

• **Undefined**: `ProvablePureExtended`<`undefined`, ``null``\>

#### Defined in

[lib/proof_system.ts:57](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L57)

[lib/proof_system.ts:58](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L58)

___

### Void

• **Void**: `ProvablePureExtended`<`void`, ``null``\>

#### Defined in

[lib/proof_system.ts:62](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L62)

[lib/proof_system.ts:63](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L63)

___

### ZkappPublicInput

• **ZkappPublicInput**: [`ProvablePure`](interfaces/ProvablePure.md)<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }\> & `ProvableExtension`<{ `accountUpdate`: [`Field`](classes/Field.md) = Field; `calls`: [`Field`](classes/Field.md) = Field }, { `accountUpdate`: `string` = Field; `calls`: `string` = Field }\>

#### Defined in

[lib/account_update.ts:1967](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L1967)

[lib/account_update.ts:1971](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/account_update.ts#L1971)

___

### isReady

• **isReady**: `Promise`<`void`\>

**`Deprecated`**

`await isReady` is no longer needed. Remove it from your code.

#### Defined in

[index.ts:113](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/index.ts#L113)

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

[lib/zkapp.ts:1512](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1512)

___

### Bool

▸ **Bool**(`...args`): [`Bool`](classes/Bool.md)

A boolean value. You can create it like this:

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: boolean \| Bool \| FieldVar] |

#### Returns

[`Bool`](classes/Bool.md)

#### Defined in

[lib/core.ts:81](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L81)

___

### Field

▸ **Field**(`...args`): [`Field`](classes/Field.md)

A [Field](modules.md#field-1) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field).
Every other provable type is built using the [Field](modules.md#field-1) type.

The field is the [pasta base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) of order 2^254 + 0x224698fc094cf91b992d30ed00000001 ([ORDER](classes/Field.md#order)).

You can create a new Field from everything "field-like" (`bigint`, integer `number`, decimal `string`, `Field`).

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [x: string \| number \| bigint \| Uint8Array \| FieldVar \| Field] |

#### Returns

[`Field`](classes/Field.md)

A [Field](modules.md#field-1) with the value converted from the argument

#### Defined in

[lib/core.ts:81](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L81)

___

### Group

▸ **Group**(`...args`): [`Group`](classes/Group.md)

An element of a Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [{ `x`: `string` \| `number` \| `bigint` \| [`FieldVar`](modules.md#fieldvar-1) \| [`Field`](classes/Field.md) ; `y`: `string` \| `number` \| `bigint` \| [`FieldVar`](modules.md#fieldvar-1) \| [`Field`](classes/Field.md)  }] |

#### Returns

[`Group`](classes/Group.md)

#### Defined in

[lib/core.ts:81](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/core.ts#L81)

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

[lib/merkle_tree.ts:238](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/merkle_tree.ts#L238)

___

### Reducer

▸ **Reducer**<`T`, `A`\>(`reducer`): `ReducerReturn`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FlexibleProvablePure`](modules.md#flexibleprovablepure)<`any`\> |
| `A` | extends `any` = [`InferProvable`](modules.md#inferprovable)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Object` |
| `reducer.actionType` | `T` |

#### Returns

`ReducerReturn`<`A`\>

#### Defined in

[lib/zkapp.ts:1552](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1552)

___

### State

▸ **State**<`A`\>(): [`State`](modules.md#state)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Returns

[`State`](modules.md#state)<`A`\>

#### Defined in

[lib/state.ts:73](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/state.ts#L73)

___

### Struct

▸ **Struct**<`A`, `T`, `J`, `Pure`\>(`type`, `options?`): (`value`: `T`) => `T` & { `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](modules.md#provable-1)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

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
| `T` | extends `unknown` = [`InferProvable`](modules.md#inferprovable)<`A`\> |
| `J` | extends `unknown` = `InferJson`<`A`\> |
| `Pure` | extends `boolean` = `IsPure`<`A`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `A` | Object specifying the layout of the `Struct` |
| `options` | `Object` | Advanced option which allows you to force a certain order of object keys |
| `options.customObjectKeys?` | `string`[] | - |

#### Returns

(`value`: `T`) => `T` & { `_isStruct`: ``true``  } & `Pure` extends ``true`` ? [`ProvablePure`](interfaces/ProvablePure.md)<`T`\> : [`Provable`](modules.md#provable-1)<`T`\> & { `fromJSON`: (`x`: `J`) => `T` ; `toInput`: (`x`: `T`) => { `fields?`: [`Field`](modules.md#field-1)[] ; `packed?`: [[`Field`](modules.md#field-1), `number`][]  } ; `toJSON`: (`x`: `T`) => `J`  }

Class which you can extend

#### Defined in

[lib/circuit_value.ts:359](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L359)

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

[lib/fetch.ts:351](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L351)

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
| `elementType` | [`FlexibleProvable`](modules.md#flexibleprovable)<`T`\> |
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

[lib/circuit_value.ts:264](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L264)

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

[lib/fetch.ts:498](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L498)

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

[lib/circuit.ts:232](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit.ts#L232)

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
| `methodArguments` | `Record`<`string`, [`Provable`](modules.md#provable-1)<`unknown`\>[]\> |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:1538](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L1538)

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
| `states` | `Record`<`string`, [`FlexibleProvablePure`](modules.md#flexibleprovablepure)<`unknown`\>\> |

#### Returns

`void`

#### Defined in

[lib/state.ts:163](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/state.ts#L163)

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

[lib/fetch.ts:131](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L131)

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

[lib/fetch.ts:820](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L820)

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

[lib/fetch.ts:394](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L394)

___

### fetchTransactionStatus

▸ **fetchTransactionStatus**(`txId`, `graphqlEndpoint?`): `Promise`<[`TransactionStatus`](modules.md#transactionstatus)\>

Fetches the status of a transaction.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `txId` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `networkConfig.minaEndpoint` |

#### Returns

`Promise`<[`TransactionStatus`](modules.md#transactionstatus)\>

#### Defined in

[lib/fetch.ts:625](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L625)

___

### isBool

▸ **isBool**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

`boolean`

#### Defined in

[lib/bool.ts:371](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/bool.ts#L371)

___

### isField

▸ **isField**(`x`): x is Field

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is Field

#### Defined in

[lib/field.ts:1281](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L1281)

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
| `elementType` | [`FlexibleProvable`](modules.md#flexibleprovable)<`T`\> |
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

[lib/circuit_value.ts:273](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L273)

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

[lib/zkapp.ts:84](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/zkapp.ts#L84)

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

[lib/circuit_value.ts:249](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit_value.ts#L249)

___

### provable

▸ **provable**<`A`\>(`typeObj`, `options?`): `ProvableExtended`<[`InferProvable`](modules.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

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

`ProvableExtended`<[`InferProvable`](modules.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

#### Defined in

bindings/lib/provable-snarky.ts:47

___

### provablePure

▸ **provablePure**<`A`\>(`typeObj`, `options?`): [`ProvablePure`](interfaces/ProvablePure.md)<[`InferProvable`](modules.md#inferprovable)<`A`\>\> & `ProvableExtension`<[`InferProvable`](modules.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

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

[`ProvablePure`](interfaces/ProvablePure.md)<[`InferProvable`](modules.md#inferprovable)<`A`\>\> & `ProvableExtension`<[`InferProvable`](modules.md#inferprovable)<`A`\>, `InferJson`<`A`\>\>

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

[lib/circuit.ts:196](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/circuit.ts#L196)

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

[lib/field.ts:1334](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L1334)

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

[lib/signature.ts:301](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/signature.ts#L301)

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

[lib/fetch.ts:655](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L655)

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

[lib/fetch.ts:100](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L100)

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

[lib/fetch.ts:78](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L78)

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

[lib/fetch.ts:71](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/fetch.ts#L71)

___

### shutdown

▸ **shutdown**(): `void`

**`Deprecated`**

`shutdown()` is no longer needed, and is a no-op. Remove it from your code.

#### Returns

`void`

#### Defined in

[index.ts:118](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/index.ts#L118)

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
| `stateType` | [`FlexibleProvablePure`](modules.md#flexibleprovablepure)<`A`\> |

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

[lib/state.ts:87](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/state.ts#L87)

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

[lib/field.ts:1309](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L1309)

___

### verify

▸ **verify**(`proof`, `verificationKey`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | [`JsonProof`](modules.md#jsonproof) \| [`Proof`](classes/Proof.md)<`any`, `any`\> |
| `verificationKey` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/proof_system.ts:137](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/proof_system.ts#L137)

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

[lib/field.ts:1303](https://github.com/o1-labs/rename-snarkyjs/blob/fec4d35f/src/lib/field.ts#L1303)
