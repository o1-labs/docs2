# Class: SelfProof<PublicInput, PublicOutput\>

## Type parameters

| Name |
| :------ |
| `PublicInput` |
| `PublicOutput` |

## Hierarchy

- [`Proof`](Proof.md)<`PublicInput`, `PublicOutput`\>

  ↳ **`SelfProof`**

## Table of contents

### Constructors

- [constructor](SelfProof.md#constructor)

### Properties

- [maxProofsVerified](SelfProof.md#maxproofsverified)
- [proof](SelfProof.md#proof)
- [publicInput](SelfProof.md#publicinput)
- [publicOutput](SelfProof.md#publicoutput)
- [shouldVerify](SelfProof.md#shouldverify)
- [publicInputType](SelfProof.md#publicinputtype)
- [publicOutputType](SelfProof.md#publicoutputtype)
- [tag](SelfProof.md#tag)

### Methods

- [toJSON](SelfProof.md#tojson)
- [verify](SelfProof.md#verify)
- [verifyIf](SelfProof.md#verifyif)
- [fromJSON](SelfProof.md#fromjson)

## Constructors

### constructor

• **new SelfProof**<`PublicInput`, `PublicOutput`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `PublicInput` |
| `PublicOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| › `proof` | `unknown` |
| › `publicInput` | `PublicInput` |
| › `publicOutput` | `PublicOutput` |

#### Inherited from

[Proof](Proof.md).[constructor](Proof.md#constructor)

#### Defined in

[lib/proof_system.ts:132](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L132)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[Proof](Proof.md).[maxProofsVerified](Proof.md#maxproofsverified)

#### Defined in

[lib/proof_system.ts:90](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L90)

___

### proof

• **proof**: `unknown`

#### Inherited from

[Proof](Proof.md).[proof](Proof.md#proof)

#### Defined in

[lib/proof_system.ts:89](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L89)

___

### publicInput

• **publicInput**: `PublicInput`

#### Inherited from

[Proof](Proof.md).[publicInput](Proof.md#publicinput)

#### Defined in

[lib/proof_system.ts:87](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L87)

___

### publicOutput

• **publicOutput**: `PublicOutput`

#### Inherited from

[Proof](Proof.md).[publicOutput](Proof.md#publicoutput)

#### Defined in

[lib/proof_system.ts:88](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L88)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Inherited from

[Proof](Proof.md).[shouldVerify](Proof.md#shouldverify)

#### Defined in

[lib/proof_system.ts:91](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L91)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Inherited from

[Proof](Proof.md).[publicInputType](Proof.md#publicinputtype)

#### Defined in

[lib/proof_system.ts:79](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L79)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Inherited from

[Proof](Proof.md).[publicOutputType](Proof.md#publicoutputtype)

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

#### Inherited from

[Proof](Proof.md).[tag](Proof.md#tag)

#### Defined in

[lib/proof_system.ts:81](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L81)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../README.md#jsonproof)

#### Returns

[`JsonProof`](../README.md#jsonproof)

#### Inherited from

[Proof](Proof.md).[toJSON](Proof.md#tojson)

#### Defined in

[lib/proof_system.ts:99](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L99)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Inherited from

[Proof](Proof.md).[verify](Proof.md#verify)

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

#### Inherited from

[Proof](Proof.md).[verifyIf](Proof.md#verifyif)

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

#### Inherited from

[Proof](Proof.md).[fromJSON](Proof.md#fromjson)

#### Defined in

[lib/proof_system.ts:108](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/proof_system.ts#L108)
