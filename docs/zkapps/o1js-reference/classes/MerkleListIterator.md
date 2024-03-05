[o1js](../README.md) / [Modules](../modules.md) / MerkleListIterator

# Class: MerkleListIterator\<T\>

MerkleListIterator helps iterating through a Merkle list.
This works similar to calling `list.pop()` repeatedly, but maintaining the entire list instead of removing elements.

The core method that supports iteration is [()](MerkleListIterator.md#next).

```ts
let iterator = MerkleListIterator.startIterating(list);

let firstElement = iterator.next();
```

We maintain two commitments, both of which are equivalent to a Merkle list hash starting _from the end_ of the array:
- One to the entire array, to prove that we start iterating at the beginning.
- One to the array from the current index until the end, to efficiently step forward.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `MerkleListIteratorBase`\<`T`\>

## Table of contents

### Constructors

- [constructor](MerkleListIterator.md#constructor)

### Properties

- [currentHash](MerkleListIterator.md#currenthash)
- [currentIndex](MerkleListIterator.md#currentindex)
- [data](MerkleListIterator.md#data)
- [hash](MerkleListIterator.md#hash)
- [\_emptyHash](MerkleListIterator.md#_emptyhash)
- [\_innerProvable](MerkleListIterator.md#_innerprovable)
- [\_nextHash](MerkleListIterator.md#_nexthash)
- [\_provable](MerkleListIterator.md#_provable)

### Accessors

- [Constructor](MerkleListIterator.md#constructor-1)
- [innerProvable](MerkleListIterator.md#innerprovable)
- [emptyHash](MerkleListIterator.md#emptyhash)

### Methods

- [assertAtStart](MerkleListIterator.md#assertatstart)
- [clone](MerkleListIterator.md#clone)
- [isAtEnd](MerkleListIterator.md#isatend)
- [jumpToEnd](MerkleListIterator.md#jumptoend)
- [jumpToEndIf](MerkleListIterator.md#jumptoendif)
- [next](MerkleListIterator.md#next)
- [nextHash](MerkleListIterator.md#nexthash)
- [create](MerkleListIterator.md#create)
- [createFromList](MerkleListIterator.md#createfromlist)

## Constructors

### constructor

• **new MerkleListIterator**\<`T`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MerkleListIteratorBase`\<`T`\> |

#### Defined in

[lib/provable-types/merkle-list.ts:333](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L333)

## Properties

### currentHash

• **currentHash**: [`Field`](Field.md)

#### Implementation of

MerkleListIteratorBase.currentHash

#### Defined in

[lib/provable-types/merkle-list.ts:330](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L330)

___

### currentIndex

• **currentIndex**: [`Unconstrained`](Unconstrained.md)\<`number`\>

#### Implementation of

MerkleListIteratorBase.currentIndex

#### Defined in

[lib/provable-types/merkle-list.ts:331](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L331)

___

### data

• `Readonly` **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<`T`\>[]\>

#### Implementation of

MerkleListIteratorBase.data

#### Defined in

[lib/provable-types/merkle-list.ts:326](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L326)

___

### hash

• `Readonly` **hash**: [`Field`](Field.md)

#### Implementation of

MerkleListIteratorBase.hash

#### Defined in

[lib/provable-types/merkle-list.ts:327](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L327)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| [`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:476](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L476)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable-types/merkle-list.ts:479](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L479)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: [`Field`](Field.md), `value`: `any`) => [`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:475](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L475)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`any`\>\>

#### Defined in

[lib/provable-types/merkle-list.ts:478](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L478)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`MerkleListIterator`](MerkleListIterator.md)

#### Returns

typeof [`MerkleListIterator`](MerkleListIterator.md)

#### Defined in

[lib/provable-types/merkle-list.ts:481](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L481)

___

### innerProvable

• `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:498](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L498)

___

### emptyHash

• `Static` `get` **emptyHash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:493](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L493)

## Methods

### assertAtStart

▸ **assertAtStart**(): `void`

#### Returns

`void`

#### Defined in

[lib/provable-types/merkle-list.ts:337](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L337)

___

### clone

▸ **clone**(): [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:394](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L394)

___

### isAtEnd

▸ **isAtEnd**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/provable-types/merkle-list.ts:341](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L341)

___

### jumpToEnd

▸ **jumpToEnd**(): `void`

#### Returns

`void`

#### Defined in

[lib/provable-types/merkle-list.ts:344](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L344)

___

### jumpToEndIf

▸ **jumpToEndIf**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[lib/provable-types/merkle-list.ts:350](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L350)

___

### next

▸ **next**(): `T`

#### Returns

`T`

#### Defined in

[lib/provable-types/merkle-list.ts:363](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L363)

___

### nextHash

▸ **nextHash**(`hash`, `value`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | [`Field`](Field.md) |
| `value` | `T` |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:485](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L485)

___

### create

▸ `Static` **create**\<`T`\>(`type`, `nextHash?`, `emptyHash_?`): typeof [`MerkleListIterator`](MerkleListIterator.md) & \{ `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\> ; `startIterating`: (`list`: `MerkleListBase`\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>  }

Create a Merkle array type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`ProvableHashable`](../modules.md#provablehashable)\<`T`\> | `undefined` |
| `nextHash` | (`hash`: [`Field`](Field.md), `value`: `T`) => [`Field`](Field.md) | `undefined` |
| `emptyHash_` | [`Field`](Field.md) | `emptyHash` |

#### Returns

typeof [`MerkleListIterator`](MerkleListIterator.md) & \{ `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\> ; `startIterating`: (`list`: `MerkleListBase`\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>  }

#### Defined in

[lib/provable-types/merkle-list.ts:408](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L408)

___

### createFromList

▸ `Static` **createFromList**\<`T`\>(`merkleList`): typeof [`MerkleListIterator`](MerkleListIterator.md) & \{ `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\> ; `startIterating`: (`list`: `MerkleListBase`\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `merkleList` | typeof [`MerkleList`](MerkleList.md) |

#### Returns

typeof [`MerkleListIterator`](MerkleListIterator.md) & \{ `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\> ; `startIterating`: (`list`: `MerkleListBase`\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>  }

#### Defined in

[lib/provable-types/merkle-list.ts:467](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L467)
