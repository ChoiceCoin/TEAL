// Automatically generated with Reach 0.1.7 (1bd49d90)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (1bd49d90)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1],
      9: [ctc0, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function House(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for House expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for House expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    addr: ctc2,
    played: ctc3,
    selected: ctc0
    });
  const ctc5 = stdlib.T_Object({
    addr: ctc2,
    numOfWinners: ctc0,
    played: ctc3,
    selected: ctc0
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Null;
  
  
  const v170 = stdlib.protect(ctc0, interact.deadline, 'for House\'s interact field deadline');
  const v171 = stdlib.protect(ctc0, interact.wager, 'for House\'s interact field wager');
  
  const v174 = stdlib.protect(ctc1, await interact.playingSet(), {
    at: './index.rsh:56:54:application',
    fs: ['at ./index.rsh:54:13:application call to [unknown function] (defined at: ./index.rsh:54:17:function exp)'],
    msg: 'playingSet',
    who: 'House'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v171, v174, v170],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v176, v177, v178], secs: v180, time: v179, didSend: v28, from: v175 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v183 = stdlib.add(v179, v178);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v176, v177, v178], secs: v180, time: v179, didSend: v28, from: v175 } = txn1;
  ;
  const v183 = stdlib.add(v179, v178);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v183],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v175, v176, v183],
      evt_cnt: 0,
      funcNum: 2,
      lct: v179,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v302, time: v301, didSend: v146, from: v300 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v304 = stdlib.addressEq(v175, v300);
        stdlib.assert(v304, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:66:66:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'House'
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v302, time: v301, didSend: v146, from: v300 } = txn3;
    ;
    const v304 = stdlib.addressEq(v175, v300);
    stdlib.assert(v304, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:66:66:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'House'
      });
    stdlib.protect(ctc7, await interact.informTimeout(), {
      at: './index.rsh:50:29:application',
      fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:30:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:66:66:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'House'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v189, time: v188, didSend: v37, from: v187 } = txn2;
    ;
    let v192 = stdlib.checkedBigNumberify('./index.rsh:68:11:decimal', stdlib.UInt_max, 0);
    let v193 = v188;
    let v199 = v176;
    
    while (await (async () => {
      const v202 = stdlib.lt(v192, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
      
      return v202;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc4],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn3;
      ;
      const v213 = stdlib.protect(ctc3, await interact.recordCurrentPlayer(v207), {
        at: './index.rsh:80:62:application',
        fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
        msg: 'recordCurrentPlayer',
        who: 'House'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v175, v192, v199, v213],
        evt_cnt: 1,
        funcNum: 6,
        lct: v208,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v215], secs: v217, time: v216, didSend: v64, from: v214 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v219 = stdlib.addressEq(v175, v214);
          stdlib.assert(v219, {
            at: './index.rsh:83:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'House'
            });
          if (v215) {
            const v220 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, 1));
            const cv192 = v220;
            const cv193 = v216;
            const cv199 = v199;
            
            await (async () => {
              const v192 = cv192;
              const v193 = cv193;
              const v199 = cv199;
              
              if (await (async () => {
                const v202 = stdlib.lt(v192, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
                
                return v202;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}
          else {
            const cv192 = v192;
            const cv193 = v216;
            const cv199 = v199;
            
            await (async () => {
              const v192 = cv192;
              const v193 = cv193;
              const v199 = cv199;
              
              if (await (async () => {
                const v202 = stdlib.lt(v192, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
                
                return v202;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v215], secs: v217, time: v216, didSend: v64, from: v214 } = txn4;
      ;
      const v219 = stdlib.addressEq(v175, v214);
      stdlib.assert(v219, {
        at: './index.rsh:83:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'House'
        });
      if (v215) {
        const v220 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, 1));
        const cv192 = v220;
        const cv193 = v216;
        const cv199 = v199;
        
        v192 = cv192;
        v193 = cv193;
        v199 = cv199;
        
        continue;}
      else {
        const cv192 = v192;
        const cv193 = v216;
        const cv199 = v199;
        
        v192 = cv192;
        v193 = cv193;
        v199 = cv199;
        
        continue;}
      
      
      
      }
    const v223 = stdlib.protect(ctc6, await interact.winnersList(), {
      at: './index.rsh:97:56:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:28:function exp)'],
      msg: 'winnersList',
      who: 'House'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v175, v199, v223],
      evt_cnt: 1,
      funcNum: 4,
      lct: v193,
      onlyIf: true,
      out_tys: [ctc6],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v228], secs: v230, time: v229, didSend: v79, from: v227 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v233 = stdlib.div(v199, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
        const v234 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
        const v235 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
        const v236 = v234.addr;
        const v238 = v235.addr;
        const v239 = stdlib.addressEq(v236, v238);
        if (v239) {
          const v277 = stdlib.addressEq(v238, v238);
          if (v277) {
            sim_r.txns.push({
              amt: v199,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            const v283 = stdlib.sub(v199, v233);
            sim_r.txns.push({
              amt: v233,
              kind: 'from',
              to: v238,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v283,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        else {
          const v245 = stdlib.sub(v199, v233);
          sim_r.txns.push({
            amt: v233,
            kind: 'from',
            to: v236,
            tok: undefined
            });
          const v250 = stdlib.addressEq(v238, v238);
          if (v250) {
            sim_r.txns.push({
              amt: v245,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            const v256 = stdlib.sub(v245, v233);
            sim_r.txns.push({
              amt: v233,
              kind: 'from',
              to: v238,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v256,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc6],
      waitIfNotPresent: false
      }));
    const {data: [v228], secs: v230, time: v229, didSend: v79, from: v227 } = txn3;
    ;
    const v233 = stdlib.div(v199, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
    const v234 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
    const v235 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
    const v236 = v234.addr;
    const v238 = v235.addr;
    const v239 = stdlib.addressEq(v236, v238);
    if (v239) {
      const v277 = stdlib.addressEq(v238, v238);
      if (v277) {
        ;
        return;
        }
      else {
        const v283 = stdlib.sub(v199, v233);
        ;
        ;
        return;
        }}
    else {
      const v245 = stdlib.sub(v199, v233);
      ;
      const v250 = stdlib.addressEq(v238, v238);
      if (v250) {
        ;
        return;
        }
      else {
        const v256 = stdlib.sub(v245, v233);
        ;
        ;
        return;
        }}
    
    }
  
  
  
  };
export async function Player(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    addr: ctc3,
    played: ctc4,
    selected: ctc0
    });
  const ctc6 = stdlib.T_Object({
    addr: ctc3,
    numOfWinners: ctc0,
    played: ctc4,
    selected: ctc0
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v176, v177, v178], secs: v180, time: v179, didSend: v28, from: v175 } = txn1;
  ;
  const v183 = stdlib.add(v179, v178);
  stdlib.protect(ctc2, await interact.acceptWager(v176), {
    at: './index.rsh:64:25:application',
    fs: ['at ./index.rsh:63:14:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
    msg: 'acceptWager',
    who: 'Player'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v175, v176, v183],
    evt_cnt: 0,
    funcNum: 1,
    lct: v179,
    onlyIf: true,
    out_tys: [],
    pay: [v176, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v189, time: v188, didSend: v37, from: v187 } = txn2;
      
      sim_r.txns.push({
        amt: v176,
        kind: 'to',
        tok: undefined
        });
      const v192 = stdlib.checkedBigNumberify('./index.rsh:68:11:decimal', stdlib.UInt_max, 0);
      const v193 = v188;
      const v199 = v176;
      
      if (await (async () => {
        const v202 = stdlib.lt(v192, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
        
        return v202;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: ['time', v183],
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v302, time: v301, didSend: v146, from: v300 } = txn3;
    ;
    const v304 = stdlib.addressEq(v175, v300);
    stdlib.assert(v304, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:66:66:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Player'
      });
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:50:29:application',
      fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:30:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:66:66:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v189, time: v188, didSend: v37, from: v187 } = txn2;
    ;
    let v192 = stdlib.checkedBigNumberify('./index.rsh:68:11:decimal', stdlib.UInt_max, 0);
    let v193 = v188;
    let v199 = v176;
    
    while (await (async () => {
      const v202 = stdlib.lt(v192, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
      
      return v202;})()) {
      const v205 = stdlib.protect(ctc5, await interact.uniqueSelected(), {
        at: './index.rsh:74:64:application',
        fs: ['at ./index.rsh:73:16:application call to [unknown function] (defined at: ./index.rsh:73:20:function exp)'],
        msg: 'uniqueSelected',
        who: 'Player'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v175, v192, v199, v205],
        evt_cnt: 1,
        funcNum: 5,
        lct: v193,
        onlyIf: true,
        out_tys: [ctc5],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc3, ctc0, ctc0, ctc5],
        waitIfNotPresent: false
        }));
      const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn3;
      ;
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc4],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v215], secs: v217, time: v216, didSend: v64, from: v214 } = txn4;
      ;
      const v219 = stdlib.addressEq(v175, v214);
      stdlib.assert(v219, {
        at: './index.rsh:83:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
        });
      if (v215) {
        const v220 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, 1));
        const cv192 = v220;
        const cv193 = v216;
        const cv199 = v199;
        
        v192 = cv192;
        v193 = cv193;
        v199 = cv199;
        
        continue;}
      else {
        const cv192 = v192;
        const cv193 = v216;
        const cv199 = v199;
        
        v192 = cv192;
        v193 = cv193;
        v199 = cv199;
        
        continue;}
      
      
      
      }
    const v226 = stdlib.protect(ctc7, await interact.winnersList(), {
      at: './index.rsh:97:56:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:28:function exp)'],
      msg: 'winnersList',
      who: 'Player'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v175, v199, v226],
      evt_cnt: 1,
      funcNum: 4,
      lct: v193,
      onlyIf: true,
      out_tys: [ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v228], secs: v230, time: v229, didSend: v79, from: v227 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v233 = stdlib.div(v199, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
        const v234 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
        const v235 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
        const v236 = v234.addr;
        const v238 = v235.addr;
        const v239 = stdlib.addressEq(v236, v238);
        if (v239) {
          const v277 = stdlib.addressEq(v238, v238);
          if (v277) {
            sim_r.txns.push({
              amt: v199,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            const v283 = stdlib.sub(v199, v233);
            sim_r.txns.push({
              amt: v233,
              kind: 'from',
              to: v238,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v283,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        else {
          const v245 = stdlib.sub(v199, v233);
          sim_r.txns.push({
            amt: v233,
            kind: 'from',
            to: v236,
            tok: undefined
            });
          const v250 = stdlib.addressEq(v238, v238);
          if (v250) {
            sim_r.txns.push({
              amt: v245,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          else {
            const v256 = stdlib.sub(v245, v233);
            sim_r.txns.push({
              amt: v233,
              kind: 'from',
              to: v238,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v256,
              kind: 'from',
              to: v175,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc0, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [v228], secs: v230, time: v229, didSend: v79, from: v227 } = txn3;
    ;
    const v233 = stdlib.div(v199, stdlib.checkedBigNumberify('./index.rsh:10:24:decimal', stdlib.UInt_max, 2));
    const v234 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
    const v235 = v228[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
    const v236 = v234.addr;
    const v238 = v235.addr;
    const v239 = stdlib.addressEq(v236, v238);
    if (v239) {
      const v277 = stdlib.addressEq(v238, v238);
      if (v277) {
        ;
        return;
        }
      else {
        const v283 = stdlib.sub(v199, v233);
        ;
        ;
        return;
        }}
    else {
      const v245 = stdlib.sub(v199, v233);
      ;
      const v250 = stdlib.addressEq(v238, v238);
      if (v250) {
        ;
        return;
        }
      else {
        const v256 = stdlib.sub(v245, v233);
        ;
        ;
        return;
        }}
    
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 56
==
assert
dup
int 0
extract_uint64
store 255
dup
extract 8 40
store 254
dup
int 48
extract_uint64
store 253
pop
// "CheckPay"
// "./index.rsh:60:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:60:9:dot"
// "[]"
global Round
load 253
+
store 252
txn Sender
load 255
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l2_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:66:10:dot"
// "[]"
load 254
dup
bz l3_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l3_checkTxnK:
pop
load 255
int 8
bzero
global Round
itob
concat
load 254
itob
concat
b loopBody3
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l4_afterHandler2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:66:66:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:66:66:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l5_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4_afterHandler2:
l6_afterHandler3:
// Handler 4
dup
int 4
==
bz l7_afterHandler4
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 98
==
assert
dup
store 253
pop
// "CheckPay"
// "./index.rsh:100:11:dot"
// "[]"
load 254
int 2
/
store 252
load 253
extract 0 49
extract 0 32
store 251
load 253
extract 49 49
extract 0 32
store 250
load 251
load 250
==
bz l8_ifF
load 250
dup
==
bz l9_ifF
load 254
dup
bz l10_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l10_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l11_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l9_ifF:
load 252
dup
bz l12_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 250
itxn_field Receiver
itxn_submit
int 0
l12_makeTxnK:
pop
load 254
load 252
-
dup
bz l13_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l13_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l14_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8_ifF:
load 254
load 252
-
store 249
load 252
dup
bz l15_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 251
itxn_field Receiver
itxn_submit
int 0
l15_makeTxnK:
pop
load 250
dup
==
bz l16_ifF
load 249
dup
bz l17_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l17_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l18_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l16_ifF:
load 252
dup
bz l19_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 250
itxn_field Receiver
itxn_submit
int 0
l19_makeTxnK:
pop
load 249
load 252
-
dup
bz l20_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l20_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l21_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l7_afterHandler4:
// Handler 5
dup
int 5
==
bz l22_afterHandler5
pop
// check step
int 9
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 41
==
assert
dup
store 252
pop
// "CheckPay"
// "./index.rsh:77:12:dot"
// "[]"
load 255
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l22_afterHandler5:
// Handler 6
dup
int 6
==
bz l23_afterHandler6
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:83:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:83:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 252
bz l24_ifF
load 255
load 254
int 1
+
itob
global Round
itob
concat
load 253
itob
concat
b loopBody3
l24_ifF:
load 255
load 254
itob
global Round
itob
concat
load 253
itob
concat
b loopBody3
l23_afterHandler6:
int 0
assert
loopBody3:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
pop
dup
store 252
pop
load 255
int 2
<
bz l25_ifF
load 252
load 255
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 9
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l25_ifF:
load 252
load 253
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v177",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v177",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_numOfWinners",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11[2]",
                "name": "v228",
                "type": "tuple[2]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T15",
                "name": "v207",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v215",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_numOfWinners",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11[2]",
                "name": "v228",
                "type": "tuple[2]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T15",
                "name": "v207",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v215",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620015d8380380620015d8833981016040819052620000269162000272565b60008080554360035560408051602081018252918252517fcf0126561efc1f24b305028ded80b0ba9e1383f9f7e0730d97456eecb84f90ce906200006c90849062000323565b60405180910390a1620000823415600762000117565b6020820151604001516200009790436200037b565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200010d92919062000141565b50505050620003df565b816200013d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014f90620003a2565b90600052602060002090601f016020900481019282620001735760008555620001be565b82601f106200018e57805160ff1916838001178555620001be565b82800160010185558215620001be579182015b82811115620001be578251825591602001919060010190620001a1565b50620001cc929150620001d0565b5090565b5b80821115620001cc5760008155600101620001d1565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620002225762000222620001e7565b60405290565b604051606081016001600160401b0381118282101715620002225762000222620001e7565b60405160a081016001600160401b0381118282101715620002225762000222620001e7565b60008183036101008112156200028757600080fd5b62000291620001fd565b83518152602060e0601f1984011215620002aa57600080fd5b620002b462000228565b925080850151835285605f860112620002cc57600080fd5b620002d66200024d565b8060e0870188811115620002e957600080fd5b604088015b81811015620003075780518452928401928401620002ee565b5085840191909152516040850152508101919091529392505050565b60006101008201905082518252602080840151805182850152818101516040850160005b6005811015620003665782518252918401919084019060010162000347565b505050604081015160e0850152505092915050565b600082198211156200039d57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003b757607f821691505b60208210811415620003d957634e487b7160e01b600052602260045260246000fd5b50919050565b6111e980620003ef6000396000f3fe6080604052600436106100795760003560e01c80636da017a01161004b5780636da017a0146100df5780637eea518c146100f25780638323075714610105578063ab53f2c61461011a57005b80631e93b0f1146100825780632c10a159146100a65780635d088fba146100b957806364bb43fa146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610e3d565b61013d565b6100806100c7366004610e60565b6102a8565b6100806100da366004610e72565b610459565b6100806100ed366004610e3d565b610838565b610080610100366004610e3d565b610a0d565b34801561011157600080fd5b50600154610093565b34801561012657600080fd5b5061012f610b5f565b60405161009d929190610e85565b61014d6001600054146009610bfc565b6101678135158061016057506001548235145b600a610bfc565b60008080556002805461017990610ee2565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610ee2565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610fa1565b905061021d81604001514310600b610bfc565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161024c9190610fd2565b60405180910390a1610265816020015134146008610bfc565b61026d610d23565b815181516001600160a01b039091169052602080820180516000905280514390830152908301519051604001526102a381610c21565b505050565b6102b86009600054146015610bfc565b6102d2813515806102cb57506001548235145b6016610bfc565b6000808055600280546102e490610ee2565b80601f016020809104026020016040519081016040528092919081815260200182805461031090610ee2565b801561035d5780601f106103325761010080835404028352916020019161035d565b820191906000526020600020905b81548152906001019060200180831161034057829003601f168201915b50505050508060200190518101906103759190610fa1565b90507f26a2bb43880dd73bf1f46fa8925bee311b9c95b5f44cedd16d9b38d019141a96826040516103a69190610ff3565b60405180910390a16103ba34156014610bfc565b6103e7604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0316808252602080840151818401908152604080860151818601908152600a600055436001558151938401949094529051908201529051606082015260800160405160208183030381529060405260029080519060200190610453929190610d56565b50505050565b6104696004600054146012610bfc565b6104838135158061047c57506001548235145b6013610bfc565b60008080556002805461049590610ee2565b80601f01602080910402602001604051908101604052809291908181526020018280546104c190610ee2565b801561050e5780601f106104e35761010080835404028352916020019161050e565b820191906000526020600020905b8154815290600101906020018083116104f157829003601f168201915b5050505050806020019051810190610526919061103a565b9050610545604051806040016040528060008152602001600081525090565b7f53762564f9809cf54f2173ceafdd36c7451beb6d49a1192f9090f404a1dea81b8360405161057491906110a0565b60405180910390a161058834156011610bfc565b60028260200151610599919061112a565b81526105ab60c0840160a0850161114c565b6001600160a01b03166105c4604085016020860161114c565b6001600160a01b031614156106f3576105e360c0840160a0850161114c565b6001600160a01b03166105fc60c0850160a0860161114c565b6001600160a01b0316141561065f57815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610648573d6000803e3d6000fd5b50600080805560018190556102a390600290610dda565b61066f60c0840160a0850161114c565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156106a8573d6000803e3d6000fd5b508151815160208401516001600160a01b03909216916108fc916106cb91611169565b6040518115909202916000818181858888f19350505050158015610648573d6000803e3d6000fd5b805160208301516107049190611169565b60208281019190915261071d906040850190850161114c565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610756573d6000803e3d6000fd5b5061076760c0840160a0850161114c565b6001600160a01b031661078060c0850160a0860161114c565b6001600160a01b031614156107cc57815160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610648573d6000803e3d6000fd5b6107dc60c0840160a0850161114c565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610815573d6000803e3d6000fd5b508151815160208301516001600160a01b03909216916108fc916106cb91611169565b610848600a600054146019610bfc565b6108628135158061085b57506001548235145b601a610bfc565b60008080556002805461087490610ee2565b80601f01602080910402602001604051908101604052809291908181526020018280546108a090610ee2565b80156108ed5780601f106108c2576101008083540402835291602001916108ed565b820191906000526020600020905b8154815290600101906020018083116108d057829003601f168201915b50505050508060200190518101906109059190610fa1565b90507fe871aff60d2df70745504a8c70ebaf6e9606dbecdb3a35410d44609cab9890ad826040516109369190610fd2565b60405180910390a161094a34156017610bfc565b8051610962906001600160a01b031633146018610bfc565b6109726040830160208401611180565b156109c55761097f610d23565b815181516001600160a01b03909116905260208201516109a19060019061119b565b6020808301805192909252815143910152604080840151915101526102a381610c21565b6109cd610d23565b815181516001600160a01b039091169052602080830151818301805191909152805143920191909152604080840151915101526102a381610c21565b5050565b610a1d600160005414600e610bfc565b610a3781351580610a3057506001548235145b600f610bfc565b600080805560028054610a4990610ee2565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7590610ee2565b8015610ac25780601f10610a9757610100808354040283529160200191610ac2565b820191906000526020600020905b815481529060010190602001808311610aa557829003601f168201915b5050505050806020019051810190610ada9190610fa1565b9050610aee81604001514310156010610bfc565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610b1d9190610fd2565b60405180910390a1610b313415600c610bfc565b8051610b49906001600160a01b03163314600d610bfc565b60008080556001819055610a0990600290610dda565b600060606000546002808054610b7490610ee2565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba090610ee2565b8015610bed5780601f10610bc257610100808354040283529160200191610bed565b820191906000526020600020905b815481529060010190602001808311610bd057829003601f168201915b50505050509050915091509091565b81610a095760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515160021115610cce57610c5c604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b031680825260208084018051518285019081529051604090810151818601908152600960005543600155815193840194909452905190820152905160608201526080015b604051602081830303815290604052600290805190602001906102a3929190610d56565b604080518082018252600080825260208083018281528551516001600160a01b031680855286830151860151825260049093554360015584519182019290925290519281019290925290606001610caa565b50565b60408051606080820183526000828401818152835283519182018452808252602082810182905293820152909182015290565b828054610d6290610ee2565b90600052602060002090601f016020900481019282610d845760008555610dca565b82601f10610d9d57805160ff1916838001178555610dca565b82800160010185558215610dca579182015b82811115610dca578251825591602001919060010190610daf565b50610dd6929150610e10565b5090565b508054610de690610ee2565b6000825580601f10610df6575050565b601f016020900490600052602060002090810190610d2091905b5b80821115610dd65760008155600101610e11565b600060408284031215610e3757600080fd5b50919050565b600060408284031215610e4f57600080fd5b610e598383610e25565b9392505050565b600060808284031215610e3757600080fd5b60006101208284031215610e3757600080fd5b82815260006020604081840152835180604085015260005b81811015610eb957858101830151858201606001528201610e9d565b81811115610ecb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ef657607f821691505b60208210811415610e3757634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610d2057600080fd5b600060608284031215610f3e57600080fd5b6040516060810181811067ffffffffffffffff82111715610f6f57634e487b7160e01b600052604160045260246000fd5b80604052508091508251610f8281610f17565b8082525060208301516020820152604083015160408201525092915050565b600060608284031215610fb357600080fd5b610e598383610f2c565b80358015158114610fcd57600080fd5b919050565b8135815260408101610fe660208401610fbd565b1515602083015292915050565b8135815260808101602083013561100981610f17565b6001600160a01b0316602083015261102360408401610fbd565b151560408301526060830135606083015292915050565b60006040828403121561104c57600080fd5b6040516040810181811067ffffffffffffffff8211171561107d57634e487b7160e01b600052604160045260246000fd5b604052825161108b81610f17565b81526020928301519281019290925250919050565b813581526101208101602080830181850160005b600281101561110a5781356110c881610f17565b6001600160a01b03168352818401358484015260406110e8818401610fbd565b15159084015260608281013590840152608092830192909101906001016110b4565b5050505092915050565b634e487b7160e01b600052601160045260246000fd5b60008261114757634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561115e57600080fd5b8135610e5981610f17565b60008282101561117b5761117b611114565b500390565b60006020828403121561119257600080fd5b610e5982610fbd565b600082198211156111ae576111ae611114565b50019056fea26469706673582212207d9576f059486c27ccd40165c4cab49baf4953792274e1ff65e5021588db635664736f6c63430008090033`,
  BytecodeLen: 5592,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "House": House,
  "Player": Player
  };
export const _APIs = {
  };
