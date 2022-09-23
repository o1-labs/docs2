# Namespace: Encryption

## Table of contents

### Functions

- [decrypt](Encryption.md#decrypt)
- [encrypt](Encryption.md#encrypt)

## Functions

### decrypt

▸ **decrypt**(`__namedParameters`, `privateKey`): [`Field`](../classes/Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `CipherText` |
| `privateKey` | [`PrivateKey`](../classes/PrivateKey.md) |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encryption.ts:40](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encryption.ts#L40)

___

### encrypt

▸ **encrypt**(`message`, `otherPublicKey`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Field`](../classes/Field.md)[] |
| `otherPublicKey` | [`PublicKey`](../classes/Types.PublicKey.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cipherText` | [`Field`](../classes/Field.md)[] |
| `publicKey` | [`Group`](../classes/Group.md) |

#### Defined in

[lib/encryption.ts:12](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encryption.ts#L12)
