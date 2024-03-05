[o1js](../README.md) / [Modules](../modules.md) / MerkleMapWitness

# Class: MerkleMapWitness

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../modules.md#struct), which features a simpler API and better typing.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`MerkleMapWitness`**

## Table of contents

### Constructors

- [constructor](MerkleMapWitness.md#constructor)

### Properties

- [isLefts](MerkleMapWitness.md#islefts)
- [siblings](MerkleMapWitness.md#siblings)

### Methods

- [assertEquals](MerkleMapWitness.md#assertequals)
- [computeRootAndKey](MerkleMapWitness.md#computerootandkey)
- [equals](MerkleMapWitness.md#equals)
- [isConstant](MerkleMapWitness.md#isconstant)
- [toConstant](MerkleMapWitness.md#toconstant)
- [toFields](MerkleMapWitness.md#tofields)
- [toJSON](MerkleMapWitness.md#tojson)
- [check](MerkleMapWitness.md#check)
- [empty](MerkleMapWitness.md#empty)
- [fromFields](MerkleMapWitness.md#fromfields)
- [fromJSON](MerkleMapWitness.md#fromjson)
- [fromObject](MerkleMapWitness.md#fromobject)
- [sizeInFields](MerkleMapWitness.md#sizeinfields)
- [toAuxiliary](MerkleMapWitness.md#toauxiliary)
- [toConstant](MerkleMapWitness.md#toconstant-1)
- [toFields](MerkleMapWitness.md#tofields-1)
- [toInput](MerkleMapWitness.md#toinput)
- [toJSON](MerkleMapWitness.md#tojson-1)

## Constructors

### constructor

• **new MerkleMapWitness**(`isLefts`, `siblings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLefts` | [`Bool`](Bool.md)[] |
| `siblings` | [`Field`](Field.md)[] |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/merkle-map.ts:121](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/merkle-map.ts#L121)

## Properties

### isLefts

• **isLefts**: [`Bool`](Bool.md)[]

#### Defined in

[lib/merkle-map.ts:118](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/merkle-map.ts#L118)

___

### siblings

• **siblings**: [`Field`](Field.md)[]

#### Defined in

[lib/merkle-map.ts:119](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/merkle-map.ts#L119)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`MerkleMapWitness`](MerkleMapWitness.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L167)

___

### computeRootAndKey

▸ **computeRootAndKey**(`value`): [`Field`](Field.md)[]

computes the merkle tree root for a given value and the key for this witness

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | The value to compute the root for. |

#### Returns

[`Field`](Field.md)[]

A tuple of the computed merkle root, and the key that is connected to the path updated by this witness.

#### Defined in

[lib/merkle-map.ts:132](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/merkle-map.ts#L132)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`MerkleMapWitness`](MerkleMapWitness.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit-value.ts:163](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit-value.ts:171](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L171)

___

### toConstant

▸ **toConstant**(): [`MerkleMapWitness`](MerkleMapWitness.md)

#### Returns

[`MerkleMapWitness`](MerkleMapWitness.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit-value.ts:159](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L159)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit-value.ts:151](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L151)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit-value.ts:155](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L155)

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

[lib/circuit-value.ts:200](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L200)

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

[lib/circuit-value.ts:255](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L255)

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

[lib/circuit-value.ts:175](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L175)

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

[lib/circuit-value.ts:233](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L233)

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

[lib/circuit-value.ts:96](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L96)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit-value.ts:103](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L103)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit-value.ts:125](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L125)

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

[lib/circuit-value.ts:214](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L214)

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

[lib/circuit-value.ts:108](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L108)

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

[lib/circuit-value.ts:129](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L129)

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

[lib/circuit-value.ts:222](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/circuit-value.ts#L222)
