[SnarkyJS](../README.md) / [Modules](../modules.md) / Experimental

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

[index.ts:95](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/index.ts#L95)

[index.ts:96](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/index.ts#L96)

## Variables

### Callback

• **Callback**: typeof `Callback` = `Experimental_.Callback`

#### Defined in

[index.ts:95](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/index.ts#L95)

[index.ts:96](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/index.ts#L96)

## Functions

### ZkProgram

▸ **ZkProgram**<`StatementType`, `Types`\>(`config`): { `analyzeMethods`: () => `ReturnType`<typeof `analyzeMethod`\>[] ; `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `ProvableOrUndefined`<`Get`<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`<`Get`<`StatementType`, ``"publicOutput"``\>\> ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferProvableOrUndefined`<`Get`<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`<`Get`<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferProvableOrUndefined<Get<StatementType, "publicInput"\>\>, InferProvableOrVoid<Get<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `StatementType` | extends `Object` |
| `Types` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `StatementType` & { `methods`: { [I in string \| number \| symbol]: Method<InferProvableOrUndefined<Get<StatementType, "publicInput"\>\>, InferProvableOrVoid<Get<StatementType, "publicOutput"\>\>, Types[I]\> }  } |

#### Returns

{ `analyzeMethods`: () => `ReturnType`<typeof `analyzeMethod`\>[] ; `compile`: () => `Promise`<{ `verificationKey`: `string`  }\> ; `digest`: () => `string` ; `name`: `string` ; `publicInputType`: `ProvableOrUndefined`<`Get`<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`<`Get`<`StatementType`, ``"publicOutput"``\>\> ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)<`InferProvableOrUndefined`<`Get`<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`<`Get`<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`<`boolean`\>  } & { [I in keyof Types]: Prover<InferProvableOrUndefined<Get<StatementType, "publicInput"\>\>, InferProvableOrVoid<Get<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Defined in

[lib/proof_system.ts:188](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/proof_system.ts#L188)

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

[lib/account_update.ts:1714](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/account_update.ts#L1714)

___

### memoizeWitness

▸ **memoizeWitness**<`T`\>(`type`, `compute`): `T`

Like Provable.witness, but memoizes the witness during transaction construction
for reuse by the prover. This is needed to witness non-deterministic values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |
| `compute` | () => `T` |

#### Returns

`T`

#### Defined in

[lib/provable.ts:456](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/provable.ts#L456)
