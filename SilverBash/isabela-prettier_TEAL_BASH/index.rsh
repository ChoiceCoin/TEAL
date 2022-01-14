"reach 0.1";

/*
UNIQUE NUMBERS GAME
Backend File Created by Godfre Laswai(gelaswai@gmail.com) for 
the Umoja Decentralized Bounty Hack(https://events.reach.sh/decentralized-umoja)

*/

const NUM_OF_PLAYERS = 2;
const PREDEFINED_SET_LENGTH = 5;

const CommonInterface = {
  informTimeout: Fun([], Null),
  uniqueSelected: Fun(
    [],
    Object({ addr: Address, selected: UInt, played: Bool })
  ),
  log: Fun(true, Null),
  winnersList: Fun(
    [],
    Array(
      Object({
        addr: Address,
        selected: UInt,
        played: Bool,
        numOfWinners: UInt,
      }),
      NUM_OF_PLAYERS
    )
  ),
};

export const main = Reach.App(() => {
  const House = Participant("House", {
    ...CommonInterface,
    wager: UInt,
    deadline: UInt,
    playingSet: Fun([], Array(UInt, PREDEFINED_SET_LENGTH)),
    recordCurrentPlayer: Fun(true, Bool)
  });
  const Player = ParticipantClass("Player", {
    ...CommonInterface,
    acceptWager: Fun([UInt], Null),
  });
  deploy();

  const informTimeout = () => {
    each([House, Player], () => {
      interact.informTimeout();
    });
  };

  House.only(() => {
    const wager = declassify(interact.wager);
    const playingSet = declassify(interact.playingSet());
    const deadline = declassify(interact.deadline);
  });

  House.publish(wager, playingSet, deadline);
  commit();

  Player.only(() => {
    interact.acceptWager(wager);
  });
  Player.pay(wager).timeout(relativeTime(deadline), () => closeTo(House, informTimeout));;

  var i = 0;
  invariant(balance() == wager);
  while (i < NUM_OF_PLAYERS) {
    commit();

    Player.only(() => {
      const uniqueSelected = declassify(interact.uniqueSelected());
    });
    
    Player.publish(uniqueSelected);

    House.only(() => {
      const advance = declassify(interact.recordCurrentPlayer(uniqueSelected));
    });
    commit();
    House.publish(advance);

    if (advance) {
      i = i + 1;
      continue;
    } else {
      i = i;
      continue;
    }
  }

  commit();

  each([House, Player], () => {
    const winnersList = declassify(interact.winnersList());
  });

  Anybody.publish(winnersList);

  const reward = balance() / NUM_OF_PLAYERS;

  winnersList.forEach(winner => {
    if (winner.addr != winnersList[NUM_OF_PLAYERS - 1].addr) {
      transfer(reward).to(winner.addr);
    }
  });

  transfer(balance()).to(House);

  commit();

  exit();
});
