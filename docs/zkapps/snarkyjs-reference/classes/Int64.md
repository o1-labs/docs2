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

[lib/int.ts:785](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L785)

## Properties

### magnitude

• **magnitude**: [`UInt64`](UInt64.md)

#### Implementation of

BalanceChange.magnitude

#### Defined in

[lib/int.ts:762](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L762)

___

### sgn

• **sgn**: [`Sign`](Sign.md)

#### Implementation of

BalanceChange.sgn

#### Defined in

[lib/int.ts:763](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L763)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `-1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:861](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L861)

___

### one

• `Static` `get` **one**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:855](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L855)

___

### zero

• `Static` `get` **zero**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `0`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:849](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L849)

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

[lib/int.ts:895](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L895)

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

[lib/int.ts:949](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L949)

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

[lib/int.ts:920](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L920)

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

[lib/int.ts:942](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L942)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Overrides

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/int.ts:838](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L838)

___

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

Checks if the value is postive.

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:959](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L959)

___

### mod

▸ **mod**(`y`): [`Int64`](Int64.md)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisble by `y`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:932](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L932)

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

[lib/int.ts:909](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L909)

___

### neg

▸ **neg**(): [`Int64`](Int64.md)

Negates the value.

`Int64.from(5).neg()` will turn into `Int64.from(-5)`

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:888](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L888)

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

[lib/int.ts:902](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L902)

___

### toConstant

▸ **toConstant**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:167](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L167)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Returns the [Field](Field.md) value.

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/int.ts:868](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L868)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:159](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L159)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L163)

___

### toString

▸ **toString**(): `string`

Turns the [Int64](Int64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:832](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L832)

___

### check

▸ `Static` **check**<`T`\>(`this`, `v`): `void`

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

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L208)

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

[lib/int.ts:822](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L822)

___

### fromField

▸ `Static` **fromField**(`x`): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) from a [Field](Field.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:874](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L874)

___

### fromFieldUnchecked

▸ `Static` `Private` **fromFieldUnchecked**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md) from a [Field](Field.md).

Does check if the [Field](Field.md) is within range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:794](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L794)

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

[lib/circuit_value.ts:183](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L183)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

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

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:241](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L241)

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

[lib/circuit_value.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L104)

___

### fromUnsigned

▸ `Static` **fromUnsigned**(`x`): [`Int64`](Int64.md)

Creates a new [Int64](Int64.md) from a [Field](Field.md).

**Does not** check if the [Field](Field.md) is within range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:812](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/int.ts#L812)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L111)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:133](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L133)

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

[lib/circuit_value.ts:222](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L222)

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

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L116)

___

### toInput

▸ `Static` **toInput**<`T`\>(`this`, `v`): `HashInput`

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

`HashInput`

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L137)

___

### toJSON

▸ `Static` **toJSON**<`T`\>(`this`, `v`): `any`

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

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:230](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L230)
