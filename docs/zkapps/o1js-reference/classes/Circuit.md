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

▪ `Static` **\_main**: `CircuitData`<`any`, `any`\>

#### Defined in

[lib/circuit.ts:14](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L14)

___

### array

▪ `Static` **array**: <A\>(`elementType`: `A`, `length`: `number`) => `InferredProvable`<`A`[]\> = `Provable.Array`

#### Type declaration

▸ <`A`\>(`elementType`, `length`): `InferredProvable`<`A`[]\>

**`Deprecated`**

use [Array](../modules.md#array)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)<`any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | `A` |
| `length` | `number` |

##### Returns

`InferredProvable`<`A`[]\>

#### Defined in

[lib/circuit.ts:110](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L110)

___

### asProver

▪ `Static` **asProver**: (`f`: () => `void`) => `void` = `Provable.asProver`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [asProver](../modules.md#asprover)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:94](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L94)

___

### assertEqual

▪ `Static` **assertEqual**: <T\>(`type`: [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `void`<T\>(`x`: `T`, `y`: `T`) => `void` = `Provable.assertEqual`

#### Type declaration

▸ <`T`\>(`type`, `x`, `y`): `void`

**`Deprecated`**

use [assertEqual](../modules.md#assertequal)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`void`

▸ <`T`\>(`x`, `y`): `void`

**`Deprecated`**

use [assertEqual](../modules.md#assertequal)

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

[lib/circuit.ts:114](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L114)

___

### constraintSystem

▪ `Static` **constraintSystem**: <T\>(`f`: () => `T`) => { `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `publicInputSize`: `number` ; `result`: `T` ; `rows`: `number`  } = `Provable.constraintSystem`

#### Type declaration

▸ <`T`\>(`f`): `Object`

**`Deprecated`**

use [constraintSystem](../modules.md#constraintsystem)

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

#### Defined in

[lib/circuit.ts:106](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L106)

___

### equal

▪ `Static` **equal**: <T\>(`type`: [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => [`Bool`](../modules.md#bool-1)<T\>(`x`: `T`, `y`: `T`) => [`Bool`](../modules.md#bool-1) = `Provable.equal`

#### Type declaration

▸ <`T`\>(`type`, `x`, `y`): [`Bool`](../modules.md#bool-1)

**`Deprecated`**

use [equal](../modules.md#equal)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

[`Bool`](../modules.md#bool-1)

▸ <`T`\>(`x`, `y`): [`Bool`](../modules.md#bool-1)

**`Deprecated`**

use [equal](../modules.md#equal)

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

#### Defined in

[lib/circuit.ts:118](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L118)

___

### if

▪ `Static` **if**: <T\>(`condition`: [`Bool`](Bool.md), `type`: [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\>, `x`: `T`, `y`: `T`) => `T`<T\>(`condition`: [`Bool`](Bool.md), `x`: `T`, `y`: `T`) => `T` = `Provable.if`

#### Type declaration

▸ <`T`\>(`condition`, `type`, `x`, `y`): `T`

**`Deprecated`**

use [if](../modules.md#if)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |
| `x` | `T` |
| `y` | `T` |

##### Returns

`T`

▸ <`T`\>(`condition`, `x`, `y`): `T`

**`Deprecated`**

use [if](../modules.md#if)

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

[lib/circuit.ts:122](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L122)

___

### inCheckedComputation

▪ `Static` **inCheckedComputation**: () => `boolean` = `Provable.inCheckedComputation`

#### Type declaration

▸ (): `boolean`

**`Deprecated`**

use [inCheckedComputation](../modules.md#incheckedcomputation)

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:134](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L134)

___

### inProver

▪ `Static` **inProver**: () => `boolean` = `Provable.inProver`

#### Type declaration

▸ (): `boolean`

**`Deprecated`**

use [inProver](../modules.md#inprover)

##### Returns

`boolean`

#### Defined in

[lib/circuit.ts:130](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L130)

___

### log

▪ `Static` **log**: (...`args`: `any`) => `void` = `Provable.log`

#### Type declaration

▸ (`...args`): `void`

**`Deprecated`**

use [log](../modules.md#log)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:138](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L138)

___

### runAndCheck

▪ `Static` **runAndCheck**: (`f`: () => `void`) => `void` = `Provable.runAndCheck`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [runAndCheck](../modules.md#runandcheck)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:98](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L98)

___

### runUnchecked

▪ `Static` **runUnchecked**: (`f`: () => `void`) => `void` = `Provable.runUnchecked`

#### Type declaration

▸ (`f`): `void`

**`Deprecated`**

use [runUnchecked](../modules.md#rununchecked)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

##### Returns

`void`

#### Defined in

[lib/circuit.ts:102](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L102)

___

### switch

▪ `Static` **switch**: <T, A\>(`mask`: [`Bool`](Bool.md)[], `type`: `A`, `values`: `T`[]) => `T` = `Provable.switch`

#### Type declaration

▸ <`T`, `A`\>(`mask`, `type`, `values`): `T`

**`Deprecated`**

use [switch](../modules.md#switch)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:126](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L126)

___

### witness

▪ `Static` **witness**: <T, S\>(`type`: `S`, `compute`: () => `T`) => `T` = `Provable.witness`

#### Type declaration

▸ <`T`, `S`\>(`type`, `compute`): `T`

**`Deprecated`**

use [witness](../modules.md#witness)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> = [`FlexibleProvable`](../modules.md#flexibleprovable)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `S` |
| `compute` | () => `T` |

##### Returns

`T`

#### Defined in

[lib/circuit.ts:90](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L90)

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

[lib/circuit.ts:23](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L23)

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

[lib/circuit.ts:42](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L42)

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

[lib/circuit.ts:68](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit.ts#L68)
