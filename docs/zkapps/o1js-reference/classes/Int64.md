[o1js](../README.md) / [Modules](../modules.md) / Int64

# Class: Int64

A 64 bit signed integer with values ranging from -18,446,744,073,709,551,615 to 18,446,744,073,709,551,615.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`Int64`**

## Implements

- `BalanceChange`

## Table of contents

### Constructors

- [constructor](Int64.md#constructor)

### Properties

- [magnitude](Int64.md#magnitude)
- [sgn](Int64.md#sgn)

### Accessors

- [minusOne](Int64.md#minusone)
- [one](Int64.md#one)
- [zero](Int64.md#zero)

### Methods

- [add](Int64.md#add)
- [assertEquals](Int64.md#assertequals)
- [div](Int64.md#div)
- [equals](Int64.md#equals)
- [isConstant](Int64.md#isconstant)
- [isPositive](Int64.md#ispositive)
- [mod](Int64.md#mod)
- [mul](Int64.md#mul)
- [neg](Int64.md#neg)
- [sub](Int64.md#sub)
- [toConstant](Int64.md#toconstant)
- [toField](Int64.md#tofield)
- [toFields](Int64.md#tofields)
- [toJSON](Int64.md#tojson)
- [toString](Int64.md#tostring)
- [check](Int64.md#check)
- [empty](Int64.md#empty)
- [from](Int64.md#from)
- [fromField](Int64.md#fromfield)
- [fromFieldUnchecked](Int64.md#fromfieldunchecked)
- [fromFields](Int64.md#fromfields)
- [fromJSON](Int64.md#fromjson)
- [fromObject](Int64.md#fromobject)
- [fromUnsigned](Int64.md#fromunsigned)
- [sizeInFields](Int64.md#sizeinfields)
- [toAuxiliary](Int64.md#toauxiliary)
- [toConstant](Int64.md#toconstant-1)
- [toFields](Int64.md#tofields-1)
- [toInput](Int64.md#toinput)
- [toJSON](Int64.md#tojson-1)

## Constructors

### constructor

• **new Int64**(`magnitude`, `sgn?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `magnitude` | [`UInt64`](UInt64.md) | `undefined` |
| `sgn` | [`Sign`](Sign.md) | `Sign.one` |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/int.ts:1122](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1122)

## Properties

### magnitude

• **magnitude**: [`UInt64`](UInt64.md)

#### Implementation of

BalanceChange.magnitude

#### Defined in

[lib/int.ts:1099](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1099)

___

### sgn

• **sgn**: [`Sign`](Sign.md)

#### Implementation of

BalanceChange.sgn

#### Defined in

[lib/int.ts:1100](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1100)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `-1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1197](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1197)

___

### one

• `Static` `get` **one**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1191](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1191)

___

### zero

• `Static` `get` **zero**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `0`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1185](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1185)

## Methods

### add

▸ **add**(`y`): [`Int64`](Int64.md)

Addition with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1231](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1231)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Asserts that two values are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Overrides

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/int.ts:1285](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1285)

___

### div

▸ **div**(`y`): [`Int64`](Int64.md)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `z * y <= x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1256](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1256)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Checks if two values are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Bool`](Bool.md)

#### Overrides

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/int.ts:1278](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1278)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Overrides

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/int.ts:1174](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1174)

___

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

Checks if the value is positive.

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:1295](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1295)

___

### mod

▸ **mod**(`y`): [`Int64`](Int64.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisible by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1268](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1268)

___

### mul

▸ **mul**(`y`): [`Int64`](Int64.md)

Multiplication with overflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1245](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1245)

___

### neg

▸ **neg**(): [`Int64`](Int64.md)

Negates the value.

`Int64.from(5).neg()` will turn into `Int64.from(-5)`

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1224](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1224)

___

### sub

▸ **sub**(`y`): [`Int64`](Int64.md)

Subtraction with underflow checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1238](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1238)

___

### toConstant

▸ **toConstant**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L159)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Returns the [Field](../modules.md#field-1) value.

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/int.ts:1204](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1204)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L151)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L155)

___

### toString

▸ **toString**(): `string`

Turns the [Int64](Int64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:1169](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1169)

___

### check

▸ `Static` **check**\<`T`\>(`this`, `v`): `void`

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

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L200)

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

[lib/circuit-value.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L255)

___

### from

▸ `Static` **from**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md).

Check the range if the argument is a constant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1159](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1159)

___

### fromField

▸ `Static` **fromField**(`x`): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) from a [Field](../modules.md#field-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1210](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1210)

___

### fromFieldUnchecked

▸ `Static` `Private` **fromFieldUnchecked**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md) from a [Field](../modules.md#field-1).

Does check if the [Field](../modules.md#field-1) is within range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1131](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1131)

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

[lib/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L175)

___

### fromJSON

▸ `Static` **fromJSON**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit-value.ts:233](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L233)

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

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L96)

___

### fromUnsigned

▸ `Static` **fromUnsigned**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md) from a [Field](../modules.md#field-1).

**Does not** check if the [Field](../modules.md#field-1) is within range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:1149](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/int.ts#L1149)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L125)

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

[lib/circuit-value.ts:214](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L214)

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

[lib/circuit-value.ts:108](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L108)

___

### toInput

▸ `Static` **toInput**\<`T`\>(`this`, `v`): `HashInput`

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

`HashInput`

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L129)

___

### toJSON

▸ `Static` **toJSON**\<`T`\>(`this`, `v`): `any`

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

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit-value.ts:222](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L222)
