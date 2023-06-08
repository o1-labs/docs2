# Class: Token

**`Deprecated`**

use `TokenId` instead of `Token.Id` and `TokenId.derive()` instead of `Token.getId()`

## Table of contents

### Constructors

- [constructor](Token.md#constructor)

### Properties

- [id](Token.md#id)
- [parentTokenId](Token.md#parenttokenid)
- [tokenOwner](Token.md#tokenowner)
- [Id](Token.md#id-1)

### Methods

- [getId](Token.md#getid)

## Constructors

### constructor

• **new Token**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `parentTokenId?` | `Field` |
| › `tokenOwner` | [`PublicKey`](Types.PublicKey.md) |

#### Defined in

[lib/account_update.ts:624](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L624)

## Properties

### id

• `Readonly` **id**: `Field`

#### Defined in

[lib/account_update.ts:621](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L621)

___

### parentTokenId

• `Readonly` **parentTokenId**: `Field`

#### Defined in

[lib/account_update.ts:622](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L622)

___

### tokenOwner

• `Readonly` **tokenOwner**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:623](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L623)

___

### Id

▪ `Static` **Id**: `Object` = `TokenId`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: `Field`) => `void` |
| `default` | `Field` |
| `fromFields` | (`x`: `Field`[], `aux`: `any`[]) => `Field` |
| `toAuxiliary` | (`x?`: `Field`) => `any`[] |
| `toFields` | (`x`: `Field`) => `Field`[] |
| `toInput` | (`x`: `Field`) => { `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  } |
| `derive` | (`tokenOwner`: [`PublicKey`](Types.PublicKey.md), `parentTokenId`: `Field`) => `Field` |
| `emptyValue` | () => `Field` |
| `fromBase58` | (`base58`: `string`) => `Field` |
| `fromJSON` | (`x`: `string`) => `Field` |
| `sizeInFields` | () => `number` |
| `toBase58` | (`t`: `Field`) => `string` |
| `toJSON` | (`x`: `Field`) => `string` |

#### Defined in

[lib/account_update.ts:615](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L615)

## Methods

### getId

▸ `Static` **getId**(`tokenOwner`, `parentTokenId?`): `Field`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenOwner` | [`PublicKey`](Types.PublicKey.md) | `undefined` |
| `parentTokenId` | `Field` | `TokenId.default` |

#### Returns

`Field`

#### Defined in

[lib/account_update.ts:617](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/account_update.ts#L617)
