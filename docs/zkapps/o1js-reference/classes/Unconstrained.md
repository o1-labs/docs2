[o1js](../README.md) / [Modules](../modules.md) / Unconstrained

# Class: Unconstrained\<T\>

Container which holds an unconstrained value. This can be used to pass values
between the out-of-circuit blocks in provable code.

Invariants:
- An `Unconstrained`'s value can only be accessed in auxiliary contexts.
- An `Unconstrained` can be empty when compiling, but never empty when running as the prover.
  (there is no way to create an empty `Unconstrained` in the prover)

**`Example`**

```ts
let x = Unconstrained.from(0n);

class MyContract extends SmartContract {
  `@method` myMethod(x: Unconstrained<bigint>) {

    Provable.witness(Field, () => {
      // we can access and modify `x` here
      let newValue = x.get() + otherField.toBigInt();
      x.set(newValue);

      // ...
    });

    // throws an error!
    x.get();
  }
```

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Unconstrained.md#constructor)

### Properties

- [option](Unconstrained.md#option)
- [provable](Unconstrained.md#provable)

### Methods

- [get](Unconstrained.md#get)
- [set](Unconstrained.md#set)
- [from](Unconstrained.md#from)
- [witness](Unconstrained.md#witness)

## Constructors

### constructor

• `Private` **new Unconstrained**\<`T`\>(`isSome`, `value?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSome` | `boolean` |
| `value?` | `T` |

#### Defined in

[lib/circuit_value.ts:514](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L514)

## Properties

### option

• `Private` **option**: \{ `isSome`: ``true`` ; `value`: `T`  } \| \{ `isSome`: ``false`` ; `value`: `undefined`  }

#### Defined in

[lib/circuit_value.ts:510](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L510)

___

### provable

▪ `Static` **provable**: [`Provable`](../modules.md#provable-1)\<[`Unconstrained`](Unconstrained.md)\<`any`\>\>

#### Defined in

[lib/circuit_value.ts:558](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L558)

## Methods

### get

▸ **get**(): `T`

Read an unconstrained value.

Note: Can only be called outside provable code.

#### Returns

`T`

#### Defined in

[lib/circuit_value.ts:523](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L523)

___

### set

▸ **set**(`value`): `void`

Modify the unconstrained value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:537](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L537)

___

### from

▸ `Static` **from**\<`T`\>(`value`): [`Unconstrained`](Unconstrained.md)\<`T`\>

Create an `Unconstrained` with the given `value`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/circuit_value.ts:544](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L544)

___

### witness

▸ `Static` **witness**\<`T`\>(`compute`): [`Unconstrained`](Unconstrained.md)\<`T`\>

Create an `Unconstrained` from a witness computation.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `compute` | () => `T` |

#### Returns

[`Unconstrained`](Unconstrained.md)\<`T`\>

#### Defined in

[lib/circuit_value.ts:551](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L551)
