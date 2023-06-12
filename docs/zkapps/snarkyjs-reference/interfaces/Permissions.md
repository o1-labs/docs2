[SnarkyJS](../README.md) / [Exports](../modules.md) / Permissions

# Interface: Permissions

Permissions specify how specific aspects of the zkapp account are allowed
to be modified. All fields are denominated by a [Permission](../modules.md#permission-1).

## Hierarchy

- `Permissions_`

  ↳ **`Permissions`**

## Table of contents

### Properties

- [access](Permissions.md#access)
- [editActionState](Permissions.md#editactionstate)
- [editState](Permissions.md#editstate)
- [incrementNonce](Permissions.md#incrementnonce)
- [receive](Permissions.md#receive)
- [send](Permissions.md#send)
- [setDelegate](Permissions.md#setdelegate)
- [setPermissions](Permissions.md#setpermissions)
- [setTiming](Permissions.md#settiming)
- [setTokenSymbol](Permissions.md#settokensymbol)
- [setVerificationKey](Permissions.md#setverificationkey)
- [setVotingFor](Permissions.md#setvotingfor)
- [setZkappUri](Permissions.md#setzkappuri)

## Properties

### access

• **access**: `AuthRequired`

Permission to control the ability to include _any_ account update for this
account in a transaction. Note that this is more restrictive than all other
permissions combined. For normal accounts it can safely be set to `none`,
but for token contracts this has to be more restrictive, to prevent
unauthorized token interactions -- for example, it could be
`proofOrSignature`.

#### Overrides

Permissions\_.access

#### Defined in

[lib/account_update.ts:233](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L233)

___

### editActionState

• **editActionState**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to emit actions to the account.

#### Overrides

Permissions\_.editActionState

#### Defined in

[lib/account_update.ts:212](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L212)

___

### editState

• **editState**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the 8 state fields associated with
an account.

#### Overrides

Permissions\_.editState

#### Defined in

[lib/account_update.ts:168](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L168)

___

### incrementNonce

• **incrementNonce**: `AuthRequired`

#### Overrides

Permissions\_.incrementNonce

#### Defined in

[lib/account_update.ts:221](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L221)

___

### receive

• **receive**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to receive transactions
to this account.

#### Overrides

Permissions\_.receive

#### Defined in

[lib/account_update.ts:180](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L180)

___

### send

• **send**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to send transactions
from this account.

#### Overrides

Permissions\_.send

#### Defined in

[lib/account_update.ts:174](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L174)

___

### setDelegate

• **setDelegate**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to set the delegate
field of the account.

#### Overrides

Permissions\_.setDelegate

#### Defined in

[lib/account_update.ts:186](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L186)

___

### setPermissions

• **setPermissions**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to set the permissions
field of the account.

#### Overrides

Permissions\_.setPermissions

#### Defined in

[lib/account_update.ts:192](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L192)

___

### setTiming

• **setTiming**: `AuthRequired`

#### Overrides

Permissions\_.setTiming

#### Defined in

[lib/account_update.ts:223](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L223)

___

### setTokenSymbol

• **setTokenSymbol**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to set the token symbol
for this account.

#### Overrides

Permissions\_.setTokenSymbol

#### Defined in

[lib/account_update.ts:218](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L218)

___

### setVerificationKey

• **setVerificationKey**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to set the verification
key associated with the circuit tied to this account. Effectively
"upgradeability" of the smart contract.

#### Overrides

Permissions\_.setVerificationKey

#### Defined in

[lib/account_update.ts:199](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L199)

___

### setVotingFor

• **setVotingFor**: `AuthRequired`

#### Overrides

Permissions\_.setVotingFor

#### Defined in

[lib/account_update.ts:222](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L222)

___

### setZkappUri

• **setZkappUri**: `AuthRequired`

The [Permission](../modules.md#permission-1) corresponding to the ability to set the zkapp uri
typically pointing to the source code of the smart contract. Usually this
should be changed whenever the [setVerificationKey](Permissions.md#setverificationkey) is
changed. Effectively "upgradeability" of the smart contract.

#### Overrides

Permissions\_.setZkappUri

#### Defined in

[lib/account_update.ts:207](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/account_update.ts#L207)
