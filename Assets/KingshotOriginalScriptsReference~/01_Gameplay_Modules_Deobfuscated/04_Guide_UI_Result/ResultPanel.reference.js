// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/ResultPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./AudioMgr.ts", './I18nMgr.ts', './playable_controller.ts', "./AudioName.ts", './GameConfig.ts', "./GameHelper.ts"], function(f) {
    var j, k, q, w, x, z, A, B, C, D, E, F, G, H, I, J, K; return {
        'setters':[function(L) {
            var vu=b; j=L["inheritsLoose"];
        }, function(L) {
            var vv=b; k=L["cclegacy"], q=L['_decorator'], w=L['Label'], x=L["Node"], z=L["director"], A=L['v3'], B=L["UIOpacity"], C=L["tween"], D=L['easing'], E=L['Component'];
        }, function(L) {
            var vw=b; F=L["default"];
        }, function(L) {
            var vx=b; G=L["default"];
        }, function(L) {
            var vy=b; H=L["default"];
        }, function(L) {
            var vz=b; I=L["AudioName"];
        }, function(L) {
            var vA=b; J=L["default"];
        }, function(L) {
            var vB=b; K=L["default"];
        }], 'execute':function() {
            var vC=b, L; k["_RF"]["push"]( {
            }, "aa29eIolnxFUK3hersMZkq+", "ResultPanel", void 0x0); var M=q["ccclass"]; f('ResultPanel', M('ResultPanel')(L=function(N) {
                var vD=vC; function O() {
                    return N['apply'](this, arguments)||this;
                }j(O, N); var P=O["prototype"]; return P['onLoad']=function() {
                    var vE=vD, Q=this["node"]['getChildByName']("lose_panel")["getChildByName"]("revive_btn_node")["getChildByName"]("lbl")["getComponent"](w); J["REVIVE_TIME"]<0x1?Q["string"]=G["getLanguageTextByKey"]("common_revive"):Q["string"]=G["getLanguageTextByKey"]('common_playnow');
                }, P["onEnable"]=function() {
                    var vF=vD; this["node"]["getChildByName"]("lose_panel")["getChildByName"]("revive_btn_node")['on'](x['EventType']["TOUCH_START"], this["onRevive"], this);
                }, P["onDisable"]=function() {
                    var vG=vD; this["node"]["getChildByName"]("lose_panel")['getChildByName']("revive_btn_node")["off"](x["EventType"]["TOUCH_START"], this['onRevive'], this);
                }, P["start"]=function() {
                }, P["update"]=function(Q) {
                }, P["onRevive"]=function() {
                    var vH=vD; 0x0==J["REVIVE_TIME"]?(J["REVIVE_TIME"]++, K["resetData"](), this["hideAll"](), z["loadScene"]("Main")):(this["hideAll"](), H["download"](!0x0));
                }, P["showWin"]=function() {
                    var vI=vD, Q=this; J['GAME_OVER']=!0x0, F["playSound"](I["GAME_WIN"]); var R=this['node']['getChildByName']("win_panel"), S=R["getChildByName"]('mask'), T=R['getChildByName']('back_sp'); T["setScale"](A(0x0, 0x0, 0x1)), S["getComponent"](B)["opacity"]=0x0, this["node"]["active"]=!0x0, R['active']=!0x0, C(S['getComponent'](B))['to'](0.3,  {
                        'opacity':0x78
                    })["start"](), C(T)["delay"](0.15)['to'](0.2,  {
                        'scale':A(0x1, 0x1, 0x1)
                    },  {
                        'easing':D["backOut"]
                    })['delay'](0x1)["call"](function() {
                        var vJ=vI; Q["hideAll"](), H["download"](!0x0);
                    })["start"]();
                }, P['showLose']=function() {
                    var vK=vD; J['GAME_OVER']=!0x0, F["playSound"](I["GAME_OVER"]); var Q=this["node"]["getChildByName"]("lose_panel"), R=Q["getChildByName"]('mask'), S=Q["getChildByName"]("back_sp"); S['setScale'](A(0x0, 0x0, 0x1)), R['getComponent'](B)["opacity"]=0x0, this["node"]["active"]=!0x0, Q['active']=!0x0; var T=this["node"]["getChildByName"]("lose_panel")["getChildByName"]("revive_btn_node"); T['setScale'](A(0x0, 0x0, 0x1)), C(R["getComponent"](B))['to'](0.3,  {
                        'opacity':0x78
                    })["start"](), C(S)["delay"](0.15)['to'](0.2,  {
                        'scale':A(0x1, 0x1, 0x1)
                    },  {
                        'easing':D["backOut"]
                    })["call"](function() {
                        var vL=vK; C(T)['to'](0.2,  {
                            'scale':A(0x1, 0x1, 0x1)
                        },  {
                            'easing':D["backOut"]
                        })['start']();
                    })["start"]();
                }, P["hideAll"]=function() {
                    var vM=vD; this["node"]["getChildByName"]("win_panel")["active"]=!0x1, this['node']["getChildByName"]("lose_panel")["active"]=!0x1, this["node"]['active']=!0x1;
                }, O;
            }(E))||L), k['_RF']["pop"]();
        }
    };
});
