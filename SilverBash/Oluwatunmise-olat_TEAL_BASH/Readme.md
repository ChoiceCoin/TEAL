### SMART CONTRACT

## Problem Statement:
    Track the number of calls made to our application

## MUST HAVE TOOLS TO TEST:
    Docker: To run a node of the algorand blockchain
    Bash e.g git bash

## TOOLS:
    pyteal
    algorand sandbox

## RUN STEPS:
    Open command line to folder Oluwatunmise-olat_TEAL_BASH and do the following
    1. pip install -r requirements.txt
    2. pip install py-algorand-sdk
    3. pip install pyteal

    Open a bash terminal e.g git bash or a linux terminal and change directory to Oluwatunmise-olat_TEAL_BASH/sandbox.

    NOTE: YOU MUST HAVE DOCKER ON YOUR SYSTEM
    
    Run the following command to start a running algorand node on your system. you must have docker on your system. give it time to run.
    Once it is done, it would exist the terminal itself

    2. ./sandbox up testnet

    Make sure the sandbox has started running first. It would exit the terminal saying: 
        $
            Last Catchpoint:
            Genesis ID: testnet-v1.0
            Genesis hash: SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=

            indexer - health
            Indexer disabled for this configuration.

    Open the deploy.py file and put the mnemonic for an account on testnet with algo in the variable called creator_of_contract_mnemonic on line 10

    Go back to the root command line i.e Oluwatunmise-olat_TEAL_BASH and run the following command
    
    3. py deploy.py

    Now the app runs

## READ MORE:
    Check Details.md
## YOUTUBE LINK:
    https://youtu.be/L0it7x_9Y5E