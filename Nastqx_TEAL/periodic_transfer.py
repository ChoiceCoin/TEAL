from pyteal import *

"""Periodic Release of Fund"""

Amount_of_choice = Int(500)  #the maximum number of funds allowed for a single withdrawal
Choice_recepient_address = Addr("SAFDNIP54CHIUPOXXVTU2KG6QQLZTFSTT4KCHWSYHQQPFWI736YOOEQKJQ") 
TMPL_fee = Int(1000)
TMPL_period = Int(50) 
TMPL_dur = Int(5000) 
TMPL_lease = Bytes("base64", "023sdDE2") 
TMPL_timeout = Int(30000) 

def periodic_payment(
Amount_of_choice=Amount_of_choice,
Choice_recepient_address=Choice_recepient_address,
TMPL_fee=TMPL_fee,
TMPL_period=TMPL_period,
TMPL_dur=TMPL_dur,
TMPL_lease=TMPL_lease,
TMPL_timeout=TMPL_timeout,
):
    # check the type of transaction. In this case, it is checking for a pay transaction.
    periodic_pay_core = And(
    Txn.type_enum() == TxnType.Payment,
    Txn.fee() < TMPL_fee, #check the fee to ensure it is less than reasonable amount, So this says, make sure the transaction fee is less than or equal to 1000.
    Txn.first_valid() % TMPL_period == Int(0),
    Txn.last_valid() == TMPL_dur + Txn.first_valid(),
    Txn.lease() == TMPL_lease,
    )

    periodic_pay_transfer = And(
    Txn.close_remainder_to() ==  Global.zero_address(), #checks that the transaction set CloseRemainderTo to global zero address
    Txn.rekey_to() == Global.zero_address(),
    Txn.receiver() == Choice_recepient_address, #set the receiver of the transaction to the intended receiver
    Txn.amount() == Amount_of_choice, #set the amount of the transaction to the intended amount.
    Txn.first_valid() % TMPL_period == Int(0), #checks that the Txn.first_valid() is divisable by the TMPL_period
    Txn.last_valid() == TMPL_dur + Txn.first_valid(), #checks Txn.first_valid() and Txn.last_valid() are Withdrawalyy_dur away.
    Txn.lease() == TMPL_lease #Checks that the lease is set to limit replay rate
    )

    """ When the periodic payment’s time (Txn.first_valid() > TMPL_timeout),
    then all the remaining balance is closed to Choice_recepient_address .
    """
    periodic_pay_close = And(
    Txn.close_remainder_to() == Choice_recepient_address,
    Txn.rekey_to() == Global.zero_address(),
    Txn.receiver() == Global.zero_address(),
    Txn.first_valid() == TMPL_timeout,
    Txn.amount() == Int(0),
    )

    periodic_pay_escrow = periodic_pay_core.And(
    periodic_pay_transfer.Or(periodic_pay_close)
    )
    return periodic_pay_escrow


if __name__ == '__main__':
    with open('periodic_payment.teal', 'w') as f: #write the teal code into periodic_payment.teal file
        compiled = compileTeal(periodic_payment(), mode=Mode.Signature, version=2)
        f.write(compiled)
    