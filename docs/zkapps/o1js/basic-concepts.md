---
title: o1js Basic Concepts
hide_title: true
sidebar_label: Basic Concepts
description: Field elements are the basic unit of data in zero-knowledge proof programming. Learn about built-in data types, functions, and common methods. 
keywords:
  - smart contracts
  - zkapps
  - fields
  - field elements
  - zero knowledge proof programming
  - zk proof
  - zk
  - data types
  - o1js
  - blockchain
  - mina
  - typescript
  - methods
---

:::info

zkApp programmability is not yet available on the Mina Mainnet. You can get started now by deploying zkApps to the Berkeley Testnet.

:::

# o1js Basic Concepts

o1js, fka. SnarkyJS, is a TypeScript (TS) library for writing general-purpose ZK programs and writing ZK smart contracts for the Mina Blockchain. In order to create a ZKP (zero knowledge proof), you should use types and operations that can be converted into a ZKP. o1js gives you a lot of different built in types and customizable structures that you can use to create ZKPs.

## Field Type

`Field` elements are the basic unit of data in ZK programming. Every other data type (either built-in or composite) in o1js is made up of `Field` elements.

Each `Field` element can store a number up to almost 256 bits in size. You can think of it as a `uint256` in Solidity, but there are some fundamental differences explained below.

:::note

For the cryptography inclined, the prime order of the o1js `Field` is: 28,948,022,309,329,048,855,892,746,252,171,976,963,363,056,481,941,560,715,954,676,764,349,967,630,336

:::

## Creating a Field Element

You can create a `Field` either with the `new` constructor or by directly calling the `Field` as a constructor. The best practice is to use `Field` without the `new` constructor.

<!-- prettier-ignore -->
```ts
const x = new Field(42);
const y = Field(923); // Best practice
```

You can create a `Field` from anything that is "field-like": `number`, `string`, `bigint`, or another `Field`. Note that the argument you give must be an integer in the `Field` range.

<!-- prettier-ignore -->
```ts
const x = Field("12347"); // From string
const y = Field(172384782343434n); // From bigint
const z = Field(x); // From another Field

const k = Field("asdf"); // Throws, as this is not a number
const l = Field("234.34"); // Throws, as this is not an integer
```

Nevertheless, you can create a `Field` from a negative number. This method implicity calculates the [modular inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of the given argument. This is an advanced level information, and you do not need it for simple zkApps.

<!-- prettier-ignore -->
```ts
const x = Field(-1); // If you try printing this to the screen, you will see a very big integer
```

## Methods in the Field Type

`Field` type includes a lot of built in methods. You can call all methods in the `Field` type either with a `Field` or with a "field-like" value. In the latter case, the argument is implicity converted to a `Field`.

All common arithmetic operations exist in the `Field` type. They create and return a new `Field` element.

<!-- prettier-ignore -->
```ts
const x = Field(45);
const y = Field(78);

const sum = x.add(y);
const sub = x.sub(y);
const mul = x.mul(47); // You can also use "field-like" values
const div = x.div(89); // This is a modular division
const neg = x.neg(); // This is equivalent to x.mul(-1)

const square = x.square(); // x^2, equivalent to x.mul(x)
const sqrt = x.sqrt(); // Modular square root of x
const inv = x.inv(); // Modular inverse of x
```

You can also perform logical operations and comparisons with `Field` elements. These methods return a [Bool](./common-types-and-functions.md#bool) element, which is another common o1js built in type, equivalent to `boolean` in other languages and frameworks.

<!-- prettier-ignore -->
```ts
const x = Field(45);

x.equals(45); // True
x.greaterThan(45); // False
x.greaterThanOrEquals(45); // True
x.lessThan(45); // False
x.lessThanOrEquals(45); // True

// It is also possible to check if a Field is even or not
x.isEven(); // False
```

## Assertions in o1js

If you want to reject a TX (transaction) in your zkApp smart contract, you can use assertions in o1js. If you create an assertion inside your ZKP, the proof fails if the assertion does not evaluate to `true`. All conditional methods on the `Field` type can be used as assertions.

<!-- prettier-ignore -->
```ts
const x = Field(45);

x.assertEquals(45); // True - passes
x.assertGreaterThan(45); // False - throws
x.assertGreaterThanOrEquals(45); // True - passes
x.assertLessThan(45); // False - throws
x.assertLessThanOrEquals(45); // True - passes
```

You can think assertions in o1js similar to `require()` function in Solidity.

## Printing a Field to the Screen

`Field` elements are stored as classes in o1js. This is why if you print a `Field` without a conversion, you will get an unreadable output. Hopefully, o1js gives a variety of conversion methods to print `Field` elements to the screen.

<!-- prettier-ignore -->
```ts
const x = Field(45);

console.log(x.toString()); // string
console.log(x.toBigInt()); // bigint
console.log(x.toJSON()); // JSON string
```

However, note that these methods are _not_ provable, meaning you cannot use them in your final zkApp as a part of the ZKP. Use them only to debug your code.

<!-- prettier-ignore -->
```ts
const x = Field(45);
const y = Field(x.toString()); // You should NOT write this
```

## Other Types and Methods

In addition to the `Field` type, o1js gives you a variety structures to help you build a powerful zkApp. You can learn more about them in the next chapter, [Common Types and Functions](./common-types-and-functions.md).
