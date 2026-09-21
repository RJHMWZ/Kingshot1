// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/Quaternion.ts", ['cc'], function(c) {
    var d, e, f; return {
        'setters':[function(g) {
            var vf=b; d=g['cclegacy'], e=g["Quat"], f=g["Vec3"];
        }], 'execute':function() {
            var vg=b; d["_RF"]["push"]( {
            }, '41ddbBJiANLz53inHlT34H4', "Quaternion", void 0x0), c("default", new(function() {
                var vi=vg; function g() {
                    var vh=b; this["Deg2Rad"]=Math['PI']/0xb4;
                }var h=g["prototype"]; return h['RotateY']=function(i, j) {
                    var vj=vi, k=new e(); return i['rotation']=e['rotateY'](k, i["rotation"], j*this["Deg2Rad"]), k;
                }, h['RotateX']=function(i, j) {
                    var vk=vi, k=new e(); return i["rotation"]=e['rotateX'](k, i["rotation"], j*this["Deg2Rad"]), k;
                }, h["RotateZ"]=function(i, j) {
                    var vl=vi, k=new e(); return i['rotation']=e['rotateZ'](k, i['rotation'], j*this["Deg2Rad"]), k;
                }, h["RotateAround"]=function(i, j, k) {
                    var vm=vi, l=new e(); return e["rotateAround"](l, i, j, k*this["Deg2Rad"]), l;
                }, h["RotateAroundLocal"]=function(i, j, k) {
                    var vn=vi, l=new e(); return e["rotateAroundLocal"](l, i, j, k*this['Deg2Rad']), l;
                }, h["RotationAroundNode"]=function(j, k, l, m) {
                    var vo=vi, p=new e(), q=new f(), s=new f(), v=j["position"], w=m*this["Deg2Rad"]; return e["fromAxisAngle"](p, l, w), f["subtract"](q, v, k), f["transformQuat"](s, q, p), j['position']=f["add"](s, k, s), e["rotateAround"](p, j["rotation"], l, w), p;
                }, h['GetEulerFromQuat']=function(i) {
                    var vp=vi; return e["toEuler"](new f(), i, !0x0);
                }, h["GetQuatFromAngle"]=function(i) {
                    return e['fromEuler'](new e(), i['x'], i['y'], i['z']);
                }, h["Lerp"]=function(i, j, k) {
                    var l=new e(); return e['lerp'](l, i, j, k), l;
                }, h["Slerp"]=function(i, j, k) {
                    var vq=vi, l=new e(); return e["slerp"](l, i, j, k), l;
                }, h['LookRotation']=function(i, j) {
                    var vr=vi; void 0x0===j&&(j=f['UP']); var k=new e(); return f['normalize'](i, i), e["fromViewUp"](k, i, j), k;
                }, g;
            }())()), d['_RF']['pop']();
        }
    };
});
