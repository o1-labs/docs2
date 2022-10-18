# Class: SmartContract

The main zkapp class. To write a zkapp, extend this class as such:

```
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Table of contents

### Constructors

- [constructor](SmartContract.md#constructor)

### Properties

- [\_executionState](SmartContract.md#_executionstate)
- [address](SmartContract.md#address)
- [events](SmartContract.md#events)
- [tokenId](SmartContract.md#tokenid)
- [\_maxProofsVerified](SmartContract.md#_maxproofsverified)
- [\_methodMetadata](SmartContract.md#_methodmetadata)
- [\_methods](SmartContract.md#_methods)
- [\_provers](SmartContract.md#_provers)
- [\_verificationKey](SmartContract.md#_verificationkey)

### Accessors

- [account](SmartContract.md#account)
- [balance](SmartContract.md#balance)
- [experimental](SmartContract.md#experimental)
- [network](SmartContract.md#network)
- [self](SmartContract.md#self)
- [tokenSymbol](SmartContract.md#tokensymbol)

### Methods

- [deploy](SmartContract.md#deploy)
- [emitEvent](SmartContract.md#emitevent)
- [executionState](SmartContract.md#executionstate)
- [fetchEvents](SmartContract.md#fetchevents)
- [send](SmartContract.md#send)
- [setPermissions](SmartContract.md#setpermissions)
- [setValue](SmartContract.md#setvalue)
- [sign](SmartContract.md#sign)
- [Proof](SmartContract.md#proof)
- [analyzeMethods](SmartContract.md#analyzemethods)
- [compile](SmartContract.md#compile)
- [digest](SmartContract.md#digest)
- [runOutsideCircuit](SmartContract.md#runoutsidecircuit)

## Constructors

### constructor

• **new SmartContract**(`address`, `tokenId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | [`Field`](Field.md) |

#### Defined in

[lib/zkapp.ts:588](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L588)

## Properties

### \_executionState

• `Private` **\_executionState**: `undefined` \| `ExecutionState`

#### Defined in

[lib/zkapp.ts:570](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L570)

___

### address

• **address**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/zkapp.ts:567](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L567)

___

### events

• **events**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`\>

#### Defined in

[lib/zkapp.ts:757](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L757)

___

### tokenId

• **tokenId**: [`Field`](Field.md)

#### Defined in

[lib/zkapp.ts:568](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L568)

___

### \_maxProofsVerified

▪ `Static` `Optional` **\_maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/zkapp.ts:577](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L577)

___

### \_methodMetadata

▪ `Static` `Private` **\_methodMetadata**: `Record`<`string`, { `digest`: `string` ; `hasReturn`: `boolean` ; `rows`: `number` ; `sequenceEvents`: `number`  }\> = `{}`

#### Defined in

[lib/zkapp.ts:572](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L572)

___

### \_methods

▪ `Static` `Optional` **\_methods**: `MethodInterface`[]

#### Defined in

[lib/zkapp.ts:571](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L571)

___

### \_provers

▪ `Static` `Optional` **\_provers**: `Prover`[]

#### Defined in

[lib/zkapp.ts:576](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L576)

___

### \_verificationKey

▪ `Static` `Optional` **\_verificationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Defined in

[lib/zkapp.ts:578](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L578)

## Accessors

### account

• `get` **account**(): `PreconditionClassType`<`AccountPrecondition`\>

#### Returns

`PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/zkapp.ts:725](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L725)

___

### balance

