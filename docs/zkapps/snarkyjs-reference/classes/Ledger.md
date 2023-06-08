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

[snarky.d.ts:1598](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1598)

___

### hashInputFromJson

▪ `Static` **hashInputFromJson**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountPrecondition` | (`json`: `String`) => `OcamlInput` |
| `body` | (`json`: `String`) => `OcamlInput` |
| `networkPrecondition` | (`json`: `String`) => `OcamlInput` |
| `packInput` | (`input`: `OcamlInput`) => `Field`[] |
| `permissions` | (`json`: `String`) => `OcamlInput` |
| `timing` | (`json`: `String`) => `OcamlInput` |
| `update` | (`json`: `String`) => `OcamlInput` |

#### Defined in

[snarky.d.ts:1587](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1587)

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

[snarky.d.ts:1503](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1503)

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

[snarky.d.ts:1508](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1508)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId`): `undefined` \| [`Account`](../modules/Types.Json.md#account)

Returns an account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | `Field` |

#### Returns

`undefined` \| [`Account`](../modules/Types.Json.md#account)

#### Defined in

[snarky.d.ts:1517](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1517)

___

### checkAccountUpdateSignature

▸ `Static` **checkAccountUpdateSignature**(`updateJson`, `commitment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateJson` | `string` |
| `commitment` | `Field` |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:1578](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1578)

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

[snarky.d.ts:1496](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1496)

___

### createTokenAccount

▸ `Static` **createTokenAccount**(`publicKey`, `tokenId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | `Field` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1566](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1566)

___

### customTokenId

▸ `Static` **customTokenId**(`publicKey`, `tokenId`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | `Field` |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1564](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1564)

___

### customTokenIdChecked

▸ `Static` **customTokenIdChecked**(`publicKey`, `tokenId`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | `Field` |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1565](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1565)

___

### dummySignature

▸ `Static` **dummySignature**(): `string`

Returns a dummy signature.

#### Returns

`string`

#### Defined in

[snarky.d.ts:1548](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1548)

___

### fieldOfBase58

▸ `Static` **fieldOfBase58**(`fieldBase58`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldBase58` | `string` |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1573](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1573)

___

### fieldToBase58

▸ `Static` **fieldToBase58**(`field`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `Field` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1572](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1572)

___

### fieldsOfJson

▸ `Static` **fieldsOfJson**(`json`): `Field`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Field`[]

#### Defined in

[snarky.d.ts:1583](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1583)

___

### hashAccountUpdateFromFields

▸ `Static` **hashAccountUpdateFromFields**(`fields`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1584](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1584)

___

### hashAccountUpdateFromJson

▸ `Static` **hashAccountUpdateFromJson**(`json`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1585](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1585)

___

### memoHashBase58

▸ `Static` **memoHashBase58**(`memoBase58`): `Field`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoBase58` | `string` |

#### Returns

`Field`

#### Defined in

[snarky.d.ts:1576](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1576)

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

[snarky.d.ts:1575](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1575)

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

[snarky.d.ts:1571](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1571)

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

[snarky.d.ts:1570](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1570)

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

[snarky.d.ts:1569](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1569)

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

[snarky.d.ts:1568](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1568)

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

[snarky.d.ts:1553](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1553)

___

### signFieldElement

▸ `Static` **signFieldElement**(`messageHash`, `privateKey`, `isMainnet`): `string`

Signs a [Field](../README.md#field) element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | `Field` |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |
| `isMainnet` | `boolean` |

#### Returns

`string`

#### Defined in

[snarky.d.ts:1539](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1539)

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

[snarky.d.ts:1558](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1558)

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
| `commitment` | `Field` |
| `feePayerHash` | `Field` |
| `fullCommitment` | `Field` |

#### Defined in

[snarky.d.ts:1522](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1522)

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
| `accountUpdate` | `Field` |
| `calls` | `Field` |

#### Defined in

[snarky.d.ts:1531](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/snarky.d.ts#L1531)
