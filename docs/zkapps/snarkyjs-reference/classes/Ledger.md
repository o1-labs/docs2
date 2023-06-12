[SnarkyJS](../README.md) / [Exports](../modules.md) / Ledger

# Class: Ledger

Represents the Mina ledger.

## Table of contents

### Constructors

- [constructor](Ledger.md#constructor)

### Properties

- [encoding](Ledger.md#encoding)
- [hashInputFromJson](Ledger.md#hashinputfromjson)

### Methods

- [addAccount](Ledger.md#addaccount)
- [applyJsonTransaction](Ledger.md#applyjsontransaction)
- [getAccount](Ledger.md#getaccount)
- [checkAccountUpdateSignature](Ledger.md#checkaccountupdatesignature)
- [create](Ledger.md#create)
- [createTokenAccount](Ledger.md#createtokenaccount)
- [customTokenId](Ledger.md#customtokenid)
- [customTokenIdChecked](Ledger.md#customtokenidchecked)
- [fieldsOfJson](Ledger.md#fieldsofjson)
- [hashAccountUpdateFromJson](Ledger.md#hashaccountupdatefromjson)
- [transactionCommitments](Ledger.md#transactioncommitments)
- [zkappPublicInput](Ledger.md#zkapppublicinput)

## Constructors

### constructor

• **new Ledger**()

## Properties

### encoding

▪ `Static` **encoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `versionBytes` | `Record`<``"tokenIdKey"`` \| ``"receiptChainHash"`` \| ``"ledgerHash"`` \| ``"epochSeed"`` \| ``"stateHash"`` \| ``"publicKey"`` \| ``"userCommandMemo"``, `number`\> |
| `ofBase58` | (`base58`: `string`, `versionByte`: `number`) => `MlBytes` |
| `toBase58` | (`s`: `MlBytes`, `versionByte`: `number`) => `string` |

#### Defined in

[snarky.d.ts:1381](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1381)

___

### hashInputFromJson

▪ `Static` **hashInputFromJson**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountPrecondition` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |
| `body` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |
| `networkPrecondition` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |
| `packInput` | (`input`: [`MlHashInput`](../modules.md#mlhashinput-1)) => [`MlArray`](../modules.md#mlarray-1)<`Uint8Array`\> |
| `permissions` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |
| `timing` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |
| `update` | (`json`: `String`) => [`MlHashInput`](../modules.md#mlhashinput-1) |

#### Defined in

[snarky.d.ts:1370](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1370)

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

[snarky.d.ts:1316](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1316)

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

[snarky.d.ts:1321](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1321)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId`): `undefined` \| `Account`

Returns an account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKey`](../modules.md#mlpublickey) |
| `tokenId` | `Uint8Array` |

#### Returns

`undefined` \| `Account`

#### Defined in

[snarky.d.ts:1330](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1330)

___

### checkAccountUpdateSignature

▸ `Static` **checkAccountUpdateSignature**(`updateJson`, `commitment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateJson` | `string` |
| `commitment` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1362](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1362)

___

### create

▸ `Static` **create**(`genesisAccounts`): [`Ledger`](Ledger.md)

Creates a fresh ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `genesisAccounts` | { `balance`: `string` ; `publicKey`: [`MlPublicKey`](../modules.md#mlpublickey)  }[] |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[snarky.d.ts:1309](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1309)

___

### createTokenAccount

▸ `Static` **createTokenAccount**(`publicKey`, `tokenId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKey`](../modules.md#mlpublickey) |
| `tokenId` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1357](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1357)

___

### customTokenId

▸ `Static` **customTokenId**(`publicKey`, `tokenId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKey`](../modules.md#mlpublickey) |
| `tokenId` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[snarky.d.ts:1352](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1352)

___

### customTokenIdChecked

▸ `Static` **customTokenIdChecked**(`publicKey`, `tokenId`): [`FieldVar`](../modules.md#fieldvar-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`MlPublicKeyVar`](../modules.md#mlpublickeyvar) |
| `tokenId` | [`FieldVar`](../modules.md#fieldvar-1) |

#### Returns

[`FieldVar`](../modules.md#fieldvar-1)

#### Defined in

[snarky.d.ts:1353](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1353)

___

### fieldsOfJson

▸ `Static` **fieldsOfJson**(`json`): [`MlArray`](../modules.md#mlarray-1)<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`MlArray`](../modules.md#mlarray-1)<`Uint8Array`\>

#### Defined in

[snarky.d.ts:1367](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1367)

___

### hashAccountUpdateFromJson

▸ `Static` **hashAccountUpdateFromJson**(`json`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[snarky.d.ts:1368](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1368)

___

### transactionCommitments

▸ `Static` **transactionCommitments**(`txJson`): `Object`

Returns the commitment of a JSON transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `commitment` | `Uint8Array` |
| `feePayerHash` | `Uint8Array` |
| `fullCommitment` | `Uint8Array` |

#### Defined in

[snarky.d.ts:1338](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1338)

___

### zkappPublicInput

▸ `Static` **zkappPublicInput**(`txJson`, `accountUpdateIndex`): `Object`

Returns the public input of a zkApp transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `accountUpdateIndex` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | `Uint8Array` |
| `calls` | `Uint8Array` |

#### Defined in

[snarky.d.ts:1347](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/snarky.d.ts#L1347)
