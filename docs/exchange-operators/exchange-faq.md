# Exchange FAQ

For exchanges listing Mina.

## What is the best way to test tooling and integration with Mina?

We strongly suggest that tooling and integrations be tested on DevNet before
going live on MainNet. This includes simulating expected MainNet conditions such
as transaction volume and frequency, to help identify and solve potential issues
ahead of time.

## Why do fewer tokens appear in a new account? (Account Creation Fee)

The Mina Protocol currently charges a 1 MINA fee to create a new account. This
is to help protect the network from denial of service-type attacks. We
anticipate reducing this over time.

## What is the maximum size of the mempool? How do we work around this?

Currently, the transaction mempool can hold a max of 3,000 transactions.
This will be increased in a future hard fork. You can view the number of
transactions recently in the mempool at
[https://minaexplorer.com/mempool#mempool-over-time](https://minaexplorer.com/mempool#mempool-over-time)
. The mempool sorts transactions by fee—if the pool is almost full, we suggest
raising the fee used for withdrawals of MINA from your exchange to help ensure
they are processed quickly.

## My Mina node gets stuck sometimes, how can I detect this and fix it?

We aim to improve this in future versions. For now, this can be resolved by
restarting your node when this issue is detected.

For example, you could use a script like the following run by a cron job every
3min (the slot length) or more frequently. Be sure your Mina daemon is monitored
by something such as systemd, so it will auto-restart.

```sh
MINA_STATUS=$($MINA client status --json)
HIGHESTBLOCK="$(echo $MINA_STATUS | jq .highest_block_length_received)"
HIGHESTUNVALIDATEDBLOCK="$(echo $MINA_STATUS | jq .highest_unvalidated_block_length_received)"
# Calculate difference between validated and unvalidated blocks.
# If block height is more than 4 block behind, something is likely wrong.
DELTAVALIDATED="$(($HIGHESTUNVALIDATEDBLOCK-$HIGHESTBLOCK))"
if [[ "$DELTAVALIDATED" -gt 4 ]]; then
  $MINA client stop
fi
```

## Why do users' funds appear to get lost when sending to some exchanges?

Some exchanges require their users to include a _unique_ memo field when sending
MINA deposits to the exchange, in order to associate the deposit with the user's
account. If the user does not include this unique memo when sending their
deposit, the receiving exchange may not be able to associate the deposit
properly with the user's exchange account.

_Note that these funds are **not** lost. They will be received at the exchange's
address, but the exchange may not be able to automatically associate them with
the user's exchange account without such a memo._

Mina and its SDKs have full support for the `memo` field when sending a
transaction.

Exchanges & wallet creators can help avoid the above issue by exposing an
optional `memo` field during a Mina send transaction.

## Our archive node is missing block information after a restart. How can the data be recovered?

Archive node operators often choose to run redundant archive nodes to store block data to one or more locations of their
choice (e.g. PostgreSQL, GCP, local files, a logging service, etc) and to
backfill any missed block data if needed.

For convenience, O(1) Labs makes data from its archive node
[available here](https://console.cloud.google.com/storage/browser/mina_network_block_data),
to help others in the community backfill any missing information.

This bucket contains blocks from various Mina networks—e.g. `mainnet` & the most
recent DevNet `devnet2`. Filter the file names to find those for the network you
desire. (Note that this bucket contains blocks for various other networks too,
such as `qanet`, which we recommend _against_ using for your testing. `qanet` is
used by O(1) Labs during their iterative development.)

File names contain the network name, block height, and state hash of the block.
Block height was added to the filename more recently, so blocks older than
height 25,705 will include only the network name and state hash in the filename.

Example file names:

(Recent)

`mainnet-30627-3NLfKanQ53X2MRKx5ZRvb9nVCEB9eJpcnssGCTpT3J1cojhB5M19.json`

(Older)

`mainnet-3NKUBmkc7UZ7ik5JyCM4WNzkN1HG5heMB5zNDUkf3Kgta1MFY6LY.json`

You can download a specific block using curl:

```
curl https://mina_network_block_data.storage.googleapis.com/<filename.json>
```

You can import this file using the mina archive blocks tool. The command for it is `mina-archive-blocks --precomputed --archive-uri <postgres uri> FILE`.

## How do I query for the canonical block at a certain height from the archive node

This can be accomplished using a recursive query.

## "Not able to connect to the network"

This usually occurs due to a chain ID mismatch from running a DevNet build on
MainNet, or vice versa. Check if the chain ID of your node (from the output of
`mina client status`) matches the expected chain ID below for the network you
are trying to connect to.

MainNet: `5f704cc0c82e0ed70e873f0893d7e06f148524e3f0bdae2afb02e7819a0c24d1`

DevNet: `8af43cf261ea10c761ec540f92aafb76aec56d8d74f77c836f3ab1de5ce4eac5`

## When will the next staking snapshot occur?

The timing of the next staking snapshot varies.

For purposes of ensuring consensus, there is a delay between when delegations
are sent on the blockchain and when they take effect with respect to staking on
the network. This delay is based on a combination of consensus timing (epochs)
and snarketplace throughput. As such, it is difficult to determine exactly how
long this delay will be, but _a conservative estimate is that delegations sent 3
days before the epoch transition will take effect in the upcoming epoch. This
means that, for any given delegation, there is an average of a 18-29 day delay
before this delegation updates block production._
