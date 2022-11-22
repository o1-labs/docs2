# Class: CircuitString

**`Deprecated`**

`CircuitValue` is deprecated in favor of [Struct](../README.md#struct), which features a simpler API and better typing.

## Hierarchy

- [`CircuitValue`](CircuitValue.md)

  ↳ **`CircuitString`**

## Table of contents

### Constructors

- [constructor](CircuitString.md#constructor)

### Properties

- [values](CircuitString.md#values)
- [maxLength](CircuitString.md#maxlength)

### Methods

- [append](CircuitString.md#append)
- [assertEquals](CircuitString.md#assertequals)
- [computeLengthAndMask](CircuitString.md#computelengthandmask)
- [equals](CircuitString.md#equals)
- [hash](CircuitString.md#hash)
- [isConstant](CircuitString.md#isconstant)
- [length](CircuitString.md#length)
- [lengthMask](CircuitString.md#lengthmask)
- [maxLength](CircuitString.md#maxlength-1)
- [substring](CircuitString.md#substring)
- [toConstant](CircuitString.md#toconstant)
- [toFields](CircuitString.md#tofields)
- [toJSON](CircuitString.md#tojson)
- [toString](CircuitString.md#tostring)
- [check](CircuitString.md#check)
- [fromCharacters](CircuitString.md#fromcharacters)
- [fromFields](CircuitString.md#fromfields)
- [fromJSON](CircuitString.md#fromjson)
- [fromObject](CircuitString.md#fromobject)
- [fromString](CircuitString.md#fromstring)
- [sizeInFields](CircuitString.md#sizeinfields)
- [toAuxiliary](CircuitString.md#toauxiliary)
- [toConstant](CircuitString.md#toconstant-1)
- [toFields](CircuitString.md#tofields-1)
- [toInput](CircuitString.md#toinput)
- [toJSON](CircuitString.md#tojson-1)

## Constructors

### constructor

• `Private` **new CircuitString**(`values`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Character`](Character.md)[] |

#### Overrides

[CircuitValue](CircuitValue.md).[constructor](CircuitValue.md#constructor)

#### Defined in

[lib/string.ts:44](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L44)

## Properties

### values

• **values**: [`Character`](Character.md)[]

#### Defined in

[lib/string.ts:39](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L39)

___

### maxLength

▪ `Static` **maxLength**: `number` = `DEFAULT_STRING_LENGTH`

#### Defined in

[lib/string.ts:38](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L38)

## Methods

### append

▸ **append**(`str`): [`CircuitString`](CircuitString.md)

appends another string to this one, returns the result and proves that it fits
within the `maxLength` of this string (the other string can have a different maxLength)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | [`CircuitString`](CircuitString.md) |

#### Returns

[`CircuitString`](CircuitString.md)

#### Defined in

[lib/string.ts:87](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L87)

___

### assertEquals

▸ **assertEquals**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`CircuitString`](CircuitString.md) |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[assertEquals](CircuitValue.md#assertequals)

#### Defined in

[lib/circuit_value.ts:152](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L152)

___

### computeLengthAndMask

▸ `Private` **computeLengthAndMask**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `length` | [`Field`](Field.md) |
| `mask` | [`Bool`](Bool.md)[] |

#### Defined in

[lib/string.ts:57](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L57)

___

### equals

▸ **equals**(`x`): [`Bool`](Bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`CircuitString`](CircuitString.md) |

#### Returns

[`Bool`](Bool.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[equals](CircuitValue.md#equals)

#### Defined in

[lib/circuit_value.ts:148](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L148)

___

### hash

▸ **hash**(): [`Field`](Field.md)

returns true if `str` is found in this `CircuitString`

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:123](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L123)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:156](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L156)

___

### length

▸ `Private` **length**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:79](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L79)

___

### lengthMask

▸ `Private` **lengthMask**(): [`Bool`](Bool.md)[]

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[lib/string.ts:76](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L76)

___

### maxLength

▸ `Private` **maxLength**(): `number`

#### Returns

`number`

#### Defined in

[lib/string.ts:52](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L52)

___

### substring

▸ **substring**(`start`, `end`): [`CircuitString`](CircuitString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

[`CircuitString`](CircuitString.md)

#### Defined in

[lib/string.ts:127](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L127)

___

### toConstant

▸ **toConstant**(): [`CircuitString`](CircuitString.md)

#### Returns

[`CircuitString`](CircuitString.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:144](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L144)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:136](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L136)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:140](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L140)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/string.ts:131](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L131)

___

### check

▸ `Static` **check**<`T`\>(`this`, `v`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`void`

#### Inherited from

[CircuitValue](CircuitValue.md).[check](CircuitValue.md#check)

#### Defined in

[lib/circuit_value.ts:185](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L185)

___

### fromCharacters

▸ `Static` **fromCharacters**(`chars`): [`CircuitString`](CircuitString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chars` | [`Character`](Character.md)[] |

#### Returns

[`CircuitString`](CircuitString.md)

#### Defined in

[lib/string.ts:48](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L48)

___

### fromFields

▸ `Static` **fromFields**<`T`\>(`this`, `xs`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `xs` | [`Field`](Field.md)[] |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromFields](CircuitValue.md#fromfields)

#### Defined in

[lib/circuit_value.ts:160](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L160)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromJSON](CircuitValue.md#fromjson)

#### Defined in

[lib/circuit_value.ts:218](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L218)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`<`InstanceType`<`T`\>\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[fromObject](CircuitValue.md#fromobject)

#### Defined in

[lib/circuit_value.ts:81](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L81)

___

### fromString

▸ `Static` **fromString**(`str`): [`CircuitString`](CircuitString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`CircuitString`](CircuitString.md)

#### Defined in

[lib/string.ts:138](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/string.ts#L138)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:88](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L88)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:110](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L110)

___

### toConstant

▸ `Static` **toConstant**<`T`\>(`this`, `t`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant-1)

#### Defined in

[lib/circuit_value.ts:199](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L199)

___

### toFields

▸ `Static` **toFields**<`T`\>(`this`, `v`): [`Field`](Field.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields-1)

#### Defined in

[lib/circuit_value.ts:93](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L93)

___

### toInput

▸ `Static` **toInput**<`T`\>(`this`, `v`): `HashInput`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`HashInput`

#### Inherited from

[CircuitValue](CircuitValue.md).[toInput](CircuitValue.md#toinput)

#### Defined in

[lib/circuit_value.ts:114](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L114)

___

### toJSON

▸ `Static` **toJSON**<`T`\>(`this`, `v`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`<`T`\> |

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson-1)

#### Defined in

[lib/circuit_value.ts:207](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L207)
