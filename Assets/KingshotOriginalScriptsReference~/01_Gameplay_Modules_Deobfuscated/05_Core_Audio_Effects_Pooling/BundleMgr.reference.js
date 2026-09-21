// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/BundleMgr.ts", ['cc', './CoreEventManager.ts', "./CCLog.ts", "./CoreEventName.ts"], function(c) {
    var d, f, g, h, i; return {
        'setters':[function(j) {
            var f6=b; d=j["cclegacy"], f=j['assetManager'];
        }, function(j) {
            var f7=b; g=j["default"];
        }, function(j) {
            var f8=b; h=j["default"];
        }, function(j) {
            var f9=b; i=j["CoreEventName"];
        }], 'execute':function() {
            var fa=b; d["_RF"]["push"]( {
            }, 'f13afcBPepGh4r4kOX/+vP1', "BundleMgr", void 0x0), c("default", new(function() {
                var fc=fa; function j() {
                    var fb=b; this['bundle']=null, h["log"]("# BundleMgr constructor #"), this["initBundle"]();
                }return j["prototype"]["initBundle"]=function() {
                    var fd=fc, k=this; f["loadBundle"]("bundle", function(l, m) {
                        var fe=fd; l?(console["error"]("# Load Bundle Error #", l), g["dispatchEvent"](i['BUNDLE_LOADED_FAIL'])):(h["log"]("# Load Bundle Success #", m), k['bundle']=m, g['dispatchEvent'](i['BUNDLE_LOADED_SUCCESS']));
                    });
                }, j;
            }())()), d["_RF"]['pop']();
        }
    };
});
