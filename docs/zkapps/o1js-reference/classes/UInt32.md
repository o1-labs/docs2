[o1js](../README.md) / [Modules](../modules.md) / UInt32

# Class: UInt32

A 32 bit unsigned integer with values ranging from 0 to 4,294,967,295.

## Hierarchy

- `CircuitValue`

  ↳ **`UInt32`**

## Table of contents

### Constructors

- [constructor](UInt32.md#constructor)

### Properties

- [value](UInt32.md#value)
- [NUM\_BITS](UInt32.md#num_bits)
- [Unsafe](UInt32.md#unsafe)

### Accessors

- [one](UInt32.md#one)
- [zero](UInt32.md#zero)

### Methods

- [add](UInt32.md#add)
- [addMod32](UInt32.md#addmod32)
- [and](UInt32.md#and)
- [assertEquals](UInt32.md#assertequals)
- [assertGreaterThan](UInt32.md#assertgreaterthan)
- [assertGreaterThanOrEqual](UInt32.md#assertgreaterthanorequal)
- [assertLessThan](UInt32.md#assertlessthan)
- [assertLessThanOrEqual](UInt32.md#assertlessthanorequal)
- [div](UInt32.md#div)
- [divMod](UInt32.md#divmod)
- [equals](UInt32.md#equals)
- [greaterThan](UInt32.md#greaterthan)
- [greaterThanOrEqual](UInt32.md#greaterthanorequal)
- [isConstant](UInt32.md#isconstant)
- [leftShift](UInt32.md#leftshift)
- [lessThan](UInt32.md#lessthan)
- [lessThanOrEqual](UInt32.md#lessthanorequal)
- [mod](UInt32.md#mod)
- [mul](UInt32.md#mul)
- [not](UInt32.md#not)
- [rightShift](UInt32.md#rightshift)
- [rotate](UInt32.md#rotate)
- [sub](UInt32.md#sub)
- [toBigint](UInt32.md#tobigint)
- [toConstant](UInt32.md#toconstant)
- [toFields](UInt32.md#tofields)
- [toJSON](UInt32.md#tojson)
- [toString](UInt32.md#tostring)
- [toUInt64](UInt32.md#touint64)
- [xor](UInt32.md#xor)
- [MAXINT](UInt32.md#maxint)
- [check](UInt32.md#check)
- [checkConstant](UInt32.md#checkconstant)
- [empty](UInt32.md#empty)
- [from](UInt32.md#from)
- [fromFields](UInt32.md#fromfields)
- [fromJSON](UInt32.md#fromjson)
- [fromObject](UInt32.md#fromobject)
- [sizeInFields](UInt32.md#sizeinfields)
- [toAuxiliary](UInt32.md#toauxiliary)
- [toConstant](UInt32.md#toconstant-1)
- [toFields](UInt32.md#tofields-1)
- [toInput](UInt32.md#toinput)
- [toJSON](UInt32.md#tojson-1)

## Constructors

### constructor

• **new UInt32**(`x`)

Create a [UInt32](UInt32.md).
The max value of a [UInt32](UInt32.md) is `2^32 - 1 = UInt32.MAXINT()`.

**Warning**: Cannot overflow, an error is thrown if the result is greater than UInt32.MAXINT()

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `FieldVar` \| [`UInt32`](UInt32.md) |

#### Overrides

CircuitValue.constructor

#### Defined in

[lib/provable/int.ts:503](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L503)

## Properties

### value

• **value**: `Field`

#### Defined in

[lib/provable/int.ts:494](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L494)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `32`

#### Defined in

[lib/provable/int.ts:495](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L495)

___

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromField` | (`x`: `Field`) => [`UInt32`](UInt32.md) |

#### Defined in

[lib/provable/int.ts:511](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L511)

## Accessors

### one

• `Static` `get` **one**(): [`UInt32`](UInt32.md)

Static method to create a [UInt32](UInt32.md) with value `0`.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:533](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L533)

___

### zero

• `Static` `get` **zero**(): [`UInt32`](UInt32.md)

Static method to create a [UInt32](UInt32.md) with value `0`.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:526](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L526)

## Methods

### add

▸ **add**(`y`): [`UInt32`](UInt32.md)

Addition with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:680](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L680)

___

### addMod32

▸ **addMod32**(`y`): [`UInt32`](UInt32.md)

Addition modulo 2^32. Check [addMod32](../modules.md#addmod32) for a detailed description.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:606](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L606)

___

### and

▸ **and**(`x`): [`UInt32`](UInt32.md)

Bitwise AND gadget on [UInt32](UInt32.md) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND).
The AND gate works by comparing two bits and returning `1` if both bits are `1`, and `0` otherwise.

It can be checked by a double generic gate that verifies the following relationship between the values below.

The generic gate verifies:\
`a + b = sum` and the conjunction equation `2 * and = sum - xor`\
Where:\
`a + b = sum`\
`a ^ b = xor`\
`a & b = and`

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#and)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```typescript
let a = UInt32.from(3);    // ... 000011
let b = UInt32.from(5);    // ... 000101

let c = a.and(b, 2);    // ... 000001
c.assertEquals(1);
```

#### Defined in

[lib/provable/int.ts:851](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L851)

___

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Inherited from

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### assertGreaterThan

▸ **assertGreaterThan**(`y`, `message?`): `void`

Asserts that a [UInt32](UInt32.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:921](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L921)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Asserts that a [UInt32](UInt32.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:935](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L935)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Asserts that a [UInt32](UInt32.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:898](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L898)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Asserts that a [UInt32](UInt32.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:870](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L870)

___

### div

▸ **div**(`y`): [`UInt32`](UInt32.md)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `x * y <= x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:657](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L657)

___

### divMod

▸ **divMod**(`y`): `Object`

Integer division with remainder.

`x.divMod(y)` returns the quotient and the remainder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| [`UInt32`](UInt32.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `quotient` | [`UInt32`](UInt32.md) |
| `rest` | [`UInt32`](UInt32.md) |

#### Defined in

[lib/provable/int.ts:615](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L615)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`Bool`

#### Inherited from

CircuitValue.equals

#### Defined in

[lib/provable/types/circuit-value.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L97)

___

### greaterThan

▸ **greaterThan**(`y`): `Bool`

Checks if a [UInt32](UInt32.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:914](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L914)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): `Bool`

Checks if a [UInt32](UInt32.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:928](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L928)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CircuitValue.isConstant

#### Defined in

[lib/provable/types/circuit-value.ts:105](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L105)

___

### leftShift

▸ **leftShift**(`bits`): [`UInt32`](UInt32.md)

Performs a left shift operation on the provided [UInt32](UInt32.md) element.
This operation is similar to the `<<` shift operation in JavaScript,
where bits are shifted to the left, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number,
where the most significant (32th) bit is on the left end and the least significant bit is on the right end.

The operation expects the input to be range checked to 32 bit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | `number` | Amount of bits to shift the [UInt32](UInt32.md) element to the left. The amount should be between 0 and 32 (or else the shift will fail). |

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```ts
const x = UInt32.from(0b001100); // 12 in binary
const y = x.leftShift(2); // left shift by 2 bits
y.assertEquals(0b110000); // 48 in binary
```

#### Defined in

[lib/provable/int.ts:799](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L799)

___

### lessThan

▸ **lessThan**(`y`): `Bool`

Checks if a [UInt32](UInt32.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:886](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L886)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): `Bool`

Checks if a [UInt32](UInt32.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:858](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L858)

___

### mod

▸ **mod**(`y`): [`UInt32`](UInt32.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisible by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:666](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L666)

___

### mul

▸ **mul**(`y`): [`UInt32`](UInt32.md)

Multiplication with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:672](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L672)

___

### not

▸ **not**(): [`UInt32`](UInt32.md)

Bitwise NOT gate on [UInt32](UInt32.md) elements. Similar to the [bitwise
NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/
Web/JavaScript/Reference/Operators/Bitwise_NOT).

**Note:** The NOT gate operates over 32 bit for UInt32 types.

A NOT gate works by returning `1` in each bit position if the
corresponding bit of the operand is `0`, and returning `0` if the
corresponding bit of the operand is `1`.

NOT is implemented as a subtraction of the input from the all one bitmask.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not)

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```ts
// NOTing 4 bits with the unchecked version
let a = UInt32.from(0b0101);
let b = a.not();

console.log(b.toBigInt().toString(2));
// 11111111111111111111111111111010
```

#### Defined in

[lib/provable/int.ts:744](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L744)

___

### rightShift

▸ **rightShift**(`bits`): [`UInt32`](UInt32.md)

Performs a left right operation on the provided [UInt32](UInt32.md) element.
This operation is similar to the `>>` shift operation in JavaScript,
where bits are shifted to the right, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 32-bit representation of the number,
where the most significant (32th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | `number` | Amount of bits to shift the [UInt32](UInt32.md) element to the right. The amount should be between 0 and 32 (or else the shift will fail). The operation expects the input to be range checked to 32 bit. |

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```ts
const x = UInt32.from(0b001100); // 12 in binary
const y = x.rightShift(2); // left shift by 2 bits
y.assertEquals(0b000011); // 48 in binary
```

#### Defined in

[lib/provable/int.ts:822](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L822)

___

### rotate

▸ **rotate**(`bits`, `direction?`): [`UInt32`](UInt32.md)

A (left and right) rotation operates similarly to the shift operation (`<<` for left and `>>` for right) in JavaScript,
with the distinction that the bits are circulated to the opposite end of a 64-bit representation rather than being discarded.
For a left rotation, this means that bits shifted off the left end reappear at the right end.
Conversely, for a right rotation, bits shifted off the right end reappear at the left end.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.
The `direction` parameter is a string that accepts either `'left'` or `'right'`, determining the direction of the rotation.

To safely use `rotate()`, you need to make sure that the value passed in is range-checked to 64 bits;
for example, using [rangeCheck64](../modules.md#rangecheck64).

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#rotation)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bits` | `number` | `undefined` | amount of bits to rotate this [UInt32](UInt32.md) element with. |
| `direction` | ``"left"`` \| ``"right"`` | `'left'` | left or right rotation direction. |

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```ts
const x = UInt32.from(0b001100);
const y = x.rotate(2, 'left');
const z = x.rotate(2, 'right'); // right rotation by 2 bits
y.assertEquals(0b110000);
z.assertEquals(0b000011);
```

#### Defined in

[lib/provable/int.ts:776](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L776)

___

### sub

▸ **sub**(`y`): [`UInt32`](UInt32.md)

Subtraction with underflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:688](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L688)

___

### toBigint

▸ **toBigint**(): `bigint`

Turns the [UInt32](UInt32.md) into a BigInt.

#### Returns

`bigint`

#### Defined in

[lib/provable/int.ts:545](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L545)

___

### toConstant

▸ **toConstant**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

___

### toFields

▸ **toFields**(): `Field`[]

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:85](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L85)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:89](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L89)

___

### toString

▸ **toString**(): `string`

Turns the [UInt32](UInt32.md) into a string.

#### Returns

`string`

#### Defined in

[lib/provable/int.ts:539](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L539)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

Turns the [UInt32](UInt32.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:551](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L551)

___

### xor

▸ **xor**(`x`): [`UInt32`](UInt32.md)

Bitwise XOR gadget on [UInt32](UInt32.md) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).
A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal.

This gadget builds a chain of XOR gates recursively.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | [`UInt32`](UInt32.md) | [UInt32](UInt32.md) element to compare. |

#### Returns

[`UInt32`](UInt32.md)

**`Example`**

```ts
let a = UInt32.from(0b0101);
let b = UInt32.from(0b0011);

let c = a.xor(b);
c.assertEquals(0b0110);
```

#### Defined in

[lib/provable/int.ts:713](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L713)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt32`](UInt32.md)

Creates a [UInt32](UInt32.md) with a value of 4,294,967,295.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:599](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L599)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Overrides

CircuitValue.check

#### Defined in

[lib/provable/int.ts:556](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L556)

___

### checkConstant

▸ `Static` `Private` **checkConstant**(`x`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field` |

#### Returns

`Field`

#### Defined in

[lib/provable/int.ts:576](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L576)

___

### empty

▸ `Static` **empty**\<`T`\>(): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.empty

#### Defined in

[lib/provable/types/circuit-value.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L189)

___

### from

▸ `Static` **from**(`x`): [`UInt32`](UInt32.md)

Creates a new [UInt32](UInt32.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:591](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L591)

___

### fromFields

▸ `Static` **fromFields**\<`T`\>(`this`, `xs`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `xs` | `Field`[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromFields

#### Defined in

[lib/provable/types/circuit-value.ts:109](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L109)

___

### fromJSON

▸ `Static` **fromJSON**\<`T`\>(`x`): `InstanceType`\<`T`\>

Decodes a JSON-like object into this structure.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`InstanceType`\<`T`\>

#### Overrides

CircuitValue.fromJSON

#### Defined in

[lib/provable/int.ts:572](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L572)

___

### fromObject

▸ `Static` **fromObject**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`\<`InstanceType`\<`T`\>\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromObject

#### Defined in

[lib/provable/types/circuit-value.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L30)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

CircuitValue.sizeInFields

#### Defined in

[lib/provable/types/circuit-value.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L37)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

CircuitValue.toAuxiliary

#### Defined in

[lib/provable/types/circuit-value.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L59)

___

### toConstant

▸ `Static` **toConstant**\<`T`\>(`this`, `t`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`\<`T`\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:148](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L148)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): `Field`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:42](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L42)

___

### toInput

▸ `Static` **toInput**(`x`): `HashInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`HashInput`

#### Overrides

CircuitValue.toInput

#### Defined in

[lib/provable/int.ts:559](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L559)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Encodes this structure into a JSON-like object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`string`

#### Overrides

CircuitValue.toJSON

#### Defined in

[lib/provable/int.ts:565](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L565)
