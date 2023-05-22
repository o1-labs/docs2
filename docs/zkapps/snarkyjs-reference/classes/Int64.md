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

[lib/int.ts:790](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L790)

## Properties

### magnitude

• **magnitude**: [`UInt64`](UInt64.md)

#### Implementation of

BalanceChange.magnitude

#### Defined in

[lib/int.ts:767](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L767)

___

### sgn

• **sgn**: [`Sign`](Sign.md)

#### Implementation of

BalanceChange.sgn

#### Defined in

[lib/int.ts:768](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L768)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `-1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:865](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L865)

___

### one

• `Static` `get` **one**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `1`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:859](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L859)

___

### zero

• `Static` `get` **zero**(): [`Int64`](Int64.md)

Static method to create a [Int64](Int64.md) with value `0`.

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:853](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L853)

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

[lib/int.ts:899](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L899)

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

[lib/int.ts:953](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L953)

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

[lib/int.ts:924](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L924)

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

[lib/int.ts:946](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L946)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Overrides

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/int.ts:842](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L842)

___

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

Checks if the value is postive.

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:963](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L963)

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

[lib/int.ts:936](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L936)

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

[lib/int.ts:913](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L913)

___

### neg

▸ **neg**(): [`Int64`](Int64.md)

Negates the value.

`Int64.from(5).neg()` will turn into `Int64.from(-5)`

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:892](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L892)

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

[lib/int.ts:906](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L906)

___

### toConstant

▸ **toConstant**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L150)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Returns the [Field](Field.md) value.

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/int.ts:872](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L872)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:142](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L142)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:146](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L146)

___

### toString

▸ **toString**(): `string`

Turns the [Int64](Int64.md) into a string.

#### Returns

`string`

#### Defined in

[lib/int.ts:837](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L837)

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

[lib/circuit_value.ts:191](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L191)

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

[lib/int.ts:827](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L827)

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

[lib/int.ts:878](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L878)

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

[lib/int.ts:799](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L799)

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

[lib/circuit_value.ts:166](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L166)

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

[lib/circuit_value.ts:224](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L224)

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

[lib/circuit_value.ts:87](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L87)

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

[lib/int.ts:817](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/int.ts#L817)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L94)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L116)

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

[lib/circuit_value.ts:205](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L205)

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

[lib/circuit_value.ts:99](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L99)

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

[lib/circuit_value.ts:120](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L120)

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

[lib/circuit_value.ts:213](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit_value.ts#L213)
