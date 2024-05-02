import json
from subprocess import run, PIPE
from time import sleep

from requests import post


"""
Available endpoints for Mina Rosetta implementation are:

/network/list
/network/options
/network/status

/block

/mempool
/mempool/transaction

/account/balance

/construction/derive
/construction/preprocess
/construction/metadata
/construction/payloads
/construction/combine
/construction/parse
/construction/hash
/construction/submit

/search/transactions
"""


BASE_URL = "http://localhost:3087"
SIGNER_PATH = '/Users/i/mina/mina/' \
    '_build/default/src/app/rosetta/ocaml-signer/signer.exe'
MAINNET_NETWORK_IDENTIFIER = {
    "network_identifier": {
        "blockchain": "mina",
        "network": "mainnet"
    }
}
MINA_TOKEN_ID = "1"
MINA_DECIMALS = 9
MINA_SYMBOL = "MINA"
MINA_CURVE_TYPE = "pallas"
MINA_SIGNATURE_TYPE = "schnorr_poseidon"


def sign_transaction(path_to_signer, private_key, unsigned_transaction):
    cmd = "{signer} sign --private-key {pk} " \
         "--unsigned-transaction {tx_blob}".format(
            signer=path_to_signer, 
            pk=private_key, 
            tx_blob=unsigned_transaction)
    r = run(cmd.split(), stdout=PIPE).stdout
    return r.decode().strip()

def _request(path, data=None):
    """
    Generalized logic for sending a request to Rosetta API
    """
    data = data or {}
    nw = {} if path == "/network/list" else MAINNET_NETWORK_IDENTIFIER
    path = BASE_URL + path
    data = json.dumps({**data, **nw})
    r = post(path, data)
    try:
        r.raise_for_status()
    except Exception as e:
        # json.dumps(r.json())
        raise e
    return r.json()


"""
The following helpers are for generating various objects in a Rosetta format, namely:
    - Identifier objects for block, tx, and account
    - array of operation objects to perform a native MINA token transfer
    - Public key object
"""
def _make_block_identifier(index_or_hash):
    key = "index" if type(index_or_hash) == int \
        else "hash" if type(index_or_hash) == str \
        else None
    if not key:
        raise ValueError("index_or_hash should have either int or str type")
    return {"block_identifier": {key: index_or_hash}}

def _make_tx_identifier(tx_hash):
    return {"transaction_identifier": {'hash': tx_hash}}

def _make_account_identifier(address):
    return {
        "account_identifier": {"address": address, "token_id": MINA_TOKEN_ID}
    }

def _make_pubkey(pubkey):
    return {
        "hex_bytes": pubkey,
        "curve_type": MINA_CURVE_TYPE
    }

def _make_transfer_payload(address_from, address_to, fee_nano, value_nano):
    """
    Helper for generating "operations" object in a Rosetta format
    This helper generates mina native token transfer payloads
    The resulting object is an array of 3 so called account updates:
        - for decreasing the sender's balance by the fee amount
        - for decreasing the sender's balance by the transfer amount
        - for increasing the receiver's balance by the transfer amount
    """
    def _make_operation(idx, related_idxs, op_type, addr, value, is_positive):
        related_ops = {} if not related_idxs else {
            "related_operations": [{"index": i} for i in related_idxs]
        }
        return {
            "operation_identifier": {"index": idx},
            **related_ops,
            "type": op_type,
            "account": {
                "address": addr,
                "metadata": {
                    "token_id": MINA_TOKEN_ID
                }
            },
            "amount": {
                "value": ("" if is_positive else "-") + str(value),
                "currency": {
                    "symbol": MINA_SYMBOL,
                    "decimals": MINA_DECIMALS
                }
            }
        }
    return {
        "operations": [
            _make_operation(
                0, [], "fee_payment", address_from, fee_nano, False),
            _make_operation(
                1, [], "payment_source_dec", address_from, value_nano, False),
            _make_operation(
                2, [1], "payment_receiver_inc", address_to, value_nano, True)
        ]
    }


"""
The following functions implement all requests 
available in the Mina Rosetta API
"""
def network_list():
    return _request("/network/list")

def network_status():
    return _request("/network/status")

def network_options():
    return _request("/network/options")

def block(index_or_hash):
    return _request("/block", _make_block_identifier(index_or_hash))

def mempool():
    return _request("/mempool")

def mempool_tx(tx_hash):
    return _request("/mempool/transaction", _make_tx_identifier(tx_hash))

def account_balance(address):
    return _request("/account/balance", _make_account_identifier(address))

def derive_account_identifier(pubkey):
    return _request("/construction/derive", {
        "public_key": _make_pubkey(pubkey)
    })

def tx_preprocess(src, dest, fee_nano, value_nano):
    return _request(
        "/construction/preprocess", 
        _make_transfer_payload(src, dest, fee_nano, value_nano))

def tx_metadata(src_pubkey, src_address, dest_address, fee_nano, value_nano):
    options = tx_preprocess(src_address, dest_address, fee_nano, value_nano)
    return _request("/construction/metadata", {
        **options, "public_keys": [_make_pubkey(src_pubkey)]
    })

