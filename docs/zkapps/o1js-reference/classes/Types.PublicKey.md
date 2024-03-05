[o1js](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / PublicKey

# Class: PublicKey

[Types](../modules/Types.md).PublicKey

A public key, which is also an address on the Mina network.
You can derive a [PublicKey](Types.PublicKey.md) directly from a [PrivateKey](PrivateKey.md).

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](Types.PublicKey.md#constructor)

### Properties

- [isOdd](Types.PublicKey.md#isodd)
- [x](Types.PublicKey.md#x)

### Methods

- [assertEquals](Types.PublicKey.md#assertequals)
- [equals](Types.PublicKey.md#equals)
- [isConstant](Types.PublicKey.md#isconstant)
- [isEmpty](Types.PublicKey.md#isempty)
- [toBase58](Types.PublicKey.md#tobase58)
- [toConstant](Types.PublicKey.md#toconstant)
- [toFields](Types.PublicKey.md#tofields)
- [toGroup](Types.PublicKey.md#togroup)
- [toJSON](Types.PublicKey.md#tojson)
- [check](Types.PublicKey.md#check)
- [empty](Types.PublicKey.md#empty)
- [from](Types.PublicKey.md#from)
- [fromBase58](Types.PublicKey.md#frombase58)
- [fromFields](Types.PublicKey.md#fromfields)
- [fromGroup](Types.PublicKey.md#fromgroup)
- [fromJSON](Types.PublicKey.md#fromjson)
- [fromObject](Types.PublicKey.md#fromobject)
- [fromPrivateKey](Types.PublicKey.md#fromprivatekey)
- [sizeInFields](Types.PublicKey.md#sizeinfields)
- [toAuxiliary](Types.PublicKey.md#toauxiliary)
- [toBase58](Types.PublicKey.md#tobase58-1)
- [toConstant](Types.PublicKey.md#toconstant-1)
- [toFields](Types.PublicKey.md#tofields-1)
- [toInput](Types.PublicKey.md#toinput)
- [toJSON](Types.PublicKey.md#tojson-1)

## Constructors

### constructor

• **new PublicKey**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit-value.ts:79](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L79)

## Properties

### isOdd

• **isOdd**: [`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:135](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L135)

___

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:134](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L134)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L167)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit-value.ts:163](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit-value.ts:171](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L171)

___

### isEmpty

▸ **isEmpty**(): [`Bool`](Bool.md)

Checks if a [PublicKey](Types.PublicKey.md) is empty.

#### Returns

[`Bool`](Bool.md)

a [Bool](../modules.md#bool-1)

#### Defined in

[lib/signature.ts:192](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L192)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PublicKey](Types.PublicKey.md) in base58 format.

#### Returns

`string`

a base58 encoded [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:210](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L210)

___

### toConstant

▸ **toConstant**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L159)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L151)

___

### toGroup

▸ **toGroup**(): [`Group`](Group.md)

Returns the [Group](../modules.md#group-1) representation of this [PublicKey](Types.PublicKey.md).

#### Returns

[`Group`](Group.md)

A [Group](../modules.md#group-1)

#### Defined in

[lib/signature.ts:141](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L141)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L155)

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

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L200)

___

### empty

▸ `Static` **empty**\<`T`\>(): `InstanceType`\<`T`\>

Creates an empty [PublicKey](Types.PublicKey.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

an empty [PublicKey](Types.PublicKey.md)

#### Overrides

[CircuitValue](CircuitValue.md).[empty](CircuitValue.md#empty)

#### Defined in

[lib/signature.ts:184](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L184)

___

### from

▸ `Static` **from**(`g`): [`PublicKey`](Types.PublicKey.md)

Creates a [PublicKey](Types.PublicKey.md) from a JSON structure element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | `Object` |
| `g.isOdd` | [`Bool`](Bool.md) |
| `g.x` | [`Field`](Field.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:176](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L176)

___

### fromBase58

▸ `Static` **fromBase58**(`publicKeyBase58`): [`PublicKey`](Types.PublicKey.md)

Decodes a base58 encoded [PublicKey](Types.PublicKey.md) into a [PublicKey](Types.PublicKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyBase58` | `string` |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:201](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L201)

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

[lib/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L175)

___

### fromGroup

▸ `Static` **fromGroup**(`«destructured»`): [`PublicKey`](Types.PublicKey.md)

Creates a [PublicKey](Types.PublicKey.md) from a [Group](../modules.md#group-1) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Group`](Group.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:159](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L159)

___

### fromJSON

▸ `Static` **fromJSON**\<`T`\>(`this`, `publicKey`): `InstanceType`\<`T`\>

Deserializes a JSON string into a [PublicKey](Types.PublicKey.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `publicKey` | `string` |

#### Returns

`InstanceType`\<`T`\>

a JSON string

#### Overrides

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/signature.ts:238](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L238)

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

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L96)

___

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`«destructured»`): [`PublicKey`](Types.PublicKey.md)

Derives a [PublicKey](Types.PublicKey.md) from a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:168](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L168)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L125)

___

### toBase58

▸ `Static` **toBase58**(`«destructured»`): `string`

Static method to encode a [PublicKey](Types.PublicKey.md) into base58 format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`string`

a base58 encoded [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:218](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L218)

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

[lib/circuit-value.ts:214](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L214)

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

[lib/circuit-value.ts:108](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L108)

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

[lib/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L129)

___

### toJSON

▸ `Static` **toJSON**(`publicKey`): `string`

Serializes a [PublicKey](Types.PublicKey.md) into its JSON representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`string`

a JSON string

#### Overrides

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/signature.ts:230](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/signature.ts#L230)
