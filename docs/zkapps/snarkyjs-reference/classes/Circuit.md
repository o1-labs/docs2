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

[snarky.d.ts:641](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L641)

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

[snarky.d.ts:606](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L606)

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

[snarky.d.ts:613](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L613)

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

[snarky.d.ts:620](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L620)

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

[snarky.d.ts:627](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L627)

___

### array

▸ `Static` **array**<`T`\>(`elementType`, `length`): [`Provable`](../interfaces/Provable.md)<`T`[]\>

Creates a generic [Provable](../interfaces/Provable.md) array^.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`Provable`](../interfaces/Provable.md)<`T`\> |
| `length` | `number` |

#### Returns

[`Provable`](../interfaces/Provable.md)<`T`[]\>

#### Defined in

[snarky.d.ts:669](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L669)

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

[snarky.d.ts:650](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L650)

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

[snarky.d.ts:674](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L674)

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

[snarky.d.ts:679](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L679)

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
| `result` | `T` |
| `rows` | `number` |

#### Defined in

[snarky.d.ts:660](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L660)

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

[snarky.d.ts:684](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L684)

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

[snarky.d.ts:689](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L689)

___

### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](Keypair.md)

Generates a proving key and a verification key for this circuit.

#### Returns

[`Keypair`](Keypair.md)

#### Defined in

[snarky.d.ts:719](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L719)

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

[snarky.d.ts:694](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L694)

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

[snarky.d.ts:698](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L698)

___

### inCheckedComputation

▸ `Static` **inCheckedComputation**(): `boolean`

Checks if the circuit is in checked computation mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:744](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L744)

___

### inProver

▸ `Static` **inProver**(): `boolean`

Checks if the circuit is in prover mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:739](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L739)

___

### log

▸ `Static` **log**(...`args`): `void`

Interface to log elements within a circuit. Similar to `Console.log()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:749](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L749)

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

[snarky.d.ts:638](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L638)

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

[snarky.d.ts:724](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L724)

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

[snarky.d.ts:655](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L655)

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
| `A` | extends [`Provable`](../interfaces/Provable.md)<`T`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

#### Returns

`T`

#### Defined in

[snarky.d.ts:710](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L710)

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

[snarky.d.ts:734](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L734)

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

[snarky.d.ts:729](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L729)

___

### witness

▸ `Static` **witness**<`T`, `S`\>(`ctor`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Provable`](../interfaces/Provable.md)<`T`, `S`\> = [`Provable`](../interfaces/Provable.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `S` |
| `f` | () => `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:642](https://github.com/o1-labs/snarkyjs/blob/531db43/src/snarky.d.ts#L642)
