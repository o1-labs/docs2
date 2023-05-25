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

[snarky.d.ts:1161](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1161)

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

[snarky.d.ts:1179](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1179)

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

[snarky.d.ts:1173](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1173)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1155](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1155)

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

[snarky.d.ts:1167](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1167)

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

[snarky.d.ts:1141](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1141)

___

### toJSON

▸ **toJSON**(): `string`

Serializes this Scalar to a string

#### Returns

`string`

#### Defined in

[snarky.d.ts:1184](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1184)

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

[snarky.d.ts:1226](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1226)

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

[snarky.d.ts:1225](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1225)

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

[snarky.d.ts:1205](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1205)

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

[snarky.d.ts:1197](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1197)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Scalar`](Scalar.md)

Deserialize a JSON structure into a [Scalar](Scalar.md).
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Scalar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1220](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1220)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1210](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1210)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1201](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1201)

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

[snarky.d.ts:1193](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1193)

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

[snarky.d.ts:1189](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1189)

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

[snarky.d.ts:1149](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1149)

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

[snarky.d.ts:1215](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L1215)
