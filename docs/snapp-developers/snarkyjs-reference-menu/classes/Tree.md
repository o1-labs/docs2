---
title: Tree
---

# Class: Tree<A\>

## Type parameters

| Name |
| :--- |
| `A`  |

## Constructors

### constructor

• **new Tree**<`A`\>(`depth`, `hashElement`, `values`)

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name          | Type                              |
| :------------ | :-------------------------------- |
| `depth`       | `number`                          |
| `hashElement` | (`a`: `A`) => [`Field`](Field.md) |
| `values`      | `A`[]                             |

#### Defined in

[lib/merkle_proof.ts:201](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L201)

## Properties

### value

• **value**: `BinTree`<`A`\>

#### Defined in

[lib/merkle_proof.ts:199](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L199)

## Methods

### get

▸ **get**(`index`): `Object`

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

`Object`

| Name    | Type                |
| :------ | :------------------ |
| `hash`  | [`Field`](Field.md) |
| `value` | `null` \| `A`       |

#### Defined in

[lib/merkle_proof.ts:260](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L260)

---

### getElementHash

▸ **getElementHash**(`index`): [`Field`](Field.md)

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/merkle_proof.ts:288](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L288)

---

### getMerklePath

▸ **getMerklePath**(`index`): [`Field`](Field.md)[]

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/merkle_proof.ts:292](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L292)

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

[lib/merkle_proof.ts:284](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L284)

---

### root

▸ **root**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/merkle_proof.ts:205](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L205)

---

### setValue

▸ **setValue**(`index`, `x`, `eltHash`): `void`

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `index`   | `boolean`[]         |
| `x`       | `A`                 |
| `eltHash` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[lib/merkle_proof.ts:209](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L209)
