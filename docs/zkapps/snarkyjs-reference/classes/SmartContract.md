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

- [#\_senderState](SmartContract.md##_senderstate)
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
- [currentSlot](SmartContract.md#currentslot)
- [network](SmartContract.md#network)
- [self](SmartContract.md#self)
- [sender](SmartContract.md#sender)
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

[lib/zkapp.ts:647](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L647)

## Properties

### #\_senderState

• `Private` **#\_senderState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sender` | [`PublicKey`](Types.PublicKey.md) |
| `transactionId` | `number` |

#### Defined in

[lib/zkapp.ts:889](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L889)

___

### #executionState

• `Private` **#executionState**: `undefined` \| `ExecutionState`

#### Defined in

[lib/zkapp.ts:620](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L620)

___

### address

• **address**: [`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/zkapp.ts:617](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L617)

___

### events

• **events**: `Object` = `{}`

A list of event types that can be emitted using this.emitEvent()`.

#### Index signature

▪ [key: `string`]: [`FlexibleProvablePure`](../README.md#flexibleprovablepure)<`any`\>

#### Defined in

[lib/zkapp.ts:1000](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1000)

___

### tokenId

• **tokenId**: [`Field`](Field.md)

#### Defined in

[lib/zkapp.ts:618](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L618)

___

### \_maxProofsVerified

▪ `Static` `Optional` **\_maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Defined in

[lib/zkapp.ts:633](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L633)

___

### \_methodMetadata

▪ `Static` **\_methodMetadata**: `Record`<`string`, { `actions`: `number` ; `digest`: `string` ; `gates`: `Gate`[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\> = `{}`

#### Defined in

[lib/zkapp.ts:622](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L622)

___

### \_methods

▪ `Static` `Optional` **\_methods**: `MethodInterface`[]

#### Defined in

[lib/zkapp.ts:621](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L621)

___

### \_provers

▪ `Static` `Optional` **\_provers**: `Prover`[]

#### Defined in

[lib/zkapp.ts:632](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L632)

___

### \_verificationKey

▪ `Static` `Optional` **\_verificationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Defined in

[lib/zkapp.ts:634](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L634)

## Accessors

### account

• `get` **account**(): `Account`

Current account of the [SmartContract](SmartContract.md).

#### Returns

`Account`

#### Defined in

[lib/zkapp.ts:920](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L920)

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

[lib/zkapp.ts:994](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L994)

___

### currentSlot

• `get` **currentSlot**(): `CurrentSlot`

Current global slot on the network. This is the slot at which this transaction is included in a block. Since we cannot know this value
at the time of transaction construction, this only has the `assertBetween()` method but no `get()` (impossible to implement)
or `assertEquals()` (confusing, because the developer can't know the exact slot at which this will be included either)

#### Returns

`CurrentSlot`

#### Defined in

[lib/zkapp.ts:934](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L934)

___

### network

• `get` **network**(): `Network`

Current network state of the [SmartContract](SmartContract.md).

#### Returns

`Network`

#### Defined in

[lib/zkapp.ts:926](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L926)

___

### self

• `get` **self**(): [`AccountUpdate`](AccountUpdate.md)

Returns the current [AccountUpdate](AccountUpdate.md) associated to this [SmartContract](SmartContract.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:846](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L846)

___

### sender

• `get` **sender**(): [`PublicKey`](Types.PublicKey.md)

The public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

**Warning**: The fact that this public key equals the current sender is not part of the proof.
A malicious prover could use any other public key without affecting the validity of the proof.

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Defined in

[lib/zkapp.ts:899](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L899)

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

[lib/zkapp.ts:940](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L940)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

**`Deprecated`**

use `this.account.tokenSymbol`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

#### Defined in

[lib/zkapp.ts:988](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L988)

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

[lib/zkapp.ts:966](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L966)

___

### deploy

▸ **deploy**(`«destructured»?`): `void`

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
| `«destructured»` | `Object` |
| › `verificationKey?` | `Object` |
| › `verificationKey.data` | `string` |
| › `verificationKey.hash` | `string` \| [`Field`](Field.md) |
| › `zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:734](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L734)

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

[lib/zkapp.ts:1006](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1006)

___

### fetchEvents

▸ **fetchEvents**(`start?`, `end?`): `Promise`<{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: { `data`: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\> ; `transactionInfo`: { `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

Asynchronously fetches events emitted by this [SmartContract](SmartContract.md) and returns an array of events with their corresponding types.

**`Async`**

**`Throws`**

If there is an error fetching events from the Mina network.

**`Example`**

```ts
const startHeight = UInt32.from(1000);
const endHeight = UInt32.from(2000);
const events = await myZkapp.fetchEvents(startHeight, endHeight);
console.log(events);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | [`UInt32`](UInt32.md) | The start height of the events to fetch. |
| `end?` | [`UInt32`](UInt32.md) | The end height of the events to fetch. If not provided, fetches events up to the latest height. |

#### Returns

`Promise`<{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: { `data`: [`ProvablePure`](../interfaces/ProvablePure.md)<`any`\> ; `transactionInfo`: { `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

A promise that resolves to an array of objects, each containing the event type and event data for the specified range.

#### Defined in

[lib/zkapp.ts:1052](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1052)

___

### init

▸ **init**(`zkappKey?`): `void`

`SmartContract.init()` will be called only when a [SmartContract](SmartContract.md) will be first deployed, not for redeployment.
This method can be overridden as follows
```
class MyContract extends SmartContract {
 init() {
   super.init();
   this.account.permissions.set(...);
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

[lib/zkapp.ts:799](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L799)

___

### newSelf

▸ **newSelf**(): [`AccountUpdate`](AccountUpdate.md)

Same as `SmartContract.self` but explicitly creates a new [AccountUpdate](AccountUpdate.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:881](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L881)

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

[lib/zkapp.ts:822](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L822)

___

### send

▸ **send**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |
| `args.to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:978](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L978)

___

### setPermissions

▸ **setPermissions**(`permissions`): `void`

**`Deprecated`**

use `this.account.permissions.set()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](../README.md#permissions) |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:1225](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1225)

___

### setValue

▸ **setValue**<`T`\>(`maybeValue`, `value`): `void`

**`Deprecated`**

use `this.account.<field>.set()`

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

[lib/zkapp.ts:1218](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1218)

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

[lib/zkapp.ts:828](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L828)

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

[lib/zkapp.ts:839](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L839)

___

### Proof

▸ `Static` **Proof**(): typeof `__class`

Returns a Proof type that belongs to this [SmartContract](SmartContract.md).

#### Returns

typeof `__class`

#### Defined in

[lib/zkapp.ts:639](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L639)

___

### analyzeMethods

▸ `Static` **analyzeMethods**(): `Record`<`string`, { `actions`: `number` ; `digest`: `string` ; `gates`: `Gate`[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\>

This function is run internally before compiling a smart contract, to collect metadata about what each of your
smart contract methods does.

For external usage, this function can be handy because calling it involves running all methods in the same "mode" as `compile()` does,
so it serves as a quick-to-run check for whether your contract can be compiled without errors, which can greatly speed up iterating.

`analyzeMethods()` will also return the number of `rows` of each of your method circuits (i.e., the number of constraints in the underlying proof system),
which is a good indicator for circuit size and the time it will take to create proofs.
To inspect the created circuit in detail, you can look at the returned `gates`.

Note: If this function was already called before, it will short-circuit and just return the metadata collected the first time.

#### Returns

`Record`<`string`, { `actions`: `number` ; `digest`: `string` ; `gates`: `Gate`[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `hasReturn` a boolean indicating whether the method returns a value
 - `actions` the number of actions the method dispatches
 - `gates` the constraint system, represented as an array of gates

#### Defined in

[lib/zkapp.ts:1172](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1172)

___

### compile

▸ `Static` **compile**(): `Promise`<{ `provers`: `Prover`[] ; `verificationKey`: { `data`: `string` = verificationKey\_.data; `hash`: [`Field`](Field.md)  } ; `verify`: (`publicInput`: `PublicInput`, `proof`: `unknown`) => `Promise`<`boolean`\>  }\>

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

`Promise`<{ `provers`: `Prover`[] ; `verificationKey`: { `data`: `string` = verificationKey\_.data; `hash`: [`Field`](Field.md)  } ; `verify`: (`publicInput`: `PublicInput`, `proof`: `unknown`) => `Promise`<`boolean`\>  }\>

#### Defined in

[lib/zkapp.ts:675](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L675)

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

[lib/zkapp.ts:714](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L714)

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

[lib/zkapp.ts:1146](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/zkapp.ts#L1146)
