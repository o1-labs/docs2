[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpLookupCommitments

# Class: WasmFpLookupCommitments

[wasm](../modules/wasm.md).WasmFpLookupCommitments

## Table of contents

### Constructors

- [constructor](wasm.WasmFpLookupCommitments.md#constructor)

### Properties

- [aggreg](wasm.WasmFpLookupCommitments.md#aggreg)
- [runtime](wasm.WasmFpLookupCommitments.md#runtime)
- [sorted](wasm.WasmFpLookupCommitments.md#sorted)

### Methods

- [free](wasm.WasmFpLookupCommitments.md#free)

## Constructors

### constructor

• **new WasmFpLookupCommitments**(`sorted`, `aggreg`, `runtime?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sorted` | `Uint32Array` |
| `aggreg` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `runtime?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1299

## Properties

### aggreg

• **aggreg**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1302

___

### runtime

• `Optional` **runtime**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1305

___

### sorted

• **sorted**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1308

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1293
