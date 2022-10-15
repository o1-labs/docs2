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
- [gt](Field.md#gt)
- [gte](Field.md#gte)
- [inv](Field.md#inv)
- [isConstant](Field.md#isconstant)
- [isZero](Field.md#iszero)
- [lt](Field.md#lt)
- [lte](Field.md#lte)
- [mul](Field.md#mul)
- [neg](Field.md#neg)
- [ofFields](Field.md#offields)
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
- [fromBigInt](Field.md#frombigint)
- [fromJSON](Field.md#fromjson)
- [fromNumber](Field.md#fromnumber)
- [fromString](Field.md#fromstring)
- [ofBits](Field.md#ofbits)
- [ofFields](Field.md#offields-1)
- [random](Field.md#random)
- [sizeInFields](Field.md#sizeinfields-1)
- [toFields](Field.md#tofields-1)
- [toInput](Field.md#toinput)
- [toJSON](Field.md#tojson-1)

## Constructors

### constructor

• **new Field**(`x`)

Coerces anything field-like to a [[`Field`]].

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `number` \| `bigint` \| `boolean` \| [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:28](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L28)

## Properties

### ORDER

▪ `Static` **ORDER**: `bigint`

The field order as a `bigint`.

#### Defined in

[snarky.d.ts:266](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L266)

___

### minusOne

▪ `Static` **minusOne**: [`Field`](Field.md)

The number -1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:262](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L262)

___

### one

▪ `Static` **one**: [`Field`](Field.md)

The number 1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:254](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L254)

___

### zero

▪ `Static` **zero**: [`Field`](Field.md)

The number 0 as a [[`Field`]].

#### Defined in

[snarky.d.ts:258](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L258)

## Methods

### add

▸ **add**(`y`): [`Field`](Field.md)

Adds this [[`Field`]] element to another coercible to a field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:56](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L56)

___

### assertBoolean

▸ **assertBoolean**(): `void`

Assert that this [[`Field`]] is either 0 or 1.

```ts
Field.zero.assertBoolean();
```

This function can only be called inside a checked computation, like a
SmartContract method, and throws an error if the assertion fails.

#### Returns

`void`

#### Defined in

[snarky.d.ts:216](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L216)

___

### assertEquals

▸ **assertEquals**(`y`): `void`

Assert that this [[`Field`]] equals another Field-like value.
Throws an error if the assertion fails.

```ts
Field.one.assertEquals(1);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:205](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L205)

___

### assertGt

▸ **assertGt**(`y`): `void`

Assert that this [[`Field`]] is greater than another Field-like value.

```ts
Field.one.assertGt(0);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:184](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L184)

___

### assertGte

▸ **assertGte**(`y`): `void`

Assert that this [[`Field`]] is greater than or equal to another Field-like value.

```ts
Field.one.assertGte(0);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:195](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L195)

___

### assertLt

▸ **assertLt**(`y`): `void`

Assert that this [[`Field`]] is lower than another Field-like value.

```ts
Field.one.assertLt(2);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:162](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L162)

___

### assertLte

▸ **assertLte**(`y`): `void`

Assert that this [[`Field`]] is lower than or equal to another Field-like value.

```ts
Field.one.assertLte(2);
```

This function can only be called inside a checked computation, like a
SmartContract method, and causes it to fail if the assertion fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:173](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L173)

___

### div

▸ **div**(`y`): [`Field`](Field.md)

Divides this [[`Field`]] element through another coercible to a field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:71](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L71)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Check if this [[`Field`]] equals another [[`Field`]]-like value.
Returns a [[`Bool`]].

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

[snarky.d.ts:238](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L238)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

Check if this [[`Field`]] is greater than another Field-like value.
Returns a [[`Bool`]].

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

[snarky.d.ts:140](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L140)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

Check if this [[`Field`]] is greater than or equal to another Field-like value.
Returns a [[`Bool`]].

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

[snarky.d.ts:149](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L149)

___

### inv

▸ **inv**(): [`Field`](Field.md)

Inverts this [[`Field`]] element.

```typescript
const invX = x.inv();
invX.assertEquals(Field.one.div(x));
```

#### Returns

[`Field`](Field.md)

A field element that is equivalent to one divided by this element.

#### Defined in

[snarky.d.ts:51](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L51)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:245](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L245)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:217](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L217)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

Check if this [[`Field`]] is lower than another Field-like value.
Returns a [[`Bool`]].

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

[snarky.d.ts:122](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L122)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

Check if this [[`Field`]] is lower than or equal to another Field-like value.
Returns a [[`Bool`]].

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

[snarky.d.ts:131](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L131)

___

### mul

▸ **mul**(`y`): [`Field`](Field.md)

Multiplies this [[`Field`]] element with another coercible to a field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:66](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L66)

___

### neg

▸ **neg**(): [`Field`](Field.md)

Negates this [[`Field`]]. This is equivalent to multiplying the [[`Field`]]
by -1.

```typescript
const negOne = Field.one.neg();
negOne.assertEquals(-1);
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:39](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L39)

___

### ofFields

▸ **ofFields**(`fields`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:301](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L301)

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

[snarky.d.ts:243](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L243)

___

### seal

▸ **seal**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:241](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L241)

___

### sizeInFields

▸ **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:109](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L109)

___

### sqrt

▸ **sqrt**(): [`Field`](Field.md)

Square roots this [[`Field`]] element.

```typescript
x.square().sqrt().assertEquals(x);
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:90](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L90)

___

### square

▸ **square**(): [`Field`](Field.md)

Squares this [[`Field`]] element.

```typescript
const x2 = x.square();
x2.assertEquals(x.mul(x));
```

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:81](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L81)

___

### sub

▸ **sub**(`y`): [`Field`](Field.md)

Subtracts another [[`Field`]]-like element from this one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:61](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L61)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize the [[`Field`]] to a bigint.
This operation does NOT affect the circuit and can't be used to prove anything about the bigint representation of the Field.

#### Returns

`bigint`

#### Defined in

[snarky.d.ts:101](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L101)

___

### toBits

▸ **toBits**(): [`Bool`](Bool.md)[]

Little endian binary representation of the field element.

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[snarky.d.ts:222](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L222)

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

[snarky.d.ts:228](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L228)

___

### toConstant

▸ **toConstant**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:246](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L246)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:111](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L111)

___

### toJSON

▸ **toJSON**(): `JSONValue`

Serialize the [[`Field`]] to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:106](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L106)

___

### toString

▸ **toString**(): `string`

Serialize the [[`Field`]] to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:96](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L96)

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

[snarky.d.ts:344](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L344)

___

### fromBigInt

▸ `Static` **fromBigInt**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:342](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L342)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): ``null`` \| [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `JSONValue` |

#### Returns

``null`` \| [`Field`](Field.md)

#### Defined in

[snarky.d.ts:338](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L338)

___

### fromNumber

▸ `Static` **fromNumber**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:341](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L341)

___

### fromString

▸ `Static` **fromString**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:340](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L340)

___

### ofBits

▸ `Static` **ofBits**(`x`): [`Field`](Field.md)

Converts a bit array into a field element (little endian)
Fails if the field element cannot fit given too many bits.

TODO: Rename to fromBits

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | (`boolean` \| [`Bool`](Bool.md))[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:325](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L325)

___

### ofFields

▸ `Static` **ofFields**(`fields`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:304](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L304)

___

### random

▸ `Static` **random**(): [`Field`](Field.md)

A random field element.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:271](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L271)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:306](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L306)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:308](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L308)

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

[snarky.d.ts:347](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L347)

___

### toJSON

▸ `Static` **toJSON**(`x`): `JSONValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:337](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L337)
