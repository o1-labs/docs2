[o1js](../README.md) / [Modules](../modules.md) / Bytes

# Namespace: Bytes

## Table of contents

### Variables

- [from](Bytes.md#from)
- [fromHex](Bytes.md#fromhex)
- [fromString](Bytes.md#fromstring)

## Variables

### from

• **from**: (`data`: `Uint8Array` \| `Bytes` \| (`number` \| `bigint` \| [`UInt8`](../classes/UInt8.md))[]) => `Bytes`

#### Type declaration

▸ (`data`): `Bytes`

Coerce the input to [Bytes](Bytes.md).

Inputs smaller than `this.size` are padded with zero bytes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `Bytes` \| (`number` \| `bigint` \| [`UInt8`](../classes/UInt8.md))[] |

##### Returns

`Bytes`

#### Defined in

[lib/provable-types/provable-types.ts:19](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L19)

___

### fromHex

• **fromHex**: (`xs`: `string`) => `Bytes`

#### Type declaration

▸ (`xs`): `Bytes`

Create [Bytes](Bytes.md) from a hex string.

Inputs smaller than `this.size` are padded with zero bytes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `string` |

##### Returns

`Bytes`

#### Defined in

[lib/provable-types/provable-types.ts:20](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L20)

___

### fromString

• **fromString**: (`s`: `string`) => `Bytes`

#### Type declaration

▸ (`s`): `Bytes`

Create [Bytes](Bytes.md) from a string.

Inputs smaller than `this.size` are padded with zero bytes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

##### Returns

`Bytes`

#### Defined in

[lib/provable-types/provable-types.ts:21](https://github.com/o1-labs/o1js/blob/64a4beb/src/lib/provable-types/provable-types.ts#L21)
