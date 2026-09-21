// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/playable_controller.ts", ['cc', './BundleMgr.ts', './super_html_playable.ts', "./CCLog.ts", "./PlayableChannel.ts", "./GameConfig.ts"], function(f) {
    var g, j, k, q, v, w, x, y, z, A, B, C, D, E; return {
        'setters':[function(F) {
            var tI=b; g=F["cclegacy"], j=F["sys"], k=F['Node'], q=F["UITransform"], v=F["size"], w=F["Widget"], x=F["resources"], y=F["Prefab"], z=F["instantiate"];
        }, function(F) {
            var tJ=b; A=F["default"];
        }, function(F) {
            var tK=b; B=F["default"];
        }, function(F) {
            C=F['default'];
        }, function(F) {
            var tL=b; D=F["PlayableChannel"];
        }, function(F) {
            var tM=b; E=F["default"];
        }], 'execute':function() {
            var tN=b; g["_RF"]["push"]( {
            }, "fdb6fEGG5ZFeaqNgTB4zHLW", 'playable_controller', void 0x0); var F=f('playable_controller', function() {
                var tO=tN; function G() {
                }var H=G["prototype"]; return H["download"]=function(I) {
                    var tP=tO; if(void 0x0===I&&(I=!0x1), C["log"]("# playable_controller download: "+window['super_html_channel']+'\x20#'), window['wx'])return window["DDSTL"]||console['error']("DDSTL is not undefined"), void DDSTL["MinGameAdapter"]["getInstance"]()["onGameEnd"](); this["isChannel"]('landingpage_autojump')||(this["showDownloadPanel"](), I?(this["isChannel"]("landingpage_normal")?this["jumpToNativeStore"]():this['isChannel']("landingpage_cpp")&&this['jumpToNativeCPPStore'](), this["isChannel"](D["Google"])||B['download']()):B["download"]());
                }, H['jumpToNativeStore']=function() {
                    var tQ=tO; j['os']===j['OS']["IOS"]?window["location"]["href"]=B['app_store_url']:j['os']===j['OS']["ANDROID"]?window['location']["href"]=B["google_store_url"]:console["warn"]("- 未接入平台 -", j['os']);
                }, H['jumpToNativeCPPStore']=function() {
                    var tR=tO; j['os']===j['OS']["IOS"]?window['location']["href"]=B["app_store_cpp_url"]:j['os']===j['OS']["ANDROID"]?window['location']["href"]=B["google_store_cpp_url"]:console["warn"]("- 未接入平台 -", j['os']);
                }, H['isChannel']=function(I) {
                    var tS=tO; return window['super_html_channel']&&-0x1!=window["super_html_channel"]["indexOf"](I);
                }, H['isIronsource']=function() {
                    var tT=tO; return this["isChannel"]('ironsource');
                }, H["isMaridAudioStop"]=function() {
                    var tU=tO; return void 0x0!==window['is_mraid_audio']&&(!!this["isChannel"]("ironsource")&&!window["is_mraid_audio"]);
                }, H['showDownloadPanel']=function() {
                    var tV=tO; if(A["bundle"]) {
                        var I=E['Canvas_2d']['getChildByName']("layer_high"); I||((I=new k())["name"]="download_panel_parent", E["Canvas_2d"]["addChild"](I), I['addComponent'](q), I["getComponent"](q)["setContentSize"](v(0x800, 0x800)), I["addComponent"](w), I['getComponent'](w)['top']=0x0, I["getComponent"](w)['bottom']=0x0, I["getComponent"](w)["left"]=0x0, I["getComponent"](w)['top']=0x0, I["getComponent"](w)["updateAlignment"]()), x["load"]('component/common/download_bundle/prefab/download_panel', y, function(J, K) {
                            var tW=tV; if(J)console["error"](J); else {
                                var L=z(K); I["addChild"](L), L["getComponent"](w)["updateAlignment"](), L["getChildByName"]("download_mask")["getComponent"](w)['updateAlignment'](), L["getChildByName"]('bg')['getComponent'](w)['updateAlignment']();
                            }
                        });
                    }
                }, H["setDebugChannel"]=function(I) {
                    var tX=tO; window["super_html_channel"]=I;
                }, G;
            }()); f("default", new F()), g["_RF"]['pop']();
        }
    };
});
