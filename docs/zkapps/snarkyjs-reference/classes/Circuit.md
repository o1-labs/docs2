# Class: Circuit

## Table of contents

### Constructors

- [constructor](Circuit.md#constructor)

### Properties

- [\_main](Circuit.md#_main)
- [array](Circuit.md#array)
- [asProver](Circuit.md#asprover)
- [assertEqual](Circuit.md#assertequal)
- [constraintSystem](Circuit.md#constraintsystem)
- [equal](Circuit.md#equal)
- [if](Circuit.md#if)
- [inCheckedComputation](Circuit.md#incheckedcomputation)
- [inProver](Circuit.md#inprover)
- [log](Circuit.md#log)
- [runAndCheck](Circuit.md#runandcheck)
- [runUnchecked](Circuit.md#rununchecked)
- [switch](Circuit.md#switch)
- [witness](Circuit.md#witness)

### Methods

- [generateKeypair](Circuit.md#generatekeypair)
- [prove](Circuit.md#prove)
- [verify](Circuit.md#verify)

## Constructors

### constructor

• **new Circuit**()

## Properties

### \_main

▪ `Static` **\_main**: `CircuitData`<`any`, `any`\>

#### Defined in

[lib/circuit.ts:13](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L13)

___

### array

▪ `Static` **array**: <A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`<`A`[]\> = `Provable.Array`

#### Type declaration

▸ <`A`\>(`elementType`, `length`): `InferredProvable`<`A`[]\>

**`Deprecated`**

use [Array](../README.md#array)

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

[lib/circuit.ts:103](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L103)

___

### asProver

▪ `Static` **asProver**: (`f`: () => `void`) => `void` = `Provable.asProver`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [asProver](../README.md#asprover)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:87](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L87)

___

### assertEqual

▪ `Static` **assertEqual**: <T\>(`type`: [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `void`<T\>(`x`: `T`, `y`: `T`) => `void` = `Provable.assertEqual`

#### Type declaration

▸ <`T`\>(`type`, `x`, `y`): `void`

**`Deprecated`**

use [assertEqual](../README.md#assertequal)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

▸ <`T`\>(`x`, `y`): `void`

**`Deprecated`**

use [assertEqual](../README.md#assertequal)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ToFieldable` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:107](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L107)

___

### constraintSystem

▪ `Static` **constraintSystem**: <T\>(`f`: () => `T`) => { `digest`: `string` ; `gates`: `Gate`[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number`  } = `Provable.constraintSystem`

#### Type declaration

▸ <`T`\>(`f`): `Object`

**`Deprecated`**

use [constraintSystem](../README.md#constraintsystem)

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

[lib/circuit.ts:99](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L99)

___

### equal

▪ `Static` **equal**: <T\>(`type`: [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => [`Bool`](Bool.md)<T\>(`x`: `T`, `y`: `T`) => [`Bool`](Bool.md) = `Provable.equal`

#### Type declaration

▸ <`T`\>(`type`, `x`, `y`): [`Bool`](Bool.md)

**`Deprecated`**

use [equal](../README.md#equal)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](Bool.md)

▸ <`T`\>(`x`, `y`): [`Bool`](Bool.md)

**`Deprecated`**

use [equal](../README.md#equal)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ToFieldable` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/circuit.ts:111](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L111)

___

### if

▪ `Static` **if**: <T\>(`condition`: [`Bool`](Bool.md), `type`: [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `T`<T\>(`condition`: [`Bool`](Bool.md), `x`: `T`, `y`: `T`) => `T` = `Provable.if`

#### Type declaration

▸ <`T`\>(`condition`, `type`, `x`, `y`): `T`

**`Deprecated`**

use [if](../README.md#if)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |
| `type` | [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

▸ <`T`\>(`condition`, `x`, `y`): `T`

**`Deprecated`**

use [if](../README.md#if)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ToFieldable` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:115](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L115)

___

### inCheckedComputation

▪ `Static` **inCheckedComputation**: () => `boolean` = `Provable.inCheckedComputation`

#### Type declaration

▸ (): `boolean`

**`Deprecated`**

use [inCheckedComputation](../README.md#incheckedcomputation)

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:127](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L127)

___

### inProver

▪ `Static` **inProver**: () => `boolean` = `Provable.inProver`

#### Type declaration

▸ (): `boolean`

**`Deprecated`**

use [inProver](../README.md#inprover)

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:123](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L123)

___

### log

▪ `Static` **log**: (...`args`: `any`) => `void` = `Provable.log`

#### Type declaration

▸ (`...args`): `void`

**`Deprecated`**

use [log](../README.md#log)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:131](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L131)

___

### runAndCheck

▪ `Static` **runAndCheck**: (`f`: () => `void`) => `void` = `Provable.runAndCheck`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [runAndCheck](../README.md#runandcheck)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:91](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L91)

___

### runUnchecked

▪ `Static` **runUnchecked**: (`f`: () => `void`) => `void` = `Provable.runUnchecked`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [runUnchecked](../README.md#rununchecked)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:95](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L95)

___

### switch

▪ `Static` **switch**: <T, A\>(`mask`: [`Bool`](Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` = `Provable.switch`

#### Type declaration

▸ <`T`, `A`\>(`mask`, `type`, `values`): `T`

**`Deprecated`**

use [switch](../README.md#switch)

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

[lib/circuit.ts:119](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L119)

___

### witness

▪ `Static` **witness**: <T, S\>(`type`: `S`, `compute`: () => `T`) => `T` = `Provable.witness`

#### Type declaration

▸ <`T`, `S`\>(`type`, `compute`): `T`

**`Deprecated`**

use [witness](../README.md#witness)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> = [`FlexibleProvable`](../README.md#flexibleprovable)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `S` |
| `compute` | () => `T` |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:83](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L83)

## Methods

### generateKeypair

▸ `Static` **generateKeypair**(): `Promise`<[`Keypair`](Keypair.md)\>

Generates a proving key and a verification key for this circuit.

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
```

#### Returns

`Promise`<[`Keypair`](Keypair.md)\>

#### Defined in

[lib/circuit.ts:22](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L22)

___

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `keypair`): `Promise`<`Proof`\>

Proves a statement using the private input, public input, and the [Keypair](Keypair.md) of the circuit.

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
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

[lib/circuit.ts:39](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L39)

___

### verify

▸ `Static` **verify**(`publicInput`, `verificationKey`, `proof`): `Promise`<`boolean`\>

Verifies a proof using the public input, the proof, and the initial [Keypair](Keypair.md) of the circuit.

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
const isValid = await MyCircuit.verify(publicInput, keypair.vk, proof);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `any`[] |
| `verificationKey` | `VerificationKey` |
| `proof` | `Proof` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/circuit.ts:63](https://github.com/o1-labs/snarkyjs/blob/e55c71d/src/lib/circuit.ts#L63)
