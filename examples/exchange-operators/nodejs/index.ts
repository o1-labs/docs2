import axios from "axios"
import { Client } from "mina-signer"

const TESTNET_NETWORK_IDENTIFIER = {
  network_identifier: {
    blockchain: "mina",
    network: "testnet",
  },
}
const MINA_TOKEN_ID = "wSHV2S4qX9jFsLjQo8r1BsMLH2ZRKsZx6EJd1sbozGPieEC4Jf"
const MINA_DECIMALS = 9
const MINA_SYMBOL = "MINA"
const MINA_CURVE_TYPE = "pallas"

const mina = new Client({ network: "testnet" })

const request = axios.create({
  baseURL: "https://rosetta-devnet.minaprotocol.network/",
})
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function makeRequest(endpoint: string, data?: any) {
  if (data === undefined) {
    data = {}
  }
  if (endpoint !== "/network/list") {
    data = { ...TESTNET_NETWORK_IDENTIFIER, ...data }
  }

  const r = await request.post(endpoint, data)
  return r.data
}

function makeBlockIdentifier(idOrHash: number | string) {
  const identifierKey = (typeof idOrHash === "number") ? "index" : "hash"
  return {
    block_identifier: { [identifierKey]: idOrHash },
  }
}

function makeTxIdentifier(hash: string) {
  return { transaction_identifier: { hash: hash } }
}

function makeAccountIdentifier(address: string) {
  return {
    account_identifier: { address, token_id: MINA_TOKEN_ID },
  }
}

function makePublicKey(publicKey: string) {
  return {
    hex_bytes: publicKey,
    curve_type: MINA_CURVE_TYPE,
  }
}

function makeTransferPayload(from: string, to: string, feeNano: number, valueNano: number) {
  function makeOperation(
    idx: number,
    relatedIdxs: number[],
    opType: string,
    addr: string,
    value: number,
    isPositive: boolean,
  ) {
    const relatedOps = (relatedIdxs.length == 0) ? {} : {
      related_operations: relatedIdxs.map((i) => {
        return { index: i }
      }),
    }

    return {
      operation_identifier: { index: idx },
      ...relatedOps,
      type: opType,
      account: {
        address: addr,
        metadata: {
          token_id: MINA_TOKEN_ID,
        },
      },
      amount: {
        value: (isPositive ? "" : "-") + value.toString(),
        currency: {
          symbol: MINA_SYMBOL,
          decimals: MINA_DECIMALS,
        },
      },
    }
  }

  return {
    operations: [
      makeOperation(
        0,
        [],
        "fee_payment",
        from,
        feeNano,
        false,
      ),
      makeOperation(
        1,
        [],
        "payment_source_dec",
        from,
        valueNano,
        false,
      ),
      makeOperation(
        2,
        [1],
        "payment_receiver_inc",
        to,
        valueNano,
        true,
      ),
    ],
  }
}

async function networkList() {
  return await makeRequest("/network/list")
}

async function networkStatus() {
  return await makeRequest("/network/status")
}

async function networkOptions() {
  return await makeRequest("/network/options")
}

async function block(idOrHash: number | string) {
  return await makeRequest("/block", makeBlockIdentifier(idOrHash))
}

async function mempool() {
  return await makeRequest("/mempool")
}

async function mempoolTx(hash: string) {
  return await makeRequest("/mempool/transaction", makeTxIdentifier(hash))
}

async function accountBalance(address: string) {
  return await makeRequest("/account/balance", makeAccountIdentifier(address))
}

async function accountTransactions(address: string) {
  return await makeRequest("/search/transactions", { address: address })
}

async function getTransaction(hash: string) {
  return await makeRequest("/search/transactions", makeTxIdentifier(hash))
}

async function deriveAccountIdentifier(publicKey: string) {
  return await makeRequest("/construction/derive", {
    public_key: makePublicKey(publicKey),
  })
}

async function txPreprocess(from: string, to: string, feeNano: number, valueNano: number) {
  const payload = makeTransferPayload(from, to, feeNano, valueNano)
  return await makeRequest("/construction/preprocess", payload)
}

