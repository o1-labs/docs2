[SnarkyJS](../README.md) / [Exports](../modules.md) / SnarkyField

# Class: SnarkyField

## Table of contents

### Constructors

- [constructor](SnarkyField.md#constructor)

### Properties

- [ORDER](SnarkyField.md#order)
- [minusOne](SnarkyField.md#minusone)
- [one](SnarkyField.md#one)
- [zero](SnarkyField.md#zero)

### Methods

- [add](SnarkyField.md#add)
- [assertBool](SnarkyField.md#assertbool)
- [assertBoolean](SnarkyField.md#assertboolean)
- [assertEquals](SnarkyField.md#assertequals)
- [assertGreaterThan](SnarkyField.md#assertgreaterthan)
- [assertGreaterThanOrEqual](SnarkyField.md#assertgreaterthanorequal)
- [assertGt](SnarkyField.md#assertgt)
- [assertGte](SnarkyField.md#assertgte)
- [assertLessThan](SnarkyField.md#assertlessthan)
- [assertLessThanOrEqual](SnarkyField.md#assertlessthanorequal)
- [assertLt](SnarkyField.md#assertlt)
- [assertLte](SnarkyField.md#assertlte)
- [div](SnarkyField.md#div)
- [equals](SnarkyField.md#equals)
- [greaterThan](SnarkyField.md#greaterthan)
- [greaterThanOrEqual](SnarkyField.md#greaterthanorequal)
- [gt](SnarkyField.md#gt)
- [gte](SnarkyField.md#gte)
- [inv](SnarkyField.md#inv)
- [isConstant](SnarkyField.md#isconstant)
- [isZero](SnarkyField.md#iszero)
- [lessThan](SnarkyField.md#lessthan)
- [lessThanOrEqual](SnarkyField.md#lessthanorequal)
- [lt](SnarkyField.md#lt)
- [lte](SnarkyField.md#lte)
- [mul](SnarkyField.md#mul)
- [neg](SnarkyField.md#neg)
- [rangeCheckHelper](SnarkyField.md#rangecheckhelper)
- [seal](SnarkyField.md#seal)
- [sqrt](SnarkyField.md#sqrt)
- [square](SnarkyField.md#square)
- [sub](SnarkyField.md#sub)
- [toBigInt](SnarkyField.md#tobigint)
- [toBits](SnarkyField.md#tobits)
- [toConstant](SnarkyField.md#toconstant)
- [toFields](SnarkyField.md#tofields)
- [toJSON](SnarkyField.md#tojson)
- [toString](SnarkyField.md#tostring)
- [check](SnarkyField.md#check)
- [fromBits](SnarkyField.md#frombits)
- [fromBytes](SnarkyField.md#frombytes)
- [fromFields](SnarkyField.md#fromfields)
- [fromJSON](SnarkyField.md#fromjson)
- [random](SnarkyField.md#random)
- [readBytes](SnarkyField.md#readbytes)
- [sizeInBytes](SnarkyField.md#sizeinbytes)
- [sizeInFields](SnarkyField.md#sizeinfields)
- [toAuxiliary](SnarkyField.md#toauxiliary)
- [toBytes](SnarkyField.md#tobytes)
- [toFields](SnarkyField.md#tofields-1)
- [toInput](SnarkyField.md#toinput)
- [toJSON](SnarkyField.md#tojson-1)

## Constructors

### constructor

• **new SnarkyField**(`value`)

Coerce anything "field-like" (bigint, boolean, number, string, and [Field](Field.md)) to a [Field](Field.md).
A [Field](Field.md) is an element of a prime order field. Every other provable type is build using the [Field](Field.md) type.

The field is the [pasta base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) of order 2^254 + 0x224698fc094cf91b992d30ed00000001 ([ORDER](Field.md#order)).

You can create a new Field from everything "field-like" (`bigint`, integer `number`, decimal `string`, `Field`).

**`Example`**

```
new Field(10n); // Field contruction from a big integer
new Field(100); // Field construction from a number
new Field("1"); // Field construction from a decimal string
```

**Beware**: Fields can _not_ be constructed from fractional numbers or alphanumeric strings:
```ts
new Field(3.141); // ERROR: Cannot convert a float to a field element
new Field("abc"); // ERROR: Invalid argument "abc"
```

Creating a [Field](Field.md) from a negative number can result in unexpected behavior if you are not familiar with [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic).```
@example
```
const x = new Field(-1); // Valid Field construction from negative number
const y = new Field(Field.ORDER - 1n); // equivalent to `x`
```

**Important**: All the functions defined on a Field (arithmetic, logic, etc.) take their arguments as "field-like". A {@link Field} itself is also defined as a "field-like" value.

@param value - the value to coerce to a {@link Field}

@return A {@link Field} element which the value coerced from the argument in the pasta field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:330](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L330)

## Properties

### ORDER

▪ `Static` **ORDER**: `bigint`

The order of the pasta curve that [Field](Field.md) type build on as a `bigint`.
Order of the [Field](Field.md) is 28948022309329048855892746252171976963363056481941560715954676764349967630337.

#### Defined in

[snarky.d.ts:907](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L907)

___

### minusOne

▪ `Static` **minusOne**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(-1)`.

The number -1 as a [Field](Field.md).

#### Defined in

[snarky.d.ts:901](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L901)

___

### one

▪ `Static` **one**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(1)`.

The number 1 as a [Field](Field.md).

#### Defined in

[snarky.d.ts:887](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L887)

___

### zero

▪ `Static` **zero**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(0)`.

The number 0 as a [Field](Field.md).

#### Defined in

[snarky.d.ts:894](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L894)

## Methods

### add

▸ **add**(`y`): [`Field`](Field.md)

Add a "field-like" value to this [Field](Field.md) element.

**`Example`**

```ts
const x = Field(3);
const sum = x.add(5);

sum.assertEquals(Field(8));
```

**Warning**: This is a modular addition in the pasta field.

**`Example`**

```ts
const x = Field(1);
const sum = x.add(Field(-7));

// If you try to print sum - `console.log(sum.toBigInt())` - you will realize that it prints a very big integer because this is modular arithmetic, and 1 + (-7) circles around the field to become p - 6.
// You can use the reverse operation of addition (substraction) to prove the sum is calculated correctly.

sum.sub(x).assertEquals(Field(-7));
sum.sub(Field(-7)).assertEquals(x);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the modular addition of the two value.

#### Defined in

[snarky.d.ts:397](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L397)

___

### assertBool

▸ **assertBool**(`message?`): `void`

Assert that this [Field](Field.md) is equal to 1 or 0 as a "field-like" value.
Calling this function is equivalent to `Bool.or(Field(...).equals(1), Field(...).equals(0)).assertEquals(Bool(true))`.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:771](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L771)

___

### assertBoolean

▸ **assertBoolean**(`message?`): `void`

**`Deprecated`**

Deprecated - use [assertBool](SnarkyField.md#assertbool) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:776](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L776)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is equal another "field-like" value.
Calling this function is equivalent to `Field(...).equals(...).assertEquals(Bool(true))`.
See [equals](Field.md#equals) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:760](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L760)

___

### assertGreaterThan

▸ **assertGreaterThan**(`value`, `message?`): `void`

Assert that this [Field](Field.md) is greater than another "field-like" value.
Calling this function is equivalent to `Field(...).greaterThan(...).assertEquals(Bool(true))`.
See [greaterThan](Field.md#greaterthan) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) | the "field-like" value to compare & assert with this [Field](Field.md). |
| `message?` | `string` | - |

#### Returns

`void`

#### Defined in

[snarky.d.ts:690](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L690)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than or equal to another "field-like" value.
Calling this function is equivalent to `Field(...).greaterThanOrEqual(...).assertEquals(Bool(true))`.
See [greaterThanOrEqual](Field.md#greaterthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:705](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L705)

___

### assertGt

▸ **assertGt**(`value`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertGreaterThan](SnarkyField.md#assertgreaterthan) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:743](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L743)

___

### assertGte

▸ **assertGte**(`value`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertGreaterThanOrEqual](SnarkyField.md#assertgreaterthanorequal) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:748](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L748)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is less than another "field-like" value.
Calling this function is equivalent to `Field(...).lessThan(...).assertEquals(Bool(true))`.
See [lessThan](Field.md#lessthan) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:663](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L663)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is less than or equal to another "field-like" value.
Calling this function is equivalent to `Field(...).lessThanOrEqual(...).assertEquals(Bool(true))`.
See [lessThanOrEqual](Field.md#lessthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:675](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L675)

___

### assertLt

▸ **assertLt**(`value`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertLessThan](SnarkyField.md#assertlessthan) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:733](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L733)

___

### assertLte

▸ **assertLte**(`value`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertLessThanOrEqual](SnarkyField.md#assertlessthanorequal)instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:738](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L738)

___

### div

▸ **div**(`y`): [`Field`](Field.md)

Divide another "field-like" value through this [Field](Field.md).

**`Example`**

```ts
const x = Field(6);
const quotient = x.div(Field(3));

quotient.assertEquals(Field(2));
```

**Warning**: This is a modular division in the pasta field. You can think this as the reverse operation of modular multiplication.

**`Example`**

```ts
const x = Field(2);
const y = Field(5);

const quotient = x.div(y);

// If you try to print quotient - `console.log(quotient.toBigInt())` - you will realize that it prints a very big integer because this is a modular inverse.
// You can use the reverse operation of division (multiplication) to prove the quotient is calculated correctly.

quotient.mul(y).assertEquals(x);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the modular division of the two value.

#### Defined in

[snarky.d.ts:475](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L475)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is equal another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(5).equals(5).assertEquals(Bool(true));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is equal another "field-like" value.

#### Defined in

[snarky.d.ts:821](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L821)

___

### greaterThan

▸ **greaterThan**(`value`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(5).greaterThan(3).assertEquals(Bool(true));
```

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(2)).greaterThan(Field(1).div(Field(3))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) | the "field-like" value to compare with this [Field](Field.md). |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is greater than another "field-like" value.

#### Defined in

[snarky.d.ts:629](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L629)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`value`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than or equal another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(3).greaterThanOrEqual(3).assertEquals(Bool(true));
```

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(2)).greaterThanOrEqual(Field(1).div(Field(3))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) | the "field-like" value to compare with this [Field](Field.md). |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is greater than or equal another "field-like" value.

#### Defined in

[snarky.d.ts:651](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L651)

___

### gt

▸ **gt**(`value`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use `{@link greaterThan}` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:723](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L723)

___

### gte

▸ **gte**(`value`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [greaterThanOrEqual](SnarkyField.md#greaterthanorequal) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:728](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L728)

___

### inv

▸ **inv**(): [`Field`](Field.md)

[Modular inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of this [Field](Field.md) element. Equivalent to 1 divided by this [Field](Field.md), in the sense of modular arithmetic.

**`Example`**

```ts
const someField = Field(42);
const inverse = someField.inv();
inverse.assertEquals(Field(1).div(example)); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular inverse. See [div](SnarkyField.md#div) method for more details.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equivalent to one divided by this element.

#### Defined in

[snarky.d.ts:367](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L367)

___

### isConstant

▸ **isConstant**(): `boolean`

Check whether this [Field](Field.md) element is a hard-coded constant in the Circuit.
If a [Field](Field.md) is constructed outside a zkApp method, it is a constant.

**`Example`**

```ts
console.log(Field(42).isConstant()); // True
```

**`Example`**

```ts
@method(x: Field) {
   console.log(x.isConstant()); // False
}
```

#### Returns

`boolean`

A `boolean` showing if this [Field](Field.md) is a constant or not.

#### Defined in

[snarky.d.ts:864](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L864)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

Checks if this [Field](Field.md) is 0,
Calling this function is equivalent to `Field(...).equals(Field(0))`.
See [equals](Field.md#equals) for more details.

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) equals 0.

#### Defined in

[snarky.d.ts:785](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L785)

___

### lessThan

▸ **lessThan**(`value`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is less than another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used prove to the validity of this statement.

**`Example`**

```ts
Field(2).lessThan(3).assertEquals(Bool(true));
```

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behavior when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(3)).lessThan(Field(1).div(Field(2))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) | the "field-like" value to compare with this [Field](Field.md). |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is less than another "field-like" value.

#### Defined in

[snarky.d.ts:585](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L585)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`value`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is less than or equal to another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(3).lessThanOrEqual(3).assertEquals(Bool(true));
```

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(3)).lessThanOrEqual(Field(1).div(Field(2))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) | the "field-like" value to compare with this [Field](Field.md). |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is less than or equal another "field-like" value.

#### Defined in

[snarky.d.ts:607](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L607)

___

### lt

▸ **lt**(`value`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [lessThan](SnarkyField.md#lessthan) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:713](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L713)

___

### lte

▸ **lte**(`value`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [lessThanOrEqual](SnarkyField.md#lessthanorequal) instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:718](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L718)

___

### mul

▸ **mul**(`y`): [`Field`](Field.md)

Multiply another "field-like" value with this [Field](Field.md) element.

**`Example`**

```ts
const x = Field(3);
const product = x.mul(Field(5));

product.assertEquals(Field(15));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the modular difference of the two value.

#### Defined in

[snarky.d.ts:443](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L443)

___

### neg

▸ **neg**(): [`Field`](Field.md)

Negate a [Field](Field.md). This is equivalent to multiplying the [Field](Field.md) by -1.

**`Example`**

```ts
const negOne = Field(1).neg();
negOne.assertEquals(-1);
```

**`Example`**

```ts
const someField = Field(42);
someField.neg().assertEquals(someField.mul(Field(-1))); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular negation. For details, see the [sub](SnarkyField.md#sub) method.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equivalent to the element multiplied by -1.

#### Defined in

[snarky.d.ts:351](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L351)

___

### rangeCheckHelper

▸ **rangeCheckHelper**(`numBits`): [`Field`](Field.md)

Create a new [Field](Field.md) element from the first `numBits` of this [Field](Field.md) element.
As [Field](Field.md) elements are represented using [little endian binary representation](https://en.wikipedia.org/wiki/Endianness), the resulting [Field](Field.md) element will equal the original one if the variable fits in `numBits` bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numBits` | `number` | The number of bits to take from this [Field](Field.md) element. |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equal to the `numBits` of this [Field](Field.md) element.

#### Defined in

[snarky.d.ts:844](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L844)

___

### seal

▸ **seal**(): [`Field`](Field.md)

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

In SnarkyJS, addition and scaling (multiplication of variables by a constant) of variables is represented as an AST - [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree). For example, the expression `x.add(y).mul(2)` is represented as `Scale(2, Add(x, y))`.

 A new internal variable is created only when the variable is needed in a multiplicative or any higher level constraint (for example multiplication of two [Field](Field.md) elements) to represent the operation.

The `seal()` function tells SnarkyJS to stop building an AST and create a new variable right away.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equal to the result of AST that was previously on this [Field](Field.md) element.

#### Defined in

[snarky.d.ts:834](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L834)

___

### sqrt

▸ **sqrt**(): [`Field`](Field.md)

Take the square root of this [Field](Field.md) element.

**`Example`**

```ts
const someField = Field(42);
const squareRoot = someField.sqrt();

squareRoot.mul(squareRoot).assertEquals(someField); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular square root. See `div()` method for more details.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the square root of the [Field](Field.md) element.

#### Defined in

[snarky.d.ts:509](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L509)

___

### square

▸ **square**(): [`Field`](Field.md)

Square this [Field](Field.md) element.

**`Example`**

```ts
const someField = Field(7);
const square = someField.square();

square.assertEquals(someField.mul(someField)); // This statement is always true regardless of the value of `someField`
```

** Warning: This is a modular multiplication. See `mul()` method for more details.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the multiplication of the [Field](Field.md) element with itself.

#### Defined in

[snarky.d.ts:492](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L492)

___

### sub

▸ **sub**(`y`): [`Field`](Field.md)

Substract another "field-like" value from this [Field](Field.md) element.

**`Example`**

```ts
const x = Field(3);
const difference = x.sub(5);

difference.assertEquals(Field(-2));
```

**Warning**: This is a modular substraction in the pasta field.

**`Example`**

```ts
const x = Field(1);
const difference = x.sub(Field(2));

// If you try to print difference - `console.log(difference.toBigInt())` - you will realize that it prints a very big integer because this is modular arithmetic, and 1 - 2 circles around the field to become p - 1.
// You can use the reverse operation of substraction (addition) to prove the difference is calculated correctly.
difference.add(Field(2)).assertEquals(x);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the modular difference of the two value.

#### Defined in

[snarky.d.ts:426](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L426)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize the [Field](Field.md) to a bigint, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in an unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the bigint representation of the [Field](Field.md). Use the operation only during debugging.

**`Example`**

```ts
const someField = Field(42);
console.log(someField.toBigInt());
```

#### Returns

`bigint`

A bigint equivalent to the bigint representation of the Field.

#### Defined in

[snarky.d.ts:539](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L539)

___

### toBits

▸ **toBits**(): [`Bool`](Bool.md)[]

Returns an array of [Bool](Bool.md) elements representing [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of this [Field](Field.md) element.

**Warning**: This is a costly operation in a zk proof, because a Field can have 255 bits, each of which has to be constrained to prove that the bits equal the original field element. To reduce the maximum amount of bits that the input can have, use this method with the optional `length` argument.

#### Returns

[`Bool`](Bool.md)[]

An array of [Bool](Bool.md) element representing little endian binary representation of this [Field](Field.md).

#### Defined in

[snarky.d.ts:794](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L794)

▸ **toBits**(`length`): [`Bool`](Bool.md)[]

Returns an array of [Bool](Bool.md) elements representing [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of this [Field](Field.md) element.
Throws an error if the element cannot fit in `length` bits.

**Warning**: The cost of this operation in a zk proof depends on the `length` you specify, so prefer a smaller value if possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | the number of bits to fit the element. If the element does not fit in `length` bits, the functions throws an error. |

#### Returns

[`Bool`](Bool.md)[]

An array of [Bool](Bool.md) element representing little endian binary representation of this [Field](Field.md).

#### Defined in

[snarky.d.ts:806](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L806)

___

### toConstant

▸ **toConstant**(): [`Field`](Field.md)

Create a [Field](Field.md) element equivalent to this [Field](Field.md) elements value, but it is a constant in the Circuit.
See [isConstant](Field.md#isconstant) for more information about what is a constant [Field](Field.md).

**`Example`**

```ts
const someField = Field(42);
someField.toConstant().assertEquals(someField); // Always true
```

#### Returns

[`Field`](Field.md)

A constant [Field](Field.md) element equivalent to this [Field](Field.md) element.

#### Defined in

[snarky.d.ts:878](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L878)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

This function is the implementation of [toFields](TokenSymbol.md#tofields) in [Field](Field.md) type.
You can use this array to calculate the [Poseidon](../modules.md#poseidon-1) hash of a [Field](Field.md).
This data structure will be always an array of length 1, where the first and only element equals the [Field](Field.md) itself.

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array of length 1 created from this [Field](Field.md).

#### Defined in

[snarky.d.ts:563](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L563)

___

### toJSON

▸ **toJSON**(): `string`

Serialize the [Field](Field.md) to a JSON string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in an unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the JSON string representation of the [Field](Field.md). Use the operation only during debugging.

**`Example`**

```ts
const someField = Field(42);
console.log(someField.toJSON());
```

#### Returns

`string`

A string equivalent to the JSON representation of the [Field](Field.md).

#### Defined in

[snarky.d.ts:554](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L554)

___

### toString

▸ **toString**(): `string`

Serialize the [Field](Field.md) to a string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in an unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the [Field](Field.md). Use the operation only during debugging.

**`Example`**

```ts
const someField = Field(42);
console.log(someField.toString());
```

#### Returns

`string`

A string equivalent to the string representation of the Field.

#### Defined in

[snarky.d.ts:524](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L524)

___

### check

▸ `Static` **check**(`value`): `void`

This function is the implementation of [check](TokenSymbol.md#check) in [Field](Field.md) type.

As any [Provable](../interfaces/Provable.md) type can be a [Field](Field.md), this function does not create any assertions on the chain, so it basically does nothing :)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | the [Field](Field.md) element to check. |

#### Returns

`void`

#### Defined in

[snarky.d.ts:1017](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1017)

___

### fromBits

▸ `Static` **fromBits**(`bytes`): [`Field`](Field.md)

Convert a bit array into a [Field](Field.md) element using [little endian binary representation](https://en.wikipedia.org/wiki/Endianness)
The function fails if the element cannot fit given too many bits. Note that a [Field](Field.md) element can be 254 bits at most.

**Important**: If the given `bytes` array is an array of `booleans` or [Bool](Bool.md) elements that all are `constant`, the resulting [Field](Field.md) element will be a constant as well. Or else, if the given array is a mixture of constants and variables of [Bool](Bool.md) type, the resulting [Field](Field.md) will be a variable as well.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | (`boolean` \| [`Bool`](Bool.md))[] | An array of [Bool](Bool.md) or `boolean` type. |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element matching the [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of the given `bytes` array.

#### Defined in

[snarky.d.ts:980](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L980)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`Field`](Field.md)

Coerce a new [Field](Field.md) element using the [little-endian](https://en.wikipedia.org/wiki/Endianness) representation of the given `bytes` array.
Note that the given `bytes` array may have at most 32 elements as the [Field](Field.md) is a `finite-field` in the order of [ORDER](Field.md#order).

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the byte representation of the [Field](Field.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `number`[] | The bytes array to coerce the [Field](Field.md) from. |

#### Returns

[`Field`](Field.md)

A new [Field](Field.md) element created using the [little-endian](https://en.wikipedia.org/wiki/Endianness) representation of the given `bytes` array.

#### Defined in

[snarky.d.ts:1052](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1052)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Field`](Field.md)

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

Creates a [Field](Field.md) from an array of length 1 serialized from [Field](Field.md) elements.
Calling this function is equivalent to `fields[0]`, the first index of the [Field](Field.md) array.
This function might seem unnecessary for Dapps since it is designed as the reverse function of [toFields](Field.md#tofields-1).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](Field.md)[] | an array of length 1 serialized from [Field](Field.md) elements. |

#### Returns

[`Field`](Field.md)

The first [Field](Field.md) element of the given array.

#### Defined in

[snarky.d.ts:932](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L932)

___

### fromJSON

▸ `Static` **fromJSON**(`value`): [`Field`](Field.md)

Deserialize a JSON string containing a "field-like" value into a [Field](Field.md) element.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the [Field](Field.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | the "field-like" value to coerce the [Field](Field.md) from. |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) coerced from the given JSON string.

#### Defined in

[snarky.d.ts:1008](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1008)

___

### random

▸ `Static` **random**(): [`Field`](Field.md)

A random [Field](Field.md) element.

**`Example`**

```ts
console.log(Field.random().toBigInt()); // Run this code twice!
```

#### Returns

[`Field`](Field.md)

A random [Field](Field.md) element.

#### Defined in

[snarky.d.ts:919](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L919)

___

### readBytes

▸ `Static` **readBytes**(`bytes`, `offset`): [value: Field, offset: number]

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |
| `offset` | `number` |

#### Returns

[value: Field, offset: number]

#### Defined in

[snarky.d.ts:1059](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1059)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

As all [Field](Field.md) elements have 31 bits, this function returns 31.

#### Returns

`number`

The size of a [Field](Field.md) element - 31.

#### Defined in

[snarky.d.ts:1071](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1071)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

This function is the implementation of [sizeInFields](TokenSymbol.md#sizeinfields) in [Field](Field.md) type.
Size of the [Field](Field.md) type is always 1, as it is the primitive type.
This function returns a reular number, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

This function has the same utility as the [sizeInFields](Field.md#sizeinfields).

**`Example`**

```ts
console.log(Field.sizeInFields()); // Prints 1
```

#### Returns

`number`

A number representing the size of the [Field](Field.md) type in terms of [Field](Field.md) type itself.

#### Defined in

[snarky.d.ts:948](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L948)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`value?`): []

This function is the implementation of [toAuxiliary](TokenSymbol.md#toauxiliary) in [Field](Field.md) type.
As the primitive [Field](Field.md) type has no auxiliary data associated with it, this function will always return an empty array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | [`Field`](Field.md) | The [Field](Field.md) element to get the auxiliary data of, optional. If not provided, the function returns an empty array. |

#### Returns

[]

#### Defined in

[snarky.d.ts:968](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L968)

___

### toBytes

▸ `Static` **toBytes**(`value`): `number`[]

Create an array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given [Field](Field.md) element.
Note that the array has always 32 elements as the [Field](Field.md) is a `finite-field` in the order of [ORDER](Field.md#order).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | The [Field](Field.md) element to generate the array of bytes of. |

#### Returns

`number`[]

An array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given [Field](Field.md) element.

#### Defined in

[snarky.d.ts:1040](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1040)

___

### toFields

▸ `Static` **toFields**(`value`): [`Field`](Field.md)[]

This function is the implementation of [toFields](TokenSymbol.md#tofields) in [Field](Field.md) type.
Static function to serializes a [Field](Field.md) into an array of [Field](Field.md) elements.
You can use this array to calculate the [Poseidon](../modules.md#poseidon-1) hash of a [Field](Field.md).
This will be always an array of length 1, where the first and only element equals the given parameter itself.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | the [Field](Field.md) element to cast the array from. |

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array of length 1 created from this [Field](Field.md).

#### Defined in

[snarky.d.ts:960](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L960)

___

### toInput

▸ `Static` **toInput**(`value`): `Object`

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

This function is the implementation of Provable.toInput in [Field](Field.md) type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | The [Field](Field.md) element to get the `input` array. |

#### Returns

`Object`

An object where the `fields` key is a [Field](Field.md) array of length 1 created from this [Field](Field.md).

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Defined in

[snarky.d.ts:1029](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1029)

___

### toJSON

▸ `Static` **toJSON**(`value`): `string`

Serialize the given [Field](Field.md) element to a JSON string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in an unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the JSON string representation of the [Field](Field.md). Use the operation only during debugging.

**`Example`**

```ts
const someField = Field(42);
console.log(Field.toJSON(someField));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Field`](Field.md) | The JSON string to coerce the [Field](Field.md) from. |

#### Returns

`string`

A string equivalent to the JSON representation of the given [Field](Field.md).

#### Defined in

[snarky.d.ts:997](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L997)
