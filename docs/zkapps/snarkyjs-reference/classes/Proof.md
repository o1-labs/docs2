# Class: Proof<Input, Output\>

## Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

## Hierarchy

- **`Proof`**

  ↳ [`SelfProof`](SelfProof.md)

## Table of contents

### Constructors

- [constructor](Proof.md#constructor)

### Properties

- [maxProofsVerified](Proof.md#maxproofsverified)
- [proof](Proof.md#proof)
- [publicInput](Proof.md#publicinput)
- [publicOutput](Proof.md#publicoutput)
- [shouldVerify](Proof.md#shouldverify)
- [publicInputType](Proof.md#publicinputtype)
- [publicOutputType](Proof.md#publicoutputtype)
- [tag](Proof.md#tag)

### Methods

- [toJSON](Proof.md#tojson)
- [verify](Proof.md#verify)
- [verifyIf](Proof.md#verifyif)
- [fromJSON](Proof.md#fromjson)

## Constructors

### constructor

• **new Proof**<`Input`, `Output`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| › `proof` | `unknown` |
| › `publicInput` | `Input` |
| › `publicOutput` | `Output` |

#### Defined in

[lib/proof_system.ts:115](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L115)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:73](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L73)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:72](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L72)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof_system.ts:70](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L70)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof_system.ts:71](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L71)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:74](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L74)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:62](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L62)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:63](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L63)

___

### tag

▪ `Static` **tag**: () => { `name`: `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[lib/proof_system.ts:64](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L64)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../README.md#jsonproof)

#### Returns

[`JsonProof`](../README.md#jsonproof)

#### Defined in

[lib/proof_system.ts:82](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L82)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:76](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L76)

___

### verifyIf

▸ **verifyIf**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L79)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `«destructured»`): [`Proof`](Proof.md)<[`InferProvable`](../README.md#inferprovable)<`S`[``"publicInputType"``]\>, [`InferProvable`](../README.md#inferprovable)<`S`[``"publicOutputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`<typeof [`Proof`](Proof.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `«destructured»` | [`JsonProof`](../README.md#jsonproof) |

#### Returns

[`Proof`](Proof.md)<[`InferProvable`](../README.md#inferprovable)<`S`[``"publicInputType"``]\>, [`InferProvable`](../README.md#inferprovable)<`S`[``"publicOutputType"``]\>\>

#### Defined in

[lib/proof_system.ts:91](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/proof_system.ts#L91)
