# Class: Sign

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
- [fromJSON](Sign.md#fromjson)
- [fromObject](Sign.md#fromobject)
- [ofFields](Sign.md#offields)
- [sizeInFields](Sign.md#sizeinfields)
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

[lib/circuit_value.ts:43](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L43)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/int.ts:369](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L369)

## Accessors

### minusOne

• `Static` `get` **minusOne**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:374](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L374)

___

### one

• `Static` `get` **one**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:371](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L371)

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

[lib/circuit_value.ts:127](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L127)

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

[lib/circuit_value.ts:123](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L123)

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

### isPositive

▸ **isPositive**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/int.ts:395](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L395)

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

[lib/int.ts:392](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L392)

___

### neg

▸ **neg**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

#### Defined in

[lib/int.ts:389](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L389)

___

### toConstant

▸ **toConstant**(): [`Sign`](Sign.md)

#### Returns

[`Sign`](Sign.md)

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

[lib/int.ts:398](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L398)

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

[lib/int.ts:377](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L377)

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
| `x` | [`Sign`](Sign.md) |

#### Returns

`HashInput`

#### Overrides

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/int.ts:381](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L381)

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

[lib/int.ts:384](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/int.ts#L384)
