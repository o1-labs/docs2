[o1js](../README.md) / [Modules](../modules.md) / Packed

# Class: Packed\<T\>

`Packed<T>` is a "packed" representation of any type `T`.

"Packed" means that field elements which take up fewer than 254 bits are packed together into
as few field elements as possible.

For example, you can pack several Bools (1 bit) or UInt32s (32 bits) into a single field element.

Using a packed representation can make sense in provable code where the number of constraints
depends on the number of field elements per value.

For example, `Provable.if(bool, x, y)` takes O(n) constraints, where n is the number of field
elements in x and y.

Usage:

```ts
// define a packed type from a type
let PackedType = Packed.create(MyType);

// pack a value
let packed = PackedType.pack(value);

// ... operations on packed values, more efficient than on plain values ...

// unpack a value
let value = packed.unpack();
```

**Warning**: Packing only makes sense where packing actually reduces the number of field elements.
For example, it doesn't make sense to pack a _single_ Bool, because it will be 1 field element before
and after packing. On the other hand, it does makes sense to pack a type that holds 10 or 20 Bools.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Packed.md#constructor)

### Properties

- [packed](Packed.md#packed)
- [value](Packed.md#value)
- [\_innerProvable](Packed.md#_innerprovable)
- [\_provable](Packed.md#_provable)

### Accessors

- [Constructor](Packed.md#constructor-1)
- [innerProvable](Packed.md#innerprovable)
- [provable](Packed.md#provable)

### Methods

- [toFields](Packed.md#tofields)
- [unpack](Packed.md#unpack)
- [create](Packed.md#create)
- [pack](Packed.md#pack)

## Constructors

### constructor

• **new Packed**\<`T`\>(`packed`, `value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `packed` | [`Field`](Field.md)[] |
| `value` | [`Unconstrained`](Unconstrained.md)\<`T`\> |

#### Defined in

[lib/provable-types/packed.ts:73](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L73)

## Properties

### packed

• **packed**: [`Field`](Field.md)[]

#### Defined in

[lib/provable-types/packed.ts:49](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L49)

___

### value

• **value**: [`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:50](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L50)

___

### \_innerProvable

▪ `Static` **\_innerProvable**: `undefined` \| [`ProvableExtended`](../modules.md#provableextended)\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:111](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L111)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| `ProvableHashable`\<[`Packed`](Packed.md)\<`any`\>\>

#### Defined in

[lib/provable-types/packed.ts:110](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L110)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`Packed`](Packed.md)

#### Returns

typeof [`Packed`](Packed.md)

#### Defined in

[lib/provable-types/packed.ts:113](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L113)

___

### innerProvable

• `Static` `get` **innerProvable**(): [`ProvableExtended`](../modules.md#provableextended)\<`any`\>

#### Returns

[`ProvableExtended`](../modules.md#provableextended)\<`any`\>

#### Defined in

[lib/provable-types/packed.ts:121](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L121)

___

### provable

• `Static` `get` **provable**(): `ProvableHashable`\<[`Packed`](Packed.md)\<`any`\>\>

#### Returns

`ProvableHashable`\<[`Packed`](Packed.md)\<`any`\>\>

#### Defined in

[lib/provable-types/packed.ts:117](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L117)

## Methods

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/provable-types/packed.ts:105](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L105)

___

### unpack

▸ **unpack**(): `T`

Unpack a value.

#### Returns

`T`

#### Defined in

[lib/provable-types/packed.ts:90](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L90)

___

### create

▸ `Static` **create**\<`T`\>(`type`): typeof [`Packed`](Packed.md)

Create a packed representation of `type`. You can then use `PackedType.pack(x)` to pack a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ProvableExtended`](../modules.md#provableextended)\<`T`\> |

#### Returns

typeof [`Packed`](Packed.md)

#### Defined in

[lib/provable-types/packed.ts:55](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L55)

___

### pack

▸ `Static` **pack**\<`T`\>(`x`): [`Packed`](Packed.md)\<`T`\>

Pack a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

[`Packed`](Packed.md)\<`T`\>

#### Defined in

[lib/provable-types/packed.ts:81](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/provable-types/packed.ts#L81)
