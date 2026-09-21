// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/GameDirector.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameHelper.ts", './GameConfig.ts', './CoreEventManager.ts', "./AudioMgr.ts", "./AudioName.ts", "./CoreEventName.ts", "./EasyPool.ts", './GuideArrow.ts', "./Player.ts", "./EnemyController.ts", './World.ts', './ResultPanel.ts', "./AreaController.ts", './MountMgr.ts', "./Castle.ts", "./TowerWeaponCtrl.ts", "./FitScreenConst.ts", './GameData.ts', "./GoldMine.ts", "./CCEffectMgr.ts", "./SoldierController.ts", "./FenseCtrl.ts", "./NavLineComp.ts"], function(j) {
    var k, q, w, x, z, F, H, I, J, K, O, P, Q, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7; return {
        'setters':[function(a8) {
            var lm=b; k=a8["inheritsLoose"];
        }, function(a8) {
            var ln=b; q=a8["cclegacy"], w=a8["_decorator"], x=a8["Camera"], z=a8["Component"];
        }, function(a8) {
            var lo=b; F=a8["default"];
        }, function(a8) {
            var lp=b; H=a8["default"];
        }, function(a8) {
            I=a8['default'];
        }, function(a8) {
            J=a8['default'];
        }, function(a8) {
            K=a8['AudioName'];
        }, function(a8) {
            var lq=b; O=a8["CoreEventName"];
        }, function(a8) {
            var lr=b; P=a8["EasyPool"];
        }, function(a8) {
            var ls=b; Q=a8["GuideArrow"];
        }, function(a8) {
            var lt=b; S=a8["Player"];
        }, function(a8) {
            var lu=b; T=a8["EnemyController"];
        }, function(a8) {
            var lv=b; U=a8["World"];
        }, function(a8) {
            var lw=b; V=a8["ResultPanel"];
        }, function(a8) {
            var lx=b; W=a8["AreaController"];
        }, function(a8) {
            var ly=b; X=a8["MountMgr"];
        }, function(a8) {
            var lz=b; Y=a8["Castle"];
        }, function(a8) {
            Z=a8['TowerWeaponCtrl'];
        }, function(a8) {
            a0=a8['SCREEN_DIR'], a1=a8['SCREEN_DIRCTION'];
        }, function(a8) {
            var lA=b; a2=a8["default"];
        }, function(a8) {
            var lB=b; a3=a8["GoldMine"];
        }, function(a8) {
            var lC=b; a4=a8["CCEffectMgr"];
        }, function(a8) {
            var lD=b; a5=a8["SoldierController"];
        }, function(a8) {
            var lE=b; a6=a8["FenseCtrl"];
        }, function(a8) {
            var lF=b; a7=a8["NavLineComp"];
        }], 'execute':function() {
            var lG=b, a8; q['_RF']['push']( {
            }, 'd6086xBgH1LvKFZHlGWWYQ6', "GameDirector", void 0x0); var a9=w["ccclass"], aa=(w["property"], j("GameDirector", a9("GameDirector")(a8=function(ab) {
                var lI=lG; function ac() {
                    var lH=b; return ab["apply"](this, arguments)||this;
                }k(ac, ab); var ad=ac["prototype"]; return ad["onLoad"]=function() {
                    var lJ=lI; this["initData"]();
                }, ad["start"]=function() {
                    var lK=lI; this["initView"]();
                }, ad["onEnable"]=function() {
                    var lL=lI; this["_onRegisterEvent"]();
                }, ad['onDisable']=function() {
                    this['_offRegisterEvent']();
                }, ad["_onRegisterEvent"]=function() {
                    var lM=lI; I['on'](O["USER_TOUCH_DOWN"], this["_onUserTouchStart"], this), I['on'](O['SCREEN_CHANGE'], this["onScreenChange"], this);
                }, ad["_offRegisterEvent"]=function() {
                    var lN=lI; I["off"](O["USER_TOUCH_DOWN"], this["_onUserTouchStart"], this), I['off'](O["SCREEN_CHANGE"], this["onScreenChange"], this);
                }, ad['_onUserTouchStart']=function() {
                    var lO=lI; J["isPlay"]||(J["isPlay"]=!0x0, J["playMusic"](K['BGM'], !0x0, 0.3));
                }, ad["onScreenChange"]=function() {
                    var lP=lI; a0["DIR"]==a1["VERTICAL"]?H['CAMERA_3D']["orthoHeight"]=a2['camera_data']["camera_vert_ortho"]:H['CAMERA_3D']["orthoHeight"]=a2['camera_data']["camera_horizon_ortho"];
                }, ad["initData"]=function() {
                    var lQ=lI; F["setGameRate"](0x3d), H["GAME_DIRECTOR"]=this, H["EASY_POOL"]=this["node"]["parent"]["getChildByName"]("easy_pool")["getComponent"](P), H["Canvas_2d"]=this['node']['parent']['getChildByName']('Canvas_2d'), H["Canvas_3d"]=this["node"]["parent"]["getChildByName"]('Canvas_3d'), H["CAMERA_3D"]=H["Canvas_3d"]["getChildByName"]('Camera_3D')["getComponent"](x), H['CAMERA_2D']=H["Canvas_2d"]['getChildByName']("Camera_2D")["getComponent"](x), H["MOUNT_MGR"]=this["node"]["parent"]["getChildByName"]("mount_mgr")['getComponent'](X), H['LAYER_ENV']=H["Canvas_3d"]["getChildByName"]("layer_env"), H["LAYER_AREA"]=H["Canvas_3d"]["getChildByName"]("layer_area"), H["LAYER_GAME"]=H["Canvas_3d"]['getChildByName']("layer_game"), H['LAYER_GUIDE']=H["Canvas_3d"]["getChildByName"]("layer_guide"), H['LAYER_COIN']=H["Canvas_3d"]["getChildByName"]("layer_coin"), H["PLAYER"]=H["Canvas_3d"]["getChildByName"]("layer_game")["getChildByName"]("player")["getComponent"](S), H["AREA_CTRL"]=H["LAYER_AREA"]["getComponent"](W), H['TOWER_CTRL']=H['LAYER_GAME']["getChildByName"]("tower_weapon")["getComponent"](Z), H['GOLD_MINE_CTRL']=H["LAYER_GAME"]["getChildByName"]("gold_mine")["getComponent"](a3), H["FENSE_CTRL"]=H['LAYER_GAME']["getChildByName"]('fense')['getComponent'](a6), H["EFFECT_CTRL"]=this["node"]["parent"]["getChildByName"]("effect_mgr")["getComponent"](a4), H['GUIDE_ARROW']=H['LAYER_GUIDE']['getChildByName']("guide_arrow")["getComponent"](Q), H["NAV_LINE_COMP"]=H["LAYER_GUIDE"]["getChildByName"]("NavLine")["getComponent"](a7), H["RESULT_PANEL"]=H["Canvas_2d"]['getChildByName']("layer_mid")["getChildByName"]("result_panel")["getComponent"](V), H["ENEMY_CTRL"]=H["LAYER_GAME"]["getChildByName"]("enemy_controller")["getComponent"](T), H["SOLDIER_CTRL"]=H['LAYER_GAME']['getChildByName']("soldier_controller")["getComponent"](a5), H["WORLD"]=H['Canvas_3d']["getChildByName"]('layer_world')['getComponent'](U), H['ROAD']=H["LAYER_GAME"]['getChildByName']("road_all"), H["CASTLE"]=H["LAYER_GAME"]["getChildByName"]('castle')["getComponent"](Y);
                }, ad["initView"]=function() {
                    var lR=lI; H["AREA_CTRL"]['unlockArea'](0x1);
                }, ac;
            }(z))||a8)); j('default', new aa()), q['_RF']['pop']();
        }
    };
});
