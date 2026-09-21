// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/LogoPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./playable_controller.ts"], function(d) {
    var f, g, h, j, k, l; return {
        'setters':[function(m) {
            f=m['inheritsLoose'];
        }, function(m) {
            var rv=b; g=m["cclegacy"], h=m["_decorator"], j=m["Node"], k=m["Component"];
        }, function(m) {
            var rw=b; l=m["default"];
        }], 'execute':function() {
            var rx=b, m; g["_RF"]["push"]( {
            }, "53380OJj9hFO7lF4moMoJF/", "LogoPanel", void 0x0); var p=h["ccclass"]; h["property"], d("LogoPanel", p('LogoPanel')(m=function(q) {
                var rz=rx; function r() {
                    var ry=b; return q["apply"](this, arguments)||this;
                }f(r, q); var s=r["prototype"]; return s["onLoad"]=function() {
                }, s["onEnable"]=function() {
                    var rA=rz; this['node']['getChildByName']("download_bg")['on'](j["EventType"]["TOUCH_START"], this["onTouchDownLoad"], this);
                }, s["onDisable"]=function() {
                    var rB=rz; this['node']["getChildByName"]('download_bg')["off"](j["EventType"]["TOUCH_START"], this["onTouchDownLoad"], this);
                }, s["start"]=function() {
                }, s["update"]=function(v) {
                }, s["onTouchDownLoad"]=function() {
                    l['download']();
                }, r;
            }(k))||m), g["_RF"]["pop"]();
        }
    };
});
