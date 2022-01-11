from pyteal import *

"""RECURRENT DISTRIBUTION OF CHOICE OSS AWARDS"""

choice_fee = Int(1000)
choice_period = Int(50)
duration = Int(5000)

award_rcv_addr = Addr("CTACAZNEHOYUQL6NXL73PBDLGY3ZVAJDV6G4IBHWDKL6MBQIOBYFRY6BF4")
choice_amt = Int(3000)
timeout = Int(12)
lease = Bytes("base64", "023sdDE2")

def recurrent_distribution(
    tmpl_fee=choice_fee,
    tmpl_period=choice_period,
    tmpl_dur=duration,
    tmpl_lease=lease,
    tmpl_amt=choice_amt,
    tmpl_rcv=award_rcv_addr,
    tmpl_timeout=timeout,
):
# Txn.lease() is used to safeguard replay attacks and duplicate payments
    recurrent_distribution_core = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() < tmpl_fee,
        Txn.first_valid() % tmpl_period == Int(0),
        Txn.last_valid() == tmpl_dur + Txn.first_valid(),
        Txn.lease() == tmpl_lease,  
    )

    recurrent_distribution_transfer = And(
        Txn.close_remainder_to() == Global.zero_address(),
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == tmpl_rcv,
        Txn.amount() == tmpl_amt,
    )

    recurrent_distribution_close = And(
        Txn.close_remainder_to() == tmpl_rcv,
        Txn.rekey_to() == Global.zero_address(),
        Txn.receiver() == Global.zero_address(),
        Txn.first_valid() == tmpl_timeout,
        Txn.amount() == Int(0),
    )

    periodic_pay_escrow = recurrent_distribution_core.And(
        recurrent_distribution_transfer.Or(recurrent_distribution_close)
    )

    return periodic_pay_escrow


if __name__ == "__main__":
    print("Distribution In Progress!!!!!")
    print(compileTeal(recurrent_distribution(), mode=Mode.Signature, version=2))
    print("Distributed Awards to Choice Award Winner")