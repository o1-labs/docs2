[o1js](../README.md) / [Modules](../modules.md) / Token

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
| › `parentTokenId?` | [`Field`](Field.md) |
| › `tokenOwner` | [`PublicKey`](Types.PublicKey.md) |

#### Defined in

[lib/account_update.ts:632](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L632)

## Properties

### id

• `Readonly` **id**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:629](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L629)

___

### parentTokenId

• `Readonly` **parentTokenId**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:630](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L630)

___

### tokenOwner

• `Readonly` **tokenOwner**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:631](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L631)

___

### Id

▪ `Static` **Id**: `Object` = `TokenId`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](Field.md)) => `void` |
| `default` | [`Field`](Field.md) |
| `empty` | () => [`Field`](Field.md) |
| `fromFields` | (`x`: [`Field`](Field.md)[], `aux`: `any`[]) => [`Field`](Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](Field.md)) => [`Field`](Field.md)[] |
| `toInput` | (`x`: [`Field`](Field.md)) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  } |
| `derive` | (`tokenOwner`: [`PublicKey`](Types.PublicKey.md), `parentTokenId`: [`Field`](Field.md)) => [`Field`](Field.md) |
| `fromBase58` | (`base58`: `string`) => [`Field`](Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](Field.md) |
| `sizeInFields` | () => `number` |
| `toBase58` | (`t`: [`Field`](Field.md)) => `string` |
| `toJSON` | (`x`: [`Field`](Field.md)) => `string` |

#### Defined in

[lib/account_update.ts:623](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L623)

## Methods

### getId

▸ `Static` **getId**(`tokenOwner`, `parentTokenId?`): [`Field`](Field.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenOwner` | [`PublicKey`](Types.PublicKey.md) | `undefined` |
| `parentTokenId` | [`Field`](Field.md) | `TokenId.default` |

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account_update.ts:625](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/account_update.ts#L625)
