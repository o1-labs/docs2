[o1js](../README.md) / [Modules](../modules.md) / UInt8

# Class: UInt8

A 8 bit unsigned integer with values ranging from 0 to 255.

## Hierarchy

- \{ `value`: `Field` = Field }

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
| `x` | `number` \| `bigint` \| `FieldVar` \| [`UInt8`](UInt8.md) |

#### Overrides

Struct(\{
  value: Field,
}).constructor

#### Defined in

[lib/provable/int.ts:1207](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1207)

## Properties

### value

• **value**: `Field` = `Field`

#### Inherited from

Struct(\{
  value: Field,
}).value

#### Defined in

[lib/provable/int.ts:1197](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1197)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `8`

#### Defined in

[lib/provable/int.ts:1199](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1199)

___

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromField` | (`x`: `Field`) => [`UInt8`](UInt8.md) |

#### Defined in

[lib/provable/int.ts:1213](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1213)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(\{
  value: Field,
}).\_isStruct

#### Defined in

[lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L143)

___

### empty

▪ `Static` **empty**: () => \{ `value`: `Field` = Field }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `Field` |

#### Inherited from

Struct(\{
  value: Field,
}).empty

#### Defined in

[lib/provable/types/struct.ts:152](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L152)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: `Field`[]) => \{ `value`: `Field` = Field }

#### Type declaration

▸ (`fields`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `Field` |

#### Inherited from

Struct(\{
  value: Field,
}).fromFields

#### Defined in

[lib/provable/types/provable-intf.ts:77](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L77)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: \{ `value`: `string` = Field }) => \{ `value`: `Field` = Field }

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
| `value` | `Field` |

#### Inherited from

Struct(\{
  value: Field,
}).fromJSON

#### Defined in

[lib/provable/types/struct.ts:151](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L151)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `value`: `Field` = Field }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value?` | `Object` | `undefined` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.value` | `Field` | `Field` | - |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

Struct(\{
  value: Field,
}).toAuxiliary

#### Defined in

[lib/provable/types/provable-intf.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L37)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `value`: `Field` = Field }) => `Field`[]

#### Type declaration

▸ (`value`): `Field`[]

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../modules.md#field) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](../modules.md#field) array from. |
| `value.value` | `Field` | `Field` | - |

##### Returns

`Field`[]

A [Field](../modules.md#field) array describing how this `T` element is made up of [Field](../modules.md#field) elements.

#### Inherited from

Struct(\{
  value: Field,
}).toFields

#### Defined in

[lib/provable/types/provable-intf.ts:26](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L26)

___

### toJSON

▪ `Static` **toJSON**: (`x`: \{ `value`: `Field` = Field }) => \{ `value`: `string` = Field }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.value` | `Field` | `Field` |

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

[lib/provable/types/struct.ts:150](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L150)

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

[lib/provable/int.ts:1237](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1237)

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

[lib/provable/int.ts:1503](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1503)

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

[lib/provable/int.ts:1479](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1479)

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

[lib/provable/int.ts:1491](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1491)

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

[lib/provable/int.ts:1397](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1397)

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

[lib/provable/int.ts:1422](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1422)

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

[lib/provable/int.ts:1290](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1290)

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

[lib/provable/int.ts:1317](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1317)

___

### greaterThan

▸ **greaterThan**(`y`): `Bool`

Check if this [UInt8](UInt8.md) is greater than another [UInt8](UInt8.md).
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

`Bool`

**`Example`**

```ts
// 5 > 3
UInt8.from(5).greaterThan(3);
```

#### Defined in

[lib/provable/int.ts:1453](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1453)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): `Bool`

Check if this [UInt8](UInt8.md) is greater than or equal another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

`Bool`

**`Example`**

```ts
// 3 >= 3
UInt8.from(3).greaterThanOrEqual(3);
```

#### Defined in

[lib/provable/int.ts:1467](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1467)

___

### lessThan

▸ **lessThan**(`y`): `Bool`

Check if this [UInt8](UInt8.md) is less than another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

`Bool`

**`Example`**

```ts
UInt8.from(2).lessThan(UInt8.from(3));
```

#### Defined in

[lib/provable/int.ts:1376](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1376)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): `Bool`

Check if this [UInt8](UInt8.md) is less than or equal to another [UInt8](UInt8.md) value.
Returns a [Bool](../modules.md#bool-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`UInt8`](UInt8.md) |

#### Returns

`Bool`

**`Example`**

```ts
UInt8.from(3).lessThanOrEqual(UInt8.from(5));
```

#### Defined in

[lib/provable/int.ts:1354](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1354)

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

[lib/provable/int.ts:1304](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1304)

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

[lib/provable/int.ts:1273](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1273)

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

[lib/provable/int.ts:1255](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1255)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize the [UInt8](UInt8.md) to a bigint.

**Warning**: This operation is not provable.

#### Returns

`bigint`

#### Defined in

[lib/provable/int.ts:1531](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1531)

___

### toNumber

▸ **toNumber**(): `number`

Serialize the [UInt8](UInt8.md) to a number.

**Warning**: This operation is not provable.

#### Returns

`number`

#### Defined in

[lib/provable/int.ts:1522](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1522)

___

### toString

▸ **toString**(): `string`

Serialize the [UInt8](UInt8.md) to a string, e.g. for printing.

**Warning**: This operation is not provable.

#### Returns

`string`

#### Defined in

[lib/provable/int.ts:1513](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1513)

___

### toUInt32

▸ **toUInt32**(): [`UInt32`](UInt32.md)

Turns a [UInt8](UInt8.md) into a [UInt32](UInt32.md).

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:1551](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1551)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

Turns a [UInt8](UInt8.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:1558](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1558)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt8`](UInt8.md)

Creates a [UInt8](UInt8.md) with a value of 255.

#### Returns

[`UInt8`](UInt8.md)

#### Defined in

[lib/provable/int.ts:1565](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1565)

___

### check

▸ `Static` **check**(`x`): `void`

[check](TokenSymbol.md#check) for [UInt8](UInt8.md).
Proves that the input is in the [0, 255] range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field` \| \{ `value`: `Field`  } |

#### Returns

`void`

#### Overrides

Struct(\{
  value: Field,
}).check

#### Defined in

[lib/provable/int.ts:1539](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1539)

___

### checkConstant

▸ `Static` `Private` **checkConstant**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:1583](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1583)

___

### from

▸ `Static` **from**(`x`): [`UInt8`](UInt8.md)

Creates a new [UInt8](UInt8.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| `bigint` \| `Field` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`UInt8`](UInt8.md) |

#### Returns

[`UInt8`](UInt8.md)

#### Defined in

[lib/provable/int.ts:1572](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1572)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](../modules.md#field) type, as [Field](../modules.md#field) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../modules.md#field) type.

#### Inherited from

Struct(\{
  value: Field,
}).sizeInFields

#### Defined in

[lib/provable/types/provable-intf.ts:56](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L56)

___

### toInput

▸ `Static` **toInput**(`x`): `HashInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.value` | `Field` |

#### Returns

`HashInput`

#### Overrides

Struct(\{
  value: Field,
}).toInput

#### Defined in

[lib/provable/int.ts:1544](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1544)