async function txMetadata(
  srcPublicKey: string,
  srcAddress: string,
  destAddress: string,
  feeNano: number,
  valueNano: number,
) {
  const options = await txPreprocess(srcAddress, destAddress, feeNano, valueNano)
  return await makeRequest("/construction/metadata", {
    ...options,
    public_keys: [makePublicKey(srcPublicKey)],
  })
}

async function txPayloads(
  srcPublicKey: string,
  srcAddress: string,
  destAddress: string,
  feeNano: number,
  valueNano: number,
) {
  // If fee_nano is undefined, it will get suggested fee from /construction/metadata response
  const meta = await txMetadata(
    srcPublicKey,
    srcAddress,
    destAddress,
    feeNano,
    valueNano,
  )

  if (feeNano === 0) {
    feeNano = meta.suggested_fee[0].value
  }
  console.log(feeNano)
  const operations = makeTransferPayload(srcAddress, destAddress, feeNano, valueNano)
  return makeRequest("/construction/payloads", { ...operations, ...meta })
}

async function txCombine(payloadsResponse: any, privateKey: string) {
  // console.dir(payloadsResponse, {depth: null})
  const combinePayload = mina.rosettaCombinePayload(payloadsResponse, privateKey)
  const r = await makeRequest("/construction/combine", combinePayload)
  return r
}

async function txParse(isSigned: boolean, blob: string) {
  return makeRequest("/construction/parse", {
    signed: isSigned,
    transaction: blob,
  })
}

async function txHash(blob: string) {
  return await makeRequest("construction/hash", { signed_transaction: blob })
}

async function txSubmit(blob: string) {
  return await makeRequest("construction/submit", { signed_transaction: blob })
}

async function waitForBlock(blockHeight: number) {
  let latestBlock = (await networkStatus()).current_block_identifier.index
  while (true) {
    if (blockHeight <= latestBlock) {
      return await block(blockHeight)
    }
    await sleep(10000)
    latestBlock = (await networkStatus()).current_block_identifier.index
  }
}

async function trackDeposit(address: string) {
  // some logic we want to execute on deposit
  function onDeposit(deposit: any) {
    console.log(deposit)
  }
  let latestBlock = (await networkStatus()).current_block_identifier.index
  while (true) {
    // check if transactions to the deposit address are present in the latest block
    const txs = (await waitForBlock(latestBlock)).block.transactions
    const deposits = []
    for (let tx of txs) {
      for (let op of tx.operations) {
        if (op.account.address === address && op.type === "payment_receiver_inc") {
          deposits.push({
            tx_hash: tx.transaction_identifier.hash,
            amount: op.amount.value,
          })
        }
      }
    }

    // process deposits
    for (let d of deposits) {
      onDeposit(d)
    }

    latestBlock += 1
  }
}

async function send(privateKey: string, to: string, valueNano: number, feeNano: number) {
  const publicKey = mina.derivePublicKey(privateKey)
  const publicKeyRaw = mina.publicKeyToRaw(publicKey)
  // get transfer payload to sign
  const payloadsResponse = await txPayloads(
    publicKeyRaw,
    publicKey,
    to,
    feeNano,
    valueNano,
  )

  // sign and combine transfer payload
  const combineResponse = await txCombine(payloadsResponse, privateKey)
  const blob = combineResponse.signed_transaction

  // // get future transaction hash
  const txHashResponse = await txHash(blob)
  const hash = txHashResponse.transaction_identifier.hash

  // submit transaction. this call will fail if tx is not in mempool
  await txSubmit(blob)
  // wait for transaction confirmation:
  // for that, track blocks until we meet our transaction in the last one
  let latestBlock = (await networkStatus()).current_block_identifier.index
  while (true) {
    // check if our transaction exists in the latest block
    const txs = (await waitForBlock(latestBlock)).block.transactions
    const hashes = txs.map((tx: any) => tx.transaction_identifier.hash)
    if (hashes.includes(hash)) {
      break
    }

    latestBlock += 1
  }
  return hash
}
