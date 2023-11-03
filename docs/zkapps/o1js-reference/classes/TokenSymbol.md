[o1js](../README.md) / [Modules](../modules.md) / TokenSymbol

# Class: TokenSymbol

## Hierarchy

- { `field`: [`Field`](Field.md) ; `symbol`: `string`  }

  ↳ **`TokenSymbol`**

## Table of contents

### Constructors

- [constructor](TokenSymbol.md#constructor)

### Properties

- [field](TokenSymbol.md#field)
- [symbol](TokenSymbol.md#symbol)
- [\_isStruct](TokenSymbol.md#_isstruct)
- [check](TokenSymbol.md#check)
- [fromFields](TokenSymbol.md#fromfields)
- [fromJSON](TokenSymbol.md#fromjson)
- [toAuxiliary](TokenSymbol.md#toauxiliary)
- [toFields](TokenSymbol.md#tofields)
- [toInput](TokenSymbol.md#toinput)
- [toJSON](TokenSymbol.md#tojson)

### Accessors

- [empty](TokenSymbol.md#empty)

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
| `value.field` | [`Field`](Field.md) |
| `value.symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).constructor

#### Defined in

[lib/circuit_value.ts:366](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit_value.ts#L366)

## Properties

### field

• **field**: [`Field`](Field.md)

#### Inherited from

Struct(TokenSymbolPure).field

#### Defined in

[lib/hash.ts:153](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/hash.ts#L153)

___

### symbol

• **symbol**: `string`

#### Inherited from

Struct(TokenSymbolPure).symbol

#### Defined in

[lib/hash.ts:153](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/hash.ts#L153)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(TokenSymbolPure).\_isStruct

#### Defined in

[lib/circuit_value.ts:366](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit_value.ts#L366)

___

### check

▪ `Static` **check**: (`value`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Object` | the element of type `T` to put assertions on. |
| `value.field` | [`Field`](Field.md) | - |
| `value.symbol` | `string` | - |

##### Returns

`void`

#### Inherited from

Struct(TokenSymbolPure).check

#### Defined in

[snarky.d.ts:97](https://github.com/o1-labs/o1js/blob/56975fc/src/snarky.d.ts#L97)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: [`Field`](Field.md)[], `aux`: `any`[]) => { `field`: [`Field`](Field.md) ; `symbol`: `string`  }

#### Type declaration

▸ (`fields`, `aux`): `Object`

A function that returns an element of type `T` from the given provable and "auxiliary" data.

**Important**: For any element of type `T`, this function is the reverse operation of calling [toFields](../interfaces/Provable.md#tofields) and toAuxilary methods on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](Field.md)[] | an array of [Field](Field.md) elements describing the provable data of the new `T` element. |
| `aux` | `any`[] | an array of any type describing the "auxiliary" data of the new `T` element, optional. |

##### Returns

`Object`

An element of type `T` generated from the given provable and "auxiliary" data.

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](Field.md) |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).fromFields

#### Defined in

[snarky.d.ts:78](https://github.com/o1-labs/o1js/blob/56975fc/src/snarky.d.ts#L78)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: `string`) => { `field`: [`Field`](Field.md) ; `symbol`: `string`  }

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
| `field` | [`Field`](Field.md) |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).fromJSON

#### Defined in

[lib/circuit_value.ts:374](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit_value.ts#L374)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `Object` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.field` | [`Field`](Field.md) | - |
| `value.symbol` | `string` | - |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

Struct(TokenSymbolPure).toAuxiliary

#### Defined in

[snarky.d.ts:66](https://github.com/o1-labs/o1js/blob/56975fc/src/snarky.d.ts#L66)

___

### toFields

▪ `Static` **toFields**: (`value`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Object` | the element of type `T` to generate the [Field](Field.md) array from. |
| `value.field` | [`Field`](Field.md) | - |
| `value.symbol` | `string` | - |

##### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

Struct(TokenSymbolPure).toFields

#### Defined in

[snarky.d.ts:57](https://github.com/o1-labs/o1js/blob/56975fc/src/snarky.d.ts#L57)

___

### toInput

▪ `Static` **toInput**: (`x`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => { `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | [`Field`](Field.md) |
| `x.symbol` | `string` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | [`Field`](Field.md)[] |
| `packed?` | [[`Field`](Field.md), `number`][] |

#### Inherited from

Struct(TokenSymbolPure).toInput

#### Defined in

[lib/circuit_value.ts:369](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit_value.ts#L369)

___

### toJSON

▪ `Static` **toJSON**: (`x`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => `string`

#### Type declaration

▸ (`x`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | [`Field`](Field.md) |
| `x.symbol` | `string` |

##### Returns

`string`

#### Inherited from

Struct(TokenSymbolPure).toJSON

#### Defined in

[lib/circuit_value.ts:373](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/circuit_value.ts#L373)

## Accessors

### empty

• `Static` `get` **empty**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](Field.md) |
| `symbol` | `string` |

#### Defined in

[lib/hash.ts:184](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/hash.ts#L184)

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

[lib/hash.ts:188](https://github.com/o1-labs/o1js/blob/56975fc/src/lib/hash.ts#L188)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

Struct(TokenSymbolPure).sizeInFields

#### Defined in

[snarky.d.ts:87](https://github.com/o1-labs/o1js/blob/56975fc/src/snarky.d.ts#L87)
