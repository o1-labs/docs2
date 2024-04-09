[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqLookupCommitments

# Class: WasmFqLookupCommitments

[wasm](../modules/wasm.md).WasmFqLookupCommitments

## Table of contents

### Constructors

- [constructor](wasm.WasmFqLookupCommitments.md#constructor)

### Properties

- [aggreg](wasm.WasmFqLookupCommitments.md#aggreg)
- [runtime](wasm.WasmFqLookupCommitments.md#runtime)
- [sorted](wasm.WasmFqLookupCommitments.md#sorted)

### Methods

- [free](wasm.WasmFqLookupCommitments.md#free)

## Constructors

### constructor

• **new WasmFqLookupCommitments**(`sorted`, `aggreg`, `runtime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sorted` | `Uint32Array` |
| `aggreg` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `runtime?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1764

## Properties

### aggreg

• **aggreg**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1767

___

### runtime

• `Optional` **runtime**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1770

___

### sorted

• **sorted**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1773

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1758
