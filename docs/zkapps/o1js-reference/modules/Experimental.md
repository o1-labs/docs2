[o1js](../README.md) / [Modules](../modules.md) / Experimental

# Namespace: Experimental

This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
(Not unstable in the sense that they are less functional or tested than other parts.)

## Table of contents

### Functions

- [memoizeWitness](Experimental.md#memoizewitness)

## Functions

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

[lib/provable/provable.ts:443](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/provable.ts#L443)
