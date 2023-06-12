[SnarkyJS](../README.md) / [Exports](../modules.md) / VerificationKey

# Class: VerificationKey

## Hierarchy

- { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

  ↳ **`VerificationKey`**

## Table of contents

### Constructors

- [constructor](VerificationKey-1.md#constructor)

### Properties

- [data](VerificationKey-1.md#data)
- [hash](VerificationKey-1.md#hash)
- [\_isStruct](VerificationKey-1.md#_isstruct)
- [check](VerificationKey-1.md#check)
- [fromFields](VerificationKey-1.md#fromfields)
- [fromJSON](VerificationKey-1.md#fromjson)
- [toAuxiliary](VerificationKey-1.md#toauxiliary)
- [toFields](VerificationKey-1.md#tofields)
- [toInput](VerificationKey-1.md#toinput)
- [toJSON](VerificationKey-1.md#tojson)

### Methods

- [sizeInFields](VerificationKey-1.md#sizeinfields)

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

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).constructor

#### Defined in

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L365)

## Properties

### data

• **data**: `string` = `String`

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).data

#### Defined in

[lib/zkapp.ts:1490](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L1490)

___

### hash

• **hash**: [`Field`](Field.md) = `Field`

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).hash

#### Defined in

[lib/zkapp.ts:1490](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L1490)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).\_isStruct

#### Defined in

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L365)

___

### check

▪ `Static` **check**: (`x`: { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | [`Field`](Field.md) | `Field` |

##### Returns

`void`

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).check

#### Defined in

[snarky.d.ts:41](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L41)

___

### fromFields

▪ `Static` **fromFields**: (`x`: [`Field`](Field.md)[], `aux`: `any`[]) => { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

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
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromFields

#### Defined in

[snarky.d.ts:39](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L39)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: `string`) => { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

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

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromJSON

#### Defined in

[lib/circuit_value.ts:373](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L373)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`x?`: { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `any`[]

#### Type declaration

▸ (`x?`): `any`[]

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x?` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | [`Field`](Field.md) | `Field` |

##### Returns

`any`[]

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toAuxiliary

#### Defined in

[snarky.d.ts:38](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L38)

___

### toFields

▪ `Static` **toFields**: (`x`: { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`x`): [`Field`](Field.md)[]

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | [`Field`](Field.md) | `Field` |

##### Returns

[`Field`](Field.md)[]

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toFields

#### Defined in

[snarky.d.ts:37](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L37)

___

### toInput

▪ `Static` **toInput**: (`x`: { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => { `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }

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

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toInput

#### Defined in

[lib/circuit_value.ts:368](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L368)

___

### toJSON

▪ `Static` **toJSON**: (`x`: { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }) => `string`

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

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toJSON

#### Defined in

[lib/circuit_value.ts:372](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/circuit_value.ts#L372)

## Methods

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

#### Returns

`number`

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).sizeInFields

#### Defined in

[snarky.d.ts:40](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L40)
