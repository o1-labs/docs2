---
title: Ledger Hardware Wallet
---

# Ledger Hardware Wallet

Ledger has added support for Mina to their Nano S and Nano X hardware wallets. Install the Mina application on your hardware device to store your funds and interact with the Mina blockchain.

:::warning

The Mina app (1.0.6) is currently in developer mode until the Ledger audit is completed.

To install the app, you will need to enable **Developer mode** under **Settings > Experimental Features** in Ledger Live.

You will also need to update your device firmware to the latest version in order to see the app in the Ledger Live store.

- [Nano S 2.1+](https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true)
- [Nano X 2.0.2+](https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true)

**Disclaimer: You should proceed with caution if you choose to enable the Developer mode. Since Ledger has not completed their audit, it is possible that your funds could be at risk. We recommend that you only store nominal amounts until Ledger has completed the audit and activated the ability to use Ledger to store Mina private keys on the normal mode.**

:::
<br />

The Mina app supports the following operations:

- Generating keypairs
- Signing payment transactions
- Signing delegation transaction

<br />

The Mina app does **not** support the following operations:

- Signing zkApp transactions
- Native LedgerLive wallet integrations (but you can use 3rd party wallets, see below)

You can download the Mina app to your Ledger Nano S or Nano X using the instructions below.

## Installing the Mina app

Before you get started, download [Ledger Live](https://www.ledger.com/ledger-live/download) if you have not done so already:

Make sure your Ledger firmware is on the latest version supporting Mina.

1. Enable **Developer mode** under **Settings > Experimental Features** in Ledger Live.
2. Connect and unlock your Ledger device.
3. Open the **Manager** in [Ledger Live](https://support.ledger.com/hc/en-us/articles/4404382258961?docs=true).
4. Allow the manager on your device.
5. Search for **Mina** in the app catalog.
6. Click the **Install** button. Your device will display **Processing...**.
7. Once the download is completed, Ledger Live will display **Installed**.

<br />

![Example banner](/img/LedgerLive.png)

<br />

:::tip
A couple reminders regarding hardware wallets:

- Make sure to backup your secret pneumonomic phrase
- Keep your ledger up-to-date
:::

## Troubleshooting

**Why does signing a transaction take so long?** <br />
Since Mina uses new cryptography and Ledger does not have hardware acceleration support, you may experience that signing with the Mina app takes longer than other wallets. We hope that this cryptography will be supported by Ledger in the future.

**Why don't I see the option to update my firmware?** <br />
If your Nano X firmware does not offer an option to upgrade to the latest version, it means your device is in the process of getting staged for the update. Just wait 1 or 2 days to see if the option is available. If not, reach out to Ledger support.

**Why is the Mina app in developer mode?** <br />
Developer mode is one of the release types for Ledger applications. Until the application is audited by Ledger security team, the Mina app will be in **Developer mode** and display **“Pending Ledger Review”** while the application is being reviewed.
You can find more details about the different Ledger release types [here](https://developers.ledger.com/docs/nano-app/publish-introduction/).​​

## Audit

In addition to an internal Ledger audit (still ongoing), a security audit of the Mina Ledger app and its integration for the Nano S/X Hardware wallet was conducted by Least Authority. To read the report, click [here](https://leastauthority.com/blog/audit-of-mina-ledger-application-for-o1-labs/).

## Next Steps

Congrats! Now that you have installed Mina’s Ledger app, you can start using your Ledger and connect to one of Mina’s Ledger supported wallets:

- [Aurowallet.com](https://www.aurowallet.com/)
- [Clor.io](https://clor.io/)

If you need help or have any questions about Ledger, join the [​​#ledger-hardware](https://discord.gg/KY5FayhCgr) channel on Discord!
