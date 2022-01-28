/*
UNIQUE NUMBERS GAME
*/


import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const NUM_OF_PLAYERS = 2;
const PREDEFINED_SET_LENGTH = 5;

(async () => {
  const isHouse = await ask(
    `Are you House?`,
    yesno
  );
  const who = isHouse ? 'House' : 'Player';

  console.log(`Starting Unique Numbers Game! as ${who}`);

  let acc = null;
  const createAcc = await ask(
    `Would you like to create an account? (only possible on devnet)`,
    yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  if (isHouse) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });
  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
  }

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const before = await getBalance();
  console.log(`Your balance is ${before}`);

  const interact = { ...stdlib.hasRandom };

  interact.informTimeout = () => {
    console.log(`There was a timeout.`);
    process.exit(1);
  };

  if (isHouse) {
    const wager = 50;
    interact.wager = stdlib.parseCurrency(wager);
    console.log(`The wager amount is: ${wager}`)
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];

    interact.playingSet = () => {
      var randomArray = (length, max) => {
        const arr = [];
        if (length == 0 || max == 0) {
          console.log(null)
        }
        let randomnumbers = new Set, ans;
        while (randomnumbers.size < length) {
          randomnumbers.add(Math.floor(
            Math.random() * max) + 1);
        }
        ans = [...randomnumbers];
        return ans
      }

      var playingSet = randomArray(PREDEFINED_SET_LENGTH, 100);
      console.log(playingSet);
      return playingSet;
    };


  } else {
    interact.acceptWager = async (amt) => {
      const accepted = await ask(
        `Do you accept the wager of ${fmt(amt)}?`,
        yesno
      );
      if (!accepted) {
        process.exit(0);
      }
    };
  }


  // Game Logic Starts here
  let playedDeck = [];
  var winnersTotal = 0;

  if (!isHouse) {

    const selectedNumber = await ask(
      `What unique number did you select?`,
      (x => x)
    );

    const plyOnHand = {
      addr: acc.getAddress(),
      selected: selectedNumber,
      played: true,
    };

    interact.uniqueSelected = () => {
      return plyOnHand;
    }
  } else {
    interact.recordCurrentPlayer = (d) => {
      var alreadyPlayed = false;
      if (playedDeck.length > 0) {
        for (let i = 0; i < playedDeck.length; i++) {
          if (playedDeck[i].addr == d.addr) {
            alreadyPlayed = true;
            break;
          } else {
            alreadyPlayed = false;
          }
        }
      }
      let adv = false;
      if (!alreadyPlayed) {
        playedDeck.push(d);
        adv = true;
      } else {
        adv = false;
      }
      return adv;
    }
  }
  
  interact.winnersList = () => {
    var arr = playedDeck;
    var uniq = [];
    for (var i = 0; i < playedDeck.length; i++) {
      for (var j = 0; j < playedDeck.length; j++) {
        if (arr[i].selected == arr[j].selected && i != j) break;
        else if (j == arr.length - 1) uniq.push(arr[i])
      }
    }

    // Display Winners
    for(var i = 0; i < uniq.length; i++) {
      console.log(`${uniq[i].addr} won by playing: ${uniq[i].selected}`);
    }

    winnersTotal = uniq.length;
    var finalUnique = [];
    if (uniq.length <= NUM_OF_PLAYERS) {
      for (var i = 0; i < NUM_OF_PLAYERS; i++) {
        if (i < uniq.length) {
          finalUnique.push(
            {
              addr: uniq[i].addr,
              selected: uniq[i].selected,
              played: uniq[i].played,
              numOfWinners: uniq.length
            }
          );
        }
        else {
          finalUnique.push(
            {
              addr: acc.getAddress(),
              selected: 0,
              played: true,
              numOfWinners: uniq.length
            }
          );
        }
      }
    } 
    return finalUnique;
  };  

  const part = isHouse ? ctc.p.House : ctc.p.Player;
  await part(interact);

  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();
})();