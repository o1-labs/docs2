# Class: Group

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
- [fromJSON](Group.md#fromjson)
- [neg](Group.md#neg-1)
- [ofFields](Group.md#offields)
- [scale](Group.md#scale-1)
- [sizeInFields](Group.md#sizeinfields)
- [sub](Group.md#sub-1)
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

[snarky.d.ts:653](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L653)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:657](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L657)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:639](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L639)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:640](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L640)

___

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:662](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L662)

## Methods

### add

▸ **add**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:642](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L642)

___

### assertEquals

▸ **assertEquals**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:648](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L648)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:649](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L649)

___

### neg

▸ **neg**(): [`Group`](Group.md)

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:644](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L644)

___

### scale

▸ **scale**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:645](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L645)

___

### sub

▸ **sub**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:643](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L643)

___

### toJSON

▸ **toJSON**(): `JSONValue`

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:651](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L651)

___

### add

▸ `Static` **add**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:663](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L663)

___

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:669](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L669)

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

[snarky.d.ts:684](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L684)

___

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:670](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L670)

___

### fromJSON

▸ `Static` **fromJSON**(`__namedParameters`): ``null`` \| [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.x` | `string` \| `number` |
| `__namedParameters.y` | `string` \| `number` |

#### Returns

``null`` \| [`Group`](Group.md)

#### Defined in

[snarky.d.ts:677](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L677)

___

### neg

▸ `Static` **neg**(`x`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:665](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L665)

___

### ofFields

▸ `Static` **ofFields**(`fields`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:673](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L673)

___

### scale

▸ `Static` **scale**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:666](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L666)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:674](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L674)

___

### sub

▸ `Static` **sub**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:664](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L664)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:672](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L672)

___

### toJSON

▸ `Static` **toJSON**(`x`): `JSONValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Group`](Group.md) |

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:676](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L676)
