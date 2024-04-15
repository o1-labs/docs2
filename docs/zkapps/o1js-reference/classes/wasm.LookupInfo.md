[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / LookupInfo

# Class: LookupInfo

[wasm](../modules/wasm.md).LookupInfo

Describes the desired lookup configuration.

## Table of contents

### Constructors

- [constructor](wasm.LookupInfo.md#constructor)

### Properties

- [features](wasm.LookupInfo.md#features)
- [max\_joint\_size](wasm.LookupInfo.md#max_joint_size)
- [max\_per\_row](wasm.LookupInfo.md#max_per_row)

### Methods

- [free](wasm.LookupInfo.md#free)

## Constructors

### constructor

• **new LookupInfo**(`max_per_row`, `max_joint_size`, `features`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max_per_row` | `number` |
| `max_joint_size` | `number` |
| `features` | [`LookupFeatures`](wasm.LookupFeatures.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1197

## Properties

### features

• **features**: [`LookupFeatures`](wasm.LookupFeatures.md)

The features enabled for this lookup configuration

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1201

___

### max\_joint\_size

• **max\_joint\_size**: `number`

The maximum joint size of any joint lookup in a constraint in `kinds`. This can be computed from `kinds`.

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1205

___

### max\_per\_row

• **max\_per\_row**: `number`

The maximum length of an element of `kinds`. This can be computed from `kinds`.

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1209

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1191
