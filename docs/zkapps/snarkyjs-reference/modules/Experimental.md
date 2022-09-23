# Namespace: Experimental

This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
(Not unstable in the sense that they are less functional or tested than other parts.)

## Table of contents

### Type Aliases

- [AsFieldsAndAux](Experimental.md#asfieldsandaux)
- [Callback](Experimental.md#callback)

### Variables

- [Callback](Experimental.md#callback-1)
- [MerkleTree](Experimental.md#merkletree)

### Functions

- [MerkleWitness](Experimental.md#merklewitness)
- [Reducer](Experimental.md#reducer)
- [ZkProgram](Experimental.md#zkprogram)
- [accountUpdateFromCallback](Experimental.md#accountupdatefromcallback)
- [createChildAccountUpdate](Experimental.md#createchildaccountupdate)
- [makeChildAccountUpdate](Experimental.md#makechildaccountupdate)
- [memoizeWitness](Experimental.md#memoizewitness)

## Type Aliases

### AsFieldsAndAux

Ƭ **AsFieldsAndAux**<`T`, `TJson`\>: `AsFieldsAndAux_`<`T`, `TJson`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TJson` |

#### Defined in

[index.ts:100](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L100)

___

### Callback

Ƭ **Callback**<`Result`\>: `Callback_`<`Result`\>

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Defined in

[index.ts:101](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L101)

[index.ts:102](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L102)

## Variables

### Callback

• **Callback**: typeof `Callback` = `Experimental_.Callback`

#### Defined in

[index.ts:101](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L101)

[index.ts:102](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L102)

___

### MerkleTree

• **MerkleTree**: typeof `MerkleTree` = `Experimental_.MerkleTree`

#### Defined in

[index.ts:96](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/index.ts#L96)

## Functions

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

[lib/merkle_tree.ts:215](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/merkle_tree.ts#L215)

___

### Reducer

▸ **Reducer**<`T`, `A`\>(`reducer`): `ReducerReturn`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`, `T`\> |
| `A` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Object` |
| `reducer.actionType` | `T` |

#### Returns

`ReducerReturn`<`A`\>

#### Defined in

[lib/zkapp.ts:1243](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1243)

___

### ZkProgram

▸ **ZkProgram**<`PublicInputType`, `Types`\>(`__namedParameters`): { `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `PublicInputType` ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferInstance`<`PublicInputType`\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferInstance<PublicInputType\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PublicInputType` | extends [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`, `PublicInputType`\> |
| `Types` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.methods` | { [I in string \| number \| symbol]: Method<InferInstance<PublicInputType\>, Types[I]\> } |
| `__namedParameters.publicInput` | `PublicInputType` |

#### Returns

{ `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `PublicInputType` ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferInstance`<`PublicInputType`\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferInstance<PublicInputType\>, Types[I]\> }

#### Defined in

[lib/proof_system.ts:147](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L147)

___

### accountUpdateFromCallback

▸ **accountUpdateFromCallback**(`parentZkapp`, `childLayout`, `callback`): [`AccountUpdate`](../classes/AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentZkapp` | [`SmartContract`](../classes/SmartContract.md) |
| `childLayout` | `AccountUpdatesLayout` |
| `callback` | `Callback`<`any`\> |

#### Returns

[`AccountUpdate`](../classes/AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:520](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L520)

___

### createChildAccountUpdate

▸ **createChildAccountUpdate**(`parent`, `childAddress`, `tokenId?`): [`AccountUpdate`](../classes/AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`AccountUpdate`](../classes/AccountUpdate.md) |
| `childAddress` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

[`AccountUpdate`](../classes/AccountUpdate.md)

#### Defined in

[lib/account_update.ts:1214](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1214)

___

### makeChildAccountUpdate

▸ **makeChildAccountUpdate**(`parent`, `child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`AccountUpdate`](../classes/AccountUpdate.md) |
| `child` | [`AccountUpdate`](../classes/AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:1223](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1223)

___

### memoizeWitness

▸ **memoizeWitness**<`T`\>(`type`, `compute`): `T`

Like Circuit.witness, but memoizes the witness during transaction construction
for reuse by the prover. This is needed to witness non-deterministic values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `compute` | () => `T` |

#### Returns

`T`

#### Defined in

[lib/circuit_value.ts:662](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L662)
