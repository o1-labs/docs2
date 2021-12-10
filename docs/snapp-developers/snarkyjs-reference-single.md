---
title: SnarkyJS Reference
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@o1labs/snarkyjs](#o1labssnarkyjs)
  - [Classes](#classes)
  - [Interfaces](#interfaces)
  - [Type aliases](#type-aliases)
    - [AsField](#asfield)
    - [Index](#index)
    - [JSONValue](#jsonvalue)
    - [MerkleProof](#merkleproof)
    - [Tuple](#tuple)
  - [Variables](#variables)
    - [Index](#index-1)
    - [MerkleProof](#merkleproof-1)
    - [NumberAsField](#numberasfield)
    - [Poseidon](#poseidon)
  - [Functions](#functions)
    - [IndexFactory](#indexfactory)
    - [MerkleProofFactory](#merkleprooffactory)
    - [array](#array)
    - [circuitMain](#circuitmain)
    - [ofFieldElements](#offieldelements)
    - [prop](#prop)
    - [public\_](#public%5C_)
    - [shutdown](#shutdown)
    - [sizeInFieldElements](#sizeinfieldelements)
    - [toFieldElements](#tofieldelements)
- [Classes](#classes-1)
  - [Class: Bool](#class-bool)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: Circuit](#class-circuit)
    - [Constructors](#constructors-1)
    - [Methods](#methods-1)
  - [Class: CircuitValue](#class-circuitvalue)
    - [Hierarchy](#hierarchy)
    - [Constructors](#constructors-2)
    - [Methods](#methods-2)
  - [Class: Collection<A\>](#class-collectiona%5C)
    - [Type parameters](#type-parameters)
    - [Constructors](#constructors-3)
    - [Properties](#properties-1)
    - [Methods](#methods-3)
  - [Class: EndoScalar](#class-endoscalar)
    - [Constructors](#constructors-4)
    - [Methods](#methods-4)
  - [Class: Field](#class-field)
    - [Constructors](#constructors-5)
    - [Properties](#properties-2)
    - [Methods](#methods-5)
  - [Class: Group](#class-group)
    - [Constructors](#constructors-6)
    - [Properties](#properties-3)
    - [Methods](#methods-6)
  - [Class: IndexBase](#class-indexbase)
    - [Constructors](#constructors-7)
    - [Properties](#properties-4)
  - [Class: Keypair](#class-keypair)
    - [Constructors](#constructors-8)
    - [Methods](#methods-7)
  - [Class: PrivateKey](#class-privatekey)
    - [Hierarchy](#hierarchy-1)
    - [Constructors](#constructors-9)
    - [Properties](#properties-5)
    - [Methods](#methods-8)
  - [Class: Proof](#class-proof)
    - [Constructors](#constructors-10)
    - [Methods](#methods-9)
  - [Class: PublicKey](#class-publickey)
    - [Hierarchy](#hierarchy-2)
    - [Constructors](#constructors-11)
    - [Properties](#properties-6)
    - [Methods](#methods-10)
  - [Class: Scalar](#class-scalar)
    - [Constructors](#constructors-12)
    - [Methods](#methods-11)
  - [Class: Signature](#class-signature)
    - [Hierarchy](#hierarchy-3)
    - [Constructors](#constructors-13)
    - [Properties](#properties-7)
    - [Methods](#methods-12)
  - [Class: Tree<A\>](#class-treea%5C)
    - [Type parameters](#type-parameters-1)
    - [Constructors](#constructors-14)
    - [Properties](#properties-8)
    - [Methods](#methods-13)
  - [Class: VerificationKey](#class-verificationkey)
    - [Constructors](#constructors-15)
    - [Methods](#methods-14)
- [Interfaces](#interfaces-1)
  - [Interface: AsFieldElements<T\>](#interface-asfieldelementst%5C)
    - [Type parameters](#type-parameters-2)
    - [Methods](#methods-15)
  - [Interface: CircuitMain<W, P\>](#interface-circuitmainw-p%5C)
    - [Type parameters](#type-parameters-3)
    - [Properties](#properties-9)
    - [Methods](#methods-16)
  - [Interface: MerkleTree<A\>](#interface-merkletreea%5C)
    - [Type parameters](#type-parameters-4)
    - [Methods](#methods-17)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readme-newmd"></a>

<a name="readmemd"></a>

# @o1labs/snarkyjs

## Classes

- [Bool](#classesboolmd)
- [Circuit](#classescircuitmd)
- [CircuitValue](#classescircuitvaluemd)
- [Collection](#classescollectionmd)
- [EndoScalar](#classesendoscalarmd)
- [Field](#classesfieldmd)
- [Group](#classesgroupmd)
- [IndexBase](#classesindexbasemd)
- [Keypair](#classeskeypairmd)
- [PrivateKey](#classesprivatekeymd)
- [Proof](#classesproofmd)
- [PublicKey](#classespublickeymd)
- [Scalar](#classesscalarmd)
- [Signature](#classessignaturemd)
- [Tree](#classestreemd)
- [VerificationKey](#classesverificationkeymd)

## Interfaces

- [AsFieldElements](#interfacesasfieldelementsmd)
- [CircuitMain](#interfacescircuitmainmd)
- [MerkleTree](#interfacesmerkletreemd)

## Type aliases

### AsField

Ƭ **AsField**: [`Field`](#classesfieldmd) \| `number` \| `string` \| `boolean`

#### Defined in

[snarky.d.ts:21](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L21)

---

### Index

Ƭ **Index**: `InstanceType`<typeof [`Index`](#index)[``0``]\>

#### Defined in

[lib/merkle_proof.ts:105](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L105)

---

### JSONValue

Ƭ **JSONValue**: `number` \| `string` \| `boolean` \| `null` \| `JSON`[] \| { [key: string]: [`JSONValue`](#jsonvalue); }

#### Defined in

[snarky.d.ts:1](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L1)

---

### MerkleProof

Ƭ **MerkleProof**: `InstanceType`<typeof [`MerkleProof`](#merkleproof)[``0``]\>

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

• **NumberAsField**: [`AsFieldElements`](#interfacesasfieldelementsmd)<`Number`\>

#### Defined in

[snarky.d.ts:365](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L365)

---

### Poseidon

• **Poseidon**: `Object`

#### Type declaration

| Name   | Type                                                               |
| :----- | :----------------------------------------------------------------- |
| `hash` | (`xs`: [`Field`](#classesfieldmd)[]) => [`Field`](#classesfieldmd) |

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

▸ `Const` **array**<`T`\>(`x`, `length`): [`AsFieldElements`](#interfacesasfieldelementsmd)<`T`[]\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `x`      | [`AsFieldElements`](#interfacesasfieldelementsmd)<`T`\> |
| `length` | `number`                                                |

#### Returns

[`AsFieldElements`](#interfacesasfieldelementsmd)<`T`[]\>

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

# Classes

<a name="classesboolmd"></a>

## Class: Bool

### Constructors

#### constructor

• **new Bool**(`x`)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Defined in

[snarky.d.ts:128](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L128)

### Properties

#### Unsafe

▪ `Static` **Unsafe**: `Object`

##### Type declaration

| Name      | Type                                                                                               |
| :-------- | :------------------------------------------------------------------------------------------------- |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd)) => [`Bool`](#classesboolmd) |

##### Defined in

[snarky.d.ts:154](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L154)

### Methods

#### and

▸ **and**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:133](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L133)

---

#### assertEquals

▸ **assertEquals**(`y`): `void`

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:136](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L136)

---

#### equals

▸ **equals**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:138](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L138)

---

#### isFalse

▸ **isFalse**(): [`Bool`](#classesboolmd)

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:140](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L140)

---

#### isTrue

▸ **isTrue**(): [`Bool`](#classesboolmd)

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:139](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L139)

---

#### not

▸ **not**(): [`Bool`](#classesboolmd)

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:132](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L132)

---

#### or

▸ **or**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:134](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L134)

---

#### sizeInFieldElements

▸ **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:142](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L142)

---

#### toBoolean

▸ **toBoolean**(): `boolean`

##### Returns

`boolean`

##### Defined in

[snarky.d.ts:149](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L149)

---

#### toField

▸ **toField**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:130](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L130)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:143](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L143)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:146](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L146)

---

#### toString

▸ **toString**(): `string`

##### Returns

`string`

##### Defined in

[snarky.d.ts:145](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L145)

---

#### and

▸ `Static` **and**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:159](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L159)

---

#### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:162](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L162)

---

#### count

▸ `Static` **count**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `x`  | [`Bool`](#classesboolmd) \| `boolean`[] |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:168](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L168)

---

#### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:164](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L164)

---

#### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                      |
| :--- | :------------------------ |
| `x`  | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| [`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:175](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L175)

---

#### isFalse

▸ `Static` **isFalse**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:166](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L166)

---

#### isTrue

▸ `Static` **isTrue**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:165](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L165)

---

#### not

▸ `Static` **not**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:158](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L158)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Bool`](#classesboolmd)

##### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `fields` | [`Field`](#classesfieldmd)[] |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:172](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L172)

---

#### or

▸ `Static` **or**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |
| `y`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:160](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L160)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:170](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L170)

---

#### toField

▸ `Static` **toField**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:152](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L152)

---

#### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | `boolean` \| [`Bool`](#classesboolmd) |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:171](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L171)

---

#### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](#jsonvalue)

##### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `x`  | [`Bool`](#classesboolmd) |

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:174](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L174)

<a name="classescircuitmd"></a>

## Class: Circuit

### Constructors

#### constructor

• **new Circuit**()

### Methods

#### addConstraint

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

##### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `kind` | `"multiply"`               |
| `x`    | [`Field`](#classesfieldmd) |
| `y`    | [`Field`](#classesfieldmd) |
| `z`    | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:191](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L191)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

##### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `kind` | `"add"`                    |
| `x`    | [`Field`](#classesfieldmd) |
| `y`    | [`Field`](#classesfieldmd) |
| `z`    | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:198](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L198)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

##### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `kind` | `"equal"`                  |
| `x`    | [`Field`](#classesfieldmd) |
| `y`    | [`Field`](#classesfieldmd) |
| `z`    | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:205](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L205)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

##### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `kind` | `"boolean"`                |
| `x`    | [`Field`](#classesfieldmd) |
| `y`    | [`Field`](#classesfieldmd) |
| `z`    | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:212](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L212)

---

#### array

▸ `Static` **array**<`T`\>(`ctor`, `length`): [`AsFieldElements`](#interfacesasfieldelementsmd)<`T`[]\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `ctor`   | [`AsFieldElements`](#interfacesasfieldelementsmd)<`T`\> |
| `length` | `number`                                                |

##### Returns

[`AsFieldElements`](#interfacesasfieldelementsmd)<`T`[]\>

##### Defined in

[snarky.d.ts:233](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L233)

---

#### asProver

▸ `Static` **asProver**(`f`): `void`

##### Parameters

| Name | Type         |
| :--- | :----------- |
| `f`  | () => `void` |

##### Returns

`void`

##### Defined in

[snarky.d.ts:231](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L231)

---

#### assertEqual

▸ `Static` **assertEqual**<`T`\>(`ctor`, `x`, `y`): `void`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name                   | Type                                       |
| :--------------------- | :----------------------------------------- |
| `ctor`                 | `Object`                                   |
| `ctor.toFieldElements` | (`x`: `T`) => [`Field`](#classesfieldmd)[] |
| `x`                    | `T`                                        |
| `y`                    | `T`                                        |

##### Returns

`void`

##### Defined in

[snarky.d.ts:238](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L238)

▸ `Static` **assertEqual**<`T`\>(`x`, `y`): `void`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `x`  | `T`  |
| `y`  | `T`  |

##### Returns

`void`

##### Defined in

[snarky.d.ts:244](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L244)

---

#### equal

▸ `Static` **equal**<`T`\>(`ctor`, `x`, `y`): [`Bool`](#classesboolmd)

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name                   | Type                                       |
| :--------------------- | :----------------------------------------- |
| `ctor`                 | `Object`                                   |
| `ctor.toFieldElements` | (`x`: `T`) => [`Field`](#classesfieldmd)[] |
| `x`                    | `T`                                        |
| `y`                    | `T`                                        |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:246](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L246)

▸ `Static` **equal**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type  |
| :--- | :---- |
| `x`  | `any` |
| `y`  | `any` |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:248](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L248)

---

#### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](#classeskeypairmd)

##### Returns

[`Keypair`](#classeskeypairmd)

##### Defined in

[snarky.d.ts:254](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L254)

---

#### if

▸ `Static` **if**<`T`\>(`b`, `ctor`, `x`, `y`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name   | Type                                                    |
| :----- | :------------------------------------------------------ |
| `b`    | `boolean` \| [`Bool`](#classesboolmd)                   |
| `ctor` | [`AsFieldElements`](#interfacesasfieldelementsmd)<`T`\> |
| `x`    | `T`                                                     |
| `y`    | `T`                                                     |

##### Returns

`T`

##### Defined in

[snarky.d.ts:250](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L250)

▸ `Static` **if**<`T`\>(`b`, `x`, `y`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `b`  | `boolean` \| [`Bool`](#classesboolmd) |
| `x`  | `T`                                   |
| `y`  | `T`                                   |

##### Returns

`T`

##### Defined in

[snarky.d.ts:252](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L252)

---

#### newVariable

▸ `Static` **newVariable**(`f`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                                  |
| :--- | :-------------------------------------------------------------------- |
| `f`  | () => `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:220](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L220)

---

#### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `kp`): [`Proof`](#classesproofmd)

##### Parameters

| Name           | Type                           |
| :------------- | :----------------------------- |
| `privateInput` | `any`[]                        |
| `publicInput`  | `any`[]                        |
| `kp`           | [`Keypair`](#classeskeypairmd) |

##### Returns

[`Proof`](#classesproofmd)

##### Defined in

[snarky.d.ts:256](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L256)

---

#### toFieldElements

▸ `Static` **toFieldElements**<`A`\>(`A`): [`Field`](#classesfieldmd)[]

##### Type parameters

| Name |
| :--- |
| `A`  |

##### Parameters

| Name | Type  |
| :--- | :---- |
| `A`  | `any` |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:260](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L260)

---

#### verify

▸ `Static` **verify**(`publicInput`, `vk`, `pi`): `boolean`

##### Parameters

| Name          | Type                                           |
| :------------ | :--------------------------------------------- |
| `publicInput` | `any`[]                                        |
| `vk`          | [`VerificationKey`](#classesverificationkeymd) |
| `pi`          | [`Proof`](#classesproofmd)                     |

##### Returns

`boolean`

##### Defined in

[snarky.d.ts:258](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L258)

---

#### witness

▸ `Static` **witness**<`T`\>(`ctor`, `f`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name                       | Type                                       |
| :------------------------- | :----------------------------------------- |
| `ctor`                     | `Object`                                   |
| `ctor.ofFieldElements`     | (`x`: [`Field`](#classesfieldmd)[]) => `T` |
| `ctor.sizeInFieldElements` | () => `number`                             |
| `ctor.toFieldElements`     | (`x`: `T`) => [`Field`](#classesfieldmd)[] |
| `f`                        | () => `T`                                  |

##### Returns

`T`

##### Defined in

[snarky.d.ts:222](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L222)

<a name="classescircuitvaluemd"></a>

## Class: CircuitValue

### Hierarchy

- **`CircuitValue`**

  ↳ [`PrivateKey`](#classesprivatekeymd)

  ↳ [`PublicKey`](#classespublickeymd)

  ↳ [`Signature`](#classessignaturemd)

### Constructors

#### constructor

• **new CircuitValue**()

### Methods

#### assertEquals

▸ **assertEquals**(`x`): `void`

##### Parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `x`  | [`CircuitValue`](#classescircuitvaluemd) |

##### Returns

`void`

##### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

#### equals

▸ **equals**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `x`  | [`CircuitValue`](#classescircuitvaluemd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

#### fromJSON

▸ `Static` **fromJSON**<`T`\>(`value`): `null` \| `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `value` | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| `T`

##### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**<`T`\>(`xs`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `xs` | [`Field`](#classesfieldmd)[] |

##### Returns

`T`

##### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[lib/circuit_value.ts:9](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L9)

---

#### toFieldElements

▸ `Static` **toFieldElements**<`T`\>(`v`): [`Field`](#classesfieldmd)[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[lib/circuit_value.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L14)

---

#### toJSON

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](#jsonvalue)

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)

<a name="classescollectionmd"></a>

## Class: Collection<A\>

### Type parameters

| Name |
| :--- |
| `A`  |

### Constructors

#### constructor

• **new Collection**<`A`\>(`eltTyp`, `f`, `root?`)

##### Type parameters

| Name |
| :--- |
| `A`  |

##### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `eltTyp` | [`AsFieldElements`](#interfacesasfieldelementsmd)<`A`\> |
| `f`      | () => [`Tree`](#classestreemd)<`A`\>                    |
| `root?`  | [`Field`](#classesfieldmd)                              |

##### Defined in

[lib/merkle_proof.ts:354](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L354)

### Properties

#### cachedPaths

• **cachedPaths**: `Map`<`number`, [`Field`](#classesfieldmd)[]\>

##### Defined in

[lib/merkle_proof.ts:343](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L343)

---

#### cachedValues

• **cachedValues**: `Map`<`number`, `Object`\>

##### Defined in

[lib/merkle_proof.ts:344](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L344)

---

#### eltTyp

• **eltTyp**: [`AsFieldElements`](#interfacesasfieldelementsmd)<`A`\>

##### Defined in

[lib/merkle_proof.ts:336](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L336)

---

#### root

• **root**: `null` \| [`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:345](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L345)

---

#### values

• **values**: { `computed`: `true` ; `value`: [`MerkleTree`](#interfacesmerkletreemd)<`A`\> } \| { `computed`: `false` ; `f`: () => [`MerkleTree`](#interfacesmerkletreemd)<`A`\> }

##### Defined in

[lib/merkle_proof.ts:337](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L337)

### Methods

#### get

▸ **get**(`i`): `A`

##### Parameters

| Name | Type    |
| :--- | :------ |
| `i`  | `Index` |

##### Returns

`A`

##### Defined in

[lib/merkle_proof.ts:414](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L414)

---

#### getRoot

▸ **getRoot**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:347](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L347)

---

#### getValues

▸ `Private` **getValues**(): [`MerkleTree`](#interfacesmerkletreemd)<`A`\>

##### Returns

[`MerkleTree`](#interfacesmerkletreemd)<`A`\>

##### Defined in

[lib/merkle_proof.ts:362](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L362)

---

#### set

▸ **set**(`i`, `x`): `void`

##### Parameters

| Name | Type    |
| :--- | :------ |
| `i`  | `Index` |
| `x`  | `A`     |

##### Returns

`void`

##### Defined in

[lib/merkle_proof.ts:372](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L372)

<a name="classesendoscalarmd"></a>

## Class: EndoScalar

### Constructors

#### constructor

• **new EndoScalar**()

### Methods

#### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Scalar`](#classesscalarmd)

##### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `fields` | [`Field`](#classesfieldmd)[] |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:310](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L310)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:311](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L311)

---

#### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `x`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:309](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L309)

<a name="classesfieldmd"></a>

## Class: Field

### Constructors

#### constructor

• **new Field**(`x`)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Defined in

[snarky.d.ts:24](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L24)

### Properties

#### one

▪ `Static` **one**: [`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:73](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L73)

---

#### zero

▪ `Static` **zero**: [`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:74](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L74)

### Methods

#### add

▸ **add**(`y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L29)

---

#### assertBoolean

▸ **assertBoolean**(): `void`

##### Returns

`void`

##### Defined in

[snarky.d.ts:54](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L54)

---

#### assertEquals

▸ **assertEquals**(`y`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:53](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L53)

---

#### assertGt

▸ **assertGt**(`y`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:50](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L50)

---

#### assertGte

▸ **assertGte**(`y`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:51](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L51)

---

#### assertLt

▸ **assertLt**(`y`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:48](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L48)

---

#### assertLte

▸ **assertLte**(`y`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:49](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L49)

---

#### div

▸ **div**(`y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:32](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L32)

---

#### equals

▸ **equals**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:68](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L68)

---

#### gt

▸ **gt**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L45)

---

#### gte

▸ **gte**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:46](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L46)

---

#### inv

▸ **inv**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:27](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L27)

---

#### isZero

▸ **isZero**(): [`Bool`](#classesboolmd)

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:55](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L55)

---

#### lt

▸ **lt**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:43](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L43)

---

#### lte

▸ **lte**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:44](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L44)

---

#### mul

▸ **mul**(`y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:31](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L31)

---

#### neg

▸ **neg**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:26](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L26)

---

#### sizeInFieldElements

▸ **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:40](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L40)

---

#### sqrt

▸ **sqrt**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:35](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L35)

---

#### square

▸ **square**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:34](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L34)

---

#### sub

▸ **sub**(`y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:30](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L30)

---

#### toBits

▸ **toBits**(): [`Bool`](#classesboolmd)[]

Little endian binary representation of the field element.

##### Returns

[`Bool`](#classesboolmd)[]

##### Defined in

[snarky.d.ts:60](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L60)

▸ **toBits**(`length`): [`Bool`](#classesboolmd)[]

Little endian binary representation of the field element.
Fails if the field element cannot fit in `length` bits.

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `length` | `number` |

##### Returns

[`Bool`](#classesboolmd)[]

##### Defined in

[snarky.d.ts:66](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L66)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L41)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:38](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L38)

---

#### toString

▸ **toString**(): `string`

##### Returns

`string`

##### Defined in

[snarky.d.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L37)

---

#### add

▸ `Static` **add**(`x`, `y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:80](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L80)

---

#### assertBoolean

▸ `Static` **assertBoolean**(`x`): `void`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:110](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L110)

---

#### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:106](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L106)

---

#### div

▸ `Static` **div**(`x`, `y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:92](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L92)

---

#### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:116](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L116)

---

#### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                      |
| :--- | :------------------------ |
| `x`  | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| [`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:122](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L122)

---

#### inv

▸ `Static` **inv**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:78](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L78)

---

#### isZero

▸ `Static` **isZero**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:111](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L111)

---

#### mul

▸ `Static` **mul**(`x`, `y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:88](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L88)

---

#### neg

▸ `Static` **neg**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:77](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L77)

---

#### ofBits

▸ `Static` **ofBits**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `x`  | (`boolean` \| [`Bool`](#classesboolmd))[] |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:113](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L113)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Field`](#classesfieldmd)

##### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `fields` | [`Field`](#classesfieldmd)[] |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:104](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L104)

---

#### random

▸ `Static` **random**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:75](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L75)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:102](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L102)

---

#### sqrt

▸ `Static` **sqrt**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:98](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L98)

---

#### square

▸ `Static` **square**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:97](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L97)

---

#### sub

▸ `Static` **sub**(`x`, `y`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:84](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L84)

---

#### toBits

▸ `Static` **toBits**(`x`): [`Bool`](#classesboolmd)[]

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

[`Bool`](#classesboolmd)[]

##### Defined in

[snarky.d.ts:114](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L114)

---

#### toConstant

▸ `Static` **toConstant**(`x`): [`Field`](#classesfieldmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:124](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L124)

---

#### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Field`](#classesfieldmd) |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:103](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L103)

---

#### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](#jsonvalue)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Field`](#classesfieldmd) |

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:121](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L121)

---

#### toString

▸ `Static` **toString**(`x`): `string`

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Returns

`string`

##### Defined in

[snarky.d.ts:100](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L100)

<a name="classesgroupmd"></a>

## Class: Group

### Constructors

#### constructor

• **new Group**(`args`)

##### Parameters

| Name     | Type                                                            |
| :------- | :-------------------------------------------------------------- |
| `args`   | `Object`                                                        |
| `args.x` | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `args.y` | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Defined in

[snarky.d.ts:329](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L329)

• **new Group**(`x`, `y`)

##### Parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](#classesfieldmd) |

##### Defined in

[snarky.d.ts:333](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L333)

### Properties

#### x

• **x**: [`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:315](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L315)

---

#### y

• **y**: [`Field`](#classesfieldmd)

##### Defined in

[snarky.d.ts:316](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L316)

---

#### generator

▪ `Static` **generator**: [`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:338](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L338)

### Methods

#### add

▸ **add**(`y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:318](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L318)

---

#### assertEquals

▸ **assertEquals**(`y`): `void`

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:324](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L324)

---

#### endoScale

▸ **endoScale**(`y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `y`  | [`EndoScalar`](#classesendoscalarmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:322](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L322)

---

#### equals

▸ **equals**(`y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:325](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L325)

---

#### neg

▸ **neg**(): [`Group`](#classesgroupmd)

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:320](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L320)

---

#### scale

▸ **scale**(`y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:321](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L321)

---

#### sub

▸ **sub**(`y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:319](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L319)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:327](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L327)

---

#### add

▸ `Static` **add**(`x`, `y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:339](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L339)

---

#### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

`void`

##### Defined in

[snarky.d.ts:345](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L345)

---

#### endoScale

▸ `Static` **endoScale**(`x`, `y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `x`  | [`Group`](#classesgroupmd)           |
| `y`  | [`EndoScalar`](#classesendoscalarmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:343](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L343)

---

#### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[snarky.d.ts:346](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L346)

---

#### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                      |
| :--- | :------------------------ |
| `x`  | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| [`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:353](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L353)

---

#### neg

▸ `Static` **neg**(`x`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:341](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L341)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Group`](#classesgroupmd)

##### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `fields` | [`Field`](#classesfieldmd)[] |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:349](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L349)

---

#### scale

▸ `Static` **scale**(`x`, `y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `x`  | [`Group`](#classesgroupmd)   |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:342](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L342)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:350](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L350)

---

#### sub

▸ `Static` **sub**(`x`, `y`): [`Group`](#classesgroupmd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |
| `y`  | [`Group`](#classesgroupmd) |

##### Returns

[`Group`](#classesgroupmd)

##### Defined in

[snarky.d.ts:340](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L340)

---

#### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:348](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L348)

---

#### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](#jsonvalue)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `x`  | [`Group`](#classesgroupmd) |

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:352](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L352)

<a name="classesindexbasemd"></a>

## Class: IndexBase

### Constructors

#### constructor

• **new IndexBase**(`value`)

##### Parameters

| Name    | Type                       |
| :------ | :------------------------- |
| `value` | [`Bool`](#classesboolmd)[] |

##### Defined in

[lib/merkle_proof.ts:10](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L10)

### Properties

#### id

• **id**: `number`

##### Defined in

[lib/merkle_proof.ts:7](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L7)

---

#### value

• **value**: [`Bool`](#classesboolmd)[]

##### Defined in

[lib/merkle_proof.ts:8](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L8)

<a name="classeskeypairmd"></a>

## Class: Keypair

### Constructors

#### constructor

• **new Keypair**()

### Methods

#### verificationKey

▸ **verificationKey**(): [`VerificationKey`](#classesverificationkeymd)

##### Returns

[`VerificationKey`](#classesverificationkeymd)

##### Defined in

[snarky.d.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L14)

<a name="classesprivatekeymd"></a>

## Class: PrivateKey

### Hierarchy

- [`CircuitValue`](#classescircuitvaluemd)

  ↳ **`PrivateKey`**

### Constructors

#### constructor

• **new PrivateKey**(`s`)

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `s`  | [`Scalar`](#classesscalarmd) |

##### Overrides

[CircuitValue](#classescircuitvaluemd).[constructor](#constructor)

##### Defined in

[lib/signature.ts:7](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L7)

### Properties

#### s

• **s**: [`Scalar`](#classesscalarmd)

##### Defined in

[lib/signature.ts:5](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L5)

### Methods

#### assertEquals

▸ **assertEquals**(`x`): `void`

##### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `x`  | [`PrivateKey`](#classesprivatekeymd) |

##### Returns

`void`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[assertEquals](#assertequals)

##### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

#### equals

▸ **equals**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `x`  | [`PrivateKey`](#classesprivatekeymd) |

##### Returns

[`Bool`](#classesboolmd)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[equals](#equals)

##### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

#### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](#classespublickeymd)

##### Returns

[`PublicKey`](#classespublickeymd)

##### Defined in

[lib/signature.ts:20](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L20)

---

#### fromJSON

▸ `Static` **fromJSON**<`T`\>(`value`): `null` \| `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `value` | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| `T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[fromJSON](#fromjson)

##### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

#### ofBits

▸ `Static` **ofBits**(`bs`): [`PrivateKey`](#classesprivatekeymd)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `bs` | [`Bool`](#classesboolmd)[] |

##### Returns

[`PrivateKey`](#classesprivatekeymd)

##### Defined in

[lib/signature.ts:16](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L16)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**<`T`\>(`xs`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `xs` | [`Field`](#classesfieldmd)[] |

##### Returns

`T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[ofFieldElements](#offieldelements)

##### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

#### random

▸ `Static` **random**(): [`PrivateKey`](#classesprivatekeymd)

##### Returns

[`PrivateKey`](#classesprivatekeymd)

##### Defined in

[lib/signature.ts:12](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L12)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[sizeInFieldElements](#sizeinfieldelements)

##### Defined in

[lib/circuit_value.ts:9](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L9)

---

#### toFieldElements

▸ `Static` **toFieldElements**<`T`\>(`v`): [`Field`](#classesfieldmd)[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L14)

---

#### toJSON

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](#jsonvalue)

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)

<a name="classesproofmd"></a>

## Class: Proof

### Constructors

#### constructor

• **new Proof**()

### Methods

#### verify

▸ **verify**(`verificationKey`, `publicInput`): `boolean`

##### Parameters

| Name              | Type                                           |
| :---------------- | :--------------------------------------------- |
| `verificationKey` | [`VerificationKey`](#classesverificationkeymd) |
| `publicInput`     | `any`[]                                        |

##### Returns

`boolean`

##### Defined in

[snarky.d.ts:18](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L18)

<a name="classespublickeymd"></a>

## Class: PublicKey

### Hierarchy

- [`CircuitValue`](#classescircuitvaluemd)

  ↳ **`PublicKey`**

### Constructors

#### constructor

• **new PublicKey**(`g`)

##### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `g`  | [`Group`](#classesgroupmd) |

##### Overrides

[CircuitValue](#classescircuitvaluemd).[constructor](#constructor)

##### Defined in

[lib/signature.ts:28](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L28)

### Properties

#### g

• **g**: [`Group`](#classesgroupmd)

##### Defined in

[lib/signature.ts:26](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L26)

### Methods

#### assertEquals

▸ **assertEquals**(`x`): `void`

##### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `x`  | [`PublicKey`](#classespublickeymd) |

##### Returns

`void`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[assertEquals](#assertequals)

##### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

#### equals

▸ **equals**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `x`  | [`PublicKey`](#classespublickeymd) |

##### Returns

[`Bool`](#classesboolmd)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[equals](#equals)

##### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

#### fromJSON

▸ `Static` **fromJSON**<`T`\>(`value`): `null` \| `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `value` | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| `T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[fromJSON](#fromjson)

##### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

#### fromPrivateKey

▸ `Static` **fromPrivateKey**(`p`): [`PublicKey`](#classespublickeymd)

##### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `p`  | [`PrivateKey`](#classesprivatekeymd) |

##### Returns

[`PublicKey`](#classespublickeymd)

##### Defined in

[lib/signature.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L33)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**<`T`\>(`xs`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `xs` | [`Field`](#classesfieldmd)[] |

##### Returns

`T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[ofFieldElements](#offieldelements)

##### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[sizeInFieldElements](#sizeinfieldelements)

##### Defined in

[lib/circuit_value.ts:9](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L9)

---

#### toFieldElements

▸ `Static` **toFieldElements**<`T`\>(`v`): [`Field`](#classesfieldmd)[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L14)

---

#### toJSON

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](#jsonvalue)

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)

<a name="classesscalarmd"></a>

## Class: Scalar

### Constructors

#### constructor

• **new Scalar**()

### Methods

#### add

▸ **add**(`y`): [`Scalar`](#classesscalarmd)

Add scalar field elements.
Can only be called outside of circuit execution

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:276](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L276)

---

#### div

▸ **div**(`y`): [`Scalar`](#classesscalarmd)

Divide scalar field elements.
Can only be called outside of circuit execution

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:294](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L294)

---

#### mul

▸ **mul**(`y`): [`Scalar`](#classesscalarmd)

Multiply scalar field elements.
Can only be called outside of circuit execution

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:288](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L288)

---

#### neg

▸ **neg**(): [`Scalar`](#classesscalarmd)

Negate a scalar field element.
Can only be called outside of circuit execution

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:270](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L270)

---

#### sub

▸ **sub**(`y`): [`Scalar`](#classesscalarmd)

Subtract scalar field elements.
Can only be called outside of circuit execution

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `y`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:282](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L282)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:264](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L264)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:296](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L296)

---

#### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Scalar`](#classesscalarmd)

##### Parameters

| Name | Type                      |
| :--- | :------------------------ |
| `x`  | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| [`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:305](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L305)

---

#### ofBits

▸ `Static` **ofBits**(`bits`): [`Scalar`](#classesscalarmd)

##### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `bits` | [`Bool`](#classesboolmd)[] |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:301](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L301)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Scalar`](#classesscalarmd)

##### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `fields` | [`Field`](#classesfieldmd)[] |

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:299](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L299)

---

#### random

▸ `Static` **random**(): [`Scalar`](#classesscalarmd)

##### Returns

[`Scalar`](#classesscalarmd)

##### Defined in

[snarky.d.ts:302](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L302)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:300](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L300)

---

#### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `x`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:298](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L298)

---

#### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](#jsonvalue)

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `x`  | [`Scalar`](#classesscalarmd) |

##### Returns

[`JSONValue`](#jsonvalue)

##### Defined in

[snarky.d.ts:304](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L304)

<a name="classessignaturemd"></a>

## Class: Signature

### Hierarchy

- [`CircuitValue`](#classescircuitvaluemd)

  ↳ **`Signature`**

### Constructors

#### constructor

• **new Signature**(`r`, `s`)

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `r`  | [`Field`](#classesfieldmd)   |
| `s`  | [`Scalar`](#classesscalarmd) |

##### Overrides

[CircuitValue](#classescircuitvaluemd).[constructor](#constructor)

##### Defined in

[lib/signature.ts:42](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L42)

### Properties

#### r

• **r**: [`Field`](#classesfieldmd)

##### Defined in

[lib/signature.ts:39](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L39)

---

#### s

• **s**: [`Scalar`](#classesscalarmd)

##### Defined in

[lib/signature.ts:40](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L40)

### Methods

#### assertEquals

▸ **assertEquals**(`x`): `void`

##### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `x`  | [`Signature`](#classessignaturemd) |

##### Returns

`void`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[assertEquals](#assertequals)

##### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

#### equals

▸ **equals**(`x`): [`Bool`](#classesboolmd)

##### Parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `x`  | [`Signature`](#classessignaturemd) |

##### Returns

[`Bool`](#classesboolmd)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[equals](#equals)

##### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

#### toFieldElements

▸ **toFieldElements**(): [`Field`](#classesfieldmd)[]

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

#### toJSON

▸ **toJSON**(): [`JSONValue`](#jsonvalue)

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

#### verify

▸ **verify**(`publicKey`, `msg`): [`Bool`](#classesboolmd)

##### Parameters

| Name        | Type                               |
| :---------- | :--------------------------------- |
| `publicKey` | [`PublicKey`](#classespublickeymd) |
| `msg`       | [`Field`](#classesfieldmd)[]       |

##### Returns

[`Bool`](#classesboolmd)

##### Defined in

[lib/signature.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L61)

---

#### create

▸ `Static` **create**(`privKey`, `msg`): [`Signature`](#classessignaturemd)

##### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `privKey` | [`PrivateKey`](#classesprivatekeymd) |
| `msg`     | [`Field`](#classesfieldmd)[]         |

##### Returns

[`Signature`](#classessignaturemd)

##### Defined in

[lib/signature.ts:48](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L48)

---

#### fromJSON

▸ `Static` **fromJSON**<`T`\>(`value`): `null` \| `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `value` | [`JSONValue`](#jsonvalue) |

##### Returns

`null` \| `T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[fromJSON](#fromjson)

##### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

#### ofFieldElements

▸ `Static` **ofFieldElements**<`T`\>(`xs`): `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `xs` | [`Field`](#classesfieldmd)[] |

##### Returns

`T`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[ofFieldElements](#offieldelements)

##### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

#### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[sizeInFieldElements](#sizeinfieldelements)

##### Defined in

[lib/circuit_value.ts:9](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L9)

---

#### toFieldElements

▸ `Static` **toFieldElements**<`T`\>(`v`): [`Field`](#classesfieldmd)[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`Field`](#classesfieldmd)[]

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toFieldElements](#tofieldelements)

##### Defined in

[lib/circuit_value.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L14)

---

#### toJSON

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](#jsonvalue)

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

[`JSONValue`](#jsonvalue)

##### Inherited from

[CircuitValue](#classescircuitvaluemd).[toJSON](#tojson)

##### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)

<a name="classestreemd"></a>

## Class: Tree<A\>

### Type parameters

| Name |
| :--- |
| `A`  |

### Constructors

#### constructor

• **new Tree**<`A`\>(`depth`, `hashElement`, `values`)

##### Type parameters

| Name |
| :--- |
| `A`  |

##### Parameters

| Name          | Type                                     |
| :------------ | :--------------------------------------- |
| `depth`       | `number`                                 |
| `hashElement` | (`a`: `A`) => [`Field`](#classesfieldmd) |
| `values`      | `A`[]                                    |

##### Defined in

[lib/merkle_proof.ts:201](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L201)

### Properties

#### value

• **value**: `BinTree`<`A`\>

##### Defined in

[lib/merkle_proof.ts:199](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L199)

### Methods

#### get

▸ **get**(`index`): `Object`

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

`Object`

| Name    | Type                       |
| :------ | :------------------------- |
| `hash`  | [`Field`](#classesfieldmd) |
| `value` | `null` \| `A`              |

##### Defined in

[lib/merkle_proof.ts:260](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L260)

---

#### getElementHash

▸ **getElementHash**(`index`): [`Field`](#classesfieldmd)

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:288](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L288)

---

#### getMerklePath

▸ **getMerklePath**(`index`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[lib/merkle_proof.ts:292](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L292)

---

#### getValue

▸ **getValue**(`index`): `null` \| `A`

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

`null` \| `A`

##### Defined in

[lib/merkle_proof.ts:284](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L284)

---

#### root

▸ **root**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:205](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L205)

---

#### setValue

▸ **setValue**(`index`, `x`, `eltHash`): `void`

##### Parameters

| Name      | Type                       |
| :-------- | :------------------------- |
| `index`   | `boolean`[]                |
| `x`       | `A`                        |
| `eltHash` | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[lib/merkle_proof.ts:209](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L209)

<a name="classesverificationkeymd"></a>

## Class: VerificationKey

### Constructors

#### constructor

• **new VerificationKey**()

### Methods

#### verify

▸ **verify**(`publicInput`, `proof`): `boolean`

##### Parameters

| Name          | Type                       |
| :------------ | :------------------------- |
| `publicInput` | `any`[]                    |
| `proof`       | [`Proof`](#classesproofmd) |

##### Returns

`boolean`

##### Defined in

[snarky.d.ts:10](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L10)

# Interfaces

<a name="interfacesasfieldelementsmd"></a>

## Interface: AsFieldElements<T\>

### Type parameters

| Name |
| :--- |
| `T`  |

### Methods

#### ofFieldElements

▸ **ofFieldElements**(`x`): `T`

##### Parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `x`  | [`Field`](#classesfieldmd)[] |

##### Returns

`T`

##### Defined in

[snarky.d.ts:180](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L180)

---

#### sizeInFieldElements

▸ **sizeInFieldElements**(): `number`

##### Returns

`number`

##### Defined in

[snarky.d.ts:181](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L181)

---

#### toFieldElements

▸ **toFieldElements**(`x`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name | Type |
| :--- | :--- |
| `x`  | `T`  |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[snarky.d.ts:179](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L179)

<a name="interfacescircuitmainmd"></a>

## Interface: CircuitMain<W, P\>

### Type parameters

| Name |
| :--- |
| `W`  |
| `P`  |

### Properties

#### snarkyPublicTyp

• **snarkyPublicTyp**: [`AsFieldElements`](#interfacesasfieldelementsmd)<`P`\>

##### Defined in

[snarky.d.ts:186](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L186)

---

#### snarkyWitnessTyp

• **snarkyWitnessTyp**: [`AsFieldElements`](#interfacesasfieldelementsmd)<`W`\>

##### Defined in

[snarky.d.ts:185](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L185)

### Methods

#### snarkyMain

▸ **snarkyMain**(`W`, `P`): `void`

##### Parameters

| Name | Type  |
| :--- | :---- |
| `W`  | `any` |
| `P`  | `any` |

##### Returns

`void`

##### Defined in

[snarky.d.ts:187](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L187)

<a name="interfacesmerkletreemd"></a>

## Interface: MerkleTree<A\>

### Type parameters

| Name |
| :--- |
| `A`  |

### Methods

#### getElementHash

▸ **getElementHash**(`index`): [`Field`](#classesfieldmd)

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:326](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L326)

---

#### getMerklePath

▸ **getMerklePath**(`index`): [`Field`](#classesfieldmd)[]

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

[`Field`](#classesfieldmd)[]

##### Defined in

[lib/merkle_proof.ts:327](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L327)

---

#### getValue

▸ **getValue**(`index`): `null` \| `A`

##### Parameters

| Name    | Type        |
| :------ | :---------- |
| `index` | `boolean`[] |

##### Returns

`null` \| `A`

##### Defined in

[lib/merkle_proof.ts:325](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L325)

---

#### root

▸ **root**(): [`Field`](#classesfieldmd)

##### Returns

[`Field`](#classesfieldmd)

##### Defined in

[lib/merkle_proof.ts:328](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L328)

---

#### setValue

▸ **setValue**(`index`, `x`, `eltHash`): `void`

##### Parameters

| Name      | Type                       |
| :-------- | :------------------------- |
| `index`   | `boolean`[]                |
| `x`       | `A`                        |
| `eltHash` | [`Field`](#classesfieldmd) |

##### Returns

`void`

##### Defined in

[lib/merkle_proof.ts:324](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/merkle_proof.ts#L324)
