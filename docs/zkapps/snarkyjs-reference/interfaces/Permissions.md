# Interface: Permissions

Permissions specify how specific aspects of the zkapp account are allowed to
be modified. All fields are denominated by a  Permission .

## Hierarchy

- `Permissions_`

  ↳ **`Permissions`**

## Table of contents

### Properties

- [editSequenceState](Permissions.md#editsequencestate)
- [editState](Permissions.md#editstate)
- [incrementNonce](Permissions.md#incrementnonce)
- [receive](Permissions.md#receive)
- [send](Permissions.md#send)
- [setDelegate](Permissions.md#setdelegate)
- [setPermissions](Permissions.md#setpermissions)
- [setTokenSymbol](Permissions.md#settokensymbol)
- [setVerificationKey](Permissions.md#setverificationkey)
- [setVotingFor](Permissions.md#setvotingfor)
- [setZkappUri](Permissions.md#setzkappuri)

## Properties

### editSequenceState

• **editSequenceState**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to change the sequence state
associated with the account.

TODO: Define sequence state here as well.

#### Overrides

Permissions\_.editSequenceState

#### Defined in

[lib/account_update.ts:213](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L213)

___

### editState

• **editState**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the 8 state fields associated with an
account.

#### Overrides

Permissions\_.editState

#### Defined in

[lib/account_update.ts:166](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L166)

___

### incrementNonce

• **incrementNonce**: [`AuthRequired`](../modules/Types.md#authrequired-1)

#### Overrides

Permissions\_.incrementNonce

#### Defined in

[lib/account_update.ts:222](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L222)

___

### receive

• **receive**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to receive transactions to this
account.

#### Overrides

Permissions\_.receive

#### Defined in

[lib/account_update.ts:178](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L178)

___

### send

• **send**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to send transactions from this
account.

#### Overrides

Permissions\_.send

#### Defined in

[lib/account_update.ts:172](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L172)

___

### setDelegate

• **setDelegate**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to set the delegate field of
the account.

#### Overrides

Permissions\_.setDelegate

#### Defined in

[lib/account_update.ts:184](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L184)

___

### setPermissions

• **setPermissions**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to set the permissions field of
the account.

#### Overrides

Permissions\_.setPermissions

#### Defined in

[lib/account_update.ts:190](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L190)

___

### setTokenSymbol

• **setTokenSymbol**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to set the token symbol for
this account.

#### Overrides

Permissions\_.setTokenSymbol

#### Defined in

[lib/account_update.ts:219](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L219)

___

### setVerificationKey

• **setVerificationKey**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to set the verification key
associated with the circuit tied to this account. Effectively
"upgradability" of the smart contract.

#### Overrides

Permissions\_.setVerificationKey

#### Defined in

[lib/account_update.ts:197](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L197)

___

### setVotingFor

• **setVotingFor**: [`AuthRequired`](../modules/Types.md#authrequired-1)

#### Overrides

Permissions\_.setVotingFor

#### Defined in

[lib/account_update.ts:223](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L223)

___

### setZkappUri

• **setZkappUri**: [`AuthRequired`](../modules/Types.md#authrequired-1)

The  Permission  corresponding to the ability to set the zkapp uri typically
pointing to the source code of the smart contract. Usually this should be
changed whenever the  Permissions.setVerificationKey  is changed.
Effectively "upgradability" of the smart contract.

#### Overrides

Permissions\_.setZkappUri

#### Defined in

[lib/account_update.ts:205](https://github.com/o1-labs/snarkyjs/blob/4b46575/src/lib/account_update.ts#L205)
