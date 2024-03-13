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
- [setTo](Unconstrained.md#setto)
- [updateAsProver](Unconstrained.md#updateasprover)
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

[lib/circuit-value.ts:533](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L533)

## Properties

### option

• `Private` **option**: \{ `isSome`: ``true`` ; `value`: `T`  } \| \{ `isSome`: ``false`` ; `value`: `undefined`  }

#### Defined in

[lib/circuit-value.ts:529](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L529)

___

### provable

▪ `Static` **provable**: [`Provable`](../modules.md#provable-1)\<[`Unconstrained`](Unconstrained.md)\<`any`\>\> & \{ `toInput`: (`x`: [`Unconstrained`](Unconstrained.md)\<`any`\>) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }  }

#### Defined in

[lib/circuit-value.ts:602](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L602)

## Methods

### get

▸ **get**(): `T`

Read an unconstrained value.

Note: Can only be called outside provable code.

#### Returns

`T`

#### Defined in

[lib/circuit-value.ts:542](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L542)

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

[lib/circuit-value.ts:556](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L556)

___

### setTo

▸ **setTo**(`value`): `void`

Set the unconstrained value to the same as another `Unconstrained`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Unconstrained`](Unconstrained.md)\<`T`\> |

#### Returns

`void`

#### Defined in

[lib/circuit-value.ts:563](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L563)

___

### updateAsProver

▸ **updateAsProver**(`compute`): `void`

Update an `Unconstrained` by a witness computation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compute` | (`value`: `T`) => `T` |

#### Returns

`void`

#### Defined in

[lib/circuit-value.ts:595](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L595)

___

### from

▸ `Static` **from**\<`T`\>(`value`): [`Unconstrained`](Unconstrained.md)\<`T`\>

Create an `Unconstrained` with the given `value`.

Note: If `T` contains provable types, `Unconstrained.from` is an anti-pattern,
because it stores witnesses in a space that's intended to be used outside the proof.
Something like the following should be used instead:

```ts
let xWrapped = Unconstrained.witness(() => Provable.toConstant(type, x));
```

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

[lib/circuit-value.ts:578](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L578)

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

[lib/circuit-value.ts:585](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/circuit-value.ts#L585)
