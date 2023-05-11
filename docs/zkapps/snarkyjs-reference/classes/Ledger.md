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

[snarky.d.ts:1174](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1174)

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

[snarky.d.ts:1163](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1163)

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

[snarky.d.ts:1079](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1079)

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

[snarky.d.ts:1084](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1084)

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

[snarky.d.ts:1093](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1093)

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

[snarky.d.ts:1154](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1154)

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

[snarky.d.ts:1072](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1072)

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

[snarky.d.ts:1142](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1142)

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

[snarky.d.ts:1140](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1140)

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

[snarky.d.ts:1141](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1141)

___

### dummySignature

▸ `Static` **dummySignature**(): `string`

Returns a dummy signature.

#### Returns

`string`

#### Defined in

[snarky.d.ts:1124](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1124)

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

[snarky.d.ts:1149](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1149)

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

[snarky.d.ts:1148](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1148)

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

[snarky.d.ts:1159](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1159)

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

[snarky.d.ts:1160](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1160)

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

[snarky.d.ts:1161](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1161)

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

[snarky.d.ts:1152](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1152)

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

[snarky.d.ts:1151](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1151)

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

[snarky.d.ts:1147](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1147)

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

[snarky.d.ts:1146](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1146)

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

[snarky.d.ts:1145](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1145)

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

[snarky.d.ts:1144](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1144)

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

[snarky.d.ts:1129](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1129)

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

[snarky.d.ts:1115](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1115)

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

[snarky.d.ts:1134](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1134)

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

[snarky.d.ts:1098](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1098)

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

[snarky.d.ts:1107](https://github.com/o1-labs/snarkyjs/blob/8374557/src/snarky.d.ts#L1107)
