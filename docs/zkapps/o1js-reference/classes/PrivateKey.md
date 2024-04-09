[o1js](../README.md) / [Modules](../modules.md) / PrivateKey

# Class: PrivateKey

A signing key. You can generate one via [random](PrivateKey.md#random).

## Hierarchy

- `CircuitValue`

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
- [randomKeypair](PrivateKey.md#randomkeypair)
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

CircuitValue.constructor

#### Defined in

[lib/provable/crypto/signature.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L30)

## Properties

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/provable/crypto/signature.ts:28](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L28)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`Bool`

#### Inherited from

CircuitValue.equals

#### Defined in

[lib/provable/types/circuit-value.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L97)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CircuitValue.isConstant

#### Defined in

[lib/provable/types/circuit-value.ts:105](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L105)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PrivateKey](PrivateKey.md) into a base58 string.

#### Returns

`string`

a base58 encoded string

#### Defined in

[lib/provable/crypto/signature.ts:110](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L110)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this [PrivateKey](PrivateKey.md) to a bigint

#### Returns

`bigint`

#### Defined in

[lib/provable/crypto/signature.ts:73](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L73)

___

### toConstant

▸ **toConstant**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

___

### toFields

▸ **toFields**(): `Field`[]

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:85](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L85)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:89](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L89)

___

### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](Types.PublicKey.md)

Derives the associated public key.

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/provable/crypto/signature.ts:92](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L92)

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

CircuitValue.check

#### Defined in

[lib/provable/types/circuit-value.ts:134](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L134)

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

CircuitValue.empty

#### Defined in

[lib/provable/types/circuit-value.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L189)

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

[lib/provable/crypto/signature.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L101)

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

[lib/provable/crypto/signature.ts:83](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L83)

___

### fromBits

▸ `Static` **fromBits**(`bs`): [`PrivateKey`](PrivateKey.md)

Deserializes a list of bits into a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | `Bool`[] | a list of [Bool](../modules.md#bool-1). |

#### Returns

[`PrivateKey`](PrivateKey.md)

a [PrivateKey](PrivateKey.md).

#### Defined in

[lib/provable/crypto/signature.ts:66](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L66)

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
| `xs` | `Field`[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromFields

#### Defined in

[lib/provable/types/circuit-value.ts:109](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L109)

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

CircuitValue.fromJSON

#### Defined in

[lib/provable/types/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L167)

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

CircuitValue.fromObject

#### Defined in

[lib/provable/types/circuit-value.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L30)

___

### random

▸ `Static` **random**(): [`PrivateKey`](PrivateKey.md)

Generate a random private key.

You can obtain the associated public key via [toPublicKey](PrivateKey.md#topublickey).
And generate signatures via [create](Signature.md#create).

Note: This uses node or browser built-in APIs to obtain cryptographically strong randomness,
and can be safely used to generate a real private key.

#### Returns

[`PrivateKey`](PrivateKey.md)

a new [PrivateKey](PrivateKey.md).

#### Defined in

[lib/provable/crypto/signature.ts:45](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L45)

___

### randomKeypair

▸ `Static` **randomKeypair**(): `Object`

Create a random keypair `{ privateKey: PrivateKey, publicKey: PublicKey }`.

Note: This uses node or browser built-in APIs to obtain cryptographically strong randomness,
and can be safely used to generate a real keypair.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](PrivateKey.md) |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |

#### Defined in

[lib/provable/crypto/signature.ts:55](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L55)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

CircuitValue.sizeInFields

#### Defined in

[lib/provable/types/circuit-value.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L37)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

CircuitValue.toAuxiliary

#### Defined in

[lib/provable/types/circuit-value.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L59)

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

[lib/provable/crypto/signature.ts:119](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L119)

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

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:148](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L148)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): `Field`[]

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

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:42](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L42)

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

CircuitValue.toInput

#### Defined in

[lib/provable/types/circuit-value.ts:63](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L63)

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

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:156](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L156)
