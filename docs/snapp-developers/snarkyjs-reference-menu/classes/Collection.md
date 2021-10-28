---
title: Collection
---

# Class: Collection<A\>

## Type parameters

| Name |
| :--- |
| `A`  |

## Constructors

### constructor

• **new Collection**<`A`\>(`eltTyp`, `f`, `root?`)

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `eltTyp` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`A`\> |
| `f`      | () => [`Tree`](Tree.md)<`A`\>                               |
| `root?`  | [`Field`](Field.md)                                         |

#### Defined in

[lib/merkle_proof.ts:354](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L354)

## Properties

### cachedPaths

• **cachedPaths**: `Map`<`number`, [`Field`](Field.md)[]\>

#### Defined in

[lib/merkle_proof.ts:343](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L343)

---

### cachedValues

• **cachedValues**: `Map`<`number`, `Object`\>

#### Defined in

[lib/merkle_proof.ts:344](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L344)

---

### eltTyp

• **eltTyp**: [`AsFieldElements`](../interfaces/AsFieldElements.md)<`A`\>

#### Defined in

[lib/merkle_proof.ts:336](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L336)

---

### root

• **root**: `null` \| [`Field`](Field.md)

#### Defined in

[lib/merkle_proof.ts:345](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L345)

---

### values

• **values**: { `computed`: `true` ; `value`: [`MerkleTree`](../interfaces/MerkleTree.md)<`A`\> } \| { `computed`: `false` ; `f`: () => [`MerkleTree`](../interfaces/MerkleTree.md)<`A`\> }

#### Defined in

[lib/merkle_proof.ts:337](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L337)

## Methods

### get

▸ **get**(`i`): `A`

#### Parameters

| Name | Type    |
| :--- | :------ |
| `i`  | `Index` |

#### Returns

`A`

#### Defined in

[lib/merkle_proof.ts:414](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L414)

---

### getRoot

▸ **getRoot**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/merkle_proof.ts:347](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L347)

---

### getValues

▸ `Private` **getValues**(): [`MerkleTree`](../interfaces/MerkleTree.md)<`A`\>

#### Returns

[`MerkleTree`](../interfaces/MerkleTree.md)<`A`\>

#### Defined in

[lib/merkle_proof.ts:362](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L362)

---

### set

▸ **set**(`i`, `x`): `void`

#### Parameters

| Name | Type    |
| :--- | :------ |
| `i`  | `Index` |
| `x`  | `A`     |

#### Returns

`void`

#### Defined in

[lib/merkle_proof.ts:372](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L372)
