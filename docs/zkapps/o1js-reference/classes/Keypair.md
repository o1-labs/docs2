[o1js](../README.md) / [Modules](../modules.md) / Keypair

# Class: Keypair

## Table of contents

### Constructors

- [constructor](Keypair.md#constructor)

### Properties

- [value](Keypair.md#value)

### Methods

- [constraintSystem](Keypair.md#constraintsystem)
- [verificationKey](Keypair.md#verificationkey)

## Constructors

### constructor

• **new Keypair**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Defined in

[lib/proof-system/circuit.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L97)

## Properties

### value

• **value**: `unknown`

#### Defined in

[lib/proof-system/circuit.ts:95](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L95)

## Methods

### constraintSystem

▸ **constraintSystem**(): [`Gate`](../modules.md#gate)[]

Returns a low-level JSON representation of the [Circuit](Circuit.md) from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

#### Returns

[`Gate`](../modules.md#gate)[]

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const json = MyProvable.witnessFromKeypair(keypair);
```

#### Defined in

[lib/proof-system/circuit.ts:116](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L116)

___

### verificationKey

▸ **verificationKey**(): `VerificationKey`

#### Returns

`VerificationKey`

#### Defined in

[lib/proof-system/circuit.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/proof-system/circuit.ts#L101)
