# Class: MerkleMap

## Table of contents

### Constructors

- [constructor](MerkleMap.md#constructor)

### Properties

- [tree](MerkleMap.md#tree)

### Methods

- [\_keyToIndex](MerkleMap.md#_keytoindex)
- [get](MerkleMap.md#get)
- [getRoot](MerkleMap.md#getroot)
- [getWitness](MerkleMap.md#getwitness)
- [set](MerkleMap.md#set)

## Constructors

### constructor

• **new MerkleMap**()

Creates a new, empty Merkle Map.

#### Defined in

[lib/merkle_map.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L18)

## Properties

### tree

• **tree**: [`MerkleTree`](MerkleTree.md)

#### Defined in

[lib/merkle_map.ts:10](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L10)

## Methods

### \_keyToIndex

▸ **_keyToIndex**(`key`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Field`](Field.md) |

#### Returns

`bigint`

#### Defined in

[lib/merkle_map.ts:33](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L33)

___

### get

▸ **get**(`key`): [`Field`](Field.md)

Returns a value given a key. Values are by default Field(0).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Field`](Field.md) | The key to get the value from. |

#### Returns

[`Field`](Field.md)

The value stored at the key.

#### Defined in

[lib/merkle_map.ts:69](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L69)

___

### getRoot

▸ **getRoot**(): [`Field`](Field.md)

Returns the root of the Merkle Map.

#### Returns

[`Field`](Field.md)

The root of the Merkle Map.

#### Defined in

[lib/merkle_map.ts:80](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L80)

___

### getWitness

▸ **getWitness**(`key`): [`MerkleMapWitness`](MerkleMapWitness.md)

Returns a circuit-compatible witness (also known as [Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof)) for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Field`](Field.md) | The key to make a witness for. |

#### Returns

[`MerkleMapWitness`](MerkleMapWitness.md)

A MerkleMapWitness, which can be used to assert changes to the MerkleMap, and the witness's key.

#### Defined in

[lib/merkle_map.ts:89](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L89)

___

### set

▸ **set**(`key`, `value`): `void`

Sets a key of the merkle map to a given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Field`](Field.md) | The key to set in the map. |
| `value` | [`Field`](Field.md) | - |

#### Returns

`void`

#### Defined in

[lib/merkle_map.ts:57](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/merkle_map.ts#L57)
