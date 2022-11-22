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

[snarky.d.ts:647](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L647)

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

[snarky.d.ts:612](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L612)

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

[snarky.d.ts:619](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L619)

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

[snarky.d.ts:626](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L626)

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

[snarky.d.ts:633](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L633)

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

[snarky.d.ts:675](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L675)

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

[snarky.d.ts:656](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L656)

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

[snarky.d.ts:680](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L680)

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

[snarky.d.ts:685](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L685)

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

[snarky.d.ts:666](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L666)

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

[snarky.d.ts:690](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L690)

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

[snarky.d.ts:695](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L695)

___

### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](Keypair.md)

Generates a proving key and a verification key for this circuit.

#### Returns

[`Keypair`](Keypair.md)

#### Defined in

[snarky.d.ts:725](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L725)

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

[snarky.d.ts:700](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L700)

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

[snarky.d.ts:704](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L704)

___

### inCheckedComputation

▸ `Static` **inCheckedComputation**(): `boolean`

Checks if the circuit is in checked computation mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:750](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L750)

___

### inProver

▸ `Static` **inProver**(): `boolean`

Checks if the circuit is in prover mode.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:745](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L745)

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

[snarky.d.ts:755](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L755)

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

[snarky.d.ts:644](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L644)

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

[snarky.d.ts:730](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L730)

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

[snarky.d.ts:661](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L661)

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

[snarky.d.ts:716](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L716)

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

[snarky.d.ts:740](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L740)

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

[snarky.d.ts:735](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L735)

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

[snarky.d.ts:648](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L648)
