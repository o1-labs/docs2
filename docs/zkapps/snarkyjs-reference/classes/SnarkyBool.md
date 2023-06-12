[SnarkyJS](../README.md) / [Modules](../modules.md) / SnarkyBool

# Class: SnarkyBool

## Table of contents

### Constructors

- [constructor](SnarkyBool.md#constructor)

### Properties

- [Unsafe](SnarkyBool.md#unsafe)

### Methods

- [and](SnarkyBool.md#and)
- [assertEquals](SnarkyBool.md#assertequals)
- [assertFalse](SnarkyBool.md#assertfalse)
- [assertTrue](SnarkyBool.md#asserttrue)
- [equals](SnarkyBool.md#equals)
- [not](SnarkyBool.md#not)
- [or](SnarkyBool.md#or)
- [sizeInFields](SnarkyBool.md#sizeinfields)
- [toBoolean](SnarkyBool.md#toboolean)
- [toField](SnarkyBool.md#tofield)
- [toFields](SnarkyBool.md#tofields)
- [toJSON](SnarkyBool.md#tojson)
- [toString](SnarkyBool.md#tostring)
- [and](SnarkyBool.md#and-1)
- [assertEqual](SnarkyBool.md#assertequal)
- [check](SnarkyBool.md#check)
- [count](SnarkyBool.md#count)
- [equal](SnarkyBool.md#equal)
- [fromBytes](SnarkyBool.md#frombytes)
- [fromFields](SnarkyBool.md#fromfields)
- [fromJSON](SnarkyBool.md#fromjson)
- [not](SnarkyBool.md#not-1)
- [or](SnarkyBool.md#or-1)
- [readBytes](SnarkyBool.md#readbytes)
- [sizeInBytes](SnarkyBool.md#sizeinbytes)
- [sizeInFields](SnarkyBool.md#sizeinfields-1)
- [toAuxiliary](SnarkyBool.md#toauxiliary)
- [toBytes](SnarkyBool.md#tobytes)
- [toField](SnarkyBool.md#tofield-1)
- [toFields](SnarkyBool.md#tofields-1)
- [toInput](SnarkyBool.md#toinput)
- [toJSON](SnarkyBool.md#tojson-1)

## Constructors

### constructor

• **new SnarkyBool**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:1087](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1087)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:1177](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1177)

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

[snarky.d.ts:1104](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1104)

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

[snarky.d.ts:1117](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1117)

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

[snarky.d.ts:1127](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1127)

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

[snarky.d.ts:1122](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1122)

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

[snarky.d.ts:1133](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1133)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [Bool](Bool.md) that is the negation of this [Bool](Bool.md).

#### Defined in

[snarky.d.ts:1097](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1097)

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

[snarky.d.ts:1111](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1111)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1138](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1138)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [Bool](Bool.md) to a javascript [[boolean]].
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1160](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1160)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Converts a [Bool](Bool.md) to a [Field](Field.md). `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1092](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1092)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this [Bool](Bool.md) into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:1143](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1143)

___

### toJSON

▸ **toJSON**(): `boolean`

Serialize the [Bool](Bool.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1154](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1154)

___

### toString

▸ **toString**(): `string`

Serialize the [Bool](Bool.md) to a string, e.g. for printing.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:1149](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1149)

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

[snarky.d.ts:1195](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1195)

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

[snarky.d.ts:1205](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1205)

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

[snarky.d.ts:1247](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1247)

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

[snarky.d.ts:1215](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1215)

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

[snarky.d.ts:1210](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1210)

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

[snarky.d.ts:1252](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1252)

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

[snarky.d.ts:1234](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1234)

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

[snarky.d.ts:1245](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1245)

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

[snarky.d.ts:1190](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1190)

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

[snarky.d.ts:1200](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1200)

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

[snarky.d.ts:1253](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1253)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:1257](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1257)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1220](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1220)

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

[snarky.d.ts:1230](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1230)

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

[snarky.d.ts:1251](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1251)

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

[snarky.d.ts:1175](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1175)

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

[snarky.d.ts:1225](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1225)

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

[snarky.d.ts:1250](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1250)

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

[snarky.d.ts:1240](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1240)
