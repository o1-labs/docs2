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

• **new Proof**<`T`\>(`__namedParameters`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| `__namedParameters.proof` | `unknown` |
| `__namedParameters.publicInput` | `T` |

#### Defined in

[lib/proof_system.ts:94](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L94)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:61](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L61)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:60](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L60)

___

### publicInput

• **publicInput**: `T`

#### Defined in

[lib/proof_system.ts:59](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L59)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:62](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L62)

___

### publicInputType

▪ `Static` **publicInputType**: [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`\>

#### Defined in

[lib/proof_system.ts:52](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L52)

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

[lib/proof_system.ts:53](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L53)

## Methods

### toJSON

▸ **toJSON**(): `JsonProof`

#### Returns

`JsonProof`

#### Defined in

[lib/proof_system.ts:70](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L70)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:64](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L64)

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

[lib/proof_system.ts:67](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L67)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `__namedParameters`): [`Proof`](Proof.md)<`InferInstance`<`S`[``"publicInputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`<typeof [`Proof`](Proof.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `__namedParameters` | `JsonProof` |

#### Returns

[`Proof`](Proof.md)<`InferInstance`<`S`[``"publicInputType"``]\>\>

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L79)
