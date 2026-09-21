// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/TowerWeapon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./TimerAction.ts", "./GameConfig.ts", "./LocationUtil.ts", "./EasyPoolName.ts", "./Enemy.ts", './TowerWeaponArrow.ts', './TowerWeaponType.ts', './Door.ts', './PhysicsHelper.ts'], function(j) {
    var q, x, z, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W; return {
        'setters':[function(X) {
            var y0=b; q=X["applyDecoratedDescriptor"], x=X["inheritsLoose"], z=X["initializerDefineProperty"], B=X["assertThisInitialized"];
        }, function(X) {
            var y1=b; C=X["cclegacy"], D=X["_decorator"], F=X["Enum"], G=X["Node"], H=X['isValid'], I=X["Vec3"], J=X['v3'], K=X["Tween"], L=X["tween"], M=X["Component"], N=X["easing"];
        }, function(X) {
            var y2=b; O=X["TimerAction"];
        }, function(X) {
            var y3=b; P=X["default"];
        }, function(X) {
            var y4=b; Q=X["LocationUtil3D"];
        }, function(X) {
            var y5=b; R=X["EASY_POOL_NAME"];
        }, function(X) {
            var y6=b; S=X["Enemy"];
        }, function(X) {
            var y7=b; T=X["TowerWeaponArrow"];
        }, function(X) {
            U=X['TowerWeaponType'];
        }, function(X) {
            var y8=b; V=X["Door"];
        }, function(X) {
            var y9=b; W=X["default"];
        }], 'execute':function() {
            var ya=b, X, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae; C['_RF']['push']( {
            }, "702317lhphOy4ZVbP3of0Qd", "TowerWeapon", void 0x0); var af=D["ccclass"], ag=D["property"]; j("TowerWeapon", (X=af('TowerWeapon'), Z=ag( {
                'type':F(U), 'tooltip':"箭塔类型"
            }), a0=ag(G), a1=ag(G), a2=ag(G), a3=ag(G), a4=ag( {
                'type':[G]
            }), a5=ag( {
                'type':[G]
            }), X((a8=q((a7=function(ah) {
                var yc=ya; function ai() {
                    var yb=b; for(var ak, al=arguments['length'], am=new Array(al), an=0x0; an<al; an++)am[an]=arguments[an]; return ak=ah["call"]["apply"](ah, [this]['concat'](am))||this, z(ak, "towerType", a8, B(ak)), z(ak, "bowArrowBorn", a9, B(ak)), z(ak, "bowSocket", aa, B(ak)), z(ak, "bowArrow", ab, B(ak)), z(ak, 'weapon', ac, B(ak)), z(ak, 'fenseLink', ad, B(ak)), z(ak, 'doorLink', ae, B(ak)), ak['isActive']=!0x1, ak["_curEnemyArr"]=[], ak["timeSearchEnemy"]=new O(B(ak), 0xc8, ak["searchingEnemy"]), ak["_towerData"]=null, ak["nEnemyIdx"]=0x0, ak["nEnemyFrame"]=0xc8, ak["_isInPlayAtk"]=!0x1, ak;
                }x(ai, ah); var aj=ai["prototype"]; return aj["onLoad"]=function() {
                    var yd=yc; this["initData"]();
                }, aj["start"]=function() {
                }, aj['update']=function(ak) {
                    var ye=yc; this["timeSearchEnemy"]['update'](ak), this['_curEnemyArr']["length"]&&!P["GAME_PLAYER_START"]&&(this["updateLookAtEnemy"](ak), this["updateAtkEnemy"]());
                }, aj["initData"]=function() {
                }, aj["active"]=function() {
                    var yf=yc; this['isActive']=!0x0, this['searchingEnemy'](), this["timeSearchEnemy"]["reset"](), W["addPhysics"](this["node"]), this["unlockFense"]();
                }, aj["searchingEnemy"]=function() {
                    var yg=yc; this["_curEnemyArr"]["length"]||this["updateSearchEnemy"]();
                }, aj["onSearchEnemyByFrame"]=function() {
                    var yh=yc, ak=P['ENEMY_CTRL']["getAllEnemy"](); this["_curEnemyArr"]=[]; for(var al=this["nEnemyIdx"]+this["nEnemyFrame"], am=this['nEnemyIdx']; am<al; am++) {
                        if(am<0x0||am>=ak["length"]) {
                            this["nEnemyIdx"]=0x0; break;
                        }var an=ak[am], ao=H(an), ap=an['getComponent'](S)['isDeadPre'](), aq=an["getComponent"](S)["isRecycle"], ar=an["getComponent"](S)["isPlayerInfantry"](); if(!ao||ap||aq||ar) {
                            if(this["_curEnemyArr"]["length"]>=this["_towerData"]["atk_aoe"])break;
                        }else {
                            if(Q["getDistanceHorizontal"](this["node"], an)>this['_towerData']["atk_range"]) {
                                if(this["_curEnemyArr"]["length"]>=this['_towerData']["atk_aoe"])break;
                            }else {
                                if(this["_curEnemyArr"]["length"])Q["getDistanceHorizontal"](this['_curEnemyArr'][0x0], an)<this["_towerData"]["atk_aoe_range"]&&this["_curEnemyArr"]["push"](an); else this["_curEnemyArr"]['push'](an); if(this["_curEnemyArr"]["length"]>=this['_towerData']["atk_aoe"])break;
                            }
                        }
                    }
                }, aj["updateSearchEnemy"]=function() {
                    var yi=yc; this["isActive"]&&this['onSearchEnemyByFrame']();
                }, aj['updateLookAtEnemy']=function(ak) {
                    var yj=yc; if(H(this['_curEnemyArr'][0x0])) {
                        var al=new I(); I['subtract'](al, this["weapon"]["worldPosition"], this['_curEnemyArr'][0x0]["worldPosition"]), this['weapon']["forward"]=this['weapon']["forward"]['lerp'](J(al['x'], 0x0, al['z']), 0x4*ak);
                    }
                }, aj["updateAtkEnemy"]=function() {
                    var yk=yc; this["_curEnemyArr"]["length"]&&this["playAtk"]();
                }, aj["playAtk"]=function() {
                    var yl=yc, ak=this; if(!this["_isInPlayAtk"]) {
                        for(var al=0x0; al<this["_curEnemyArr"]["length"]; al++) {
                            this['_curEnemyArr'][al]["getComponent"](S)['onDamagePre'](this["_towerData"]["atk"]);
                        }var am=this["_curEnemyArr"]["slice"](); this["_isInPlayAtk"]=!0x0, K["stopAllByTarget"](this["bowSocket"]), this["bowSocket"]["position"]=J(this['bowSocket']["position"]['x'], -1.7, this['bowSocket']['position']['z']); var an=this["_towerData"]["atk_speed"]; L(this["bowSocket"])['to'](an,  {
                            'position':J(this["bowSocket"]["position"]['x'], -0x5, this['bowSocket']["position"]['z'])
                        })['to'](an/0x2,  {
                            'position':J(this["bowSocket"]['position']['x'], -1.7, this["bowSocket"]['position']['z'])
                        })["call"](function() {
                            var ym=yl; ak['_isInPlayAtk']=!0x1, ak['shootArrow'](am), ak['updateSearchEnemy'](), ak["_curEnemyArr"]['length']||ak["searchingEnemy"]();
                        })["start"]();
                    }
                }, aj['shootArrow']=function(ak) {
                    var yn=yc; for(var al=ak['length']-0x1; -0x1!=al; al--)(!H(ak[al])||ak[al]['getComponent'](S)["isDead"]()||ak[al]["getComponent"](S)["isRecycle"])&&ak["splice"](al, 0x1); if(ak["length"]) {
                        var am=P['EASY_POOL']["get"](R["TOWER_BOW_ARROW"]); P["Canvas_3d"]['addChild'](am), am["active"]=!0x1, am['worldPosition']=this["bowArrowBorn"]["getWorldPosition"](), am["active"]=!0x0, am["getComponent"](T)["init"](this["bowArrowBorn"], ak, this["_towerData"]);
                    }
                }, aj["unlockFense"]=function() {
                    for(var ak=this, al=function() {
                        var yo=b, an=ak["fenseLink"][am]; an&&L(an)['to'](0.5,  {
                            'position':J(an["position"]['x'], 0x0, an["position"]['z'])
                        },  {
                            'easing':N['backOut']
                        })["call"](function() {
                            var yp=yo; W["addPhysics"](an);
                        })["call"](ak["unlockDoor"]['bind'](ak))["start"]();
                    }, am=0x0; am<this['fenseLink']['length']; am++)al(); this['fenseLink']['length']||this['unlockDoor']();
                }, aj["unlockDoor"]=function() {
                    var ys=yc; for(var ak=this, al=function() {
                        var yq=b, an=ak['doorLink'][am]; an&&L(an)['to'](0.5,  {
                            'position':J(an["position"]['x'], 0x0, an["position"]['z'])
                        },  {
                            'easing':N['backOut']
                        })["call"](function() {
                            var yr=yq; ak['addDoorPhysics'](an); var ao=an["getChildByName"]('door'); ao&&ao["getComponent"](V)["active"]();
                        })["start"]();
                    }, am=0x0; am<this['doorLink']["length"]; am++)al();
                }, aj['addDoorPhysics']=function(ak) {
                    var yt=yc; for(var al=[], am=0x0; am<ak["children"]["length"]; am++)-0x1!=ak["children"][am]["name"]['indexOf']('zhalan')&&al["push"](ak["children"][am]); for(var an=0x0; an<al["length"]; an++) {
                        var ao=al[an]; W["addPhysics"](ao);
                    }
                }, ai;
            }(M))["prototype"], "towerType", [Z],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var yu=ya; return U["TowerWeaponType_1"];
                }
            }), a9=q(a7["prototype"], "bowArrowBorn", [a0],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aa=q(a7["prototype"], "bowSocket", [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ab=q(a7["prototype"], "bowArrow", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ac=q(a7["prototype"], "weapon", [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ad=q(a7["prototype"], 'fenseLink', [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), ae=q(a7["prototype"], "doorLink", [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), a6=a7))||a6)), C["_RF"]["pop"]();
        }
    };
});
