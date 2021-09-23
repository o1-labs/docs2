---
title: Foundation Delegation Program
---
### Installing and running the uptime sidecar

When participating in the Foundation Delegation Program you will also need to run the uptime sidecar, so please following these instructions and set it up alongside your block producer daemon.

### Measuring uptime performance

The uptime sidecar sends recent blockchain data (from your bloc producer node's perspective) to a service that verifies that this recent data is indeed synced with the chain. Specifically, if you have any block producer nodes online at all within any given 10minute window (ie. both your node is synced and the uptime sidecar is sending the data) then you will be marked as online for that 10minute window. Note: You may run more than one node with the same block producer key if you want to increase your chances of remaining up.

Your uptime is measured as a percentage of all possible 10minute windows over a 60-day period. Uptime performance is only looked at over the last 60-days -- the sooner you fix issues with your nodes and uptime sidecar then the sooner you'll be rewarded with a better uptime and a higher position on the leaderboard.

See the uptime leaderboard for the latest realtime performance under these conditions.

Your position on this leaderboard is an important factor in your public key being selected to receive delegation from a token provider.

### Payout Addresses

You must send computed rewards as described below to the token provider addresses that delegate to you. If the Foundation is delegating to you, the Foundation will pick two addresses from the Foundation address list at the bottom of the page that will appear as delegations to you. You should distribute the rewards to both those addresses. If O(1) Labs is delegating to you, O(1) Labs will pick two addresses from the O(1) Labs address list at the bottom of the page that will appear as delegations to you. You must distribute the rewards to both addresses that are delegating to you.

### Payout Frequency

Rewards must be distributed at least once for a given epoch (but you can also send them more frequently), all the rewards for epoch N must be delivered (ie. accepted in a block, not just sent) no later than slot number 3,500 of the next epoch. This gives you about a week to sort out these payments.

