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

## Field

Field elements are the basic unit of data in ZK programming. Every other data type (either built-in or composite) in o1js is made up of field elements.

Each `Field` element in o1js can store a number up to almost 256 bits in size. You can think of it as a `uint256` in Solidity, but there are some fundamental differences explained below.

:::note

For the cryptography inclined, the prime order of the o1js `Field` is: 28,948,022,309,329,048,855,892,746,252,171,976,963,363,056,481,941,560,715,954,676,764,349,967,630,336

:::

## Creating a `Field` Element

You can create a `Field` either with the `new` constructor or by directly calling the `Field` as a constructor. The convention is to use `Field` without the `new` constructor.

<!-- prettier-ignore -->
```ts
let x = Field(42);
```

You can create a `Field` from anything that is "field-like": `number`, `string`, `bigint`, or another `Field`. Note that the argument you give must be an integer in the `Field` range.

<!-- prettier-ignore -->
```ts
let x = Field("12347"); // From string
let y = Field(172384782343434n); // From bigint
let z = Field(x); // From another Field

let k = Field("asdf"); // Throws, as this is not a number
let l = Field("234.34"); // Throws, as this is not an integer
```

Nevertheless, you can create a `Field` from a negative number. This method implicity calculates the additive modular inverse of the given argument. This is an advanced level information, and you do not need it for simple zkApps.

<!-- prettier-ignore -->
```ts
let x = Field(-1); // If you try printing this to the screen, you will see a very big integer
```

## Methods on the `Field` Type

`Field` type includes a lot of built in methods. You can call all methods in the `Field` type either with a `Field` or with a "field-like" value. In the latter case, the argument is implicity converted to a `Field`.

All common arithmetic operations are available on the `Field` type. They create and return a new `Field` element.

<!-- prettier-ignore -->
```ts
let x = Field(45);
let y = Field(78);

let sum = x.add(y);
let sub = x.sub(y);
let mul = x.mul(47); // You can also use "field-like" values
let div = x.div(89); // This is a modular division
let neg = x.neg(); // This is equivalent to x.mul(-1)

let square = x.square(); // x^2, equivalent to x.mul(x)
let sqrt = x.sqrt(); // Modular square root of x
let inv = x.inv(); // Modular inverse of x
```

You can also perform logical operations and comparisons with `Field` elements. These methods return a [Bool](./common-types-and-functions.md#bool) element, which is another common o1js built in type, equivalent to `boolean` in other languages and frameworks.

<!-- prettier-ignore -->
```ts
let x = Field(45);

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
let x = Field(45);

x.assertEquals(45); // True - passes
x.assertGreaterThan(45); // False - throws
x.assertGreaterThanOrEquals(45); // True - passes
x.assertLessThan(45); // False - throws
x.assertLessThanOrEquals(45); // True - passes
```

You can think assertions in o1js similar to `require()` function in Solidity.

## Printing a Field to the Screen

`Field` elements are stored as classes in o1js. This is why if you print a `Field` using `console.log`, you will get an unreadable output. Hopefully, o1js provides an equivalent function to `console.log` for provable types: `Provable.log`

<!-- prettier-ignore -->
```ts
let x = Field(45);
Provable.log(x); // Prints 45
```

## Other Types and Methods

In addition to the `Field` type, o1js gives you a variety structures to help you build a powerful zkApp. You can learn more about them in the next chapter, [Common Types and Functions](./common-types-and-functions.md).

:::note

The information given until here is more than enough for you to start creating powerful zkApps with o1js. For more advanced level content, you can read the following sections. If you are new to o1js, just continue with the next chapter, [Common Types and Functions](./common-types-and-functions.md).

:::

## Deeper into the Field Type

`Field` element is a positive integer in a prime order [finite field](https://en.wikipedia.org/wiki/Finite_field), which is a set of integers in between 1 and the prime order of the field (a.k.a. an arbitrary prime number describing the field).

The order of the o1js `Field` can be accessed as a static property of the class.

<!-- prettier-ignore -->
```ts
console.log(Field.ORDER);
```

When you perform an operation inside a finite field, the result always stays in the range. This is achieved through [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). This behaviour may be unfamiliar to you if you have not worked with ZKPs before. Let us explain more with some examples.

In the addition or multiplication operations where the result is bigger than the order of the finite field, you receive the modulus of the result with the prime order of the field.

<!-- prettier-ignore -->
```ts
Provable.log(Field(Field.ORDER - 1) + Field(2)); // This will print 1
```

If you try creating a `Field` from a negative number you will receive the modular additive inverse of the number. For instance `(1 + (Field.ORDER - 1)) % Field.ORDER` is 0, so the additive inverse of 1 is `Field.ORDER - 1` in this field.

<!-- prettier-ignore -->
```ts
Provable.log(Field(-1)); // This will print `Field.ORDER - 1`
```

Similarly, if your substraction results in a negative number you will get the modular additive inverse.

For division, if the result is not an integer, you receive the [modular multiplicative inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of the division: If `(x * y) % p` is `z` (where `p` is the order of the finite field), then the modular multiplicative inverse of the division `z / x` equals `y`. Note that `x`, `y`, and `z` are all integers.

<!-- prettier-ignore -->
```ts
Provable.log(Field(3).div(Field(5))); // This will print a very big integer
```

Because of this behaviour, it is usually not very useful to use the final result of an uneven division. Instead, you can prove the result with multiplication.

<!-- prettier-ignore -->
```ts
// We want x, an argument of the smart contract, to be equal to 7 / 3
x.mul(Field(3)).assertEquals(Field(7));
```

If you want to have integer division instead, you can use `UInt32` or `UInt64` types (see [Common Types and Functions](./common-types-and-functions.md)).

## Provability and Provable Code in o1js

We have stated many times above that all the code you write in o1js must be provable, but what is provability?

A provable code can be thought as a code that o1js compiler can convert into a ZKP. Just because you write something with o1js, it does not become automatically provable. You must follow all the rules above and always use provable types in your code.

However, provable types are created from regular TS variables.

<!-- prettier-ignore -->
```ts
const x = 42; // This is TS number
let x_provable = Field(x); // This code is perfectly valid
```

In reality, the `x_provable` variable in the example above is a _constant_ `Field` variable. By constant, we do not mean that it is a TS constant (which you define by using `const`), but we say that the value of `x_provable` is known at the compilation time. When you receive an argument to your smart contract method, then the argument is not a constant, thus you should only use provable methods on it.

<!-- prettier-ignore -->
```ts
@method foo(x: Field) {
  // Here, the value of x depends on the user input, thus type of x must be provable
}
```

You can learn if a variable is a constant or not in o1js by using `isConstant()` method. Note that this is a function mostly for internal use, but it might give you a good insight on how to work with types in o1js.

<!-- prettier-ignore -->
```ts
let x = Field(42);
console.log(x.isConstant()); // This will print true
```

Always remember that o1js is used for writing ZKPs, and what you write with o1js must have a sense in the final proof. The public or private inputs of a ZKP may change depending on the user input, but once the inputs are provided, the final ZKP must make sure they are not changed. By using provable o1js variables, you make sure that your variables are always consistent with your proof logic.

<!-- prettier-ignore -->
```ts
@method foo(x: Field, y: Field) {
  x.add(y).assertEquals(5); // we know neither the value of x, nor of the y, but we are sure that (x + y) % Field.ORDER equals 5
}
```
