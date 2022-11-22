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

- [#executionState](SmartContract.md##executionstate)
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
- [network](SmartContract.md#network)
- [self](SmartContract.md#self)
- [token](SmartContract.md#token)
- [tokenSymbol](SmartContract.md#tokensymbol)

### Methods

- [approve](SmartContract.md#approve)
- [deploy](SmartContract.md#deploy)
- [emitEvent](SmartContract.md#emitevent)
- [fetchEvents](SmartContract.md#fetchevents)
- [init](SmartContract.md#init)
- [newSelf](SmartContract.md#newself)
- [requireSignature](SmartContract.md#requiresignature)
- [send](SmartContract.md#send)
- [setPermissions](SmartContract.md#setpermissions)
- [setValue](SmartContract.md#setvalue)
- [sign](SmartContract.md#sign)
- [skipAuthorization](SmartContract.md#skipauthorization)
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

[lib/zkapp.ts:616](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L616)

## Properties

### #executionState

• `Private` **#executionState**: `undefined` \| `ExecutionState`

#### Defined in

[lib/zkapp.ts:595](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L595)

___

### address

• **address**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/zkapp.ts:592](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L592)

___

### events

• **events**: `Object` = `{}`

A list of event types that can be emitted using this.emitEvent()`.

#### Index signature

▪ [key: `string`]: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\>

#### Defined in

[lib/zkapp.ts:927](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L927)

___

### tokenId

• **tokenId**: [`Field`](Field.md)

#### Defined in

[lib/zkapp.ts:593](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L593)

___

### \_maxProofsVerified

▪ `Static` `Optional` **\_maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/zkapp.ts:602](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L602)

___

### \_methodMetadata

▪ `Static` **\_methodMetadata**: `Record`<`string`, { `digest`: `string` ; `hasReturn`: `boolean` ; `rows`: `number` ; `sequenceEvents`: `number`  }\> = `{}`

#### Defined in

[lib/zkapp.ts:597](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L597)

___

### \_methods

▪ `Static` `Optional` **\_methods**: `MethodInterface`[]

#### Defined in

[lib/zkapp.ts:596](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L596)

___

### \_provers

▪ `Static` `Optional` **\_provers**: `Prover`[]

#### Defined in

[lib/zkapp.ts:601](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L601)

___

### \_verificationKey

▪ `Static` `Optional` **\_verificationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Defined in

[lib/zkapp.ts:603](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L603)

## Accessors

### account

• `get` **account**(): `PreconditionClassType`<`AccountPrecondition`\>

Current account of the [SmartContract](SmartContract.md).

#### Returns

`PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/zkapp.ts:855](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L855)

___

### balance

• `get` **balance**(): `Object`

Balance of this [SmartContract](SmartContract.md).

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |
| `subInPlace` | (`x`: `string` \| `number` \| `bigint` \| [`UInt64`](UInt64.md) \| [`UInt32`](UInt32.md) \| [`Int64`](Int64.md)) => `void` |

#### Defined in

[lib/zkapp.ts:921](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L921)

___

### network

• `get` **network**(): `PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

Current network state of the [SmartContract](SmartContract.md).

#### Returns

`PreconditionClassType`<{ `blockchainLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt32`](UInt32.md) ; `upper`: [`UInt32`](UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `seed`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](Bool.md) ; `value`: [`Field`](Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](Bool.md) ; `value`: { `lower`: [`UInt64`](UInt64.md) ; `upper`: [`UInt64`](UInt64.md)  }  }  }\>

#### Defined in

[lib/zkapp.ts:861](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L861)

___

### self

• `get` **self**(): [`AccountUpdate`](AccountUpdate.md)

Returns the current [AccountUpdate](AccountUpdate.md) associated to this [SmartContract](SmartContract.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:809](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L809)

___

### token

• `get` **token**(): `Object`

Token of the [SmartContract](SmartContract.md).

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | [`Field`](Field.md) |
| `parentTokenId` | [`Field`](Field.md) |
| `tokenOwner` | [`PublicKey`](Types.PublicKey.md) |
| `burn` | (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => `void` |
| `mint` | (`__namedParameters`: { `address`: [`PublicKey`](Types.PublicKey.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `send` | (`__namedParameters`: { `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md) ; `from`: [`PublicKey`](Types.PublicKey.md) ; `to`: [`PublicKey`](Types.PublicKey.md)  }) => [`AccountUpdate`](AccountUpdate.md) |

#### Defined in

[lib/zkapp.ts:867](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L867)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

Token symbol of this token.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

#### Defined in

[lib/zkapp.ts:915](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L915)

## Methods

### approve

▸ **approve**(`updateOrCallback`, `layout?`): [`AccountUpdate`](AccountUpdate.md)

Approve an account update or callback. This will include the account update in the zkApp's public input,
which means it allows you to read and use its content in a proof, make assertions about it, and modify it.

If this is called with a callback as the first parameter, it will first extract the account update produced by that callback.
The extracted account update is returned.

```ts
\@method myApprovingMethod(callback: Callback) {
  let approvedUpdate = this.approve(callback);
}
```

Under the hood, "approving" just means that the account update is made a child of the zkApp in the
tree of account updates that forms the transaction.
The second parameter `layout` allows you to also make assertions about the approved update's _own_ children,
by specifying a certain expected layout of children. See [Layout](AccountUpdate.md#layout).

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateOrCallback` | [`AccountUpdate`](AccountUpdate.md) \| `Callback`<`any`\> |
| `layout?` | `AccountUpdatesLayout` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

The account update that was approved (needed when passing in a Callback)

#### Defined in

[lib/zkapp.ts:893](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L893)

___

### deploy

▸ **deploy**(`__namedParameters?`): `void`

Deploys a [SmartContract](SmartContract.md).

```ts
let tx = await Mina.transaction(feePayer, () => {
   AccountUpdate.fundNewAccount(feePayer, { initialBalance });
   zkapp.deploy({ zkappKey });
});
```

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

[lib/zkapp.ts:702](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L702)

___

### emitEvent

▸ **emitEvent**<`K`\>(`type`, `event`): `void`

Emits an event. Events will be emitted as a part of the transaction and can be collected by archive nodes.

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

[lib/zkapp.ts:933](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L933)

___

### fetchEvents

▸ **fetchEvents**(`start?`, `end?`): `Promise`<{ `event`: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\> ; `type`: `string`  }[]\>

Fetches a list of events that have been emitted by this [SmartContract](SmartContract.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`UInt32`](UInt32.md) |
| `end?` | [`UInt32`](UInt32.md) |

#### Returns

`Promise`<{ `event`: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\> ; `type`: `string`  }[]\>

#### Defined in

[lib/zkapp.ts:969](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L969)

___

### init

▸ **init**(`zkappKey?`): `void`

`SmartContract.init()` will be called only when a [SmartContract](SmartContract.md) will be first deployed, not for redeployment.
This method can be overridden as follows
```
class MyContract extends SmartContract {
 init() {
   super.init();
   this.setPermissions();
   this.x.set(Field(1));
 }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:762](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L762)

___

### newSelf

▸ **newSelf**(): [`AccountUpdate`](AccountUpdate.md)

Same as `SmartContract.self` but explicitly creates a new [AccountUpdate](AccountUpdate.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:844](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L844)

___

### requireSignature

▸ **requireSignature**(): `void`

Use this command if the account update created by this SmartContract should be signed by the account owner,
instead of authorized with a proof.

Note that the smart contract's [Permissions](../interfaces/Permissions.md) determine which updates have to be (can be) authorized by a signature.

If you only want to avoid creating proofs for quicker testing, we advise you to
use `LocalBlockchain({ proofsEnabled: false })` instead of `requireSignature()`. Setting
`proofsEnabled` to `false` allows you to test your transactions with the same authorization flow as in production,
with the only difference being that quick mock proofs are filled in instead of real proofs.

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:785](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L785)

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

[lib/zkapp.ts:905](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L905)

___

### setPermissions

▸ **setPermissions**(`permissions`): `void`

Changes the [Permissions](../interfaces/Permissions.md) of this [SmartContract](SmartContract.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](../README.md#permissions) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:1088](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1088)

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

[lib/zkapp.ts:1079](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1079)

___

### sign

▸ **sign**(`zkappKey?`): `void`

**`Deprecated`**

`this.sign()` is deprecated in favor of `this.requireSignature()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:791](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L791)

___

### skipAuthorization

▸ **skipAuthorization**(): `void`

Use this command if the account update created by this SmartContract should have no authorization on it,
instead of being authorized with a proof.

WARNING: This is a method that should rarely be useful. If you want to disable proofs for quicker testing, take a look
at `LocalBlockchain({ proofsEnabled: false })`, which causes mock proofs to be created and doesn't require changing the
authorization flow.

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:802](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L802)

___

### Proof

▸ `Static` **Proof**(): typeof `__class`

Returns a Proof type that belongs to this [SmartContract](SmartContract.md).

#### Returns

typeof `__class`

#### Defined in

[lib/zkapp.ts:608](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L608)

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

[lib/zkapp.ts:1037](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1037)

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

[lib/zkapp.ts:644](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L644)

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

[lib/zkapp.ts:682](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L682)

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

[lib/zkapp.ts:1013](https://github.com/o1-labs/snarkyjs/blob/b5e7c38/src/lib/zkapp.ts#L1013)
