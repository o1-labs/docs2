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

[snarky.d.ts:774](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L774)

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

[snarky.d.ts:792](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L792)

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

[snarky.d.ts:786](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L786)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:768](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L768)

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

[snarky.d.ts:780](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L780)

___

### toFields

▸ **toFields**(`this`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:762](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L762)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

[snarky.d.ts:794](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L794)

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

[snarky.d.ts:831](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L831)

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

[snarky.d.ts:815](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L815)

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

[snarky.d.ts:807](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L807)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Scalar`](Scalar.md)

Deserialize a JSON structure into a [Scalar](Scalar.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:830](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L830)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

Returns a random [Scalar](Scalar.md).
Randomness can not be proven inside a circuit!

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:820](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L820)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:811](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L811)

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

[snarky.d.ts:803](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L803)

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

[snarky.d.ts:799](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L799)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Serialize a [Scalar](Scalar.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:825](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L825)
