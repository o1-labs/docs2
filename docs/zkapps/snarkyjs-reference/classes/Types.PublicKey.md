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

• **new PublicKey**(...`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:64](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L64)

## Properties

### isOdd

• **isOdd**: [`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:80](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L80)

___

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:79](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L79)

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

[lib/circuit_value.ts:152](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L152)

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

[lib/circuit_value.ts:148](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L148)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:156](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L156)

___

### isEmpty

▸ **isEmpty**(): [`Bool`](Bool.md)

Checks if a [PublicKey](Types.PublicKey.md) is empty.

#### Returns

[`Bool`](Bool.md)

a [Bool](../modules/Types.md#bool)

#### Defined in

[lib/signature.ts:137](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L137)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [PublicKey](Types.PublicKey.md) in base58 format.

#### Returns

`string`

a base58 encoded [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:154](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L154)

___

### toConstant

▸ **toConstant**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:144](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L144)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:136](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L136)

___

### toGroup

▸ **toGroup**(): [`Group`](Group.md)

Returns the [Group](Group.md) representation of this [PublicKey](Types.PublicKey.md).

#### Returns

[`Group`](Group.md)

A [Group](Group.md)

#### Defined in

[lib/signature.ts:86](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L86)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:140](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L140)

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

[lib/circuit_value.ts:185](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L185)

___

### empty

▸ `Static` **empty**(): [`PublicKey`](Types.PublicKey.md)

Creates an empty [PublicKey](Types.PublicKey.md).

#### Returns

[`PublicKey`](Types.PublicKey.md)

an empty [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:129](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L129)

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

[lib/signature.ts:121](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L121)

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

[lib/signature.ts:146](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L146)

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

[lib/circuit_value.ts:160](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L160)

___

### fromGroup

▸ `Static` **fromGroup**(`__namedParameters`): [`PublicKey`](Types.PublicKey.md)

Creates a [PublicKey](Types.PublicKey.md) from a [Group](Group.md) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Group`](Group.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:104](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L104)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `publicKey`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

a JSON string

#### Overrides

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/signature.ts:176](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L176)

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

[lib/circuit_value.ts:81](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L81)

___

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`__namedParameters`): [`PublicKey`](Types.PublicKey.md)

Derives a [PublicKey](Types.PublicKey.md) from a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

a [PublicKey](Types.PublicKey.md).

#### Defined in

[lib/signature.ts:113](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L113)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:88](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L88)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:110](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L110)

___

### toBase58

▸ `Static` **toBase58**(`publicKey`): `string`

Static method to encode a [PublicKey](Types.PublicKey.md) into base58 format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`string`

a base58 encoded [PublicKey](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:162](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L162)

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

[lib/circuit_value.ts:199](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L199)

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

[lib/circuit_value.ts:93](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L93)

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

[lib/circuit_value.ts:114](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L114)

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

[lib/signature.ts:169](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/signature.ts#L169)
