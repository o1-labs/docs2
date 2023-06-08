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

[lib/encryption.ts:46](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/encryption.ts#L46)

___

### encrypt

▸ **encrypt**(`message`, `otherPublicKey`): `Object`

Public Key Encryption, using a given array of [Field](../README.md#field-1) elements and encrypts it using a [PublicKey](../classes/Types.PublicKey.md).

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
| `publicKey` | [`Group`](../classes/Group.md) |

#### Defined in

[lib/encryption.ts:17](https://github.com/o1-labs/snarkyjs/blob/c00c3f5/src/lib/encryption.ts#L17)
