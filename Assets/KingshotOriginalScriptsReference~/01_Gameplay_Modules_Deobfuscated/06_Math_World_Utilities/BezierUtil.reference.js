// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/BezierUtil.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(c) {
    var d, f, g; return {
        'setters':[function(h) {
            var eX=b; d=h["inheritsLoose"];
        }, function(h) {
            var eY=b; f=h['cclegacy'], g=h["Vec3"];
        }], 'execute':function() {
            var eZ=b; f["_RF"]["push"]( {
            }, '445d996M/FAh6xIGvZnk5Ha', "BezierUtil", void 0x0); var h=c("BezierUtil", function() {
                var f0=eZ; function j() {
                }return j['calcBezier']=function(k, l, m, o) {
                    var p=(0x1-k)*(0x1-k)*l['x']+0x2*k*(0x1-k)*m['x']+k*k*o['x'], q=(0x1-k)*(0x1-k)*l['y']+0x2*k*(0x1-k)*m['y']+k*k*o['y'], s=(0x1-k)*(0x1-k)*l['z']+0x2*k*(0x1-k)*m['z']+k*k*o['z']; return new g(p, q, s);
                }, j["calcBezierControlPaths"]=function(k, l, m, o) {
                    for(var p=[], q=0x0; q<o; q++) {
                        var s=q/(o-0x1); p['push'](j['calcBezier'](s, k, m, l));
                    }return p;
                }, j["bezierMove"]=function(k, l, m, o) {
                    var f1=f0; return j["calcBezier"](k, l, o, m);
                }, j;
            }()); c("BezierUtil3D", function(j) {
                var f2=eZ; function k() {
                    return j['apply'](this, arguments)||this;
                }return d(k, j), k["getAngle"]=function(l, m) {
                    var o=m['x']-l['x'], p=(m['y'], l['y'], m['z']-l['z']); return(Math['atan2'](p, o)*(0xb4/Math['PI'])+0x168)%0x168;
                }, k;
            }(h)), c('BezierUtil2D', function(j) {
                var f4=eZ; function k() {
                    var f3=b; return j["apply"](this, arguments)||this;
                }return d(k, j), k["getAngle"]=function(l, m) {
                    var f5=f4, o=m['x']-l['x'], p=m['y']-l['y']; return m['z'], l['z'], (Math["atan2"](p, o)*(0xb4/Math['PI'])+0x168)%0x168;
                }, k;
            }(h)), f['_RF']["pop"]();
        }
    };
});
