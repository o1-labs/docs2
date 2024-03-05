[o1js](../README.md) / [Modules](../modules.md) / Experimental

# Namespace: Experimental

This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
(Not unstable in the sense that they are less functional or tested than other parts.)

## Table of contents

### Functions

- [ZkProgram](Experimental.md#zkprogram)
- [memoizeWitness](Experimental.md#memoizewitness)

## Functions

### ZkProgram

▸ **ZkProgram**\<`StatementType`, `Types`\>(`config`): \{ `analyzeMethods`: () => \{ [I in string \| number \| symbol]: Object } ; `compile`: (`options?`: \{ `cache?`: [`Cache`](../modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }\> ; `digest`: () => `string` ; `name`: `string` ; `privateInputTypes`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in string \| number \| symbol]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `StatementType` | extends `Object` |
| `Types` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `StatementType` & \{ `methods`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> } ; `name?`: `string` ; `overrideWrapDomain?`: ``0`` \| ``2`` \| ``1``  } |

#### Returns

\{ `analyzeMethods`: () => \{ [I in string \| number \| symbol]: Object } ; `compile`: (`options?`: \{ `cache?`: [`Cache`](../modules.md#cache-1) ; `forceRecompile?`: `boolean`  }) => `Promise`\<\{ `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }\> ; `digest`: () => `string` ; `name`: `string` ; `privateInputTypes`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["privateInputs"] } ; `publicInputType`: `ProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\> ; `publicOutputType`: `ProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\> ; `rawMethods`: \{ [I in string \| number \| symbol]: Method\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\>["method"] } ; `verify`: (`proof`: [`Proof`](../classes/Proof.md)\<`InferProvableOrUndefined`\<`Get`\<`StatementType`, ``"publicInput"``\>\>, `InferProvableOrVoid`\<`Get`\<`StatementType`, ``"publicOutput"``\>\>\>) => `Promise`\<`boolean`\>  } & \{ [I in string \| number \| symbol]: Prover\<InferProvableOrUndefined\<Get\<StatementType, "publicInput"\>\>, InferProvableOrVoid\<Get\<StatementType, "publicOutput"\>\>, Types[I]\> }

**`Deprecated`**

`ZkProgram` has moved out of the Experimental namespace and is now directly available as a top-level import `ZkProgram`.
The old `Experimental.ZkProgram` API has been deprecated in favor of the new `ZkProgram` top-level import.

#### Defined in

[lib/proof-system.ts:1092](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/proof-system.ts#L1092)

___

### memoizeWitness

▸ **memoizeWitness**\<`T`\>(`type`, `compute`): `T`

Like Provable.witness, but memoizes the witness during transaction construction
for reuse by the prover. This is needed to witness non-deterministic values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `compute` | () => `T` |

#### Returns

`T`

#### Defined in

[lib/provable.ts:473](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable.ts#L473)
