from pyteal import *


"""CHOICE COIN SWAP"""

GreenRex = Addr("6ZHGHH5Z5CTPCF5WCESXMGRSVK7QJETR63M3NY5FJCUYDHO57VTCMJOBGY")
Bhaney44 = Addr("7Z5PWO2C6LFNQFGHWKSK5H47IQP5OJW2M3HA2QPXTY3WTNP5NU2MHBW27M")
secret = Bytes("base32", "2323232323232323")
timeout = 3000


def choice_swap(
    choice_seller=GreenRex,
    choice_buyer=Bhaney44,
    choice_fee=1000,
    choice_secret=secret,
    choice_hash_fn=Sha256,
    choice_timeout=timeout,
):

    fee_cond = Txn.fee() < Int(choice_fee)
    safety_cond = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.close_remainder_to() == Global.zero_address(),
        Txn.rekey_to() == Global.zero_address(),
    )

    recv_cond = And(Txn.receiver() == choice_seller, choice_hash_fn(Arg(0)) == choice_secret)

    esc_cond = And(Txn.receiver() == choice_buyer, Txn.first_valid() > Int(choice_timeout))

    return And(fee_cond, safety_cond, Or(recv_cond, esc_cond))


if __name__ == "__main__":
    print(compileTeal(choice_swap(), mode=Mode.Signature, version=2))
    print("Successfully sent 5000 CHOICE COIN ")