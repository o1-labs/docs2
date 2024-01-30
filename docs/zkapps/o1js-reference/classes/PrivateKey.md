[o1js](../README.md) / [Modules](../modules.md) / PrivateKey

# Class: PrivateKey

A signing key. You can generate one via [random](PrivateKey.md#random).

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`PrivateKey`**

## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [s](PrivateKey.md#s)

### Methods

- [assertEquals](PrivateKey.md#assertequals)
- [equals](PrivateKey.md#equals)
- [isConstant](PrivateKey.md#isconstant)
- [toBase58](PrivateKey.md#tobase58)
- [toBigInt](PrivateKey.md#tobigint)
- [toConstant](PrivateKey.md#toconstant)
- [toFields](PrivateKey.md#tofields)
- [toJSON](PrivateKey.md#tojson)
- [toPublicKey](PrivateKey.md#topublickey)
- [check](PrivateKey.md#check)
- [empty](PrivateKey.md#empty)
- [fromBase58](PrivateKey.md#frombase58)
- [fromBigInt](PrivateKey.md#frombigint)
- [fromBits](PrivateKey.md#frombits)
- [fromFields](PrivateKey.md#fromfields)
- [fromJSON](PrivateKey.md#fromjson)
- [fromObject](PrivateKey.md#fromobject)
- [random](PrivateKey.md#random)
- [sizeInFields](PrivateKey.md#sizeinfields)
- [toAuxiliary](PrivateKey.md#toauxiliary)
- [toBase58](PrivateKey.md#tobase58-1)
- [toConstant](PrivateKey.md#toconstant-1)
- [toFields](PrivateKey.md#tofields-1)
- [toInput](PrivateKey.md#toinput)
- [toJSON](PrivateKey.md#tojson-1)

## Constructors

### constructor

• **new PrivateKey**(`s`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Scalar`](Scalar.md) |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/signature.ts:30](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L30)

## Properties

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:28](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L28)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:166](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L166)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L162)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:170](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L170)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PrivateKey](PrivateKey.md) into a base58 string.

#### Returns

`string`

a base58 encoded string

#### Defined in

[lib/signature.ts:95](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L95)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this [PrivateKey](PrivateKey.md) to a bigint

#### Returns

`bigint`

#### Defined in

[lib/signature.ts:58](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L58)

___

### toConstant

▸ **toConstant**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:158](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L158)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L150)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:154](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L154)

___

### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](Types.PublicKey.md)

Derives the associated public key.

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:77](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L77)

___

### check

▸ `Static` **check**\<`T`\>(`this`, `v`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit_value.ts:199](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L199)

___

### empty

▸ `Static` **empty**\<`T`\>(): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[empty](CircuitValue.md#empty)

#### Defined in

[lib/circuit_value.ts:254](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L254)

___

### fromBase58

▸ `Static` **fromBase58**(`privateKeyBase58`): [`PrivateKey`](PrivateKey.md)

Decodes a base58 string into a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKeyBase58` | `string` |

#### Returns

[`PrivateKey`](PrivateKey.md)

a [PrivateKey](PrivateKey.md).

#### Defined in

[lib/signature.ts:86](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L86)

___

### fromBigInt

▸ `Static` **fromBigInt**(`sk`): [`PrivateKey`](PrivateKey.md)

Create a [PrivateKey](PrivateKey.md) from a bigint

**Warning**: Private keys should be sampled from secure randomness with sufficient entropy.
Be careful that you don't use this method to create private keys that were sampled insecurely.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sk` | `bigint` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[lib/signature.ts:68](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L68)

___

### fromBits

▸ `Static` **fromBits**(`bs`): [`PrivateKey`](PrivateKey.md)

Deserializes a list of bits into a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`Bool`](Bool.md)[] | a list of [Bool](../modules.md#bool-1). |

#### Returns

[`PrivateKey`](PrivateKey.md)

a [PrivateKey](PrivateKey.md).

#### Defined in

[lib/signature.ts:51](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L51)

___

### fromFields

▸ `Static` **fromFields**\<`T`\>(`this`, `xs`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `xs` | [`Field`](Field.md)[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:174](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L174)

___

### fromJSON

▸ `Static` **fromJSON**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:232](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L232)

___

### fromObject

▸ `Static` **fromObject**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`\<`InstanceType`\<`T`\>\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:95](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L95)

___

### random

▸ `Static` **random**(): [`PrivateKey`](PrivateKey.md)

You can use this method to generate a private key. You can then obtain
the associated public key via [toPublicKey](PrivateKey.md#topublickey). And generate signatures
via [create](Signature.md#create).

#### Returns

[`PrivateKey`](PrivateKey.md)

a new [PrivateKey](PrivateKey.md).

#### Defined in

[lib/signature.ts:41](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L41)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:102](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L102)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:124](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L124)

___

### toBase58

▸ `Static` **toBase58**(`privateKey`): `string`

Static method to encode a [PrivateKey](PrivateKey.md) into a base58 string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |

#### Returns

`string`

a base58 encoded string

#### Defined in

[lib/signature.ts:104](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/signature.ts#L104)

___

### toConstant

▸ `Static` **toConstant**\<`T`\>(`this`, `t`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`\<`T`\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:213](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L213)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:107](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L107)

___

### toInput

▸ `Static` **toInput**\<`T`\>(`this`, `v`): `HashInput`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`HashInput`

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit_value.ts:128](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L128)

___

### toJSON

▸ `Static` **toJSON**\<`T`\>(`this`, `v`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:221](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L221)
