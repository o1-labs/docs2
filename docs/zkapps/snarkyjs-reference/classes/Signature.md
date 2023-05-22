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

[lib/circuit_value.ts:87](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L87)

## Properties

### r

• **r**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:191](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L191)

___

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:192](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L192)

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

[lib/circuit_value.ts:175](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L175)

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

[lib/circuit_value.ts:171](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L171)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:179](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L179)

___

### toBase58

▸ **toBase58**(): `string`

Encodes a [Signature](Signature.md) in base58 format.

#### Returns

`string`

#### Defined in

[lib/signature.ts:252](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L252)

___

### toConstant

▸ **toConstant**(): [`Signature`](Signature.md)

#### Returns

[`Signature`](Signature.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:167](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L167)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:159](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L159)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L163)

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

a [Bool](Bool.md)

#### Defined in

[lib/signature.ts:226](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L226)

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

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L208)

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

[lib/signature.ts:198](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L198)

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

[lib/signature.ts:242](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/signature.ts#L242)

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

[lib/circuit_value.ts:183](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L183)

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

[lib/circuit_value.ts:241](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L241)

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

[lib/circuit_value.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L104)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L111)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:133](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L133)

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

[lib/circuit_value.ts:222](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L222)

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

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L116)

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

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L137)

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

[lib/circuit_value.ts:230](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L230)
