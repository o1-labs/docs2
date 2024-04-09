[o1js](../README.md) / [Modules](../modules.md) / Scalar

# Class: Scalar

Represents a [Scalar](Scalar.md).

## Table of contents

### Constructors

- [constructor](Scalar.md#constructor)

### Properties

- [constantValue](Scalar.md#constantvalue)
- [value](Scalar.md#value)
- [ORDER](Scalar.md#order)

### Methods

- [add](Scalar.md#add)
- [div](Scalar.md#div)
- [isConstant](Scalar.md#isconstant)
- [mul](Scalar.md#mul)
- [neg](Scalar.md#neg)
- [shift](Scalar.md#shift)
- [sub](Scalar.md#sub)
- [toBigInt](Scalar.md#tobigint)
- [toConstant](Scalar.md#toconstant)
- [toFields](Scalar.md#tofields)
- [toFieldsCompressed](Scalar.md#tofieldscompressed)
- [toJSON](Scalar.md#tojson)
- [unshift](Scalar.md#unshift)
- [check](Scalar.md#check)
- [from](Scalar.md#from)
- [fromBits](Scalar.md#frombits)
- [fromFields](Scalar.md#fromfields)
- [fromJSON](Scalar.md#fromjson)
- [random](Scalar.md#random)
- [sizeInFields](Scalar.md#sizeinfields)
- [toAuxiliary](Scalar.md#toauxiliary)
- [toFields](Scalar.md#tofields-1)
- [toInput](Scalar.md#toinput)
- [toJSON](Scalar.md#tojson-1)

## Constructors

### constructor

• `Private` **new Scalar**(`bits`, `constantValue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | `MlArray`\<`FieldVar`\> |
| `constantValue?` | `bigint` |

#### Defined in

[lib/provable/scalar.ts:39](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L39)

## Properties

### constantValue

• `Optional` **constantValue**: `ScalarConst`

#### Defined in

[lib/provable/scalar.ts:35](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L35)

___

### value

• **value**: `MlArray`\<`FieldVar`\>

#### Defined in

[lib/provable/scalar.ts:34](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L34)

___

### ORDER

▪ `Static` **ORDER**: `bigint` = `Fq.modulus`

#### Defined in

[lib/provable/scalar.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L37)

## Methods

### add

▸ **add**(`y`): [`Scalar`](Scalar.md)

Add scalar field elements.

**Warning**: This method is not available for provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:129](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L129)

___

### div

▸ **div**(`y`): [`Scalar`](Scalar.md)

Divide scalar field elements.
Throws if the denominator is zero.

**Warning**: This method is not available for provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:166](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L166)

___

### isConstant

▸ **isConstant**(): this is Scalar & Object

Check whether this [Scalar](Scalar.md) is a hard-coded constant in the constraint system.
If a [Scalar](Scalar.md) is constructed outside provable code, it is a constant.

#### Returns

this is Scalar & Object

#### Defined in

[lib/provable/scalar.ts:64](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L64)

___

### mul

▸ **mul**(`y`): [`Scalar`](Scalar.md)

Multiply scalar field elements.

**Warning**: This method is not available for provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:153](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L153)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.

**Warning**: This method is not available for provable code.

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:118](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L118)

___

### shift

▸ **shift**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:175](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L175)

___

### sub

▸ **sub**(`y`): [`Scalar`](Scalar.md)

Subtract scalar field elements.

**Warning**: This method is not available for provable code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:141](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L141)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this [Scalar](Scalar.md) into a bigint

#### Returns

`bigint`

#### Defined in

[lib/provable/scalar.ts:85](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L85)

___

### toConstant

▸ **toConstant**(): `ConstantScalar`

Convert this [Scalar](Scalar.md) into a constant if it isn't already.

If the scalar is a variable, this only works inside `asProver` or `witness` blocks.

See FieldVar for an explanation of constants vs. variables.

#### Returns

`ConstantScalar`

#### Defined in

[lib/provable/scalar.ts:75](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L75)

___

### toFields

▸ **toFields**(): `Field`[]

Serialize this Scalar to Field elements.

**Warning**: This function is for internal usage. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
The fields are not constrained to be boolean.

Check out [toFieldsCompressed](Scalar.md#tofieldscompressed) for a user-friendly serialization
that can be used outside proofs.

#### Returns

`Field`[]

#### Defined in

[lib/provable/scalar.ts:230](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L230)

___

### toFieldsCompressed

▸ **toFieldsCompressed**(): `Object`

Serialize a Scalar into a Field element plus one bit, where the bit is represented as a Bool.

**Warning**: This method is not available for provable code.

Note: Since the Scalar field is slightly larger than the base Field, an additional high bit
is needed to represent all Scalars. However, for a random Scalar, the high bit will be `false` with overwhelming probability.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | `Field` |
| `highBit` | `Bool` |

#### Defined in

[lib/provable/scalar.ts:192](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L192)

___

### toJSON

▸ **toJSON**(): `string`

Serializes this Scalar to a string

#### Returns

`string`

#### Defined in

[lib/provable/scalar.ts:310](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L310)

___

### unshift

▸ **unshift**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:179](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L179)

___

### check

▸ `Static` **check**(): `void`

Part of the [Provable](../modules.md#provable) interface.

Does nothing.

#### Returns

`void`

#### Defined in

[lib/provable/scalar.ts:280](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L280)

___

### from

▸ `Static` **from**(`x`): [`Scalar`](Scalar.md)

Create a constant [Scalar](Scalar.md) from a bigint, number, string or Scalar.

If the input is too large, it is reduced modulo the scalar field size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Scalar`](Scalar.md) \| `ScalarConst` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:52](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L52)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`Scalar`](Scalar.md)

Creates a data structure from an array of serialized [Bool](../modules.md#bool).

**Warning**: The bits are interpreted as the bits of 2s + 1 + 2^255, where s is the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | `Bool`[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:96](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L96)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Scalar`](Scalar.md)

Part of the [Provable](../modules.md#provable) interface.

Creates a data structure from an array of serialized [Field](../modules.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:262](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L262)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Scalar`](Scalar.md)

Deserialize a JSON structure into a [Scalar](Scalar.md).
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:318](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L318)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/provable/scalar.ts:107](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L107)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Part of the [Provable](../modules.md#provable) interface.

Returns the size of this type in [Field](../modules.md#field) elements.

#### Returns

`number`

#### Defined in

[lib/provable/scalar.ts:271](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L271)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): `never`[]

Part of the [Provable](../modules.md#provable) interface.

Serialize a [Scalar](Scalar.md) into its auxiliary data, which are empty.

#### Returns

`never`[]

#### Defined in

[lib/provable/scalar.ts:253](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L253)

___

### toFields

▸ `Static` **toFields**(`x`): `Field`[]

Part of the [Provable](../modules.md#provable) interface.

Serialize a [Scalar](Scalar.md) into an array of [Field](../modules.md#field) elements.

**Warning**: This function is for internal usage. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
The fields are not constrained to be boolean.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`Field`[]

#### Defined in

[lib/provable/scalar.ts:215](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L215)

___

### toInput

▸ `Static` **toInput**(`x`): `Object`

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

This function is the implementation of `ProvableExtended.toInput()` for the [Scalar](Scalar.md) type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`Object`

An object where the `fields` key is a [Field](../modules.md#field) array of length 1 created from this [Field](../modules.md#field).

| Name | Type |
| :------ | :------ |
| `packed` | [`Field`, `number`][] |

#### Defined in

[lib/provable/scalar.ts:244](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L244)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Serialize a [Scalar](Scalar.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[lib/provable/scalar.ts:302](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/scalar.ts#L302)
