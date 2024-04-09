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

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/signature.ts:31](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L31)

## Properties

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:29](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L29)

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

[lib/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L167)

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

[lib/circuit-value.ts:163](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit-value.ts:171](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L171)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PrivateKey](PrivateKey.md) into a base58 string.

#### Returns

`string`

a base58 encoded string

#### Defined in

[lib/signature.ts:111](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L111)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this [PrivateKey](PrivateKey.md) to a bigint

#### Returns

`bigint`

#### Defined in

[lib/signature.ts:74](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L74)

___

### toConstant

▸ **toConstant**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L159)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L151)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L155)

___

### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](Types.PublicKey.md)

Derives the associated public key.

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:93](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L93)

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

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L200)

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

[lib/circuit-value.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L255)

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

[lib/signature.ts:102](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L102)

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

[lib/signature.ts:84](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L84)

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

[lib/signature.ts:67](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L67)

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

[lib/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L175)

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

[lib/circuit-value.ts:233](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L233)

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

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L96)

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

[lib/signature.ts:46](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L46)

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

[lib/signature.ts:56](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L56)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L125)

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

[lib/signature.ts:120](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L120)

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

[lib/circuit-value.ts:214](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L214)

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

[lib/circuit-value.ts:108](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L108)

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

[lib/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L129)

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

[lib/circuit-value.ts:222](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L222)
