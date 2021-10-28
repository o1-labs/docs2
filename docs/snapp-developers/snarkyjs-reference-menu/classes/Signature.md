---
title: Signature
---

# Class: Signature

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`Signature`**

## Constructors

### constructor

• **new Signature**(`r`, `s`)

#### Parameters

| Name | Type                  |
| :--- | :-------------------- |
| `r`  | [`Field`](Field.md)   |
| `s`  | [`Scalar`](Scalar.md) |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/signature.ts:42](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L42)

## Properties

### r

• **r**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:39](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L39)

---

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:40](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L40)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type                        |
| :--- | :-------------------------- |
| `x`  | [`Signature`](Signature.md) |

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

| Name | Type                        |
| :--- | :-------------------------- |
| `x`  | [`Signature`](Signature.md) |

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

### verify

▸ **verify**(`publicKey`, `msg`): [`Bool`](Bool.md)

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `publicKey` | [`PublicKey`](PublicKey.md) |
| `msg`       | [`Field`](Field.md)[]       |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L61)

---

### create

▸ `Static` **create**(`privKey`, `msg`): [`Signature`](Signature.md)

#### Parameters

| Name      | Type                          |
| :-------- | :---------------------------- |
| `privKey` | [`PrivateKey`](PrivateKey.md) |
| `msg`     | [`Field`](Field.md)[]         |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[lib/signature.ts:48](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L48)

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
