# Class: VerificationKey

## Hierarchy

- { `data`: `string` = String; `hash`: [`Field`](Field.md) = Field }

  ↳ **`VerificationKey`**

## Table of contents

### Constructors

- [constructor](VerificationKey.md#constructor)

### Properties

- [data](VerificationKey.md#data)
- [hash](VerificationKey.md#hash)
- [check](VerificationKey.md#check)
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

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).constructor

#### Defined in

[lib/circuit_value.ts:728](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L728)

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

[lib/zkapp.ts:1303](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1303)

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

[lib/zkapp.ts:1303](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1303)

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

[snarky.d.ts:29](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L29)

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

[snarky.d.ts:27](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L27)

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

[lib/circuit_value.ts:735](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L735)

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

[snarky.d.ts:26](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L26)

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

[snarky.d.ts:25](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L25)

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

[lib/circuit_value.ts:730](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L730)

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

[lib/circuit_value.ts:734](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/circuit_value.ts#L734)

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

[snarky.d.ts:28](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/snarky.d.ts#L28)
