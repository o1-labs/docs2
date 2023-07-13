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

[lib/circuit_value.ts:70](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L70)

## Properties

### value

• **value**: [`Field`](Field.md)

#### Defined in

[lib/string.ts:11](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L11)

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

[lib/circuit_value.ts:158](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L158)

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

[lib/circuit_value.ts:154](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L154)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L162)

___

### isNull

▸ **isNull**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/string.ts:13](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L13)

___

### toConstant

▸ **toConstant**(): [`Character`](Character.md)

#### Returns

[`Character`](Character.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L150)

___

### toField

▸ **toField**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:17](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L17)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:142](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L142)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:146](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L146)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/string.ts:21](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L21)

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

[lib/string.ts:33](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L33)

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

[lib/circuit_value.ts:166](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L166)

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

[lib/circuit_value.ts:224](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L224)

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

[lib/circuit_value.ts:87](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L87)

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

[lib/string.ts:26](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/string.ts#L26)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L94)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L116)

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

[lib/circuit_value.ts:205](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L205)

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

[lib/circuit_value.ts:99](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L99)

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

[lib/circuit_value.ts:120](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L120)

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

[lib/circuit_value.ts:213](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/lib/circuit_value.ts#L213)
