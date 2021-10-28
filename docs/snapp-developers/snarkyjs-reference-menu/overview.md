---
title: Overview
---

## Classes

- [Bool](classes/Bool)
- [Circuit](classes/Circuit)
- [CircuitValue](classes/CircuitValue)
- [Collection](classes/Collection)
- [EndoScalar](classes/EndoScalar)
- [Field](classes/Field)
- [Group](classes/Group)
- [IndexBase](classes/IndexBase)
- [Keypair](classes/Keypair)
- [PrivateKey](classes/PrivateKey)
- [Proof](classes/Proof)
- [PublicKey](classes/PublicKey)
- [Scalar](classes/Scalar)
- [Signature](classes/Signature)
- [Tree](classes/Tree)
- [VerificationKey](classes/VerificationKey)

## Interfaces

- [AsFieldElements](interfaces/AsFieldElements)
- [CircuitMain](interfaces/CircuitMain)
- [MerkleTree](interfaces/MerkleTree)

## Type aliases

### AsField

Ƭ **AsField**: [`Field`](classes/Field) \| `number` \| `string` \| `boolean`

#### Defined in

[snarky.d.ts:21](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L21)

---

### Index

Ƭ **Index**: `InstanceType`<typeof [`Index`](README #index)[``0``]\>

#### Defined in

[lib/merkle_proof.ts:105](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L105)

---

### JSONValue

Ƭ **JSONValue**: `number` \| `string` \| `boolean` \| `null` \| `JSON`[] \| { [key: string]: [`JSONValue`](README #jsonvalue); }

#### Defined in

[snarky.d.ts:1](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L1)

---

### MerkleProof

Ƭ **MerkleProof**: `InstanceType`<typeof [`MerkleProof`](README #merkleproof)[``0``]\>

#### Defined in

[lib/merkle_proof.ts:104](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L104)

---

### Tuple

Ƭ **Tuple**<`A`, `_N`\>: `A`[]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `A`  | `A`              |
| `_N` | extends `number` |

#### Defined in

[lib/circuit_value.ts:6](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L6)

## Variables

### Index

• **Index**: typeof `Index`[]

#### Defined in

[lib/merkle_proof.ts:103](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L103)

---

### MerkleProof

• **MerkleProof**: typeof `MerkleProof`[]

#### Defined in

[lib/merkle_proof.ts:102](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L102)

---

### NumberAsField

• **NumberAsField**: [`AsFieldElements`](interfaces/AsFieldElements)<`Number`\>

#### Defined in

[snarky.d.ts:365](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L365)

---

### Poseidon

• **Poseidon**: `Object`

#### Type declaration

| Name   | Type                                                           |
| :----- | :------------------------------------------------------------- |
| `hash` | (`xs`: [`Field`](classes/Field)[]) => [`Field`](classes/Field) |

#### Defined in

[snarky.d.ts:356](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L356)

## Functions

### IndexFactory

▸ **IndexFactory**(`depth`): typeof `Index`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `depth` | `number` |

#### Returns

typeof `Index`

#### Defined in

[lib/merkle_proof.ts:57](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L57)

---

### MerkleProofFactory

▸ **MerkleProofFactory**(`depth`): typeof `MerkleProof`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `depth` | `number` |

#### Returns

typeof `MerkleProof`

#### Defined in

[lib/merkle_proof.ts:32](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L32)

---

### array

▸ `Const` **array**<`T`\>(`x`, `length`): [`AsFieldElements`](interfaces/AsFieldElements)<`T`[]\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `x`      | [`AsFieldElements`](interfaces/AsFieldElements)<`T`\> |
| `length` | `number`                                              |

#### Returns

[`AsFieldElements`](interfaces/AsFieldElements)<`T`[]\>

#### Defined in

[snarky.d.ts:367](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L367)

---

### circuitMain

▸ **circuitMain**(`target`, `propertyName`, `_descriptor?`): `any`

#### Parameters

| Name           | Type                 |
| :------------- | :------------------- |
| `target`       | `any`                |
| `propertyName` | `string`             |
| `_descriptor?` | `PropertyDescriptor` |

#### Returns

`any`

#### Defined in

[lib/circuit_value.ts:164](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L164)

---

### ofFieldElements

▸ `Const` **ofFieldElements**(`x`, `y`): `any`[]

#### Parameters

| Name | Type    |
| :--- | :------ |
| `x`  | `any`[] |
| `y`  | `any`[] |

#### Returns

`any`[]

#### Defined in

[snarky.d.ts:361](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L361)

---

### prop

▸ **prop**(`target`, `key`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `target` | `any`    |
| `key`    | `string` |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:101](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L101)

---

### public\_

▸ **public\_**(`target`, `_key`, `index`): `void`

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `target` | `any`                |
| `_key`   | `string` \| `symbol` |
| `index`  | `number`             |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:118](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L118)

---

### shutdown

▸ `Const` **shutdown**(): `Promise`<`undefined`\>

#### Returns

`Promise`<`undefined`\>

#### Defined in

[snarky.d.ts:375](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L375)

---

### sizeInFieldElements

▸ `Const` **sizeInFieldElements**(`x`): `number`

#### Parameters

| Name | Type    |
| :--- | :------ |
| `x`  | `any`[] |

#### Returns

`number`

#### Defined in

[snarky.d.ts:363](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L363)

---

### toFieldElements

▸ `Const` **toFieldElements**(`x`, `y`): `any`[]

#### Parameters

| Name | Type    |
| :--- | :------ |
| `x`  | `any`[] |
| `y`  | `any`[] |

#### Returns

`any`[]

#### Defined in

[snarky.d.ts:362](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L362)
