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

[lib/proof_system.ts:97](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L97)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:64](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L64)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:63](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L63)

___

### publicInput

• **publicInput**: `T`

#### Defined in

[lib/proof_system.ts:62](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L62)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:65](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L65)

___

### publicInputType

▪ `Static` **publicInputType**: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\>

#### Defined in

[lib/proof_system.ts:55](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L55)

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

[lib/proof_system.ts:56](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L56)

## Methods

### toJSON

▸ **toJSON**(): `JsonProof`

#### Returns

`JsonProof`

#### Defined in

[lib/proof_system.ts:73](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L73)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:67](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L67)

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

[lib/proof_system.ts:70](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L70)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `«destructured»`): [`Proof`](Proof.md)<`InferInstance`<`S`[``"publicInputType"``]\>\>

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

[`Proof`](Proof.md)<`InferInstance`<`S`[``"publicInputType"``]\>\>

#### Defined in

[lib/proof_system.ts:82](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/proof_system.ts#L82)
