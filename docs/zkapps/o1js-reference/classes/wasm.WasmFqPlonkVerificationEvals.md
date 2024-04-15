[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqPlonkVerificationEvals

# Class: WasmFqPlonkVerificationEvals

[wasm](../modules/wasm.md).WasmFqPlonkVerificationEvals

## Table of contents

### Constructors

- [constructor](wasm.WasmFqPlonkVerificationEvals.md#constructor)

### Properties

- [coefficients\_comm](wasm.WasmFqPlonkVerificationEvals.md#coefficients_comm)
- [complete\_add\_comm](wasm.WasmFqPlonkVerificationEvals.md#complete_add_comm)
- [emul\_comm](wasm.WasmFqPlonkVerificationEvals.md#emul_comm)
- [endomul\_scalar\_comm](wasm.WasmFqPlonkVerificationEvals.md#endomul_scalar_comm)
- [foreign\_field\_add\_comm](wasm.WasmFqPlonkVerificationEvals.md#foreign_field_add_comm)
- [foreign\_field\_mul\_comm](wasm.WasmFqPlonkVerificationEvals.md#foreign_field_mul_comm)
- [generic\_comm](wasm.WasmFqPlonkVerificationEvals.md#generic_comm)
- [mul\_comm](wasm.WasmFqPlonkVerificationEvals.md#mul_comm)
- [psm\_comm](wasm.WasmFqPlonkVerificationEvals.md#psm_comm)
- [range\_check0\_comm](wasm.WasmFqPlonkVerificationEvals.md#range_check0_comm)
- [range\_check1\_comm](wasm.WasmFqPlonkVerificationEvals.md#range_check1_comm)
- [rot\_comm](wasm.WasmFqPlonkVerificationEvals.md#rot_comm)
- [sigma\_comm](wasm.WasmFqPlonkVerificationEvals.md#sigma_comm)
- [xor\_comm](wasm.WasmFqPlonkVerificationEvals.md#xor_comm)

### Methods

- [free](wasm.WasmFqPlonkVerificationEvals.md#free)

## Constructors

### constructor

• **new WasmFqPlonkVerificationEvals**(`sigma_comm`, `coefficients_comm`, `generic_comm`, `psm_comm`, `complete_add_comm`, `mul_comm`, `emul_comm`, `endomul_scalar_comm`, `xor_comm?`, `range_check0_comm?`, `range_check1_comm?`, `foreign_field_add_comm?`, `foreign_field_mul_comm?`, `rot_comm?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma_comm` | `Uint32Array` |
| `coefficients_comm` | `Uint32Array` |
| `generic_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `psm_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `complete_add_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `mul_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `emul_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `endomul_scalar_comm` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `xor_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `range_check0_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `range_check1_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `foreign_field_add_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `foreign_field_mul_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |
| `rot_comm?` | [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1911

## Properties

### coefficients\_comm

• **coefficients\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1914

___

### complete\_add\_comm

• **complete\_add\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1917

___

### emul\_comm

• **emul\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1920

___

### endomul\_scalar\_comm

• **endomul\_scalar\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1923

___

### foreign\_field\_add\_comm

• `Optional` **foreign\_field\_add\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1926

___

### foreign\_field\_mul\_comm

• `Optional` **foreign\_field\_mul\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1929

___

### generic\_comm

• **generic\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1932

___

### mul\_comm

• **mul\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1935

___

### psm\_comm

• **psm\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1938

___

### range\_check0\_comm

• `Optional` **range\_check0\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1941

___

### range\_check1\_comm

• `Optional` **range\_check1\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1944

___

### rot\_comm

• `Optional` **rot\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1947

___

### sigma\_comm

• **sigma\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1950

___

### xor\_comm

• `Optional` **xor\_comm**: [`WasmFqPolyComm`](wasm.WasmFqPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1953

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1894
