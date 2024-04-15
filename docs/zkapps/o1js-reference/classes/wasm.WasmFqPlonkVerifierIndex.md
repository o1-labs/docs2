[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFqPlonkVerifierIndex

# Class: WasmFqPlonkVerifierIndex

[wasm](../modules/wasm.md).WasmFqPlonkVerifierIndex

## Table of contents

### Constructors

- [constructor](wasm.WasmFqPlonkVerifierIndex.md#constructor)

### Properties

- [domain](wasm.WasmFqPlonkVerifierIndex.md#domain)
- [evals](wasm.WasmFqPlonkVerifierIndex.md#evals)
- [lookup\_index](wasm.WasmFqPlonkVerifierIndex.md#lookup_index)
- [max\_poly\_size](wasm.WasmFqPlonkVerifierIndex.md#max_poly_size)
- [prev\_challenges](wasm.WasmFqPlonkVerifierIndex.md#prev_challenges)
- [public\_](wasm.WasmFqPlonkVerifierIndex.md#public_)
- [shifts](wasm.WasmFqPlonkVerifierIndex.md#shifts)
- [srs](wasm.WasmFqPlonkVerifierIndex.md#srs)

### Methods

- [free](wasm.WasmFqPlonkVerifierIndex.md#free)

## Constructors

### constructor

• **new WasmFqPlonkVerifierIndex**(`domain`, `max_poly_size`, `public_`, `prev_challenges`, `srs`, `evals`, `shifts`, `lookup_index?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`WasmFqDomain`](wasm.WasmFqDomain.md) |
| `max_poly_size` | `number` |
| `public_` | `number` |
| `prev_challenges` | `number` |
| `srs` | [`WasmFqSrs`](wasm.WasmFqSrs.md) |
| `evals` | [`WasmFqPlonkVerificationEvals`](wasm.WasmFqPlonkVerificationEvals.md) |
| `shifts` | [`WasmFqShifts`](wasm.WasmFqShifts.md) |
| `lookup_index?` | [`WasmFqLookupVerifierIndex`](wasm.WasmFqLookupVerifierIndex.md) |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1969

## Properties

### domain

• **domain**: [`WasmFqDomain`](wasm.WasmFqDomain.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1972

___

### evals

• **evals**: [`WasmFqPlonkVerificationEvals`](wasm.WasmFqPlonkVerificationEvals.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1975

___

### lookup\_index

• `Optional` **lookup\_index**: [`WasmFqLookupVerifierIndex`](wasm.WasmFqLookupVerifierIndex.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1978

___

### max\_poly\_size

• **max\_poly\_size**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1981

___

### prev\_challenges

• **prev\_challenges**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1984

___

### public\_

• **public\_**: `number`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1987

___

### shifts

• **shifts**: [`WasmFqShifts`](wasm.WasmFqShifts.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1990

___

### srs

• **srs**: [`WasmFqSrs`](wasm.WasmFqSrs.md)

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1993

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1958
