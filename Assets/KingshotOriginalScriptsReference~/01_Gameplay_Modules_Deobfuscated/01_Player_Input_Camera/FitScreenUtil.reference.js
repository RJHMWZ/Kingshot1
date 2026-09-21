// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/FitScreenUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FitScreenConst.ts', "./CoreEventManager.ts", "./CoreEventName.ts"], function(d) {
    var f, g, j, k, l, m, p, q, v, w, x, y, z; return {
        'setters':[function(A) {
            var l1=b; f=A["inheritsLoose"], g=A['createClass'];
        }, function(A) {
            var l2=b; j=A["cclegacy"], k=A["_decorator"], l=A['view'], m=A["ResolutionPolicy"], p=A["screen"], q=A['Component'];
        }, function(A) {
            var l3=b; v=A["SCREEN_DIRCTION"], w=A['SCREEN_DIR'], x=A["DESIGN_RESOLUTION"];
        }, function(A) {
            var l4=b; y=A["default"];
        }, function(A) {
            var l5=b; z=A["CoreEventName"];
        }], 'execute':function() {
            var l6=b, A; j['_RF']["push"]( {
            }, "ec73cjfUVNI4L4nzbgFKzdZ", "FitScreenUtil", void 0x0); var B=k['ccclass']; k["property"], d('default', B(A=function(C) {
                var l8=l6; function D() {
                    var l7=b; return C["apply"](this, arguments)||this;
                }f(D, C); var F=D["prototype"]; return F["onLoad"]=function() {
                    var l9=l8, G=this; l['on']("canvas-resize", function() {
                        var la=l9; G["adapt"]();
                    }, this), this['scheduleOnce'](function() {
                        var lb=l9; G["adapt"]();
                    }, 0x0);
                }, F['adapt']=function() {
                    var lc=l8; if(this["ScreenDir"]==v["VERTICAL"]) {
                        if(v["VERTICAL"]==w["DIR"])return; w["DIR"]=v["VERTICAL"], this["setFitWidth"](), y["dispatchEvent"](z["SCREEN_CHANGE"], v["VERTICAL"]);
                    }else {
                        if(v["HORIZONTAL"]==w['DIR'])return; w["DIR"]=v["HORIZONTAL"], this["setFitHeight"](), y["dispatchEvent"](z["SCREEN_CHANGE"], v["HORIZONTAL"]);
                    }
                }, F["setFitHeight"]=function() {
                    var ld=l8; l['setDesignResolutionSize'](x['HEIGHT'], x["WIDTH"], m["FIXED_HEIGHT"]);
                }, F['setFitWidth']=function() {
                    var le=l8; l["setDesignResolutionSize"](x["WIDTH"], x["HEIGHT"], m["FIXED_HEIGHT"]);
                }, g(D, [ {
                    'key':"ScreenRatio", 'get':function() {
                        var lf=l8; return l["getDesignResolutionSize"]()["width"]/l["getDesignResolutionSize"]()['height'];
                    }
                },  {
                    'key':'ScreenDir', 'get':function() {
                        var lg=l8; return p["windowSize"]["width"]/p["windowSize"]['height']<=0x1?v["VERTICAL"]:v["HORIZONTAL"];
                    }
                }]), D;
            }(q))||A), j["_RF"]["pop"]();
        }
    };
});
