# Namespace: Types

## Table of contents

### References

- [Bool](Types.md#bool)
- [Field](Types.md#field)
- [Sign](Types.md#sign)
- [UInt32](Types.md#uint32)
- [UInt64](Types.md#uint64)

### Namespaces

- [Json](Types.Json.md)

### Classes

- [PublicKey](../classes/Types.PublicKey.md)

### Type Aliases

- [Account](Types.md#account)
- [AccountUpdate](Types.md#accountupdate)
- [ActionState](Types.md#actionstate)
- [Actions](Types.md#actions)
- [AuthRequired](Types.md#authrequired)
- [Events](Types.md#events)
- [Layout](Types.md#layout)
- [ReceiptChainHash](Types.md#receiptchainhash)
- [StateHash](Types.md#statehash)
- [TokenId](Types.md#tokenid)
- [TokenSymbol](Types.md#tokensymbol)
- [TypeMap](Types.md#typemap)
- [ZkappCommand](Types.md#zkappcommand)
- [ZkappUri](Types.md#zkappuri)

### Variables

- [Account](Types.md#account-1)
- [AccountUpdate](Types.md#accountupdate-1)
- [ActionState](Types.md#actionstate-1)
- [Actions](Types.md#actions-1)
- [AuthRequired](Types.md#authrequired-1)
- [Events](Types.md#events-1)
- [ReceiptChainHash](Types.md#receiptchainhash-1)
- [StateHash](Types.md#statehash-1)
- [TokenId](Types.md#tokenid-1)
- [TokenSymbol](Types.md#tokensymbol-1)
- [TypeMap](Types.md#typemap-1)
- [ZkappCommand](Types.md#zkappcommand-1)
- [ZkappUri](Types.md#zkappuri-1)
- [customTypes](Types.md#customtypes)

### Functions

- [emptyValue](Types.md#emptyvalue)
- [provableFromLayout](Types.md#provablefromlayout)
- [toJSONEssential](Types.md#tojsonessential)

## References

### Bool

Re-exports [Bool](../classes/Bool.md)

___

### Field

Re-exports [Field](../classes/Field.md)

___

### Sign

Re-exports [Sign](../classes/Sign.md)

___

### UInt32

Re-exports [UInt32](../classes/UInt32.md)

___

### UInt64

Re-exports [UInt64](../classes/UInt64.md)

## Type Aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | [`UInt64`](../classes/UInt64.md) |
| `delegate?` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `nonce` | [`UInt32`](../classes/UInt32.md) |
| `permissions` | { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  } |
| `permissions.access` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.editActionState` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.editState` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.incrementNonce` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.receive` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.send` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setDelegate` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setPermissions` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setTiming` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setTokenSymbol` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setVerificationKey` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setVotingFor` | [`AuthRequired`](Types.md#authrequired-1) |
| `permissions.setZkappUri` | [`AuthRequired`](Types.md#authrequired-1) |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `receiptChainHash` | [`Field`](../classes/Field.md) |
| `timing` | { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `isTimed`: [`Bool`](../classes/Bool.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  } |
| `timing.cliffAmount` | [`UInt64`](../classes/UInt64.md) |
| `timing.cliffTime` | [`UInt32`](../classes/UInt32.md) |
| `timing.initialMinimumBalance` | [`UInt64`](../classes/UInt64.md) |
| `timing.isTimed` | [`Bool`](../classes/Bool.md) |
| `timing.vestingIncrement` | [`UInt64`](../classes/UInt64.md) |
| `timing.vestingPeriod` | [`UInt32`](../classes/UInt32.md) |
| `tokenId` | [`TokenId`](Types.md#tokenid-1) |
| `tokenSymbol` | `string` |
| `votingFor` | [`Field`](../classes/Field.md) |
| `zkapp?` | { `actionState`: [`Field`](../classes/Field.md)[] ; `appState`: [`Field`](../classes/Field.md)[] ; `lastActionSlot`: [`UInt32`](../classes/UInt32.md) ; `provedState`: [`Bool`](../classes/Bool.md) ; `verificationKey?`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } ; `zkappUri`: `string` ; `zkappVersion`: [`UInt32`](../classes/UInt32.md)  } |
| `zkapp.actionState` | [`Field`](../classes/Field.md)[] |
| `zkapp.appState` | [`Field`](../classes/Field.md)[] |
| `zkapp.lastActionSlot` | [`UInt32`](../classes/UInt32.md) |
| `zkapp.provedState` | [`Bool`](../classes/Bool.md) |
| `zkapp.verificationKey?` | { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } |
| `zkapp.verificationKey.data` | `string` |
| `zkapp.verificationKey.hash` | [`Field`](../classes/Field.md) |
| `zkapp.zkappUri` | `string` |
| `zkapp.zkappVersion` | [`UInt32`](../classes/UInt32.md) |

#### Defined in

[provable/gen/transaction.ts:521](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L521)

[provable/gen/transaction.ts:567](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L567)

___

### AccountUpdate

Ƭ **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorization` | { `proof?`: `string` ; `signature?`: `string`  } |
| `authorization.proof?` | `string` |
| `authorization.signature?` | `string` |
| `body` | { `actions`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `authorizationKind`: { `isProved`: [`Bool`](../classes/Bool.md) ; `isSigned`: [`Bool`](../classes/Bool.md) ; `verificationKeyHash`: [`Field`](../classes/Field.md)  } ; `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `implicitAccountCreationFee`: [`Bool`](../classes/Bool.md) ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `mayUseToken`: { `inheritFromParent`: [`Bool`](../classes/Bool.md) ; `parentsOwnToken`: [`Bool`](../classes/Bool.md)  } ; `preconditions`: { `account`: { `actionState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `field`: [`Field`](../classes/Field.md) ; `symbol`: `string`  }  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  } |
| `body.actions` | { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.actions.data` | [`Field`](../classes/Field.md)[][] |
| `body.actions.hash` | [`Field`](../classes/Field.md) |
| `body.authorizationKind` | { `isProved`: [`Bool`](../classes/Bool.md) ; `isSigned`: [`Bool`](../classes/Bool.md) ; `verificationKeyHash`: [`Field`](../classes/Field.md)  } |
| `body.authorizationKind.isProved` | [`Bool`](../classes/Bool.md) |
| `body.authorizationKind.isSigned` | [`Bool`](../classes/Bool.md) |
| `body.authorizationKind.verificationKeyHash` | [`Field`](../classes/Field.md) |
| `body.balanceChange` | { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } |
| `body.balanceChange.magnitude` | [`UInt64`](../classes/UInt64.md) |
| `body.balanceChange.sgn` | [`Sign`](../classes/Sign.md) |
| `body.callData` | [`Field`](../classes/Field.md) |
| `body.callDepth` | `number` |
| `body.events` | { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `body.events.data` | [`Field`](../classes/Field.md)[][] |
| `body.events.hash` | [`Field`](../classes/Field.md) |
| `body.implicitAccountCreationFee` | [`Bool`](../classes/Bool.md) |
| `body.incrementNonce` | [`Bool`](../classes/Bool.md) |
| `body.mayUseToken` | { `inheritFromParent`: [`Bool`](../classes/Bool.md) ; `parentsOwnToken`: [`Bool`](../classes/Bool.md)  } |
| `body.mayUseToken.inheritFromParent` | [`Bool`](../classes/Bool.md) |
| `body.mayUseToken.parentsOwnToken` | [`Bool`](../classes/Bool.md) |
| `body.preconditions` | { `account`: { `actionState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } |
| `body.preconditions.account` | { `actionState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } |
| `body.preconditions.account.actionState` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } |
| `body.preconditions.account.actionState.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.account.actionState.value` | [`Field`](../classes/Field.md) |
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
| `body.preconditions.account.state` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] |
| `body.preconditions.network` | { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
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
| `body.preconditions.network.totalCurrency` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.totalCurrency.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.network.totalCurrency.value` | { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.validWhile` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.validWhile.isSome` | [`Bool`](../classes/Bool.md) |
| `body.preconditions.validWhile.value` | { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.validWhile.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.validWhile.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.tokenId` | [`TokenId`](Types.md#tokenid-1) |
| `body.update` | { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `field`: [`Field`](../classes/Field.md) ; `symbol`: `string`  }  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } |
| `body.update.appState` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] |
| `body.update.delegate` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } |
| `body.update.delegate.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.delegate.value` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.update.permissions` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } |
| `body.update.permissions.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.permissions.value` | { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  } |
| `body.update.permissions.value.access` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.editActionState` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.editState` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.incrementNonce` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.receive` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.send` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setDelegate` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setPermissions` | [`AuthRequired`](Types.md#authrequired-1) |
| `body.update.permissions.value.setTiming` | [`AuthRequired`](Types.md#authrequired-1) |
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
| `body.update.tokenSymbol` | { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `field`: [`Field`](../classes/Field.md) ; `symbol`: `string`  }  } |
| `body.update.tokenSymbol.isSome` | [`Bool`](../classes/Bool.md) |
| `body.update.tokenSymbol.value` | { `field`: [`Field`](../classes/Field.md) ; `symbol`: `string`  } |
| `body.update.tokenSymbol.value.field` | [`Field`](../classes/Field.md) |
| `body.update.tokenSymbol.value.symbol` | `string` |
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

[provable/gen/transaction.ts:320](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L320)

[provable/gen/transaction.ts:517](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L517)

___

### ActionState

Ƭ **ActionState**: [`Field`](../classes/Field.md)

#### Defined in

[provable/transaction-leaves.ts:47](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L47)

[provable/transaction-leaves.ts:48](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L48)

___

### Actions

Ƭ **Actions**: [`Events`](Types.md#events-1)

#### Defined in

[provable/transaction-leaves.ts:44](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L44)

[provable/transaction-leaves.ts:45](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L45)

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

[provable/transaction-leaves.ts:26](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L26)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### Events

Ƭ **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `Event`[] |
| `hash` | [`Field`](../classes/Field.md) |

#### Defined in

[provable/transaction-leaves.ts:40](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L40)

[provable/transaction-leaves.ts:45](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L45)

___

### Layout

Ƭ **Layout**: `GenericLayout`<[`TypeMap`](Types.md#typemap-1)\>

#### Defined in

[provable/gen/transaction.ts:58](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L58)

___

### ReceiptChainHash

Ƭ **ReceiptChainHash**: [`Field`](../classes/Field.md)

#### Defined in

[provable/transaction-leaves.ts:53](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L53)

[provable/transaction-leaves.ts:54](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L54)

___

### StateHash

Ƭ **StateHash**: [`Field`](../classes/Field.md)

#### Defined in

[provable/transaction-leaves.ts:32](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L32)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### TokenId

Ƭ **TokenId**: [`Field`](../classes/Field.md)

#### Defined in

[provable/transaction-leaves.ts:31](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L31)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### TokenSymbol

Ƭ **TokenSymbol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../classes/Field.md) |
| `symbol` | `string` |

#### Defined in

[provable/transaction-leaves.ts:33](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L33)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

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

#### Defined in

[provable/gen/transaction.ts:33](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L33)

[provable/gen/transaction.ts:44](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L44)

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | { `authorization`: { `proof?`: `string` ; `signature?`: `string`  } ; `body`: { `actions`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `authorizationKind`: { `isProved`: [`Bool`](../classes/Bool.md) ; `isSigned`: [`Bool`](../classes/Bool.md) ; `verificationKeyHash`: [`Field`](../classes/Field.md)  } ; `balanceChange`: { `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../classes/Field.md) ; `callDepth`: `number` ; `events`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } ; `implicitAccountCreationFee`: [`Bool`](../classes/Bool.md) ; `incrementNonce`: [`Bool`](../classes/Bool.md) ; `mayUseToken`: { `inheritFromParent`: [`Bool`](../classes/Bool.md) ; `parentsOwnToken`: [`Bool`](../classes/Bool.md)  } ; `preconditions`: { `account`: { `actionState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `balance`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `nonce`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Bool`](../classes/Bool.md)  } ; `receiptChainHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `state`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[]  } ; `network`: { `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: { `appState`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }[] ; `delegate`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `field`: [`Field`](../classes/Field.md) ; `symbol`: `string`  }  } ; `verificationKey`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  } ; `votingFor`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `zkappUri`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }  } ; `useFullCommitment`: [`Bool`](../classes/Bool.md)  }  }[] |
| `feePayer` | { `authorization`: `string` ; `body`: { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | { `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  } |
| `feePayer.body.fee` | [`UInt64`](../classes/UInt64.md) |
| `feePayer.body.nonce` | [`UInt32`](../classes/UInt32.md) |
| `feePayer.body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `feePayer.body.validUntil?` | [`UInt32`](../classes/UInt32.md) |
| `memo` | `string` |

#### Defined in

[provable/gen/transaction.ts:107](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L107)

[provable/gen/transaction.ts:316](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L316)

___

### ZkappUri

Ƭ **ZkappUri**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](../classes/Field.md) |

#### Defined in

[provable/transaction-leaves.ts:34](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L34)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

## Variables

### Account

• **Account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`Account`](Types.md#account-1)) => `void` |
| `emptyValue` | () => [`Account`](Types.md#account-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Account`](Types.md#account-1) |
| `fromJSON` | (`json`: [`Account`](Types.Json.md#account)) => [`Account`](Types.md#account-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`Account`](Types.md#account-1)) => `any`[] |
| `toFields` | (`value`: [`Account`](Types.md#account-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`Account`](Types.md#account-1)) => `HashInput` |
| `toJSON` | (`value`: [`Account`](Types.md#account-1)) => [`Account`](Types.Json.md#account) |

#### Defined in

[provable/gen/transaction.ts:521](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L521)

[provable/gen/transaction.ts:567](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L567)

___

### AccountUpdate

• **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `void` |
| `emptyValue` | () => [`AccountUpdate`](Types.md#accountupdate-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`AccountUpdate`](Types.md#accountupdate-1) |
| `fromJSON` | (`json`: [`AccountUpdate`](Types.Json.md#accountupdate)) => [`AccountUpdate`](Types.md#accountupdate-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`AccountUpdate`](Types.md#accountupdate-1)) => `any`[] |
| `toFields` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `HashInput` |
| `toJSON` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`AccountUpdate`](Types.Json.md#accountupdate) |

#### Defined in

[provable/gen/transaction.ts:320](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L320)

[provable/gen/transaction.ts:517](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L517)

___

### ActionState

• **ActionState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `emptyValue` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |
| `sizeInFields` | () => `number` |

#### Defined in

[provable/transaction-leaves.ts:47](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L47)

[provable/transaction-leaves.ts:48](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L48)

___

### Actions

• **Actions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `void` |
| `emptyValue` | () => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } & () => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromJSON` | (`x`: `string`[][]) => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `toAuxiliary` | (`x?`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `any`[] |
| `toFields` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `string`[][] |
| `empty` | () => `Events` |
| `emptyActionState` | () => [`Field`](../classes/Field.md) |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => [`Field`](../classes/Field.md) |
| `pushEvent` | (`actions`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |
| `updateSequenceState` | (`state`: [`Field`](../classes/Field.md), `sequenceEventsHash`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md) |

#### Defined in

[provable/transaction-leaves.ts:44](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L44)

[provable/transaction-leaves.ts:45](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L45)

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
| `emptyValue` | () => `AuthRequired` |
| `fromJSON` | (`json`: [`AuthRequired`](Types.Json.md#authrequired)) => `AuthRequired` |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: `AuthRequired`) => [`AuthRequired`](Types.Json.md#authrequired) |

#### Defined in

[provable/transaction-leaves.ts:26](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L26)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### Events

• **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `void` |
| `emptyValue` | () => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } & () => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromJSON` | (`x`: `string`[][]) => { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `toAuxiliary` | (`x?`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `any`[] |
| `toFields` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: { `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `string`[][] |
| `empty` | () => `Events` |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => [`Field`](../classes/Field.md) |
| `pushEvent` | (`events`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |

#### Defined in

[provable/transaction-leaves.ts:40](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L40)

[provable/transaction-leaves.ts:45](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L45)

___

### ReceiptChainHash

• **ReceiptChainHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `emptyValue` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |
| `sizeInFields` | () => `number` |

#### Defined in

[provable/transaction-leaves.ts:53](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L53)

[provable/transaction-leaves.ts:54](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L54)

___

### StateHash

• **StateHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `emptyValue?` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[provable/transaction-leaves.ts:32](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L32)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

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
| `emptyValue` | () => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `sizeInFields` | () => `number` |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[provable/transaction-leaves.ts:31](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L31)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### TokenSymbol

• **TokenSymbol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: { `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String }) => `void` |
| `emptyValue?` | () => { `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String } |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => { `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String } |
| `toAuxiliary` | (`x?`: { `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String }) => `any`[] |
| `toFields` | (`x`: { `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String }) => [`Field`](../classes/Field.md)[] |
| `fromJSON` | (`symbol`: `string`) => `TokenSymbol` |
| `sizeInFields` | () => `number` |
| `toInput` | (`__namedParameters`: `TokenSymbol`) => `GenericHashInput`<[`Field`](../classes/Field.md)\> |
| `toJSON` | (`__namedParameters`: `TokenSymbol`) => `string` |

#### Defined in

[provable/transaction-leaves.ts:33](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L33)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### TypeMap

• **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | `ProvableExtended`<[`AuthRequired`](Types.md#authrequired-1), [`AuthRequired`](Types.Json.md#authrequired)\> |
| `Bool` | `ProvableExtended`<[`Bool`](../classes/Bool.md), `boolean`\> |
| `Field` | `ProvableExtended`<[`Field`](../classes/Field.md), `string`\> |
| `PublicKey` | `ProvableExtended`<[`PublicKey`](../classes/Types.PublicKey.md), `string`\> |
| `Sign` | `ProvableExtended`<[`Sign`](../classes/Sign.md), [`Sign`](Types.Json.md#sign)\> |
| `TokenId` | `ProvableExtended`<[`Field`](../classes/Field.md), `string`\> |
| `UInt32` | `ProvableExtended`<[`UInt32`](../classes/UInt32.md), `string`\> |
| `UInt64` | `ProvableExtended`<[`UInt64`](../classes/UInt64.md), `string`\> |

#### Defined in

[provable/gen/transaction.ts:33](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L33)

[provable/gen/transaction.ts:44](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L44)

___

### ZkappCommand

• **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `void` |
| `emptyValue` | () => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `fromJSON` | (`json`: [`ZkappCommand`](Types.Json.md#zkappcommand)) => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `any`[] |
| `toFields` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `HashInput` |
| `toJSON` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`ZkappCommand`](Types.Json.md#zkappcommand) |

#### Defined in

[provable/gen/transaction.ts:107](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L107)

[provable/gen/transaction.ts:316](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L316)

___

### ZkappUri

• **ZkappUri**: `GenericProvable`<{ `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }, [`Field`](../classes/Field.md)\> & { `emptyValue?`: () => { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } ; `fromJSON`: (`x`: `string`) => { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  } ; `toInput`: (`x`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }) => { `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } ; `toJSON`: (`x`: { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }) => `string`  } & { `emptyValue`: () => { `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }  }

#### Defined in

[provable/transaction-leaves.ts:34](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L34)

[provable/transaction-leaves.ts:36](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/transaction-leaves.ts#L36)

___

### customTypes

• **customTypes**: `CustomTypes`

#### Defined in

[provable/gen/transaction.ts:93](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/gen/transaction.ts#L93)

## Functions

### emptyValue

▸ **emptyValue**(`typeData`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`<[`TypeMap`](Types.md#typemap-1)\> |

#### Returns

`any`

#### Defined in

[provable/from-layout.ts:301](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/from-layout.ts#L301)

___

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
| `typeData` | `GenericLayout`<[`TypeMap`](Types.md#typemap-1)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `check` | (`value`: `T`) => `void` |
| `emptyValue` | () => `T` |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => `T` |
| `fromJSON` | (`json`: `TJson`) => `T` |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: `T`) => `any`[] |
| `toFields` | (`value`: `T`) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: `T`) => `HashInput` |
| `toJSON` | (`value`: `T`) => `TJson` |

#### Defined in

[provable/from-layout.ts:60](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/from-layout.ts#L60)

___

### toJSONEssential

▸ **toJSONEssential**(`typeData`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`<[`TypeMap`](Types.md#typemap-1)\> |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[provable/from-layout.ts:392](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/provable/from-layout.ts#L392)
