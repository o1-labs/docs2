[SnarkyJS](../README.md) / [Exports](../modules.md) / Proof

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

- [constructor](Proof-1.md#constructor)

### Properties

- [maxProofsVerified](Proof-1.md#maxproofsverified)
- [proof](Proof-1.md#proof)
- [publicInput](Proof-1.md#publicinput)
- [publicOutput](Proof-1.md#publicoutput)
- [shouldVerify](Proof-1.md#shouldverify)
- [publicInputType](Proof-1.md#publicinputtype)
- [publicOutputType](Proof-1.md#publicoutputtype)
- [tag](Proof-1.md#tag)

### Methods

- [toJSON](Proof-1.md#tojson)
- [verify](Proof-1.md#verify)
- [verifyIf](Proof-1.md#verifyif)
- [fromJSON](Proof-1.md#fromjson)

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

[lib/proof_system.ts:118](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L118)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof_system.ts:76](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L76)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof_system.ts:75](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L75)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof_system.ts:73](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L73)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof_system.ts:74](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L74)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof_system.ts:77](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L77)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:65](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L65)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/proof_system.ts:66](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L66)

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

[lib/proof_system.ts:67](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L67)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../modules.md#jsonproof)

#### Returns

[`JsonProof`](../modules.md#jsonproof)

#### Defined in

[lib/proof_system.ts:85](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L85)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L79)

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

[lib/proof_system.ts:82](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L82)

___

### fromJSON

▸ `Static` **fromJSON**<`S`\>(`this`, `«destructured»`): [`Proof`](Proof-1.md)<`InferProvable`<`S`[``"publicInputType"``]\>, `InferProvable`<`S`[``"publicOutputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`<typeof [`Proof`](Proof-1.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `«destructured»` | [`JsonProof`](../modules.md#jsonproof) |

#### Returns

[`Proof`](Proof-1.md)<`InferProvable`<`S`[``"publicInputType"``]\>, `InferProvable`<`S`[``"publicOutputType"``]\>\>

#### Defined in

[lib/proof_system.ts:94](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L94)
