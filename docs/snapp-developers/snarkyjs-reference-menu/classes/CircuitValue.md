---
title: CircuitValue
---

# Class: CircuitValue

## Hierarchy

- **`CircuitValue`**

  ↳ [`PrivateKey`](PrivateKey.md)

  ↳ [`PublicKey`](PublicKey.md)

  ↳ [`Signature`](Signature.md)

## Constructors

### constructor

• **new CircuitValue**()

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `x`  | [`CircuitValue`](CircuitValue.md) |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `x`  | [`CircuitValue`](CircuitValue.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

### toFieldElements

▸ **toFieldElements**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

### toJSON

▸ **toJSON**(): [`JSONValue`](../overview#jsonvalue)

#### Returns

[`JSONValue`](../overview#jsonvalue)

#### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`value`): `null` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                 |
| :------ | :----------------------------------- |
| `value` | [`JSONValue`](../overview#jsonvalue) |

#### Returns

`null` \| `T`

#### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

### ofFieldElements

▸ `Static` **ofFieldElements**<`T`\>(`xs`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `xs` | [`Field`](Field.md)[] |

#### Returns

`T`

#### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Defined in

[lib/circuit_value.ts:9](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L9)

---

### toFieldElements

▸ `Static` **toFieldElements**<`T`\>(`v`): [`Field`](Field.md)[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit_value.ts:14](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L14)

---

### toJSON

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](../overview#jsonvalue)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

#### Returns

[`JSONValue`](../overview#jsonvalue)

#### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)
