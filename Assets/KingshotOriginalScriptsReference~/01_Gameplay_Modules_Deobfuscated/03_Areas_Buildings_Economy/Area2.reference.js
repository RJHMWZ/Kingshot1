// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Area2.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts", "./LocationUtil.ts", "./GameData.ts", "./AudioMgr.ts", "./AudioName.ts", './playable_controller.ts', "./AreaType2.ts", "./GameHelper.ts", './CCEffectMgrConst.ts', './Door.ts', './Object3D.ts'], function(j) {
    var q, w, x, z, B, F, G, H, I, J, K, M, N, O, P, Q, S, T, U, V, W, X, Y, Z, a0, a1, a2; return {
        'setters':[function(a3) {
            var cJ=b; q=a3["applyDecoratedDescriptor"], w=a3["inheritsLoose"], x=a3['initializerDefineProperty'], z=a3["assertThisInitialized"];
        }, function(a3) {
            var cK=b; B=a3["cclegacy"], F=a3["_decorator"], G=a3["Enum"], H=a3["Sprite"], I=a3["Label"], J=a3['v3'], K=a3["tween"], M=a3["easing"], N=a3["lerp"], O=a3["SphereLight"], P=a3["SpotLight"], Q=a3["Component"];
        }, function(a3) {
            var cL=b; S=a3["default"];
        }, function(a3) {
            var cM=b; T=a3["LocationUtil3D"];
        }, function(a3) {
            var cN=b; U=a3["default"];
        }, function(a3) {
            V=a3['default'];
        }, function(a3) {
            W=a3['AudioName'];
        }, function(a3) {
            var cO=b; X=a3["default"];
        }, function(a3) {
            var cP=b; Y=a3["AreaType"];
        }, function(a3) {
            var cQ=b; Z=a3["default"];
        }, function(a3) {
            a0=a3['EFFECT_TYPE'];
        }, function(a3) {
            var cR=b; a1=a3["Door"];
        }, function(a3) {
            a2=a3['Object3D'];
        }], 'execute':function() {
            var cS=b, a3, a4, a5, a6, a7; B['_RF']["push"]( {
            }, "619bakO/n1B3JBTxAQtlp6d", "Area", void 0x0); var a8=F["ccclass"], a9=F['property']; j("Area", (a3=a8("Area"), a4=a9( {
                'type':G(Y), 'tooltip':"地贴类型"
            }), a3((a7=q((a6=function(aa) {
                var cU=cS; function ab() {
                    var cT=b; for(var ad, ae=arguments['length'], af=new Array(ae), ag=0x0; ag<ae; ag++)af[ag]=arguments[ag]; return ad=aa['call']['apply'](aa, [this]["concat"](af))||this, x(ad, 'areaType', a7, z(ad)), ad["areaData"]=null, ad['ui']=null, ad["icon"]=null, ad["numLbl"]=null, ad["fillSp"]=null, ad["demand"]=0x0, ad['demandPre']=0x0, ad['demandMax']=0x0, ad;
                }w(ab, aa); var ac=ab["prototype"]; return ac['onLoad']=function() {
                    var cV=cU; this["initData"]();
                }, ac['start']=function() {
                    var cW=cU; this["initView"]();
                }, ac['onEnable']=function() {
                    var cX=cU; this["updateShow"]();
                }, ac["onDisable"]=function() {
                }, ac['update']=function(ad) {
                    var cY=cU; this["updateFillSp"](ad), this["checkPlayer"]();
                }, ac["checkPlayer"]=function() {
                    var cZ=cU, ad=S['PLAYER']["getArea"](), ae=T["getDistanceHorizontal"](this['node'], S["PLAYER"]["node"]); ae<=0x5&&!ad?S["PLAYER"]["dropArea"](this["node"]):ad&&ad["uuid"]==this["node"]["uuid"]&&ae>0x5&&S["PLAYER"]["cancelDropArea"](this["node"]);
                }, ac["initData"]=function() {
                    var d0=cU; this["areaData"]=U["area_data"]["area_data_arr"][this["areaType"]-0x1], this['areaData']&&(this["demandPre"]=0x0, this["demand"]=0x0, this["demandMax"]=this["areaData"]["demand"]), this['ui']=this["node"]["getChildByName"]('ui'), this['fillSp']=this['ui']["getChildByName"]("area_fill_sp")["getComponent"](H), this["icon"]=this['ui']["getChildByName"]("area_icon"), this["numLbl"]=this['ui']["getChildByName"]("area_demand_lbl")["getComponent"](I);
                }, ac["initView"]=function() {
                    var d1=cU; this["areaData"]&&(this["numLbl"]["string"]=this["areaData"]["demand"]);
                }, ac['updateShow']=function() {
                    var d2=cU, ad=this["node"]['getChildByName']('ui'); ad['setScale'](J(0x0, 0x0, 0x1)), K(ad)['to'](0.5,  {
                        'scale':J(0.75, 0.75, 0x1)
                    },  {
                        'easing':M["backOut"]
                    })["start"]();
                }, ac['updateFillSp']=function(ad) {
                    var d3=cU; if(0x1!=this["fillSp"]["fillRange"]) {
                        var ae=this["fillSp"]["fillRange"]; this["fillSp"]["fillRange"]=N(ae, this["demand"]/this['demandMax'], 0.5*ad*0x32);
                    }
                }, ac['preFill']=function(ad) {
                    var d4=cU; this["demandPre"]+=ad, this["demandPre"]>=this["demandMax"]&&(this["demandPre"]=this["demandMax"], S["PLAYER"]['cancelDropArea'](this["node"]));
                }, ac["fill"]=function(ad) {
                    var d5=cU; this["demand"]+=ad, this["demand"]>=this["demandMax"]&&(this['demand']=this['demandMax'], this["fillSp"]["fillRange"]=0x1, this["scheduleOnce"](this["areaDone"], 0.1)), this["numLbl"]["string"]=this["demandMax"]-this["demand"]+'';
                }, ac['checkAreaDone']=function() {
                    var d6=cU; return this["demandPre"]>=this["demandMax"];
                }, ac["areaDone"]=function() {
                    var d7=cU; if(V["playSound"](W["AREA_DONE"]), this['node']['active']=!0x1, this["areaType"]!=Y["Area_10"]&&this["areaType"]!=Y["Area_15"]&&this["areaType"]!=Y["Area_14"]) {
                        var ad=this['node']['getChildByName']("guide_target"); ad&&S["GUIDE_ARROW"]["guideStopByTarget"](ad); for(var af=this['areaData']['unlock_area'], ag=0x0; ag<af["length"]; ag++)S["AREA_CTRL"]["unlockArea"](af[ag]); for(var ah=this["areaData"]["unlock_gold_mine"], ai=0x0; ai<ah['length']; ai++)S["GOLD_MINE_CTRL"]["unlockGoldMine"](ah[ai]); for(var aj=!0x0, ak=this["areaData"]["unlock_fense"], al=0x0; al<ak["length"]; al++)S["FENSE_CTRL"]["showOrHideFense"](ak[al], !0x0), 0x5==ak[al]&&(aj=!0x1); for(var am=this["areaData"]["lock_fense"], an=0x0; an<am["length"]; an++)S['FENSE_CTRL']["showOrHideFense"](am[an], !0x1); for(var ao=this["areaData"]["lock_queue"], ap=0x0; ap<ao["length"]; ap++) {
                            var aq=ao[ap]; S["ENEMY_CTRL"]["lockQueue"](aq);
                        }for(var ar=this["areaData"]["unlock_queue"], as=0x0; as<ar["length"]; as++) {
                            var at=ar[as]; S['ENEMY_CTRL']["unlockQueue"](at);
                        }if(this["areaData"]['bTransfer']) {
                            var au=this["areaData"]["lock_queue"][0x0], av=this["areaData"]['unlock_queue'][0x0]; S["ENEMY_CTRL"]["transfer"](au, av);
                        }var aw=this["areaData"]["camera_height_add"]; if(aw) {
                            var ax=S["CAMERA_3D"]["orthoHeight"]; K(S["CAMERA_3D"])['to'](0x1,  {
                                'orthoHeight':ax+aw
                            })["delay"](U["game_limit_data"]["barrack_delay_jump"])["start"]();
                        }aj||this["scheduleOnce"](function() {
                            var d8=d7; S["FENSE_CTRL"]["isFinish"]=!0x0;
                        }, 0x1); var ay=!0x1, az=this['areaData']["bBarrack"]; if(az) {
                            var aA=Z["getNodeByKey"]("BARRACK_DOOR_LEFT"), aB=Z["getNodeByKey"]("BARRACK_DOOR_RIGHT"), aC=Z["getNodeByKey"]("DOOR_FINAL"); if(aC['getComponent'](a1)["_isActive"]) {
                                aC["getComponent"](a1)["_isActive"]=!0x1; var aD=aC["children"][0x0], aE=aC['children'][0x1]; K(aD)['by'](0.5,  {
                                    'eulerAngles':J(0x0, -0x87, 0x0)
                                },  {
                                    'easing':M["backOut"]
                                })["start"](), K(aE)['by'](0.5,  {
                                    'eulerAngles':J(0x0, 0x87, 0x0)
                                },  {
                                    'easing':M["backOut"]
                                })["start"]();
                            }for(var aF=aA["children"][0x0], aG=aA['children'][0x1], aH=aB["children"][0x0], aI=aB['children'][0x1], aJ=function() {
                                var d9=d7, aW=S['WORLD']["node"]['getChildByName']("barracks_"+az[aK]); if(aW) {
                                    aW['active']=!0x0; var aX=aW["getComponent"](a2); S["WORLD"]["insert"](aX);
                                }var aY=S["LAYER_GAME"]['getChildByName']("barrack")["children"][az[aK]-0x1]; aY["active"]=!0x0, K(aY)['to'](0.3,  {
                                    'position':J(aY["position"]['x'], 0x0, aY["position"]['z'])
                                },  {
                                    'easing':M["backOut"]
                                })["call"](function() {
                                    var da=d9, aZ=aY; S["EFFECT_CTRL"]["onEffectShow"](a0["UP_GRADE_FIRE"], aZ['worldPosition'], J(1.5, 1.5, 1.5));
                                })["call"](function() {
                                    var db=d9; V["playSound"](W["CHEER"]), V["playSound"](W["HORSE_OUT"]);
                                })["start"](), 0x1==az[aK]?aA["getComponent"](a1)["_isActive"]&&(aA['getComponent'](a1)["_isActive"]=!0x1, K(aF)['by'](0.5,  {
                                    'eulerAngles':J(0x0, -0x87, 0x0)
                                },  {
                                    'easing':M['backOut']
                                })["start"](), K(aG)['by'](0.5,  {
                                    'eulerAngles':J(0x0, 0x87, 0x0)
                                },  {
                                    'easing':M["backOut"]
                                })["start"]()):aB["getComponent"](a1)["_isActive"]&&(aB["getComponent"](a1)["_isActive"]=!0x1, K(aH)['by'](0.5,  {
                                    'eulerAngles':J(0x0, -0x87, 0x0)
                                },  {
                                    'easing':M["backOut"]
                                })["start"](), K(aI)['by'](0.5,  {
                                    'eulerAngles':J(0x0, 0x87, 0x0)
                                },  {
                                    'easing':M['backOut']
                                })["start"]());
                            }, aK=0x0; aK<az['length']; aK++)aJ(); var aL=S["LAYER_GAME"]['getChildByName']("barrack"); ay=aL["children"][0x0]["active"]&&aL["children"][0x1]['active'];
                        }if(ay)for(var aM=[0x13], aN=0x0; aN<aM['length']; aN++) {
                            var aO=aM[aN]; S['AREA_CTRL']["unlockArea"](aO);
                        }if(this["areaData"]["isExpand"]) {
                            S["GAME_PLAYER_START"]=!0x0, V["playSound"](W["BUILD"]), K(S["CAMERA_3D"])['delay'](U['game_limit_data']["barrack_delay_jump"])["call"](function() {
                                var dc=d7; S["GAME_OVER"]||(S["GAME_OVER"]=!0x0, X["download"](!0x0));
                            })["start"](); for(var aP=[0xb, 0xc, 0xd, 0xe, 0xf, 0x10], aQ=0x0; aQ<aP["length"]; aQ++) {
                                var aR=aP[aQ]; S["AREA_CTRL"]["unlockArea"](aR);
                            }var aS=S["LAYER_GAME"]["getChildByName"]("residence"); aS&&(aS["active"]=!0x0, K(aS)['to'](0.5,  {
                                'position':J(aS["position"]['x'], 0x0, aS["position"]['z'])
                            },  {
                                'easing':"backOut"
                            })["start"]());
                        }for(var aT=this["areaData"]["unlock_tower"], aU=0x0; aU<aT["length"]; aU++) {
                            var aV=aT[aU]; S["TOWER_CTRL"]["unlockTower"](aV);
                        }
                    }else S["GAME_OVER"]||(S["GAME_OVER"]=!0x0, X['download'](!0x0));
                }, ac['lightsOn']=function() {
                    var dd=cU; for(var ad=S['LAYER_ENV']["getChildByName"]('night_lights'), ae=ad['getComponentsInChildren'](O), af=ad['getComponentsInChildren'](P), ag=function(ak) {
                        var df=dd; ae[ak]['node']['active']=!0x0, K(ae[ak])['to'](0x5,  {
                        },  {
                            'onUpdate':function(al, am) {
                                var de=b; ae[ak]["luminance"]=N(ae[ak]["luminance"], 0x2710, am);
                            }
                        })["start"]();
                    }, ah=0x0; ah<ae["length"]; ah++)ag(ah); for(var ai=function(ak) {
                        var dg=dd; af[ak]["node"]["active"]=!0x0, K(af[ak])['to'](0x5,  {
                        },  {
                            'onUpdate':function(al, am) {
                                var dh=dg; af[ak]['luminance']=N(af[ak]["luminance"], 0x2710, am);
                            }
                        })["start"]();
                    }, aj=0x0; aj<af["length"]; aj++)ai(aj);
                }, ac["getRest"]=function() {
                    var di=cU; return this["demandMax"]-this['demand'];
                }, ac['isAreaDone']=function() {
                    var dj=cU; return this["demandPre"]>=this['demandMax'];
                }, ab;
            }(Q))["prototype"], "areaType", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var dk=cS; return Y["Area_1"];
                }
            }), a5=a6))||a5)), B['_RF']["pop"]();
        }
    };
});
