[o1js](../README.md) / [Exports](../modules.md) / ForeignField

# Class: ForeignField

## Table of contents

### Constructors

- [constructor](ForeignField.md#constructor)

### Properties

- [value](ForeignField.md#value)
- [\_modulus](ForeignField.md#_modulus)
- [\_provable](ForeignField.md#_provable)
- [\_variants](ForeignField.md#_variants)

### Accessors

- [Constructor](ForeignField.md#constructor-1)
- [modulus](ForeignField.md#modulus)
- [AlmostReduced](ForeignField.md#almostreduced)
- [Canonical](ForeignField.md#canonical)
- [Unreduced](ForeignField.md#unreduced)
- [modulus](ForeignField.md#modulus-1)
- [provable](ForeignField.md#provable)
- [sizeInBits](ForeignField.md#sizeinbits)

### Methods

- [add](ForeignField.md#add)
- [assertAlmostReduced](ForeignField.md#assertalmostreduced)
- [assertCanonical](ForeignField.md#assertcanonical)
- [assertEquals](ForeignField.md#assertequals)
- [assertLessThan](ForeignField.md#assertlessthan)
- [equals](ForeignField.md#equals)
- [isConstant](ForeignField.md#isconstant)
- [neg](ForeignField.md#neg)
- [sub](ForeignField.md#sub)
- [toBigInt](ForeignField.md#tobigint)
- [toBits](ForeignField.md#tobits)
- [toConstant](ForeignField.md#toconstant)
- [toFields](ForeignField.md#tofields)
- [assertAlmostReduced](ForeignField.md#assertalmostreduced-1)
- [check](ForeignField.md#check)
- [from](ForeignField.md#from)
- [fromBits](ForeignField.md#frombits)
- [sum](ForeignField.md#sum)
- [toLimbs](ForeignField.md#tolimbs)

## Constructors

### constructor

• **new ForeignField**(`x`)

Create a new [ForeignField](ForeignField.md) from a bigint, number, string or another ForeignField.

**`Example`**

```ts
let x = new ForeignField(5);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Field3` \| [`ForeignField`](ForeignField.md) |

#### Defined in

[lib/foreign-field.ts:85](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L85)

## Properties

### value

• **value**: `Field3`

The internal representation of a foreign field element, as a tuple of 3 limbs.

#### Defined in

[lib/foreign-field.ts:39](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L39)

___

### \_modulus

▪ `Static` **\_modulus**: `undefined` \| `bigint` = `undefined`

#### Defined in

[lib/foreign-field.ts:22](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L22)

___

### \_provable

▪ `Static` **\_provable**: `any` = `undefined`

#### Defined in

[lib/foreign-field.ts:406](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L406)

___

### \_variants

▪ `Static` **\_variants**: `undefined` \| { `almostReduced`: typeof [`AlmostForeignField`](AlmostForeignField.md) ; `canonical`: typeof [`CanonicalForeignField`](CanonicalForeignField.md) ; `unreduced`: typeof `UnreducedForeignField`  } = `undefined`

Sibling classes that represent different ranges of field elements.

#### Defined in

[lib/foreign-field.ts:48](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L48)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`ForeignField`](ForeignField.md)

#### Returns

typeof [`ForeignField`](ForeignField.md)

#### Defined in

[lib/foreign-field.ts:41](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L41)

___

### modulus

• `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/foreign-field.ts:29](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L29)

___

### AlmostReduced

• `Static` `get` **AlmostReduced**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

Constructor for field elements that are "almost reduced", i.e. lie in the range [0, 2^ceil(log2(p))).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-field.ts:66](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L66)

___

### Canonical

• `Static` `get` **Canonical**(): typeof [`CanonicalForeignField`](CanonicalForeignField.md)

Constructor for field elements that are fully reduced, i.e. lie in the range [0, p).

#### Returns

typeof [`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/foreign-field.ts:73](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L73)

___

### Unreduced

• `Static` `get` **Unreduced**(): typeof `UnreducedForeignField`

Constructor for unreduced field elements.

#### Returns

typeof `UnreducedForeignField`

#### Defined in

[lib/foreign-field.ts:59](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L59)

___

### modulus

• `Static` `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/foreign-field.ts:25](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L25)

___

### provable

• `Static` `get` **provable**(): `any`

`Provable<ForeignField>`, see [Provable](../modules.md#provable-1)

#### Returns

`any`

#### Defined in

[lib/foreign-field.ts:411](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L411)

___

### sizeInBits

• `Static` `get` **sizeInBits**(): `number`

#### Returns

`number`

#### Defined in

[lib/foreign-field.ts:32](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L32)

## Methods

### add

▸ **add**(`y`): `UnreducedForeignField`

Finite field addition

**`Example`**

```ts
x.add(2); // x + 2 mod p
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`UnreducedForeignField`

#### Defined in

[lib/foreign-field.ts:203](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L203)

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

#### Defined in

[lib/foreign-field.ts:156](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L156)

___

### assertCanonical

▸ **assertCanonical**(): [`CanonicalForeignField`](CanonicalForeignField.md)

Assert that this field element is fully reduced,
i.e. lies in the range [0, p), where p is the foreign field modulus.

Returns the field element as a [CanonicalForeignField](CanonicalForeignField.md).

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/foreign-field.ts:189](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L189)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): [`CanonicalForeignField`](CanonicalForeignField.md)

Assert equality with a ForeignField-like value

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`CanonicalForeignField`](CanonicalForeignField.md) |
| `message?` | `string` |

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/foreign-field.ts:278](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L278)

▸ **assertEquals**(`y`, `message?`): [`AlmostForeignField`](AlmostForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`AlmostForeignField`](AlmostForeignField.md) |
| `message?` | `string` |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-field.ts:282](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L282)

▸ **assertEquals**(`y`, `message?`): [`ForeignField`](ForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`ForeignField`](ForeignField.md) |
| `message?` | `string` |

#### Returns

[`ForeignField`](ForeignField.md)

#### Defined in

[lib/foreign-field.ts:283](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L283)

___

### assertLessThan

▸ **assertLessThan**(`c`, `message?`): `void`

Assert that this field element is less than a constant c: `x < c`.

The constant must satisfy `0 <= c < 2^264`, otherwise an error is thrown.

**`Example`**

```ts
x.assertLessThan(10);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `number` \| `bigint` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/foreign-field.ts:325](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L325)

___

### equals

▸ **equals**(`y`): `Bool`

Check equality with a ForeignField-like value

**`Example`**

```ts
let isXZero = x.equals(0);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`Bool`

#### Defined in

[lib/foreign-field.ts:344](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L344)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this field element is a constant.

See FieldVar to understand constants vs variables.

#### Returns

`boolean`

#### Defined in

[lib/foreign-field.ts:119](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L119)

___

### neg

▸ **neg**(): `UnreducedForeignField`

Finite field negation

**`Example`**

```ts
x.neg(); // -x mod p = p - x
```

#### Returns

`UnreducedForeignField`

#### Defined in

[lib/foreign-field.ts:214](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L214)

___

### sub

▸ **sub**(`y`): `UnreducedForeignField`

Finite field subtraction

**`Example`**

```ts
x.sub(1); // x - 1 mod p
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`UnreducedForeignField`

#### Defined in

[lib/foreign-field.ts:226](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L226)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this field element to a bigint.

#### Returns

`bigint`

#### Defined in

[lib/foreign-field.ts:139](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L139)

___

### toBits

▸ **toBits**(`length?`): `Bool`[]

Unpack a field element to its bits, as a [Bool](../modules.md#bool)[] array.

This method is provable!

#### Parameters

| Name | Type |
| :------ | :------ |
| `length?` | `number` |

#### Returns

`Bool`[]

#### Defined in

[lib/foreign-field.ts:363](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L363)

___

### toConstant

▸ **toConstant**(): [`ForeignField`](ForeignField.md)

Convert this field element to a constant.

See FieldVar to understand constants vs variables.

**Warning**: This function is only useful in [witness](../modules.md#witness) or [asProver](../modules.md#asprover) blocks,
that is, in situations where the prover computes a value outside provable code.

#### Returns

[`ForeignField`](ForeignField.md)

#### Defined in

[lib/foreign-field.ts:131](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L131)

___

### toFields

▸ **toFields**(): `Field`[]

Instance version of `Provable<ForeignField>.toFields`, see [toFields](TokenSymbol.md#tofields)

#### Returns

`Field`[]

#### Defined in

[lib/foreign-field.ts:398](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L398)

___

### assertAlmostReduced

▸ `Static` **assertAlmostReduced**<`T`\>(`...xs`): [...{ [i in string \| number \| symbol]: AlmostForeignField }[]]

Assert that one or more field elements lie in the range [0, 2^k),
where k = ceil(log2(p)) and p is the foreign field modulus.

This is most efficient than when checking a multiple of 3 field elements at once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Tuple`<[`ForeignField`](ForeignField.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...xs` | `T` |

#### Returns

[...{ [i in string \| number \| symbol]: AlmostForeignField }[]]

#### Defined in

[lib/foreign-field.ts:172](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L172)

___

### check

▸ `Static` **check**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`ForeignField`](ForeignField.md) |

#### Returns

`void`

#### Defined in

[lib/foreign-field.ts:402](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L402)

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

#### Defined in

[lib/foreign-field.ts:108](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L108)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`AlmostForeignField`](AlmostForeignField.md)

Create a field element from its bits, as a `Bool[]` array.

This method is provable!

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | `Bool`[] |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-field.ts:384](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L384)

___

### sum

▸ `Static` **sum**(`xs`, `operations`): `UnreducedForeignField`

Sum (or difference) of multiple finite field elements.

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | (`number` \| `bigint` \| [`ForeignField`](ForeignField.md))[] |
| `operations` | (``1`` \| ``-1``)[] |

#### Returns

`UnreducedForeignField`

#### Defined in

[lib/foreign-field.ts:251](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L251)

___

### toLimbs

▸ `Static` `Private` **toLimbs**(`x`): `Field3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

`Field3`

#### Defined in

[lib/foreign-field.ts:100](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L100)
