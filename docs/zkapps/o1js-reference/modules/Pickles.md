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

[snarky.d.ts:499](https://github.com/o1-labs/o1js/blob/fec4d35f/src/snarky.d.ts#L499)

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

[snarky.d.ts:510](https://github.com/o1-labs/o1js/blob/fec4d35f/src/snarky.d.ts#L510)

___

### Rule

Ƭ **Rule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `main` | (`publicInput`: `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\>) => { `previousStatements`: `MlArray`<[`Statement`](Pickles.md#statement)<[`FieldVar`](../modules.md#fieldvar-1)\>\> ; `publicOutput`: `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\> ; `shouldVerify`: `MlArray`<[`BoolVar`](../modules.md#boolvar)\>  } |
| `proofsToVerify` | `MlArray`<{ `isSelf`: ``true``  } \| { `isSelf`: ``false`` ; `tag`: `unknown`  }\> |

#### Defined in

[snarky.d.ts:501](https://github.com/o1-labs/o1js/blob/fec4d35f/src/snarky.d.ts#L501)

___

### Statement

Ƭ **Statement**<`F`\>: [\_: 0, publicInput: MlArray<F\>, publicOutput: MlArray<F\>]

#### Type parameters

| Name |
| :------ |
| `F` |

#### Defined in

[snarky.d.ts:500](https://github.com/o1-labs/o1js/blob/fec4d35f/src/snarky.d.ts#L500)
