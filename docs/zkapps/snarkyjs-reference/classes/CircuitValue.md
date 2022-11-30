# Class: CircuitValue

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

## Hierarchy

- **`CircuitValue`**

  ↳ [`UInt32`](UInt32.md)

  ↳ [`UInt64`](UInt64.md)

  ↳ [`Int64`](Int64.md)

  ↳ [`Sign`](Sign.md)

  ↳ [`PublicKey`](Types.PublicKey.md)

  ↳ [`Character`](Character.md)

  ↳ [`CircuitString`](CircuitString.md)

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

• **new CircuitValue**(...`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Defined in

[lib/circuit_value.ts:65](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L65)

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

[lib/circuit_value.ts:153](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L153)

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

[lib/circuit_value.ts:149](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L149)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/circuit_value.ts:157](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L157)

___

### toConstant

▸ **toConstant**(): [`CircuitValue`](CircuitValue.md)

#### Returns

[`CircuitValue`](CircuitValue.md)

#### Defined in

[lib/circuit_value.ts:145](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L145)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L137)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[lib/circuit_value.ts:141](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L141)

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

[lib/circuit_value.ts:186](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L186)

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

[lib/circuit_value.ts:161](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L161)

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

#### Defined in

[lib/circuit_value.ts:219](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L219)

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

[lib/circuit_value.ts:82](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L82)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[lib/circuit_value.ts:89](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L89)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L111)

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

[lib/circuit_value.ts:200](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L200)

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

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L94)

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

[lib/circuit_value.ts:115](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L115)

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

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/circuit_value.ts#L208)
