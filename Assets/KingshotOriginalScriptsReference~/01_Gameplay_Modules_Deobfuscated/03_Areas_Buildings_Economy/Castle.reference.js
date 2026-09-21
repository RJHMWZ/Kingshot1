// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Castle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', "./Hp.ts", "./GameData.ts", "./GameConfig.ts"], function(g) {
    var j, k, m, q, v, w, x, y, z, A, B, C, D, E; return {
        'setters':[function(F) {
            var ff=b; j=F["applyDecoratedDescriptor"], k=F["inheritsLoose"], m=F["initializerDefineProperty"], q=F["assertThisInitialized"];
        }, function(F) {
            var fg=b; v=F["cclegacy"], w=F["_decorator"], x=F["Animation"], y=F["Tween"], z=F["tween"], A=F['v3'], B=F["Component"];
        }, function(F) {
            C=F['Hp'];
        }, function(F) {
            var fh=b; D=F["default"];
        }, function(F) {
            var fi=b; E=F["default"];
        }], 'execute':function() {
            var fj=b, F, G, I, J, K, L, M; v['_RF']["push"]( {
            }, "62476Jtmk5CzZnKk8q6FFgk", "Castle", void 0x0); var N=w["ccclass"], O=w['property']; g("Castle", (F=N("Castle"), G=O(C), I=O(x), F((L=j((K=function(P) {
                var fl=fj; function Q() {
                    var fk=b; for(var S, T=arguments["length"], U=new Array(T), V=0x0; V<T; V++)U[V]=arguments[V]; return S=P["call"]['apply'](P, [this]['concat'](U))||this, m(S, 'hp', L, q(S)), m(S, "dmgAni", M, q(S)), S["scheduleHP"]=null, S;
                }k(Q, P); var R=Q["prototype"]; return R["onLoad"]=function() {
                    var fm=fl; this["initData"]();
                }, R['start']=function() {
                }, R['update']=function(S) {
                }, R["initData"]=function() {
                    var fn=fl; this['hp']["init"](D["castle_data"]['hp']);
                }, R["onDamage"]=function(S) {
                    var fo=fl, T=this; (this["onHideHp"](), 0x1==this["node"]["scale"]['x']&&(y['stopAllByTarget'](this["node"]), this["dmgAni"]['stop'](), this['dmgAni']['play'](), z(this["node"])['to'](0.2,  {
                        'scale':A(1.05, 1.05, 1.05)
                    })['to'](0.2,  {
                        'scale':A(0x1, 0x1, 0x1)
                    })['call'](function() {
                        var fp=fo; T["node"]["setScale"](A(0x1, 0x1, 0x1));
                    })["start"]()), this['hp']['hp'])&&(this['hp']["onDamage"](S)||E["RESULT_PANEL"]["showLose"]());
                }, R['onHideHp']=function() {
                    var fq=fl; this["unschedule"](this["onRestartHideHp"]), this["scheduleHP"]=this["scheduleOnce"](this["onRestartHideHp"], 0x3);
                }, R["onRestartHideHp"]=function() {
                    var fr=fl; this["node"]['active']&&(this['hp']["node"]['active']=!0x1);
                }, R["showDmgWhite"]=function() {
                }, Q;
            }(B))["prototype"], 'hp', [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), M=j(K["prototype"], "dmgAni", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), J=K))||J)), v["_RF"]["pop"]();
        }
    };
});
