# Class: UInt64

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
- [toConstant](UInt64.md#toconstant)
- [toFields](UInt64.md#tofields)
- [toJSON](UInt64.md#tojson)
- [toString](UInt64.md#tostring)
- [MAXINT](UInt64.md#maxint)
- [check](UInt64.md#check)
- [checkConstant](UInt64.md#checkconstant)
- [from](UInt64.md#from)
- [fromBigInt](UInt64.md#frombigint)
- [fromJSON](UInt64.md#fromjson)
- [fromNumber](UInt64.md#fromnumber)
- [fromObject](UInt64.md#fromobject)
- [fromString](UInt64.md#fromstring)
- [ofFields](UInt64.md#offields)
- [sizeInFields](UInt64.md#sizeinfields)
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

[lib/circuit_value.ts:43](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L43)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:10](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L10)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `64`

#### Defined in

[lib/int.ts:11](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L11)

## Accessors

### one

• `Static` `get` **one**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:17](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L17)

___

### zero

• `Static` `get` **zero**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:13](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L13)

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

[lib/int.ts:135](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L135)

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

[lib/circuit_value.ts:127](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L127)

___

### assertGt

▸ **assertGt**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:184](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L184)

___

### assertGte

▸ **assertGte**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:192](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L192)

___

### assertLt

▸ **assertLt**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:176](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L176)

___

### assertLte

▸ **assertLte**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:167](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L167)

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

[lib/int.ts:109](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L109)

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

[lib/int.ts:66](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L66)

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

[lib/circuit_value.ts:123](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L123)

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

[lib/int.ts:180](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L180)

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

[lib/int.ts:188](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L188)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:131](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L131)

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

[lib/int.ts:172](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L172)

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

[lib/int.ts:150](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L150)

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

[lib/int.ts:119](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L119)

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

[lib/int.ts:126](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L126)

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

[lib/int.ts:144](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L144)

___

### toConstant

▸ **toConstant**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:119](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L119)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L111)

___

### toJSON

▸ **toJSON**(): `JSONValue`

#### Returns

`JSONValue`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:115](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L115)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/int.ts:21](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L21)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:62](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L62)

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

[lib/int.ts:25](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L25)

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

[lib/int.ts:36](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L36)

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

[lib/int.ts:48](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L48)

___

### fromBigInt

▸ `Static` **fromBigInt**(`x`): [`UInt64`](UInt64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:58](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L58)

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
| `value` | `JSONValue` |

#### Returns

``null`` \| `InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:193](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L193)

___

### fromNumber

▸ `Static` **fromNumber**(`x`): [`UInt64`](UInt64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:52](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L52)

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

[lib/circuit_value.ts:60](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L60)

___

### fromString

▸ `Static` **fromString**(`x`): [`UInt64`](UInt64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:55](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L55)

___

### ofFields

▸ `Static` **ofFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

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

[CircuitValue](CircuitValue.md).[ofFields](CircuitValue.md#offields)

#### Defined in

[lib/circuit_value.ts:135](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L135)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:67](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L67)

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

[lib/circuit_value.ts:171](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L171)

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

[lib/circuit_value.ts:72](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L72)

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

[lib/int.ts:29](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L29)

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

[lib/int.ts:32](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L32)
