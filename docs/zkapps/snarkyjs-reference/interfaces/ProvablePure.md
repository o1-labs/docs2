# Interface: ProvablePure<T\>

`ProvablePure<T>` is a special kind of `Provable<T>`, where the auxiliary data is empty. This means the type only consists of field elements,
in that sense it is "pure".

Examples where `ProvablePure<T>` is required are types of on-chain state, events and actions.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Provable`<`T`\>

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

Provable.check

#### Defined in

[snarky.d.ts:45](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L45)

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

Provable.fromFields

#### Defined in

[snarky.d.ts:43](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L43)

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

Provable.toAuxiliary

#### Defined in

[snarky.d.ts:42](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L42)

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

Provable.toFields

#### Defined in

[snarky.d.ts:41](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L41)

## Methods

### sizeInFields

▸ **sizeInFields**(): `number`

#### Returns

`number`

#### Overrides

Provable.sizeInFields

#### Defined in

[snarky.d.ts:44](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/snarky.d.ts#L44)
