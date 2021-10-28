---
title: PublicKey
---

# Class: PublicKey

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`PublicKey`**

## Constructors

### constructor

• **new PublicKey**(`g`)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `g`  | [`Group`](Group.md) |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/signature.ts:28](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L28)

## Properties

### g

• **g**: [`Group`](Group.md)

#### Defined in

[lib/signature.ts:26](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L26)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type                        |
| :--- | :-------------------------- |
| `x`  | [`PublicKey`](PublicKey.md) |

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
| `x`  | [`PublicKey`](PublicKey.md) |

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

▸ **toJSON**(): [`JSONValue`](../README.md#jsonvalue)

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

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

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `value` | [`JSONValue`](../README.md#jsonvalue) |

#### Returns

`null` \| `T`

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:72](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L72)

---

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`p`): [`PublicKey`](PublicKey.md)

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `p`  | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[lib/signature.ts:33](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/signature.ts#L33)

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

▸ `Static` **toJSON**<`T`\>(`v`): [`JSONValue`](../README.md#jsonvalue)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

#### Returns

[`JSONValue`](../README.md#jsonvalue)

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:61](https://github.com/MartinMinkov/snarkyjs/blob/4ba764b/src/lib/circuit_value.ts#L61)
