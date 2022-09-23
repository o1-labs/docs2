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

[lib/account_update.ts:567](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L567)

## Properties

### id

• `Readonly` **id**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:553](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L553)

___

### parentTokenId

• `Readonly` **parentTokenId**: [`Field`](Field.md)

#### Defined in

[lib/account_update.ts:554](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L554)

___

### tokenOwner

• `Readonly` **tokenOwner**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:555](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L555)

___

### Id

▪ `Static` **Id**: `Object` = `TokenId`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](Field.md)) => `void` |
| `default` | [`Field`](Field.md) |
| `ofFields` | (`x`: [`Field`](Field.md)[]) => [`Field`](Field.md) |
| `toFields` | (`x`: [`Field`](Field.md)) => [`Field`](Field.md)[] |
| `toInput` | (`x`: [`Field`](Field.md)) => { `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](Field.md)) => `JSONValue` |
| `fromBase58` | (`base58`: `string`) => [`Field`](Field.md) |
| `sizeInFields` | () => `number` |
| `toBase58` | (`field`: [`Field`](Field.md)) => `string` |

#### Defined in

[lib/account_update.ts:557](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L557)

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

[lib/account_update.ts:559](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L559)
