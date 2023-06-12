[SnarkyJS](../README.md) / [Exports](../modules.md) / Body

# Interface: Body

The body of describing how some [[ AccountUpdate ]] should change.

## Hierarchy

- `AccountUpdateBody`

  ↳ **`Body`**

## Table of contents

### Properties

- [actions](Body.md#actions)
- [authorizationKind](Body.md#authorizationkind)
- [balanceChange](Body.md#balancechange)
- [callData](Body.md#calldata)
- [callDepth](Body.md#calldepth)
- [events](Body.md#events)
- [implicitAccountCreationFee](Body.md#implicitaccountcreationfee)
- [incrementNonce](Body.md#incrementnonce)
- [mayUseToken](Body.md#mayusetoken)
- [preconditions](Body.md#preconditions)
- [publicKey](Body.md#publickey)
- [tokenId](Body.md#tokenid)
- [update](Body.md#update)
- [useFullCommitment](Body.md#usefullcommitment)

## Properties

### actions

• **actions**: `Events`

Recent Actions emitted from this account.
Actions can be collected by archive nodes and used in combination with
a [Reducer](../modules.md#reducer).

[Check out our documentation about
Actions!](https://docs.minaprotocol.com/zkapps/advanced-snarkyjs/actions-and-reducer)

#### Overrides

AccountUpdateBody.actions

#### Defined in

[lib/account_update.ts:400](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L400)

___

### authorizationKind

• **authorizationKind**: `Object`

Defines the type of authorization that is needed for this [AccountUpdate](../classes/AccountUpdate.md).

A authorization can be one of three types: None, Proof or Signature

#### Overrides

AccountUpdateBody.authorizationKind

#### Defined in

[lib/account_update.ts:434](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L434)

___

### balanceChange

• **balanceChange**: `Object`

By what [Int64](../classes/Int64.md) should the balance of this account change. All
balanceChanges must balance by the end of smart contract execution.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `magnitude` | [`UInt64`](../classes/UInt64.md) |
| `sgn` | [`Sign`](../classes/Sign.md) |

#### Overrides

AccountUpdateBody.balanceChange

#### Defined in

[lib/account_update.ts:382](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L382)

___

### callData

• **callData**: [`Field`](../classes/Field.md)

#### Overrides

AccountUpdateBody.callData

#### Defined in

[lib/account_update.ts:405](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L405)

___

### callDepth

• **callDepth**: `number`

#### Overrides

AccountUpdateBody.callDepth

#### Defined in

[lib/account_update.ts:406](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L406)

___

### events

• **events**: `Events`

Recent events that have been emitted from this account.
Events can be collected by archive nodes.

[Check out our documentation about
Events!](https://docs.minaprotocol.com/zkapps/advanced-snarkyjs/events)

#### Overrides

AccountUpdateBody.events

#### Defined in

[lib/account_update.ts:391](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L391)

___

### implicitAccountCreationFee

• **implicitAccountCreationFee**: [`Bool`](../classes/Bool.md)

Defines if the fee for creating this account should be paid out of this
account's balance change.

This must only be true if the balance change is larger than the account
creation fee and the token ID is the default.

#### Overrides

AccountUpdateBody.implicitAccountCreationFee

#### Defined in

[lib/account_update.ts:423](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L423)

___

### incrementNonce

• **incrementNonce**: [`Bool`](../classes/Bool.md)

Defines if the nonce should be incremented with this [AccountUpdate](../classes/AccountUpdate.md).

#### Overrides

AccountUpdateBody.incrementNonce

#### Defined in

[lib/account_update.ts:427](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L427)

___

### mayUseToken

• **mayUseToken**: `Object`

The type of call.

#### Overrides

AccountUpdateBody.mayUseToken

#### Defined in

[lib/account_update.ts:404](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L404)

___

### preconditions

• **preconditions**: `Object`

A list of [Preconditions](../modules.md#preconditions-1) that need to be fulfilled in order for
the [AccountUpdate](../classes/AccountUpdate.md) to be valid.

#### Overrides

AccountUpdateBody.preconditions

#### Defined in

[lib/account_update.ts:411](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L411)

___

### publicKey

• **publicKey**: [`PublicKey`](../classes/PublicKey.md)

The address for this body.

#### Overrides

AccountUpdateBody.publicKey

#### Defined in

[lib/account_update.ts:365](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L365)

___

### tokenId

• **tokenId**: [`Field`](../classes/Field.md)

The TokenId for this account.

#### Overrides

AccountUpdateBody.tokenId

#### Defined in

[lib/account_update.ts:376](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L376)

___

### update

• **update**: `Object`

Specify Updates to tweakable pieces of the account record backing
this address in the ledger.

#### Overrides

AccountUpdateBody.update

#### Defined in

[lib/account_update.ts:371](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L371)

___

### useFullCommitment

• **useFullCommitment**: [`Bool`](../classes/Bool.md)

Defines if a full commitment is required for this transaction.

#### Overrides

AccountUpdateBody.useFullCommitment

#### Defined in

[lib/account_update.ts:415](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L415)
