[o1js](../README.md) / [Modules](../modules.md) / Circuit

# Class: Circuit

## Table of contents

### Constructors

- [constructor](Circuit.md#constructor)

### Properties

- [\_main](Circuit.md#_main)

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

[lib/proof-system/circuit.ts:22](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L22)

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

[lib/proof-system/circuit.ts:31](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L31)

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

[lib/proof-system/circuit.ts:50](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L50)

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

[lib/proof-system/circuit.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L76)
