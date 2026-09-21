// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/I18nLabel.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', './CoreEventManager.ts', "./I18nMgr.ts", "./CCLog.ts", "./CoreEventName.ts"], function(f) {
    var g, h, j, k, m, p, q, v, w, x, y; return {
        'setters':[function(z) {
            var oW=b; g=z['applyDecoratedDescriptor'], h=z['inheritsLoose'], j=z["initializerDefineProperty"], k=z["assertThisInitialized"];
        }, function(z) {
            var oX=b; m=z["cclegacy"], p=z["_decorator"], q=z['Label'];
        }, function(z) {
            var oY=b; v=z["default"];
        }, function(z) {
            w=z['default'];
        }, function(z) {
            var oZ=b; x=z["default"];
        }, function(z) {
            var p0=b; y=z["CoreEventName"];
        }], 'execute':function() {
            var p1=b, z, A, B; m['_RF']["push"]( {
            }, '010b5WrrmRFVa06jaajICPk', "I18nLabel", void 0x0); var C=p["ccclass"], D=p["property"]; f("I18nLabel", C('I18nLabel')((B=g((A=function(E) {
                var p3=p1; function F() {
                    var p2=b; for(var H, I=arguments["length"], J=new Array(I), K=0x0; K<I; K++)J[K]=arguments[K]; return H=E['call']['apply'](E, [this]["concat"](J))||this, j(H, "key", B, k(H)), H;
                }h(F, E); var G=F["prototype"]; return G["onLoad"]=function() {
                    var p4=p3; this["node"]["getComponent"](q)['string']='', v['on'](y["I18N_LOADED_SUCCESS"], this['onI18nBundleLoadedSuccess'], this), this["updateRender"]();
                }, G['onDestroy']=function() {
                    var p5=p3; v["off"](y["I18N_LOADED_SUCCESS"], this['onI18nBundleLoadedSuccess'], this);
                }, G["onI18nBundleLoadedSuccess"]=function() {
                    var p6=p3; this["updateRender"]();
                }, G["updateRender"]=function() {
                    var p7=p3; x["log"]("# I18nLabel updateRender #"), w["i18nTextJson"]&&(this["node"]["getComponent"](q)["string"]=w['i18nTextJson']["json"][w["languageKey"]][this["key"]]);
                }, F;
            }(q))['prototype'], 'key', [D],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), z=A))||z), m["_RF"]['pop']();
        }
    };
});
