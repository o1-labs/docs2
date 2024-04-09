[o1js](../README.md) / [Modules](../modules.md) / ForeignField

# Class: ForeignField

## Table of contents

### Constructors

- [constructor](ForeignField.md#constructor)

### Properties

- [value](ForeignField.md#value)
- [\_Bigint](ForeignField.md#_bigint)
- [\_modulus](ForeignField.md#_modulus)
- [\_provable](ForeignField.md#_provable)
- [\_variants](ForeignField.md#_variants)

### Accessors

- [Constructor](ForeignField.md#constructor-1)
- [modulus](ForeignField.md#modulus)
- [AlmostReduced](ForeignField.md#almostreduced)
- [Bigint](ForeignField.md#bigint)
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
- [random](ForeignField.md#random)
- [sum](ForeignField.md#sum)

## Constructors

### constructor

• **new ForeignField**(`x`)

Create a new [ForeignField](ForeignField.md) from a bigint, number, string or another ForeignField.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Field3` \| [`ForeignField`](ForeignField.md) |

**`Example`**

```ts
let x = new ForeignField(5);
```

#### Defined in

[lib/provable/foreign-field.ts:96](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L96)

## Properties

### value

• **value**: `Field3`

The internal representation of a foreign field element, as a tuple of 3 limbs.

#### Defined in

[lib/provable/foreign-field.ts:50](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L50)

___

### \_Bigint

▪ `Static` **\_Bigint**: `undefined` \| \{ `M`: `bigint` = twoadicity; `inverse`: (`x`: `bigint`) => `undefined` \| `bigint` = exportedInverse; `modulus`: `bigint` = p; `sizeInBits`: `number` ; `t`: `bigint` = oddFactor; `twoadicRoot`: `bigint` ; `add`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `div`: (`x`: `bigint`, `y`: `bigint`) => `undefined` \| `bigint` ; `dot`: (`x`: `bigint`[], `y`: `bigint`[]) => `bigint` ; `equal`: (`x`: `bigint`, `y`: `bigint`) => `boolean` ; `fromBigint`: (`x`: `bigint`) => `bigint` ; `fromNumber`: (`x`: `number`) => `bigint` ; `isEven`: (`x`: `bigint`) => `boolean` ; `isSquare`: (`x`: `bigint`) => `boolean` ; `leftShift`: (`x`: `bigint`, `bits`: `number`, `maxBitSize`: `number`) => `bigint` ; `mod`: (`x`: `bigint`) => `bigint` ; `mul`: (`x`: `bigint`, `y`: `bigint`) => `bigint` ; `negate`: (`x`: `bigint`) => `bigint` ; `not`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `power`: (`x`: `bigint`, `n`: `bigint`) => `bigint` ; `random`: () => `bigint` ; `rightShift`: (`x`: `bigint`, `bits`: `number`) => `bigint` ; `rot`: (`x`: `bigint`, `bits`: `bigint`, `direction`: ``"left"`` \| ``"right"``, `maxBits`: `bigint`) => `bigint` ; `sqrt`: (`x`: `bigint`) => `undefined` \| `bigint` ; `square`: (`x`: `bigint`) => `bigint` ; `sub`: (`x`: `bigint`, `y`: `bigint`) => `bigint`  } = `undefined`

#### Defined in

[lib/provable/foreign-field.ts:28](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L28)

___

### \_modulus

▪ `Static` **\_modulus**: `undefined` \| `bigint` = `undefined`

#### Defined in

[lib/provable/foreign-field.ts:29](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L29)

___

### \_provable

▪ `Static` **\_provable**: `any` = `undefined`

#### Defined in

[lib/provable/foreign-field.ts:399](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L399)

___

### \_variants

▪ `Static` **\_variants**: `undefined` \| \{ `almostReduced`: typeof [`AlmostForeignField`](AlmostForeignField.md) ; `canonical`: typeof [`CanonicalForeignField`](CanonicalForeignField.md) ; `unreduced`: typeof `UnreducedForeignField`  } = `undefined`

Sibling classes that represent different ranges of field elements.

#### Defined in

[lib/provable/foreign-field.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L59)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`ForeignField`](ForeignField.md)

#### Returns

typeof [`ForeignField`](ForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:52](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L52)

___

### modulus

• `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/provable/foreign-field.ts:40](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L40)

___

### AlmostReduced

• `Static` `get` **AlmostReduced**(): typeof [`AlmostForeignField`](AlmostForeignField.md)

Constructor for field elements that are "almost reduced", i.e. lie in the range [0, 2^ceil(log2(p))).

#### Returns

typeof [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:77](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L77)

___

### Bigint

• `Static` `get` **Bigint**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `M` | `bigint` |
| `inverse` | (`x`: `bigint`) => `undefined` \| `bigint` |
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

#### Defined in

[lib/provable/foreign-field.ts:32](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L32)

___

### Canonical

• `Static` `get` **Canonical**(): typeof [`CanonicalForeignField`](CanonicalForeignField.md)

Constructor for field elements that are fully reduced, i.e. lie in the range [0, p).

#### Returns

typeof [`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:84](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L84)

___

### Unreduced

• `Static` `get` **Unreduced**(): typeof `UnreducedForeignField`

Constructor for unreduced field elements.

#### Returns

typeof `UnreducedForeignField`

#### Defined in

[lib/provable/foreign-field.ts:70](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L70)

___

### modulus

• `Static` `get` **modulus**(): `bigint`

#### Returns

`bigint`

#### Defined in

[lib/provable/foreign-field.ts:36](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L36)

___

### provable

• `Static` `get` **provable**(): `any`

`Provable<ForeignField>`, see [Provable](../modules.md#provable-1)

#### Returns

`any`

#### Defined in

[lib/provable/foreign-field.ts:404](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L404)

___

### sizeInBits

• `Static` `get` **sizeInBits**(): `number`

#### Returns

`number`

#### Defined in

[lib/provable/foreign-field.ts:43](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L43)

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

#### Defined in

[lib/provable/foreign-field.ts:208](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L208)

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

[lib/provable/foreign-field.ts:163](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L163)

___

### assertCanonical

▸ **assertCanonical**(): [`CanonicalForeignField`](CanonicalForeignField.md)

Assert that this field element is fully reduced,
i.e. lies in the range [0, p), where p is the foreign field modulus.

Returns the field element as a [CanonicalForeignField](CanonicalForeignField.md).

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:194](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L194)

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

#### Defined in

[lib/provable/foreign-field.ts:286](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L286)

▸ **assertEquals**(`y`, `message?`): [`AlmostForeignField`](AlmostForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`AlmostForeignField`](AlmostForeignField.md) |
| `message?` | `string` |

#### Returns

[`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:290](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L290)

▸ **assertEquals**(`y`, `message?`): [`ForeignField`](ForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`ForeignField`](ForeignField.md) |
| `message?` | `string` |

#### Returns

[`ForeignField`](ForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:291](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L291)

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

#### Defined in

[lib/provable/foreign-field.ts:333](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L333)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this field element is a constant.

See FieldVar to understand constants vs variables.

#### Returns

`boolean`

#### Defined in

[lib/provable/foreign-field.ts:126](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L126)

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

#### Defined in

[lib/provable/foreign-field.ts:219](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L219)

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

#### Defined in

[lib/provable/foreign-field.ts:234](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L234)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Convert this field element to a bigint.

#### Returns

`bigint`

#### Defined in

[lib/provable/foreign-field.ts:146](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L146)

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

[lib/provable/foreign-field.ts:352](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L352)

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

[lib/provable/foreign-field.ts:138](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L138)

___

### toFields

▸ **toFields**(): `Field`[]

Instance version of `Provable<ForeignField>.toFields`, see [toFields](TokenSymbol.md#tofields)

#### Returns

`Field`[]

#### Defined in

[lib/provable/foreign-field.ts:391](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L391)

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

#### Defined in

[lib/provable/foreign-field.ts:177](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L177)

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

[lib/provable/foreign-field.ts:395](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L395)

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

[lib/provable/foreign-field.ts:114](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L114)

▸ `Static` **from**(`x`): [`ForeignField`](ForeignField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`ForeignField`](ForeignField.md) |

#### Returns

[`ForeignField`](ForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:115](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L115)

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

[lib/provable/foreign-field.ts:373](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L373)

___

### random

▸ `Static` **random**(): [`CanonicalForeignField`](CanonicalForeignField.md)

#### Returns

[`CanonicalForeignField`](CanonicalForeignField.md)

#### Defined in

[lib/provable/foreign-field.ts:384](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L384)

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

#### Defined in

[lib/provable/foreign-field.ts:259](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/foreign-field.ts#L259)
