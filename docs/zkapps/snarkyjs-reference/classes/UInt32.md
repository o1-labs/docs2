# Class: UInt32

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

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
- [assertEquals](UInt32.md#assertequals)
- [assertGt](UInt32.md#assertgt)
- [assertGte](UInt32.md#assertgte)
- [assertLt](UInt32.md#assertlt)
- [assertLte](UInt32.md#assertlte)
- [div](UInt32.md#div)
- [divMod](UInt32.md#divmod)
- [equals](UInt32.md#equals)
- [gt](UInt32.md#gt)
- [gte](UInt32.md#gte)
- [isConstant](UInt32.md#isconstant)
- [lt](UInt32.md#lt)
- [lte](UInt32.md#lte)
- [mod](UInt32.md#mod)
- [mul](UInt32.md#mul)
- [sub](UInt32.md#sub)
- [toBigint](UInt32.md#tobigint)
- [toConstant](UInt32.md#toconstant)
- [toFields](UInt32.md#tofields)
- [toJSON](UInt32.md#tojson)
- [toString](UInt32.md#tostring)
- [toUInt64](UInt32.md#touint64)
- [MAXINT](UInt32.md#maxint)
- [check](UInt32.md#check)
- [checkConstant](UInt32.md#checkconstant)
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

• **new UInt32**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:65](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L65)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:193](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L193)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `32`

#### Defined in

[lib/int.ts:194](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L194)

## Accessors

### one

• `Static` `get` **one**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:200](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L200)

___

### zero

• `Static` `get` **zero**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:196](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L196)

## Methods

### add

▸ **add**(`y`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:298](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L298)

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

[lib/circuit_value.ts:153](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L153)

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

#### Defined in

[lib/int.ts:345](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L345)

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

#### Defined in

[lib/int.ts:353](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L353)

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

#### Defined in

[lib/int.ts:337](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L337)

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

#### Defined in

[lib/int.ts:328](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L328)

___

### div

▸ **div**(`y`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:284](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L284)

___

### divMod

▸ **divMod**(`y`): `Object`

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

[lib/int.ts:248](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L248)

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

[lib/circuit_value.ts:149](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L149)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:341](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L341)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:349](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L349)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:157](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L157)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:333](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L333)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:310](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L310)

___

### mod

▸ **mod**(`y`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:288](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L288)

___

### mul

▸ **mul**(`y`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:292](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L292)

___

### sub

▸ **sub**(`y`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:304](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L304)

___

### toBigint

▸ **toBigint**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/int.ts:207](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L207)

___

### toConstant

▸ **toConstant**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:145](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L145)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L137)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:141](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L141)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/int.ts:204](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L204)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:211](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L211)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:244](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L244)

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

[lib/int.ts:216](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L216)

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

[lib/int.ts:227](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L227)

___

### from

▸ `Static` **from**(`x`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:239](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L239)

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

[lib/circuit_value.ts:161](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L161)

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

[lib/circuit_value.ts:219](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L219)

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

[lib/circuit_value.ts:82](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L82)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:89](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L89)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L111)

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

[lib/circuit_value.ts:200](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L200)

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

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L94)

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

[lib/int.ts:220](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L220)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`string`

#### Overrides

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/int.ts:223](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L223)
