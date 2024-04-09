[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqOracles

# Class: WasmFqOracles

[wasm](../modules/wasm.md).WasmFqOracles

## Table of contents

### Constructors

- [constructor](wasm.WasmFqOracles.md#constructor)

### Properties

- [digest\_before\_evaluations](wasm.WasmFqOracles.md#digest_before_evaluations)
- [o](wasm.WasmFqOracles.md#o)
- [opening\_prechallenges](wasm.WasmFqOracles.md#opening_prechallenges)
- [p\_eval0](wasm.WasmFqOracles.md#p_eval0)
- [p\_eval1](wasm.WasmFqOracles.md#p_eval1)

### Methods

- [free](wasm.WasmFqOracles.md#free)

## Constructors

### constructor

• **new WasmFqOracles**(`o`, `p_eval0`, `p_eval1`, `opening_prechallenges`, `digest_before_evaluations`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`WasmFqRandomOracles`](wasm.WasmFqRandomOracles.md) |
| `p_eval0` | `Uint8Array` |
| `p_eval1` | `Uint8Array` |
| `opening_prechallenges` | `Uint8Array` |
| `digest_before_evaluations` | `Uint8Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1874

## Properties

### digest\_before\_evaluations

• **digest\_before\_evaluations**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1877

___

### o

• **o**: [`WasmFqRandomOracles`](wasm.WasmFqRandomOracles.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1880

___

### opening\_prechallenges

• **opening\_prechallenges**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1883

___

### p\_eval0

• **p\_eval0**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1886

___

### p\_eval1

• **p\_eval1**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1889

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1866
