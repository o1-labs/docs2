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
- [update](AccountUpdate.md#update)
- [MayUseToken](AccountUpdate.md#mayusetoken)

### Methods

- [approve](AccountUpdate.md#approve)
- [extractTree](AccountUpdate.md#extracttree)
- [hash](AccountUpdate.md#hash)
- [isDummy](AccountUpdate.md#isdummy)
- [requireSignature](AccountUpdate.md#requiresignature)
- [send](AccountUpdate.md#send)
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

[lib/mina/account-update.ts:598](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L598)

## Properties

### account

• **account**: `Account`

#### Defined in

[lib/mina/account-update.ts:590](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L590)

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

[lib/mina/account-update.ts:587](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L587)

___

### body

• **body**: `Body`

#### Implementation of

Types.AccountUpdate.body

#### Defined in

[lib/mina/account-update.ts:586](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L586)

___

### currentSlot

• **currentSlot**: `CurrentSlot`

#### Defined in

[lib/mina/account-update.ts:592](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L592)

___

### id

• **id**: `number`

#### Defined in

[lib/mina/account-update.ts:580](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L580)

___

### isSelf

• `Private` **isSelf**: `boolean`

#### Defined in

[lib/mina/account-update.ts:594](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L594)

___

### label

• **label**: `string` = `''`

A human-readable label for the account update, indicating how that update
was created. Can be modified by applications to add richer information.

#### Defined in

[lib/mina/account-update.ts:585](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L585)

___

### lazyAuthorization

• **lazyAuthorization**: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone` = `undefined`

#### Defined in

[lib/mina/account-update.ts:588](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L588)

___

### network

• **network**: `Network`

#### Defined in

[lib/mina/account-update.ts:591](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L591)

___

### Actions

▪ `Static` **Actions**: `Object` = `Actions`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: \{ `data`: `Field`[][] ; `hash`: `Field`  }) => `void` |
| `empty` | () => \{ `data`: `Field`[][] ; `hash`: `Field`  } |
| `fromFields` | (`x`: `Field`[], `aux`: `any`[]) => \{ `data`: `Field`[][] ; `hash`: `Field`  } |
| `fromJSON` | (`x`: `string`[][]) => \{ `data`: `Field`[][] ; `hash`: `Field`  } |
| `toAuxiliary` | (`x?`: \{ `data`: `Field`[][] ; `hash`: `Field`  }) => `any`[] |
| `toFields` | (`x`: \{ `data`: `Field`[][] ; `hash`: `Field`  }) => `Field`[] |
| `toInput` | (`x`: \{ `data`: `Field`[][] ; `hash`: `Field`  }) => \{ `fields?`: `Field`[] ; `packed?`: [`Field`, `number`][]  } |
| `toJSON` | (`x`: \{ `data`: `Field`[][] ; `hash`: `Field`  }) => `string`[][] |
| `emptyActionState` | () => `Field` |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => `Field` |
| `pushEvent` | (`actions`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |
| `updateSequenceState` | (`state`: `Field`, `sequenceEventsHash`: `Field`) => `Field` |

#### Defined in

[lib/mina/account-update.ts:596](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L596)

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

[lib/mina/account-update.ts:1079](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1079)

___

### signingInfo

▪ `Static` `Private` **signingInfo**: `GenericProvableExtendedPure`\<\{ `isSameAsFeePayer`: `Bool` = Bool; `nonce`: [`UInt32`](UInt32.md) = UInt32 }, \{ `isSameAsFeePayer`: `boolean` = Bool; `nonce`: `string` = UInt32 }, `Field`\>

#### Defined in

[lib/mina/account-update.ts:821](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L821)

___

### sizeInFields

▪ `Static` **sizeInFields**: () => `number` = `Types.AccountUpdate.sizeInFields`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[lib/mina/account-update.ts:1066](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1066)

___

### toFields

▪ `Static` **toFields**: (`value`: [`AccountUpdate`](../modules/Types.md#accountupdate-1)) => `Field`[] = `Types.AccountUpdate.toFields`

#### Type declaration

▸ (`value`): `Field`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AccountUpdate`](../modules/Types.md#accountupdate-1) |

##### Returns

`Field`[]

#### Defined in

[lib/mina/account-update.ts:1067](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1067)

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

[lib/mina/account-update.ts:1075](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1075)

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

[lib/mina/account-update.ts:684](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L684)

___

### balanceChange

• `get` **balanceChange**(): [`Int64`](Int64.md)

#### Returns

[`Int64`](Int64.md)

#### Defined in

[lib/mina/account-update.ts:699](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L699)

• `set` **balanceChange**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Int64`](Int64.md) |

#### Returns

`void`

#### Defined in

[lib/mina/account-update.ts:702](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L702)

___

### publicKey

• `get` **publicKey**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/mina/account-update.ts:774](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L774)

___

### tokenId

• `get` **tokenId**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/mina/account-update.ts:627](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L627)

___

### update

• `get` **update**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appState` | \{ `isSome`: `Bool` ; `value`: `Field`  }[] |
| `delegate` | \{ `isSome`: `Bool` ; `value`: [`PublicKey`](Types.PublicKey.md)  } |
| `delegate.isSome` | `Bool` |
| `delegate.value` | [`PublicKey`](Types.PublicKey.md) |
| `permissions` | \{ `isSome`: `Bool` ; `value`: \{ `access`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `editState`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `receive`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `send`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setVerificationKey`: \{ `auth`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `txnVersion`: [`UInt32`](UInt32.md)  } ; `setVotingFor`: [`AuthRequired`](../modules/Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](../modules/Types.md#authrequired-1)  }  } |
| `permissions.isSome` | `Bool` |
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
| `timing` | \{ `isSome`: `Bool` ; `value`: \{ `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  }  } |
| `timing.isSome` | `Bool` |
| `timing.value` | \{ `cliffAmount`: [`UInt64`](UInt64.md) ; `cliffTime`: [`UInt32`](UInt32.md) ; `initialMinimumBalance`: [`UInt64`](UInt64.md) ; `vestingIncrement`: [`UInt64`](UInt64.md) ; `vestingPeriod`: [`UInt32`](UInt32.md)  } |
| `timing.value.cliffAmount` | [`UInt64`](UInt64.md) |
| `timing.value.cliffTime` | [`UInt32`](UInt32.md) |
| `timing.value.initialMinimumBalance` | [`UInt64`](UInt64.md) |
| `timing.value.vestingIncrement` | [`UInt64`](UInt64.md) |
| `timing.value.vestingPeriod` | [`UInt32`](UInt32.md) |
| `tokenSymbol` | \{ `isSome`: `Bool` ; `value`: \{ `field`: `Field` ; `symbol`: `string`  }  } |
| `tokenSymbol.isSome` | `Bool` |
| `tokenSymbol.value` | \{ `field`: `Field` ; `symbol`: `string`  } |
| `tokenSymbol.value.field` | `Field` |
| `tokenSymbol.value.symbol` | `string` |
| `verificationKey` | \{ `isSome`: `Bool` ; `value`: \{ `data`: `string` ; `hash`: `Field`  }  } |
| `verificationKey.isSome` | `Bool` |
| `verificationKey.value` | \{ `data`: `string` ; `hash`: `Field`  } |
| `verificationKey.value.data` | `string` |
| `verificationKey.value.hash` | `Field` |
| `votingFor` | \{ `isSome`: `Bool` ; `value`: `Field`  } |
| `votingFor.isSome` | `Bool` |
| `votingFor.value` | `Field` |
| `zkappUri` | \{ `isSome`: `Bool` ; `value`: \{ `data`: `string` ; `hash`: `Field`  }  } |
| `zkappUri.isSome` | `Bool` |
| `zkappUri.value` | \{ `data`: `string` ; `hash`: `Field`  } |
| `zkappUri.value.data` | `string` |
| `zkappUri.value.hash` | `Field` |

#### Defined in

[lib/mina/account-update.ts:706](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L706)

___

### MayUseToken

• `Static` `get` **MayUseToken**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `InheritFromParent` | \{ `inheritFromParent`: `Bool` ; `parentsOwnToken`: `Bool`  } |
| `InheritFromParent.inheritFromParent` | `Bool` |
| `InheritFromParent.parentsOwnToken` | `Bool` |
| `No` | \{ `inheritFromParent`: `Bool` ; `parentsOwnToken`: `Bool`  } |
| `No.inheritFromParent` | `Bool` |
| `No.parentsOwnToken` | `Bool` |
| `ParentsOwnToken` | \{ `inheritFromParent`: `Bool` ; `parentsOwnToken`: `Bool`  } |
| `ParentsOwnToken.inheritFromParent` | `Bool` |
| `ParentsOwnToken.parentsOwnToken` | `Bool` |
| `type` | `ProvablePureExtended`\<\{ `inheritFromParent`: `Bool` = Bool; `parentsOwnToken`: `Bool` = Bool }, \{ `inheritFromParent`: `boolean` = Bool; `parentsOwnToken`: `boolean` = Bool }\> |
| `isInheritFromParent` | (`a`: [`AccountUpdate`](AccountUpdate.md)) => `Bool` |
| `isNo` | (`__namedParameters`: [`AccountUpdate`](AccountUpdate.md)) => `Bool` |
| `isParentsOwnToken` | (`a`: [`AccountUpdate`](AccountUpdate.md)) => `Bool` |

#### Defined in

[lib/mina/account-update.ts:1104](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1104)

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

[lib/mina/account-update.ts:672](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L672)

___

### extractTree

▸ **extractTree**(): [`AccountUpdateTree`](AccountUpdateTree.md)

#### Returns

[`AccountUpdateTree`](AccountUpdateTree.md)

#### Defined in

[lib/mina/account-update.ts:937](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L937)

___

### hash

▸ **hash**(): `Field`

#### Returns

`Field`

#### Defined in

[lib/mina/account-update.ts:876](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L876)

___

### isDummy

▸ **isDummy**(): `Bool`

#### Returns

`Bool`

#### Defined in

[lib/mina/account-update.ts:955](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L955)

___

### requireSignature

▸ **requireSignature**(): `void`

Use this command if this account update should be signed by the account
owner, instead of not having any authorization.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = await Mina.transaction(...); // create transaction as usual, using `requireSignature()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../modules.md#permissions) determine which updates have to
be (can be) authorized by a signature.

#### Returns

`void`

#### Defined in

[lib/mina/account-update.ts:793](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L793)

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

[lib/mina/account-update.ts:631](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L631)

___

### toJSON

▸ **toJSON**(): [`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Returns

[`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Defined in

[lib/mina/account-update.ts:865](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L865)

___

### toPretty

▸ **toPretty**(): `any`

Returns a JSON representation of only the fields that differ from the
default [AccountUpdate](AccountUpdate.md).

#### Returns

`any`

#### Defined in

[lib/mina/account-update.ts:1136](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1136)

___

### toPrettyLayout

▸ **toPrettyLayout**(): `void`

#### Returns

`void`

#### Defined in

[lib/mina/account-update.ts:931](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L931)

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

[lib/mina/account-update.ts:901](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L901)

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

[lib/mina/account-update.ts:734](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L734)

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

[lib/mina/account-update.ts:761](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L761)

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

[lib/mina/account-update.ts:999](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L999)

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

[lib/mina/account-update.ts:613](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L613)

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
| `tokenId?` | `Field` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:980](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L980)

___

### createSigned

▸ `Static` **createSigned**(`publicKey`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

Creates an account update, like [create](AccountUpdate.md#create), but also
makes sure this account update will be authorized with a signature.

If you use this and are not relying on a wallet to sign your transaction,
then you should use the following code before sending your transaction:

```ts
let tx = await Mina.transaction(...); // create transaction as usual, using `createSigned()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../modules.md#permissions) determine which updates have to
be (can be) authorized by a signature.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | `Field` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:1035](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1035)

___

### defaultAccountUpdate

▸ `Static` **defaultAccountUpdate**(`address`, `tokenId?`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | `Field` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:947](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L947)

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

[lib/mina/account-update.ts:959](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L959)

___

### dummy

▸ `Static` **dummy**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:950](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L950)

___

### dummyFeePayer

▸ `Static` **dummyFeePayer**(): `FeePayerUnsigned`

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/mina/account-update.ts:968](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L968)

___

### empty

▸ `Static` **empty**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:1076](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1076)

___

### fromFields

▸ `Static` **fromFields**(`fields`, `«destructured»`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |
| `«destructured»` | `any`[] |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/mina/account-update.ts:1080](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1080)

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

[lib/mina/account-update.ts:871](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L871)

___

### fundNewAccount

▸ `Static` **fundNewAccount**(`feePayer`, `numberOfAccounts?`): [`AccountUpdate`](AccountUpdate.md)

Use this method to pay the account creation fee for another account (or, multiple accounts using the optional second argument).

Beware that you _don't_ need to specify the account that is created!
Instead, the protocol will automatically identify that accounts need to be created,
and require that the net balance change of the transaction covers the account creation fee.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `feePayer` | [`PublicKey`](Types.PublicKey.md) | `undefined` | the address of the account that pays the fee |
| `numberOfAccounts` | `number` | `1` | the number of new accounts to fund (default: 1) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

they [AccountUpdate](AccountUpdate.md) for the account which pays the fee

#### Defined in

[lib/mina/account-update.ts:1056](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1056)

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

[lib/mina/account-update.ts:817](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L817)

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
| `isSameAsFeePayer` | `Bool` |
| `nonce` | [`UInt32`](UInt32.md) |

#### Defined in

[lib/mina/account-update.ts:826](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L826)

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
| `isSameAsFeePayer` | `Bool` |
| `nonce` | [`UInt32`](UInt32.md) |

#### Defined in

[lib/mina/account-update.ts:834](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L834)

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

[lib/mina/account-update.ts:710](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L710)

___

### signFeePayerInPlace

▸ `Static` **signFeePayerInPlace**(`feePayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | `FeePayerUnsigned` |

#### Returns

`void`

#### Defined in

[lib/mina/account-update.ts:811](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L811)

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

[lib/mina/account-update.ts:1068](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1068)

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

[lib/mina/account-update.ts:868](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L868)

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

[lib/mina/account-update.ts:1016](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1016)

___

### witness

▸ `Static` **witness**\<`T`\>(`type`, `compute`, `«destructured»?`): `Promise`\<\{ `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlexibleProvable`](../modules.md#flexibleprovable)\<`T`\> |
| `compute` | () => `Promise`\<\{ `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  }\> |
| `«destructured»` | `Object` |
| › `skipCheck` | `undefined` \| `boolean` |

#### Returns

`Promise`\<\{ `accountUpdate`: [`AccountUpdate`](AccountUpdate.md) ; `result`: `T`  }\>

#### Defined in

[lib/mina/account-update.ts:1088](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/account-update.ts#L1088)
