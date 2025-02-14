---
title: Interacting With Mina
hide_title: true
description: How to create zero knowledge proofs and how users can call zkApp methods. An account update can have proof, signature, or none authorizations.
keywords:
  - smart contracts
  - zkapps
  - zkapp methods
  - zero knowledge proofs
  - zk proof
  - zk
  - o1js
  - blockchain
  - transaction
  - mina
  - data structure
  - account updates
  - on-chain account
  - authorization types
---

# Interacting With Mina

Now that you know about writing zkApp methods, it's time to learn how users can call these methods.

## Transactions

Recall that smart contracts execute off-chain. The result of an off-chain execution is a _transaction_ that can be sent to the Mina network to apply the changes made by the smart contract.

In this section, you learn what a transaction looks like and how to create one.

## Account updates

The fundamental data structure that Mina transactions are built from is called an _account update_. An account update always contains updates to one specific on-chain account.

For example, if you transfer MINA from one account to another, the balance on two accounts is updated – the sender and the receiver. Therefore, sending MINA requires two account updates.

Account updates are a flexible and powerful data structure that can express all kinds of updates, events, and preconditions you use to develop smart contracts.

## Transaction structure

A _transaction_ is a JSON object of the form:

```ts
{ feePayer, accountUpdates: [...], memo }
```

- `feePayer` is a special account update with a slightly simpler structure.
  - In particular, it contains a `fee` field, which must be used to specify the transaction fee.
- `accountUpdates` is a list of normal account updates that make up the bulk of the transaction.
- `memo` is an encoded string that can be used to attach an arbitrary short message.

You create transactions in o1js by calling `Mina.transaction(...)`, which takes the sender (a public key) and a callback that contains your transaction logic:

```ts
const sender = PublicKey.fromBase58('B62..'); // the user address
const zkapp = new MyContract(address); // MyContract is a SmartContract

const tx = await Mina.transaction(sender, async () => {
  await zkapp.myMethod(someArgument);
});
```

In this example, the transaction calls a single `SmartContract` method called `myMethod`. You can inspect the transaction by printing it to the console, in JSON format:

```ts
console.log(tx.toJSON());
```

This command outputs a massive JSON object with many fields, most of which are set to their default value.

Inspecting transactions becomes easier if you print them in a condensed format, as follows:

```ts
console.log(tx.toPretty());
```

Depending on the logic of `myMethod()`, the output is something like:

```ts
[
  {
    publicKey: '..VeLh',
    fee: '0',
    nonce: '0',
    authorization: '..EzRQ',
  },
  {
    label: 'MyContract.myMethod()',
    publicKey: '..Nq6w',
    update: { appState: '["1",null,null,null,null,null,null,null]' },
    preconditions: {
      account: '{"state":["0",null,null,null,null,null,null,null]}',
    },
    authorizationKind: 'Proof',
    authorization: undefined,
  },
];
```

This output includes several essential things to learn about transactions.

First of all, this is an array with two entries -- the two account updates that make up this transaction.

