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

[snarky.d.ts:640](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L640)

___

### Proof

Ƭ **Proof**: `unknown`

#### Defined in

[snarky.d.ts:611](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L611)

___

### Prover

Ƭ **Prover**: (`publicInput`: `MlArray`\<`FieldConst`\>, `previousProofs`: `MlArray`\<[`Proof`](Pickles.md#proof)\>) => `Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

#### Type declaration

▸ (`publicInput`, `previousProofs`): `Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `MlArray`\<`FieldConst`\> |
| `previousProofs` | `MlArray`\<[`Proof`](Pickles.md#proof)\> |

##### Returns

`Promise`\<[\_: 0, publicOutput: MlArray\<FieldConst\>, proof: Proof]\>

#### Defined in

[snarky.d.ts:651](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L651)

___

### Rule

Ƭ **Rule**: `Object`

A "rule" is a circuit plus some metadata for `Pickles.compile`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `featureFlags` | [`MlFeatureFlags`](../modules.md#mlfeatureflags) | Feature flags which enable certain custom gates |
| `identifier` | `string` | - |
| `main` | (`publicInput`: `MlArray`\<`FieldVar`\>) => `Promise`\<\{ `previousStatements`: `MlArray`\<[`Statement`](Pickles.md#statement)\<`FieldVar`\>\> ; `publicOutput`: `MlArray`\<`FieldVar`\> ; `shouldVerify`: `MlArray`\<`BoolVar`\>  }\> | The main circuit functions |
| `proofsToVerify` | `MlArray`\<\{ `isSelf`: ``true``  } \| \{ `isSelf`: ``false`` ; `tag`: `unknown`  }\> | Description of previous proofs to verify in this rule |

#### Defined in

[snarky.d.ts:617](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L617)

___

### Statement

Ƭ **Statement**\<`F`\>: [\_: 0, publicInput: MlArray\<F\>, publicOutput: MlArray\<F\>]

#### Type parameters

| Name |
| :------ |
| `F` |

#### Defined in

[snarky.d.ts:612](https://github.com/o1-labs/o1js/blob/6731ad3/src/snarky.d.ts#L612)
