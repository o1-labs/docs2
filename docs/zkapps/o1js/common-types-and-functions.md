---
title: o1js Common Types and Functions
hide_title: true
sidebar_label: Common Types and Functions
description: o1js includes a lot of built in types and functions for you to start creating your zkApp right away.
keywords:
  - zero knowledge proof programming
  - zk proof
  - zk
  - data types
  - o1js
  - blockchain
  - mina
  - typescript
  - methods
  - common types
  - built in types
  - bool
  - uint32
  - uint64
  - provable if
  - loops
  - functions
---

:::info

zkApp programmability is not yet available on the Mina Mainnet. You can get started now by deploying zkApps to the Berkeley Testnet.

:::

# o1js Built-in Data Types

o1js includes built in types and methods that you can use inside your zkApp and ZKPs (zero knowledge proofs). All o1js provable types are built using the [Field](./basic-concepts.md#field) type, each with unique properties and advantages. You can find detailed class description in [o1js reference](../o1js-reference).

## Bool

`Bool` is the type used for `boolean` values. It is equivalent to the `boolean` type in order languages and frameworks.

<!-- prettier-ignore -->
```ts
let x = new Bool(true);
let y = new Bool(false);
```

With the `Bool` type, you can call the contructor without `new`, just like the `Field` type. The convention is to use the constructor function without `new`:

<!-- prettier-ignore -->
```ts
let x = Bool(true);
let y = Bool(false);
```

You can also create a `Bool` from another `Bool`.

<!-- prettier-ignore -->
```ts
let x = Bool(true);
let y = Bool(x);
```

It is also possible to convert a `Field` into a `Bool`. However, you should make sure that the `Field` is "bool-like" (with a value either 1 or 0) before converting it.

```ts
let x = Field(1);

// The line below makes sure x can be safely converted into a `Bool`.
x.equals(Field(1)).or(x.equals(Field(0))).assertTrue(); // You will learn about the methods used here below.

let x_bool = Bool(x.value);
```

`Bool` type includes the following conditional methods and converters. Every method created and returns a new `Bool`. All conditional methods can be called with regular `boolean` values as well as `Bool` variables:

<!-- prettier-ignore -->
```ts
let x = Bool(true);
let y = Bool(false);
let z = y.not(); // True

let equals = x.equals(y); // False
let and = x.and(y); // False
let or = x.or(y); // True

let equals_from_boolean = x.equals(true); // True
let and_from_boolean = x.and(true); // True
let or_from_boolean = y.or(false); // False
```

You can also assert `Bool` variables. When you assert something, your zkApp method throws if the assertion fails. You can read more about assertions in the [basic concepts](./basic-concepts.md#assertions-in-o1js) chapter.

<!-- prettier-ignore -->
```ts
let x = Bool(true);
let y = Bool(false);

x.assertEquals(y); // Throws
x.assertTrue(); // Nothing happens, as assertion passes
x.assertFalse(); // Throws
```

You can also combine multiple logical expressions one after another.

<!-- prettier-ignore -->
```ts
let x = Bool(true);
let y = Bool(false);

x.not().and(y).or(true); // True
```

**Important:** All logical expressions are executed in the method call order, as with any other regular language or framework. However, as these are logical statements inside ZKPs, all expressions are always evaluated regardless of the logical ordering. See [Conditionals](./common-types-and-functions.md#conditionals) for more details.

## UInt32

`UInt32` type is a 32 bit positive integer. You can create it using the `new` constructor or the `UInt32.from()` static method. The convention is to use `UInt32.from()`.

Both the constructor and `UInt32.from()` method accepts `number`, `string`, `bigint`, `Field`, and `UInt32` type. In order the conversion to be successful, the type should evaluate to "uint32-like", meaning an integer in the range [0, $2^{32} - 1$].

<!-- prettier-ignore -->
```ts
let x = new UInt32(45); // From number, use from() rather than the new constructor
let y = UInt32.from("788"); // From string
let z = UInt32.from(812934812n); // From bigint
let v = UInt32.from(Field(34)); // From Field
let w = UInt32.from(v); // From UInt32

let k = UInt32.from("asdfas"); // Throws, as this is not a number
let l = UInt32.from(9182394814234n) // Throws, as this bigint is bigger than 2^32 - 1
```

You can perform arithmetic operations on `UInt32` variables using built in methods. These methods can also be called with "uint32-like" values. Each method creates and returns a new `UInt32`.

If the result of a method is not in the range of `UIn32`, either a too big or a negative number, the code throws an error.

<!-- prettier-ignore -->
```ts
let x = UInt32.from(45);
let y = UInt32.from(94);

let add = x.add(y); // Regular addition
let sub = x.sub(y); // If the result is out of range of the UInt32, the code throws
let mul = x.mul(47); // You can also use "uint32-like" values
let div = x.div(33); // This is an integer division, different from the Field type
let divMod = x.divMod(33); // Returns an object with the keys `quotient` and `rest`, both of the UInt32 type. 
```

You can also perform logical operations on `UInt32` types. All logical methods return a `Bool` variable.

<!-- prettier-ignore -->
```ts
let x = UInt32.from(45);

x.equals(45); // True
x.greaterThan(45); // False
x.greaterThanOrEquals(45); // True
x.lessThan(45); // False
x.lessThanOrEquals(45); // True
```

Similarly to the `Bool` type, you can assert logical statements.

<!-- prettier-ignore -->
```ts
let x = UInt32.from(45);

x.assertEquals(45); // True - passes
x.assertGreaterThan(45); // False - throws
x.assertGreaterThanOrEquals(45); // True - passes
x.assertLessThan(45); // False - throws
x.assertLessThanOrEquals(45); // True - passes
```

Finally, you can convert a `UInt32` to a `Field` by calling the `.value` property.

<!-- prettier-ignore -->
```ts
let x = UInt32.from(45);
let y = x.value; // This is a Field with the value 45
```

## UInt64

`UInt64` type is the 64 bit version of `UInt32` type. There is no difference between the two, except their range.

<!-- prettier-ignore -->
```ts
// Constructors

let x = new UInt64(45); // From number, use from() rather than the new constructor
let y = UInt64.from("788"); // From string
let z = UInt64.from(812934812n); // From bigint
let v = UInt64.from(Field(34)); // From Field
let w = UInt64.from(v); // From UInt64

let k = UInt64.from("asdfas"); // Throws, as this is not a number
let l = UInt64.from(91823948182394892384923849348923849238494234n) // Throws, as this bigint is bigger than 2^64

// Arithmetic Operations

let add = x.add(y); // Regular addition
let sub = x.sub(y); // If the result is out of range of the UInt64, the code throws
let mul = x.mul(47); // You can also use "uint64-like" values
let div = x.div(33); // This is an integer division, different from the Field type
let divMod = x.divMod(33); // Returns an object with the keys `quotient` and `rest`, both of the UInt64 type. 

// Logical Operators

x.equals(45); // True
x.greaterThan(45); // False
x.greaterThanOrEquals(45); // True
x.lessThan(45); // False
x.lessThanOrEquals(45); // True

// Assertions

x.assertEquals(45); // True - passes
x.assertGreaterThan(45); // False - throws
x.assertGreaterThanOrEquals(45); // True - passes
x.assertLessThan(45); // False - throws
x.assertLessThanOrEquals(45); // True - passes

// Converting to Field

let y = x.value; // This is a Field with the value 45
```

## Public and Private Keys

For accessing Mina blockchain accounts, you can use `PublicKey` and `PrivateKey` types of o1js. You can create a key from a [base58 string](https://en.wikipedia.org/wiki/Binary-to-text_encoding).

<!-- prettier-ignore -->
```ts
const x_private = PrivateKey.fromBase58("EKEAzkozjN3TAQHLzBKD7RoscLojWeFMKLY2qgKEV8qqpxJYwpKb");
const y_private = PrivateKey.fromJSON("EKEAzkozjN3TAQHLzBKD7RoscLojWeFMKLY2qgKEV8qqpxJYwpKb");

const x = PublicKey.fromBase58("B62qp8KyqqSyKs8eQqtmzoRjuEG3Th9bD4ABuvMEGBCnkMKh3pWvGaQ");
const y = PublicKey.fromJSON("B62qp8KyqqSyKs8eQqtmzoRjuEG3Th9bD4ABuvMEGBCnkMKh3pWvGaQ");
```

You can also create a random `PrivateKey` or convert a `PrivateKey` to a `PublicKey`.

<!-- prettier-ignore -->
```ts
const random = PrivateKey.random();
const fromPrivKey = PublicKey.fromPrivateKey(random); // or equivalently random.toPublicKey()
```

# Conditionals

Traditional conditional statements are not supported by o1js. This is due to the fact that o1js creates ZKPs, and conditional evaluation does not make sense in a ZKP. ZKPs are evaluated into mathematical statements when compiled by o1js, thus you cannot chose to evaluate a statement based on a truth value unknown at the compile time.

<!-- prettier-ignore -->
```ts
// This will NOT work
if (foo) {
  x.assertEquals(y);
}
```

Nevertheless, you can use the o1js built-in `Provable.if()` method, which is a ternary operator:

<!-- prettier-ignore -->
```ts
let x = Provable.if(
  Bool(foo), // The condition to evaluate inside if, must be of type Bool
  a, // You can return any provable type from Provable.if
  b // a and b must be of the same provable type
); // Behaves like `foo ? a : b`
```

`Provable.if()` allows you to include any logical computation you need inside your ZKP. There is nothing wrong with evaluating more complex expressions inside `Provable.if()` and returning the final result.

However, it works differently from ternary statements in the other languages and frameworks. Both arguments of `Provable.if()` _always_ execute, regardless of the truth value of the condition. `Provable.if()` chooses which one to return based on the truth value and sets the new variable. This is why you should never assign anything outside of the if scope or assert anything.

<!-- prettier-ignore -->
```ts
let x = Provable.if(
  Bool(foo),
  // Note both of the functions below will be executed regardless of the value of `Bool(foo)`
  (() => { // Here, we use arrow functions to return a Field element, but you can use any function that returns a provable type
    return Field(5).div(3);
  })(),
  (() => {
    return Field(5).div(2); 
  })()
); // This variable is of type Field
```

# Loops

Loops also work differently in o1js because of the same reason with conditionals. In a mathematical statement, you cannot chose how many times to do something based on a variable that is not known at the compile time. Similarly, o1js does not allow you to use dynamically sized loops, loops that the iteration count is not known at the compilation.

<!-- prettier-ignore -->
```ts
// This will NOT work
while (foo) {
  x.add(y);
}
```

You can overcome this limitation by using static sized loops that iterate always the same amount of time. You can perform provable operations with these loops using `Provable.if()`.

Note that the example below is very inefficient due to the expensive `Field` comparison operations. This example is just to show how static sized loops may be used with `Provable.if()`. A much more efficient way of achieving the same would be using o1js [recursion](./recursion.mdx).

<!-- prettier-ignore -->
```ts
function powerOfTwo(pow: UInt64): Field {
  const MAX_ITERATION_COUNT = 64; // pow is 64 bits

  let result = Field(1); // Result of the calculation
  let power = UInt64.from(0); // Current power of the iteration
  let loopEnded = Bool(false); // Checking if the loop has ended yet

  for (let i = 0; i <= MAX_ITERATION_COUNT; i++) { // Static sized loop
    loopEnded = Provable.if( // End Condition
      UInt64.from(i).equals(power), // In o1js, equality checks are much more efficient than comparisons
      Bool(true),
      loopEnded
    );

    result = result.mul(Provable.if( // Result
      loopEnded,
      Field(1),
      Field(2)
    ));

    power = power.add(Provable.if( // Power
      loopEnded,
      UInt64.from(0),
      UInt64.from(1)
    ));
  };

  return result;
};
```

# Functions

Functions work as you would expect in TS. However, your functions inside ZKPs must return provable types, just like anything in o1js. For example:

<!-- prettier-ignore -->
```ts
function addOneAndDouble(x: Field): Field {
  return x.add(1).mul(2);
}
```

**Warning:** You should _not_ use dynamically sized recursion with functions in o1js, just like dynamically sized loops. Static sized recursion is safe to use as the end condition is known at the compilation time. If you want to dynamically recurse a ZKP, you can use [o1js recursion](./recursion.mdx).

:::info

Note that this is not a full list of built in types and methods that exist in o1js. For a full list, see the [o1js reference](../o1js-reference).

:::