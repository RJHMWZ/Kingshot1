// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Debug.ts", ['cc'], function(c) {
    var d, f, g, h, j; return {
        'setters':[function(k) {
            var ii=b; d=k["cclegacy"], f=k["VERSION"], g=k["director"], h=k["geometry"], j=k['Vec3'];
        }], 'execute':function() {
            var ij=b; d["_RF"]["push"]( {
            }, "90c29qW03pOxK392XmXl1RX", "Debug", void 0x0); var k=c('Debug', function() {
                var il=ij; function l() {
                }return l['getRenderer']=function() {
                    var ik=b; return this["renderer"]||(parseInt(f["charAt"](0x2))<0x6?this['renderer']=g["root"]['pipeline']["geometryRenderer"]:(this["camera"]&&this["camera"]["camera"]["initGeometryRenderer"](), this['renderer']=this["camera"]["camera"]["geometryRenderer"])), this["renderer"];
                }, l["addBox"]=function(m, p, q) {
                    var im=il, v=this["getRenderer"](); if(v&&v["addBoundingBox"]) {
                        var w=m[0x0]+m[0x3], x=m[0x1]+m[0x4], y=m[0x2]+m[0x5], z=m[0x3]-m[0x0], A=m[0x4]-m[0x1], B=m[0x5]-m[0x2], C=h["AABB"]['create'](0.5*w, 0.5*x, 0.5*y, 0.5*z, 0.5*A, 0.5*B); v['addBoundingBox'](C, q, !0x0, !0x0, !0x0, !0x0, p);
                    }
                }, l["addTriangle"]=function(m, p, q) {
                    var io=il, s=this['getRenderer'](); if(s&&s["addBoundingBox"]) {
                        var u=new j(m[0x0], m[0x1], m[0x2])["transformMat4"](p), v=new j(m[0x3], m[0x4], m[0x5])['transformMat4'](p), w=new j(m[0x6], m[0x7], m[0x8])['transformMat4'](p); s['addTriangle'](u, v, w, q);
                    }
                }, l["addLine"]=function(m, o, p, q) {
                    var ip=il, s=this["getRenderer"](); s&&s["addLine"]&&s['addLine'](m, o, q);
                }, l;
            }()); k['renderer']=null, k['camera']=null, d["_RF"]["pop"]();
        }
    };
});
