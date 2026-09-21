// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Enemy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameData.ts", "./AudioMgr.ts", "./CoreEventManager.ts", './CoreEventName.ts', "./GameConfig.ts", "./SkelAniName.ts", "./LocationUtil.ts", "./AudioName.ts", "./Coin.ts", './EasyPoolName.ts', "./CharacterBase.ts", "./CharacterType.ts", "./BezierAction.ts"], function(j) {
    var q, x, z, B, F, G, H, J, K, L, Q, R, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac; return {
        'setters':[function(ad) {
            var j4=b; q=ad["applyDecoratedDescriptor"], x=ad['inheritsLoose'], z=ad["initializerDefineProperty"], B=ad["assertThisInitialized"];
        }, function(ad) {
            var j5=b; F=ad["cclegacy"], G=ad["_decorator"], H=ad['Node'], J=ad["Material"], K=ad['MeshRenderer'], L=ad["SkeletalAnimation"], Q=ad["Label"], R=ad['Vec3'], T=ad['v3'], U=ad['tween'], V=ad["Tween"], W=ad["math"], X=ad["easing"], Y=ad['color'], Z=ad['Color'];
        }, function(ad) {
            a0=ad['default'];
        }, function(ad) {
            a1=ad['default'];
        }, function(ad) {
            var j6=b; a2=ad["default"];
        }, function(ad) {
            var j7=b; a3=ad["CoreEventName"];
        }, function(ad) {
            var j8=b; a4=ad["default"];
        }, function(ad) {
            var j9=b; a5=ad["SkelAniName"];
        }, function(ad) {
            var ja=b; a6=ad["LocationUtil3D"];
        }, function(ad) {
            var jb=b; a7=ad["AudioName"];
        }, function(ad) {
            var jc=b; a8=ad["Coin"];
        }, function(ad) {
            var jd=b; a9=ad["EASY_POOL_NAME"];
        }, function(ad) {
            var je=b; aa=ad["CharacterBase"];
        }, function(ad) {
            var jf=b; ab=ad["CharacterType"];
        }, function(ad) {
            var jg=b; ac=ad["BezierAction"];
        }], 'execute':function() {
            var jh=b, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at; F["_RF"]["push"]( {
            }, "c562fsGZp9OFLGErKIrZwKU", "Enemy", void 0x0); var au=G["ccclass"], av=G["property"]; j("Enemy", (ad=au("Enemy"), ae=av( {
                'type':H, 'visible':function() {
                    var ji=jh; return this["isForceMove"];
                }
            }), af=av( {
                'visible':function() {
                    var jj=jh; return this["isForceMove"];
                }
            }), ag=av(J), ah=av(J), ai=av(H), aj=av(K), ad((am=q((al=function(aw) {
                var jl=jh; function ax() {
                    var jk=b; for(var az, aA=arguments['length'], aB=new Array(aA), aC=0x0; aC<aA; aC++)aB[aC]=arguments[aC]; return az=aw["call"]["apply"](aw, [this]["concat"](aB))||this, z(az, "isForceMove", am, B(az)), z(az, "isForceMove_2", an, B(az)), z(az, 'forcePath', ao, B(az)), z(az, 'forcePathIdx', ap, B(az)), z(az, "enemySoldierMatNormal", aq, B(az)), z(az, "enemySoldierMatGray", ar, B(az)), z(az, "weapon", as, B(az)), z(az, "skinMeshRenderer", at, B(az)), az["moveDis"]=0x0, az['_curSkel']=null, az["_path"]=null, az["_pathIdx"]=0x0, az["_curAniName"]='', az["isGuide"]=!0x1, az["_isForceInit"]=!0x1, az["_isForceInit_2"]=!0x1, az["_initWps"]=void 0x0, az["_queueIndex"]=void 0x0, az["_enemyData"]=null, az["isRecycle"]=!0x1, az['_recycleWps']=null, az;
                }x(ax, aw); var ay=ax["prototype"]; return ay["onEnable"]=function() {
                    var jm=jl; a2['on'](a3["USER_TOUCH_DOWN"], this["onGameStart"], this), this["onGameStart2"]();
                }, ay['onDisable']=function() {
                    var jn=jl; a2["off"](a3["USER_TOUCH_DOWN"], this['onGameStart'], this);
                }, ay["updateSkel"]=function() {
                    var jo=jl; this["_curSkel"]&&(this["_curSkel"]["node"]["active"]=!0x1), this["_curSkel"]=this['node']['getChildByName']("skel")["getComponent"](L), this["_curSkel"]["node"]["active"]=!0x0; var az=this["_curSkel"]["node"]["getChildByName"]('shadow_type_0'); az&&(az["active"]=!0x0);
                }, ay["onGameStart"]=function() {
                    var jp=jl; this["isForceMove"]&&!this["_isForceInit"]&&(this["_enemyData"]=JSON["parse"](JSON['stringify'](a0["enemy_init_data"])), this['_isForceInit']=!0x0, this["_path"]=this["forcePath"], this["_pathIdx"]=this["forcePathIdx"], this['moveDis']=0x0, this["updateInfo"](), this["updateSkel"](), this['move']());
                }, ay["onGameStart2"]=function() {
                    var jq=jl; this['isForceMove_2']&&!this["_isForceInit_2"]&&(this["_enemyData"]=JSON["parse"](JSON['stringify'](a0["enemy_init_data_2"])), this["_isForceInit_2"]=!0x0, this['_path']=this["forcePath"], this['_pathIdx']=this['forcePathIdx'], this["moveDis"]=0x0, this["updateInfo"](), this["updateSkel"](), this["move"]());
                }, ay['updateAniState']=function(az) {
                    var jr=jl; this['_curSkel']||this["updateSkel"](), this["_curAniName"]=az, this["_curSkel"]["getState"](this["_curAniName"])["isPlaying"]||this["_curSkel"]["play"](this["_curAniName"]);
                }, ay["init"]=function(az, aA, aB, aC) {
                    var js=jl, aD=this; this["scheduleOnce"](function() {
                        var jt=js; aD["isRecycle"]=!0x1;
                    }, 0x1), this["node"]["getChildByName"]("area_demand_lbl")&&(this["node"]["getChildByName"]('area_demand_lbl')["getComponent"](Q)['string']=aC+''), this['weapon']["active"]=!0x0, this["_path"]=az, this["_pathIdx"]=0x0, this["_initWps"]=aA, this["_enemyData"]=null, this["node"]["worldPosition"]=aA, this["node"]['eulerAngles']=R["ZERO"], this["_enemyData"]=JSON["parse"](JSON["stringify"](aB)), this['moveDis']=0x0, this['updateInfo'](), this['updateSkel'](), this["setMatNormal"](); var aE=this['_path']["children"][this['_pathIdx']]; aE&&a6["lookAtByHorizontal"](this['node'], aE), this['characterType']==ab['CharacterType_PlayerSoldier']&&(this["playNormalFlash"](), 0x7==aC&&(this["skinMeshRenderer"]['node']["parent"]["eulerAngles"]=T(0x0, 0xb4, 0x14)), 0x6==aC&&(this['skinMeshRenderer']["node"]['parent']["eulerAngles"]=T(0x0, 0xb4, -0x14))), this["move"]();
                }, ay["resetPath"]=function(az, aA) {
                    var ju=jl; this["_path"]=az, this['_pathIdx']=aA, this["move"]();
                }, ay["updateInfo"]=function() {
                    var jv=jl; this["_enemyData"]&&(this['hp']=this["_enemyData"]['hp'], this["hpPre"]=this["_enemyData"]['hp'], this["hpMax"]=this["_enemyData"]['hp']);
                }, ay['move']=function() {
                    var jw=jl, az=this; this['characterType']==ab["CharacterType_PlayerSoldier"]&&a1['playShotSound'](a7['CAVALRY_OUT'], 0.3, 0xc8); var aA=this["_path"]['children'][this['_pathIdx']]; if(aA) {
                        this["updateAniState"](a5["COMMON_ANI_MOVE"]); var aB=a6["getDistanceHorizontal"](this["node"], aA)/this["_enemyData"]["move_speed"]; a6["rotateToTarget"](0.2, this["node"], this["node"]["getWorldPosition"](), T(aA["getWorldPosition"]()['x'], this["node"]["worldPosition"]['y'], aA["getWorldPosition"]()['z'])); var aC=this; U(this["node"])['to'](aB,  {
                            'worldPosition':T(aA['worldPosition']['x'], this["node"]["worldPosition"]['y'], aA["worldPosition"]['z'])
                        },  {
                            'onUpdate':function(aD, aE) {
                                var jx=jw; aC["moveDis"]+=aC["_enemyData"]["move_speed"]*aE;
                            }
                        })["call"](function() {
                            var jy=jw; az["_pathIdx"]++, az["move"]();
                        })["start"]();
                    }else this['characterType']!=ab["CharacterType_PlayerSoldier"]&&a4["CASTLE"]["onDamage"](this["_enemyData"]['atk']), this["recycle"]();
                }, ay["updateLookAt"]=function(az) {
                    var jz=jl; if(this['hp']&&this["_path"]&&this["_path"]["children"][this['_pathIdx']]) {
                        var aA=new R(); R["subtract"](aA, this["_path"]["children"][this["_pathIdx"]]["getWorldPosition"](), this["node"]["getWorldPosition"]()), this["node"]["forward"]=this["node"]["forward"]["lerp"](T(aA['x'], 0x0, aA['z']), 0.1);
                    }
                }, ay["die"]=function() {
                    var jA=jl; V["stopAllByTarget"](this["node"]), this["isEnemyInfantry"]()||this["isPlayerInfantry"]()?(this['weapon']["active"]=!0x1, this["shootBack"](), this["createCoins"]()):this["isEnemyElite"]()&&(this["createCoins"](), this["recycle"]()); var az=this["_curSkel"]['node']["getChildByName"]("shadow_type_0"); az&&(az["active"]=!0x1);
                }, ay["createCoins"]=function() {
                    var jB=jl; a1["playShotSound"](a7["COIN_GET"], 0.5, 0xc8); for(var az=W["randomRangeInt"](this["_enemyData"]["coins"][0x0], this["_enemyData"]['coins'][0x1]), aA=0x0; aA<az; aA++) {
                        var aB=a4["EASY_POOL"]["get"](a9["COIN"]); a4["LAYER_COIN"]['addChild'](aB); var aC=this["node"]["getChildByName"]("coins_create_pos")["getWorldPosition"](); aB["getComponent"](a8)["init"](aC);
                    }
                }, ay["shootBack"]=function() {
                    var jC=jl, az=this; if(this['atkStarter']) {
                        this["setMatGray"](), this["atkStarter"]["getComponent"](ax)?this["scheduleOnce"](function() {
                            var jD=jC; a1["playShotSound"](a7["COLLISION"], 0.5, 0x50), az["playWhiteFlash"]();
                        }, 0x0):a1["playShotSound"](a7["ENEMY_DIE"], 0.5, 0xc8), this['_curSkel']["stop"](), a6["lookAtByHorizontal"](this["node"], this["atkStarter"]); var aA=new R(); R["subtract"](aA, this["node"]["worldPosition"], T(this["atkStarter"]["worldPosition"]['x'], this["node"]["worldPosition"]['y'], this["atkStarter"]["worldPosition"]['z'])), aA["normalize"](); var aB=this["node"]["getWorldPosition"](), aC=T(this["node"]["worldPosition"]['x']+0x5*aA['x'], this['node']["worldPosition"]['y']+0.5, this["node"]['worldPosition']['z']+0x5*aA['z']), aD=ac["bezierWpsMove"](this["node"], 0.4, aB, aC, T(0x0, W["randomRange"](0x8, 0xa), 0x0), X['circOut']); this['updateAniState'](a5["COMMON_ANI_DIE"]), (aD["call"](function() {
                            var jE=jC; az["setMatGray"]();
                        })["delay"](0.5)['call'](function() {
                            var jF=jC; az["recycle"]();
                        })['start'](), 0x1==a4['PLAYER']["guideNum"]&&a4["PLAYER"]["checkGuideShow"]());
                    }
                }, ay['setMatNormal']=function() {
                    var jG=jl; this['characterType']!=ab["CharacterType_EnemySoldier"]&&this["characterType"]!=ab["CharacterType_PlayerSoldier"]||(this['skinMeshRenderer']["material"]=this["enemySoldierMatNormal"]);
                }, ay["setMatGray"]=function() {
                    var jH=jl; this["characterType"]!=ab["CharacterType_EnemySoldier"]&&this["characterType"]!=ab["CharacterType_PlayerSoldier"]||(this["skinMeshRenderer"]["material"]=this["enemySoldierMatGray"]);
                }, ay["recycle"]=function() {
                    var jI=jl; this["isRecycle"]=!0x0, this["_recycleWps"]=this['node']["getWorldPosition"](), a4["EASY_POOL"]['put'](this['node']);
                }, ay['getRecycleWps']=function() {
                    var jJ=jl; return this["_recycleWps"];
                }, ay["getPathIdx"]=function() {
                    var jK=jl; return this["_pathIdx"];
                }, ay["getData"]=function() {
                    var jL=jl; return this["_enemyData"];
                }, ay["emissiveFade"]=function(az, aA, aB, aC) {
                    var jM=jl; void 0x0===aC&&(aC=null); var aD="emissive", aE=aA["getProperty"](aD); aE&&(V['stopAllByTarget'](aA), U(aA)['to'](az,  {
                    },  {
                        'onUpdate':function(aF, aG) {
                            var jN=jM, aH=W["lerp"](aE['r'], aB['r'], aG), aI=W["lerp"](aE['g'], aB['g'], aG), aJ=W["lerp"](aE['b'], aB['b'], aG), aK=W["lerp"](aE['a'], aB['a'], aG); aA['setProperty'](aD, Y(aH, aI, aJ, aK));
                        }
                    })["call"](function() {
                        aC&&aC();
                    })["start"]());
                }, ay['playWhiteFlash']=function() {
                    var jO=jl, az=this; this['skinMeshRenderer']["material"]["setProperty"]('emissive', Y(0xff, 0xff, 0xff, 0x64)), this["scheduleOnce"](function() {
                        az['playNormalFlash']();
                    }, 0.2);
                }, ay['playNormalFlash']=function() {
                    var jP=jl; this["skinMeshRenderer"]["material"]["setProperty"]('emissive', Z["BLACK"]);
                }, ay["onDamage"]=function(az, aA, aB) {
                    var jQ=jl; void 0x0===aA&&(aA=null), void 0x0===aB&&(aB=!0x1), this["atkStarter"]=aA, aB?this["playWhiteFlash"]():this["playDmgVfx"](), this['hp']&&(this['hp']-=az, this['hp']<=0x0&&(this['hp']=0x0, this['die']()));
                }, ax;
            }(aa))["prototype"], "isForceMove", [av],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), an=q(al["prototype"], "isForceMove_2", [av],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), ao=q(al["prototype"], "forcePath", [ae],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ap=q(al["prototype"], 'forcePathIdx', [af],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), aq=q(al["prototype"], "enemySoldierMatNormal", [ag],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ar=q(al["prototype"], "enemySoldierMatGray", [ah],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), as=q(al["prototype"], "weapon", [ai],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), at=q(al["prototype"], "skinMeshRenderer", [aj],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ak=al))||ak)), F["_RF"]["pop"]();
        }
    };
});
