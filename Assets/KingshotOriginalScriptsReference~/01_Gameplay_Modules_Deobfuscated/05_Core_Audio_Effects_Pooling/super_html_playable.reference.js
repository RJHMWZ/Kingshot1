// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/super_html_playable.ts", ['cc', "./CoreEventManager.ts", "./CCLog.ts", './CoreEventName.ts'], function(c) {
    var d, f, g, h; return {
        'setters':[function(i) {
            var x0=b; d=i["cclegacy"];
        }, function(i) {
            var x1=b; f=i["default"];
        }, function(i) {
            var x2=b; g=i["default"];
        }, function(i) {
            var x3=b; h=i["CoreEventName"];
        }], 'execute':function() {
            var x4=b; d['_RF']["push"]( {
            }, "d367bBsYgNJjraYAw1CcAaQ", 'super_html_playable', void 0x0); var i=c("super_html_playable", function() {
                var x6=x4; function j() {
                    var x5=b; this["google_store_url"]="https://play.google.com/store/apps/details?id=com.run.tower.defense", this["app_store_url"]='https://apps.apple.com/app/id6739554056', this["google_store_cpp_url"]='https://play.google.com/store/apps/details?id=com.run.tower.defense', this["app_store_cpp_url"]='https://apps.apple.com/app/id6739554056', this["setStoreUrl"]();
                }var k=j["prototype"]; return k["setStoreUrl"]=function() {
                    var x7=x6; g["log"]('super_html_playable\x20setStoreUrl'), this["set_google_play_url"](this["google_store_url"]), this["set_app_store_url"](this["app_store_url"]), this['set_google_play_cpp_url'](this["google_store_url"]), this["set_app_store_cpp_url"](this["app_store_url"]);
                }, k["download"]=function() {
                    var x8=x6; g["log"]('super_html_playable\x20download'), window["super_html"]&&window["super_html"]["download"](), f["dispatchEvent"](h["SUPER_HTML_DOWNLOAD"]);
                }, k["game_end"]=function() {
                    var x9=x6; g["log"]("game end"), window["super_html"]&&super_html["game_end"](), f["dispatchEvent"](h["SUPER_HTML_END"]);
                }, k["is_hide_download"]=function() {
                    var xa=x6; return!(!window["super_html"]||!super_html['is_hide_download'])&&super_html["is_hide_download"]();
                }, k["set_google_play_url"]=function(m) {
                    var xb=x6; window['super_html']&&(super_html["google_play_url"]=m);
                }, k["set_app_store_url"]=function(m) {
                    var xc=x6; window["super_html"]&&(super_html['appstore_url']=m);
                }, k['set_google_play_cpp_url']=function(m) {
                    var xd=x6; window["super_html"]&&(super_html["google_play_cpp_url"]=m);
                }, k['set_app_store_cpp_url']=function(m) {
                    var xe=x6; window["super_html"]&&(super_html["appstore_cpp_url"]=m);
                }, j;
            }()); c("default", new i()), d["_RF"]["pop"]();
        }
    };
});
