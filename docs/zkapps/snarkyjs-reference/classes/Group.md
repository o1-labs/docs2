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

[snarky.d.ts:884](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L884)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:888](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L888)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:845](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L845)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:846](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L846)

___

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:893](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L893)

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

[snarky.d.ts:851](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L851)

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

[snarky.d.ts:872](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L872)

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

[snarky.d.ts:877](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L877)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md) elements and returns a new instance.

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:861](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L861)

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

[snarky.d.ts:866](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L866)

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

[snarky.d.ts:856](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L856)

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

[snarky.d.ts:882](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L882)

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

[snarky.d.ts:897](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L897)

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

[snarky.d.ts:916](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L916)

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

[snarky.d.ts:954](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L954)

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

[snarky.d.ts:921](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L921)

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

[snarky.d.ts:933](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L933)

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

[snarky.d.ts:947](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L947)

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

[snarky.d.ts:905](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L905)

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

[snarky.d.ts:910](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L910)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:937](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L937)

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

[snarky.d.ts:901](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L901)

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

[snarky.d.ts:929](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L929)

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

[snarky.d.ts:925](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L925)

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

[snarky.d.ts:942](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L942)