def tx_payloads(src_pubkey, src_address, dest_address, fee_nano, value_nano):
    """
    If fee_nano is None, it will get suggested fee from /construction/metadata response
    """
    fee_nano = fee_nano or 0
    meta = tx_metadata(
        src_pubkey, src_address, dest_address, fee_nano, value_nano)

    if not fee_nano:
        fee_nano = meta["suggested_fee"][0]["value"]

    operations = _make_transfer_payload(
        src_address, dest_address, fee_nano, value_nano)
    return _request("/construction/payloads", {**operations, **meta})

def tx_combine(src_pubkey, tx_payloads_response, signature):
    combine_payload = {
        "unsigned_transaction": tx_payloads_response["unsigned_transaction"],
        "signatures": [
            {
                "signing_payload": tx_payloads_response["payloads"][0],
                "public_key": _make_pubkey(src_pubkey),
                "signature_type": MINA_SIGNATURE_TYPE,
                "hex_bytes": signature
            }
        ]
    }
    return _request("/construction/combine", combine_payload)

def tx_parse(transaction_blob, is_signed):
    return _request("/construction/parse", {
        "signed": is_signed,
        "transaction": transaction_blob
    })

def tx_hash(signed_transaction_blob):
    return _request("/construction/hash", {
        "signed_transaction": signed_transaction_blob
    })

def tx_submit(signed_transaction_blob):
    return _request("/construction/submit", {
        "signed_transaction": signed_transaction_blob
    })


"""
The following examples are for typical operations that Rosetta API users might want to do:
- block scanning
- waiting for deposit
- performing a withdrawal
"""

def wait_for_block(block_index):
    """
    Checks if block with given index exist
    Once the /block response is succesful - returns the response
    Otherwise, retries fetching it with 10 seconds delay
    """

    latest_block = network_status()["current_block_identifier"]["index"]
    while True:
        if block_index <= latest_block:
            return block(block_index)
        sleep(10)
        latest_block = network_status()["current_block_identifier"]["index"]

def deposit_flow(deposit_address):
    # some logic we want to execute on deposit
    def on_deposit(deposit):
        print(json.dumps(deposit, indent=2))
    
    latest_block = network_status()["current_block_identifier"]["index"]
    while True:
        # check if transactions to the deposit address are present in the latest block
        txs = wait_for_block(latest_block)['block']['transactions']
        deposits = []
        for tx in txs:
            for op in tx["operations"]:
                if op["account"]["address"] == deposit_address \
                        and op["type"] == "payment_receiver_inc":
                    deposits.append({
                        "tx_hash": tx["transaction_identifier"]["hash"],
                        "amount": op["amount"]["value"]
                    })
        
        # process deposits
        for d in deposits:
            on_deposit(d)

        latest_block += 1

def withdrawal_flow(vault_keypair, dest_address, value_nano, fee_nano=None):
    """
    Full withdrawal flow example (without sanity check)
    If fee_nano is None - fee will be suggested by Rosetta API response
    """

    vault_pubkey = vault_keypair["public"]
    vault_private_key = vault_keypair["private"]
    
    # derive vault address
    derive_response = derive_account_identifier(vault_pubkey)
    vault_address = derive_response["account_identifier"]["address"]
    
    # get transfer payload to sign
    payloads_response = tx_payloads(
        vault_pubkey, vault_address, dest_address, fee_nano, value_nano)
    
    # sign transfer payload
    signature = sign_transaction(
        SIGNER_PATH, 
        vault_private_key,
        payloads_response["unsigned_transaction"])

    # get signed transaction blob
    combine_response = tx_combine(vault_pubkey, payloads_response, signature)
    signed_transaction_blob = combine_response['signed_transaction']

    # sanity check may be performed here 
    # for that - use tx_parse function output
    # to doublecheck it corresponds what you want to do
    # parsed_tx = tx_parse(signed_transaction_blob, True)

    # get future transaction hash
    tx_hash_response = tx_hash(signed_transaction_blob)
    future_tx_hash = tx_hash_response['transaction_identifier']['hash']

    # submit transaction. this call will fail if tx is not in mempool
    tx_submit(signed_transaction_blob)
    
    # wait for transaction confirmation:
    # for that, track blocks until we meet our transaction in the last one
    latest_block = network_status()["current_block_identifier"]["index"]
    while True:
        # check if our transaction exists in the latest block
        txs = wait_for_block(latest_block)['block']['transactions']
        hashes = [tx['transaction_identifier']['hash'] for tx in txs]
        if future_tx_hash in hashes:
            break
        latest_block += 1
    
    return future_tx_hash


# $ alias signer=_build/default/src/app/rosetta/ocaml-signer/signer.exe
# $ signer generate-private-key
# $ signer derive-public-key --private-key <private key>
TEST_KEYPAIR = {
    "private": 
        "1246517D60EE92CDC43B8E914B77F7E62F14FA6F0DEA0F0D9EC6A421D77E2F0E",
    "public": 
        "0C1E18BAE721C5A2733D4DCD09EA4FA83646F905EA1C73C313292D7C4EA74E00",
}
TEST_RECEIVER = "B62qmVz7pPiLXPvz2nPkuK3K5akjrePAVtdBVMfeyixrccgqKTQte8K"

