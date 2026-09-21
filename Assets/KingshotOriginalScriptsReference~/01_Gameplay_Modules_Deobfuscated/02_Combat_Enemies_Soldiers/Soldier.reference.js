// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Soldier.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AudioMgr.ts", "./CoreEventManager.ts", "./CoreEventName.ts", "./GameConfig.ts", './SkelAniName.ts', "./LocationUtil.ts", "./AudioName.ts", './Coin.ts', "./EasyPoolName.ts", "./CharacterBase.ts", "./CharacterType.ts", "./BezierAction.ts", './Enemy.ts'], function(j) {
    var q, x, z, B, F, G, H, J, K, L, O, Q, R, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa; return {
        'setters':[function(ab) {
            var w4=b; q=ab["applyDecoratedDescriptor"], x=ab["inheritsLoose"], z=ab["initializerDefineProperty"], B=ab["assertThisInitialized"];
        }, function(ab) {
            var w5=b; F=ab["cclegacy"], G=ab['_decorator'], H=ab["Node"], J=ab["Material"], K=ab['MeshRenderer'], L=ab["SkeletalAnimation"], O=ab['Vec3'], Q=ab['v3'], R=ab['tween'], T=ab["Tween"], U=ab["math"], V=ab["easing"], W=ab["color"], X=ab['Color'];
        }, function(ab) {
            Y=ab['default'];
        }, function(ab) {
            var w6=b; Z=ab["default"];
        }, function(ab) {
            var w7=b; a0=ab["CoreEventName"];
        }, function(ab) {
            var w8=b; a1=ab["default"];
        }, function(ab) {
            var w9=b; a2=ab["SkelAniName"];
        }, function(ab) {
            a3=ab['LocationUtil3D'];
        }, function(ab) {
            var wa=b; a4=ab["AudioName"];
        }, function(ab) {
            a5=ab['Coin'];
        }, function(ab) {
            a6=ab['EASY_POOL_NAME'];
        }, function(ab) {
            var wb=b; a7=ab["CharacterBase"];
        }, function(ab) {
            var wc=b; a8=ab["CharacterType"];
        }, function(ab) {
            var wd=b; a9=ab["BezierAction"];
        }, function(ab) {
            aa=ab['Enemy'];
        }], 'execute':function() {
            var we=b, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq; F["_RF"]['push']( {
            }, 'b699fkHvXlF7LvApywodEaE', 'Soldier', void 0x0); var ar=G["ccclass"], as=G['property']; j("Soldier", (ab=ar("Soldier"), ac=as( {
                'type':H, 'visible':function() {
                    var wf=we; return this["isForceMove"];
                }
            }), ad=as( {
                'visible':function() {
                    var wg=we; return this["isForceMove"];
                }
            }), ae=as(J), af=as(J), ag=as(H), ah=as(K), ab((ak=q((aj=function(at) {
                var wi=we; function au() {
                    var wh=b; for(var aw, ax=arguments['length'], ay=new Array(ax), az=0x0; az<ax; az++)ay[az]=arguments[az]; return aw=at["call"]["apply"](at, [this]["concat"](ay))||this, z(aw, "isForceMove", ak, B(aw)), z(aw, 'forcePath', al, B(aw)), z(aw, 'forcePathIdx', am, B(aw)), z(aw, "enemySoldierMatNormal", an, B(aw)), z(aw, 'enemySoldierMatGray', ao, B(aw)), z(aw, "weapon", ap, B(aw)), z(aw, "skinMeshRenderer", aq, B(aw)), aw['moveDis']=0x0, aw["_curSkel"]=null, aw["_path"]=null, aw["_pathIdx"]=0x0, aw['_curAniName']='', aw['_isForceInit']=!0x1, aw['_initWps']=void 0x0, aw["_queueIndex"]=void 0x0, aw["_enemyData"]=null, aw['_cb']=null, aw['isRecycle']=!0x1, aw;
                }x(au, at); var av=au["prototype"]; return av["onEnable"]=function() {
                    var wj=wi; Z['on'](a0["USER_TOUCH_DOWN"], this["onGameStart"], this);
                }, av["onDisable"]=function() {
                    var wk=wi; Z['off'](a0["USER_TOUCH_DOWN"], this["onGameStart"], this);
                }, av["updateSkel"]=function() {
                    var wl=wi; this["_curSkel"]&&(this["_curSkel"]["node"]["active"]=!0x1), this["_curSkel"]=this["node"]["getChildByName"]("skel")["getComponent"](L), this["_curSkel"]["node"]["active"]=!0x0; var aw=this["_curSkel"]["node"]["getChildByName"]('shadow_type_0'); aw&&(aw["active"]=!0x0);
                }, av["onGameStart"]=function() {
                }, av["updateAniState"]=function(aw, ax) {
                    var wm=wi; void 0x0===ax&&(ax=0x1), this['_curSkel']||this["updateSkel"](), this["_curAniName"]=aw, this["_curSkel"]["getState"](this['_curAniName'])["isPlaying"]||(this['_curSkel']["getState"](this["_curAniName"])["speed"]=ax, this["_curSkel"]['play'](this["_curAniName"]));
                }, av['init']=function(aw, ax, ay, az) {
                    var wn=wi, aA=this; this["scheduleOnce"](function() {
                        aA['isRecycle']=!0x1;
                    }, 0x1), this["weapon"]['active']=!0x0, this["_path"]=aw, this["_pathIdx"]=0x0, this["_initWps"]=ax, this["_enemyData"]=null, this["_cb"]=az, this["node"]["worldPosition"]=ax, this['node']["eulerAngles"]=O["ZERO"], this["_enemyData"]=JSON["parse"](JSON["stringify"](ay)), this['moveDis']=0x0, this["updateInfo"](), this["updateSkel"](), this["setMatNormal"](); var aB=this["_path"]["children"][this["_pathIdx"]]; aB&&a3["lookAtByHorizontal"](this["node"], aB), this["characterType"]==a8["CharacterType_PlayerSoldier"]&&this["playNormalFlash"](), this['move']();
                }, av['resetPath']=function(aw, ax) {
                    var wo=wi; this['_path']=aw, this["_pathIdx"]=ax, this['move']();
                }, av['updateInfo']=function() {
                    var wp=wi; this["_enemyData"]&&(this['hp']=this["_enemyData"]['hp'], this["hpPre"]=this["_enemyData"]['hp'], this["hpMax"]=this["_enemyData"]['hp']);
                }, av["move"]=function() {
                    var wq=wi, aw=this, ax=this["_path"]["children"][this["_pathIdx"]]; if(ax) {
                        this["updateAniState"](a2["COMMON_ANI_MOVE"]); var ay=a3["getDistanceHorizontal"](this['node'], ax)/this['_enemyData']['move_speed']; a3["rotateToTarget"](0.2, this["node"], this["node"]['getWorldPosition'](), Q(ax['getWorldPosition']()['x'], this['node']["worldPosition"]['y'], ax["getWorldPosition"]()['z'])); var az=this; R(this["node"])['to'](ay,  {
                            'worldPosition':Q(ax["worldPosition"]['x'], this["node"]["worldPosition"]['y'], ax["worldPosition"]['z'])
                        },  {
                            'onUpdate':function(aA, aB) {
                                var wr=wq; az["moveDis"]+=az["_enemyData"]["move_speed"]*aB;
                            }
                        })["call"](function() {
                            var ws=wq; aw["_pathIdx"]++, aw["move"]();
                        })["start"]();
                    }else this['characterType']==a8["CharacterType_PlayerSoldier"]?this["recycle"]():this["characterType"]==a8["CharacterType_Archer_Soldier"]&&this['_cb']&&this["_cb"]();
                }, av["updateLookAt"]=function(aw) {
                    var wt=wi; if(this['hp']&&this['_path']&&this["_path"]["children"][this['_pathIdx']]) {
                        var ax=new O(); O['subtract'](ax, this["_path"]["children"][this["_pathIdx"]]["getWorldPosition"](), this['node']["getWorldPosition"]()), this["node"]["forward"]=this["node"]["forward"]["lerp"](Q(ax['x'], 0x0, ax['z']), 0.1);
                    }
                }, av["die"]=function() {
                    var wu=wi; T['stopAllByTarget'](this['node']), this['isEnemyInfantry']()||this["isPlayerInfantry"]()?(this["weapon"]['active']=!0x1, this['shootBack'](), this["createCoins"]()):this["isEnemyElite"]()&&(this["createCoins"](), this["recycle"]()); var aw=this["_curSkel"]["node"]['getChildByName']("shadow_type_0"); aw&&(aw["active"]=!0x1);
                }, av["createCoins"]=function() {
                    var wv=wi; Y["playShotSound"](a4["COIN_GET"], 0.5, 0xc8); for(var aw=U['randomRangeInt'](this["_enemyData"]['coins'][0x0], this["_enemyData"]['coins'][0x1]), ax=0x0; ax<aw; ax++) {
                        var ay=a1["EASY_POOL"]['get'](a6["COIN"]); a1["LAYER_COIN"]['addChild'](ay); var az=this['node']["getChildByName"]("coins_create_pos")["getWorldPosition"](); ay['getComponent'](a5)["init"](az);
                    }
                }, av['shootBack']=function() {
                    var ww=wi, aw=this; if(this["atkStarter"]) {
                        this["setMatGray"](), this["atkStarter"]["getComponent"](aa)?this['scheduleOnce'](function() {
                            var wx=ww; Y["playShotSound"](a4["COLLISION"], 0.5, 0x50), aw["playWhiteFlash"]();
                        }, 0x0):Y["playShotSound"](a4['ENEMY_DIE'], 0.5, 0xc8), this['_curSkel']['stop'](), a3["lookAtByHorizontal"](this['node'], this['atkStarter']); var ax=new O(); O["subtract"](ax, this['node']["worldPosition"], Q(this['atkStarter']["worldPosition"]['x'], this['node']["worldPosition"]['y'], this['atkStarter']["worldPosition"]['z'])), ax["normalize"](); var ay=this['node']["getWorldPosition"](), az=Q(this["node"]['worldPosition']['x']+0x5*ax['x'], this["node"]["worldPosition"]['y']+0.5, this["node"]["worldPosition"]['z']+0x5*ax['z']), aA=a9["bezierWpsMove"](this["node"], 0.4, ay, az, Q(0x0, U["randomRange"](0x8, 0xa), 0x0), V["circOut"]); R(this["node"])['parallel'](R(this["node"])['to'](0.4,  {
                            'eulerAngles':Q(0x5a, this["node"]["eulerAngles"]['y'], this['node']["eulerAngles"]['z'])
                        }), aA)["call"](function() {
                            var wy=ww; aw["setMatGray"]();
                        })["delay"](0.5)["call"](function() {
                            var wz=ww; aw["recycle"]();
                        })["start"]();
                    }
                }, av["setMatNormal"]=function() {
                    var wA=wi; this['characterType']!=a8['CharacterType_EnemySoldier']&&this['characterType']!=a8['CharacterType_PlayerSoldier']||(this["skinMeshRenderer"]["material"]=this["enemySoldierMatNormal"]);
                }, av["setMatGray"]=function() {
                    var wB=wi; this['characterType']!=a8["CharacterType_EnemySoldier"]&&this["characterType"]!=a8["CharacterType_PlayerSoldier"]||(this["skinMeshRenderer"]["material"]=this["enemySoldierMatGray"]);
                }, av['recycle']=function() {
                    var wC=wi; this["isRecycle"]=!0x0, T['stopAllByTarget'](this["node"]), this["node"]["removeFromParent"](), this["node"]["worldPosition"]=this["_initWps"], a1["EASY_POOL"]['put'](this['node']);
                }, av['getPathIdx']=function() {
                    return this['_pathIdx'];
                }, av["getData"]=function() {
                    var wD=wi; return this["_enemyData"];
                }, av["emissiveFade"]=function(aw, ax, ay, az) {
                    var wE=wi; void 0x0===az&&(az=null); var aA="emissive", aB=ax["getProperty"](aA); aB&&(T['stopAllByTarget'](ax), R(ax)['to'](aw,  {
                    },  {
                        'onUpdate':function(aC, aD) {
                            var wF=wE, aE=U["lerp"](aB['r'], ay['r'], aD), aF=U['lerp'](aB['g'], ay['g'], aD), aG=U["lerp"](aB['b'], ay['b'], aD), aH=U["lerp"](aB['a'], ay['a'], aD); ax['setProperty'](aA, W(aE, aF, aG, aH));
                        }
                    })['call'](function() {
                        az&&az();
                    })["start"]());
                }, av["playWhiteFlash"]=function() {
                    var wG=wi, aw=this; this["skinMeshRenderer"]['material']["setProperty"]("emissive", W(0xff, 0xff, 0xff, 0x64)), this["scheduleOnce"](function() {
                        aw['playNormalFlash']();
                    }, 0.2);
                }, av['playNormalFlash']=function() {
                    var wH=wi; this["skinMeshRenderer"]['material']["setProperty"]('emissive', X["BLACK"]);
                }, av["onDamage"]=function(aw, ax, ay) {
                    var wI=wi; void 0x0===ax&&(ax=null), void 0x0===ay&&(ay=!0x1), this["atkStarter"]=ax, ay?this["playWhiteFlash"]():this["playDmgVfx"](), this['hp']&&(this['hp']-=aw, this['hp']<=0x0&&(this['hp']=0x0, this["die"]()));
                }, au;
            }(a7))["prototype"], 'isForceMove', [as],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), al=q(aj["prototype"], 'forcePath', [ac],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), am=q(aj["prototype"], "forcePathIdx", [ad],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), an=q(aj["prototype"], "enemySoldierMatNormal", [ae],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ao=q(aj["prototype"], "enemySoldierMatGray", [af],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ap=q(aj["prototype"], "weapon", [ag],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aq=q(aj["prototype"], "skinMeshRenderer", [ah],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ai=aj))||ai)), F["_RF"]['pop']();
        }
    };
});
