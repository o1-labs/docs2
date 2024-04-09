[o1js](../README.md) / [Modules](../modules.md) / CircuitString

# Class: CircuitString

## Hierarchy

- `CircuitValue`

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
- [empty](CircuitString.md#empty)
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

CircuitValue.constructor

#### Defined in

[lib/provable/string.ts:46](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L46)

## Properties

### values

• **values**: [`Character`](Character.md)[]

#### Defined in

[lib/provable/string.ts:41](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L41)

___

### maxLength

▪ `Static` **maxLength**: `number` = `DEFAULT_STRING_LENGTH`

#### Defined in

[lib/provable/string.ts:40](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L40)

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

[lib/provable/string.ts:89](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L89)

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

CircuitValue.assertEquals

#### Defined in

[lib/provable/types/circuit-value.ts:101](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L101)

___

### computeLengthAndMask

▸ `Private` **computeLengthAndMask**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `length` | `Field` |
| `mask` | `Bool`[] |

#### Defined in

[lib/provable/string.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L59)

___

### equals

▸ **equals**(`x`): `Bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`CircuitString`](CircuitString.md) |

#### Returns

`Bool`

#### Inherited from

CircuitValue.equals

#### Defined in

[lib/provable/types/circuit-value.ts:97](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L97)

___

### hash

▸ **hash**(): `Field`

returns true if `str` is found in this `CircuitString`

#### Returns

`Field`

#### Defined in

[lib/provable/string.ts:125](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L125)

___

### isConstant

▸ **isConstant**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CircuitValue.isConstant

#### Defined in

[lib/provable/types/circuit-value.ts:105](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L105)

___

### length

▸ `Private` **length**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/provable/string.ts:81](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L81)

___

### lengthMask

▸ `Private` **lengthMask**(): `Bool`[]

#### Returns

`Bool`[]

#### Defined in

[lib/provable/string.ts:78](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L78)

___

### maxLength

▸ `Private` **maxLength**(): `number`

#### Returns

`number`

#### Defined in

[lib/provable/string.ts:54](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L54)

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

[lib/provable/string.ts:129](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L129)

___

### toConstant

▸ **toConstant**(): [`CircuitString`](CircuitString.md)

#### Returns

[`CircuitString`](CircuitString.md)

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:93](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L93)

___

### toFields

▸ **toFields**(): `Field`[]

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:85](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L85)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:89](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L89)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/provable/string.ts:133](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L133)

___

### check

▸ `Static` **check**\<`T`\>(`this`, `v`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`void`

#### Inherited from

CircuitValue.check

#### Defined in

[lib/provable/types/circuit-value.ts:134](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L134)

___

### empty

▸ `Static` **empty**\<`T`\>(): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.empty

#### Defined in

[lib/provable/types/circuit-value.ts:189](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L189)

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

[lib/provable/string.ts:50](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L50)

___

### fromFields

▸ `Static` **fromFields**\<`T`\>(`this`, `xs`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `xs` | `Field`[] |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromFields

#### Defined in

[lib/provable/types/circuit-value.ts:109](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L109)

___

### fromJSON

▸ `Static` **fromJSON**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

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

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromJSON

#### Defined in

[lib/provable/types/circuit-value.ts:167](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L167)

___

### fromObject

▸ `Static` **fromObject**\<`T`\>(`this`, `value`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `NonMethods`\<`InstanceType`\<`T`\>\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.fromObject

#### Defined in

[lib/provable/types/circuit-value.ts:30](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L30)

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

[lib/provable/string.ts:140](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/string.ts#L140)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

CircuitValue.sizeInFields

#### Defined in

[lib/provable/types/circuit-value.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L37)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(): []

#### Returns

[]

#### Inherited from

CircuitValue.toAuxiliary

#### Defined in

[lib/provable/types/circuit-value.ts:59](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L59)

___

### toConstant

▸ `Static` **toConstant**\<`T`\>(`this`, `t`): `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `t` | `InstanceType`\<`T`\> |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

CircuitValue.toConstant

#### Defined in

[lib/provable/types/circuit-value.ts:148](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L148)

___

### toFields

▸ `Static` **toFields**\<`T`\>(`this`, `v`): `Field`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`Field`[]

#### Inherited from

CircuitValue.toFields

#### Defined in

[lib/provable/types/circuit-value.ts:42](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L42)

___

### toInput

▸ `Static` **toInput**\<`T`\>(`this`, `v`): `HashInput`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`HashInput`

#### Inherited from

CircuitValue.toInput

#### Defined in

[lib/provable/types/circuit-value.ts:63](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L63)

___

### toJSON

▸ `Static` **toJSON**\<`T`\>(`this`, `v`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `v` | `InstanceType`\<`T`\> |

#### Returns

`any`

#### Inherited from

CircuitValue.toJSON

#### Defined in

[lib/provable/types/circuit-value.ts:156](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/circuit-value.ts#L156)
