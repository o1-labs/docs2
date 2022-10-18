# Class: Circuit

## Table of contents

### Constructors

- [constructor](Circuit.md#constructor)

### Methods

- [addConstraint](Circuit.md#addconstraint)
- [array](Circuit.md#array)
- [asProver](Circuit.md#asprover)
- [assertEqual](Circuit.md#assertequal)
- [constraintSystem](Circuit.md#constraintsystem)
- [equal](Circuit.md#equal)
- [generateKeypair](Circuit.md#generatekeypair)
- [if](Circuit.md#if)
- [inCheckedComputation](Circuit.md#incheckedcomputation)
- [inProver](Circuit.md#inprover)
- [newVariable](Circuit.md#newvariable)
- [prove](Circuit.md#prove)
- [runAndCheck](Circuit.md#runandcheck)
- [switch](Circuit.md#switch)
- [toFields](Circuit.md#tofields)
- [verify](Circuit.md#verify)
- [witness](Circuit.md#witness)

## Constructors

### constructor

• **new Circuit**()

## Methods

### addConstraint

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"multiply"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:492](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L492)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"add"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:499](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L499)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"equal"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:506](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L506)

▸ `Static` **addConstraint**(`this`, `kind`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Circuit`](Circuit.md) |
| `kind` | ``"boolean"`` |
| `x` | [`Field`](Field.md) |
| `y` | [`Field`](Field.md) |
| `z` | [`Field`](Field.md) |

#### Returns

`void`

#### Defined in

[snarky.d.ts:513](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L513)

___

### array

▸ `Static` **array**<`T`\>(`elementType`, `length`): [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `length` | `number` |

#### Returns

[`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`[]\>

#### Defined in

[snarky.d.ts:539](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L539)

___

### asProver

▸ `Static` **asProver**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `void` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:529](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L529)

___

### assertEqual

▸ `Static` **assertEqual**<`T`\>(`ctor`, `x`, `y`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:544](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L544)

▸ `Static` **assertEqual**<`T`\>(`x`, `y`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

#### Returns

`void`

#### Defined in

[snarky.d.ts:546](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L546)

___

### constraintSystem

▸ `Static` **constraintSystem**<`T`\>(`f`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `digest` | `string` |
| `result` | `T` |
| `rows` | `number` |

#### Defined in

[snarky.d.ts:533](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L533)

___

### equal

▸ `Static` **equal**<`T`\>(`ctor`, `x`, `y`): [`Bool`](Bool.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `Object` |
| `ctor.toFields` | (`x`: `T`) => [`Field`](Field.md)[] |
| `x` | `T` |
| `y` | `T` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:548](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L548)

▸ `Static` **equal**<`T`\>(`x`, `y`): [`Bool`](Bool.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |
| `y` | `T` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[snarky.d.ts:550](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L550)

___

### generateKeypair

▸ `Static` **generateKeypair**(): [`Keypair`](Keypair.md)

#### Returns

[`Keypair`](Keypair.md)

#### Defined in

[snarky.d.ts:572](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L572)

___

### if

▸ `Static` **if**<`T`\>(`b`, `ctor`, `x`, `y`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `ctor` | [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |
| `x` | `T` |
| `y` | `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:552](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L552)

▸ `Static` **if**<`T`\>(`b`, `x`, `y`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` \| [`Bool`](Bool.md) |
| `x` | `T` |
| `y` | `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:554](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L554)

___

### inCheckedComputation

▸ `Static` **inCheckedComputation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:582](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L582)

___

### inProver

▸ `Static` **inProver**(): `boolean`

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:580](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L580)

___

### newVariable

▸ `Static` **newVariable**(`f`): [`Field`](Field.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `string` \| `number` \| `boolean` \| [`Field`](Field.md) |

#### Returns

[`Field`](Field.md)

#### Defined in

[snarky.d.ts:521](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L521)

___

### prove

▸ `Static` **prove**(`privateInput`, `publicInput`, `kp`): `Proof`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateInput` | `any`[] |
| `publicInput` | `any`[] |
| `kp` | [`Keypair`](Keypair.md) |

#### Returns

`Proof`

#### Defined in

[snarky.d.ts:574](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L574)

___

### runAndCheck

▸ `Static` **runAndCheck**<`T`\>(`f`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:531](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L531)

___

### switch

▸ `Static` **switch**<`T`, `A`\>(`mask`, `type`, `values`): `T`

Generalization of `Circuit.if` for choosing between more than two different cases.
It takes a "mask", which is an array of `Bool`s that contains only one `true` element, as well as a type/constructor and an array of values of that type.
The result is that value which corresponds to the true element of the mask. Example:

```ts
let x = Circuit.switch([Bool(false), Bool(true)], Field, [Field(1), Field(2)]);
x.assertEquals(2);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`Bool`](Bool.md)[] |
| `type` | `A` |
| `values` | `T`[] |

#### Returns

`T`

#### Defined in

[snarky.d.ts:566](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L566)

___

### toFields

▸ `Static` **toFields**<`A`\>(`a`): [`Field`](Field.md)[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Field`](Field.md)[]

#### Defined in

[snarky.d.ts:578](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L578)

___

### verify

▸ `Static` **verify**(`publicInput`, `vk`, `pi`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `any`[] |
| `vk` | [`VerificationKey`](VerificationKey.md) |
| `pi` | `Proof` |

#### Returns

`boolean`

#### Defined in

[snarky.d.ts:576](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L576)

___

### witness

▸ `Static` **witness**<`T`, `S`\>(`ctor`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`, `S`\> = [`AsFieldElements`](../interfaces/AsFieldElements.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `S` |
| `f` | () => `T` |

#### Returns

`T`

#### Defined in

[snarky.d.ts:524](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L524)
