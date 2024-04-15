[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqGate

# Class: WasmFqGate

[wasm](../modules/wasm.md).WasmFqGate

## Table of contents

### Constructors

- [constructor](wasm.WasmFqGate.md#constructor)

### Properties

- [typ](wasm.WasmFqGate.md#typ)
- [wires](wasm.WasmFqGate.md#wires)

### Methods

- [free](wasm.WasmFqGate.md#free)

## Constructors

### constructor

• **new WasmFqGate**(`typ`, `wires`, `coeffs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `typ` | `number` |
| `wires` | [`WasmGateWires`](wasm.WasmGateWires.md) |
| `coeffs` | `Uint8Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1742

## Properties

### typ

• **typ**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1745

___

### wires

• **wires**: [`WasmGateWires`](wasm.WasmGateWires.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1748

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1736
