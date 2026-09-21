// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CCEffectMgrConst.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(d) {
    var f, g, h, j, k, l; return {
        'setters':[function(m) {
            var gl=b; f=m["applyDecoratedDescriptor"], g=m["initializerDefineProperty"];
        }, function(m) {
            var gm=b; h=m['cclegacy'], j=m['_decorator'], k=m["Enum"], l=m['Prefab'];
        }], 'execute':function() {
            var gn=b, m, q, v, w, x, z, A, B, D, G, H; h['_RF']["push"]( {
            }, "c3950eHjKlOgov/VTOggC/q", 'CCEffectMgrConst', void 0x0); var I=j['ccclass'], J=j["property"], K=(j["executeInEditMode"], d("GLOBAL_EFFECT_EVENT", function() {
            })); K["EFFECT_SHOW"]="EFFECT_SHOW", K["EFFECT_HIDE"]='EFFECT_HIDE'; var L=d("EFFECT_TYPE", function(M) {
                var go=gn; return M[M["NONE"]=0x0]="NONE", M[M["BOOM_SMOKE"]=0x1]="BOOM_SMOKE", M[M["UP_GRADE"]=0x2]="UP_GRADE", M[M["UP_GRADE_FIRE"]=0x3]="UP_GRADE_FIRE", M;
            }( {
            })); k(L), d("ITEM_EFFECT", (m=I('ITEM_EFFECT'), q=J( {
                'type':l, 'displayName':"特效预制体"
            }), v=J( {
                'type':L, 'displayName':"特效粒子"
            }), w=J( {
                'displayName':"初始化数量"
            }), x=J( {
                'displayName':"特效名称"
            }), m((B=f((A=function() {
                var gp=gn; g(this, "particleEffect", B, this), g(this, "effectType", D, this), g(this, "initCount", G, this), g(this, "effectName", H, this);
            })['prototype'], 'particleEffect', [q],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), D=f(A["prototype"], "effectType", [v],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var gq=gn; return L["NONE"];
                }
            }), G=f(A["prototype"], "initCount", [w],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), H=f(A["prototype"], "effectName", [x],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), z=A))||z)), h['_RF']["pop"]();
        }
    };
});
