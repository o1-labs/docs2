[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqProverCommitments

# Class: WasmFqProverCommitments

[wasm](../modules/wasm.md).WasmFqProverCommitments

## Table of contents

### Constructors

- [constructor](wasm.WasmFqProverCommitments.md#constructor)

### Properties

- [lookup](wasm.WasmFqProverCommitments.md#lookup)
- [t\_comm](wasm.WasmFqProverCommitments.md#t_comm)
- [w\_comm](wasm.WasmFqProverCommitments.md#w_comm)
- [z\_comm](wasm.WasmFqProverCommitments.md#z_comm)

### Methods

- [free](wasm.WasmFqProverCommitments.md#free)

## Constructors

### constructor

• **new WasmFqProverCommitments**(`w_comm`, `z_comm`, `t_comm`, `lookup?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w_comm` | `Uint32Array` |
| `z_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `t_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `lookup?` | [`WasmFqLookupCommitments`](wasm.WasmFqLookupCommitments.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2021

## Properties

### lookup

• `Optional` **lookup**: [`WasmFqLookupCommitments`](wasm.WasmFqLookupCommitments.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2024

___

### t\_comm

• **t\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2027

___

### w\_comm

• **w\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2030

___

### z\_comm

• **z\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2033

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2014
