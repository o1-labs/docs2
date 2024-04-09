[o1js](../README.md) / [Modules](../modules.md) / MerkleList

# Class: MerkleList\<T\>

Dynamic-length list which is represented as a single hash

Supported operations are [()](MerkleList.md#push) and [()](MerkleList.md#pop) and some variants thereof.

A Merkle list is generic over its element types, so before using it you must create a subclass for your element type:

```ts
class MyList extends MerkleList.create(MyType) {}

// now use it
let list = MyList.empty();

list.push(new MyType(...));

let element = list.pop();
```

Internal detail: `push()` adds elements to the _start_ of the internal array and `pop()` removes them from the start.
This is so that the hash which represents the list is consistent with [MerkleListIterator](MerkleListIterator.md),
and so a `MerkleList` can be used as input to `MerkleListIterator.startIterating(list)`
(which will then iterate starting from the last pushed element).

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`MerkleList`**

  ↳ [`AccountUpdateForest`](AccountUpdateForest.md)

## Implements

- `MerkleListBase`\<`T`\>

## Table of contents

### Constructors

- [constructor](MerkleList.md#constructor)

### Properties

- [data](MerkleList.md#data)
- [hash](MerkleList.md#hash)
- [\_emptyHash](MerkleList.md#_emptyhash)
- [\_innerProvable](MerkleList.md#_innerprovable)
- [\_nextHash](MerkleList.md#_nexthash)
- [\_provable](MerkleList.md#_provable)

### Accessors

- [Constructor](MerkleList.md#constructor-1)
- [innerProvable](MerkleList.md#innerprovable)
- [emptyHash](MerkleList.md#emptyhash)

### Methods

- [clone](MerkleList.md#clone)
- [isEmpty](MerkleList.md#isempty)
- [nextHash](MerkleList.md#nexthash)
- [pop](MerkleList.md#pop)
- [popExn](MerkleList.md#popexn)
- [popIf](MerkleList.md#popif)
- [popWitness](MerkleList.md#popwitness)
- [push](MerkleList.md#push)
- [pushIf](MerkleList.md#pushif)
- [startIterating](MerkleList.md#startiterating)
- [create](MerkleList.md#create)

## Constructors

### constructor

• **new MerkleList**\<`T`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MerkleListBase`\<`T`\> |

#### Defined in

[lib/provable/merkle-list.ts:83](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L83)

## Properties

### data

• **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<`T`\>[]\>

#### Implementation of

MerkleListBase.data

#### Defined in

[lib/provable/merkle-list.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L81)

___

### hash

• **hash**: `Field`

#### Implementation of

MerkleListBase.hash

#### Defined in

[lib/provable/merkle-list.ts:80](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L80)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| `Field`

#### Defined in

[lib/provable/merkle-list.ts:258](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L258)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable/merkle-list.ts:261](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L261)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: `Field`, `t`: `any`) => `Field`

#### Defined in

[lib/provable/merkle-list.ts:257](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L257)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`any`\>\>

#### Defined in

[lib/provable/merkle-list.ts:260](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L260)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`MerkleList`](MerkleList.md)

#### Returns

typeof [`MerkleList`](MerkleList.md)

#### Defined in

[lib/provable/merkle-list.ts:263](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L263)

___

### innerProvable

• `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:280](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L280)

___

### emptyHash

• `Static` `get` **emptyHash**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/provable/merkle-list.ts:275](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L275)

## Methods

### clone

▸ **clone**(): [`MerkleList`](MerkleList.md)\<`T`\>

#### Returns

[`MerkleList`](MerkleList.md)\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:188](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L188)

___

### isEmpty

▸ **isEmpty**(): `Bool`

#### Returns

`Bool`

#### Defined in

[lib/provable/merkle-list.ts:88](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L88)

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

[lib/provable/merkle-list.ts:267](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L267)

___

### pop

▸ **pop**(): `T`

Remove the last element from the list and return it.

If the list is empty, returns a dummy element.

#### Returns

`T`

#### Defined in

[lib/provable/merkle-list.ts:153](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L153)

___

### popExn

▸ **popExn**(): `T`

Remove the last element from the list and return it.

This proves that the list is non-empty, and fails otherwise.

#### Returns

`T`

#### Defined in

[lib/provable/merkle-list.ts:138](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L138)

___

### popIf

▸ **popIf**(`condition`): `T`

Return the last element, but only remove it if `condition` is true.

If the list is empty, returns a dummy element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `Bool` |

#### Returns

`T`

#### Defined in

[lib/provable/merkle-list.ts:172](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L172)

___

### popWitness

▸ `Private` **popWitness**(): `WithHash`\<`T`\>

#### Returns

`WithHash`\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:121](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L121)

___

### push

▸ **push**(`element`): `void`

Push a new element to the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-list.ts:95](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L95)

___

### pushIf

▸ **pushIf**(`condition`, `element`): `void`

Push a new element to the list, if the `condition` is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `Bool` |
| `element` | `T` |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-list.ts:107](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L107)

___

### startIterating

▸ **startIterating**(): [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Defined in

[lib/provable/merkle-list.ts:193](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L193)

___

### create

▸ `Static` **create**\<`T`\>(`type`, `nextHash?`, `emptyHash_?`): typeof [`MerkleList`](MerkleList.md) & \{ `empty`: () => [`MerkleList`](MerkleList.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleList`](MerkleList.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`T`\>\>  }

Create a Merkle list type

Optionally, you can tell `create()` how to do the hash that pushes a new list element, by passing a `nextHash` function.

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

typeof [`MerkleList`](MerkleList.md) & \{ `empty`: () => [`MerkleList`](MerkleList.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleList`](MerkleList.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`T`\>\>  }

**`Example`**

```ts
class MyList extends MerkleList.create(Field, (hash, x) =>
  Poseidon.hashWithPrefix('custom', [hash, x])
) {}
```

#### Defined in

[lib/provable/merkle-list.ts:210](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L210)
