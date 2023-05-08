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

[index.ts:96](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/index.ts#L96)

[index.ts:97](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/index.ts#L97)

## Variables

### Callback

• **Callback**: typeof `Callback` = `Experimental_.Callback`

#### Defined in

[index.ts:96](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/index.ts#L96)

[index.ts:97](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/index.ts#L97)

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

[lib/proof_system.ts:205](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L205)

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

[lib/account_update.ts:1704](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/account_update.ts#L1704)

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

[lib/circuit_value.ts:856](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L856)
