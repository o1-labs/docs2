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

- [#isConstant](Group.md##isconstant)
- [#toProjective](Group.md##toprojective)
- [#toTuple](Group.md##totuple)
- [add](Group.md#add)
- [assertEquals](Group.md#assertequals)
- [equals](Group.md#equals)
- [isZero](Group.md#iszero)
- [neg](Group.md#neg)
- [scale](Group.md#scale)
- [sub](Group.md#sub)
- [toFields](Group.md#tofields)
- [toJSON](Group.md#tojson)
- [#fromAffine](Group.md##fromaffine)
- [#fromProjective](Group.md##fromprojective)
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

[lib/group.ts:47](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L47)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:15](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L15)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:16](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L16)

## Accessors

### generator

• `Static` `get` **generator**(): [`Group`](Group.md)

The generator `g` of the Group.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:21](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L21)

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

[lib/group.ts:37](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L37)

## Methods

### #isConstant

▸ `Private` **#isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/group.ts:99](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L99)

___

### #toProjective

▸ `Private` **#toProjective**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |
| `y` | `bigint` |
| `z` | `bigint` |

#### Defined in

[lib/group.ts:103](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L103)

___

### #toTuple

▸ `Private` **#toTuple**(): [``0``, [`FieldVar`](../modules.md#fieldvar-1), [`FieldVar`](../modules.md#fieldvar-1)]

#### Returns

[``0``, [`FieldVar`](../modules.md#fieldvar-1), [`FieldVar`](../modules.md#fieldvar-1)]

#### Defined in

[lib/group.ts:95](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L95)

___

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

[lib/group.ts:127](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L127)

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

[lib/group.ts:261](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L261)

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

[lib/group.ts:277](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L277)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

Checks if this element is the `zero` element `{x: 0, y: 0}`.

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/group.ts:114](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L114)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md). Under the hood, it simply negates the `y` coordinate and leaves the `x` coordinate as is.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:225](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L225)

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

[lib/group.ts:239](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L239)

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

[lib/group.ts:218](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L218)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Part of the [Provable](../modules.md#provable-1) interface.

Returns an array containing this [Group](Group.md) element as an array of [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/group.ts:304](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L304)

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

[lib/group.ts:289](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L289)

___

### #fromAffine

▸ `Static` `Private` **#fromAffine**(`«destructured»`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infinity` | `boolean` |
| › `x` | `bigint` |
| › `y` | `bigint` |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:79](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L79)

___

### #fromProjective

▸ `Static` `Private` **#fromProjective**(`«destructured»`): [`Group`](Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `x` | `bigint` |
| › `y` | `bigint` |
| › `z` | `bigint` |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:91](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L91)

___

### add

▸ `Static` **add**(`g1`, `g2`): [`Group`](Group.md)

**`Deprecated`**

Please use the method `.add` on the instance instead

Adds a [Group](Group.md) element to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:323](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L323)

___

### assertEqual

▸ `Static` **assertEqual**(`g1`, `g2`): `void`

**`Deprecated`**

Please use the method `.assertEqual` on the instance instead.

Assert that two [Group](Group.md) elements are equal to another.
Throws an error if the assertion fails.

```ts
Group.assertEquals(g1, g2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[lib/group.ts:373](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L373)

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

[lib/group.ts:454](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L454)

___

### equal

▸ `Static` **equal**(`g1`, `g2`): [`Bool`](Bool.md)

**`Deprecated`**

Please use the method `.equals` on the instance instead.

Checks if a [Group](Group.md) element is equal to another [Group](Group.md) element.
Returns a [Bool](Bool.md).

```ts
Group.equal(g1, g2); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/group.ts:387](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L387)

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

[lib/group.ts:311](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L311)

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

[lib/group.ts:414](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L414)

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

[lib/group.ts:441](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L441)

___

### neg

▸ `Static` **neg**(`g`): [`Group`](Group.md)

**`Deprecated`**

Please use the method `.neg` on the instance instead

Negates a [Group](Group.md) element. Under the hood, it simply negates the `y` coordinate and leaves the `x` coordinate as is.

```typescript
let gNeg = Group.neg(g);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:345](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L345)

___

### scale

▸ `Static` **scale**(`g`, `s`): [`Group`](Group.md)

**`Deprecated`**

Please use the method `.scale` on the instance instead

Elliptic curve scalar multiplication. Scales a [Group](Group.md) element `n`-times by itself, where `n` is the [Scalar](Scalar.md).

```typescript
let s = Scalar(5);
let 5g = Group.scale(g, s);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |
| `s` | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:359](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L359)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Part of the [Provable](../modules.md#provable-1) interface.

Returns 2.

#### Returns

`number`

#### Defined in

[lib/group.ts:423](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L423)

___

### sub

▸ `Static` **sub**(`g1`, `g2`): [`Group`](Group.md)

**`Deprecated`**

Please use the method `.sub` on the instance instead

Subtracts a [Group](Group.md) element from another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g1` | [`Group`](Group.md) |
| `g2` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:332](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L332)

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

[lib/group.ts:405](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L405)

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

[lib/group.ts:396](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L396)

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

[lib/group.ts:432](https://github.com/o1-labs/o1js/blob/fec4d35f/src/lib/group.ts#L432)
