---
title: How to write a zkApp
---

# How to write a zkApp

:::info

Please note that zkApp programmability is not yet available on Mina Mainnet, but
zkApps can now be deployed to Berkeley QANet.

:::

A zkApp consists of a smart contract and a UI to interact with it. First, we’ll install the Mina zkApp CLI and write a smart contract.

## Write a smart contract

Your smart contract will be written using [Mina zkApp CLI](https://github.com/o1-labs/zkapp-cli/).

Mina zkApp CLI makes it easy to follow recommended best practices by providing project scaffolding including dependencies such as SnarkyJS, a test framework (<a href="https://jestjs.io/">Jest</a>), code auto-formatting (<a href="https://prettier.io/
">Prettier</a>), linting (<a href="https://eslint.org/">ES Lint</a>), & more.

### Install Mina zkApp CLI

```sh
npm install -g zkapp-cli
```

#### Dependencies:

- NodeJS 16+ (or 14 using `node --experimental-wasm-threads`)
- NPM 6+
- Git 2+

<Alert kind="tip">

If you have an older version installed, we suggest installing a newer version using the package manager for your system: <a href="https://brew.sh/">Homebrew</a> (Mac), <a href="https://chocolatey.org/">Chocolatey</a> (Windows), or apt/yum/etc (Linux). On Linux, you may need to install a recent NodeJS version via NodeSource (<a href="https://github.com/nodesource/distributions#debinstall">deb</a> or <a href="https://github.com/nodesource/distributions#rpminstall">rpm</a>), as recommended by the NodeJS Project.

</Alert>

### Start a project

Now that you have Mina zkApp CLI installed, you can start with an example or start your own project.

#### Option A: Start with an example (recommended)

Examples are based on the standard project structure, but with additional files in the `/src` directory as the only difference.

1. **Install:** Run `zk example sudoku`. This creates a new project and includes
   the example files (i.e. the smart contract) inside the project’s `src/`
   directory. Type `ls` & hit enter to see the files that were created or open
   the directory in a code editor such as VS Code.
2. **Run tests:** Run `npm run test`. Tests are written using <a
   href="https://jestjs.io/">Jest</a>. After running this command, you should
   see all tests pass. You can also run `npm run testw` to run tests in watch
   mode, so it will automatically re-run tests when saving changes to your code.
3. **Build the example:** Run `npm run build`. This will compile your TypeScript
   into JavaScript inside the project’s `/build` directory.
4. **Deploy to QANet:** Run `zk config`, which will walk you through adding a
   network alias to your project’s `config.json`. For Berkeley QANet, we recommend
   using `berkeley` as the name, `0.1` for the fee, and
   `https://proxy.berkeley.minaexplorer.com/graphql` for the url. Then run `zk deploy` and follow the prompts. See the [how to deploy a zkApp]
   (./how-to-deploy-zkapp) page for further details.

You can view a list of <a href="https://github.com/o1-labs/zkapp-cli/tree/main/examples/">all available examples here</a>.

#### Option B: Start your own project

1. **Install:** Run `zk project <myproj>`. Type `ls` and hit enter to see the
   newly created project structure.
2. **Run tests:** Run `npm run test`. Tests are written using <a
   href="https://jestjs.io/">Jest</a>. After running this command, you should
   see all tests pass. You can also run `npm run testw` to run tests in watch
   mode, so it will automatically re-run tests when saving changes to your code.
3. **Build:** Run `npm run build`. This will compile your TypeScript code into
   JavaScript inside the project’s `/build`.
4. **Deploy to QANet:** Run `zk config`, which will walk you through adding a
   network alias to your project’s `config.json`. For Berkeley QANet, we
   recommend using `berkeley` as the name, `0.1` for the fee, and
   `https://proxy.berkeley.minaexplorer.com/graphql` for the url. Then run `zk deploy` and follow the prompts. See the [how to deploy a zkApp](./how-to-deploy-zkapp) page for further details.
5. **Deploy to Mainnet:** (Coming soon.)

### Writing your smart contract

The goal of this section is to explain the concepts that you will need to understand to write a zero-knowledge-based smart contract.

If you haven’t yet read the [how zkApps work](./how-zkapps-work#reading-state) pages, please read it first so that this section makes sense.

##### SnarkyJS

zkApps are written in TypeScript using SnarkyJS. SnarkyJS is a TypeScript library for writing smart contracts based on zero-knowledge proofs for the Mina Protocol. It is included automatically when creating a new project using the Mina zkApp CLI.

To view the full SnarkyJS reference, please see the [snarkyJS reference](./snarkyjs-reference).

##### Concepts

Field elements are the basic unit of data in zero-knowledge proof programming. Each field element can store a number up to almost 256 bits in size. You can think of it as a uint256 in Solidity.

:::note

For the cryptography inclined, the exact max value that a field can store is: 28,948,022,309,329,048,855,892,746,252,171,976,963,363,056,481,941,560,715,954,676,764,349,967,630,336

:::

For example, in typical programming, you might use:

`const sum = 1 + 3`.

In SnarkyJS, you would write this as:

`const sum = new Field(1).add(new Field(3))`

This can be simplified as:

`const sum = new Field(1).add(3)`

Note that the 3 is auto-promoted to a field type to make this cleaner.

##### Primitive data types

A couple common data types you may use are:

<!-- prettier-ignore -->
```ts
new Bool(x);   // accepts true or false
new Field(x);  // accepts an integer, or a numeric string if you want to represent a number greater than JavaScript can represent but within the max value that a field can store.
new UInt64(x); // accepts a Field - useful for constraining numbers to 64 bits
new UInt32(x); // accepts a Field - useful for constraining numbers to 32 bits
PrivateKey, PublicKey, Signature; // useful for accounts and signing
new Group(x, y); // a point on our elliptic curve, accepts two Fields/numbers/strings
Scalar; // the corresponding scalar field (different than Field)
```

In the case of `Field` and `Bool`, you can also call the constructor without `new`:

```ts
let x = Field(10);
let b = Bool(true);
```

:::info

Support for strings within SnarkyJS will be available soon.

:::

##### Conditionals

Traditional conditional statements are not yet supported by SnarkyJS:

```ts
// this will NOT work
if (foo) {
  x.assertEquals(y);
}
```

Instead, use SnarkyJS’ built-in `Circuit.if()` method, which is a ternary operator:

```ts
const x = Circuit.if(new Bool(foo), a, b); // behaves like `foo ? a : b`
```

##### Functions

Functions work as you would expect in TypeScript. For example:

```ts
function addOneAndDouble(x: Field): Field {
  return x.add(1).mul(2);
}
```

##### Common methods

Some common methods you will use often are:

```ts
let x = new Field(4); // x = 4
x = x.add(3); // x = 7
x = x.sub(1); // x = 6
x = x.mul(3); // x = 18
x = x.div(2); // x = 9
x = x.square(); // x = 81
x = x.sqrt(); // x = 9

let b = x.equals(8); // b = Bool(false)
b = x.greaterThan(8); // b = Bool(true)
b = b.not().or(b).and(b); // b = Bool(true)
b.toBoolean(); // true

let hash = Poseidon.hash([x]); // takes array of Fields, returns Field

let privKey = PrivateKey.random(); // create a private key
let pubKey = PublicKey.fromPrivateKey(privKey); // derive public key
let msg = [hash];
let sig = Signature.create(privKey, msg); // sign a message
sig.verify(pubKey, msg); // Bool(true)
```

For a full list, see the [snarkyJS reference](./snarkyjs-reference).

##### Smart Contract

<!-- TODOs
  IMO, needs to be fleshed out a bit more before sending users to "test your zkApp" or "advanced topics".
  Basics that are missing:
  * payments
  * Mina.transaction / at least hinting at the basic mechanics of how to compile / prove
  * the general notion of a transaction / of an account update (party)?
  * permissions? (probably an advanced topic)
 -->

Now that we have covered the basics of writing SnarkyJS programs, let's see how to create a smart contract.

Smart contracts are written by extending the base class `SmartContract`:

```ts
class HelloWorld extends SmartContract {}
```

The `constructor` of a `SmartContract` is inherited from the base class and should not be overriden.
It takes the zkApp account address (a public key) as its only argument:

```ts
let zkAppKey = PrivateKey.random();
let zkAppAddress = PublicKey.fromPrivateKey(zkAppKey);

let zkApp = new HelloWorld(zkAppAddress);
```

Later, we show you how you can deploy a smart contract to an on-chain account.

<Alert kind="note">
  On Mina, there is no strong distinction between normal "user accounts" and
  "zkApp accounts". A zkApp account is just a normal account that has a smart
  contract deployed to it -- which essentially just means there's a verification
  key stored on the account, which can verify zero-knowledge proofs generated
  with the smart contract.
</Alert>

##### Methods

Interaction with a smart contract happens by calling on or more of its _methods_. You declare methods using the `@method` decorator:

```ts
class HelloWorld extends SmartContract {
  @method myMethod(x: Field) {
    x.mul(2).assertEquals(5);
  }
}
```

Within a method, you can use SnarkyJS' data types and methods to define your custom logic.

Later, we'll show how you can...

- run a method (off-chain)
- create a proof that it executed successfully
- send that proof to the Mina network, to trigger actions like a state change or payment

To get an idea what "successful execution" means, look at this line in our example above:

```ts
x.mul(2).assertEquals(5);
```

Creating a proof for this method will only be possible if the input `x` satisfies the equation `x * 2 === 5`. This is what we call a "constraint".
Magically, the proof can be checked without seeing `x` -- it's a _private input_.

The method above is not very meaningful yet. To make it more interesting, we need a way to interact with accounts, and record state on-chain.
Check out the next section for more on that!

One more note about private inputs: The method above has one input parameter, `x` of type `Field`. In general, arguments can be any of the built-in SnarkyJS type that you saw: `Bool`, `UInt64`, `PrivateKey`, etc. From now on, we will refer to those types as [circuit values](./how-to-write-zkapp#custom-data-types).

<!-- TODO Gregor's note on the below alert box: too much? too early? I think little "deep dives" like this can be useful to answer questions that more advanced users often have after reading our docs, and spread more understanding of Mina to the internet
-->

:::info

Under the hood, every `@method` defines a zk-SNARK circuit. From the cryptography standpoint, a smart contract is a collection of circuits, all of which are compiled into a single prover & verification key. The proof says something to the effect of "I ran one of these methods, with some private input, and it produced this particular set of account updates". In ZKP terms, the account updates are the _public input_. The proof will only be accepted on the network if it verifies against the verification key stored in the account. This ensures that indeed, the same code that the zkApp developer wrote also ran on the user's device -- thus, the account updates conform to the smart contract's rules.

:::

##### On-chain state

A smart contract can contain **on-chain state**, which is declared as a property
on the class with the `@state` decorator:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  // ...
}
```

Here, `x` is of type `Field`. Like with method inputs, only SnarkyJS circuit values can be used for state variables.
In the current design, the state can consist of at most 8 Fields of 32 bytes each. These states are stored on the zkApp account.
Some circuit values take up more than one Field: for example, a `PublicKey` needs 2 of the 8 Fields.
States are initialized with the `State()` function.

A method can modify on-chain state by using `this.<state>.set()`:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  @method setX(x: Field) {
    this.x.set(x);
  }
}
```

As a zkApp developer, if you add this method to your smart contract, you are saying: "Anyone can call this method, to set `x` on the account to any value they want."

##### Reading state

Often, we also want to _read_ state -- check out this example:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  @method increment() {
    // read state
    const x = this.x.get();
    this.x.assertEquals(x);

    // write state
    this.x.set(x.add(1));
  }
}
```

The `increment()` method fetches the current on-chain state `x` with `this.x.get()`.
Later, it sets the new state to `x + 1` using `this.x.set()`. Simple!

There's another line though, which looks weird at first:

```ts
this.x.assertEquals(x);
```

To understand it, we have to take a step back, and understand what it means to "use an on-chain value" during off-chain execution.

For sure, when we use an on-chain value, we have to _prove_ that this is the on-chain value. Verification has to fail if it's a different value! Otherwise, a malicious user could modify SnarkyJS and make it just use any other value than the current on-chain state -- breaking our zkApp.

To prevent that, we link "`x` at proving time" to be the same as "`x` at verification time". We call this a _precondition_ -- a condition that is checked by the verifier (a Mina node) when it receives the proof in a transaction. This is what `this.x.assertEquals(x)` does: it adds the precondition that `this.x` -- the on-chain state at verification time -- has to equal `x` -- the value we fetched from the chain on the client-side. In zkSNARK language, `x` becomes part of the public input.

Side note: `this.<state>.assertEquals` is more flexible than equating with the current value. For example, `this.x.assertEquals(10)` fixes the on-chain `x` to the number `10`.

:::note

Why didn't we just make `this.x.get()` add the precondition, automatically, so that you didn't have to write `this.x.assertEquals(x)`?
Well, we like to keep things explicit. The assertion reminds us that we add logic which can make the proof fail: If `x` isn't the same at verification time, the transaction will be rejected. So, reading on-chain values has to be done with care if many users are supposed to read and update state concurrently. It is applicable in some situations, but might cause races, and call for workarounds, in other situations.
One such workaround is the use of actions -- see [Actions and Reducer](./advanced-concepts/#actions-and-reducer).

:::

##### Assertions

<!-- TODO: this is _slightly_ misplaced now, because I already had assertEquals earlier -->

Let's modify the `increment()` method to accept a parameter:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  @method increment(xPlus1: Field) {
    const x = this.x.get();
    this.x.assertEquals(x);

    x.add(1).assertEquals(xPlus1);

    this.x.set(xPlus1);
  }
}
```

Here, after obtaining the current state `x` and asserting that it equals the on-chain value, we make another assertion:

```ts
x.add(1).assertEquals(xPlus1);
```

If the assertion fails, SnarkyJS will throw an error and not submit the transaction.
On the other hand, if it succeeds, it becomes part of the proof that is verified on-chain.

Because of this, our new version of `increment()` is _guaranteed_ to behave like the previous version: It can only ever
update the state `x` to `x + 1`.

Assertions can be incredibly useful to constrain state updates. Common assertions you may use are:

<!-- prettier-ignore -->
```ts
x.assertEquals(y); // x = y
x.assertBoolean(); // x = 0 or x = 1
x.assertLt(y);     // x < y
x.assertLte(y);    // x <= y
x.assertGt(y);     // x > y
x.assertGte(y);    // x >= y
```

For a full list, see the [snarkyJS reference](./snarkyjs-reference).

##### Public and private inputs

We touched on this already, but it's good to cover it in more depth:

While the state of a zkApp is **public**, method parameters are **private**.

When a smart contract method is called, the proof it produces uses zero-knowledge to hide inputs and details of the computation.

<!-- The proof has _public inputs_ that block producers need to see -- for example, any state updates triggered by our method. -->

The only way method parameters can be exposed is when the computation explicitly exposes them, as
in our last example where the input was directly stored in the public state: `this.x.set(xPlus1);`

Let's show an example where this is not the case, by defining a new method called `incrementSecret()`:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  // ...

  @method incrementSecret(secret: Field) {
    const x = this.x.get();
    this.x.assertEquals(x);

    Poseidon.hash(secret).assertEquals(x);
    this.x.set(Poseidon.hash(secret.add(1)));
  }
}
```

This time, our input is called `secret`. We check that the hash of our secret is equal to the current state `x`.
If this is the case, we add 1 to the secret and set `x` to the hash of that.

When running this successfully, it just proves that the code was run with _some_ input `secret` whose hash is `x`,
and that the new `x` will be set to `hash(secret + 1)`.
However, the secret itself remains private, because it can't be deduced from it's hash.

##### Initializing state

We didn't cover how to initialize on-chain state yet. This can be done in the `deploy()` method.

Like the constructor, `deploy()` is predefined on the base `SmartContract` class.
It will be called when you deploy your zkApp with the zkApp CLI.
You can override this method to add initialization of your on-chain state:

```ts
class HelloWorld extends SmartContract {
  @state(Field) x = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.x.set(Field(10)); // initial state
  }
}
```

Note that we have to pass the arguments on to `super.deploy()`, which runs the default deploy logic. So, this line is required:

```ts
super.deploy(args);
```

If you don't need to add anything else to `deploy`, there's no need to override it, just leave it out.
In the example above however, we are setting our state `x` to `Field(10)`. Uninitialized values will be zero.

##### Custom data types

As mentioned previously, smart contract method arguments can be any of the built-in SnarkyJS types.

However, what if you want to define your own data type?

You can create a custom data type for your smart contract using the `CircuitValue` class that SnarkyJS exposes. To do this, create a class that extends `CircuitValue`.
Then, similar to adding state to your smart contract by using the `@state` decorator, you can add properties to your circuit value using the `@prop` decorator.

For example, let us say you want to create a custom data type called `Point` representing a 2D point on a grid. You can do this by creating a new class that extends the `CircuitValue` class:

```ts
class Point extends CircuitValue {
  @prop x: Field;
  @prop y: Field;

  static fromField(x: Field, y: Field) {
    return new Point(x, y);
  }
}
```

Now that you have defined your circuit value, you can use it in your smart contract for any SnarkyJS built-in types.

For example, the following smart contract uses the `Point` circuit value defined above as state and as a method argument:

```ts
export class Grid extends SmartContract {
  @state(Point) p = State<Point>();

  @method init() {
    this.p.set(Point.fromField(Field(1), Field(2)));
  }

  @method move(newPoint: Point) {
    const point = this.p.get();
    this.p.assertEquals(point);

    const newX = point.x.add(newPoint.x);
    const newY = point.y.add(newPoint.y);
    this.p.set(Point.fromField(newX, newY));
  }
}
```

Note that your circuit values can contain SnarkyJS built-in types like `Field`, `Bool`, `UInt64`, etc or even other custom types that you've defined which are based on the `CircuitValue` class.
This allows for great composability and reusability of circuit values.

## Next Steps

Now that you've learned how to write a basic smart contract, you can learn [how to test your zkApp](./how-to-test-zkapp).
