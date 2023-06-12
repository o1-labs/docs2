[SnarkyJS](../README.md) / [Exports](../modules.md) / BaseMerkleWitness

# Class: BaseMerkleWitness

The [BaseMerkleWitness](BaseMerkleWitness.md) class defines a circuit-compatible base class for [Merkle Witness'](https://computersciencewiki.org/index.php/Merkle_proof).

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`BaseMerkleWitness`**

## Table of contents

### Constructors

- [constructor](BaseMerkleWitness.md#constructor)

### Properties

- [isLeft](BaseMerkleWitness.md#isleft)
- [path](BaseMerkleWitness.md#path)
- [height](BaseMerkleWitness.md#height)

### Methods

- [assertEquals](BaseMerkleWitness.md#assertequals)
- [calculateIndex](BaseMerkleWitness.md#calculateindex)
- [calculateRoot](BaseMerkleWitness.md#calculateroot)
- [calculateRootSlow](BaseMerkleWitness.md#calculaterootslow)
- [equals](BaseMerkleWitness.md#equals)
- [height](BaseMerkleWitness.md#height-1)
- [isConstant](BaseMerkleWitness.md#isconstant)
- [toConstant](BaseMerkleWitness.md#toconstant)
- [toFields](BaseMerkleWitness.md#tofields)
- [toJSON](BaseMerkleWitness.md#tojson)
- [check](BaseMerkleWitness.md#check)
- [fromFields](BaseMerkleWitness.md#fromfields)
- [fromJSON](BaseMerkleWitness.md#fromjson)
- [fromObject](BaseMerkleWitness.md#fromobject)
- [sizeInFields](BaseMerkleWitness.md#sizeinfields)
- [toAuxiliary](BaseMerkleWitness.md#toauxiliary)
- [toConstant](BaseMerkleWitness.md#toconstant-1)
- [toFields](BaseMerkleWitness.md#tofields-1)
- [toInput](BaseMerkleWitness.md#toinput)
- [toJSON](BaseMerkleWitness.md#tojson-1)

## Constructors

### constructor

• **new BaseMerkleWitness**(`witness`)

Takes a [Witness](../modules.md#witness) and turns it into a circuit-compatible Witness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `witness` | [`Witness`](../modules.md#witness) | Witness. |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/merkle_tree.ts:167](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L167)

## Properties

### isLeft

• **isLeft**: [`Bool`](Bool.md)[]

#### Defined in

[lib/merkle_tree.ts:157](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L157)

___

### path

• **path**: [`Field`](Field.md)[]

#### Defined in

[lib/merkle_tree.ts:156](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L156)

___

### height

▪ `Static` **height**: `number`

#### Defined in

[lib/merkle_tree.ts:155](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L155)

## Methods

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`BaseMerkleWitness`](BaseMerkleWitness.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:158](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L158)

___

### calculateIndex

▸ **calculateIndex**(): [`Field`](Field.md)

Calculates the index of the leaf node that belongs to this Witness.

#### Returns

[`Field`](Field.md)

Index of the leaf.

#### Defined in

[lib/merkle_tree.ts:218](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L218)

___

### calculateRoot

▸ **calculateRoot**(`leaf`): [`Field`](Field.md)

Calculates a root depending on the leaf value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leaf` | [`Field`](Field.md) | Value of the leaf node that belongs to this Witness. |

#### Returns

[`Field`](Field.md)

The calculated root.

#### Defined in

[lib/merkle_tree.ts:184](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L184)

___

### calculateRootSlow

▸ **calculateRootSlow**(`leaf`): [`Field`](Field.md)

Calculates a root depending on the leaf value.

**`Deprecated`**

This is a less efficient version of [calculateRoot](BaseMerkleWitness.md#calculateroot) which was added for compatibility with existing deployed contracts

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/merkle_tree.ts:201](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L201)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`BaseMerkleWitness`](BaseMerkleWitness.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:154](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L154)

___

### height

▸ **height**(): `number`

#### Returns

`number`

#### Defined in

[lib/merkle_tree.ts:158](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/merkle_tree.ts#L158)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:162](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L162)

___

### toConstant

▸ **toConstant**(): [`BaseMerkleWitness`](BaseMerkleWitness.md)

#### Returns

[`BaseMerkleWitness`](BaseMerkleWitness.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:150](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L150)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:142](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L142)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:146](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L146)

___

### check

▸ `Static` **check**<`T`\>(`this`, `v`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:191](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L191)

___

### fromFields

▸ `Static` **fromFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:166](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L166)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:224](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L224)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:87](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L87)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:94](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L94)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L116)

___

### toConstant

▸ `Static` **toConstant**<`T`\>(`this`, `t`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:205](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L205)

___

### toFields

▸ `Static` **toFields**<`T`\>(`this`, `v`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:99](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L99)

___

### toInput

▸ `Static` **toInput**<`T`\>(`this`, `v`): `HashInput`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:120](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L120)

___

### toJSON

▸ `Static` **toJSON**<`T`\>(`this`, `v`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyConstructor`](../modules.md#anyconstructor) |

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

[lib/circuit_value.ts:213](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L213)
