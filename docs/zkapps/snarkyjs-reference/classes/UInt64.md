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
- [assertGt](UInt64.md#assertgt)
- [assertGte](UInt64.md#assertgte)
- [assertLt](UInt64.md#assertlt)
- [assertLte](UInt64.md#assertlte)
- [div](UInt64.md#div)
- [divMod](UInt64.md#divmod)
- [equals](UInt64.md#equals)
- [gt](UInt64.md#gt)
- [gte](UInt64.md#gte)
- [isConstant](UInt64.md#isconstant)
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

• **new UInt64**(...`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:64](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L64)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:13](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L13)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `64`

#### Defined in

[lib/int.ts:14](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L14)

## Accessors

### one

• `Static` `get` **one**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `1`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:25](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L25)

___

### zero

• `Static` `get` **zero**(): [`UInt64`](UInt64.md)

Static method to create a [UInt64](UInt64.md) with value `0`.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:19](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L19)

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

[lib/int.ts:165](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L165)

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

[lib/circuit_value.ts:152](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L152)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:229](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L229)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:241](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L241)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:217](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L217)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

Asserts that a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:204](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L204)

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

[lib/int.ts:139](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L139)

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

[lib/int.ts:96](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L96)

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

[lib/circuit_value.ts:148](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L148)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is greater than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:223](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L223)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is greater than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:235](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L235)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:156](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L156)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is less than another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:211](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L211)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

Checks if a [UInt64](UInt64.md) is less than or equal to another one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:183](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L183)

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

[lib/int.ts:149](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L149)

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

[lib/int.ts:156](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L156)

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

[lib/int.ts:174](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L174)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Turns the [UInt64](UInt64.md) into a BigInt.

#### Returns

`bigint`

#### Defined in

[lib/int.ts:39](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L39)

___

### toConstant

▸ **toConstant**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:144](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L144)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:136](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L136)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:140](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L140)

___

### toString

▸ **toString**(): `string`

Turns the [UInt64](UInt64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:32](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L32)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt64`](UInt64.md)

Creates a [UInt64](UInt64.md) with a value of 18,446,744,073,709,551,615.

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:87](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L87)

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

[lib/int.ts:43](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L43)

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

[lib/int.ts:64](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L64)

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

[lib/int.ts:79](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L79)

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

[lib/circuit_value.ts:160](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L160)

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

[lib/int.ts:60](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L60)

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

[lib/circuit_value.ts:81](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L81)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:88](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L88)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:110](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L110)

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

[lib/circuit_value.ts:199](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L199)

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

[lib/circuit_value.ts:93](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L93)

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

[lib/int.ts:47](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L47)

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

[lib/int.ts:53](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/int.ts#L53)
