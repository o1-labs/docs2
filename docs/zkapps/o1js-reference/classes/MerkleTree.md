[o1js](../README.md) / [Modules](../modules.md) / MerkleTree

# Class: MerkleTree

A [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree) is a binary tree in which every leaf is the cryptography hash of a piece of data,
and every node is the hash of the concatenation of its two child nodes.

A Merkle Tree allows developers to easily and securely verify the integrity of large amounts of data.

Take a look at our [documentation](https://docs.minaprotocol.com/en/zkapps) on how to use Merkle Trees in combination with zkApps and zero knowledge programming!

Levels are indexed from leaves (level 0) to root (level N - 1).

## Table of contents

### Constructors

- [constructor](MerkleTree.md#constructor)

### Properties

- [height](MerkleTree.md#height)
- [nodes](MerkleTree.md#nodes)
- [zeroes](MerkleTree.md#zeroes)

### Accessors

- [leafCount](MerkleTree.md#leafcount)

### Methods

- [fill](MerkleTree.md#fill)
- [getNode](MerkleTree.md#getnode)
- [getRoot](MerkleTree.md#getroot)
- [getWitness](MerkleTree.md#getwitness)
- [setLeaf](MerkleTree.md#setleaf)
- [setNode](MerkleTree.md#setnode)
- [validate](MerkleTree.md#validate)

## Constructors

### constructor

• **new MerkleTree**(`height`)

Creates a new, empty [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | The height of Merkle Tree. |

#### Defined in

[lib/provable/merkle-tree.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L37)

## Properties

### height

• `Readonly` **height**: `number`

The height of Merkle Tree.

#### Defined in

[lib/provable/merkle-tree.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L37)

___

### nodes

• `Private` **nodes**: `Record`\<`number`, `Record`\<`string`, `Field`\>\> = `{}`

#### Defined in

[lib/provable/merkle-tree.ts:29](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L29)

___

### zeroes

• `Private` **zeroes**: `Field`[]

#### Defined in

[lib/provable/merkle-tree.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L30)

## Accessors

### leafCount

• `get` **leafCount**(): `bigint`

Returns the amount of leaf nodes.

#### Returns

`bigint`

Amount of leaf nodes.

#### Defined in

[lib/provable/merkle-tree.ts:146](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L146)

## Methods

### fill

▸ **fill**(`leaves`): `void`

Fills all leaves of the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leaves` | `Field`[] | Values to fill the leaves with. |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-tree.ts:136](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L136)

___

### getNode

▸ **getNode**(`level`, `index`): `Field`

Returns a node which lives at a given index and level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level of the node. |
| `index` | `bigint` | Index of the node. |

#### Returns

`Field`

The data of the node.

#### Defined in

[lib/provable/merkle-tree.ts:51](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L51)

___

### getRoot

▸ **getRoot**(): `Field`

Returns the root of the [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Returns

`Field`

The root of the Merkle Tree.

#### Defined in

[lib/provable/merkle-tree.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L59)

___

### getWitness

▸ **getWitness**(`index`): `Witness`

Returns the witness (also known as [Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof)) for the leaf at the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `bigint` | Position of the leaf node. |

#### Returns

`Witness`

The witness that belongs to the leaf.

#### Defined in

[lib/provable/merkle-tree.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L97)

___

### setLeaf

▸ **setLeaf**(`index`, `leaf`): `void`

Sets the value of a leaf node at a given index to a given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `bigint` | Position of the leaf node. |
| `leaf` | `Field` | New value. |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-tree.ts:74](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L74)

___

### setNode

▸ `Private` **setNode**(`level`, `index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `index` | `bigint` |
| `value` | `Field` |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-tree.ts:64](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L64)

___

### validate

▸ **validate**(`index`): `boolean`

Checks if the witness that belongs to the leaf at the given index is a valid witness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `bigint` | Position of the leaf node. |

#### Returns

`boolean`

True if the witness for the leaf node is valid.

#### Defined in

[lib/provable/merkle-tree.ts:119](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-tree.ts#L119)
