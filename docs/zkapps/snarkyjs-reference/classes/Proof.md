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

[lib/proof_system.ts:139](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L139)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:97](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L97)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:96](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L96)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof_system.ts:94](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L94)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof_system.ts:95](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L95)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:98](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L98)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:86](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L86)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:87](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L87)

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

[lib/proof_system.ts:88](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L88)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../README.md#jsonproof)

#### Returns

[`JsonProof`](../README.md#jsonproof)

#### Defined in

[lib/proof_system.ts:106](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L106)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:100](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L100)

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

[lib/proof_system.ts:103](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L103)

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

[lib/proof_system.ts:115](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/proof_system.ts#L115)
