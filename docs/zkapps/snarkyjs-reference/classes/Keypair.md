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

[lib/circuit.ts:137](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit.ts#L137)

## Properties

### value

• **value**: `unknown`

#### Defined in

[lib/circuit.ts:135](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit.ts#L135)

## Methods

### constraintSystem

▸ **constraintSystem**(): `Gate`[]

Returns a low-level JSON representation of the [Circuit](Circuit.md) from its [Keypair](Keypair.md):
a list of gates, each of which represents a row in a table, with certain coefficients and wires to other (row, column) pairs

**`Example`**

```ts
const keypair = await MyCircuit.generateKeypair();
const json = MyProvable.witnessFromKeypair(keypair);
```

#### Returns

`Gate`[]

#### Defined in

[lib/circuit.ts:156](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit.ts#L156)

___

### verificationKey

▸ **verificationKey**(): `VerificationKey`

#### Returns

`VerificationKey`

#### Defined in

[lib/circuit.ts:141](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/lib/circuit.ts#L141)
