// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/TowerWeaponCtrl.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AudioMgr.ts", "./AudioName.ts", "./GameConfig.ts", './GameHelper.ts', "./EasyPoolName.ts", './Door.ts', "./PhysicsHelper.ts"], function(g) {
    var j, k, m, q, v, w, x, y, z, A, B, C, D, E, F; return {
        'setters':[function(G) {
            var yH=b; j=G["inheritsLoose"];
        }, function(G) {
            var yI=b; k=G["cclegacy"], m=G["_decorator"], q=G['v3'], v=G['tween'], w=G["ParticleSystem"], x=G["easing"], y=G["Component"];
        }, function(G) {
            var yJ=b; z=G["default"];
        }, function(G) {
            var yK=b; A=G["AudioName"];
        }, function(G) {
            var yL=b; B=G["default"];
        }, function(G) {
            var yM=b; C=G["default"];
        }, function(G) {
            var yN=b; D=G["EASY_POOL_NAME"];
        }, function(G) {
            var yO=b; E=G["Door"];
        }, function(G) {
            var yP=b; F=G["default"];
        }], 'execute':function() {
            var yQ=b, G; k['_RF']["push"]( {
            }, "8a1f7sTpsxOz5ygVWS8Wliq", "TowerWeaponCtrl", void 0x0); var H=m["ccclass"]; m["property"], g("TowerWeaponCtrl", H("TowerWeaponCtrl")(G=function(I) {
                var yS=yQ; function J() {
                    var yR=b; for(var L, M=arguments["length"], N=new Array(M), P=0x0; P<M; P++)N[P]=arguments[P]; return(L=I["call"]['apply'](I, [this]["concat"](N))||this)["towerNum"]=0x0, L;
                }j(J, I); var K=J["prototype"]; return K["unlockTower"]=function(L) {
                    var yT=yS, M=L["towerIdx"]; if(this['node']["children"][M-0x1]) {
                        var N=this["node"]["children"][M-0x1]; N&&(B['TOWER_JUMP_COUNT']++, this["updateTowerShow"](N, L));
                    }0x4==B["TOWER_JUMP_COUNT"]&&(B["FENSE_CTRL"]["showOrHideFense"](0x4, !0x0), B["AREA_CTRL"]["getArea"](0x8)["initData"](), B["AREA_CTRL"]["getArea"](0x8)["areaDone"]());
                }, K["updateTowerShow"]=function(L, M) {
                    var yU=yS, N=this; L["active"]?B["SOLDIER_CTRL"]["unlockQueue"](M["towerIdx"]-0x1, M["archerNum"], M["isBarracks"]):(L["position"]=q(L["position"]['x'], -0xf, L["position"]['z']), L["active"]=!0x0, z["playSound"](A['BUILD']), v(L)['to'](0.5,  {
                        'position':q(L["position"]['x'], 0x0, L["position"]['z'])
                    },  {
                        'easing':"backOut"
                    })["call"](function() {
                        var yV=yU; z["playSound"](A["BUILD"]); var P=B["EASY_POOL"]["get"](D["VFX_LVL_UP"]); L["addChild"](P); for(var Q=P['getComponentsInChildren'](w), R=function(U) {
                            var yW=yV; Q[U]["stop"](), N["scheduleOnce"](function() {
                                Q[U]['play']();
                            }, 0x0);
                        }, S=0x0; S<Q["length"]; S++)R(S); N["scheduleOnce"](function() {
                            var yX=yV; B['EASY_POOL']["put"](P);
                        }, 0x1), B["SOLDIER_CTRL"]['unlockQueue'](M["towerIdx"]-0x1, M["archerNum"], M["isBarracks"]);
                    })["start"]());
                }, K["checkAllTowerDone"]=function() {
                    var yY=yS; if(B["TOWER_JUMP_COUNT"]>=B["TOWER_CTRL"]['node']['children']["length"]) {
                        for(var L=C["getNodeByKey"]('DOOR_FINAL'), M=function(P) {
                            var yZ=yY, Q=L["children"][P]; v(Q)["delay"](0.5)['to'](0.5,  {
                                'position':q(Q['position']['x'], 0x0, Q["position"]['z'])
                            },  {
                                'easing':x["backOut"]
                            })["call"](function() {
                                var z0=yZ, R=Q["getChildByName"]('door'); R&&R["getComponent"](E)['active'](), P==L["children"]["length"]-0x1&&(B["AREA_CTRL"]['unlockArea'](0x7), z["playSound"](A["BUILD"])); for(var S=0x0; S<Q["children"]["length"]; S++)-0x1!=Q["children"][S]['name']['indexOf']("zhalan")&&F["addPhysics"](Q["children"][S]);
                            })["start"]();
                        }, N=0x0; N<L["children"]["length"]; N++)M(N);
                    }
                }, J;
            }(y))||G), k['_RF']['pop']();
        }
    };
});
