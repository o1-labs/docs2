[o1js](../README.md) / [Modules](../modules.md) / AccountUpdateForest

# Class: AccountUpdateForest

Class which represents a forest (list of trees) of account updates,
in a compressed way which allows iterating and selectively witnessing the account updates.

The (recursive) type signature is:
```
type AccountUpdateForest = MerkleList<AccountUpdateTree>;
type AccountUpdateTree = {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
};
```

## Hierarchy

- [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }, `this`\>

  ↳ **`AccountUpdateForest`**

## Table of contents

### Constructors

- [constructor](AccountUpdateForest.md#constructor)

### Properties

- [data](AccountUpdateForest.md#data)
- [hash](AccountUpdateForest.md#hash)
- [\_emptyHash](AccountUpdateForest.md#_emptyhash)
- [\_innerProvable](AccountUpdateForest.md#_innerprovable)
- [\_nextHash](AccountUpdateForest.md#_nexthash)
- [\_provable](AccountUpdateForest.md#_provable)
- [empty](AccountUpdateForest.md#empty)
- [from](AccountUpdateForest.md#from)
- [provable](AccountUpdateForest.md#provable)

### Accessors

- [Constructor](AccountUpdateForest.md#constructor-1)
- [innerProvable](AccountUpdateForest.md#innerprovable)
- [emptyHash](AccountUpdateForest.md#emptyhash)

### Methods

- [clone](AccountUpdateForest.md#clone)
- [isEmpty](AccountUpdateForest.md#isempty)
- [nextHash](AccountUpdateForest.md#nexthash)
- [pop](AccountUpdateForest.md#pop)
- [popExn](AccountUpdateForest.md#popexn)
- [popIf](AccountUpdateForest.md#popif)
- [push](AccountUpdateForest.md#push)
- [pushIf](AccountUpdateForest.md#pushif)
- [startIterating](AccountUpdateForest.md#startiterating)
- [assertConstant](AccountUpdateForest.md#assertconstant)
- [create](AccountUpdateForest.md#create)
- [fromFlatArray](AccountUpdateForest.md#fromflatarray)
- [fromSimpleForest](AccountUpdateForest.md#fromsimpleforest)
- [toFlatArray](AccountUpdateForest.md#toflatarray)

## Constructors

### constructor

• **new AccountUpdateForest**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MerkleListBase`\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\> |

#### Inherited from

[MerkleList](MerkleList.md).[constructor](MerkleList.md#constructor)

#### Defined in

[lib/provable-types/merkle-list.ts:82](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L82)

## Properties

### data

• **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>[]\>

#### Inherited from

[MerkleList](MerkleList.md).[data](MerkleList.md#data)

#### Defined in

[lib/provable-types/merkle-list.ts:80](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L80)

___

### hash

• **hash**: [`Field`](Field.md)

#### Inherited from

[MerkleList](MerkleList.md).[hash](MerkleList.md#hash)

#### Defined in

[lib/provable-types/merkle-list.ts:79](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L79)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| [`Field`](Field.md)

#### Inherited from

[MerkleList](MerkleList.md).[_emptyHash](MerkleList.md#_emptyhash)

#### Defined in

[lib/provable-types/merkle-list.ts:257](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L257)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Inherited from

[MerkleList](MerkleList.md).[_innerProvable](MerkleList.md#_innerprovable)

#### Defined in

[lib/provable-types/merkle-list.ts:260](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L260)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: [`Field`](Field.md), `t`: `any`) => [`Field`](Field.md)

#### Inherited from

[MerkleList](MerkleList.md).[_nextHash](MerkleList.md#_nexthash)

#### Defined in

[lib/provable-types/merkle-list.ts:256](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L256)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`any`\>\>

#### Inherited from

[MerkleList](MerkleList.md).[_provable](MerkleList.md#_provable)

#### Defined in

[lib/provable-types/merkle-list.ts:259](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L259)

___

### empty

▪ `Static` **empty**: () => [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Type declaration

▸ (): [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

##### Returns

[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).empty

#### Defined in

[lib/provable-types/merkle-list.ts:215](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L215)

___

### from

▪ `Static` **from**: (`array`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }[]) => [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Type declaration

▸ (`array`): [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `array` | \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }[] |

##### Returns

[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).from

#### Defined in

[lib/provable-types/merkle-list.ts:216](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L216)

___

### provable

▪ `Static` **provable**: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>\>

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).provable

#### Defined in

[lib/provable-types/merkle-list.ts:217](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L217)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`MerkleList`](MerkleList.md)

#### Returns

typeof [`MerkleList`](MerkleList.md)

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).Constructor

#### Defined in

[lib/provable-types/merkle-list.ts:262](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L262)

___

### innerProvable

• `get` **innerProvable**(): [`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Returns

[`ProvableHashable`](../modules.md#provablehashable)\<`T`\>

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).innerProvable

#### Defined in

[lib/provable-types/merkle-list.ts:279](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L279)

___

### emptyHash

• `Static` `get` **emptyHash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).emptyHash

#### Defined in

[lib/provable-types/merkle-list.ts:274](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L274)

## Methods

### clone

▸ **clone**(): [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Returns

[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

[MerkleList](MerkleList.md).[clone](MerkleList.md#clone)

#### Defined in

[lib/provable-types/merkle-list.ts:187](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L187)

___

### isEmpty

▸ **isEmpty**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[MerkleList](MerkleList.md).[isEmpty](MerkleList.md#isempty)

#### Defined in

[lib/provable-types/merkle-list.ts:87](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L87)

___

### nextHash

▸ **nextHash**(`hash`, `value`): [`Field`](Field.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hash` | [`Field`](Field.md) | `undefined` |
| `value` | `Object` | `undefined` |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `value.children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> | `undefined` |
| `value.id` | `number` | `RandomId` |

#### Returns

[`Field`](Field.md)

#### Inherited from

[MerkleList](MerkleList.md).[nextHash](MerkleList.md#nexthash)

#### Defined in

[lib/provable-types/merkle-list.ts:266](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L266)

___

### pop

▸ **pop**(): `Object`

Remove the last element from the list and return it.

If the list is empty, returns a dummy element.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> |
| `children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> |
| `id` | `number` |

#### Inherited from

[MerkleList](MerkleList.md).[pop](MerkleList.md#pop)

#### Defined in

[lib/provable-types/merkle-list.ts:152](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L152)

___

### popExn

▸ **popExn**(): `Object`

Remove the last element from the list and return it.

This proves that the list is non-empty, and fails otherwise.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> |
| `children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> |
| `id` | `number` |

#### Inherited from

[MerkleList](MerkleList.md).[popExn](MerkleList.md#popexn)

#### Defined in

[lib/provable-types/merkle-list.ts:137](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L137)

___

### popIf

▸ **popIf**(`condition`): `Object`

Return the last element, but only remove it if `condition` is true.

If the list is empty, returns a dummy element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> |
| `children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> |
| `id` | `number` |

#### Inherited from

[MerkleList](MerkleList.md).[popIf](MerkleList.md#popif)

#### Defined in

[lib/provable-types/merkle-list.ts:171](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L171)

___

### push

▸ **push**(`element`): `void`

Push a new element to the list.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `element` | `Object` | `undefined` |
| `element.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `element.children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> | `undefined` |
| `element.id` | `number` | `RandomId` |

#### Returns

`void`

#### Inherited from

[MerkleList](MerkleList.md).[push](MerkleList.md#push)

#### Defined in

[lib/provable-types/merkle-list.ts:94](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L94)

___

### pushIf

▸ **pushIf**(`condition`, `element`): `void`

Push a new element to the list, if the `condition` is true.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `condition` | [`Bool`](Bool.md) | `undefined` |
| `element` | `Object` | `undefined` |
| `element.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `element.children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> | `undefined` |
| `element.id` | `number` | `RandomId` |

#### Returns

`void`

#### Inherited from

[MerkleList](MerkleList.md).[pushIf](MerkleList.md#pushif)

#### Defined in

[lib/provable-types/merkle-list.ts:106](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L106)

___

### startIterating

▸ **startIterating**(): [`MerkleListIterator`](MerkleListIterator.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

[MerkleList](MerkleList.md).[startIterating](MerkleList.md#startiterating)

#### Defined in

[lib/provable-types/merkle-list.ts:192](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L192)

___

### assertConstant

▸ `Static` **assertConstant**(`forest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forest` | `AccountUpdateForestBase` |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:1382](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1382)

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

#### Inherited from

[MerkleList](MerkleList.md).[create](MerkleList.md#create)

#### Defined in

[lib/provable-types/merkle-list.ts:209](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/provable-types/merkle-list.ts#L209)

___

### fromFlatArray

▸ `Static` **fromFlatArray**(`updates`): [`AccountUpdateForest`](AccountUpdateForest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | [`AccountUpdate`](AccountUpdate.md)[] |

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Defined in

[lib/account-update.ts:1351](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1351)

___

### fromSimpleForest

▸ `Static` `Private` **fromSimpleForest**(`simpleForest`): [`AccountUpdateForest`](AccountUpdateForest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `simpleForest` | `CallForest`\<[`AccountUpdate`](AccountUpdate.md)\> |

#### Returns

[`AccountUpdateForest`](AccountUpdateForest.md)

#### Defined in

[lib/account-update.ts:1370](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1370)

___

### toFlatArray

▸ `Static` **toFlatArray**(`forest`, `mutate?`, `depth?`): [`AccountUpdate`](AccountUpdate.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forest` | `AccountUpdateForestBase` | `undefined` |
| `mutate` | `boolean` | `true` |
| `depth` | `number` | `0` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)[]

#### Defined in

[lib/account-update.ts:1355](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1355)
