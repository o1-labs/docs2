# Interface: ProvablePure<T\>

`ProvablePure<T>` is a special kind of `Provable<T>`, where the auxiliary data is empty. This means the type only consists of field elements,
in that sense it is "pure".

Examples where `ProvablePure<T>` is required are types of on-chain state, events and actions.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Provable`](Provable.md)<`T`\>

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

• **check**: (`x`: `T`) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

##### Returns

`void`

#### Overrides

[Provable](Provable.md).[check](Provable.md#check)

#### Defined in

[snarky.d.ts:50](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/snarky.d.ts#L50)

___

### fromFields

• **fromFields**: (`x`: [`Field`](../classes/Field.md)[]) => `T`

#### Type declaration

▸ (`x`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](../classes/Field.md)[] |

##### Returns

`T`

#### Overrides

[Provable](Provable.md).[fromFields](Provable.md#fromfields)

#### Defined in

[snarky.d.ts:48](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/snarky.d.ts#L48)

___

### toAuxiliary

• **toAuxiliary**: (`x?`: `T`) => []

#### Type declaration

▸ (`x?`): []

##### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `T` |

##### Returns

[]

#### Overrides

[Provable](Provable.md).[toAuxiliary](Provable.md#toauxiliary)

#### Defined in

[snarky.d.ts:47](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/snarky.d.ts#L47)

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

#### Overrides

[Provable](Provable.md).[toFields](Provable.md#tofields)

#### Defined in

[snarky.d.ts:46](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/snarky.d.ts#L46)

## Methods

### sizeInFields

▸ **sizeInFields**(): `number`

#### Returns

`number`

#### Overrides

[Provable](Provable.md).[sizeInFields](Provable.md#sizeinfields)

#### Defined in

[snarky.d.ts:49](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/snarky.d.ts#L49)
