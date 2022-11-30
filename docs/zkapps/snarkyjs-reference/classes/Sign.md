# Class: Sign

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`Sign`**

## Table of contents

### Constructors

- [constructor](Sign.md#constructor)

### Properties

- [value](Sign.md#value)

### Accessors

- [minusOne](Sign.md#minusone)
- [one](Sign.md#one)

### Methods

- [assertEquals](Sign.md#assertequals)
- [equals](Sign.md#equals)
- [isConstant](Sign.md#isconstant)
- [isPositive](Sign.md#ispositive)
- [mul](Sign.md#mul)
- [neg](Sign.md#neg)
- [toConstant](Sign.md#toconstant)
- [toFields](Sign.md#tofields)
- [toJSON](Sign.md#tojson)
- [toString](Sign.md#tostring)
- [check](Sign.md#check)
- [fromFields](Sign.md#fromfields)
- [fromJSON](Sign.md#fromjson)
- [fromObject](Sign.md#fromobject)
- [sizeInFields](Sign.md#sizeinfields)
- [toAuxiliary](Sign.md#toauxiliary)
- [toConstant](Sign.md#toconstant-1)
- [toFields](Sign.md#tofields-1)
- [toInput](Sign.md#toinput)
- [toJSON](Sign.md#tojson-1)

## Constructors

### constructor

• **new Sign**(...`props`)

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

[lib/int.ts:359](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L359)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:364](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L364)

___

### one

• `Static` `get` **one**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:361](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L361)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Sign`](Sign.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:153](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L153)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Sign`](Sign.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:149](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/circuit_value.ts#L149)

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

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:385](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L385)

___

### mul

▸ **mul**(`y`): [`Sign`](Sign.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Sign`](Sign.md) |

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:382](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L382)

___

### neg

▸ **neg**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:379](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L379)

___

### toConstant

▸ **toConstant**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

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

[lib/int.ts:388](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L388)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Sign`](Sign.md) |

#### Returns

`void`

#### Overrides

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/int.ts:367](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L367)

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
| `x` | [`Sign`](Sign.md) |

#### Returns

`HashInput`

#### Overrides

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/int.ts:371](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L371)

___

### toJSON

▸ `Static` **toJSON**(`x`): ``"Positive"`` \| ``"Negative"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Sign`](Sign.md) |

#### Returns

``"Positive"`` \| ``"Negative"``

#### Overrides

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/int.ts:374](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/int.ts#L374)
