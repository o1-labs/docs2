---
title: Overview
hide_title: true
---

:::info

Please note that zkApp programmability is not yet available on Mina Mainnet, but
zkApps can now be deployed to Berkeley QANet.

:::

# Overview

![Terminal screenshot of Mina’s zkApps from a command-line interface](/img/zk-cli.png)

Mina’s zkApps are zk-SNARK-powered smart contracts that use an off-chain execution and mostly off-chain state model.

### What are zkApps?

zkApps ("zero-knowledge apps") are Mina Protocol’s smart contracts powered by zero-knowledge proofs, specifically using zk-SNARKs.

zkApps use an **off-chain execution** and mostly **off-chain state** model. This allows for private computation and state that can be either private or public.

zkApps can perform arbitrarily-complex computations off chain while incurring only a flat fee to send the resulting zero-knowledge proof to the chain for verification of this computation, as opposed to other blockchains that run computations on chain and use a variable gas-fee based model.


![How zkApps work](/img/1_zkApps_Off-Chain_Performance.jpg)

zkApps can perform arbitrarily complex computations off chain while incurring only a flat fee to send the resulting zero-knowledge proof to the chain Other blockchains use a gas-fee based model.


You can learn more on the [how zkApps work](./how-zkapps-work).

### TypeScript

zkApps are written in [TypeScript](https://www.typescriptlang.org/).

TypeScript provides an easy, familiar language (JavaScript), but with type safety, making it easy to get started writing zkApps. If you're new to using TypeScript, check out this helpful [12-min introductory video](https://www.youtube.com/watch?v=ahCwqrYpIuM).

When you're ready to write a zkApp, you can learn more on the [how to write a zkApp](./how-to-write-a-zkapp) page.

### Examples of zkApps

Play around with a few example zkApps to see what’s possible:

![Examples of applications that could use zkApps](/img/2_zkApps_Examples.jpg)

zkApps are a great fit for applications that require proof that you have a secret without revealing it to anyone [zero knowledge proofs](https://minaprotocol.com/blog/zero-knowledge-proofs-an-intuitive-explanation).


### Learn more

Join the [#zkapps-general](https://discord.gg/R25r5Zha) channel on Discord.

On the upcoming pages, you can read about [how zkApps work](./how-zkapps-work), [how to write a zkApp](./how-to-write-a-zkapp), and see our [zkApps for Ethereum Developers](./zkapps-for-ethereum-developers).

