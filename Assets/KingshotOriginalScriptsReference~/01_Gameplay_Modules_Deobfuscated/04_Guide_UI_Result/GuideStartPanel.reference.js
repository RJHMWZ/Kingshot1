// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/GuideStartPanel.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./CoreEventName.ts", "./PlayableChannel.ts", "./CoreEventManager.ts", "./playable_controller.ts"], function(g) {
    var j, k, m, q, v, w, x, y, z, A, B, C, D, E; return {
        'setters':[function(F) {
            var ob=b; j=F['applyDecoratedDescriptor'], k=F["inheritsLoose"], m=F["initializerDefineProperty"], q=F["assertThisInitialized"];
        }, function(F) {
            var oc=b; v=F["cclegacy"], w=F["_decorator"], x=F["Animation"], y=F["UIOpacity"], z=F["tween"], A=F['Component'];
        }, function(F) {
            var od=b; B=F["CoreEventName"];
        }, function(F) {
            var oe=b; C=F["PlayableChannel"];
        }, function(F) {
            var of=b; D=F["default"];
        }, function(F) {
            var og=b; E=F["default"];
        }], 'execute':function() {
            var oh=b, F, G, H, J, K, L, M; v["_RF"]["push"]( {
            }, "4e640jfvZJOsoQWtl3sKr1F", "GuideStartPanel", void 0x0); var N=w["ccclass"], O=w["property"], P=g("GUIDE_PANEL_EVENT", function() {
            }); P['GUIDE_PANEL_SHOW']="GuidePanelShow", P["GUIDE_PANEL_HIDE"]="GuidePanelHide", g("GuideStartPanel", (F=N('GuideStartPanel'), G=O( {
                'displayName':"是否在一定时间后自动显示"
            }), H=O( {
                'displayName':"多少秒不操作 重新显示引导", 'visible':function() {
                    var oi=oh; return this["isAutoShow"];
                }
            }), F((L=j((K=function(Q) {
                var ok=oh; function R() {
                    var oj=b; for(var W, X=arguments["length"], Y=new Array(X), Z=0x0; Z<X; Z++)Y[Z]=arguments[Z]; return W=Q["call"]["apply"](Q, [this]['concat'](Y))||this, m(W, 'isAutoShow', L, q(W)), m(W, "autoShowTime", M, q(W)), W["timerInterval"]=0x0, W["_guideContent"]=null, W;
                }k(R, Q); var V=R["prototype"]; return V['onLoad']=function() {
                    var ol=ok; this["_guideContent"]=this["node"]["getChildByName"]("guide_content");
                }, V["start"]=function() {
                    this['updateShow'](!0x0);
                }, V['onEnable']=function() {
                    var om=ok; D['on'](B["USER_TOUCH_DOWN"], this['_onUserTouchDown'], this), D['on'](B['USER_TOUCH_UP'], this['_onUserTouchUp'], this);
                }, V["onDisable"]=function() {
                    var on=ok; D['off'](B["USER_TOUCH_DOWN"], this["_onUserTouchDown"], this), D["off"](B["USER_TOUCH_UP"], this["_onUserTouchUp"], this);
                }, V["onDestroy"]=function() {
                    var oo=ok; this["clearTimerInterval"]();
                }, V["_onUserTouchDown"]=function() {
                    var op=ok; this["isAutoShow"]&&this['clearTimerInterval'](), this["updateShow"](!0x1);
                }, V["_onUserTouchUp"]=function() {
                    var oq=ok; this["isAutoShow"]&&this["starTimerInterval"]();
                }, V["updateShow"]=function(W) {
                    var or=ok; W?(this['_guideContent']['active']=!0x0, this["updateAni"](!0x0)):(this['updateAni'](!0x1), this["_guideContent"]["active"]=!0x1);
                }, V["updateAni"]=function(W) {
                    var os=ok, X=this['node']["getComponent"](x); if(X) {
                        if(W) {
                            E["isChannel"](C["Google"])||X["play"](); var Y=this["_guideContent"]["getComponent"](y); Y["opacity"]=0x0, z(Y)['to'](0.5,  {
                                'opacity':0xff
                            })['start']();
                        }else X["stop"]();
                    }
                }, V['starTimerInterval']=function() {
                    var ot=ok, W=this; this["clearTimerInterval"](), this["timerInterval"]=setInterval(function() {
                        var ou=ot; W["clearTimerInterval"](), W['updateShow'](!0x0);
                    }, 0x3e8*this["autoShowTime"]);
                }, V['clearTimerInterval']=function() {
                    var ov=ok; this["timerInterval"]&&(clearInterval(this['timerInterval']), this["timerInterval"]=0x0);
                }, R;
            }(A))["prototype"], "isAutoShow", [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), M=j(K["prototype"], "autoShowTime", [H],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x5;
                }
            }), J=K))||J)), v["_RF"]['pop']();
        }
    };
});
