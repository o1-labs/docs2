# zkApp: Off-Chain Storage

An experimental library designed for storing zkApp data off-chain. The project is in development and is not intended for production use. This library serves as a reference implementation for [Tutorial 6: Off-Chain Storage](https://docs.minaprotocol.com/zkapps/tutorials/offchain-storage), which illustrates how to store zkApp data off-chain.

## Usage

### Dependencies:

Ensure all required modules are installed:

```bash
npm install
```

### Configuration

#### Blockchain Mode

In the `main.ts` file, you can toggle the `useLocalBlockchain` variable to switch between local simulated blockchain testing and real-world usage.

#### Account Configuration

For local testing, you use predefined accounts.
For `Berkeley` mode, you must provide a `deployerPrivateKey` and `zkAppPrivateKey` as command line arguments.

To generate these keys:

```bash
npm run generate-key
```

### Running the Application:

Ensure that the off-chain server is running:

```bash
npm run server
```

This command starts the server on port `3001`.

Finally, to run the example:

```bash
npm run build
node build/src/examples/main.js [deployerPrivateKey] [zkAppPrivateKey]
```

**Note:**
Always remember to safeguard private keys and never expose them publicly. Use environment variables or secure vaults to manage sensitive information in production environments.

## zkApp Storage Server

This server is designed to interact with the zkApp and help store and manage zkApp-related data. It is set up for development purposes only and is not supported for production-level storage.

### Features

1. CORS-enabled for cross-origin requests.
1. Stores data for a given zkApp address with a height and items.
1. Fetches stored data for a zkApp address based on its root.
1. Provides the public key of the server.
1. Background job running cleanup operations to manage outdated or irrelevant data.
1. Supports both local simulated blockchains and Berkeley blockchains for the Mina network.

### Endpoints

1. POST `/data`

- Save data for a zkApp address.
- Body parameters: height, items, zkAppAddress.

2. GET `/data`

- Fetch stored data for a zkApp address based on its root.
- Query parameters: zkAppAddress, root.

3. GET `/publicKey`

- Provides the public key of the server.

## License

[Apache-2.0](LICENSE)
