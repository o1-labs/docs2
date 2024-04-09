[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpLookupVerifierIndex

# Class: WasmFpLookupVerifierIndex

[wasm](../modules/wasm.md).WasmFpLookupVerifierIndex

## Table of contents

### Constructors

- [constructor](wasm.WasmFpLookupVerifierIndex.md#constructor)

### Properties

- [joint\_lookup\_used](wasm.WasmFpLookupVerifierIndex.md#joint_lookup_used)
- [lookup\_info](wasm.WasmFpLookupVerifierIndex.md#lookup_info)
- [lookup\_selectors](wasm.WasmFpLookupVerifierIndex.md#lookup_selectors)
- [lookup\_table](wasm.WasmFpLookupVerifierIndex.md#lookup_table)
- [runtime\_tables\_selector](wasm.WasmFpLookupVerifierIndex.md#runtime_tables_selector)
- [table\_ids](wasm.WasmFpLookupVerifierIndex.md#table_ids)

### Methods

- [free](wasm.WasmFpLookupVerifierIndex.md#free)

## Constructors

### constructor

• **new WasmFpLookupVerifierIndex**(`joint_lookup_used`, `lookup_table`, `lookup_selectors`, `table_ids`, `lookup_info`, `runtime_tables_selector?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `joint_lookup_used` | `boolean` |
| `lookup_table` | `Uint32Array` |
| `lookup_selectors` | [`WasmFpLookupSelectors`](wasm.WasmFpLookupSelectors.md) |
| `table_ids` | `undefined` \| [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `lookup_info` | [`LookupInfo`](wasm.LookupInfo.md) |
| `runtime_tables_selector?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1346

## Properties

### joint\_lookup\_used

• **joint\_lookup\_used**: `boolean`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1349

___

### lookup\_info

• **lookup\_info**: [`LookupInfo`](wasm.LookupInfo.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1352

___

### lookup\_selectors

• **lookup\_selectors**: [`WasmFpLookupSelectors`](wasm.WasmFpLookupSelectors.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1355

___

### lookup\_table

• **lookup\_table**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1358

___

### runtime\_tables\_selector

• `Optional` **runtime\_tables\_selector**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1361

___

### table\_ids

• `Optional` **table\_ids**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1364

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1337
