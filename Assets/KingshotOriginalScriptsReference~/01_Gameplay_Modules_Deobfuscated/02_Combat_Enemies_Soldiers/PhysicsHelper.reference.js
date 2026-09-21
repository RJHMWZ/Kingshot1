// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/PhysicsHelper.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./Object3D.ts", "./GameConfig.ts", "./LocationUtil.ts"], function(d) {
    var f, g, j, k, l, m, p, q; return {
        'setters':[function(u) {
            var tw=b; f=u["inheritsLoose"];
        }, function(u) {
            var tx=b; g=u['cclegacy'], j=u["_decorator"], k=u["MeshRenderer"], l=u['Component'];
        }, function(u) {
            m=u['Object3D'];
        }, function(u) {
            var ty=b; p=u["default"];
        }, function(u) {
            var tz=b; q=u["LocationUtil3D"];
        }], 'execute':function() {
            var tA=b, v; g["_RF"]["push"]( {
            }, '2d4e0QZTKND1oSRQd/4bJ/t', "PhysicsHelper", void 0x0); var w=j["ccclass"], x=(j["property"], d("PhysicsHelper", w("PhysicsHelper")(v=function(y) {
                var tC=tA; function z() {
                    var tB=b; for(var B, C=arguments["length"], D=new Array(C), E=0x0; E<C; E++)D[E]=arguments[E]; return(B=y['call']["apply"](y, [this]["concat"](D))||this)["physicsAwaitArr"]=[], B;
                }f(z, y); var A=z["prototype"]; return A['addPhysics']=function(B) {
                    var tD=tC; this["physicsAwaitArr"]["push"](B), this["unschedule"](this['checkPlayerByDisLoop']), this['schedule'](this["checkPlayerByDisLoop"], 0.2);
                }, A["checkPlayerByDisLoop"]=function() {
                    var tE=tC; for(var B=this["physicsAwaitArr"]["length"]-0x1; -0x1!=B; B--) {
                        var C=this["physicsAwaitArr"][B]; q["getDistanceHorizontal"](C, p["PLAYER"]["node"])>0x3&&(this["setPhysicsByNode"](C), this["physicsAwaitArr"]["splice"](B, 0x1), 0x0==this["physicsAwaitArr"]['length']&&this["unschedule"](this["checkPlayerByDisLoop"]));
                    }
                }, A['setPhysicsByNode']=function(B) {
                    var tF=tC; for(var C=this, D=B["getComponentsInChildren"](k), E=function(G) {
                        var tG=tF; D[G]["node"]['addComponent'](m), C["scheduleOnce"](function() {
                            var tH=tG; p['WORLD']['insert'](D[G]['node']["getComponent"](m));
                        }, 0x0);
                    }, F=0x0; F<D["length"]; F++)E(F);
                }, z;
            }(l))||v)); d("default", new x()), g["_RF"]['pop']();
        }
    };
});
