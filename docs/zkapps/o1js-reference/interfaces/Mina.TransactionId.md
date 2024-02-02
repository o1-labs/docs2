[o1js](../README.md) / [Modules](../modules.md) / [Mina](../modules/Mina.md) / TransactionId

# Interface: TransactionId

[Mina](../modules/Mina.md).TransactionId

## Table of contents

### Properties

- [isSuccess](Mina.TransactionId.md#issuccess)

### Methods

- [hash](Mina.TransactionId.md#hash)
- [wait](Mina.TransactionId.md#wait)

## Properties

### isSuccess

• **isSuccess**: `boolean`

#### Defined in

[lib/mina.ts:74](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/mina.ts#L74)

## Methods

### hash

▸ **hash**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/mina.ts:76](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/mina.ts#L76)

___

### wait

▸ **wait**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.interval?` | `number` |
| `options.maxAttempts?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[lib/mina.ts:75](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/mina.ts#L75)
