// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/ShadowComp.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', './Shadow.ts'], function(f) {
    var g, j, k, m, p, q, v, w, x, y, z, A; return {
        'setters':[function(B) {
            var vT=b; g=B["applyDecoratedDescriptor"], j=B["inheritsLoose"], k=B['initializerDefineProperty'], m=B["assertThisInitialized"];
        }, function(B) {
            var vU=b; p=B["cclegacy"], q=B["_decorator"], v=B["Prefab"], w=B["Node"], x=B['instantiate'], y=B["Component"], z=B['v3'];
        }, function(B) {
            var vV=b; A=B["Shadow"];
        }], 'execute':function() {
            var vW=b, B, D, E, F, G, H, I, J, K; p["_RF"]["push"]( {
            }, '230dbGUGYFMY7rJrlhd5s1F', 'ShadowComp', void 0x0); var L=q["ccclass"], M=q["property"]; f("ShadowComp", (B=L('ShadowComp'), D=M(v), E=M(w), B((H=g((G=function(N) {
                var vY=vW; function O() {
                    var vX=b; for(var Q, R=arguments['length'], T=new Array(R), U=0x0; U<R; U++)T[U]=arguments[U]; return Q=N["call"]['apply'](N, [this]["concat"](T))||this, k(Q, "shadowPrefab", H, m(Q)), k(Q, "shadowTarget", I, m(Q)), k(Q, "shadowOffset", J, m(Q)), k(Q, "shadowScale", K, m(Q)), Q["_shadow"]=null, Q;
                }j(O, N); var P=O["prototype"]; return P["onLoad"]=function() {
                    this['createShadow']();
                }, P["createShadow"]=function() {
                    var vZ=vY; this["_shadow"]||(this["_shadow"]=x(this["shadowPrefab"]), this["shadowTarget"]['addChild'](this["_shadow"]), this['_shadow']["getComponent"](A)["initShadow"](this["shadowTarget"], this["shadowOffset"], this["shadowScale"]));
                }, P["show"]=function() {
                    var w0=vY; this['_shadow']&&(this["_shadow"]["active"]=!0x0);
                }, P["hide"]=function() {
                    var w1=vY; this["_shadow"]&&(this['_shadow']["active"]=!0x1);
                }, O;
            }(y))["prototype"], "shadowPrefab", [D],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), I=g(G["prototype"], "shadowTarget", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), J=g(G["prototype"], "shadowOffset", [M],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return z(0x0, 0.1, 0x0);
                }
            }), K=g(G["prototype"], 'shadowScale', [M],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return z(0x1, 0x1, 0x1);
                }
            }), F=G))||F)), p['_RF']["pop"]();
        }
    };
});
