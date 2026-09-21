// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/I18nMgr.ts", ['cc', "./CoreEventManager.ts", './BundleMgr.ts', "./CCLog.ts", "./playable_controller.ts", "./CoreEventName.ts", "./I18nData.ts", './PlayableChannel.ts'], function(d) {
    var f, h, j, k, m, p, q, r, v, w; return {
        'setters':[function(x) {
            var p8=b; f=x["cclegacy"], h=x["sys"], j=x['JsonAsset'];
        }, function(x) {
            var p9=b; k=x["default"];
        }, function(x) {
            m=x['default'];
        }, function(x) {
            var pa=b; p=x["default"];
        }, function(x) {
            var pb=b; q=x["default"];
        }, function(x) {
            var pc=b; r=x["CoreEventName"];
        }, function(x) {
            var pd=b; v=x["I18nData"];
        }, function(x) {
            var pe=b; w=x["PlayableChannel"];
        }], 'execute':function() {
            var pf=b; f['_RF']["push"]( {
            }, "459dbV0UbNM0pAA6I1mZtWK", "I18nMgr", void 0x0), d('default', new(function() {
                var ph=pf; function x() {
                    var pg=b; this['languageCode']='', this['languageKey']='', this['i18nBundle']=null, this["i18nTextJson"]=null, p["log"]("# I18nMgr constructor #"), k['on'](r["BUNDLE_LOADED_SUCCESS"], this["onBundleLoadSuccess"], this), k['on'](r["BUNDLE_LOADED_SUCCESS"], this["onBundleLoadFail"], this);
                }var y=x["prototype"]; return y["onBundleLoadSuccess"]=function() {
                    var pi=ph; this["initI18nCode"](), this["initI18n"]();
                }, y["onBundleLoadFail"]=function() {
                }, y["initI18nCode"]=function() {
                    var pj=ph; p["log"]("# I18nMgr initI18n #"), this['languageCode']=h["languageCode"]; var z=h["languageCode"]["slice"](0x0, 0x2); this["languageKey"]=v[z], this['languageKey']?this["languageKey"]==v['zh']&&(this["languageKey"]=window['wx']?v['zh']:v['tw']):this['languageKey']=v['en'], p["log"]("# language code: "+this["languageCode"]+'\x20#'), p["log"]("# language key: "+this["languageKey"]+'\x20#');
                }, y["initI18n"]=function() {
                    var pk=ph, z=this; m["bundle"]["load"]('i18n_bundle/i18n_text/Languages', j, function(A, B) {
                        var pl=pk; A?console['error'](A):(z["i18nTextJson"]=B, z['changeSpecificLanguage'](), k['dispatchEvent'](r['I18N_LOADED_SUCCESS']));
                    });
                }, y['getLanguageTextByKey']=function(z) {
                    var pm=ph, A=''; return this["i18nTextJson"]&&(A=this["i18nTextJson"]["json"][this['languageKey']][z]), A;
                }, y["changeSpecificLanguage"]=function() {
                    var pn=ph; if(!q["isChannel"](w["Google"])) {
                        var z=this["i18nTextJson"]["json"]; for(var A in z) {
                            var B=z[A]; B["common_learn_more"]=B["common_playnow"];
                        }
                    }
                }, x;
            }())()), f["_RF"]['pop']();
        }
    };
});
