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

[snarky.d.ts:1056](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1056)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| `Field`) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:1146](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1146)

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

[snarky.d.ts:1073](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1073)

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

[snarky.d.ts:1086](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1086)

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

[snarky.d.ts:1096](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1096)

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

[snarky.d.ts:1091](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1091)

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

[snarky.d.ts:1102](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1102)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

#### Defined in

[snarky.d.ts:1066](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1066)

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

[snarky.d.ts:1080](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1080)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1107](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1107)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [Bool](Bool.md) to a javascript [[boolean]].
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1129](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1129)

___

### toField

▸ **toField**(): `Field`

Converts a [Bool](Bool.md) to a [Field](../README.md#field). `false` becomes 0 and `true` becomes 1.

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1061](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1061)

___

### toFields

▸ **toFields**(): `Field`[]

Serializes this [Bool](Bool.md) into [Field](../README.md#field) elements.

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1112](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1112)

___

### toJSON

▸ **toJSON**(): `boolean`

Serialize the [Bool](Bool.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1123](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1123)

___

### toString

▸ **toString**(): `string`

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:1118](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1118)

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

[snarky.d.ts:1164](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1164)

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

[snarky.d.ts:1174](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1174)

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

[snarky.d.ts:1216](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1216)

___

### count

▸ `Static` **count**(`x`): `Field`

Counts all elements of type [Bool](Bool.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean`[] \| [`Bool`](Bool.md) |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1184](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1184)

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

[snarky.d.ts:1179](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1179)

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

[snarky.d.ts:1221](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1221)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Bool`](Bool.md)

Creates a data structure from an array of serialized [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:1203](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1203)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Bool`](Bool.md)

Deserialize a JSON structure into a [Bool](Bool.md).
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:1214](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1214)

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

[snarky.d.ts:1159](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1159)

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

[snarky.d.ts:1169](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1169)

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

[snarky.d.ts:1222](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1222)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:1226](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1226)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1189](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1189)

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

[snarky.d.ts:1199](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1199)

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

[snarky.d.ts:1220](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1220)

___

### toField

▸ `Static` **toField**(`x`): `Field`

Serializes a [Bool](Bool.md) into an array of [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1144](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1144)

___

### toFields

▸ `Static` **toFields**(`x`): `Field`[]

Static method to serialize a [Bool](Bool.md) into an array of [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1194](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1194)

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
| `packed` | [`Field`, `number`][] |

#### Defined in

[snarky.d.ts:1219](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1219)

___

### toJSON

▸ `Static` **toJSON**(`x`): `boolean`

Serialize a [Bool](Bool.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1209](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1209)
