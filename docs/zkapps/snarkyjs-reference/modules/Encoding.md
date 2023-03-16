# Namespace: Encoding

## Table of contents

### Variables

- [Bijective](Encoding.md#bijective)
- [EpochSeed](Encoding.md#epochseed)
- [LedgerHash](Encoding.md#ledgerhash)
- [ReceiptChainHash](Encoding.md#receiptchainhash)
- [StateHash](Encoding.md#statehash)
- [TokenId](Encoding.md#tokenid)

### Functions

- [bytesFromFields](Encoding.md#bytesfromfields)
- [bytesToFields](Encoding.md#bytestofields)
- [stringFromFields](Encoding.md#stringfromfields)
- [stringToFields](Encoding.md#stringtofields)

## Variables

### Bijective

• `Const` **Bijective**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Fp` | { `fromBytes`: (`bytes`: `Uint8Array`) => [`Field`](../classes/Field.md)[] ; `toBytes`: (`fields`: [`Field`](../classes/Field.md)[]) => `Uint8Array` ; `fromString`: (`message`: `string`) => [`Field`](../classes/Field.md)[] ; `toString`: (`fields`: [`Field`](../classes/Field.md)[]) => `string`  } |
| `Fp.fromBytes` | (`bytes`: `Uint8Array`) => [`Field`](../classes/Field.md)[] |
| `Fp.toBytes` | (`fields`: [`Field`](../classes/Field.md)[]) => `Uint8Array` |
| `Fp.fromString` | [object Object] |
| `Fp.toString` | [object Object] |
| `Fq` | { `fromBytes`: (`bytes`: `Uint8Array`) => [`Field`](../classes/Field.md)[] ; `toBytes`: (`fields`: [`Field`](../classes/Field.md)[]) => `Uint8Array` ; `fromString`: (`message`: `string`) => [`Field`](../classes/Field.md)[] ; `toString`: (`fields`: [`Field`](../classes/Field.md)[]) => `string`  } |
| `Fq.fromBytes` | (`bytes`: `Uint8Array`) => [`Field`](../classes/Field.md)[] |
| `Fq.toBytes` | (`fields`: [`Field`](../classes/Field.md)[]) => `Uint8Array` |
| `Fq.fromString` | [object Object] |
| `Fq.toString` | [object Object] |

#### Defined in

[lib/encoding.ts:107](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L107)

___

### EpochSeed

• **EpochSeed**: `Base58`<[`Field`](../classes/Field.md)\>

#### Defined in

[lib/encoding.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L18)

___

### LedgerHash

• **LedgerHash**: `Base58`<[`Field`](../classes/Field.md)\>

#### Defined in

[lib/encoding.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L18)

___

### ReceiptChainHash

• **ReceiptChainHash**: `Base58`<[`Field`](../classes/Field.md)\>

#### Defined in

[lib/encoding.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L18)

___

### StateHash

• **StateHash**: `Base58`<[`Field`](../classes/Field.md)\>

#### Defined in

[lib/encoding.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L18)

___

### TokenId

• **TokenId**: `Base58`<[`Field`](../classes/Field.md)\>

#### Defined in

[lib/encoding.ts:18](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L18)

## Functions

### bytesFromFields

▸ **bytesFromFields**(`fields`): `Uint8Array`

Decodes a list of [Field](../classes/Field.md) elements into a Uint8Array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] |

#### Returns

`Uint8Array`

#### Defined in

[lib/encoding.ts:76](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L76)

___

### bytesToFields

▸ **bytesToFields**(`bytes`): [`Field`](../classes/Field.md)[]

Encodes a Uint8Array into [Field](../classes/Field.md) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encoding.ts:54](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L54)

___

### stringFromFields

▸ **stringFromFields**(`fields`): `string`

Decodes a list of [Field](../classes/Field.md) elements into a JavaScript string.

This function is not a valid in-snark computation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] |

#### Returns

`string`

#### Defined in

[lib/encoding.ts:44](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L44)

___

### stringToFields

▸ **stringToFields**(`message`): [`Field`](../classes/Field.md)[]

Encodes a JavaScript string into a list of [Field](../classes/Field.md) elements.

This function is not a valid in-snark computation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encoding.ts:34](https://github.com/o1-labs/snarkyjs/blob/f82cd47/src/lib/encoding.ts#L34)
