// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/ItemCreate.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts", "./LocationUtil.ts", "./EasyPoolName.ts"], function(d) {
    var f, g, h, j, k, l, p, q, v, w; return {
        'setters':[function(x) {
            f=x['inheritsLoose'];
        }, function(x) {
            var pD=b; g=x["cclegacy"], h=x["_decorator"], j=x['Vec3'], k=x['tween'], l=x["easing"], p=x["Component"];
        }, function(x) {
            var pE=b; q=x["default"];
        }, function(x) {
            v=x['LocationUtil3D'];
        }, function(x) {
            var pF=b; w=x["EASY_POOL_NAME"];
        }], 'execute':function() {
            var pG=b, x; g['_RF']["push"]( {
            }, "14bbcefgBZCFJXGkB3rMgLc", "ItemCreate", void 0x0); var y=h["ccclass"]; h["property"], d("ItemType", function(z) {
                var pH=pG; return z[z['Item_None']=0x0]="Item_None", z[z["Item_Meat"]=0x1]="Item_Meat", z[z["Item_Cash"]=0x2]="Item_Cash", z;
            }( {
            })), d("ItemCreate", y("ItemCreate")(x=function(z) {
                var pJ=pG; function A() {
                    var pI=b; for(var C, D=arguments["length"], E=new Array(D), F=0x0; F<D; F++)E[F]=arguments[F]; return(C=z["call"]['apply'](z, [this]['concat'](E))||this)['_maxNum']=0x64, C["_itemBorn"]=null, C;
                }f(A, z); var B=A['prototype']; return B["onLoad"]=function() {
                    var pK=pJ; this["_maxNum"]=0x1f4, this['_itemBorn']=this["node"]["getChildByName"]("item_born");
                }, B["start"]=function() {
                    var pL=pJ; this["initItemCreate"]();
                }, B["update"]=function(C) {
                }, B['initItemCreate']=function() {
                    var pM=pJ; this["schedule"](this["createMeat"], 0.1);
                }, B["createMeat"]=function() {
                    var pN=pJ; if(this["_itemBorn"]["children"]['length']<this["_maxNum"]) {
                        var C=q['EASY_POOL']["get"](w["MEAT_ITEM"]), D=v["getTargetWpsPosByRowCol"](this["_itemBorn"], 0x3, 0x5, 0.5, 1.2, 0.3); this["_itemBorn"]["addChild"](C), C['worldPosition']=D, C["setScale"](j["ZERO"]), k(C)['to'](0.3,  {
                            'scale':j['ONE']
                        },  {
                            'easing':l["backOut"]
                        })["start"]();
                    }
                }, A;
            }(p))||x), g['_RF']["pop"]();
        }
    };
});
