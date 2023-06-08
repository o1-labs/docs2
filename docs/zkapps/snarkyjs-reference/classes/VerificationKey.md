# Class: VerificationKey

## Hierarchy

- { `data`: `string` = String; `hash`: `Field` = Field }

  ↳ **`VerificationKey`**

## Table of contents

### Constructors

- [constructor](VerificationKey.md#constructor)

### Properties

- [data](VerificationKey.md#data)
- [hash](VerificationKey.md#hash)
- [\_isStruct](VerificationKey.md#_isstruct)
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
| `value.hash` | `Field` | `Field` |

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).constructor

#### Defined in

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/circuit_value.ts#L365)

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

[lib/zkapp.ts:1494](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/zkapp.ts#L1494)

___

### hash

• **hash**: `Field` = `Field`

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).hash

#### Defined in

[lib/zkapp.ts:1494](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/zkapp.ts#L1494)

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

[lib/circuit_value.ts:365](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/circuit_value.ts#L365)

___

### check

▪ `Static` **check**: (`x`: { `data`: `string` = String; `hash`: `Field` = Field }) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | `Field` | `Field` |

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

[snarky.d.ts:34](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L34)

___

### fromFields

▪ `Static` **fromFields**: (`x`: `Field`[], `aux`: `any`[]) => { `data`: `string` = String; `hash`: `Field` = Field }

#### Type declaration

▸ (`x`, `aux`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Field`[] |
| `aux` | `any`[] |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | `Field` |

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromFields

#### Defined in

[snarky.d.ts:32](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L32)

___

### fromJSON

▪ `Static` **fromJSON**: (`x`: `string`) => { `data`: `string` = String; `hash`: `Field` = Field }

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
| `hash` | `Field` |

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).fromJSON

#### Defined in

[lib/circuit_value.ts:373](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/circuit_value.ts#L373)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`x?`: { `data`: `string` = String; `hash`: `Field` = Field }) => `any`[]

#### Type declaration

▸ (`x?`): `any`[]

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x?` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | `Field` | `Field` |

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

[snarky.d.ts:31](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L31)

___

### toFields

▪ `Static` **toFields**: (`x`: { `data`: `string` = String; `hash`: `Field` = Field }) => `Field`[]

#### Type declaration

▸ (`x`): `Field`[]

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | `Field` | `Field` |

##### Returns

`Field`[]

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toFields

#### Defined in

[snarky.d.ts:30](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L30)

___

### toInput

▪ `Static` **toInput**: (`x`: { `data`: `string` = String; `hash`: `Field` = Field }) => { `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | `Field` | `Field` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | `Field`[] |
| `packed?` | [`Field`, `number`][] |

#### Inherited from

Struct({
  ...provable({ data: String, hash: Field }),
  toJSON({ data }: { data: string }) {
    return data;
  },
}).toInput

#### Defined in

[lib/circuit_value.ts:368](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/circuit_value.ts#L368)

___

### toJSON

▪ `Static` **toJSON**: (`x`: { `data`: `string` = String; `hash`: `Field` = Field }) => `string`

#### Type declaration

▸ (`x`): `string`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.data` | `string` | `String` |
| `x.hash` | `Field` | `Field` |

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

[lib/circuit_value.ts:372](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/circuit_value.ts#L372)

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

[snarky.d.ts:33](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L33)
