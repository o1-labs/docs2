[o1js](../README.md) / [Modules](../modules.md) / Provable

# Interface: Provable\<T\>

`Provable<T>` is the general circuit type interface in o1js. `Provable<T>` interface describes how a type `T` is made up of [Field](../classes/Field.md) elements and "auxiliary" (non-provable) data.

`Provable<T>` is the required input type in a few places in o1js. One convenient way to create a `Provable<T>` is using `Struct`.

The properties and methods on the provable type exist in all base o1js types as well (aka. [Field](../classes/Field.md), [Bool](../classes/Bool.md), etc.). In most cases, a zkApp developer does not need these functions to create zkApps.

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

• **check**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../classes/Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | the element of type `T` to put assertions on. |

##### Returns

`void`

#### Defined in

[snarky.d.ts:98](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L98)

___

### fromFields

• **fromFields**: (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => `T`

#### Type declaration

▸ (`fields`, `aux`): `T`

A function that returns an element of type `T` from the given provable and "auxiliary" data.

**Important**: For any element of type `T`, this function is the reverse operation of calling [toFields](Provable.md#tofields) and toAuxilary methods on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] | an array of [Field](../classes/Field.md) elements describing the provable data of the new `T` element. |
| `aux` | `any`[] | an array of any type describing the "auxiliary" data of the new `T` element, optional. |

##### Returns

`T`

An element of type `T` generated from the given provable and "auxiliary" data.

#### Defined in

[snarky.d.ts:79](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L79)

___

### toAuxiliary

• **toAuxiliary**: (`value?`: `T`) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Defined in

[snarky.d.ts:67](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L67)

___

### toFields

• **toFields**: (`value`: `T`) => [`Field`](../classes/Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](../classes/Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](../classes/Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | the element of type `T` to generate the [Field](../classes/Field.md) array from. |

##### Returns

[`Field`](../classes/Field.md)[]

A [Field](../classes/Field.md) array describing how this `T` element is made up of [Field](../classes/Field.md) elements.

#### Defined in

[snarky.d.ts:58](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L58)

## Methods

### sizeInFields

▸ **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](../classes/Field.md) type, as [Field](../classes/Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../classes/Field.md) type.

#### Defined in

[snarky.d.ts:88](https://github.com/o1-labs/o1js/blob/64a4beb/src/snarky.d.ts#L88)
