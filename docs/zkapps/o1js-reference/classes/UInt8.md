[o1js](../README.md) / [Modules](../modules.md) / UInt8

# Class: UInt8

A 8 bit unsigned integer with values ranging from 0 to 255.

## Hierarchy

- \{ `value`: [`Field`](Field.md) = Field }

  ↳ **`UInt8`**

## Table of contents

### Constructors

- [constructor](UInt8.md#constructor)

### Properties

- [value](UInt8.md#value)
- [NUM\_BITS](UInt8.md#num_bits)
- [Unsafe](UInt8.md#unsafe)
- [\_isStruct](UInt8.md#_isstruct)
- [empty](UInt8.md#empty)
- [fromFields](UInt8.md#fromfields)
- [fromJSON](UInt8.md#fromjson)
- [toAuxiliary](UInt8.md#toauxiliary)
- [toFields](UInt8.md#tofields)
- [toJSON](UInt8.md#tojson)

### Methods

- [add](UInt8.md#add)
- [assertEquals](UInt8.md#assertequals)
- [assertGreaterThan](UInt8.md#assertgreaterthan)
- [assertGreaterThanOrEqual](UInt8.md#assertgreaterthanorequal)
- [assertLessThan](UInt8.md#assertlessthan)
- [assertLessThanOrEqual](UInt8.md#assertlessthanorequal)
- [div](UInt8.md#div)
- [divMod](UInt8.md#divmod)
- [greaterThan](UInt8.md#greaterthan)
- [greaterThanOrEqual](UInt8.md#greaterthanorequal)
- [lessThan](UInt8.md#lessthan)
- [lessThanOrEqual](UInt8.md#lessthanorequal)
- [mod](UInt8.md#mod)
- [mul](UInt8.md#mul)
- [sub](UInt8.md#sub)
- [toBigInt](UInt8.md#tobigint)
- [toNumber](UInt8.md#tonumber)
- [toString](UInt8.md#tostring)
- [toUInt32](UInt8.md#touint32)
- [toUInt64](UInt8.md#touint64)
- [MAXINT](UInt8.md#maxint)
- [check](UInt8.md#check)
- [checkConstant](UInt8.md#checkconstant)
- [from](UInt8.md#from)
- [sizeInFields](UInt8.md#sizeinfields)
- [toInput](UInt8.md#toinput)

## Constructors

### constructor

• **new UInt8**(`x`)

Create a [UInt8](UInt8.md) from a bigint or number.
The max value of a [UInt8](UInt8.md) is `2^8 - 1 = 255`.

**Warning**: Cannot overflow past 255, an error is thrown if the result is greater than 255.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| `bigint` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`UInt8`](UInt8.md) |

#### Overrides

Struct(\{
  value: Field,
}).constructor

#### Defined in

[lib/int.ts:1314](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1314)

## Properties

### value

• **value**: [`Field`](Field.md) = `Field`

#### Inherited from

Struct(\{
  value: Field,
}).value

#### Defined in

[lib/int.ts:1304](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1304)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `8`

#### Defined in

[lib/int.ts:1306](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1306)

___

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromField` | (`x`: [`Field`](Field.md)) => [`UInt8`](UInt8.md) |

#### Defined in

[lib/int.ts:1320](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1320)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(\{
  value: Field,
}).\_isStruct

#### Defined in

[lib/circuit_value.ts:381](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L381)

___

### empty

▪ `Static` **empty**: () => \{ `value`: [`Field`](Field.md) = Field }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  value: Field,
}).empty

#### Defined in

[lib/circuit_value.ts:390](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L390)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: [`Field`](Field.md)[]) => \{ `value`: [`Field`](Field.md) = Field }

#### Type declaration

▸ (`fields`): `Object`

A function that returns an element of type `T` from the given provable data.

**Important**: For any element of type `T`, this function is the reverse operation of calling [toFields](../interfaces/ProvablePure.md#tofields) method on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](Field.md)[] | an array of [Field](Field.md) elements describing the provable data of the new `T` element. |

##### Returns

`Object`

An element of type `T` generated from the given provable data.

| Name | Type |
| :------ | :------ |
| `value` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  value: Field,
}).fromFields

#### Defined in

[snarky.d.ts:138](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L138)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: \{ `value`: `string` = Field }) => \{ `value`: [`Field`](Field.md) = Field }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.value` | `string` | `Field` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  value: Field,
}).fromJSON

#### Defined in

[lib/circuit_value.ts:389](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L389)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `value`: [`Field`](Field.md) = Field }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.
As any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition, this function always returns a default value.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value?` | `Object` | `undefined` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.value` | [`Field`](Field.md) | `Field` | - |

##### Returns

`any`[]

An empty array, as any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition.

#### Inherited from

Struct(\{
  value: Field,
}).toAuxiliary

#### Defined in

[snarky.d.ts:127](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L127)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `value`: [`Field`](Field.md) = Field }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](Field.md) array from. |
| `value.value` | [`Field`](Field.md) | `Field` | - |

##### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

Struct(\{
  value: Field,
}).toFields

#### Defined in

[snarky.d.ts:117](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L117)

___

### toJSON

▪ `Static` **toJSON**: (`x`: \{ `value`: [`Field`](Field.md) = Field }) => \{ `value`: `string` = Field }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.value` | [`Field`](Field.md) | `Field` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Inherited from

Struct(\{
  value: Field,
}).toJSON

#### Defined in

[lib/circuit_value.ts:388](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L388)

## Methods

### add

▸ **add**(`y`): [`UInt8`](UInt8.md)

Add a [UInt8](UInt8.md) to another [UInt8](UInt8.md) without allowing overflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

**`Example`**

```ts
const x = UInt8.from(3);
const sum = x.add(5);
sum.assertEquals(8);
```

**`Throws`**

if the result is greater than 255.

#### Defined in

[lib/int.ts:1344](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1344)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Assert that this [UInt8](UInt8.md) is equal another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) | the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[lib/int.ts:1598](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1598)

___

### assertGreaterThan

▸ **assertGreaterThan**(`y`, `message?`): `void`

Assert that this [UInt8](UInt8.md) is greater than another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) | the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[lib/int.ts:1574](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1574)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Assert that this [UInt8](UInt8.md) is greater than or equal to another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | [`UInt8`](UInt8.md) | the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[lib/int.ts:1586](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1586)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Assert that this [UInt8](UInt8.md) is less than another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) | the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[lib/int.ts:1494](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1494)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Assert that this [UInt8](UInt8.md) is less than or equal to another [UInt8](UInt8.md) value.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) | the [UInt8](UInt8.md) value to compare & assert with this [UInt8](UInt8.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[lib/int.ts:1518](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1518)

___

### div

▸ **div**(`y`): [`UInt8`](UInt8.md)

Divide a [UInt8](UInt8.md) by another [UInt8](UInt8.md).
This is integer division that rounds down.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

**`Example`**

```ts
const x = UInt8.from(7);
const quotient = x.div(2);
quotient.assertEquals(3);
```

#### Defined in

[lib/int.ts:1397](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1397)

___

### divMod

▸ **divMod**(`y`): `Object`

Get the quotient and remainder of a [UInt8](UInt8.md) divided by another [UInt8](UInt8.md):

`x == y * q + r`, where `0 <= r < y`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) | a [UInt8](UInt8.md) to get the quotient and remainder of another [UInt8](UInt8.md). |

#### Returns

`Object`

The quotient `q` and remainder `r`.

| Name | Type |
| :------ | :------ |
| `quotient` | [`UInt8`](UInt8.md) |
| `remainder` | [`UInt8`](UInt8.md) |

#### Defined in

[lib/int.ts:1424](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1424)

___

### greaterThan

▸ **greaterThan**(`y`): [`Bool`](Bool.md)

Check if this [UInt8](UInt8.md) is greater than another [UInt8](UInt8.md).
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
// 5 > 3
UInt8.from(5).greaterThan(3);
```

#### Defined in

[lib/int.ts:1548](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1548)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [UInt8](UInt8.md) is greater than or equal another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
// 3 >= 3
UInt8.from(3).greaterThanOrEqual(3);
```

#### Defined in

[lib/int.ts:1562](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1562)

___

### lessThan

▸ **lessThan**(`y`): [`Bool`](Bool.md)

Check if this [UInt8](UInt8.md) is less than another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
UInt8.from(2).lessThan(UInt8.from(3));
```

#### Defined in

[lib/int.ts:1478](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1478)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [UInt8](UInt8.md) is less than or equal to another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
UInt8.from(3).lessThanOrEqual(UInt8.from(5));
```

#### Defined in

[lib/int.ts:1461](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1461)

___

### mod

▸ **mod**(`y`): [`UInt8`](UInt8.md)

Get the remainder a [UInt8](UInt8.md) of division of another [UInt8](UInt8.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

**`Example`**

```ts
const x = UInt8.from(50);
const mod = x.mod(30);
mod.assertEquals(20);
```

#### Defined in

[lib/int.ts:1411](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1411)

___

### mul

▸ **mul**(`y`): [`UInt8`](UInt8.md)

Multiply a [UInt8](UInt8.md) by another [UInt8](UInt8.md) without allowing overflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

**`Example`**

```ts
const x = UInt8.from(3);
const product = x.mul(5);
product.assertEquals(15);
```

**`Throws`**

if the result is greater than 255.

#### Defined in

[lib/int.ts:1380](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1380)

___

### sub

▸ **sub**(`y`): [`UInt8`](UInt8.md)

Subtract a [UInt8](UInt8.md) from another [UInt8](UInt8.md) without allowing underflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

**`Example`**

```ts
const x = UInt8.from(8);
const difference = x.sub(5);
difference.assertEquals(3);
```

**`Throws`**

if the result is less than 0.

#### Defined in

[lib/int.ts:1362](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1362)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize the [UInt8](UInt8.md) to a bigint.

**Warning**: This operation is not provable.

#### Returns

`bigint`

#### Defined in

[lib/int.ts:1626](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1626)

___

### toNumber

▸ **toNumber**(): `number`

Serialize the [UInt8](UInt8.md) to a number.

**Warning**: This operation is not provable.

#### Returns

`number`

#### Defined in

[lib/int.ts:1617](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1617)

___

### toString

▸ **toString**(): `string`

Serialize the [UInt8](UInt8.md) to a string, e.g. for printing.

**Warning**: This operation is not provable.

#### Returns

`string`

#### Defined in

[lib/int.ts:1608](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1608)

___

### toUInt32

▸ **toUInt32**(): [`UInt32`](UInt32.md)

Turns a [UInt8](UInt8.md) into a [UInt32](UInt32.md).

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:1646](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1646)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

Turns a [UInt8](UInt8.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:1653](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1653)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt8`](UInt8.md)

Creates a [UInt8](UInt8.md) with a value of 255.

#### Returns

[`UInt8`](UInt8.md)

#### Defined in

[lib/int.ts:1660](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1660)

___

### check

▸ `Static` **check**(`x`): `void`

[check](../interfaces/Provable.md#check) for [UInt8](UInt8.md).
Proves that the input is in the [0, 255] range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) \| \{ `value`: [`Field`](Field.md)  } |

#### Returns

`void`

#### Overrides

Struct(\{
  value: Field,
}).check

#### Defined in

[lib/int.ts:1634](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1634)

___

### checkConstant

▸ `Static` `Private` **checkConstant**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:1678](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1678)

___

### from

▸ `Static` **from**(`x`): [`UInt8`](UInt8.md)

Creates a new [UInt8](UInt8.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

#### Defined in

[lib/int.ts:1667](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1667)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

Struct(\{
  value: Field,
}).sizeInFields

#### Defined in

[snarky.d.ts:147](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L147)

___

### toInput

▸ `Static` **toInput**(`x`): `HashInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.value` | [`Field`](Field.md) |

#### Returns

`HashInput`

#### Overrides

Struct(\{
  value: Field,
}).toInput

#### Defined in

[lib/int.ts:1639](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1639)
