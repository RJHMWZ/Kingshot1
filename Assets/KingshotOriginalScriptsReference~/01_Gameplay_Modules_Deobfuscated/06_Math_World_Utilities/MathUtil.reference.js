// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/MathUtil.ts", ['cc'], function(c) {
    var d, f, g, h, i; return {
        'setters':[function(j) {
            var rQ=b; d=j["cclegacy"], f=j['v2'], g=j['v3'], h=j["Vec3"], i=j['math'];
        }], 'execute':function() {
            var rR=b; d["_RF"]["push"]( {
            }, "37e57Ej0SZH7I/Ir3cBmJSD", 'MathUtil', void 0x0), c("MathUtil", function() {
                var rT=rR; function j() {
                }return j['getVisualAngle']=function(k, l) {
                    var rS=b, m=l['x']-k['x'], p=l['z']-k['z']; return Math["atan2"](p, m)*(0xb4/Math['PI'])+0x168;
                }, j["getDownAngle"]=function(k, l) {
                    var rU=rT, m=l['z']-k['z'], p=l['y']-k['y']; return Math["atan2"](p, m)*(0xb4/Math['PI'])+0x168;
                }, j['getTranslate']=function(k, l, m) {
                    var rV=rT, p=k['x']+Math["cos"](0x2*Math['PI']/0x168*l)*m, q=k['y']+Math["sin"](0x2*Math['PI']/0x168*l)*m; return f(p, q);
                }, j["getBezierControlPoint"]=function(k, m, p, q) {
                    var rW=rT; void 0x0===p&&(p=0.5), void 0x0===q&&(q=g(0x0, 0x3, 0x0)), p=(p=p>0x1?0x1:p)<0x0?0x0:p; var s=j["getVisualAngle"](k, m), v=h["distance"](k, m)*p, w=j["getTranslate"](f(k['x'], k['z']), s, v); return q["add"](g(w['x'], k['y'], w['y']));
                }, j['getRandomItem']=function(k) {
                    var rX=rT; return k[Math["floor"](Math["random"]()*k["length"])];
                }, j["IsInContainsPoint"]=function(k, l, m, p) {
                    var rY=rT; return Math['pow'](p['x']-k['x'], 0x2)/Math["pow"](l, 0x2)+Math['pow'](p['y']-k['y'], 0x2)/Math["pow"](m, 0x2)<=0x1;
                }, j["getRandomRange"]=function(k, l) {
                    var rZ=rT; return i["randomRange"](k, l);
                }, j["radianToAngle"]=function(k) {
                    return 0xb4/Math['PI']*k;
                }, j["angleToRadian"]=function(k) {
                    return Math['PI']/0xb4*k;
                }, j["clamp"]=function(k, l, m) {
                    return k>m?m:k<l?l:k;
                }, j['lerp']=function(k, l, m) {
                    return m>0x0&&m<0x1?(l-k)*m+k:m<=0x0?k:l;
                }, j["normalizeAngle360"]=function(k) {
                    return(k%=0x168)<0x0&&(k+=0x168), k;
                }, j;
            }()), d["_RF"]['pop']();
        }
    };
});
