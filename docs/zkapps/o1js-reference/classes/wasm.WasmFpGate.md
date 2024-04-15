[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpGate

# Class: WasmFpGate

[wasm](../modules/wasm.md).WasmFpGate

## Table of contents

### Constructors

- [constructor](wasm.WasmFpGate.md#constructor)

### Properties

- [typ](wasm.WasmFpGate.md#typ)
- [wires](wasm.WasmFpGate.md#wires)

### Methods

- [free](wasm.WasmFpGate.md#free)

## Constructors

### constructor

• **new WasmFpGate**(`typ`, `wires`, `coeffs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `typ` | `number` |
| `wires` | [`WasmGateWires`](wasm.WasmGateWires.md) |
| `coeffs` | `Uint8Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1277

## Properties

### typ

• **typ**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1280

___

### wires

• **wires**: [`WasmGateWires`](wasm.WasmGateWires.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1283

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1271
