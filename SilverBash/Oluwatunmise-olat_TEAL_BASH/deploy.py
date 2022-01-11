import os
import base64
from algosdk.v2client import algod
from algosdk.future import transaction
from algosdk import mnemonic as _mnemonic, account
from contract import approval_program, clear_state_program

# Declared accounts mnemonics
# Note this account must be funded eith testnet algo
creator_of_contract_mnemonic ="" #put your mnemonic

# Connecting to the testnet algorand node
# This is the default configuration for the sandbox
algod_address="http://localhost:4001"
algod_token="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

def compile_program(client, code):
    """This Functon helps to compile
    our source code

    Args:
        client: [description]
        code: source code

    Returns:
        Encoded compiled code 
    """

    compiler_response =client.compile(code)
    return base64.b64decode(compiler_response["result"])

def wait_for_confirmation(client, transaction_id, timeout):
    start_round = client.status()["last-round"] + 1
    current_round = start_round

    while current_round < start_round + timeout:
        try:
            pending_txn = client.pending_transaction_info(transaction_id)
        except Exception:
            return
        if pending_txn.get("confirmed-round", 0) > 0:
            return pending_txn
        elif pending_txn["pool-error"]:
            raise Exception('pool error: {}'.format(pending_txn["pool-error"]))
        client.status_after_block(current_round)
        current_round += 1
    raise Exception("pending tx not found in timeout rounds, timeout value = : {}".format(timeout))

def format_state(state):
    formatted = {}
    for item in state:
        key = item['key']
        value = item['value']
        formatted_key = base64.b64decode(key).decode('utf-8')
        if value['type'] == 1:
            if formatted_key == 'voted':
                formatted_value = base64.b64decode(value['bytes']).decode('utf-8')
            else:
                formatted_value = value['bytes']
            formatted[formatted_key] = formatted_value
        else:
            formatted[formatted_key] = value['uint']
    return formatted

# helper function to read app global state
def read_global_state(client, addr, app_id):
    results = client.account_info(addr)
    apps_created = results['created-apps']
    for app in apps_created:
        if app['id'] == app_id:
            return format_state(app['params']['global-state'])
    return {}

# create a new application
def create_app(client, private_key, approval_program, clear_program, global_schema, local_schema):
    # define sender as creator
    sender = account.address_from_private_key(private_key)

    # declare on_complete as NoOp
    on_complete = transaction.OnComplete.NoOpOC.real
    #get node suggested parameters
    params = client.suggested_params()
    # create an unsigned transaction
    txn = transaction.ApplicationCreateTxn(sender, params, on_complete, approval_program, clear_program, global_schema, local_schema)
    # we sign the transaction
    signed_txn = txn.sign(private_key)
    tx_id = signed_txn.transaction.get_txid()
    # send the transaction to the blockchain
    client.send_transactions([signed_txn])
    # wait for transaction to be broadcasted
    wait_for_confirmation(client, tx_id, 5)
    transaction_response = client.pending_transaction_info(tx_id)
    app_id = transaction_response['application-index']
    print("Created new app_id:", app_id)
    return app_id

def call_app(client, private_key, index, app_args):
    sender = account.address_from_private_key(private_key)
    params = client.suggested_params()
    txn = transaction.ApplicationNoOpTxn(sender, params, index, app_args)
    signed_txn = txn.sign(private_key)
    tx_id = signed_txn.transaction.get_txid()
    client.send_transactions([signed_txn])
    wait_for_confirmation(client, tx_id, 5)
    print("Application called")




def main():
    # initialize an algodClient
    algod_client=algod.AlgodClient(algod_token, algod_address)
    # define private key
    creator_private_key = _mnemonic.to_private_key(creator_of_contract_mnemonic)
    # declare application state storage(immutable)
    global_schema = transaction.StateSchema(num_uints=1, num_byte_slices=0)
    local_schema = transaction.StateSchema(num_uints=0, num_byte_slices=0)

    #compile approval_program to binary to be interpreted by the blockchain
    approval_program_compiled = compile_program(algod_client, approval_program())
    #compile clear program to binary to be interpreted by the blockchain
    clear_state_program_compiled = compile_program(algod_client, clear_state_program())

    print("--------------------------------------------")
    print("Deploying Counter application...")
    #create a new application
    app_id = create_app(algod_client, creator_private_key, approval_program_compiled, clear_state_program_compiled, global_schema, local_schema)
    print("Global state:", read_global_state(algod_client, account.address_from_private_key(creator_private_key), app_id))

    print("--------------------------------------------")
    print("Calling Counter application...")
    call_app(algod_client, creator_private_key, app_id, app_args=["Add"])
    print("Global state:", read_global_state(algod_client, account.address_from_private_key(creator_private_key), app_id))
    print("--------------------------------------------")
    print("Calling Counter application again ...")
    call_app(algod_client, creator_private_key, app_id, app_args=["Add"])
    print("Global state:", read_global_state(algod_client, account.address_from_private_key(creator_private_key), app_id))
    print("Calling Counter application again ...")
    call_app(algod_client, creator_private_key, app_id, app_args=["Deduct"])
    print("Global state:", read_global_state(algod_client, account.address_from_private_key(creator_private_key), app_id))

main()
