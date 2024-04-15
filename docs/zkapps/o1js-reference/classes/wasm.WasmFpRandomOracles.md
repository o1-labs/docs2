[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / WasmFpRandomOracles

# Class: WasmFpRandomOracles

[wasm](../modules/wasm.md).WasmFpRandomOracles

## Table of contents

### Constructors

- [constructor](wasm.WasmFpRandomOracles.md#constructor)

### Properties

- [alpha](wasm.WasmFpRandomOracles.md#alpha)
- [alpha\_chal](wasm.WasmFpRandomOracles.md#alpha_chal)
- [beta](wasm.WasmFpRandomOracles.md#beta)
- [gamma](wasm.WasmFpRandomOracles.md#gamma)
- [joint\_combiner](wasm.WasmFpRandomOracles.md#joint_combiner)
- [joint\_combiner\_chal](wasm.WasmFpRandomOracles.md#joint_combiner_chal)
- [u](wasm.WasmFpRandomOracles.md#u)
- [u\_chal](wasm.WasmFpRandomOracles.md#u_chal)
- [v](wasm.WasmFpRandomOracles.md#v)
- [v\_chal](wasm.WasmFpRandomOracles.md#v_chal)
- [zeta](wasm.WasmFpRandomOracles.md#zeta)
- [zeta\_chal](wasm.WasmFpRandomOracles.md#zeta_chal)

### Methods

- [free](wasm.WasmFpRandomOracles.md#free)

## Constructors

### constructor

• **new WasmFpRandomOracles**(`joint_combiner_chal`, `joint_combiner`, `beta`, `gamma`, `alpha_chal`, `alpha`, `zeta`, `v`, `u`, `zeta_chal`, `v_chal`, `u_chal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `joint_combiner_chal` | `undefined` \| `Uint8Array` |
| `joint_combiner` | `undefined` \| `Uint8Array` |
| `beta` | `Uint8Array` |
| `gamma` | `Uint8Array` |
| `alpha_chal` | `Uint8Array` |
| `alpha` | `Uint8Array` |
| `zeta` | `Uint8Array` |
| `v` | `Uint8Array` |
| `u` | `Uint8Array` |
| `zeta_chal` | `Uint8Array` |
| `v_chal` | `Uint8Array` |
| `u_chal` | `Uint8Array` |

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1628

## Properties

### alpha

• **alpha**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1631

___

### alpha\_chal

• **alpha\_chal**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1634

___

### beta

• **beta**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1637

___

### gamma

• **gamma**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1640

___

### joint\_combiner

• `Optional` **joint\_combiner**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1643

___

### joint\_combiner\_chal

• `Optional` **joint\_combiner\_chal**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1646

___

### u

• **u**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1649

___

### u\_chal

• **u\_chal**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1652

___

### v

• **v**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1655

___

### v\_chal

• **v\_chal**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1658

___

### zeta

• **zeta**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1661

___

### zeta\_chal

• **zeta\_chal**: `Uint8Array`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1664

## Methods

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1613
