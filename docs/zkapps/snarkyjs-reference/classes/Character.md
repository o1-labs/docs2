[SnarkyJS](../README.md) / [Modules](../modules.md) / Character

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

[lib/circuit_value.ts:72](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L72)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/string.ts:11](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L11)

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

[lib/circuit_value.ts:160](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L160)

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

[lib/circuit_value.ts:156](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L156)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:164](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L164)

___

### isNull

▸ **isNull**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/string.ts:13](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L13)

___

### toConstant

▸ **toConstant**(): [`Character`](Character.md)

#### Returns

[`Character`](Character.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:152](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L152)

___

### toField

▸ **toField**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:17](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L17)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:144](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L144)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:148](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L148)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/string.ts:21](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L21)

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

[lib/string.ts:33](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L33)

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

[lib/circuit_value.ts:168](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L168)

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

[lib/circuit_value.ts:226](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L226)

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

[lib/circuit_value.ts:89](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L89)

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

[lib/string.ts:26](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/string.ts#L26)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:96](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L96)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:118](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L118)

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

[lib/circuit_value.ts:207](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L207)

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

[lib/circuit_value.ts:101](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L101)

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

[lib/circuit_value.ts:122](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L122)

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

[lib/circuit_value.ts:215](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/circuit_value.ts#L215)
