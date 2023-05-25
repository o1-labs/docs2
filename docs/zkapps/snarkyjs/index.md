---
title: Introduction
hide_title: true
---

:::info

Please note that zkApp programmability is not yet available on Mina Mainnet, but
zkApps can now be deployed to Berkeley Testnet.

:::

# SnarkyJS

SnarkyJS is a TypeScript library for

- writing general-purpose zk programs
- writing zk smart contracts for Mina

This is code that you might write when using SnarkyJS:

```ts
import { Field, Poseidon } from 'snarkyjs';

function knowsPreimage(preimage: Field) {
  let hash = Poseidon.hash([preimage]);
  hash.assertEquals(expectedHash);
}

const expectedHash =
  Field(0x1d444102d9e8da6d566467defcc446e8c1c3a3616d059facadbfd674afbc37ecn);
```

This could be part of a zkApp and be used to prove that you know a secret value whose hash is publicly known, without revealing the secret.
The code is plain TypeScript (TS), and is executed as normal TS. You might call SnarkyJS an _embedded DSL_.

SnarkyJS provides data types and methods that are _provable_: You can prove their execution. `Poseidon.hash()` and `Field.assertEquals()` in the code above are examples of provable method. Proofs are _zero-knowledge_, because they can be verified without learning their inputs and execution trace. Selected parts of the proof can be made public, if it suits your application.

SnarkyJS is a general-purpose zk framework, which gives you the tools to create zk proofs, and lets you write arbitrary zk programs leveraging a rich set of builtin provable operations, like basic arithmetic, hashing, signatures, boolean operations, comparisons, and more. Furthermore, SnarkyJS comes with a framework for writing zkApps on Mina - smart contracts that execute client-side and have private inputs.

All of this is packaged as a single TS library which can be used in major web browsers and Node.js. The best way to get started with SnarkyJS is [using the zkApp CLI](./how-to-write-a-zkapp). You can also install it from npm with `npm i snarkyjs`.

In the following pages, we will teach you how to use SnarkyJS. Start your journey by learning about [basic zk programming concepts](./snarkyjs/basic-concepts).
