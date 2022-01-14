# Workshop: Morra 
  Morra is a game where players submit their fingers along with a prediction of the total amount of all players fingers and whoever gets the right prediction is the winner. In our project, we made our variation of Morra in such a way that a wager could be placed on each game and whoever wins the game takes the total wager. 
  
# Perequisite
- We are expecting that you already have Reach installed
- We are expecting that you have gone through the Reach tutorial [here](https://docs.reach.sh/tut.html)
- Familiarity with React
- Fair understanding of React hooks

# Participants And Their Responsibilities
Let's proceed by defining the Participants in our Morra Game, let's assume there are two participants, let's call them Player1 and Player2, below are their responsibilities in the order in which they perform them:

1. Player1 deploys the contract
2. Player2 Connects to the contract
3. Player1 sends his Wager
4. Player2 accepts Player1 wager
5. Player1 sends the number of fingers he wants to play
6. Player2 sends the number of fingers he wants to play

After step 6, the program computes who the winner is and displays it but if it's a draw, the program makes sure steps 5 and 6 are repeated until there is a winner.

# Implementation
## Basic Setup
In your preferred directory, run the command below in the terminal:

```bash
 npx create-react-app morra-workshop
```
wait for the command above to run as this will bootstrap a react template for you.
Next, run the commands below to open the morra-workshop react project in vs code and to also navigate to the `src` directory in  terminal since this is where we will be writing our reach code

```bash
cd morra-workshp
code .
cd src
```
then run the command below in the `src` directory to be sure reach is installed
```bash
reach version
```
On my PC, I get `reach 0.1` as the result of that command, if you are getting a message saying Reach is not installed and you are certain you have installed reach by following the instructions [here](https://docs.reach.sh/tut-1.html). You can follow the steps below to add Reach to your Path on a Mac os
1. Open up Terminal.
2. Run the following command: `sudo nano /etc/paths`.
3. Enter your password, when prompted.
4. Go to the bottom of the file, and enter `/Users/{username}/reach`.
5. Hit control-x to quit.
6. Enter “Y” to save the modified buffer.
Please note that you might need to close and open all instances of terminal for this to work well

## Full Reach code below:
```rsh
'reach 0.1'

const AllPlayers = {
    ...hasRandom, 
    play:Fun([],Array(UInt,2)),
    displayWinner:Fun([UInt],Null)
};

const Player1 = {
    wager:UInt,
    ...AllPlayers
}

const Player2 = {
    acceptWager: Fun([UInt],Bool),
    ...AllPlayers

}

export const main = Reach.App({},[Participant('Player1',Player1),Participant('Player2',Player2)],
(A,B)=>{

    A.only(()=>{
const wager = declassify(interact.wager);

    });
    A.publish(wager).pay(wager);

    commit();

    B.only(()=>{
        const acceptWager = declassify(interact.acceptWager(wager))
    });
    B.pay(wager); 
    var outcome =0
    
    invariant(balance()==2*wager);
    while (outcome == 0){
        commit()
        A.only(()=>{
            const [_finger1,_prediction1] = interact.play();
            const [_finger1Comit,_finger1Salt] = makeCommitment(interact,_finger1);
            const [_prediction1Comit,_prediction1Salt] = makeCommitment(interact,_prediction1);
            const prediction1Comit = declassify(_prediction1Comit)
            const finger1Commit = declassify(_finger1Comit)
            // const  [fingers1,prediction1] = declassify(interact.play())
        });
        A.publish(finger1Commit, prediction1Comit);
        commit()
        unknowable(B,A(_finger1,_prediction1,_finger1Salt,_prediction1Salt))
        B.only(()=>{
            const [fingers2,prediction2]  = declassify(interact.play())
        });
        B.publish(fingers2,prediction2);
        commit();

        A.only(()=>{
            const  [fingers1,finger1Salt] = declassify([_finger1,_finger1Salt])
            const [prediction1,prediction1Salt] = declassify([_prediction1,_prediction1Salt])
        });
        A.publish(fingers1,finger1Salt,prediction1,prediction1Salt);
     
        checkCommitment(finger1Commit,finger1Salt, fingers1)
        checkCommitment(prediction1Comit,prediction1Salt, prediction1)

        const totalFingers = fingers1 + fingers2;
        outcome = totalFingers == prediction1 &&  totalFingers == prediction2 ? 0:  totalFingers == prediction1 ? 1: totalFingers == prediction2 ? 2:0;
        // each([A,B],()=>{
        //    outcome==1?interact.displayWinner(outcome):null;
        //   })
        continue;
    }
    assert(balance()==2*wager)
 
    const valToTrans = outcome == 1 ? [2,0] : outcome==2 ? [0,2] : [1,1]
    transfer(valToTrans[0]*wager).to(A)
    transfer(valToTrans[1]*wager).to(B)
    commit();

    each([A,B],()=>{
      interact.displayWinner(outcome);
    })
    exit();

}
)
```

So head back into your terminal in your `src` directory and run the command
`reach compile`, i get the result below by running that command:
```bash
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
  Verifying when ONLY "Player1" is honest
  Verifying when ONLY "Player2" is honest
Checked 38 theorems; No failures!
```
This should also create a build folder in that directory with an `index.main.mjs` file.

# Interaction With The React Frontend
Now, lets install the dependencies we need for our frontend to work well by going to the root directory of our project and running the following command:

```bash
npm install @reach-sh/stdlib@^0.1.2-rc.56
```

Finally, you have to  get into writing the code for our App.js,
