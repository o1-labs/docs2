[o1js](../README.md) / [Modules](../modules.md) / TokenSymbol

# Class: TokenSymbol

## Hierarchy

- \{ `field`: `Field` ; `symbol`: `string`  }

  ↳ **`TokenSymbol`**

## Table of contents

### Constructors

- [constructor](TokenSymbol.md#constructor)

### Properties

- [field](TokenSymbol.md#field)
- [symbol](TokenSymbol.md#symbol)
- [\_isStruct](TokenSymbol.md#_isstruct)
- [check](TokenSymbol.md#check)
- [empty](TokenSymbol.md#empty)
- [fromFields](TokenSymbol.md#fromfields)
- [fromJSON](TokenSymbol.md#fromjson)
- [toAuxiliary](TokenSymbol.md#toauxiliary)
- [toFields](TokenSymbol.md#tofields)
- [toInput](TokenSymbol.md#toinput)
- [toJSON](TokenSymbol.md#tojson)

### Methods

- [from](TokenSymbol.md#from)
- [sizeInFields](TokenSymbol.md#sizeinfields)

## Constructors

### constructor

• **new TokenSymbol**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Object` |
| `value.field` | `Field` |
| `value.symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).constructor

#### Defined in

[lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L143)

## Properties

### field

• **field**: `Field`

#### Inherited from

Struct(TokenSymbolPure).field

#### Defined in

[lib/provable/crypto/poseidon.ts:194](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/poseidon.ts#L194)

___

### symbol

• **symbol**: `string`

#### Inherited from

Struct(TokenSymbolPure).symbol

#### Defined in

[lib/provable/crypto/poseidon.ts:194](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/poseidon.ts#L194)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(TokenSymbolPure).\_isStruct

#### Defined in

[lib/provable/types/struct.ts:143](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L143)

___

### check

▪ `Static` **check**: (`value`: \{ `field`: `Field` ; `symbol`: `string`  }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](../modules.md#bool) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Object` | the element of type `T` to put assertions on. |
| `value.field` | `Field` | - |
| `value.symbol` | `string` | - |

##### Returns

`void`

#### Inherited from

Struct(TokenSymbolPure).check

#### Defined in

[lib/provable/types/provable-intf.ts:66](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L66)

___

### empty

▪ `Static` **empty**: () => \{ `field`: `Field` ; `symbol`: `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | `Field` |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).empty

#### Defined in

[lib/provable/types/struct.ts:152](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L152)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: `Field`[], `aux`: `any`[]) => \{ `field`: `Field` ; `symbol`: `string`  }

#### Type declaration

▸ (`fields`, `aux`): `Object`

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](TokenSymbol.md#tofields) and toAuxilary methods on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `Field`[] | an array of [Field](../modules.md#field) elements describing the provable data of the new `T` element. |
| `aux` | `any`[] | an array of any type describing the "auxiliary" data of the new `T` element, optional. |

##### Returns

`Object`

An element of type `T` generated from the given provable and "auxiliary" data.

| Name | Type |
| :------ | :------ |
| `field` | `Field` |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).fromFields

#### Defined in

[lib/provable/types/provable-intf.ts:49](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L49)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: `string`) => \{ `field`: `Field` ; `symbol`: `string`  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | `Field` |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).fromJSON

#### Defined in

[lib/provable/types/struct.ts:151](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L151)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `field`: `Field` ; `symbol`: `string`  }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `Object` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.field` | `Field` | - |
| `value.symbol` | `string` | - |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

Struct(TokenSymbolPure).toAuxiliary

#### Defined in

[lib/provable/types/provable-intf.ts:37](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L37)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `field`: `Field` ; `symbol`: `string`  }) => `Field`[]

#### Type declaration

▸ (`value`): `Field`[]

A function that takes `value`, an element of type `T`, as argument and returns
an array of [Field](../modules.md#field) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Object` | the element of type `T` to generate the [Field](../modules.md#field) array from. |
| `value.field` | `Field` | - |
| `value.symbol` | `string` | - |

##### Returns

`Field`[]

A [Field](../modules.md#field) array describing how this `T` element is made up of [Field](../modules.md#field) elements.

#### Inherited from

Struct(TokenSymbolPure).toFields

#### Defined in

[lib/provable/types/provable-intf.ts:26](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L26)

___

### toInput

▪ `Static` **toInput**: (`x`: \{ `field`: `Field` ; `symbol`: `string`  }) => \{ `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | `Field` |
| `x.symbol` | `string` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | `Field`[] |
| `packed?` | [`Field`, `number`][] |

#### Inherited from

Struct(TokenSymbolPure).toInput

#### Defined in

[lib/provable/types/struct.ts:146](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L146)

___

### toJSON

▪ `Static` **toJSON**: (`x`: \{ `field`: `Field` ; `symbol`: `string`  }) => `string`

#### Type declaration

▸ (`x`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | `Field` |
| `x.symbol` | `string` |

##### Returns

`string`

#### Inherited from

Struct(TokenSymbolPure).toJSON

#### Defined in

[lib/provable/types/struct.ts:150](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/struct.ts#L150)

## Methods

### from

▸ `Static` **from**(`symbol`): [`TokenSymbol`](TokenSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |

#### Returns

[`TokenSymbol`](TokenSymbol.md)

#### Defined in

[lib/provable/crypto/poseidon.ts:227](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/poseidon.ts#L227)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](../modules.md#field) type, as [Field](../modules.md#field) is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](../modules.md#field) type.

#### Inherited from

Struct(TokenSymbolPure).sizeInFields

#### Defined in

[lib/provable/types/provable-intf.ts:56](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/types/provable-intf.ts#L56)
