[SnarkyJS](../README.md) / [Modules](../modules.md) / Ledger

# Class: Ledger

Represents the Mina ledger.

## Table of contents

### Constructors

- [constructor](Ledger.md#constructor)

### Methods

- [addAccount](Ledger.md#addaccount)
- [applyJsonTransaction](Ledger.md#applyjsontransaction)
- [getAccount](Ledger.md#getaccount)
- [create](Ledger.md#create)

## Constructors

### constructor

• **new Ledger**()

## Methods

### addAccount

▸ **addAccount**(`publicKey`, `balance`): `void`

Adds an account and its balance to the ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKey`](../modules.md#mlpublickey) |
| `balance` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:393](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/snarky.d.ts#L393)

___

### applyJsonTransaction

▸ **applyJsonTransaction**(`txJson`, `accountCreationFee`, `networkState`): `void`

Applies a JSON transaction to the ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `accountCreationFee` | `string` |
| `networkState` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:398](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/snarky.d.ts#L398)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId`): `undefined` \| [`Account`](../modules/Types.Json.md#account)

Returns an account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKey`](../modules.md#mlpublickey) |
| `tokenId` | `Uint8Array` |

#### Returns

`undefined` \| [`Account`](../modules/Types.Json.md#account)

#### Defined in

[snarky.d.ts:407](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/snarky.d.ts#L407)

___

### create

▸ `Static` **create**(): [`Ledger`](Ledger.md)

Creates a fresh ledger.

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[snarky.d.ts:388](https://github.com/o1-labs/snarkyjs/blob/fdc740a/src/snarky.d.ts#L388)
