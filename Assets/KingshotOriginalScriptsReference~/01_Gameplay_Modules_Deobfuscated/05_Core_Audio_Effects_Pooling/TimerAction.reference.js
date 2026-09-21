// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/TimerAction.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(c) {
    var d, e; return {
        'setters':[function(f) {
            var xM=b; d=f["createClass"];
        }, function(f) {
            var xN=b; e=f["cclegacy"];
        }], 'execute':function() {
            var xO=b; e['_RF']["push"]( {
            }, '0daaalfiZZOdaeWoy+Mgh6Y', "TimerAction", void 0x0), c('TimerAction', function() {
                var xQ=xO; function f(h, j, k) {
                    var xP=b; void 0x0===j&&(j=0x3e8), this["_nNextActionTime"]=0x0, this['_nDistanceTime']=0x3e8, this['_action']=null, this["_isRunning"]=!0x1, this["_target"]=null, this["_target"]=h, this['_nNextActionTime']=0x0, this["_nDistanceTime"]=j, this["_action"]=k;
                }var g=f["prototype"]; return g['run']=function() {
                    var xR=xQ; this["_isRunning"]=!0x0;
                }, g['stop']=function() {
                    this['_isRunning']=!0x1;
                }, g["reset"]=function() {
                    var xS=xQ; this["_nNextActionTime"]=Date["now"]()+this["_nDistanceTime"], this['run']();
                }, g["update"]=function(h) {
                    var xT=xQ; this["_action"]&&this['_isRunning']&&(Date['now']()<this['_nNextActionTime']||(this['_nNextActionTime']=Date["now"]()+this["_nDistanceTime"], this['_action']["apply"](this['_target'], [h])));
                }, d(f, [ {
                    'key':'action', 'get':function() {
                        var xU=xQ; return this["_action"];
                    }, 'set':function(h) {
                        var xV=xQ; this["_action"]=h;
                    }
                },  {
                    'key':"nextActionTime", 'get':function() {
                        var xW=xQ; return this["_nNextActionTime"];
                    }, 'set':function(h) {
                        var xX=xQ; this["_nNextActionTime"]=h;
                    }
                },  {
                    'key':"distanceTime", 'get':function() {
                        var xY=xQ; return this["_nDistanceTime"];
                    }, 'set':function(h) {
                        var xZ=xQ; this["_nDistanceTime"]=h;
                    }
                }]), f;
            }()), e["_RF"]["pop"]();
        }
    };
});
