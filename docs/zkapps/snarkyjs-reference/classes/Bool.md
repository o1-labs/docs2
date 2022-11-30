# Class: Bool

## Table of contents

### Constructors

- [constructor](Bool.md#constructor)

### Properties

- [Unsafe](Bool.md#unsafe)

### Methods

- [and](Bool.md#and)
- [assertEquals](Bool.md#assertequals)
- [assertFalse](Bool.md#assertfalse)
- [assertTrue](Bool.md#asserttrue)
- [equals](Bool.md#equals)
- [not](Bool.md#not)
- [or](Bool.md#or)
- [sizeInFields](Bool.md#sizeinfields)
- [toBoolean](Bool.md#toboolean)
- [toField](Bool.md#tofield)
- [toFields](Bool.md#tofields)
- [toJSON](Bool.md#tojson)
- [toString](Bool.md#tostring)
- [and](Bool.md#and-1)
- [assertEqual](Bool.md#assertequal)
- [check](Bool.md#check)
- [count](Bool.md#count)
- [equal](Bool.md#equal)
- [fromFields](Bool.md#fromfields)
- [fromJSON](Bool.md#fromjson)
- [not](Bool.md#not-1)
- [or](Bool.md#or-1)
- [sizeInFields](Bool.md#sizeinfields-1)
- [toAuxiliary](Bool.md#toauxiliary)
- [toField](Bool.md#tofield-1)
- [toFields](Bool.md#tofields-1)
- [toInput](Bool.md#toinput)
- [toJSON](Bool.md#tojson-1)

## Constructors

### constructor

• **new Bool**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:428](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L428)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:518](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L518)

## Methods

### and

▸ **and**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | A [Bool](Bool.md) to AND with this [Bool](Bool.md). |

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is set to true only if
this [Bool](Bool.md) and `y` are also true.

#### Defined in

[snarky.d.ts:445](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L445)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Proves that this [Bool](Bool.md) is equal to `y`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [Bool](Bool.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[snarky.d.ts:458](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L458)

___

### assertFalse

▸ **assertFalse**(`message?`): `void`

Proves that this [Bool](Bool.md) is `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:468](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L468)

___

### assertTrue

▸ **assertTrue**(`message?`): `void`

Proves that this [Bool](Bool.md) is `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:463](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L463)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Returns true if this [Bool](Bool.md) is equal to `y`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [Bool](Bool.md). |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:474](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L474)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

#### Defined in

[snarky.d.ts:438](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L438)

___

### or

▸ **or**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [Bool](Bool.md) to OR with this [Bool](Bool.md). |

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is set to true if either
this [Bool](Bool.md) or `y` is true.

#### Defined in

[snarky.d.ts:452](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L452)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:479](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L479)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [Bool](Bool.md) to a javascript boolean.
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:501](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L501)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Converts a [Bool](Bool.md) to a [Field](Field.md). `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:433](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L433)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this [Bool](Bool.md) into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:484](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L484)

___

### toJSON

▸ **toJSON**(): `boolean`

Serialize the [Bool](Bool.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:495](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L495)

___

### toString

▸ **toString**(): `string`

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:490](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L490)

___

### and

▸ `Static` **and**(`x`, `y`): [`Bool`](Bool.md)

Boolean AND operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:536](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L536)

___

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

Asserts if both [Bool](Bool.md) are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:546](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L546)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:588](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L588)

___

### count

▸ `Static` **count**(`x`): [`Field`](Field.md)

Counts all elements of type [Bool](Bool.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean`[] \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:556](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L556)

___

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

Checks two [Bool](Bool.md) for equality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:551](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L551)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Bool`](Bool.md)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:575](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L575)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Bool`](Bool.md)

Deserialize a JSON structure into a [Bool](Bool.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:586](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L586)

___

### not

▸ `Static` **not**(`x`): [`Bool`](Bool.md)

Boolean negation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:531](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L531)

___

### or

▸ `Static` **or**(`x`, `y`): [`Bool`](Bool.md)

Boolean OR operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:541](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L541)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:561](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L561)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`x?`): []

Static method to serialize a [Bool](Bool.md) into its auxiliary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | [`Bool`](Bool.md) |

#### Returns

[]

#### Defined in

[snarky.d.ts:571](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L571)

___

### toField

▸ `Static` **toField**(`x`): [`Field`](Field.md)

Serializes a [Bool](Bool.md) into an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:516](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L516)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

Static method to serialize a [Bool](Bool.md) into an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:566](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L566)

___

### toInput

▸ `Static` **toInput**(`x`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `packed` | [[`Field`](Field.md), `number`][] |

#### Defined in

[snarky.d.ts:591](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L591)

___

### toJSON

▸ `Static` **toJSON**(`x`): `boolean`

Serialize a [Bool](Bool.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:581](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L581)
