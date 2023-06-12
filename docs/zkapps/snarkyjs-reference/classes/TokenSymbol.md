[SnarkyJS](../README.md) / [Exports](../modules.md) / TokenSymbol

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

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L365)

## Properties

### field

• **field**: [`Field`](Field.md)

#### Inherited from

Struct(TokenSymbolPure).field

#### Defined in

[lib/hash.ts:153](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/hash.ts#L153)

___

### symbol

• **symbol**: `string`

#### Inherited from

Struct(TokenSymbolPure).symbol

#### Defined in

[lib/hash.ts:153](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/hash.ts#L153)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(TokenSymbolPure).\_isStruct

#### Defined in

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L365)

___

### check

▪ `Static` **check**: (`x`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | [`Field`](Field.md) |
| `x.symbol` | `string` |

##### Returns

`void`

#### Inherited from

Struct(TokenSymbolPure).check

#### Defined in

[snarky.d.ts:41](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L41)

___

### fromFields

▪ `Static` **fromFields**: (`x`: [`Field`](Field.md)[], `aux`: `any`[]) => { `field`: [`Field`](Field.md) ; `symbol`: `string`  }

#### Type declaration

▸ (`x`, `aux`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Field`](Field.md)[] |
| `aux` | `any`[] |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](Field.md) |
| `symbol` | `string` |

#### Inherited from

Struct(TokenSymbolPure).fromFields

#### Defined in

[snarky.d.ts:39](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L39)

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

[lib/circuit_value.ts:373](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L373)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`x?`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => `any`[]

#### Type declaration

▸ (`x?`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `Object` |
| `x.field` | [`Field`](Field.md) |
| `x.symbol` | `string` |

##### Returns

`any`[]

#### Inherited from

Struct(TokenSymbolPure).toAuxiliary

#### Defined in

[snarky.d.ts:38](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L38)

___

### toFields

▪ `Static` **toFields**: (`x`: { `field`: [`Field`](Field.md) ; `symbol`: `string`  }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`x`): [`Field`](Field.md)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.field` | [`Field`](Field.md) |
| `x.symbol` | `string` |

##### Returns

[`Field`](Field.md)[]

#### Inherited from

Struct(TokenSymbolPure).toFields

#### Defined in

[snarky.d.ts:37](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L37)

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

[lib/circuit_value.ts:368](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L368)

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

[lib/circuit_value.ts:372](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L372)

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

[lib/hash.ts:184](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/hash.ts#L184)

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

[lib/hash.ts:188](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/hash.ts#L188)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

Struct(TokenSymbolPure).sizeInFields

#### Defined in

[snarky.d.ts:40](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L40)
