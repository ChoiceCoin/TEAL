// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
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

export async function Player1(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:27:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [v18, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:27:7:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:27:7:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;
    
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:29:13:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:29:13:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:29:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v35 = txn2.time;
  const v32 = txn2.from;
  ;
  let v36 = stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, 0);
  let v135 = v35;
  
  while ((() => {
    const v43 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:38:23:decimal', stdlib.UInt_max, 0));
    
    return v43;})()) {
    const v48 = stdlib.protect(ctc1, await interact.play(), {
      at: './index.rsh:41:58:application',
      fs: ['at ./index.rsh:40:15:application call to [unknown function] (defined at: ./index.rsh:40:18:function exp)'],
      msg: 'play',
      who: 'Player1'
      });
    const v49 = v48[stdlib.checkedBigNumberify('./index.rsh:41:19:array', stdlib.UInt_max, 0)];
    const v50 = v48[stdlib.checkedBigNumberify('./index.rsh:41:19:array', stdlib.UInt_max, 1)];
    const v52 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:60:31:application',
      fs: ['at ./index.rsh:42:64:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:40:15:application call to [unknown function] (defined at: ./index.rsh:40:18:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v53 = stdlib.digest(ctc2, [v52, v49]);
    const v56 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:60:31:application',
      fs: ['at ./index.rsh:43:72:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:40:15:application call to [unknown function] (defined at: ./index.rsh:40:18:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v57 = stdlib.digest(ctc2, [v56, v50]);
    
    const txn3 = await (ctc.sendrecv(5, 2, stdlib.checkedBigNumberify('./index.rsh:48:11:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc5, ctc0, ctc3, ctc3], [v23, v24, v32, v135, v53, v57], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3, ctc3], true, true, false, (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:48:11:dot', stdlib.UInt_max, 3), v23, v24, v32, v135]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:48:11:dot', stdlib.UInt_max, 3), v23, v24, v32]);
      const [v60, v61] = txn3.data;
      const v64 = txn3.time;
      const v59 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v63 = stdlib.addressEq(v23, v59);
      stdlib.assert(v63, {
        at: './index.rsh:48:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player1'
        });
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 5), v23, v24, v32, v60, v61, v64]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 5), v23, v24, v32, v60, v61]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v60, v61] = txn3.data;
    const v64 = txn3.time;
    const v59 = txn3.from;
    ;
    const v63 = stdlib.addressEq(v23, v59);
    stdlib.assert(v63, {
      at: './index.rsh:48:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn4 = await (ctc.recv(6, 2, [ctc0, ctc0], false, false));
    const [v72, v73] = txn4.data;
    const v76 = txn4.time;
    const v71 = txn4.from;
    ;
    const v75 = stdlib.addressEq(v32, v71);
    stdlib.assert(v75, {
      at: './index.rsh:54:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn5 = await (ctc.sendrecv(7, 4, stdlib.checkedBigNumberify('./index.rsh:61:11:dot', stdlib.UInt_max, 7), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v23, v24, v32, v60, v61, v72, v73, v76, v49, v52, v50, v56], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0, ctc0, ctc0], true, true, false, (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:61:11:dot', stdlib.UInt_max, 6), v23, v24, v32, v60, v61, v72, v73, v76]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:61:11:dot', stdlib.UInt_max, 6), v23, v24, v32, v60, v61, v72, v73]);
      const [v81, v82, v83, v84] = txn5.data;
      const v87 = txn5.time;
      const v80 = txn5.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v86 = stdlib.addressEq(v23, v80);
      stdlib.assert(v86, {
        at: './index.rsh:61:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player1'
        });
      const v89 = stdlib.digest(ctc2, [v82, v81]);
      const v90 = stdlib.digestEq(v60, v89);
      stdlib.assert(v90, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:63:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Player1'
        });
      const v93 = stdlib.digest(ctc2, [v84, v83]);
      const v94 = stdlib.digestEq(v61, v93);
      stdlib.assert(v94, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:64:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Player1'
        });
      const v96 = stdlib.add(v81, v72);
      const v97 = stdlib.eq(v96, v83);
      const v98 = stdlib.eq(v96, v73);
      const v99 = v97 ? v98 : false;
      const v102 = v98 ? stdlib.checkedBigNumberify('./index.rsh:67:148:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:67:150:decimal', stdlib.UInt_max, 0);
      const v103 = v97 ? stdlib.checkedBigNumberify('./index.rsh:67:115:decimal', stdlib.UInt_max, 1) : v102;
      const v104 = v99 ? stdlib.checkedBigNumberify('./index.rsh:67:81:decimal', stdlib.UInt_max, 0) : v103;
      const cv36 = v104;
      const cv135 = v87;
      
      (() => {
        const v36 = cv36;
        const v135 = cv135;
        
        if ((() => {
          const v43 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:38:23:decimal', stdlib.UInt_max, 0));
          
          return v43;})()) {
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 3), v23, v24, v32, v135]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 3), v23, v24, v32]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v108 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:35:decimal', stdlib.UInt_max, 1));
          const v109 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:56:decimal', stdlib.UInt_max, 2));
          const v110 = [stdlib.checkedBigNumberify('./index.rsh:75:61:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:63:decimal', stdlib.UInt_max, 2)];
          const v111 = [stdlib.checkedBigNumberify('./index.rsh:75:69:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:71:decimal', stdlib.UInt_max, 1)];
          const v112 = v109 ? v110 : v111;
          const v113 = [stdlib.checkedBigNumberify('./index.rsh:75:40:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, 0)];
          const v114 = v108 ? v113 : v112;
          const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:76:24:array ref', stdlib.UInt_max, 0)];
          const v116 = stdlib.mul(v115, v24);
          sim_r.txns.push({
            amt: v116,
            kind: 'from',
            to: v23,
            tok: undefined
            });
          const v121 = v114[stdlib.checkedBigNumberify('./index.rsh:77:24:array ref', stdlib.UInt_max, 1)];
          const v122 = stdlib.mul(v121, v24);
          sim_r.txns.push({
            amt: v122,
            kind: 'from',
            to: v32,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc8, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
          sim_r.view = [ctc8, []];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    const [v81, v82, v83, v84] = txn5.data;
    const v87 = txn5.time;
    const v80 = txn5.from;
    ;
    const v86 = stdlib.addressEq(v23, v80);
    stdlib.assert(v86, {
      at: './index.rsh:61:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v89 = stdlib.digest(ctc2, [v82, v81]);
    const v90 = stdlib.digestEq(v60, v89);
    stdlib.assert(v90, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:63:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Player1'
      });
    const v93 = stdlib.digest(ctc2, [v84, v83]);
    const v94 = stdlib.digestEq(v61, v93);
    stdlib.assert(v94, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:64:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Player1'
      });
    const v96 = stdlib.add(v81, v72);
    const v97 = stdlib.eq(v96, v83);
    const v98 = stdlib.eq(v96, v73);
    const v99 = v97 ? v98 : false;
    const v102 = v98 ? stdlib.checkedBigNumberify('./index.rsh:67:148:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:67:150:decimal', stdlib.UInt_max, 0);
    const v103 = v97 ? stdlib.checkedBigNumberify('./index.rsh:67:115:decimal', stdlib.UInt_max, 1) : v102;
    const v104 = v99 ? stdlib.checkedBigNumberify('./index.rsh:67:81:decimal', stdlib.UInt_max, 0) : v103;
    const cv36 = v104;
    const cv135 = v87;
    
    v36 = cv36;
    v135 = cv135;
    
    continue;
    
    
    }
  const v108 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:35:decimal', stdlib.UInt_max, 1));
  const v109 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:56:decimal', stdlib.UInt_max, 2));
  const v110 = [stdlib.checkedBigNumberify('./index.rsh:75:61:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:63:decimal', stdlib.UInt_max, 2)];
  const v111 = [stdlib.checkedBigNumberify('./index.rsh:75:69:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:71:decimal', stdlib.UInt_max, 1)];
  const v112 = v109 ? v110 : v111;
  const v113 = [stdlib.checkedBigNumberify('./index.rsh:75:40:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, 0)];
  const v114 = v108 ? v113 : v112;
  const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:76:24:array ref', stdlib.UInt_max, 0)];
  const v116 = stdlib.mul(v115, v24);
  ;
  const v121 = v114[stdlib.checkedBigNumberify('./index.rsh:77:24:array ref', stdlib.UInt_max, 1)];
  const v122 = stdlib.mul(v121, v24);
  ;
  stdlib.protect(ctc13, await interact.displayWinner(v36), {
    at: './index.rsh:81:29:application',
    fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:18:function exp)'],
    msg: 'displayWinner',
    who: 'Player1'
    });
  
  return;
  
  
  };
export async function Player2(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v24), {
    at: './index.rsh:32:60:application',
    fs: ['at ./index.rsh:31:11:application call to [unknown function] (defined at: ./index.rsh:31:14:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:34:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v23, v24, v27], [v24, []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:34:7:dot', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:34:7:dot', stdlib.UInt_max, 1), v23, v24]);
    const [] = txn2.data;
    const v35 = txn2.time;
    const v32 = txn2.from;
    
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    const v36 = stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, 0);
    const v135 = v35;
    
    if ((() => {
      const v43 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:38:23:decimal', stdlib.UInt_max, 0));
      
      return v43;})()) {
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 3), v23, v24, v32, v135]);
      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 3), v23, v24, v32]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v108 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:35:decimal', stdlib.UInt_max, 1));
      const v109 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:56:decimal', stdlib.UInt_max, 2));
      const v110 = [stdlib.checkedBigNumberify('./index.rsh:75:61:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:63:decimal', stdlib.UInt_max, 2)];
      const v111 = [stdlib.checkedBigNumberify('./index.rsh:75:69:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:71:decimal', stdlib.UInt_max, 1)];
      const v112 = v109 ? v110 : v111;
      const v113 = [stdlib.checkedBigNumberify('./index.rsh:75:40:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, 0)];
      const v114 = v108 ? v113 : v112;
      const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:76:24:array ref', stdlib.UInt_max, 0)];
      const v116 = stdlib.mul(v115, v24);
      sim_r.txns.push({
        amt: v116,
        kind: 'from',
        to: v23,
        tok: undefined
        });
      const v121 = v114[stdlib.checkedBigNumberify('./index.rsh:77:24:array ref', stdlib.UInt_max, 1)];
      const v122 = stdlib.mul(v121, v24);
      sim_r.txns.push({
        amt: v122,
        kind: 'from',
        to: v32,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc14, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc14, []);
      sim_r.view = [ctc14, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [] = txn2.data;
  const v35 = txn2.time;
  const v32 = txn2.from;
  ;
  let v36 = stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, 0);
  let v135 = v35;
  
  while ((() => {
    const v43 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:38:23:decimal', stdlib.UInt_max, 0));
    
    return v43;})()) {
    const txn3 = await (ctc.recv(5, 2, [ctc2, ctc2], false, false));
    const [v60, v61] = txn3.data;
    const v64 = txn3.time;
    const v59 = txn3.from;
    ;
    const v63 = stdlib.addressEq(v23, v59);
    stdlib.assert(v63, {
      at: './index.rsh:48:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v68 = stdlib.protect(ctc3, await interact.play(), {
      at: './index.rsh:52:69:application',
      fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:18:function exp)'],
      msg: 'play',
      who: 'Player2'
      });
    const v69 = v68[stdlib.checkedBigNumberify('./index.rsh:52:19:array', stdlib.UInt_max, 0)];
    const v70 = v68[stdlib.checkedBigNumberify('./index.rsh:52:19:array', stdlib.UInt_max, 1)];
    
    const txn4 = await (ctc.sendrecv(6, 2, stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0, ctc0], [v23, v24, v32, v60, v61, v64, v69, v70], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, false, (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, 5), v23, v24, v32, v60, v61, v64]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, 5), v23, v24, v32, v60, v61]);
      const [v72, v73] = txn4.data;
      const v76 = txn4.time;
      const v71 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v75 = stdlib.addressEq(v32, v71);
      stdlib.assert(v75, {
        at: './index.rsh:54:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player2'
        });
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:17:after expr stmt semicolon', stdlib.UInt_max, 6), v23, v24, v32, v60, v61, v72, v73, v76]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:55:17:after expr stmt semicolon', stdlib.UInt_max, 6), v23, v24, v32, v60, v61, v72, v73]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:55:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v72, v73] = txn4.data;
    const v76 = txn4.time;
    const v71 = txn4.from;
    ;
    const v75 = stdlib.addressEq(v32, v71);
    stdlib.assert(v75, {
      at: './index.rsh:54:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const txn5 = await (ctc.recv(7, 4, [ctc0, ctc0, ctc0, ctc0], false, false));
    const [v81, v82, v83, v84] = txn5.data;
    const v87 = txn5.time;
    const v80 = txn5.from;
    ;
    const v86 = stdlib.addressEq(v23, v80);
    stdlib.assert(v86, {
      at: './index.rsh:61:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v89 = stdlib.digest(ctc4, [v82, v81]);
    const v90 = stdlib.digestEq(v60, v89);
    stdlib.assert(v90, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:63:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Player2'
      });
    const v93 = stdlib.digest(ctc4, [v84, v83]);
    const v94 = stdlib.digestEq(v61, v93);
    stdlib.assert(v94, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:64:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Player2'
      });
    const v96 = stdlib.add(v81, v72);
    const v97 = stdlib.eq(v96, v83);
    const v98 = stdlib.eq(v96, v73);
    const v99 = v97 ? v98 : false;
    const v102 = v98 ? stdlib.checkedBigNumberify('./index.rsh:67:148:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:67:150:decimal', stdlib.UInt_max, 0);
    const v103 = v97 ? stdlib.checkedBigNumberify('./index.rsh:67:115:decimal', stdlib.UInt_max, 1) : v102;
    const v104 = v99 ? stdlib.checkedBigNumberify('./index.rsh:67:81:decimal', stdlib.UInt_max, 0) : v103;
    const cv36 = v104;
    const cv135 = v87;
    
    v36 = cv36;
    v135 = cv135;
    
    continue;
    
    
    }
  const v108 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:35:decimal', stdlib.UInt_max, 1));
  const v109 = stdlib.eq(v36, stdlib.checkedBigNumberify('./index.rsh:75:56:decimal', stdlib.UInt_max, 2));
  const v110 = [stdlib.checkedBigNumberify('./index.rsh:75:61:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:63:decimal', stdlib.UInt_max, 2)];
  const v111 = [stdlib.checkedBigNumberify('./index.rsh:75:69:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:71:decimal', stdlib.UInt_max, 1)];
  const v112 = v109 ? v110 : v111;
  const v113 = [stdlib.checkedBigNumberify('./index.rsh:75:40:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, 0)];
  const v114 = v108 ? v113 : v112;
  const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:76:24:array ref', stdlib.UInt_max, 0)];
  const v116 = stdlib.mul(v115, v24);
  ;
  const v121 = v114[stdlib.checkedBigNumberify('./index.rsh:77:24:array ref', stdlib.UInt_max, 1)];
  const v122 = stdlib.mul(v121, v24);
  ;
  stdlib.protect(ctc11, await interact.displayWinner(v36), {
    at: './index.rsh:81:29:application',
    fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:18:function exp)'],
    msg: 'displayWinner',
    who: 'Player2'
    });
  
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 254
    }, {
    count: 9,
    size: 286
    }, null, null, {
    count: 9,
    size: 382
    }, {
    count: 9,
    size: 398
    }, {
    count: 9,
    size: 430
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:27:7:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:34:7:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
int 0
int 0
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
int 1
itob
int 1
itob
concat
int 0
itob
int 2
itob
concat
int 0
int 2
==
select
int 2
itob
int 0
itob
concat
int 0
int 1
==
select
store 253
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 253
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxn 0 Sender
==
assert
gtxn 5 Amount
load 253
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 7
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 252
dup
substring 32 64
store 251
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:48:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:48:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:54:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:54:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 248
dup
substring 8 16
btoi
store 247
dup
substring 16 24
btoi
store 246
dup
substring 24 32
btoi
store 245
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:61:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:61:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:63:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 248
itob
concat
keccak256
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:64:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 245
itob
load 246
itob
concat
keccak256
==
assert
load 248
load 250
+
dup
store 244
load 246
==
store 243
load 244
load 249
==
store 242
int 0
int 2
load 242
select
int 1
load 243
select
int 0
load 243
load 242
&&
select
dup
store 241
int 0
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
int 1
itob
int 1
itob
concat
int 0
itob
int 2
itob
concat
load 241
int 2
==
select
int 2
itob
int 0
itob
concat
load 241
int 1
==
select
store 240
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 240
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 253
==
assert
gtxn 5 Amount
load 240
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 7
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
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
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
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
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
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
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
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
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610ea3806100826000396000f3fe60806040526004361061004e5760003560e01c80630ae90a381461005a5780632438df701461006f5780639532ef0114610082578063ab994eab14610095578063d20f78c3146100a857610055565b3661005557005b600080fd5b61006d610068366004610bad565b6100bb565b005b61006d61007d366004610bd0565b6102ec565b61006d610090366004610bbf565b6103c8565b61006d6100a3366004610b9b565b6104e5565b61006d6100b6366004610b84565b6106bf565b6040516100cf906006908390602001610de3565b6040516020818303038152906040528051906020012060001c600054146100f557600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561012057600080fd5b3361012e6020840184610b63565b6001600160a01b03161461014157600080fd5b6040805161012084013560208201526101008401359181019190915260600160408051601f19818403018152919052805160209091012060608301351461018757600080fd5b6040805161016084013560208201526101408401359181019190915260600160408051601f1981840301815291905280516020909101206080830135146101cd57600080fd5b6101e060a0830135610100840135610e20565b8082526101408301358114602083015260c083013514604080830191909152517ff390fa257dd56031ec9e734777266fd317dc4caa5140a24475ef1039d725b42a9061022d908490610d5d565b60405180910390a161023d610a99565b61024a6020840184610b63565b81516001600160a01b03909116905280516020808501359101526102746060840160408501610b63565b81516001600160a01b03909116604090910152602082015161029757600061029d565b81604001515b6102ca5781602001516102c25781604001516102ba5760006102bd565b60025b6102c5565b60015b6102cd565b60005b60208083018051929092529051439101526102e78161085f565b505050565b604051610300906001908390602001610df8565b6040516020818303038152906040528051906020012060001c6000541461032657600080fd5b600080553460208201351461033a57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516103699190610d9f565b60405180910390a1610379610a99565b6103866020830183610b63565b81516001600160a01b03909116905280516020808401359181019190915281513360409091015280820180516000905251439101526103c48161085f565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461040557600080fd5b600080553460208201351461041957600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610483604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b6040516104f9906005908390602001610dcf565b6040516020818303038152906040528051906020012060001c6000541461051f57600080fd5b60008055341561052e57600080fd5b3361053f6060830160408401610b63565b6001600160a01b03161461055257600080fd5b7f14cb14f6f2fcbb5140929bd3f5cce11d1078d12c7e3847b28ea490c9248ce391816040516105819190610d34565b60405180910390a16105e360405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b6105f06020830183610b63565b6001600160a01b03168152602080830135908201526106156060830160408401610b63565b6001600160a01b03908116604083810191825260608581013581860190815260808088013581880190815260c0808a013560a0808b0191825260e0808d0135848d0190815243828e019081528a5160066020808301919091528f518f169c82019c909c529a8e0151998b01999099529951909a16948801949094529351928601929092525190840152519382019390935290516101008201529051610120820152610140016104c6565b6040516106d3906003908390602001610e0c565b6040516020818303038152906040528051906020012060001c600054146106f957600080fd5b60008055341561070857600080fd5b336107166020830183610b63565b6001600160a01b03161461072957600080fd5b7f8589950c061cff2c2accd5d723853bcf232857ea46fbe30dfe0ae7756197b332816040516107589190610d06565b60405180910390a16107ab6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6107b86020830183610b63565b6001600160a01b03168152602080830135908201526107dd6060830160408401610b63565b6001600160a01b039081166040838101918252608085810135606080870191825260a08089013584890190815243828a01908152865160056020808301919091528b518b1698820198909852968a0151938701939093529551909616928401929092525193820193909352905160c0820152905160e0820152610100016104c6565b6020810151516109065760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b0390811689528a5186015185528a518a0151811684528a8601518601518252895160038188015298518116898b0152935191880191909152905190911693850193909352915160a0808501919091528451808503909101815260c09093019093528151910120905561096e565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b039081169094528751850151909252865190950151909116909352830151519091526103c481610971565b50565b610979610ae5565b805160009081905281516002602091820181905281840180516001908190529051830181905260408501805192909252905190910191909152825160600151146109dc578151606001516002146109d45780602001516109d7565b80515b6109e2565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc91610a0f9190610e38565b6040518115909202916000818181858888f19350505050158015610a37573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc836000015160200151836060015160200151610a699190610e38565b6040518115909202916000818181858888f19350505050158015610a91573d6000803e3d6000fd5b506000805533ff5b6040805160a08101825260009181018281526060820183905260808201929092529081905b8152602001610ae0604051806040016040528060008152602001600081525090565b905290565b6040805160c0810190915260006080820181815260a083019190915281908152602001610b25604051806040016040528060008152602001600081525090565b8152602001610abe604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114610b5e57600080fd5b919050565b600060208284031215610b74578081fd5b610b7d82610b47565b9392505050565b600060c08284031215610b95578081fd5b50919050565b60006101008284031215610b95578081fd5b60006101808284031215610b95578081fd5b600060408284031215610b95578081fd5b600060808284031215610b95578081fd5b6001600160a01b0380610bf383610b47565b1683526020820135602084015280610c0d60408401610b47565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380610c4883610b47565b1683526020820135602084015280610c6260408401610b47565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b03610cb082610b47565b16825260208181013590830152604090810135910152565b6001600160a01b0380610cda83610b47565b1683526020820135602084015280610cf460408401610b47565b16604084015250606090810135910152565b60c08101610d148284610cc8565b610d2e608083016080850180358252602090810135910152565b92915050565b6101008101610d438284610be1565b610d2e60c0830160c0850180358252602090810135910152565b6101808101610d6c8284610c36565b61010083810135908301526101208084013590830152610140808401359083015261016092830135929091019190915290565b60808101610dad8284610c9f565b6060830135801515808214610dc157600080fd5b806060850152505092915050565b82815260e08101610b7d6020830184610be1565b8281526101208101610b7d6020830184610c36565b82815260808101610b7d6020830184610c9f565b82815260a08101610b7d6020830184610cc8565b60008219821115610e3357610e33610e57565b500190565b6000816000190483118215151615610e5257610e52610e57565b500290565b634e487b7160e01b600052601160045260246000fdfea26469706673582212208773bd15d99afdad0f57723265843ffb2e41861972b223f91f71cdebfd1338ac64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

