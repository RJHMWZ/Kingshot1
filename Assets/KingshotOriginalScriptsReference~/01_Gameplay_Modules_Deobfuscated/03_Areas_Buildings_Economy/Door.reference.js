// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']('chunks:///_virtual/Door.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts", "./LocationUtil.ts", "./Enemy.ts", './Hp.ts', "./GameData.ts", "./AudioMgr.ts", "./AudioName.ts"], function(j) {
    var k, q, v, w, x, z, A, B, C, E, F, G, H, I, J, K, L, M, N; return {
        'setters':[function(O) {
            var iq=b; k=O['applyDecoratedDescriptor'], q=O["inheritsLoose"], v=O["initializerDefineProperty"], w=O["assertThisInitialized"];
        }, function(O) {
            var ir=b; x=O['cclegacy'], z=O["_decorator"], A=O["Animation"], B=O["tween"], C=O['v3'], E=O["easing"], F=O['isValid'], G=O["Component"];
        }, function(O) {
            var is=b; H=O["default"];
        }, function(O) {
            I=O['LocationUtil3D'];
        }, function(O) {
            var it=b; J=O["Enemy"];
        }, function(O) {
            K=O['Hp'];
        }, function(O) {
            var iu=b; L=O["default"];
        }, function(O) {
            var iv=b; M=O["default"];
        }, function(O) {
            var iw=b; N=O["AudioName"];
        }], 'execute':function() {
            var ix=b, Q, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4; x["_RF"]['push']( {
            }, 'e43203oV7VO/5R7kLylFSyi', "Door", void 0x0); var a5=z["ccclass"], a6=z["property"]; j('Door', (Q=a5("Door"), T=a6(A), U=a6(K), V=a6(Number), W=a6(Number), Q((Z=k((Y=function(a7) {
                var iz=ix; function a8() {
                    var iy=b; for(var aa, ab=arguments["length"], ac=new Array(ab), ad=0x0; ad<ab; ad++)ac[ad]=arguments[ad]; return aa=a7["call"]["apply"](a7, [this]["concat"](ac))||this, v(aa, "isOpen", Z, w(aa)), v(aa, "isDefend", a0, w(aa)), v(aa, "flashAni", a1, w(aa)), v(aa, 'hpComp', a2, w(aa)), v(aa, "doorId", a3, w(aa)), v(aa, "fenceId", a4, w(aa)), aa['hp']=0x64, aa["hpPre"]=0x64, aa["hpMax"]=0x64, aa["_actState"]=0x2, aa["_isActive"]=!0x1, aa['_isInFlash']=!0x1, aa["scheduleHP"]=null, aa["isDestory"]=!0x0, aa;
                }q(a8, a7); var a9=a8['prototype']; return a9["onLoad"]=function() {
                    var iA=iz; if(this["hpComp"]) {
                        var aa=L['door_data']["hp_"+this["doorId"]]; this['hp']=aa, this["hpPre"]=aa, this["hpMax"]=aa, this["hpComp"]["init"](aa);
                    }this['active']();
                }, a9['checkPlayer']=function() {
                    var iB=iz; if(this["_isActive"]) {
                        var aa=I["getDistanceHorizontal"](H["PLAYER"]["node"], this['node']), ab=this["node"]["children"][0x0], ac=this["node"]["children"][0x1], ad=0.3; aa<0x4&&0x1!=this['_actState']?(M["playShotSound"](N["OPEN_DOOR"]), this["_actState"]=0x1, B(ab)['to'](ad,  {
                            'eulerAngles':C(0x0, -0x87, 0x0)
                        },  {
                            'easing':E["backOut"]
                        })["start"](), B(ac)['to'](ad,  {
                            'eulerAngles':C(0x0, 0x87, 0x0)
                        },  {
                            'easing':E['backOut']
                        })["start"]()):aa>0x4&&0x2!=this["_actState"]&&(M["playShotSound"](N["OPEN_DOOR"]), this["_actState"]=0x2, B(ab)['to'](ad,  {
                            'eulerAngles':C(0x0, 0x0, 0x0)
                        },  {
                            'easing':E["backOut"]
                        })['start'](), B(ac)['to'](ad,  {
                            'eulerAngles':C(0x0, 0x0, 0x0)
                        },  {
                            'easing':E["backOut"]
                        })["start"]());
                    }
                }, a9['active']=function() {
                    var iC=iz; this['isDestory']=!0x1, this["_isActive"]=!0x0, this['isOpen']&&this["schedule"](this["checkPlayer"], 0x1/0x1e), this['isDefend']&&this["schedule"](this["checkEnemy"], 0x1/0x3c);
                }, a9["checkEnemy"]=function() {
                    var iD=iz; for(var aa=this, ab=H["ENEMY_CTRL"]["getAllEnemy"](), ac=0x0; ac<ab["length"]; ac++) {
                        var ad=ab[ac], ae=ad["getComponent"](J); I["getDistanceHorizontal"](ad, this["node"])<0x2&&!ae['isPlayerInfantry']()&&!ae["isDead"]()&&F(ad)&&(this["onDamage"](ad["getComponent"](J)["getData"]()["atk"]), ad["getComponent"](J)["recycle"](), this['_isInFlash']||(this["flashAni"]&&(this["_isInFlash"]=!0x0, this['flashAni']["play"](), B(this["node"])['to'](0.1,  {
                            'scale':C(1.2, 1.2, 1.2)
                        })['to'](0.1,  {
                            'scale':C(0x1, 0x1, 0x1)
                        })['start']()), this["scheduleOnce"](function() {
                            var iE=iD; aa["_isInFlash"]=!0x1;
                        }, 0.5), this['onHideHp']()));
                    }
                }, a9["onHideHp"]=function() {
                    var iF=iz; this["unschedule"](this["onRestartHideHp"]), this["scheduleHP"]=this["scheduleOnce"](this["onRestartHideHp"], 0x3);
                }, a9["onRestartHideHp"]=function() {
                    var iG=iz; this["node"]["active"]&&(this['hpComp']["node"]["active"]=!0x1);
                }, a9["onDamage"]=function(aa) {
                    var iH=iz; this['hpComp']&&(this["hpComp"]["onDamage"](aa)||(this['isDestory']=!0x0, this["unschedule"](this['checkEnemy']), this["unschedule"](this["checkPlayer"]), this["node"]["active"]=!0x1, this["fenceId"]>=0x0&&H["FENSE_CTRL"]["showOrHideFense"](this['fenceId'], !0x1)));
                }, a8;
            }(G))['prototype'], "isOpen", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), a0=k(Y["prototype"], "isDefend", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), a1=k(Y["prototype"], 'flashAni', [T],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), a2=k(Y["prototype"], "hpComp", [U],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a3=k(Y["prototype"], "doorId", [V],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), a4=k(Y["prototype"], "fenceId", [W],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return-0x1;
                }
            }), X=Y))||X)), x['_RF']["pop"]();
        }
    };
});
