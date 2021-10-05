---
title: Consensus
---

Consensus refers to the process by which the network determines which information will be retained in the blockchain. In a system such as a blockchain, the responsibility of extending the blockchain with new information is distributed across participating nodes throughout the network. These nodes cannot be assumed to be "honest" nodes on the network, and thus, "honest" participants of the network must work together in order to select which information proposed by various nodes will be kept. There are many different ways of achieving distributed consensus, which we refer to as consensus mechanisms. In our code base, we have built a single interface by which a consensus mechanism informs the rest of the protocol. Through this interface, various implementations of consensus mechanisms can be swapped out at compile time to allow us to write the rest of the protocol inedependent of the consensus mechanism being selected. As such, one can think about a consensus mechanism as something that, once defined, the rest of the protocol can be built on top of.

A consensus mechanism controls many aspects in a protocol which is built on top of it. For the purpose of this discussion, we will separate the provisions of a consensus mechanism into two parts: the data (data structures made available and the interactions available with them) and hooks (specific top level hooks called by the protocol built on top of the consensus mechanism). Data structures provided by the consensus mechanism are kept abstract to the outside system interacting with them and are instead primarily consumed by the consensus mechanism's hooks.

:::note
This document only covers the generalized consensus mechanism abstraction in Mina. For information on the implementation of Proof of Stake in Mina, [see the relevant documentation](https://docs.minaprotocol.com/en/architecture/proof-of-stake).

:::


- Proof of stake
- You can produce blocks and receive block rewards based on your % of the MINA staked on the network.
Any user with any amount of MINA can receive these rewards--i.e. no minimum.
- No slashing.
- You must activately choose to stake to receive rewards, either by delegating or running a block producer. (not staking by default). If you have a low amount of MINA, it’s recommended that you delegate to receive rewards, to avoid costs of running a node.
- Choose a staking pool operator that you trust b/c staking does not occur on chain. (link to Stake Tab to help people find ones they trust).
It takes ~1mo for your delegation to become active (before you start earning rewards for the delegation)- Show Epoch calculator tool? (can the community build this?)
- Give formula (given % of stake, this is the % of block rewards that you would get).
