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

[lib/provable/merkle-list.ts:334](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L334)

## Properties

### currentHash

• **currentHash**: `Field`

#### Implementation of

MerkleListIteratorBase.currentHash

#### Defined in

[lib/provable/merkle-list.ts:331](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L331)

___

### currentIndex

• **currentIndex**: [`Unconstrained`](Unconstrained.md)\<`number`\>

#### Implementation of

MerkleListIteratorBase.currentIndex

#### Defined in

[lib/provable/merkle-list.ts:332](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L332)

___

### data

• `Readonly` **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<`T`\>[]\>

#### Implementation of

MerkleListIteratorBase.data

#### Defined in

[lib/provable/merkle-list.ts:327](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L327)

___

### hash

• `Readonly` **hash**: `Field`

#### Implementation of

MerkleListIteratorBase.hash

#### Defined in

[lib/provable/merkle-list.ts:328](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L328)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| `Field`

#### Defined in

[lib/provable/merkle-list.ts:477](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L477)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable/merkle-list.ts:480](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L480)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: `Field`, `value`: `any`) => `Field`

#### Defined in

[lib/provable/merkle-list.ts:476](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L476)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`any`\>\>

#### Defined in

[lib/provable/merkle-list.ts:479](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L479)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`MerkleListIterator`](MerkleListIterator.md)

#### Returns

typeof [`MerkleListIterator`](MerkleListIterator.md)

#### Defined in

[lib/provable/merkle-list.ts:482](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L482)

___

### innerProvable

• `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:499](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L499)

___

### emptyHash

• `Static` `get` **emptyHash**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/provable/merkle-list.ts:494](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L494)

## Methods

### assertAtStart

▸ **assertAtStart**(): `void`

#### Returns

`void`

#### Defined in

[lib/provable/merkle-list.ts:338](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L338)

___

### clone

▸ **clone**(): [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:395](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L395)

___

### isAtEnd

▸ **isAtEnd**(): `Bool`

#### Returns

`Bool`

#### Defined in

[lib/provable/merkle-list.ts:342](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L342)

___

### jumpToEnd

▸ **jumpToEnd**(): `void`

#### Returns

`void`

#### Defined in

[lib/provable/merkle-list.ts:345](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L345)

___

### jumpToEndIf

▸ **jumpToEndIf**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `Bool` |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-list.ts:351](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L351)

___

### next

▸ **next**(): `T`

#### Returns

`T`

#### Defined in

[lib/provable/merkle-list.ts:364](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L364)

___

### nextHash

▸ **nextHash**(`hash`, `value`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Field` |
| `value` | `T` |

#### Returns

`Field`

#### Defined in

[lib/provable/merkle-list.ts:486](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L486)

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
| `nextHash` | (`hash`: `Field`, `value`: `T`) => `Field` | `undefined` |
| `emptyHash_` | `Field` | `emptyHash` |

#### Returns

typeof [`MerkleListIterator`](MerkleListIterator.md) & \{ `empty`: () => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>\> ; `startIterating`: (`list`: `MerkleListBase`\<`T`\>) => [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>  }

#### Defined in

[lib/provable/merkle-list.ts:409](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L409)

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

[lib/provable/merkle-list.ts:468](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L468)
