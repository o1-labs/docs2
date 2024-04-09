[o1js](../README.md) / [Modules](../modules.md) / Encoding

# Namespace: Encoding

## Table of contents

### Variables

- [Bijective](Encoding.md#bijective)

### Functions

- [bytesFromFields](Encoding.md#bytesfromfields)
- [bytesToFields](Encoding.md#bytestofields)
- [stringFromFields](Encoding.md#stringfromfields)
- [stringToFields](Encoding.md#stringtofields)

## Variables

### Bijective

• `Const` **Bijective**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Fp` | \{ `fromBytes`: (`bytes`: `Uint8Array`) => `Field`[] ; `toBytes`: (`fields`: `Field`[]) => `Uint8Array` ; `fromString`: (`message`: `string`) => `Field`[] ; `toString`: (`fields`: `Field`[]) => `string`  } |
| `Fp.fromBytes` | (`bytes`: `Uint8Array`) => `Field`[] |
| `Fp.toBytes` | (`fields`: `Field`[]) => `Uint8Array` |
| `Fp.fromString` | [object Object] |
| `Fp.toString` | [object Object] |
| `Fq` | \{ `fromBytes`: (`bytes`: `Uint8Array`) => `Field`[] ; `toBytes`: (`fields`: `Field`[]) => `Uint8Array` ; `fromString`: (`message`: `string`) => `Field`[] ; `toString`: (`fields`: `Field`[]) => `string`  } |
| `Fq.fromBytes` | (`bytes`: `Uint8Array`) => `Field`[] |
| `Fq.toBytes` | (`fields`: `Field`[]) => `Uint8Array` |
| `Fq.fromString` | [object Object] |
| `Fq.toString` | [object Object] |

#### Defined in

bindings/lib/encoding.ts:98

## Functions

### bytesFromFields

▸ **bytesFromFields**(`fields`): `Uint8Array`

Decodes a list of [Field](../modules.md#field-1) elements into a Uint8Array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

`Uint8Array`

#### Defined in

bindings/lib/encoding.ts:67

___

### bytesToFields

▸ **bytesToFields**(`bytes`): `Field`[]

Encodes a Uint8Array into [Field](../modules.md#field-1) elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Field`[]

#### Defined in

bindings/lib/encoding.ts:45

___

### stringFromFields

▸ **stringFromFields**(`fields`): `string`

Decodes a list of [Field](../modules.md#field-1) elements into a JavaScript string.

This function is not a valid in-snark computation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Field`[] |

#### Returns

`string`

#### Defined in

bindings/lib/encoding.ts:35

___

### stringToFields

▸ **stringToFields**(`message`): `Field`[]

Encodes a JavaScript string into a list of [Field](../modules.md#field-1) elements.

This function is not a valid in-snark computation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Field`[]

#### Defined in

bindings/lib/encoding.ts:25
