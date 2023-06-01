# Class: Scalar

Represents a [Scalar](Scalar.md).

## Table of contents

### Constructors

- [constructor](Scalar.md#constructor)

### Methods

- [add](Scalar.md#add)
- [div](Scalar.md#div)
- [mul](Scalar.md#mul)
- [neg](Scalar.md#neg)
- [sub](Scalar.md#sub)
- [toFields](Scalar.md#tofields)
- [toJSON](Scalar.md#tojson)
- [check](Scalar.md#check)
- [fromBigInt](Scalar.md#frombigint)
- [fromBits](Scalar.md#frombits)
- [fromFields](Scalar.md#fromfields)
- [fromJSON](Scalar.md#fromjson)
- [random](Scalar.md#random)
- [sizeInFields](Scalar.md#sizeinfields)
- [toAuxiliary](Scalar.md#toauxiliary)
- [toFields](Scalar.md#tofields-1)
- [toFieldsCompressed](Scalar.md#tofieldscompressed)
- [toJSON](Scalar.md#tojson-1)

## Constructors

### constructor

• **new Scalar**()

## Methods

### add

▸ **add**(`y`): [`Scalar`](Scalar.md)

Add scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:906](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L906)

___

### div

▸ **div**(`y`): [`Scalar`](Scalar.md)

Divide scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:924](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L924)

___

### mul

▸ **mul**(`y`): [`Scalar`](Scalar.md)

Multiply scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:918](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L918)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:900](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L900)

___

### sub

▸ **sub**(`y`): [`Scalar`](Scalar.md)

Subtract scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:912](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L912)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serialize this Scalar to Field elements.

WARNING: This function is for internal usage by the proof system. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
Check out [toFieldsCompressed](Scalar.md#tofieldscompressed) for a user-friendly serialization that can be used outside proofs.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:886](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L886)

___

### toJSON

▸ **toJSON**(): `string`

Serializes this Scalar to a string

#### Returns

`string`

#### Defined in

[snarky.d.ts:929](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L929)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:971](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L971)

___

### fromBigInt

▸ `Static` **fromBigInt**(`s`): [`Scalar`](Scalar.md)

Create a constant [Scalar](Scalar.md) from a bigint.
If the bigint is too large, it is reduced modulo the scalar field order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:970](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L970)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`Scalar`](Scalar.md)

Creates a data structure from an array of serialized [Bool](Bool.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | [`Bool`](Bool.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:950](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L950)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Scalar`](Scalar.md)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:942](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L942)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Scalar`](Scalar.md)

Deserialize a JSON structure into a [Scalar](Scalar.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:965](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L965)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:955](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L955)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:946](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L946)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`x?`): []

Static method to serialize a [Scalar](Scalar.md) into its auxiliary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | [`Scalar`](Scalar.md) |

#### Returns

[]

#### Defined in

[snarky.d.ts:938](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L938)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

Static method to serialize a [Scalar](Scalar.md) into an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:934](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L934)

___

### toFieldsCompressed

▸ `Static` **toFieldsCompressed**(`s`): `Object`

Serialize a Scalar into a Field element plus one bit, where the bit is represented as a Bool.

Note: Since the Scalar field is slightly larger than the base Field, an additional high bit
is needed to represent all Scalars. However, for a random Scalar, the high bit will be `false` with overwhelming probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Scalar`](Scalar.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](Field.md) |
| `highBit` | [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:894](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L894)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Serialize a [Scalar](Scalar.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:960](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/snarky.d.ts#L960)
