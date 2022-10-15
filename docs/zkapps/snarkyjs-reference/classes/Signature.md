# Class: Signature

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
- [toConstant](Signature.md#toconstant)
- [toFields](Signature.md#tofields)
- [toJSON](Signature.md#tojson)
- [verify](Signature.md#verify)
- [check](Signature.md#check)
- [create](Signature.md#create)
- [fromJSON](Signature.md#fromjson)
- [fromObject](Signature.md#fromobject)
- [ofFields](Signature.md#offields)
- [sizeInFields](Signature.md#sizeinfields)
- [toConstant](Signature.md#toconstant-1)
- [toFields](Signature.md#tofields-1)
- [toInput](Signature.md#toinput)
- [toJSON](Signature.md#tojson-1)

## Constructors

### constructor

• **new Signature**(...`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:43](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L43)

## Properties

### r

• **r**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:119](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L119)

___

### s

• **s**: [`Scalar`](Scalar.md)

#### Defined in

[lib/signature.ts:120](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L120)

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

[lib/circuit_value.ts:127](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L127)

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

[lib/circuit_value.ts:123](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L123)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:131](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L131)

___

### toConstant

▸ **toConstant**(): [`Signature`](Signature.md)

#### Returns

[`Signature`](Signature.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:119](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L119)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L111)

___

### toJSON

▸ **toJSON**(): `JSONValue`

#### Returns

`JSONValue`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:115](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L115)

___

### verify

▸ **verify**(`publicKey`, `msg`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `msg` | [`Field`](Field.md)[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:135](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L135)

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

[lib/circuit_value.ts:157](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L157)

___

### create

▸ `Static` **create**(`privKey`, `msg`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privKey` | [`PrivateKey`](PrivateKey.md) |
| `msg` | [`Field`](Field.md)[] |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[lib/signature.ts:122](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L122)

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
| `value` | `JSONValue` |

#### Returns

``null`` \| `InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:193](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L193)

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

[lib/circuit_value.ts:60](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L60)

___

### ofFields

▸ `Static` **ofFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

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

[CircuitValue](CircuitValue.md).[ofFields](CircuitValue.md#offields)

#### Defined in

[lib/circuit_value.ts:135](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L135)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:67](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L67)

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

[lib/circuit_value.ts:171](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L171)

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

[lib/circuit_value.ts:72](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L72)

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

[lib/circuit_value.ts:89](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L89)

___

### toJSON

▸ `Static` **toJSON**<`T`\>(`this`, `v`): `JSONValue`

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

`JSONValue`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:179](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L179)
