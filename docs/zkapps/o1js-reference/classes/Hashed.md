[o1js](../README.md) / [Modules](../modules.md) / Hashed

# Class: Hashed\<T\>

`Hashed<T>` represents a type `T` by its hash.

Since a hash is only a single field element, this can be more efficient in provable code
where the number of constraints depends on the number of field elements per value.

For example, `Provable.if(bool, x, y)` takes O(n) constraints, where n is the number of field
elements in x and y. With Hashed, this is reduced to O(1).

The downside is that you will pay the overhead of hashing your values, so it helps to experiment
in which parts of your code a hashed representation is beneficial.

Usage:

```ts
// define a hashed type from a type
let HashedType = Hashed.create(MyType);

// hash a value
let hashed = HashedType.hash(value);

// ... operations on hashes, more efficient than on plain values ...

// unhash to get the original value
let value = hashed.unhash();
```

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Hashed.md#constructor)

### Properties

- [hash](Hashed.md#hash)
- [value](Hashed.md#value)
- [\_innerProvable](Hashed.md#_innerprovable)
- [\_provable](Hashed.md#_provable)

### Accessors

- [Constructor](Hashed.md#constructor-1)
- [innerProvable](Hashed.md#innerprovable)

### Methods

- [toFields](Hashed.md#tofields)
- [unhash](Hashed.md#unhash)
- [\_hash](Hashed.md#_hash)
- [create](Hashed.md#create)
- [hash](Hashed.md#hash-1)

## Constructors

### constructor

• **new Hashed**\<`T`\>(`hash`, `value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | [`Field`](Field.md) |
| `value` | [`Unconstrained`](Unconstrained.md)\<`T`\> |

#### Defined in

[lib/provable-types/packed.ts:214](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L214)

## Properties

### hash

• **hash**: [`Field`](Field.md)

#### Defined in

[lib/provable-types/packed.ts:178](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L178)

___

### value

• **value**: [`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:179](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L179)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:261](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L261)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`Hashed`](Hashed.md)\<`any`\>\>

#### Defined in

[lib/provable-types/packed.ts:260](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L260)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`Hashed`](Hashed.md)

#### Returns

typeof [`Hashed`](Hashed.md)

#### Defined in

[lib/provable-types/packed.ts:263](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L263)

___

### innerProvable

• `Static` `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:267](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L267)

## Methods

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/provable-types/packed.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L255)

___

### unhash

▸ **unhash**(): `T`

Unwrap a value from its hashed variant.

#### Returns

`T`

#### Defined in

[lib/provable-types/packed.ts:243](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L243)

___

### \_hash

▸ `Static` **_hash**(`_`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/provable-types/packed.ts:219](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L219)

___

### create

▸ `Static` **create**\<`T`\>(`type`, `hash?`): typeof [`Hashed`](Hashed.md) & \{ `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`Hashed`](Hashed.md)\<`T`\>\>  }

Create a hashed representation of `type`. You can then use `HashedType.hash(x)` to wrap a value in a `Hashed`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ProvableHashable`](../modules.md#provablehashable)\<`T`\> |
| `hash?` | (`t`: `T`) => [`Field`](Field.md) |

#### Returns

typeof [`Hashed`](Hashed.md) & \{ `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`Hashed`](Hashed.md)\<`T`\>\>  }

#### Defined in

[lib/provable-types/packed.ts:184](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L184)

___

### hash

▸ `Static` **hash**\<`T`\>(`value`, `hash?`): [`Hashed`](Hashed.md)\<`T`\>

Wrap a value, and represent it by its hash in provable code.

```ts
let hashed = HashedType.hash(value);
```

Optionally, if you already have the hash, you can pass it in and avoid recomputing it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `hash?` | [`Field`](Field.md) |

#### Returns

[`Hashed`](Hashed.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:232](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/packed.ts#L232)
