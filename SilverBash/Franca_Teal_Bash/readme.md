# What is smart contract

Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.

# How to run

Python3 contract.py

# Security Token

Security Token is an extension of the Asset example with more features and restrictions. There are two types of admins, contract admins and transfer admins.

Contract admins can delete the smart contract if the entire supply is in the reserve. They can promote accounts to transfer or contract admins. They can also mint and burn funds.

Transfer admins can impose maximum balance limitations on accounts, temporarily lock accounts, assign accounts to transfer groups, and impose transaction restrictions between transaction groups.

Both contract and transfer admins can pause trading of funds and freeze individual accounts.

Accounts can only transfer funds if trading is not paused, both the sender and receive accounts are not frozen or temporarily locked, transfer group restrictions are not in place between them, and the receiver’s account does not have a maximum balance restriction that would be invalidated.
