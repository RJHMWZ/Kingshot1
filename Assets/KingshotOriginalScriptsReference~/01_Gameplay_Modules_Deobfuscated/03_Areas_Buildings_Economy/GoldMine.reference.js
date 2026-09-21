// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/GoldMine.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameData.ts", './EasyPoolName.ts', "./GameConfig.ts", "./BezierAction.ts", "./TimerAction.ts", "./GoodsStack2.ts", './CCEffectMgrConst.ts', './Object3D.ts'], function(j) {
    var k, q, v, w, x, z, A, B, D, E, F, H, I, J, K, L, M, N, O, Q, R, S; return {
        'setters':[function(T) {
            var m3=b; k=T['applyDecoratedDescriptor'], q=T["inheritsLoose"], v=T["initializerDefineProperty"], w=T['assertThisInitialized'];
        }, function(T) {
            var m4=b; x=T['cclegacy'], z=T["_decorator"], A=T["Node"], B=T["SkeletalAnimation"], D=T["tween"], E=T['v3'], F=T["easing"], H=T['Vec3'], I=T['math'], J=T["Component"];
        }, function(T) {
            var m5=b; K=T["default"];
        }, function(T) {
            var m6=b; L=T["EASY_POOL_NAME"];
        }, function(T) {
            var m7=b; M=T["default"];
        }, function(T) {
            var m8=b; N=T["BezierAction"];
        }, function(T) {
            O=T['TimerAction'];
        }, function(T) {
            var m9=b; Q=T["GoodsStack"];
        }, function(T) {
            var ma=b; R=T["EFFECT_TYPE"];
        }, function(T) {
            S=T['Object3D'];
        }], 'execute':function() {
            var mb=b, X, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an; x["_RF"]["push"]( {
            }, "f3a9fm5e4hOSZEqvr17KVDY", "GoldMine", void 0x0); var ao=z['ccclass'], ap=z['property']; j("GoldMine", (X=ao("GoldMine"), a0=ap(A), a1=ap(A), a2=ap(A), a3=ap(A), a4=ap(A), a5=ap(B), a6=ap(B), a7=ap(A), a8=ap(Q), a9=ap( {
                'type':[A]
            }), aa=ap( {
                'type':[B]
            }), X((ad=k((ac=function(aq) {
                var md=mb; function ar() {
                    var mc=b; for(var at, au=arguments["length"], av=new Array(au), aw=0x0; aw<au; aw++)av[aw]=arguments[aw]; return at=aq['call']['apply'](aq, [this]["concat"](av))||this, v(at, 'production_pos', ad, w(at)), v(at, 'production_pos_2', ae, w(at)), v(at, "gold_mine_1", af, w(at)), v(at, 'gold_mine_2', ag, w(at)), v(at, "gold_mine_3", ah, w(at)), v(at, "npc_1", ai, w(at)), v(at, "npc_2", aj, w(at)), v(at, "money_pile", ak, w(at)), v(at, "nodeHubGold", al, w(at)), v(at, 'production_pos_list', am, w(at)), v(at, "npcs", an, w(at)), at["timeProductionCoin"]=new O(w(at), 0x3e8*K['gold_mine_data']["gold_mine_data_1"]["production_time"], at["updateCoin_1"]), at["timeProductionCoin_2"]=new O(w(at), 0x3e8*K["gold_mine_data"]['gold_mine_data_2']["production_time"], at["updateCoin_2"]), at['timeProductionCoin_3']=new O(w(at), 0x3e8*K['gold_mine_data']["gold_mine_data_3"]["production_time"], at["updateCoin_3"]), at["timeGetCoins"]=new O(w(at), K["gold_mine_data"]['get_coin_cd'], at["searchingCoin"]), at["miningNum_1"]=0x0, at["miningNum_2"]=0x0, at["isShowGuide"]=!0x0, at;
                }q(ar, aq); var as=ar["prototype"]; return as["onLoad"]=function() {
                    var me=md; this["timeProductionCoin"]['stop'](), this['timeProductionCoin_2']["stop"](), this["timeProductionCoin_3"]["stop"](), this["timeGetCoins"]['reset'](), this["nodeHubGold"]['nMax']=K["gold_mine_data"]['production_num_limit'], this["nodeHubGold"]["nCount"]=K["gold_mine_data"]["init_coin_num"];
                }, as["start"]=function() {
                }, as["updateAniState_1"]=function(at, au) {
                    var mf=md; void 0x0===au&&(au=0x1), this["npc_1"]["getState"](at)["isPlaying"]||(this["npc_1"]["getState"](at)["speed"]=au, this["npc_1"]['play'](at));
                }, as['updateAniState_2']=function(at, au) {
                    var mg=md; void 0x0===au&&(au=0x1), this['npc_2']["getState"](at)["isPlaying"]||(this["npc_2"]["getState"](at)["speed"]=au, this["npc_2"]["play"](at));
                }, as["updateAniState_3"]=function(at, au, av) {
                    var mh=md; void 0x0===av&&(av=0x1), at["getState"](au)["isPlaying"]||(at["getState"](au)["speed"]=av, at['play'](au));
                }, as["unlockGoldMine"]=function(at) {
                    var mi=md, au=this; if(void 0x0===at&&(at=0x1), 0x3!=at) {
                        var av=0x1==at?this["gold_mine_1"]:this["gold_mine_2"]; D(av)['to'](0.5,  {
                            'position':E(av["position"]['x'], 0x0, av["position"]['z'])
                        },  {
                            'easing':F["backOut"]
                        })['call'](function() {
                            var mj=mi; 0x1==at&&au["timeProductionCoin"]["reset"](), 0x1==at&&au['updateAniState_1']("build", K["gold_mine_data"]['gold_mine_data_1']["worker_mining_speed"]), 0x2==at&&au["timeProductionCoin_2"]["reset"](), 0x2==at&&au["updateAniState_2"]("build", K["gold_mine_data"]["gold_mine_data_2"]["worker_mining_speed"]); var aw=av["getChildByName"]("GoldMine"); M["EFFECT_CTRL"]["onEffectShow"](R["UP_GRADE_FIRE"], aw['worldPosition'], E(1.5, 1.5, 1.5)), au["addPhysics"](av);
                        })["start"](), this['money_pile']["active"]=!0x0;
                    }else this['unlockGoldMine_2']();
                }, as['unlockGoldMine_2']=function() {
                    var mk=md, at=this, au=this["gold_mine_3"]; D(au)['to'](0.5,  {
                        'position':E(au["position"]['x'], 0x0, au['position']['z'])
                    },  {
                        'easing':F["backOut"]
                    })["call"](function() {
                        var ml=mk; at['timeProductionCoin_3']["reset"](); for(var av=0x0; av<at["npcs"]["length"]; av++)at['updateAniState_3'](at['npcs'][av], 'build', K["gold_mine_data"]["gold_mine_data_3"]["worker_mining_speed"]); var aw=au["getChildByName"]("GoldMine")["children"][0x0]; M["EFFECT_CTRL"]['onEffectShow'](R["UP_GRADE_FIRE"], aw["worldPosition"], E(2.5, 2.5, 2.5));
                    })["start"]();
                }, as["hideGuide"]=function() {
                    var mm=md; M['NAV_LINE_COMP']["navStop"]();
                }, as['addPhysics']=function(at) {
                    var mn=md, au=at["getChildByName"]("air_wall"), av=au["getComponent"](S); av||(av=au["addComponent"](S)), M["WORLD"]["insert"](av);
                }, as['searchingCoin']=function() {
                    var mo=md; if(H["distance"](this["nodeHubGold"]["node"]['worldPosition'], M['PLAYER']['node']["worldPosition"])<=0x3&&!this["nodeHubGold"]["isNull"]()) {
                        this['hideGuide'](); var at=this['nodeHubGold']["getGoodsItemByTop"](); M["PLAYER"]["getCoin"](at);
                    }
                }, as["updateCoin_1"]=function() {
                    var mp=md, at=K["gold_mine_data"]["gold_mine_data_1"]; this["onProductionCoin"](at, this["production_pos"]['getWorldPosition']());
                }, as['updateCoin_2']=function() {
                    var mq=md, at=K["gold_mine_data"]["gold_mine_data_2"]; this['onProductionCoin'](at, this["production_pos_2"]["getWorldPosition"]());
                }, as['updateCoin_3']=function() {
                    var mr=md; for(var at=K["gold_mine_data"]["gold_mine_data_3"], au=0x0; au<0x3; au++) {
                        var av=this["production_pos_list"][au]["getWorldPosition"](); this["onProductionCoin"](at, av);
                    }
                }, as["onProductionCoin"]=function(at, au) {
                    var ms=md, av=this; if(!M["GAME_OVER"]) {
                        for(var aw=at["production_num"], ax=0x0; ax<aw; ax++)this['scheduleOnce'](function() {
                            var mt=ms, ay=M["EASY_POOL"]["get"](L['COIN']); ay["setParent"](av["node"]); var az=au; ay["setWorldPosition"](az); var aA=E(I["randomRange"](-0x2, 0x2), I["randomRange"](0xa, 0xc), I["randomRange"](-0x2, 0x2)), aB=at["coin_fly_time"], aC=av['nodeHubGold']['onGetNextWordPosByIdx'](av['nodeHubGold']["onGetGoodsVal"]()-0x1), aD=N["bezierWpsMove"](ay, aB, az, aC, aA); aD["call"](function() {
                                var mu=mt; M["EASY_POOL"]["put"](ay), av["nodeHubGold"]["onAddCacheGoods"](0x1), M["PLAYER"]["checkGuideShow"](function() {
                                    var mv=mu; M["NAV_LINE_COMP"]['navStart'](M["PLAYER"]["node"], av['nodeHubGold']["node"]), M["GUIDE_ARROW"]["guideStart"](M["PLAYER"]["node"], av["nodeHubGold"]["node"], 0xf, 0x2, 0x6);
                                });
                            }), aD["start"](), ay["eulerAngles"]=av['nodeHubGold']["v3Rotation"]["clone"](), ay["eulerAngles"]['z']=I["randomRange"](0x0, 0x168); var aE=E(0x168, 0x168, 0x10e); D(ay)['by'](aB,  {
                                'eulerAngles':aE
                            })["start"]();
                        }, at["coin_fly_cd"]*ax);
                    }
                }, as['update']=function(at) {
                    var mw=md; this["timeProductionCoin"]["update"](at), this["timeProductionCoin_2"]['update'](at), this["timeProductionCoin_3"]["update"](at), this["timeGetCoins"]["update"](at);
                }, ar;
            }(J))["prototype"], "production_pos", [a0],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ae=k(ac["prototype"], 'production_pos_2', [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), af=k(ac["prototype"], "gold_mine_1", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ag=k(ac["prototype"], "gold_mine_2", [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ah=k(ac["prototype"], "gold_mine_3", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ai=k(ac["prototype"], "npc_1", [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), aj=k(ac['prototype'], 'npc_2', [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ak=k(ac["prototype"], "money_pile", [a7],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), al=k(ac["prototype"], 'nodeHubGold', [a8],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), am=k(ac['prototype'], "production_pos_list", [a9],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), an=k(ac["prototype"], "npcs", [aa],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), ab=ac))||ab)), x["_RF"]["pop"]();
        }
    };
});
