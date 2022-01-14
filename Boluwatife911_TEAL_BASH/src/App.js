import logo from './logo.svg';
import './App.css';
// import * as reach from '@reach-sh/stdlib/dist/esm/ALGO';
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
const reach =  loadStdlib('ALGO')
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');

let turns = 0;
// EHRODOBUE7R5SRM57CVMP77DQJOK6SDZSUV5FMTFIEW57JCGN2N6OL5I3M

// 4OH4VAKCGNLFNR2B7HLVKGQJDJAJQFIAGE4NY5KBNGVN4GM5A2O6H66HPY
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
const[resolveHand,setResolveHand] = useState("");
const[fingersPrediction,setFingersPrediction]= useState([]);
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
    // console.log(`Player 2 played ${amount} with prediction ${prediction}`)
    //     return [parseInt(amount),parseInt(prediction)];
    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 2 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player2Fingers:fingersAndPrediction[0],player2Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };
  // interact.wager = wager;
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
      renderValue= <Player1 deployContract={deployContract} resolveHand={resolveHand}></Player1>
    }else{
      renderValue= <Player2 connectToContract={connectToContract}  setFingersPrediction={setFingersPrediction}></Player2>
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
