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
| `hash` | `Field` |
| `value` | [`Unconstrained`](Unconstrained.md)\<`T`\> |

#### Defined in

[lib/provable/packed.ts:211](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L211)

## Properties

### hash

• **hash**: `Field`

#### Defined in

[lib/provable/packed.ts:175](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L175)

___

### value

• **value**: [`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/provable/packed.ts:176](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L176)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable/packed.ts:258](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L258)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`Hashed`](Hashed.md)\<`any`\>\>

#### Defined in

[lib/provable/packed.ts:257](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L257)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`Hashed`](Hashed.md)

#### Returns

typeof [`Hashed`](Hashed.md)

#### Defined in

[lib/provable/packed.ts:260](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L260)

___

### innerProvable

• `Static` `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable/packed.ts:264](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L264)

## Methods

### toFields

▸ **toFields**(): `Field`[]

#### Returns

`Field`[]

#### Defined in

[lib/provable/packed.ts:252](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L252)

___

### unhash

▸ **unhash**(): `T`

Unwrap a value from its hashed variant.

#### Returns

`T`

#### Defined in

[lib/provable/packed.ts:240](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L240)

___

### \_hash

▸ `Static` **_hash**(`_`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

#### Returns

`Field`

#### Defined in

[lib/provable/packed.ts:216](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L216)

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
| `hash?` | (`t`: `T`) => `Field` |

#### Returns

typeof [`Hashed`](Hashed.md) & \{ `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`Hashed`](Hashed.md)\<`T`\>\>  }

#### Defined in

[lib/provable/packed.ts:181](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L181)

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
| `hash?` | `Field` |

#### Returns

[`Hashed`](Hashed.md)\<`T`\>

#### Defined in

[lib/provable/packed.ts:229](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/packed.ts#L229)
