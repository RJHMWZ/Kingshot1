// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/PlayerWeaponArrow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameData.ts", "./AudioMgr.ts", "./LocationUtil.ts", "./AudioName.ts", './GameConfig.ts', './Enemy.ts'], function(f) {
    var j, k, m, q, v, w, x, z, A, B, C, D, E, F, G; return {
        'setters':[function(H) {
            var v1=b; j=H["inheritsLoose"];
        }, function(H) {
            var v2=b; k=H['cclegacy'], m=H['_decorator'], q=H['Vec3'], v=H['tween'], w=H["easing"], x=H["isValid"], z=H["Tween"], A=H["Component"];
        }, function(H) {
            B=H['default'];
        }, function(H) {
            C=H['default'];
        }, function(H) {
            D=H['LocationUtil3D'];
        }, function(H) {
            var v3=b; E=H["AudioName"];
        }, function(H) {
            var v4=b; F=H["default"];
        }, function(H) {
            var v5=b; G=H["Enemy"];
        }], 'execute':function() {
            var v6=b, H; k["_RF"]["push"]( {
            }, "9f570CMqBtDn7SK/9B+I1av", "PlayerWeaponArrow", void 0x0); var I=m["ccclass"]; m["property"], f("PlayerWeaponArrow", I("PlayerWeaponArrow")(H=function(J) {
                var v8=v6; function K() {
                    var v7=b; for(var M, N=arguments["length"], O=new Array(N), P=0x0; P<N; P++)O[P]=arguments[P]; return(M=J['call']['apply'](J, [this]['concat'](O))||this)["_startTarget"]=void 0x0, M["_enemyTarget"]=void 0x0, M;
                }j(K, J); var L=K['prototype']; return L["update"]=function(M) {
                    var v9=v8; this["checkTargetValid"](), this["updateLookAt"]();
                }, L["init"]=function(M, N) {
                    var va=v8, O=this; this["_startTarget"]=M, this['_enemyTarget']=N, this["updateLookAt"](), this["node"]["worldPosition"]=this["_startTarget"]["worldPosition"]; var P=D["getDistanceHorizontal"](this["node"], this["_enemyTarget"])/B["player_data"]['atk_trajectory_speed'], Q=this["_enemyTarget"]['getWorldPosition'](), R=this['_enemyTarget']["worldPosition"], S=new q(); v(this["node"])['to'](P,  {
                        'worldPosition':Q
                    },  {
                        'onUpdate':function(T, U) {
                            var vb=va; U=w["sineOut"](U), q["lerp"](S, T["getWorldPosition"](), R, U), T['setWorldPosition'](S);
                        }
                    })["call"](function() {
                        var vc=va; if(x(N)&&!N["getComponent"](G)["isDead"]()) {
                            C["playShotSound"](E["ENEMY_ATK_BY_KING"], 0.5, 0x64); var T=B["player_data"]["atk"]; N["getComponent"](G)["onDamage"](T, O["_startTarget"]);
                        }F["EASY_POOL"]["put"](O["node"]);
                    })["start"]();
                }, L["updateLookAt"]=function() {
                    var vd=v8; D["lookAtByHorizontal"](this["node"], this["_enemyTarget"]);
                }, L['checkTargetValid']=function() {
                    var ve=v8; this['_enemyTarget']["getComponent"](G)["isRecycle"]&&(z["stopAllByTarget"](this["node"]), F['EASY_POOL']["put"](this["node"]));
                }, K;
            }(A))||H), k['_RF']['pop']();
        }
    };
});
