# Class: Field

## Table of contents

### Constructors

- [constructor](Field.md#constructor)

### Properties

- [ORDER](Field.md#order)
- [minusOne](Field.md#minusone)
- [one](Field.md#one)
- [zero](Field.md#zero)

### Methods

- [add](Field.md#add)
- [assertBoolean](Field.md#assertboolean)
- [assertEquals](Field.md#assertequals)
- [assertGt](Field.md#assertgt)
- [assertGte](Field.md#assertgte)
- [assertLt](Field.md#assertlt)
- [assertLte](Field.md#assertlte)
- [div](Field.md#div)
- [equals](Field.md#equals)
- [fromFields](Field.md#fromfields)
- [gt](Field.md#gt)
- [gte](Field.md#gte)
- [inv](Field.md#inv)
- [isConstant](Field.md#isconstant)
- [isZero](Field.md#iszero)
- [lt](Field.md#lt)
- [lte](Field.md#lte)
- [mul](Field.md#mul)
- [neg](Field.md#neg)
- [rangeCheckHelper](Field.md#rangecheckhelper)
- [seal](Field.md#seal)
- [sizeInFields](Field.md#sizeinfields)
- [sqrt](Field.md#sqrt)
- [square](Field.md#square)
- [sub](Field.md#sub)
- [toBigInt](Field.md#tobigint)
- [toBits](Field.md#tobits)
- [toConstant](Field.md#toconstant)
- [toFields](Field.md#tofields)
- [toJSON](Field.md#tojson)
- [toString](Field.md#tostring)
- [check](Field.md#check)
- [fromBits](Field.md#frombits)
- [fromFields](Field.md#fromfields-1)
- [fromJSON](Field.md#fromjson)
- [random](Field.md#random)
- [sizeInFields](Field.md#sizeinfields-1)
- [toAuxiliary](Field.md#toauxiliary)
- [toFields](Field.md#tofields-1)
- [toInput](Field.md#toinput)
- [toJSON](Field.md#tojson-1)

## Constructors

### constructor

• **new Field**(`x`)

Coerces anything field-like to a [Field](Field.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:53](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L53)

## Properties

### ORDER

▪ `Static` **ORDER**: `bigint`

The field order as a `bigint`.

#### Defined in

[snarky.d.ts:314](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L314)

___

### minusOne

▪ `Static` **minusOne**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(-1)`.

The number -1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:310](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L310)

___

### one

▪ `Static` **one**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(1)`.

The number 1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:298](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L298)

___

### zero

▪ `Static` **zero**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(0)`.

The number 0 as a [[`Field`]].

#### Defined in

[snarky.d.ts:304](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L304)

## Methods

### add

▸ **add**(`y`): [`Field`](Field.md)

Adds this [Field](Field.md) element to another to a [Field](Field.md) element.

```ts
let a = Field(3);
let sum = a.add(5)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:86](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L86)

___

### assertBoolean

▸ **assertBoolean**(`message?`): `void`

Assert that this [Field](Field.md) is either 0 or 1.

```ts
Field(0).assertBoolean();
```

This function can only be called inside a checked computation, like a
SmartContract method, and throws an error if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:251](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L251)

___

### assertEquals

▸ **assertEquals**(`y`, `message?`): `void`

Assert that this [Field](Field.md) equals another Field-like value.
Throws an error if the assertion fails.

```ts
Field(1).assertEquals(1);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:240](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L240)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than another Field-like value.

```ts
Field(1).assertGt(0);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:219](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L219)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than or equal to another Field-like value.

```ts
Field(1).assertGte(0);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:230](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L230)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is lower than another Field-like value.

```ts
Field(1).assertLt(2);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:197](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L197)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is lower than or equal to another Field-like value.

```ts
Field(1).assertLte(2);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:208](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L208)

___

### div

▸ **div**(`y`): [`Field`](Field.md)

Divides this [Field](Field.md) element through another coercible to a field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:101](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L101)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) equals another [Field](Field.md)-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).equals(2); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:273](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L273)

___

### fromFields

▸ **fromFields**(`fields`): [`Field`](Field.md)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:351](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L351)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).gt(1); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:175](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L175)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than or equal to another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).gte(1); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:184](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L184)

___

### inv

▸ **inv**(): [`Field`](Field.md)

Inverts this [Field](Field.md) element.

```typescript
const invX = x.inv();
invX.assertEquals(Field(1).div(x));
```

#### Returns

[`Field`](Field.md)

A [Field](Field.md) element that is equivalent to one divided by this element.

#### Defined in

[snarky.d.ts:76](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L76)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this is a hard-coded constant in the Circuit.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:283](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L283)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:252](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L252)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is lower than another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).lt(3); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:157](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L157)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is lower than or equal to another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).lte(3); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:166](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L166)

___

### mul

▸ **mul**(`y`): [`Field`](Field.md)

Multiplies this [Field](Field.md) element with another coercible to a field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:96](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L96)

___

### neg

▸ **neg**(): [`Field`](Field.md)

Negates this [Field](Field.md). This is equivalent to multiplying the [Field](Field.md)
by -1.

```typescript
const negOne = Field(1).neg();
negOne.assertEquals(-1);
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:64](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L64)

___

### rangeCheckHelper

▸ **rangeCheckHelper**(`numBits`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numBits` | `number` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:278](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L278)

___

### seal

▸ **seal**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:276](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L276)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:141](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L141)

___

### sqrt

▸ **sqrt**(): [`Field`](Field.md)

Square roots this [Field](Field.md) element.

```typescript
x.square().sqrt().assertEquals(x);
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:120](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L120)

___

### square

▸ **square**(): [`Field`](Field.md)

Squares this [Field](Field.md) element.

```typescript
const x2 = x.square();
x2.assertEquals(x.mul(x));
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:111](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L111)

___

### sub

▸ **sub**(`y`): [`Field`](Field.md)

Subtracts another [Field](Field.md)-like element from this one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:91](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L91)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize this instance of a [Field](Field.md) to a bigint.
This operation does NOT affect the circuit and can't be used to prove anything about the bigint representation of the Field.

#### Returns

`bigint`

#### Defined in

[snarky.d.ts:131](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L131)

___

### toBits

▸ **toBits**(): [`Bool`](Bool.md)[]

Little endian binary representation of the field element.

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[snarky.d.ts:257](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L257)

▸ **toBits**(`length`): [`Bool`](Bool.md)[]

Little endian binary representation of the field element.
Fails if the field element cannot fit in `length` bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[snarky.d.ts:263](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L263)

___

### toConstant

▸ **toConstant**(): [`Field`](Field.md)

Returns a constant.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:288](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L288)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this data structure into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:146](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L146)

___

### toJSON

▸ **toJSON**(): `string`

Serialize this instance of a [Field](Field.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:136](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L136)

___

### toString

▸ **toString**(): `string`

Serialize the [Field](Field.md) to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:126](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L126)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:409](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L409)

___

### fromBits

▸ `Static` **fromBits**(`x`): [`Field`](Field.md)

Converts a bit array into a field element (little endian)
Fails if the field element cannot fit given too many bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | (`boolean` \| [`Bool`](Bool.md))[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:385](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L385)

___

### fromFields

▸ `Static` **fromFields**(`fields`): [`Field`](Field.md)

Creates a data structure from an array of serialized [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:356](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L356)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Field`](Field.md)

Deserialize a JSON structure into a [Field](Field.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:407](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L407)

___

### random

▸ `Static` **random**(): [`Field`](Field.md)

A random field element.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:319](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L319)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:361](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L361)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`x?`): []

Static method to serialize a [Field](Field.md) into its auxiliary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | [`Field`](Field.md) |

#### Returns

[]

#### Defined in

[snarky.d.ts:370](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L370)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

Static method to serialize a [Field](Field.md) into an array of [Field](Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:366](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L366)

___

### toInput

▸ `Static` **toInput**(`x`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Defined in

[snarky.d.ts:412](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L412)

___

### toJSON

▸ `Static` **toJSON**(`x`): `string`

Serialize a [Field](Field.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:401](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/snarky.d.ts#L401)
