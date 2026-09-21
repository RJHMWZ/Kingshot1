// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Coin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameData.ts", "./GameConfig.ts", "./BezierAction.ts", './LocationUtil.ts'], function(f) {
    var g, j, k, m, p, q, v, w, x, y, z, A; return {
        'setters':[function(B) {
            var hg=b; g=B["inheritsLoose"];
        }, function(B) {
            var hh=b; j=B["cclegacy"], k=B["_decorator"], m=B["Tween"], p=B['v3'], q=B["math"], v=B["tween"], w=B['Component'];
        }, function(B) {
            var hi=b; x=B["default"];
        }, function(B) {
            var hj=b; y=B["default"];
        }, function(B) {
            var hk=b; z=B["BezierAction"];
        }, function(B) {
            var hl=b; A=B["LocationUtil3D"];
        }], 'execute':function() {
            var hm=b, B; j["_RF"]["push"]( {
            }, "99e6cM0NMVKnK52ruI3T2tO", "Coin", void 0x0); var C=k['ccclass']; k['property'], f("Coin", C('Coin')(B=function(D) {
                var ho=hm; function E() {
                    var hn=b; for(var G, H=arguments['length'], I=new Array(H), J=0x0; J<H; J++)I[J]=arguments[J]; return(G=D["call"]["apply"](D, [this]["concat"](I))||this)["isSuck"]=!0x1, G['isJump']=!0x1, G['suckTarget']=null, G["_target"]=null, G;
                }g(E, D); var F=E["prototype"]; return F["start"]=function() {
                }, F["init"]=function(G) {
                    var hp=ho; this["isSuck"]=!0x1, this["isJump"]=!0x0, m['stopAllByTarget'](this["node"]), this["node"]["eulerAngles"]=p(0x0, -0x2d, -0x5a), this["node"]["worldPosition"]=G, this["node"]['setScale'](p(0x1, 0x1, 0x1)), this["move"]();
                }, F["move"]=function() {
                    var hq=ho, G=this, H=[-0x5, 0x5], I=p(q['randomRange'](-0x2, 0x2), q['randomRange'](0xa, 0xc), q["randomRange"](-0x2, 0x2)), J=p(this["node"]["worldPosition"]['x']+q['randomRange'](H[0x0], H[0x1]), this["node"]['worldPosition']['y'], this["node"]["worldPosition"]['z']+q['randomRange'](H[0x0], H[0x1])), K=z["bezierWpsMove"](this["node"], 0.5, this['node']['getWorldPosition'](), J, I), L=q['randomRange'](0.1, 0.15); v(this["node"])["sequence"](K, v(this['node'])['by'](L,  {
                        'position':p(0x0, 0x2, 0x0)
                    }), v(this["node"])['by'](L/0x2,  {
                        'position':p(0x0, -0x2, 0x0)
                    }), v(this['node'])['by'](L,  {
                        'position':p(0x0, 0x1, 0x0)
                    }), v(this["node"])['by'](L/0x2,  {
                        'position':p(0x0, -0x1, 0x0)
                    }))["call"](function() {
                        var hr=hq; G["isJump"]=!0x1; var M=A['getDistanceHorizontal'](G["node"], y["PLAYER"]["node"]); (G['node']["parent"]['children']["length"]>=x["game_limit_data"]["max_coins"]||M>0x14)&&y["EASY_POOL"]["put"](G["node"]);
                    })["start"]();
                }, F["recycle"]=function() {
                    var hs=ho; m["stopAllByTarget"](this["node"]), this["isSuck"]=!0x1, this["node"]["eulerAngles"]=p(0x0, 0x0, 0x0), y["EASY_POOL"]["put"](this["node"]);
                }, F["rotate"]=function() {
                    var ht=ho; v(this["node"])['by'](1.5,  {
                        'eulerAngles':p(0x0, 0x168, 0x0)
                    })['repeatForever']()["start"]();
                }, F["suck"]=function(G) {
                    var hu=ho; this["_target"]=G, this['isSuck']||(this["isSuck"]=!0x0);
                }, E;
            }(w))||B), j["_RF"]["pop"]();
        }
    };
});
