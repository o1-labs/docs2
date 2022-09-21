---
title: Redundancy
---

The archive node will store its data in a PostgreSQL database that node operators host on a provider of their choice, including self-hosting, if desired. However, for redundancy, archive node data can also be stored to an object storage (e.g. Google Cloud Storage; soon S3 & others) or to a mina.log file, which can live on your computer or be streamed to any typical logging service (e.g. LogDNA).

Archive data is critical for applications that require historical lookup. On the protocol side, archive data is currently important for disaster recovery to reconstruct a certain state, but may not be required in a future version of Mina. To that end, having a single archive node setup might not be sufficient. If the daemon that sends blocks to the archive process or if the archive process itself fails for some reason, there can be missing blocks in the database. To minimize the risk of archive data loss there are a few redundancy techniques that can be employed.

A single archive node setup has a daemon sending blocks to an archive process which writes them to the database.

It is possible to connect multiple daemons to the archive process by specifying the address of an archive process in multiple daemons, thereby reducing the dependency on a single daemon to provide blocks to the archive process.

For example, the server-port of an archive process is 3086, then the daemons can connect to it using the flag archive-address

```
mina daemon \
    .....
  -archive-address <Ip-address>:3086\
```