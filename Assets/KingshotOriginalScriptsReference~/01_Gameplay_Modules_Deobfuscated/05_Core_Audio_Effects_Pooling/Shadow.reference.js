// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Shadow.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(c) {
    var d, f, g, h, j, k; return {
        'setters':[function(l) {
            var vN=b; d=l["inheritsLoose"];
        }, function(l) {
            var vO=b; f=l["cclegacy"], g=l["_decorator"], h=l['v3'], j=l["Vec3"], k=l["Component"];
        }], 'execute':function() {
            var vP=b, m; f["_RF"]["push"]( {
            }, "0e725MAhIJHSK3+/KsXjuqW", 'Shadow', void 0x0); var p=g["ccclass"]; g["property"], c('Shadow', p("Shadow")(m=function(q) {
                var vR=vP; function u() {
                    var vQ=b; for(var v, w=arguments["length"], x=new Array(w), y=0x0; y<w; y++)x[y]=arguments[y]; return(v=q["call"]["apply"](q, [this]['concat'](x))||this)["tagret"]=null, v["offset"]=j["ZERO"], v["scale"]=j["ONE"], v;
                }return d(u, q), u["prototype"]["initShadow"]=function(v, w, x) {
                    var vS=vR, y=this["node"]["getChildByName"]('shadow_mesh'); this["tagret"]=v, this["offset"]=w, this["scale"]=x, this["node"]["worldPosition"]=this["tagret"]['getWorldPosition'](), this["node"]["worldPosition"]=h(this["node"]["worldPosition"]['x']+this["offset"]['x'], this["node"]["worldPosition"]['y']+this["offset"]['y'], this["node"]["worldPosition"]['z']+this["offset"]['z']), this["node"]["eulerAngles"]=h(0x0, 0x0, 0x0), y["eulerAngles"]=h(-0x5a, 0x0, 0x0), y["setScale"](this['scale']);
                }, u;
            }(k))||m), f["_RF"]["pop"]();
        }
    };
});
