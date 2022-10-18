# Namespace: Json

[Types](Types.md).Json

## Table of contents

### Type Aliases

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

### AccountUpdate

Ƭ **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorization` | { `proof`: `string` \| ``null`` ; `signature`: `string` \| ``null``  } |
| `authorization.proof` | `string` \| ``null`` |
| `authorization.signature` | `string` \| ``null`` |
| `body` | { `balanceChange`: { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } ; `callData`: [`Field`](Types.Json.md#field) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.Json.md#tokenid) ; `events`: [`Field`](Types.Json.md#field)[][] ; `incrementNonce`: [`Bool`](Types.Json.md#bool) ; `preconditions`: { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceHardFork`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `timestamp`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  }  } ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `sequenceEvents`: [`Field`](Types.Json.md#field)[][] ; `tokenId`: [`TokenId`](Types.Json.md#tokenid) ; `update`: { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } ; `useFullCommitment`: [`Bool`](Types.Json.md#bool)  } |
| `body.balanceChange` | { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } |
| `body.balanceChange.magnitude` | [`UInt64`](Types.Json.md#uint64) |
| `body.balanceChange.sgn` | [`Sign`](Types.Json.md#sign) |
| `body.callData` | [`Field`](Types.Json.md#field) |
| `body.callDepth` | `number` |
| `body.caller` | [`TokenId`](Types.Json.md#tokenid) |
| `body.events` | [`Field`](Types.Json.md#field)[][] |
| `body.incrementNonce` | [`Bool`](Types.Json.md#bool) |
| `body.preconditions` | { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceHardFork`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `timestamp`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  }  } |
| `body.preconditions.account` | { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } |
| `body.preconditions.account.balance` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.account.delegate` | [`PublicKey`](Types.Json.md#publickey) \| ``null`` |
| `body.preconditions.account.isNew` | [`Bool`](Types.Json.md#bool) \| ``null`` |
| `body.preconditions.account.nonce` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.account.provedState` | [`Bool`](Types.Json.md#bool) \| ``null`` |
| `body.preconditions.account.receiptChainHash` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.account.sequenceState` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.preconditions.account.state` | ([`Field`](Types.Json.md#field) \| ``null``)[] |
| `body.preconditions.network` | { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceHardFork`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `timestamp`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } |
| `body.preconditions.network.blockchainLength` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.globalSlotSinceGenesis` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.preconditions.network.globalSlotSinceHardFork` | { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
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
| `body.preconditions.network.timestamp` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.preconditions.network.totalCurrency` | { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` |
| `body.publicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `body.sequenceEvents` | [`Field`](Types.Json.md#field)[][] |
| `body.tokenId` | [`TokenId`](Types.Json.md#tokenid) |
| `body.update` | { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } |
| `body.update.appState` | ([`Field`](Types.Json.md#field) \| ``null``)[] |
| `body.update.delegate` | [`PublicKey`](Types.Json.md#publickey) \| ``null`` |
| `body.update.permissions` | { `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` |
| `body.update.timing` | { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` |
| `body.update.tokenSymbol` | `string` \| ``null`` |
| `body.update.verificationKey` | { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` |
| `body.update.votingFor` | [`Field`](Types.Json.md#field) \| ``null`` |
| `body.update.zkappUri` | `string` \| ``null`` |
| `body.useFullCommitment` | [`Bool`](Types.Json.md#bool) |

#### Defined in

[snarky/gen/transaction-json.ts:159](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction-json.ts#L159)

___

### AuthRequired

Ƭ **AuthRequired**: ``"Signature"`` \| ``"Proof"`` \| ``"Either"`` \| ``"None"`` \| ``"Impossible"``

#### Defined in

[snarky/transaction-leaves-json.ts:11](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L11)

___

### Bool

Ƭ **Bool**: `boolean`

#### Defined in

[snarky/transaction-leaves-json.ts:6](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L6)

___

### Field

Ƭ **Field**: `string`

#### Defined in

[snarky/transaction-leaves-json.ts:5](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L5)

___

### PublicKey

Ƭ **PublicKey**: `string`

#### Defined in

[snarky/transaction-leaves-json.ts:9](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L9)

___

### Sign

Ƭ **Sign**: ``"Positive"`` \| ``"Negative"``

#### Defined in

[snarky/transaction-leaves-json.ts:10](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L10)

___

### TokenId

Ƭ **TokenId**: [`Field`](Types.Json.md#field)

#### Defined in

[snarky/transaction-leaves-json.ts:12](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L12)

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
| `null` | ``null`` |
| `number` | `number` |
| `string` | `string` |
| `undefined` | ``null`` |

#### Defined in

[snarky/transaction-leaves-json.ts:15](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L15)

___

### UInt32

Ƭ **UInt32**: `string`

#### Defined in

[snarky/transaction-leaves-json.ts:8](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L8)

___

### UInt64

Ƭ **UInt64**: `string`

#### Defined in

[snarky/transaction-leaves-json.ts:7](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves-json.ts#L7)

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | { `authorization`: { `proof`: `string` \| ``null`` ; `signature`: `string` \| ``null``  } ; `body`: { `balanceChange`: { `magnitude`: [`UInt64`](Types.Json.md#uint64) ; `sgn`: [`Sign`](Types.Json.md#sign)  } ; `callData`: [`Field`](Types.Json.md#field) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.Json.md#tokenid) ; `events`: [`Field`](Types.Json.md#field)[][] ; `incrementNonce`: [`Bool`](Types.Json.md#bool) ; `preconditions`: { `account`: { `balance`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `isNew`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `nonce`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `provedState`: [`Bool`](Types.Json.md#bool) \| ``null`` ; `receiptChainHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `sequenceState`: [`Field`](Types.Json.md#field) \| ``null`` ; `state`: ([`Field`](Types.Json.md#field) \| ``null``)[]  } ; `network`: { `blockchainLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceGenesis`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `globalSlotSinceHardFork`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `minWindowDensity`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `nextEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `snarkedLedgerHash`: [`Field`](Types.Json.md#field) \| ``null`` ; `stakingEpochData`: { `epochLength`: { `lower`: [`UInt32`](Types.Json.md#uint32) ; `upper`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `ledger`: { `hash`: [`Field`](Types.Json.md#field) \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  } ; `lockCheckpoint`: [`Field`](Types.Json.md#field) \| ``null`` ; `seed`: [`Field`](Types.Json.md#field) \| ``null`` ; `startCheckpoint`: [`Field`](Types.Json.md#field) \| ``null``  } ; `timestamp`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null`` ; `totalCurrency`: { `lower`: [`UInt64`](Types.Json.md#uint64) ; `upper`: [`UInt64`](Types.Json.md#uint64)  } \| ``null``  }  } ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `sequenceEvents`: [`Field`](Types.Json.md#field)[][] ; `tokenId`: [`TokenId`](Types.Json.md#tokenid) ; `update`: { `appState`: ([`Field`](Types.Json.md#field) \| ``null``)[] ; `delegate`: [`PublicKey`](Types.Json.md#publickey) \| ``null`` ; `permissions`: { `editSequenceState`: [`AuthRequired`](Types.Json.md#authrequired) ; `editState`: [`AuthRequired`](Types.Json.md#authrequired) ; `incrementNonce`: [`AuthRequired`](Types.Json.md#authrequired) ; `receive`: [`AuthRequired`](Types.Json.md#authrequired) ; `send`: [`AuthRequired`](Types.Json.md#authrequired) ; `setDelegate`: [`AuthRequired`](Types.Json.md#authrequired) ; `setPermissions`: [`AuthRequired`](Types.Json.md#authrequired) ; `setTokenSymbol`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVerificationKey`: [`AuthRequired`](Types.Json.md#authrequired) ; `setVotingFor`: [`AuthRequired`](Types.Json.md#authrequired) ; `setZkappUri`: [`AuthRequired`](Types.Json.md#authrequired)  } \| ``null`` ; `timing`: { `cliffAmount`: [`UInt64`](Types.Json.md#uint64) ; `cliffTime`: [`UInt32`](Types.Json.md#uint32) ; `initialMinimumBalance`: [`UInt64`](Types.Json.md#uint64) ; `vestingIncrement`: [`UInt64`](Types.Json.md#uint64) ; `vestingPeriod`: [`UInt32`](Types.Json.md#uint32)  } \| ``null`` ; `tokenSymbol`: `string` \| ``null`` ; `verificationKey`: { `data`: `string` ; `hash`: [`Field`](Types.Json.md#field)  } \| ``null`` ; `votingFor`: [`Field`](Types.Json.md#field) \| ``null`` ; `zkappUri`: `string` \| ``null``  } ; `useFullCommitment`: [`Bool`](Types.Json.md#bool)  }  }[] |
| `feePayer` | { `authorization`: `string` ; `body`: { `fee`: [`UInt64`](Types.Json.md#uint64) ; `nonce`: [`UInt32`](Types.Json.md#uint32) ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `validUntil`: [`UInt32`](Types.Json.md#uint32) \| ``null``  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | { `fee`: [`UInt64`](Types.Json.md#uint64) ; `nonce`: [`UInt32`](Types.Json.md#uint32) ; `publicKey`: [`PublicKey`](Types.Json.md#publickey) ; `validUntil`: [`UInt32`](Types.Json.md#uint32) \| ``null``  } |
| `feePayer.body.fee` | [`UInt64`](Types.Json.md#uint64) |
| `feePayer.body.nonce` | [`UInt32`](Types.Json.md#uint32) |
| `feePayer.body.publicKey` | [`PublicKey`](Types.Json.md#publickey) |
| `feePayer.body.validUntil` | [`UInt32`](Types.Json.md#uint32) \| ``null`` |
| `memo` | `string` |

#### Defined in

[snarky/gen/transaction-json.ts:17](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction-json.ts#L17)
