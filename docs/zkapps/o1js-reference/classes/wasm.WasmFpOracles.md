[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpOracles

# Class: WasmFpOracles

[wasm](../modules/wasm.md).WasmFpOracles

## Table of contents

### Constructors

- [constructor](wasm.WasmFpOracles.md#constructor)

### Properties

- [digest\_before\_evaluations](wasm.WasmFpOracles.md#digest_before_evaluations)
- [o](wasm.WasmFpOracles.md#o)
- [opening\_prechallenges](wasm.WasmFpOracles.md#opening_prechallenges)
- [p\_eval0](wasm.WasmFpOracles.md#p_eval0)
- [p\_eval1](wasm.WasmFpOracles.md#p_eval1)

### Methods

- [free](wasm.WasmFpOracles.md#free)

## Constructors

### constructor

• **new WasmFpOracles**(`o`, `p_eval0`, `p_eval1`, `opening_prechallenges`, `digest_before_evaluations`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`WasmFpRandomOracles`](wasm.WasmFpRandomOracles.md) |
| `p_eval0` | `Uint8Array` |
| `p_eval1` | `Uint8Array` |
| `opening_prechallenges` | `Uint8Array` |
| `digest_before_evaluations` | `Uint8Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1409

## Properties

### digest\_before\_evaluations

• **digest\_before\_evaluations**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1412

___

### o

• **o**: [`WasmFpRandomOracles`](wasm.WasmFpRandomOracles.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1415

___

### opening\_prechallenges

• **opening\_prechallenges**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1418

___

### p\_eval0

• **p\_eval0**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1421

___

### p\_eval1

• **p\_eval1**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1424

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1401
