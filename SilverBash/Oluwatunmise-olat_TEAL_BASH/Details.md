### BACKGROUND KNOWLEDGE
    Smart contracts are implemented using two programs:

    1.ApprovalProgram: Responsible for most of the logic of an application. This program will succeed only if one nonzero value is returned
    2.ClearStateProgram: Handle accounts using the clear call to remove the smart contract from their balance record
    
    We make calls to smart contracts using With ApplicationCall transactions. There are 6 types of transactions:

    NoOps: Generic application calls to execute the ApprovalProgram
    OptIn: Accounts use this transaction to opt into the smart contract to participate (local storage usage).
    DeleteApplication: Transaction to delete the application.
    UpdateApplication: Transaction to update TEAL Programs for a contract.
    CloseOut: Accounts use this transaction to close out their participation in the contract. This call can fail based on the TEAL logic, preventing the account from removing the contract from its balance record.
    ClearState: Similar to CloseOut, but the transaction will always clear a contract from the account’s balance record whether the program succeeds or fails.


    A set of arrays can be passed with any application transaction, which instructs the protocol to load additional data for use in the contract. These arrays are:

    applications array: used to read state for the specific contracts
    accounts array: allows additional accounts to be passed to the contract for balance information and local storage
    assets array: used to retrieve configuration and asset balance information
    arguments array: used as method's input parameters.
    On runtime, TEAL program will load necessary variables on its stack. The applications array, accounts array, and assets array are read-only, while global and local state are readable and writable. The program can also use temporary variables by requesting memory from scratch memory.

### IMPLEMENTATION OF CONTRACT

    contract.py File
    Open the contract.py file

    First, we need to handle 5 types of transactions for approval program.

    1.OptIn, 
    2.CloseOut,
    3.UpdateApplication,
    4.DeleteApplication,
    5.Creation

    The compileTeal function compiles the program as defined by the program variables. 

    In approval program, Cond expression allows several conditions to be chained. 
    The first is condition, and the second is the condition body. 
    If none of the conditions are true the smart contract will return an error and fail. 
    When the contract is first created, the contract’s ID will be equal to 0. 
    After that, all smart contracts will have a unique ID and a unique Algorand address.

    The first condition checks if this is the first execution of the contract.

    Next, we will define on_create logic:

    The Seq is used to provide a sequence of expressions. 
    When this smart contract is first deployed it will store a global variable named Count with a value of 0 and immediately return success.

    Next, we will define handle_noop logic:

    We request scratch memory with size of (unsigned integer i.e positive int) uint64 to store data from the global Count variable, 
    and we can read and write global state with App.globalGet and App.globalPut.
    The condition Global.group_size() == Int(1) is used to guarantee that this transaction is not submitted with other transactions in a group.
    We use the first application argument as function name - Add and Deduct.


    deploy.py File

    1.The function compile_program will use algod api to compile from Teal to bytecode.

    2.wait_for_confirmation is a generic function to check if a transaction is confirmed on the blockchain.
    Each loop, it gets the TX status by pending_transaction_info, and the max number of loop is specified by the number of blocks counting from the current block. 

    3.The format_state will parse key and value to prettier and readable format

    4.read_global_state will read the raw state of an application from the creator account. 
    
    5.The create_app and call_app can be used for any application. 
    
    6.The create_app uses transaction.ApplicationCreateTxn to build NoOp TX, then signs TX with private key recovered from mnemonic, send TX and wait for confirmation, 
    finally, it gets TX status and returns app ID. 
    
    7.The call_app is similar to create_app, but it adds application arguments into NoOp transaction. 
    
    8.Finally, we build main function for easier use.