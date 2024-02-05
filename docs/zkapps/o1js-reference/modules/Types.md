[o1js](../README.md) / [Modules](../modules.md) / Types

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
- [VerificationKeyHash](Types.md#verificationkeyhash)
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
- [VerificationKeyHash](Types.md#verificationkeyhash-1)
- [ZkappCommand](Types.md#zkappcommand-1)
- [ZkappUri](Types.md#zkappuri-1)
- [customTypes](Types.md#customtypes)

### Functions

- [empty](Types.md#empty)
- [provableFromLayout](Types.md#provablefromlayout)
- [toJSONEssential](Types.md#tojsonessential)

## References

### Bool

Re-exports [Bool](../modules.md#bool-1)

___

### Field

Re-exports [Field](../modules.md#field-1)

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
| `permissions` | \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  } |
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
| `receiptChainHash` | [`Field`](../modules.md#field-1) |
| `timing` | \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `isTimed`: [`Bool`](../modules.md#bool-1) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  } |
| `timing.cliffAmount` | [`UInt64`](../classes/UInt64.md) |
| `timing.cliffTime` | [`UInt32`](../classes/UInt32.md) |
| `timing.initialMinimumBalance` | [`UInt64`](../classes/UInt64.md) |
| `timing.isTimed` | [`Bool`](../modules.md#bool-1) |
| `timing.vestingIncrement` | [`UInt64`](../classes/UInt64.md) |
| `timing.vestingPeriod` | [`UInt32`](../classes/UInt32.md) |
| `tokenId` | [`TokenId`](Types.md#tokenid-1) |
| `tokenSymbol` | `string` |
| `votingFor` | [`Field`](../modules.md#field-1) |
| `zkapp?` | \{ `actionState`: [`Field`](../modules.md#field-1)[] ; `appState`: [`Field`](../modules.md#field-1)[] ; `lastActionSlot`: [`UInt32`](../classes/UInt32.md) ; `provedState`: [`Bool`](../modules.md#bool-1) ; `verificationKey?`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  } ; `zkappUri`: `string` ; `zkappVersion`: [`UInt32`](../classes/UInt32.md)  } |
| `zkapp.actionState` | [`Field`](../modules.md#field-1)[] |
| `zkapp.appState` | [`Field`](../modules.md#field-1)[] |
| `zkapp.lastActionSlot` | [`UInt32`](../classes/UInt32.md) |
| `zkapp.provedState` | [`Bool`](../modules.md#bool-1) |
| `zkapp.verificationKey?` | \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  } |
| `zkapp.verificationKey.data` | `string` |
| `zkapp.verificationKey.hash` | [`Field`](../modules.md#field-1) |
| `zkapp.zkappUri` | `string` |
| `zkapp.zkappVersion` | [`UInt32`](../classes/UInt32.md) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:521

bindings/mina-transaction/gen/transaction.ts:567

___

### AccountUpdate

Ƭ **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorization` | \{ `proof?`: `string` ; `signature?`: `string`  } |
| `authorization.proof?` | `string` |
| `authorization.signature?` | `string` |
| `body` | \{ `actions`: \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } ; `authorizationKind`: \{ `isProved`: [`Bool`](../modules.md#bool-1) ; `isSigned`: [`Bool`](../modules.md#bool-1) ; `verificationKeyHash`: [`Field`](../modules.md#field-1)  } ; `balanceChange`: \{ `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../modules.md#field-1) ; `callDepth`: `number` ; `events`: \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } ; `implicitAccountCreationFee`: [`Bool`](../modules.md#bool-1) ; `incrementNonce`: [`Bool`](../modules.md#bool-1) ; `mayUseToken`: \{ `inheritFromParent`: [`Bool`](../modules.md#bool-1) ; `parentsOwnToken`: [`Bool`](../modules.md#bool-1)  } ; `preconditions`: \{ `account`: \{ `actionState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `balance`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `nonce`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `receiptChainHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `state`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[]  } ; `network`: \{ `blockchainLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: \{ `appState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[] ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `field`: [`Field`](../modules.md#field-1) ; `symbol`: `string`  }  } ; `verificationKey`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  } ; `votingFor`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `zkappUri`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  }  } ; `useFullCommitment`: [`Bool`](../modules.md#bool-1)  } |
| `body.actions` | \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } |
| `body.actions.data` | [`Field`](../modules.md#field-1)[][] |
| `body.actions.hash` | [`Field`](../modules.md#field-1) |
| `body.authorizationKind` | \{ `isProved`: [`Bool`](../modules.md#bool-1) ; `isSigned`: [`Bool`](../modules.md#bool-1) ; `verificationKeyHash`: [`Field`](../modules.md#field-1)  } |
| `body.authorizationKind.isProved` | [`Bool`](../modules.md#bool-1) |
| `body.authorizationKind.isSigned` | [`Bool`](../modules.md#bool-1) |
| `body.authorizationKind.verificationKeyHash` | [`Field`](../modules.md#field-1) |
| `body.balanceChange` | \{ `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } |
| `body.balanceChange.magnitude` | [`UInt64`](../classes/UInt64.md) |
| `body.balanceChange.sgn` | [`Sign`](../classes/Sign.md) |
| `body.callData` | [`Field`](../modules.md#field-1) |
| `body.callDepth` | `number` |
| `body.events` | \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } |
| `body.events.data` | [`Field`](../modules.md#field-1)[][] |
| `body.events.hash` | [`Field`](../modules.md#field-1) |
| `body.implicitAccountCreationFee` | [`Bool`](../modules.md#bool-1) |
| `body.incrementNonce` | [`Bool`](../modules.md#bool-1) |
| `body.mayUseToken` | \{ `inheritFromParent`: [`Bool`](../modules.md#bool-1) ; `parentsOwnToken`: [`Bool`](../modules.md#bool-1)  } |
| `body.mayUseToken.inheritFromParent` | [`Bool`](../modules.md#bool-1) |
| `body.mayUseToken.parentsOwnToken` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions` | \{ `account`: \{ `actionState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `balance`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `nonce`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `receiptChainHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `state`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[]  } ; `network`: \{ `blockchainLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } |
| `body.preconditions.account` | \{ `actionState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `balance`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `nonce`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `receiptChainHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `state`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[]  } |
| `body.preconditions.account.actionState` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.account.actionState.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.actionState.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.account.balance` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.account.balance.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.balance.value` | \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.account.balance.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.account.balance.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.account.delegate` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } |
| `body.preconditions.account.delegate.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.delegate.value` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.preconditions.account.isNew` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } |
| `body.preconditions.account.isNew.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.isNew.value` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.nonce` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.account.nonce.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.nonce.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.account.nonce.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.account.nonce.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.account.provedState` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } |
| `body.preconditions.account.provedState.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.provedState.value` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.receiptChainHash` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.account.receiptChainHash.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.account.receiptChainHash.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.account.state` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[] |
| `body.preconditions.network` | \{ `blockchainLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.blockchainLength` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.blockchainLength.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.blockchainLength.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.blockchainLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.blockchainLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceGenesis` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.globalSlotSinceGenesis.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.globalSlotSinceGenesis.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.globalSlotSinceGenesis.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.globalSlotSinceGenesis.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.minWindowDensity` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.minWindowDensity.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.minWindowDensity.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.minWindowDensity.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.minWindowDensity.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData` | \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } |
| `body.preconditions.network.nextEpochData.epochLength` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.nextEpochData.epochLength.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.epochLength.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.nextEpochData.epochLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData.epochLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.nextEpochData.ledger` | \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.nextEpochData.ledger.hash` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.nextEpochData.ledger.hash.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.ledger.hash.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value` | \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.nextEpochData.ledger.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.nextEpochData.lockCheckpoint` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.nextEpochData.lockCheckpoint.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.lockCheckpoint.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.nextEpochData.seed` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.nextEpochData.seed.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.seed.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.nextEpochData.startCheckpoint` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.nextEpochData.startCheckpoint.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.nextEpochData.startCheckpoint.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.snarkedLedgerHash` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.snarkedLedgerHash.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.snarkedLedgerHash.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.stakingEpochData` | \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } |
| `body.preconditions.network.stakingEpochData.epochLength` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.network.stakingEpochData.epochLength.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.epochLength.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.network.stakingEpochData.epochLength.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.stakingEpochData.epochLength.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.network.stakingEpochData.ledger` | \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } |
| `body.preconditions.network.stakingEpochData.ledger.hash` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.stakingEpochData.ledger.hash.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.ledger.hash.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value` | \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.stakingEpochData.ledger.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.stakingEpochData.lockCheckpoint` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.stakingEpochData.lockCheckpoint.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.lockCheckpoint.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.stakingEpochData.seed` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.stakingEpochData.seed.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.seed.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.stakingEpochData.startCheckpoint` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.preconditions.network.stakingEpochData.startCheckpoint.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.stakingEpochData.startCheckpoint.value` | [`Field`](../modules.md#field-1) |
| `body.preconditions.network.totalCurrency` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } |
| `body.preconditions.network.totalCurrency.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.network.totalCurrency.value` | \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  } |
| `body.preconditions.network.totalCurrency.value.lower` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.network.totalCurrency.value.upper` | [`UInt64`](../classes/UInt64.md) |
| `body.preconditions.validWhile` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.preconditions.validWhile.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.preconditions.validWhile.value` | \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  } |
| `body.preconditions.validWhile.value.lower` | [`UInt32`](../classes/UInt32.md) |
| `body.preconditions.validWhile.value.upper` | [`UInt32`](../classes/UInt32.md) |
| `body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.tokenId` | [`TokenId`](Types.md#tokenid-1) |
| `body.update` | \{ `appState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[] ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `field`: [`Field`](../modules.md#field-1) ; `symbol`: `string`  }  } ; `verificationKey`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  } ; `votingFor`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `zkappUri`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  }  } |
| `body.update.appState` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[] |
| `body.update.delegate` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } |
| `body.update.delegate.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.delegate.value` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `body.update.permissions` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } |
| `body.update.permissions.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.permissions.value` | \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  } |
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
| `body.update.timing` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } |
| `body.update.timing.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.timing.value` | \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  } |
| `body.update.timing.value.cliffAmount` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.cliffTime` | [`UInt32`](../classes/UInt32.md) |
| `body.update.timing.value.initialMinimumBalance` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.vestingIncrement` | [`UInt64`](../classes/UInt64.md) |
| `body.update.timing.value.vestingPeriod` | [`UInt32`](../classes/UInt32.md) |
| `body.update.tokenSymbol` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `field`: [`Field`](../modules.md#field-1) ; `symbol`: `string`  }  } |
| `body.update.tokenSymbol.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.tokenSymbol.value` | \{ `field`: [`Field`](../modules.md#field-1) ; `symbol`: `string`  } |
| `body.update.tokenSymbol.value.field` | [`Field`](../modules.md#field-1) |
| `body.update.tokenSymbol.value.symbol` | `string` |
| `body.update.verificationKey` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  } |
| `body.update.verificationKey.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.verificationKey.value` | \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  } |
| `body.update.verificationKey.value.data` | `string` |
| `body.update.verificationKey.value.hash` | [`Field`](../modules.md#field-1) |
| `body.update.votingFor` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } |
| `body.update.votingFor.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.votingFor.value` | [`Field`](../modules.md#field-1) |
| `body.update.zkappUri` | \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  } |
| `body.update.zkappUri.isSome` | [`Bool`](../modules.md#bool-1) |
| `body.update.zkappUri.value` | \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  } |
| `body.update.zkappUri.value.data` | `string` |
| `body.update.zkappUri.value.hash` | [`Field`](../modules.md#field-1) |
| `body.useFullCommitment` | [`Bool`](../modules.md#bool-1) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:320

bindings/mina-transaction/gen/transaction.ts:517

___

### ActionState

Ƭ **ActionState**: [`Field`](../modules.md#field-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:49

bindings/mina-transaction/transaction-leaves.ts:50

___

### Actions

Ƭ **Actions**: [`Events`](Types.md#events-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:46

bindings/mina-transaction/transaction-leaves.ts:47

___

### AuthRequired

Ƭ **AuthRequired**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constant` | [`Bool`](../modules.md#bool-1) |
| `signatureNecessary` | [`Bool`](../modules.md#bool-1) |
| `signatureSufficient` | [`Bool`](../modules.md#bool-1) |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:28

bindings/mina-transaction/transaction-leaves.ts:38

___

### Events

Ƭ **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `Event`[] |
| `hash` | [`Field`](../modules.md#field-1) |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:42

bindings/mina-transaction/transaction-leaves.ts:47

___

### Layout

Ƭ **Layout**: `GenericLayout`\<[`TypeMap`](Types.md#typemap-1)\>

#### Defined in

bindings/mina-transaction/gen/transaction.ts:56

___

### ReceiptChainHash

Ƭ **ReceiptChainHash**: [`Field`](../modules.md#field-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:61

bindings/mina-transaction/transaction-leaves.ts:62

___

### StateHash

Ƭ **StateHash**: [`Field`](../modules.md#field-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:34

bindings/mina-transaction/transaction-leaves.ts:38

___

### TokenId

Ƭ **TokenId**: [`Field`](../modules.md#field-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:33

bindings/mina-transaction/transaction-leaves.ts:38

___

### TokenSymbol

Ƭ **TokenSymbol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../modules.md#field-1) |
| `symbol` | `string` |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:35

bindings/mina-transaction/transaction-leaves.ts:38

___

### TypeMap

Ƭ **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | [`AuthRequired`](Types.md#authrequired-1) |
| `Bool` | [`Bool`](../modules.md#bool-1) |
| `Field` | [`Field`](../modules.md#field-1) |
| `PublicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `Sign` | [`Sign`](../classes/Sign.md) |
| `TokenId` | [`TokenId`](Types.md#tokenid-1) |
| `UInt32` | [`UInt32`](../classes/UInt32.md) |
| `UInt64` | [`UInt64`](../classes/UInt64.md) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:31

bindings/mina-transaction/gen/transaction.ts:42

___

### VerificationKeyHash

Ƭ **VerificationKeyHash**: [`Field`](../modules.md#field-1)

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:55

bindings/mina-transaction/transaction-leaves.ts:56

___

### ZkappCommand

Ƭ **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | \{ `authorization`: \{ `proof?`: `string` ; `signature?`: `string`  } ; `body`: \{ `actions`: \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } ; `authorizationKind`: \{ `isProved`: [`Bool`](../modules.md#bool-1) ; `isSigned`: [`Bool`](../modules.md#bool-1) ; `verificationKeyHash`: [`Field`](../modules.md#field-1)  } ; `balanceChange`: \{ `magnitude`: [`UInt64`](../classes/UInt64.md) ; `sgn`: [`Sign`](../classes/Sign.md)  } ; `callData`: [`Field`](../modules.md#field-1) ; `callDepth`: `number` ; `events`: \{ `data`: [`Field`](../modules.md#field-1)[][] ; `hash`: [`Field`](../modules.md#field-1)  } ; `implicitAccountCreationFee`: [`Bool`](../modules.md#bool-1) ; `incrementNonce`: [`Bool`](../modules.md#bool-1) ; `mayUseToken`: \{ `inheritFromParent`: [`Bool`](../modules.md#bool-1) ; `parentsOwnToken`: [`Bool`](../modules.md#bool-1)  } ; `preconditions`: \{ `account`: \{ `actionState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `balance`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `isNew`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `nonce`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `provedState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Bool`](../modules.md#bool-1)  } ; `receiptChainHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `state`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[]  } ; `network`: \{ `blockchainLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `seed`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `validWhile`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  }  } ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `tokenId`: [`TokenId`](Types.md#tokenid-1) ; `update`: \{ `appState`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  }[] ; `delegate`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`PublicKey`](../classes/Types.PublicKey.md)  } ; `permissions`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `access`: [`AuthRequired`](Types.md#authrequired-1) ; `editActionState`: [`AuthRequired`](Types.md#authrequired-1) ; `editState`: [`AuthRequired`](Types.md#authrequired-1) ; `incrementNonce`: [`AuthRequired`](Types.md#authrequired-1) ; `receive`: [`AuthRequired`](Types.md#authrequired-1) ; `send`: [`AuthRequired`](Types.md#authrequired-1) ; `setDelegate`: [`AuthRequired`](Types.md#authrequired-1) ; `setPermissions`: [`AuthRequired`](Types.md#authrequired-1) ; `setTiming`: [`AuthRequired`](Types.md#authrequired-1) ; `setTokenSymbol`: [`AuthRequired`](Types.md#authrequired-1) ; `setVerificationKey`: [`AuthRequired`](Types.md#authrequired-1) ; `setVotingFor`: [`AuthRequired`](Types.md#authrequired-1) ; `setZkappUri`: [`AuthRequired`](Types.md#authrequired-1)  }  } ; `timing`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `cliffAmount`: [`UInt64`](../classes/UInt64.md) ; `cliffTime`: [`UInt32`](../classes/UInt32.md) ; `initialMinimumBalance`: [`UInt64`](../classes/UInt64.md) ; `vestingIncrement`: [`UInt64`](../classes/UInt64.md) ; `vestingPeriod`: [`UInt32`](../classes/UInt32.md)  }  } ; `tokenSymbol`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `field`: [`Field`](../modules.md#field-1) ; `symbol`: `string`  }  } ; `verificationKey`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  } ; `votingFor`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: [`Field`](../modules.md#field-1)  } ; `zkappUri`: \{ `isSome`: [`Bool`](../modules.md#bool-1) ; `value`: \{ `data`: `string` ; `hash`: [`Field`](../modules.md#field-1)  }  }  } ; `useFullCommitment`: [`Bool`](../modules.md#bool-1)  }  }[] |
| `feePayer` | \{ `authorization`: `string` ; `body`: \{ `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  }  } |
| `feePayer.authorization` | `string` |
| `feePayer.body` | \{ `fee`: [`UInt64`](../classes/UInt64.md) ; `nonce`: [`UInt32`](../classes/UInt32.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md) ; `validUntil?`: [`UInt32`](../classes/UInt32.md)  } |
| `feePayer.body.fee` | [`UInt64`](../classes/UInt64.md) |
| `feePayer.body.nonce` | [`UInt32`](../classes/UInt32.md) |
| `feePayer.body.publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `feePayer.body.validUntil?` | [`UInt32`](../classes/UInt32.md) |
| `memo` | `string` |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:107

bindings/mina-transaction/gen/transaction.ts:316

___

### ZkappUri

Ƭ **ZkappUri**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](../modules.md#field-1) |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:36

bindings/mina-transaction/transaction-leaves.ts:38

## Variables

### Account

• **Account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`Account`](Types.md#account-1)) => `void` |
| `empty` | () => [`Account`](Types.md#account-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`Account`](Types.md#account-1) |
| `fromJSON` | (`json`: [`Account`](Types.Json.md#account)) => [`Account`](Types.md#account-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`Account`](Types.md#account-1)) => `any`[] |
| `toFields` | (`value`: [`Account`](Types.md#account-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`Account`](Types.md#account-1)) => `HashInput` |
| `toJSON` | (`value`: [`Account`](Types.md#account-1)) => [`Account`](Types.Json.md#account) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:521

bindings/mina-transaction/gen/transaction.ts:567

___

### AccountUpdate

• **AccountUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `void` |
| `empty` | () => [`AccountUpdate`](Types.md#accountupdate-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`AccountUpdate`](Types.md#accountupdate-1) |
| `fromJSON` | (`json`: [`AccountUpdate`](Types.Json.md#accountupdate)) => [`AccountUpdate`](Types.md#accountupdate-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`AccountUpdate`](Types.md#accountupdate-1)) => `any`[] |
| `toFields` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => `HashInput` |
| `toJSON` | (`value`: [`AccountUpdate`](Types.md#accountupdate-1)) => [`AccountUpdate`](Types.Json.md#accountupdate) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:320

bindings/mina-transaction/gen/transaction.ts:517

___

### ActionState

• **ActionState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `empty` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[]) => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => \{ `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |
| `sizeInFields` | () => `number` |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:49

bindings/mina-transaction/transaction-leaves.ts:50

___

### Actions

• **Actions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `void` |
| `empty` | () => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromJSON` | (`x`: `string`[][]) => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `toAuxiliary` | (`x?`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `any`[] |
| `toFields` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => \{ `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `string`[][] |
| `emptyActionState` | () => [`Field`](../classes/Field.md) |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => [`Field`](../classes/Field.md) |
| `pushEvent` | (`actions`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |
| `updateSequenceState` | (`state`: [`Field`](../classes/Field.md), `sequenceEventsHash`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md) |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:46

bindings/mina-transaction/transaction-leaves.ts:47

___

### AuthRequired

• **AuthRequired**: `Omit`\<`GenericProvableExtended`\<\{ `constant`: [`Bool`](../classes/Bool.md) = Bool; `signatureNecessary`: [`Bool`](../classes/Bool.md) = Bool; `signatureSufficient`: [`Bool`](../classes/Bool.md) = Bool }, \{ `constant`: `boolean` = Bool; `signatureNecessary`: `boolean` = Bool; `signatureSufficient`: `boolean` = Bool }, [`Field`](../classes/Field.md)\>, ``"toJSON"`` \| ``"fromJSON"``\> & \{ `empty`: () => `AuthRequired`\<[`Bool`](../classes/Bool.md)\> ; `fromJSON`: (`json`: [`AuthRequired`](Types.Json.md#authrequired)) => `AuthRequired`\<[`Bool`](../classes/Bool.md)\> ; `toJSON`: (`x`: `AuthRequired`\<[`Bool`](../classes/Bool.md)\>) => [`AuthRequired`](Types.Json.md#authrequired)  }

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:28

bindings/mina-transaction/transaction-leaves.ts:38

___

### Events

• **Events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `void` |
| `empty` | () => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `fromJSON` | (`x`: `string`[][]) => \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  } |
| `toAuxiliary` | (`x?`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `any`[] |
| `toFields` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => \{ `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: \{ `data`: [`Field`](../classes/Field.md)[][] ; `hash`: [`Field`](../classes/Field.md)  }) => `string`[][] |
| `fromList` | (`events`: `Event`[]) => `Events` |
| `hash` | (`events`: `Event`[]) => [`Field`](../classes/Field.md) |
| `pushEvent` | (`events`: `Events`, `event`: `Event`) => `Events` |
| `sizeInFields` | () => `number` |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:42

bindings/mina-transaction/transaction-leaves.ts:47

___

### ReceiptChainHash

• **ReceiptChainHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `empty` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[]) => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => \{ `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |
| `sizeInFields` | () => `number` |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:61

bindings/mina-transaction/transaction-leaves.ts:62

___

### StateHash

• **StateHash**: `Omit`\<`GenericProvableExtended`\<[`Field`](../classes/Field.md), `string`, [`Field`](../classes/Field.md)\>, ``"toJSON"`` \| ``"fromJSON"``\> & \{ `empty`: () => [`Field`](../classes/Field.md) ; `fromJSON`: (`x`: `string`) => [`Field`](../classes/Field.md) ; `toJSON`: (`x`: [`Field`](../classes/Field.md)) => `string`  }

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:34

bindings/mina-transaction/transaction-leaves.ts:38

___

### TokenId

• **TokenId**: `Omit`\<`GenericProvableExtended`\<[`Field`](../classes/Field.md), `string`, [`Field`](../classes/Field.md)\>, ``"toJSON"`` \| ``"fromJSON"``\> & \{ `empty`: () => [`Field`](../classes/Field.md) ; `fromJSON`: (`x`: `string`) => [`Field`](../classes/Field.md) ; `toJSON`: (`x`: [`Field`](../classes/Field.md)) => `string`  }

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:33

bindings/mina-transaction/transaction-leaves.ts:38

___

### TokenSymbol

• **TokenSymbol**: `Omit`\<`GenericProvableExtended`\<\{ `field`: [`Field`](../classes/Field.md) = Field; `symbol`: `string` = String }, \{ `field`: `string` = Field; `symbol`: `string` = String }, [`Field`](../classes/Field.md)\>, ``"toJSON"`` \| ``"fromJSON"``\> & \{ `fromJSON`: (`symbol`: `string`) => `TokenSymbol`\<[`Field`](../classes/Field.md)\> ; `toInput`: (`__namedParameters`: `TokenSymbol`\<[`Field`](../classes/Field.md)\>) => `GenericHashInput`\<[`Field`](../classes/Field.md)\> ; `toJSON`: (`__namedParameters`: `TokenSymbol`\<[`Field`](../classes/Field.md)\>) => `string`  }

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:35

bindings/mina-transaction/transaction-leaves.ts:38

___

### TypeMap

• **TypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthRequired` | `ProvableExtended`\<[`AuthRequired`](Types.md#authrequired-1), [`AuthRequired`](Types.Json.md#authrequired)\> |
| `Bool` | `ProvableExtended`\<[`Bool`](../classes/Bool.md), `boolean`\> |
| `Field` | `ProvableExtended`\<[`Field`](../classes/Field.md), `string`\> |
| `PublicKey` | `ProvableExtended`\<[`PublicKey`](../classes/Types.PublicKey.md), `string`\> |
| `Sign` | `ProvableExtended`\<[`Sign`](../classes/Sign.md), [`Sign`](Types.Json.md#sign)\> |
| `TokenId` | `ProvableExtended`\<[`Field`](../classes/Field.md), `string`\> |
| `UInt32` | `ProvableExtended`\<[`UInt32`](../classes/UInt32.md), `string`\> |
| `UInt64` | `ProvableExtended`\<[`UInt64`](../classes/UInt64.md), `string`\> |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:31

bindings/mina-transaction/gen/transaction.ts:42

___

### VerificationKeyHash

• **VerificationKeyHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`x`: [`Field`](../classes/Field.md)) => `void` |
| `empty` | () => [`Field`](../classes/Field.md) |
| `fromFields` | (`x`: [`Field`](../classes/Field.md)[]) => [`Field`](../classes/Field.md) |
| `fromJSON` | (`x`: `string`) => [`Field`](../classes/Field.md) |
| `toAuxiliary` | (`x?`: [`Field`](../classes/Field.md)) => `any`[] |
| `toFields` | (`x`: [`Field`](../classes/Field.md)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`x`: [`Field`](../classes/Field.md)) => \{ `fields?`: [`Field`](../classes/Field.md)[] ; `packed?`: [[`Field`](../classes/Field.md), `number`][]  } |
| `toJSON` | (`x`: [`Field`](../classes/Field.md)) => `string` |
| `sizeInFields` | () => `number` |

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:55

bindings/mina-transaction/transaction-leaves.ts:56

___

### ZkappCommand

• **ZkappCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `void` |
| `empty` | () => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `fromJSON` | (`json`: [`ZkappCommand`](Types.Json.md#zkappcommand)) => [`ZkappCommand`](Types.md#zkappcommand-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `any`[] |
| `toFields` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => `HashInput` |
| `toJSON` | (`value`: [`ZkappCommand`](Types.md#zkappcommand-1)) => [`ZkappCommand`](Types.Json.md#zkappcommand) |

#### Defined in

bindings/mina-transaction/gen/transaction.ts:107

bindings/mina-transaction/gen/transaction.ts:316

___

### ZkappUri

• **ZkappUri**: `GenericProvableExtended`\<\{ `data`: `string` ; `hash`: [`Field`](../classes/Field.md)  }, `string`, [`Field`](../classes/Field.md)\>

#### Defined in

bindings/mina-transaction/transaction-leaves.ts:36

bindings/mina-transaction/transaction-leaves.ts:38

___

### customTypes

• **customTypes**: `CustomTypes`

#### Defined in

bindings/mina-transaction/gen/transaction.ts:92

## Functions

### empty

▸ **empty**(`typeData`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`\<[`TypeMap`](Types.md#typemap-1)\> |

#### Returns

`any`

#### Defined in

bindings/lib/from-layout.ts:174

___

### provableFromLayout

▸ **provableFromLayout**\<`T`, `TJson`\>(`typeData`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TJson` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`\<[`TypeMap`](Types.md#typemap-1)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `check` | (`value`: `T`) => `void` |
| `empty` | () => `T` |
| `fromFields` | (`fields`: [`Field`](../classes/Field.md)[], `aux`: `any`[]) => `T` |
| `fromJSON` | (`json`: `TJson`) => `T` |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: `T`) => `any`[] |
| `toFields` | (`value`: `T`) => [`Field`](../classes/Field.md)[] |
| `toInput` | (`value`: `T`) => `HashInput` |
| `toJSON` | (`value`: `T`) => `TJson` |

#### Defined in

bindings/lib/from-layout.ts:310

___

### toJSONEssential

▸ **toJSONEssential**(`typeData`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `GenericLayout`\<[`TypeMap`](Types.md#typemap-1)\> |
| `value` | `any` |

#### Returns

`any`

#### Defined in

bindings/lib/from-layout.ts:244
