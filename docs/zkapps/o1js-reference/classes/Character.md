[o1js](../README.md) / [Modules](../modules.md) / Character

# Class: Character

## Hierarchy

- `CircuitValue`

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

CircuitValue.constructor

#### Defined in

[lib/provable/types/circuit-value.ts:13](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L13)

## Properties

### value

• **value**: `Field`

#### Defined in

[lib/provable/string.ts:12](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L12)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Character`](Character.md) |

#### Returns

`Bool`

#### Inherited from

CircuitValue.equals

#### Defined in

[lib/provable/types/circuit-value.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L97)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CircuitValue.isConstant

#### Defined in

[lib/provable/types/circuit-value.ts:105](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L105)

___

### isNull

▸ **isNull**(): `Bool`

#### Returns

`Bool`

#### Defined in

[lib/provable/string.ts:14](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L14)

___

### toConstant

▸ **toConstant**(): [`Character`](Character.md)

#### Returns

[`Character`](Character.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

___

### toField

▸ **toField**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/provable/string.ts:18](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L18)

___

### toFields

▸ **toFields**(): `Field`[]

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:85](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L85)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:89](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L89)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/provable/string.ts:22](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L22)

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

CircuitValue.check

#### Defined in

[lib/provable/string.ts:34](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L34)

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

CircuitValue.empty

#### Defined in

[lib/provable/types/circuit-value.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L189)

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
| `xs` | `Field`[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromFields

#### Defined in

[lib/provable/types/circuit-value.ts:109](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L109)

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

CircuitValue.fromJSON

#### Defined in

[lib/provable/types/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L167)

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

CircuitValue.fromObject

#### Defined in

[lib/provable/types/circuit-value.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L30)

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

[lib/provable/string.ts:27](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L27)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

CircuitValue.sizeInFields

#### Defined in

[lib/provable/types/circuit-value.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L37)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

CircuitValue.toAuxiliary

#### Defined in

[lib/provable/types/circuit-value.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L59)

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

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:148](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L148)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): `Field`[]

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

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:42](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L42)

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

CircuitValue.toInput

#### Defined in

[lib/provable/types/circuit-value.ts:63](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L63)

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

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:156](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L156)
