// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/GameHelper.ts", ['cc', "./GameConfig.ts", "./playable_controller.ts", './CoreEventManager.ts', "./JoyStickConst.ts", "./AudioMgr.ts", './GameData.ts'], function(d) {
    var f, g, h, j, k, l, m, p; return {
        'setters':[function(q) {
            var lS=b; f=q["cclegacy"], g=q['game'];
        }, function(q) {
            h=q['default'];
        }, function(q) {
            var lT=b; j=q["default"];
        }, function(q) {
            var lU=b; k=q["default"];
        }, function(q) {
            l=q['JoyStickEvent'];
        }, function(q) {
            var lV=b; m=q["default"];
        }, function(q) {
            var lW=b; p=q["default"];
        }], 'execute':function() {
            var lX=b; f["_RF"]['push']( {
            }, '94b09AR7NpCGLmN06TN04au', "GameHelper", void 0x0); var q=d("GameHelper", function() {
                var lY=lX; function s() {
                }var v=s["prototype"]; return v["getNodeByKey"]=function(w) {
                    var lZ=lY; return h["MOUNT_MGR"]["getNode"](w);
                }, v["download"]=function(w) {
                    void 0x0===w&&(w=!0x1), j['download'](w);
                }, v['updateJoyEnable']=function(w) {
                    var m0=lY; k["dispatchEvent"](l["TOUCH_ENABLE"], w);
                }, v["setGameRate"]=function(w) {
                    var m1=lY; window['wx']||(g["frameRate"]=w);
                }, v["resetData"]=function() {
                    var m2=lY; m["stopMusic"](), p["player_data"]['coins']=0x0, p['player_data']['hp']=0x3e8, p["castle_data"]['hp']=0x3e8, h["TOWER_JUMP_COUNT"]=0x0, h["GAME_OVER"]=!0x1, p['camera_data']= {
                        'camera_vert_ortho':0x19, 'camera_horizon_ortho':0x14
                    }, h["GAME_PLAYER_START"]=!0x1, m['isPlay']=!0x1;
                }, s;
            }()); d('default', new q()), f["_RF"]["pop"]();
        }
    };
});
