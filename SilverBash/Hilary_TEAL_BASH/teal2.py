from pyteal import *
from pyteal.ast import txn
#template variables
tran_fee = Int(1000)
tran_period = Int(100)
tran_duration = Int(10)
private_key = Bytes("base64", "rQEXJPLX9m0hup3ISmccOZDQuXYQdjU8y+63jlIqV7MbUtwGUSBZxb9wCCejcbM5uKMk6ttEARFReX9Pa6gnuQ==")
amount = Int(200000)
address = Addr('DNJNYBSREBM4LP3QBAT2G4NTHG4KGJHK3NCACEKRPF7U625IE64RMEHGJE')
timeout = Int(30000)

paycore = And(Txn.type_enum() == Int(1),
                        Txn.fee() < tran_fee)
                      
transfer = And(Txn.close_remainder_to() ==  Global.zero_address(),
                            Txn.receiver() == address,
                            Txn.amount() == amount,
                            Txn.first_valid() % tran_period == Int(0),
                            Txn.last_valid() == tran_duration + Txn.first_valid(),
                            Txn.lease() == private_key)

close_tran = And(Txn.close_remainder_to() == address,
                         Txn.receiver() == Global.zero_address(),
                         Txn.first_valid() > timeout,
                         Txn.amount() == Int(0))

pay_escrow = And(paycore, Or(transfer, close_tran))

print(compileTeal(pay_escrow, Mode.Application))