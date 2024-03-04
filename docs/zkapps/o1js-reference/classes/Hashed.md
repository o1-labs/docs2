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
- [provable](Hashed.md#provable)

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

[lib/provable-types/packed.ts:200](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L200)

## Properties

### hash

• **hash**: [`Field`](Field.md)

#### Defined in

[lib/provable-types/packed.ts:171](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L171)

___

### value

• **value**: [`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:172](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L172)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| `ProvableHashable`\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:238](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L238)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| `ProvableHashable`\<[`Hashed`](Hashed.md)\<`any`\>\>

#### Defined in

[lib/provable-types/packed.ts:237](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L237)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`Hashed`](Hashed.md)

#### Returns

typeof [`Hashed`](Hashed.md)

#### Defined in

[lib/provable-types/packed.ts:240](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L240)

___

### innerProvable

• `Static` `get` **innerProvable**(): `ProvableHashable`\<`any`\>

#### Returns

`ProvableHashable`\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:248](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L248)

___

### provable

• `Static` `get` **provable**(): `ProvableHashable`\<[`Hashed`](Hashed.md)\<`any`\>\>

#### Returns

`ProvableHashable`\<[`Hashed`](Hashed.md)\<`any`\>\>

#### Defined in

[lib/provable-types/packed.ts:244](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L244)

## Methods

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/provable-types/packed.ts:232](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L232)

___

### unhash

▸ **unhash**(): `T`

Unwrap a value from its hashed variant.

#### Returns

`T`

#### Defined in

[lib/provable-types/packed.ts:220](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L220)

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

[lib/provable-types/packed.ts:205](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L205)

___

### create

▸ `Static` **create**\<`T`\>(`type`, `hash?`): typeof [`Hashed`](Hashed.md)

Create a hashed representation of `type`. You can then use `HashedType.hash(x)` to wrap a value in a `Hashed`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ProvableHashable`\<`T`\> |
| `hash?` | (`t`: `T`) => [`Field`](Field.md) |

#### Returns

typeof [`Hashed`](Hashed.md)

#### Defined in

[lib/provable-types/packed.ts:177](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L177)

___

### hash

▸ `Static` **hash**\<`T`\>(`value`): [`Hashed`](Hashed.md)\<`T`\>

Wrap a value, and represent it by its hash in provable code.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Hashed`](Hashed.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:212](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L212)
