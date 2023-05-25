# Class: Circuit

## Table of contents

### Constructors

- [constructor](Circuit.md#constructor)

### Properties

- [array](Circuit.md#array)
- [asProver](Circuit.md#asprover)
- [assertEqual](Circuit.md#assertequal)
- [constraintSystem](Circuit.md#constraintsystem)
- [constraintSystemFromKeypair](Circuit.md#constraintsystemfromkeypair)
- [equal](Circuit.md#equal)
- [if](Circuit.md#if)
- [inCheckedComputation](Circuit.md#incheckedcomputation)
- [inProver](Circuit.md#inprover)
- [log](Circuit.md#log)
- [runAndCheck](Circuit.md#runandcheck)
- [runUnchecked](Circuit.md#rununchecked)
- [switch](Circuit.md#switch)
- [toFields](Circuit.md#tofields)
- [witness](Circuit.md#witness)

### Methods

- [generateKeypair](Circuit.md#generatekeypair)
- [prove](Circuit.md#prove)
- [verify](Circuit.md#verify)

## Constructors

### constructor

• **new Circuit**()

## Properties

### array

▪ `Static` **array**: <A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`<`A`[]\> = `SnarkyCircuit.array`

#### Type declaration

▸ <`A`\>(`elementType`, `length`): `InferredProvable`<`A`[]\>

Creates a [Provable](../interfaces/Provable.md) for a generic array.

**`Example`**

```ts
const ProvableArray = Circuit.array(Field, 5);
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | `A` |
| `length` | `number` |

##### Returns

`InferredProvable`<`A`[]\>

#### Defined in

[lib/circuit.ts:141](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L141)

___

### asProver

▪ `Static` **asProver**: (`f`: () => `void`) => `void` = `SnarkyCircuit.asProver`

#### Type declaration

▸ (`f`): `void`

Runs code as a prover.

**`Example`**

```ts
Circuit.asProver(() => {
  // Your prover code here
});
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:93](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L93)

___

### assertEqual

▪ `Static` **assertEqual**: <T\>(`ctor`: { `toFields`: (`x`: `T`) => [`Field`](Field.md)[]  }, `x`: `T`, `y`: `T`) => `void`<T\>(`x`: `T`, `y`: `T`) => `void` = `SnarkyCircuit.assertEqual`

#### Type declaration

▸ <`T`\>(`ctor`, `x`, `y`): `void`

Asserts that two values are equal.

**`Example`**

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
Circuit.assertEqual(MyStruct, a, b);
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

▸ <`T`\>(`x`, `y`): `void`

Asserts that two values are equal.

**`Example`**

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
Circuit.assertEqual(MyStruct, a, b);
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:152](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L152)

___

### constraintSystem

▪ `Static` **constraintSystem**: <T\>(`f`: () => `T`) => { `digest`: `string` ; `gates`: `Gate`[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number`  } = `SnarkyCircuit.constraintSystem`

#### Type declaration

▸ <`T`\>(`f`): `Object`

Returns information about the constraint system in the callback function.

**`Example`**

```ts
const result = Circuit.constraintSystem(circuit);
console.log(result);
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `digest` | `string` |
| `gates` | `Gate`[] |
| `publicInputSize` | `number` |
| `result` | `T` |
| `rows` | `number` |

#### Defined in

[lib/circuit.ts:122](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L122)

___

### constraintSystemFromKeypair

▪ `Static` **constraintSystemFromKeypair**: (`keypair`: [`Keypair`](Keypair.md)) => `Gate`[] = `SnarkyCircuit.constraintSystemFromKeypair`

#### Type declaration

▸ (`keypair`): `Gate`[]

Returns a low-level JSON representation of the `Circuit` from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

**`Example`**

```ts
const keypair = await Circuit.generateKeypair();
const jsonRepresentation = Circuit.constraintSystemFromKeypair(keypair);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `keypair` | [`Keypair`](Keypair.md) |

##### Returns

`Gate`[]

#### Defined in

[lib/circuit.ts:132](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L132)

___

### equal

▪ `Static` **equal**: <T\>(`ctor`: { `toFields`: (`x`: `T`) => [`Field`](Field.md)[]  }, `x`: `T`, `y`: `T`) => [`Bool`](Bool.md)<T\>(`x`: `T`, `y`: `T`) => [`Bool`](Bool.md) = `SnarkyCircuit.equal`

#### Type declaration

▸ <`T`\>(`ctor`, `x`, `y`): [`Bool`](Bool.md)

Checks if two elements are equal.

**`Example`**

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
const isEqual = Circuit.equal(MyStruct, a, b);
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](Bool.md)

▸ <`T`\>(`x`, `y`): [`Bool`](Bool.md)

Checks if two elements are equal.

**`Example`**

```ts
class MyStruct extends Struct({ a: Field, b: Bool }) {};
const a: MyStruct = { a: Field(0), b: Bool(false) };
const b: MyStruct = { a: Field(1), b: Bool(true) };
const isEqual = Circuit.equal(MyStruct, a, b);
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/circuit.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L163)

___

### if

▪ `Static` **if**: <T\>(`b`: `boolean` \| [`Bool`](Bool.md), `ctor`: [`ProvablePure`](../interfaces/ProvablePure.md)<`T`\>, `x`: `T`, `y`: `T`) => `T`<T\>(`b`: `boolean` \| [`Bool`](Bool.md), `x`: `T`, `y`: `T`) => `T` = `SnarkyCircuit.if`

#### Type declaration

▸ <`T`\>(`b`, `ctor`, `x`, `y`): `T`

Circuit-compatible if-statement.

**`Example`**

```ts
const condition = Bool(true);
const result = Circuit.if(condition, Field(1), Field(2)); // Returns Field(1)
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `ctor` | [`ProvablePure`](../interfaces/ProvablePure.md)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

▸ <`T`\>(`b`, `x`, `y`): `T`

Circuit-compatible if-statement.

**`Example`**

```ts
const condition = Bool(true);
const result = Circuit.if(condition, Field(1), Field(2)); // Returns Field(1)
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:172](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L172)

___

### inCheckedComputation

▪ `Static` **inCheckedComputation**: () => `boolean` = `SnarkyCircuit.inCheckedComputation`

#### Type declaration

▸ (): `boolean`

Checks if the circuit is in checked computation mode.

**`Example`**

```ts
if (Circuit.inCheckedComputation()) {
  // Checked computation-specific code
}
```

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:212](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L212)

___

### inProver

▪ `Static` **inProver**: () => `boolean` = `SnarkyCircuit.inProver`

#### Type declaration

▸ (): `boolean`

Checks if the circuit is in prover mode.

**`Example`**

```ts
if (Circuit.inProver()) {
  // Prover-specific code
}
```

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:202](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L202)

___

### log

▪ `Static` **log**: (...`args`: `any`) => `void` = `SnarkyCircuit.log`

#### Type declaration

▸ (`...args`): `void`

Interface to log elements within a circuit. Similar to `console.log()`.

**`Example`**

```ts
const element = Field(42);
Circuit.log(element);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:221](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L221)

___

### runAndCheck

▪ `Static` **runAndCheck**: (`f`: () => `void`) => `void` = `SnarkyCircuit.runAndCheck`

#### Type declaration

▸ (`f`): `void`

Runs provable code quickly, without creating a proof, but still checking whether constraints are satisfied.

**`Example`**

```ts
Circuit.runAndCheck(() => {
  // Your code to check here
});
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:103](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L103)

___

### runUnchecked

▪ `Static` **runUnchecked**: (`f`: () => `void`) => `void` = `SnarkyCircuit.runUnchecked`

#### Type declaration

▸ (`f`): `void`

Runs provable code quickly, without creating a proof, and not checking whether constraints are satisfied.

**`Example`**

```ts
Circuit.runUnchecked(() => {
  // Your code to run here
});
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:113](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L113)

___

### switch

▪ `Static` **switch**: <T, A\>(`mask`: [`Bool`](Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` = `SnarkyCircuit.switch`

#### Type declaration

▸ <`T`, `A`\>(`mask`, `type`, `values`): `T`

Generalization of `Circuit.if` for choosing between more than two different cases.
It takes a "mask", which is an array of `Bool`s that contains only one `true` element, a type/constructor, and an array of values of that type.
The result is that value which corresponds to the true element of the mask.

**`Example`**

```ts
let x = Circuit.switch([Bool(false), Bool(true)], Field, [Field(1), Field(2)]);
x.assertEquals(2);
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:183](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L183)

___

### toFields

▪ `Static` **toFields**: <A\>(`a`: `A`) => [`Field`](Field.md)[] = `SnarkyCircuit.toFields`

#### Type declaration

▸ <`A`\>(`a`): [`Field`](Field.md)[]

Serializes an element into [Field](Field.md) elements.

**`Example`**

```ts
const element = Field(42);
const fields = Circuit.toFields(element);
```

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/circuit.ts:192](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L192)

___

### witness

▪ `Static` **witness**: <T, S\>(`ctor`: `S`, `f`: () => `T`) => `T` = `SnarkyCircuit.witness`

#### Type declaration

▸ <`T`, `S`\>(`ctor`, `f`): `T`

Create a new witness. A witness, or variable, is a value that is provided as input
by the prover. This provides a flexible way to introduce values from outside into the circuit.
However, note that nothing about how the value was created is part of the proof - `Circuit.witness`
behaves exactly like user input. So, make sure that after receiving the witness you make any assertions
that you want to associate with it.

**`Example`**

Example for re-implementing `Field.inv` with the help of `witness`:
```ts
let invX = Circuit.witness(Field, () => {
  // compute the inverse of `x` outside the circuit, however you like!
  return Field.inv(x));
}
// prove that `invX` is really the inverse of `x`:
invX.mul(x).assertEquals(1);
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> = [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `S` |
| `f` | () => `T` |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:83](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L83)

## Methods

### generateKeypair

▸ `Static` **generateKeypair**(): `Promise`<[`Keypair`](Keypair.md)\>

Generates a proving key and a verification key for this circuit.

**`Example`**

```ts
const keypair = await Circuit.generateKeypair();
```

#### Returns

`Promise`<[`Keypair`](Keypair.md)\>

#### Defined in

[lib/circuit.ts:25](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L25)

___

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `keypair`): `Promise`<`Proof`\>

Proves a statement using the private input, public input, and the [Keypair](Keypair.md) of the circuit.

**`Example`**

```ts
const keypair = await Circuit.generateKeypair();
const proof = await Circuit.prove(privateInput, publicInput, keypair);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateInput` | `any`[] |
| `publicInput` | `any`[] |
| `keypair` | [`Keypair`](Keypair.md) |

#### Returns

`Promise`<`Proof`\>

#### Defined in

[lib/circuit.ts:39](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L39)

___

### verify

▸ `Static` **verify**(`publicInput`, `vk`, `proof`): `Promise`<`boolean`\>

Verifies a proof using the public input, the proof, and the initial [Keypair](Keypair.md) of the circuit.

**`Example`**

```ts
const keypair = await Circuit.generateKeypair();
const proof = await Circuit.prove(privateInput, publicInput, keypair);
const isValid = await Circuit.verify(publicInput, keypair.vk, proof);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `any`[] |
| `vk` | `VerificationKey` |
| `proof` | `Proof` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/circuit.ts:54](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit.ts#L54)
