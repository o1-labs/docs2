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
- [TokenId](Types.md#tokenid)
- [TypeMap](Types.md#typemap)
- [ZkappCommand](Types.md#zkappcommand)

### Variables

- [AccountUpdate](Types.md#accountupdate-1)
- [AuthRequired](Types.md#authrequired-1)
- [Events](Types.md#events)
- [StringWithHash](Types.md#stringwithhash)
- [TokenId](Types.md#tokenid-1)
- [TypeMap](Types.md#typemap-1)
- [ZkappCommand](Types.md#zkappcommand-1)
- [customTypes](Types.md#customtypes)

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

Re-exports [TokenSymbol](../README.md#tokensymbol-1)

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
| `body` | { `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.md#tokenid-1) ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `preconditions`: { `account`: { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `sequenceEvents`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../README.md#tokensymbol-1)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  } |
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
| `body.update` | { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../README.md#tokensymbol-1)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } |
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
| `body.update.tokenSymbol` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../README.md#tokensymbol-1)  } |
| `body.update.tokenSymbol.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.tokenSymbol.value` | [`TokenSymbol`](../README.md#tokensymbol-1) |
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

[snarky/gen/transaction.ts:260](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L260)

[snarky/gen/transaction.ts:447](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L447)

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

[snarky/transaction-leaves.ts:19](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L19)

[snarky/transaction-leaves.ts:63](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L63)

___

### TokenId

Ƭ **TokenId**: [`Field`](../classes/Field.md)

#### Defined in

[snarky/transaction-leaves.ts:24](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L24)

[snarky/transaction-leaves.ts:56](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L56)

___

### TypeMap

Ƭ **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | [`AuthRequired`](Types.md#authrequired-1) |
| `Bool` | [`Bool`](../classes/Bool.md) |
| `Field` | [`Field`](../classes/Field.md) |
| `PublicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `Sign` | [`Sign`](../classes/Sign.md) |
| `TokenId` | [`TokenId`](Types.md#tokenid-1) |
| `UInt32` | [`UInt32`](../classes/UInt32.md) |
| `UInt64` | [`UInt64`](../classes/UInt64.md) |
| `null` | ``null`` |
| `number` | `number` |
| `string` | `string` |
| `undefined` | `undefined` |

#### Defined in

[snarky/transaction-leaves.ts:27](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L27)

[snarky/transaction-leaves.ts:92](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L92)

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | { `authorization`: { `proof?`: `string` ; `signature?`: `string`  } ; `body`: { `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `caller`: [`TokenId`](Types.md#tokenid-1) ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `preconditions`: { `account`: { `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `sequenceState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `sequenceEvents`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `editSequenceState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`TokenSymbol`](../README.md#tokensymbol-1)  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  }  }[] |
| `feePayer` | { `authorization`: `string` ; `body`: { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  } |
| `feePayer.body.fee` | [`UInt64`](../classes/UInt64.md) |
| `feePayer.body.nonce` | [`UInt32`](../classes/UInt32.md) |
| `feePayer.body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `feePayer.body.validUntil?` | [`UInt32`](../classes/UInt32.md) |
| `memo` | `string` |

#### Defined in

[snarky/gen/transaction.ts:56](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L56)

[snarky/gen/transaction.ts:255](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L255)

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
| `witness` | (`f`: () => [`AccountUpdate`](Types.md#accountupdate-1)) => [`AccountUpdate`](Types.md#accountupdate-1) |

#### Defined in

[snarky/gen/transaction.ts:260](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L260)

[snarky/gen/transaction.ts:447](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L447)

___

### AuthRequired

• **AuthRequired**: `AsFieldsExtended`<[`AuthRequired`](Types.md#authrequired-1)\>

#### Defined in

[snarky/transaction-leaves.ts:19](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L19)

[snarky/transaction-leaves.ts:63](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L63)

___

### Events

• `Const` **Events**: `AsFieldsAndAux`<`DataAsHash`<[`Field`](../classes/Field.md)[][]\>, `string`[][]\>

#### Defined in

[snarky/transaction-leaves.ts:127](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L127)

___

### StringWithHash

• `Const` **StringWithHash**: `AsFieldsAndAux`<`DataAsHash`<`string`\>, `string`\>

#### Defined in

[snarky/transaction-leaves.ts:151](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L151)

___

### TokenId

• **TokenId**: `AsFieldsExtended`<[`Field`](../classes/Field.md)\>

#### Defined in

[snarky/transaction-leaves.ts:24](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L24)

[snarky/transaction-leaves.ts:56](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L56)

___

### TypeMap

• **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | `AsFieldsAndAux`<[`AuthRequired`](Types.md#authrequired-1), [`AuthRequired`](Types.Json.md#authrequired)\> |
| `Bool` | `AsFieldsAndAux`<[`Bool`](../classes/Bool.md), `boolean`\> |
| `Field` | `AsFieldsAndAux`<[`Field`](../classes/Field.md), `string`\> |
| `PublicKey` | `AsFieldsAndAux`<[`PublicKey`](../classes/Types.PublicKey.md), `string`\> |
| `Sign` | `AsFieldsAndAux`<[`Sign`](../classes/Sign.md), [`Sign`](Types.Json.md#sign)\> |
| `TokenId` | `AsFieldsAndAux`<[`Field`](../classes/Field.md), `string`\> |
| `UInt32` | `AsFieldsAndAux`<[`UInt32`](../classes/UInt32.md), `string`\> |
| `UInt64` | `AsFieldsAndAux`<[`UInt64`](../classes/UInt64.md), `string`\> |
| `null` | `AsFieldsAndAux`<``null``, ``null``\> |
| `number` | `AsFieldsAndAux`<`number`, `number`\> |
| `string` | `AsFieldsAndAux`<`string`, `string`\> |
| `undefined` | `AsFieldsAndAux`<`undefined`, ``null``\> |

#### Defined in

[snarky/transaction-leaves.ts:27](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L27)

[snarky/transaction-leaves.ts:92](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/transaction-leaves.ts#L92)

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
| `witness` | (`f`: () => [`ZkappCommand`](Types.md#zkappcommand-1)) => [`ZkappCommand`](Types.md#zkappcommand-1) |

#### Defined in

[snarky/gen/transaction.ts:56](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L56)

[snarky/gen/transaction.ts:255](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L255)

___

### customTypes

• **customTypes**: `CustomTypes`

#### Defined in

[snarky/gen/transaction.ts:49](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/gen/transaction.ts#L49)
