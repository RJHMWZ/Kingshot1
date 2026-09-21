// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CCEffectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./CoreEventManager.ts", "./CCLog.ts", "./CCParticleSystem.ts", "./CCEffectMgrConst.ts"], function(d) {
    var g, j, k, m, q, v, w, x, y, z, A, B, D, F, G; return {
        'setters':[function(H) {
            var g1=b; g=H["applyDecoratedDescriptor"], j=H["inheritsLoose"], k=H["initializerDefineProperty"], m=H['assertThisInitialized'];
        }, function(H) {
            var g2=b; q=H["cclegacy"], v=H["_decorator"], w=H["instantiate"], x=H["NodePool"], y=H['v3'], z=H["Component"];
        }, function(H) {
            var g3=b; A=H["default"];
        }, function(H) {
            var g4=b; B=H["default"];
        }, function(H) {
            var g5=b; D=H["CCParticleSystem"];
        }, function(H) {
            var g6=b; F=H["ITEM_EFFECT"], G=H["GLOBAL_EFFECT_EVENT"];
        }], 'execute':function() {
            var g7=b, H, I, J, K, L; q["_RF"]['push']( {
            }, '361f7TohG5AEZnzEQS7A0AS', 'CCEffectMgr', void 0x0); var N=v["ccclass"], O=v['property']; d("CCEffectMgr", (H=N("CCEffectMgr"), I=O( {
                'type':[F], 'displayName':'特效列表'
            }), H((L=g((K=function(Q) {
                var g9=g7; function R() {
                    var g8=b; for(var T, U=arguments['length'], V=new Array(U), W=0x0; W<U; W++)V[W]=arguments[W]; return T=Q['call']["apply"](Q, [this]['concat'](V))||this, k(T, 'effectList', L, m(T)), T['effectPoolMap']=new Map(), T["effectMap"]=new Map(), T;
                }j(R, Q); var S=R["prototype"]; return S["onLoad"]=function() {
                    var ga=g9; this["initEffectMap"](), this['initEffectPool']();
                }, S['onGetEffect']=function(T, U) {
                    var gb=g9, V=this['effectPoolMap']["get"](T), W=null; if(V) {
                        var X=(W=V['size']()>0x0?V['get']():w(U))['getComponent'](D); return X||(X=W["addComponent"](D)), X;
                    }return B["error"]('特效不存在'), null;
                }, S["onPutEffect"]=function(T, U) {
                    var gc=g9; this['effectPoolMap']["has"](T)||this["effectPoolMap"]["set"](T, new x()), this["effectPoolMap"]['get'](T)["put"](U);
                }, S["initEffectMap"]=function() {
                    var gd=g9; for(var T=0x0; T<this["effectList"]["length"]; T++) {
                        var U=this["effectList"][T], V=new x(); this['effectPoolMap']['set'](U["effectName"], V);
                    }for(var W=0x0; W<this["effectList"]["length"]; W++) {
                        var X=this['effectList'][W]; this["effectMap"]["set"](X["effectType"], X);
                    }
                }, S["initEffectPool"]=function() {
                    var ge=g9, T=this; this["effectMap"]['forEach'](function(U) {
                        var gf=ge; for(var V=0x0; V<U["initCount"]; V++) {
                            var W=w(U['particleEffect']); T["onPutEffect"](U['effectName'], W);
                        }
                    });
                }, S['onEnable']=function() {
                    var gg=g9; A['on'](G["EFFECT_SHOW"], this["onEffectShow"], this), A['on'](G["EFFECT_HIDE"], this['onEffectHide'], this);
                }, S["onDisable"]=function() {
                    var gh=g9; A['off'](G["EFFECT_SHOW"], this['onEffectShow'], this), A['off'](G["EFFECT_HIDE"], this["onEffectHide"], this);
                }, S['onEffectShow']=function(T, U, V) {
                    var gi=g9, W=this; void 0x0===V&&(V=y(0x1, 0x1, 0x1)); var X=this["effectMap"]["get"](T); if(X) {
                        var Y=this["onGetEffect"](X['effectName'], X["particleEffect"]); Y&&(Y["setTimerCall"](function() {
                            var gj=gi; W["onEffectHide"](T, Y["node"]);
                        }), Y["node"]["setParent"](this["node"]), Y["node"]["setScale"](V), Y["node"]["setWorldPosition"](U), Y["Play"]());
                    }
                }, S["onEffectHide"]=function(T, U) {
                    var gk=g9, V=this['effectMap']["get"](T); V&&this["onPutEffect"](V["effectName"], U);
                }, R;
            }(z))['prototype'], "effectList", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), J=K))||J)), q['_RF']["pop"]();
        }
    };
});