The first entry is always the fee payer, whose public key was passed in as `sender`. For the `fee`, which you didn't specify, o1js filled in 0; the `authorization` was filled with a dummy signature. In a user-facing zkApp, you typically don't care about setting those values – instead, you create a transaction like this in the browser and pass it on to the user's wallet. The wallet replaces your fee payer with one that represents the user account, with the user's settings for the fee. It would also fill the `authorization` field with a signature created from the user's private key. See [connecting your zkApp with a user's wallet](/zkapps/writing-a-zkapp/introduction-to-zkapps/how-to-write-a-zkapp-ui#connecting-your-zkapp-with-a-users-wallet).

The second account update has the `'MyContract.myMethod()'` label. The update corresponds to the method call. An `@method` call always results in the creation of an account update – an update to the zkApp account itself.

Other fields in this account update are:

- `publicKey` – the zkApp address (like other non-human-readable strings, this is truncated by `tx.toPretty()`)
- `update: { appState: [...] }` – shows how the method updates the on-chain state, using `this.<state>.set()`. The names and pretty types defined using `@state` are removed in this representation, showing a raw list of 8 field elements or `null` for state fields that aren't updated.
- `preconditions: { account: { state: [...] } }` – similar to the `update`, one entry per field of on-chain state for the preconditions created with `this.<state>.requireEquals()`. This example accepts transactions only if the first of the 8 state fields equals 0. The `null` values mean that no condition is set on the other 7 state fields.
- `authorizationKind: 'Proof'` – indicates this account update must be authorized with a proof. Proof authorization is the default when calling a zkApp method, but not necessarily for other account updates.
- `authorization: undefined` – the proof needed on this update isn't there yet. You learn how to add it in a minute.

Note that there are many more fields that account updates can have, but `tx.toPretty()` prints only the fields with actual content. Also, not all of the fields must be present. For example, if a zkApp doesn't set a state, the `update` field might be missing. In that case, strictly speaking, it wouldn't be an "update" in the sense that the account is modified. The term "account update" is used for simplicity.

As you might have noticed, account updates aren't created in a very explicit manner. Instead, o1js gives you an imperative API, with "commands" like `state.set()`, to create and modify account updates in a transaction.

In the end, the entire transaction is sent to the network as one atomic update. If something fails – for example, one of the account updates has insufficient authorization – the _entire_ transaction is rejected and doesn't get applied. This is in contrast to an EVM contract, where the initial steps of a method call could succeed even if the method fails at a later step.

## Creating proofs

Finally, here's how to create zero knowledge proofs!

```ts
await MyContract.compile(); // this might take a while

// ...

const tx = await Mina.transaction(sender, async () => {
  await zkapp.myMethod(someArgument);
});
await tx.prove(); // this might take a while
```

This example code includes two new operations:

- `MyContract.compile()` creates prover and verification keys from your smart contract.[^1] You must create the keys before you can create any proofs.

- `tx.prove()` goes through your transaction and creates proofs for all the account updates that came from method calls.

[^1]: The name `compile()` is a metaphor for what this function does: creating prover and verifier functions from your code. It doesn't refer to literal "compilation" of JS into a circuit representation. The circuit representation of your code is created by _executing_ it, not by compiling it. Also, the prover function still includes the execution of your JS code as one step.

Both of these heavy cryptographic operations can take between a few seconds and a few minutes, depending on the amount of logic you're proving and on how fast your machine is. If you print the transaction again with `tx.toPretty()`, it now has the proof as a Base64 string inside the `authorization` field:

```ts
[
  // ...
  {
    label: 'MyContract.myMethod()',
    // ...
    authorization: { proof: '..KSkp' },
  },
];
```

## How proofs link to account updates

You might wonder: what, exactly, is proved? How is the proof linked to the account update it is part of?

The proof attests to two different things:

- The execution of `myMethod()`
- The public input of that execution

Recall that all method arguments are _private inputs_. So, the verifier doesn't get to see them, and the proof doesn't say anything about them (it only says that there were _some_ private inputs that satisfied all constraints). However, a zk proof can also have a public input.

In the case of zkApps, **the public input is the account update** that is passed in implicitly with `tx.prove()`. The prover function (smart contract logic) creates its own account update and constrains it to equal the public input.

The public input is data that is shared between the prover and verifier:

- The verifier passes in the public input when verifying it.
- The proof is valid only if it was created with _the same public input_.

The proof attests to the validity of exactly this account update. If you change the account update before sending it to the Mina network, the proof is no longer valid.

The only valid account updates for a zkApp account are the ones created according to the logic of your smart contract. This core concept is why zkApp smart contracts execute on the client side.

## Example: Payment from a zkApp

To learn more about account updates, see the example for paying out MINA from a zkApp.

To send MINA, use `this.send()` from a smart contract method:

```ts
class MyContract extends SmartContract {
  @method async payout(amount: UInt64) {
    // TODO: logic that determines whether the user is allowed to claim this amount

    this.send({ to: this.sender, amount });
  }
}
```

The `@method async payout()` pays out a given amount of nanoMINA to the sender of the transaction, which you get with `this.sender`.

In a real zkApp, you would add conditions to this method to determine who can call it with which amounts.

To call this method in a transaction and print the result:

```ts
const MINA = 1e9;

const tx = await Mina.transaction(sender, async () => {
  await zkapp.payout(UInt64.from(5 * MINA));
});
await tx.prove();
console.log(tx.toPretty());
```

:::info

MINA amounts, in all o1js APIs and elsewhere in the protocol, are always denominated in nanoMINA = `10^(-9)` MINA, which is why you set `const MINA = 1e9`.

:::

The transaction now has three account updates:

```ts
[
  {
    // fee payer
  },
  {
    label: 'MyContract.payout()',
    publicKey: '..Nq6w',
    balanceChange: { magnitude: '5000000000', sgn: 'Negative' },
    authorizationKind: 'Proof',
    authorization: { proof: '..KSkp' },
  },
  {
    publicKey: '..VeLh',
    balanceChange: { magnitude: '5000000000', sgn: 'Positive' },
    callDepth: 1,
    caller: '..umxw',
    authorizationKind: 'None_given',
  },
];
```

- The zkApp update with label `'MyContract.payout()'` has a negative `balanceChange` of 5 billion (= 5 MINA). This makes sense, because you are sending MINA away from the zkApp account.
- An additional account update has a corresponding positive balance change – the user account that receives MINA.

Two quick observations:

- You didn't explicitly create the receiver account update. It was created, and attached to the transaction, by calling `this.send()`.

  o1js tries to abstract away the low-level language of account updates where possible and give you intuitive commands to create the right ones. However, you might sometimes have to create account updates explicitly.

- The user update has `authorizationKind: 'None_given'`. That means the update is not authorized. This is possible because it doesn't include any changes that require authorization: It just receives MINA. You can send someone MINA without their permission.

In general, there are three kinds of authorizations that an account update can have: a proof, a signature, or none. You learn more about signatures in the next section. You can find more details in [Permissions](/zkapps/writing-a-zkapp/feature-overview/permissions).

## Account update tree structures

Next, observe that the user account update has a `callDepth: 1`. This is because the update was created from within a zkApp call. Account updates, displayed as a flat list here, are implicitly structured as a _list of trees_. Updates with a call depth of 1 or higher are child nodes of another update in that list of trees. In this case, the zkApp (sender) account update is at the top level (`callDepth: 0`) and the user (receiver) account update is a child of it.

So, what does this tree structure mean? Recall that the zkApp account update is public input to its proof. Now, the fully general version of that statement is:

**In a tree of account updates, all nodes are public inputs to the proof of the root node.** (If there is such a proof. This also holds for sub-trees of each tree.)

<!-- TODO: _ideal_ here would be a little picture of a tree, with a parent and a child node -->

Concretely, in this example, both the zkApp account update and the user account update are public input to the zkApp method call.

Intuitively, the public input means that the zkApp can "see" and constrain the update as part of its proof. Here, it means that no one can change the public key of the receiver, or amount they receive, without making the proof invalid.

The update can contain only what the method specified.

All of this is true because `this.send()` placed the receiver update at call depth 1, under the zkApp update.

As a counter example: The fee payer is never part of the public input. It can be anything without affecting the validity of the proof.

A key takeaway is: If you want something to become part of your proof, you must put it inside your `@method`.

## Signing transactions and explicit account updates

To recap the workflow covered so far: You write a smart contract, and then create a transaction to call the smart contract. You've seen how this transaction consists of account updates that are created by o1js.

The next example shows how an account update is created explicitly. You'll also learn how to use signatures for authorizing updates to user accounts.

To continue the [Payment from a zkApp example](#example-payment-from-a-zkapp) in the other direction: make a deposit from the user into the zkApp.

Payments made from a user account require a signature by the user.

Here's the smart contract code:

```ts
class MyContract extends SmartContract {
  @method async deposit(amount: UInt64) {
    let senderUpdate = AccountUpdate.create(this.sender);
    senderUpdate.requireSignature();
    senderUpdate.send({ to: this, amount });

    // TODO: logic that gives the user something in return for the deposit
  }
}
```

To unpack what happens here, the first line of the method creates a new, empty account update for the sender account:

```ts
let senderUpdate = AccountUpdate.create(this.sender);
```

- `AccountUpdate` is the class in o1js that represents account updates.
- `AccountUpdate.create()` instantiates this class and attaches the update to the current transaction at the same level where `create` is called.

  If it is called inside an `@method`, the `AccountUpdate` is created as a child (public input) of the zkApp update.

The next line specifies that the update must be authorized with a signature:

```ts
senderUpdate.requireSignature();
```

You can also use a shortcut for `AccountUpdate.create()` and `requireSignature()` in a single command:

```ts
let senderUpdate = AccountUpdate.createSigned(this.sender); // create + requireSignature
```

Finally, use `.send()` on the sender `AccountUpdate` to deposit into the zkApp with the same API as `this.send()`:

```ts
senderUpdate.send({ to: this, amount });
```

Note that instead of an address as the `to` field, pass in `this`, which is a `SmartContract`, so that `.send()` doesn't create an additional update, but uses the one already created for our zkApp.

A transaction for calling this method looks like:

```ts
[
  {
    // fee payer
  },
  {
    label: 'MyContract.deposit()',
    balanceChange: { magnitude: '5000000000', sgn: 'Positive' },
    // ...
  },
  {
    publicKey: '..VeLh',
    balanceChange: { magnitude: '5000000000', sgn: 'Negative' },
    callDepth: 1,
    useFullCommitment: true,
    caller: '..umxw',
    authorizationKind: 'Signature',
    authorization: undefined,
  },
];
```

The third account update is the one created with `AccountUpdate.create()`.

Two changes to the update were caused by calling `requireSignature()`:

- `useFullCommitment: true`, not explained here but has to do with replay protection when using signatures.
- `authorizationKind: 'Signature'`

Finally, `authorization: undefined` indicates that the signature is not provided yet.

In a user-facing zkApp, user signatures are typically added by a wallet, not within o1js. In that case, the missing signature is expected. However, in tests or when calling zkApps from a Node.js script, you must add the signatures with `tx.sign([...privateKeys])`, called after `Mina.transaction` on the finished transaction.

For example:

```ts
const sender = senderPrivateKey.toPublicKey(); // public key from sender's private key

const tx = await Mina.transaction(sender, async () => {
  await zkapp.deposit(UInt64.from(5 * MINA));
});
await tx.prove();

tx.sign([senderPrivateKey]); // senderKey is a PrivateKey
```

- The example shows how to derive the sender's public key, `sender`, from its private key, `senderPrivateKey`.
- `.sign()` goes through the transaction and adds signatures on all account updates that:

  - Need a signature
  - Whose public key matches one of the private keys that were provided

  `.sign()` takes an array, so you could provide multiple private keys for signing.

In this example, two account updates are signed with `tx.sign()`: The fee payer and the depositor account update. Both have the `sender` public key on them that matches `senderPrivateKey.toPublicKey()`.

:::tip
o1js allows you to load and store private and public keys in Base58 format.

To create the sender private key in a script:

```ts
const senderPrivateKey = PrivateKey.fromBase58('EKEQc95...');
```

In a real server-side deployment, you probably want to load keys from a file or environment variable, instead of hard-coding them in your source code.
:::

Recall that account updates can have three types of authorization:

- Proof authorization – used for zkApp accounts when you do an `@method` call. Proofs are verified against the on-chain verification key.
- Signature authorization – used to update user accounts. Signatures are verified against the account's public key.
- No authorization – used on updates which don't require authorization. For example, positive balance changes.

These are common defaults. The full source of truth is set by the _account permissions_, see [Permissions](/zkapps/writing-a-zkapp/feature-overview/permissions). Using permissions, account owners can decide on a fine-grained level which type of authorization is required on which kinds of updates. Permissions are checked every time an account update tries to interact with an account.

## Sending transactions

The final step of creating a transaction is sending it to the network. Like signing, in a user-facing zkApp this transaction is usually handled by a wallet.

You can use this workflow for testing and scripting.

To send a transaction, you must specify what network to interact with by specifying a "Mina instance" at the beginning of your script:

```ts
const Network = Mina.Network('https://example.com/graphql');
Mina.setActiveInstance(Network);
```

The network URL must be a GraphQL endpoint that exposes a compatible GraphQL API. This URL determines where transactions are sent and where o1js gets account information from when _creating_ transactions.

For example, when you do something like `this.<state>.get()` in your smart contract, the Mina instance is asked for the account using `Mina.getAccount`, which in turn causes the account to be fetched from the GraphQL endpoint.

To send a transaction, use `tx.send()`:

```ts
// set Mina instance
const Network = Mina.Network('https://example.com/graphql');
Mina.setActiveInstance(Network);

// create the transaction, add proofs and signatures
const tx = await Mina.transaction(sender, async () => {
  // ...
});
await tx.prove();
tx.sign([senderPrivateKey]);

// send transaction
await tx.send();
```

The output of `tx.send()` can be used to:

- Wait for inclusion of this transaction in a block
- Get the transaction hash, which lets you look up the pending transaction on a block explorer

```ts
// send transaction, log transaction hash
let pendingTx = await tx.send();
console.log(`Got pending transaction with hash ${pendingTx.hash}`);

// wait until transaction is included in a block
await pendingTx.wait();

// our account updates are applied on chain!
```

In addition to `Mina.Network`, you can also use a simulated local blockchain for local testing:

```ts
const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
```

Doing this means setting up a fresh, local ledger that is pre-filled with a couple of accounts with funds that you have access to. "Sending" a transaction here just means applying your account updates to that local simulated Mina instance. This is helpful for testing, especially because account updates go through the same validation logic locally that they would on-chain.

Fun fact: The `LocalBlockchain` instance literally uses the same OCaml code for transaction validation and application that the Mina node uses; it's compiled to JavaScript with [js_of_ocaml](https://github.com/ocsigen/js_of_ocaml).

You can learn more about testing in [Test zkApps Locally](/zkapps/writing-a-zkapp/introduction-to-zkapps/testing-zkapps-locally).
