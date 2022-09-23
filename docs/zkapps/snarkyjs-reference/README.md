# snarkyjs

## Table of contents

### References

- [PublicKey](README.md#publickey)

### Namespaces

- [Encoding](modules/Encoding.md)
- [Encryption](modules/Encryption.md)
- [Experimental](modules/Experimental.md)
- [Mina](modules/Mina.md)
- [Types](modules/Types.md)

### Classes

- [AccountUpdate](classes/AccountUpdate.md)
- [Bool](classes/Bool.md)
- [Character](classes/Character.md)
- [Circuit](classes/Circuit.md)
- [CircuitString](classes/CircuitString.md)
- [CircuitValue](classes/CircuitValue.md)
- [Field](classes/Field.md)
- [Group](classes/Group.md)
- [Int64](classes/Int64.md)
- [Keypair](classes/Keypair.md)
- [Ledger](classes/Ledger.md)
- [PrivateKey](classes/PrivateKey.md)
- [Proof](classes/Proof.md)
- [Scalar](classes/Scalar.md)
- [SelfProof](classes/SelfProof.md)
- [Sign](classes/Sign.md)
- [Signature](classes/Signature.md)
- [SmartContract](classes/SmartContract.md)
- [Token](classes/Token.md)
- [UInt32](classes/UInt32.md)
- [UInt64](classes/UInt64.md)
- [VerificationKey](classes/VerificationKey.md)

### Interfaces

- [AsFieldElements](interfaces/AsFieldElements.md)
- [Permissions](interfaces/Permissions.md)

### Type Aliases

- [DeployArgs](README.md#deployargs)
- [State](README.md#state)
- [TokenSymbol](README.md#tokensymbol)
- [ZkappPublicInput](README.md#zkapppublicinput)

### Variables

- [Permissions](README.md#permissions)
- [Poseidon](README.md#poseidon)
- [TokenSymbol](README.md#tokensymbol-1)
- [ZkappPublicInput](README.md#zkapppublicinput-1)
- [isReady](README.md#isready)

### Functions

- [Account](README.md#account)
- [State](README.md#state-1)
- [addCachedAccount](README.md#addcachedaccount)
- [arrayProp](README.md#arrayprop)
- [circuitMain](README.md#circuitmain)
- [circuitValue](README.md#circuitvalue)
- [declareMethods](README.md#declaremethods)
- [declareState](README.md#declarestate)
- [deploy](README.md#deploy)
- [fetchAccount](README.md#fetchaccount)
- [fetchLastBlock](README.md#fetchlastblock)
- [getSrs](README.md#getsrs)
- [matrixProp](README.md#matrixprop)
- [method](README.md#method)
- [prop](README.md#prop)
- [public\_](README.md#public_)
- [recoverVerificationKey](README.md#recoververificationkey)
- [sendZkapp](README.md#sendzkapp)
- [serializeVerificationKey](README.md#serializeverificationkey)
- [setGraphqlEndpoint](README.md#setgraphqlendpoint)
- [shutdown](README.md#shutdown)
- [signFeePayer](README.md#signfeepayer)
- [state](README.md#state-2)
- [verify](README.md#verify)
- [zkappCommandToJson](README.md#zkappcommandtojson)

## References

### PublicKey

Re-exports [PublicKey](classes/Types.PublicKey.md)

## Type Aliases

### DeployArgs

Ƭ **DeployArgs**: { `verificationKey?`: { `data`: `string` ; `hash`: `string` \| [`Field`](classes/Field.md)  } ; `zkappKey?`: [`PrivateKey`](classes/PrivateKey.md)  } \| `undefined`

#### Defined in

[lib/zkapp.ts:1095](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1095)

___

### State

Ƭ **State**<`A`\>: `Object`

Gettable and settable state that can be checked for equality.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assertEquals` | (`a`: `A`) => `void` |
| `assertNothing` | () => `void` |
| `fetch` | () => `Promise`<`undefined` \| `A`\> |
| `get` | () => `A` |
| `set` | (`a`: `A`) => `void` |

#### Defined in

[lib/state.ts:25](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/state.ts#L25)

[lib/state.ts:18](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/state.ts#L18)

___

### TokenSymbol

Ƭ **TokenSymbol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](classes/Field.md) |
| `symbol` | `string` |

#### Defined in

[lib/hash.ts:140](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/hash.ts#L140)

[lib/hash.ts:168](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/hash.ts#L168)

___

### ZkappPublicInput

Ƭ **ZkappPublicInput**: `Object`

The public input for zkApps consists of certain hashes of the proving AccountUpdate (and its child accountUpdates) which is constructed during method execution.

 For SmartContract proving, a method is run twice: First outside the proof, to obtain the public input, and once in the prover,
 which takes the public input as input. The current transaction is hashed again inside the prover, which asserts that the result equals the input public input,
 as part of the snark circuit. The block producer will also hash the transaction they receive and pass it as a public input to the verifier.
 Thus, the transaction is fully constrained by the proof - the proof couldn't be used to attest to a different transaction.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountUpdate` | [`Field`](classes/Field.md) |
| `calls` | [`Field`](classes/Field.md) |

#### Defined in

[lib/account_update.ts:1356](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1356)

[lib/account_update.ts:1357](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1357)

## Variables

### Permissions

• **Permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | () => [`Permissions`](README.md#permissions) |
| `impossible` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `initial` | () => [`Permissions`](README.md#permissions) |
| `none` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proof` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `proofOrSignature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |
| `signature` | () => [`AuthRequired`](modules/Types.md#authrequired-1) |

#### Defined in

[lib/account_update.ts:160](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L160)

[lib/account_update.ts:224](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L224)

___

### Poseidon

• `Const` **Poseidon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Sponge` | typeof `Sponge` |
| `get initialState()` | [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |
| `hash` | (`input`: [`Field`](classes/Field.md)[]) => [`Field`](classes/Field.md) |
| `update` | (`state`: [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)], `input`: [`Field`](classes/Field.md)[]) => [[`Field`](classes/Field.md), [`Field`](classes/Field.md), [`Field`](classes/Field.md)] |

#### Defined in

[lib/hash.ts:36](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/hash.ts#L36)

___

### TokenSymbol

• **TokenSymbol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `empty` | { `field`: [`Field`](classes/Field.md) = Field.zero; `symbol`: `string` = '' } |
| `empty.field` | [`Field`](classes/Field.md) |
| `empty.symbol` | `string` |
| `check` | (`value`: [`TokenSymbol`](README.md#tokensymbol-1)) => `void` |
| `from` | (`symbol`: `string`) => [`TokenSymbol`](README.md#tokensymbol-1) |
| `fromFields` | (`fields`: [`Field`](classes/Field.md)[], `aux`: `any`[]) => [`TokenSymbol`](README.md#tokensymbol-1) |
| `sizeInFields` | () => `number` |
| `toAuxiliary` | (`value?`: [`TokenSymbol`](README.md#tokensymbol-1)) => `any`[] |
| `toFields` | (`value`: [`TokenSymbol`](README.md#tokensymbol-1)) => [`Field`](classes/Field.md)[] |
| `toInput` | (`value`: [`TokenSymbol`](README.md#tokensymbol-1)) => `HashInput` |
| `toJSON` | (`value`: [`TokenSymbol`](README.md#tokensymbol-1)) => `string` |

#### Defined in

[lib/hash.ts:140](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/hash.ts#L140)

[lib/hash.ts:168](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/hash.ts#L168)

___

### ZkappPublicInput

• **ZkappPublicInput**: `AsFieldsExtended`<[`ZkappPublicInput`](README.md#zkapppublicinput-1)\>

#### Defined in

[lib/account_update.ts:1356](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1356)

[lib/account_update.ts:1357](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1357)

___

### isReady

• **isReady**: `Promise`<`undefined`\>

A Promise that resolves when SnarkyJS is ready to be used

#### Defined in

[snarky.d.ts:857](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L857)

## Functions

### Account

▸ **Account**(`address`, `tokenId?`): `PreconditionClassType`<`AccountPrecondition`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`PublicKey`](classes/Types.PublicKey.md) |
| `tokenId?` | [`Field`](classes/Field.md) |

#### Returns

`PreconditionClassType`<`AccountPrecondition`\>

#### Defined in

[lib/zkapp.ts:1152](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1152)

___

### State

▸ **State**<`A`\>(): [`State`](README.md#state)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Returns

[`State`](README.md#state)<`A`\>

#### Defined in

[lib/state.ts:25](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/state.ts#L25)

___

### addCachedAccount

▸ **addCachedAccount**(`account`, `graphqlEndpoint?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `account` | `Object` | `undefined` |
| `account.balance?` | `string` \| `number` \| [`UInt64`](classes/UInt64.md) | `undefined` |
| `account.nonce` | `string` \| `number` \| [`UInt32`](classes/UInt32.md) | `undefined` |
| `account.publicKey` | `string` \| [`PublicKey`](classes/Types.PublicKey.md) | `undefined` |
| `account.tokenId` | `string` | `undefined` |
| `account.zkapp?` | `Object` | `undefined` |
| `account.zkapp.appState` | (`string` \| `number` \| [`Field`](classes/Field.md))[] | `undefined` |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:362](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/fetch.ts#L362)

___

### arrayProp

▸ **arrayProp**<`T`\>(`elementType`, `length`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`AsFieldElements`](interfaces/AsFieldElements.md)<`T`\> |
| `length` | `number` |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[lib/circuit_value.ts:284](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L284)

___

### circuitMain

▸ **circuitMain**(`target`, `propertyName`, `_descriptor?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyName` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

#### Returns

`any`

#### Defined in

[lib/circuit_value.ts:353](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L353)

___

### circuitValue

▸ **circuitValue**<`T`\>(`typeObj`, `options?`): `AsFieldsExtended`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeObj` | `any` |
| `options?` | `Object` |
| `options.customObjectKeys` | `string`[] |

#### Returns

`AsFieldsExtended`<`T`\>

#### Defined in

[lib/circuit_value.ts:407](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L407)

___

### declareMethods

▸ **declareMethods**<`T`\>(`SmartContract`, `methodArguments`): `void`

`declareMethods` can be used in place of the `@method` decorator
to declare SmartContract methods along with their list of arguments.
It should be placed _after_ the class declaration.
Here is an example of declaring a method `update`, which takes a single argument of type `Field`:
```ts
class MyContract extends SmartContract {
  // ...
  update(x: Field) {
    // ...
  }
}
declareMethods(MyContract, { update: [Field] }); // `[Field]` is the list of arguments!
```
Note that a method of the same name must still be defined on the class, just without the decorator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `T` |
| `methodArguments` | `Record`<`string`, [`AsFieldElements`](interfaces/AsFieldElements.md)<`unknown`\>[]\> |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:1229](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1229)

___

### declareState

▸ **declareState**<`T`\>(`SmartContract`, `states`): `void`

`declareState` can be used in place of the `@state` decorator to declare on-chain state on a SmartContract.
It should be placed _after_ the class declaration.
Here is an example of declaring a state property `x` of type `Field`.
```ts
class MyContract extends SmartContract {
  x = State<Field>();
  // ...
}
declareState(MyContract, { x: Field });
```

If you're using pure JS, it's _not_ possible to use the built-in class field syntax,
i.e. the following will _not_ work:

```js
// THIS IS WRONG IN JS!
class MyContract extends SmartContract {
  x = State();
}
declareState(MyContract, { x: Field });
```

Instead, add a constructor where you assign the property:
```js
class MyContract extends SmartContract {
  constructor(x) {
    super();
    this.x = State();
  }
}
declareState(MyContract, { x: Field });
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `T` |
| `states` | `Record`<`string`, [`AsFieldElements`](interfaces/AsFieldElements.md)<`unknown`\>\> |

#### Returns

`void`

#### Defined in

[lib/state.ts:115](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/state.ts#L115)

___

### deploy

▸ **deploy**<`S`\>(`SmartContract`, `__namedParameters`): `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends typeof [`SmartContract`](classes/SmartContract.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `SmartContract` | `S` |
| `__namedParameters` | `Object` |
| `__namedParameters.feePayer?` | [`FeePayerSpec`](modules/Mina.md#feepayerspec) |
| `__namedParameters.initialBalance?` | `string` \| `number` |
| `__namedParameters.tokenId?` | [`Field`](classes/Field.md) |
| `__namedParameters.verificationKey` | `Object` |
| `__namedParameters.verificationKey.data` | `string` |
| `__namedParameters.verificationKey.hash` | `string` \| [`Field`](classes/Field.md) |
| `__namedParameters.zkappKey` | [`PrivateKey`](classes/PrivateKey.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/zkapp.ts:1104](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1104)

___

### fetchAccount

▸ **fetchAccount**(`accountInfo`, `graphqlEndpoint?`, `config?`): `Promise`<{ `account`: `Account` ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

Gets account information on the specified publicKey by performing a GraphQL query
to the specified endpoint. This will call the 'GetAccountInfo' query which fetches
zkapp related account information.

If an error is returned by the specified endpoint, an error is thrown. Otherwise,
the data is returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accountInfo` | `Object` | `undefined` | - |
| `accountInfo.publicKey` | `string` \| [`PublicKey`](classes/Types.PublicKey.md) | `undefined` | - |
| `accountInfo.tokenId?` | `string` | `undefined` | - |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` | The graphql endpoint to fetch from |
| `config` | `Object` | `{}` | An object that exposes an additional timeout option |
| `config.timeout` | `undefined` \| `number` | `undefined` | - |

#### Returns

`Promise`<{ `account`: `Account` ; `error`: `undefined`  } \| { `account`: `undefined` ; `error`: `FetchError`  }\>

zkapp information on the specified account or an error is thrown

#### Defined in

[lib/fetch.ts:50](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/fetch.ts#L50)

___

### fetchLastBlock

▸ **fetchLastBlock**(`graphqlEndpoint?`): `Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |

#### Returns

`Promise`<`PreconditionBaseTypes`<{ `blockchainLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceGenesis`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `globalSlotSinceHardFork`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `minWindowDensity`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `nextEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `snarkedLedgerHash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `stakingEpochData`: { `epochLength`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt32`](classes/UInt32.md) ; `upper`: [`UInt32`](classes/UInt32.md)  }  } ; `ledger`: { `hash`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  } ; `lockCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `seed`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  } ; `startCheckpoint`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: [`Field`](classes/Field.md)  }  } ; `timestamp`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  } ; `totalCurrency`: { `isSome`: [`Bool`](classes/Bool.md) ; `value`: { `lower`: [`UInt64`](classes/UInt64.md) ; `upper`: [`UInt64`](classes/UInt64.md)  }  }  }\>\>

#### Defined in

[lib/fetch.ts:388](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/fetch.ts#L388)

___

### getSrs

▸ **getSrs**(`keypair`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keypair` | `any` | SNARK keypair, as returned by Circuit.generateKeypair |

#### Returns

`any`

The SRS (structured reference string), needed to reconstruct the keypair later

#### Defined in

[snarky/addons.js:18](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/addons.js#L18)

___

### matrixProp

▸ **matrixProp**<`T`\>(`elementType`, `nRows`, `nColumns`): (`target`: `any`, `key`: `string`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | [`AsFieldElements`](interfaces/AsFieldElements.md)<`T`\> |
| `nRows` | `number` |
| `nColumns` | `number` |

#### Returns

`fn`

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[lib/circuit_value.ts:293](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L293)

___

### method

▸ **method**<`T`\>(`target`, `methodName`, `descriptor`): `void`

A decorator to use in a zkapp to mark a method as callable by anyone.
You can use inside your zkapp class as:

```
@method myMethod(someArg: Field) {
 // your code here
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](classes/SmartContract.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` & { `constructor`: `any`  } |
| `methodName` | keyof `T` & `string` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`void`

#### Defined in

[lib/zkapp.ts:94](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L94)

___

### prop

▸ **prop**(`this`, `target`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `target` | `any` |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:225](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L225)

___

### public\_

▸ **public_**(`target`, `_key`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `_key` | `string` \| `symbol` |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[lib/circuit_value.ts:309](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/circuit_value.ts#L309)

___

### recoverVerificationKey

▸ **recoverVerificationKey**(`srs`, `serializedVk`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srs` | `any` | the "structured reference string", a set of precomputed values needed for verifying proofs |
| `serializedVk` | `string` | string representation of a Circuit verification key |

#### Returns

`any`

the recovered verification key

#### Defined in

[snarky/addons.js:49](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/addons.js#L49)

___

### sendZkapp

▸ **sendZkapp**(`json`, `graphqlEndpoint?`, `__namedParameters?`): `Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `json` | `string` | `undefined` |
| `graphqlEndpoint` | `string` | `defaultGraphqlEndpoint` |
| `__namedParameters` | `Object` | `{}` |
| `__namedParameters.timeout` | `undefined` \| `number` | `undefined` |

#### Returns

`Promise`<[`FetchResponse`, `undefined`] \| [`undefined`, `FetchError`]\>

#### Defined in

[lib/fetch.ts:532](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/fetch.ts#L532)

___

### serializeVerificationKey

▸ **serializeVerificationKey**(`verificationKey`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verificationKey` | `any` | the verification key of a Circuit |

#### Returns

`string`

string representation of the verification key

#### Defined in

[snarky/addons.js:27](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky/addons.js#L27)

___

### setGraphqlEndpoint

▸ **setGraphqlEndpoint**(`graphqlEndpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphqlEndpoint` | `string` |

#### Returns

`void`

#### Defined in

[lib/fetch.ts:33](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/fetch.ts#L33)

___

### shutdown

▸ **shutdown**(): `Promise`<`undefined`\>

This function *must* be called at the end of a nodejs program, otherwise the
worker threads will continue running and the program will never terminate.
From web applications, this function is a no-op.

#### Returns

`Promise`<`undefined`\>

#### Defined in

[snarky.d.ts:852](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/snarky.d.ts#L852)

___

### signFeePayer

▸ **signFeePayer**(`transactionJson`, `feePayerKey`, `__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionJson` | `string` |
| `feePayerKey` | `string` \| [`PrivateKey`](classes/PrivateKey.md) |
| `__namedParameters` | `Object` |

#### Returns

`string`

#### Defined in

[lib/zkapp.ts:1186](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/zkapp.ts#L1186)

___

### state

▸ **state**<`A`\>(`stateType`): (`target`: [`SmartContract`](classes/SmartContract.md) & { `constructor`: `any`  }, `key`: `string`, `_descriptor?`: `PropertyDescriptor`) => `void`

A decorator to use within a zkapp to indicate what will be stored on-chain.
For example, if you want to store a field element `some_state` in a zkapp,
you can use the following in the declaration of your zkapp:

```
@state(Field) some_state = State<Field>();
```

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateType` | [`AsFieldElements`](interfaces/AsFieldElements.md)<`A`\> |

#### Returns

`fn`

▸ (`target`, `key`, `_descriptor?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SmartContract`](classes/SmartContract.md) & { `constructor`: `any`  } |
| `key` | `string` |
| `_descriptor?` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

[lib/state.ts:39](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/state.ts#L39)

___

### verify

▸ **verify**(`proof`, `verificationKey`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | `JsonProof` \| [`Proof`](classes/Proof.md)<`any`\> |
| `verificationKey` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib/proof_system.ts:109](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/proof_system.ts#L109)

___

### zkappCommandToJson

▸ **zkappCommandToJson**(`__namedParameters`): [`ZkappCommand`](modules/Types.Json.md#zkappcommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ZkappCommand` |

#### Returns

[`ZkappCommand`](modules/Types.Json.md#zkappcommand)

#### Defined in

[lib/account_update.ts:1253](https://github.com/o1-labs/snarkyjs/blob/97ce1bc/src/lib/account_update.ts#L1253)
