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

[lib/provable/types/struct.ts:248](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L248)

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

[lib/mina/account-update.ts:1333](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1333)

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

[lib/mina/account-update.ts:1334](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1334)

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

[lib/mina/account-update.ts:1332](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1332)

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

[lib/provable/types/struct.ts:248](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L248)

___

### check

▪ `Static` **check**: (`value`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../modules.md#bool) asserts that the value of the element is either 1 or 0.

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

[lib/provable/types/provable-intf.ts:66](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L66)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

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

[lib/provable/types/provable-intf.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L37)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => `Field`[]

#### Type declaration

▸ (`value`): `Field`[]

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../modules.md#field) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](../modules.md#field) array from. |
| `value.accountUpdate` | [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> | `HashedAccountUpdate.provable` | - |
| `value.children` | [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> | `AccountUpdateForest.provable` | - |
| `value.id` | `number` | `RandomId` | - |

##### Returns

`Field`[]

A [Field](../modules.md#field) array describing how this `T` element is made up of [Field](../modules.md#field) elements.

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).toFields

#### Defined in

[lib/provable/types/provable-intf.ts:26](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L26)

___

### toInput

▪ `Static` **toInput**: (`x`: \{ `accountUpdate`: [`Hashed`](Hashed.md)\<[`AccountUpdate`](AccountUpdate.md)\> = HashedAccountUpdate.provable; `children`: [`MerkleList`](MerkleList.md)\<\{ id: number; accountUpdate: Hashed\<AccountUpdate\>; children: MerkleListBase\<AccountUpdateTreeBase\>; }\> = AccountUpdateForest.provable; `id`: `number` = RandomId }) => \{ `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  }

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
| `fields?` | `Field`[] |
| `packed?` | [`Field`, `number`][] |

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).toInput

#### Defined in

[lib/provable/types/struct.ts:251](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L251)

## Methods

### approve

▸ **approve**(`update`, `hash?`): `void`

Add an [AccountUpdate](AccountUpdate.md) or [AccountUpdateTree](AccountUpdateTree.md) to the children of this tree's root.

See [approve](AccountUpdate.md#approve).

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |
| `hash?` | `Field` |

#### Returns

`void`

#### Defined in

[lib/mina/account-update.ts:1353](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1353)

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

[lib/mina/account-update.ts:1369](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1369)

___

### from

▸ `Static` **from**(`update`, `hash?`): [`AccountUpdateTree`](AccountUpdateTree.md)

Create a tree of account updates which only consists of a root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |
| `hash?` | `Field` |

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Defined in

[lib/mina/account-update.ts:1339](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1339)

___

### fromFields

▸ `Static` **fromFields**(`fields`, `aux`): [`AccountUpdateTree`](AccountUpdateTree.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |
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

[lib/mina/account-update.ts:1366](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1366)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](../modules.md#field) type, as [Field](../modules.md#field) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../modules.md#field) type.

#### Inherited from

StructNoJson(\{
  id: RandomId,
  accountUpdate: HashedAccountUpdate.provable,
  children: AccountUpdateForest.provable,
}).sizeInFields

#### Defined in

[lib/provable/types/provable-intf.ts:56](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L56)
