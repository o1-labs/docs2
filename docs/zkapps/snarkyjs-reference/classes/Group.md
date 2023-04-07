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
| `args.x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `args.y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:1051](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1051)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:1055](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1055)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:1012](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1012)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:1013](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1013)

___

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:1060](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1060)

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

[snarky.d.ts:1018](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1018)

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

[snarky.d.ts:1039](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1039)

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

[snarky.d.ts:1044](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1044)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md) elements and returns a new instance.

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1028](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1028)

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

[snarky.d.ts:1033](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1033)

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

[snarky.d.ts:1023](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1023)

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

[snarky.d.ts:1049](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1049)

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

[snarky.d.ts:1064](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1064)

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

[snarky.d.ts:1083](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1083)

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

[snarky.d.ts:1121](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1121)

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

[snarky.d.ts:1088](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1088)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Group`](Group.md)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:1100](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1100)

___

### fromJSON

▸ `Static` **fromJSON**(`«destructured»`): ``null`` \| [`Group`](Group.md)

Deserialize a JSON structure into a [Group](Group.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `string` \| `number` |
| › `y` | `string` \| `number` |

#### Returns

``null`` \| [`Group`](Group.md)

#### Defined in

[snarky.d.ts:1114](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1114)

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

[snarky.d.ts:1072](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1072)

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

[snarky.d.ts:1077](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1077)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:1104](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1104)

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

[snarky.d.ts:1068](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1068)

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

[snarky.d.ts:1096](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1096)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

Static method to serialize a [Group](Group.md) into an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:1092](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1092)

___

### toJSON

▸ `Static` **toJSON**(`x`): `Object`

Serialize a [Group](Group.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Group.

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

[snarky.d.ts:1109](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L1109)
