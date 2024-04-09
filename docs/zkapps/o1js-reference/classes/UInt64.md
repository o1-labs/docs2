[o1js](../README.md) / [Modules](../modules.md) / UInt64

# Class: UInt64

A 64 bit unsigned integer with values ranging from 0 to 18,446,744,073,709,551,615.

## Hierarchy

- `CircuitValue`

  ↳ **`UInt64`**

## Table of contents

### Constructors

- [constructor](UInt64.md#constructor)

### Properties

- [value](UInt64.md#value)
- [NUM\_BITS](UInt64.md#num_bits)
- [Unsafe](UInt64.md#unsafe)

### Accessors

- [one](UInt64.md#one)
- [zero](UInt64.md#zero)

### Methods

- [add](UInt64.md#add)
- [and](UInt64.md#and)
- [assertEquals](UInt64.md#assertequals)
- [assertGreaterThan](UInt64.md#assertgreaterthan)
- [assertGreaterThanOrEqual](UInt64.md#assertgreaterthanorequal)
- [assertLessThan](UInt64.md#assertlessthan)
- [assertLessThanOrEqual](UInt64.md#assertlessthanorequal)
- [div](UInt64.md#div)
- [divMod](UInt64.md#divmod)
- [equals](UInt64.md#equals)
- [greaterThan](UInt64.md#greaterthan)
- [greaterThanOrEqual](UInt64.md#greaterthanorequal)
- [isConstant](UInt64.md#isconstant)
- [leftShift](UInt64.md#leftshift)
- [lessThan](UInt64.md#lessthan)
- [lessThanOrEqual](UInt64.md#lessthanorequal)
- [mod](UInt64.md#mod)
- [mul](UInt64.md#mul)
- [not](UInt64.md#not)
- [rightShift](UInt64.md#rightshift)
- [rotate](UInt64.md#rotate)
- [sub](UInt64.md#sub)
- [toBigInt](UInt64.md#tobigint)
- [toConstant](UInt64.md#toconstant)
- [toFields](UInt64.md#tofields)
- [toJSON](UInt64.md#tojson)
- [toString](UInt64.md#tostring)
- [toUInt32](UInt64.md#touint32)
- [toUInt32Clamped](UInt64.md#touint32clamped)
- [xor](UInt64.md#xor)
- [MAXINT](UInt64.md#maxint)
- [check](UInt64.md#check)
- [checkConstant](UInt64.md#checkconstant)
- [empty](UInt64.md#empty)
- [from](UInt64.md#from)
- [fromFields](UInt64.md#fromfields)
- [fromJSON](UInt64.md#fromjson)
- [fromObject](UInt64.md#fromobject)
- [sizeInFields](UInt64.md#sizeinfields)
- [toAuxiliary](UInt64.md#toauxiliary)
- [toConstant](UInt64.md#toconstant-1)
- [toFields](UInt64.md#tofields-1)
- [toInput](UInt64.md#toinput)
- [toJSON](UInt64.md#tojson-1)

## Constructors

### constructor

• **new UInt64**(`x`)

Create a [UInt64](UInt64.md).
The max value of a [UInt64](UInt64.md) is `2^64 - 1 = UInt64.MAXINT()`.

**Warning**: Cannot overflow, an error is thrown if the result is greater than UInt64.MAXINT()

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `FieldVar` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Overrides

CircuitValue.constructor

#### Defined in

[lib/provable/int.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L37)

## Properties

### value

• **value**: `Field`

#### Defined in

[lib/provable/int.ts:28](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L28)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `64`

#### Defined in

[lib/provable/int.ts:29](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L29)

___

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromField` | (`x`: `Field`) => [`UInt64`](UInt64.md) |

#### Defined in

[lib/provable/int.ts:45](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L45)

## Accessors

### one

• `Static` `get` **one**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `1`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:66](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L66)

___

### zero

• `Static` `get` **zero**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `0`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:60](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L60)

## Methods

### add

▸ **add**(`y`): [`UInt64`](UInt64.md)

Addition with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:231](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L231)

___

### and

▸ **and**(`x`): [`UInt64`](UInt64.md)

Bitwise AND gadget on [UInt64](UInt64.md) elements. Equivalent to the [bitwise AND `&` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND).
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
| `x` | [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```typescript
let a = UInt64.from(3);    // ... 000011
let b = UInt64.from(5);    // ... 000101

let c = a.and(b);    // ... 000001
c.assertEquals(1);
```

#### Defined in

[lib/provable/int.ts:401](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L401)

___

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Inherited from

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### assertGreaterThan

▸ **assertGreaterThan**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:472](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L472)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:486](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L486)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:449](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L449)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/provable/int.ts:420](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L420)

___

### div

▸ **div**(`y`): [`UInt64`](UInt64.md)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `z * y <= x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:205](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L205)

___

### divMod

▸ **divMod**(`y`): `Object`

Integer division with remainder.

`x.divMod(y)` returns the quotient and the remainder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| [`UInt64`](UInt64.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `quotient` | [`UInt64`](UInt64.md) |
| `rest` | [`UInt64`](UInt64.md) |

#### Defined in

[lib/provable/int.ts:162](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L162)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`Bool`

#### Inherited from

CircuitValue.equals

#### Defined in

[lib/provable/types/circuit-value.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L97)

___

### greaterThan

▸ **greaterThan**(`y`): `Bool`

Checks if a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:465](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L465)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): `Bool`

Checks if a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:479](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L479)

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

▸ **leftShift**(`bits`): [`UInt64`](UInt64.md)

Performs a left shift operation on the provided [UInt64](UInt64.md) element.
This operation is similar to the `<<` shift operation in JavaScript,
where bits are shifted to the left, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | `number` | Amount of bits to shift the [UInt64](UInt64.md) element to the left. The amount should be between 0 and 64 (or else the shift will fail). |

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```ts
const x = UInt64.from(0b001100); // 12 in binary
const y = x.leftShift(2); // left shift by 2 bits
y.assertEquals(0b110000); // 48 in binary
```

#### Defined in

[lib/provable/int.ts:351](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L351)

___

### lessThan

▸ **lessThan**(`y`): `Bool`

Checks if a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:437](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L437)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): `Bool`

Checks if a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:408](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L408)

___

### mod

▸ **mod**(`y`): [`UInt64`](UInt64.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisible by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:215](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L215)

___

### mul

▸ **mul**(`y`): [`UInt64`](UInt64.md)

Multiplication with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:222](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L222)

___

### not

▸ **not**(): [`UInt64`](UInt64.md)

Bitwise NOT gate on [Field](../modules.md#field-1) elements. Similar to the [bitwise
NOT `~` operator in JavaScript](https://developer.mozilla.org/en-US/docs/
Web/JavaScript/Reference/Operators/Bitwise_NOT).

**Note:** The NOT gate operates over 64 bit for UInt64 types.

A NOT gate works by returning `1` in each bit position if the
corresponding bit of the operand is `0`, and returning `0` if the
corresponding bit of the operand is `1`.

NOT is implemented as a subtraction of the input from the all one bitmask

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#not)

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```ts
// NOTing 4 bits with the unchecked version
let a = UInt64.from(0b0101);
let b = a.not(false);

console.log(b.toBigInt().toString(2));
// 1111111111111111111111111111111111111111111111111111111111111010

```

#### Defined in

[lib/provable/int.ts:298](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L298)

___

### rightShift

▸ **rightShift**(`bits`): [`UInt64`](UInt64.md)

Performs a left right operation on the provided [UInt64](UInt64.md) element.
This operation is similar to the `>>` shift operation in JavaScript,
where bits are shifted to the right, and the overflowing bits are discarded.

It’s important to note that these operations are performed considering the big-endian 64-bit representation of the number,
where the most significant (64th) bit is on the left end and the least significant bit is on the right end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | `number` | Amount of bits to shift the [UInt64](UInt64.md) element to the right. The amount should be between 0 and 64 (or else the shift will fail). |

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```ts
const x = UInt64.from(0b001100); // 12 in binary
const y = x.rightShift(2); // left shift by 2 bits
y.assertEquals(0b000011); // 48 in binary
```

#### Defined in

[lib/provable/int.ts:372](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L372)

___

### rotate

▸ **rotate**(`bits`, `direction?`): [`UInt64`](UInt64.md)

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
| `bits` | `number` | `undefined` | amount of bits to rotate this [UInt64](UInt64.md) element with. |
| `direction` | ``"left"`` \| ``"right"`` | `'left'` | left or right rotation direction. |

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```ts
const x = UInt64.from(0b001100);
const y = x.rotate(2, 'left');
const z = x.rotate(2, 'right'); // right rotation by 2 bits
y.assertEquals(0b110000);
z.assertEquals(0b000011);
```

#### Defined in

[lib/provable/int.ts:330](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L330)

___

### sub

▸ **sub**(`y`): [`UInt64`](UInt64.md)

Subtraction with underflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:240](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L240)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Turns the [UInt64](UInt64.md) into a BigInt.

#### Returns

`bigint`

#### Defined in

[lib/provable/int.ts:80](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L80)

___

### toConstant

▸ **toConstant**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

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

Turns the [UInt64](UInt64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/provable/int.ts:73](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L73)

___

### toUInt32

▸ **toUInt32**(): [`UInt32`](UInt32.md)

Turns the [UInt64](UInt64.md) into a [UInt32](UInt32.md), asserting that it fits in 32 bits.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:87](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L87)

___

### toUInt32Clamped

▸ **toUInt32Clamped**(): [`UInt32`](UInt32.md)

Turns the [UInt64](UInt64.md) into a [UInt32](UInt32.md), clamping to the 32 bits range if it's too large.
```ts
UInt64.from(4294967296).toUInt32Clamped().toString(); // "4294967295"
```

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/provable/int.ts:99](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L99)

___

### xor

▸ **xor**(`x`): [`UInt64`](UInt64.md)

Bitwise XOR gadget on [Field](../modules.md#field-1) elements. Equivalent to the [bitwise XOR `^` operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).
A XOR gate works by comparing two bits and returning `1` if two bits differ, and `0` if two bits are equal.

This gadget builds a chain of XOR gates recursively.

You can find more details about the implementation in the [Mina book](https://o1-labs.github.io/proof-systems/specs/kimchi.html?highlight=gates#xor-1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | [`UInt64`](UInt64.md) | [UInt64](UInt64.md) element to XOR. |

#### Returns

[`UInt64`](UInt64.md)

**`Example`**

```ts
let a = UInt64.from(0b0101);
let b = UInt64.from(0b0011);

let c = a.xor(b);
c.assertEquals(0b0110);
```

#### Defined in

[lib/provable/int.ts:265](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L265)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt64`](UInt64.md)

Creates a [UInt64](UInt64.md) with a value of 18,446,744,073,709,551,615.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:153](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L153)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Overrides

CircuitValue.check

#### Defined in

[lib/provable/int.ts:109](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L109)

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

[lib/provable/int.ts:131](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L131)

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

▸ `Static` **from**(`x`): [`UInt64`](UInt64.md)

Creates a new [UInt64](UInt64.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/provable/int.ts:145](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L145)

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

[lib/provable/int.ts:127](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L127)

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
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`HashInput`

#### Overrides

CircuitValue.toInput

#### Defined in

[lib/provable/int.ts:113](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L113)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Encodes this structure into a JSON-like object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`string`

#### Overrides

CircuitValue.toJSON

#### Defined in

[lib/provable/int.ts:120](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L120)
