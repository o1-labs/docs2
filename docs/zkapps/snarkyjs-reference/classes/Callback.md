[SnarkyJS](../README.md) / [Exports](../modules.md) / Callback

# Class: Callback<Result\>

## Type parameters

| Name |
| :------ |
| `Result` |

## Hierarchy

- [`GenericArgument`](GenericArgument.md)

  ↳ **`Callback`**

## Table of contents

### Constructors

- [constructor](Callback.md#constructor)

### Properties

- [accountUpdate](Callback.md#accountupdate)
- [args](Callback.md#args)
- [instance](Callback.md#instance)
- [isEmpty](Callback.md#isempty)
- [methodIntf](Callback.md#methodintf)
- [result](Callback.md#result)

### Methods

- [create](Callback.md#create)

## Constructors

### constructor

• `Private` **new Callback**<`Result`\>(`self`)

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`Callback`](Callback.md)<`any`\> |

#### Overrides

[GenericArgument](GenericArgument.md).[constructor](GenericArgument.md#constructor)

#### Defined in

[lib/zkapp.ts:590](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L590)

## Properties

### accountUpdate

• **accountUpdate**: [`AccountUpdate`](AccountUpdate.md)

#### Defined in

[lib/zkapp.ts:551](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L551)

___

### args

• **args**: `any`[]

#### Defined in

[lib/zkapp.ts:548](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L548)

___

### instance

• **instance**: [`SmartContract`](SmartContract.md)

#### Defined in

[lib/zkapp.ts:546](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L546)

___

### isEmpty

• **isEmpty**: `boolean`

#### Inherited from

[GenericArgument](GenericArgument.md).[isEmpty](GenericArgument.md#isempty)

#### Defined in

[lib/proof_system.ts:460](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/proof_system.ts#L460)

___

### methodIntf

• **methodIntf**: [`MethodInterface`](../modules.md#methodinterface) & { `returnType`: [`Provable`](../modules.md#provable-1)<`Result`\>  }

#### Defined in

[lib/zkapp.ts:547](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L547)

___

### result

• `Optional` **result**: `Result`

#### Defined in

[lib/zkapp.ts:550](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L550)

## Methods

### create

▸ `Static` **create**<`T`, `K`\>(`instance`, `methodName`, `args`): [`Callback`](Callback.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](SmartContract.md)<`T`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `T` |
| `methodName` | `K` |
| `args` | `T`[`K`] extends (...`args`: `A`) => `any` ? `A` : `never` |

#### Returns

[`Callback`](Callback.md)<`any`\>

#### Defined in

[lib/zkapp.ts:553](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/zkapp.ts#L553)
