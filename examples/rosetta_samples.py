from os import system
from subprocess import run, PIPE
import json
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
"""


BASE_URL = "http://localhost:3087"
SIGNER_PATH = '/Users/ii/mina/mina/' \
    '_build/default/src/app/rosetta/ocaml-signer/signer.exe'
MAINNET_NETWORK_IDENTIFIERS = {
    "mainnet": {
        "network_identifier": {
            "blockchain": "mina",
            "network": "mainnet"
        }
    }
}
MINA_TOKEN_ID = "1"
MINA_DECIMALS = 9
MINA_SYMBOL = "MINA"
MINA_CURVE_TYPE = "pallas"
MINA_SIGNATURE_TYPE = "schnorr_poseidon"


def pprint_json(string_or_dict):
    """
    Helper to print json response 
    in a beautiful way (needs jq to be installed)
    """
    string = string_or_dict if type(string_or_dict) == str \
        else json.dumps(string_or_dict, separators=(',',':'))
    escaped = string.translate(str.maketrans({'"': '\\"'}))
    system('echo "{json}" | jq --color-output .'.format(json=escaped))


def sign_transaction(path_to_signer, private_key, unsigned_transaction):
    cmd = "{signer} sign --private-key {pk} " \
         "--unsigned-transaction {tx_blob}".format(
            signer=path_to_signer, 
            pk=private_key, 
            tx_blob=unsigned_transaction)
    r = run(cmd.split(), stdout=PIPE).stdout
    return r.decode().strip()

def _request(path, data=None, network_identifier='mainnet'):
    """
    Generalized logic for sending a request to Rosetta API
    """
    data = data or {}
    nw = {} if path == "/network/list" \
        else MAINNET_NETWORK_IDENTIFIERS[network_identifier]
    path = BASE_URL + path
    data = json.dumps({**data, **nw})
    r = post(path, data)
    try:
        r.raise_for_status()
    except Exception as e:
        pprint_json(r.json())
        print(r.content)
        raise e
    return r.json()


"""
The following are helpers for generating 
various objects in a Rosetta format, namely:
    - Identifier objects for block, tx, and account
    - array of operation objects to perform a native mina token transfer
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
The following are functions implementing all requests 
available in the Mina Rosetta API
"""
def network_list():
    return _request("/network/list")

def network_status():
    return _request("/network/status")

def network_options():
    return _request("/network/options")

def block(index_or_hash):
    block_identifier = _make_block_identifier(index_or_hash)
    return _request("/block", {**block_identifier})

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
    p = _make_transfer_payload(
        src_address, dest_address, fee_nano, value_nano)
    m = tx_metadata(
        src_pubkey, src_address, dest_address, fee_nano, value_nano)
    return _request("/construction/payloads", {**p, **m})

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


def withdrawal_flow(vault_keypair, dest_address, fee_nano, value_nano):
    """
    Full withdrawal flow example (without sanity check)
    """
    # derive vault address
    vault_pubkey = vault_keypair["public"]
    derive_response = derive_account_identifier(vault_pubkey)
    vault_address = derive_response["account_identifier"]["address"]
    
    # get transfer payload to sign
    payloads_response = tx_payloads(
        vault_pubkey, vault_address, dest_address, fee_nano, value_nano)
    
    # sign transfer payload
    signature = ''

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
    submit_response = tx_submit(signed_transaction_blob)
    pprint_json(submit_response)
    
    # wait for transaction confirmation
    latest_block = 304055 # network_options()

    while True:
        pass

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

pprint_json(network_status())
# withdrawal_flow(TEST_KEYPAIR, TEST_RECEIVER, 100000000, 200000000)

# parsed1 = tx_parse(tx_payloads_response['unsigned_transaction'], False)
# signer.exe sign --private-key <private key> --unsigned-transaction <tx_payloads_response['unsigned_transaction']>
# signature = '673D7A542B6F2B178C1438EEA0E12C7C15EAE16223C6B9D3CE7A60C4AC03EA06C11EE12A2D3E787DEA930BFDA31B64F193682F596FDC6642D16BEDA7D9F03503'
# combine_response = tx_combine(tx_payloads_response, signature)
# parsed2 = tx_parse(combine_response['signed_transaction'], True)
# future_hash = tx_hash(combine_response['signed_transaction'])
# submit_response = tx_submit(combine_response['signed_transaction'])
# pprint_json(submit_response)

# pprint_json(mempool_tx(future_hash['transaction_identifier']['hash']))


# curl_base = """curl -L -X POST '{path}' \\
# -H 'Content-Type: application/json' \\
# -H 'Accept: application/json' -d '{data}' | jq --color-output ."""





