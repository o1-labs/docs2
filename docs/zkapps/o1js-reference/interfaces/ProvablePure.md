[o1js](../README.md) / [Modules](../modules.md) / ProvablePure

# Interface: ProvablePure\<T\>

`ProvablePure<T>` is a special kind of [Provable](Provable.md) interface, where the "auxiliary" (non-provable) data is empty. This means the type consists only of field elements, in that sense it is "pure".
Any element on the interface `ProvablePure<T>` is also an element of the interface `Provable<T>` where the "auxiliary" data is empty.

Examples where `ProvablePure<T>` is required are types of on-chain state, events and actions.

It includes the same properties and methods as the [Provable](Provable.md) interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Provable`](Provable.md)\<`T`\>

  ↳ **`ProvablePure`**

## Table of contents

### Properties

- [check](ProvablePure.md#check)
- [fromFields](ProvablePure.md#fromfields)
- [toAuxiliary](ProvablePure.md#toauxiliary)
- [toFields](ProvablePure.md#tofields)

### Methods

- [sizeInFields](ProvablePure.md#sizeinfields)

## Properties

### check

• **check**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, rather creates any number of assertions on the proof to prove `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../classes/Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | the element of type `T` to put assertions on. |

##### Returns

`void`

#### Overrides

[Provable](Provable.md).[check](Provable.md#check)

#### Defined in

[snarky.d.ts:157](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L157)

___

### fromFields

• **fromFields**: (`fields`: [`Field`](../classes/Field.md)[]) => `T`

#### Type declaration

▸ (`fields`): `T`

A function that returns an element of type `T` from the given provable data.

**Important**: For any element of type `T`, this function is the reverse operation of calling [toFields](ProvablePure.md#tofields) method on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] | an array of [Field](../classes/Field.md) elements describing the provable data of the new `T` element. |

##### Returns

`T`

An element of type `T` generated from the given provable data.

#### Overrides

[Provable](Provable.md).[fromFields](Provable.md#fromfields)

#### Defined in

[snarky.d.ts:138](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L138)

___

### toAuxiliary

• **toAuxiliary**: (`value?`: `T`) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.
As any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition, this function always returns a default value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |

##### Returns

`any`[]

An empty array, as any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition.

#### Overrides

[Provable](Provable.md).[toAuxiliary](Provable.md#toauxiliary)

#### Defined in

[snarky.d.ts:127](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L127)

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

#### Overrides

[Provable](Provable.md).[toFields](Provable.md#tofields)

#### Defined in

[snarky.d.ts:117](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L117)

## Methods

### sizeInFields

▸ **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](../classes/Field.md) type, as [Field](../classes/Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../classes/Field.md) type.

#### Overrides

[Provable](Provable.md).[sizeInFields](Provable.md#sizeinfields)

#### Defined in

[snarky.d.ts:147](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L147)
