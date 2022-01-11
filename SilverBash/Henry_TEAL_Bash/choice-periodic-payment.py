
from pyteal import *

"""CHOICE-COIN-PROJECT Periodic Payment"""

fee = Int(1000)
period = Int(50)
duration = Int(5000)
lease = Bytes("base64", "023sdDE2")
amount = Int(2000)
payment_reciever = Addr("DMEYLRM6QIQHUHDRI2NKH35RFI7YN7RLQMAMW5W4NYSE7UW5IQ3IGPV2SI")
timeout = Int(30000)


def choice_payment(
    tmpl_fee= fee,
    tmpl_period= period,
    tmpl_dur= duration,
    tmpl_lease= lease,
    tmpl_amt= amount,
    tmpl_rcv= payment_reciever,
    tmpl_timeout= timeout,
):

    choice_pay_core = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() < tmpl_fee,
        Txn.first_valid() % tmpl_period == Int(0),
        Txn.last_valid() == tmpl_dur + Txn.first_valid(),
        Txn.lease() == tmpl_lease,
    )

    choice_pay_transfer = And(
        Txn.close_remainder_to() == Global.zero_address(),
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == tmpl_rcv,
        Txn.amount() == tmpl_amt,
    )

    choice_pay_close = And(
        Txn.close_remainder_to() == tmpl_rcv,
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == Global.zero_address(),
        Txn.first_valid() == tmpl_timeout,
        Txn.amount() == Int(0),
    )

    choice_pay_escrow = choice_pay_core.And(
        choice_pay_transfer.Or(choice_pay_close)
    )

    return choice_pay_escrow


if __name__ == "__main__":
    print(compileTeal(choice_payment(), mode=Mode.Signature, version=2))