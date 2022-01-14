If you have Algosigner installed, feel free to connect to the testnet and check out this project [here](http://jesulonimi21.github.io/morra-react)
# Workshop: Morra 
In this workshop, I will explain the Project Ayeni Tosin and I submitted for the Universities Unchained Bounty hack. It's actually a Morra game, just in case you don't know what morra is,  Morra is a game where players submit their fingers along with a prediction of the total amount of all players fingers and whoever gets the right prediction is the winner. In our project, we made our variation of Morra in such a way that a wager could be placed on each game and whoever wins the game takes the total wager. You can also go through this [article](https://anjola4jeez.medium.com/developing-apps-that-run-on-more-than-one-blockchain-with-reach-9a3232ed3386) to have a grasp of the experience we had while working on the project

# Perequisite
- We are expecting that you already have Reach installed
- We are expecting that you have gone through the Reach tutorial [here](https://docs.reach.sh/tut.html)
- Familiarity with React
- Fair understanding of React hooks

If you have any problems with the prerequisites above, I will advise that you post your problem  in the help channel on the [Reach Discord server](https://discord.gg/XJHFzSsc)

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

## Reach Code

so right in vs code in the src folder, please create a  new file and call it `index.rsh`, this is the file we will be writing our reach code in, let's jump right into that next:

```rsh
'reach 0.1'
```
First of all, we add the line above in our `index.rsh` file, this simply signifies that this is a reach file and it also specifies the version of reach we are using. Next let's create the interfaces for the primary interactions that all our players(Player1 and Player2) will have with the front end:

```rsh
const AllPlayers = {
    ...hasRandom, 
    play:Fun([],Array(UInt,2)),
    displayWinner:Fun([UInt],Null)
};
```
First of all, we define `...hasRandom` so the reach code can generate random numbers, we use this to protect the number of fingers Player1 makes so that Player2 does not know the number of fingers submitted by Player1 since if he knows this, he can simply calculate it and submit any number of fingers with the calculated right prediction(More on this later). We also define the interface `Play` which returns an array of two numbers(This allow's the user of the frontend to play his fingers along with his prediction), the first number will be the fingers submitted by the player that calls the function while the second value will be his/her prediction of the total number of fingers. Lastly, we define displayWinner, which is a function that simply displays the winner. Please note that all of the values defined above can be called by any of the players.

Let's proceed to define the interface for responsibilities that are particular to Player1:

```rsh
const Player1 = {
    wager:UInt,
    ...AllPlayers
}
```
So player 1 simply has a property called `wager`, this property will store the wager placed by Player1 and secondly, we put all the properties in our `AllPlayers` interface created earlier.

Let's further look at the interface for Player2

```rsh
const Player2 = {
    acceptWager: Fun([UInt],Bool),
    ...AllPlayers
}
```
`Player2` has a function that allows the user of the frontend to send a boolean indicating that he/she accepted the wager and it also includes all properties of the `AllPlayers` interface

Lets proceed to implementing the logic of our Reach file, all reach programs have a main function they export, you can find the most basic form of what ours looks like below:
```rsh
export const main = Reach.App({},[Participant('Player1',Player1),Participant('Player2',Player2)],
(A,B)=>{

   exit();
});
```
the main function that's exported is simply the function returned from the function call of `Reach.App()`, the parameters that are important to us here are simply the second and third parameter, the second parameter is an array of a `Participant` object signifying the participants in our app, while the third parameter is a function that maps our first and second participant to variable A and B, this is where our app logic will live. You can write the Reach code I will be writing next within that function:

```rsh
 A.only(()=>{
const wager = declassify(interact.wager);
    });
     A.publish(wager).pay(wager);
      commit();
```
The first line of code above signifies that this is a step(the code in `A.only(()=>{...})` ) that only Player1(A) can take, we simply get the wager passed in by the frontend and store it in a variable called `wager`, next we publish the value so its visible to all players, and also pay the same amount from Player1 to the contract by chaining the `.pay` function to the `publish` function. Lastly, we commit the state of the consensus network.


Note: Please do note that the `wager` variable created earlier is not scoped to its surrounding curly brace but it's just only known to the participant in whose `only` function it is created until it's published.

Let's proceed
```rsh
    B.only(()=>{
        const acceptWager = declassify(interact.acceptWager(wager))
    });
    B.pay(wager); 
    var outcome =0
    
```
then we proceed by making sure Player2(B) accepts the wager and actually pays it,
then we create an outcome variable and make it equal to zero, we are assuming here that an outcome with value zero means the outcome is a draw, 1 means player1 won and 2 means player2 won,


Next, we have to define the steps that actually receive the fingers and the predictions, then compare them to determine the winner, we will do this in a while loop, so the program can continue executing if the round or subsequent round is a draw, also notice that we did not commit the state of the consensus network after Player2 paid his wager, this is because a while loop in reach must occur in the middle of a consensus step. The first step in creating a while loop in Reach is to write the code for our invariant, this happens below:

```rsh
  invariant(balance()==2*wager);
```
The invariant simply indicates variables in our code that we do not intend to change since variables created in reach are static and unchangeable, so we do not make a mistake of updating such variable in our while loop, we make an invariant in our own case saying the value of our balance must not change. Next, let's define the code for our loop:

```rsh
 while (outcome == 0){
        commit()
        A.only(()=>{
            const [_finger1,_prediction1] = interact.play();
            const [_finger1Comit,_finger1Salt] = makeCommitment(interact,_finger1);
            const [_prediction1Comit,_prediction1Salt] = makeCommitment(interact,_prediction1);
            const prediction1Comit = declassify(_prediction1Comit)
            const finger1Commit = declassify(_finger1Comit)
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
        continue;
    }
```
First of all,  we commit our last transaction which at the start of the loop is Player1's transaction and subsequently, it is a publish of Player1's fingers and prediction, next we use a cryptographic commitment scheme to make Player1 publish a commit for both his fingers and prediction, this is so that player2 does not have access to player1's fingers before playing his own fingers so he can't compute the right number of fingers based on what player1 played, then we allow player2 play and publish his own fingers along with his prediction, then we allow player1 publish his original fingers and prediction along with their respective salt so we use the `checkCommitment` function to use the salt and the commit to verify both the finger and the prediction.  We then add the fingers and store in a variable called `totalFingers` and compute the outcome based on whose prediction is right.


```rsh
 assert(balance()==2*wager)
 
    const valToTrans = outcome == 1 ? [2,0] : outcome==2 ? [0,2] : [1,1]
    transfer(valToTrans[0]*wager).to(A)
    transfer(valToTrans[1]*wager).to(B)
    commit();

    each([A,B],()=>{
      interact.displayWinner(outcome);
    })
    exit();
```
After the loop, we assert that the balance did not change, we compute the value to transfer and out of the contract to the players and transfer them with the  `transfer` function and then commit the state of the consensus network, and lastly, we call the `displayWinner` function of both players passing in the `outcome` value

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
Wait for it to finish and you're all set up, now add the code below to your app.css file:
```css

.centerDiv{
  height: 100vh; /* Magic here */
  display: flex;
  justify-content: center;
  align-items: center;
}

.childDiv{
  border-width:1px;
  border-color: #4ABCD9;
  border-style: solid;
  width:70%;
  height:80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.playerButton{
  display:block;
  height:40px;
  width:120px;
  margin-top: 10px;
  border-radius: 10px;
  border-width: 0px;
  background-color: #4ABCD9;
  color: white;
  font-weight: bold;
}
.game-title{
  color: #4ABCD9;
}
.input{
  margin-top: 0px;
  width:"40%";
  height:40px;
  border: 2px solid  #4ABCD9;
  border-radius: 10px ;
 text-align: center;
}
.inputIdentifier{
  margin-bottom: 4px;
  color: #4ABCD9;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

}
.wait-p2{
  margin-top: 0px;
}
.loader-container{
  position: absolute;
  background-color: white;
  box-shadow: 3px 3px #4abcd9, -3px -3px #4abcd9;
  width:200px;
  height: 200px;
  z-index: 100;
}
.loader,
.loader:before,
.loader:after {
  background: #4abcd9;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #4abcd9;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  z-index: 100;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
```
Finally, let's get into writing the code for our App.js,
```js
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { useEffect, useState } from 'react';
```
First of all, we import `loadStdlib` from the reach package we installed earlier, this is the export from the reach standard library, next we import the `backend` that was compiled for us when we ran the `reach compile`  command earlier, lastly, we import `useEffect` and `useState` hook

Let's proceed
 right at the top level after your imports, add the code below
 ```js
const reach =  loadStdlib('ALGO');
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');

let interact = {}
let acc ={}
const WINNING_STATES= ["Its a draw", "Player 1 wins","Player 2 wins"];
let stdlib ={}
 ```
 we first initialize the reach standard library and pass in the string `Algo` to indicate that we expect it to run on the Algorand blockchain, next we call `reach.setSignStrategy('AlgoSigner');` to indicate that we want to use Algosigner as our desired web3 provider or for signing our transactions. then we call `reach.setProviderByName('TestNet');` to signify that we will love to connect to the testnet,
 then we define an object `interact` to represent the interactions that our frontend will have with our Backend(Reach program), next we define an `acc` object to represent the account and we define an array `WINNING_STATES` with values that represent the outcomes of the game, don't forget I mentioned earlier that 0 means its a draw and 1 means Player1 wins and 2 means Player2 wins, that's because the outcome in the backend is simply an index in the `WINNING_STATES` array. the `stdlib` variable is later initialized to be the `reach` variable created earlier.

Next, let's create our `App` function, this is the function that will be exported from this file so it will contain the logic for our frontend:
```js
function App() {
  useEffect(async()=>{
    acc = await  reach.getDefaultAccount();
    stdlib = reach;
    const addr = await acc.getAddress();
    const balAtomic = await reach.balanceOf(acc);
    console.log(addr);
  console.log(balAtomic);
    interact = {...stdlib.hasRandom };
    return("Component unmounted");
  },[1])

  ....
}
```
The first thing to notice here is that we call our `useEffect` hook, and we initialize our `acc` variable created earlier to the result from `reach.getDefaultAccount();` as this will trigger the Algosigner plugin to allow the user to select an account, next in the useEffect hook, we simply get the balance of the address and log it to the console, we finally initialize our interact function by passing hasRandom from the reach standard interface.

Let's proceed, note that the next set of code is still supposed to be in the `App` function:
```js
const[mode,setMode]=useState("begin")
const[player,setPlayer]=useState("")
const selectPlayer=async(player)=>{
  setMode("play")
  setPlayer(player)
}
```
we simply initialize our state variables in the code above, `mode` allows the UI to keep track of the changes in the app and display the right screen(Component), `player` signifies the role of the person playing, if it's player1 or player2, then we have a function `selectPlayer` that allows the user select a particular player.

Let's look at the method that deploy's a contract, note that it is the  responsibility of the first player to call this function:

```js
const deployContract=async(data, callBack)=>{
  let{wager} = data;
  interact.play = async()=>{

    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
    });

    console.log(fingersAndPrediction)
    console.log(`Player 1 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player1Fingers:fingersAndPrediction[0],player1Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };
  interact.wager = parseInt(wager);
  console.log(interact);
  // interact.acceptWager=()=>true;
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result :  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result :  ${WINNING_STATES[index]}`);
        }
    };
    const ctc = acc.deploy(backend)
    console.log(ctc,"ctcc");
    let ctcInfoStr = "";
    try{
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
      alert("Click ok to copy contract address : "+ ctcInfoStr);
      navigator.clipboard.writeText(ctcInfoStr);
    }catch(error){
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{});
    try{
     await backend.Player1(ctc,interact)
    }catch(error){
      console.log("An error occurred");
      console.error(error);
      callBack(true);
      alert(error);
    }
  
}
```
This function expects two parameters, one is a metadata called `data` and the other is a callBack that can be used to communicate with the caller of the function the `data` parameter is an object that can contain any of the following properties: `wager`,`prediction` and `amount`, `amount` is the number of fingers, `prediction` is the player's prediction of all fingers and `wager` is the amount the player is willing to bet.

Also notice how we provide the interact functions and properties that our Player1 needs: `play`,`wager`,`displayWinner` then we deploy by calling the `acc.deploy(backend)`  then lastly, we call `backend.Player1(ctc,interact)` to begin communicating with our backend, notice the try and catch statements and how the `callBack` parameter is called with `true` as its first parameter in the catch statement, this is because the callBack parameter's first argument is used to check by the caller if an error occurred, a value of true means an error occurred and a value of false means no error occurred. Also, notice the second argument of the `callBack` function is an object in the `play` property of the interact function, this object contains two properties `playAgain` and  `resolveFingers`, the `playAgain` property is a boolean that indicates if the caller of the deployContract function should play again while the `resolveFingers` is used to hold program execution on that line until the player has played and the fingers and prediction have been returned in the array.


Lastly, let's look at the `connectToContract` function, note that this function will be called by player2:

```js
const connectToContract=async(data,callBack)=>{
  console.log(data);
  let{ctcInfo} =data;
  interact.play = async()=>{
    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 2 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player2Fingers:fingersAndPrediction[0],player2Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };

  interact.acceptWager=(wager)=>{
    console.log(`${wager} accepted`)
    alert("By clicking ok, you accept to a wager of: " +wager);
    return true};
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result:  ${WINNING_STATES[index]}`)
        }
    };
    const ctc = acc.attach(backend,ctcInfo)
    console.log(ctc,"ctcc");

    let ctcInfoStr = {}
    try{ 
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
    }catch(error){
      console.error(error);
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{})
    try{
      await backend.Player2(ctc,interact)
    }catch(error){
        callBack(true);
        alert(error)
        return;
    }
}
```
The function is very similar to our `deployToContract` function just that this time, instead of calling `acc.deploy(backend)`, we call `acc.attach(backend,ctcInfo)`

That's
 all for the technical part of our program, the full code for our App.js file can be found below:
```js
import logo from './logo.svg';
import './App.css';
// import * as reach from '@reach-sh/stdlib/dist/esm/ALGO';
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { useEffect, useState } from 'react';

