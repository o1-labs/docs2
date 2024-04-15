[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpPlonkVerificationEvals

# Class: WasmFpPlonkVerificationEvals

[wasm](../modules/wasm.md).WasmFpPlonkVerificationEvals

## Table of contents

### Constructors

- [constructor](wasm.WasmFpPlonkVerificationEvals.md#constructor)

### Properties

- [coefficients\_comm](wasm.WasmFpPlonkVerificationEvals.md#coefficients_comm)
- [complete\_add\_comm](wasm.WasmFpPlonkVerificationEvals.md#complete_add_comm)
- [emul\_comm](wasm.WasmFpPlonkVerificationEvals.md#emul_comm)
- [endomul\_scalar\_comm](wasm.WasmFpPlonkVerificationEvals.md#endomul_scalar_comm)
- [foreign\_field\_add\_comm](wasm.WasmFpPlonkVerificationEvals.md#foreign_field_add_comm)
- [foreign\_field\_mul\_comm](wasm.WasmFpPlonkVerificationEvals.md#foreign_field_mul_comm)
- [generic\_comm](wasm.WasmFpPlonkVerificationEvals.md#generic_comm)
- [mul\_comm](wasm.WasmFpPlonkVerificationEvals.md#mul_comm)
- [psm\_comm](wasm.WasmFpPlonkVerificationEvals.md#psm_comm)
- [range\_check0\_comm](wasm.WasmFpPlonkVerificationEvals.md#range_check0_comm)
- [range\_check1\_comm](wasm.WasmFpPlonkVerificationEvals.md#range_check1_comm)
- [rot\_comm](wasm.WasmFpPlonkVerificationEvals.md#rot_comm)
- [sigma\_comm](wasm.WasmFpPlonkVerificationEvals.md#sigma_comm)
- [xor\_comm](wasm.WasmFpPlonkVerificationEvals.md#xor_comm)

### Methods

- [free](wasm.WasmFpPlonkVerificationEvals.md#free)

## Constructors

### constructor

• **new WasmFpPlonkVerificationEvals**(`sigma_comm`, `coefficients_comm`, `generic_comm`, `psm_comm`, `complete_add_comm`, `mul_comm`, `emul_comm`, `endomul_scalar_comm`, `xor_comm?`, `range_check0_comm?`, `range_check1_comm?`, `foreign_field_add_comm?`, `foreign_field_mul_comm?`, `rot_comm?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma_comm` | `Uint32Array` |
| `coefficients_comm` | `Uint32Array` |
| `generic_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `psm_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `complete_add_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `mul_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `emul_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `endomul_scalar_comm` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `xor_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `range_check0_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `range_check1_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `foreign_field_add_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `foreign_field_mul_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |
| `rot_comm?` | [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1446

## Properties

### coefficients\_comm

• **coefficients\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1449

___

### complete\_add\_comm

• **complete\_add\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1452

___

### emul\_comm

• **emul\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1455

___

### endomul\_scalar\_comm

• **endomul\_scalar\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1458

___

### foreign\_field\_add\_comm

• `Optional` **foreign\_field\_add\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1461

___

### foreign\_field\_mul\_comm

• `Optional` **foreign\_field\_mul\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1464

___

### generic\_comm

• **generic\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1467

___

### mul\_comm

• **mul\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1470

___

### psm\_comm

• **psm\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1473

___

### range\_check0\_comm

• `Optional` **range\_check0\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1476

___

### range\_check1\_comm

• `Optional` **range\_check1\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1479

___

### rot\_comm

• `Optional` **rot\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1482

___

### sigma\_comm

• **sigma\_comm**: `Uint32Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1485

___

### xor\_comm

• `Optional` **xor\_comm**: [`WasmFpPolyComm`](wasm.WasmFpPolyComm.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1488

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1429
