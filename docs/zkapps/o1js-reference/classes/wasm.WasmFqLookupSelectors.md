[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqLookupSelectors

# Class: WasmFqLookupSelectors

[wasm](../modules/wasm.md).WasmFqLookupSelectors

## Table of contents

### Constructors

- [constructor](wasm.WasmFqLookupSelectors.md#constructor)

### Properties

- [ffmul](wasm.WasmFqLookupSelectors.md#ffmul)
- [lookup](wasm.WasmFqLookupSelectors.md#lookup)
- [range\_check](wasm.WasmFqLookupSelectors.md#range_check)
- [xor](wasm.WasmFqLookupSelectors.md#xor)

### Methods

- [free](wasm.WasmFqLookupSelectors.md#free)

## Constructors

### constructor

• **new WasmFqLookupSelectors**(`xor?`, `lookup?`, `range_check?`, `ffmul?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xor?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `lookup?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `range_check?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `ffmul?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1785

## Properties

### ffmul

• `Optional` **ffmul**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1788

___

### lookup

• `Optional` **lookup**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1791

___

### range\_check

• `Optional` **range\_check**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1794

___

### xor

• `Optional` **xor**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1797

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1778
