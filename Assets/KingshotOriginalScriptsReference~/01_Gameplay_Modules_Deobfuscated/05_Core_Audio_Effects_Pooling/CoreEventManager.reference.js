// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CoreEventManager.ts", ['cc'], function(c) {
    var d; return {
        'setters':[function(e) {
            var hU=b; d=e["cclegacy"];
        }], 'execute':function() {
            var hV=b; d["_RF"]["push"]( {
            }, "e1051snEjtJ35J8+QHJuAMw", 'CoreEventManager', void 0x0), c("default", new(function() {
                var hX=hV; function e() {
                    var hW=b; this["handle"]= {
                    };
                }var f=e["prototype"]; return f['on']=function(g, h, i) {
                    var hY=hX; this["handle"][g]||(this['handle'][g]=[]); var j= {
                        'func':h, 'target':i
                    }; this["handle"][g]['push'](j);
                }, f["off"]=function(g, h, j) {
                    var hZ=hX, k=this['handle'][g]; if(k&&!(k["length"]<=0x0))for(var l=0x0; l<k["length"]; l++) {
                        var m=k[l]; if(m["func"]===h&&(!j||j===m["target"])) {
                            k["splice"](l, 0x1); break;
                        }
                    }
                }, f["dispatchEvent"]=function(g) {
                    var i0=hX, j=this["handle"][g]; if(j&&!(j["length"]<=0x0)) {
                        for(var k=arguments["length"], l=new Array(k>0x1?k-0x1:0x0), m=0x1; m<k; m++)l[m-0x1]=arguments[m]; for(var o=0x0; o<j["length"]; o++) {
                            var p=j[o]; p['func']["apply"](p["target"], l);
                        }
                    }
                }, e;
            }())()), d["_RF"]["pop"]();
        }
    };
});
