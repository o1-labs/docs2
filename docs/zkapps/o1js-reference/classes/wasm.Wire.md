[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / Wire

# Class: Wire

[wasm](../modules/wasm.md).Wire

Wire documents the other cell that is wired to this one.
If the cell represents an internal wire, an input to the circuit,
or a final output of the circuit, the cell references itself.

## Table of contents

### Constructors

- [constructor](wasm.Wire.md#constructor)

### Properties

- [col](wasm.Wire.md#col)
- [row](wasm.Wire.md#row)

### Methods

- [free](wasm.Wire.md#free)
- [create](wasm.Wire.md#create)

## Constructors

### constructor

• **new Wire**()

## Properties

### col

• **col**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2395

___

### row

• **row**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2398

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2386

___

### create

▸ `Static` **create**(`row`, `col`): [`Wire`](wasm.Wire.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

[`Wire`](wasm.Wire.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:2392
