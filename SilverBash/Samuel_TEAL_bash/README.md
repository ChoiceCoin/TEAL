# Samuel's TEAL task submission

This demo is an on-chain election proposals using smart contracts using pyteal on the Algorand blockchain.


## Run locally

- make sure you have python installed (python-v3+) in your terminal

- make sure you have docker installed

- set up a sandbox instance which is a fast way to create and configure an Algorand development environment with Algod and Indexer
* `./sandbox up nightly`


- Set up virtual environment(venv) (one time):
 * `python3 -m venv venv`

- Active venv with 
* `. venv/bin/activate`

- Install dependencies with :
* `pip install -r requirements.txt`

- start `election teal app` with
* `python3 index.py` 

* When finished, the sandbox can be stopped with `./sandbox down`

## functioinalities/checks

- [x] admin account and voters(1&2) algo wallet addresses are dynamically created.
- [x] Admin create an election-proposal app with teal with an ID
- [x] Voter 1 create a proposal 
- [x] Admin sets 30s for the `Voter 1`'s proposal duration 
- [x] Voter 1 sends `1000000` algos to the proposal's address
- [x] each balance being shown after proposal end.

## video
check [video](https://www.youtube.com/watch?v=7KsHCXnsTPo)

learn more on algorand doc on [pyteal](https://developer.algorand.org/docs/get-details/dapps/pyteal/)
