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

[snarky.d.ts:756](https://github.com/o1-labs/o1js/blob/659a59e/src/snarky.d.ts#L756)

___

### Proof

Ƭ **Proof**: `unknown`

#### Defined in

[snarky.d.ts:727](https://github.com/o1-labs/o1js/blob/659a59e/src/snarky.d.ts#L727)

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

[snarky.d.ts:767](https://github.com/o1-labs/o1js/blob/659a59e/src/snarky.d.ts#L767)

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

[snarky.d.ts:733](https://github.com/o1-labs/o1js/blob/659a59e/src/snarky.d.ts#L733)

___

### Statement

Ƭ **Statement**\<`F`\>: [\_: 0, publicInput: MlArray\<F\>, publicOutput: MlArray\<F\>]

#### Type parameters

| Name |
| :------ |
| `F` |

#### Defined in

[snarky.d.ts:728](https://github.com/o1-labs/o1js/blob/659a59e/src/snarky.d.ts#L728)
