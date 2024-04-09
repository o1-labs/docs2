[o1js](../README.md) / [Modules](../modules.md) / Encryption

# Namespace: Encryption

## Table of contents

### Functions

- [decrypt](Encryption.md#decrypt)
- [encrypt](Encryption.md#encrypt)

## Functions

### decrypt

▸ **decrypt**(`«destructured»`, `privateKey`): `Field`[]

Decrypts a CipherText using a [PrivateKey](../classes/PrivateKey.md).^

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `CipherText` |
| `privateKey` | [`PrivateKey`](../classes/PrivateKey.md) |

#### Returns

`Field`[]

#### Defined in

[lib/provable/crypto/encryption.ts:45](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/encryption.ts#L45)

___

### encrypt

▸ **encrypt**(`message`, `otherPublicKey`): `Object`

Public Key Encryption, using a given array of [Field](../modules.md#field-1) elements and encrypts it using a [PublicKey](../classes/Types.PublicKey.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Field`[] |
| `otherPublicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cipherText` | `Field`[] |
| `publicKey` | `Group` |

#### Defined in

[lib/provable/crypto/encryption.ts:16](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/provable/crypto/encryption.ts#L16)
