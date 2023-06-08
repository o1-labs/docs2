# Class: Group

Represents a point with x and y coordinates on an elliptic curve.

## Table of contents

### Constructors

- [constructor](Group.md#constructor)

### Properties

- [x](Group.md#x)
- [y](Group.md#y)
- [generator](Group.md#generator)

### Methods

- [add](Group.md#add)
- [assertEquals](Group.md#assertequals)
- [equals](Group.md#equals)
- [neg](Group.md#neg)
- [scale](Group.md#scale)
- [sub](Group.md#sub)
- [toJSON](Group.md#tojson)
- [add](Group.md#add-1)
- [assertEqual](Group.md#assertequal)
- [check](Group.md#check)
- [equal](Group.md#equal)
- [fromFields](Group.md#fromfields)
- [fromJSON](Group.md#fromjson)
- [neg](Group.md#neg-1)
- [scale](Group.md#scale-1)
- [sizeInFields](Group.md#sizeinfields)
- [sub](Group.md#sub-1)
- [toAuxiliary](Group.md#toauxiliary)
- [toFields](Group.md#tofields)
- [toJSON](Group.md#tojson-1)

## Constructors

### constructor

• **new Group**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.x` | `string` \| `number` \| `boolean` \| `Field` |
| `args.y` | `string` \| `number` \| `boolean` \| `Field` |

#### Defined in

[snarky.d.ts:1384](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1384)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` \| `Field` |
| `y` | `string` \| `number` \| `boolean` \| `Field` |

#### Defined in

[snarky.d.ts:1388](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1388)

## Properties

### x

• **x**: `Field`

#### Defined in

[snarky.d.ts:1345](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1345)

___

### y

• **y**: `Field`

#### Defined in

[snarky.d.ts:1346](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1346)

___

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:1393](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1393)

## Methods

### add

▸ **add**(`y`): [`Group`](Group.md)

Adds two [Group](Group.md) elements together.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1351](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1351)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Asserts that two [Group](Group.md) elements are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:1372](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1372)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Checks if two [Group](Group.md) elements are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:1377](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1377)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md) elements and returns a new instance.

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1361](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1361)

___

### scale

▸ **scale**(`y`): [`Group`](Group.md)

Scales this [Group](Group.md) element using a [Scalar](Scalar.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1366](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1366)

___

### sub

▸ **sub**(`y`): [`Group`](Group.md)

Subtracts one [Group](Group.md) element from the other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1356](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1356)

___

### toJSON

▸ **toJSON**(): `Object`

Returns the JSON representation of this [Group](Group.md) element.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `string` |
| `y` | `string` |

#### Defined in

[snarky.d.ts:1382](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1382)

___

### add

▸ `Static` **add**(`x`, `y`): [`Group`](Group.md)

Adds two [Group](Group.md) elements together.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1397](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1397)

___

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

Asserts that two [Group](Group.md) elements are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:1416](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1416)

___

### check

▸ `Static` **check**(`g`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:1454](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1454)

___

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

Checks if two [Group](Group.md) elements are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:1421](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1421)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Group`](Group.md)

Creates a data structure from an array of serialized [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1433](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1433)

___

### fromJSON

▸ `Static` **fromJSON**(`«destructured»`): ``null`` \| [`Group`](Group.md)

Deserialize a JSON structure into a [Group](Group.md).
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `string` \| `number` |
| › `y` | `string` \| `number` |

#### Returns

``null`` \| [`Group`](Group.md)

#### Defined in

[snarky.d.ts:1447](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1447)

___

### neg

▸ `Static` **neg**(`x`): [`Group`](Group.md)

Negates a [Group](Group.md) elements and returns a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1405](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1405)

___

### scale

▸ `Static` **scale**(`x`, `y`): [`Group`](Group.md)

Scales this [Group](Group.md) element using a [Scalar](Scalar.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1410](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1410)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1437](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1437)

___

### sub

▸ `Static` **sub**(`x`, `y`): [`Group`](Group.md)

Subtracts one [Group](Group.md) element from the other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1401](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1401)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`x?`): []

Static method to serialize a [Group](Group.md) into its auxiliary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | [`Group`](Group.md) |

#### Returns

[]

#### Defined in

[snarky.d.ts:1429](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1429)

___

### toFields

▸ `Static` **toFields**(`x`): `Field`[]

Static method to serialize a [Group](Group.md) into an array of [Field](../README.md#field) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1425](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1425)

___

### toJSON

▸ `Static` **toJSON**(`x`): `Object`

Serialize a [Group](Group.md) to a JSON string.
This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `string` |
| `y` | `string` |

#### Defined in

[snarky.d.ts:1442](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1442)
