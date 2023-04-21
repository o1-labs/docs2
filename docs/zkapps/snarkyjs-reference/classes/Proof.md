# Class: Proof<T\>

## Type parameters

| Name |
| :------ |
| `T` |

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
- [shouldVerify](Proof.md#shouldverify)
- [publicInputType](Proof.md#publicinputtype)
- [tag](Proof.md#tag)

### Methods

- [toJSON](Proof.md#tojson)
- [verify](Proof.md#verify)
- [verifyIf](Proof.md#verifyif)
- [fromJSON](Proof.md#fromjson)

## Constructors

### constructor

• **new Proof**<`T`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| › `proof` | `unknown` |
| › `publicInput` | `T` |

#### Defined in

[lib/proof_system.ts:103](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L103)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:70](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L70)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:69](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L69)

___

### publicInput

• **publicInput**: `T`

#### Defined in

[lib/proof_system.ts:68](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L68)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:71](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L71)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:61](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L61)

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

[lib/proof_system.ts:62](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L62)

## Methods

### toJSON

▸ **toJSON**(): `JsonProof`

#### Returns

`JsonProof`

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L79)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:73](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L73)

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

[lib/proof_system.ts:76](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L76)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `«destructured»`): [`Proof`](Proof.md)<`InferProvable`<`S`[``"publicInputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`<typeof [`Proof`](Proof.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `«destructured»` | `JsonProof` |

#### Returns

[`Proof`](Proof.md)<`InferProvable`<`S`[``"publicInputType"``]\>\>

#### Defined in

[lib/proof_system.ts:88](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/proof_system.ts#L88)
