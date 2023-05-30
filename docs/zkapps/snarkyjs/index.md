---
title: Introduction to SnarkyJS
hide_title: true
description: SnarkyJS is a general-purpose zk framework that gives you the tools to create zk proofs. SnarkyJS is a TypeScript library for writing general-purpose zk programs and writing zk smart contracts for Mina.
---

:::info

zkApp programmability is not yet available on the Mina Mainnet. You can get started now by deploying zkApps to the Berkeley Testnet.
:::

# SnarkyJS

SnarkyJS is a TypeScript (TS) library for:

- Writing general-purpose zk programs
- Writing zk smart contracts for Mina

This is TS code that you might write when using SnarkyJS:

```ts
import { Field, Poseidon } from 'snarkyjs';

function knowsPreimage(preimage: Field) {
  let hash = Poseidon.hash([preimage]);
  hash.assertEquals(expectedHash);
}

const expectedHash =
  Field(0x1d444102d9e8da6d566467defcc446e8c1c3a3616d059facadbfd674afbc37ecn);
```

In a zkApp, this code can be used to prove that you know a secret value whose hash is publicly known without revealing the secret.
The code is plain TypeScript (TS) and is executed as normal TS. You might call SnarkyJS an _embedded domain-specific language (DSL)_.

SnarkyJS provides data types and methods that are _provable_: You can prove their execution. 

In the previous example code, `Poseidon.hash()` and `Field.assertEquals()` are examples of provable method. Proofs are _zero-knowledge_, because they can be verified without learning their inputs and execution trace. Selected parts of the proof can be made public, if it suits your application.

SnarkyJS is a general-purpose zk framework that gives you the tools to create zk proofs. It lets you write arbitrary zk programs leveraging a rich set of built-in provable operations, like basic arithmetic, hashing, signatures, boolean operations, comparisons, and more. Use the SnarkyJS framework to write zkApps on Mina, smart contracts that execute client-side and have private inputs.

All of the SnarkyJS framework is packaged as a single TS library that can be used in major web browsers and Node.js. The best way to get started with SnarkyJS is [using the zkApp CLI](./how-to-write-a-zkapp). You can also install SnarkyJS from npm with `npm i snarkyjs`.

Start your SnarkyJS journey by learning about [basic zk programming concepts](./snarkyjs/basic-concepts).