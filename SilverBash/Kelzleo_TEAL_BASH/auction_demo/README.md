# Algorand Auction Demo

This demo is an on-chain NFT auction using smart contracts on the Algorand blockchain.

## Usage

The file `auction/operations.py` provides a set of functions that can be used to create and interact
with auctions. See that file for documentation.

## Development Setup

This repo requires Python 3.6 or higher. We recommend you use a Python virtual environment to install
the required dependencies.

Set up venv (one time):

- `python3 -m venv venv`

Active venv:

- `. venv/bin/activate` (if your shell is bash/zsh)
- `. venv/bin/activate.fish` (if your shell is fish)

Install dependencies:

- `pip install -r requirements.txt`

Run tests:

- First, start an instance of [sandbox](https://github.com/algorand/sandbox) (requires Docker): `./sandbox up nightly`
- `pytest`
- When finished, the sandbox can be stopped with `./sandbox down`

Format code:

- `black .`

# output

Alice is generating temporary accounts...
Alice is generating an example NFT...
The NFT ID is: 17
Alice is creating auction smart contract that lasts 30 seconds to auction off NFT...
Alice is setting up and funding NFT auction...
Alice's algo balance: 99998100 algos
The smart contract now holds the following: {0: 202000, 17: 1}
Carla wants to bid on NFT, her algo balance: 100000100 algos
Carla is placing bid for: 1000000 algos
Carla is opting into NFT with id: 17
Alice is closing out the auction....
The smart contract now holds the following: {0: 0}
Carla's NFT balance: 1 for NFT ID: 17
Alice's balances after auction: {0: 101197100, 17: 0} Algos
Carla's balances after auction: {0: 98997100, 17: 1} Algos
