// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/ItemPanel.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameData.ts"], function(d) {
    var f, g, h, j, k, m, p, q, v, w; return {
        'setters':[function(x) {
            var pO=b; f=x["inheritsLoose"];
        }, function(x) {
            var pP=b; g=x["cclegacy"], h=x['_decorator'], j=x["Label"], k=x["Color"], m=x['tween'], p=x['v3'], q=x["easing"], v=x["Component"];
        }, function(x) {
            var pQ=b; w=x["default"];
        }], 'execute':function() {
            var pR=b, x; g["_RF"]["push"]( {
            }, '64329eme4BCvIqYi7uZZt2h', 'ItemPanel', void 0x0); var y=h["ccclass"]; d("ItemPanel", y('ItemPanel')(x=function(z) {
                var pT=pR; function A() {
                    var pS=b; for(var C, D=arguments["length"], E=new Array(D), F=0x0; F<D; F++)E[F]=arguments[F]; return(C=z["call"]["apply"](z, [this]["concat"](E))||this)["_coinsLbl"]=null, C;
                }f(A, z); var B=A["prototype"]; return B["onLoad"]=function() {
                    this['initData']();
                }, B["start"]=function() {
                    var pU=pT; this["initView"]();
                }, B['initData']=function() {
                    var pV=pT; this['_coinsLbl']=this['node']["getChildByName"]("item_coin_panel")["getChildByName"]("num_lbl")["getComponent"](j);
                }, B["update"]=function(C) {
                    var pW=pT; this["updatePanel"]();
                }, B['initView']=function() {
                    var pX=pT; this["_coinsLbl"]["string"]='0';
                }, B['updatePanel']=function() {
                    var pY=pT, C=this, D=Number(this['_coinsLbl']["string"]), E=w["player_data"]['coins']; D!=E&&(this['_coinsLbl']["string"]=''+E, 0x1==this["_coinsLbl"]["node"]["scale"]['x']&&(D<E?(this['_coinsLbl']["color"]=k['GREEN'], m(this["_coinsLbl"]["node"])['to'](0.1,  {
                        'scale':p(1.1, 1.1, 1.1)
                    },  {
                        'easing':q["backOut"]
                    })['to'](0.1,  {
                        'scale':p(0x1, 0x1, 0x1)
                    },  {
                        'easing':q["backIn"]
                    })["call"](function() {
                        var pZ=pY; C["_coinsLbl"]["color"]=k["WHITE"];
                    })["start"]()):(this['_coinsLbl']["color"]=k["RED"], m(this["_coinsLbl"]['node'])['to'](0.1,  {
                        'scale':p(1.1, 1.1, 1.1)
                    },  {
                        'easing':q["backOut"]
                    })['to'](0.1,  {
                        'scale':p(0x1, 0x1, 0x1)
                    },  {
                        'easing':q["backIn"]
                    })["call"](function() {
                        var q0=pY; C["_coinsLbl"]['color']=k['WHITE'];
                    })["start"]())));
                }, A;
            }(v))||x), g["_RF"]['pop']();
        }
    };
});
