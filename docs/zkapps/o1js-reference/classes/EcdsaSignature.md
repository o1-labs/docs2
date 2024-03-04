[o1js](../README.md) / [Modules](../modules.md) / EcdsaSignature

# Class: EcdsaSignature

## Table of contents

### Constructors

- [constructor](EcdsaSignature.md#constructor)

### Properties

- [r](EcdsaSignature.md#r)
- [s](EcdsaSignature.md#s)
- [\_Curve](EcdsaSignature.md#_curve)
- [\_provable](EcdsaSignature.md#_provable)

### Accessors

- [Constructor](EcdsaSignature.md#constructor-1)
- [Curve](EcdsaSignature.md#curve)
- [provable](EcdsaSignature.md#provable)

### Methods

- [toBigInt](EcdsaSignature.md#tobigint)
- [verify](EcdsaSignature.md#verify)
- [verifySignedHash](EcdsaSignature.md#verifysignedhash)
- [check](EcdsaSignature.md#check)
- [from](EcdsaSignature.md#from)
- [fromHex](EcdsaSignature.md#fromhex)
- [sign](EcdsaSignature.md#sign)
- [signHash](EcdsaSignature.md#signhash)

## Constructors

### constructor

• **new EcdsaSignature**(`signature`)

Create a new [EcdsaSignature](EcdsaSignature.md) from an object containing the scalars r and s.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `Object` |
| `signature.r` | `number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md) |
| `signature.s` | `number` \| `bigint` \| `Field3` \| [`AlmostForeignField`](AlmostForeignField.md) |

#### Defined in

[lib/foreign-ecdsa.ts:37](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L37)

## Properties

### r

• **r**: [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-ecdsa.ts:30](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L30)

___

### s

• **s**: [`AlmostForeignField`](AlmostForeignField.md)

#### Defined in

[lib/foreign-ecdsa.ts:31](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L31)

___

### \_Curve

▪ `Static` `Optional` **\_Curve**: typeof [`ForeignCurve`](ForeignCurve.md)

#### Defined in

[lib/foreign-ecdsa.ts:164](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L164)

___

### \_provable

▪ `Static` `Optional` **\_provable**: `ProvablePureExtended`\<[`EcdsaSignature`](EcdsaSignature.md), \{ `r`: `string` ; `s`: `string`  }\>

#### Defined in

[lib/foreign-ecdsa.ts:165](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L165)

## Accessors

### Constructor

• `get` **Constructor**(): typeof [`EcdsaSignature`](EcdsaSignature.md)

#### Returns

typeof [`EcdsaSignature`](EcdsaSignature.md)

#### Defined in

[lib/foreign-ecdsa.ts:161](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L161)

___

### Curve

• `Static` `get` **Curve**(): typeof [`ForeignCurve`](ForeignCurve.md)

The [ForeignCurve](ForeignCurve.md) on which the ECDSA signature is defined.

#### Returns

typeof [`ForeignCurve`](ForeignCurve.md)

#### Defined in

[lib/foreign-ecdsa.ts:173](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L173)

___

### provable

• `Static` `get` **provable**(): `ProvablePureExtended`\<[`EcdsaSignature`](EcdsaSignature.md), \{ `r`: `string` ; `s`: `string`  }\>

`Provable<EcdsaSignature>`

#### Returns

`ProvablePureExtended`\<[`EcdsaSignature`](EcdsaSignature.md), \{ `r`: `string` ; `s`: `string`  }\>

#### Defined in

[lib/foreign-ecdsa.ts:180](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L180)

## Methods

### toBigInt

▸ **toBigInt**(): `Object`

Convert this signature to an object with bigint fields.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `r` | `bigint` |
| `s` | `bigint` |

#### Defined in

[lib/foreign-ecdsa.ts:65](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L65)

___

### verify

▸ **verify**(`message`, `publicKey`): [`Bool`](Bool.md)

Verify the ECDSA signature given the message (an array of bytes) and public key (a [Curve](EcdsaSignature.md#curve) point).

**Important:** This method returns a [Bool](Bool.md) which indicates whether the signature is valid.
So, to actually prove validity of a signature, you need to assert that the result is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Bytes` |
| `publicKey` | `FlexiblePoint` |

#### Returns

[`Bool`](Bool.md)

**`Throws`**

if one of the signature scalars is zero or if the public key is not on the curve.

**`Example`**

```ts
// create classes for your curve
class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}
class Scalar extends Secp256k1.Scalar {}
class Ecdsa extends createEcdsa(Secp256k1) {}

let message = 'my message';
let messageBytes = new TextEncoder().encode(message);

// outside provable code: create inputs
let privateKey = Scalar.random();
let publicKey = Secp256k1.generator.scale(privateKey);
let signature = Ecdsa.sign(messageBytes, privateKey.toBigInt());

// ...
// in provable code: create input witnesses (or use method inputs, or constants)
let pk = Provable.witness(Secp256k1.provable, () => publicKey);
let msg = Provable.witness(Provable.Array(Field, 9), () => messageBytes.map(Field));
let sig = Provable.witness(Ecdsa.provable, () => signature);

// verify signature
let isValid = sig.verify(msg, pk);
isValid.assertTrue('signature verifies');
```

#### Defined in

[lib/foreign-ecdsa.ts:103](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L103)

___

### verifySignedHash

▸ **verifySignedHash**(`msgHash`, `publicKey`): [`Bool`](Bool.md)

Verify the ECDSA signature given the message hash (a [Scalar](Scalar.md)) and public key (a [Curve](EcdsaSignature.md#curve) point).

This is a building block of [verify](EcdsaSignature.md#verify), where the input message is also hashed.
In contrast, this method just takes the message hash (a curve scalar) as input, giving you flexibility in
choosing the hashing algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgHash` | `bigint` \| [`AlmostForeignField`](AlmostForeignField.md) |
| `publicKey` | `FlexiblePoint` |

#### Returns

[`Bool`](Bool.md)

#### Defined in

[lib/foreign-ecdsa.ts:116](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L116)

___

### check

▸ `Static` **check**(`signature`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`EcdsaSignature`](EcdsaSignature.md) |

#### Returns

`void`

#### Defined in

[lib/foreign-ecdsa.ts:155](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L155)

___

### from

▸ `Static` **from**(`signature`): [`EcdsaSignature`](EcdsaSignature.md)

Coerce the input to a [EcdsaSignature](EcdsaSignature.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `FlexibleSignature` |

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

#### Defined in

[lib/foreign-ecdsa.ts:48](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L48)

___

### fromHex

▸ `Static` **fromHex**(`rawSignature`): [`EcdsaSignature`](EcdsaSignature.md)

Create an [EcdsaSignature](EcdsaSignature.md) from a raw 130-char hex string as used in
[Ethereum transactions](https://ethereum.org/en/developers/docs/transactions/#typed-transaction-envelope).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSignature` | `string` |

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

#### Defined in

[lib/foreign-ecdsa.ts:57](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L57)

___

### sign

▸ `Static` **sign**(`message`, `privateKey`): [`EcdsaSignature`](EcdsaSignature.md)

Create an [EcdsaSignature](EcdsaSignature.md) by signing a message with a private key.

Note: This method is not provable, and only takes JS bigints as input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` \| (`number` \| `bigint`)[] |
| `privateKey` | `bigint` |

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

#### Defined in

[lib/foreign-ecdsa.ts:135](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L135)

___

### signHash

▸ `Static` **signHash**(`msgHash`, `privateKey`): [`EcdsaSignature`](EcdsaSignature.md)

Create an [EcdsaSignature](EcdsaSignature.md) by signing a message hash with a private key.

This is a building block of [sign](EcdsaSignature.md#sign), where the input message is also hashed.
In contrast, this method just takes the message hash (a curve scalar) as input, giving you flexibility in
choosing the hashing algorithm.

Note: This method is not provable, and only takes JS bigints as input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgHash` | `bigint` |
| `privateKey` | `bigint` |

#### Returns

[`EcdsaSignature`](EcdsaSignature.md)

#### Defined in

[lib/foreign-ecdsa.ts:150](https://github.com/o1-labs/o1js/blob/5d8e331/src/lib/foreign-ecdsa.ts#L150)
