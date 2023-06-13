[SnarkyJS](../README.md) / [Modules](../modules.md) / Provable

# Interface: Provable<T\>

`Provable<T>` is the general circuit type interface. Provable interface describes how a type `T` is made up of field elements and auxiliary (non-field element) data.

You will find `Provable<T>` as the required input type in a few places in SnarkyJS. One convenient way to create a `Provable<T>` is using `Struct`.

The properties and methods on the provable type exist in all base SnarkyJS types as well (aka. [Field](../classes/Field.md), [Bool](../classes/Bool.md), etc.). In most cases, a zkApp developer does not need these functions to create Dapps.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Provable`**

  ↳ [`ProvablePure`](ProvablePure.md)

## Table of contents

### Properties

- [check](Provable.md#check)
- [fromFields](Provable.md#fromfields)
- [toAuxiliary](Provable.md#toauxiliary)
- [toFields](Provable.md#tofields)

### Methods

- [sizeInFields](Provable.md#sizeinfields)

## Properties

### check

• **check**: (`x`: `T`) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

##### Returns

`void`

#### Defined in

[snarky.d.ts:41](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/snarky.d.ts#L41)

___

### fromFields

• **fromFields**: (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => `T`

#### Type declaration

▸ (`x`, `aux`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](../classes/Field.md)[] |
| `aux` | `any`[] |

##### Returns

`T`

#### Defined in

[snarky.d.ts:39](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/snarky.d.ts#L39)

___

### toAuxiliary

• **toAuxiliary**: (`x?`: `T`) => `any`[]

#### Type declaration

▸ (`x?`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `T` |

##### Returns

`any`[]

#### Defined in

[snarky.d.ts:38](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/snarky.d.ts#L38)

___

### toFields

• **toFields**: (`x`: `T`) => [`Field`](../classes/Field.md)[]

#### Type declaration

▸ (`x`): [`Field`](../classes/Field.md)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

##### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[snarky.d.ts:37](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/snarky.d.ts#L37)

## Methods

### sizeInFields

▸ **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:40](https://github.com/o1-labs/snarkyjs/blob/3ae77a9/src/snarky.d.ts#L40)
