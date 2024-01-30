[o1js](../README.md) / [Modules](../modules.md) / UInt32

# Class: UInt32

A 32 bit unsigned integer with values ranging from 0 to 4,294,967,295.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`UInt32`**

## Table of contents

### Constructors

- [constructor](UInt32.md#constructor)

### Properties

- [value](UInt32.md#value)
- [NUM\_BITS](UInt32.md#num_bits)

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
- [assertGt](UInt32.md#assertgt)
- [assertGte](UInt32.md#assertgte)
- [assertLessThan](UInt32.md#assertlessthan)
- [assertLessThanOrEqual](UInt32.md#assertlessthanorequal)
- [assertLt](UInt32.md#assertlt)
- [assertLte](UInt32.md#assertlte)
- [div](UInt32.md#div)
- [divMod](UInt32.md#divmod)
- [equals](UInt32.md#equals)
- [greaterThan](UInt32.md#greaterthan)
- [greaterThanOrEqual](UInt32.md#greaterthanorequal)
- [gt](UInt32.md#gt)
- [gte](UInt32.md#gte)
- [isConstant](UInt32.md#isconstant)
- [leftShift](UInt32.md#leftshift)
- [lessThan](UInt32.md#lessthan)
- [lessThanOrEqual](UInt32.md#lessthanorequal)
- [lt](UInt32.md#lt)
- [lte](UInt32.md#lte)
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt32`](UInt32.md) |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/int.ts:549](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L549)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:546](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L546)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `32`

#### Defined in

[lib/int.ts:547](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L547)

## Accessors

### one

• `Static` `get` **one**(): [`UInt32`](UInt32.md)

Static method to create a [UInt32](UInt32.md) with value `0`.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:565](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L565)

___

### zero

• `Static` `get` **zero**(): [`UInt32`](UInt32.md)

Static method to create a [UInt32](UInt32.md) with value `0`.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:558](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L558)

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

[lib/int.ts:712](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L712)

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

[lib/int.ts:638](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L638)

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

[lib/int.ts:883](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L883)

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

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:166](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L166)

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

[lib/int.ts:1009](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1009)

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

[lib/int.ts:1042](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1042)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

**`Deprecated`**

Use [assertGreaterThan](UInt32.md#assertgreaterthan) instead.

Asserts that a [UInt32](UInt32.md) is greater than another one.

#### Defined in

[lib/int.ts:1002](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1002)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

**`Deprecated`**

Use [assertGreaterThanOrEqual](UInt32.md#assertgreaterthanorequal) instead.

Asserts that a [UInt32](UInt32.md) is greater than or equal to another one.

#### Defined in

[lib/int.ts:1035](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1035)

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

[lib/int.ts:977](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L977)

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

[lib/int.ts:935](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L935)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

**`Deprecated`**

Use [assertLessThan](UInt32.md#assertlessthan) instead.

Asserts that a [UInt32](UInt32.md) is less than another one.

#### Defined in

[lib/int.ts:970](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L970)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |
| `message?` | `string` |

#### Returns

`void`

**`Deprecated`**

Use [assertLessThanOrEqual](UInt32.md#assertlessthanorequal) instead.

Asserts that a [UInt32](UInt32.md) is less than or equal to another one.

#### Defined in

[lib/int.ts:928](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L928)

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

[lib/int.ts:689](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L689)

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

[lib/int.ts:647](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L647)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L162)

___

### greaterThan

▸ **greaterThan**(`y`): [`Bool`](Bool.md)

Checks if a [UInt32](UInt32.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:993](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L993)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): [`Bool`](Bool.md)

Checks if a [UInt32](UInt32.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:1025](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1025)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

**`Deprecated`**

Use [greaterThan](UInt32.md#greaterthan) instead.

Checks if a [UInt32](UInt32.md) is greater than another one.

#### Defined in

[lib/int.ts:986](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L986)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

**`Deprecated`**

Use [greaterThanOrEqual](UInt32.md#greaterthanorequal) instead.

Checks if a [UInt32](UInt32.md) is greater than or equal to another one.

#### Defined in

[lib/int.ts:1018](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L1018)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:170](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L170)

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

[lib/int.ts:831](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L831)

___

### lessThan

▸ **lessThan**(`y`): [`Bool`](Bool.md)

Checks if a [UInt32](UInt32.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:961](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L961)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): [`Bool`](Bool.md)

Checks if a [UInt32](UInt32.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:909](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L909)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

**`Deprecated`**

Use [lessThan](UInt32.md#lessthan) instead.

Checks if a [UInt32](UInt32.md) is less than another one.

#### Defined in

[lib/int.ts:954](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L954)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

**`Deprecated`**

Use [lessThanOrEqual](UInt32.md#lessthanorequal) instead.

Checks if a [UInt32](UInt32.md) is less than or equal to another one.

#### Defined in

[lib/int.ts:892](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L892)

___

### mod

▸ **mod**(`y`): [`UInt32`](UInt32.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisble by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:698](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L698)

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

[lib/int.ts:704](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L704)

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

[lib/int.ts:776](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L776)

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

[lib/int.ts:854](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L854)

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

[lib/int.ts:808](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L808)

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

[lib/int.ts:720](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L720)

___

### toBigint

▸ **toBigint**(): `bigint`

Turns the [UInt32](UInt32.md) into a BigInt.

#### Returns

`bigint`

#### Defined in

[lib/int.ts:577](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L577)

___

### toConstant

▸ **toConstant**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:158](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L158)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L150)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:154](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L154)

___

### toString

▸ **toString**(): `string`

Turns the [UInt32](UInt32.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:571](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L571)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

Turns the [UInt32](UInt32.md) into a [UInt64](UInt64.md).

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:583](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L583)

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

[lib/int.ts:745](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L745)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt32`](UInt32.md)

Creates a [UInt32](UInt32.md) with a value of 4,294,967,295.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:631](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L631)

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

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/int.ts:588](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L588)

___

### checkConstant

▸ `Static` `Private` **checkConstant**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/int.ts:608](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L608)

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

[CircuitValue](CircuitValue.md).[empty](CircuitValue.md#empty)

#### Defined in

[lib/circuit_value.ts:254](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L254)

___

### from

▸ `Static` **from**(`x`): [`UInt32`](UInt32.md)

Creates a new [UInt32](UInt32.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:623](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L623)

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
| `xs` | [`Field`](Field.md)[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:174](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L174)

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

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/int.ts:604](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L604)

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

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:95](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L95)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:102](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L102)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:124](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L124)

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

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:213](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L213)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): [`Field`](Field.md)[]

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

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:107](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L107)

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

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/int.ts:591](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L591)

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

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/int.ts:597](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/int.ts#L597)
