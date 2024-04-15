[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpProverCommitments

# Class: WasmFpProverCommitments

[wasm](../modules/wasm.md).WasmFpProverCommitments

## Table of contents

### Constructors

- [constructor](wasm.WasmFpProverCommitments.md#constructor)

### Properties

- [lookup](wasm.WasmFpProverCommitments.md#lookup)
- [t\_comm](wasm.WasmFpProverCommitments.md#t_comm)
- [w\_comm](wasm.WasmFpProverCommitments.md#w_comm)
- [z\_comm](wasm.WasmFpProverCommitments.md#z_comm)

### Methods

- [free](wasm.WasmFpProverCommitments.md#free)

## Constructors

### constructor

• **new WasmFpProverCommitments**(`w_comm`, `z_comm`, `t_comm`, `lookup?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w_comm` | `Uint32Array` |
| `z_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `t_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `lookup?` | [`WasmFpLookupCommitments`](wasm.WasmFpLookupCommitments.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1556

## Properties

### lookup

• `Optional` **lookup**: [`WasmFpLookupCommitments`](wasm.WasmFpLookupCommitments.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1559

___

### t\_comm

• **t\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1562

___

### w\_comm

• **w\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1565

___

### z\_comm

• **z\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1568

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1549
