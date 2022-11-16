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
- [id](AccountUpdate.md#id)
- [isDelegateCall](AccountUpdate.md#isdelegatecall)
- [isSelf](AccountUpdate.md#isself)
- [label](AccountUpdate.md#label)
- [lazyAuthorization](AccountUpdate.md#lazyauthorization)
- [network](AccountUpdate.md#network)
- [parent](AccountUpdate.md#parent)
- [Layout](AccountUpdate.md#layout)
- [SequenceEvents](AccountUpdate.md#sequenceevents)
- [provable](AccountUpdate.md#provable)
- [sizeInFields](AccountUpdate.md#sizeinfields)

### Accessors

- [balance](AccountUpdate.md#balance)
- [publicKey](AccountUpdate.md#publickey)
- [tokenId](AccountUpdate.md#tokenid)
- [tokenSymbol](AccountUpdate.md#tokensymbol)
- [update](AccountUpdate.md#update)

### Methods

- [approve](AccountUpdate.md#approve)
- [hash](AccountUpdate.md#hash)
- [isDummy](AccountUpdate.md#isdummy)
- [requireSignature](AccountUpdate.md#requiresignature)
- [send](AccountUpdate.md#send)
- [sign](AccountUpdate.md#sign)
- [toJSON](AccountUpdate.md#tojson)
- [toPretty](AccountUpdate.md#topretty)
- [toProvable](AccountUpdate.md#toprovable)
- [toPublicInput](AccountUpdate.md#topublicinput)
- [token](AccountUpdate.md#token)
- [assertBetween](AccountUpdate.md#assertbetween)
- [assertEquals](AccountUpdate.md#assertequals)
- [attachToTransaction](AccountUpdate.md#attachtotransaction)
- [check](AccountUpdate.md#check)
- [clone](AccountUpdate.md#clone)
- [create](AccountUpdate.md#create)
- [createSigned](AccountUpdate.md#createsigned)
- [defaultAccountUpdate](AccountUpdate.md#defaultaccountupdate)
- [defaultFeePayer](AccountUpdate.md#defaultfeepayer)
- [dummy](AccountUpdate.md#dummy)
- [dummyFeePayer](AccountUpdate.md#dummyfeepayer)
- [fromFields](AccountUpdate.md#fromfields)
- [fundNewAccount](AccountUpdate.md#fundnewaccount)
- [getNonce](AccountUpdate.md#getnonce)
- [getNonceUnchecked](AccountUpdate.md#getnonceunchecked)
- [setValue](AccountUpdate.md#setvalue)
- [signFeePayerInPlace](AccountUpdate.md#signfeepayerinplace)
- [toAuxiliary](AccountUpdate.md#toauxiliary)
- [toFields](AccountUpdate.md#tofields)
- [toInput](AccountUpdate.md#toinput)
- [toJSON](AccountUpdate.md#tojson-1)
- [witness](AccountUpdate.md#witness)
- [witnessChildren](AccountUpdate.md#witnesschildren)
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

[lib/account_update.ts:660](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L660)

## Properties

### account

• **account**: `PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/account_update.ts:642](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L642)

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

[lib/account_update.ts:639](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L639)

___

### body

• **body**: `Body`

#### Implementation of

Types.AccountUpdate.body

#### Defined in

[lib/account_update.ts:637](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L637)

___

### children

• **children**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | [`AccountUpdate`](AccountUpdate.md)[] |
| `callsType` | { `type`: ``"None"``  } \| { `type`: ``"Witness"``  } \| { `type`: ``"Equals"`` ; `value`: [`Field`](Field.md)  } |

#### Defined in

[lib/account_update.ts:644](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L644)

___

### id

• **id**: `number`

#### Defined in

[lib/account_update.ts:631](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L631)

___

### isDelegateCall

• **isDelegateCall**: [`Bool`](Bool.md)

#### Defined in

[lib/account_update.ts:638](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L638)

___

### isSelf

• `Private` **isSelf**: `boolean`

#### Defined in

[lib/account_update.ts:656](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L656)

___

### label

• **label**: `string` = `''`

A human-readable label for the account update, indicating how that update was created.
Can be modified by applications to add richer information.

#### Defined in

[lib/account_update.ts:636](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L636)

___

### lazyAuthorization

• **lazyAuthorization**: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone` = `undefined`

#### Defined in

[lib/account_update.ts:640](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L640)

___

### network

• **network**: `PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

#### Defined in

[lib/account_update.ts:643](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L643)

___

### parent

• **parent**: `undefined` \| [`AccountUpdate`](AccountUpdate.md) = `undefined`

#### Defined in

[lib/account_update.ts:654](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L654)

___

### Layout

▪ `Static` **Layout**: `Object`

Describes the children of an account update, which are laid out in a tree.

The tree layout is described recursively by using a combination of `AccountUpdate.Layout.NoChildren`, `AccountUpdate.Layout.StaticChildren(...)` and `AccountUpdate.Layout.AnyChildren`.
- `NoChildren` means an account update that can't have children
- `AnyChildren` means an account update can have an arbitrary amount of children, which means you can't access those children in your circuit (because the circuit is static).
- `StaticChildren` means the account update must have a certain static amount of children and expects as arguments a description of each of those children.
  As a shortcut, you can also pass `StaticChildren` a number, which means it has that amount of children but no grandchildren.

This is best understood by examples:

```ts
let { NoChildren, AnyChildren, StaticChildren } = AccounUpdate.Layout;

NoChildren                 // an account update with no children
AnyChildren                // an account update with arbitrary children
StaticChildren(NoChildren) // an account update with 1 child, which doesn't have children itself
StaticChildren(1)          // shortcut for StaticChildren(NoChildren)
StaticChildren(2)          // shortcut for StaticChildren(NoChildren, NoChildren)
StaticChildren(0)          // equivalent to NoChildren

// an update with 2 children, of which one has arbitrary children and the other has exactly 1 descendant
StaticChildren(AnyChildren, StaticChildren(1))
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnyChildren` | ``"AnyChildren"`` |
| `NoChildren` | `number` |
| `NoDelegation` | ``"NoDelegation"`` |
| `StaticChildren` | (`n`: `number`) => `AccountUpdatesLayout`(...`args`: `AccountUpdatesLayout`[]) => `AccountUpdatesLayout` |

#### Defined in

[lib/account_update.ts:1267](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1267)

___

### SequenceEvents

▪ `Static` **SequenceEvents**: `Object` = `SequenceEvents`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `empty` | () => `Events` |
| `emptySequenceState` | () => [`Field`](Field.md) |
| `hash` | (`events`: `Event`[]) => [`Field`](Field.md) |
| `pushEvent` | (`sequenceEvents`: `Events`, `event`: `Event`) => `Events` |
| `updateSequenceState` | (`state`: [`Field`](Field.md), `sequenceEventsHash`: [`Field`](Field.md)) => [`Field`](Field.md) |

#### Defined in

[lib/account_update.ts:658](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L658)

___

### provable

▪ `Static` `Private` **provable**: [`ProvableExtended`](../README.md#provableextended)<{ `accountUpdate`: [`AccountUpdate`](../modules/Types.md#accountupdate-1) = Types.AccountUpdate; `isDelegateCall`: [`Bool`](Bool.md) = Bool }, { `accountUpdate`: [`AccountUpdate`](../modules/Types.Json.md#accountupdate) = Types.AccountUpdate; `isDelegateCall`: `boolean` = Bool }\>

#### Defined in

[lib/account_update.ts:1113](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1113)

___

### sizeInFields

▪ `Static` **sizeInFields**: () => `number` = `AccountUpdate.provable.sizeInFields`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[lib/account_update.ts:1121](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1121)

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

[lib/account_update.ts:829](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L829)

___

### publicKey

• `get` **publicKey**(): [`PublicKey`](Types.PublicKey.md)

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/account_update.ts:906](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L906)

___

### tokenId

• `get` **tokenId**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account_update.ts:776](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L776)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

#### Defined in

[lib/account_update.ts:780](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L780)

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
| `tokenSymbol` | { `isSome`: [`Bool`](Bool.md) ; `value`: [`TokenSymbol`](TokenSymbol.md)  } |
| `tokenSymbol.isSome` | [`Bool`](Bool.md) |
| `tokenSymbol.value` | [`TokenSymbol`](TokenSymbol.md) |
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

[lib/account_update.ts:844](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L844)

## Methods

### approve

▸ **approve**(`childUpdate`, `layout?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `childUpdate` | [`AccountUpdate`](AccountUpdate.md) | `undefined` |
| `layout` | `AccountUpdatesLayout` | `AccountUpdate.Layout.NoDelegation` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:820](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L820)

___

### hash

▸ **hash**(): [`Field`](Field.md)

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/account_update.ts:986](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L986)

___

### isDummy

▸ **isDummy**(): [`Bool`](Bool.md)

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/account_update.ts:1021](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1021)

___

### requireSignature

▸ **requireSignature**(): `void`

Use this command if this account update should be signed by the account owner,
instead of not having any authorization.

If you use this and are not relying on a wallet to sign your transaction, then you should use the following code
before sending your transaction:

```ts
let tx = Mina.transaction(...); // create transaction as usual, using `requireSignature()` somewhere
tx.sign([privateKey]); // pass the private key of this account to `sign()`!
```

Note that an account's [Permissions](../interfaces/Permissions.md) determine which updates have to be (can be) authorized by a signature.

#### Returns

`void`

#### Defined in

[lib/account_update.ts:924](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L924)

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

[lib/account_update.ts:793](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L793)

___

### sign

▸ **sign**(`privateKey?`): `void`

**`Deprecated`**

`.sign()` is deprecated in favor of `.requireSignature()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:933](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L933)

___

### toJSON

▸ **toJSON**(): [`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Returns

[`AccountUpdate`](../modules/Types.Json.md#accountupdate)

#### Defined in

[lib/account_update.ts:982](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L982)

___

### toPretty

▸ **toPretty**(): `any`

#### Returns

`any`

#### Defined in

[lib/account_update.ts:1281](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1281)

___

### toProvable

▸ `Private` **toProvable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `isDelegateCall` | [`Bool`](Bool.md) |

#### Defined in

[lib/account_update.ts:1117](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1117)

___

### toPublicInput

▸ **toPublicInput**(): [`ZkappPublicInput`](../README.md#zkapppublicinput-1)

#### Returns

[`ZkappPublicInput`](../README.md#zkapppublicinput-1)

#### Defined in

[lib/account_update.ts:1004](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1004)

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

[lib/account_update.ts:691](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L691)

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
| `upper` | `T` | The upper bound  Example: To constrain the account balance of a SmartContract to lie between 0 and 20 MINA, you can use  ```ts \@method onlyRunsWhenBalanceIsLow() {   let lower = UInt64.zero;   let upper = UInt64.from(20e9);   AccountUpdate.assertBetween(this.self.body.preconditions.account.balance, lower, upper);   // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:870](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L870)

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
| `value` | `T` | The value it is fixed to  Example: To fix the account nonce of a SmartContract to 0, you can use  ```ts \@method onlyRunsWhenNonceIsZero() {   AccountUpdate.assertEquals(this.self.body.preconditions.account.nonce, UInt32.zero);   // ... } ``` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:896](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L896)

___

### attachToTransaction

▸ `Static` **attachToTransaction**(`accountUpdate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:1052](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1052)

___

### check

▸ `Static` **check**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:1150](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1150)

___

### clone

▸ `Static` **clone**(`accountUpdate`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:671](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L671)

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

[lib/account_update.ts:1043](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1043)

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

[lib/account_update.ts:1069](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1069)

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

[lib/account_update.ts:1010](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1010)

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

[lib/account_update.ts:1025](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1025)

___

### dummy

▸ `Static` **dummy**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:1018](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1018)

___

### dummyFeePayer

▸ `Static` **dummyFeePayer**(): `FeePayerUnsigned`

#### Returns

`FeePayerUnsigned`

#### Defined in

[lib/account_update.ts:1038](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1038)

___

### fromFields

▸ `Static` **fromFields**(`fields`, `__namedParameters`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |
| `__namedParameters` | `any`[] |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/account_update.ts:1153](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1153)

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

[lib/account_update.ts:1100](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1100)

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

[lib/account_update.ts:949](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L949)

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

[lib/account_update.ts:955](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L955)

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

[lib/account_update.ts:848](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L848)

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

[lib/account_update.ts:940](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L940)

___

### toAuxiliary

▸ `Static` **toAuxiliary**(`a?`): (`any`[] \| { `children`: { `accountUpdates`: [`AccountUpdate`](AccountUpdate.md)[] ; `callsType`: { `type`: ``"None"``  } \| { `type`: ``"Witness"``  } \| { `type`: ``"Equals"`` ; `value`: [`Field`](Field.md)  }  } ; `id`: `number` ; `label`: `string` ; `lazyAuthorization`: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone` ; `parent`: `undefined` \| [`AccountUpdate`](AccountUpdate.md)  })[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

(`any`[] \| { `children`: { `accountUpdates`: [`AccountUpdate`](AccountUpdate.md)[] ; `callsType`: { `type`: ``"None"``  } \| { `type`: ``"Witness"``  } \| { `type`: ``"Equals"`` ; `value`: [`Field`](Field.md)  }  } ; `id`: `number` ; `label`: `string` ; `lazyAuthorization`: `undefined` \| `LazySignature` \| `LazyProof` \| `LazyNone` ; `parent`: `undefined` \| [`AccountUpdate`](AccountUpdate.md)  })[]

#### Defined in

[lib/account_update.ts:1126](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1126)

___

### toFields

▸ `Static` **toFields**(`a`): [`Field`](Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[lib/account_update.ts:1123](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1123)

___

### toInput

▸ `Static` **toInput**(`a`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | [`Field`](Field.md)[] |
| `packed?` | [[`Field`](Field.md), `number`][] |

#### Defined in

[lib/account_update.ts:1144](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1144)

___

### toJSON

▸ `Static` **toJSON**(`a`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](../modules/Types.Json.md#accountupdate) |
| `isDelegateCall` | `boolean` |

#### Defined in

[lib/account_update.ts:1147](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1147)

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
| `type` | [`Provable`](../interfaces/Provable.md)<`T`\> |
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

[lib/account_update.ts:1165](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1165)

___

### witnessChildren

▸ `Static` **witnessChildren**(`accountUpdate`, `childLayout`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) |
| `childLayout` | `AccountUpdatesLayout` |
| `options?` | `Object` |
| `options.skipCheck` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/account_update.ts:1181](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1181)

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
| `resultType` | [`Provable`](../interfaces/Provable.md)<`T`\> |
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

[lib/account_update.ts:1225](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L1225)
