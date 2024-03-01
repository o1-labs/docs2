[o1js](../README.md) / [Modules](../modules.md) / Lightnet

# Namespace: Lightnet

## Table of contents

### Functions

- [acquireKeyPair](Lightnet.md#acquirekeypair)
- [listAcquiredKeyPairs](Lightnet.md#listacquiredkeypairs)
- [releaseKeyPair](Lightnet.md#releasekeypair)

## Functions

### acquireKeyPair

▸ **acquireKeyPair**(`options?`): `Promise`\<\{ `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }\>

Gets random key pair (public and private keys) from account manager
that operates with accounts configured in target network Genesis Ledger.

If an error is returned by the specified endpoint, an error is thrown. Otherwise,
the data is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isRegularAccount?` | `boolean` | Whether to acquire key pair of regular or zkApp account (one with already configured verification key) |
| `options.lightnetAccountManagerEndpoint?` | `string` | Account manager endpoint to fetch from |

#### Returns

`Promise`\<\{ `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }\>

Key pair

#### Defined in

[lib/fetch.ts:816](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L816)

___

### listAcquiredKeyPairs

▸ **listAcquiredKeyPairs**(`options`): `Promise`\<\{ `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }[] \| ``null``\>

Gets previously acquired key pairs list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.lightnetAccountManagerEndpoint?` | `string` | Account manager endpoint to fetch from |

#### Returns

`Promise`\<\{ `privateKey`: [`PrivateKey`](../classes/PrivateKey.md) ; `publicKey`: [`PublicKey`](../classes/Types.PublicKey.md)  }[] \| ``null``\>

Key pairs list or null if the request failed

#### Defined in

[lib/fetch.ts:896](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L896)

___

### releaseKeyPair

▸ **releaseKeyPair**(`options`): `Promise`\<`string` \| ``null``\>

Releases previously acquired key pair by public key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.lightnetAccountManagerEndpoint?` | `string` | Account manager endpoint to fetch from |
| `options.publicKey` | `string` | Public key of previously acquired key pair to release |

#### Returns

`Promise`\<`string` \| ``null``\>

Response message from the account manager as string or null if the request failed

#### Defined in

[lib/fetch.ts:859](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/fetch.ts#L859)
