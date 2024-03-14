[o1js](../README.md) / [Modules](../modules.md) / Signature

# Class: Signature

A Schnorr [Signature](Signature.md) over the Pasta Curves.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`Signature`**

## Table of contents

### Constructors

- [constructor](Signature.md#constructor)

### Properties

- [r](Signature.md#r)
- [s](Signature.md#s)

### Methods

- [assertEquals](Signature.md#assertequals)
- [equals](Signature.md#equals)
- [isConstant](Signature.md#isconstant)
- [toBase58](Signature.md#tobase58)
- [toConstant](Signature.md#toconstant)
- [toFields](Signature.md#tofields)
- [toJSON](Signature.md#tojson)
- [verify](Signature.md#verify)
- [check](Signature.md#check)
- [create](Signature.md#create)
- [empty](Signature.md#empty)
- [fromBase58](Signature.md#frombase58)
- [fromFields](Signature.md#fromfields)
- [fromJSON](Signature.md#fromjson)
- [fromObject](Signature.md#fromobject)
- [sizeInFields](Signature.md#sizeinfields)
- [toAuxiliary](Signature.md#toauxiliary)
- [toConstant](Signature.md#toconstant-1)
- [toFields](Signature.md#tofields-1)
- [toInput](Signature.md#toinput)
- [toJSON](Signature.md#tojson-1)

## Constructors

### constructor

• **new Signature**(`...props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit-value.ts:79](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L79)

## Properties

### r

• **r**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:247](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L247)

___

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:248](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L248)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Signature`](Signature.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L167)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Signature`](Signature.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit-value.ts:163](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit-value.ts:171](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L171)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [Signature](Signature.md) in base58 format.

#### Returns

`string`

#### Defined in

[lib/signature.ts:314](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L314)

___

### toConstant

▸ **toConstant**(): [`Signature`](Signature.md)

#### Returns

[`Signature`](Signature.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L159)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L151)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L155)

___

### verify

▸ **verify**(`publicKey`, `msg`): [`Bool`](Bool.md)

Verifies the [Signature](Signature.md) using a message and the corresponding [PublicKey](Types.PublicKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `msg` | [`Field`](Field.md)[] |

#### Returns

[`Bool`](Bool.md)

a [Bool](../modules.md#bool-1)

#### Defined in

[lib/signature.ts:285](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L285)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L200)

___

### create

▸ `Static` **create**(`privKey`, `msg`): [`Signature`](Signature.md)

Signs a message using a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `privKey` | [`PrivateKey`](PrivateKey.md) |
| `msg` | [`Field`](Field.md)[] |

#### Returns

[`Signature`](Signature.md)

a [Signature](Signature.md)

#### Defined in

[lib/signature.ts:254](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L254)

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

[lib/circuit-value.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L255)

___

### fromBase58

▸ `Static` **fromBase58**(`signatureBase58`): [`Signature`](Signature.md)

Decodes a base58 encoded signature into a [Signature](Signature.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatureBase58` | `string` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[lib/signature.ts:304](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/signature.ts#L304)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L96)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit-value.ts:222](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L222)
