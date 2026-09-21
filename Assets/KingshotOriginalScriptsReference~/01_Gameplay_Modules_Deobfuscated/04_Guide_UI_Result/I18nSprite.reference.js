// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/I18nSprite.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./CoreEventManager.ts", './BundleMgr.ts', './I18nMgr.ts', "./CCLog.ts", "./CoreEventName.ts"], function(g) {
    var h, j, k, m, q, v, w, x, y, z, A, B, C; return {
        'setters':[function(D) {
            var po=b; h=D['applyDecoratedDescriptor'], j=D["inheritsLoose"], k=D['initializerDefineProperty'], m=D["assertThisInitialized"];
        }, function(D) {
            var pp=b; q=D['cclegacy'], v=D['_decorator'], w=D["Sprite"], x=D['SpriteFrame'];
        }, function(D) {
            var pq=b; y=D["default"];
        }, function(D) {
            var pr=b; z=D["default"];
        }, function(D) {
            var ps=b; A=D["default"];
        }, function(D) {
            var pt=b; B=D["default"];
        }, function(D) {
            var pu=b; C=D["CoreEventName"];
        }], 'execute':function() {
            var pv=b, D, E, F; q["_RF"]["push"]( {
            }, "4f779cNPblCBIFHmioHvN9e", "I18nSprite", void 0x0); var G=v["ccclass"], H=v["property"]; g("I18nSprite", G('I18nSprite')((F=h((E=function(J) {
                var px=pv; function K() {
                    var pw=b; for(var M, N=arguments['length'], O=new Array(N), P=0x0; P<N; P++)O[P]=arguments[P]; return M=J["call"]["apply"](J, [this]["concat"](O))||this, k(M, "key", F, m(M)), M;
                }j(K, J); var L=K['prototype']; return L["onLoad"]=function() {
                    var py=px; this["node"]["getComponent"](w)["spriteFrame"]=null, y['on'](C['I18N_LOADED_SUCCESS'], this["onI18nBundleLoadedSuccess"], this), this['updateRender']();
                }, L["onDestroy"]=function() {
                    var pz=px; y["off"](C['I18N_LOADED_SUCCESS'], this['onI18nBundleLoadedSuccess'], this);
                }, L["onI18nBundleLoadedSuccess"]=function() {
                    var pA=px; this["updateRender"]();
                }, L["updateRender"]=function() {
                    var pB=px, M=this; B['log']('#\x20I18nSprite\x20updateRender\x20#'), z['bundle']&&z['bundle']['load']("i18n_bundle/i18n_images/"+A["languageKey"]+'/'+this["key"]+"/spriteFrame", x, function(N, O) {
                        var pC=pB; N?console['error'](N):M["node"]['getComponent'](w)['spriteFrame']=O;
                    });
                }, K;
            }(w))["prototype"], "key", [H],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), D=E))||D), q["_RF"]['pop']();
        }
    };
});
