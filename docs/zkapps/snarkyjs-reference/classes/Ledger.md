# Class: Ledger

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
- [memoToBase58](Ledger.md#memotobase58)
- [privateKeyOfString](Ledger.md#privatekeyofstring)
- [privateKeyToString](Ledger.md#privatekeytostring)
- [publicKeyOfString](Ledger.md#publickeyofstring)
- [publicKeyToString](Ledger.md#publickeytostring)
- [signAccountUpdate](Ledger.md#signaccountupdate)
- [signFeePayer](Ledger.md#signfeepayer)
- [signFieldElement](Ledger.md#signfieldelement)
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
| `versionBytes` | `Record`<``"tokenIdKey"`` \| ``"receiptChainHash"`` \| ``"ledgerHash"`` \| ``"epochSeed"`` \| ``"stateHash"``, `number`\> |
| `ofBase58` | (`base58`: `string`, `versionByte`: `number`) => `MlBytes` |
| `toBase58` | (`s`: `MlBytes`, `versionByte`: `number`) => `string` |

#### Defined in

[snarky.d.ts:830](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L830)

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

[snarky.d.ts:819](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L819)

## Methods

### addAccount

▸ **addAccount**(`publicKey`, `balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `balance` | `string` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:773](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L773)

___

### applyJsonTransaction

▸ **applyJsonTransaction**(`txJson`, `accountCreationFee`, `networkState`): `Account`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `accountCreationFee` | `string` |
| `networkState` | `string` |

#### Returns

`Account`[]

#### Defined in

[snarky.d.ts:775](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L775)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId`): `undefined` \| `Account`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey_` |
| `tokenId` | [`Field`](Field.md) |

#### Returns

`undefined` \| `Account`

#### Defined in

[snarky.d.ts:781](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L781)

___

### create

▸ `Static` **create**(`genesisAccounts`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `genesisAccounts` | { `balance`: `string` ; `publicKey`: `PublicKey_`  }[] |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[snarky.d.ts:769](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L769)

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

[snarky.d.ts:805](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L805)

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

[snarky.d.ts:803](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L803)

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

[snarky.d.ts:804](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L804)

___

### dummySignature

▸ `Static` **dummySignature**(): `string`

#### Returns

`string`

#### Defined in

[snarky.d.ts:795](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L795)

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

[snarky.d.ts:812](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L812)

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

[snarky.d.ts:811](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L811)

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

[snarky.d.ts:815](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L815)

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

[snarky.d.ts:816](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L816)

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

[snarky.d.ts:817](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L817)

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

[snarky.d.ts:813](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L813)

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

[snarky.d.ts:810](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L810)

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

[snarky.d.ts:809](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L809)

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

[snarky.d.ts:808](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L808)

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

[snarky.d.ts:807](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L807)

___

### signAccountUpdate

▸ `Static` **signAccountUpdate**(`txJson`, `privateKey`, `i`): `string`

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

[snarky.d.ts:797](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L797)

___

### signFeePayer

▸ `Static` **signFeePayer**(`txJson`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:796](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L796)

___

### signFieldElement

▸ `Static` **signFieldElement**(`messageHash`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | [`Field`](Field.md) |
| `privateKey` | `Object` |
| `privateKey.s` | [`Scalar`](Scalar.md) |

#### Returns

`string`

#### Defined in

[snarky.d.ts:791](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L791)

___

### transactionCommitments

▸ `Static` **transactionCommitments**(`txJson`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txJson` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `commitment` | [`Field`](Field.md) |
| `fullCommitment` | [`Field`](Field.md) |

#### Defined in

[snarky.d.ts:783](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L783)

___

### zkappPublicInput

▸ `Static` **zkappPublicInput**(`txJson`, `accountUpdateIndex`): `Object`

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

[snarky.d.ts:787](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L787)
