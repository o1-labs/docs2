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

[lib/provable/merkle-list.ts:83](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L83)

## Properties

### data

• **data**: [`Unconstrained`](Unconstrained.md)\<`WithHash`\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>[]\>

#### Inherited from

[MerkleList](MerkleList.md).[data](MerkleList.md#data)

#### Defined in

[lib/provable/merkle-list.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L81)

___

### hash

• **hash**: `Field`

#### Inherited from

[MerkleList](MerkleList.md).[hash](MerkleList.md#hash)

#### Defined in

[lib/provable/merkle-list.ts:80](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L80)

___

### \_emptyHash

▪ `Static` **\_emptyHash**: `undefined` \| `Field`

#### Inherited from

[MerkleList](MerkleList.md).[_emptyHash](MerkleList.md#_emptyhash)

#### Defined in

[lib/provable/merkle-list.ts:258](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L258)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<`any`\>

#### Inherited from

[MerkleList](MerkleList.md).[_innerProvable](MerkleList.md#_innerprovable)

#### Defined in

[lib/provable/merkle-list.ts:261](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L261)

___

### \_nextHash

▪ `Static` **\_nextHash**: `undefined` \| (`hash`: `Field`, `t`: `any`) => `Field`

#### Inherited from

[MerkleList](MerkleList.md).[_nextHash](MerkleList.md#_nexthash)

#### Defined in

[lib/provable/merkle-list.ts:257](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L257)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<`any`\>\>

#### Inherited from

[MerkleList](MerkleList.md).[_provable](MerkleList.md#_provable)

#### Defined in

[lib/provable/merkle-list.ts:260](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L260)

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

[lib/provable/merkle-list.ts:216](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L216)

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

[lib/provable/merkle-list.ts:217](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L217)

___

### provable

▪ `Static` **provable**: [`ProvableHashable`](../modules.md#provablehashable)\<[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>\>

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).provable

#### Defined in

[lib/provable/merkle-list.ts:218](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L218)

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

[lib/provable/merkle-list.ts:263](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L263)

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

[lib/provable/merkle-list.ts:280](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L280)

___

### emptyHash

• `Static` `get` **emptyHash**(): `Field`

#### Returns

`Field`

#### Inherited from

MerkleList.create(
  AccountUpdateTreeBase,
  merkleListHash
).emptyHash

#### Defined in

[lib/provable/merkle-list.ts:275](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L275)

## Methods

### clone

▸ **clone**(): [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Returns

[`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

[MerkleList](MerkleList.md).[clone](MerkleList.md#clone)

#### Defined in

[lib/provable/merkle-list.ts:188](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L188)

___

### isEmpty

▸ **isEmpty**(): `Bool`

#### Returns

`Bool`

#### Inherited from

[MerkleList](MerkleList.md).[isEmpty](MerkleList.md#isempty)

#### Defined in

[lib/provable/merkle-list.ts:88](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L88)

___

### nextHash

▸ **nextHash**(`hash`, `value`): `Field`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hash` | `Field` | `undefined` |
| `value` | `Object` | `undefined` |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `value.children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> | `undefined` |
| `value.id` | `number` | `RandomId` |

#### Returns

`Field`

#### Inherited from

[MerkleList](MerkleList.md).[nextHash](MerkleList.md#nexthash)

#### Defined in

[lib/provable/merkle-list.ts:267](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L267)

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

[lib/provable/merkle-list.ts:153](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L153)

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

[lib/provable/merkle-list.ts:138](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L138)

___

### popIf

▸ **popIf**(`condition`): `Object`

Return the last element, but only remove it if `condition` is true.

If the list is empty, returns a dummy element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `Bool` |

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

[lib/provable/merkle-list.ts:172](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L172)

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

[lib/provable/merkle-list.ts:95](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L95)

___

### pushIf

▸ **pushIf**(`condition`, `element`): `void`

Push a new element to the list, if the `condition` is true.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `condition` | `Bool` | `undefined` |
| `element` | `Object` | `undefined` |
| `element.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `element.children` | `MerkleListBase`\<`AccountUpdateTreeBase`\> | `undefined` |
| `element.id` | `number` | `RandomId` |

#### Returns

`void`

#### Inherited from

[MerkleList](MerkleList.md).[pushIf](MerkleList.md#pushif)

#### Defined in

[lib/provable/merkle-list.ts:107](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L107)

___

### startIterating

▸ **startIterating**(): [`MerkleListIterator`](MerkleListIterator.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Returns

[`MerkleListIterator`](MerkleListIterator.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\>

#### Inherited from

[MerkleList](MerkleList.md).[startIterating](MerkleList.md#startiterating)

#### Defined in

[lib/provable/merkle-list.ts:193](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L193)

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

[lib/mina/account-update.ts:1305](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1305)

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

#### Inherited from

[MerkleList](MerkleList.md).[create](MerkleList.md#create)

#### Defined in

[lib/provable/merkle-list.ts:210](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-list.ts#L210)

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

[lib/mina/account-update.ts:1274](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1274)

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

[lib/mina/account-update.ts:1293](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1293)

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

[lib/mina/account-update.ts:1278](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1278)
