# Class: Bool

## Table of contents

### Constructors

- [constructor](Bool.md#constructor)

### Properties

- [Unsafe](Bool.md#unsafe)

### Methods

- [and](Bool.md#and)
- [assertEquals](Bool.md#assertequals)
- [assertFalse](Bool.md#assertfalse)
- [assertTrue](Bool.md#asserttrue)
- [equals](Bool.md#equals)
- [not](Bool.md#not)
- [or](Bool.md#or)
- [sizeInFields](Bool.md#sizeinfields)
- [toBoolean](Bool.md#toboolean)
- [toField](Bool.md#tofield)
- [toFields](Bool.md#tofields)
- [toJSON](Bool.md#tojson)
- [toString](Bool.md#tostring)
- [and](Bool.md#and-1)
- [assertEqual](Bool.md#assertequal)
- [check](Bool.md#check)
- [count](Bool.md#count)
- [equal](Bool.md#equal)
- [fromJSON](Bool.md#fromjson)
- [not](Bool.md#not-1)
- [ofFields](Bool.md#offields)
- [or](Bool.md#or-1)
- [sizeInFields](Bool.md#sizeinfields-1)
- [toField](Bool.md#tofield-1)
- [toFields](Bool.md#tofields-1)
- [toInput](Bool.md#toinput)
- [toJSON](Bool.md#tojson-1)

## Constructors

### constructor

• **new Bool**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:363](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L363)

## Properties

### Unsafe

▪ `Static` **Unsafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ofField` | (`x`: `string` \| `number` \| `boolean` \| [`Field`](Field.md)) => [`Bool`](Bool.md) |

#### Defined in

[snarky.d.ts:443](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L443)

## Methods

### and

▸ **and**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | A [[`Bool`]] to AND with this [[`Bool`]]. |

#### Returns

[`Bool`](Bool.md)

a new [[`Bool`]] that is set to true only if
this [[`Bool`]] and `y` are also true.

#### Defined in

[snarky.d.ts:380](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L380)

___

### assertEquals

▸ **assertEquals**(`y`): `void`

Proves that this [[`Bool`]] is equal to `y`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [[`Bool`]]. |

#### Returns

`void`

#### Defined in

[snarky.d.ts:393](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L393)

___

### assertFalse

▸ **assertFalse**(): `void`

Proves that this [[`Bool`]] is `false`.

#### Returns

`void`

#### Defined in

[snarky.d.ts:403](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L403)

___

### assertTrue

▸ **assertTrue**(): `void`

Proves that this [[`Bool`]] is `true`.

#### Returns

`void`

#### Defined in

[snarky.d.ts:398](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L398)

___

### equals

▸ **equals**(`y`): [`Bool`](Bool.md)

Returns true if this [[`Bool`]] is equal to `y`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [[`Bool`]]. |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:409](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L409)

___

### not

▸ **not**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

a new [[`Bool`]] that is the negation of this [[`Bool`]].

#### Defined in

[snarky.d.ts:373](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L373)

___

### or

▸ **or**(`y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `boolean` \| [`Bool`](Bool.md) | a [[`Bool`]] to OR with this [[`Bool`]]. |

#### Returns

[`Bool`](Bool.md)

a new [[`Bool`]] that is set to true if either
this [[`Bool`]] or `y` is true.

#### Defined in

[snarky.d.ts:387](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L387)

___

### sizeInFields

▸ **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:411](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L411)

___

### toBoolean

▸ **toBoolean**(): `boolean`

This converts the [[`Bool`]] to a javascript boolean.
This can only be called on non-witness values.

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:429](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L429)

___

### toField

▸ **toField**(): [`Field`](Field.md)

Converts a [[`Bool`]] to a [[`Field`]]. `false` becomes 0 and `true` becomes 1.

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:368](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L368)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:412](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L412)

___

### toJSON

▸ **toJSON**(): `JSONValue`

Serialize the [[`Bool`]] to a JSON string.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:423](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L423)

___

### toString

▸ **toString**(): `string`

Serialize the [[`Bool`]] to a string, e.g. for printing.
This operation does NOT affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Returns

`string`

#### Defined in

[snarky.d.ts:418](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L418)

___

### and

▸ `Static` **and**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:454](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L454)

___

### assertEqual

▸ `Static` **assertEqual**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:457](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L457)

___

### check

▸ `Static` **check**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:469](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L469)

___

### count

▸ `Static` **count**(`x`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean`[] \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:461](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L461)

___

### equal

▸ `Static` **equal**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:459](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L459)

___

### fromJSON

▸ `Static` **fromJSON**(`x`): ``null`` \| [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `JSONValue` |

#### Returns

``null`` \| [`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:468](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L468)

___

### not

▸ `Static` **not**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:453](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L453)

___

### ofFields

▸ `Static` **ofFields**(`fields`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:465](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L465)

___

### or

▸ `Static` **or**(`x`, `y`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |
| `y` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:455](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L455)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Defined in

[snarky.d.ts:463](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L463)

___

### toField

▸ `Static` **toField**(`x`): [`Field`](Field.md)

The constant [[`Bool`]] that is `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` \| [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:441](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L441)

___

### toFields

▸ `Static` **toFields**(`x`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:464](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L464)

___

### toInput

▸ `Static` **toInput**(`x`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `packed` | [[`Field`](Field.md), `number`][] |

#### Defined in

[snarky.d.ts:472](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L472)

___

### toJSON

▸ `Static` **toJSON**(`x`): `JSONValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Bool`](Bool.md) |

#### Returns

`JSONValue`

#### Defined in

[snarky.d.ts:467](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L467)
