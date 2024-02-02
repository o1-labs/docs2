[o1js](../README.md) / [Modules](../modules.md) / Pickles

# Namespace: Pickles

## Table of contents

### Type Aliases

- [Cache](Pickles.md#cache)
- [Proof](Pickles.md#proof)
- [Prover](Pickles.md#prover)
- [Rule](Pickles.md#rule)
- [Statement](Pickles.md#statement)

## Type Aliases

### Cache

Ƭ **Cache**: [\_: 0, read: Function, write: Function, canWrite: MlBool]

Type to configure how Pickles should cache prover keys

#### Defined in

[snarky.d.ts:752](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L752)

___

### Proof

Ƭ **Proof**: `unknown`

#### Defined in

[snarky.d.ts:723](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L723)

___

### Prover

Ƭ **Prover**: (`publicInput`: `MlArray`\<[`FieldConst`](../modules.md#fieldconst-1)\>, `previousProofs`: `MlArray`\<[`Proof`](Pickles.md#proof)\>) => `Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

#### Type declaration

▸ (`publicInput`, `previousProofs`): `Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `MlArray`\<[`FieldConst`](../modules.md#fieldconst-1)\> |
| `previousProofs` | `MlArray`\<[`Proof`](Pickles.md#proof)\> |

##### Returns

`Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

#### Defined in

[snarky.d.ts:763](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L763)

___

### Rule

Ƭ **Rule**: `Object`

A "rule" is a circuit plus some metadata for `Pickles.compile`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `featureFlags` | [`MlFeatureFlags`](../modules.md#mlfeatureflags) | Feature flags which enable certain custom gates |
| `identifier` | `string` | - |
| `main` | (`publicInput`: `MlArray`\<[`FieldVar`](../modules.md#fieldvar-1)\>) => \{ `previousStatements`: `MlArray`\<[`Statement`](Pickles.md#statement)\<[`FieldVar`](../modules.md#fieldvar-1)\>\> ; `publicOutput`: `MlArray`\<[`FieldVar`](../modules.md#fieldvar-1)\> ; `shouldVerify`: `MlArray`\<[`BoolVar`](../modules.md#boolvar)\>  } | The main circuit functions |
| `proofsToVerify` | `MlArray`\<\{ `isSelf`: ``true``  } \| \{ `isSelf`: ``false`` ; `tag`: `unknown`  }\> | Description of previous proofs to verify in this rule |

#### Defined in

[snarky.d.ts:729](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L729)

___

### Statement

Ƭ **Statement**\<`F`\>: [\_: 0, publicInput: MlArray\<F\>, publicOutput: MlArray\<F\>]

#### Type parameters

| Name |
| :------ |
| `F` |

#### Defined in

[snarky.d.ts:724](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L724)
