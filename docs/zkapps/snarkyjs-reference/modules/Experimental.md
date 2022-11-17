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

[index.ts:90](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/index.ts#L90)

[index.ts:91](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/index.ts#L91)

## Variables

### Callback

• **Callback**: typeof `Callback` = `Experimental_.Callback`

#### Defined in

[index.ts:90](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/index.ts#L90)

[index.ts:91](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/index.ts#L91)

## Functions

### ZkProgram

▸ **ZkProgram**<`PublicInputType`, `Types`\>(`__namedParameters`): { `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `PublicInputType` ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferInstance`<`PublicInputType`\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferInstance<PublicInputType\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PublicInputType` | extends [`ProvablePure`](../interfaces/ProvablePure.md)<`any`, `PublicInputType`\> |
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

[lib/proof_system.ts:148](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/proof_system.ts#L148)

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

[lib/account_update.ts:1493](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1493)

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
| `type` | [`Provable`](../interfaces/Provable.md)<`T`\> |
| `compute` | () => `T` |

#### Returns

`T`

#### Defined in

[lib/circuit_value.ts:1043](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L1043)
