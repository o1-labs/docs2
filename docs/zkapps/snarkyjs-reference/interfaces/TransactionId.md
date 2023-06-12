[SnarkyJS](../README.md) / [Exports](../modules.md) / TransactionId

# Interface: TransactionId

## Table of contents

### Properties

- [isSuccess](TransactionId.md#issuccess)

### Methods

- [hash](TransactionId.md#hash)
- [wait](TransactionId.md#wait)

## Properties

### isSuccess

• **isSuccess**: `boolean`

#### Defined in

[lib/mina.ts:66](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/mina.ts#L66)

## Methods

### hash

▸ **hash**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/mina.ts:68](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/mina.ts#L68)

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

[lib/mina.ts:67](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/mina.ts#L67)
