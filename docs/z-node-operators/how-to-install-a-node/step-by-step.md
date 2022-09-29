---
title: Step-by-step
---

> If you’re considering running an archive node, use this Archive Node image (link to it).

- First line, if you prefer use Docker, see the next instructions 

### Ubuntu 18.04 / Debian 9
Add the Mina Debian repo and install:

```
echo "deb [trusted=yes] http://packages.o1test.net release main" | sudo tee /etc/apt/sources.list.d/mina.list
sudo apt-get update
sudo apt-get install -y curl unzip mina-mainnet=1.1.8-b10c0e3
```
Check that daemon installed correctly by running `mina version`. The output should read `Commit b10c0e3db9112a2a8aebc3eec7c6d2570fcc4044` on branch master.

