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
- [readBytes](Bool.md#readbytes)
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

[snarky.d.ts:553](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L553)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:643](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L643)

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

[snarky.d.ts:570](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L570)

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

[snarky.d.ts:583](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L583)

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

[snarky.d.ts:593](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L593)

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

[snarky.d.ts:588](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L588)

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

[snarky.d.ts:599](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L599)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

#### Defined in

[snarky.d.ts:563](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L563)

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

[snarky.d.ts:577](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L577)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:604](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L604)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [Bool](Bool.md) to a javascript boolean.
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:626](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L626)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Converts a [Bool](Bool.md) to a [Field](Field.md). `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:558](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L558)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this [Bool](Bool.md) into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:609](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L609)

___

### toJSON

▸ **toJSON**(): `boolean`

Serialize the [Bool](Bool.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:620](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L620)

___

### toString

▸ **toString**(): `string`

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:615](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L615)

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

[snarky.d.ts:661](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L661)

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

[snarky.d.ts:671](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L671)

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

[snarky.d.ts:713](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L713)

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

[snarky.d.ts:681](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L681)

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

[snarky.d.ts:676](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L676)

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

[snarky.d.ts:718](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L718)

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

[snarky.d.ts:700](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L700)

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

[snarky.d.ts:711](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L711)

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

[snarky.d.ts:656](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L656)

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

[snarky.d.ts:666](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L666)

___

### readBytes

▸ `Static` **readBytes**(`bytes`, `offset`): [value: Bool, offset: number]

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |
| `offset` | `number` |

#### Returns

[value: Bool, offset: number]

#### Defined in

[snarky.d.ts:719](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L719)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:723](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L723)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:686](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L686)

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

[snarky.d.ts:696](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L696)

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

[snarky.d.ts:717](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L717)

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

[snarky.d.ts:641](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L641)

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

[snarky.d.ts:691](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L691)

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

[snarky.d.ts:716](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L716)

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

[snarky.d.ts:706](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L706)
