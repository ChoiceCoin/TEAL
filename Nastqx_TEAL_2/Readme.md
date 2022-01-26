# Periodic_payment

## Periodic Payment allows some account to execute periodic release of funds after a period and number of rounds

Asset is an implementation of a custom asset type using smart contracts. While Algorand has ASAs, in some blockchains the only way to create a custom asset is through smart contracts.

At creation, the creator specifies the total supply of the asset. Initially this supply is placed in a reserve and the creator is made an admin. Any admin can move funds from the reserve into the balance of any account that has opted into the application using the mint argument. Additionally, any admin can move funds from any account’s balance into the reserve using the burn argument.

Accounts are free to transfer funds in their balance to any other account that has opted into the application. When an account opts out of the application, their balance is added to the reserve.

### Install

- PyTeal requires Python version >= 3.6.
- cd to the directory where requirements.txt is located.
- activate your virtualenv.
- run: pip install -r requirements.txt in your shell.

### Run

- Run the CustomAsset contract in your shell

