# Class: UInt32

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
- [toConstant](UInt32.md#toconstant)
- [toFields](UInt32.md#tofields)
- [toJSON](UInt32.md#tojson)
- [toString](UInt32.md#tostring)
- [toUInt64](UInt32.md#touint64)
- [MAXINT](UInt32.md#maxint)
- [check](UInt32.md#check)
- [checkConstant](UInt32.md#checkconstant)
- [from](UInt32.md#from)
- [fromBigInt](UInt32.md#frombigint)
- [fromJSON](UInt32.md#fromjson)
- [fromNumber](UInt32.md#fromnumber)
- [fromObject](UInt32.md#fromobject)
- [fromString](UInt32.md#fromstring)
- [ofFields](UInt32.md#offields)
- [sizeInFields](UInt32.md#sizeinfields)
- [toConstant](UInt32.md#toconstant-1)
- [toFields](UInt32.md#tofields-1)
- [toInput](UInt32.md#toinput)
- [toJSON](UInt32.md#tojson-1)

## Constructors

### constructor

• **new UInt32**(...`props`)

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

[lib/int.ts:198](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L198)

___

### NUM\_BITS

▪ `Static` **NUM\_BITS**: `number` = `32`

#### Defined in

[lib/int.ts:199](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L199)

## Accessors

### one

• `Static` `get` **one**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:205](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L205)

___

### zero

• `Static` `get` **zero**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:201](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L201)

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

[lib/int.ts:309](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L309)

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

[lib/circuit_value.ts:127](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L127)

___

### assertGt

▸ **assertGt**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:355](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L355)

___

### assertGte

▸ **assertGte**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:363](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L363)

___

### assertLt

▸ **assertLt**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:347](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L347)

___

### assertLte

▸ **assertLte**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`UInt32`](UInt32.md) |

#### Returns

`void`

#### Defined in

[lib/int.ts:338](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L338)

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

[lib/int.ts:295](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L295)

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

[lib/int.ts:259](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L259)

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

[lib/circuit_value.ts:123](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L123)

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

[lib/int.ts:351](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L351)

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

[lib/int.ts:359](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L359)

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
| `y` | [`UInt32`](UInt32.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:343](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L343)

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

[lib/int.ts:321](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L321)

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

[lib/int.ts:299](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L299)

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

[lib/int.ts:303](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L303)

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

[lib/int.ts:315](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L315)

___

### toConstant

▸ **toConstant**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

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

[lib/int.ts:209](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L209)

___

### toUInt64

▸ **toUInt64**(): [`UInt64`](UInt64.md)

#### Returns

[`UInt64`](UInt64.md)

#### Defined in

[lib/int.ts:213](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L213)

___

### MAXINT

▸ `Static` **MAXINT**(): [`UInt32`](UInt32.md)

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:255](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L255)

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

[lib/int.ts:218](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L218)

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

[lib/int.ts:229](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L229)

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

[lib/int.ts:241](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L241)

___

### fromBigInt

▸ `Static` **fromBigInt**(`x`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:251](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L251)

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

▸ `Static` **fromNumber**(`x`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:245](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L245)

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

▸ `Static` **fromString**(`x`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/int.ts:248](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L248)

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
| `x` | [`UInt32`](UInt32.md) |

#### Returns

`HashInput`

#### Overrides

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/int.ts:222](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L222)

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

[lib/int.ts:225](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L225)
