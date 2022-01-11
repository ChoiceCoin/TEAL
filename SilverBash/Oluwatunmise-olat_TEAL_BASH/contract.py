from pyteal import *

def approval_program():
    """
    Main Logic of the Contract happes here.

    Problem Statement:
        A smart contract that counts how many times the application has been called

    Go To Know:
        Cond: condition method i.e for each of the transaction
        the application could be possibly called for, create a handler
        for each of those.
        i.e it checks if it's one of the transaction calls and goes to execute the handler call
    """

    # Takes a sequence of logic and execute step by step
    # We are initializing the contract i.e Writing a GLOBAL state to the application
    # once this succeds it returns an APPLICATION_ID
    handle_creation=Seq([
        App.globalPut(Bytes("Count"), Int(0)),
        Return(Int(1))
    ])

    handle_optin=Return(Int(0)) # not used in this case
    handle_closeout=Return(Int(0)) # no neeed for closeout since the is no optin
    handle_updateapplication=Return(Int(1)) # Allowing update of contract since in testing
    handle_deleteapplication=Return(Int(1))

    # initializing counter
    scratchCount=ScratchVar(TealType.uint64)

    # Here we increment the counter
    # So anytime someone calls this application, the ccount value would be increamented by 1

    deduct=Seq([
        scratchCount.store(App.globalGet(Bytes("Count"))), # we store the count in an unsigned integer (uint64)
        If(scratchCount.load()  > Int(0),
            App.globalPut(Bytes("Count"), scratchCount.load()-Int(1)),
        ),
        Return(Int(1))
    ])

    add=Seq([
        scratchCount.store(App.globalGet(Bytes("Count"))), # we store the count in an unsigned integer (uint64)
        App.globalPut(Bytes("Count"), scratchCount.load()+Int(1)),
        Return(Int(1))
    ])

    handle_noop= Cond(
        [
            And(
                Global.group_size()==Int(1),
                Txn.application_args[0]==Bytes("Add")
            ), add
        ],
        [
            And(
                Global.group_size()==Int(1),
                Txn.application_args[0]==Bytes("Deduct")
            ), deduct 
        ],
    )

    program=Cond(
        [Txn.application_id()==Int(0), handle_creation],
        [Txn.on_completion()==OnComplete.OptIn, handle_optin],
        [Txn.on_completion()==OnComplete.CloseOut, handle_closeout],
        [Txn.on_completion()==OnComplete.UpdateApplication, handle_updateapplication],
        [Txn.on_completion()==OnComplete.DeleteApplication, handle_deleteapplication],
        [Txn.on_completion()==OnComplete.NoOp, handle_noop]
    )
    return compileTeal(program, Mode.Application, version=5)


def clear_state_program():
    # ends the application/ exit the application
    program=Return(Int(1))
    return compileTeal(program, Mode.Application, version=5)


# Running the application
if __name__ == "__main__":
    # we write the output to a teal file
    with open("approval.teal", "w") as teal_file:
        teal_file.write(approval_program())

    with open("clear.teal", "w") as teal_file:
        teal_file.write(clear_state_program())