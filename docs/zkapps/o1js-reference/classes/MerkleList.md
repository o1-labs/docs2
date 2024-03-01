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

[lib/provable-types/merkle-list.ts:82](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L82)

## Properties

### data

• **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<`T`\>[]\>

#### Implementation of

MerkleListBase.data

#### Defined in

[lib/provable-types/merkle-list.ts:80](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L80)

___

### hash

• **hash**: [`Field`](Field.md)

#### Implementation of

MerkleListBase.hash

#### Defined in

[lib/provable-types/merkle-list.ts:79](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L79)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| [`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:257](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L257)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Defined in

[lib/provable-types/merkle-list.ts:260](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L260)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: [`Field`](Field.md), `t`: `any`) => [`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:256](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L256)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`any`\>\>

#### Defined in

[lib/provable-types/merkle-list.ts:259](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L259)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`MerkleList`](MerkleList.md)

#### Returns

typeof [`MerkleList`](MerkleList.md)

#### Defined in

[lib/provable-types/merkle-list.ts:262](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L262)

___

### innerProvable

• `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:279](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L279)

___

### emptyHash

• `Static` `get` **emptyHash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/provable-types/merkle-list.ts:274](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L274)

## Methods

### clone

▸ **clone**(): [`MerkleList`](MerkleList.md)\<`T`\>

#### Returns

[`MerkleList`](MerkleList.md)\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:187](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L187)

___

### isEmpty

▸ **isEmpty**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/provable-types/merkle-list.ts:87](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L87)

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

[lib/provable-types/merkle-list.ts:266](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L266)

___

### pop

▸ **pop**(): `T`

Remove the last element from the list and return it.

If the list is empty, returns a dummy element.

#### Returns

`T`

#### Defined in

[lib/provable-types/merkle-list.ts:152](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L152)

___

### popExn

▸ **popExn**(): `T`

Remove the last element from the list and return it.

This proves that the list is non-empty, and fails otherwise.

#### Returns

`T`

#### Defined in

[lib/provable-types/merkle-list.ts:137](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L137)

___

### popIf

▸ **popIf**(`condition`): `T`

Return the last element, but only remove it if `condition` is true.

If the list is empty, returns a dummy element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |

#### Returns

`T`

#### Defined in

[lib/provable-types/merkle-list.ts:171](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L171)

___

### popWitness

▸ `Private` **popWitness**(): `WithHash`\<`T`\>

#### Returns

`WithHash`\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:120](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L120)

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

[lib/provable-types/merkle-list.ts:94](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L94)

___

### pushIf

▸ **pushIf**(`condition`, `element`): `void`

Push a new element to the list, if the `condition` is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |
| `element` | `T` |

#### Returns

`void`

#### Defined in

[lib/provable-types/merkle-list.ts:106](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L106)

___

### startIterating

▸ **startIterating**(): [`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<`T`\>

#### Defined in

[lib/provable-types/merkle-list.ts:192](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L192)

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
| `nextHash` | (`hash`: [`Field`](Field.md), `value`: `T`) => [`Field`](Field.md) | `undefined` |
| `emptyHash_` | [`Field`](Field.md) | `emptyHash` |

#### Returns

typeof [`MerkleList`](MerkleList.md) & \{ `empty`: () => [`MerkleList`](MerkleList.md)\<`T`\> ; `from`: (`array`: `T`[]) => [`MerkleList`](MerkleList.md)\<`T`\> ; `provable`: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`T`\>\>  }

**`Example`**

```ts
class MyList extends MerkleList.create(Field, (hash, x) =>
  Poseidon.hashWithPrefix('custom', [hash, x])
) {}
```

#### Defined in

[lib/provable-types/merkle-list.ts:209](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/merkle-list.ts#L209)
