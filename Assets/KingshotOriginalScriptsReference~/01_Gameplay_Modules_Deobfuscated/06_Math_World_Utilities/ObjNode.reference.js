// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/ObjNode.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g; return {
        'setters':[function(h) {
            var t2=b; d=h["createClass"];
        }, function(h) {
            var t3=b; f=h['cclegacy'], g=h["Vec3"];
        }], 'execute':function() {
            var t4=b; f["_RF"]["push"]( {
            }, "9d661UWmWZJD5z2gCcELJE7", "ObjNode", void 0x0), c("ObjNode", function() {
                var t6=t4; function h(k, m, p, q, v) {
                    var t5=b; if(void 0x0===v&&(v=null), this["obj3D"]=void 0x0, this["id0"]=0x0, this['id1']=0x0, this['normal']=new g(), this["center"]=new g(), this["bound"]=null, this["vertices"]=null, this['flag']=0x0, this['isBox']=!0x0, this['rayDist']=0x0, this['maxLevel']=0x4, this["targets"]=[], this["_normal"]=new g(), this["_center"]=new g(), this["flag"]=0x0, this["id0"]=m, this["id1"]=p, this["obj3D"]=k, this["bound"]=q, this["vertices"]=v, this['isBox']=!v, this['isBox'])this["center"]['x']=(q[0x0]+q[0x3])/0x2, this["center"]['y']=(q[0x1]+q[0x4])/0x2, this["center"]['z']=(q[0x2]+q[0x5])/0x2, this['vertices']=this["obj3D"]["getVertices"](this["id1"]); else {
                        this["center"]['x']=(v[0x0]+v[0x3]+v[0x6])/0x3, this["center"]['y']=(v[0x1]+v[0x4]+v[0x7])/0x3, this["center"]['z']=(v[0x2]+v[0x5]+v[0x8])/0x3; var w=v[0x3]-v[0x0], x=v[0x4]-v[0x1], y=v[0x5]-v[0x2], z=v[0x6]-v[0x0], A=v[0x7]-v[0x1], B=v[0x8]-v[0x2]; this["normal"]['x']=x*B-y*A, this["normal"]['y']=y*z-w*B, this['normal']['z']=w*A-x*z, this["normal"]["normalize"]();
                    }
                }var j=h['prototype']; return j["getVertices"]=function() {
                    var t7=t6; return this["vertices"];
                }, j["getWorldMatrix"]=function() {
                    var t8=t6; return this["obj3D"]["getWorldMatrix"]();
                }, j["getColliderShape"]=function() {
                    var t9=t6; return this["obj3D"]["getColliderShape"]();
                }, j["getWorldBound"]=function() {
                    var ta=t6; if(!this['isBox']) {
                        var k=this['bound'], l=this["getWorldMatrix"](); return this['obj3D']["calculateBound"]([], k, l);
                    }return this["obj3D"]["getWorldBound"](this["id1"]);
                }, j["getWorldCenter"]=function() {
                    var tb=t6; return g["transformMat4"](this["_center"], this["center"], this["getWorldMatrix"]());
                }, j["getWorldNormal"]=function() {
                    var tc=t6; return g["transformQuat"](this["_normal"], this["normal"], this["obj3D"]["getWorldRotation"]());
                }, j["insert"]=function(k) {
                    var td=t6; this["targets"]["push"](k);
                }, j['remove']=function(k) {
                    var te=t6, l=this["targets"], m=l["indexOf"](k); if(-0x1!=m) {
                        var n=l['length']-0x1; l[m]=l[n], l["length"]=n;
                    }
                }, j['clear']=function() {
                    var tf=t6; this["obj3D"]=null, this["bound"]=null, this["targets"]=null, this["vertices"]=null;
                }, d(h, [ {
                    'key':"mask", 'get':function() {
                        var tg=t6; return this["obj3D"]["mask"];
                    }
                },  {
                    'key':'group', 'get':function() {
                        var th=t6; return this["obj3D"]["group"];
                    }
                }]), h;
            }()), f['_RF']["pop"]();
        }
    };
});
