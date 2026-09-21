// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/HouseExtra.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AudioMgr.ts", "./AudioName.ts", "./GameConfig.ts"], function(d) {
    var f, g, h, j, k, m, p, q, v, w; return {
        'setters':[function(x) {
            var ow=b; f=x["inheritsLoose"];
        }, function(x) {
            var ox=b; g=x['cclegacy'], h=x['_decorator'], j=x['tween'], k=x['v3'], m=x['easing'], p=x["Component"];
        }, function(x) {
            var oy=b; q=x["default"];
        }, function(x) {
            v=x['AudioName'];
        }, function(x) {
            var oz=b; w=x["default"];
        }], 'execute':function() {
            var oA=b, x; g['_RF']["push"]( {
            }, "9f1ebb8rg5Cs6HxtM2Y/y+s", "HouseExtra", void 0x0); var y=h["ccclass"]; h["property"], d("HouseExtra", y("HouseExtra")(x=function(z) {
                var oB=oA; function A() {
                    return z['apply'](this, arguments)||this;
                }f(A, z); var B=A["prototype"]; return B["start"]=function() {
                }, B['update']=function(C) {
                }, B['show']=function() {
                    var oC=oB, C=this; w["GAME_OVER"]=!0x0; for(var D=function() {
                        var oD=oC, G=C["node"]["children"][E]; j(G)['to'](0.5,  {
                            'scale':k(0x1, 0x1, 0x1)
                        },  {
                            'easing':m["backOut"]
                        })["call"](function() {
                            var oE=oD; q["playShotSound"](v['BUILD'], 0x1, 0xc8), G['getWorldPosition']();
                        })['start']();
                    }, E=0x0; E<this['node']['children']['length']; E++)D(); var F=w["LAYER_GAME"]["getChildByName"]("gate_wall_extra"); this["scheduleOnce"](function() {
                        var oF=oC; for(var G=0x0; G<F["children"]["length"]; G++) {
                            var H=F["children"][G]; j(H)["delay"](0.1*G)['to'](0.5,  {
                                'scale':k(0x1, 0x1, 0x1)
                            },  {
                                'easing':m["backOut"]
                            })["call"](function() {
                                var oG=oF; q["playShotSound"](v['BUILD'], 0x1, 0xc8);
                            })['start']();
                        }
                    }, 0.5);
                }, A;
            }(p))||x), g["_RF"]["pop"]();
        }
    };
});
