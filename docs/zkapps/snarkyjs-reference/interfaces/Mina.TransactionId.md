[SnarkyJS](../README.md) / [Modules](../modules.md) / [Mina](../modules/Mina.md) / TransactionId

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

[lib/mina.ts:69](https://github.com/o1-labs/snarkyjs/blob/ede537b/src/lib/mina.ts#L69)

## Methods

### hash

▸ **hash**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/mina.ts:71](https://github.com/o1-labs/snarkyjs/blob/ede537b/src/lib/mina.ts#L71)

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

[lib/mina.ts:70](https://github.com/o1-labs/snarkyjs/blob/ede537b/src/lib/mina.ts#L70)
