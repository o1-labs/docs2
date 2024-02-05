[o1js](../README.md) / [Modules](../modules.md) / Character

# Class: Character

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../modules.md#struct), which features a simpler API and better typing.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`Character`**

## Table of contents

### Constructors

- [constructor](Character.md#constructor)

### Properties

- [value](Character.md#value)

### Methods

- [assertEquals](Character.md#assertequals)
- [equals](Character.md#equals)
- [isConstant](Character.md#isconstant)
- [isNull](Character.md#isnull)
- [toConstant](Character.md#toconstant)
- [toField](Character.md#tofield)
- [toFields](Character.md#tofields)
- [toJSON](Character.md#tojson)
- [toString](Character.md#tostring)
- [check](Character.md#check)
- [empty](Character.md#empty)
- [fromFields](Character.md#fromfields)
- [fromJSON](Character.md#fromjson)
- [fromObject](Character.md#fromobject)
- [fromString](Character.md#fromstring)
- [sizeInFields](Character.md#sizeinfields)
- [toAuxiliary](Character.md#toauxiliary)
- [toConstant](Character.md#toconstant-1)
- [toFields](Character.md#tofields-1)
- [toInput](Character.md#toinput)
- [toJSON](Character.md#tojson-1)

## Constructors

### constructor

• **new Character**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:78](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L78)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/string.ts:12](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L12)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Character`](Character.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:166](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L166)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Character`](Character.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L162)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:170](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L170)

___

### isNull

▸ **isNull**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/string.ts:14](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L14)

___

### toConstant

▸ **toConstant**(): [`Character`](Character.md)

#### Returns

[`Character`](Character.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:158](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L158)

___

### toField

▸ **toField**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:18](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L18)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L150)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:154](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L154)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/string.ts:22](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L22)

___

### check

▸ `Static` **check**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Character`](Character.md) |

#### Returns

`void`

#### Overrides

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/string.ts:34](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L34)

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

[CircuitValue](CircuitValue.md).[empty](CircuitValue.md#empty)

#### Defined in

[lib/circuit_value.ts:254](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L254)

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
| `xs` | [`Field`](Field.md)[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:174](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L174)

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

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:232](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L232)

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

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:95](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L95)

___

### fromString

▸ `Static` **fromString**(`str`): [`Character`](Character.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Character`](Character.md)

#### Defined in

[lib/string.ts:27](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/string.ts#L27)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:102](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L102)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:124](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L124)

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

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:213](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L213)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): [`Field`](Field.md)[]

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

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:107](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L107)

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

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit_value.ts:128](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L128)

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

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:221](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L221)
