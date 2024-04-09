[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpProverProof

# Class: WasmFpProverProof

[wasm](../modules/wasm.md).WasmFpProverProof

## Table of contents

### Constructors

- [constructor](wasm.WasmFpProverProof.md#constructor)

### Properties

- [commitments](wasm.WasmFpProverProof.md#commitments)
- [evals](wasm.WasmFpProverProof.md#evals)
- [ft\_eval1](wasm.WasmFpProverProof.md#ft_eval1)
- [prev\_challenges\_comms](wasm.WasmFpProverProof.md#prev_challenges_comms)
- [prev\_challenges\_scalars](wasm.WasmFpProverProof.md#prev_challenges_scalars)
- [proof](wasm.WasmFpProverProof.md#proof)
- [public\_](wasm.WasmFpProverProof.md#public_)

### Methods

- [free](wasm.WasmFpProverProof.md#free)
- [serialize](wasm.WasmFpProverProof.md#serialize)

## Constructors

### constructor

• **new WasmFpProverProof**(`commitments`, `proof`, `evals`, `ft_eval1`, `public_`, `prev_challenges_scalars`, `prev_challenges_comms`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commitments` | [`WasmFpProverCommitments`](wasm.WasmFpProverCommitments.md) |
| `proof` | [`WasmFpOpeningProof`](wasm.WasmFpOpeningProof.md) |
| `evals` | `any` |
| `ft_eval1` | `Uint8Array` |
| `public_` | `Uint8Array` |
| `prev_challenges_scalars` | [`WasmVecVecFp`](wasm.WasmVecVecFp.md) |
| `prev_challenges_comms` | `Uint32Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1583

## Properties

### commitments

• **commitments**: [`WasmFpProverCommitments`](wasm.WasmFpProverCommitments.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1590

___

### evals

• **evals**: `any`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1593

___

### ft\_eval1

• **ft\_eval1**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1596

___

### prev\_challenges\_comms

• **prev\_challenges\_comms**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1599

___

### prev\_challenges\_scalars

• **prev\_challenges\_scalars**: [`WasmVecVecFp`](wasm.WasmVecVecFp.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1602

___

### proof

• **proof**: [`WasmFpOpeningProof`](wasm.WasmFpOpeningProof.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1605

___

### public\_

• **public\_**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1608

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1573

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1587
