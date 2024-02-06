[o1js](../README.md) / [Modules](../modules.md) / Nullifier

# Class: Nullifier

Nullifiers are used as a public commitment to a specific anonymous account,
to forbid actions like double spending, or allow a consistent identity between anonymous actions.

RFC: https://github.com/o1-labs/o1js/issues/756

Paper: https://eprint.iacr.org/2022/1255.pdf

## Hierarchy

- \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }

  ↳ **`Nullifier`**

## Table of contents

### Constructors

- [constructor](Nullifier.md#constructor)

### Properties

- [private](Nullifier.md#private)
- [public](Nullifier.md#public)
- [publicKey](Nullifier.md#publickey)
- [\_isStruct](Nullifier.md#_isstruct)
- [check](Nullifier.md#check)
- [empty](Nullifier.md#empty)
- [fromFields](Nullifier.md#fromfields)
- [toAuxiliary](Nullifier.md#toauxiliary)
- [toFields](Nullifier.md#tofields)
- [toInput](Nullifier.md#toinput)
- [toJSON](Nullifier.md#tojson)

### Methods

- [assertUnused](Nullifier.md#assertunused)
- [getPublicKey](Nullifier.md#getpublickey)
- [isUnused](Nullifier.md#isunused)
- [key](Nullifier.md#key)
- [setUsed](Nullifier.md#setused)
- [verify](Nullifier.md#verify)
- [createTestNullifier](Nullifier.md#createtestnullifier)
- [fromJSON](Nullifier.md#fromjson)
- [sizeInFields](Nullifier.md#sizeinfields)

## Constructors

### constructor

• **new Nullifier**(`value`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `Object` | `undefined` |
| `value.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` |
| `value.public` | \{ nullifier: Group; s: Scalar; } | `undefined` |
| `value.publicKey` | [`Group`](Group.md) | `Group` |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).constructor

#### Defined in

[lib/circuit_value.ts:381](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L381)

## Properties

### private

• **private**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `c` | [`Field`](Field.md) |
| `g_r` | [`Group`](Group.md) |
| `h_m_pk_r` | [`Group`](Group.md) |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).private

#### Defined in

[lib/nullifier.ts:26](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L26)

___

### public

• **public**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nullifier` | [`Group`](Group.md) |
| `s` | [`Scalar`](Scalar.md) |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).public

#### Defined in

[lib/nullifier.ts:22](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L22)

___

### publicKey

• **publicKey**: [`Group`](Group.md) = `Group`

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).publicKey

#### Defined in

[lib/nullifier.ts:21](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L21)

___

### \_isStruct

▪ `Static` **\_isStruct**: ``true``

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).\_isStruct

#### Defined in

[lib/circuit_value.ts:381](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L381)

___

### check

▪ `Static` **check**: (`value`: \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }) => `void`

#### Type declaration

▸ (`value`): `void`

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, rather creates any number of assertions on the proof to prove `value` is a valid member of the type `T`.

For instance, calling check function on the type [Bool](Bool.md) asserts that the value of the element is either 1 or 0.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to put assertions on. |
| `value.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` | - |
| `value.public` | \{ nullifier: Group; s: Scalar; } | `undefined` | - |
| `value.publicKey` | [`Group`](Group.md) | `Group` | - |

##### Returns

`void`

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).check

#### Defined in

[snarky.d.ts:157](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L157)

___

### empty

▪ `Static` **empty**: () => \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } |
| `public` | \{ nullifier: Group; s: Scalar; } |
| `publicKey` | [`Group`](Group.md) |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).empty

#### Defined in

[lib/circuit_value.ts:390](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L390)

___

### fromFields

▪ `Static` **fromFields**: (`fields`: [`Field`](Field.md)[]) => \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }

#### Type declaration

▸ (`fields`): `Object`

A function that returns an element of type `T` from the given provable data.

**Important**: For any element of type `T`, this function is the reverse operation of calling [toFields](../interfaces/ProvablePure.md#tofields) method on an element of type `T`.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`Field`](Field.md)[] | an array of [Field](Field.md) elements describing the provable data of the new `T` element. |

##### Returns

`Object`

An element of type `T` generated from the given provable data.

| Name | Type |
| :------ | :------ |
| `private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } |
| `public` | \{ nullifier: Group; s: Scalar; } |
| `publicKey` | [`Group`](Group.md) |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).fromFields

#### Defined in

[snarky.d.ts:138](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L138)

___

### toAuxiliary

▪ `Static` **toAuxiliary**: (`value?`: \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }) => `any`[]

#### Type declaration

▸ (`value?`): `any`[]

A function that takes `value` (optional), an element of type `T`, as argument and returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.
As any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition, this function always returns a default value.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value?` | `Object` | `undefined` | the element of type `T` to generate the auxiliary data array from, optional. If not provided, a default value for auxiliary data is returned. |
| `value.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` | - |
| `value.public` | \{ nullifier: Group; s: Scalar; } | `undefined` | - |
| `value.publicKey` | [`Group`](Group.md) | `Group` | - |

##### Returns

`any`[]

An empty array, as any element of the interface `ProvablePure<T>` includes no "auxiliary" data by definition.

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).toAuxiliary

#### Defined in

[snarky.d.ts:127](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L127)

___

### toFields

▪ `Static` **toFields**: (`value`: \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }) => [`Field`](Field.md)[]

#### Type declaration

▸ (`value`): [`Field`](Field.md)[]

A function that takes `value`, an element of type `T`, as argument and returns an array of [Field](Field.md) elements that make up the provable data of `value`.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `Object` | `undefined` | the element of type `T` to generate the [Field](Field.md) array from. |
| `value.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` | - |
| `value.public` | \{ nullifier: Group; s: Scalar; } | `undefined` | - |
| `value.publicKey` | [`Group`](Group.md) | `Group` | - |

##### Returns

[`Field`](Field.md)[]

A [Field](Field.md) array describing how this `T` element is made up of [Field](Field.md) elements.

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).toFields

#### Defined in

[snarky.d.ts:117](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L117)

___

### toInput

▪ `Static` **toInput**: (`x`: \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }) => \{ `fields?`: [`Field`](Field.md)[] ; `packed?`: [[`Field`](Field.md), `number`][]  }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` |
| `x.public` | \{ nullifier: Group; s: Scalar; } | `undefined` |
| `x.publicKey` | [`Group`](Group.md) | `Group` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fields?` | [`Field`](Field.md)[] |
| `packed?` | [[`Field`](Field.md), `number`][] |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).toInput

#### Defined in

[lib/circuit_value.ts:384](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L384)

___

### toJSON

▪ `Static` **toJSON**: (`x`: \{ `private`: \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } ; `public`: \{ nullifier: Group; s: Scalar; } ; `publicKey`: [`Group`](Group.md) = Group }) => \{ `private`: \{ c: string; g\_r: \{ x: string; y: string; }; h\_m\_pk\_r: \{ x: string; y: string; }; } ; `public`: \{ nullifier: \{ x: string; y: string; }; s: string; } ; `publicKey`: \{ `x`: `string` ; `y`: `string`  } = Group }

#### Type declaration

▸ (`x`): `Object`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Object` | `undefined` |
| `x.private` | \{ c: Field; g\_r: Group; h\_m\_pk\_r: Group; } | `undefined` |
| `x.public` | \{ nullifier: Group; s: Scalar; } | `undefined` |
| `x.publicKey` | [`Group`](Group.md) | `Group` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `private` | \{ c: string; g\_r: \{ x: string; y: string; }; h\_m\_pk\_r: \{ x: string; y: string; }; } |
| `public` | \{ nullifier: \{ x: string; y: string; }; s: string; } |
| `publicKey` | \{ `x`: `string` ; `y`: `string`  } |
| `publicKey.x` | `string` |
| `publicKey.y` | `string` |

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).toJSON

#### Defined in

[lib/circuit_value.ts:388](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/circuit_value.ts#L388)

## Methods

### assertUnused

▸ **assertUnused**(`witness`, `root`): `void`

Checks if the Nullifier has been used before.

#### Parameters

| Name | Type |
| :------ | :------ |
| `witness` | [`MerkleMapWitness`](MerkleMapWitness.md) |
| `root` | [`Field`](Field.md) |

#### Returns

`void`

**`Example`**

```ts
// asserts that the nullifier has not been used before, throws an error otherwise
nullifier.assertUnused();
```

#### Defined in

[lib/nullifier.ts:141](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L141)

___

### getPublicKey

▸ **getPublicKey**(): [`PublicKey`](Types.PublicKey.md)

Returns the [PublicKey](Types.PublicKey.md) that is associated with this Nullifier.

#### Returns

[`PublicKey`](Types.PublicKey.md)

**`Example`**

```ts
let pk = nullifier.getPublicKey();
```

#### Defined in

[lib/nullifier.ts:170](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L170)

___

### isUnused

▸ **isUnused**(`witness`, `root`): [`Bool`](Bool.md)

Returns the state of the Nullifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `witness` | [`MerkleMapWitness`](MerkleMapWitness.md) |
| `root` | [`Field`](Field.md) |

#### Returns

[`Bool`](Bool.md)

**`Example`**

```ts
// returns a Bool based on whether or not the nullifier has been used before
let isUnused = nullifier.isUnused();
```

#### Defined in

[lib/nullifier.ts:121](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L121)

___

### key

▸ **key**(): [`Field`](Field.md)

The key of the nullifier, which belongs to a unique message and a public key.
Used as an index in Merkle trees.

#### Returns

[`Field`](Field.md)

**`Example`**

```ts
// returns the key of the nullifier which can be used as index in a Merkle tree/map
let key = nullifier.key();
```

#### Defined in

[lib/nullifier.ts:108](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L108)

___

### setUsed

▸ **setUsed**(`witness`): [`Field`](Field.md)

Sets the Nullifier, returns the new Merkle root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `witness` | [`MerkleMapWitness`](MerkleMapWitness.md) |

#### Returns

[`Field`](Field.md)

**`Example`**

```ts
// calculates the new root of the Merkle tree in which the nullifier is set to used
let newRoot = nullifier.setUsed(witness);
```

#### Defined in

[lib/nullifier.ts:156](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L156)

___

### verify

▸ **verify**(`message`): `void`

Verifies that the Nullifier belongs to a specific message. Throws an error if the Nullifier is incorrect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Field`](Field.md)[] |

#### Returns

`void`

**`Example`**

```ts
let nullifierMessage = [voteId, ...otherData];
// throws an error if the nullifier is invalid or doesn't belong to this specific message
nullifier.verify(nullifierMessage);
```

#### Defined in

[lib/nullifier.ts:47](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L47)

___

### createTestNullifier

▸ `Static` **createTestNullifier**(`message`, `sk`): `Nullifier`

_Note_: This is *not* the recommended way to create a Nullifier in production. Please use mina-signer to create Nullifiers.
Also, this function cannot be run within provable code to avoid unintended creations of Nullifiers - a Nullifier should never be created inside proveable code (e.g. a smart contract) directly, but rather created inside the users wallet (or other secure enclaves, so the private key never leaves that enclave).

PLUME: An ECDSA Nullifier Scheme for Unique
Pseudonymity within Zero Knowledge Proofs
https://eprint.iacr.org/2022/1255.pdf chapter 3 page 14

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Field`](Field.md)[] |
| `sk` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`Nullifier`

#### Defined in

[lib/nullifier.ts:183](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L183)

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`Nullifier`](Nullifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `Nullifier` |

#### Returns

[`Nullifier`](Nullifier.md)

#### Overrides

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).fromJSON

#### Defined in

[lib/nullifier.ts:32](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/nullifier.ts#L32)

___

### sizeInFields

▸ `Static` **sizeInFields**(): `number`

Return the size of the `T` type in terms of [Field](Field.md) type, as [Field](Field.md) is the primitive type.

**Warning**: This function returns a `number`, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of [Field](Field.md) type.

#### Inherited from

Struct(\{
  publicKey: Group,
  public: \{
    nullifier: Group,
    s: Scalar,
  },
  private: \{
    c: Field,
    g\_r: Group,
    h\_m\_pk\_r: Group,
  },
}).sizeInFields

#### Defined in

[snarky.d.ts:147](https://github.com/o1-labs/o1js/blob/5d8e331/src/snarky.d.ts#L147)
