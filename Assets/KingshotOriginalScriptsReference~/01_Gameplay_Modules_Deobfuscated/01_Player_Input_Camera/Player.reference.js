// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Player.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', './CharacterBaseObj3D.ts', "./World.ts", "./CoinBurst.ts", './TimerAction.ts', "./GameConfig.ts", "./Debug.ts", "./GameData.ts", './SkelAniName.ts', "./AudioMgr.ts", "./AudioName.ts", "./LocationUtil.ts", "./EasyPoolName.ts", "./Area2.ts", "./BezierAction.ts", './Enemy.ts', "./Coin.ts", "./JoystickCustom.ts", "./Arrow.ts", './CoreEventManager.ts', "./CoreEventName.ts", './Door.ts', "./GuideArrow.ts"], function(q) {
    var F, J, K, Q, X, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC; return {
        'setters':[function(aD) {
            var tZ=b; F=aD["applyDecoratedDescriptor"], J=aD["inheritsLoose"], K=aD["initializerDefineProperty"], Q=aD["assertThisInitialized"];
        }, function(aD) {
            var u0=b; X=aD["cclegacy"], Z=aD["_decorator"], a0=aD["Node"], a1=aD["SkeletalAnimation"], a2=aD["Vec3"], a3=aD["Quat"], a4=aD['MeshRenderer'], a5=aD['v3'], a6=aD['easing'], a7=aD["isValid"], a8=aD['Input'], a9=aD["tween"], aa=aD["lerp"], ab=aD["toRadian"], ac=aD['clamp'], ad=aD['Mat4'], ae=aD["Color"], af=aD['Tween'], ag=aD["math"];
        }, function(aD) {
            var u1=b; ah=aD["CharacterBaseObj3D"];
        }, function(aD) {
            var u2=b; ai=aD["World"];
        }, function(aD) {
            aj=aD['CoinBurst'];
        }, function(aD) {
            var u3=b; ak=aD["TimerAction"];
        }, function(aD) {
            var u4=b; al=aD["default"];
        }, function(aD) {
            var u5=b; am=aD["Debug"];
        }, function(aD) {
            var u6=b; an=aD["default"];
        }, function(aD) {
            var u7=b; ao=aD["SkelAniName"];
        }, function(aD) {
            ap=aD['default'];
        }, function(aD) {
            var u8=b; aq=aD["AudioName"];
        }, function(aD) {
            var u9=b; ar=aD["LocationUtil3D"];
        }, function(aD) {
            as=aD['EASY_POOL_NAME'];
        }, function(aD) {
            var ua=b; at=aD["Area"];
        }, function(aD) {
            var ub=b; au=aD["BezierAction"];
        }, function(aD) {
            av=aD['Enemy'];
        }, function(aD) {
            var uc=b; aw=aD["Coin"];
        }, function(aD) {
            ax=aD['JoystickCustom'];
        }, function(aD) {
            var ud=b; ay=aD["Arrow"];
        }, function(aD) {
            var ue=b; az=aD["default"];
        }, function(aD) {
            var uf=b; aA=aD["CoreEventName"];
        }, function(aD) {
            var ug=b; aB=aD["Door"];
        }, function(aD) {
            var uh=b; aC=aD["GuideArrow"];
        }], 'execute':function() {
            var ui=b, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9; X["_RF"]['push']( {
            }, "dc368GKLMBJ7rqBHNpuDtXN", "Player", void 0x0); var ba=Z["ccclass"], bb=Z["property"]; q('Player', (aD=ba('Player'), aE=bb(ai), aF=bb(ax), aG=bb(a0), aH=bb(a0), aI=bb( {
                'min':0x0
            }), aJ=bb( {
                'min':0x0, 'max':0x5a
            }), aK=bb( {
                'min':0x0
            }), aL=bb(a0), aM=bb(a0), aN=bb(a0), aO=bb(a0), aP=bb(a1), aQ=bb(a1), aR=bb(aj), aD((aU=F((aT=function(bc) {
                var uk=ui; function bd() {
                    var uj=b; for(var bf, bg=arguments['length'], bh=new Array(bg), bi=0x0; bi<bg; bi++)bh[bi]=arguments[bi]; return bf=bc["call"]["apply"](bc, [this]["concat"](bh))||this, K(bf, "boundDebug", aU, Q(bf)), K(bf, "world", aV, Q(bf)), K(bf, 'joystick', aW, Q(bf)), K(bf, "kingBody", aX, Q(bf)), K(bf, "horseBody", aY, Q(bf)), K(bf, 'maxSpeed', aZ, Q(bf)), K(bf, "slopeLimit", b0, Q(bf)), K(bf, "stepOffset", b1, Q(bf)), K(bf, "gravity", b2, Q(bf)), bf["angle"]=0x0, bf['vertical']=0x0, bf["velocity"]=new a2(), bf["direction"]=new a2(0x0, 0x0, 0x0), bf["surfaceNormal"]=new a2(0x0, 0x1, 0x0), bf["sample"]=0x0, bf["isMoving"]=!0x1, bf["rayDir"]=new a2(), bf["curSpeed"]=0x0, bf['_rot']=new a3(), bf['_dir']=new a2(), bf["_vector"]=new a2(), bf["isRayCast"]=!0x1, K(bf, 'bowArrowBorn', b3, Q(bf)), K(bf, "coinsLayer", b4, Q(bf)), K(bf, "coinsDropPos", b5, Q(bf)), K(bf, "coinParent", b6, Q(bf)), K(bf, 'kingSkeAni', b7, Q(bf)), K(bf, "horseSkeAni", b8, Q(bf)), K(bf, "coinBurst", b9, Q(bf)), bf["_curAniName"]='', bf["_curEnemy"]=void 0x0, bf["_enemyShoot"]=void 0x0, bf['_coinGetPos']=null, bf["_isMoveStart"]=!0x1, bf["_isGameStart"]=!0x1, bf["_atkCd"]=0x0, bf["timeGetCoins"]=new ak(Q(bf), 0x64, bf['searchingCoin']), bf["timeDropGoods"]=new ak(Q(bf), 0x3e8*an["player_data"]["drop_area_sub"], bf['updateDropArea']), bf["guideNum"]=0x0, bf['_targetRotate']=null, bf["_targetRotateLerp"]=0.15, bf['v3Temp']=new a2(0x0, 0x0, 0x0), bf["v3MoveUp"]=new a2(0x0, 0x1, 0x0), bf['v3Avg']=new a2(0x0, 0x0, 0x0), bf["_curArea"]=null, bf["_curDropNum"]=0x0, bf["_dropAreaNum"]=0x0, bf;
                }J(bd, bc); var be=bd['prototype']; return be["onLoad"]=function() {
                    var ul=uk; az['on'](aA["USER_TOUCH_DOWN"], this["onGameStart"], this), bc["prototype"]['onLoad']["call"](this), this["initData"]();
                }, be["onGameStart"]=function() {
                    this['_isGameStart']=!0x0;
                }, be['start']=function() {
                    var um=uk; if(this["initJoystick"](), this["boundDebug"]) {
                        var bf=new a0("DebugCollider"); bf["addComponent"](a4)["mesh"]=this["meshCollider"], this['node']["addChild"](bf);
                    }this["playIdle"](this["horseSkeAni"]), this['playIdle'](this["kingSkeAni"]), this["activeSearchEnemy"](), this['initGuide']();
                }, be["initGuide"]=function() {
                    var un=uk; for(var bf=0x0; bf<an["player_data"]["coins"]; bf++)this["recreateCoin"](); var bg=al["NAV_LINE_COMP"], bh=al['GUIDE_ARROW'], bi=al['AREA_CTRL']["getArea"](0x1)['node']["getChildByName"]("guide_target"); bg["navStart"](this['node'], bi), bh["guideStart"](this["node"], bi, 0xf, 0x2);
                }, be["checkEnemy"]=function() {
                    var uo=uk; if(this['_isGameStart']&&!(this["_atkCd"]>0x0)) {
                        if(this["_enemyShoot"]) {
                            var bf=al['ENEMY_CTRL']["isEnemyInRange"](this["_enemyShoot"]['arrowTarget'], this["node"], an['player_data']["atk_range"]), bg=al["ENEMY_CTRL"]["isEnemyValidPre"](this["_enemyShoot"]["arrowTarget"]); bf&&bg||(this["_enemyShoot"]=null);
                        }if(!this["_enemyShoot"])for(var bh=al['ENEMY_CTRL']["getAllEnemy"](), bi=al["FENSE_CTRL"]["getDoor"](0x1)["getChildByName"]('door')['getComponent'](aB), bj=al['FENSE_CTRL']["getDoor"](0x4)["getChildByName"]('door')['getComponent'](aB), bk=0x0; bk<bh["length"]; bk++) {
                            var bl=bh[bk], bm=al['ENEMY_CTRL']["isEnemyInRange"](bl, this['node'], an['player_data']["atk_range"]), bn=al['ENEMY_CTRL']["isEnemyValidPre"](bl); if(bi["isDestory"]&&bj["isDestory"]) {
                                var bo=al["CASTLE"]["node"]; if(ar["getDistanceHorizontal"](bl, bo)<0x7)continue;
                            }else {
                                if(ar["getDistanceHorizontal"](bl, bi['node'])<0x6)continue;
                            }if(bm&&bn) {
                                this["_enemyShoot"]= {
                                    'arrowTarget':bl, 'arrowAtk':an['player_data']["atk"]
                                }; break;
                            }
                        }this['_enemyShoot']?this["playAtk"]():this["isMoving"]?this["updateAniState"](this['kingSkeAni'], ao["COMMON_ANI_MOVE"]):this["updateAniState"](this["kingSkeAni"], ao['COMMON_ANI_IDLE']);
                    }
                }, be["activeSearchEnemy"]=function() {
                    var up=uk; this["schedule"](this["checkEnemy"], 0x1/0x3c);
                }, be["disableSearchEnemy"]=function() {
                    var uq=uk; this["unschedule"](this["checkEnemy"]);
                }, be["playAtk"]=function() {
                    var ur=uk; if(this['_enemyShoot']) {
                        this['_enemyShoot']["arrowTarget"]["getComponent"](av)["hpPre"]-=an["player_data"]["atk"]; var bf=this['_enemyShoot']['arrowTarget'], bg=this["kingBody"]["getWorldPosition"](), bh=bf['getWorldPosition'](); ar['rotateToTarget'](an["player_data"]["atk_rotate_speed"], this["kingBody"], bg, a5(bh['x'], bg['y'], bh['z']), a6["linear"], function() {
                        }), this['updateAniState'](this["kingSkeAni"], ao["COMMON_ANI_ATK"]), this['disableSearchEnemy']();
                    }
                }, be['isEnemyValid']=function(bf) {
                    var us=uk; return!(!a7(bf)||bf['getComponent'](av)['isDead']()||bf["getComponent"](av)["isRecycle"]);
                }, be['isEnemyInRange']=function(bf) {
                    var ut=uk; if(a7(bf)&&ar['getDistanceHorizontal'](bf, this['node'])<an["player_data"]["atk_range"])return!0x0; return!0x1;
                }, be["reset"]=function() {
                    var uu=uk; this["playIdle"](this["horseSkeAni"]), this["playIdle"](this["kingSkeAni"]), this["node"]['position']=new a2(0x0, 0x3c, 0x0), this["node"]['rotation']=a3["IDENTITY"], this["surfaceNormal"]["set"](0x0, 0x1, 0x0), this['velocity']['set'](a2['ZERO']), this["vertical"]=0x0;
                }, be["rotateHorse"]=function(bf) {
                    var uv=uk; this["horseBody"]&&(this["_targetRotate"]=a3["fromAxisAngle"](this["_rot"], a2['UNIT_Y'], bf-Math['PI']/0x2));
                }, be["initJoystick"]=function() {
                    var uw=uk, bf=this; this["joystick"]&&this["joystick"]["init"](function(bg) {
                        var ux=uw, bh=bg["angle"]; bg["ratio"]; switch(bg["type"]) {
                            case a8['EventType']["TOUCH_START"]:if(al["GAME_OVER"])return; bf['curSpeed']=0x0, bf["velocity"]["set"](a2["ZERO"]), bf["direction"]["set"](a2["ZERO"]); break; case a8["EventType"]["TOUCH_MOVE"]:if(al['GAME_OVER'])return; bf["updateAniState"](bf['horseSkeAni'], ao['COMMON_ANI_MOVE']), bf["_isMoveStart"]||(bf["_isMoveStart"]=!0x0, bf["timeGetCoins"]["run"]()), bf["angle"]=bh, bf["curSpeed"]=aa(bf["curSpeed"], bf["maxSpeed"], an["player_data"]["move_speed_a"]), bh=-(ab(bf["node"]["eulerAngles"]['y'])+bh+Math['PI']), bf["direction"]["set"](Math["cos"](bh)*bf["curSpeed"], 0x0, Math['sin'](bh)*bf["curSpeed"]), bf["rayDir"]["set"](bf['direction']), bf["isMoving"]=!0x0, bf['rotateHorse'](bf["angle"]); break; case a8["EventType"]["TOUCH_END"]:bf["updateAniState"](bf["horseSkeAni"], ao["COMMON_ANI_IDLE"]), bf['isMoving']=!0x1, bf["velocity"]["set"](a2["ZERO"]), a9(bf['direction'])['to'](an["player_data"]["move_stop_time"],  {
                            },  {
                                'onUpdate':function(bi, bj) {
                                    var uy=ux; a2["lerp"](bi, bi, a2['ZERO'], bj);
                                }
                            })['start']();
                        }
                    });
                }, be["checkRays"]=function() {
                    var uz=uk; if(this["isRayCast"])for(var bf=new a2(), bg=this["getWorldPosition"](), bh=this["node"]['children'][0x0]['getWorldRotation'](), bi=a2["transformQuat"](new a2(), new a2(0x0, 0x0, 0x1), bh), bj=0x0; bj<0x3e8; bj++) {
                        a2["rotateY"](bf, bi, a2['ZERO'], 0x0+bj*Math['PI']*0x2/0x3e8); var bk=[bg['x'], bg['y'], bg['z'], bf['x'], bf['y'], bf['z'], 0x64]; this['world']["rayCast"](bk, 0xffffffff, !0x0);
                    }
                }, be['onUpdatePosition']=function(bf) {
                    var uA=uk; if(!al["GAME_OVER"]) {
                        a2["projectOnPlane"](this['velocity'], this["direction"], this["surfaceNormal"]), bf=ac(bf, 0x0, 0.032), this['v3Temp']=this["node"]["getPosition"](); var bg=this["velocity"], bh=this["gravity"], bi=this['v3Temp']['x']+bg['x']*bf+bh['x']*bf*bf/0x2, bj=this["v3Temp"]['y']+bg['y']*bf+this["vertical"]*bf+bh['y']*bf*bf/0x2, bk=this["v3Temp"]['z']+bg['z']*bf+bh['z']*bf*bf/0x2; this["vertical"]+=bh['y']*bf, this["v3Temp"]["set"](bi, bj, bk), this['setPosition'](this["v3Temp"]["clone"]()); var bl=!0x1; this["surfaceNormal"]["set"](0x0, 0x1, 0x0); for(var bm=Math["cos"](ab(this["slopeLimit"])), bn=this["world"]['objectQuery'](this, !0x0), bo=0x0; bo<bn['length']; bo++) {
                            var bp=bn[bo], bq=this["world"]["collision"]["GJK"](this, bp); if(bq) {
                                this["v3MoveUp"]["set"](0x0, 0x1, 0x0); var br=bq["dir"], bs=bq["dist"], bt=this["v3MoveUp"]["dot"](br), bu=!!bp["isBox"]||this["v3MoveUp"]["dot"](bp["getWorldNormal"]())>=bm; if(bt>=bm&&bu) {
                                    this["v3MoveUp"]["multiplyScalar"](bs); var bv=this["v3Temp"]['add'](this["v3MoveUp"]); this["setPosition"](bv), this['surfaceNormal']["set"](br), this["v3Avg"]["set"](br);
                                }else {
                                    var bw=bp["getWorldBound"](), bx=this['getWorldBound'](); if(this["v3MoveUp"]['set'](br)['multiplyScalar'](bs), this["isMoving"])bw[0x4]-bx[0x1]<this["stepOffset"]?(this['v3MoveUp']['y']=0x0, br['add'](a2["UNIT_Y"])["normalize"](), this['surfaceNormal']["set"](br), this["v3Avg"]["set"](br)):this["v3MoveUp"]['y']=0x0; var by=this["v3Temp"]['add'](this["v3MoveUp"]); this["setPosition"](by);
                                }bl=!0x0, bp["obj3D"]["debug"]&&am["addBox"](bp['getWorldBound'](), ad["IDENTITY"], bp['isBox']?ae["RED"]:ae['CYAN']);
                            }
                        }if(bl) {
                            this["v3Avg"]["normalize"](); var bz=this["v3Avg"]['dot'](a2["UNIT_Y"]); bz>0x0&&(this['vertical']*=0x1-bz);
                        }else this["velocity"]['y']=0x0;
                    }
                }, be["update"]=function(bf) {
                    var uB=uk; this["timeGetCoins"]["update"](bf), this["timeDropGoods"]["update"](bf), this["onUpdatePosition"](bf), this["updateRotate"](bf), this['updateAtkCd'](bf);
                }, be['updateAtkCd']=function(bf) {
                    var uC=uk; this["_atkCd"]&&(this["_atkCd"]-=bf, this["_atkCd"]<0x0&&(this["_atkCd"]=0x0));
                }, be['updateRotate']=function(bf) {
                    var uD=uk; if(this["_targetRotate"]) {
                        var bg=new a3(); a3["slerp"](bg, this["horseBody"]["rotation"], this["_targetRotate"], this["_targetRotateLerp"]*bf/(0x1/0x3c)), this["horseBody"]["rotation"]=bg, this['_enemyShoot']||(this['kingBody']["rotation"]=bg);
                    }
                }, be["onAtkShoot"]=function() {
                    this['shootArrow']();
                }, be["initData"]=function() {
                    var uE=uk; this['hp']=an["player_data"]['hp'], this["hpMax"]=an["player_data"]['hp'], this["_coinGetPos"]=this["node"]["getChildByName"]('coin_get_pos'), this["maxSpeed"]=an["player_data"]["move_speed"];
                }, be['updateAniState']=function(bf, bg) {
                    var uF=uk; this['_curAniName']=bg, bf["getState"](this['_curAniName'])["isPlaying"]||(this["_curAniName"]==ao["COMMON_ANI_ATK"]&&(bf['getState'](this['_curAniName'])['speed']=an["player_data"]['atk_speed']), bf["uuid"]==this['horseSkeAni']["uuid"]&&this["_curAniName"]==ao["COMMON_ANI_MOVE"]?ap["playSound"](aq["HORSE_STEP"], 0.7, !0x0):bf['uuid']==this['horseSkeAni']["uuid"]&&ap['stopSound'](aq['HORSE_STEP']), bf['play'](this["_curAniName"]));
                }, be['playIdle']=function(bf) {
                    var uG=uk; this["updateAniState"](bf, ao["COMMON_ANI_IDLE"]);
                }, be["playMove"]=function(bf) {
                    var uH=uk; this["updateAniState"](bf, ao["COMMON_ANI_MOVE"]);
                }, be["searchingCoin"]=function() {
                    var uI=uk; this["updateGetCoins"]();
                }, be["getEnemyFront"]=function(bf) {
                    var uJ=uk; for(var bg=null, bh=-0xf423f, bi=0x0; bi<bf["length"]; bi++) {
                        var bj=bf[bi]; bj["worldPosition"]['z']>bh&&(bg=bj, bh=bj["worldPosition"]['z']);
                    }return bg;
                }, be['onGetCoinsByAll']=function() {
                    var uK=uk; for(var bf=0x0; bf<this["coinsLayer"]["children"]["length"]; bf++) {
                        var bg=this["coinsLayer"]["children"][bf], bh=bg["getComponent"](aw)["isSuck"], bi=bg['getComponent'](aw)["isJump"]; if(!bh&&!bi) {
                            var bj=ar["getDistanceHorizontal"](this['node'], bg); bj>an['player_data']["coins_mag_range_min"]&&bj<an['player_data']["coins_mag_range_max"]&&this["getCoin"](bg);
                        }
                    }
                }, be['updateGetCoins']=function() {
                    this['onGetCoinsByAll']();
                }, be["shootArrow"]=function() {
                    var uL=uk, bf=this; this['_atkCd']=an["player_data"]["atk_cd"], this["updateAniState"](this['kingSkeAni'], ao['COMMON_ANI_IDLE']); var bg=al["EASY_POOL"]["get"](as["PLAYER_BOW_ARROW"]); bg&&a7(bg)?(al["Canvas_3d"]['addChild'](bg), bg["getComponent"](ay)["init"](this["bowArrowBorn"], this["_enemyShoot"], function() {
                        var uM=uL; bf["activeSearchEnemy"]();
                    })):this["activeSearchEnemy"]();
                }, be['showCoinBurst']=function() {
                    var uN=uk; this["coinBurst"]["getComponent"](aj)["showCoinBurst"]();
                }, be["getArea"]=function() {
                    return this['_curArea'];
                }, be["dropArea"]=function(bf) {
                    var uO=uk; if(this["_curArea"]=bf, this["_curArea"]["getComponent"](at)["checkAreaDone"]())this["cancelDropArea"](bf); else {
                        this["_curDropNum"]=0x1; var bg=an["player_data"]["coins"], bh=this["_curArea"]["getComponent"](at)["getRest"](), bi=0x0; (bi=bg>=bh?bh:bg)>an['area_limit_data']["area_item_drop_limit"]&&(this['_curDropNum']=Math["ceil"](bi/an["area_limit_data"]["area_item_drop_limit"])), this["timeDropGoods"]["reset"]();
                    }
                }, be["cancelDropArea"]=function(bf) {
                    var uP=uk; this["_curArea"]=null, this["timeDropGoods"]["stop"]();
                }, be["updateDropArea"]=function() {
                    var uQ=uk, bf=this; if(this["_curArea"]&&an["player_data"]["coins"]>=an["game_unit_data"]["coins_unit"]) {
                        var bg=this["_curArea"], bh=bg["getChildByName"]("guide_target"); this["checkGuideHide"](bh); for(var bi=function() {
                            var uR=uQ; if(bg["getComponent"](at)['isAreaDone']())return 0x1; var bk=bf["coinParent"]["children"][bf["coinParent"]["children"]["length"]-0x1]; bk&&bf["coinParent"]["children"]["length"]==an["player_data"]["coins"]&&al["EASY_POOL"]['put'](bk), an["player_data"]["coins"]-=an["game_unit_data"]["coins_unit"], bf["checkDeleteAllCoins"](), !(an['player_data']['coins']<0x0)||(an["player_data"]["coins"]=0x0), bg["getComponent"](at)["preFill"](an["game_unit_data"]['coins_unit']); var bl=al["EASY_POOL"]["get"](as["COIN"]); ar["addChildToOtherWorld"](bl, al['Canvas_3d']), af["stopAllByTarget"](bl); var bm=an['player_data']['drop_area_time'], bn=bg["getWorldPosition"](), bo=a5(0x0, ag['randomRange'](0x19, 0x1e), 0x0), bp=a5(bf["coinParent"]["worldPosition"]['x'], 0.7*bf['coinParent']["children"]['length'], bf["coinParent"]["worldPosition"]['z']), bq=au["bezierWpsMove"](bl, bm, bp, bn, bo, a6["linear"]); bl["eulerAngles"]=a5(0x0, 0x78, -0x5a), a9(bl)['by'](bm*(0x2/0x3),  {
                                'eulerAngles':a5(0x0, 0x0, -0x168)
                            })["start"](), bl['setScale'](a5(0x1, 0x1, 0x1)), a9(bl)["sequence"](bq, a9(bl)["call"](function() {
                                var uS=uR; ap["playShotSound"](aq['COIN_DROP_AREA'], 0.85, 0x64), bl["getComponent"](aw)["recycle"](), bg["getComponent"](at)["fill"](an['game_unit_data']['coins_unit']);
                            }))["start"]();
                        }, bj=0x0; bj<this["_curDropNum"]&&!bi(); bj++);
                    }
                }, be["checkGuide"]=function() {
                }, be['getGuideArea']=function() {
                    var uT=uk; for(var bf=[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7], bg=0x0; bg<bf['length']; bg++)al["LAYER_AREA"]["children"][bg-0x1];
                }, be["getCoin"]=function(bf) {
                    var uU=uk, bg=this; bf["getComponent"](aw)["isSuck"]=!0x0, af["stopAllByTarget"](bf), bf["eulerAngles"]=a5(0x0, 0x0, 0x0); var bh=an['player_data']["coins_suck_speed"]; bf["eulerAngles"]=a5(0x0, 0x0, -0x5a), a9(bf)['by'](bh/0x2,  {
                        'eulerAngles':a5(0x168, 0x168, 0x168)
                    })['start'](); var bi=a5(ag["randomRange"](-0x1, 0x1), ag["randomRange"](0x2d, 0x37), ag["randomRange"](-0x1, 0x1)); au["bezierWpsMove"](bf, bh, bf["getWorldPosition"](), function() {
                        var uV=uU; return a5(bg["coinParent"]["worldPosition"]['x'], 0.7*bg["coinParent"]['children']['length'], bg["coinParent"]["worldPosition"]['z']);
                    }, bi, a6["linear"])["call"](function() {
                        var uW=uU; ap["playShotSound"](aq["COIN_DROP"], 0x1, 0xc8), al['EASY_POOL']['put'](bf), bg["recreateCoin"](), an["player_data"]["coins"]+=an["game_unit_data"]["coins_unit"], bg["checkGuideShow"]();
                    })["start"]();
                }, be["recreateCoin"]=function() {
                    var uX=uk; if(!(this["coinParent"]["children"]["length"]>an["player_data"]["carry_coin_max"])) {
                        var bf=this["coinParent"]["children"]["length"], bg=al["EASY_POOL"]["get"](as["COIN"]); this["coinParent"]["addChild"](bg), bg["setPosition"](a5(0x0, 0.7*bf, 0x0)), bg["setScale"](a2["ZERO"]), bg["eulerAngles"]=a5(0x0, 0x0, -0x5a), a9(bg)['to'](0.1,  {
                            'scale':a2["ONE"]
                        },  {
                            'easing':a6['backOut']
                        })["start"]();
                    }
                }, be["checkDeleteAllCoins"]=function() {
                    var uY=uk; if(!an["player_data"]['coins']) {
                        for(var bf=0x0; bf<this["coinParent"]["children"]["length"]; bf++)af['stopAllByTarget'](this["coinParent"]["children"][bf]), al["EASY_POOL"]['put'](this["coinParent"]["children"][bf]);
                    }
                }, be["checkGuideShow"]=function(bf) {
                    var uZ=uk; if(void 0x0===bf&&(bf=null), 0x0!=this['guideNum']) {
                        var bg=al['NAV_LINE_COMP'], bh=al["GUIDE_ARROW"]; if(bg) {
                            for(var bi=al["LAYER_AREA"]["children"], bj=0x0; bj<bi['length']; bj++) {
                                var bk=bi[bj]; if(bk['active']) {
                                    var bl=bk['getComponent'](at)["getRest"](), bm=bk["getComponent"](at)["isAreaDone"](); if(bl<=an["player_data"]["coins"]&&bl>0x0&&!bm||0x3==this["guideNum"]&&al["GOLD_MINE_CTRL"]["nodeHubGold"]['isNull']()) {
                                        this["guideNum"]=0x3; var bn=bk["getChildByName"]("guide_target"); return bg['navStart'](this["node"], bn), void bh["guideStart"](this["node"], bn, 0xf, 0x2);
                                    }
                                }
                            }if(bf)bf(); else {
                                if(0x1==this["guideNum"]) {
                                    for(var bo=al["ENEMY_CTRL"]['getAllEnemy'](0x5), bp=0x0; bp<bo["length"]; bp++)if(al["ENEMY_CTRL"]["isEnemyValid"](bo[bp])&&al['ENEMY_CTRL']["isEnemyValidPre"](bo[bp]))return bg["navStart"](this["node"], bo[bp]), void bh["guideStart"](this["node"], bo[bp], 0xf, 0x2, 0x4);
                                }
                            }
                        }
                    }
                }, be["checkGuideHide"]=function(bf) {
                    var v0=uk; 0x0==this["guideNum"]&&(this["guideNum"]=0x1), al["GUIDE_ARROW"]["getComponent"](aC)["guideStop"](), al["NAV_LINE_COMP"]["navStop"]();
                }, bd;
            }(ah))['prototype'], 'boundDebug', [bb],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), aV=F(aT["prototype"], "world", [aE],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aW=F(aT["prototype"], "joystick", [aF],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), aX=F(aT["prototype"], "kingBody", [aG],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aY=F(aT["prototype"], 'horseBody', [aH],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), aZ=F(aT["prototype"], "maxSpeed", [aI],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0xa;
                }
            }), b0=F(aT["prototype"], "slopeLimit", [aJ],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x4b;
                }
            }), b1=F(aT['prototype'], 'stepOffset', [aK],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), b2=F(aT['prototype'], "gravity", [bb],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new a2(0x0, -9.8, 0x0);
                }
            }), b3=F(aT["prototype"], "bowArrowBorn", [aL],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b4=F(aT["prototype"], "coinsLayer", [aM],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b5=F(aT["prototype"], "coinsDropPos", [aN],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b6=F(aT["prototype"], "coinParent", [aO],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b7=F(aT["prototype"], 'kingSkeAni', [aP],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b8=F(aT["prototype"], "horseSkeAni", [aQ],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), b9=F(aT['prototype'], "coinBurst", [aR],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aS=aT))||aS)), X['_RF']["pop"]();
        }
    };
});
