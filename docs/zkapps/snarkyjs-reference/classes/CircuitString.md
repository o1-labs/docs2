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

[lib/string.ts:45](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L45)

## Properties

### values

• **values**: [`Character`](Character.md)[]

#### Defined in

[lib/string.ts:40](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L40)

___

### maxLength

▪ `Static` **maxLength**: `number` = `DEFAULT_STRING_LENGTH`

#### Defined in

[lib/string.ts:39](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L39)

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

[lib/string.ts:88](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L88)

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

[lib/circuit_value.ts:175](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L175)

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

[lib/string.ts:58](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L58)

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

[lib/circuit_value.ts:171](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L171)

___

### hash

▸ **hash**(): [`Field`](Field.md)

returns true if `str` is found in this `CircuitString`

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:124](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L124)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CircuitValue](CircuitValue.md).[isConstant](CircuitValue.md#isconstant)

#### Defined in

[lib/circuit_value.ts:179](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L179)

___

### length

▸ `Private` **length**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/string.ts:80](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L80)

___

### lengthMask

▸ `Private` **lengthMask**(): [`Bool`](Bool.md)[]

#### Returns

[`Bool`](Bool.md)[]

#### Defined in

[lib/string.ts:77](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L77)

___

### maxLength

▸ `Private` **maxLength**(): `number`

#### Returns

`number`

#### Defined in

[lib/string.ts:53](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L53)

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

[lib/string.ts:128](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L128)

___

### toConstant

▸ **toConstant**(): [`CircuitString`](CircuitString.md)

#### Returns

[`CircuitString`](CircuitString.md)

#### Inherited from

[CircuitValue](CircuitValue.md).[toConstant](CircuitValue.md#toconstant)

#### Defined in

[lib/circuit_value.ts:167](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L167)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toFields](CircuitValue.md#tofields)

#### Defined in

[lib/circuit_value.ts:159](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L159)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[CircuitValue](CircuitValue.md).[toJSON](CircuitValue.md#tojson)

#### Defined in

[lib/circuit_value.ts:163](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L163)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/string.ts:132](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L132)

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

[lib/circuit_value.ts:208](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L208)

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

[lib/string.ts:49](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L49)

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

[lib/circuit_value.ts:183](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L183)

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

[lib/circuit_value.ts:241](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L241)

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

[lib/circuit_value.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L104)

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

[lib/string.ts:139](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/string.ts#L139)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

[CircuitValue](CircuitValue.md).[sizeInFields](CircuitValue.md#sizeinfields)

#### Defined in

[lib/circuit_value.ts:111](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L111)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

[CircuitValue](CircuitValue.md).[toAuxiliary](CircuitValue.md#toauxiliary)

#### Defined in

[lib/circuit_value.ts:133](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L133)

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

[lib/circuit_value.ts:222](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L222)

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

[lib/circuit_value.ts:116](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L116)

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

[lib/circuit_value.ts:137](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L137)

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

[lib/circuit_value.ts:230](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/circuit_value.ts#L230)
