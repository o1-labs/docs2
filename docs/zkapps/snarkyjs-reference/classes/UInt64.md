# Class: UInt64

A 64 bit unsigned integer with values ranging from 0 to 18,446,744,073,709,551,615.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`UInt64`**

## Table of contents

### Constructors

- [constructor](UInt64.md#constructor)

### Properties

- [value](UInt64.md#value)
- [NUM\_BITS](UInt64.md#num_bits)

### Accessors

- [one](UInt64.md#one)
- [zero](UInt64.md#zero)

### Methods

- [add](UInt64.md#add)
- [assertEquals](UInt64.md#assertequals)
- [assertGreaterThan](UInt64.md#assertgreaterthan)
- [assertGreaterThanOrEqual](UInt64.md#assertgreaterthanorequal)
- [assertGt](UInt64.md#assertgt)
- [assertGte](UInt64.md#assertgte)
- [assertLessThan](UInt64.md#assertlessthan)
- [assertLessThanOrEqual](UInt64.md#assertlessthanorequal)
- [assertLt](UInt64.md#assertlt)
- [assertLte](UInt64.md#assertlte)
- [div](UInt64.md#div)
- [divMod](UInt64.md#divmod)
- [equals](UInt64.md#equals)
- [greaterThan](UInt64.md#greaterthan)
- [greaterThanOrEqual](UInt64.md#greaterthanorequal)
- [gt](UInt64.md#gt)
- [gte](UInt64.md#gte)
- [isConstant](UInt64.md#isconstant)
- [lessThan](UInt64.md#lessthan)
- [lessThanOrEqual](UInt64.md#lessthanorequal)
- [lt](UInt64.md#lt)
- [lte](UInt64.md#lte)
- [mod](UInt64.md#mod)
- [mul](UInt64.md#mul)
- [sub](UInt64.md#sub)
- [toBigInt](UInt64.md#tobigint)
- [toConstant](UInt64.md#toconstant)
- [toFields](UInt64.md#tofields)
- [toJSON](UInt64.md#tojson)
- [toString](UInt64.md#tostring)
- [toUInt32](UInt64.md#touint32)
- [toUInt32Clamped](UInt64.md#touint32clamped)
- [MAXINT](UInt64.md#maxint)
- [check](UInt64.md#check)
- [checkConstant](UInt64.md#checkconstant)
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

• **new UInt64**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:74](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L74)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:13](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L13)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `64`

#### Defined in

[lib/int.ts:14](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L14)

## Accessors

### one

• `Static` `get` **one**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `1`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:25](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L25)

___

### zero

• `Static` `get` **zero**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `0`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:19](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L19)

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

[lib/int.ts:189](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L189)

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

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L162)

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

[lib/int.ts:334](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L334)

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

[lib/int.ts:366](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L366)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

**`Deprecated`**

Use [assertGreaterThan](UInt64.md#assertgreaterthan) instead.

Asserts that a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:327](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L327)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

**`Deprecated`**

Use [assertGreaterThanOrEqual](UInt64.md#assertgreaterthanorequal) instead.

Asserts that a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:359](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L359)

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

[lib/int.ts:302](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L302)

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

[lib/int.ts:264](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L264)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

**`Deprecated`**

Use [assertLessThan](UInt64.md#assertlessthan) instead.

Asserts that a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:295](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L295)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

**`Deprecated`**

Use [assertLessThanOrEqual](UInt64.md#assertlessthanorequal) instead.

Asserts that a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:253](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L253)

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

[lib/int.ts:163](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L163)

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

[lib/int.ts:120](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L120)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:158](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L158)

___

### greaterThan

▸ **greaterThan**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:318](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L318)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:350](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L350)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Use [greaterThan](UInt64.md#greaterthan) instead.

Checks if a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:311](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L311)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Use [greaterThanOrEqual](UInt64.md#greaterthanorequal) instead.

Checks if a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:343](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L343)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:166](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L166)

___

### lessThan

▸ **lessThan**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:285](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L285)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:230](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L230)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Use [lessThan](UInt64.md#lessthan) instead.

Checks if a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:277](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L277)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Use [lessThanOrEqual](UInt64.md#lessthanorequal) instead.

Checks if a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:209](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L209)

___

### mod

▸ **mod**(`y`): [`UInt64`](UInt64.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisble by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:173](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L173)

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

[lib/int.ts:180](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L180)

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

[lib/int.ts:198](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L198)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Turns the [UInt64](UInt64.md) into a BigInt.

#### Returns

`bigint`

#### Defined in

[lib/int.ts:39](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L39)

___

### toConstant

▸ **toConstant**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:154](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L154)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:146](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L146)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L150)

___

### toString

▸ **toString**(): `string`

Turns the [UInt64](UInt64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:32](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L32)

___

### toUInt32

▸ **toUInt32**(): [`UInt32`](UInt32.md)

Turns the [UInt64](UInt64.md) into a [UInt32](UInt32.md), asserting that it fits in 32 bits.

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:46](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L46)

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

[lib/int.ts:58](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L58)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt64`](UInt64.md)

Creates a [UInt64](UInt64.md) with a value of 18,446,744,073,709,551,615.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:111](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L111)

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

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/int.ts:67](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L67)

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

[lib/int.ts:88](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L88)

___

### from

▸ `Static` **from**(`x`): [`UInt64`](UInt64.md)

Creates a new [UInt64](UInt64.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:103](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L103)

___

### fromFields

▸ `Static` **fromFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:170](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L170)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`x`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

#### Overrides

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/int.ts:84](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L84)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`<`InstanceType`<`T`\>\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:91](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L91)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:98](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L98)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:120](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L120)

___

### toConstant

▸ `Static` **toConstant**<`T`\>(`this`, `t`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:209](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L209)

___

### toFields

▸ `Static` **toFields**<`T`\>(`this`, `v`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:103](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/circuit_value.ts#L103)

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

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/int.ts:71](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L71)

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

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/int.ts:77](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/int.ts#L77)
