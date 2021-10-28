---
title: PrivateKey
---

# Class: PrivateKey

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`PrivateKey`**

## Constructors

### constructor

• **new PrivateKey**(`s`)

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `s`  | [`Scalar`](Scalar.md) |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/signature.ts:7](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L7)

## Properties

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:5](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L5)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `x`  | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:41](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L41)

---

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `x`  | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:37](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L37)

---

### toFieldElements

▸ **toFieldElements**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFieldElements](CircuitValue.md#tofieldelements)

#### Defined in

[lib/circuit_value.ts:29](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L29)

---

### toJSON

▸ **toJSON**(): [`JSONValue`](../overview#jsonvalue)

#### Returns

[`JSONValue`](../overview#jsonvalue)

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L33)

---

### toPublicKey

▸ **toPublicKey**(): [`PublicKey`](PublicKey.md)

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[lib/signature.ts:20](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L20)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

### ofBits

▸ `Static` **ofBits**(`bs`): [`PrivateKey`](PrivateKey.md)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `bs` | [`Bool`](Bool.md)[] |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[lib/signature.ts:16](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L16)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[ofFieldElements](CircuitValue.md#offieldelements)

#### Defined in

[lib/circuit_value.ts:45](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L45)

---

### random

▸ `Static` **random**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[lib/signature.ts:12](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L12)

---

### sizeInFieldElements

▸ `Static` **sizeInFieldElements**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFieldElements](CircuitValue.md#sizeinfieldelements)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toFieldElements](CircuitValue.md#tofieldelements)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)
