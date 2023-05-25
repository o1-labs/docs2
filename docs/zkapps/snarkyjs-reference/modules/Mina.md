# Namespace: Mina

## Table of contents

### Interfaces

- [TransactionId](../interfaces/Mina.TransactionId.md)

### Type Aliases

- [ActionStates](Mina.md#actionstates)
- [CurrentTransaction](Mina.md#currenttransaction)
- [FeePayerSpec](Mina.md#feepayerspec)
- [Transaction](Mina.md#transaction)

### Variables

- [Transaction](Mina.md#transaction-1)
- [activeInstance](Mina.md#activeinstance)

### Functions

- [BerkeleyQANet](Mina.md#berkeleyqanet)
- [LocalBlockchain](Mina.md#localblockchain)
- [Network](Mina.md#network)
- [accountCreationFee](Mina.md#accountcreationfee)
- [createTransaction](Mina.md#createtransaction)
- [currentSlot](Mina.md#currentslot)
- [currentTransaction](Mina.md#currenttransaction-1)
- [faucet](Mina.md#faucet)
- [fetchActions](Mina.md#fetchactions)
- [fetchEvents](Mina.md#fetchevents)
- [filterGroups](Mina.md#filtergroups)
- [getAccount](Mina.md#getaccount)
- [getActions](Mina.md#getactions)
- [getBalance](Mina.md#getbalance)
- [getNetworkState](Mina.md#getnetworkstate)
- [getProofsEnabled](Mina.md#getproofsenabled)
- [hasAccount](Mina.md#hasaccount)
- [sendTransaction](Mina.md#sendtransaction)
- [sender](Mina.md#sender)
- [setActiveInstance](Mina.md#setactiveinstance)
- [transaction](Mina.md#transaction-2)
- [waitForFunding](Mina.md#waitforfunding)

## Type Aliases

### ActionStates

Ƭ **ActionStates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endActionState?` | [`Field`](../classes/Field.md) |
| `fromActionState?` | [`Field`](../classes/Field.md) |

#### Defined in

[lib/mina.ts:154](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L154)

___

### CurrentTransaction

Ƭ **CurrentTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdates` | [`AccountUpdate`](../classes/AccountUpdate.md)[] |
| `fetchMode` | `FetchMode` |
| `isFinalRunOutsideCircuit` | `boolean` |
| `numberOfRuns` | ``0`` \| ``1`` \| `undefined` |
| `sender?` | [`PublicKey`](../classes/Types.PublicKey.md) |

#### Defined in

[lib/mina.ts:112](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L112)

___

### FeePayerSpec

Ƭ **FeePayerSpec**: [`PublicKey`](../classes/Types.PublicKey.md) \| { `fee?`: `number` \| `string` \| [`UInt64`](../classes/UInt64.md) ; `memo?`: `string` ; `nonce?`: `number` ; `sender`: [`PublicKey`](../classes/Types.PublicKey.md)  } \| `undefined`

Allows you to specify information about the fee payer account and the transaction.

#### Defined in

[lib/mina.ts:125](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L125)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | `ZkappCommand` | Transaction structure used to describe a state transition on the Mina blockchain. |
| `prove` | () => `Promise`<(`undefined` \| [`Proof`](../classes/Proof.md)<[`ZkappPublicInput`](../README.md#zkapppublicinput-1), `undefined`\>)[]\> | Generates proofs for the [Transaction](Mina.md#transaction-1). This can take some time. |
| `send` | () => `Promise`<[`TransactionId`](../interfaces/Mina.TransactionId.md)\> | Sends the [Transaction](Mina.md#transaction-1) to the network. |
| `sign` | (`additionalKeys?`: [`PrivateKey`](../classes/PrivateKey.md)[]) => [`Transaction`](Mina.md#transaction-1) | Signs all [AccountUpdate](../classes/AccountUpdate.md)s included in the [Transaction](Mina.md#transaction-1) that require a signature. [AccountUpdate](../classes/AccountUpdate.md)s that require a signature can be specified with `{AccountUpdate\|SmartContract}.requireSignature()`. |
| `toGraphqlQuery` | () => `string` | Returns the GraphQL query for the Mina daemon. |
| `toJSON` | () => `string` | Returns a JSON representation of the [Transaction](Mina.md#transaction-1). |
| `toPretty` | () => `any` | Returns a pretty-printed JSON representation of the [Transaction](Mina.md#transaction-1). |

#### Defined in

[lib/mina.ts:67](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L67)

[lib/mina.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L104)

## Variables

### Transaction

• **Transaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromJSON` | (`json`: [`ZkappCommand`](Types.Json.md#zkappcommand)) => [`Transaction`](Mina.md#transaction-1) |

#### Defined in

[lib/mina.ts:67](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L67)

[lib/mina.ts:104](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L104)

___

### activeInstance

• **activeInstance**: `Mina`

#### Defined in

[lib/mina.ts:949](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L949)

## Functions

### BerkeleyQANet

▸ **BerkeleyQANet**(`graphqlEndpoint`): `Mina`

**`Deprecated`**

This is deprecated in favor of [Network](Mina.md#network), which is exactly the same function.
The name `BerkeleyQANet` was misleading because it suggested that this is specific to a particular network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`Mina`

#### Defined in

[lib/mina.ts:945](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L945)

___

### LocalBlockchain

▸ **LocalBlockchain**(`«destructured»?`): `Object`

A mock Mina blockchain running locally and useful for testing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountCreationFee` | `undefined` \| `string` \| `number` |
| › `enforceTransactionLimits` | `undefined` \| `boolean` |
| › `proofsEnabled` | `undefined` \| `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountCreationFee` | () => [`UInt64`](../classes/UInt64.md) |
| `addAccount` | (`pk`: [`PublicKey`](../classes/Types.PublicKey.md), `balance`: `string`) => `void` |
| `proofsEnabled` | `boolean` |
| `testAccounts` | { `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }[] |
| `applyJsonTransaction` | (`json`: `string`) => `void` |
| `currentSlot` | () => [`UInt32`](../classes/UInt32.md) |
| `fetchActions` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `actionStates?`: [`ActionStates`](Mina.md#actionstates), `tokenId`: [`Field`](../classes/Field.md)) => `Promise`<{ `actions`: `string`[][] ; `hash`: `string`  }[]\> |
| `fetchEvents` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `Promise`<`any`\> |
| `getAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => [`Account`](Types.md#account-1) |
| `getActions` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `actionStates?`: [`ActionStates`](Mina.md#actionstates), `tokenId`: [`Field`](../classes/Field.md)) => { `actions`: `string`[][] ; `hash`: `string`  }[] |
| `getNetworkConstants` | () => { `accountCreationFee`: [`UInt64`](../classes/UInt64.md) ; `genesisTimestamp`: [`UInt64`](../classes/UInt64.md) ; `slotTime`: [`UInt64`](../classes/UInt64.md)  } |
| `getNetworkState` | () => `PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\> |
| `hasAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `boolean` |
| `incrementGlobalSlot` | (`increment`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `sendTransaction` | (`txn`: [`Transaction`](Mina.md#transaction-1)) => `Promise`<[`TransactionId`](../interfaces/Mina.TransactionId.md)\> |
| `setBlockchainLength` | (`height`: [`UInt32`](../classes/UInt32.md)) => `void` |
| `setGlobalSlot` | (`slot`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `setProofsEnabled` | (`newProofsEnabled`: `boolean`) => `void` |
| `setTotalCurrency` | (`currency`: [`UInt64`](../classes/UInt64.md)) => `void` |
| `transaction` | (`sender`: `DeprecatedFeePayerSpec`, `f`: () => `void`) => `Promise`<[`Transaction`](Mina.md#transaction-1)\> |

#### Defined in

[lib/mina.ts:365](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L365)

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

[lib/mina.ts:650](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L650)

▸ **Network**(`graphqlEndpoints`): `Mina`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoints` | `Object` |
| `graphqlEndpoints.archive` | `string` \| `string`[] |
| `graphqlEndpoints.mina` | `string` \| `string`[] |

#### Returns

`Mina`

#### Defined in

[lib/mina.ts:651](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L651)

___

### accountCreationFee

▸ **accountCreationFee**(): [`UInt64`](../classes/UInt64.md)

Returns the default account creation fee.

#### Returns

[`UInt64`](../classes/UInt64.md)

#### Defined in

[lib/mina.ts:1146](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1146)

___

### createTransaction

▸ **createTransaction**(`feePayer`, `f`, `numberOfRuns`, `«destructured»?`): [`Transaction`](Mina.md#transaction-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | `DeprecatedFeePayerSpec` |
| `f` | () => `unknown` |
| `numberOfRuns` | `undefined` \| ``0`` \| ``1`` |
| `«destructured»` | `Object` |
| › `fetchMode` | `undefined` \| `FetchMode` |
| › `isFinalRunOutsideCircuit` | `undefined` \| `boolean` |
| › `proofsEnabled` | `undefined` \| `boolean` |

#### Returns

[`Transaction`](Mina.md#transaction-1)

#### Defined in

[lib/mina.ts:167](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L167)

___

### currentSlot

▸ **currentSlot**(): [`UInt32`](../classes/UInt32.md)

#### Returns

[`UInt32`](../classes/UInt32.md)

The current slot number, according to the active Mina instance.

#### Defined in

[lib/mina.ts:1111](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1111)

___

### currentTransaction

▸ **currentTransaction**(): `undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Returns

`undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Defined in

[lib/global-context.ts:6](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/global-context.ts#L6)

___

### faucet

▸ **faucet**(`pub`, `network?`): `Promise`<`void`\>

Requests the [testnet faucet](https://faucet.minaprotocol.com/api/v1/faucet) to fund a public key.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pub` | [`PublicKey`](../classes/Types.PublicKey.md) | `undefined` |
| `network` | `string` | `'berkeley-qanet'` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/mina.ts:1525](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1525)

___

### fetchActions

▸ **fetchActions**(`publicKey`, `actionStates?`, `tokenId?`): `Promise`<{ `actions`: `string`[][] ; `hash`: `string`  }[] \| { `error`: { `statusCode`: `number` = 404; `statusText`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `actionStates?` | [`ActionStates`](Mina.md#actionstates) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

`Promise`<{ `actions`: `string`[][] ; `hash`: `string`  }[] \| { `error`: { `statusCode`: `number` = 404; `statusText`: `string`  }  }\>

A list of emitted sequencing actions associated to the given public key.

#### Defined in

[lib/mina.ts:1168](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1168)

___

### fetchEvents

▸ **fetchEvents**(`publicKey`, `tokenId`, `filterOptions?`): `Promise`<{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](../classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: { `data`: `string`[] ; `transactionInfo`: { `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](../classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId` | [`Field`](../classes/Field.md) |
| `filterOptions` | `EventActionFilterOptions` |

#### Returns

`Promise`<{ `blockHash`: `string` = event.blockInfo.stateHash; `blockHeight`: [`UInt32`](../classes/UInt32.md) ; `chainStatus`: `string` = event.blockInfo.chainStatus; `events`: { `data`: `string`[] ; `transactionInfo`: { `hash`: `string` ; `memo`: `string` ; `status`: `string`  }  }[] ; `globalSlot`: [`UInt32`](../classes/UInt32.md) ; `parentBlockHash`: `string` = event.blockInfo.parentHash }[]\>

A list of emitted events associated to the given public key.

#### Defined in

[lib/mina.ts:1157](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1157)

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

[lib/mina.ts:1482](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1482)

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

[lib/mina.ts:1118](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1118)

___

### getActions

▸ **getActions**(`publicKey`, `actionStates?`, `tokenId?`): { `actions`: `string`[][] ; `hash`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `actionStates?` | [`ActionStates`](Mina.md#actionstates) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

{ `actions`: `string`[][] ; `hash`: `string`  }[]

A list of emitted sequencing actions associated to the given public key.

#### Defined in

[lib/mina.ts:1179](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1179)

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

[lib/mina.ts:1139](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1139)

___

### getNetworkState

▸ **getNetworkState**(): `PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

#### Returns

`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

Data associated with the current state of the Mina network.

#### Defined in

[lib/mina.ts:1132](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1132)

___

### getProofsEnabled

▸ **getProofsEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/mina.ts:1187](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1187)

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

[lib/mina.ts:1125](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1125)

___

### sendTransaction

▸ **sendTransaction**(`txn`): `Promise`<[`TransactionId`](../interfaces/Mina.TransactionId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | [`Transaction`](Mina.md#transaction-1) |

#### Returns

`Promise`<[`TransactionId`](../interfaces/Mina.TransactionId.md)\>

#### Defined in

[lib/mina.ts:1150](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1150)

___

### sender

▸ **sender**(): [`PublicKey`](../classes/Types.PublicKey.md)

Returns the public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

#### Returns

[`PublicKey`](../classes/Types.PublicKey.md)

#### Defined in

[lib/mina.ts:1087](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1087)

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

[lib/mina.ts:1031](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1031)

___

### transaction

▸ **transaction**(`sender`, `f`): `Promise`<[`Transaction`](Mina.md#transaction-1)\>

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

`Promise`<[`Transaction`](Mina.md#transaction-1)\>

A transaction that can subsequently be submitted to the chain.

#### Defined in

[lib/mina.ts:1048](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1048)

▸ **transaction**(`f`): `Promise`<[`Transaction`](Mina.md#transaction-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

#### Returns

`Promise`<[`Transaction`](Mina.md#transaction-1)\>

#### Defined in

[lib/mina.ts:1049](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1049)

▸ **transaction**(`sender`, `f`): `Promise`<[`Transaction`](Mina.md#transaction-1)\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `DeprecatedFeePayerSpec` |
| `f` | () => `void` |

#### Returns

`Promise`<[`Transaction`](Mina.md#transaction-1)\>

#### Defined in

[lib/mina.ts:1062](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1062)

___

### waitForFunding

▸ **waitForFunding**(`address`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/mina.ts:1501](https://github.com/o1-labs/snarkyjs/blob/dcf69e2/src/lib/mina.ts#L1501)
