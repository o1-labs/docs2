# Class: Scalar

## Table of contents

### Constructors

- [constructor](Scalar.md#constructor)

### Methods

- [add](Scalar.md#add)
- [div](Scalar.md#div)
- [mul](Scalar.md#mul)
- [neg](Scalar.md#neg)
- [sub](Scalar.md#sub)
- [toFields](Scalar.md#tofields)
- [toJSON](Scalar.md#tojson)
- [check](Scalar.md#check)
- [fromJSON](Scalar.md#fromjson)
- [ofBits](Scalar.md#ofbits)
- [ofFields](Scalar.md#offields)
- [random](Scalar.md#random)
- [sizeInFields](Scalar.md#sizeinfields)
- [toFields](Scalar.md#tofields-1)
- [toJSON](Scalar.md#tojson-1)

## Constructors

### constructor

• **new Scalar**()

## Methods

### add

▸ **add**(`y`): [`Scalar`](Scalar.md)

Add scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:598](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L598)

___

### div

▸ **div**(`y`): [`Scalar`](Scalar.md)

Divide scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:616](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L616)

___

### mul

▸ **mul**(`y`): [`Scalar`](Scalar.md)

Multiply scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:610](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L610)

___

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:592](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L592)

___

### sub

▸ **sub**(`y`): [`Scalar`](Scalar.md)

Subtract scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:604](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L604)

___

### toFields

▸ **toFields**(`this`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:586](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L586)

___

### toJSON

▸ **toJSON**(): `JSONValue`

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:618](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L618)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:628](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L628)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): ``null`` \| [`Scalar`](Scalar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `JSONValue` |

#### Returns

``null`` \| [`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:627](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L627)

___

### ofBits

▸ `Static` **ofBits**(`bits`): [`Scalar`](Scalar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | [`Bool`](Bool.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:623](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L623)

___

### ofFields

▸ `Static` **ofFields**(`fields`): [`Scalar`](Scalar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:621](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L621)

___

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:624](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L624)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:622](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L622)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:620](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L620)

___

### toJSON

▸ `Static` **toJSON**(`x`): `JSONValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Scalar`](Scalar.md) |

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:626](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L626)
