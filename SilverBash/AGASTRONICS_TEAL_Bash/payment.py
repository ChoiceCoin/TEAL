from pyteal import *

"""Split Payment"""

tmpl_fee = Int(1000)
tmpl_rcv1 = Addr("77L5JXCEOYJX6573EIUOHC2ITXIDLNNWQGMS46OCQBGT6C6Y5TOWMNFYWI")
tmpl_rcv2 = Addr("HNYT2Z3DD55ZH463QISM3XP5ZTC7LCM44HAIHC5QZZLPJS2RDDPFSVALOQ")
tmpl_own = Addr("TPWLWQUEQTWJTJF2ROWZX77BXPVXWCB6623T7SNLXOV7ZIWLAISHD2U6DE")
tmpl_ratn = Int(1)
tmpl_ratd = Int(3)
tmpl_min_pay = Int(1000)
tmpl_timeout = Int(3000)


def split(
    tmpl_fee=tmpl_fee,
    tmpl_rcv1=tmpl_rcv1,
    tmpl_rcv2=tmpl_rcv2,
    tmpl_own=tmpl_own,
    tmpl_ratn=tmpl_ratn,
    tmpl_ratd=tmpl_ratd,
    tmpl_min_pay=tmpl_min_pay,
    tmpl_timeout=tmpl_timeout,
):

    split_core = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() < tmpl_fee,
        Txn.rekey_to() == Global.zero_address(),
    )

    split_transfer = And(
        Gtxn[0].sender() == Gtxn[1].sender(),
        Txn.close_remainder_to() == Global.zero_address(),
        Gtxn[0].receiver() == tmpl_rcv1,
        Gtxn[1].receiver() == tmpl_rcv2,
        Gtxn[0].amount()
        == ((Gtxn[0].amount() + Gtxn[1].amount()) * tmpl_ratn) / tmpl_ratd,
        Gtxn[0].amount() == tmpl_min_pay,
    )

    split_close = And(
        Txn.close_remainder_to() == tmpl_own,
        Txn.receiver() == Global.zero_address(),
        Txn.amount() == Int(0),
        Txn.first_valid() > tmpl_timeout,
    )

    split_program = And(
        split_core, If(Global.group_size() == Int(2), split_transfer, split_close)
    )

    return split_program


if __name__ == "__main__":
    print(compileTeal(split(), mode=Mode.Signature, version=2))