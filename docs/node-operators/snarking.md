---
title: Snarking
---

### Definition. 

Why to snark (to earn fees). 

How to enable it (CLI flags).

### FAQ

**IF I RUN A SNARK WORKER, HOW DO I GET PAID FOR MY SNARKS THAT I GENERATE?**

Block producers (the validators who add new blocks to the blockchain) are required to buy SNARKs from the network (or from what we call the Snarketplace) and will pay out some of their block reward as fees to the snark workers who generated SNARKs. This creates a secondary incentive mechanism in the network to reward nodes that help compress transactions.

**IS GENERATING SNARKS SIMILAR TO PROOF-OF-WORK (POW) MINING?**

No, they are different in several ways:

SNARK work is deterministic, while PoW mining requires randomly calculating hashes to try and solve a puzzle. There is no luck element in SNARK work — if a snark worker wants to generate a SNARK of a transaction, they only need to generate the proof once. This means SNARK work is much less expensive and environmentally wasteful, as the compute is all spent towards a productive goal.
There is no difficulty increase for SNARK work, as there is with PoW mining. In fact, as SNARK constructions, and proof generation times improve, the difficulty may actually decrease.

SNARK work is not directly involved in consensus. Snark workers play no role in determining the next state of the blockchain. Their role is to simply generate SNARKs of transactions observed in the network

As a snark worker, there is no requirement for uptime. PoW miners need to run their rigs non-stop to ensure they don't miss out on a potential block. Snark workers can come online and offline as they please — it is more like Uber, where there will always be work to be done, and nobody needs to say ahead of time when they want to work.
