[o1js](../README.md) / [Modules](../modules.md) / TokenContract

# Class: TokenContract

Base token contract which
- implements the `Approvable` API, with the `approveBase()` method left to be defined by subclasses
- implements the `Transferable` API as a wrapper around the `Approvable` API

## Hierarchy

- [`SmartContract`](SmartContract.md)

  ↳ **`TokenContract`**

## Table of contents

### Constructors

- [constructor](TokenContract.md#constructor)

### Properties

- [#\_senderState](TokenContract.md##_senderstate)
- [#executionState](TokenContract.md##executionstate)
- [address](TokenContract.md#address)
- [events](TokenContract.md#events)
- [sender](TokenContract.md#sender)
- [tokenId](TokenContract.md#tokenid)
- [\_maxProofsVerified](TokenContract.md#_maxproofsverified)
- [\_methodMetadata](TokenContract.md#_methodmetadata)
- [\_methods](TokenContract.md#_methods)
- [\_provers](TokenContract.md#_provers)
- [\_verificationKey](TokenContract.md#_verificationkey)

### Accessors

- [account](TokenContract.md#account)
- [balance](TokenContract.md#balance)
- [currentSlot](TokenContract.md#currentslot)
- [internal](TokenContract.md#internal)
- [network](TokenContract.md#network)
- [self](TokenContract.md#self)

### Methods

- [approve](TokenContract.md#approve)
- [approveAccountUpdate](TokenContract.md#approveaccountupdate)
- [approveAccountUpdates](TokenContract.md#approveaccountupdates)
- [approveBase](TokenContract.md#approvebase)
- [checkZeroBalanceChange](TokenContract.md#checkzerobalancechange)
- [deploy](TokenContract.md#deploy)
- [deriveTokenId](TokenContract.md#derivetokenid)
- [emitEvent](TokenContract.md#emitevent)
- [fetchEvents](TokenContract.md#fetchevents)
- [forEachUpdate](TokenContract.md#foreachupdate)
- [init](TokenContract.md#init)
- [newSelf](TokenContract.md#newself)
- [requireSignature](TokenContract.md#requiresignature)
- [send](TokenContract.md#send)
- [skipAuthorization](TokenContract.md#skipauthorization)
- [transfer](TokenContract.md#transfer)
- [Proof](TokenContract.md#proof)
- [analyzeMethods](TokenContract.md#analyzemethods)
- [compile](TokenContract.md#compile)
- [digest](TokenContract.md#digest)
- [runOutsideCircuit](TokenContract.md#runoutsidecircuit)

## Constructors

### constructor

• **new TokenContract**(`address`, `tokenId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](Types.PublicKey.md) |
| `tokenId?` | `Field` |

#### Inherited from

[SmartContract](SmartContract.md).[constructor](SmartContract.md#constructor)

#### Defined in

[lib/mina/zkapp.ts:608](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L608)

## Properties

### #\_senderState

• `Private` **#\_senderState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sender` | [`PublicKey`](Types.PublicKey.md) |
| `transactionId` | `number` |

#### Inherited from

[SmartContract](SmartContract.md).[#_senderState](SmartContract.md##_senderstate)

#### Defined in

[lib/mina/zkapp.ts:849](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L849)

___

### #executionState

• `Private` **#executionState**: `undefined` \| `ExecutionState`

#### Inherited from

[SmartContract](SmartContract.md).[#executionState](SmartContract.md##executionstate)

#### Defined in

[lib/mina/zkapp.ts:576](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L576)

___

### address

• **address**: [`PublicKey`](Types.PublicKey.md)

#### Inherited from

[SmartContract](SmartContract.md).[address](SmartContract.md#address)

#### Defined in

[lib/mina/zkapp.ts:573](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L573)

___

### events

• **events**: `Object` = `{}`

A list of event types that can be emitted using this.emitEvent()`.

#### Index signature

▪ [key: `string`]: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Inherited from

[SmartContract](SmartContract.md).[events](SmartContract.md#events)

#### Defined in

[lib/mina/zkapp.ts:948](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L948)

___

### sender

• **sender**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `self` | [`SmartContract`](SmartContract.md) |
| `getAndRequireSignature` | () => [`PublicKey`](Types.PublicKey.md) |
| `getUnconstrained` | () => [`PublicKey`](Types.PublicKey.md) |

#### Inherited from

[SmartContract](SmartContract.md).[sender](SmartContract.md#sender)

#### Defined in

[lib/mina/zkapp.ts:851](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L851)

___

### tokenId

• **tokenId**: `Field`

#### Inherited from

[SmartContract](SmartContract.md).[tokenId](SmartContract.md#tokenid)

#### Defined in

[lib/mina/zkapp.ts:574](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L574)

___

### \_maxProofsVerified

▪ `Static` `Optional` **\_maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[SmartContract](SmartContract.md).[_maxProofsVerified](SmartContract.md#_maxproofsverified)

#### Defined in

[lib/mina/zkapp.ts:593](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L593)

___

### \_methodMetadata

▪ `Static` `Optional` **\_methodMetadata**: `Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `rows`: `number`  }\>

#### Inherited from

[SmartContract](SmartContract.md).[_methodMetadata](SmartContract.md#_methodmetadata)

#### Defined in

[lib/mina/zkapp.ts:583](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L583)

___

### \_methods

▪ `Static` `Optional` **\_methods**: `MethodInterface`[]

#### Inherited from

[SmartContract](SmartContract.md).[_methods](SmartContract.md#_methods)

#### Defined in

[lib/mina/zkapp.ts:582](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L582)

___

### \_provers

▪ `Static` `Optional` **\_provers**: [`Prover`](../modules/Pickles.md#prover)[]

#### Inherited from

[SmartContract](SmartContract.md).[_provers](SmartContract.md#_provers)

#### Defined in

[lib/mina/zkapp.ts:592](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L592)

___

### \_verificationKey

▪ `Static` `Optional` **\_verificationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | `Field` |

#### Inherited from

[SmartContract](SmartContract.md).[_verificationKey](SmartContract.md#_verificationkey)

#### Defined in

[lib/mina/zkapp.ts:594](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L594)

## Accessors

### account

• `get` **account**(): `Account`

Current account of the [SmartContract](SmartContract.md).

#### Returns

`Account`

#### Inherited from

SmartContract.account

#### Defined in

[lib/mina/zkapp.ts:889](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L889)

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

#### Inherited from

SmartContract.balance

#### Defined in

[lib/mina/zkapp.ts:942](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L942)

___

### currentSlot

• `get` **currentSlot**(): `CurrentSlot`

Current global slot on the network. This is the slot at which this transaction is included in a block. Since we cannot know this value
at the time of transaction construction, this only has the `assertBetween()` method but no `get()` (impossible to implement)
or `assertEquals()` (confusing, because the developer can't know the exact slot at which this will be included either)

#### Returns

`CurrentSlot`

#### Inherited from

SmartContract.currentSlot

#### Defined in

[lib/mina/zkapp.ts:903](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L903)

___

### internal

• `get` **internal**(): `Object`

Helper methods to use from within a token contract.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `burn` | (`__namedParameters`: \{ `address`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `mint` | (`__namedParameters`: \{ `address`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `send` | (`__namedParameters`: \{ `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md) ; `from`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `to`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md)  }) => [`AccountUpdate`](AccountUpdate.md) |

#### Defined in

[lib/mina/token/token-contract.ts:76](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L76)

___

### network

• `get` **network**(): `Network`

Current network state of the [SmartContract](SmartContract.md).

#### Returns

`Network`

#### Inherited from

SmartContract.network

#### Defined in

[lib/mina/zkapp.ts:895](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L895)

___

### self

• `get` **self**(): [`AccountUpdate`](AccountUpdate.md)

Returns the current [AccountUpdate](AccountUpdate.md) associated to this [SmartContract](SmartContract.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

SmartContract.self

#### Defined in

[lib/mina/zkapp.ts:806](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L806)

## Methods

### approve

▸ **approve**(`update`): `void`

Approve an account update or tree / forest of updates. Doing this means you include the account update in the zkApp's public input,
which allows you to read and use its content in a proof, make assertions about it, and modify it.

```ts
`@method` myApprovingMethod(update: AccountUpdate) {
  this.approve(update);

  // read balance on the account (for example)
  let balance = update.account.balance.getAndRequireEquals();
}
```

Under the hood, "approving" just means that the account update is made a child of the zkApp in the
tree of account updates that forms the transaction. Similarly, if you pass in an [AccountUpdateTree](AccountUpdateTree.md),
the entire tree will become a subtree of the zkApp's account update.

Passing in a forest is a bit different, because it means you set the entire children of the zkApp's account update
at once. `approve()` will fail if the zkApp's account update already has children, to prevent you from accidentally
excluding important information from the public input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) \| [`AccountUpdateForest`](AccountUpdateForest.md) |

#### Returns

`void`

#### Inherited from

[SmartContract](SmartContract.md).[approve](SmartContract.md#approve)

#### Defined in

[lib/mina/zkapp.ts:928](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L928)

___

### approveAccountUpdate

▸ **approveAccountUpdate**(`accountUpdate`): `Promise`\<`void`\>

Approve a single account update (with arbitrarily many children).

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina/token/token-contract.ts:137](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L137)

___

### approveAccountUpdates

▸ **approveAccountUpdates**(`accountUpdates`): `Promise`\<`void`\>

Approve a list of account updates (with arbitrarily many children).

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdates` | ([`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md))[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina/token/token-contract.ts:145](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L145)

___

### approveBase

▸ `Abstract` **approveBase**(`forest`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `forest` | [`AccountUpdateForest`](AccountUpdateForest.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina/token/token-contract.ts:83](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L83)

___

### checkZeroBalanceChange

▸ **checkZeroBalanceChange**(`updates`): `void`

Use `forEachUpdate()` to prove that the total balance change of child account updates is zero.

This is provided out of the box as it is both a good example, and probably the most common implementation, of `approveBase()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | [`AccountUpdateForest`](AccountUpdateForest.md) |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:121](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L121)

___

### deploy

▸ **deploy**(`args?`): `Promise`\<`void`\>

Deploys a [TokenContract](TokenContract.md).

In addition to base smart contract deployment, this adds two steps:
- set the `access` permission to `proofOrSignature()`, to prevent against unauthorized token operations
  - not doing this would imply that anyone can bypass token contract authorization and simply mint themselves tokens
- require the zkapp account to be new, using the `isNew` precondition.
  this guarantees that the access permission is set from the very start of the existence of this account.
  creating the zkapp account before deployment would otherwise be a security vulnerability that is too easy to introduce.

Note that because of the `isNew` precondition, the zkapp account must not be created prior to calling `deploy()`.

If the contract needs to be re-deployed, you can switch off this behaviour by overriding the `isNew` precondition:
```ts
async deploy() {
  await super.deploy();
  // DON'T DO THIS ON THE INITIAL DEPLOYMENT!
  this.account.isNew.requireNothing();
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`DeployArgs`](../modules.md#deployargs) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[SmartContract](SmartContract.md).[deploy](SmartContract.md#deploy)

#### Defined in

[lib/mina/token/token-contract.ts:51](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L51)

___

### deriveTokenId

▸ **deriveTokenId**(): `Field`

Returns the `tokenId` of the token managed by this contract.

#### Returns

`Field`

#### Defined in

[lib/mina/token/token-contract.ts:69](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L69)

___

### emitEvent

▸ **emitEvent**\<`K`\>(`type`, `event`): `void`

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

#### Inherited from

[SmartContract](SmartContract.md).[emitEvent](SmartContract.md#emitevent)

#### Defined in

[lib/mina/zkapp.ts:954](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L954)

___

### fetchEvents

▸ **fetchEvents**(`start?`, `end?`): `Promise`\<\{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: \{ `data`: [`ProvablePure`](../modules.md#provablepure)\<`any`\> ; `transactionInfo`: \{ `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

Asynchronously fetches events emitted by this [SmartContract](SmartContract.md) and returns an array of events with their corresponding types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | [`UInt32`](UInt32.md) | The start height of the events to fetch. |
| `end?` | [`UInt32`](UInt32.md) | The end height of the events to fetch. If not provided, fetches events up to the latest height. |

#### Returns

`Promise`\<\{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: \{ `data`: [`ProvablePure`](../modules.md#provablepure)\<`any`\> ; `transactionInfo`: \{ `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

A promise that resolves to an array of objects, each containing the event type and event data for the specified range.

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

#### Inherited from

[SmartContract](SmartContract.md).[fetchEvents](SmartContract.md#fetchevents)

#### Defined in

[lib/mina/zkapp.ts:1000](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1000)

___

### forEachUpdate

▸ **forEachUpdate**(`updates`, `callback`): `void`

Iterate through the account updates in `updates` and apply `callback` to each.

This method is provable and is suitable as a base for implementing `approveUpdates()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | [`AccountUpdateForest`](AccountUpdateForest.md) |
| `callback` | (`update`: [`AccountUpdate`](AccountUpdate.md), `usesToken`: `Bool`) => `void` |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:90](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L90)

___

### init

▸ **init**(): `void`

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

#### Returns

`void`

#### Inherited from

[SmartContract](SmartContract.md).[init](SmartContract.md#init)

#### Defined in

[lib/mina/zkapp.ts:766](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L766)

___

### newSelf

▸ **newSelf**(`methodName?`): [`AccountUpdate`](AccountUpdate.md)

Same as `SmartContract.self` but explicitly creates a new [AccountUpdate](AccountUpdate.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName?` | `string` |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

[SmartContract](SmartContract.md).[newSelf](SmartContract.md#newself)

#### Defined in

[lib/mina/zkapp.ts:841](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L841)

___

### requireSignature

▸ **requireSignature**(): `void`

Use this command if the account update created by this SmartContract should be signed by the account owner,
instead of authorized with a proof.

Note that the smart contract's [Permissions](../modules.md#permissions) determine which updates have to be (can be) authorized by a signature.

If you only want to avoid creating proofs for quicker testing, we advise you to
use `LocalBlockchain({ proofsEnabled: false })` instead of `requireSignature()`. Setting
`proofsEnabled` to `false` allows you to test your transactions with the same authorization flow as in production,
with the only difference being that quick mock proofs are filled in instead of real proofs.

#### Returns

`void`

#### Inherited from

[SmartContract](SmartContract.md).[requireSignature](SmartContract.md#requiresignature)

#### Defined in

[lib/mina/zkapp.ts:787](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L787)

___

### send

▸ **send**(`args`): [`AccountUpdate`](AccountUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |
| `args.to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) |

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

[SmartContract](SmartContract.md).[send](SmartContract.md#send)

#### Defined in

[lib/mina/zkapp.ts:932](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L932)

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

#### Inherited from

[SmartContract](SmartContract.md).[skipAuthorization](SmartContract.md#skipauthorization)

#### Defined in

[lib/mina/zkapp.ts:799](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L799)

___

### transfer

▸ **transfer**(`from`, `to`, `amount`): `Promise`\<`void`\>

Transfer `amount` of tokens from `from` to `to`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |
| `to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |
| `amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina/token/token-contract.ts:157](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/token/token-contract.ts#L157)

___

### Proof

▸ `Static` **Proof**(): typeof `__class`

Returns a Proof type that belongs to this [SmartContract](SmartContract.md).

#### Returns

typeof `__class`

#### Inherited from

[SmartContract](SmartContract.md).[Proof](SmartContract.md#proof)

#### Defined in

[lib/mina/zkapp.ts:599](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L599)

___

### analyzeMethods

▸ `Static` **analyzeMethods**(`«destructured»?`): `Promise`\<`Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `rows`: `number`  }\>\>

This function is run internally before compiling a smart contract, to collect metadata about what each of your
smart contract methods does.

For external usage, this function can be handy because calling it involves running all methods in the same "mode" as `compile()` does,
so it serves as a quick-to-run check for whether your contract can be compiled without errors, which can greatly speed up iterating.

`analyzeMethods()` will also return the number of `rows` of each of your method circuits (i.e., the number of constraints in the underlying proof system),
which is a good indicator for circuit size and the time it will take to create proofs.
To inspect the created circuit in detail, you can look at the returned `gates`.

Note: If this function was already called before, it will short-circuit and just return the metadata collected the first time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `printSummary` | `undefined` \| `boolean` |

#### Returns

`Promise`\<`Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `rows`: `number`  }\>\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `actions` the number of actions the method dispatches
 - `gates` the constraint system, represented as an array of gates

#### Inherited from

[SmartContract](SmartContract.md).[analyzeMethods](SmartContract.md#analyzemethods)

#### Defined in

[lib/mina/zkapp.ts:1119](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1119)

___

### compile

▸ `Static` **compile**(`«destructured»?`): `Promise`\<\{ `provers`: [`Prover`](../modules/Pickles.md#prover)[] ; `verificationKey`: \{ `data`: `string` ; `hash`: `Field`  } ; `verify`: (`statement`: [`Statement`](../modules/Pickles.md#statement)\<`FieldConst`\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  }\>

Compile your smart contract.

This generates both the prover functions, needed to create proofs for running `@method`s,
and the verification key, needed to deploy your zkApp.

Although provers and verification key are returned by this method, they are also cached internally and used when needed,
so you don't actually have to use the return value of this function.

Under the hood, "compiling" means calling into the lower-level [Pickles and Kimchi libraries](https://o1-labs.github.io/proof-systems/kimchi/overview.html) to
create multiple prover & verifier indices (one for each smart contract method as part of a "step circuit" and one for the "wrap circuit" which recursively wraps
it so that proofs end up in the original finite field). These are fairly expensive operations, so **expect compiling to take at least 20 seconds**,
up to several minutes if your circuit is large or your hardware is not optimal for these operations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cache` | `undefined` \| [`Cache`](../modules.md#cache-1) |
| › `forceRecompile` | `undefined` \| `boolean` |

#### Returns

`Promise`\<\{ `provers`: [`Prover`](../modules/Pickles.md#prover)[] ; `verificationKey`: \{ `data`: `string` ; `hash`: `Field`  } ; `verify`: (`statement`: [`Statement`](../modules/Pickles.md#statement)\<`FieldConst`\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  }\>

#### Inherited from

[SmartContract](SmartContract.md).[compile](SmartContract.md#compile)

#### Defined in

[lib/mina/zkapp.ts:636](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L636)

___

### digest

▸ `Static` **digest**(): `Promise`\<`string`\>

Computes a hash of your smart contract, which will reliably change _whenever one of your method circuits changes_.
This digest is quick to compute. it is designed to help with deciding whether a contract should be re-compiled or
a cached verification key can be used.

#### Returns

`Promise`\<`string`\>

the digest, as a hex string

#### Inherited from

[SmartContract](SmartContract.md).[digest](SmartContract.md#digest)

#### Defined in

[lib/mina/zkapp.ts:677](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L677)

___

### runOutsideCircuit

▸ `Static` **runOutsideCircuit**(`run`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | () => `void` |

#### Returns

`void`

#### Inherited from

[SmartContract](SmartContract.md).[runOutsideCircuit](SmartContract.md#runoutsidecircuit)

#### Defined in

[lib/mina/zkapp.ts:1094](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L1094)
