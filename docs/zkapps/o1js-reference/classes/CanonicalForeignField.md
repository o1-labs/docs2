[o1js](../README.md) / [Exports](../modules.md) / CanonicalForeignField

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
- [\_modulus](CanonicalForeignField.md#_modulus)
- [\_provable](CanonicalForeignField.md#_provable)
- [\_variants](CanonicalForeignField.md#_variants)

### Accessors

- [Constructor](CanonicalForeignField.md#constructor-1)
- [modulus](CanonicalForeignField.md#modulus)
- [AlmostReduced](CanonicalForeignField.md#almostreduced)
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

[lib/foreign-field.ts:505](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L505)

## Properties

### type

• **type**: ``"FullyReduced"``

#### Defined in

[lib/foreign-field.ts:503](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L503)

___

### value

• **value**: `Field3`

The internal representation of a foreign field element, as a tuple of 3 limbs.

#### Inherited from

ForeignFieldWithMul.value

#### Defined in

[lib/foreign-field.ts:39](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L39)

___

### \_modulus

▪ `Static` **\_modulus**: `undefined` \| `bigint` = `undefined`

#### Inherited from

ForeignFieldWithMul.\_modulus

#### Defined in

[lib/foreign-field.ts:22](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L22)

___

### \_provable

▪ `Static` **\_provable**: `undefined` \| [`ProvablePure`](../interfaces/ProvablePure.md)<[`CanonicalForeignField`](CanonicalForeignField.md)\> = `undefined`

#### Overrides

ForeignFieldWithMul.\_provable

#### Defined in

[lib/foreign-field.ts:509](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L509)

___

### \_variants

▪ `Static` **\_variants**: `undefined` \| { `almostReduced`: typeof [`AlmostForeignField`](AlmostForeignField.md) ; `canonical`: typeof [`CanonicalForeignField`](CanonicalForeignField.md) ; `unreduced`: typeof `UnreducedForeignField`  } = `undefined`

Sibling classes that represent different ranges of field elements.

#### Inherited from

ForeignFieldWithMul.\_variants

#### Defined in

[lib/foreign-field.ts:48](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L48)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`ForeignField`](ForeignField.md)

#### Returns

typeof [`ForeignField`](ForeignField.md)

#### Inherited from

ForeignFieldWithMul.Constructor

#### Defined in

[lib/foreign-field.ts:41](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L41)

___

### modulus

• `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.modulus

#### Defined in

[lib/foreign-field.ts:29](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L29)

___

### AlmostReduced

• `Static` `get` **AlmostReduced**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

Constructor for field elements that are "almost reduced", i.e. lie in the range [0, 2^ceil(log2(p))).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.AlmostReduced

#### Defined in

[lib/foreign-field.ts:66](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L66)

___

### Canonical

• `Static` `get` **Canonical**(): typeof [`CanonicalForeignField`](CanonicalForeignField.md)

Constructor for field elements that are fully reduced, i.e. lie in the range [0, p).

#### Returns

typeof [`CanonicalForeignField`](CanonicalForeignField.md)

#### Inherited from

ForeignFieldWithMul.Canonical

#### Defined in

[lib/foreign-field.ts:73](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L73)

___

### Unreduced

• `Static` `get` **Unreduced**(): typeof `UnreducedForeignField`

Constructor for unreduced field elements.

#### Returns

typeof `UnreducedForeignField`

#### Inherited from

ForeignFieldWithMul.Unreduced

#### Defined in

[lib/foreign-field.ts:59](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L59)

___

### modulus

• `Static` `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.modulus

#### Defined in

[lib/foreign-field.ts:25](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L25)

___

### provable

• `Static` `get` **provable**(): [`ProvablePure`](../interfaces/ProvablePure.md)<[`CanonicalForeignField`](CanonicalForeignField.md)\>

#### Returns

[`ProvablePure`](../interfaces/ProvablePure.md)<[`CanonicalForeignField`](CanonicalForeignField.md)\>

#### Overrides

ForeignFieldWithMul.provable

#### Defined in

[lib/foreign-field.ts:510](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L510)

___

### sizeInBits

• `Static` `get` **sizeInBits**(): `number`

#### Returns

`number`

#### Inherited from

ForeignFieldWithMul.sizeInBits

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

#### Inherited from

ForeignFieldWithMul.add

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

#### Inherited from

ForeignFieldWithMul.assertAlmostReduced

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

#### Inherited from

ForeignFieldWithMul.assertCanonical

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

#### Inherited from

ForeignFieldWithMul.assertEquals

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

#### Inherited from

ForeignFieldWithMul.assertEquals

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

#### Inherited from

ForeignFieldWithMul.assertEquals

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

#### Inherited from

ForeignFieldWithMul.assertLessThan

#### Defined in

[lib/foreign-field.ts:325](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L325)

___

### div

▸ **div**(`y`): [`AlmostForeignField`](AlmostForeignField.md)

Division in the finite field, i.e. `x*y^(-1) mod p` where `y^(-1)` is the finite field inverse.

**`Example`**

```ts
let z = x.div(y); // x/y mod p
z.mul(y).assertEquals(x);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.div

#### Defined in

[lib/foreign-field.ts:453](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L453)

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

#### Inherited from

ForeignFieldWithMul.equals

#### Defined in

[lib/foreign-field.ts:344](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L344)

___

### inv

▸ **inv**(): [`AlmostForeignField`](AlmostForeignField.md)

Multiplicative inverse in the finite field

**`Example`**

```ts
let z = x.inv(); // 1/x mod p
z.mul(x).assertEquals(1);
```

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Inherited from

ForeignFieldWithMul.inv

#### Defined in

[lib/foreign-field.ts:439](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L439)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this field element is a constant.

See FieldVar to understand constants vs variables.

#### Returns

`boolean`

#### Inherited from

ForeignFieldWithMul.isConstant

#### Defined in

[lib/foreign-field.ts:119](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L119)

___

### mul

▸ **mul**(`y`): `UnreducedForeignField`

Finite field multiplication

**`Example`**

```ts
x.mul(y); // x*y mod p
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` \| `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Returns

`UnreducedForeignField`

#### Inherited from

ForeignFieldWithMul.mul

#### Defined in

[lib/foreign-field.ts:425](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L425)

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

#### Inherited from

ForeignFieldWithMul.neg

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

#### Inherited from

ForeignFieldWithMul.sub

#### Defined in

[lib/foreign-field.ts:226](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L226)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this field element to a bigint.

#### Returns

`bigint`

#### Inherited from

ForeignFieldWithMul.toBigInt

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

#### Inherited from

ForeignFieldWithMul.toBits

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

#### Inherited from

ForeignFieldWithMul.toConstant

#### Defined in

[lib/foreign-field.ts:131](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L131)

___

### toFields

▸ **toFields**(): `Field`[]

Instance version of `Provable<ForeignField>.toFields`, see [toFields](TokenSymbol.md#tofields)

#### Returns

`Field`[]

#### Inherited from

ForeignFieldWithMul.toFields

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

#### Inherited from

ForeignFieldWithMul.assertAlmostReduced

#### Defined in

[lib/foreign-field.ts:172](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L172)

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

[lib/foreign-field.ts:515](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L515)

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

#### Inherited from

ForeignFieldWithMul.fromBits

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

#### Inherited from

ForeignFieldWithMul.sum

#### Defined in

[lib/foreign-field.ts:251](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L251)

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

[lib/foreign-field.ts:525](https://github.com/o1-labs/snarkyjs/blob/9d34c7fcf/src/lib/foreign-field.ts#L525)
