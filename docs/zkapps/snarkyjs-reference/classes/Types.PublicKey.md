# Class: PublicKey

[Types](../modules/Types.md).PublicKey

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](Types.PublicKey.md#constructor)

### Properties

- [isOdd](Types.PublicKey.md#isodd)
- [x](Types.PublicKey.md#x)

### Methods

- [assertEquals](Types.PublicKey.md#assertequals)
- [equals](Types.PublicKey.md#equals)
- [isConstant](Types.PublicKey.md#isconstant)
- [isEmpty](Types.PublicKey.md#isempty)
- [toBase58](Types.PublicKey.md#tobase58)
- [toConstant](Types.PublicKey.md#toconstant)
- [toFields](Types.PublicKey.md#tofields)
- [toGroup](Types.PublicKey.md#togroup)
- [toJSON](Types.PublicKey.md#tojson)
- [check](Types.PublicKey.md#check)
- [empty](Types.PublicKey.md#empty)
- [from](Types.PublicKey.md#from)
- [fromBase58](Types.PublicKey.md#frombase58)
- [fromGroup](Types.PublicKey.md#fromgroup)
- [fromJSON](Types.PublicKey.md#fromjson)
- [fromObject](Types.PublicKey.md#fromobject)
- [fromPrivateKey](Types.PublicKey.md#fromprivatekey)
- [ofFields](Types.PublicKey.md#offields)
- [sizeInFields](Types.PublicKey.md#sizeinfields)
- [toBase58](Types.PublicKey.md#tobase58-1)
- [toConstant](Types.PublicKey.md#toconstant-1)
- [toFields](Types.PublicKey.md#tofields-1)
- [toInput](Types.PublicKey.md#toinput)
- [toJSON](Types.PublicKey.md#tojson-1)

## Constructors

### constructor

• **new PublicKey**(...`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...props` | `any`[] |

#### Inherited from

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/circuit_value.ts:43](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L43)

## Properties

### isOdd

• **isOdd**: [`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:61](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L61)

___

### x

• **x**: [`Field`](Field.md)

#### Defined in

[lib/signature.ts:60](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L60)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`PublicKey`](Types.PublicKey.md) |

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
| `x` | [`PublicKey`](Types.PublicKey.md) |

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

### isEmpty

▸ **isEmpty**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/signature.ts:94](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L94)

___

### toBase58

▸ **toBase58**(): `string`

#### Returns

`string`

#### Defined in

[lib/signature.ts:103](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L103)

___

### toConstant

▸ **toConstant**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

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

### toGroup

▸ **toGroup**(): [`Group`](Group.md)

#### Returns

[`Group`](Group.md)

#### Defined in

[lib/signature.ts:63](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L63)

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

### empty

▸ `Static` **empty**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:90](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L90)

___

### from

▸ `Static` **from**(`g`): [`PublicKey`](Types.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | `Object` |
| `g.isOdd` | [`Bool`](Bool.md) |
| `g.x` | [`Field`](Field.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:86](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L86)

___

### fromBase58

▸ `Static` **fromBase58**(`publicKeyBase58`): [`PublicKey`](Types.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyBase58` | `string` |

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:99](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L99)

___

### fromGroup

▸ `Static` **fromGroup**(`__namedParameters`): [`PublicKey`](Types.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Group`](Group.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:77](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L77)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `publicKey`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `publicKey` | `string` |

#### Returns

`InstanceType`<`T`\>

#### Overrides

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/signature.ts:113](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L113)

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

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`__namedParameters`): [`PublicKey`](Types.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/signature.ts:82](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L82)

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

### toBase58

▸ `Static` **toBase58**(`publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`string`

#### Defined in

[lib/signature.ts:107](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L107)

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

▸ `Static` **toJSON**(`publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |

#### Returns

`string`

#### Overrides

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/signature.ts:110](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/signature.ts#L110)
