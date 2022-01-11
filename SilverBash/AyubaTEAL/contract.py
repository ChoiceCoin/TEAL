from pyteal import *

"""Periodic Payment"""

pay_fee = Int(1000)
pay_period = Int(50)

#duration
pay_dur = Int(5000)

pay_lease = Bytes("base64", "023sdDE2")
pay_amt = Int(2000)
rcv_addr = Addr("KLMW6DLMJTHIEOYCMNXIF5NK4LCZUGYV3TUFK4DVSK3WYY2MJQSWQZSAMU")
pay_timeout = Int(30000)


def periodic_payment(
    tmpl_fee=pay_fee,
    tmpl_period=pay_period,
    tmpl_dur=pay_dur,
    tmpl_lease=pay_lease,
    tmpl_amt=pay_amt,
    tmpl_rcv=rcv_addr,
    tmpl_timeout=pay_timeout,
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

    return periodic_pay_escrow


if __name__ == "__main__":
    print(compileTeal(periodic_payment(), mode=Mode.Signature, version=2))