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

[snarky.d.ts:1266](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1266)

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

[snarky.d.ts:1284](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1284)

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

[snarky.d.ts:1278](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1278)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1260](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1260)

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

[snarky.d.ts:1272](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1272)

___

### toFields

▸ **toFields**(): `Field`[]

Serialize this Scalar to Field elements.

WARNING: This function is for internal usage by the proof system. It returns 255 field elements
which represent the Scalar in a shifted, bitwise format.
Check out [toFieldsCompressed](Scalar.md#tofieldscompressed) for a user-friendly serialization that can be used outside proofs.

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1246](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1246)

___

### toJSON

▸ **toJSON**(): `string`

Serializes this Scalar to a string

#### Returns

`string`

#### Defined in

[snarky.d.ts:1289](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1289)

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

[snarky.d.ts:1331](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1331)

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

[snarky.d.ts:1330](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1330)

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

[snarky.d.ts:1310](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1310)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Scalar`](Scalar.md)

Creates a data structure from an array of serialized [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1302](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1302)

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

[snarky.d.ts:1325](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1325)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1315](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1315)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1306](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1306)

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

[snarky.d.ts:1298](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1298)

___

### toFields

▸ `Static` **toFields**(`x`): `Field`[]

Static method to serialize a [Scalar](Scalar.md) into an array of [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1294](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1294)

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
| `field` | `Field` |
| `highBit` | [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:1254](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1254)

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

[snarky.d.ts:1320](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1320)
