---
title: Circuit
---

# Class: Circuit

## Constructors

### constructor

• **new Circuit**()

## Methods

### addConstraint

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `kind` | `"multiply"`        |
| `x`    | [`Field`](Field.md) |
| `y`    | [`Field`](Field.md) |
| `z`    | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:191](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L191)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `kind` | `"add"`             |
| `x`    | [`Field`](Field.md) |
| `y`    | [`Field`](Field.md) |
| `z`    | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:198](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L198)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `kind` | `"equal"`           |
| `x`    | [`Field`](Field.md) |
| `y`    | [`Field`](Field.md) |
| `z`    | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:205](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L205)

▸ `Static` **addConstraint**(`kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `kind` | `"boolean"`         |
| `x`    | [`Field`](Field.md) |
| `y`    | [`Field`](Field.md) |
| `z`    | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:212](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L212)

---

### array

▸ `Static` **array**<`T`\>(`ctor`, `length`): [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`[]\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `ctor`   | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `length` | `number`                                                    |

#### Returns

[`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`[]\>

#### Defined in

[snarky.d.ts:233](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L233)

---

### asProver

▸ `Static` **asProver**(`f`): `void`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `f`  | () => `void` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:231](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L231)

---

### assertEqual

▸ `Static` **assertEqual**<`T`\>(`ctor`, `x`, `y`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                   | Type                                |
| :--------------------- | :---------------------------------- |
| `ctor`                 | `Object`                            |
| `ctor.toFieldElements` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x`                    | `T`                                 |
| `y`                    | `T`                                 |

#### Returns

`void`

#### Defined in

[snarky.d.ts:238](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L238)

▸ `Static` **assertEqual**<`T`\>(`x`, `y`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type |
| :--- | :--- |
| `x`  | `T`  |
| `y`  | `T`  |

#### Returns

`void`

#### Defined in

[snarky.d.ts:244](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L244)

---

### equal

▸ `Static` **equal**<`T`\>(`ctor`, `x`, `y`): [`Bool`](Bool.md)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                   | Type                                |
| :--------------------- | :---------------------------------- |
| `ctor`                 | `Object`                            |
| `ctor.toFieldElements` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x`                    | `T`                                 |
| `y`                    | `T`                                 |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:246](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L246)

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type  |
| :--- | :---- |
| `x`  | `any` |
| `y`  | `any` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:248](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L248)

---

### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](Keypair.md)

#### Returns

[`Keypair`](Keypair.md)

#### Defined in

[snarky.d.ts:254](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L254)

---

### if

▸ `Static` **if**<`T`\>(`b`, `ctor`, `x`, `y`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                                                        |
| :----- | :---------------------------------------------------------- |
| `b`    | `boolean` \| [`Bool`](Bool.md)                              |
| `ctor` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `x`    | `T`                                                         |
| `y`    | `T`                                                         |

#### Returns

`T`

#### Defined in

[snarky.d.ts:250](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L250)

▸ `Static` **if**<`T`\>(`b`, `x`, `y`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `b`  | `boolean` \| [`Bool`](Bool.md) |
| `x`  | `T`                            |
| `y`  | `T`                            |

#### Returns

`T`

#### Defined in

[snarky.d.ts:252](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L252)

---

### newVariable

▸ `Static` **newVariable**(`f`): [`Field`](Field.md)

#### Parameters

| Name | Type                                                           |
| :--- | :------------------------------------------------------------- |
| `f`  | () => `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:220](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L220)

---

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `kp`): [`Proof`](Proof.md)

#### Parameters

| Name           | Type                    |
| :------------- | :---------------------- |
| `privateInput` | `any`[]                 |
| `publicInput`  | `any`[]                 |
| `kp`           | [`Keypair`](Keypair.md) |

#### Returns

[`Proof`](Proof.md)

#### Defined in

[snarky.d.ts:256](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L256)

---

### toFieldElements

▸ `Static` **toFieldElements**<`A`\>(`A`): [`Field`](Field.md)[]

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name | Type  |
| :--- | :---- |
| `A`  | `any` |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:260](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L260)

---

### verify

▸ `Static` **verify**(`publicInput`, `vk`, `pi`): `boolean`

#### Parameters

| Name          | Type                                    |
| :------------ | :-------------------------------------- |
| `publicInput` | `any`[]                                 |
| `vk`          | [`VerificationKey`](VerificationKey.md) |
| `pi`          | [`Proof`](Proof.md)                     |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:258](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L258)

---

### witness

▸ `Static` **witness**<`T`\>(`ctor`, `f`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                       | Type                                |
| :------------------------- | :---------------------------------- |
| `ctor`                     | `Object`                            |
| `ctor.ofFieldElements`     | (`x`: [`Field`](Field.md)[]) => `T` |
| `ctor.sizeInFieldElements` | () => `number`                      |
| `ctor.toFieldElements`     | (`x`: `T`) => [`Field`](Field.md)[] |
| `f`                        | () => `T`                           |

#### Returns

`T`

#### Defined in

[snarky.d.ts:222](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L222)
