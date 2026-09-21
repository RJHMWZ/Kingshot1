// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CoinComp.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts"], function(d) {
    var f, g, h, i, j; return {
        'setters':[function(k) {
            f=k['inheritsLoose'];
        }, function(k) {
            var hD=b; g=k["cclegacy"], h=k["_decorator"], i=k['Component'];
        }, function(k) {
            var hE=b; j=k["default"];
        }], 'execute':function() {
            var hF=b, k; g["_RF"]["push"]( {
            }, "602a2akqOpOC7f2PWhwJwKF", 'CoinComp', void 0x0); var l=h['ccclass']; h["property"], d('CoinComp', l("CoinComp")(k=function(m) {
                var hG=hF; function p() {
                    return m['apply'](this, arguments)||this;
                }f(p, m); var q=p["prototype"]; return q["start"]=function() {
                }, q["update"]=function(s) {
                }, q["onCheck"]=function(s) {
                    var hH=hG, v=s["target"]["name"], w=v["charAt"](v["length"]-0x1); console["log"]("type", w), j["COIN_TYPE"]=Number(w-0x1);
                }, p;
            }(i))||k), g["_RF"]["pop"]();
        }
    };
});
