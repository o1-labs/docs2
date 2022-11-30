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

[snarky.d.ts:878](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L878)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:882](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L882)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:839](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L839)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:840](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L840)

___

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:887](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L887)

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

[snarky.d.ts:845](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L845)

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

[snarky.d.ts:866](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L866)

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

[snarky.d.ts:871](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L871)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md) elements and returns a new instance.

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:855](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L855)

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

[snarky.d.ts:860](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L860)

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

[snarky.d.ts:850](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L850)

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

[snarky.d.ts:876](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L876)

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

[snarky.d.ts:891](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L891)

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

[snarky.d.ts:910](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L910)

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

[snarky.d.ts:948](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L948)

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

[snarky.d.ts:915](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L915)

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

[snarky.d.ts:927](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L927)

___

### fromJSON

▸ `Static` **fromJSON**(`__namedParameters`): ``null`` \| [`Group`](Group.md)

Deserialize a JSON structure into a [Group](Group.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.x` | `string` \| `number` |
| `__namedParameters.y` | `string` \| `number` |

#### Returns

``null`` \| [`Group`](Group.md)

#### Defined in

[snarky.d.ts:941](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L941)

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

[snarky.d.ts:899](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L899)

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

[snarky.d.ts:904](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L904)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:931](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L931)

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

[snarky.d.ts:895](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L895)

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

[snarky.d.ts:923](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L923)

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

[snarky.d.ts:919](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L919)

___

### toJSON

▸ `Static` **toJSON**(`x`): `Object`

Serialize a [Group](Group.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

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

[snarky.d.ts:936](https://github.com/o1-labs/snarkyjs/blob/531db432/src/snarky.d.ts#L936)
