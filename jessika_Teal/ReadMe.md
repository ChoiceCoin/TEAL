# JESSICA DUTCH AUCTION IMPLEMENTATION 

This demo is an on-chain Dutch Auction on Algorand blockchain via smart contracts with Pyteal.

## Article
- check the [article](https://medium.com/@ahamuefuleterence/my-algorand-smart-contract-using-pyteal-to-implement-a-dutch-auction-856ef26860d6)

check video
## How to Run locally

- make sure you have python installed (python-v3+) in your terminal

- make sure you have docker installed

- set up a sandbox instance which is a fast way to create and configure an Algorand     development environment with Algod and Indexer

- ``./sandbox up nightly``


- `python3 -m venv venv`

- Active venv with

- `. venv/bin/activate`

- Install dependencies with :

- `pip install -r requirements.txt`

- start election teal app with

- `python3 index.py`

- When finished, the sandbox can be stopped with `./sandbox down`