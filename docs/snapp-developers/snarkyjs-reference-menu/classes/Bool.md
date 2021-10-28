---
title: Bool
---

# Class: Bool

## Constructors

### constructor

• **new Bool**(`x`)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:128](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L128)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name      | Type                                                                                 |
| :-------- | :----------------------------------------------------------------------------------- |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:154](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L154)

## Methods

### and

▸ **and**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:133](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L133)

---

### assertEquals

▸ **assertEquals**(`y`): `void`

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:136](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L136)

---

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:138](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L138)

---

### isFalse

▸ **isFalse**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:140](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L140)

---

### isTrue

▸ **isTrue**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:139](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L139)

---

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:132](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L132)

---

### or

▸ **or**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:134](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L134)

---

### sizeInFieldElements

▸ **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:142](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L142)

---

### toBoolean

▸ **toBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:149](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L149)

---

### toField

▸ **toField**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:130](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L130)

---

### toFieldElements

▸ **toFieldElements**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:143](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L143)

---

### toJSON

▸ **toJSON**(): [`JSONValue`](../README.md#jsonvalue)

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Defined in

[snarky.d.ts:146](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L146)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[snarky.d.ts:145](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L145)

---

### and

▸ `Static` **and**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:159](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L159)

---

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:162](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L162)

---

### count

▸ `Static` **count**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type                             |
| :--- | :------------------------------- |
| `x`  | [`Bool`](Bool.md) \| `boolean`[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:168](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L168)

---

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:164](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L164)

---

### fromJSON

▸ `Static` **fromJSON**(`x`): `null` \| [`Bool`](Bool.md)

#### Parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `x`  | [`JSONValue`](../README.md#jsonvalue) |

#### Returns

`null` \| [`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:175](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L175)

---

### isFalse

▸ `Static` **isFalse**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:166](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L166)

---

### isTrue

▸ `Static` **isTrue**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:165](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L165)

---

### not

▸ `Static` **not**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:158](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L158)

---

### ofFieldElements

▸ `Static` **ofFieldElements**(`fields`): [`Bool`](Bool.md)

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:172](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L172)

---

### or

▸ `Static` **or**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |
| `y`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:160](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L160)

---

### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:170](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L170)

---

### toField

▸ `Static` **toField**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:152](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L152)

---

### toFieldElements

▸ `Static` **toFieldElements**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `x`  | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:171](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L171)

---

### toJSON

▸ `Static` **toJSON**(`x`): [`JSONValue`](../README.md#jsonvalue)

#### Parameters

| Name | Type              |
| :--- | :---------------- |
| `x`  | [`Bool`](Bool.md) |

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Defined in

[snarky.d.ts:174](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/snarky.d.ts#L174)
