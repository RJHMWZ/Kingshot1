// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/EnemyController.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./CoreEventManager.ts", "./CoreEventName.ts", "./GameConfig.ts", "./GameData.ts", "./EasyPoolName.ts", "./EnemyQueue.ts", "./LocationUtil.ts", "./Enemy.ts", "./CharacterType.ts", "./GameHelper.ts"], function(j) {
    var k, q, v, w, x, z, B, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S; return {
        'setters':[function(T) {
            var jR=b; k=T['applyDecoratedDescriptor'], q=T["inheritsLoose"], v=T["initializerDefineProperty"], w=T['assertThisInitialized'];
        }, function(T) {
            var jS=b; x=T["cclegacy"], z=T["_decorator"], B=T['Node'], D=T["isValid"], F=T["Tween"], G=T["math"], H=T['v3'], I=T["Component"];
        }, function(T) {
            var jT=b; J=T["default"];
        }, function(T) {
            var jU=b; K=T["CoreEventName"];
        }, function(T) {
            L=T['default'];
        }, function(T) {
            M=T['default'];
        }, function(T) {
            var jV=b; N=T["EASY_POOL_NAME"];
        }, function(T) {
            var jW=b; O=T["EnemyQueue"];
        }, function(T) {
            var jX=b; P=T["LocationUtil3D"];
        }, function(T) {
            Q=T['Enemy'];
        }, function(T) {
            R=T['CharacterType'];
        }, function(T) {
            var jY=b; S=T["default"];
        }], 'execute':function() {
            var jZ=b, U, V, W, X, Y, Z, a0, a1, a2, a3, a4; x["_RF"]["push"]( {
            }, 'b9693qRIB9By4S503qoZ/Is', "EnemyController", void 0x0); var a5=z["ccclass"], a6=z["property"]; j("EnemyController", (U=a5("EnemyController"), V=a6(B), W=a6(B), X=a6(B), Y=a6(B), U((a1=k((a0=function(a7) {
                var k1=jZ; function a8() {
                    var k0=b; for(var aa, ab=arguments["length"], ac=new Array(ab), ad=0x0; ad<ab; ad++)ac[ad]=arguments[ad]; return aa=a7["call"]['apply'](a7, [this]['concat'](ac))||this, v(aa, 'bornAll', a1, w(aa)), v(aa, "bornPosAll", a2, w(aa)), v(aa, 'pathAll', a3, w(aa)), v(aa, 'queueParent', a4, w(aa)), aa["_queueArray"]=[], aa["_time"]=0x0, aa["_isStart"]=!0x1, aa["_endEnemyTime"]=M["game_limit_data"]["enemy_end_time"], aa;
                }q(a8, a7); var a9=a8["prototype"]; return a9["onLoad"]=function() {
                }, a9["onEnable"]=function() {
                    var k2=k1; J['on'](K["USER_TOUCH_DOWN"], this["onGameStart"], this);
                }, a9["onDisable"]=function() {
                    var k3=k1; J["off"](K['USER_TOUCH_DOWN'], this['onGameStart'], this);
                }, a9["start"]=function() {
                }, a9['update']=function(aa) {
                    var k4=k1; this['_isStart']&&(this["countTime"](aa), this["checkPlayerSoldier"]());
                }, a9["onGameStart"]=function() {
                    var k5=k1; this["_isStart"]||(this["_isStart"]=!0x0, this["unlockQueue"](0x1));
                }, a9['countTime']=function(aa) {
                    var k6=k1; L["GAME_PLAYER_START"]&&this['_endEnemyTime']&&(this["_endEnemyTime"]-=aa, this["_endEnemyTime"]=Number(this["_endEnemyTime"]["toFixed"](0x6)), this["_endEnemyTime"]<0x0&&(this["_endEnemyTime"]=0x0)), this["_time"]+=aa; for(var ab=0x0; ab<this["_queueArray"]["length"]; ab++) {
                        var ac=this['_queueArray'][ab]; (this["_endEnemyTime"]||ac['getEnemyType']()==R["CharacterType_PlayerSoldier"])&&(ac["isFinishQueue"]||this["_time"]>=ac["timeStart"]&&(ac["timeCount"]+=aa, ac["timeCount"]>=ac['timeInterval']&&(ac["timeCount"]=0x0, ac["createEnemy"]())));
                    }
                }, a9['unlockQueue']=function(aa) {
                    var k7=k1; for(var ab in(this["_time"]=0x0, M['enemy_queue_data']))for(var ac=M['enemy_queue_data'][ab], ad=0x0; ad<ac["length"]; ad++) {
                        var ae=ac[ad]; if(ae["queueIdx"]==aa) {
                            var af=L["EASY_POOL"]["get"](N["ENEMY_QUEUE"]); ae["born"]=this["getBorn"](ae["pathIndex"]), ae["bornPos"]=this["getBornPos"](ae["pathIndex"]), ae['path']=this['getPath'](ae["pathIndex"]), this['queueParent']["addChild"](af), af['getComponent'](O)["init"](ae), this["_queueArray"]['push'](af["getComponent"](O));
                        }
                    }
                }, a9['getBorn']=function(aa) {
                    var k8=k1; return this["bornAll"]["getChildByName"]("born_"+aa);
                }, a9["getBornPos"]=function(aa) {
                    var k9=k1; return this['bornPosAll']["getChildByName"]('born_pos_'+aa);
                }, a9["getPath"]=function(aa) {
                    var ka=k1; return this["pathAll"]["getChildByName"]("path_all_"+aa);
                }, a9["getAllEnemy"]=function(aa) {
                    var kb=k1; void 0x0===aa&&(aa=0x1e); for(var ab=S['getNodeByKey']("DOOR_FINAL"), ac=[], ad=this["bornAll"]['children']['length']-0x2, ae=0x0; ae<ad; ae++) {
                        for(var af=this["bornAll"]['children'][ae], ag=[], ah=0x0, ai=0x0; ai<af['children']["length"]&&(ah++, ag['push'](af["children"][ai]), !(ah>=aa)); ai++); ac=ac["concat"](ag);
                    }return ac=ac["sort"](function(aj, ak) {
                        var kc=kb; return P["getDistanceHorizontal"](ab, aj)-P["getDistanceHorizontal"](ab, ak);
                    });
                }, a9['getLeftEnemy']=function() {
                    var kd=k1; return this["bornAll"]['children'][0x0]["children"]["concat"](this["bornAll"]["children"][0x2]["children"]);
                }, a9["getRightEnemy"]=function() {
                    var ke=k1; return this["bornAll"]["children"][0x1]["children"]["concat"](this["bornAll"]["children"][0x3]["children"]);
                }, a9['isEnemyValid']=function(aa) {
                    var kf=k1; return!(!D(aa)||aa["getComponent"](Q)["isDead"]()||aa['getComponent'](Q)["isRecycle"]);
                }, a9["isEnemyValidPre"]=function(aa) {
                    var kg=k1; return!(!D(aa)||aa['getComponent'](Q)['isDeadPre']()||aa["getComponent"](Q)['isRecycle']);
                }, a9["isEnemyInRange"]=function(aa, ab, ac) {
                    var kh=k1; if(D(aa)&&P["getDistanceHorizontal"](aa, ab)<ac)return!0x0; return!0x1;
                }, a9["lockQueue"]=function(aa) {
                    var ki=k1; for(var ab=this['_queueArray']['length']-0x1; -0x1!=ab; ab--) {
                        this["_queueArray"][ab]["queueData"]["queueIdx"]==aa&&this["_queueArray"]["splice"](ab, 0x1);
                    }
                }, a9["transfer"]=function(aa, ab) {
                    var kj=k1; for(var ac=this["bornAll"]["getChildByName"]("born_"+aa), ad=this["bornAll"]['getChildByName']("born_"+ab), ae=this['pathAll']["getChildByName"]("path_all_"+ab), af=ac["children"]["length"]-0x1; -0x1!=af; af--) {
                        var ag=ac["children"][af]; if(D(ag)&&!ag["getComponent"](Q)["isDeadPre"]()) {
                            F['stopAllByTarget'](ag), P["addChildToOtherWorld"](ag, ad); var ah=G["randomRangeInt"](0x0, ae["children"]['length']), ai=ae['children'][ah], aj=this["getClosePath"](ag, ai); if(aj) {
                                var ak=aj['name']["split"]('_')[0x1]; ag['worldPosition']=H(aj["worldPosition"]['x']+G["randomRange"](-0x5, 0x5), ag["worldPosition"]['y'], aj["worldPosition"]['z']+G["randomRange"](-0x5, 0x5)), ag["getComponent"](Q)["resetPath"](ai, Number(ak));
                            }else L['EASY_POOL']['put'](ag);
                        }else L['EASY_POOL']["put"](ag);
                    }
                }, a9["getClosePath"]=function(aa, ab) {
                    var kk=k1; for(var ac=0x5f5e0ff, ad=null, ae=0x0; ae<ab["children"]['length']; ae++) {
                        var af=ab['children'][ae], ag=P["getDistanceHorizontal"](af, aa); ag<ac&&(ac=ag, ad=af);
                    }return ad;
                }, a9["checkPlayerSoldier"]=function() {
                    var kl=k1; for(var aa=this["bornAll"]['children'][0x4], ab=this["bornAll"]["children"][0x5], ac=(this["getRightEnemy"](), this["getLeftEnemy"](), this["getAllEnemy"]()), ad=0x0; ad<aa["children"]["length"]; ad++) {
                        var ae=aa["children"][ad]; D(ae)&&!ae['getComponent'](Q)["isDeadPre"]()&&this["checkPlayer"](ae, ac);
                    }for(var af=0x0; af<ab["children"]["length"]; af++) {
                        var ag=ab["children"][af]; D(ag)&&!ag["getComponent"](Q)["isDeadPre"]()&&this["checkPlayer"](ag, ac);
                    }
                }, a9['checkPlayer']=function(aa, ab) {
                    var km=k1; if(aa&&ab["length"])for(var ac=0x0; ac<ab["length"]; ac++) {
                        var ad=ab[ac]; if(D(ad)&&!ad["getComponent"](Q)["isDeadPre"]()) {
                            if(P["getDistanceHorizontal"](aa, ad)<0x2) {
                                var ae=ad["getComponent"](Q)["getData"](), af=aa["getComponent"](Q)["getData"](); aa["getComponent"](Q)["onDamagePre"](ae['atk']), aa["getComponent"](Q)["onDamage"](ae["atk"], ad, !0x0), ad['getComponent'](Q)["onDamagePre"](af["atk"]), ad["getComponent"](Q)["onDamage"](af["atk"], aa, !0x0); break;
                            }
                        }
                    }
                }, a8;
            }(I))["prototype"], "bornAll", [V],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a2=k(a0['prototype'], 'bornPosAll', [W],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a3=k(a0["prototype"], "pathAll", [X],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a4=k(a0["prototype"], "queueParent", [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Z=a0))||Z)), x["_RF"]["pop"]();
        }
    };
});
