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