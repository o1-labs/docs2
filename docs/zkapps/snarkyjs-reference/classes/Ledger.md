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
- [dummySignature](Ledger.md#dummysignature)
- [fieldOfBase58](Ledger.md#fieldofbase58)
- [fieldToBase58](Ledger.md#fieldtobase58)
- [fieldsOfJson](Ledger.md#fieldsofjson)
- [hashAccountUpdateFromFields](Ledger.md#hashaccountupdatefromfields)
- [hashAccountUpdateFromJson](Ledger.md#hashaccountupdatefromjson)
- [memoHashBase58](Ledger.md#memohashbase58)
- [memoToBase58](Ledger.md#memotobase58)
- [privateKeyOfString](Ledger.md#privatekeyofstring)
- [privateKeyToString](Ledger.md#privatekeytostring)
- [publicKeyOfString](Ledger.md#publickeyofstring)
- [publicKeyToString](Ledger.md#publickeytostring)
- [signFeePayer](Ledger.md#signfeepayer)
- [signFieldElement](Ledger.md#signfieldelement)
- [signOtherAccountUpdate](Ledger.md#signotheraccountupdate)
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

[snarky.d.ts:1250](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1250)

___

### hashInputFromJson

▪ `Static` **hashInputFromJson**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountPrecondition` | (`json`: `String`) => `OcamlInput` |
| `body` | (`json`: `String`) => `OcamlInput` |
| `networkPrecondition` | (`json`: `String`) => `OcamlInput` |
| `packInput` | (`input`: `OcamlInput`) => [`Field`](Field.md)[] |
| `permissions` | (`json`: `String`) => `OcamlInput` |
| `timing` | (`json`: `String`) => `OcamlInput` |
| `update` | (`json`: `String`) => `OcamlInput` |

#### Defined in

[snarky.d.ts:1239](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1239)

## Methods

### addAccount

▸ **addAccount**(`publicKey`, `balance`): `void`

Adds an account and its balance to the ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `balance` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:1155](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1155)

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

[snarky.d.ts:1160](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1160)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId`): `undefined` \| [`Account`](../modules/Types.Json.md#account)

Returns an account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | [`Field`](Field.md) |

#### Returns

`undefined` \| [`Account`](../modules/Types.Json.md#account)

#### Defined in

[snarky.d.ts:1169](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1169)

___

### checkAccountUpdateSignature

▸ `Static` **checkAccountUpdateSignature**(`updateJson`, `commitment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateJson` | `string` |
| `commitment` | [`Field`](Field.md) |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1230](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1230)

___

### create

▸ `Static` **create**(`genesisAccounts`): [`Ledger`](Ledger.md)

Creates a fresh ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `genesisAccounts` | { `balance`: `string` ; `publicKey`: `PublicKey_`  }[] |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[snarky.d.ts:1148](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1148)

___

### createTokenAccount

▸ `Static` **createTokenAccount**(`publicKey`, `tokenId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | [`Field`](Field.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1218](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1218)

___

### customTokenId

▸ `Static` **customTokenId**(`publicKey`, `tokenId`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1216](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1216)

___

### customTokenIdChecked

▸ `Static` **customTokenIdChecked**(`publicKey`, `tokenId`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1217](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1217)

___

### dummySignature

▸ `Static` **dummySignature**(): `string`

Returns a dummy signature.

#### Returns

`string`

#### Defined in

[snarky.d.ts:1200](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1200)

___

### fieldOfBase58

▸ `Static` **fieldOfBase58**(`fieldBase58`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldBase58` | `string` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1225](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1225)

___

### fieldToBase58

▸ `Static` **fieldToBase58**(`field`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](Field.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1224](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1224)

___

### fieldsOfJson

▸ `Static` **fieldsOfJson**(`json`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:1235](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1235)

___

### hashAccountUpdateFromFields

▸ `Static` **hashAccountUpdateFromFields**(`fields`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1236](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1236)

___

### hashAccountUpdateFromJson

▸ `Static` **hashAccountUpdateFromJson**(`json`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1237](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1237)

___

### memoHashBase58

▸ `Static` **memoHashBase58**(`memoBase58`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoBase58` | `string` |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:1228](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1228)

___

### memoToBase58

▸ `Static` **memoToBase58**(`memoString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoString` | `string` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1227](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1227)

___

### privateKeyOfString

▸ `Static` **privateKeyOfString**(`privateKeyBase58`): [`Scalar`](Scalar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKeyBase58` | `string` |

#### Returns

[`Scalar`](Scalar.md)

#### Defined in

[snarky.d.ts:1223](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1223)

___

### privateKeyToString

▸ `Static` **privateKeyToString**(`privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1222](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1222)

___

### publicKeyOfString

▸ `Static` **publicKeyOfString**(`publicKeyBase58`): `PublicKey_`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyBase58` | `string` |

#### Returns

`PublicKey_`

#### Defined in

[snarky.d.ts:1221](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1221)

___

### publicKeyToString

▸ `Static` **publicKeyToString**(`publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1220](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1220)

___

### signFeePayer

▸ `Static` **signFeePayer**(`txJson`, `privateKey`): `string`

Signs a transaction as the fee payer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1205](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1205)

___

### signFieldElement

▸ `Static` **signFieldElement**(`messageHash`, `privateKey`, `isMainnet`): `string`

Signs a [Field](Field.md) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | [`Field`](Field.md) |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |
| `isMainnet` | `boolean` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1191](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1191)

___

### signOtherAccountUpdate

▸ `Static` **signOtherAccountUpdate**(`txJson`, `privateKey`, `i`): `string`

Signs an account update.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |
| `i` | `number` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1210](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1210)

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
| `commitment` | [`Field`](Field.md) |
| `feePayerHash` | [`Field`](Field.md) |
| `fullCommitment` | [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:1174](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1174)

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
| `accountUpdate` | [`Field`](Field.md) |
| `calls` | [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:1183](https://github.com/o1-labs/snarkyjs/blob/3779d0f/src/snarky.d.ts#L1183)
