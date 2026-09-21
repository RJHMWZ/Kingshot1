// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/MaterialsPlugIn.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, h, j; return {
        'setters':[function(k) {
            d=k['inheritsLoose'];
        }, function(k) {
            var rC=b; f=k['cclegacy'], g=k['_decorator'], h=k["SkinnedMeshRenderer"], j=k['Component'];
        }], 'execute':function() {
            var rD=b, k; f["_RF"]["push"]( {
            }, "a5eb53I+ahCW55PpoGNthI3", 'MaterialsPlugIn', void 0x0); var m=g["ccclass"], p=(g["property"], c('PropertyKey', function() {
            })); p["MAIN_COLOR"]="mainColor", p["MAIN_TEXTURE"]="mainTexture", p["DISSOLVE_COLOR"]="dissolveColor", p['DISSOLVE_THRESHOLD']='dissolveThreshold', c("MaterialsPlugIn", m('MaterialsPlugIn')(k=function(q) {
                var rF=rD; function u() {
                    var rE=b; for(var w, x=arguments["length"], y=new Array(x), z=0x0; z<x; z++)y[z]=arguments[z]; return(w=q["call"]['apply'](q, [this]['concat'](y))||this)["_materialMap"]=new Map(), w;
                }d(u, q); var v=u["prototype"]; return v["onLoad"]=function() {
                    var rG=rF; this["initMaterials"]();
                }, v["initMaterials"]=function() {
                    var rH=rF; for(var w=this['node']["getComponent"](h), x=0x0; x<w["materials"]["length"]; ++x) {
                        var y=w["getMaterialInstance"](x); this["_materialMap"]['set'](x, y);
                    }
                }, v["getMaterialInstance"]=function(w) {
                    var rI=rF; return this['_materialMap']["get"](w);
                }, v["setMatertialInstance"]=function(w) {
                    var rJ=rF, x=this["node"]["getComponent"](h), y=this["_materialMap"]['get'](w); x["setMaterialInstance"](y, 0x0);
                }, v["changeMaterialProperty"]=function(w, x, y) {
                    var rK=rF, z=this["_materialMap"]["get"](y); if(!z)return console["error"]("材质不存在"); z['setProperty'](w, x);
                }, u;
            }(j))||k), f["_RF"]["pop"]();
        }
    };
});
