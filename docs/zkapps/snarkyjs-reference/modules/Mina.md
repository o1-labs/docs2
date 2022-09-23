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
| `sender?` | [`PublicKey`](../classes/Types.PublicKey.md) |

#### Defined in

[lib/mina.ts:65](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L65)

___

### FeePayerSpec

Ƭ **FeePayerSpec**: [`PrivateKey`](../classes/PrivateKey.md) \| { `fee?`: `number` \| `string` \| [`UInt64`](../classes/UInt64.md) ; `feePayerKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `memo?`: `string`  } \| `undefined`

#### Defined in

[lib/mina.ts:74](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L74)

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

[lib/mina.ts:581](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L581)

___

### LocalBlockchain

▸ **LocalBlockchain**(`__namedParameters?`): `MockMina`

A mock Mina blockchain running locally and useful for testing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.accountCreationFee` | `undefined` \| `string` \| `number` |

#### Returns

`MockMina`

#### Defined in

[lib/mina.ts:235](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L235)

___

### accountCreationFee

▸ **accountCreationFee**(): [`UInt64`](../classes/UInt64.md)

#### Returns

[`UInt64`](../classes/UInt64.md)

#### Defined in

[lib/mina.ts:719](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L719)

___

### createTransaction

▸ **createTransaction**(`feePayer`, `f`, `__namedParameters?`): `Transaction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePayer` | [`FeePayerSpec`](Mina.md#feepayerspec) |
| `f` | () => `unknown` |
| `__namedParameters` | `Object` |
| `__namedParameters.fetchMode` | `undefined` \| `FetchMode` |
| `__namedParameters.isFinalRunOutsideCircuit` | `undefined` \| `boolean` |

#### Returns

`Transaction`

#### Defined in

[lib/mina.ts:87](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L87)

___

### currentSlot

▸ **currentSlot**(): [`UInt32`](../classes/UInt32.md)

#### Returns

[`UInt32`](../classes/UInt32.md)

The current slot number, according to the active Mina instance.

#### Defined in

[lib/mina.ts:690](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L690)

___

### currentTransaction

▸ **currentTransaction**(): `undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Returns

`undefined` \| [`CurrentTransaction`](Mina.md#currenttransaction)

#### Defined in

[lib/global-context.ts:6](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/global-context.ts#L6)

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

[lib/mina.ts:730](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L730)

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

[lib/mina.ts:697](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L697)

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

[lib/mina.ts:737](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L737)

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

[lib/mina.ts:715](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L715)

___

### getNetworkState

▸ **getNetworkState**(): `PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

#### Returns

`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt32`](../classes/UInt32.md) ; `upper`: [`UInt32`](../classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: [`Field`](../classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](../classes/Bool.md) ; `value`: { `lower`: [`UInt64`](../classes/UInt64.md) ; `upper`: [`UInt64`](../classes/UInt64.md)  }  }  }\>

Data associated with the current state of the Mina network.

#### Defined in

[lib/mina.ts:708](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L708)

___

### hasAccount

▸ **hasAccount**(`publicKey`, `tokenId?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](../classes/Field.md) |

#### Returns

`boolean`

#### Defined in

[lib/mina.ts:701](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L701)

___

### sendTransaction

▸ **sendTransaction**(`txn`): `TransactionId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | `Transaction` |

#### Returns

`TransactionId`

#### Defined in

[lib/mina.ts:723](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L723)

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

[lib/mina.ts:652](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L652)

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

[lib/mina.ts:669](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L669)

▸ **transaction**(`sender`, `f`): `Promise`<`Transaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`FeePayerSpec`](Mina.md#feepayerspec) |
| `f` | () => `void` |

#### Returns

`Promise`<`Transaction`\>

#### Defined in

[lib/mina.ts:670](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/mina.ts#L670)
