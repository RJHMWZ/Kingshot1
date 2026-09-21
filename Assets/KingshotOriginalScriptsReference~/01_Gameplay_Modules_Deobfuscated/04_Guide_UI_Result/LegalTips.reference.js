// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/LegalTips.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./I18nData.ts", "./I18nMgr.ts"], function(c) {
    var d, f, g, h, j, k, m; return {
        'setters':[function(p) {
            var r2=b; d=p["inheritsLoose"];
        }, function(p) {
            var r3=b; f=p["cclegacy"], g=p['_decorator'], h=p["Label"], j=p["Component"];
        }, function(p) {
            var r4=b; k=p["I18nData"];
        }, function(p) {
            var r5=b; m=p["default"];
        }], 'execute':function() {
            var r6=b, p; f["_RF"]["push"]( {
            }, "a9bfcVQQ5ZCRYFrFKsxVyLj", "LegalTips", void 0x0); var q=g["ccclass"]; g["property"], c('LegalTips', q("LegalTips")(p=function(u) {
                var r8=r6; function v() {
                    var r7=b; for(var x, y=arguments["length"], z=new Array(y), A=0x0; A<y; A++)z[A]=arguments[A]; return(x=u['call']["apply"](u, [this]['concat'](z))||this)["_tipsLbl"]=null, x;
                }d(v, u); var w=v["prototype"]; return w["onLoad"]=function() {
                    var r9=r8; this["initData"]();
                }, w["start"]=function() {
                    var ra=r8; this["initView"]();
                }, w["initData"]=function() {
                    var rb=r8; this["_tipsLbl"]=this["node"]["getChildByName"]("legal_tips_lbl")["getComponent"](h);
                }, w["initView"]=function() {
                    var rc=r8; this["_tipsLbl"]['string']="확률형 아이템 포함", this['_tipsLbl']["node"]['active']=m["languageKey"]==k['ko'];
                }, v;
            }(j))||p), f['_RF']['pop']();
        }
    };
});
