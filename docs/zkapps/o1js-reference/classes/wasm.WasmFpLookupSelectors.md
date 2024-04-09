[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpLookupSelectors

# Class: WasmFpLookupSelectors

[wasm](../modules/wasm.md).WasmFpLookupSelectors

## Table of contents

### Constructors

- [constructor](wasm.WasmFpLookupSelectors.md#constructor)

### Properties

- [ffmul](wasm.WasmFpLookupSelectors.md#ffmul)
- [lookup](wasm.WasmFpLookupSelectors.md#lookup)
- [range\_check](wasm.WasmFpLookupSelectors.md#range_check)
- [xor](wasm.WasmFpLookupSelectors.md#xor)

### Methods

- [free](wasm.WasmFpLookupSelectors.md#free)

## Constructors

### constructor

• **new WasmFpLookupSelectors**(`xor?`, `lookup?`, `range_check?`, `ffmul?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xor?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `lookup?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `range_check?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `ffmul?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1320

## Properties

### ffmul

• `Optional` **ffmul**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1323

___

### lookup

• `Optional` **lookup**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1326

___

### range\_check

• `Optional` **range\_check**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1329

___

### xor

• `Optional` **xor**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1332

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1313
