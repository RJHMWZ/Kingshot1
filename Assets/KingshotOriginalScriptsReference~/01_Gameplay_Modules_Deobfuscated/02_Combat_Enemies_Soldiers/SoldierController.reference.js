// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/SoldierController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameConfig.ts", "./GameData.ts", './EasyPoolName.ts', "./Soldier.ts", './Archer.ts', "./CCEffectMgrConst.ts", "./Object3D.ts"], function(j) {
    var k, m, q, v, w, x, y, z, A, B, D, F, G, H, I, J, K, L; return {
        'setters':[function(M) {
            var wJ=b; k=M["applyDecoratedDescriptor"], m=M["inheritsLoose"], q=M['initializerDefineProperty'], v=M["assertThisInitialized"];
        }, function(M) {
            var wK=b; w=M["cclegacy"], x=M["_decorator"], y=M['Node'], z=M["Component"], A=M['v3'], B=M["tween"], D=M["easing"];
        }, function(M) {
            var wL=b; F=M["default"];
        }, function(M) {
            var wM=b; G=M["default"];
        }, function(M) {
            var wN=b; H=M["EASY_POOL_NAME"];
        }, function(M) {
            var wO=b; I=M["Soldier"];
        }, function(M) {
            J=M['Archer'];
        }, function(M) {
            K=M['EFFECT_TYPE'];
        }, function(M) {
            var wP=b; L=M["Object3D"];
        }], 'execute':function() {
            var wQ=b, M, O, Q, T, U, V, W, X, Y, Z, a0; w['_RF']['push']( {
            }, '8fd96rKK95EpYZcHk6zBAad', 'SoldierController', void 0x0); var a1=x["ccclass"], a2=x["property"]; j('SoldierController', (M=a1('SoldierController'), O=a2(y), Q=a2(y), T=a2(y), U=a2(y), M((X=k((W=function(a3) {
                var wS=wQ; function a4() {
                    var wR=b; for(var a6, a7=arguments["length"], a8=new Array(a7), a9=0x0; a9<a7; a9++)a8[a9]=arguments[a9]; return a6=a3["call"]["apply"](a3, [this]["concat"](a8))||this, q(a6, "bornAll", X, v(a6)), q(a6, "bornPosAll", Y, v(a6)), q(a6, "pathAll", Z, v(a6)), q(a6, "queueParent", a0, v(a6)), a6["_queueArray"]=[], a6["_time"]=0x0, a6;
                }m(a4, a3); var a5=a4["prototype"]; return a5["onLoad"]=function() {
                }, a5["onEnable"]=function() {
                }, a5["onDisable"]=function() {
                }, a5["start"]=function() {
                }, a5["unlockQueue"]=function(a6, a7, a8) {
                    var wT=wS; void 0x0===a7&&(a7=0x1), void 0x0===a8&&(a8=!0x1), this["_time"]=0x0, a6+=0x1; for(var a9=G["queue_data"][a6-0x1], aa=this["getBorn"](a6), ab=G["infantry_data"][a9[aa["children"]["length"]]["dataIndex"]], ac=this["getBornPos"](0x1)["getWorldPosition"](), ad=this["getPath"](a6), ae=function() {
                        var wU=wT, ag=F['EASY_POOL']["get"](H['SOLDIER_ARCHER']), ah=ac; if(ag) {
                            aa['addChild'](ag); var ai=aa["children"]["length"]-0x1; if(a8) {
                                ag["getComponent"](I)["init"](ad["children"][0x0], ah, ab, function() {
                                    var wV=wU, am=F["TOWER_CTRL"]["node"]["children"][a6-0x1]["getChildByName"]('defend_pos'); ag['setWorldPosition'](am["children"][ai]['getWorldPosition']()), ag["getComponent"](J)["updateShow"](), F["EFFECT_CTRL"]['onEffectShow'](K['UP_GRADE_FIRE'], ag["worldPosition"], A(0.5, 0.5, 0.5));
                                }); var aj=F["LAYER_GAME"]['getChildByName']('Engineer_Battalion'); aj["active"]||(aj["active"]=!0x0, B(aj)['to'](0.5,  {
                                    'position':A(aj["position"]['x'], 0x0, aj["position"]['z'])
                                },  {
                                    'easing':D["backOut"]
                                })["call"](function() {
                                    var wW=wU; F["EFFECT_CTRL"]["onEffectShow"](K['UP_GRADE_FIRE'], aj['children'][0x0]['worldPosition'], A(1.5, 1.5, 1.5)); var am=F["WORLD"]["node"]["getChildByName"]('barracks'); am["active"]=!0x0; var an=am['getComponent'](L); F["WORLD"]["insert"](an);
                                })["start"]());
                            }else {
                                var ak="tower_"+a6, al=F["LAYER_GAME"]["getChildByName"]('tower_weapon')["getChildByName"](ak)['getChildByName']("defend_pos"); ag["setWorldPosition"](al['children'][ai]["getWorldPosition"]()), ag['getComponent'](J)["updateShow"]();
                            }
                        }
                    }, af=0x0; af<a7; af++)ae();
                }, a5['getBorn']=function(a6) {
                    var wX=wS; return this['bornAll']['getChildByName']("born_"+a6);
                }, a5['getBornPos']=function(a6) {
                    var wY=wS; return this["bornPosAll"]["getChildByName"]('born_pos_'+a6);
                }, a5['getPath']=function(a6) {
                    var wZ=wS; return this["pathAll"]["getChildByName"]("path_all_"+a6);
                }, a4;
            }(z))["prototype"], "bornAll", [O],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Y=k(W["prototype"], "bornPosAll", [Q],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Z=k(W["prototype"], 'pathAll', [T],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a0=k(W['prototype'], 'queueParent', [U],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), V=W))||V)), w['_RF']["pop"]();
        }
    };
});
