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

[lib/circuit.ts:144](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit.ts#L144)

## Properties

### value

• **value**: `unknown`

#### Defined in

[lib/circuit.ts:142](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit.ts#L142)

## Methods

### constraintSystem

▸ **constraintSystem**(): [`Gate`](../modules.md#gate)[]

Returns a low-level JSON representation of the [Circuit](Circuit.md) from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const json = MyProvable.witnessFromKeypair(keypair);
```

#### Returns

[`Gate`](../modules.md#gate)[]

#### Defined in

[lib/circuit.ts:163](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit.ts#L163)

___

### verificationKey

▸ **verificationKey**(): `VerificationKey`

#### Returns

`VerificationKey`

#### Defined in

[lib/circuit.ts:148](https://github.com/o1-labs/o1js/blob/5ca4368/src/lib/circuit.ts#L148)