const reach =  loadStdlib('ALGO')
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');

let interact = {}
 let acc ={}
 const WINNING_STATES= ["Its a draw", "Player 1 wins","Player 2 wins"];
 let stdlib ={}
 function App() {
  useEffect(async()=>{

    acc = await  reach.getDefaultAccount();
    stdlib = reach;
    const addr = await acc.getAddress();
    const balAtomic = await reach.balanceOf(acc);
    console.log(addr);
  console.log(balAtomic);
    interact = {...stdlib.hasRandom };
    return("Component unmounted");
  },[1])

const[mode,setMode]=useState("begin")
const[player,setPlayer]=useState("")
const selectPlayer=async(player)=>{
  setMode("play")
  setPlayer(player)
}

const deployContract=async(data, callBack)=>{
  let{wager} = data;
  interact.play = async()=>{

    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 1 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player1Fingers:fingersAndPrediction[0],player1Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };
  interact.wager = parseInt(wager);
  console.log(interact);
  // interact.acceptWager=()=>true;
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result :  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result :  ${WINNING_STATES[index]}`);
        }
    };
    const ctc = acc.deploy(backend)
    console.log(ctc,"ctcc");
    let ctcInfoStr = "";
    try{
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
      alert("Click ok to copy contract address : "+ ctcInfoStr);
      navigator.clipboard.writeText(ctcInfoStr);
    }catch(error){
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{});
    try{
     await backend.Player1(ctc,interact)
    }catch(error){
      console.log("An error occurred");
      console.error(error);
      callBack(true);
      alert(error);
    }
  
}

const connectToContract=async(data,callBack)=>{
  console.log(data);
  let{ctcInfo} =data;
  interact.play = async()=>{
    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 2 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player2Fingers:fingersAndPrediction[0],player2Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };

  interact.acceptWager=(wager)=>{
    console.log(`${wager} accepted`)
    alert("By clicking ok, you accept to a wager of: " +wager);
    return true};
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result:  ${WINNING_STATES[index]}`)
        }
    };
    const ctc = acc.attach(backend,ctcInfo)
    console.log(ctc,"ctcc");

    let ctcInfoStr = {}
    try{ 
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
    }catch(error){
      console.error(error);
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{})
    try{
      await backend.Player2(ctc,interact)
    }catch(error){
        callBack(true);
        alert(error)
        return;
    }
    

}

