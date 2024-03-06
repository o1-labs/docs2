[o1js](../README.md) / [Modules](../modules.md) / ForeignCurve

# Class: ForeignCurve

## Table of contents

### Constructors

- [constructor](ForeignCurve.md#constructor)

### Properties

- [x](ForeignCurve.md#x)
- [y](ForeignCurve.md#y)
- [\_Bigint](ForeignCurve.md#_bigint)
- [\_Field](ForeignCurve.md#_field)
- [\_Scalar](ForeignCurve.md#_scalar)
- [\_provable](ForeignCurve.md#_provable)

### Accessors

- [Constructor](ForeignCurve.md#constructor-1)
- [modulus](ForeignCurve.md#modulus)
- [Bigint](ForeignCurve.md#bigint)
- [Field](ForeignCurve.md#field)
- [Scalar](ForeignCurve.md#scalar)
- [generator](ForeignCurve.md#generator)
- [modulus](ForeignCurve.md#modulus-1)
- [provable](ForeignCurve.md#provable)

### Methods

- [add](ForeignCurve.md#add)
- [addSafe](ForeignCurve.md#addsafe)
- [assertInSubgroup](ForeignCurve.md#assertinsubgroup)
- [assertOnCurve](ForeignCurve.md#assertoncurve)
- [double](ForeignCurve.md#double)
- [isConstant](ForeignCurve.md#isconstant)
- [negate](ForeignCurve.md#negate)
- [scale](ForeignCurve.md#scale)
- [toBigint](ForeignCurve.md#tobigint)
- [assertInSubgroup](ForeignCurve.md#assertinsubgroup-1)
- [assertOnCurve](ForeignCurve.md#assertoncurve-1)
- [check](ForeignCurve.md#check)
- [from](ForeignCurve.md#from)

## Constructors

### constructor

• **new ForeignCurve**(`g`)

Create a new [ForeignCurve](ForeignCurve.md) from an object representing the (affine) x and y coordinates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | `Object` |
| `g.x` | `number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md) |
| `g.y` | `number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md) |

**`Example`**

```ts
let x = new ForeignCurve({ x: 1n, y: 1n });
```

**Important**: By design, there is no way for a `ForeignCurve` to represent the zero point.

**Warning**: This fails for a constant input which does not represent an actual point on the curve.

#### Defined in

[lib/foreign-curve.ts:45](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L45)

## Properties

### x

• **x**: [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:30](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L30)

___

### y

• **y**: [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:31](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L31)

___

### \_Bigint

▪ `Static` `Optional` **\_Bigint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Field` | \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } |
| `Field.M` | `bigint` |
| `Field.inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `Field.modulus` | `bigint` |
| `Field.sizeInBits` | `number` |
| `Field.t` | `bigint` |
| `Field.twoadicRoot` | `bigint` |
| `Field.add` | [object Object] |
| `Field.div` | [object Object] |
| `Field.dot` | [object Object] |
| `Field.equal` | [object Object] |
| `Field.fromBigint` | [object Object] |
| `Field.fromNumber` | [object Object] |
| `Field.isEven` | [object Object] |
| `Field.isSquare` | [object Object] |
| `Field.leftShift` | [object Object] |
| `Field.mod` | [object Object] |
| `Field.mul` | [object Object] |
| `Field.negate` | [object Object] |
| `Field.not` | [object Object] |
| `Field.power` | [object Object] |
| `Field.random` | [object Object] |
| `Field.rightShift` | [object Object] |
| `Field.rot` | [object Object] |
| `Field.sqrt` | [object Object] |
| `Field.square` | [object Object] |
| `Field.sub` | [object Object] |
| `Scalar` | \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } |
| `Scalar.M` | `bigint` |
| `Scalar.inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `Scalar.modulus` | `bigint` |
| `Scalar.sizeInBits` | `number` |
| `Scalar.t` | `bigint` |
| `Scalar.twoadicRoot` | `bigint` |
| `Scalar.add` | [object Object] |
| `Scalar.div` | [object Object] |
| `Scalar.dot` | [object Object] |
| `Scalar.equal` | [object Object] |
| `Scalar.fromBigint` | [object Object] |
| `Scalar.fromNumber` | [object Object] |
| `Scalar.isEven` | [object Object] |
| `Scalar.isSquare` | [object Object] |
| `Scalar.leftShift` | [object Object] |
| `Scalar.mod` | [object Object] |
| `Scalar.mul` | [object Object] |
| `Scalar.negate` | [object Object] |
| `Scalar.not` | [object Object] |
| `Scalar.power` | [object Object] |
| `Scalar.random` | [object Object] |
| `Scalar.rightShift` | [object Object] |
| `Scalar.rot` | [object Object] |
| `Scalar.sqrt` | [object Object] |
| `Scalar.square` | [object Object] |
| `Scalar.sub` | [object Object] |
| `a` | `bigint` |
| `b` | `bigint` |
| `cofactor` | `undefined` \| `bigint` |
| `hasCofactor` | `boolean` |
| `hasEndomorphism` | `boolean` |
| `modulus` | `bigint` |
| `name` | `string` |
| `one` | \{ `infinity`: `boolean` = false; `x`: `bigint` ; `y`: `bigint`  } |
| `one.infinity` | `boolean` |
| `one.x` | `bigint` |
| `one.y` | `bigint` |
| `order` | `bigint` |
| `zero` | `GroupAffine` |
| `get Endo()` | \{ `base`: `bigint` = endoBase; `decomposeMaxBits`: `number` = glvData.maxBits; `scalar`: `bigint` = endoScalar; `decompose`: (`s`: `bigint`) => readonly [\{ `abs`: `bigint` ; `isNegative`: `boolean` ; `value`: `bigint` = s0 }, \{ `abs`: `bigint` ; `isNegative`: `boolean` ; `value`: `bigint` = s1 }] ; `endomorphism`: (`P`: `GroupAffine`) => \{ `x`: `bigint` ; `y`: `bigint` = P.y } ; `scale`: (`g`: `GroupAffine`, `s`: `bigint`) => `GroupAffine` ; `scaleProjective`: (`g`: `GroupProjective`, `s`: `bigint`) => \{ `x`: `bigint` ; `y`: `bigint` ; `z`: `bigint`  }  } |
| `add` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine` |
| `double` | (`g`: `GroupAffine`) => `GroupAffine` |
| `equal` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `boolean` |
| `from` | (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` |
| `fromNonzero` | (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` |
| `isInSubgroup` | (`g`: `GroupAffine`) => `boolean` |
| `isOnCurve` | (`g`: `GroupAffine`) => `boolean` |
| `negate` | (`g`: `GroupAffine`) => `GroupAffine` |
| `scale` | (`g`: `GroupAffine`, `s`: `bigint` \| `boolean`[]) => `GroupAffine` |
| `sub` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine` |

#### Defined in

[lib/foreign-curve.ts:240](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L240)

___

### \_Field

▪ `Static` `Optional` **\_Field**: typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:241](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L241)

___

### \_Scalar

▪ `Static` `Optional` **\_Scalar**: typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:242](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L242)

___

### \_provable

▪ `Static` `Optional` **\_provable**: `ProvablePureExtended`\<[`ForeignCurve`](ForeignCurve.md), \{ `x`: `string` ; `y`: `string`  }\>

#### Defined in

[lib/foreign-curve.ts:243](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L243)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`ForeignCurve`](ForeignCurve.md)

#### Returns

typeof [`ForeignCurve`](ForeignCurve.md)

#### Defined in

[lib/foreign-curve.ts:237](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L237)

___

### modulus

• `get` **modulus**(): `bigint`

The size of the curve's base field.

#### Returns

`bigint`

#### Defined in

[lib/foreign-curve.ts:81](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L81)

___

### Bigint

• `Static` `get` **Bigint**(): `Object`

Curve arithmetic on JS bigints.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Field` | \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } |
| `Field.M` | `bigint` |
| `Field.inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `Field.modulus` | `bigint` |
| `Field.sizeInBits` | `number` |
| `Field.t` | `bigint` |
| `Field.twoadicRoot` | `bigint` |
| `Field.add` | [object Object] |
| `Field.div` | [object Object] |
| `Field.dot` | [object Object] |
| `Field.equal` | [object Object] |
| `Field.fromBigint` | [object Object] |
| `Field.fromNumber` | [object Object] |
| `Field.isEven` | [object Object] |
| `Field.isSquare` | [object Object] |
| `Field.leftShift` | [object Object] |
| `Field.mod` | [object Object] |
| `Field.mul` | [object Object] |
| `Field.negate` | [object Object] |
| `Field.not` | [object Object] |
| `Field.power` | [object Object] |
| `Field.random` | [object Object] |
| `Field.rightShift` | [object Object] |
| `Field.rot` | [object Object] |
| `Field.sqrt` | [object Object] |
| `Field.square` | [object Object] |
| `Field.sub` | [object Object] |
| `Scalar` | \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } |
| `Scalar.M` | `bigint` |
| `Scalar.inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `Scalar.modulus` | `bigint` |
| `Scalar.sizeInBits` | `number` |
| `Scalar.t` | `bigint` |
| `Scalar.twoadicRoot` | `bigint` |
| `Scalar.add` | [object Object] |
| `Scalar.div` | [object Object] |
| `Scalar.dot` | [object Object] |
| `Scalar.equal` | [object Object] |
| `Scalar.fromBigint` | [object Object] |
| `Scalar.fromNumber` | [object Object] |
| `Scalar.isEven` | [object Object] |
| `Scalar.isSquare` | [object Object] |
| `Scalar.leftShift` | [object Object] |
| `Scalar.mod` | [object Object] |
| `Scalar.mul` | [object Object] |
| `Scalar.negate` | [object Object] |
| `Scalar.not` | [object Object] |
| `Scalar.power` | [object Object] |
| `Scalar.random` | [object Object] |
| `Scalar.rightShift` | [object Object] |
| `Scalar.rot` | [object Object] |
| `Scalar.sqrt` | [object Object] |
| `Scalar.square` | [object Object] |
| `Scalar.sub` | [object Object] |
| `a` | `bigint` |
| `b` | `bigint` |
| `cofactor` | `undefined` \| `bigint` |
| `hasCofactor` | `boolean` |
| `hasEndomorphism` | `boolean` |
| `modulus` | `bigint` |
| `name` | `string` |
| `one` | \{ `infinity`: `boolean` = false; `x`: `bigint` ; `y`: `bigint`  } |
| `one.infinity` | `boolean` |
| `one.x` | `bigint` |
| `one.y` | `bigint` |
| `order` | `bigint` |
| `zero` | `GroupAffine` |
| `get Endo()` | \{ `base`: `bigint` = endoBase; `decomposeMaxBits`: `number` = glvData.maxBits; `scalar`: `bigint` = endoScalar; `decompose`: (`s`: `bigint`) => readonly [\{ `abs`: `bigint` ; `isNegative`: `boolean` ; `value`: `bigint` = s0 }, \{ `abs`: `bigint` ; `isNegative`: `boolean` ; `value`: `bigint` = s1 }] ; `endomorphism`: (`P`: `GroupAffine`) => \{ `x`: `bigint` ; `y`: `bigint` = P.y } ; `scale`: (`g`: `GroupAffine`, `s`: `bigint`) => `GroupAffine` ; `scaleProjective`: (`g`: `GroupProjective`, `s`: `bigint`) => \{ `x`: `bigint` ; `y`: `bigint` ; `z`: `bigint`  }  } |
| `add` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine` |
| `double` | (`g`: `GroupAffine`) => `GroupAffine` |
| `equal` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `boolean` |
| `from` | (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` |
| `fromNonzero` | (`g`: \{ `x`: `bigint` ; `y`: `bigint`  }) => `GroupAffine` |
| `isInSubgroup` | (`g`: `GroupAffine`) => `boolean` |
| `isOnCurve` | (`g`: `GroupAffine`) => `boolean` |
| `negate` | (`g`: `GroupAffine`) => `GroupAffine` |
| `scale` | (`g`: `GroupAffine`, `s`: `bigint` \| `boolean`[]) => `GroupAffine` |
| `sub` | (`g`: `GroupAffine`, `h`: `GroupAffine`) => `GroupAffine` |

#### Defined in

[lib/foreign-curve.ts:251](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L251)

___

### Field

• `Static` `get` **Field**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

The base field of this curve as a [ForeignField](ForeignField.md).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:258](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L258)

___

### Scalar

• `Static` `get` **Scalar**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

The scalar field of this curve as a [ForeignField](ForeignField.md).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-curve.ts:265](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L265)

___

### generator

• `Static` `get` **generator**(): [`ForeignCurve`](ForeignCurve.md)

The constant generator point.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Defined in

[lib/foreign-curve.ts:69](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L69)

___

### modulus

• `Static` `get` **modulus**(): `bigint`

The size of the curve's base field.

#### Returns

`bigint`

#### Defined in

[lib/foreign-curve.ts:75](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L75)

___

### provable

• `Static` `get` **provable**(): `ProvablePureExtended`\<[`ForeignCurve`](ForeignCurve.md), \{ `x`: `string` ; `y`: `string`  }\>

`Provable<ForeignCurve>`

#### Returns

`ProvablePureExtended`\<[`ForeignCurve`](ForeignCurve.md), \{ `x`: `string` ; `y`: `string`  }\>

#### Defined in

[lib/foreign-curve.ts:272](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L272)

## Methods

### add

▸ **add**(`h`): [`ForeignCurve`](ForeignCurve.md)

Elliptic curve addition.

```ts
let r = p.add(q); // r = p + q
```

**Important**: this is _incomplete addition_ and does not handle the degenerate cases:
- Inputs are equal, `g = h` (where you would use [double](ForeignCurve.md#double)).
  In this case, the result of this method is garbage and can be manipulated arbitrarily by a malicious prover.
- Inputs are inverses of each other, `g = -h`, so that the result would be the zero point.
  In this case, the proof fails.

If you want guaranteed soundness regardless of the input, use [addSafe](ForeignCurve.md#addsafe) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | [`ForeignCurve`](ForeignCurve.md) \| `FlexiblePoint` |

#### Returns

[`ForeignCurve`](ForeignCurve.md)

**`Throws`**

if the inputs are inverses of each other.

#### Defined in

[lib/foreign-curve.ts:121](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L121)

___

### addSafe

▸ **addSafe**(`h`): [`ForeignCurve`](ForeignCurve.md)

Safe elliptic curve addition.

This is the same as [add](ForeignCurve.md#add), but additionally proves that the inputs are not equal.
Therefore, the method is guaranteed to either fail or return a valid addition result.

**Beware**: this is more expensive than [add](ForeignCurve.md#add), and is still incomplete in that
it does not succeed on equal or inverse inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | [`ForeignCurve`](ForeignCurve.md) \| `FlexiblePoint` |

#### Returns

[`ForeignCurve`](ForeignCurve.md)

**`Throws`**

if the inputs are equal or inverses of each other.

#### Defined in

[lib/foreign-curve.ts:139](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L139)

___

### assertInSubgroup

▸ **assertInSubgroup**(): `void`

Assert that this point lies in the subgroup defined by `order*P = 0`.

Note: this is a no-op if the curve has cofactor equal to 1. Otherwise
it performs the full scalar multiplication `order*P` and is expensive.

#### Returns

`void`

#### Defined in

[lib/foreign-curve.ts:219](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L219)

___

### assertOnCurve

▸ **assertOnCurve**(): `void`

Assert that this point lies on the elliptic curve, which means it satisfies the equation
`y^2 = x^3 + ax + b`

#### Returns

`void`

#### Defined in

[lib/foreign-curve.ts:203](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L203)

___

### double

▸ **double**(): [`ForeignCurve`](ForeignCurve.md)

Elliptic curve doubling.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

**`Example`**

```ts
let r = p.double(); // r = 2 * p
```

#### Defined in

[lib/foreign-curve.ts:158](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L158)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this curve point is constant.

See [FieldVar](../modules.md#fieldvar) to understand constants vs variables.

#### Returns

`boolean`

#### Defined in

[lib/foreign-curve.ts:90](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L90)

___

### negate

▸ **negate**(): [`ForeignCurve`](ForeignCurve.md)

Elliptic curve negation.

#### Returns

[`ForeignCurve`](ForeignCurve.md)

**`Example`**

```ts
let r = p.negate(); // r = -p
```

#### Defined in

[lib/foreign-curve.ts:172](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L172)

___

### scale

▸ **scale**(`scalar`): [`ForeignCurve`](ForeignCurve.md)

Elliptic curve scalar multiplication, where the scalar is represented as a [ForeignField](ForeignField.md) element.

**Important**: this proves that the result of the scalar multiplication is not the zero point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` \| `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Returns

[`ForeignCurve`](ForeignCurve.md)

**`Throws`**

if the scalar multiplication results in the zero point; for example, if the scalar is zero.

**`Example`**

```ts
let r = p.scale(s); // r = s * p
```

#### Defined in

[lib/foreign-curve.ts:188](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L188)

___

### toBigint

▸ **toBigint**(): `GroupAffine`

Convert this curve point to a point with bigint coordinates.

#### Returns

`GroupAffine`

#### Defined in

[lib/foreign-curve.ts:97](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L97)

___

### assertInSubgroup

▸ `Static` **assertInSubgroup**(`g`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`ForeignCurve`](ForeignCurve.md) |

#### Returns

`void`

#### Defined in

[lib/foreign-curve.ts:207](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L207)

___

### assertOnCurve

▸ `Static` **assertOnCurve**(`g`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`ForeignCurve`](ForeignCurve.md) |

#### Returns

`void`

#### Defined in

[lib/foreign-curve.ts:195](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L195)

___

### check

▸ `Static` **check**(`g`): `void`

Check that this is a valid element of the target subgroup of the curve:
- Check that the coordinates are valid field elements
- Use [()](ForeignCurve.md#assertoncurve-1) to check that the point lies on the curve
- If the curve has cofactor unequal to 1, use [()](ForeignCurve.md#assertinsubgroup-1).

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`ForeignCurve`](ForeignCurve.md) |

#### Returns

`void`

#### Defined in

[lib/foreign-curve.ts:229](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L229)

___

### from

▸ `Static` **from**(`g`): [`ForeignCurve`](ForeignCurve.md)

Coerce the input to a [ForeignCurve](ForeignCurve.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`ForeignCurve`](ForeignCurve.md) \| `FlexiblePoint` |

#### Returns

[`ForeignCurve`](ForeignCurve.md)

#### Defined in

[lib/foreign-curve.ts:61](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/foreign-curve.ts#L61)
