# SMART CONTRACT

This code was written in python 3.9

# WHAT IS AN ALGORAND SMART CONTRACT

Algorand Smart Contracts (ASC1) are small programs that serve various functions on the blockchain and operate on layer-1. Smart contracts are separated into two main categories, smart contracts, and smart signatures. These types are also referred to as stateful and stateless contracts respectively. The type of contract that is written will determine when and how the logic of the program is evaluated. Both types of contracts are written in the Transaction Execution Approval Language (TEAL), which is an assembly-like language that is interpreted by the Algorand Virtual Machine (AVM) running within an Algorand node. TEAL programs can be written by hand or by using the Python language with the PyTEAL compiler.

# WHAT IS PYTEAL

PYTEAL is a python language binding for Algorand Smart Contracts (ASC) that abstracts away the complexities of writing smart contracts. PyTeal allows smart contracts and smart signatures to be written in Python and then compiled to TEAL. Note that the TEAL code is not automatically compiled to byte code, but that can be done with any of the SDKs, including Python. The TEAL code can also be compiled using the goal command-line tool or submitted to the blockchain to allow the node to compile it.

## Periodic Payment

Periodic Payment allows some account to execute periodic withdrawal of funds. This PyTeal program creates an contract account that allows 'tmpl_rcv' to withdraw 'tmpl_amt' every 'tmpl_period' rounds for 'tmpl_dur' after every multiple of 'tmpl_period'.

## Interface

A web interface is provided to allow users to connect their wallet to the Test Net network through any algorand wallet.

## Setup and Insallation

```sh
$ pip install -r requirements.txt
```

## Run

```sh

$ python3 run.py
```
