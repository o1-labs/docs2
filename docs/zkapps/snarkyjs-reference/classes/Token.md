# Class: Token

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

• **new Token**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.parentTokenId?` | [`Field`](Field.md) |
| `__namedParameters.tokenOwner` | [`PublicKey`](Types.PublicKey.md) |

#### Defined in

[lib/account_update.ts:611](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L611)

## Properties

### id

• `Readonly` **id**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:597](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L597)

___

### parentTokenId

• `Readonly` **parentTokenId**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:598](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L598)

___

### tokenOwner

• `Readonly` **tokenOwner**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:599](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L599)

___

### Id

▪ `Static` **Id**: `Object` = `TokenId`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](Field.md)) => `void` |
| `default` | [`Field`](Field.md) |
| `fromFields` | (`x`: [`Field`](Field.md)[], `aux`: `any`[]) => [`Field`](Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](Field.md)) => [`Field`](Field.md)[] |
| `toInput` | (`x`: [`Field`](Field.md)) => { `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  } |
| `fromBase58` | (`base58`: `string`) => [`Field`](Field.md) |
| `sizeInFields` | () => `number` |
| `toBase58` | (`field`: [`Field`](Field.md)) => `string` |
| `toJSON` | (`x`: [`Field`](Field.md)) => `string` |

#### Defined in

[lib/account_update.ts:601](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L601)

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

[lib/account_update.ts:603](https://github.com/o1-labs/snarkyjs/blob/531db432/src/lib/account_update.ts#L603)
