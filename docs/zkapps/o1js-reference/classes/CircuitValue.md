[o1js](../README.md) / [Modules](../modules.md) / CircuitValue

# Class: CircuitValue

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../modules.md#struct), which features a simpler API and better typing.

## Hierarchy

- **`CircuitValue`**

  ↳ [`UInt32`](UInt32.md)

  ↳ [`UInt64`](UInt64.md)

  ↳ [`Int64`](Int64.md)

  ↳ [`Sign`](Sign.md)

  ↳ [`PublicKey`](Types.PublicKey.md)

  ↳ [`Character`](Character.md)

  ↳ [`CircuitString`](CircuitString.md)

  ↳ [`MerkleMapWitness`](MerkleMapWitness.md)

  ↳ [`PrivateKey`](PrivateKey.md)

  ↳ [`Signature`](Signature.md)

## Table of contents

### Constructors

- [constructor](CircuitValue.md#constructor)

### Methods

- [assertEquals](CircuitValue.md#assertequals)
- [equals](CircuitValue.md#equals)
- [isConstant](CircuitValue.md#isconstant)
- [toConstant](CircuitValue.md#toconstant)
- [toFields](CircuitValue.md#tofields)
- [toJSON](CircuitValue.md#tojson)
- [check](CircuitValue.md#check)
- [empty](CircuitValue.md#empty)
- [fromFields](CircuitValue.md#fromfields)
- [fromJSON](CircuitValue.md#fromjson)
- [fromObject](CircuitValue.md#fromobject)
- [sizeInFields](CircuitValue.md#sizeinfields)
- [toAuxiliary](CircuitValue.md#toauxiliary)
- [toConstant](CircuitValue.md#toconstant-1)
- [toFields](CircuitValue.md#tofields-1)
- [toInput](CircuitValue.md#toinput)
- [toJSON](CircuitValue.md#tojson-1)

## Constructors

### constructor

• **new CircuitValue**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Defined in

[lib/circuit-value.ts:79](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L79)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`CircuitValue`](CircuitValue.md) |

#### Returns

`void`

#### Defined in

[lib/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L167)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`CircuitValue`](CircuitValue.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/circuit-value.ts:163](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/circuit-value.ts:171](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L171)

___

### toConstant

▸ **toConstant**(): [`CircuitValue`](CircuitValue.md)

#### Returns

[`CircuitValue`](CircuitValue.md)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L159)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L151)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L155)

___

### check

▸ `Static` **check**\<`T`\>(`this`, `v`): `void`

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

`void`

#### Defined in

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L200)

___

### empty

▸ `Static` **empty**\<`T`\>(): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

#### Defined in

[lib/circuit-value.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L255)

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

#### Defined in

[lib/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L175)

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

#### Defined in

[lib/circuit-value.ts:233](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L233)

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

#### Defined in

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L96)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Defined in

[lib/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L125)

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

#### Defined in

[lib/circuit-value.ts:214](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L214)

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

#### Defined in

[lib/circuit-value.ts:108](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L108)

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

#### Defined in

[lib/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L129)

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

#### Defined in

[lib/circuit-value.ts:222](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L222)
