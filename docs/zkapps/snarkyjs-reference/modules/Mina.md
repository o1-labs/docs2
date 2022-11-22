# Namespace: Mina

## Table of contents

### Type Aliases

- [CurrentTransaction](Mina.md#currenttransaction)
- [FeePayerSpec](Mina.md#feepayerspec)

### Functions

- [BerkeleyQANet](Mina.md#berkeleyqanet)
- [LocalBlockchain](Mina.md#localblockchain)
- [accountCreationFee](Mina.md#accountcreationfee)
- [createTransaction](Mina.md#createtransaction)
- [currentSlot](Mina.md#currentslot)
- [currentTransaction](Mina.md#currenttransaction-1)
- [fetchEvents](Mina.md#fetchevents)
- [getAccount](Mina.md#getaccount)
- [getActions](Mina.md#getactions)
- [getBalance](Mina.md#getbalance)
- [getNetworkState](Mina.md#getnetworkstate)
- [hasAccount](Mina.md#hasaccount)
- [sendTransaction](Mina.md#sendtransaction)
- [setActiveInstance](Mina.md#setactiveinstance)
- [transaction](Mina.md#transaction)

## Type Aliases

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

[lib/mina.ts:97](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L97)

___

### FeePayerSpec

Ƭ **FeePayerSpec**: [`PrivateKey`](../classes/PrivateKey.md) \| { `fee?`: `number` \| `string` \| [`UInt64`](../classes/UInt64.md) ; `feePayerKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `memo?`: `string` ; `nonce?`: `number`  } \| `undefined`

Allows you to specify information about the fee payer account and the transaction.

#### Defined in

[lib/mina.ts:110](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L110)

## Functions

### BerkeleyQANet

▸ **BerkeleyQANet**(`graphqlEndpoint`): `Mina`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`Mina`

#### Defined in

[lib/mina.ts:665](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L665)

___

### LocalBlockchain

▸ **LocalBlockchain**(`__namedParameters?`): `Object`

A mock Mina blockchain running locally and useful for testing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.accountCreationFee` | `undefined` \| `string` \| `number` |
| `__namedParameters.proofsEnabled` | `undefined` \| `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountCreationFee` | () => [`UInt64`](../classes/UInt64.md) |
| `addAccount` | (`pk`: [`PublicKey`](../classes/Types.PublicKey.md), `balance`: `string`) => `void` |
| `testAccounts` | { `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }[] |
| `applyJsonTransaction` | (`json`: `string`) => `Account`[] |
| `currentSlot` | () => [`UInt32`](../classes/UInt32.md) |
| `fetchEvents` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `Promise`<`any`[]\> |
| `getAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `Account` |
| `getActions` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => { `actions`: `string`[][] ; `hash`: `string`  }[] |
| `getNetworkState` | () => `PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\> |
| `hasAccount` | (`publicKey`: [`PublicKey`](../classes/Types.PublicKey.md), `tokenId`: [`Field`](../classes/Field.md)) => `boolean` |
| `incrementGlobalSlot` | (`increment`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `sendTransaction` | (`txn`: `Transaction`) => `Promise`<{ `hash`: () => `string` ; `wait`: () => `Promise`<`void`\>  }\> |
| `setBlockchainLength` | (`height`: [`UInt32`](../classes/UInt32.md)) => `void` |
| `setGlobalSlot` | (`slot`: `number` \| [`UInt32`](../classes/UInt32.md)) => `void` |
| `setProofsEnabled` | (`newProofsEnabled`: `boolean`) => `void` |
| `setTimestamp` | (`ms`: [`UInt64`](../classes/UInt64.md)) => `void` |
| `setTotalCurrency` | (`currency`: [`UInt64`](../classes/UInt64.md)) => `void` |
| `transaction` | (`sender`: [`FeePayerSpec`](Mina.md#feepayerspec), `f`: () => `void`) => `Promise`<`Transaction`\> |

#### Defined in

[lib/mina.ts:286](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L286)

___

### accountCreationFee

▸ **accountCreationFee**(): [`UInt64`](../classes/UInt64.md)

Returns the default account creation fee.

#### Returns

[`UInt64`](../classes/UInt64.md)

#### Defined in

[lib/mina.ts:809](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L809)

___

### createTransaction

▸ **createTransaction**(`feePayer`, `f`, `numberOfRuns`, `__namedParameters?`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | [`FeePayerSpec`](Mina.md#feepayerspec) |
| `f` | () => `unknown` |
| `numberOfRuns` | `undefined` \| ``0`` \| ``1`` |
| `__namedParameters` | `Object` |
| `__namedParameters.fetchMode` | `undefined` \| `FetchMode` |
| `__namedParameters.isFinalRunOutsideCircuit` | `undefined` \| `boolean` |
| `__namedParameters.proofsEnabled` | `undefined` \| `boolean` |

#### Returns

`Transaction`

#### Defined in

[lib/mina.ts:128](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L128)

___

### currentSlot

▸ **currentSlot**(): [`UInt32`](../classes/UInt32.md)

#### Returns

[`UInt32`](../classes/UInt32.md)

The current slot number, according to the active Mina instance.

#### Defined in

[lib/mina.ts:774](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L774)

___

### currentTransaction

▸ **currentTransaction**(): `undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Returns

`undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Defined in

[lib/global-context.ts:6](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/global-context.ts#L6)

___

### fetchEvents

▸ **fetchEvents**(`publicKey`, `tokenId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId` | [`Field`](../classes/Field.md) |

#### Returns

`Promise`<`any`\>

A list of emitted events associated to the given public key.

#### Defined in

[lib/mina.ts:820](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L820)

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

[lib/mina.ts:781](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L781)

___

### getActions

▸ **getActions**(`publicKey`, `tokenId`): { `actions`: `string`[][] ; `hash`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId` | [`Field`](../classes/Field.md) |

#### Returns

{ `actions`: `string`[][] ; `hash`: `string`  }[]

A list of emitted sequencing actions associated to the given public key.

#### Defined in

[lib/mina.ts:827](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L827)

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

[lib/mina.ts:802](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L802)

___

### getNetworkState

▸ **getNetworkState**(): `PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

#### Returns

`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

Data associated with the current state of the Mina network.

#### Defined in

[lib/mina.ts:795](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L795)

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

[lib/mina.ts:788](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L788)

___

### sendTransaction

▸ **sendTransaction**(`txn`): `Promise`<`TransactionId`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `Transaction` |

#### Returns

`Promise`<`TransactionId`\>

#### Defined in

[lib/mina.ts:813](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L813)

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

[lib/mina.ts:736](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L736)

___

### transaction

▸ **transaction**(`f`): `Promise`<`Transaction`\>

Construct a smart contract transaction. Within the callback passed to this function,
you can call into the methods of smart contracts.

```typescript
transaction(() => {
  myZkapp.update();
  someOtherZkapp.someOtherMethod();
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

#### Returns

`Promise`<`Transaction`\>

A transaction that can subsequently be submitted to the chain.

#### Defined in

[lib/mina.ts:753](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L753)

▸ **transaction**(`sender`, `f`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`FeePayerSpec`](Mina.md#feepayerspec) |
| `f` | () => `void` |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[lib/mina.ts:754](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/mina.ts#L754)
