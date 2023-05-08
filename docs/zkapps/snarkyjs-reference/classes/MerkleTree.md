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

[lib/merkle_tree.ts:37](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L37)

## Properties

### height

• `Readonly` **height**: `number`

The height of Merkle Tree.

#### Defined in

[lib/merkle_tree.ts:37](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L37)

___

### nodes

• `Private` **nodes**: `Record`<`number`, `Record`<`string`, [`Field`](Field.md)\>\> = `{}`

#### Defined in

[lib/merkle_tree.ts:29](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L29)

___

### zeroes

• `Private` **zeroes**: [`Field`](Field.md)[]

#### Defined in

[lib/merkle_tree.ts:30](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L30)

## Accessors

### leafCount

• `get` **leafCount**(): `bigint`

Returns the amount of leaf nodes.

#### Returns

`bigint`

Amount of leaf nodes.

#### Defined in

[lib/merkle_tree.ts:145](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L145)

## Methods

### fill

▸ **fill**(`leaves`): `void`

Fills all leaves of the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leaves` | [`Field`](Field.md)[] | Values to fill the leaves with. |

#### Returns

`void`

#### Defined in

[lib/merkle_tree.ts:135](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L135)

___

### getNode

▸ **getNode**(`level`, `index`): [`Field`](Field.md)

Returns a node which lives at a given index and level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level of the node. |
| `index` | `bigint` | Index of the node. |

#### Returns

[`Field`](Field.md)

The data of the node.

#### Defined in

[lib/merkle_tree.ts:50](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L50)

___

### getRoot

▸ **getRoot**(): [`Field`](Field.md)

Returns the root of the [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Returns

[`Field`](Field.md)

The root of the Merkle Tree.

#### Defined in

[lib/merkle_tree.ts:58](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L58)

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

[lib/merkle_tree.ts:96](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L96)

___

### setLeaf

▸ **setLeaf**(`index`, `leaf`): `void`

Sets the value of a leaf node at a given index to a given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `bigint` | Position of the leaf node. |
| `leaf` | [`Field`](Field.md) | New value. |

#### Returns

`void`

#### Defined in

[lib/merkle_tree.ts:73](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L73)

___

### setNode

▸ `Private` **setNode**(`level`, `index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `index` | `bigint` |
| `value` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[lib/merkle_tree.ts:63](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L63)

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

[lib/merkle_tree.ts:118](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/merkle_tree.ts#L118)
