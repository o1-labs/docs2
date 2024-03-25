[o1js](../README.md) / [Modules](../modules.md) / Mina

# Namespace: Mina

## Table of contents

### Type Aliases

- [ActionStates](Mina.md#actionstates)
- [FeePayerSpec](Mina.md#feepayerspec)
- [IncludedTransaction](Mina.md#includedtransaction)
- [NetworkConstants](Mina.md#networkconstants)
- [PendingTransaction](Mina.md#pendingtransaction)
- [PendingTransactionStatus](Mina.md#pendingtransactionstatus)
- [RejectedTransaction](Mina.md#rejectedtransaction)
- [Transaction](Mina.md#transaction)

### Variables

- [activeInstance](Mina.md#activeinstance)

### Functions

- [BerkeleyQANet](Mina.md#berkeleyqanet)
- [LocalBlockchain](Mina.md#localblockchain)
- [Network](Mina.md#network)
- [accountCreationFee](Mina.md#accountcreationfee)
- [currentSlot](Mina.md#currentslot)
- [currentTransaction](Mina.md#currenttransaction)
- [faucet](Mina.md#faucet)
- [fetchActions](Mina.md#fetchactions)
- [fetchEvents](Mina.md#fetchevents)
- [filterGroups](Mina.md#filtergroups)
- [getAccount](Mina.md#getaccount)
- [getActions](Mina.md#getactions)
- [getBalance](Mina.md#getbalance)
- [getNetworkConstants](Mina.md#getnetworkconstants)
- [getNetworkId](Mina.md#getnetworkid)
- [getNetworkState](Mina.md#getnetworkstate)
- [getProofsEnabled](Mina.md#getproofsenabled)
- [hasAccount](Mina.md#hasaccount)
- [sender](Mina.md#sender)
- [setActiveInstance](Mina.md#setactiveinstance)
- [transaction](Mina.md#transaction-1)
- [waitForFunding](Mina.md#waitforfunding)

## Type Aliases

### ActionStates

Ƭ **ActionStates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endActionState?` | [`Field`](../modules.md#field-1) |
| `fromActionState?` | [`Field`](../modules.md#field-1) |

#### Defined in

[lib/mina/mina-instance.ts:83](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L83)

___

### FeePayerSpec

Ƭ **FeePayerSpec**: [`PublicKey`](../classes/Types.PublicKey.md) \| \{ `fee?`: `number` \| `string` \| [`UInt64`](../classes/UInt64.md) ; `memo?`: `string` ; `nonce?`: `number` ; `sender`: [`PublicKey`](../classes/Types.PublicKey.md)  } \| `undefined`

Allows you to specify information about the fee payer account and the transaction.

#### Defined in

[lib/mina/mina-instance.ts:54](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L54)

___

### IncludedTransaction

Ƭ **IncludedTransaction**: `Pick`\<[`PendingTransaction`](Mina.md#pendingtransaction), ``"transaction"`` \| ``"toJSON"`` \| ``"toPretty"`` \| ``"hash"`` \| ``"data"``\> & \{ `status`: ``"included"``  }

Represents a transaction that has been successfully included in a block.

#### Defined in

[lib/mina/transaction.ts:231](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L231)

___

### NetworkConstants

Ƭ **NetworkConstants**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountCreationFee` | [`UInt64`](../classes/UInt64.md) | - |
| `genesisTimestamp` | [`UInt64`](../classes/UInt64.md) | - |
| `slotTime` | [`UInt64`](../classes/UInt64.md) | Duration of 1 slot in millisecondw |

#### Defined in

[lib/mina/mina-instance.ts:88](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L88)

___

### PendingTransaction

Ƭ **PendingTransaction**: `Pick`\<[`Transaction`](Mina.md#transaction), ``"transaction"`` \| ``"toJSON"`` \| ``"toPretty"``\> & \{ `data?`: `SendZkAppResponse` ; `errors`: `string`[] ; `hash`: `string` ; `status`: [`PendingTransactionStatus`](Mina.md#pendingtransactionstatus) ; `safeWait`: (`options?`: \{ `interval?`: `number` ; `maxAttempts?`: `number`  }) => `Promise`\<[`RejectedTransaction`](Mina.md#rejectedtransaction) \| [`IncludedTransaction`](Mina.md#includedtransaction)\> ; `wait`: (`options?`: \{ `interval?`: `number` ; `maxAttempts?`: `number`  }) => `Promise`\<[`IncludedTransaction`](Mina.md#includedtransaction)\>  }

Represents a transaction that has been submitted to the blockchain but has not yet reached a final state.
The [PendingTransaction](Mina.md#pendingtransaction) type extends certain functionalities from the base [Transaction](Mina.md#transaction) type,
adding methods to monitor the transaction's progress towards being finalized (either included in a block or rejected).

#### Defined in

[lib/mina/transaction.ts:130](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L130)

___

### PendingTransactionStatus

Ƭ **PendingTransactionStatus**: ``"pending"`` \| ``"rejected"``

#### Defined in

[lib/mina/transaction.ts:124](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L124)

___

### RejectedTransaction

Ƭ **RejectedTransaction**: `Pick`\<[`PendingTransaction`](Mina.md#pendingtransaction), ``"transaction"`` \| ``"toJSON"`` \| ``"toPretty"`` \| ``"hash"`` \| ``"data"``\> & \{ `errors`: `string`[] ; `status`: ``"rejected"``  }

Represents a transaction that has been rejected and not included in a blockchain block.

#### Defined in

[lib/mina/transaction.ts:255](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L255)

___

### Transaction

Ƭ **Transaction**: `Object`

Defines the structure and operations associated with a transaction.
This type encompasses methods for serializing the transaction, signing it, generating proofs,
and submitting it to the network.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | `ZkappCommand` | Transaction structure used to describe a state transition on the Mina blockchain. |
| `prove` | () => `Promise`\<(`undefined` \| [`Proof`](../classes/Proof.md)\<[`ZkappPublicInput`](../modules.md#zkapppublicinput-1), `undefined`\>)[]\> | Initiates the proof generation process for the [Transaction](Mina.md#transaction). This asynchronous operation is crucial for zero-knowledge-based transactions, where proofs are required to validate state transitions. This can take some time. **`Example`** ```ts await transaction.prove(); ``` |
| `safeSend` | () => `Promise`\<[`PendingTransaction`](Mina.md#pendingtransaction) \| [`RejectedTransaction`](Mina.md#rejectedtransaction)\> | Sends the [Transaction](Mina.md#transaction) to the network. Unlike the standard [send](Mina.md#send), this function does not throw an error if internal errors are detected. Instead, it returns a [PendingTransaction](Mina.md#pendingtransaction) if the transaction is successfully sent for processing or a [RejectedTransaction](Mina.md#rejectedtransaction) if it encounters errors during processing or is outright rejected by the Mina daemon. **`Example`** ```ts const result = await transaction.safeSend(); if (result.status === 'pending') { console.log('Transaction sent successfully to the Mina daemon.'); } else if (result.status === 'rejected') { console.error('Transaction failed with errors:', result.errors); } ``` |
| `send` | () => `Promise`\<[`PendingTransaction`](Mina.md#pendingtransaction)\> | Submits the [Transaction](Mina.md#transaction) to the network. This method asynchronously sends the transaction for processing. If successful, it returns a [PendingTransaction](Mina.md#pendingtransaction) instance, which can be used to monitor the transaction's progress. If the transaction submission fails, this method throws an error that should be caught and handled appropriately. **`Throws`** An error if the transaction cannot be sent or processed by the network, containing details about the failure. **`Example`** ```ts try { const pendingTransaction = await transaction.send(); console.log('Transaction sent successfully to the Mina daemon.'); } catch (error) { console.error('Failed to send transaction to the Mina daemon:', error); } ``` |
| `sign` | (`additionalKeys?`: [`PrivateKey`](../classes/PrivateKey.md)[]) => [`Transaction`](Mina.md#transaction) | Signs all [AccountUpdate](../classes/AccountUpdate.md)s included in the [Transaction](Mina.md#transaction) that require a signature. [AccountUpdate](../classes/AccountUpdate.md)s that require a signature can be specified with `{AccountUpdate\|SmartContract}.requireSignature()`. **`Example`** ```ts const signedTx = transaction.sign([userPrivateKey]); console.log('Transaction signed successfully.'); ``` |
| `toGraphqlQuery` | () => `string` | Constructs the GraphQL query string used for submitting the transaction to a Mina daemon. |
| `toJSON` | () => `string` | Serializes the transaction to a JSON string. |
| `toPretty` | () => `any` | Produces a pretty-printed JSON representation of the [Transaction](Mina.md#transaction). |

#### Defined in

[lib/mina/transaction.ts:49](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L49)

## Variables

### activeInstance

• **activeInstance**: `Mina`

#### Defined in

[lib/mina/mina-instance.ts:131](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L131)

## Functions

### BerkeleyQANet

▸ **BerkeleyQANet**(`graphqlEndpoint`): `Mina`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`Mina`

**`Deprecated`**

This is deprecated in favor of [Network](Mina.md#network), which is exactly the same function.
The name `BerkeleyQANet` was misleading because it suggested that this is specific to a particular network.

#### Defined in

[lib/mina.ts:467](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L467)

___

### LocalBlockchain

▸ **LocalBlockchain**(`«destructured»?`): `Object`

A mock Mina blockchain running locally and useful for testing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `enforceTransactionLimits` | `undefined` \| `boolean` |
| › `networkId` | `undefined` \| `NetworkId` |
| › `proofsEnabled` | `undefined` \| `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountCreationFee` | () => [`UInt64`](../classes/UInt64.md) |
| `addAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `balance`: `string`) => `void` |
| `getNetworkId` | () => `NetworkId` |
| `proofsEnabled` | `boolean` |
| `testAccounts` | \{ `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }[] |
| `applyJsonTransaction` | (`json`: `string`) => `void` |
| `currentSlot` | () => [`UInt32`](../classes/UInt32.md) |
| `fetchActions` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `actionStates?`: [`ActionStates`](Mina.md#actionstates), `tokenId`: [`Field`](../classes/Field.md)) => `Promise`\<\{ `actions`: `string`[][] ; `hash`: `string`  }[]\> |
| `fetchEvents` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `Promise`\<`any`\> |
| `getAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => [`Account`](Types.md#account-1) |
| `getActions` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `actionStates?`: [`ActionStates`](Mina.md#actionstates), `tokenId`: [`Field`](../classes/Field.md)) => \{ `actions`: `string`[][] ; `hash`: `string`  }[] |
| `getNetworkConstants` | () => \{ `accountCreationFee`: [`UInt64`](../classes/UInt64.md) ; `genesisTimestamp`: [`UInt64`](../classes/UInt64.md) ; `slotTime`: [`UInt64`](../classes/UInt64.md)  } |
| `getNetworkState` | () => `PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\> |
| `hasAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `boolean` |
| `incrementGlobalSlot` | (`increment`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `sendTransaction` | (`txn`: [`Transaction`](Mina.md#transaction)) => `Promise`\<[`PendingTransaction`](Mina.md#pendingtransaction)\> |
| `setBlockchainLength` | (`height`: [`UInt32`](../classes/UInt32.md)) => `void` |
| `setGlobalSlot` | (`slot`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `setProofsEnabled` | (`newProofsEnabled`: `boolean`) => `void` |
| `setTotalCurrency` | (`currency`: [`UInt64`](../classes/UInt64.md)) => `void` |
| `transaction` | (`sender`: `DeprecatedFeePayerSpec`, `f`: () => `void`) => `Promise`\<[`Transaction`](Mina.md#transaction)\> |

#### Defined in

[lib/mina/local-blockchain.ts:45](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/local-blockchain.ts#L45)

___

### Network

▸ **Network**(`graphqlEndpoint`): `Mina`

Represents the Mina blockchain running on a real network

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`Mina`

#### Defined in

[lib/mina.ts:108](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L108)

▸ **Network**(`options`): `Mina`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.archive?` | `string` \| `string`[] |
| `options.lightnetAccountManager?` | `string` |
| `options.mina` | `string` \| `string`[] |
| `options.networkId?` | `NetworkId` |

#### Returns

`Mina`

#### Defined in

[lib/mina.ts:109](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L109)

___

### accountCreationFee

▸ **accountCreationFee**(): [`UInt64`](../classes/UInt64.md)

Returns the default account creation fee.

#### Returns

[`UInt64`](../classes/UInt64.md)

**`Deprecated`**

use [getNetworkConstants](Mina.md#getnetworkconstants)

#### Defined in

[lib/mina/mina-instance.ts:211](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L211)

___

### currentSlot

▸ **currentSlot**(): [`UInt32`](../classes/UInt32.md)

#### Returns

[`UInt32`](../classes/UInt32.md)

The current slot number, according to the active Mina instance.

#### Defined in

[lib/mina/mina-instance.ts:161](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L161)

___

### currentTransaction

▸ **currentTransaction**(): `undefined` \| `CurrentTransaction`

#### Returns

`undefined` \| `CurrentTransaction`

#### Defined in

[lib/global-context.ts:6](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/global-context.ts#L6)

___

### faucet

▸ **faucet**(`pub`, `network?`): `Promise`\<`void`\>

Requests the [testnet faucet](https://faucet.minaprotocol.com/api/v1/faucet) to fund a public key.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pub` | [`PublicKey`](../classes/Types.PublicKey.md) | `undefined` |
| `network` | `string` | `'berkeley-qanet'` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina.ts:527](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L527)

___

### fetchActions

▸ **fetchActions**(`publicKey`, `actionStates?`, `tokenId?`): `Promise`\<\{ `actions`: `string`[][] ; `hash`: `string`  }[] \| \{ `error`: \{ `statusCode`: `number` = 404; `statusText`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `actionStates?` | [`ActionStates`](Mina.md#actionstates) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

`Promise`\<\{ `actions`: `string`[][] ; `hash`: `string`  }[] \| \{ `error`: \{ `statusCode`: `number` = 404; `statusText`: `string`  }  }\>

A list of emitted sequencing actions associated to the given public key.

#### Defined in

[lib/mina/mina-instance.ts:229](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L229)

___

### fetchEvents

▸ **fetchEvents**(`publicKey`, `tokenId`, `filterOptions?`): `Promise`\<\{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](../classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: \{ `data`: `string`[] ; `transactionInfo`: \{ `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](../classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId` | [`Field`](../classes/Field.md) |
| `filterOptions` | `EventActionFilterOptions` |

#### Returns

`Promise`\<\{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](../classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: \{ `data`: `string`[] ; `transactionInfo`: \{ `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](../classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

A list of emitted events associated to the given public key.

#### Defined in

[lib/mina/mina-instance.ts:218](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L218)

___

### filterGroups

▸ **filterGroups**(`xs`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `AuthorizationKind`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proof` | `number` |
| `signedPair` | `number` |
| `signedSingle` | `number` |

#### Defined in

[lib/mina/transaction-validation.ts:130](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction-validation.ts#L130)

___

### getAccount

▸ **getAccount**(`publicKey`, `tokenId?`): `Account`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

`Account`

The account data associated to the given public key.

#### Defined in

[lib/mina/mina-instance.ts:168](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L168)

___

### getActions

▸ **getActions**(`publicKey`, `actionStates?`, `tokenId?`): \{ `actions`: `string`[][] ; `hash`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `actionStates?` | [`ActionStates`](Mina.md#actionstates) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

\{ `actions`: `string`[][] ; `hash`: `string`  }[]

A list of emitted sequencing actions associated to the given public key.

#### Defined in

[lib/mina/mina-instance.ts:240](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L240)

___

### getBalance

▸ **getBalance**(`publicKey`, `tokenId?`): [`UInt64`](../classes/UInt64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

[`UInt64`](../classes/UInt64.md)

The balance associated to the given public key.

#### Defined in

[lib/mina/mina-instance.ts:203](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L203)

___

### getNetworkConstants

▸ **getNetworkConstants**(): [`NetworkConstants`](Mina.md#networkconstants)

#### Returns

[`NetworkConstants`](Mina.md#networkconstants)

Data associated with the current Mina network constants.

#### Defined in

[lib/mina/mina-instance.ts:189](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L189)

___

### getNetworkId

▸ **getNetworkId**(): `NetworkId`

#### Returns

`NetworkId`

The current Mina network ID.

#### Defined in

[lib/mina/mina-instance.ts:182](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L182)

___

### getNetworkState

▸ **getNetworkState**(): `PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

#### Returns

`PreconditionBaseTypes`\<\{ `blockchainLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: \{ `epochLength`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: \{ `hash`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: \{ `isSome`: [`Bool`](../classes/Bool.md) ; `value`: \{ `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

Data associated with the current state of the Mina network.

#### Defined in

[lib/mina/mina-instance.ts:196](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L196)

___

### getProofsEnabled

▸ **getProofsEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/mina/mina-instance.ts:248](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L248)

___

### hasAccount

▸ **hasAccount**(`publicKey`, `tokenId?`): `boolean`

Checks if an account exists within the ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

`boolean`

#### Defined in

[lib/mina/mina-instance.ts:175](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L175)

___

### sender

▸ **sender**(): [`PublicKey`](../classes/Types.PublicKey.md)

Returns the public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

#### Returns

[`PublicKey`](../classes/Types.PublicKey.md)

#### Defined in

[lib/mina.ts:476](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L476)

___

### setActiveInstance

▸ **setActiveInstance**(`m`): `void`

Set the currently used Mina instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Mina` |

#### Returns

`void`

#### Defined in

[lib/mina/mina-instance.ts:150](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/mina-instance.ts#L150)

___

### transaction

▸ **transaction**(`sender`, `f`): `Promise`\<[`Transaction`](Mina.md#transaction)\>

Construct a smart contract transaction. Within the callback passed to this function,
you can call into the methods of smart contracts.

```
let tx = await Mina.transaction(sender, () => {
  myZkapp.update();
  someOtherZkapp.someOtherMethod();
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`FeePayerSpec`](Mina.md#feepayerspec) |
| `f` | () => `void` |

#### Returns

`Promise`\<[`Transaction`](Mina.md#transaction)\>

A transaction that can subsequently be submitted to the chain.

#### Defined in

[lib/mina/transaction.ts:468](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L468)

▸ **transaction**(`f`): `Promise`\<[`Transaction`](Mina.md#transaction)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

#### Returns

`Promise`\<[`Transaction`](Mina.md#transaction)\>

#### Defined in

[lib/mina/transaction.ts:469](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L469)

▸ **transaction**(`sender`, `f`): `Promise`\<[`Transaction`](Mina.md#transaction)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `DeprecatedFeePayerSpec` |
| `f` | () => `void` |

#### Returns

`Promise`\<[`Transaction`](Mina.md#transaction)\>

**`Deprecated`**

It's deprecated to pass in the fee payer's private key. Pass in the public key instead.
```
// good
Mina.transaction(publicKey, ...);
Mina.transaction({ sender: publicKey }, ...);

// deprecated
Mina.transaction(privateKey, ...);
Mina.transaction({ feePayerKey: privateKey }, ...);
```

#### Defined in

[lib/mina/transaction.ts:482](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina/transaction.ts#L482)

___

### waitForFunding

▸ **waitForFunding**(`address`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina.ts:503](https://github.com/o1-labs/o1js/blob/659a59e/src/lib/mina.ts#L503)
