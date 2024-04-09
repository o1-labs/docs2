[o1js](../README.md) / [Modules](../modules.md) / method

# Namespace: method

## Table of contents

### Functions

- [returns](method.md#returns)

## Functions

### returns

▸ **returns**\<`K`, `T`, `R`\>(`returnType`): (`target`: `T` & \{ [k in string]: Function }, `methodName`: `K` & `string` & keyof `T`, `descriptor`: `PropertyDescriptor`) => `void`

A decorator to mark a zkApp method as provable, and declare its return type.

```
\@method.returns(Field)
async myMethod(someArg: Field): Promise<Field> {
  // your code here
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `T` | extends [`SmartContract`](../classes/SmartContract.md) |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnType` | [`Provable`](../modules.md#provable-1)\<`R`\> |

#### Returns

`fn`

▸ (`target`, `methodName`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` & \{ [k in string]: Function } |
| `methodName` | `K` & `string` & keyof `T` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

[lib/mina/zkapp.ts:170](https://github.com/o1-labs/o1js/blob/6731ad3/src/lib/mina/zkapp.ts#L170)
