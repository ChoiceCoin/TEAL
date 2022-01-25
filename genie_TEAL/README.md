# Using PYTEAL to purely express smart contract logic.


##  BUILD STEPS

1. Adding global variables 

2. Using Wallet Connect API for signing transactions

3. Connecting Sandbox and Algorand Testnet 

4. Setting EnableDeveloperAPI configuration parameter to true in the node’s configuration. 

5. Adding helper functions to:
    Compile program source
    Converts a mnemonic passphrase into a private signing key
    Wait for a given txid to be confirmed by the network
    Formats global state for printing
    Read app global state

6. Creating application for submitting transaction

7. Creating main function to deploy the contract.

8. Defining Function to call the deployed smart contract
