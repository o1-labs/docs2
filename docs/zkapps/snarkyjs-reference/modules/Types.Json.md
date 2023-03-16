# Namespace: Json

[Types](Types.md).Json

## Table of contents

### Type Aliases

- [Account](Types.Json.md#account)
- [AccountUpdate](Types.Json.md#accountupdate)
- [AuthRequired](Types.Json.md#authrequired)
- [Bool](Types.Json.md#bool)
- [Field](Types.Json.md#field)
- [PublicKey](Types.Json.md#publickey)
- [Sign](Types.Json.md#sign)
- [TokenId](Types.Json.md#tokenid)
- [TypeMap](Types.Json.md#typemap)
- [UInt32](Types.Json.md#uint32)
- [UInt64](Types.Json.md#uint64)
- [ZkappCommand](Types.Json.md#zkappcommand)

## Type Aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | [`UInt64`](Types.Json.md#uint64) |
| `delegate` | [`PublicKey`](Types.Json.md#publickey) \| ``null`` |
| `nonce` | [`UInt32`](Types.Json.md#uint32) |
| `permissions` | { `access`: [`AuthRequired`](Types.Json.md#authrequired) ; `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } |
| `permissions.access` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.editSequenceState` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.editState` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.incrementNonce` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.receive` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.send` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setDelegate` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setPermissions` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setTiming` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setTokenSymbol` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setVerificationKey` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setVotingFor` | [`AuthRequired`](Types.Json.md#authrequired) |
| `permissions.setZkappUri` | [`AuthRequired`](Types.Json.md#authrequired) |
| `publicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `receiptChainHash` | [`Field`](Types.Json.md#field) |
| `timing` | { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `isTimed`: [`Bool`](Types.Json.md#bool) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } |
| `timing.cliffAmount` | [`UInt64`](Types.Json.md#uint64) |
| `timing.cliffTime` | [`UInt32`](Types.Json.md#uint32) |
| `timing.initialMinimumBalance` | [`UInt64`](Types.Json.md#uint64) |
| `timing.isTimed` | [`Bool`](Types.Json.md#bool) |
| `timing.vestingIncrement` | [`UInt64`](Types.Json.md#uint64) |
| `timing.vestingPeriod` | [`UInt32`](Types.Json.md#uint32) |
| `tokenId` | [`TokenId`](Types.Json.md#tokenid) |
| `tokenSymbol` | `string` |
| `votingFor` | [`Field`](Types.Json.md#field) |
| `zkapp` | { `appState`: [`Field`](Types.Json.md#field)[] ; `lastSequenceSlot`: [`UInt32`](Types.Json.md#uint32) ; `provedState`: [`Bool`](Types.Json.md#bool) ; `sequenceState`: [`Field`](Types.Json.md#field)[] ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `zkappUri`: `string` ; `zkappVersion`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |

#### Defined in

[provable/gen/transaction-json.ts:315](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/gen/transaction-json.ts#L315)

___

### AccountUpdate

Ƭ **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorization` | { `proof`: `string` \| ``null`` ; `signature`: `string` \| ``null``  } |
| `authorization.proof` | `string` \| ``null`` |
| `authorization.signature` | `string` \| ``null`` |
| `body` | { `actions`: [`Field`](Types.Json.md#field)[][] ; `authorizationKind`: { `isProved`: [`Bool`](Types.Json.md#bool) ; `isSigned`: [`Bool`](Types.Json.md#bool) ; `verificationKeyHash`: [`Field`](Types.Json.md#field)  } ; `balanceChange`: { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } ; `callData`: [`Field`](Types.Json.md#field) ; `callDepth`: `number` ; `events`: [`Field`](Types.Json.md#field)[][] ; `implicitAccountCreationFee`: [`Bool`](Types.Json.md#bool) ; `incrementNonce`: [`Bool`](Types.Json.md#bool) ; `mayUseToken`: { `inheritFromParent`: [`Bool`](Types.Json.md#bool) ; `parentsOwnToken`: [`Bool`](Types.Json.md#bool)  } ; `preconditions`: { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `validWhile`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null``  } ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `tokenId`: [`TokenId`](Types.Json.md#tokenid) ; `update`: { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `access`: [`AuthRequired`](Types.Json.md#authrequired) ; `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } ; `useFullCommitment`: [`Bool`](Types.Json.md#bool)  } |
| `body.actions` | [`Field`](Types.Json.md#field)[][] |
| `body.authorizationKind` | { `isProved`: [`Bool`](Types.Json.md#bool) ; `isSigned`: [`Bool`](Types.Json.md#bool) ; `verificationKeyHash`: [`Field`](Types.Json.md#field)  } |
| `body.authorizationKind.isProved` | [`Bool`](Types.Json.md#bool) |
| `body.authorizationKind.isSigned` | [`Bool`](Types.Json.md#bool) |
| `body.authorizationKind.verificationKeyHash` | [`Field`](Types.Json.md#field) |
| `body.balanceChange` | { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } |
| `body.balanceChange.magnitude` | [`UInt64`](Types.Json.md#uint64) |
| `body.balanceChange.sgn` | [`Sign`](Types.Json.md#sign) |
| `body.callData` | [`Field`](Types.Json.md#field) |
| `body.callDepth` | `number` |
| `body.events` | [`Field`](Types.Json.md#field)[][] |
| `body.implicitAccountCreationFee` | [`Bool`](Types.Json.md#bool) |
| `body.incrementNonce` | [`Bool`](Types.Json.md#bool) |
| `body.mayUseToken` | { `inheritFromParent`: [`Bool`](Types.Json.md#bool) ; `parentsOwnToken`: [`Bool`](Types.Json.md#bool)  } |
| `body.mayUseToken.inheritFromParent` | [`Bool`](Types.Json.md#bool) |
| `body.mayUseToken.parentsOwnToken` | [`Bool`](Types.Json.md#bool) |
| `body.preconditions` | { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `validWhile`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null``  } |
| `body.preconditions.account` | { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } |
| `body.preconditions.account.balance` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.account.delegate` | [`PublicKey`](Types.Json.md#publickey) \| ``null`` |
| `body.preconditions.account.isNew` | [`Bool`](Types.Json.md#bool) \| ``null`` |
| `body.preconditions.account.nonce` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.account.provedState` | [`Bool`](Types.Json.md#bool) \| ``null`` |
| `body.preconditions.account.receiptChainHash` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.account.sequenceState` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.account.state` | ([`Field`](Types.Json.md#field) \| ``null``)[] |
| `body.preconditions.network` | { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } |
| `body.preconditions.network.blockchainLength` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.globalSlotSinceGenesis` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.minWindowDensity` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.nextEpochData` | { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } |
| `body.preconditions.network.nextEpochData.epochLength` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.nextEpochData.ledger` | { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } |
| `body.preconditions.network.nextEpochData.ledger.hash` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.network.nextEpochData.lockCheckpoint` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.nextEpochData.seed` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.nextEpochData.startCheckpoint` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.snarkedLedgerHash` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.stakingEpochData` | { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } |
| `body.preconditions.network.stakingEpochData.epochLength` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.stakingEpochData.ledger` | { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } |
| `body.preconditions.network.stakingEpochData.ledger.hash` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.network.stakingEpochData.lockCheckpoint` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.stakingEpochData.seed` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.stakingEpochData.startCheckpoint` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.network.totalCurrency` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.validWhile` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.publicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `body.tokenId` | [`TokenId`](Types.Json.md#tokenid) |
| `body.update` | { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `access`: [`AuthRequired`](Types.Json.md#authrequired) ; `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } |
| `body.update.appState` | ([`Field`](Types.Json.md#field) \| ``null``)[] |
| `body.update.delegate` | [`PublicKey`](Types.Json.md#publickey) \| ``null`` |
| `body.update.permissions` | { `access`: [`AuthRequired`](Types.Json.md#authrequired) ; `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` |
| `body.update.timing` | { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.update.tokenSymbol` | `string` \| ``null`` |
| `body.update.verificationKey` | { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` |
| `body.update.votingFor` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.update.zkappUri` | `string` \| ``null`` |
| `body.useFullCommitment` | [`Bool`](Types.Json.md#bool) |

#### Defined in

[provable/gen/transaction-json.ts:178](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/gen/transaction-json.ts#L178)

___

### AuthRequired

Ƭ **AuthRequired**: ``"Signature"`` \| ``"Proof"`` \| ``"Either"`` \| ``"None"`` \| ``"Impossible"``

#### Defined in

[provable/transaction-leaves-json.ts:9](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L9)

___

### Bool

Ƭ **Bool**: `boolean`

#### Defined in

[provable/transaction-leaves-json.ts:4](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L4)

___

### Field

Ƭ **Field**: `string`

#### Defined in

[provable/transaction-leaves-json.ts:3](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L3)

___

### PublicKey

Ƭ **PublicKey**: `string`

#### Defined in

[provable/transaction-leaves-json.ts:7](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L7)

___

### Sign

Ƭ **Sign**: ``"Positive"`` \| ``"Negative"``

#### Defined in

[provable/transaction-leaves-json.ts:8](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L8)

___

### TokenId

Ƭ **TokenId**: [`Field`](Types.Json.md#field)

#### Defined in

[provable/transaction-leaves-json.ts:10](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L10)

___

### TypeMap

Ƭ **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | [`AuthRequired`](Types.Json.md#authrequired) |
| `Bool` | [`Bool`](Types.Json.md#bool) |
| `Field` | [`Field`](Types.Json.md#field) |
| `PublicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `Sign` | [`Sign`](Types.Json.md#sign) |
| `TokenId` | [`TokenId`](Types.Json.md#tokenid) |
| `UInt32` | [`UInt32`](Types.Json.md#uint32) |
| `UInt64` | [`UInt64`](Types.Json.md#uint64) |

#### Defined in

[provable/gen/transaction-json.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/gen/transaction-json.ts#L18)

___

### UInt32

Ƭ **UInt32**: `string`

#### Defined in

[provable/transaction-leaves-json.ts:6](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L6)

___

### UInt64

Ƭ **UInt64**: `string`

#### Defined in

[provable/transaction-leaves-json.ts:5](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/transaction-leaves-json.ts#L5)

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | { `authorization`: { `proof`: `string` \| ``null`` ; `signature`: `string` \| ``null``  } ; `body`: { `actions`: [`Field`](Types.Json.md#field)[][] ; `authorizationKind`: { `isProved`: [`Bool`](Types.Json.md#bool) ; `isSigned`: [`Bool`](Types.Json.md#bool) ; `verificationKeyHash`: [`Field`](Types.Json.md#field)  } ; `balanceChange`: { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } ; `callData`: [`Field`](Types.Json.md#field) ; `callDepth`: `number` ; `events`: [`Field`](Types.Json.md#field)[][] ; `implicitAccountCreationFee`: [`Bool`](Types.Json.md#bool) ; `incrementNonce`: [`Bool`](Types.Json.md#bool) ; `mayUseToken`: { `inheritFromParent`: [`Bool`](Types.Json.md#bool) ; `parentsOwnToken`: [`Bool`](Types.Json.md#bool)  } ; `preconditions`: { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `validWhile`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null``  } ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `tokenId`: [`TokenId`](Types.Json.md#tokenid) ; `update`: { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `access`: [`AuthRequired`](Types.Json.md#authrequired) ; `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTiming`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } ; `useFullCommitment`: [`Bool`](Types.Json.md#bool)  }  }[] |
| `feePayer` | { `authorization`: `string` ; `body`: { `fee`: [`UInt64`](Types.Json.md#uint64) ; `nonce`: [`UInt32`](Types.Json.md#uint32) ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `validUntil`: [`UInt32`](Types.Json.md#uint32) \| ``null``  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | { `fee`: [`UInt64`](Types.Json.md#uint64) ; `nonce`: [`UInt32`](Types.Json.md#uint32) ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `validUntil`: [`UInt32`](Types.Json.md#uint32) \| ``null``  } |
| `feePayer.body.fee` | [`UInt64`](Types.Json.md#uint64) |
| `feePayer.body.nonce` | [`UInt32`](Types.Json.md#uint32) |
| `feePayer.body.publicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `feePayer.body.validUntil` | [`UInt32`](Types.Json.md#uint32) \| ``null`` |
| `memo` | `string` |

#### Defined in

[provable/gen/transaction-json.ts:29](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/provable/gen/transaction-json.ts#L29)
