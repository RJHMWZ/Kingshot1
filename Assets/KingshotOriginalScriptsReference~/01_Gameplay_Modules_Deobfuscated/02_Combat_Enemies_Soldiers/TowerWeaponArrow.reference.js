// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/TowerWeaponArrow.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./LocationUtil.ts", "./GameConfig.ts", './Enemy.ts'], function(f) {
    var g, h, j, k, m, p, q, v, w, x, y; return {
        'setters':[function(z) {
            var yv=b; g=z["inheritsLoose"];
        }, function(z) {
            var yw=b; h=z["cclegacy"], j=z["_decorator"], k=z["Vec3"], m=z['tween'], p=z['isValid'], q=z["Tween"], v=z["Component"];
        }, function(z) {
            var yx=b; w=z["LocationUtil3D"];
        }, function(z) {
            var yy=b; x=z["default"];
        }, function(z) {
            var yz=b; y=z["Enemy"];
        }], 'execute':function() {
            var yA=b, z; h['_RF']["push"]( {
            }, "fb6c6cHVVFHpIVrqHHK0OCI", "TowerWeaponArrow", void 0x0); var A=j["ccclass"]; j['property'], f("TowerWeaponArrow", A("TowerWeaponArrow")(z=function(B) {
                var yC=yA; function C() {
                    var yB=b; for(var E, F=arguments["length"], G=new Array(F), H=0x0; H<F; H++)G[H]=arguments[H]; return(E=B["call"]["apply"](B, [this]["concat"](G))||this)["_startTarget"]=void 0x0, E['_enemyTarget']=void 0x0, E["_towerData"]=void 0x0, E;
                }g(C, B); var D=C["prototype"]; return D["start"]=function() {
                }, D['update']=function(E) {
                }, D["init"]=function(E, F, G) {
                    var yD=yC, H=this; this['_towerData']=G, this["_enemyTarget"]=F[0x0], this["_startTarget"]=E, this['node']["worldPosition"]=this["_startTarget"]["getWorldPosition"](); var I=new k(); k["subtract"](I, this["_enemyTarget"]['getWorldPosition'](), E["getWorldPosition"]()), this["node"]["forward"]=I; var J=w["getDistanceHorizontal"](this["node"], this["_enemyTarget"])/this['_towerData']["atk_trajectory_speed"], K=this["_enemyTarget"]["getWorldPosition"](); m(this['node'])['to'](J,  {
                        'worldPosition':K
                    })["call"](function() {
                        var yE=yD; for(var L=0x0; L<F["length"]; L++) {
                            var M=F[L]; !p(M)||M['getComponent'](y)["isDead"]()||M["getComponent"](y)["isRecycle"]||M['getComponent'](y)['onDamage'](H["_towerData"]["atk"], E);
                        }q["stopAllByTarget"](H["node"]);
                    })["call"](function() {
                        var yF=yD; x["EASY_POOL"]['put'](H["node"]);
                    })["start"]();
                }, D["updateLookAt"]=function() {
                    var yG=yC; this["node"]["forward"]=this["_enemyTarget"]["worldPosition"]["subtract"](this["node"]["worldPosition"])["normalize"]();
                }, C;
            }(v))||z), h["_RF"]['pop']();
        }
    };
});
