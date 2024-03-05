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
- [sender](TokenContract.md#sender)
- [token](TokenContract.md#token)
- [tokenSymbol](TokenContract.md#tokensymbol)

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
- [setPermissions](TokenContract.md#setpermissions)
- [setValue](TokenContract.md#setvalue)
- [sign](TokenContract.md#sign)
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
| `tokenId?` | [`Field`](Field.md) |

#### Inherited from

[SmartContract](SmartContract.md).[constructor](SmartContract.md#constructor)

#### Defined in

[lib/zkapp.ts:574](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L574)

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

[lib/zkapp.ts:822](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L822)

___

### #executionState

• `Private` **#executionState**: `undefined` \| `ExecutionState`

#### Inherited from

[SmartContract](SmartContract.md).[#executionState](SmartContract.md##executionstate)

#### Defined in

[lib/zkapp.ts:541](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L541)

___

### address

• **address**: [`PublicKey`](Types.PublicKey.md)

#### Inherited from

[SmartContract](SmartContract.md).[address](SmartContract.md#address)

#### Defined in

[lib/zkapp.ts:538](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L538)

___

### events

• **events**: `Object` = `{}`

A list of event types that can be emitted using this.emitEvent()`.

#### Index signature

▪ [key: `string`]: [`FlexibleProvablePure`](../modules.md#flexibleprovablepure)\<`any`\>

#### Inherited from

[SmartContract](SmartContract.md).[events](SmartContract.md#events)

#### Defined in

[lib/zkapp.ts:928](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L928)

___

### tokenId

• **tokenId**: [`Field`](Field.md)

#### Inherited from

[SmartContract](SmartContract.md).[tokenId](SmartContract.md#tokenid)

#### Defined in

[lib/zkapp.ts:539](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L539)

___

### \_maxProofsVerified

▪ `Static` `Optional` **\_maxProofsVerified**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[SmartContract](SmartContract.md).[_maxProofsVerified](SmartContract.md#_maxproofsverified)

#### Defined in

[lib/zkapp.ts:559](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L559)

___

### \_methodMetadata

▪ `Static` `Optional` **\_methodMetadata**: `Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\>

#### Inherited from

[SmartContract](SmartContract.md).[_methodMetadata](SmartContract.md#_methodmetadata)

#### Defined in

[lib/zkapp.ts:548](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L548)

___

### \_methods

▪ `Static` `Optional` **\_methods**: `MethodInterface`[]

#### Inherited from

[SmartContract](SmartContract.md).[_methods](SmartContract.md#_methods)

#### Defined in

[lib/zkapp.ts:547](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L547)

___

### \_provers

▪ `Static` `Optional` **\_provers**: [`Prover`](../modules/Pickles.md#prover)[]

#### Inherited from

[SmartContract](SmartContract.md).[_provers](SmartContract.md#_provers)

#### Defined in

[lib/zkapp.ts:558](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L558)

___

### \_verificationKey

▪ `Static` `Optional` **\_verificationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `hash` | [`Field`](Field.md) |

#### Inherited from

[SmartContract](SmartContract.md).[_verificationKey](SmartContract.md#_verificationkey)

#### Defined in

[lib/zkapp.ts:560](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L560)

## Accessors

### account

• `get` **account**(): `Account`

Current account of the [SmartContract](SmartContract.md).

#### Returns

`Account`

#### Inherited from

SmartContract.account

#### Defined in

[lib/zkapp.ts:853](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L853)

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

[lib/zkapp.ts:922](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L922)

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

[lib/zkapp.ts:867](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L867)

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

[lib/mina/token/token-contract.ts:76](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L76)

___

### network

• `get` **network**(): `Network`

Current network state of the [SmartContract](SmartContract.md).

#### Returns

`Network`

#### Inherited from

SmartContract.network

#### Defined in

[lib/zkapp.ts:859](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L859)

___

### self

• `get` **self**(): [`AccountUpdate`](AccountUpdate.md)

Returns the current [AccountUpdate](AccountUpdate.md) associated to this [SmartContract](SmartContract.md).

#### Returns

[`AccountUpdate`](AccountUpdate.md)

#### Inherited from

SmartContract.self

#### Defined in

[lib/zkapp.ts:779](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L779)

___

### sender

• `get` **sender**(): [`PublicKey`](Types.PublicKey.md)

The public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

**Warning**: The fact that this public key equals the current sender is not part of the proof.
A malicious prover could use any other public key without affecting the validity of the proof.

#### Returns

[`PublicKey`](Types.PublicKey.md)

#### Inherited from

SmartContract.sender

#### Defined in

[lib/zkapp.ts:832](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L832)

___

### token

• `get` **token**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | [`Field`](Field.md) |
| `parentTokenId` | [`Field`](Field.md) |
| `tokenOwner` | [`PublicKey`](Types.PublicKey.md) |
| `burn` | (`__namedParameters`: \{ `address`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `mint` | (`__namedParameters`: \{ `address`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md)  }) => [`AccountUpdate`](AccountUpdate.md) |
| `send` | (`__namedParameters`: \{ `amount`: `number` \| `bigint` \| [`UInt64`](UInt64.md) ; `from`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md) ; `to`: [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) \| [`SmartContract`](SmartContract.md)  }) => [`AccountUpdate`](AccountUpdate.md) |

**`Deprecated`**

`SmartContract.token` will be removed, and token methods will only be available on `TokenContract.internal`.
Instead of `SmartContract.token.id`, use `TokenContract.deriveTokenId()`.

For security reasons, it is recommended to use [TokenContract](TokenContract.md) as the base contract for all tokens.

#### Inherited from

SmartContract.token

#### Defined in

[lib/zkapp.ts:877](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L877)

___

### tokenSymbol

• `get` **tokenSymbol**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `set` | (`tokenSymbol`: `string`) => `void` |

**`Deprecated`**

use `this.account.tokenSymbol`

#### Inherited from

SmartContract.tokenSymbol

#### Defined in

[lib/zkapp.ts:916](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L916)

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

[lib/zkapp.ts:902](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L902)

___

### approveAccountUpdate

▸ **approveAccountUpdate**(`accountUpdate`): `void`

Approve a single account update (with arbitrarily many children).

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md) |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:137](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L137)

___

### approveAccountUpdates

▸ **approveAccountUpdates**(`accountUpdates`): `void`

Approve a list of account updates (with arbitrarily many children).

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountUpdates` | ([`AccountUpdate`](AccountUpdate.md) \| [`AccountUpdateTree`](AccountUpdateTree.md))[] |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:145](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L145)

___

### approveBase

▸ `Abstract` **approveBase**(`forest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forest` | [`AccountUpdateForest`](AccountUpdateForest.md) |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:83](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L83)

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

[lib/mina/token/token-contract.ts:121](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L121)

___

### deploy

▸ **deploy**(`args?`): `void`

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
deploy() {
  super.deploy();
  // DON'T DO THIS ON THE INITIAL DEPLOYMENT!
  this.account.isNew.requireNothing();
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`DeployArgs`](../modules.md#deployargs) |

#### Returns

`void`

#### Overrides

[SmartContract](SmartContract.md).[deploy](SmartContract.md#deploy)

#### Defined in

[lib/mina/token/token-contract.ts:51](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L51)

___

### deriveTokenId

▸ **deriveTokenId**(): [`Field`](Field.md)

Returns the `tokenId` of the token managed by this contract.

#### Returns

[`Field`](Field.md)

#### Defined in

[lib/mina/token/token-contract.ts:69](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L69)

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

[lib/zkapp.ts:934](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L934)

___

### fetchEvents

▸ **fetchEvents**(`start?`, `end?`): `Promise`\<\{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: \{ `data`: [`ProvablePure`](../interfaces/ProvablePure.md)\<`any`\> ; `transactionInfo`: \{ `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

Asynchronously fetches events emitted by this [SmartContract](SmartContract.md) and returns an array of events with their corresponding types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | [`UInt32`](UInt32.md) | The start height of the events to fetch. |
| `end?` | [`UInt32`](UInt32.md) | The end height of the events to fetch. If not provided, fetches events up to the latest height. |

#### Returns

`Promise`\<\{ `blockHash`: `string` ; `blockHeight`: [`UInt32`](UInt32.md) ; `chainStatus`: `string` ; `event`: \{ `data`: [`ProvablePure`](../interfaces/ProvablePure.md)\<`any`\> ; `transactionInfo`: \{ `transactionHash`: `string` ; `transactionMemo`: `string` ; `transactionStatus`: `string`  }  } ; `globalSlot`: [`UInt32`](UInt32.md) ; `parentBlockHash`: `string` ; `type`: `string`  }[]\>

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

[lib/zkapp.ts:980](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L980)

___

### forEachUpdate

▸ **forEachUpdate**(`updates`, `callback`): `void`

Iterate through the account updates in `updates` and apply `callback` to each.

This method is provable and is suitable as a base for implementing `approveUpdates()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `updates` | [`AccountUpdateForest`](AccountUpdateForest.md) |
| `callback` | (`update`: [`AccountUpdate`](AccountUpdate.md), `usesToken`: [`Bool`](Bool.md)) => `void` |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:90](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L90)

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

[lib/zkapp.ts:734](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L734)

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

[lib/zkapp.ts:814](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L814)

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

[lib/zkapp.ts:755](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L755)

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

[lib/zkapp.ts:906](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L906)

___

### setPermissions

▸ **setPermissions**(`permissions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](../modules.md#permissions) |

#### Returns

`void`

**`Deprecated`**

use `this.account.permissions.set()`

#### Inherited from

[SmartContract](SmartContract.md).[setPermissions](SmartContract.md#setpermissions)

#### Defined in

[lib/zkapp.ts:1161](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1161)

___

### setValue

▸ **setValue**\<`T`\>(`maybeValue`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeValue` | `SetOrKeep`\<`T`\> |
| `value` | `T` |

#### Returns

`void`

**`Deprecated`**

use `this.account.<field>.set()`

#### Inherited from

[SmartContract](SmartContract.md).[setValue](SmartContract.md#setvalue)

#### Defined in

[lib/zkapp.ts:1154](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1154)

___

### sign

▸ **sign**(`zkappKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zkappKey?` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`void`

**`Deprecated`**

`this.sign()` is deprecated in favor of `this.requireSignature()`

#### Inherited from

[SmartContract](SmartContract.md).[sign](SmartContract.md#sign)

#### Defined in

[lib/zkapp.ts:761](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L761)

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

[lib/zkapp.ts:772](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L772)

___

### transfer

▸ **transfer**(`from`, `to`, `amount`): `void`

Transfer `amount` of tokens from `from` to `to`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |
| `to` | [`PublicKey`](Types.PublicKey.md) \| [`AccountUpdate`](AccountUpdate.md) |
| `amount` | `number` \| `bigint` \| [`UInt64`](UInt64.md) |

#### Returns

`void`

#### Defined in

[lib/mina/token/token-contract.ts:155](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/mina/token/token-contract.ts#L155)

___

### Proof

▸ `Static` **Proof**(): typeof `__class`

Returns a Proof type that belongs to this [SmartContract](SmartContract.md).

#### Returns

typeof `__class`

#### Inherited from

[SmartContract](SmartContract.md).[Proof](SmartContract.md#proof)

#### Defined in

[lib/zkapp.ts:565](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L565)

___

### analyzeMethods

▸ `Static` **analyzeMethods**(`«destructured»?`): `Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\>

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

`Record`\<`string`, \{ `actions`: `number` ; `digest`: `string` ; `gates`: [`Gate`](../modules.md#gate)[] ; `hasReturn`: `boolean` ; `rows`: `number`  }\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `hasReturn` a boolean indicating whether the method returns a value
 - `actions` the number of actions the method dispatches
 - `gates` the constraint system, represented as an array of gates

#### Inherited from

[SmartContract](SmartContract.md).[analyzeMethods](SmartContract.md#analyzemethods)

#### Defined in

[lib/zkapp.ts:1100](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1100)

___

### compile

▸ `Static` **compile**(`«destructured»?`): `Promise`\<\{ `provers`: [`Prover`](../modules/Pickles.md#prover)[] ; `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](Field.md)  } ; `verify`: (`statement`: [`Statement`](../modules/Pickles.md#statement)\<[`FieldConst`](../modules.md#fieldconst-1)\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  }\>

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

`Promise`\<\{ `provers`: [`Prover`](../modules/Pickles.md#prover)[] ; `verificationKey`: \{ `data`: `string` ; `hash`: [`Field`](Field.md)  } ; `verify`: (`statement`: [`Statement`](../modules/Pickles.md#statement)\<[`FieldConst`](../modules.md#fieldconst-1)\>, `proof`: `unknown`) => `Promise`\<`boolean`\>  }\>

#### Inherited from

[SmartContract](SmartContract.md).[compile](SmartContract.md#compile)

#### Defined in

[lib/zkapp.ts:602](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L602)

___

### digest

▸ `Static` **digest**(): `string`

Computes a hash of your smart contract, which will reliably change _whenever one of your method circuits changes_.
This digest is quick to compute. it is designed to help with deciding whether a contract should be re-compiled or
a cached verification key can be used.

#### Returns

`string`

the digest, as a hex string

#### Inherited from

[SmartContract](SmartContract.md).[digest](SmartContract.md#digest)

#### Defined in

[lib/zkapp.ts:643](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L643)

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

[lib/zkapp.ts:1074](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/zkapp.ts#L1074)
