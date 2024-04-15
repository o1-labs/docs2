[o1js](../README.md) / [Modules](../modules.md) / Signature

# Class: Signature

A Schnorr [Signature](Signature.md) over the Pasta Curves.

## Hierarchy

- `CircuitValue`

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

CircuitValue.constructor

#### Defined in

[lib/provable/types/circuit-value.ts:13](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L13)

## Properties

### r

• **r**: `Field`

#### Defined in

[lib/provable/crypto/signature.ts:244](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L244)

___

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/provable/crypto/signature.ts:245](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L245)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Signature`](Signature.md) |

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

### toBase58

▸ **toBase58**(): `string`

Encodes a [Signature](Signature.md) in base58 format.

#### Returns

`string`

#### Defined in

[lib/provable/crypto/signature.ts:308](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L308)

___

### toConstant

▸ **toConstant**(): [`Signature`](Signature.md)

#### Returns

[`Signature`](Signature.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

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

### verify

▸ **verify**(`publicKey`, `msg`): `Bool`

Verifies the [Signature](Signature.md) using a message and the corresponding [PublicKey](Types.PublicKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `msg` | `Field`[] |

#### Returns

`Bool`

a [Bool](../modules.md#bool-1)

#### Defined in

[lib/provable/crypto/signature.ts:282](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L282)

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

CircuitValue.check

#### Defined in

[lib/provable/types/circuit-value.ts:134](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L134)

___

### create

▸ `Static` **create**(`privKey`, `msg`): [`Signature`](Signature.md)

Signs a message using a [PrivateKey](PrivateKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `privKey` | [`PrivateKey`](PrivateKey.md) |
| `msg` | `Field`[] |

#### Returns

[`Signature`](Signature.md)

a [Signature](Signature.md)

#### Defined in

[lib/provable/crypto/signature.ts:251](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L251)

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

[lib/provable/crypto/signature.ts:301](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/signature.ts#L301)

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
