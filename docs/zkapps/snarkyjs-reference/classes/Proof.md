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

[lib/proof_system.ts:132](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L132)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:90](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L90)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:89](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L89)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof_system.ts:87](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L87)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof_system.ts:88](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L88)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:91](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L91)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L79)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:80](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L80)

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

[lib/proof_system.ts:81](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L81)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../README.md#jsonproof)

#### Returns

[`JsonProof`](../README.md#jsonproof)

#### Defined in

[lib/proof_system.ts:99](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L99)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:93](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L93)

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

[lib/proof_system.ts:96](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L96)

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

[lib/proof_system.ts:108](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L108)
