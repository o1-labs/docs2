[o1js](../README.md) / [Modules](../modules.md) / Circuit

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

▪ `Static` **\_main**: `CircuitData`\<`any`, `any`\>

#### Defined in

[lib/circuit.ts:15](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L15)

___

### array

▪ `Static` **array**: \<A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`\<`A`[]\> = `Provable.Array`

#### Type declaration

▸ \<`A`\>(`elementType`, `length`): `InferredProvable`\<`A`[]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)\<`any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | `A` |
| `length` | `number` |

##### Returns

`InferredProvable`\<`A`[]\>

**`Deprecated`**

use [Array](../modules.md#array)

#### Defined in

[lib/circuit.ts:111](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L111)

___

### asProver

▪ `Static` **asProver**: (`f`: () => `void`) => `void` = `Provable.asProver`

#### Type declaration

▸ (`f`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

**`Deprecated`**

use [asProver](../modules.md#asprover)

#### Defined in

[lib/circuit.ts:95](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L95)

___

### assertEqual

▪ `Static` **assertEqual**: \<T\>(`type`: [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `void`\<T\>(`x`: `T`, `y`: `T`) => `void` = `Provable.assertEqual`

#### Type declaration

▸ \<`T`\>(`type`, `x`, `y`): `void`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

**`Deprecated`**

use [assertEqual](../modules.md#assertequal)

▸ \<`T`\>(`x`, `y`): `void`

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

**`Deprecated`**

use [assertEqual](../modules.md#assertequal)

#### Defined in

[lib/circuit.ts:115](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L115)

___

### constraintSystem

▪ `Static` **constraintSystem**: \<T\>(`f`: () => `T`) => \{ `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number` ; `print`: () => `void` ; `summary`: () => `Partial`\<`Record`\<[`GateType`](../modules.md#gatetype) \| ``"Total rows"``, `number`\>\>  } = `Provable.constraintSystem`

#### Type declaration

▸ \<`T`\>(`f`): `Object`

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
| `gates` | [`Gate`](../modules.md#gate)[] |
| `publicInputSize` | `number` |
| `result` | `T` |
| `rows` | `number` |
| `print` | () => `void` |
| `summary` | () => `Partial`\<`Record`\<[`GateType`](../modules.md#gatetype) \| ``"Total rows"``, `number`\>\> |

**`Deprecated`**

use [constraintSystem](../modules.md#constraintsystem)

#### Defined in

[lib/circuit.ts:107](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L107)

___

### equal

▪ `Static` **equal**: \<T\>(`type`: [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => [`Bool`](../modules.md#bool-1)\<T\>(`x`: `T`, `y`: `T`) => [`Bool`](../modules.md#bool-1) = `Provable.equal`

#### Type declaration

▸ \<`T`\>(`type`, `x`, `y`): [`Bool`](../modules.md#bool-1)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](../modules.md#bool-1)

**`Deprecated`**

use [equal](../modules.md#equal)

▸ \<`T`\>(`x`, `y`): [`Bool`](../modules.md#bool-1)

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

[`Bool`](../modules.md#bool-1)

**`Deprecated`**

use [equal](../modules.md#equal)

#### Defined in

[lib/circuit.ts:119](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L119)

___

### if

▪ `Static` **if**: \<T\>(`condition`: [`Bool`](Bool.md), `type`: [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\>, `x`: `T`, `y`: `T`) => `T`\<T\>(`condition`: [`Bool`](Bool.md), `x`: `T`, `y`: `T`) => `T` = `Provable.if`

#### Type declaration

▸ \<`T`\>(`condition`, `type`, `x`, `y`): `T`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

**`Deprecated`**

use [if](../modules.md#if)

▸ \<`T`\>(`condition`, `x`, `y`): `T`

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

**`Deprecated`**

use [if](../modules.md#if)

#### Defined in

[lib/circuit.ts:123](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L123)

___

### inCheckedComputation

▪ `Static` **inCheckedComputation**: () => `boolean` = `Provable.inCheckedComputation`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

**`Deprecated`**

use [inCheckedComputation](../modules.md#incheckedcomputation)

#### Defined in

[lib/circuit.ts:135](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L135)

___

### inProver

▪ `Static` **inProver**: () => `boolean` = `Provable.inProver`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

**`Deprecated`**

use [inProver](../modules.md#inprover)

#### Defined in

[lib/circuit.ts:131](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L131)

___

### log

▪ `Static` **log**: (...`args`: `any`) => `void` = `Provable.log`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

**`Deprecated`**

use [log](../modules.md#log)

#### Defined in

[lib/circuit.ts:139](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L139)

___

### runAndCheck

▪ `Static` **runAndCheck**: (`f`: () => `void`) => `void` = `Provable.runAndCheck`

#### Type declaration

▸ (`f`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

**`Deprecated`**

use [runAndCheck](../modules.md#runandcheck)

#### Defined in

[lib/circuit.ts:99](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L99)

___

### runUnchecked

▪ `Static` **runUnchecked**: (`f`: () => `void`) => `void` = `Provable.runUnchecked`

#### Type declaration

▸ (`f`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

**`Deprecated`**

use [runUnchecked](../modules.md#rununchecked)

#### Defined in

[lib/circuit.ts:103](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L103)

___

### switch

▪ `Static` **switch**: \<T, A\>(`mask`: [`Bool`](Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` = `Provable.switch`

#### Type declaration

▸ \<`T`, `A`\>(`mask`, `type`, `values`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

##### Returns

`T`

**`Deprecated`**

use [switch](../modules.md#switch)

#### Defined in

[lib/circuit.ts:127](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L127)

___

### witness

▪ `Static` **witness**: \<T, S\>(`type`: `S`, `compute`: () => `T`) => `T` = `Provable.witness`

#### Type declaration

▸ \<`T`, `S`\>(`type`, `compute`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> = [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `S` |
| `compute` | () => `T` |

##### Returns

`T`

**`Deprecated`**

use [witness](../modules.md#witness)

#### Defined in

[lib/circuit.ts:91](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L91)

## Methods

### generateKeypair

▸ `Static` **generateKeypair**(): `Promise`\<[`Keypair`](Keypair.md)\>

Generates a proving key and a verification key for this circuit.

#### Returns

`Promise`\<[`Keypair`](Keypair.md)\>

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
```

#### Defined in

[lib/circuit.ts:24](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L24)

___

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `keypair`): `Promise`\<`Proof`\>

Proves a statement using the private input, public input, and the [Keypair](Keypair.md) of the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateInput` | `any`[] |
| `publicInput` | `any`[] |
| `keypair` | [`Keypair`](Keypair.md) |

#### Returns

`Promise`\<`Proof`\>

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
```

#### Defined in

[lib/circuit.ts:43](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L43)

___

### verify

▸ `Static` **verify**(`publicInput`, `verificationKey`, `proof`): `Promise`\<`boolean`\>

Verifies a proof using the public input, the proof, and the initial [Keypair](Keypair.md) of the circuit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `any`[] |
| `verificationKey` | `VerificationKey` |
| `proof` | `Proof` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const proof = await MyCircuit.prove(privateInput, publicInput, keypair);
const isValid = await MyCircuit.verify(publicInput, keypair.vk, proof);
```

#### Defined in

[lib/circuit.ts:69](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit.ts#L69)
