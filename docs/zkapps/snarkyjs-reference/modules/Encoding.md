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

[lib/encoding.ts:88](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L88)

___

### EpochSeed

• `Const` **EpochSeed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromBase58` | (`base58`: `string`) => [`Field`](../classes/Field.md) |
| `toBase58` | (`field`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[lib/encoding.ts:317](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L317)

___

### LedgerHash

• `Const` **LedgerHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromBase58` | (`base58`: `string`) => [`Field`](../classes/Field.md) |
| `toBase58` | (`field`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[lib/encoding.ts:313](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L313)

___

### ReceiptChainHash

• `Const` **ReceiptChainHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromBase58` | (`base58`: `string`) => [`Field`](../classes/Field.md) |
| `toBase58` | (`field`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[lib/encoding.ts:309](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L309)

___

### StateHash

• `Const` **StateHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromBase58` | (`base58`: `string`) => [`Field`](../classes/Field.md) |
| `toBase58` | (`field`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[lib/encoding.ts:321](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L321)

___

### TokenId

• `Const` **TokenId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromBase58` | (`base58`: `string`) => [`Field`](../classes/Field.md) |
| `toBase58` | (`field`: [`Field`](../classes/Field.md)) => `string` |

#### Defined in

[lib/encoding.ts:308](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L308)

## Functions

### bytesFromFields

▸ **bytesFromFields**(`fields`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] |

#### Returns

`Uint8Array`

#### Defined in

[lib/encoding.ts:57](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L57)

___

### bytesToFields

▸ **bytesToFields**(`bytes`): [`Field`](../classes/Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encoding.ts:37](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L37)

___

### stringFromFields

▸ **stringFromFields**(`fields`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](../classes/Field.md)[] |

#### Returns

`string`

#### Defined in

[lib/encoding.ts:30](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L30)

___

### stringToFields

▸ **stringToFields**(`message`): [`Field`](../classes/Field.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Field`](../classes/Field.md)[]

#### Defined in

[lib/encoding.ts:25](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/encoding.ts#L25)
