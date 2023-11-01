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

- [#assertConstant](Scalar.md##assertconstant)
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
- [fromBigInt](Scalar.md#frombigint)
- [fromBits](Scalar.md#frombits)
- [fromFields](Scalar.md#fromfields)
- [fromJSON](Scalar.md#fromjson)
- [random](Scalar.md#random)
- [sizeInFields](Scalar.md#sizeinfields)
- [toAuxiliary](Scalar.md#toauxiliary)
- [toFields](Scalar.md#tofields-1)
- [toJSON](Scalar.md#tojson-1)

## Constructors

### constructor

• `Private` **new Scalar**(`bits`, `constantValue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\> |
| `constantValue?` | `bigint` |

#### Defined in

[lib/scalar.ts:37](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L37)

## Properties

### constantValue

• `Optional` **constantValue**: `ScalarConst`

#### Defined in

[lib/scalar.ts:33](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L33)

___

### value

• **value**: `MlArray`<[`FieldVar`](../modules.md#fieldvar-1)\>

#### Defined in

[lib/scalar.ts:32](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L32)

___

### ORDER

▪ `Static` **ORDER**: `bigint` = `Fq.modulus`

#### Defined in

[lib/scalar.ts:35](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L35)

## Methods

### #assertConstant

▸ `Private` **#assertConstant**(`name`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`bigint`

#### Defined in

[lib/scalar.ts:115](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L115)

___

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

[lib/scalar.ts:135](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L135)

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

[lib/scalar.ts:172](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L172)

___

### isConstant

▸ **isConstant**(): this is Scalar & Object

Check whether this [Scalar](Scalar.md) is a hard-coded constant in the constraint system.
If a [Scalar](Scalar.md) is constructed outside provable code, it is a constant.

#### Returns

this is Scalar & Object

#### Defined in

[lib/scalar.ts:62](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L62)

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

[lib/scalar.ts:159](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L159)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.

**Warning**: This method is not available for provable code.

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:124](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L124)

___

### shift

▸ **shift**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:181](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L181)

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

[lib/scalar.ts:147](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L147)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this [Scalar](Scalar.md) into a bigint

#### Returns

`bigint`

#### Defined in

[lib/scalar.ts:90](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L90)

___

### toConstant

▸ **toConstant**(): `ConstantScalar`

Convert this [Scalar](Scalar.md) into a constant if it isn't already.

If the scalar is a variable, this only works inside `asProver` or `witness` blocks.

See [FieldVar](../modules.md#fieldvar-1) for an explanation of constants vs. variables.

#### Returns

`ConstantScalar`

#### Defined in

[lib/scalar.ts:73](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L73)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serialize this Scalar to Field elements.

**Warning**: This function is for internal usage. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
The fields are not constrained to be boolean.

Check out [toFieldsCompressed](Scalar.md#tofieldscompressed) for a user-friendly serialization
that can be used outside proofs.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/scalar.ts:236](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L236)

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
| `field` | [`Field`](Field.md) |
| `highBit` | [`Bool`](Bool.md) |

#### Defined in

[lib/scalar.ts:198](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L198)

___

### toJSON

▸ **toJSON**(): `string`

Serializes this Scalar to a string

#### Returns

`string`

#### Defined in

[lib/scalar.ts:302](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L302)

___

### unshift

▸ **unshift**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:185](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L185)

___

### check

▸ `Static` **check**(): `void`

Part of the [Provable](../interfaces/Provable.md) interface.

Does nothing.

#### Returns

`void`

#### Defined in

[lib/scalar.ts:272](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L272)

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

[lib/scalar.ts:50](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L50)

___

### fromBigInt

▸ `Static` **fromBigInt**(`x`): [`Scalar`](Scalar.md)

**`Deprecated`**

use [from](Scalar.md#from)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:83](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L83)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`Scalar`](Scalar.md)

Creates a data structure from an array of serialized [Bool](Bool.md).

**Warning**: The bits are interpreted as the bits of 2s + 1 + 2^255, where s is the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | [`Bool`](Bool.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:101](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L101)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Scalar`](Scalar.md)

Part of the [Provable](../interfaces/Provable.md) interface.

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:254](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L254)

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

[lib/scalar.ts:310](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L310)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[lib/scalar.ts:109](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L109)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Part of the [Provable](../interfaces/Provable.md) interface.

Returns the size of this type in [Field](Field.md) elements.

#### Returns

`number`

#### Defined in

[lib/scalar.ts:263](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L263)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): `never`[]

Part of the [Provable](../interfaces/Provable.md) interface.

Serialize a [Scalar](Scalar.md) into its auxiliary data, which are empty.

#### Returns

`never`[]

#### Defined in

[lib/scalar.ts:245](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L245)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

Part of the [Provable](../interfaces/Provable.md) interface.

Serialize a [Scalar](Scalar.md) into an array of [Field](Field.md) elements.

**Warning**: This function is for internal usage. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
The fields are not constrained to be boolean.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/scalar.ts:221](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L221)

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

[lib/scalar.ts:294](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/scalar.ts#L294)
