# Mina zkApp: Zkapp Offchain Storage

An experimental library for storing zkApp data offchain. This project is currently under development and should not be used in production.

## Usage

### Dependencies:

Ensure all required modules are installed. To do so, run the following command:

```bash
npm install
```

### Running the Example

#### Blockchain Mode

Toggle the `useLocalBlockchain`` variable to switch between local testing and real-world usage.

#### Account Configuration:

For local testing, predefined accounts will be used.
For `Berkeley` mode, you must provide a `deployerPrivateKey` and `zkAppPrivateKey` as command line arguments.

To generate these keys, you can use the following command:

```bash
npm run generate-keys

```

### Running the Application:

Ensure that the offchain server is running. To do so, run the following command:

```bash
npm run server
```

This will start the server on port `3001`.

Finally, to run the example, use the following command:

```bash
npm run build
node build/src/examples/main.js [deployerPrivateKey] [zkAppPrivateKey]
```

**Note:**
Always remember to safeguard private keys and never expose them publicly. Use environment variables or secure vaults to manage sensitive information in production environments.

## zkApp Storage Server

This server is designed to interact with the zkApp and help store and manage zkApp related data. It is currently set up for development purposes and should not be relied upon for production-level storage.

### Features

1. CORS enabled for cross-origin requests.
1. Storing data for a given zkApp address with a height and items.
1. Fetching stored data for a zkApp address based on its root.
1. Provides the public key of the server.
1. Background job running cleanup operations to manage outdated or irrelevant data.
1. Both local and Berkeley blockchains are supported for the Mina network.

### Endpoints

1. POST `/data`

- Save data for a zkApp address.
- Body parameters: height, items, zkAppAddress.

2. GET `/data`

- Fetch stored data for a zkApp address based on its root.
- Query parameters: zkAppAddress, root.

3. GET `/publicKey`

- Provides the public key of the server.

### Usage

1. Installation: Install all the necessary packages.

```bash
npm install
```

2. Running the server: Use the following command to start the server.

```bash
npm run server
```

The server will start listening on port 3001.

3. Generate keys: Use the following command to generate keys for the server.

```bash
npm run generate-keys
```

4. Run the example: Use the following command to run the example.

```bash
npm run build
node build/src/examples/main.js [deployerPrivateKey] [zkAppPrivateKey]
```

## License

[Apache-2.0](LICENSE)
