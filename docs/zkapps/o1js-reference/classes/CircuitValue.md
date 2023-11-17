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

[lib/circuit_value.ts:72](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L72)

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

[lib/circuit_value.ts:160](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L160)

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

[lib/circuit_value.ts:156](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L156)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/circuit_value.ts:164](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L164)

___

### toConstant

▸ **toConstant**(): [`CircuitValue`](CircuitValue.md)

#### Returns

[`CircuitValue`](CircuitValue.md)

#### Defined in

[lib/circuit_value.ts:152](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L152)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit_value.ts:144](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L144)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[lib/circuit_value.ts:148](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L148)

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

#### Defined in

[lib/circuit_value.ts:193](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L193)

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

#### Defined in

[lib/circuit_value.ts:168](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L168)

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

#### Defined in

[lib/circuit_value.ts:226](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L226)

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

#### Defined in

[lib/circuit_value.ts:89](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L89)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[lib/circuit_value.ts:96](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L96)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Defined in

[lib/circuit_value.ts:118](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L118)

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

#### Defined in

[lib/circuit_value.ts:207](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L207)

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

#### Defined in

[lib/circuit_value.ts:101](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L101)

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

#### Defined in

[lib/circuit_value.ts:122](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L122)

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

#### Defined in

[lib/circuit_value.ts:215](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit_value.ts#L215)
