[SnarkyJS](../README.md) / [Exports](../modules.md) / Context

# Namespace: Context

## Table of contents

### Type Aliases

- [id](Context.md#id)
- [t](Context.md#t)

## Type Aliases

### id

Ƭ **id**: `number`

#### Defined in

[lib/global-context.ts:4](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/global-context.ts#L4)

___

### t

Ƭ **t**<`Context`\>: () => `Context` \| `undefined` & { `allowsNesting`: `boolean` ; `data`: { `context`: `Context` ; `id`: [`id`](Context.md#id)  }[] ; `id`: () => [`id`](Context.md#id) ; `enter`: (`context`: `Context`) => `number` ; `get`: () => `Context` ; `has`: () => `boolean` ; `leave`: (`id`: `number`) => `Context` ; `runWith`: <C, Result\>(`context`: `Context`, `func`: (`context`: `C`) => `Result`) => [`C`, `Result`] ; `runWithAsync`: <Result\>(`context`: `Context`, `func`: (`context`: `Context`) => `Promise`<`Result`\>) => `Promise`<[`Context`, `Result`]\>  }

#### Type parameters

| Name |
| :------ |
| `Context` |

#### Defined in

[lib/global-context.ts:6](https://github.com/o1-labs/snarkyjs/blob/5a945ad8/src/lib/global-context.ts#L6)
