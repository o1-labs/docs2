[SnarkyJS](../README.md) / [Modules](../modules.md) / Proof

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

[lib/proof_system.ts:120](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L120)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:78](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L78)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:77](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L77)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof_system.ts:75](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L75)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof_system.ts:76](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L76)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L79)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:67](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L67)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:68](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L68)

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

[lib/proof_system.ts:69](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L69)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../modules.md#jsonproof)

#### Returns

[`JsonProof`](../modules.md#jsonproof)

#### Defined in

[lib/proof_system.ts:87](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L87)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:81](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L81)

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

[lib/proof_system.ts:84](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L84)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `«destructured»`): [`Proof`](Proof.md)<[`InferProvable`](../modules.md#inferprovable)<`S`[``"publicInputType"``]\>, [`InferProvable`](../modules.md#inferprovable)<`S`[``"publicOutputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`<typeof [`Proof`](Proof.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `«destructured»` | [`JsonProof`](../modules.md#jsonproof) |

#### Returns

[`Proof`](Proof.md)<[`InferProvable`](../modules.md#inferprovable)<`S`[``"publicInputType"``]\>, [`InferProvable`](../modules.md#inferprovable)<`S`[``"publicOutputType"``]\>\>

#### Defined in

[lib/proof_system.ts:96](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/proof_system.ts#L96)
