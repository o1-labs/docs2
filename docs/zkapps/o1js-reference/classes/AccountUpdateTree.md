[o1js](../README.md) / [Modules](../modules.md) / AccountUpdateTree

# Class: AccountUpdateTree

Class which represents a tree of account updates,
in a compressed way which allows iterating and selectively witnessing the account updates.

The (recursive) type signature is:
```
type AccountUpdateTree = {
  accountUpdate: Hashed<AccountUpdate>;
  children: AccountUpdateForest;
};
type AccountUpdateForest = MerkleList<AccountUpdateTree>;
```

## Hierarchy

- \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }

  ↳ **`AccountUpdateTree`**

## Table of contents

### Constructors

- [constructor](AccountUpdateTree.md#constructor)

### Properties

- [accountUpdate](AccountUpdateTree.md#accountupdate)
- [children](AccountUpdateTree.md#children)
- [id](AccountUpdateTree.md#id)
- [\_isStruct](AccountUpdateTree.md#_isstruct)
- [check](AccountUpdateTree.md#check)
- [toAuxiliary](AccountUpdateTree.md#toauxiliary)
- [toFields](AccountUpdateTree.md#tofields)
- [toInput](AccountUpdateTree.md#toinput)

### Methods

- [approve](AccountUpdateTree.md#approve)
- [empty](AccountUpdateTree.md#empty)
- [from](AccountUpdateTree.md#from)
- [fromFields](AccountUpdateTree.md#fromfields)
- [sizeInFields](AccountUpdateTree.md#sizeinfields)

## Constructors

### constructor

• **new AccountUpdateTree**(`value`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `Object` | `undefined` |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `value.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` |
| `value.id` | `number` | `RandomId` |

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).constructor

#### Defined in

[lib/circuit-value.ts:487](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L487)

## Properties

### accountUpdate

• **accountUpdate**: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = `HashedAccountUpdate.provable`

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).accountUpdate

#### Defined in

[lib/account-update.ts:1410](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1410)

___

### children

• **children**: [`MerkleList`](MerkleList.md)\<\{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: `MerkleListBase`\<`AccountUpdateTreeBase`\> ; `id`: `number` = RandomId }\> = `AccountUpdateForest.provable`

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).children

#### Defined in

[lib/account-update.ts:1411](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1411)

___

### id

• **id**: `number` = `RandomId`

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).id

#### Defined in

[lib/account-update.ts:1409](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1409)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).\_isStruct

#### Defined in

[lib/circuit-value.ts:487](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L487)

___

### check

▪ `Static` **check**: (`value`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to put assertions on. |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` | - |
| `value.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` | - |
| `value.id` | `number` | `RandomId` | - |

##### Returns

`void`

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).check

#### Defined in

[snarky.d.ts:98](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L98)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value?` | `Object` | `undefined` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` | - |
| `value.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` | - |
| `value.id` | `number` | `RandomId` | - |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).toAuxiliary

#### Defined in

[snarky.d.ts:67](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L67)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](Field.md) array from. |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` | - |
| `value.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` | - |
| `value.id` | `number` | `RandomId` | - |

##### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).toFields

#### Defined in

[snarky.d.ts:58](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L58)

___

### toInput

▪ `Static` **toInput**: (`x`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` |
| `x.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` |
| `x.id` | `number` | `RandomId` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | [`Field`](Field.md)[] |
| `packed?` | [[`Field`](Field.md), `number`][] |

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).toInput

#### Defined in

[lib/circuit-value.ts:490](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L490)

## Methods

### approve

▸ **approve**(`update`, `hash?`): `void`

Add an [AccountUpdate](AccountUpdate.md) or [AccountUpdateTree](AccountUpdateTree.md) to the children of this tree's root.

See [approve](AccountUpdate.md#approve).

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |
| `hash?` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:1430](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1430)

___

### empty

▸ `Static` **empty**(): [`AccountUpdateTree`](AccountUpdateTree.md)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Overrides

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).empty

#### Defined in

[lib/account-update.ts:1446](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1446)

___

### from

▸ `Static` **from**(`update`, `hash?`): [`AccountUpdateTree`](AccountUpdateTree.md)

Create a tree of account updates which only consists of a root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |
| `hash?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Defined in

[lib/account-update.ts:1416](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1416)

___

### fromFields

▸ `Static` **fromFields**(`fields`, `aux`): [`AccountUpdateTree`](AccountUpdateTree.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |
| `aux` | `any` |

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Overrides

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).fromFields

#### Defined in

[lib/account-update.ts:1443](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/account-update.ts#L1443)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).sizeInFields

#### Defined in

[snarky.d.ts:88](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L88)
