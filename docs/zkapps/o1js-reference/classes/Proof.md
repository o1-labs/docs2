[o1js](../README.md) / [Modules](../modules.md) / Proof

# Class: Proof\<Input, Output\>

## Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

## Hierarchy

- **`Proof`**

  ↳ [`SelfProof`](SelfProof.md)

## Table of contents

### Constructors

- [constructor](Proof.md#constructor)

### Properties

- [maxProofsVerified](Proof.md#maxproofsverified)
- [proof](Proof.md#proof)
- [publicInput](Proof.md#publicinput)
- [publicOutput](Proof.md#publicoutput)
- [shouldVerify](Proof.md#shouldverify)
- [publicInputType](Proof.md#publicinputtype)
- [publicOutputType](Proof.md#publicoutputtype)
- [tag](Proof.md#tag)

### Methods

- [toJSON](Proof.md#tojson)
- [verify](Proof.md#verify)
- [verifyIf](Proof.md#verifyif)
- [dummy](Proof.md#dummy)
- [fromJSON](Proof.md#fromjson)

## Constructors

### constructor

• **new Proof**\<`Input`, `Output`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| › `proof` | `unknown` |
| › `publicInput` | `Input` |
| › `publicOutput` | `Output` |

#### Defined in

[lib/proof-system.ts:136](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L136)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/proof-system.ts:94](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L94)

___

### proof

• **proof**: `unknown`

#### Defined in

[lib/proof-system.ts:93](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L93)

___

### publicInput

• **publicInput**: `Input`

#### Defined in

[lib/proof-system.ts:91](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L91)

___

### publicOutput

• **publicOutput**: `Output`

#### Defined in

[lib/proof-system.ts:92](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L92)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Defined in

[lib/proof-system.ts:95](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L95)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Defined in

[lib/proof-system.ts:83](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L83)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Defined in

[lib/proof-system.ts:84](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L84)

___

### tag

▪ `Static` **tag**: () => \{ `name`: `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[lib/proof-system.ts:85](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L85)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../modules.md#jsonproof)

#### Returns

[`JsonProof`](../modules.md#jsonproof)

#### Defined in

[lib/proof-system.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L103)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[lib/proof-system.ts:97](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L97)

___

### verifyIf

▸ **verifyIf**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[lib/proof-system.ts:100](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L100)

___

### dummy

▸ `Static` **dummy**\<`Input`, `OutPut`\>(`publicInput`, `publicOutput`, `maxProofsVerified`, `domainLog2?`): `Promise`\<[`Proof`](Proof.md)\<`Input`, `OutPut`\>\>

Dummy proof. This can be useful for ZkPrograms that handle the base case in the same
method as the inductive case, using a pattern like this:

```ts
method(proof: SelfProof<I, O>, isRecursive: Bool) {
  proof.verifyIf(isRecursive);
  // ...
}
```

To use such a method in the base case, you need a dummy proof:

```ts
let dummy = await MyProof.dummy(publicInput, publicOutput, 1);
await myProgram.myMethod(dummy, Bool(false));
```

**Note**: The types of `publicInput` and `publicOutput`, as well as the `maxProofsVerified` parameter,
must match your ZkProgram. `maxProofsVerified` is the maximum number of proofs that any of your methods take as arguments.

#### Type parameters

| Name |
| :------ |
| `Input` |
| `OutPut` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicInput` | `Input` | `undefined` |
| `publicOutput` | `OutPut` | `undefined` |
| `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` | `undefined` |
| `domainLog2` | `number` | `14` |

#### Returns

`Promise`\<[`Proof`](Proof.md)\<`Input`, `OutPut`\>\>

#### Defined in

[lib/proof-system.ts:174](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L174)

___

### fromJSON

▸ `Static` **fromJSON**\<`S`\>(`this`, `«destructured»`): [`Proof`](Proof.md)\<[`InferProvable`](../modules.md#inferprovable)\<`S`[``"publicInputType"``]\>, [`InferProvable`](../modules.md#inferprovable)\<`S`[``"publicOutputType"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Subclass`\<typeof [`Proof`](Proof.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `S` |
| `«destructured»` | [`JsonProof`](../modules.md#jsonproof) |

#### Returns

[`Proof`](Proof.md)\<[`InferProvable`](../modules.md#inferprovable)\<`S`[``"publicInputType"``]\>, [`InferProvable`](../modules.md#inferprovable)\<`S`[``"publicOutputType"``]\>\>

#### Defined in

[lib/proof-system.ts:112](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L112)
