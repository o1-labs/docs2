[o1js](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / PublicKey

# Class: PublicKey

[Types](../modules/Types.md).PublicKey

A public key, which is also an address on the Mina network.
You can derive a [PublicKey](Types.PublicKey.md) directly from a [PrivateKey](PrivateKey.md).

## Hierarchy

- `CircuitValue`

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

CircuitValue.constructor

#### Defined in

[lib/provable/types/circuit-value.ts:13](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L13)

## Properties

### isOdd

• **isOdd**: `Bool`

#### Defined in

[lib/provable/crypto/signature.ts:134](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L134)

___

### x

• **x**: `Field`

#### Defined in

[lib/provable/crypto/signature.ts:133](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L133)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PublicKey`](Types.PublicKey.md) |

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

### isEmpty

▸ **isEmpty**(): `Bool`

Checks if a [PublicKey](Types.PublicKey.md) is empty.

#### Returns

`Bool`

a [Bool](../modules.md#bool-1)

#### Defined in

[lib/provable/crypto/signature.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L189)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PublicKey](Types.PublicKey.md) in base58 format.

#### Returns

`string`

a base58 encoded [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/provable/crypto/signature.ts:207](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L207)

___

### toConstant

▸ **toConstant**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

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

### toGroup

▸ **toGroup**(): `Group`

Returns the [Group](../modules.md#group-1) representation of this [PublicKey](Types.PublicKey.md).

#### Returns

`Group`

A [Group](../modules.md#group-1)

#### Defined in

[lib/provable/crypto/signature.ts:140](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L140)

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

Creates an empty [PublicKey](Types.PublicKey.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

an empty [PublicKey](Types.PublicKey.md)

#### Overrides

CircuitValue.empty

#### Defined in

[lib/provable/crypto/signature.ts:181](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L181)

___

### from

▸ `Static` **from**(`g`): [`PublicKey`](Types.PublicKey.md)

Creates a [PublicKey](Types.PublicKey.md) from a JSON structure element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | `Object` |
| `g.isOdd` | `Bool` |
| `g.x` | `Field` |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/provable/crypto/signature.ts:173](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L173)

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

[lib/provable/crypto/signature.ts:198](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L198)

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

### fromGroup

▸ `Static` **fromGroup**(`«destructured»`): [`PublicKey`](Types.PublicKey.md)

Creates a [PublicKey](Types.PublicKey.md) from a [Group](../modules.md#group-1) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Group` |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/provable/crypto/signature.ts:157](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L157)

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

CircuitValue.fromJSON

#### Defined in

[lib/provable/crypto/signature.ts:235](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L235)

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

[lib/provable/crypto/signature.ts:165](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L165)

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

[lib/provable/crypto/signature.ts:215](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L215)

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

CircuitValue.toJSON

#### Defined in

[lib/provable/crypto/signature.ts:227](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L227)
