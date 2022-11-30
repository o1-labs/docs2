# Namespace: Types

## Table of contents

### References

- [Bool](Types.md#bool)
- [Field](Types.md#field)
- [SequenceEvents](Types.md#sequenceevents)
- [Sign](Types.md#sign)
- [TokenSymbol](Types.md#tokensymbol)
- [UInt32](Types.md#uint32)
- [UInt64](Types.md#uint64)

### Namespaces

- [Json](Types.Json.md)

### Classes

- [PublicKey](../classes/Types.PublicKey.md)

### Type Aliases

- [AccountUpdate](Types.md#accountupdate)
- [AuthRequired](Types.md#authrequired)
- [AuthorizationKind](Types.md#authorizationkind)
- [Layout](Types.md#layout)
- [TokenId](Types.md#tokenid)
- [ZkappCommand](Types.md#zkappcommand)

### Variables

- [AccountUpdate](Types.md#accountupdate-1)
- [AuthRequired](Types.md#authrequired-1)
- [AuthorizationKind](Types.md#authorizationkind-1)
- [Events](Types.md#events)
- [StringWithHash](Types.md#stringwithhash)
- [TokenId](Types.md#tokenid-1)
- [ZkappCommand](Types.md#zkappcommand-1)
- [customTypes](Types.md#customtypes)

### Functions

- [provableFromLayout](Types.md#provablefromlayout)
- [toJSONEssential](Types.md#tojsonessential)

## References

### Bool

Re-exports [Bool](../classes/Bool.md)

___

### Field

Re-exports [Field](../classes/Field.md)

___

### SequenceEvents

Renames and re-exports [Events](Types.md#events)

___

### Sign

Re-exports [Sign](../classes/Sign.md)

___

### TokenSymbol

Re-exports [TokenSymbol](../classes/TokenSymbol.md)

___

### UInt32

Re-exports [UInt32](../classes/UInt32.md)

___

### UInt64

Re-exports [UInt64](../classes/UInt64.md)

## Type Aliases

### AccountUpdate

Ƭ **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorization` | { `proof?`: `string` ; `signature?`: `string`  } |
| `authorization.proof?` | `string` |
| `authorization.signature?` | `string` |
| `body` | { `authorizationKind`: [`AuthorizationKind`](Types.md#authorizationkind-1) ; `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.md#tokenid-1) ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `preconditions`: { `account`: { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `sequenceEvents`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../classes/TokenSymbol.md)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  } |
| `body.authorizationKind` | [`AuthorizationKind`](Types.md#authorizationkind-1) |
| `body.balanceChange` | { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } |
| `body.balanceChange.magnitude` | [`UInt64`](../classes/UInt64.md) |
| `body.balanceChange.sgn` | [`Sign`](../classes/Sign.md) |
| `body.callData` | [`Field`](../classes/Field.md) |
| `body.callDepth` | `number` |
| `body.caller` | [`TokenId`](Types.md#tokenid-1) |
| `body.events` | { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.events.data` | [`Field`](../classes/Field.md)[][] |
| `body.events.hash` | [`Field`](../classes/Field.md) |
| `body.incrementNonce` | [`Bool`](../classes/Bool.md) |
| `body.preconditions` | { `account`: { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }  } |
| `body.preconditions.account` | { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } |
| `body.preconditions.account.balance` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.account.balance.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.balance.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.account.balance.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.account.balance.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.account.delegate` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } |
| `body.preconditions.account.delegate.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.delegate.value` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.preconditions.account.isNew` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } |
| `body.preconditions.account.isNew.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.isNew.value` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.nonce` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.account.nonce.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.nonce.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.account.nonce.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.account.nonce.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.account.provedState` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } |
| `body.preconditions.account.provedState.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.provedState.value` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.receiptChainHash` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.account.receiptChainHash.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.receiptChainHash.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.account.sequenceState` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.account.sequenceState.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.sequenceState.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.account.state` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] |
| `body.preconditions.network` | { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.blockchainLength` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.blockchainLength.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.blockchainLength.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.blockchainLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.blockchainLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceGenesis` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.globalSlotSinceGenesis.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.globalSlotSinceGenesis.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.globalSlotSinceGenesis.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceGenesis.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceHardFork` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.globalSlotSinceHardFork.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.globalSlotSinceHardFork.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.globalSlotSinceHardFork.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceHardFork.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.minWindowDensity` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.minWindowDensity.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.minWindowDensity.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.minWindowDensity.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.minWindowDensity.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData` | { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } |
| `body.preconditions.network.nextEpochData.epochLength` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.nextEpochData.epochLength.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.epochLength.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.nextEpochData.epochLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData.epochLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData.ledger` | { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.nextEpochData.ledger.hash` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.nextEpochData.ledger.hash.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.ledger.hash.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.nextEpochData.lockCheckpoint` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.nextEpochData.lockCheckpoint.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.lockCheckpoint.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.nextEpochData.seed` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.nextEpochData.seed.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.seed.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.nextEpochData.startCheckpoint` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.nextEpochData.startCheckpoint.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.nextEpochData.startCheckpoint.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.snarkedLedgerHash` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.snarkedLedgerHash.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.snarkedLedgerHash.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.stakingEpochData` | { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } |
| `body.preconditions.network.stakingEpochData.epochLength` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.stakingEpochData.epochLength.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.epochLength.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.stakingEpochData.epochLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.stakingEpochData.epochLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.stakingEpochData.ledger` | { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.stakingEpochData.ledger.hash` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.stakingEpochData.ledger.hash.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.ledger.hash.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.stakingEpochData.lockCheckpoint` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.stakingEpochData.lockCheckpoint.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.lockCheckpoint.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.stakingEpochData.seed` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.stakingEpochData.seed.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.seed.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.stakingEpochData.startCheckpoint` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.network.stakingEpochData.startCheckpoint.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.stakingEpochData.startCheckpoint.value` | [`Field`](../classes/Field.md) |
| `body.preconditions.network.timestamp` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.timestamp.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.timestamp.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.timestamp.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.timestamp.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.totalCurrency` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.totalCurrency.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.totalCurrency.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.sequenceEvents` | { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.sequenceEvents.data` | [`Field`](../classes/Field.md)[][] |
| `body.sequenceEvents.hash` | [`Field`](../classes/Field.md) |
| `body.tokenId` | [`TokenId`](Types.md#tokenid-1) |
| `body.update` | { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../classes/TokenSymbol.md)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } |
| `body.update.appState` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] |
| `body.update.delegate` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } |
| `body.update.delegate.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.delegate.value` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.update.permissions` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } |
| `body.update.permissions.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.permissions.value` | { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  } |
| `body.update.permissions.value.editSequenceState` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.editState` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.incrementNonce` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.receive` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.send` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setDelegate` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setPermissions` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setTokenSymbol` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setVerificationKey` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setVotingFor` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setZkappUri` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.timing` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.update.timing.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.timing.value` | { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  } |
| `body.update.timing.value.cliffAmount` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.cliffTime` | [`UInt32`](../classes/UInt32.md) |
| `body.update.timing.value.initialMinimumBalance` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.vestingIncrement` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.vestingPeriod` | [`UInt32`](../classes/UInt32.md) |
| `body.update.tokenSymbol` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../classes/TokenSymbol.md)  } |
| `body.update.tokenSymbol.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.tokenSymbol.value` | [`TokenSymbol`](../classes/TokenSymbol.md) |
| `body.update.verificationKey` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } |
| `body.update.verificationKey.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.verificationKey.value` | { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.update.verificationKey.value.data` | `string` |
| `body.update.verificationKey.value.hash` | [`Field`](../classes/Field.md) |
| `body.update.votingFor` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.update.votingFor.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.votingFor.value` | [`Field`](../classes/Field.md) |
| `body.update.zkappUri` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } |
| `body.update.zkappUri.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.zkappUri.value` | { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.update.zkappUri.value.data` | `string` |
| `body.update.zkappUri.value.hash` | [`Field`](../classes/Field.md) |
| `body.useFullCommitment` | [`Bool`](../classes/Bool.md) |

#### Defined in

[provable/gen/transaction.ts:299](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L299)

[provable/gen/transaction.ts:487](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L487)

___

### AuthRequired

Ƭ **AuthRequired**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constant` | [`Bool`](../classes/Bool.md) |
| `signatureNecessary` | [`Bool`](../classes/Bool.md) |
| `signatureSufficient` | [`Bool`](../classes/Bool.md) |

#### Defined in

[provable/transaction-leaves.ts:23](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L23)

[provable/transaction-leaves.ts:38](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L38)

___

### AuthorizationKind

Ƭ **AuthorizationKind**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isProved` | [`Bool`](../classes/Bool.md) |
| `isSigned` | [`Bool`](../classes/Bool.md) |

#### Defined in

[provable/transaction-leaves.ts:28](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L28)

[provable/transaction-leaves.ts:65](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L65)

___

### Layout

Ƭ **Layout**: `GenericLayout`<`TypeMap`\>

#### Defined in

[provable/gen/transaction.ts:58](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L58)

___

### TokenId

Ƭ **TokenId**: [`Field`](../classes/Field.md)

#### Defined in

[provable/transaction-leaves.ts:29](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L29)

[provable/transaction-leaves.ts:31](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L31)

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | { `authorization`: { `proof?`: `string` ; `signature?`: `string`  } ; `body`: { `authorizationKind`: [`AuthorizationKind`](Types.md#authorizationkind-1) ; `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.md#tokenid-1) ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `preconditions`: { `account`: { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `sequenceEvents`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../classes/TokenSymbol.md)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  }  }[] |
| `feePayer` | { `authorization`: `string` ; `body`: { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  } |
| `feePayer.body.fee` | [`UInt64`](../classes/UInt64.md) |
| `feePayer.body.nonce` | [`UInt32`](../classes/UInt32.md) |
| `feePayer.body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `feePayer.body.validUntil?` | [`UInt32`](../classes/UInt32.md) |
| `memo` | `string` |

#### Defined in

[provable/gen/transaction.ts:95](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L95)

[provable/gen/transaction.ts:295](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L295)

## Variables

### AccountUpdate

• **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `void` |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`AccountUpdate`](Types.md#accountupdate-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`AccountUpdate`](Types.md#accountupdate-1)) => `any`[] |
| `toFields` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `HashInput` |
| `toJSON` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`AccountUpdate`](Types.Json.md#accountupdate) |

#### Defined in

[provable/gen/transaction.ts:299](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L299)

[provable/gen/transaction.ts:487](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L487)

___

### AuthRequired

• **AuthRequired**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: { `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool }) => `void` |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => { `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool } |
| `toAuxiliary` | (`x?`: { `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool }) => `any`[] |
| `toFields` | (`x`: { `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: { `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool }) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: [`AuthRequired`](Types.md#authrequired-1)) => [`AuthRequired`](Types.Json.md#authrequired) |

#### Defined in

[provable/transaction-leaves.ts:23](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L23)

[provable/transaction-leaves.ts:38](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L38)

___

### AuthorizationKind

• **AuthorizationKind**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: { `isProved`: [`Bool`](../classes/Bool.md) = Bool; `isSigned`: [`Bool`](../classes/Bool.md) = Bool }) => `void` |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => { `isProved`: [`Bool`](../classes/Bool.md) = Bool; `isSigned`: [`Bool`](../classes/Bool.md) = Bool } |
| `toAuxiliary` | (`x?`: { `isProved`: [`Bool`](../classes/Bool.md) = Bool; `isSigned`: [`Bool`](../classes/Bool.md) = Bool }) => `any`[] |
| `toFields` | (`x`: { `isProved`: [`Bool`](../classes/Bool.md) = Bool; `isSigned`: [`Bool`](../classes/Bool.md) = Bool }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: { `isProved`: [`Bool`](../classes/Bool.md) = Bool; `isSigned`: [`Bool`](../classes/Bool.md) = Bool }) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: [`AuthorizationKind`](Types.md#authorizationkind-1)) => [`AuthorizationKind`](Types.Json.md#authorizationkind) |

#### Defined in

[provable/transaction-leaves.ts:28](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L28)

[provable/transaction-leaves.ts:65](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L65)

___

### Events

• `Const` **Events**: [`ProvableExtended`](../README.md#provableextended)<{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }, `string`[][]\>

#### Defined in

[provable/transaction-leaves.ts:87](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L87)

___

### StringWithHash

• `Const` **StringWithHash**: [`ProvableExtended`](../README.md#provableextended)<{ `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }, `string`\>

#### Defined in

[provable/transaction-leaves.ts:93](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L93)

___

### TokenId

• **TokenId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[provable/transaction-leaves.ts:29](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L29)

[provable/transaction-leaves.ts:31](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/transaction-leaves.ts#L31)

___

### ZkappCommand

• **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `void` |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `any`[] |
| `toFields` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `HashInput` |
| `toJSON` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`ZkappCommand`](Types.Json.md#zkappcommand) |

#### Defined in

[provable/gen/transaction.ts:95](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L95)

[provable/gen/transaction.ts:295](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L295)

___

### customTypes

• **customTypes**: `CustomTypes`

#### Defined in

[provable/gen/transaction.ts:84](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/gen/transaction.ts#L84)

## Functions

### provableFromLayout

▸ **provableFromLayout**<`T`, `TJson`\>(`typeData`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TJson` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`<`TypeMap`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `check` | (`value`: `T`) => `void` |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => `T` |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: `T`) => `any`[] |
| `toFields` | (`value`: `T`) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: `T`) => `HashInput` |
| `toJSON` | (`value`: `T`) => `TJson` |

#### Defined in

[provable/from-layout.ts:55](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/from-layout.ts#L55)

___

### toJSONEssential

▸ **toJSONEssential**(`typeData`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`<`TypeMap`\> |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[provable/from-layout.ts:349](https://github.com/o1-labs/snarkyjs/blob/531db432/src/provable/from-layout.ts#L349)
