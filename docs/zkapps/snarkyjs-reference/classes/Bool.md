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
- [fromBytes](Bool.md#frombytes)
- [fromFields](Bool.md#fromfields)
- [fromJSON](Bool.md#fromjson)
- [not](Bool.md#not-1)
- [or](Bool.md#or-1)
- [sizeInBytes](Bool.md#sizeinbytes)
- [sizeInFields](Bool.md#sizeinfields-1)
- [toAuxiliary](Bool.md#toauxiliary)
- [toBytes](Bool.md#tobytes)
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

[snarky.d.ts:431](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L431)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:521](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L521)

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

[snarky.d.ts:448](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L448)

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

[snarky.d.ts:461](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L461)

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

[snarky.d.ts:471](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L471)

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

[snarky.d.ts:466](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L466)

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

[snarky.d.ts:477](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L477)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

#### Defined in

[snarky.d.ts:441](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L441)

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

[snarky.d.ts:455](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L455)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:482](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L482)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [Bool](Bool.md) to a javascript boolean.
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:504](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L504)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Converts a [Bool](Bool.md) to a [Field](Field.md). `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:436](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L436)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this [Bool](Bool.md) into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:487](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L487)

___

### toJSON

▸ **toJSON**(): `boolean`

Serialize the [Bool](Bool.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:498](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L498)

___

### toString

▸ **toString**(): `string`

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:493](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L493)

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

[snarky.d.ts:539](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L539)

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

[snarky.d.ts:549](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L549)

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

[snarky.d.ts:591](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L591)

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

[snarky.d.ts:559](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L559)

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

[snarky.d.ts:554](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L554)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:596](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L596)

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

[snarky.d.ts:578](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L578)

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

[snarky.d.ts:589](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L589)

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

[snarky.d.ts:534](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L534)

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

[snarky.d.ts:544](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L544)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:597](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L597)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:564](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L564)

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

[snarky.d.ts:574](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L574)

___

### toBytes

▸ `Static` **toBytes**(`x`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`number`[]

#### Defined in

[snarky.d.ts:595](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L595)

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

[snarky.d.ts:519](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L519)

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

[snarky.d.ts:569](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L569)

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

[snarky.d.ts:594](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L594)

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

[snarky.d.ts:584](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L584)
