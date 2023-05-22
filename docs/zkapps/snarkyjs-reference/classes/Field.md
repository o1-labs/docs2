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
- [assertBool](Field.md#assertbool)
- [assertBoolean](Field.md#assertboolean)
- [assertEquals](Field.md#assertequals)
- [assertGreaterThan](Field.md#assertgreaterthan)
- [assertGreaterThanOrEqual](Field.md#assertgreaterthanorequal)
- [assertGt](Field.md#assertgt)
- [assertGte](Field.md#assertgte)
- [assertLessThan](Field.md#assertlessthan)
- [assertLessThanOrEqual](Field.md#assertlessthanorequal)
- [assertLt](Field.md#assertlt)
- [assertLte](Field.md#assertlte)
- [div](Field.md#div)
- [equals](Field.md#equals)
- [fromFields](Field.md#fromfields)
- [greaterThan](Field.md#greaterthan)
- [greaterThanOrEqual](Field.md#greaterthanorequal)
- [gt](Field.md#gt)
- [gte](Field.md#gte)
- [inv](Field.md#inv)
- [isConstant](Field.md#isconstant)
- [isZero](Field.md#iszero)
- [lessThan](Field.md#lessthan)
- [lessThanOrEqual](Field.md#lessthanorequal)
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
- [fromBytes](Field.md#frombytes)
- [fromFields](Field.md#fromfields-1)
- [fromJSON](Field.md#fromjson)
- [random](Field.md#random)
- [readBytes](Field.md#readbytes)
- [sizeInBytes](Field.md#sizeinbytes)
- [sizeInFields](Field.md#sizeinfields-1)
- [toAuxiliary](Field.md#toauxiliary)
- [toBytes](Field.md#tobytes)
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

[snarky.d.ts:140](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L140)

## Properties

### ORDER

▪ `Static` **ORDER**: `bigint`

The field order as a `bigint`.

#### Defined in

[snarky.d.ts:511](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L511)

___

### minusOne

▪ `Static` **minusOne**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(-1)`.

The number -1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:507](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L507)

___

### one

▪ `Static` **one**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(1)`.

The number 1 as a [[`Field`]].

#### Defined in

[snarky.d.ts:495](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L495)

___

### zero

▪ `Static` **zero**: [`Field`](Field.md)

**`Deprecated`**

Static constant values on Field are deprecated in favor of using the constructor `Field(0)`.

The number 0 as a [[`Field`]].

#### Defined in

[snarky.d.ts:501](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L501)

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

[snarky.d.ts:173](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L173)

___

### assertBool

▸ **assertBool**(`message?`): `void`

Assert that this [Field](Field.md) is either 0 or 1.

```ts
Field(0).assertBool();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:435](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L435)

___

### assertBoolean

▸ **assertBoolean**(`message?`): `void`

**`Deprecated`**

Deprecated - use [assertBool](Field.md#assertbool) instead

Assert that this [Field](Field.md) is either 0 or 1.

```ts
Field(0).assertBoolean();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:447](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L447)

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

[snarky.d.ts:425](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L425)

___

### assertGreaterThan

▸ **assertGreaterThan**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than another Field-like value.

```ts
Field(1).assertGt(0);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:309](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L309)

___

### assertGreaterThanOrEqual

▸ **assertGreaterThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is greater than or equal to another Field-like value.

```ts
Field(1).assertGte(0);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:322](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L322)

___

### assertGt

▸ **assertGt**(`y`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertGreaterThan](Field.md#assertgreaterthan) instead

Assert that this [Field](Field.md) is greater than another Field-like value.

```ts
Field(1).assertGt(0);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:404](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L404)

___

### assertGte

▸ **assertGte**(`y`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertGreaterThanOrEqual](Field.md#assertgreaterthanorequal) instead

Assert that this [Field](Field.md) is greater than or equal to another Field-like value.

```ts
Field(1).assertGte(0);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:415](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L415)

___

### assertLessThan

▸ **assertLessThan**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is lower than another Field-like value.

```ts
Field(1).assertLessThan(2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:286](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L286)

___

### assertLessThanOrEqual

▸ **assertLessThanOrEqual**(`y`, `message?`): `void`

Assert that this [Field](Field.md) is lower than or equal to another Field-like value.

```ts
Field(1).assertLessThanOrEqual(2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:296](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L296)

___

### assertLt

▸ **assertLt**(`y`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertLessThan](Field.md#assertlessthan) instead

Assert that this [Field](Field.md) is lower than another Field-like value.

```ts
Field(1).assertLessThan(2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:383](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L383)

___

### assertLte

▸ **assertLte**(`y`, `message?`): `void`

**`Deprecated`**

Deprecated - use [assertLessThanOrEqual](Field.md#assertlessthanorequal)instead

Assert that this [Field](Field.md) is lower than or equal to another Field-like value.

```ts
Field(1).assertLte(2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:393](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L393)

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

[snarky.d.ts:188](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L188)

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

[snarky.d.ts:470](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L470)

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

[snarky.d.ts:548](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L548)

___

### greaterThan

▸ **greaterThan**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).greaterThan(1); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:264](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L264)

___

### greaterThanOrEqual

▸ **greaterThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is greater than or equal to another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).greaterThanOrEqual(1); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:274](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L274)

___

### gt

▸ **gt**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use `{@link greaterThan}` instead

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

[snarky.d.ts:359](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L359)

___

### gte

▸ **gte**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [greaterThanOrEqual](Field.md#greaterthanorequal) instead

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

[snarky.d.ts:370](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L370)

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

[snarky.d.ts:163](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L163)

___

### isConstant

▸ **isConstant**(): `boolean`

Checks whether this is a hard-coded constant in the Circuit.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:480](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L480)

___

### isZero

▸ **isZero**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:449](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L449)

___

### lessThan

▸ **lessThan**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is lower than another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).lessThan(3); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:244](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L244)

___

### lessThanOrEqual

▸ **lessThanOrEqual**(`y`): [`Bool`](Bool.md)

Check if this [Field](Field.md) is lower than or equal to another Field-like value.
Returns a [Bool](Bool.md).

```ts
Field(2).lessThanOrEqual(3); // Bool(true)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:254](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L254)

___

### lt

▸ **lt**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [lessThan](Field.md#lessthan) instead

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

[snarky.d.ts:337](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L337)

___

### lte

▸ **lte**(`y`): [`Bool`](Bool.md)

**`Deprecated`**

Deprecated - use [lessThanOrEqual](Field.md#lessthanorequal) instead

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

[snarky.d.ts:348](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L348)

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

[snarky.d.ts:183](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L183)

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

[snarky.d.ts:151](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L151)

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

[snarky.d.ts:475](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L475)

___

### seal

▸ **seal**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:473](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L473)

___

### sizeInFields

▸ **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:228](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L228)

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

[snarky.d.ts:207](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L207)

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

[snarky.d.ts:198](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L198)

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

[snarky.d.ts:178](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L178)

___

### toBigInt

▸ **toBigInt**(): `bigint`

Serialize this instance of a [Field](Field.md) to a bigint.
This operation does NOT affect the circuit and can't be used to prove anything about the bigint representation of the Field.

#### Returns

`bigint`

#### Defined in

[snarky.d.ts:218](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L218)

___

### toBits

▸ **toBits**(): [`Bool`](Bool.md)[]

Little endian binary representation of the field element.

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[snarky.d.ts:454](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L454)

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

[snarky.d.ts:460](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L460)

___

### toConstant

▸ **toConstant**(): [`Field`](Field.md)

Returns a constant.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:485](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L485)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

Serializes this data structure into [Field](Field.md) elements.

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:233](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L233)

___

### toJSON

▸ **toJSON**(): `string`

Serialize this instance of a [Field](Field.md) to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:223](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L223)

___

### toString

▸ **toString**(): `string`

Serialize the [Field](Field.md) to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:213](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L213)

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

[snarky.d.ts:606](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L606)

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

[snarky.d.ts:582](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L582)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:611](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L611)

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

[snarky.d.ts:553](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L553)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): [`Field`](Field.md)

Deserialize a JSON structure into a [Field](Field.md).
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:604](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L604)

___

### random

▸ `Static` **random**(): [`Field`](Field.md)

A random field element.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:516](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L516)

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

[snarky.d.ts:612](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L612)

___

### sizeInBytes

▸ `Static` **sizeInBytes**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:616](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L616)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Returns the size of this type.

#### Returns

`number`

#### Defined in

[snarky.d.ts:558](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L558)

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

[snarky.d.ts:567](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L567)

___

### toBytes

▸ `Static` **toBytes**(`x`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md) |

#### Returns

`number`[]

#### Defined in

[snarky.d.ts:610](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L610)

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

[snarky.d.ts:563](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L563)

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

[snarky.d.ts:609](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L609)

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

[snarky.d.ts:598](https://github.com/o1-labs/snarkyjs/blob/2fa164e/src/snarky.d.ts#L598)
