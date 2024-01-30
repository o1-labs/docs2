[o1js](../README.md) / [Modules](../modules.md) / VerificationKey

# Class: VerificationKey

## Hierarchy

- \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

  ↳ **`VerificationKey`**

## Table of contents

### Constructors

- [constructor](VerificationKey.md#constructor)

### Properties

- [data](VerificationKey.md#data)
- [hash](VerificationKey.md#hash)
- [\_isStruct](VerificationKey.md#_isstruct)
- [check](VerificationKey.md#check)
- [empty](VerificationKey.md#empty)
- [fromFields](VerificationKey.md#fromfields)
- [fromJSON](VerificationKey.md#fromjson)
- [toAuxiliary](VerificationKey.md#toauxiliary)
- [toFields](VerificationKey.md#tofields)
- [toInput](VerificationKey.md#toinput)
- [toJSON](VerificationKey.md#tojson)

### Methods

- [sizeInFields](VerificationKey.md#sizeinfields)

## Constructors

### constructor

• **new VerificationKey**(`value`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `Object` | `undefined` |
| `value.data` | `string` | `String` |
| `value.hash` | [`Field`](Field.md) | `Field` |

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).constructor

#### Defined in

[lib/circuit_value.ts:381](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L381)

## Properties

### data

• **data**: `string` = `String`

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).data

#### Defined in

[lib/proof_system.ts:493](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/proof_system.ts#L493)

___

### hash

• **hash**: [`Field`](Field.md) = `Field`

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).hash

#### Defined in

[lib/proof_system.ts:493](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/proof_system.ts#L493)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).\_isStruct

#### Defined in

[lib/circuit_value.ts:381](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L381)

___

### check

▪ `Static` **check**: (`value`: \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to put assertions on. |
| `value.data` | `string` | `String` | - |
| `value.hash` | [`Field`](Field.md) | `Field` | - |

##### Returns

`void`

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).check

#### Defined in

[snarky.d.ts:98](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L98)

___

### empty

▪ `Static` **empty**: () => \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).empty

#### Defined in

[lib/circuit_value.ts:390](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L390)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: [`Field`](Field.md)[], `aux`: `any`[]) => \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

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
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).fromFields

#### Defined in

[snarky.d.ts:79](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L79)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: `string`) => \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

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
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).fromJSON

#### Defined in

[lib/circuit_value.ts:389](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L389)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value?` | `Object` | `undefined` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.data` | `string` | `String` | - |
| `value.hash` | [`Field`](Field.md) | `Field` | - |

##### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).toAuxiliary

#### Defined in

[snarky.d.ts:67](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L67)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](Field.md) array from. |
| `value.data` | `string` | `String` | - |
| `value.hash` | [`Field`](Field.md) | `Field` | - |

##### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).toFields

#### Defined in

[snarky.d.ts:58](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L58)

___

### toInput

▪ `Static` **toInput**: (`x`: \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | [`Field`](Field.md) | `Field` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | [`Field`](Field.md)[] |
| `packed?` | [[`Field`](Field.md), `number`][] |

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).toInput

#### Defined in

[lib/circuit_value.ts:384](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L384)

___

### toJSON

▪ `Static` **toJSON**: (`x`: \{ `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `string`

#### Type declaration

▸ (`x`): `string`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | [`Field`](Field.md) | `Field` |

##### Returns

`string`

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).toJSON

#### Defined in

[lib/circuit_value.ts:388](https://github.com/o1-labs/o1js/blob/c19ea70/src/lib/circuit_value.ts#L388)

## Methods

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

Struct(\{
  ...provable(\{ data: String, hash: Field }),
  toJSON(\{ data }: \{ data: string }) \{
    return data;
  },
}).sizeInFields

#### Defined in

[snarky.d.ts:88](https://github.com/o1-labs/o1js/blob/c19ea70/src/snarky.d.ts#L88)
