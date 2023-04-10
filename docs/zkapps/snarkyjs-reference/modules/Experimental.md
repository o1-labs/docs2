# Namespace: Experimental

This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
(Not unstable in the sense that they are less functional or tested than other parts.)

## Table of contents

### Type Aliases

- [Callback](Experimental.md#callback)

### Variables

- [Callback](Experimental.md#callback-1)

### Functions

- [ZkProgram](Experimental.md#zkprogram)
- [createChildAccountUpdate](Experimental.md#createchildaccountupdate)
- [memoizeWitness](Experimental.md#memoizewitness)

## Type Aliases

### Callback

Ƭ **Callback**<`Result`\>: `Callback_`<`Result`\>

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Defined in

[index.ts:86](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/index.ts#L86)

[index.ts:87](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/index.ts#L87)

## Variables

### Callback

• **Callback**: typeof `Callback` = `Experimental_.Callback`

#### Defined in

[index.ts:86](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/index.ts#L86)

[index.ts:87](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/index.ts#L87)

## Functions

### ZkProgram

▸ **ZkProgram**<`PublicInputType`, `Types`\>(`«destructured»`): { `analyzeMethods`: () => `ReturnType`<typeof `analyzeMethod`\>[] ; `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `PublicInputType` ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferProvable`<`PublicInputType`\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferProvable<PublicInputType\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PublicInputType` | extends [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\> |
| `Types` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `methods` | { [I in string \| number \| symbol]: Method<InferProvable<PublicInputType\>, Types[I]\> } |
| › `publicInput` | `PublicInputType` |

#### Returns

{ `analyzeMethods`: () => `ReturnType`<typeof `analyzeMethod`\>[] ; `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `PublicInputType` ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferProvable`<`PublicInputType`\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferProvable<PublicInputType\>, Types[I]\> }

#### Defined in

[lib/proof_system.ts:154](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L154)

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

[lib/account_update.ts:1638](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/account_update.ts#L1638)

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
| `type` | [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |
| `compute` | () => `T` |

#### Returns

`T`

#### Defined in

[lib/circuit_value.ts:1101](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/circuit_value.ts#L1101)
