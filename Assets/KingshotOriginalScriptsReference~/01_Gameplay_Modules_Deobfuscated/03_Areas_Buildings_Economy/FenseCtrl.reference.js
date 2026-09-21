// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/FenseCtrl.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', './Object3D.ts', "./GameConfig.ts", './Door.ts'], function(d) {
    var f, g, j, k, l, m, p, q, u; return {
        'setters':[function(v) {
            var kF=b; f=v["inheritsLoose"];
        }, function(v) {
            var kG=b; g=v["cclegacy"], j=v['_decorator'], k=v['v3'], l=v['tween'], m=v['Component'];
        }, function(v) {
            var kH=b; p=v["Object3D"];
        }, function(v) {
            q=v['default'];
        }, function(v) {
            var kI=b; u=v["Door"];
        }], 'execute':function() {
            var kJ=b, v; g['_RF']["push"]( {
            }, "86f9a+bUJFB7ZdFRmXaZsUQ", 'FenseCtrl', void 0x0); var w=j['ccclass']; j["property"], d("FenseCtrl", w("FenseCtrl")(v=function(x) {
                var kL=kJ; function y() {
                    var kK=b; for(var A, B=arguments["length"], C=new Array(B), D=0x0; D<B; D++)C[D]=arguments[D]; return(A=x["call"]["apply"](x, [this]["concat"](C))||this)["isFinish"]=!0x1, A;
                }f(y, x); var z=y['prototype']; return z['start']=function() {
                    this['showOrHideFense'](0x0, !0x0);
                }, z["showOrHideFense"]=function(A, B) {
                    var kM=kL; if(!this['isFinish']) {
                        var C="fense_"+A, D=this["node"]['getChildByName'](C); D["active"]=B, 0x7==A&&this['showDoor'](0x2), 0x8==A&&this["showDoor"](0x3), 0x1==A&&(this['showDoor'](0x4), this["showDoor"](0x1, !0x1)), this["addPhysics"](A, B), this["fenceAni"](D);
                    }
                }, z["getDoor"]=function(A) {
                    var kN=kL, B="fense_door_"+A; return this['node']["getChildByName"](B);
                }, z["fenceAni"]=function(A) {
                    var kO=kL, B=A["position"]['y']; A["setPosition"](k(A["position"]['x'], -0xa, A['position']['z'])), l(A)['to'](0.5,  {
                        'position':k(A["position"]['x'], B, A['position']['z'])
                    },  {
                        'easing':"elasticOut"
                    })['start']();
                }, z['addPhysics']=function(A, B) {
                    var kP=kL, C=q["WORLD"]['node']["getChildByName"]("fense_"+A); if(C) {
                        C["active"]=B; for(var D=0x0; D<C['children']["length"]; D++) {
                            var E=C['children'][D]; if(E) {
                                var F=E["getComponent"](p); if(!F)return; B&&q["WORLD"]["insert"](F), B||q['WORLD']["remove"](F);
                            }
                        }
                    }
                }, z["showDoor"]=function(A, B) {
                    var kQ=kL; void 0x0===B&&(B=!0x0); var C='fense_door_'+A, D=this['node']["getChildByName"](C); B||(D["getChildByName"]("door")['getComponent'](u)["hpComp"]["node"]["active"]=!0x1), D["active"]=B;
                }, y;
            }(m))||v), g["_RF"]["pop"]();
        }
    };
});
