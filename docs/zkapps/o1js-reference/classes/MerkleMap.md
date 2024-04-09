[o1js](../README.md) / [Modules](../modules.md) / MerkleMap

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

[lib/provable/merkle-map.ts:19](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L19)

## Properties

### tree

• **tree**: [`MerkleTree`](MerkleTree.md)

#### Defined in

[lib/provable/merkle-map.ts:11](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L11)

## Methods

### \_keyToIndex

▸ **_keyToIndex**(`key`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Field` |

#### Returns

`bigint`

#### Defined in

[lib/provable/merkle-map.ts:34](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L34)

___

### get

▸ **get**(`key`): `Field`

Returns a value given a key. Values are by default Field(0).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Field` | The key to get the value from. |

#### Returns

`Field`

The value stored at the key.

#### Defined in

[lib/provable/merkle-map.ts:70](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L70)

___

### getRoot

▸ **getRoot**(): `Field`

Returns the root of the Merkle Map.

#### Returns

`Field`

The root of the Merkle Map.

#### Defined in

[lib/provable/merkle-map.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L81)

___

### getWitness

▸ **getWitness**(`key`): [`MerkleMapWitness`](MerkleMapWitness.md)

Returns a circuit-compatible witness (also known as [Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof)) for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Field` | The key to make a witness for. |

#### Returns

[`MerkleMapWitness`](MerkleMapWitness.md)

A MerkleMapWitness, which can be used to assert changes to the MerkleMap, and the witness's key.

#### Defined in

[lib/provable/merkle-map.ts:90](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L90)

___

### set

▸ **set**(`key`, `value`): `void`

Sets a key of the merkle map to a given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Field` | The key to set in the map. |
| `value` | `Field` | The value to set. |

#### Returns

`void`

#### Defined in

[lib/provable/merkle-map.ts:58](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/merkle-map.ts#L58)
