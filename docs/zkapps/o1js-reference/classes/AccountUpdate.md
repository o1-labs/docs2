[o1js](../README.md) / [Modules](../modules.md) / AccountUpdate

# Class: AccountUpdate

An [AccountUpdate](AccountUpdate.md) is a set of instructions for the Mina network.
It includes Preconditions and a list of state updates, which need to
be authorized by either a [Signature](Signature.md) or [Proof](Proof.md).

## Implements

- [`AccountUpdate`](../modules/Types.md#accountupdate-1)

## Table of contents

### Constructors

- [constructor](AccountUpdate.md#constructor)

### Properties

- [account](AccountUpdate.md#account)
- [authorization](AccountUpdate.md#authorization)
- [body](AccountUpdate.md#body)
- [currentSlot](AccountUpdate.md#currentslot)
- [id](AccountUpdate.md#id)
- [isSelf](AccountUpdate.md#isself)
- [label](AccountUpdate.md#label)
- [lazyAuthorization](AccountUpdate.md#lazyauthorization)
- [network](AccountUpdate.md#network)
- [Actions](AccountUpdate.md#actions)
- [check](AccountUpdate.md#check)
- [signingInfo](AccountUpdate.md#signinginfo)
- [sizeInFields](AccountUpdate.md#sizeinfields)
- [toFields](AccountUpdate.md#tofields)
- [toInput](AccountUpdate.md#toinput)

### Accessors

- [balance](AccountUpdate.md#balance)
- [balanceChange](AccountUpdate.md#balancechange)
- [publicKey](AccountUpdate.md#publickey)
- [tokenId](AccountUpdate.md#tokenid)
- [tokenSymbol](AccountUpdate.md#tokensymbol)
- [update](AccountUpdate.md#update)
- [MayUseToken](AccountUpdate.md#mayusetoken)

### Methods

- [approve](AccountUpdate.md#approve)
- [extractTree](AccountUpdate.md#extracttree)
- [hash](AccountUpdate.md#hash)
- [isDummy](AccountUpdate.md#isdummy)
- [requireSignature](AccountUpdate.md#requiresignature)
- [send](AccountUpdate.md#send)
- [sign](AccountUpdate.md#sign)
- [toJSON](AccountUpdate.md#tojson)
- [toPretty](AccountUpdate.md#topretty)
- [toPrettyLayout](AccountUpdate.md#toprettylayout)
- [toPublicInput](AccountUpdate.md#topublicinput)
- [assertBetween](AccountUpdate.md#assertbetween)
- [assertEquals](AccountUpdate.md#assertequals)
- [attachToTransaction](AccountUpdate.md#attachtotransaction)
- [clone](AccountUpdate.md#clone)
- [create](AccountUpdate.md#create)
- [createSigned](AccountUpdate.md#createsigned)
- [defaultAccountUpdate](AccountUpdate.md#defaultaccountupdate)
- [defaultFeePayer](AccountUpdate.md#defaultfeepayer)
- [dummy](AccountUpdate.md#dummy)
- [dummyFeePayer](AccountUpdate.md#dummyfeepayer)
- [empty](AccountUpdate.md#empty)
- [fromFields](AccountUpdate.md#fromfields)
- [fromJSON](AccountUpdate.md#fromjson)
- [fundNewAccount](AccountUpdate.md#fundnewaccount)
- [getNonce](AccountUpdate.md#getnonce)
- [getSigningInfo](AccountUpdate.md#getsigninginfo)
- [getSigningInfoUnchecked](AccountUpdate.md#getsigninginfounchecked)
- [setValue](AccountUpdate.md#setvalue)
- [signFeePayerInPlace](AccountUpdate.md#signfeepayerinplace)
- [toAuxiliary](AccountUpdate.md#toauxiliary)
- [toJSON](AccountUpdate.md#tojson-1)
- [unlink](AccountUpdate.md#unlink)
- [witness](AccountUpdate.md#witness)

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

[lib/account-update.ts:621](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L621)

## Properties

### account

• **account**: `Account`

#### Defined in

[lib/account-update.ts:613](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L613)

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

[lib/account-update.ts:610](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L610)

___

### body

• **body**: `Body`

#### Implementation of

Types.AccountUpdate.body

#### Defined in

[lib/account-update.ts:609](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L609)

___

### currentSlot

• **currentSlot**: `CurrentSlot`

#### Defined in

[lib/account-update.ts:615](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L615)

___

### id

• **id**: `number`

#### Defined in

[lib/account-update.ts:603](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L603)

___

### isSelf

• `Private` **isSelf**: `boolean`

#### Defined in

[lib/account-update.ts:617](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L617)

___

### label

• **label**: `string` = `''`

A human-readable label for the account update, indicating how that update
was created. Can be modified by applications to add richer information.

#### Defined in

[lib/account-update.ts:608](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L608)

___

### lazyAuthorization

• **lazyAuthorization**: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone` = `undefined`

#### Defined in

[lib/account-update.ts:611](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L611)

___

### network

• **network**: `Network`

#### Defined in

[lib/account-update.ts:614](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L614)

___

### Actions

▪ `Static` **Actions**: `Object` = `Actions`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  }) => `void` |
| `empty` | () => \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  } |
| `fromFields` | (`x`: [`Field`](Field.md)[], `aux`: `any`[]) => \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  } |
| `fromJSON` | (`x`: `string`[][]) => \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  } |
| `toAuxiliary` | (`x?`: \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  }) => `any`[] |
| `toFields` | (`x`: \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  }) => [`Field`](Field.md)[] |
| `toInput` | (`x`: \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  }) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  } |
| `toJSON` | (`x`: \{ `data`: [`Field`](Field.md)[][] ; `hash`: [`Field`](Field.md)  }) => `string`[][] |
| `emptyActionState` | () => [`Field`](Field.md) |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => [`Field`](Field.md) |
| `pushEvent` | (`actions`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |
| `updateSequenceState` | (`state`: [`Field`](Field.md), `sequenceEventsHash`: [`Field`](Field.md)) => [`Field`](Field.md) |

#### Defined in

[lib/account-update.ts:619](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L619)

___

### check

▪ `Static` **check**: (`value`: [`AccountUpdate`](../modules/Types.md#accountupdate-1)) => `void` = `Types.AccountUpdate.check`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AccountUpdate`](../modules/Types.md#accountupdate-1) |

##### Returns

`void`

#### Defined in

[lib/account-update.ts:1156](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1156)

___

### signingInfo

▪ `Static` `Private` **signingInfo**: `GenericProvableExtendedPure`\<\{ `isSameAsFeePayer`: [`Bool`](Bool.md) = Bool; `nonce`: [`UInt32`](UInt32.md) = UInt32 }, \{ `isSameAsFeePayer`: `boolean` = Bool; `nonce`: `string` = UInt32 }, [`Field`](Field.md)\>

#### Defined in

[lib/account-update.ts:866](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L866)

___

### sizeInFields

▪ `Static` **sizeInFields**: () => `number` = `Types.AccountUpdate.sizeInFields`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[lib/account-update.ts:1143](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1143)

___

### toFields

▪ `Static` **toFields**: (`value`: [`AccountUpdate`](../modules/Types.md#accountupdate-1)) => [`Field`](Field.md)[] = `Types.AccountUpdate.toFields`

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AccountUpdate`](../modules/Types.md#accountupdate-1) |

##### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/account-update.ts:1144](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1144)

___

### toInput

▪ `Static` **toInput**: (`value`: [`AccountUpdate`](../modules/Types.md#accountupdate-1)) => `HashInput` = `Types.AccountUpdate.toInput`

#### Type declaration

▸ (`value`): `HashInput`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AccountUpdate`](../modules/Types.md#accountupdate-1) |

##### Returns

`HashInput`

#### Defined in

[lib/account-update.ts:1152](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1152)

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

[lib/account-update.ts:720](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L720)

___

### balanceChange

• `get` **balanceChange**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/account-update.ts:735](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L735)

• `set` **balanceChange**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Int64`](Int64.md) |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:738](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L738)

___

### publicKey

• `get` **publicKey**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account-update.ts:810](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L810)

___

### tokenId

• `get` **tokenId**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account-update.ts:650](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L650)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

**`Deprecated`**

use `this.account.tokenSymbol`

#### Defined in

[lib/account-update.ts:657](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L657)

___

### update

• `get` **update**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appState` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }[] |
| `delegate` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: [`PublicKey`](Types.PublicKey.md)  } |
| `delegate.isSome` | [`Bool`](Bool.md) |
| `delegate.value` | [`PublicKey`](Types.PublicKey.md) |
| `permissions` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: \{ `access`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `receive`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `send`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVerificationKey`: \{ `auth`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `txnVersion`: [`UInt32`](UInt32.md)  } ; `setVotingFor`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](../modules/Types.md#authrequired-1)  }  } |
| `permissions.isSome` | [`Bool`](Bool.md) |
| `permissions.value` | \{ `access`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `receive`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `send`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVerificationKey`: \{ `auth`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `txnVersion`: [`UInt32`](UInt32.md)  } ; `setVotingFor`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](../modules/Types.md#authrequired-1)  } |
| `permissions.value.access` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.editActionState` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.editState` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.incrementNonce` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.receive` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.send` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setDelegate` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setPermissions` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setTiming` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setTokenSymbol` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setVerificationKey` | \{ `auth`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `txnVersion`: [`UInt32`](UInt32.md)  } |
| `permissions.value.setVerificationKey.auth` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setVerificationKey.txnVersion` | [`UInt32`](UInt32.md) |
| `permissions.value.setVotingFor` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `permissions.value.setZkappUri` | [`AuthRequired`](../modules/Types.md#authrequired-1) |
| `timing` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: \{ `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  }  } |
| `timing.isSome` | [`Bool`](Bool.md) |
| `timing.value` | \{ `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  } |
| `timing.value.cliffAmount` | [`UInt64`](UInt64.md) |
| `timing.value.cliffTime` | [`UInt32`](UInt32.md) |
| `timing.value.initialMinimumBalance` | [`UInt64`](UInt64.md) |
| `timing.value.vestingIncrement` | [`UInt64`](UInt64.md) |
| `timing.value.vestingPeriod` | [`UInt32`](UInt32.md) |
| `tokenSymbol` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: \{ `field`: [`Field`](Field.md) ; `symbol`: `string`  }  } |
| `tokenSymbol.isSome` | [`Bool`](Bool.md) |
| `tokenSymbol.value` | \{ `field`: [`Field`](Field.md) ; `symbol`: `string`  } |
| `tokenSymbol.value.field` | [`Field`](Field.md) |
| `tokenSymbol.value.symbol` | `string` |
| `verificationKey` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](Field.md)  }  } |
| `verificationKey.isSome` | [`Bool`](Bool.md) |
| `verificationKey.value` | \{ `data`: `string` ; `hash`: [`Field`](Field.md)  } |
| `verificationKey.value.data` | `string` |
| `verificationKey.value.hash` | [`Field`](Field.md) |
| `votingFor` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } |
| `votingFor.isSome` | [`Bool`](Bool.md) |
| `votingFor.value` | [`Field`](Field.md) |
| `zkappUri` | \{ `isSome`: [`Bool`](Bool.md) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](Field.md)  }  } |
| `zkappUri.isSome` | [`Bool`](Bool.md) |
| `zkappUri.value` | \{ `data`: `string` ; `hash`: [`Field`](Field.md)  } |
| `zkappUri.value.data` | `string` |
| `zkappUri.value.hash` | [`Field`](Field.md) |

#### Defined in

[lib/account-update.ts:742](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L742)

___

### MayUseToken

• `Static` `get` **MayUseToken**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `InheritFromParent` | \{ `inheritFromParent`: [`Bool`](Bool.md) ; `parentsOwnToken`: [`Bool`](Bool.md)  } |
| `InheritFromParent.inheritFromParent` | [`Bool`](Bool.md) |
| `InheritFromParent.parentsOwnToken` | [`Bool`](Bool.md) |
| `No` | \{ `inheritFromParent`: [`Bool`](Bool.md) ; `parentsOwnToken`: [`Bool`](Bool.md)  } |
| `No.inheritFromParent` | [`Bool`](Bool.md) |
| `No.parentsOwnToken` | [`Bool`](Bool.md) |
| `ParentsOwnToken` | \{ `inheritFromParent`: [`Bool`](Bool.md) ; `parentsOwnToken`: [`Bool`](Bool.md)  } |
| `ParentsOwnToken.inheritFromParent` | [`Bool`](Bool.md) |
| `ParentsOwnToken.parentsOwnToken` | [`Bool`](Bool.md) |
| `type` | `ProvablePureExtended`\<\{ `inheritFromParent`: [`Bool`](Bool.md) = Bool; `parentsOwnToken`: [`Bool`](Bool.md) = Bool }, \{ `inheritFromParent`: `boolean` = Bool; `parentsOwnToken`: `boolean` = Bool }\> |
| `isInheritFromParent` | (`a`: [`AccountUpdate`](AccountUpdate.md)) => [`Bool`](Bool.md) |
| `isNo` | (`__namedParameters`: [`AccountUpdate`](AccountUpdate.md)) => [`Bool`](Bool.md) |
| `isParentsOwnToken` | (`a`: [`AccountUpdate`](AccountUpdate.md)) => [`Bool`](Bool.md) |

#### Defined in

[lib/account-update.ts:1181](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1181)

## Methods

### approve

▸ **approve**(`child`): `void`

Makes another [AccountUpdate](AccountUpdate.md) a child of this one.

The parent-child relationship means that the child becomes part of the "statement"
of the parent, and goes into the commitment that is authorized by either a signature
or a proof.

For a proof in particular, child account updates are contained in the public input
of the proof that authorizes the parent account update.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) \| [`AccountUpdateForest`](AccountUpdateForest.md) |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:708](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L708)

___

### extractTree

▸ **extractTree**(): [`AccountUpdateTree`](AccountUpdateTree.md)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Defined in

[lib/account-update.ts:982](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L982)

___

### hash

▸ **hash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account-update.ts:921](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L921)

___

### isDummy

▸ **isDummy**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/account-update.ts:1000](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1000)

___

### requireSignature

▸ **requireSignature**(): `void`

Use this command if this account update should be signed by the account
owner, instead of not having any authorization.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = Mina.transaction(...); // create transaction as usual, using `requireSignature()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../modules.md#permissions) determine which updates have to
be (can be) authorized by a signature.

#### Returns

`void`

#### Defined in

[lib/account-update.ts:829](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L829)

___

### send

▸ **send**(`«destructured»`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |
| › `to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:667](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L667)

___

### sign

▸ **sign**(`privateKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

**`Deprecated`**

`.sign()` is deprecated in favor of `.requireSignature()`

#### Defined in

[lib/account-update.ts:835](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L835)

___

### toJSON

▸ **toJSON**(): [`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Returns

[`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Defined in

[lib/account-update.ts:910](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L910)

___

### toPretty

▸ **toPretty**(): `any`

Returns a JSON representation of only the fields that differ from the
default [AccountUpdate](AccountUpdate.md).

#### Returns

`any`

#### Defined in

[lib/account-update.ts:1213](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1213)

___

### toPrettyLayout

▸ **toPrettyLayout**(): `void`

#### Returns

`void`

#### Defined in

[lib/account-update.ts:976](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L976)

___

### toPublicInput

▸ **toPublicInput**(`«destructured»`): [`ZkappPublicInput`](../modules.md#zkapppublicinput-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountUpdates` | [`AccountUpdate`](AccountUpdate.md)[] |

#### Returns

[`ZkappPublicInput`](../modules.md#zkapppublicinput-1)

#### Defined in

[lib/account-update.ts:946](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L946)

___

### assertBetween

▸ `Static` **assertBetween**\<`T`\>(`property`, `lower`, `upper`): `void`

Constrain a property to lie between lower and upper bounds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `OrIgnore`\<`ClosedInterval`\<`T`\>\> | The property to constrain |
| `lower` | `T` | The lower bound |
| `upper` | `T` | The upper bound Example: To constrain the account balance of a SmartContract to lie between 0 and 20 MINA, you can use ```ts \@method onlyRunsWhenBalanceIsLow() { let lower = UInt64.zero; let upper = UInt64.from(20e9); AccountUpdate.assertBetween(this.self.body.preconditions.account.balance, lower, upper); // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:770](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L770)

___

### assertEquals

▸ `Static` **assertEquals**\<`T`\>(`property`, `value`): `void`

Fix a property to a certain value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `OrIgnore`\<`T` \| `ClosedInterval`\<`T`\>\> | The property to constrain |
| `value` | `T` | The value it is fixed to Example: To fix the account nonce of a SmartContract to 0, you can use ```ts \@method onlyRunsWhenNonceIsZero() { AccountUpdate.assertEquals(this.self.body.preconditions.account.nonce, UInt32.zero); // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:797](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L797)

___

### attachToTransaction

▸ `Static` **attachToTransaction**(`accountUpdate`): `void`

Attach account update to the current transaction
-- if in a smart contract, to its children

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:1044](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1044)

___

### clone

▸ `Static` **clone**(`accountUpdate`): [`AccountUpdate`](AccountUpdate.md)

Clones the [AccountUpdate](AccountUpdate.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:636](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L636)

___

### create

▸ `Static` **create**(`publicKey`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

Creates an account update. If this is inside a transaction, the account
update becomes part of the transaction. If this is inside a smart contract
method, the account update will not only become part of the transaction,
but also becomes available for the smart contract to modify, in a way that
becomes part of the proof.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:1025](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1025)

___

### createSigned

▸ `Static` **createSigned**(`signer`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

Creates an account update, like [create](AccountUpdate.md#create), but also
makes sure this account update will be authorized with a signature.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = Mina.transaction(...); // create transaction as usual, using `createSigned()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../modules.md#permissions) determine which updates have to
be (can be) authorized by a signature.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:1080](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1080)

▸ `Static` **createSigned**(`signer`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`PrivateKey`](PrivateKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

**`Deprecated`**

in favor of calling this function with a `PublicKey` as `signer`

#### Defined in

[lib/account-update.ts:1084](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1084)

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

[lib/account-update.ts:992](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L992)

___

### defaultFeePayer

▸ `Static` **defaultFeePayer**(`address`, `nonce`): `FeePayerUnsigned`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `nonce` | [`UInt32`](UInt32.md) |

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/account-update.ts:1004](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1004)

___

### dummy

▸ `Static` **dummy**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:995](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L995)

___

### dummyFeePayer

▸ `Static` **dummyFeePayer**(): `FeePayerUnsigned`

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/account-update.ts:1013](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1013)

___

### empty

▸ `Static` **empty**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:1153](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1153)

___

### fromFields

▸ `Static` **fromFields**(`fields`, `«destructured»`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |
| `«destructured»` | `any`[] |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:1157](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1157)

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`AccountUpdate`](../modules/Types.Json.md#accountupdate) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account-update.ts:916](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L916)

___

### fundNewAccount

▸ `Static` **fundNewAccount**(`feePayer`, `numberOfAccounts?`): [`AccountUpdate`](AccountUpdate.md)

Use this method to pay the account creation fee for another account (or, multiple accounts using the optional second argument).

Beware that you _don't_ need to specify the account that is created!
Instead, the protocol will automatically identify that accounts need to be created,
and require that the net balance change of the transaction covers the account creation fee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feePayer` | [`PublicKey`](Types.PublicKey.md) | the address of the account that pays the fee |
| `numberOfAccounts?` | `number` | the number of new accounts to fund (default: 1) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

they [AccountUpdate](AccountUpdate.md) for the account which pays the fee

#### Defined in

[lib/account-update.ts:1112](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1112)

▸ `Static` **fundNewAccount**(`feePayer`, `options?`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | [`PrivateKey`](PrivateKey.md) \| [`PublicKey`](Types.PublicKey.md) |
| `options?` | `number` \| \{ `initialBalance`: `string` \| `number` \| [`UInt64`](UInt64.md)  } |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

**`Deprecated`**

Call this function with a `PublicKey` as `feePayer`, and remove the `initialBalance` option.
To send an initial balance to the new account, you can use the returned account update:
```
let feePayerUpdate = AccountUpdate.fundNewAccount(feePayer);
feePayerUpdate.send({ to: receiverAddress, amount: initialBalance });
```

#### Defined in

[lib/account-update.ts:1124](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1124)

___

### getNonce

▸ `Static` **getNonce**(`accountUpdate`): [`UInt32`](UInt32.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) \| `FeePayerUnsigned` |

#### Returns

[`UInt32`](UInt32.md)

#### Defined in

[lib/account-update.ts:862](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L862)

___

### getSigningInfo

▸ `Static` `Private` **getSigningInfo**(`accountUpdate`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) \| `FeePayerUnsigned` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isSameAsFeePayer` | [`Bool`](Bool.md) |
| `nonce` | [`UInt32`](UInt32.md) |

#### Defined in

[lib/account-update.ts:871](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L871)

___

### getSigningInfoUnchecked

▸ `Static` `Private` **getSigningInfoUnchecked**(`update`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| `FeePayerUnsigned` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isSameAsFeePayer` | [`Bool`](Bool.md) |
| `nonce` | [`UInt32`](UInt32.md) |

#### Defined in

[lib/account-update.ts:879](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L879)

___

### setValue

▸ `Static` **setValue**\<`T`\>(`maybeValue`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeValue` | `SetOrKeep`\<`T`\> |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:746](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L746)

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

[lib/account-update.ts:853](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L853)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`a?`): (`any`[] \| \{ `id`: `number` ; `label`: `string` ; `lazyAuthorization`: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone`  })[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

(`any`[] \| \{ `id`: `number` ; `label`: `string` ; `lazyAuthorization`: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone`  })[]

#### Defined in

[lib/account-update.ts:1145](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1145)

___

### toJSON

▸ `Static` **toJSON**(`a`): [`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

[`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Defined in

[lib/account-update.ts:913](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L913)

___

### unlink

▸ `Static` **unlink**(`accountUpdate`): `void`

Disattach an account update from where it's currently located in the transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account-update.ts:1061](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1061)

___

### witness

▸ `Static` **witness**\<`T`\>(`type`, `compute`, `«destructured»?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `compute` | () => \{ `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  } |
| `«destructured»` | `Object` |
| › `skipCheck` | `undefined` \| `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `result` | `T` |

#### Defined in

[lib/account-update.ts:1165](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/account-update.ts#L1165)
