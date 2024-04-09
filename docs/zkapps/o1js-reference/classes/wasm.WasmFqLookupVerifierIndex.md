[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqLookupVerifierIndex

# Class: WasmFqLookupVerifierIndex

[wasm](../modules/wasm.md).WasmFqLookupVerifierIndex

## Table of contents

### Constructors

- [constructor](wasm.WasmFqLookupVerifierIndex.md#constructor)

### Properties

- [joint\_lookup\_used](wasm.WasmFqLookupVerifierIndex.md#joint_lookup_used)
- [lookup\_info](wasm.WasmFqLookupVerifierIndex.md#lookup_info)
- [lookup\_selectors](wasm.WasmFqLookupVerifierIndex.md#lookup_selectors)
- [lookup\_table](wasm.WasmFqLookupVerifierIndex.md#lookup_table)
- [runtime\_tables\_selector](wasm.WasmFqLookupVerifierIndex.md#runtime_tables_selector)
- [table\_ids](wasm.WasmFqLookupVerifierIndex.md#table_ids)

### Methods

- [free](wasm.WasmFqLookupVerifierIndex.md#free)

## Constructors

### constructor

• **new WasmFqLookupVerifierIndex**(`joint_lookup_used`, `lookup_table`, `lookup_selectors`, `table_ids`, `lookup_info`, `runtime_tables_selector?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `joint_lookup_used` | `boolean` |
| `lookup_table` | `Uint32Array` |
| `lookup_selectors` | [`WasmFqLookupSelectors`](wasm.WasmFqLookupSelectors.md) |
| `table_ids` | `undefined` \| [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `lookup_info` | [`LookupInfo`](wasm.LookupInfo.md) |
| `runtime_tables_selector?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1811

## Properties

### joint\_lookup\_used

• **joint\_lookup\_used**: `boolean`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1814

___

### lookup\_info

• **lookup\_info**: [`LookupInfo`](wasm.LookupInfo.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1817

___

### lookup\_selectors

• **lookup\_selectors**: [`WasmFqLookupSelectors`](wasm.WasmFqLookupSelectors.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1820

___

### lookup\_table

• **lookup\_table**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1823

___

### runtime\_tables\_selector

• `Optional` **runtime\_tables\_selector**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1826

___

### table\_ids

• `Optional` **table\_ids**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1829

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1802
