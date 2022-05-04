---
title: Smart Contracts (zkApps)
---

#### zkApps = Dapps + Privacy + Off-Chain Data + Scalability

As the world’s lightest blockchain, Mina enables an entirely new category of
applications called zkApps: zero-knowledge applications. zkApps are feature-wise
similar to Dapps on Ethereum, but are superior thanks to three specific
properties:

Verify the integrity of a piece of data without disclosing what it is. Verify
correct execution of expensive computations. Significant scalability benefits.
These types of applications aren’t necessarily new - in a way both exist as
present day blockchains: ZCash as a zkApp with property 1, and Mina as a zkApp
with property 2.

A zkApp is also significantly more efficient than a Dapp on Ethereum. In order
for the Ethereum world computer to make a commitment to its users about the
execution of a Dapp, every node and miner on the network has to run the same
computation. This is wildly inefficient. With a zkApp on Mina, the zkApp gets
executed once by its developer, after which all other nodes can just verify the
associated SNARK proof. One can make the same argument for SNARK powered Layer 2
Dapps on Ethereum, however those Dapps are still encumbered by the limited
throughput of the main chain, whereas a zkApp on Mina benefits from the
scalability potential of the Mina blockchain thanks to its succinct nature.

In general, a zkApp on Mina has the following workflow:

- Identify the code to run, open source it if it isn’t already
- Use the code to deploy a SNARK circuit via a function call on Mina
- Source the data to perform the computation on
- Call the function with the relevant data
- Computation runs on chain, similar to a smart contract [ready 6-12 months
  after mainnet]
- Attach the SNARK proof returned from the function to a Mina address
- Mina executes transactions based on result of the SNARK proof

#### What else to add

- Brief overview, including brief example use cases (non-technical aspects)
- link developers to learn how to write a zkApp or view zkApp developer docs
