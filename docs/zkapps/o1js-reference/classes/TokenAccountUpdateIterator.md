[o1js](../README.md) / [Modules](../modules.md) / TokenAccountUpdateIterator

# Class: TokenAccountUpdateIterator

Data structure to represent a forest of account updates that is being iterated over,
in the context of a token manager contract.

The iteration is done in a depth-first manner.

```ts
let forest: AccountUpdateForest = ...;
let tokenIterator = TokenAccountUpdateIterator.create(forest, tokenId);

// process the first 5 account updates in the tree
for (let i = 0; i < 5; i++) {
 let { accountUpdate, usesThisToken } = tokenIterator.next();
 // ... do something with the account update ...
}
```

**Important**: Since this is specifically used by token manager contracts to process their entire subtree
of account updates, the iterator skips subtrees that don't inherit token permissions and can therefore definitely not use the token.

So, the assumption is that the consumer of this iterator is only interested in account updates that use the token.
We still can't avoid processing some account updates that don't use the token, therefore the iterator returns a boolean
`usesThisToken` alongside each account update.

## Table of contents

### Constructors

- [constructor](TokenAccountUpdateIterator.md#constructor)

### Properties

- [currentLayer](TokenAccountUpdateIterator.md#currentlayer)
- [selfToken](TokenAccountUpdateIterator.md#selftoken)
- [unfinishedParentLayers](TokenAccountUpdateIterator.md#unfinishedparentlayers)

### Methods

- [assertFinished](TokenAccountUpdateIterator.md#assertfinished)
- [next](TokenAccountUpdateIterator.md#next)
- [create](TokenAccountUpdateIterator.md#create)

## Constructors

### constructor

• **new TokenAccountUpdateIterator**(`forest`, `mayUseToken`, `selfToken`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forest` | [`MerkleListIterator`](MerkleListIterator.md)\<`AccountUpdateTreeBase`\> |
| `mayUseToken` | `Object` |
| `mayUseToken.inheritFromParent` | [`Bool`](Bool.md) |
| `mayUseToken.parentsOwnToken` | [`Bool`](Bool.md) |
| `selfToken` | [`Field`](Field.md) |

#### Defined in

[lib/mina/token/forest-iterator.ts:59](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L59)

## Properties

### currentLayer

• **currentLayer**: `Layer`

#### Defined in

[lib/mina/token/forest-iterator.ts:55](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L55)

___

### selfToken

• **selfToken**: [`Field`](Field.md)

#### Defined in

[lib/mina/token/forest-iterator.ts:57](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L57)

___

### unfinishedParentLayers

• **unfinishedParentLayers**: [`MerkleList`](MerkleList.md)\<`Layer`\>

#### Defined in

[lib/mina/token/forest-iterator.ts:56](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L56)

## Methods

### assertFinished

▸ **assertFinished**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/mina/token/forest-iterator.ts:140](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L140)

___

### next

▸ **next**(): `Object`

Make a single step along a tree of account updates.

This function is guaranteed to visit each account update in the tree that uses the token
exactly once, when called repeatedly.

The method makes a best effort to avoid visiting account updates that are not using the token,
and in particular, to avoid returning dummy updates.
However, neither can be ruled out. We're returning { update, usesThisToken: Bool } and let the
caller handle the irrelevant case where `usesThisToken` is false.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `usesThisToken` | [`Bool`](Bool.md) |

#### Defined in

[lib/mina/token/forest-iterator.ts:88](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L88)

___

### create

▸ `Static` **create**(`forest`, `selfToken`): [`TokenAccountUpdateIterator`](TokenAccountUpdateIterator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forest` | [`AccountUpdateForest`](AccountUpdateForest.md) |
| `selfToken` | [`Field`](Field.md) |

#### Returns

[`TokenAccountUpdateIterator`](TokenAccountUpdateIterator.md)

#### Defined in

[lib/mina/token/forest-iterator.ts:69](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/token/forest-iterator.ts#L69)
