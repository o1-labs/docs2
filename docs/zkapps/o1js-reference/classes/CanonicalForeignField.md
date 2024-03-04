[o1js](../README.md) / [Modules](../modules.md) / CanonicalForeignField

# Class: CanonicalForeignField

## Hierarchy

- `ForeignFieldWithMul`

  ↳ **`CanonicalForeignField`**

## Table of contents

### Constructors

- [constructor](CanonicalForeignField.md#constructor)

### Properties

- [type](CanonicalForeignField.md#type)
- [value](CanonicalForeignField.md#value)
- [\_Bigint](CanonicalForeignField.md#_bigint)
- [\_modulus](CanonicalForeignField.md#_modulus)
- [\_provable](CanonicalForeignField.md#_provable)
- [\_variants](CanonicalForeignField.md#_variants)

### Accessors

- [Constructor](CanonicalForeignField.md#constructor-1)
- [modulus](CanonicalForeignField.md#modulus)
- [AlmostReduced](CanonicalForeignField.md#almostreduced)
- [Bigint](CanonicalForeignField.md#bigint)
- [Canonical](CanonicalForeignField.md#canonical)
- [Unreduced](CanonicalForeignField.md#unreduced)
- [modulus](CanonicalForeignField.md#modulus-1)
- [provable](CanonicalForeignField.md#provable)
- [sizeInBits](CanonicalForeignField.md#sizeinbits)

### Methods

- [add](CanonicalForeignField.md#add)
- [assertAlmostReduced](CanonicalForeignField.md#assertalmostreduced)
- [assertCanonical](CanonicalForeignField.md#assertcanonical)
- [assertEquals](CanonicalForeignField.md#assertequals)
- [assertLessThan](CanonicalForeignField.md#assertlessthan)
- [div](CanonicalForeignField.md#div)
- [equals](CanonicalForeignField.md#equals)
- [inv](CanonicalForeignField.md#inv)
- [isConstant](CanonicalForeignField.md#isconstant)
- [mul](CanonicalForeignField.md#mul)
- [neg](CanonicalForeignField.md#neg)
- [sub](CanonicalForeignField.md#sub)
- [toBigInt](CanonicalForeignField.md#tobigint)
- [toBits](CanonicalForeignField.md#tobits)
- [toConstant](CanonicalForeignField.md#toconstant)
- [toFields](CanonicalForeignField.md#tofields)
- [assertAlmostReduced](CanonicalForeignField.md#assertalmostreduced-1)
- [check](CanonicalForeignField.md#check)
- [from](CanonicalForeignField.md#from)
- [fromBits](CanonicalForeignField.md#frombits)
- [random](CanonicalForeignField.md#random)
- [sum](CanonicalForeignField.md#sum)
- [unsafeFrom](CanonicalForeignField.md#unsafefrom)

## Constructors

### constructor

• **new CanonicalForeignField**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Field3` \| [`CanonicalForeignField`](CanonicalForeignField.md) |

#### Overrides

ForeignFieldWithMul.constructor

#### Defined in

[lib/foreign-field.ts:514](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L514)

## Properties

### type

• **type**: ``"FullyReduced"``

#### Defined in

[lib/foreign-field.ts:512](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L512)

___

### value

• **value**: `Field3`

The internal representation of a foreign field element, as a tuple of 3 limbs.

#### Inherited from

ForeignFieldWithMul.value

#### Defined in

[lib/foreign-field.ts:50](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L50)

___

### \_Bigint

▪ `Static` **\_Bigint**: `undefined` \| \{ `M`: `bigint` = twoadicity; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } = `undefined`

#### Inherited from

ForeignFieldWithMul.\_Bigint

#### Defined in

[lib/foreign-field.ts:28](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L28)

___

### \_modulus

▪ `Static` **\_modulus**: `undefined` \| `bigint` = `undefined`

#### Inherited from

ForeignFieldWithMul.\_modulus

#### Defined in

[lib/foreign-field.ts:29](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L29)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| `ProvablePureExtended`\<[`CanonicalForeignField`](CanonicalForeignField.md), `string`\> = `undefined`

#### Overrides

ForeignFieldWithMul.\_provable

#### Defined in

[lib/foreign-field.ts:518](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L518)

___

### \_variants

▪ `Static` **\_variants**: `undefined` \| \{ `almostReduced`: typeof [`AlmostForeignField`](AlmostForeignField.md) ; `canonical`: typeof [`CanonicalForeignField`](CanonicalForeignField.md) ; `unreduced`: typeof `UnreducedForeignField`  } = `undefined`

Sibling classes that represent different ranges of field elements.

#### Inherited from

ForeignFieldWithMul.\_variants

#### Defined in

[lib/foreign-field.ts:59](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L59)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`ForeignField`](ForeignField.md)

#### Returns

typeof [`ForeignField`](ForeignField.md)

#### Inherited from

ForeignFieldWithMul.Constructor

#### Defined in

[lib/foreign-field.ts:52](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L52)

___

### modulus

• `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.modulus

#### Defined in

[lib/foreign-field.ts:40](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L40)

___

### AlmostReduced

• `Static` `get` **AlmostReduced**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

Constructor for field elements that are "almost reduced", i.e. lie in the range [0, 2^ceil(log2(p))).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.AlmostReduced

#### Defined in

[lib/foreign-field.ts:77](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L77)

___

### Bigint

• `Static` `get` **Bigint**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `M` | `bigint` |
| `modulus` | `bigint` |
| `sizeInBits` | `number` |
| `t` | `bigint` |
| `twoadicRoot` | `bigint` |
| `add` | (`x`: `bigint`, `y`: `bigint`) => `bigint` |
| `div` | (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` |
| `dot` | (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` |
| `equal` | (`x`: `bigint`, `y`: `bigint`) => `boolean` |
| `fromBigint` | (`x`: `bigint`) => `bigint` |
| `fromNumber` | (`x`: `number`) => `bigint` |
| `inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `isEven` | (`x`: `bigint`) => `boolean` |
| `isSquare` | (`x`: `bigint`) => `boolean` |
| `leftShift` | (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` |
| `mod` | (`x`: `bigint`) => `bigint` |
| `mul` | (`x`: `bigint`, `y`: `bigint`) => `bigint` |
| `negate` | (`x`: `bigint`) => `bigint` |
| `not` | (`x`: `bigint`, `bits`: `number`) => `bigint` |
| `power` | (`x`: `bigint`, `n`: `bigint`) => `bigint` |
| `random` | () => `bigint` |
| `rightShift` | (`x`: `bigint`, `bits`: `number`) => `bigint` |
| `rot` | (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` |
| `sqrt` | (`x`: `bigint`) => `undefined` \| `bigint` |
| `square` | (`x`: `bigint`) => `bigint` |
| `sub` | (`x`: `bigint`, `y`: `bigint`) => `bigint` |

#### Inherited from

ForeignFieldWithMul.Bigint

#### Defined in

[lib/foreign-field.ts:32](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L32)

___

### Canonical

• `Static` `get` **Canonical**(): typeof [`CanonicalForeignField`](CanonicalForeignField.md)

Constructor for field elements that are fully reduced, i.e. lie in the range [0, p).

#### Returns

typeof [`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

ForeignFieldWithMul.Canonical

#### Defined in

[lib/foreign-field.ts:84](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L84)

___

### Unreduced

• `Static` `get` **Unreduced**(): typeof `UnreducedForeignField`

Constructor for unreduced field elements.

#### Returns

typeof `UnreducedForeignField`

#### Inherited from

ForeignFieldWithMul.Unreduced

#### Defined in

[lib/foreign-field.ts:70](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L70)

___

### modulus

• `Static` `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.modulus

#### Defined in

[lib/foreign-field.ts:36](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L36)

___

### provable

• `Static` `get` **provable**(): `ProvablePureExtended`\<[`CanonicalForeignField`](CanonicalForeignField.md), `string`\>

#### Returns

`ProvablePureExtended`\<[`CanonicalForeignField`](CanonicalForeignField.md), `string`\>

#### Overrides

ForeignFieldWithMul.provable

#### Defined in

[lib/foreign-field.ts:521](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L521)

___

### sizeInBits

• `Static` `get` **sizeInBits**(): `number`

#### Returns

`number`

#### Inherited from

ForeignFieldWithMul.sizeInBits

#### Defined in

[lib/foreign-field.ts:43](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L43)

## Methods

### add

▸ **add**(`y`): `UnreducedForeignField`

Finite field addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`UnreducedForeignField`

**`Example`**

```ts
x.add(2); // x + 2 mod p
```

#### Inherited from

ForeignFieldWithMul.add

#### Defined in

[lib/foreign-field.ts:208](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L208)

___

### assertAlmostReduced

▸ **assertAlmostReduced**(): [`AlmostForeignField`](AlmostForeignField.md)

Assert that this field element lies in the range [0, 2^k),
where k = ceil(log2(p)) and p is the foreign field modulus.

Returns the field element as a [AlmostForeignField](AlmostForeignField.md).

For a more efficient version of this for multiple field elements, see [assertAlmostReduced](ForeignField.md#assertalmostreduced-1).

Note: this does not ensure that the field elements is in the canonical range [0, p).
To assert that stronger property, there is [assertCanonical](ForeignField.md#assertcanonical).
You should typically use [assertAlmostReduced](ForeignField.md#assertalmostreduced-1) though, because it is cheaper to prove and sufficient for
ensuring validity of all our non-native field arithmetic methods.

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.assertAlmostReduced

#### Defined in

[lib/foreign-field.ts:163](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L163)

___

### assertCanonical

▸ **assertCanonical**(): [`CanonicalForeignField`](CanonicalForeignField.md)

Assert that this field element is fully reduced,
i.e. lies in the range [0, p), where p is the foreign field modulus.

Returns the field element as a [CanonicalForeignField](CanonicalForeignField.md).

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

ForeignFieldWithMul.assertCanonical

#### Defined in

[lib/foreign-field.ts:194](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L194)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): [`CanonicalForeignField`](CanonicalForeignField.md)

Assert equality with a ForeignField-like value

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`CanonicalForeignField`](CanonicalForeignField.md) |
| `message?` | `string` |

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

**`Example`**

```ts
x.assertEquals(0, "x is zero");
```

Since asserting equality can also serve as a range check,
this method returns `x` with the appropriate type:

**`Example`**

```ts
let xChecked = x.assertEquals(1, "x is 1");
xChecked satisfies CanonicalForeignField;
```

#### Inherited from

ForeignFieldWithMul.assertEquals

#### Defined in

[lib/foreign-field.ts:286](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L286)

▸ **assertEquals**(`y`, `message?`): [`AlmostForeignField`](AlmostForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`AlmostForeignField`](AlmostForeignField.md) |
| `message?` | `string` |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.assertEquals

#### Defined in

[lib/foreign-field.ts:290](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L290)

▸ **assertEquals**(`y`, `message?`): [`ForeignField`](ForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`ForeignField`](ForeignField.md) |
| `message?` | `string` |

#### Returns

[`ForeignField`](ForeignField.md)

#### Inherited from

ForeignFieldWithMul.assertEquals

#### Defined in

[lib/foreign-field.ts:291](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L291)

___

### assertLessThan

▸ **assertLessThan**(`c`, `message?`): `void`

Assert that this field element is less than a constant c: `x < c`.

The constant must satisfy `0 <= c < 2^264`, otherwise an error is thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `number` \| `bigint` |
| `message?` | `string` |

#### Returns

`void`

**`Example`**

```ts
x.assertLessThan(10);
```

#### Inherited from

ForeignFieldWithMul.assertLessThan

#### Defined in

[lib/foreign-field.ts:333](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L333)

___

### div

▸ **div**(`y`): [`AlmostForeignField`](AlmostForeignField.md)

Division in the finite field, i.e. `x*y^(-1) mod p` where `y^(-1)` is the finite field inverse.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

**`Example`**

```ts
let z = x.div(y); // x/y mod p
z.mul(y).assertEquals(x);
```

#### Inherited from

ForeignFieldWithMul.div

#### Defined in

[lib/foreign-field.ts:446](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L446)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Check equality with a ForeignField-like value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`CanonicalForeignField`](CanonicalForeignField.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
let isEqual = x.equals(y);
```

Note: This method only exists on canonical fields; on unreduced fields, it would be easy to
misuse, because not being exactly equal does not imply being unequal modulo p.

#### Defined in

[lib/foreign-field.ts:551](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L551)

___

### inv

▸ **inv**(): [`AlmostForeignField`](AlmostForeignField.md)

Multiplicative inverse in the finite field

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

**`Example`**

```ts
let z = x.inv(); // 1/x mod p
z.mul(x).assertEquals(1);
```

#### Inherited from

ForeignFieldWithMul.inv

#### Defined in

[lib/foreign-field.ts:432](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L432)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this field element is a constant.

See [FieldVar](../modules.md#fieldvar-1) to understand constants vs variables.

#### Returns

`boolean`

#### Inherited from

ForeignFieldWithMul.isConstant

#### Defined in

[lib/foreign-field.ts:126](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L126)

___

### mul

▸ **mul**(`y`): `UnreducedForeignField`

Finite field multiplication

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Returns

`UnreducedForeignField`

**`Example`**

```ts
x.mul(y); // x*y mod p
```

#### Inherited from

ForeignFieldWithMul.mul

#### Defined in

[lib/foreign-field.ts:418](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L418)

___

### neg

▸ **neg**(): [`AlmostForeignField`](AlmostForeignField.md)

Finite field negation

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

**`Example`**

```ts
x.neg(); // -x mod p = p - x
```

#### Inherited from

ForeignFieldWithMul.neg

#### Defined in

[lib/foreign-field.ts:219](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L219)

___

### sub

▸ **sub**(`y`): `UnreducedForeignField`

Finite field subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`UnreducedForeignField`

**`Example`**

```ts
x.sub(1); // x - 1 mod p
```

#### Inherited from

ForeignFieldWithMul.sub

#### Defined in

[lib/foreign-field.ts:234](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L234)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this field element to a bigint.

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.toBigInt

#### Defined in

[lib/foreign-field.ts:146](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L146)

___

### toBits

▸ **toBits**(`length?`): [`Bool`](Bool.md)[]

Unpack a field element to its bits, as a [Bool](Bool.md)[] array.

This method is provable!

#### Parameters

| Name | Type |
| :------ | :------ |
| `length?` | `number` |

#### Returns

[`Bool`](Bool.md)[]

#### Inherited from

ForeignFieldWithMul.toBits

#### Defined in

[lib/foreign-field.ts:352](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L352)

___

### toConstant

▸ **toConstant**(): [`ForeignField`](ForeignField.md)

Convert this field element to a constant.

See [FieldVar](../modules.md#fieldvar-1) to understand constants vs variables.

**Warning**: This function is only useful in [witness](../modules.md#witness) or [asProver](../modules.md#asprover) blocks,
that is, in situations where the prover computes a value outside provable code.

#### Returns

[`ForeignField`](ForeignField.md)

#### Inherited from

ForeignFieldWithMul.toConstant

#### Defined in

[lib/foreign-field.ts:138](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L138)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Instance version of `Provable<ForeignField>.toFields`, see [toFields](../interfaces/Provable.md#tofields)

#### Returns

[`Field`](Field.md)[]

#### Inherited from

ForeignFieldWithMul.toFields

#### Defined in

[lib/foreign-field.ts:391](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L391)

___

### assertAlmostReduced

▸ `Static` **assertAlmostReduced**\<`T`\>(`...xs`): [...\{ [i in string \| number \| symbol]: AlmostForeignField }[]]

Assert that one or more field elements lie in the range [0, 2^k),
where k = ceil(log2(p)) and p is the foreign field modulus.

This is most efficient than when checking a multiple of 3 field elements at once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Tuple`\<[`ForeignField`](ForeignField.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...xs` | `T` |

#### Returns

[...\{ [i in string \| number \| symbol]: AlmostForeignField }[]]

#### Inherited from

ForeignFieldWithMul.assertAlmostReduced

#### Defined in

[lib/foreign-field.ts:177](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L177)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ForeignField`](ForeignField.md) |

#### Returns

`void`

#### Overrides

ForeignFieldWithMul.check

#### Defined in

[lib/foreign-field.ts:526](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L526)

___

### from

▸ `Static` **from**(`x`): [`CanonicalForeignField`](CanonicalForeignField.md)

Coerce the input to a [ForeignField](ForeignField.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` |

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

ForeignFieldWithMul.from

#### Defined in

[lib/foreign-field.ts:114](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L114)

▸ `Static` **from**(`x`): [`ForeignField`](ForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

[`ForeignField`](ForeignField.md)

#### Inherited from

ForeignFieldWithMul.from

#### Defined in

[lib/foreign-field.ts:115](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L115)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`AlmostForeignField`](AlmostForeignField.md)

Create a field element from its bits, as a `Bool[]` array.

This method is provable!

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | [`Bool`](Bool.md)[] |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.fromBits

#### Defined in

[lib/foreign-field.ts:373](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L373)

___

### random

▸ `Static` **random**(): [`CanonicalForeignField`](CanonicalForeignField.md)

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

ForeignFieldWithMul.random

#### Defined in

[lib/foreign-field.ts:384](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L384)

___

### sum

▸ `Static` **sum**(`xs`, `operations`): `UnreducedForeignField`

Sum (or difference) of multiple finite field elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | (`number` \| `bigint` \| [`ForeignField`](ForeignField.md))[] |
| `operations` | (``1`` \| ``-1``)[] |

#### Returns

`UnreducedForeignField`

**`Example`**

```ts
let z = ForeignField.sum([3, 2, 1], [-1, 1]); // 3 - 2 + 1
z.assertEquals(2);
```

This method expects a list of ForeignField-like values, `x0,...,xn`,
and a list of "operations" `op1,...,opn` where every op is 1 or -1 (plus or minus),
and returns

`x0 + op1*x1 + ... + opn*xn`

where the sum is computed in finite field arithmetic.

**Important:** For more than two summands, this is significantly more efficient
than chaining calls to [add](ForeignField.md#add) and [sub](ForeignField.md#sub).

#### Inherited from

ForeignFieldWithMul.sum

#### Defined in

[lib/foreign-field.ts:259](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L259)

___

### unsafeFrom

▸ `Static` **unsafeFrom**(`x`): [`CanonicalForeignField`](CanonicalForeignField.md)

Coerce the input to a [CanonicalForeignField](CanonicalForeignField.md) without additional assertions.

**Warning:** Only use if you know what you're doing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ForeignField`](ForeignField.md) |

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/foreign-field.ts:536](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-field.ts#L536)
