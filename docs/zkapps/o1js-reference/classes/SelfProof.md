[o1js](../README.md) / [Modules](../modules.md) / SelfProof

# Class: SelfProof\<PublicInput, PublicOutput\>

## Type parameters

| Name |
| :------ |
| `PublicInput` |
| `PublicOutput` |

## Hierarchy

- [`Proof`](Proof.md)\<`PublicInput`, `PublicOutput`\>

  ↳ **`SelfProof`**

## Table of contents

### Constructors

- [constructor](SelfProof.md#constructor)

### Properties

- [maxProofsVerified](SelfProof.md#maxproofsverified)
- [proof](SelfProof.md#proof)
- [publicInput](SelfProof.md#publicinput)
- [publicOutput](SelfProof.md#publicoutput)
- [shouldVerify](SelfProof.md#shouldverify)
- [publicInputType](SelfProof.md#publicinputtype)
- [publicOutputType](SelfProof.md#publicoutputtype)
- [tag](SelfProof.md#tag)

### Methods

- [toJSON](SelfProof.md#tojson)
- [verify](SelfProof.md#verify)
- [verifyIf](SelfProof.md#verifyif)
- [dummy](SelfProof.md#dummy)
- [fromJSON](SelfProof.md#fromjson)

## Constructors

### constructor

• **new SelfProof**\<`PublicInput`, `PublicOutput`\>(`«destructured»`)

#### Type parameters

| Name |
| :------ |
| `PublicInput` |
| `PublicOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxProofsVerified` | ``0`` \| ``2`` \| ``1`` |
| › `proof` | `unknown` |
| › `publicInput` | `PublicInput` |
| › `publicOutput` | `PublicOutput` |

#### Inherited from

[Proof](Proof.md).[constructor](Proof.md#constructor)

#### Defined in

[lib/proof-system.ts:136](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L136)

## Properties

### maxProofsVerified

• **maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[Proof](Proof.md).[maxProofsVerified](Proof.md#maxproofsverified)

#### Defined in

[lib/proof-system.ts:94](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L94)

___

### proof

• **proof**: `unknown`

#### Inherited from

[Proof](Proof.md).[proof](Proof.md#proof)

#### Defined in

[lib/proof-system.ts:93](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L93)

___

### publicInput

• **publicInput**: `PublicInput`

#### Inherited from

[Proof](Proof.md).[publicInput](Proof.md#publicinput)

#### Defined in

[lib/proof-system.ts:91](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L91)

___

### publicOutput

• **publicOutput**: `PublicOutput`

#### Inherited from

[Proof](Proof.md).[publicOutput](Proof.md#publicoutput)

#### Defined in

[lib/proof-system.ts:92](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L92)

___

### shouldVerify

• **shouldVerify**: [`Bool`](Bool.md)

#### Inherited from

[Proof](Proof.md).[shouldVerify](Proof.md#shouldverify)

#### Defined in

[lib/proof-system.ts:95](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L95)

___

### publicInputType

▪ `Static` **publicInputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Inherited from

[Proof](Proof.md).[publicInputType](Proof.md#publicinputtype)

#### Defined in

[lib/proof-system.ts:83](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L83)

___

### publicOutputType

▪ `Static` **publicOutputType**: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Inherited from

[Proof](Proof.md).[publicOutputType](Proof.md#publicoutputtype)

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

#### Inherited from

[Proof](Proof.md).[tag](Proof.md#tag)

#### Defined in

[lib/proof-system.ts:85](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L85)

## Methods

### toJSON

▸ **toJSON**(): [`JsonProof`](../modules.md#jsonproof)

#### Returns

[`JsonProof`](../modules.md#jsonproof)

#### Inherited from

[Proof](Proof.md).[toJSON](Proof.md#tojson)

#### Defined in

[lib/proof-system.ts:103](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L103)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Inherited from

[Proof](Proof.md).[verify](Proof.md#verify)

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

#### Inherited from

[Proof](Proof.md).[verifyIf](Proof.md#verifyif)

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

#### Inherited from

[Proof](Proof.md).[dummy](Proof.md#dummy)

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

#### Inherited from

[Proof](Proof.md).[fromJSON](Proof.md#fromjson)

#### Defined in

[lib/proof-system.ts:112](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/proof-system.ts#L112)