let renderValue = ( <div className="childDiv">
   <h2 className="game-title">Morra Game</h2>
<p>Choose Player?</p>
<button className= "playerButton" onClick={()=>{selectPlayer("player1")}}>Player 1</button>
<button className= "playerButton" onClick={()=>{selectPlayer("player2")}}>Player 2</button>
</div>)
  if(mode == "play"){
    if(player=="player1"){
      renderValue= <Player1 deployContract={deployContract} ></Player1>
    }else{
      renderValue= <Player2 connectToContract={connectToContract}  ></Player2>
    }
    }

  if(mode  == "played"){
    renderValue=(<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
    <div className="loader">Waiting for Player 2...</div>
    <p className="wait-p2">Waiting for Player 2</p>
    <h3 className= "inputIdentifier">Player 1 Prediction:</h3>
    <h3 className= "inputIdentifier">Player 2 Prediction:</h3>
    <h3 className= "inputIdentifier">Player 1 Fingers:</h3>
    <h3 className= "inputIdentifier">Player 2 Fingers:</h3>
  </div> )
  }


  return (
    <div className="App centerDiv">
      {renderValue}
    </div>
  );
}


function Player1(props){
  const[amount,setAmount] = useState('');
  const[prediction,setPrediction] =  useState('');
  const[wager,setWager]= useState('');
  const [loading, setLoading] = useState(false);
  const[player1Fingers,setPlayer1Fingers] = useState('');
  const[player2Fingers,setPlayer2Fingers] = useState('');
  const [player2Prediction,setPlayer2Prediction] = useState('');
  const [player1Prediction,setPlayer1Prediction] =  useState('');
 let [resolveFingers,setResolvedFingers] = useState();
 console.log({resolveFingers:resolveFingers})
  //initial,played, playagain
  const[mode,setMode] = useState("initial") 
  let renderValue = (<div></div>);
  if(mode=="initial"){
    renderValue = (<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
  
      {loading?<div className="loader">Waiting for Player 2...</div>:null}
      <p  className= "inputIdentifier">Wager</p>
      <input className= "input" placeholder="Wager" value={wager} type="number" onChange={(event)=>{
         setWager(event.currentTarget.value)
      }}/>
 
      <button className= "playerButton" onClick={()=>{
        setLoading(true)
        props.deployContract({amount,prediction,wager},(error,data)=>{
          
            // setMode("played");
            // setLoading(false)
          
        
          console.log(error);
          if(!error){
            console.log(data);
            if(data.playAgain!=undefined){
              setResolvedFingers(()=>data.resolveFingers);
              setMode("playAgain");
            }else{

            
            setMode("played");
            console.log("was here");
              if(data.player1Fingers!=undefined){
                setPlayer1Fingers(data.player1Fingers);
              }
             if(data.player2Fingers!=undefined){
              setPlayer2Fingers(data.player2Fingers)
             }
             if(data.player1Prediction!=undefined){
               setPlayer1Prediction(data.player1Prediction);
             }
             if(data.player2Prediction!=undefined){
               setPlayer2Prediction(data.player2Prediction);
             }
            
            }
          }
        
        })
    
    }}>Deploy Contract</button>
  </div>);
  }

  if(mode == "played"){
   renderValue=(<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
    <div className="loader">Waiting for Player 2...</div>
    <p className="wait-p2">Waiting for Player 2</p>
    <h3 className= "inputIdentifier">Player 1 Prediction: {player1Prediction}</h3>
    {/* <h3 className= "inputIdentifier">Player 2 Prediction: {player2Prediction}</h3> */}
    <h3 className= "inputIdentifier">Player 1 Fingers: {player1Fingers}</h3>
    {/* <h3 className= "inputIdentifier">Player 2 Fingers: {player2Fingers}</h3> */}
  </div> )
  }
  if(mode == "playAgain"){
    renderValue=(<div className="childDiv">
                      <p  className= "inputIdentifier">Prediction</p>
                    <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
                        setPrediction(event.currentTarget.value)
                    }}/>
                
                    <p  className= "inputIdentifier"> Fingers</p>
                    <input className= "input" placeholder="Amount" type="number" value={amount} onChange={(event)=>{
                        setAmount(event.currentTarget.value)
                    }}/>

            <button className= "playerButton" onClick={()=>{
            resolveFingers([parseInt(amount),parseInt(prediction)])
            }}>Play Again</button>
             </div>)
  }
  return( <div className="childDiv">
      {renderValue}
  </div>)
}

