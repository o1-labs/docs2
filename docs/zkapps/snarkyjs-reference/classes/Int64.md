# Class: Int64

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

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

[lib/int.ts:422](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L422)

## Properties

### magnitude

• **magnitude**: [`UInt64`](UInt64.md)

#### Implementation of

BalanceChange.magnitude

#### Defined in

[lib/int.ts:399](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L399)

___

### sgn

• **sgn**: [`Sign`](Sign.md)

#### Implementation of

BalanceChange.sgn

#### Defined in

[lib/int.ts:400](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L400)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:473](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L473)

___

### one

• `Static` `get` **one**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:470](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L470)

___

### zero

• `Static` `get` **zero**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:467](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L467)

## Methods

### add

▸ **add**(`y`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:495](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L495)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

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

[lib/int.ts:524](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L524)

___

### div

▸ **div**(`y`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:507](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L507)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Bool`](Bool.md)

#### Overrides

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/int.ts:520](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L520)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Overrides

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/int.ts:458](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L458)

___

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:531](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L531)

___

### mod

▸ **mod**(`y`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:513](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L513)

___

### mul

▸ **mul**(`y`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:503](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L503)

___

### neg

▸ **neg**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:490](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L490)

___

### sub

▸ **sub**(`y`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:499](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L499)

___

### toConstant

▸ **toConstant**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:145](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L145)

___

### toField

▸ **toField**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/int.ts:477](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L477)

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

[lib/int.ts:452](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L452)

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

[lib/circuit_value.ts:186](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L186)

___

### from

▸ `Static` **from**(`x`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:444](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L444)

___

### fromField

▸ `Static` **fromField**(`x`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:481](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L481)

___

### fromFieldUnchecked

▸ `Static` `Private` **fromFieldUnchecked**(`x`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:426](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L426)

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

### fromUnsigned

▸ `Static` **fromUnsigned**(`x`): [`Int64`](Int64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) |

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/int.ts:439](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/int.ts#L439)

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

[lib/circuit_value.ts:115](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L115)

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

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/circuit_value.ts#L208)
