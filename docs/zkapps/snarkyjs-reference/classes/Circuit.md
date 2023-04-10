# Class: Circuit

The [Circuit](Circuit.md) API is a low level interface to interact and build circuits with

## Table of contents

### Constructors

- [constructor](Circuit.md#constructor)

### Methods

- [\_witness](Circuit.md#_witness)
- [addConstraint](Circuit.md#addconstraint)
- [array](Circuit.md#array)
- [asProver](Circuit.md#asprover)
- [assertEqual](Circuit.md#assertequal)
- [constraintSystem](Circuit.md#constraintsystem)
- [constraintSystemFromKeypair](Circuit.md#constraintsystemfromkeypair)
- [equal](Circuit.md#equal)
- [generateKeypair](Circuit.md#generatekeypair)
- [if](Circuit.md#if)
- [inCheckedComputation](Circuit.md#incheckedcomputation)
- [inProver](Circuit.md#inprover)
- [log](Circuit.md#log)
- [newVariable](Circuit.md#newvariable)
- [prove](Circuit.md#prove)
- [runAndCheck](Circuit.md#runandcheck)
- [switch](Circuit.md#switch)
- [toFields](Circuit.md#tofields)
- [verify](Circuit.md#verify)
- [witness](Circuit.md#witness)

## Constructors

### constructor

• **new Circuit**()

## Methods

### \_witness

▸ `Static` **_witness**<`S`\>(`ctor`, `f`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Provable`](../interfaces/Provable.md)<`any`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `S` |
| `f` | () => [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:780](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L780)

___

### addConstraint

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

Adds a constraint to the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"multiply"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:745](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L745)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"add"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:752](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L752)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"equal"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:759](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L759)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"boolean"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:766](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L766)

___

### array

▸ `Static` **array**<`A`\>(`elementType`, `length`): `InferredProvable`<`A`[]\>

Creates a [Provable](../interfaces/Provable.md) for a generic array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | `A` |
| `length` | `number` |

#### Returns

`InferredProvable`<`A`[]\>

#### Defined in

[snarky.d.ts:816](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L816)

___

### asProver

▸ `Static` **asProver**(`f`): `void`

Runs code as a prover.

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:789](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L789)

___

### assertEqual

▸ `Static` **assertEqual**<`T`\>(`ctor`, `x`, `y`): `void`

Asserts that two values are equal.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:824](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L824)

▸ `Static` **assertEqual**<`T`\>(`x`, `y`): `void`

Asserts that two values are equal.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:829](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L829)

___

### constraintSystem

▸ `Static` **constraintSystem**<`T`\>(`f`): `Object`

Returns information about the constraint system in the callback function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `digest` | `string` |
| `gates` | `Gate`[] |
| `publicInputSize` | `number` |
| `result` | `T` |
| `rows` | `number` |

#### Defined in

[snarky.d.ts:799](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L799)

___

### constraintSystemFromKeypair

▸ `Static` **constraintSystemFromKeypair**(`keypair`): `Gate`[]

Returns a low-level JSON representation of the `Circuit` from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

#### Parameters

| Name | Type |
| :------ | :------ |
| `keypair` | [`Keypair`](Keypair.md) |

#### Returns

`Gate`[]

#### Defined in

[snarky.d.ts:811](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L811)

___

### equal

▸ `Static` **equal**<`T`\>(`ctor`, `x`, `y`): [`Bool`](Bool.md)

Checks if two elements are equal.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:834](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L834)

▸ `Static` **equal**<`T`\>(`x`, `y`): [`Bool`](Bool.md)

Checks if two elements are equal.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:839](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L839)

___

### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](Keypair.md)

Generates a proving key and a verification key for this circuit.

#### Returns

[`Keypair`](Keypair.md)

#### Defined in

[snarky.d.ts:869](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L869)

___

### if

▸ `Static` **if**<`T`\>(`b`, `ctor`, `x`, `y`): `T`

Circuit-compatible if-statement.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `ctor` | [`ProvablePure`](../interfaces/ProvablePure.md)<`T`\> |
| `x` | `T` |
| `y` | `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:844](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L844)

▸ `Static` **if**<`T`\>(`b`, `x`, `y`): `T`

Circuit-compatible if-statement.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `x` | `T` |
| `y` | `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:848](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L848)

___

### inCheckedComputation

▸ `Static` **inCheckedComputation**(): `boolean`

Checks if the circuit is in checked computation mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:894](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L894)

___

### inProver

▸ `Static` **inProver**(): `boolean`

Checks if the circuit is in prover mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:889](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L889)

___

### log

▸ `Static` **log**(`...args`): `void`

Interface to log elements within a circuit. Similar to `Console.log()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:899](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L899)

___

### newVariable

▸ `Static` **newVariable**(`f`): [`Field`](Field.md)

Creates a new variable inside the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:777](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L777)

___

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `kp`): `Proof`

Proves a statement using the private input, public input and the [Keypair](Keypair.md) of the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateInput` | `any`[] |
| `publicInput` | `any`[] |
| `kp` | [`Keypair`](Keypair.md) |

#### Returns

`Proof`

#### Defined in

[snarky.d.ts:874](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L874)

___

### runAndCheck

▸ `Static` **runAndCheck**<`T`\>(`f`): `T`

Runs code and checks its correctness.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:794](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L794)

___

### switch

▸ `Static` **switch**<`T`, `A`\>(`mask`, `type`, `values`): `T`

Generalization of `Circuit.if` for choosing between more than two different cases.
It takes a "mask", which is an array of `Bool`s that contains only one `true` element, as well as a type/constructor and an array of values of that type.
The result is that value which corresponds to the true element of the mask. Example:

```ts
let x = Circuit.switch([Bool(false), Bool(true)], Field, [Field(1), Field(2)]);
x.assertEquals(2);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

#### Returns

`T`

#### Defined in

[snarky.d.ts:860](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L860)

___

### toFields

▸ `Static` **toFields**<`A`\>(`a`): [`Field`](Field.md)[]

Serializes an element into [Field](Field.md) elements.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:884](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L884)

___

### verify

▸ `Static` **verify**(`publicInput`, `vk`, `pi`): `boolean`

Verifies a proof using the public input, the proof and the initial [Keypair](Keypair.md) of the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `any`[] |
| `vk` | `VerificationKey` |
| `pi` | `Proof` |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:879](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L879)

___

### witness

▸ `Static` **witness**<`T`, `S`\>(`ctor`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> = [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `S` |
| `f` | () => `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:781](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/snarky.d.ts#L781)