function Player2(props){
      const [mode,setMode] = useState("connect");
      const[amount,setAmount] = useState('');
      const[prediction,setPrediction] =  useState('');
      const[wager,setWager]= useState('');
      let [resolveFingers,setResolvedFingers] = useState();
      const[address,setAddress] = useState('');
      const[player2Fingers,setPlayer2Fingers] = useState('');
      const [loading, setLoading] = useState(false);
      const [player2Prediction,setPlayer2Prediction] = useState('');
      let whatToRender = (<div  className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      {loading?<div className="loader">Waiting for Player 2...</div>:null}
      <p  className= "inputIdentifier">Enter the contract address you would love to connect to </p>
      <input  className= "input" placeholder="Enter Contract Address" value={address} onChange={(event)=>{
          setAddress(event.currentTarget.value);
      }}/>
      <button className= "playerButton" onClick={()=>{
        // props.connectToContract()
        setLoading(true)
        props.connectToContract({ctcInfo:JSON.parse(address)},(error,data)=>{
          console.log(error);
          if(!error){
            console.log(data);
            if(data.playAgain!=undefined){
              setResolvedFingers(()=>data.resolveFingers);
              setMode("playAgain");
            }else{
            setMode("connected");
            console.log("was here");
             if(data.player2Fingers!=undefined){
              setPlayer2Fingers(data.player2Fingers)
             }
             if(data.player2Prediction!=undefined){
               setPlayer2Prediction(data.player2Prediction);
             }
            
            }
          }

        })
         
        }}>Proceed</button>  
    </div>)
    if(mode == "connected"){
      whatToRender = (<div className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      <div className="loader">Waiting for Player 1...</div>
      <p className="wait-p2">Waiting for Player 1</p>
  
      <h3 className= "inputIdentifier">Player 2 Prediction: {player2Prediction}</h3>
   
      <h3 className= "inputIdentifier">Player 2 Fingers: {player2Fingers}</h3>
    </div> )
    }

    if(mode == "playAgain"){
      whatToRender=(<div className="childDiv">
                        <p  className= "inputIdentifier">Prediction</p>
                      <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
                          setPrediction(event.currentTarget.value)
                      }}/>
                  
                      <p  className= "inputIdentifier"> Fingers</p>
                      <input className= "input" placeholder="Amount" type="number" value={amount} onChange={(event)=>{
                          setAmount(event.currentTarget.value)
                      }}/>
  
              <button className= "playerButton" onClick={()=>{
              resolveFingers([parseInt(amount),parseInt(prediction)])
              }}>Play Again</button>
               </div>)
    }



  return  (whatToRender)

}

export default App;

```
now, you can run `npm start` to run and test the code written so far.

# Conclusion
Thank you for following through with this workshop, i hope you were able to understand a thing or two about Reach better for any question or any clarification you can always send me a message on discord(jesulonimi#6311) or you can post the problem in the help channel of the Reach discord server and tag me(@jesulonimi)
Thanks

