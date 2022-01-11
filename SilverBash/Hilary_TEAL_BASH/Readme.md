#WHAT IS AN ALGORAND SMART CONTRACT?





Algorand Smart Contracts are small programs written in an assembly-like language that can be used as a replacement for signatures within a transaction. 
This language is named Transaction Execution Approval Langauge or TEAL.
This language can be written in python with the aid of the module pyteal

#WHAT IS PYTEAL?



  PYTEAL is a module created by the algorand team to help programmers create smart contracts and also work on the blockchain with having littel or no knowlege of
  how to code in assembly language,With PyTeal, developers can easily write Algorand Smart Contracts (ASC1s) in Python. PyTeal supports both stateless and statefull smart contracts.
  Algorand Smart Contracts are implemented using a new language that is stack-based, called Transaction Execution Approval Language (TEAL). This a non-Turing complete language that allows branch forwards but prevents recursive logic to maximize safety and performance.

However, TEAL is essentially an assembly language. With PyTeal, developers can express smart contract logic purely using Python. PyTeal provides high level, functional programming style abstactions over TEAL and does type checking at construction time.
  
#How to install PYTEAL?



simply go to your command line and type 'pip install pyteal'
this installs all the pyteal packages


#PROBLEM



The problem given was to create an Algorand Smart Contract with TEAL that solves any problem you choose

#Solution



With the aid of pyteal and some research based on the problem given i was able to write a program that generates a wallet address, a private key and a group of mnemonics
with the aid of the algosdk library that comes with the pyteal package, and i was able to make a smart contract which transfers a certain amount of crypto currency(i didn't specify the currency) in a period of time, until the time out condition is meet.
