[o1js](../README.md) / [Modules](../modules.md) / [wasm](../modules/wasm.md) / GateType

# Enumeration: GateType

[wasm](../modules/wasm.md).GateType

The different types of gates the system supports.
Note that all the gates are mutually exclusive:
they cannot be used at the same time on single row.
If we were ever to support this feature, we would have to make sure
not to re-use powers of alpha across constraints.

## Table of contents

### Enumeration Members

- [CairoClaim](wasm.GateType.md#cairoclaim)
- [CairoFlags](wasm.GateType.md#cairoflags)
- [CairoInstruction](wasm.GateType.md#cairoinstruction)
- [CairoTransition](wasm.GateType.md#cairotransition)
- [CompleteAdd](wasm.GateType.md#completeadd)
- [EndoMul](wasm.GateType.md#endomul)
- [EndoMulScalar](wasm.GateType.md#endomulscalar)
- [ForeignFieldAdd](wasm.GateType.md#foreignfieldadd)
- [ForeignFieldMul](wasm.GateType.md#foreignfieldmul)
- [Generic](wasm.GateType.md#generic)
- [Lookup](wasm.GateType.md#lookup)
- [Poseidon](wasm.GateType.md#poseidon)
- [RangeCheck0](wasm.GateType.md#rangecheck0)
- [RangeCheck1](wasm.GateType.md#rangecheck1)
- [Rot64](wasm.GateType.md#rot64)
- [VarBaseMul](wasm.GateType.md#varbasemul)
- [Xor16](wasm.GateType.md#xor16)
- [Zero](wasm.GateType.md#zero)

## Enumeration Members

### CairoClaim

• **CairoClaim** = ``8``

Cairo

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1150

___

### CairoFlags

• **CairoFlags** = ``10``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1152

___

### CairoInstruction

• **CairoInstruction** = ``9``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1151

___

### CairoTransition

• **CairoTransition** = ``11``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1153

___

### CompleteAdd

• **CompleteAdd** = ``3``

Complete EC addition in Affine form

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1133

___

### EndoMul

• **EndoMul** = ``5``

EC variable base scalar multiplication with group endomorphim optimization

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1141

___

### EndoMulScalar

• **EndoMulScalar** = ``6``

Gate for computing the scalar corresponding to an endoscaling

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1145

___

### ForeignFieldAdd

• **ForeignFieldAdd** = ``14``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1159

___

### ForeignFieldMul

• **ForeignFieldMul** = ``15``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1160

___

### Generic

• **Generic** = ``1``

Generic arithmetic gate

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1125

___

### Lookup

• **Lookup** = ``7``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1146

___

### Poseidon

• **Poseidon** = ``2``

Poseidon permutation gate

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1129

___

### RangeCheck0

• **RangeCheck0** = ``12``

Range check

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1157

___

### RangeCheck1

• **RangeCheck1** = ``13``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1158

___

### Rot64

• **Rot64** = ``17``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1162

___

### VarBaseMul

• **VarBaseMul** = ``4``

EC variable base scalar multiplication

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1137

___

### Xor16

• **Xor16** = ``16``

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1161

___

### Zero

• **Zero** = ``0``

Zero gate

#### Defined in

bindings/compiled/node_bindings/plonk_wasm.d.cts:1121
