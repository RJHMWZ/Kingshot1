// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/AutoParticle.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(d) {
    var f, g, h, j, k, m, p, q; return {
        'setters':[function(s) {
            var eE=b; f=s['applyDecoratedDescriptor'], g=s['inheritsLoose'], h=s["initializerDefineProperty"], j=s["assertThisInitialized"];
        }, function(s) {
            var eF=b; k=s['cclegacy'], m=s["_decorator"], p=s['CCBoolean'], q=s['Component'];
        }], 'execute':function() {
            var eG=b, v, w, x, z, A, B; k['_RF']['push']( {
            }, "c924a1x6wtDuoOccs+RHU9a", "AutoParticle", void 0x0); var C=m["ccclass"], E=m["property"]; d('AutoParticle', (v=E(p), w=E(p), C((A=f((z=function(F) {
                var eI=eG; function G() {
                    var eH=b; for(var I, J=arguments["length"], K=new Array(J), L=0x0; L<J; L++)K[L]=arguments[L]; return I=F["call"]['apply'](F, [this]['concat'](K))||this, h(I, "bDisplay", A, j(I)), h(I, 'lockDisplay', B, j(I)), I;
                }g(G, F); var H=G["prototype"]; return H["onLoad"]=function() {
                    var eJ=eI; DDSTL&&DDSTL["MinGameAdapter"]&&(this['node']["active"]=!0x1, DDSTL["MinGameAdapter"]["getInstance"]()["getPlatform"]()!=DDSTL['MINIGAME_PLATFORM']["NON"]?this["onAutoParticle"]():this["onInitParticle"]());
                }, H["onInitParticle"]=function(I) {
                    var eK=eI; void 0x0===I&&(I=!0x1), this["bDisplay"]&&(this['lockDisplay']?this["node"]["active"]=!0x0:this["node"]["active"]=!I);
                }, H["onAutoParticle"]=function() {
                    var eL=eI, I=this; DDSTL["MinGameAdapter"]["getInstance"]()["getIsIOSModel"]()['then'](function(J) {
                        var eM=eL; I["bDisplay"]&&I["onInitParticle"](J);
                    });
                }, G;
            }(q))['prototype'], "bDisplay", [v],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), B=f(z['prototype'], "lockDisplay", [w],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), x=z))||x)), k['_RF']["pop"]();
        }
    };
});
