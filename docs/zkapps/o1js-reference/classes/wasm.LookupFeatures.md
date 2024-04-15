[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / LookupFeatures

# Class: LookupFeatures

[wasm](../modules/wasm.md).LookupFeatures

## Table of contents

### Constructors

- [constructor](wasm.LookupFeatures.md#constructor)

### Properties

- [joint\_lookup\_used](wasm.LookupFeatures.md#joint_lookup_used)
- [patterns](wasm.LookupFeatures.md#patterns)
- [uses\_runtime\_tables](wasm.LookupFeatures.md#uses_runtime_tables)

### Methods

- [free](wasm.LookupFeatures.md#free)

## Constructors

### constructor

• **new LookupFeatures**(`patterns`, `joint_lookup_used`, `uses_runtime_tables`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `patterns` | [`LookupPatterns`](wasm.LookupPatterns.md) |
| `joint_lookup_used` | `boolean` |
| `uses_runtime_tables` | `boolean` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1173

## Properties

### joint\_lookup\_used

• **joint\_lookup\_used**: `boolean`

Whether joint lookups are used

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1177

___

### patterns

• **patterns**: [`LookupPatterns`](wasm.LookupPatterns.md)

A single lookup constraint is a vector of lookup constraints to be applied at a row.

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1181

___

### uses\_runtime\_tables

• **uses\_runtime\_tables**: `boolean`

True if runtime lookup tables are used.

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1185

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1167
