[o1js](../README.md) / [Modules](../modules.md) / Int64

# Class: Int64

A 64 bit signed integer with values ranging from -18,446,744,073,709,551,615 to 18,446,744,073,709,551,615.

## Hierarchy

- `CircuitValue`

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

CircuitValue.constructor

#### Defined in

[lib/provable/int.ts:1015](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1015)

## Properties

### magnitude

• **magnitude**: [`UInt64`](UInt64.md)

#### Implementation of

BalanceChange.magnitude

#### Defined in

[lib/provable/int.ts:992](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L992)

___

### sgn

• **sgn**: [`Sign`](Sign.md)

#### Implementation of

BalanceChange.sgn

#### Defined in

[lib/provable/int.ts:993](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L993)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `-1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1090](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1090)

___

### one

• `Static` `get` **one**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1084](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1084)

___

### zero

• `Static` `get` **zero**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `0`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1078](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1078)

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

[lib/provable/int.ts:1124](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1124)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/int.ts:1178](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1178)

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

[lib/provable/int.ts:1149](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1149)

___

### equals

▸ **equals**(`y`): `Bool`

Checks if two values are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

`Bool`

#### Overrides

CircuitValue.equals

#### Defined in

[lib/provable/int.ts:1171](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1171)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Overrides

CircuitValue.isConstant

#### Defined in

[lib/provable/int.ts:1067](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1067)

___

### isPositive

▸ **isPositive**(): `Bool`

Checks if the value is positive.

#### Returns

`Bool`

#### Defined in

[lib/provable/int.ts:1188](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1188)

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

[lib/provable/int.ts:1161](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1161)

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

[lib/provable/int.ts:1138](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1138)

___

### neg

▸ **neg**(): [`Int64`](Int64.md)

Negates the value.

`Int64.from(5).neg()` will turn into `Int64.from(-5)`

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1117](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1117)

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

[lib/provable/int.ts:1131](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1131)

___

### toConstant

▸ **toConstant**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

___

### toField

▸ **toField**(): `Field`

Returns the [Field](../modules.md#field-1) value.

#### Returns

`Field`

#### Defined in

[lib/provable/int.ts:1097](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1097)

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

Turns the [Int64](Int64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/provable/int.ts:1062](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1062)

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

CircuitValue.check

#### Defined in

[lib/provable/types/circuit-value.ts:134](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L134)

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

▸ `Static` **from**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md).

Check the range if the argument is a constant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Field` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1052](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1052)

___

### fromField

▸ `Static` **fromField**(`x`): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) from a [Field](../modules.md#field-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field` |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1103](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1103)

___

### fromFieldUnchecked

▸ `Static` `Private` **fromFieldUnchecked**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md) from a [Field](../modules.md#field-1).

Does check if the [Field](../modules.md#field-1) is within range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field` |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/provable/int.ts:1024](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1024)

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

CircuitValue.fromJSON

#### Defined in

[lib/provable/types/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L167)

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

[lib/provable/int.ts:1042](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/int.ts#L1042)

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

CircuitValue.toInput

#### Defined in

[lib/provable/types/circuit-value.ts:63](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L63)

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

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:156](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L156)
