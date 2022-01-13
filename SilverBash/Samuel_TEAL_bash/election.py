from time import time, sleep

from algosdk import account, encoding
from algosdk.logic import get_application_address
from election.operations import createAuctionApp, setupAuctionApp, placeBid, closeAuction
from election.util import (
    getBalances,
    getAppGlobalState,
    getLastBlockTimestamp,
)
from election.testing.setup import getAlgodClient
from election.testing.resources import (
    getTemporaryAccount,
    optInToAsset,
    createDummyAsset,
)


def simple_election():
    ## get client
    client = getAlgodClient()

    print("Generating admin, voter 1 and voter 2 wallet addresses...")
    ## get each temporary addresses

    admin = getTemporaryAccount(client)
    seller = getTemporaryAccount(client)
    bidder = getTemporaryAccount(client)

    print("Admin algo address:", admin.getAddress())
    print("Voter 1 algo address:", seller.getAddress())
    print("Voter 2 algo address", bidder.getAddress(), "\n")

    print("Voter 1 is submitting a proposal...")
    nftAmount = 1
    nftID = createDummyAsset(client, nftAmount, seller)
    print("Voter 1 Proposal ID is", nftID)
    print("Voter 1's balances:", getBalances(client, seller.getAddress()), "\n")

    startTime = int(time()) + 10  # start time is 10 seconds in the future
    endTime = startTime + 30  # end time is 30 seconds after start
    reserve = 1_000_000  # 1 Algo
    increment = 100_000  # 0.1 Algo
    print("Admin is creating an election that lasts 30 seconds for a proposal submitted...")
    appID = createAuctionApp(
        client=client,
        sender=admin,
        seller=seller.getAddress(),
        nftID=nftID,
        startTime=startTime,
        endTime=endTime,
        reserve=reserve,
        minBidIncrement=increment,
    )
    print(
        "Done. The election app ID is",
        appID,
        "and the escrow account is",
        get_application_address(appID),
        "\n",
    )

    print("Voter 1 is setting up and funding proposal with 1 algo...")
    setupAuctionApp(
        client=client,
        appID=appID,
        funder=admin, ##
        nftHolder=seller,
        nftID=nftID,
        nftAmount=nftAmount,
    )
    print("Done\n")

    sellerBalancesBefore = getBalances(client, seller.getAddress())
    sellerAlgosBefore = sellerBalancesBefore[0]
    print("Voter 1's balances:", sellerBalancesBefore)

    _, lastRoundTime = getLastBlockTimestamp(client)
    if lastRoundTime < startTime + 5:
        sleep(startTime + 5 - lastRoundTime)
    actualAppBalancesBefore = getBalances(client, get_application_address(appID))
    print("election escrow balance:", actualAppBalancesBefore, "\n")

    bidAmount = reserve
    bidderBalancesBefore = getBalances(client, bidder.getAddress())
    bidderAlgosBefore = bidderBalancesBefore[0]
    print("Voter 2 wants to vote on proposal, voter 1 balances:", bidderBalancesBefore)
    print("Voter 2 is voting with", bidAmount, "microAlgos")

    placeBid(client=client, appID=appID, bidder=bidder, bidAmount=bidAmount)

    print("Voter 2 opts in proposal ID", nftID, "to continue voting")

    optInToAsset(client, nftID, bidder)

    print("Done Voting\n")

    _, lastRoundTime = getLastBlockTimestamp(client)
    if lastRoundTime < endTime + 5:
        waitTime = endTime + 5 - lastRoundTime
        print("Waiting {} seconds for the election to end\n".format(waitTime))
        sleep(waitTime)

    print("Admin is closing the election\n")
    closeAuction(client, appID, seller)

    actualAppBalances = getBalances(client, get_application_address(appID))
    expectedAppBalances = {0: 0}
    print("The election escrow now holds the following:", actualAppBalances)
    assert actualAppBalances == expectedAppBalances

    bidderNftBalance = getBalances(client, bidder.getAddress())[nftID]
    assert bidderNftBalance == nftAmount

    actualSellerBalances = getBalances(client, seller.getAddress())
    print("Voter 1's balances after election: ", actualSellerBalances, " Algos")
    actualBidderBalances = getBalances(client, bidder.getAddress())
    print("Voter 2's balances after election: ", actualBidderBalances, " Algos")
    assert len(actualSellerBalances) == 2
    # seller should receive the bid amount, minus the txn fee
    assert actualSellerBalances[0] >= sellerAlgosBefore + bidAmount - 1_000
    assert actualSellerBalances[nftID] == 0


simple_election()