• `get` **balance**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |
| `subInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |

#### Defined in

[lib/zkapp.ts:753](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L753)

___

### experimental

• `get` **experimental**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get token()` | { `id`: [`Field`](Field.md) = customToken.id; `parentTokenId`: [`Field`](Field.md) = customToken.parentTokenId; `tokenOwner`: [`PublicKey`](Types.PublicKey.md) = customToken.tokenOwner; `burn`: (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => `void` ; `mint`: (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) ; `send`: (`__namedParameters`: { `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md) ; `from`: [`PublicKey`](Types.PublicKey.md) ; `to`: [`PublicKey`](Types.PublicKey.md)  }) => [`AccountUpdate`](AccountUpdate.md)  } |

#### Defined in

[lib/zkapp.ts:733](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L733)

___

### network

• `get` **network**(): `PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

#### Returns

`PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

#### Defined in

[lib/zkapp.ts:729](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L729)

___

### self

• `get` **self**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:721](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L721)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

#### Defined in

[lib/zkapp.ts:749](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L749)

## Methods

### deploy

▸ **deploy**(`__namedParameters?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.verificationKey?` | `Object` |
| `__namedParameters.verificationKey.data` | `string` |
| `__namedParameters.verificationKey.hash` | `string` \| [`Field`](Field.md) |
| `__namedParameters.zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:664](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L664)

___

### emitEvent

▸ **emitEvent**<`K`\>(`type`, `event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:760](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L760)

___

### executionState

▸ `Private` **executionState**(): [`AccountUpdate`](AccountUpdate.md)

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:685](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L685)

___

### fetchEvents

▸ **fetchEvents**(`start?`, `end?`): `Promise`<{ `event`: [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`\> ; `type`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`UInt32`](UInt32.md) |
| `end?` | [`UInt32`](UInt32.md) |

#### Returns

`Promise`<{ `event`: [`AsFieldElements`](../interfaces/AsFieldElements.md)<`any`\> ; `type`: `string`  }[]\>

#### Defined in

[lib/zkapp.ts:793](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L793)

___

### send

▸ **send**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |
| `args.to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:742](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L742)

___

### setPermissions

▸ **setPermissions**(`permissions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](../README.md#permissions) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:908](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L908)

___

### setValue

▸ **setValue**<`T`\>(`maybeValue`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeValue` | `SetOrKeep`<`T`\> |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:902](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L902)

___

### sign

▸ **sign**(`zkappKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:681](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L681)

___

### Proof

▸ `Static` **Proof**(): typeof `__class`

#### Returns

typeof `__class`

#### Defined in

[lib/zkapp.ts:580](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L580)

___

### analyzeMethods

▸ `Static` **analyzeMethods**(): `Record`<`string`, { `digest`: `string` ; `hasReturn`: `boolean` ; `rows`: `number` ; `sequenceEvents`: `number`  }\>

This function is run internally before compiling a smart contract, to collect metadata about what each of your
smart contract methods does.

For external usage, this function can be handy because calling it involves running all methods in the same "mode" as `compile()` does,
so it serves as a quick-to-run check for whether your contract can be compiled without errors, which can greatly speed up iterating.

`analyzeMethods()` will also return the number of `rows` of each of your method circuits (i.e., the number of constraints in the underlying proof system),
which is a good indicator for circuit size and the time it will take to create proofs.

Note: If this function was already called before, it will short-circuit and just return the metadata collected the first time.

#### Returns

`Record`<`string`, { `digest`: `string` ; `hasReturn`: `boolean` ; `rows`: `number` ; `sequenceEvents`: `number`  }\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `hasReturn` a boolean indicating whether the method returns a value
 - `sequenceEvents` the number of actions the method dispatches

#### Defined in

[lib/zkapp.ts:861](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L861)

___

### compile

▸ `Static` **compile**(): `Promise`<{ `provers`: `Prover`[] ; `verificationKey`: { `data`: `string` ; `hash`: `string`  } ; `verify`: (`publicInput`: `PublicInput`, `proof`: `unknown`) => `Promise`<`boolean`\>  }\>

Compile your smart contract.

This generates both the prover functions, needed to create proofs for running `@method`s,
and the verification key, needed to deploy your zkApp.

Although provers and verification key are returned by this method, they are also cached internally and used when needed,
so you don't actually have to use the return value of this function.

Under the hood, "compiling" means calling into the lower-level [Pickles and Kimchi libraries](https://o1-labs.github.io/proof-systems/kimchi/overview.html) to
create two prover & verifier indices (one for the "step circuit" which combines all of your smart contract methods into one circuit,
and one for the "wrap circuit" which wraps it so that proofs end up in the original finite field). These are fairly expensive
operations, so **expect compiling to take at least 20 seconds**, up to several minutes if your circuit is large or your hardware
is not optimal for these operations.

#### Returns

`Promise`<{ `provers`: `Prover`[] ; `verificationKey`: { `data`: `string` ; `hash`: `string`  } ; `verify`: (`publicInput`: `PublicInput`, `proof`: `unknown`) => `Promise`<`boolean`\>  }\>

#### Defined in

[lib/zkapp.ts:616](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L616)

___

### digest

▸ `Static` **digest**(): `string`

Computes a hash of your smart contract, which will reliably change _whenever one of your method circuits changes_.
This digest is quick to compute. it is designed to help with deciding whether a contract should be re-compiled or
a cached verification key can be used.

#### Returns

`string`

the digest, as a hex string

#### Defined in

[lib/zkapp.ts:654](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L654)

___

### runOutsideCircuit

▸ `Static` **runOutsideCircuit**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | () => `void` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:837](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L837)
