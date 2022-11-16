# Class: UInt64

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

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

[lib/circuit_value.ts:65](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L65)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:10](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L10)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `64`

#### Defined in

[lib/int.ts:11](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L11)

## Accessors

### one

• `Static` `get` **one**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:17](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L17)

___

### zero

• `Static` `get` **zero**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:13](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L13)

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

[lib/int.ts:129](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L129)

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

[lib/circuit_value.ts:153](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L153)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:179](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L179)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:187](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L187)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:171](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L171)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/int.ts:162](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L162)

___

### div

▸ **div**(`y`): [`UInt64`](UInt64.md)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `x * y <= x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt64`](UInt64.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:103](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L103)

___

### divMod

▸ **divMod**(`y`): `Object`

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

[lib/int.ts:60](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L60)

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

[lib/circuit_value.ts:149](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L149)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:175](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L175)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:183](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L183)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:157](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L157)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:167](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L167)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:144](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L144)

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

[lib/int.ts:113](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L113)

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

[lib/int.ts:120](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L120)

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

[lib/int.ts:138](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L138)

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/int.ts:24](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L24)

___

### toConstant

▸ **toConstant**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:145](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L145)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L137)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:141](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L141)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/int.ts:21](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L21)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:56](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L56)

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

[lib/int.ts:28](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L28)

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

[lib/int.ts:39](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L39)

___

### from

▸ `Static` **from**(`x`): [`UInt64`](UInt64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:51](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L51)

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

[lib/circuit_value.ts:161](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L161)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `value`): ``null`` \| `InstanceType`<`T`\>

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

``null`` \| `InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:219](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L219)

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

[lib/circuit_value.ts:82](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L82)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:89](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L89)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L111)

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

[lib/circuit_value.ts:200](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L200)

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

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L94)

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

[lib/int.ts:32](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L32)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) |

#### Returns

`string`

#### Overrides

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/int.ts:35](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L35)
