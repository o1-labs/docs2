---
title: Scalar
---

# Class: Scalar

## Constructors

### constructor

• **new Scalar**()

## Methods

### add

▸ **add**(`y`): [`Scalar`](Scalar.md)

Add scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:276](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L276)

---

### div

▸ **div**(`y`): [`Scalar`](Scalar.md)

Divide scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:294](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L294)

---

### mul

▸ **mul**(`y`): [`Scalar`](Scalar.md)

Multiply scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:288](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L288)

---

### neg

▸ **neg**(): [`Scalar`](Scalar.md)

Negate a scalar field element.
Can only be called outside of circuit execution

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:270](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L270)

---

### sub

▸ **sub**(`y`): [`Scalar`](Scalar.md)

Subtract scalar field elements.
Can only be called outside of circuit execution

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `y`  | [`Scalar`](Scalar.md) |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:282](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L282)

---

### toFieldElements

▸ **toFieldElements**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:264](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L264)

---

### toJSON

▸ **toJSON**(): [`JSONValue`](../overview#jsonvalue)

#### Returns

[`JSONValue`](../overview#jsonvalue)

#### Defined in

[snarky.d.ts:296](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L296)

---

### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Scalar`](Scalar.md)

#### Parameters

| Name | Type                                 |
| :--- | :----------------------------------- |
| `x`  | [`JSONValue`](../overview#jsonvalue) |

#### Returns

`null` \| [`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:305](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L305)

---

### ofBits

▸ `Static` **ofBits**(`bits`): [`Scalar`](Scalar.md)

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `bits` | [`Bool`](Bool.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:301](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L301)

---

### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Scalar`](Scalar.md)

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:299](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L299)

---

### random

▸ `Static` **random**(): [`Scalar`](Scalar.md)

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:302](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L302)

---

### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:300](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L300)

---

### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `x`  | [`Scalar`](Scalar.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:298](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L298)

---

### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](../overview#jsonvalue)

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `x`  | [`Scalar`](Scalar.md) |

#### Returns

[`JSONValue`](../overview#jsonvalue)

#### Defined in

[snarky.d.ts:304](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L304)
