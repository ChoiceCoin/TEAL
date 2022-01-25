# TEAL Smart Contract responsible for voting arbitrary choices.

This smart contract has a configurable registration period defined by the global state RegBegin and RegEnd which restrict when accounts can register to vote. There is also a separate configurable voting period defined by the global state VotingBegin and VotingEnd which restrict when voting can take place.

An account must register in order to vote. Accounts cannot vote more than once, and if an account opts out of the application before the voting period has concluded, their vote is discarded. The results are visible in the global state of the application, and the winner is the candidate with the highest number of votes.

TO START WRITING TEAL CODE, YOU NEED A CODE EDITOR AND PYTEAL LIBRARY INSTALLLED 


Youtube link for the video --->>> https://youtu.be/iOZYzF477nA

For more information on Pyteal and TEAL SMART CONTRACT

https://pyteal.readthedocs.io
