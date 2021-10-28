---
title: Group
---

# Class: Group

## Constructors

### constructor

• **new Group**(`args`)

#### Parameters

| Name     | Type                                                     |
| :------- | :------------------------------------------------------- |
| `args`   | `Object`                                                 |
| `args.x` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `args.y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:329](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L329)

• **new Group**(`x`, `y`)

#### Parameters

| Name | Type                                                     |
| :--- | :------------------------------------------------------- |
| `x`  | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `y`  | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:333](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L333)

## Properties

### x

• **x**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:315](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L315)

---

### y

• **y**: [`Field`](Field.md)

#### Defined in

[snarky.d.ts:316](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L316)

---

### generator

▪ `Static` **generator**: [`Group`](Group.md)

#### Defined in

[snarky.d.ts:338](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L338)

## Methods

### add

▸ **add**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:318](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L318)

---

### assertEquals

▸ **assertEquals**(`y`): `void`

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `y`  | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:324](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L324)

---

### endoScale

▸ **endoScale**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `y`  | [`EndoScalar`](EndoScalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:322](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L322)

---

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:325](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L325)

---

### neg

▸ **neg**(): [`Group`](Group.md)

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:320](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L320)

---

### scale

▸ **scale**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:321](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L321)

---

### sub

▸ **sub**(`y`): [`Group`](Group.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:319](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L319)

---

### toJSON

▸ **toJSON**(): [`JSONValue`](../README.md#jsonvalue)

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Defined in

[snarky.d.ts:327](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L327)

---

### add

▸ `Static` **add**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:339](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L339)

---

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |
| `y`  | [`Group`](Group.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:345](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L345)

---

### endoScale

▸ `Static` **endoScale**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `x`  | [`Group`](Group.md)           |
| `y`  | [`EndoScalar`](EndoScalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:343](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L343)

---

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:346](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L346)

---

### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Group`](Group.md)

#### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | [`JSONValue`](../README.md#jsonvalue) |

#### Returns

`null` \| [`Group`](Group.md)

#### Defined in

[snarky.d.ts:353](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L353)

---

### neg

▸ `Static` **neg**(`x`): [`Group`](Group.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:341](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L341)

---

### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Group`](Group.md)

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:349](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L349)

---

### scale

▸ `Static` **scale**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `x`  | [`Group`](Group.md)   |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:342](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L342)

---

### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:350](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L350)

---

### sub

▸ `Static` **sub**(`x`, `y`): [`Group`](Group.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |
| `y`  | [`Group`](Group.md) |

#### Returns

[`Group`](Group.md)

#### Defined in

[snarky.d.ts:340](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L340)

---

### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:348](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L348)

---

### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](../README.md#jsonvalue)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `x`  | [`Group`](Group.md) |

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Defined in

[snarky.d.ts:352](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L352)
