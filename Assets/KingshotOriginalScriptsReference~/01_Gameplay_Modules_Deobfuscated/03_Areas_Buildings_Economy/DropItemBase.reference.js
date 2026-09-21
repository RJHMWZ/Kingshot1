// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/DropItemBase.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, h, j, k, l; return {
        'setters':[function(m) {
            var iI=b; d=m["inheritsLoose"], f=m['createClass'];
        }, function(m) {
            var iJ=b; g=m["cclegacy"], h=m["_decorator"], j=m["RigidBody"], k=m["BoxCollider"], l=m["Component"];
        }], 'execute':function() {
            var iK=b, m; g["_RF"]['push']( {
            }, 'ca277SBLX1LlaHSwvD5VBKU', "DropItemBase", void 0x0); var q=h["ccclass"]; h["property"], c("DropItemBase", q("DropItemBase")(m=function(u) {
                var iM=iK; function v() {
                    var iL=b; for(var x, y=arguments['length'], z=new Array(y), A=0x0; A<y; A++)z[A]=arguments[A]; return(x=u["call"]["apply"](u, [this]["concat"](z))||this)["_bDropDone"]=!0x0, x;
                }d(v, u); var w=v["prototype"]; return w["start"]=function() {
                }, w["update"]=function(x) {
                }, w['enablePhysics']=function() {
                    var iN=iM; this["node"]["getComponent"](j)["enabled"]=!0x0, this["node"]["getComponent"](k)["enabled"]=!0x0;
                }, w['disablePhysics']=function() {
                    var iO=iM; this['node']['getComponent'](j)['enabled']=!0x1, this["node"]['getComponent'](k)['enabled']=!0x1;
                }, f(v, [ {
                    'key':"bDropDone", 'get':function() {
                        return this['_bDropDone'];
                    }, 'set':function(x) {
                        var iP=iM; this["_bDropDone"]=x;
                    }
                }]), v;
            }(l))||m), g["_RF"]["pop"]();
        }
    };
});
