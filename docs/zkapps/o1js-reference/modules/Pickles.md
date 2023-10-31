[o1js](../README.md) / [Modules](../modules.md) / Pickles

# Namespace: Pickles

## Table of contents

### Type Aliases

- [Proof](Pickles.md#proof)
- [Prover](Pickles.md#prover)
- [Rule](Pickles.md#rule)
- [Statement](Pickles.md#statement)

## Type Aliases

### Proof

Ƭ **Proof**: `unknown`

#### Defined in

[snarky.d.ts:602](https://github.com/o1-labs/o1js/blob/42a18c8d/src/snarky.d.ts#L602)

___

### Prover

Ƭ **Prover**: (`publicInput`: `MlArray`<[`FieldConst`](../modules.md#fieldconst-1)\>, `previousProofs`: `MlArray`<[`Proof`](Pickles.md#proof)\>) => `Promise`<[\_: 0, publicOutput: MlArray<FieldConst\>, proof: Proof]\>

#### Type declaration

▸ (`publicInput`, `previousProofs`): `Promise`<[\_: 0, publicOutput: MlArray<FieldConst\>, proof: Proof]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `MlArray`<[`FieldConst`](../modules.md#fieldconst-1)\> |
| `previousProofs` | `MlArray`<[`Proof`](Pickles.md#proof)\> |

##### Returns

`Promise`<[\_: 0, publicOutput: MlArray<FieldConst\>, proof: Proof]\>

#### Defined in

[snarky.d.ts:628](https://github.com/o1-labs/o1js/blob/42a18c8d/src/snarky.d.ts#L628)

___

### Rule

Ƭ **Rule**: `Object`

A "rule" is a circuit plus some metadata for `Pickles.compile`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `featureFlags` | [`MlFeatureFlags`](../modules.md#mlfeatureflags) | Feature flags which enable certain custom gates |
| `identifier` | `string` | - |
| `main` | (`publicInput`: `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\>) => { `previousStatements`: `MlArray`<[`Statement`](Pickles.md#statement)<[`FieldVar`](../modules.md#fieldvar-1)\>\> ; `publicOutput`: `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\> ; `shouldVerify`: `MlArray`<[`BoolVar`](../modules.md#boolvar)\>  } | The main circuit functions |
| `proofsToVerify` | `MlArray`<{ `isSelf`: ``true``  } \| { `isSelf`: ``false`` ; `tag`: `unknown`  }\> | Description of previous proofs to verify in this rule |

#### Defined in

[snarky.d.ts:608](https://github.com/o1-labs/o1js/blob/42a18c8d/src/snarky.d.ts#L608)

___

### Statement

Ƭ **Statement**<`F`\>: [\_: 0, publicInput: MlArray<F\>, publicOutput: MlArray<F\>]

#### Type parameters

| Name |
| :------ |
| `F` |

#### Defined in

[snarky.d.ts:603](https://github.com/o1-labs/o1js/blob/42a18c8d/src/snarky.d.ts#L603)
