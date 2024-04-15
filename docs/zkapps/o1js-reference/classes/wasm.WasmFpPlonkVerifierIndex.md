[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpPlonkVerifierIndex

# Class: WasmFpPlonkVerifierIndex

[wasm](../modules/wasm.md).WasmFpPlonkVerifierIndex

## Table of contents

### Constructors

- [constructor](wasm.WasmFpPlonkVerifierIndex.md#constructor)

### Properties

- [domain](wasm.WasmFpPlonkVerifierIndex.md#domain)
- [evals](wasm.WasmFpPlonkVerifierIndex.md#evals)
- [lookup\_index](wasm.WasmFpPlonkVerifierIndex.md#lookup_index)
- [max\_poly\_size](wasm.WasmFpPlonkVerifierIndex.md#max_poly_size)
- [prev\_challenges](wasm.WasmFpPlonkVerifierIndex.md#prev_challenges)
- [public\_](wasm.WasmFpPlonkVerifierIndex.md#public_)
- [shifts](wasm.WasmFpPlonkVerifierIndex.md#shifts)
- [srs](wasm.WasmFpPlonkVerifierIndex.md#srs)

### Methods

- [free](wasm.WasmFpPlonkVerifierIndex.md#free)

## Constructors

### constructor

• **new WasmFpPlonkVerifierIndex**(`domain`, `max_poly_size`, `public_`, `prev_challenges`, `srs`, `evals`, `shifts`, `lookup_index?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`WasmFpDomain`](wasm.WasmFpDomain.md) |
| `max_poly_size` | `number` |
| `public_` | `number` |
| `prev_challenges` | `number` |
| `srs` | [`WasmFpSrs`](wasm.WasmFpSrs.md) |
| `evals` | [`WasmFpPlonkVerificationEvals`](wasm.WasmFpPlonkVerificationEvals.md) |
| `shifts` | [`WasmFpShifts`](wasm.WasmFpShifts.md) |
| `lookup_index?` | [`WasmFpLookupVerifierIndex`](wasm.WasmFpLookupVerifierIndex.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1504

## Properties

### domain

• **domain**: [`WasmFpDomain`](wasm.WasmFpDomain.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1507

___

### evals

• **evals**: [`WasmFpPlonkVerificationEvals`](wasm.WasmFpPlonkVerificationEvals.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1510

___

### lookup\_index

• `Optional` **lookup\_index**: [`WasmFpLookupVerifierIndex`](wasm.WasmFpLookupVerifierIndex.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1513

___

### max\_poly\_size

• **max\_poly\_size**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1516

___

### prev\_challenges

• **prev\_challenges**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1519

___

### public\_

• **public\_**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1522

___

### shifts

• **shifts**: [`WasmFpShifts`](wasm.WasmFpShifts.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1525

___

### srs

• **srs**: [`WasmFpSrs`](wasm.WasmFpSrs.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1528

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1493
