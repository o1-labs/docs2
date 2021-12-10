---
title: MerkleTree
---

# Interface: MerkleTree<A\>

## Type parameters

| Name |
| :--- |
| `A`  |

## Methods

### getElementHash

▸ **getElementHash**(`index`): [`Field`](../classes/Field.md)

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

[`Field`](../classes/Field.md)

#### Defined in

[lib/merkle_proof.ts:326](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L326)

---

### getMerklePath

▸ **getMerklePath**(`index`): [`Field`](../classes/Field.md)[]

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/merkle_proof.ts:327](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L327)

---

### getValue

▸ **getValue**(`index`): `null` \| `A`

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

`null` \| `A`

#### Defined in

[lib/merkle_proof.ts:325](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L325)

---

### root

▸ **root**(): [`Field`](../classes/Field.md)

#### Returns

[`Field`](../classes/Field.md)

#### Defined in

[lib/merkle_proof.ts:328](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L328)

---

### setValue

▸ **setValue**(`index`, `x`, `eltHash`): `void`

#### Parameters

| Name      | Type                           |
| :-------- | :----------------------------- |
| `index`   | `boolean`[]                    |
| `x`       | `A`                            |
| `eltHash` | [`Field`](../classes/Field.md) |

#### Returns

`void`

#### Defined in

[lib/merkle_proof.ts:324](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L324)
