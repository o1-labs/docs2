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
- [toConstant](PrivateKey.md#toconstant)
- [toFields](PrivateKey.md#tofields)
- [toJSON](PrivateKey.md#tojson)
- [toPublicKey](PrivateKey.md#topublickey)
- [check](PrivateKey.md#check)
- [fromBase58](PrivateKey.md#frombase58)
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

• **new PrivateKey**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:87](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L87)

## Properties

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:18](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L18)

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

[lib/circuit_value.ts:175](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L175)

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

[lib/circuit_value.ts:171](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L171)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:179](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L179)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PrivateKey](PrivateKey.md) into a base58 string.

#### Returns

`string`

a base58 encoded string

#### Defined in

[lib/signature.ts:64](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L64)

___

### toConstant

▸ **toConstant**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:167](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L167)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:159](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L159)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L163)

___

### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](Types.PublicKey.md)

Derives the associated public key.

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:46](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L46)

___

### check

▸ `Static` **check**<`T`\>(`this`, `v`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L208)

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

[lib/signature.ts:55](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L55)

___

### fromBits

▸ `Static` **fromBits**(`bs`): [`PrivateKey`](PrivateKey.md)

Deserializes a list of bits into a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`Bool`](Bool.md)[] | a list of [Bool](Bool.md). |

#### Returns

[`PrivateKey`](PrivateKey.md)

a [PrivateKey](PrivateKey.md).

#### Defined in

[lib/signature.ts:37](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L37)

___

### fromFields

▸ `Static` **fromFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:183](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L183)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:241](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L241)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`<`InstanceType`<`T`\>\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L104)

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

[lib/signature.ts:27](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L27)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L111)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:133](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L133)

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

[lib/signature.ts:73](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L73)

___

### toConstant

▸ `Static` **toConstant**<`T`\>(`this`, `t`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:222](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L222)

___

### toFields

▸ `Static` **toFields**<`T`\>(`this`, `v`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L116)

___

### toInput

▸ `Static` **toInput**<`T`\>(`this`, `v`): `HashInput`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`HashInput`

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L137)

___

### toJSON

▸ `Static` **toJSON**<`T`\>(`this`, `v`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:230](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L230)
