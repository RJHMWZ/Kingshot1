// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/AreaController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameData.ts", "./GameConfig.ts", "./Area2.ts"], function(d) {
    var f, g, h, j, k, l, m; return {
        'setters':[function(p) {
            var dl=b; f=p["inheritsLoose"];
        }, function(p) {
            var dm=b; g=p["cclegacy"], h=p["_decorator"], j=p['Component'];
        }, function(p) {
            var dn=b; k=p["default"];
        }, function(p) {
            var dp=b; l=p["default"];
        }, function(p) {
            m=p['Area'];
        }], 'execute':function() {
            var dq=b, p; g["_RF"]["push"]( {
            }, '96a05PGCllJhqGVCFelP5Jq', "AreaController", void 0x0); var q=h["ccclass"]; h["property"], d("AreaController", q('AreaController')(p=function(s) {
                var ds=dq; function v() {
                    var dr=b; for(var x, y=arguments['length'], z=new Array(y), A=0x0; A<y; A++)z[A]=arguments[A]; return(x=s["call"]["apply"](s, [this]["concat"](z))||this)["_areaShowData"]=null, x;
                }f(v, s); var w=v['prototype']; return w["onLoad"]=function() {
                    var dt=ds; this["initData"]();
                }, w["start"]=function() {
                    this['initView']();
                }, w["update"]=function(x) {
                }, w["initData"]=function() {
                    var du=ds; this["_areaShowData"]=k["area_data"]["area_show"];
                }, w["initView"]=function() {
                    var dv=ds; if(this["_areaShowData"])for(var x=0x0; x<this["_areaShowData"]["length"]; x++) {
                        var y=this['_areaShowData'][x]; this["unlockArea"](y);
                    }
                }, w['unlockArea']=function(x) {
                    var dw=ds; this["node"]['children'][x-0x1]["active"]=!0x0;
                }, w["getArea"]=function(x) {
                    var dx=ds; return this["node"]["children"][x-0x1]['getComponent'](m);
                }, w["unlockTower"]=function(x) {
                    var dy=ds; l["TOWER_CTRL"]['unlockTower'](x);
                }, v;
            }(j))||p), g["_RF"]["pop"]();
        }
    };
});
