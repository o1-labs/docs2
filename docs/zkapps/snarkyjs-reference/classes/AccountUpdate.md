# Class: AccountUpdate

## Implements

- [`AccountUpdate`](../modules/Types.md#accountupdate-1)

## Table of contents

### Constructors

- [constructor](AccountUpdate.md#constructor)

### Properties

- [account](AccountUpdate.md#account)
- [authorization](AccountUpdate.md#authorization)
- [body](AccountUpdate.md#body)
- [children](AccountUpdate.md#children)
- [isSelf](AccountUpdate.md#isself)
- [lazyAuthorization](AccountUpdate.md#lazyauthorization)
- [network](AccountUpdate.md#network)
- [parent](AccountUpdate.md#parent)

### Accessors

- [balance](AccountUpdate.md#balance)
- [publicKey](AccountUpdate.md#publickey)
- [tokenId](AccountUpdate.md#tokenid)
- [tokenSymbol](AccountUpdate.md#tokensymbol)
- [update](AccountUpdate.md#update)

### Methods

- [hash](AccountUpdate.md#hash)
- [isDummy](AccountUpdate.md#isdummy)
- [send](AccountUpdate.md#send)
- [sign](AccountUpdate.md#sign)
- [toFields](AccountUpdate.md#tofields)
- [toJSON](AccountUpdate.md#tojson)
- [toPublicInput](AccountUpdate.md#topublicinput)
- [token](AccountUpdate.md#token)
- [assertBetween](AccountUpdate.md#assertbetween)
- [assertEquals](AccountUpdate.md#assertequals)
- [clone](AccountUpdate.md#clone)
- [create](AccountUpdate.md#create)
- [createSigned](AccountUpdate.md#createsigned)
- [defaultAccountUpdate](AccountUpdate.md#defaultaccountupdate)
- [defaultFeePayer](AccountUpdate.md#defaultfeepayer)
- [dummy](AccountUpdate.md#dummy)
- [dummyFeePayer](AccountUpdate.md#dummyfeepayer)
- [fundNewAccount](AccountUpdate.md#fundnewaccount)
- [getNonce](AccountUpdate.md#getnonce)
- [getNonceUnchecked](AccountUpdate.md#getnonceunchecked)
- [setValue](AccountUpdate.md#setvalue)
- [signFeePayerInPlace](AccountUpdate.md#signfeepayerinplace)
- [witness](AccountUpdate.md#witness)
- [witnessTree](AccountUpdate.md#witnesstree)

## Constructors

### constructor

• **new AccountUpdate**(`body`, `authorization?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |
| `authorization?` | `Object` |
| `authorization.proof?` | `string` |
| `authorization.signature?` | `string` |

#### Defined in

[lib/account_update.ts:599](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L599)

## Properties

### account

• **account**: `PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/account_update.ts:590](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L590)

___

### authorization

• **authorization**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `proof?` | `string` |
| `signature?` | `string` |

#### Implementation of

Types.AccountUpdate.authorization

#### Defined in

[lib/account_update.ts:588](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L588)

___

### body

• **body**: `Body`

#### Implementation of

Types.AccountUpdate.body

#### Defined in

[lib/account_update.ts:587](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L587)

___

### children

• **children**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | [`AccountUpdate`](AccountUpdate.md)[] |
| `calls?` | [`Field`](Field.md) |

#### Defined in

[lib/account_update.ts:592](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L592)

___

### isSelf

• `Private` **isSelf**: `boolean`

#### Defined in

[lib/account_update.ts:597](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L597)

___

### lazyAuthorization

• **lazyAuthorization**: `undefined` \| `LazySignature` \| `LazyProof` = `undefined`

#### Defined in

[lib/account_update.ts:589](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L589)

___

### network

• **network**: `PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

#### Defined in

[lib/account_update.ts:591](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L591)

___

### parent

• **parent**: `undefined` \| [`AccountUpdate`](AccountUpdate.md) = `undefined`

#### Defined in

[lib/account_update.ts:595](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L595)

## Accessors

### balance

• `get` **balance**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |
| `subInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |

#### Defined in

[lib/account_update.ts:773](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L773)

___

### publicKey

• `get` **publicKey**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:850](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L850)

___

### tokenId

• `get` **tokenId**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account_update.ts:723](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L723)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

#### Defined in

[lib/account_update.ts:727](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L727)

___

### update

• `get` **update**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appState` | { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }[] |
| `delegate` | { `isSome`: [`Bool`](Bool.md) ; `value`: [`PublicKey`](Types.PublicKey.md)  } |
| `delegate.isSome` | [`Bool`](Bool.md) |
| `delegate.value` | [`PublicKey`](Types.PublicKey.md) |
| `permissions` | { `isSome`: [`Bool`](Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `receive`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `send`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](../modules/Types.md#authrequired-1)  }  } |
| `permissions.isSome` | [`Bool`](Bool.md) |
| `permissions.value` | { `editSequenceState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `receive`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `send`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](../modules/Types.md#authrequired-1)  } |
| `permissions.value.editSequenceState` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.editState` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.incrementNonce` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.receive` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.send` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setDelegate` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setPermissions` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setTokenSymbol` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setVerificationKey` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setVotingFor` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setZkappUri` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `timing` | { `isSome`: [`Bool`](Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  }  } |
| `timing.isSome` | [`Bool`](Bool.md) |
| `timing.value` | { `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  } |
| `timing.value.cliffAmount` | [`UInt64`](UInt64.md) |
| `timing.value.cliffTime` | [`UInt32`](UInt32.md) |
| `timing.value.initialMinimumBalance` | [`UInt64`](UInt64.md) |
| `timing.value.vestingIncrement` | [`UInt64`](UInt64.md) |
| `timing.value.vestingPeriod` | [`UInt32`](UInt32.md) |
| `tokenSymbol` | { `isSome`: [`Bool`](Bool.md) ; `value`: [`TokenSymbol`](../README.md#tokensymbol-1)  } |
| `tokenSymbol.isSome` | [`Bool`](Bool.md) |
| `tokenSymbol.value` | [`TokenSymbol`](../README.md#tokensymbol-1) |
| `verificationKey` | { `isSome`: [`Bool`](Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](Field.md)  }  } |
| `verificationKey.isSome` | [`Bool`](Bool.md) |
| `verificationKey.value` | { `data`: `string` ; `hash`: [`Field`](Field.md)  } |
| `verificationKey.value.data` | `string` |
| `verificationKey.value.hash` | [`Field`](Field.md) |
| `votingFor` | { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } |
| `votingFor.isSome` | [`Bool`](Bool.md) |
| `votingFor.value` | [`Field`](Field.md) |
| `zkappUri` | { `isSome`: [`Bool`](Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](Field.md)  }  } |
| `zkappUri.isSome` | [`Bool`](Bool.md) |
| `zkappUri.value` | { `data`: `string` ; `hash`: [`Field`](Field.md)  } |
| `zkappUri.value.data` | `string` |
| `zkappUri.value.hash` | [`Field`](Field.md) |

#### Defined in

[lib/account_update.ts:788](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L788)

## Methods

### hash

▸ **hash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account_update.ts:910](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L910)

___

### isDummy

▸ **isDummy**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/account_update.ts:945](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L945)

___

### send

▸ **send**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |
| `__namedParameters.to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:740](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L740)

___

### sign

▸ **sign**(`privateKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:854](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L854)

___

### toFields

▸ **toFields**(): [`Field`](Field.md)[]

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/account_update.ts:902](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L902)

___

### toJSON

▸ **toJSON**(): [`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Returns

[`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Defined in

[lib/account_update.ts:906](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L906)

___

### toPublicInput

▸ **toPublicInput**(): [`ZkappPublicInput`](../README.md#zkapppublicinput-1)

#### Returns

[`ZkappPublicInput`](../README.md#zkapppublicinput-1)

#### Defined in

[lib/account_update.ts:928](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L928)

___

### token

▸ **token**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | [`Field`](Field.md) |
| `parentTokenId` | [`Field`](Field.md) |
| `tokenOwner` | [`PublicKey`](Types.PublicKey.md) |
| `burn` | (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => `void` |
| `mint` | (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `send` | (`__namedParameters`: { `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md) ; `from`: [`PublicKey`](Types.PublicKey.md) ; `to`: [`PublicKey`](Types.PublicKey.md)  }) => [`AccountUpdate`](AccountUpdate.md) |

#### Defined in

[lib/account_update.ts:625](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L625)

___

### assertBetween

▸ `Static` **assertBetween**<`T`\>(`property`, `lower`, `upper`): `void`

Constrain a property to lie between lower and upper bounds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `OrIgnore`<`ClosedInterval`<`T`\>\> | The property to constrain |
| `lower` | `T` | The lower bound |
| `upper` | `T` | The upper bound  Example: To constrain the account balance of a SmartContract to lie between 0 and 20 MINA, you can use  ```ts @method onlyRunsWhenBalanceIsLow() {   let lower = UInt64.zero;   let upper = UInt64.fromNumber(20e9);   AccountUpdate.assertBetween(this.self.body.preconditions.account.balance, lower, upper);   // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:814](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L814)

___

### assertEquals

▸ `Static` **assertEquals**<`T`\>(`property`, `value`): `void`

Fix a property to a certain value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `OrIgnore`<`T` \| `ClosedInterval`<`T`\>\> | The property to constrain |
| `value` | `T` | The value it is fixed to  Example: To fix the account nonce of a SmartContract to 0, you can use  ```ts @method onlyRunsWhenNonceIsZero() {   AccountUpdate.assertEquals(this.self.body.preconditions.account.nonce, UInt32.zero);   // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:840](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L840)

___

### clone

▸ `Static` **clone**(`accountUpdate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`any`

#### Defined in

[lib/account_update.ts:609](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L609)

___

### create

▸ `Static` **create**(`publicKey`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:967](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L967)

___

### createSigned

▸ `Static` **createSigned**(`signer`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`PrivateKey`](PrivateKey.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:980](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L980)

___

### defaultAccountUpdate

▸ `Static` **defaultAccountUpdate**(`address`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:934](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L934)

___

### defaultFeePayer

▸ `Static` **defaultFeePayer**(`address`, `key`, `nonce`): `FeePayerUnsigned`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `key` | [`PrivateKey`](PrivateKey.md) |
| `nonce` | [`UInt32`](UInt32.md) |

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/account_update.ts:949](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L949)

___

### dummy

▸ `Static` **dummy**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:942](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L942)

___

### dummyFeePayer

▸ `Static` **dummyFeePayer**(): `FeePayerUnsigned`

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/account_update.ts:962](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L962)

___

### fundNewAccount

▸ `Static` **fundNewAccount**(`feePayerKey`, `initialBalance?`): `void`

Use this method to pay the account creation fee for another account.
Beware that you _don't_ need to pass in the new account!
Instead, the protocol will automatically identify accounts in your transaction that need funding.

If you provide an optional `initialBalance`, this will be subtracted from the fee-paying account as well,
but you have to separately ensure that it's added to the new account's balance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feePayerKey` | [`PrivateKey`](PrivateKey.md) | the private key of the account that pays the fee |
| `initialBalance` | `Object` | the initial balance of the new account (default: 0) |
| `initialBalance.initialBalance` | `undefined` \| `string` \| `number` \| [`UInt64`](UInt64.md) | - |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:1011](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1011)

___

### getNonce

▸ `Static` **getNonce**(`accountUpdate`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) \| `FeePayerUnsigned` |

#### Returns

`any`

#### Defined in

[lib/account_update.ts:870](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L870)

___

### getNonceUnchecked

▸ `Static` `Private` **getNonceUnchecked**(`update`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| `FeePayerUnsigned` |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/account_update.ts:876](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L876)

___

### setValue

▸ `Static` **setValue**<`T`\>(`maybeValue`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeValue` | `SetOrKeep`<`T`\> |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:792](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L792)

___

### signFeePayerInPlace

▸ `Static` **signFeePayerInPlace**(`feePayer`, `privateKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | `FeePayerUnsigned` |
| `privateKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:861](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L861)

___

### witness

▸ `Static` **witness**<`T`\>(`type`, `compute`, `__namedParameters?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `compute` | () => { `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  } |
| `__namedParameters` | `Object` |
| `__namedParameters.skipCheck` | `undefined` \| `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `result` | `T` |

#### Defined in

[lib/account_update.ts:1023](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1023)

___

### witnessTree

▸ `Static` **witnessTree**<`T`\>(`resultType`, `childLayout`, `compute`, `options?`): `Object`

Like AccountUpdate.witness, but lets you specify a layout for the accountUpdate's children,
which also get witnessed

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resultType` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `childLayout` | `AccountUpdatesLayout` |
| `compute` | () => { `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  } |
| `options?` | `Object` |
| `options.skipCheck` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `result` | `T` |

#### Defined in

[lib/account_update.ts:1081](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1081)
