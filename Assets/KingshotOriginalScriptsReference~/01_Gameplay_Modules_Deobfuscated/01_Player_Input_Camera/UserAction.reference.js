// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/UserAction.ts", ['cc', "./playable_controller.ts", "./CCLog.ts", "./CoreEventManager.ts", "./CoreEventName.ts"], function(c) {
    var d, f, g, h, j, k, l; return {
        'setters':[function(m) {
            var zb=b; d=m["cclegacy"], f=m["_decorator"], g=m["game"];
        }, function(m) {
            var zc=b; h=m["default"];
        }, function(m) {
            var zd=b; j=m["default"];
        }, function(m) {
            k=m['default'];
        }, function(m) {
            var ze=b; l=m["CoreEventName"];
        }], 'execute':function() {
            var zf=b, m; d["_RF"]["push"]( {
            }, '185a3r092NMvK9hA82avV4g', 'UserAction', void 0x0); var p=f["ccclass"], q=(f["property"], p("UserAction")(m=function() {
                var zh=zf; function w() {
                    var zg=b; this["isFirst"]=!0x0, this['timerInterval']=0x0, j["log"]('#\x20UserAction\x20constructor\x20#'), g['canvas']["addEventListener"]("touchstart", this["onUserActionStart"]["bind"](this), !0x1), g["canvas"]["addEventListener"]("touchend", this["onUserActionEnd"]["bind"](this), !0x1), g["canvas"]['addEventListener']("mousedown", this["onUserActionStart"]["bind"](this), !0x1), g["canvas"]['addEventListener']("mouseup", this["onUserActionEnd"]["bind"](this), !0x1);
                }var x=w["prototype"]; return x['onUserActionStart']=function() {
                    var zi=zh; j["log"]("- onUserActionStart -"), this['clearInterval'](), k["dispatchEvent"](l["USER_TOUCH_DOWN"]);
                }, x["onUserActionEnd"]=function() {
                    var zj=zh; j["log"]('-\x20onUserActionEnd\x20-'), this['clearInterval'](), this["starTimerInterval"](), k["dispatchEvent"](l["USER_TOUCH_UP"]);
                }, x["starTimerInterval"]=function() {
                    var zk=zh; this["timerInterval"]=setInterval(function() {
                        h['isIronsource']();
                    }, 0x1388);
                }, x["clearInterval"]=function(y) {
                    function z() {
                        var zl=b; return y["apply"](this, arguments);
                    }return z['toString']=function() {
                        return y['toString']();
                    }, z;
                }(function() {
                    var zm=zh; this["timerInterval"]&&(clearInterval(this["timerInterval"]), this["timerInterval"]=0x0);
                }), w;
            }())||m); c('default', new q()), d["_RF"]["pop"]();
        }
    };
});
