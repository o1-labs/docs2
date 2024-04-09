[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqProverProof

# Class: WasmFqProverProof

[wasm](../modules/wasm.md).WasmFqProverProof

## Table of contents

### Constructors

- [constructor](wasm.WasmFqProverProof.md#constructor)

### Properties

- [commitments](wasm.WasmFqProverProof.md#commitments)
- [evals](wasm.WasmFqProverProof.md#evals)
- [ft\_eval1](wasm.WasmFqProverProof.md#ft_eval1)
- [prev\_challenges\_comms](wasm.WasmFqProverProof.md#prev_challenges_comms)
- [prev\_challenges\_scalars](wasm.WasmFqProverProof.md#prev_challenges_scalars)
- [proof](wasm.WasmFqProverProof.md#proof)
- [public\_](wasm.WasmFqProverProof.md#public_)

### Methods

- [free](wasm.WasmFqProverProof.md#free)
- [serialize](wasm.WasmFqProverProof.md#serialize)

## Constructors

### constructor

• **new WasmFqProverProof**(`commitments`, `proof`, `evals`, `ft_eval1`, `public_`, `prev_challenges_scalars`, `prev_challenges_comms`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commitments` | [`WasmFqProverCommitments`](wasm.WasmFqProverCommitments.md) |
| `proof` | [`WasmFqOpeningProof`](wasm.WasmFqOpeningProof.md) |
| `evals` | `any` |
| `ft_eval1` | `Uint8Array` |
| `public_` | `Uint8Array` |
| `prev_challenges_scalars` | [`WasmVecVecFq`](wasm.WasmVecVecFq.md) |
| `prev_challenges_comms` | `Uint32Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2048

## Properties

### commitments

• **commitments**: [`WasmFqProverCommitments`](wasm.WasmFqProverCommitments.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2055

___

### evals

• **evals**: `any`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2058

___

### ft\_eval1

• **ft\_eval1**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2061

___

### prev\_challenges\_comms

• **prev\_challenges\_comms**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2064

___

### prev\_challenges\_scalars

• **prev\_challenges\_scalars**: [`WasmVecVecFq`](wasm.WasmVecVecFq.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2067

___

### proof

• **proof**: [`WasmFqOpeningProof`](wasm.WasmFqOpeningProof.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2070

___

### public\_

• **public\_**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2073

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2038

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2052
