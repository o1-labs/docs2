# Namespace: Encryption

## Table of contents

### Functions

- [decrypt](Encryption.md#decrypt)
- [encrypt](Encryption.md#encrypt)

## Functions

### decrypt

▸ **decrypt**(`«destructured»`, `privateKey`): [`Field`](../classes/Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `CipherText` |
| `privateKey` | [`PrivateKey`](../classes/PrivateKey.md) |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encryption.ts:38](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/encryption.ts#L38)

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

[lib/encryption.ts:12](https://github.com/o1-labs/snarkyjs/blob/531db43/src/lib/encryption.ts#L12)
