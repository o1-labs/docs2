---
title: Protocol Architecture
---

### How does this work?

Check out this short video explaining how the Mina protocol works in detail:

![video](https://i.ibb.co/x6c3k6V/Screen-Shot-2021-10-05-at-5-35-26-PM.png)

### Organization of network

![complicated](https://yqintl.alicdn.com/99156f8577cc9e2e66099c35a71dc7c78d1cc7cd.png)

This is an opportunity to link to different roles

Insert graphic showing organization of network (block producers, snarkers,
zkApps, etc.)

### The Lifecycle of a Payment

In Mina, payments pass through several steps before they are considered verified
and complete. This document is meant to walk through what happens to a single
payment in a simplified overview to help users understand a little about how
Mina payments work. It it not a comprehensive technical overview, but instead a
simplified walkthrough for users. For a more detailed technical overview aimed
at developers wishing to understand the codebase check out the technical
lifecycle of a payment.

:::note Mina uses a gossip protocol to ensure that messages can be reliably
transmitted to all other members of the network in a timely manner.
