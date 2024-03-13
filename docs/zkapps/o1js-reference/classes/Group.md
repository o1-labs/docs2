[o1js](../README.md) / [Modules](../modules.md) / Group

# Class: Group

An element of a Group.

## Table of contents

### Constructors

- [constructor](Group.md#constructor)

### Properties

- [x](Group.md#x)
- [y](Group.md#y)

### Accessors

- [generator](Group.md#generator)
- [zero](Group.md#zero)

### Methods

- [add](Group.md#add)
- [assertEquals](Group.md#assertequals)
- [equals](Group.md#equals)
- [isZero](Group.md#iszero)
- [neg](Group.md#neg)
- [scale](Group.md#scale)
- [sub](Group.md#sub)
- [toFields](Group.md#tofields)
- [toJSON](Group.md#tojson)
- [add](Group.md#add-1)
- [assertEqual](Group.md#assertequal)
- [check](Group.md#check)
- [equal](Group.md#equal)
- [from](Group.md#from)
- [fromFields](Group.md#fromfields)
- [fromJSON](Group.md#fromjson)
- [neg](Group.md#neg-1)
- [scale](Group.md#scale-1)
- [sizeInFields](Group.md#sizeinfields)
- [sub](Group.md#sub-1)
- [toAuxiliary](Group.md#toauxiliary)
- [toFields](Group.md#tofields-1)
- [toJSON](Group.md#tojson-1)

## Constructors

### constructor

• **new Group**(`«destructured»`)

Coerces anything group-like to a [Group](Group.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |
| › `y` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |

#### Defined in

[lib/group.ts:44](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L44)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:15](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L15)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:16](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L16)

## Accessors

### generator

• `Static` `get` **generator**(): [`Group`](Group.md)

The generator `g` of the Group.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:21](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L21)

___

### zero

• `Static` `get` **zero**(): [`Group`](Group.md)

Unique representation of the `zero` element of the Group (the identity element of addition in this Group).

**Note**: The `zero` element is represented as `(0, 0)`.

```typescript
// g + -g = 0
g.add(g.neg()).assertEquals(zero);
// g + 0 = g
g.add(zero).assertEquals(g);
```

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:37](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L37)

## Methods

### add

▸ **add**(`g`): [`Group`](Group.md)

Adds this [Group](Group.md) element to another [Group](Group.md) element.

```ts
let g1 = Group({ x: -1, y: 2})
let g2 = g1.add(g1)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:91](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L91)

___

### assertEquals

▸ **assertEquals**(`g`, `message?`): `void`

Assert that this [Group](Group.md) element equals another [Group](Group.md) element.
Throws an error if the assertion fails.

```ts
g1.assertEquals(g2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/group.ts:213](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L213)

___

### equals

▸ **equals**(`g`): [`Bool`](Bool.md)

Check if this [Group](Group.md) element equals another [Group](Group.md) element.
Returns a [Bool](Bool.md).

```ts
g1.equals(g1); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/group.ts:229](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L229)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

Checks if this element is the `zero` element `{x: 0, y: 0}`.

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/group.ts:78](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L78)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md). Under the hood, it simply negates the `y` coordinate and leaves the `x` coordinate as is.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:177](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L177)

___

### scale

▸ **scale**(`s`): [`Group`](Group.md)

Elliptic curve scalar multiplication. Scales the [Group](Group.md) element `n`-times by itself, where `n` is the [Scalar](Scalar.md).

```typescript
let s = Scalar(5);
let 5g = g.scale(s);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` \| `bigint` \| [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:191](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L191)

___

### sub

▸ **sub**(`g`): [`Group`](Group.md)

Subtracts another [Group](Group.md) element from this one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:170](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L170)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Part of the [Provable](../modules.md#provable-1) interface.

Returns an array containing this [Group](Group.md) element as an array of [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/group.ts:256](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L256)

___

### toJSON

▸ **toJSON**(): `Object`

Serializes this [Group](Group.md) element to a JSON object.

This operation does NOT affect the circuit and can't be used to prove anything about the representation of the element.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `string` |
| `y` | `string` |

#### Defined in

[lib/group.ts:241](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L241)

___

### add

▸ `Static` **add**(`g1`, `g2`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

**`Deprecated`**

Please use the method `.add` on the instance instead

Adds a [Group](Group.md) element to another one.

#### Defined in

[lib/group.ts:275](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L275)

___

### assertEqual

▸ `Static` **assertEqual**(`g1`, `g2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

`void`

**`Deprecated`**

Please use the method `.assertEqual` on the instance instead.

Assert that two [Group](Group.md) elements are equal to another.
Throws an error if the assertion fails.

```ts
Group.assertEquals(g1, g2);
```

#### Defined in

[lib/group.ts:325](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L325)

___

### check

▸ `Static` **check**(`g`): `unknown`

Checks that a [Group](Group.md) element is constraint properly by checking that the element is on the curve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

`unknown`

#### Defined in

[lib/group.ts:406](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L406)

___

### equal

▸ `Static` **equal**(`g1`, `g2`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

**`Deprecated`**

Please use the method `.equals` on the instance instead.

Checks if a [Group](Group.md) element is equal to another [Group](Group.md) element.
Returns a [Bool](Bool.md).

```ts
Group.equal(g1, g2); // Bool(true)
```

#### Defined in

[lib/group.ts:339](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L339)

___

### from

▸ `Static` **from**(`x`, `y`): [`Group`](Group.md)

Coerces two x and y coordinates into a [Group](Group.md) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |
| `y` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:263](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L263)

___

### fromFields

▸ `Static` **fromFields**(`«destructured»`): [`Group`](Group.md)

Part of the [Provable](../modules.md#provable-1) interface.

Deserializes a [Group](Group.md) element from a list of field elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Field`](Field.md)[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:366](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L366)

___

### fromJSON

▸ `Static` **fromJSON**(`«destructured»`): [`Group`](Group.md)

Deserializes a JSON-like structure to a [Group](Group.md) element.

This operation does NOT affect the circuit and can't be used to prove anything about the representation of the element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |
| › `y` | `string` \| `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:393](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L393)

___

### neg

▸ `Static` **neg**(`g`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

**`Deprecated`**

Please use the method `.neg` on the instance instead

Negates a [Group](Group.md) element. Under the hood, it simply negates the `y` coordinate and leaves the `x` coordinate as is.

```typescript
let gNeg = Group.neg(g);
```

#### Defined in

[lib/group.ts:297](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L297)

___

### scale

▸ `Static` **scale**(`g`, `s`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |
| `s` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

**`Deprecated`**

Please use the method `.scale` on the instance instead

Elliptic curve scalar multiplication. Scales a [Group](Group.md) element `n`-times by itself, where `n` is the [Scalar](Scalar.md).

```typescript
let s = Scalar(5);
let 5g = Group.scale(g, s);
```

#### Defined in

[lib/group.ts:311](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L311)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Part of the [Provable](../modules.md#provable-1) interface.

Returns 2.

#### Returns

`number`

#### Defined in

[lib/group.ts:375](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L375)

___

### sub

▸ `Static` **sub**(`g1`, `g2`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

**`Deprecated`**

Please use the method `.sub` on the instance instead

Subtracts a [Group](Group.md) element from another one.

#### Defined in

[lib/group.ts:284](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L284)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`g?`): `never`[]

Part of the [Provable](../modules.md#provable-1) interface.

Returns an empty array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g?` | [`Group`](Group.md) |

#### Returns

`never`[]

#### Defined in

[lib/group.ts:357](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L357)

___

### toFields

▸ `Static` **toFields**(`g`): [`Field`](Field.md)[]

Part of the [Provable](../modules.md#provable-1) interface.

Returns an array containing a [Group](Group.md) element as an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/group.ts:348](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L348)

___

### toJSON

▸ `Static` **toJSON**(`g`): `Object`

Serializes a [Group](Group.md) element to a JSON object.

This operation does NOT affect the circuit and can't be used to prove anything about the representation of the element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `string` |
| `y` | `string` |

#### Defined in

[lib/group.ts:384](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/group.ts#L384)
