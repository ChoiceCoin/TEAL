from pyteal import *
from algosdk.v2client import algod
from algosdk import account, mnemonic
import pyteal

# from deploy import PytealDeploy


algod_token = 'B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab'
algod_addres = "http://testnet-algorand.api.purestake.io/ps2"
purestack_token = {
    "X-Api-Key": algod_token
}

tmpl_fee = Int(1000)
tmpl_period = Int(50)
tmpl_dur = Int(5000)
tmpl_lease = Bytes("base64", "023sdDE2")
tmpl_amt = Int(2000)
tmpl_rcv = Addr("6ZHGHH5Z5CTPCF5WCESXMGRSVK7QJETR63M3NY5FJCUYDHO57VTCMJOBGY")
tmpl_timeout = Int(30000)



def periodic_payment(
    tmpl_fee=tmpl_fee,
    tmpl_period=tmpl_period,
    tmpl_dur=tmpl_dur,
    tmpl_lease=tmpl_lease,
    tmpl_amt=tmpl_amt,
    tmpl_rcv=tmpl_rcv,
    tmpl_timeout=tmpl_timeout,
):

    periodic_pay_core = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() < tmpl_fee,
        Txn.first_valid() % tmpl_period == Int(0),
        Txn.last_valid() == tmpl_dur + Txn.first_valid(),
        Txn.lease() == tmpl_lease,
    )

    periodic_pay_transfer = And(
        Txn.close_remainder_to() == Global.zero_address(),
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == tmpl_rcv,
        Txn.amount() == tmpl_amt,
    )

    periodic_pay_close = And(
        Txn.close_remainder_to() == tmpl_rcv,
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == Global.zero_address(),
        Txn.first_valid() == tmpl_timeout,
        Txn.amount() == Int(0),
    )

    periodic_pay_escrow = periodic_pay_core.And(
        periodic_pay_transfer.Or(periodic_pay_close)
    )

    return compileTeal(periodic_pay_escrow, mode=Mode.Signature, version=2)


def run_algod(amount, rounds, time, account):
    algod_client  = algod.AlgodClient(algod_token, algod_addres, headers=purestack_token)
    print('Writing contract to periodic.teal...')
    amount = Int(int(amount))
    time = Int(int(time) * 1000) # Multiply by 1000 because it is in milliseconds
    rounds = Int(int(rounds))
    address = Addr(account['address'])
    with open('periodic.teal','w') as f:
        program_teal = periodic_payment(tmpl_amt=amount, tmpl_dur=time, tmpl_period=rounds, tmpl_rcv=address)
        f.write(program_teal)
    print('Finished writing!')

    # deploy = PytealDeploy()
    # # compile program to binary
    # deploy.compile_program(algod_client, program_teal)

    # print("--------------------------")
    # print("Depoying application......")
    # app_id = deploy.create_app(algod_client)
    