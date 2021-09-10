---
title: Code Snippets
---

## TypeScript:

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```

## Using Mina Client SDK

Copied from [the Github README](https://github.com/MinaProtocol/mina/tree/develop/frontend/client_sdk)

```bash
yarn add @o1labs/client-sdk
# or with npm:
npm install --save @o1labs/client-sdk
```

```typescript
import * as MinaSDK from "@o1labs/client-sdk";

let keys = MinaSDK.genKeys();
let signed = MinaSDK.signMessage("hello", keys);
if (MinaSDK.verifyMessage(signed)) {
  console.log("Message was verified successfully");
}

let signedPayment = MinaSDK.signPayment(
  {
    to: keys.publicKey,
    from: keys.publicKey,
    amount: 1,
    fee: 1,
    nonce: 0,
  },
  keys
);
```

```javascript
const MinaSDK = require("@o1labs/client-sdk");

let keys = MinaSDK.genKeys();
let signed = MinaSDK.signMessage("hello", keys);
if (MinaSDK.verifyMessage(signed)) {
  console.log("Message was verified successfully");
}

let signedPayment = MinaSDK.signPayment(
  {
    to: keys.publicKey,
    from: keys.publicKey,
    amount: 1,
    fee: 1,
    nonce: 0,
  },
  keys
);
```

```reason
module MinaSDK = O1labsClientSdk.MinaSDK;

let keys = MinaSDK.genKeys();
let signed = MinaSDK.signMessage(. "hello", keys);
if (MinaSDK.verifyMessage(. signed)) {
  Js.log("Message was verified successfully");
};

let signedPayment = MinaSDK.signPayment({
    to_: keys.publicKey,
    from: keys.publicKey,
    amount: "1",
    fee: "1",
    nonce: "0"
  }, keys);


```
