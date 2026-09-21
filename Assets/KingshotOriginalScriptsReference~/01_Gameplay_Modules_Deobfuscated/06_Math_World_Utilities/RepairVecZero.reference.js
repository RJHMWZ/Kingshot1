// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/RepairVecZero.ts', ['cc'], function() {
    var d, f; return {
        'setters':[function(g) {
            var vs=b; d=g["cclegacy"], f=g["Vec3"];
        }], 'execute':function() {
            var vt=b; d["_RF"]["push"]( {
            }, 'f07d1IjujdO/67xIdcNdSrC', 'RepairVecZero', void 0x0), f["copy"]=function(g, h) {
                return g&&(g['x']=h&&h['x']||0x0, g['y']=h&&h['y']||0x0, g['z']=h&&h['z']||0x0), g;
            }, f['set']=function(g, h, i, j) {
                return g&&(g['x']=h||0x0, g['y']=i||0x0, g['z']=j||0x0), g;
            }, d["_RF"]['pop']();
        }
    };
});
