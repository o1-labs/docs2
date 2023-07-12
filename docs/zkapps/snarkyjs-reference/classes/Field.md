[SnarkyJS](../README.md) / [Modules](../modules.md) / Field

# Class: Field

A [Field](Field.md) is an element of a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field).
Every other provable type is built using the [Field](Field.md) type.

The field is the [pasta base field](https://electriccoin.co/blog/the-pasta-curves-for-halo-2-and-beyond/) of order 2^254 + 0x224698fc094cf91b992d30ed00000001 ([ORDER](Field.md#order)).

You can create a new Field from everything "field-like" (`bigint`, integer `number`, decimal `string`, `Field`).

**`Example`**

```
Field(10n); // Field contruction from a big integer
Field(100); // Field construction from a number
Field("1"); // Field construction from a decimal string
```

**Beware**: Fields _cannot_ be constructed from fractional numbers or alphanumeric strings:
```ts
Field(3.141); // ERROR: Cannot convert a float to a field element
Field("abc"); // ERROR: Invalid argument "abc"
```

Creating a Field from a negative number can result in unexpected behavior if you are not familiar with [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic).

**`Example`**

```
const x = Field(-1); // Valid Field construction from negative number
const y = Field(Field.ORDER - 1n); // equivalent to `x`
```

**Important**: All the functions defined on a Field (arithmetic, logic, etc.) take their arguments as "field-like". A Field itself is also defined as a "field-like" element.

**`Param`**

the value to convert to a [Field](Field.md)

## Table of contents

### Constructors

- [constructor](Field.md#constructor)

### Properties

- [value](Field.md#value)
- [ORDER](Field.md#order)

### Methods

- [#compare](Field.md##compare)
- [#toConstant](Field.md##toconstant)
- [add](Field.md#add)
- [assertBool](Field.md#assertbool)
- [assertEquals](Field.md#assertequals)
- [assertGreaterThan](Field.md#assertgreaterthan)
- [assertGreaterThanOrEqual](Field.md#assertgreaterthanorequal)
- [assertLessThan](Field.md#assertlessthan)
- [assertLessThanOrEqual](Field.md#assertlessthanorequal)
- [assertNotEquals](Field.md#assertnotequals)
- [div](Field.md#div)
- [equals](Field.md#equals)
- [greaterThan](Field.md#greaterthan)
- [greaterThanOrEqual](Field.md#greaterthanorequal)
- [inv](Field.md#inv)
- [isConstant](Field.md#isconstant)
- [isZero](Field.md#iszero)
- [lessThan](Field.md#lessthan)
- [lessThanOrEqual](Field.md#lessthanorequal)
- [mul](Field.md#mul)
- [neg](Field.md#neg)
- [rangeCheckHelper](Field.md#rangecheckhelper)
- [seal](Field.md#seal)
- [sqrt](Field.md#sqrt)
- [square](Field.md#square)
- [sub](Field.md#sub)
- [toAuxiliary](Field.md#toauxiliary)
- [toBigInt](Field.md#tobigint)
- [toBits](Field.md#tobits)
- [toConstant](Field.md#toconstant)
- [toFields](Field.md#tofields)
- [toJSON](Field.md#tojson)
- [toString](Field.md#tostring)
- [#checkBitLength](Field.md##checkbitlength)
- [#isField](Field.md##isfield)
- [#toConst](Field.md##toconst)
- [#toVar](Field.md##tovar)
- [check](Field.md#check)
- [from](Field.md#from)
- [fromBits](Field.md#frombits)
- [fromBytes](Field.md#frombytes)
- [fromFields](Field.md#fromfields)
- [fromJSON](Field.md#fromjson)
- [random](Field.md#random)
- [readBytes](Field.md#readbytes)
- [sizeInBytes](Field.md#sizeinbytes)
- [sizeInFields](Field.md#sizeinfields)
- [toAuxiliary](Field.md#toauxiliary-1)
- [toBytes](Field.md#tobytes)
- [toFields](Field.md#tofields-1)
- [toInput](Field.md#toinput)
- [toJSON](Field.md#tojson-1)

## Constructors

### constructor

• **new Field**(`x`)

Coerce anything "field-like" (bigint, number, string, and [Field](Field.md)) to a Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Uint8Array` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |

#### Defined in

[lib/field.ts:143](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L143)

## Properties

### value

• **value**: [`FieldVar`](../modules.md#fieldvar-1)

#### Defined in

[lib/field.ts:132](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L132)

___

### ORDER

▪ `Static` **ORDER**: `bigint` = `Fp.modulus`

The order of the pasta curve that [Field](Field.md) type build on as a `bigint`.
Order of the [Field](Field.md) is 28948022309329048855892746252171976963363056481941560715954676764349967630337.

#### Defined in

[lib/field.ts:138](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L138)

## Methods

### #compare

▸ `Private` **#compare**(`y`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`FieldVar`](../modules.md#fieldvar-1) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `less` | [`Bool`](Bool.md) |
| `lessOrEqual` | [`Bool`](Bool.md) |

#### Defined in

[lib/field.ts:613](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L613)

___

### #toConstant

▸ `Private` **#toConstant**(`name`): [`ConstantField`](../modules.md#constantfield)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ConstantField`](../modules.md#constantfield)

#### Defined in

[lib/field.ts:203](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L203)

___

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

[lib/field.ts:311](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L311)

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

[lib/field.ts:877](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L877)

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

[lib/field.ts:269](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L269)

___

### assertGreaterThan

▸ **assertGreaterThan**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than another "field-like" value.
Calling this function is equivalent to `Field(...).greaterThan(...).assertEquals(Bool(true))`.
See [greaterThan](Field.md#greaterthan) for more details.

**Important**: If an assertion fails, the code throws an error.

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/field.ts:818](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L818)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than or equal to another "field-like" value.
Calling this function is equivalent to `Field(...).greaterThanOrEqual(...).assertEquals(Bool(true))`.
See [greaterThanOrEqual](Field.md#greaterthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/field.ts:835](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L835)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is less than another "field-like" value.
Calling this function is equivalent to `Field(...).lessThan(...).assertEquals(Bool(true))`.
See [lessThan](Field.md#lessthan) for more details.

**Important**: If an assertion fails, the code throws an error.

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/field.ts:762](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L762)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is less than or equal to another "field-like" value.
Calling this function is equivalent to `Field(...).lessThanOrEqual(...).assertEquals(Bool(true))`.
See [lessThanOrEqual](Field.md#lessthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/field.ts:790](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L790)

___

### assertNotEquals

▸ **assertNotEquals**(`y`, `message?`): `void`

Assert that this [Field](Field.md) does not equal another field-like value.

Note: This uses fewer constraints than `x.equals(y).assertFalse()`.

**`Example`**

```ts
x.assertNotEquals(0, "expect x to be non-zero");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[lib/field.ts:852](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L852)

___

### div

▸ **div**(`y`): [`Field`](Field.md)

Divide another "field-like" value through this [Field](Field.md).

Proves that the denominator is non-zero, or throws a "Division by zero" error.

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

[lib/field.ts:481](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L481)

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

[lib/field.ts:593](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L593)

___

### greaterThan

▸ **greaterThan**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(5).greaterThan(3).assertEquals(Bool(true));
```

**Warning**: Comparison methods currently only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(2)).greaterThan(Field(1).div(Field(3))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is greater than another "field-like" value.

#### Defined in

[lib/field.ts:716](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L716)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than or equal another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(3).greaterThanOrEqual(3).assertEquals(Bool(true));
```

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(2)).greaterThanOrEqual(Field(1).div(Field(3))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is greater than or equal another "field-like" value.

#### Defined in

[lib/field.ts:744](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L744)

___

### inv

▸ **inv**(): [`Field`](Field.md)

[Modular inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of this [Field](Field.md) element.
Equivalent to 1 divided by this [Field](Field.md), in the sense of modular arithmetic.

Proves that this Field is non-zero, or throws a "Division by zero" error.

**`Example`**

```ts
const someField = Field(42);
const inverse = someField.inv();
inverse.assertEquals(Field(1).div(example)); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular inverse. See [div](Field.md#div) method for more details.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equivalent to one divided by this element.

#### Defined in

[lib/field.ts:433](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L433)

___

### isConstant

▸ **isConstant**(): this is Object

Check whether this [Field](Field.md) element is a hard-coded constant in the constraint system.
If a [Field](Field.md) is constructed outside a zkApp method, it is a constant.

**`Example`**

```ts
console.log(Field(42).isConstant()); // true
```

**`Example`**

```ts
\@method myMethod(x: Field) {
   console.log(x.isConstant()); // false
}
```

#### Returns

this is Object

A `boolean` showing if this [Field](Field.md) is a constant or not.

#### Defined in

[lib/field.ts:199](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L199)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

**`Deprecated`**

use `x.equals(0)` which is equivalent

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/field.ts:553](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L553)

___

### lessThan

▸ **lessThan**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is less than another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used prove to the validity of this statement.

**`Example`**

```ts
Field(2).lessThan(3).assertEquals(Bool(true));
```

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behavior when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(3)).lessThan(Field(1).div(Field(2))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is less than another "field-like" value.

#### Defined in

[lib/field.ts:656](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L656)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is less than or equal to another "field-like" value.
Returns a [Bool](Bool.md), which is a provable type and can be used to prove the validity of this statement.

**`Example`**

```ts
Field(3).lessThanOrEqual(3).assertEquals(Bool(true));
```

**Warning**: Comparison methods only support Field elements of size <= 253 bits in provable code.
The method will throw if one of the inputs exceeds 253 bits.

**Warning**: As this method compares the bigint value of a [Field](Field.md), it can result in unexpected behaviour when used with negative inputs or modular division.

**`Example`**

```ts
Field(1).div(Field(3)).lessThanOrEqual(Field(1).div(Field(2))).assertEquals(Bool(true)); // This code will throw an error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

A [Bool](Bool.md) representing if this [Field](Field.md) is less than or equal another "field-like" value.

#### Defined in

[lib/field.ts:686](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L686)

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

[lib/field.ts:394](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L394)

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

**Warning**: This is a modular negation. For details, see the [sub](Field.md#sub) method.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equivalent to the element multiplied by -1.

#### Defined in

[lib/field.ts:339](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L339)

___

### rangeCheckHelper

▸ **rangeCheckHelper**(`length`): [`Field`](Field.md)

Create a new [Field](Field.md) element from the first `length` bits of this [Field](Field.md) element.

The `length` has to be a multiple of 16, and has to be between 0 and 255, otherwise the method throws.

As [Field](Field.md) elements are represented using [little endian binary representation](https://en.wikipedia.org/wiki/Endianness),
the resulting [Field](Field.md) element will equal the original one if it fits in `length` bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | The number of bits to take from this [Field](Field.md) element. |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equal to the `length` of this [Field](Field.md) element.

#### Defined in

[lib/field.ts:969](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L969)

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

[lib/field.ts:997](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L997)

___

### sqrt

▸ **sqrt**(): [`Field`](Field.md)

Take the square root of this [Field](Field.md) element.

Proves that the Field element has a square root in the finite field, or throws if it doesn't.

**`Example`**

```ts
let z = x.sqrt();
z.mul(z).assertEquals(x); // true for every `x`
```

**Warning**: This is a modular square root, which is any number z that satisfies z*z = x (mod p).
Note that, if a square root z exists, there also exists a second one, -z (which is different if z != 0).
Therefore, this method leaves an adversarial prover the choice between two different values to return.

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element equivalent to the square root of the [Field](Field.md) element.

#### Defined in

[lib/field.ts:531](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L531)

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

[lib/field.ts:501](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L501)

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

[lib/field.ts:375](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L375)

___

### toAuxiliary

▸ **toAuxiliary**(): []

This function is the implementation of [toAuxiliary](../interfaces/Provable.md#toauxiliary) for the [Field](Field.md) type.

As the primitive [Field](Field.md) type has no auxiliary data associated with it, this function will always return an empty array.

#### Returns

[]

#### Defined in

[lib/field.ts:1105](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1105)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize the [Field](Field.md) to a bigint, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in unreadable output.

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

[lib/field.ts:237](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L237)

___

### toBits

▸ **toBits**(`length?`): [`Bool`](Bool.md)[]

Returns an array of [Bool](Bool.md) elements representing [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of this [Field](Field.md) element.

If you use the optional `length` argument, proves that the field element fits in `length` bits.
The `length` has to be between 0 and 255 and the method throws if it isn't.

**Warning**: The cost of this operation in a zk proof depends on the `length` you specify,
which by default is 255 bits. Prefer to pass a smaller `length` if possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length?` | `number` | the number of bits to fit the element. If the element does not fit in `length` bits, the functions throws an error. |

#### Returns

[`Bool`](Bool.md)[]

An array of [Bool](Bool.md) element representing little endian binary representation of this [Field](Field.md).

#### Defined in

[lib/field.ts:914](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L914)

___

### toConstant

▸ **toConstant**(): [`ConstantField`](../modules.md#constantfield)

Create a [Field](Field.md) element equivalent to this [Field](Field.md) element's value,
but is a constant.
See [isConstant](Field.md#isconstant) for more information about what is a constant [Field](Field.md).

**`Example`**

```ts
const someField = Field(42);
someField.toConstant().assertEquals(someField); // Always true
```

#### Returns

[`ConstantField`](../modules.md#constantfield)

A constant [Field](Field.md) element equivalent to this [Field](Field.md) element.

#### Defined in

[lib/field.ts:220](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L220)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

This function is the implementation of [toFields](../interfaces/Provable.md#tofields) for the [Field](Field.md) type.

The result will be always an array of length 1, where the first and only element equals the [Field](Field.md) itself.

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array of length 1 created from this [Field](Field.md).

#### Defined in

[lib/field.ts:1096](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1096)

___

### toJSON

▸ **toJSON**(): `string`

Serialize the [Field](Field.md) to a JSON string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in unreadable output.

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

[lib/field.ts:1124](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1124)

___

### toString

▸ **toString**(): `string`

Serialize the [Field](Field.md) to a string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in unreadable output.

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

[lib/field.ts:255](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L255)

___

### #checkBitLength

▸ `Static` `Private` **#checkBitLength**(`name`, `length`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[lib/field.ts:892](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L892)

___

### #isField

▸ `Static` `Private` **#isField**(`x`): x is Field

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `Uint8Array` \| [`FieldVar`](../modules.md#fieldvar-1) \| [`Field`](Field.md) |

#### Returns

x is Field

#### Defined in

[lib/field.ts:163](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L163)

___

### #toConst

▸ `Static` `Private` **#toConst**(`x`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`ConstantField`](../modules.md#constantfield) |

#### Returns

`Uint8Array`

#### Defined in

[lib/field.ts:168](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L168)

___

### #toVar

▸ `Static` `Private` **#toVar**(`x`): [`FieldVar`](../modules.md#fieldvar-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`FieldVar`](../modules.md#fieldvar-1)

#### Defined in

[lib/field.ts:172](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L172)

___

### check

▸ `Static` **check**(): `void`

This function is the implementation of [check](../interfaces/Provable.md#check) in [Field](Field.md) type.

As any field element can be a [Field](Field.md), this function does not create any assertions, so it does nothing.

#### Returns

`void`

#### Defined in

[lib/field.ts:1087](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1087)

___

### from

▸ `Static` **from**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/field.ts:176](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L176)

___

### fromBits

▸ `Static` **fromBits**(`bits`): [`Field`](Field.md)

Convert a bit array into a [Field](Field.md) element using [little endian binary representation](https://en.wikipedia.org/wiki/Endianness)

The method throws if the given bits do not fit in a single Field element. A Field element can be at most 255 bits.

**Important**: If the given `bytes` array is an array of `booleans` or [Bool](Bool.md) elements that all are `constant`, the resulting [Field](Field.md) element will be a constant as well. Or else, if the given array is a mixture of constants and variables of [Bool](Bool.md) type, the resulting [Field](Field.md) will be a variable as well.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | (`boolean` \| [`Bool`](Bool.md))[] |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element matching the [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of the given `bytes` array.

#### Defined in

[lib/field.ts:940](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L940)

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

[lib/field.ts:1211](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1211)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Field`](Field.md)

Implementation of [fromFields](../interfaces/Provable.md#fromfields) for the [Field](Field.md) type.

**Warning**: This function is designed for internal use. It is not intended to be used by a zkApp developer.

Creates a [Field](Field.md) from an array of Fields of length 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](Field.md)[] | an array of length 1 serialized from [Field](Field.md) elements. |

#### Returns

[`Field`](Field.md)

The first [Field](Field.md) element of the given array.

#### Defined in

[lib/field.ts:1076](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1076)

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`Field`](Field.md)

Deserialize a JSON string containing a "field-like" value into a [Field](Field.md) element.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the [Field](Field.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Field`](Field.md)

A [Field](Field.md) coerced from the given JSON string.

#### Defined in

[lib/field.ts:1156](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1156)

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

[lib/field.ts:1015](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1015)

___

### readBytes

▸ `Static` **readBytes**<`N`\>(`bytes`, `offset`): [value: Field, offset: number]

Part of the `Binable` interface.

**Warning**: This function is for internal use. It is not intended to be used by a zkApp developer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |
| `offset` | `NonNegativeInteger`<`N`\> |

#### Returns

[value: Field, offset: number]

#### Defined in

[lib/field.ts:1194](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1194)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

As all [Field](Field.md) elements have 31 bits, this function returns 31.

#### Returns

`number`

The size of a [Field](Field.md) element - 31.

#### Defined in

[lib/field.ts:1222](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1222)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

This function is the implementation of [sizeInFields](../interfaces/Provable.md#sizeinfields) for the [Field](Field.md) type.

Size of the [Field](Field.md) type is 1, as it is the primitive type.
This function returns a regular number, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

**`Example`**

```ts
console.log(Field.sizeInFields()); // Prints 1
```

#### Returns

`number`

A number representing the size of the [Field](Field.md) type in terms of [Field](Field.md) type itself.

#### Defined in

[lib/field.ts:1061](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1061)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

This function is the implementation of [toAuxiliary](../interfaces/Provable.md#toauxiliary) for the [Field](Field.md) type.

As the primitive [Field](Field.md) type has no auxiliary data associated with it, this function will always return an empty array.

#### Returns

[]

#### Defined in

[lib/field.ts:1044](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1044)

___

### toBytes

▸ `Static` **toBytes**(`x`): `number`[]

Create an array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given [Field](Field.md) element.
Note that the array has always 32 elements as the [Field](Field.md) is a `finite-field` in the order of [ORDER](Field.md#order).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`number`[]

An array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given [Field](Field.md) element.

#### Defined in

[lib/field.ts:1185](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1185)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

This function is the implementation of [toFields](../interfaces/Provable.md#tofields) for the [Field](Field.md) type.

Static function to serializes a [Field](Field.md) into an array of [Field](Field.md) elements.
This will be always an array of length 1, where the first and only element equals the given parameter itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array of length 1 created from this [Field](Field.md).

#### Defined in

[lib/field.ts:1033](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1033)

___

### toInput

▸ `Static` **toInput**(`x`): `Object`

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

This function is the implementation of `ProvableExtended.toInput()` for the [Field](Field.md) type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`Object`

An object where the `fields` key is a [Field](Field.md) array of length 1 created from this [Field](Field.md).

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Defined in

[lib/field.ts:1170](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1170)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Serialize the given [Field](Field.md) element to a JSON string, e.g. for printing. Trying to print a [Field](Field.md) without this function will directly stringify the Field object, resulting in unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the JSON string representation of the [Field](Field.md). Use the operation only during debugging.

**`Example`**

```ts
const someField = Field(42);
console.log(Field.toJSON(someField));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`string`

A string equivalent to the JSON representation of the given [Field](Field.md).

#### Defined in

[lib/field.ts:1143](https://github.com/o1-labs/snarkyjs/blob/79a90a2/src/lib/field.ts#L1143)
