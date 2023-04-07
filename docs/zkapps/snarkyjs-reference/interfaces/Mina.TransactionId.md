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

[lib/mina.ts:60](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/mina.ts#L60)

## Methods

### hash

▸ **hash**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/mina.ts:62](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/mina.ts#L62)

___

### wait

▸ **wait**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.interval?` | `number` |
| `options.maxAttempts?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/mina.ts:61](https://github.com/o1-labs/snarkyjs/blob/33a9946/src/lib/mina.ts#L61)
