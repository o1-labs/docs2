[SnarkyJS](../README.md) / [Modules](../modules.md) / Group

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

### Methods

- [#isConstant](Group.md##isconstant)
- [#toProjective](Group.md##toprojective)
- [#toTuple](Group.md##totuple)
- [add](Group.md#add)
- [assertEquals](Group.md#assertequals)
- [equals](Group.md#equals)
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

[lib/group.ts:27](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L27)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:14](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L14)

___

### y

• **y**: [`Field`](Field.md)

#### Defined in

[lib/group.ts:15](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L15)

## Accessors

### generator

• `Static` `get` **generator**(): [`Group`](Group.md)

The generator `g` of the Group.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:20](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L20)

## Methods

### #isConstant

▸ `Private` **#isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/group.ts:68](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L68)

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

[lib/group.ts:72](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L72)

___

### #toTuple

▸ `Private` **#toTuple**(): [``0``, [`FieldVar`](../modules.md#fieldvar-1), [`FieldVar`](../modules.md#fieldvar-1)]

#### Returns

[``0``, [`FieldVar`](../modules.md#fieldvar-1), [`FieldVar`](../modules.md#fieldvar-1)]

#### Defined in

[lib/group.ts:64](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L64)

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

[lib/group.ts:88](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L88)

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

[lib/group.ts:149](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L149)

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

[lib/group.ts:165](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L165)

___

### neg

▸ **neg**(): [`Group`](Group.md)

Negates this [Group](Group.md). Under the hood, it simply negates the `y` coordinate and leaves the `x` coordinate as is.

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:114](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L114)

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

[lib/group.ts:127](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L127)

___

### sub

▸ **sub**(`y`): [`Group`](Group.md)

Subtracts another [Group](Group.md) element from this one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:107](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L107)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Part of the [Provable](../interfaces/Provable.md) interface.

Returns an array containing this [Group](Group.md) element as an array of [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/group.ts:197](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L197)

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

[lib/group.ts:182](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L182)

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

[lib/group.ts:56](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L56)

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

[lib/group.ts:60](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L60)

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

[lib/group.ts:216](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L216)

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

[lib/group.ts:266](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L266)

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

[lib/group.ts:347](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L347)

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

[lib/group.ts:280](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L280)

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

[lib/group.ts:204](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L204)

___

### fromFields

▸ `Static` **fromFields**(`«destructured»`): [`Group`](Group.md)

Part of the [Provable](../interfaces/Provable.md) interface.

Deserializes a [Group](Group.md) element from a list of field elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Field`](Field.md)[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/group.ts:307](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L307)

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

[lib/group.ts:334](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L334)

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

[lib/group.ts:238](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L238)

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

[lib/group.ts:252](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L252)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Part of the [Provable](../interfaces/Provable.md) interface.

Returns 2.

#### Returns

`number`

#### Defined in

[lib/group.ts:316](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L316)

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

[lib/group.ts:225](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L225)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`g?`): `never`[]

Part of the [Provable](../interfaces/Provable.md) interface.

Returns an empty array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g?` | [`Group`](Group.md) |

#### Returns

`never`[]

#### Defined in

[lib/group.ts:298](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L298)

___

### toFields

▸ `Static` **toFields**(`g`): [`Field`](Field.md)[]

Part of the [Provable](../interfaces/Provable.md) interface.

Returns an array containing a [Group](Group.md) element as an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Group`](Group.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/group.ts:289](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L289)

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

[lib/group.ts:325](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/lib/group.ts#L325)
