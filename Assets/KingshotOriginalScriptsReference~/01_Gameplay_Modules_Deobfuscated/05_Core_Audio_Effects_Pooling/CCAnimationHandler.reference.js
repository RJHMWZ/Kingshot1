// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/CCAnimationHandler.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AnimationConst.ts"], function(d) {
    var f, g, j, k, m, q, v, w, x, y, z, A; return {
        'setters':[function(B) {
            var fJ=b; f=B["applyDecoratedDescriptor"], g=B["inheritsLoose"], j=B['initializerDefineProperty'], k=B["assertThisInitialized"];
        }, function(B) {
            var fK=b; m=B["cclegacy"], q=B['_decorator'], v=B['SkeletalAnimation'], w=B["Animation"], x=B["EventHandler"], y=B["Component"];
        }, function(B) {
            var fL=b; z=B["AnimationType"], A=B["SKE_EVENTHANDLER"];
        }], 'execute':function() {
            var fM=b, B, C, D, E, G, I, J, K, L, M, O, P; m["_RF"]["push"]( {
            }, 'f8c3bG8/hBHuYkdGRyT9Zrv', "CCAnimationHandler", void 0x0); var Q=q["ccclass"], R=q["property"]; d('CCAnimationHandler', (B=R( {
                'type':z, 'tooltip':"动画类型"
            }), C=R( {
                'type':v, 'tooltip':"动画组件", 'visible':function() {
                    var fN=fM; return this["aniType"]==z["SkeletalAnimation"];
                }
            }), D=R( {
                'type':w, 'tooltip':"动画组件", 'visible':function() {
                    var fO=fM; return this['aniType']==z["Animation"];
                }
            }), E=R( {
                'type':[x], 'displayName':"动画完成事件"
            }), G=R( {
                'type':A
            }), Q((K=f((J=function(U) {
                var fQ=fM; function V() {
                    var fP=b; for(var X, Y=arguments["length"], Z=new Array(Y), a0=0x0; a0<Y; a0++)Z[a0]=arguments[a0]; return X=U["call"]["apply"](U, [this]['concat'](Z))||this, j(X, "aniType", K, k(X)), j(X, 'skeAni', L, k(X)), j(X, "ani", M, k(X)), j(X, "onFinished", O, k(X)), j(X, "handlers", P, k(X)), X["_handlerMaps"]=new Map(), X;
                }g(V, U); var W=V["prototype"]; return W['onEnable']=function() {
                    var fR=fQ; this["updateHandlers"]();
                }, W["updateHandlers"]=function() {
                    var fS=fQ; this['aniType']==z["SkeletalAnimation"]?this['onInitSkeAnimation']():this["onInitAnimation"]();
                }, W["onInitAnimation"]=function() {
                    var fT=fQ, X=this; if(this["ani"]&&this["aniType"]==z["Animation"]) {
                        this['_handlerMaps']['clear'](), this["ani"]['on'](w["EventType"]["FINISHED"], this["onAnimationFinished"], this); for(var Y=function() {
                            var fU=fT, a0=X["handlers"][Z]; delete X['ani'][a0["eventName"]["toString"]()], X["_handlerMaps"]["set"](a0['eventName']["toString"](), a0), X["ani"][a0["eventName"]["toString"]()]=function(a1) {
                                var fV=fU; a0["emitHandler"](a1);
                            };
                        }, Z=0x0; Z<this["handlers"]["length"]; Z++)Y();
                    }
                }, W["onInitSkeAnimation"]=function() {
                    var fW=fQ, X=this; if(this["skeAni"]&&this['aniType']==z["SkeletalAnimation"]) {
                        this["_handlerMaps"]["clear"](), this['skeAni']['on'](w["EventType"]["FINISHED"], this["onAnimationFinished"], this); for(var Y=function() {
                            var fX=fW, a0=X['handlers'][Z]; delete X["skeAni"][a0['eventName']["toString"]()], X["_handlerMaps"]['set'](a0["eventName"]["toString"](), a0), X['skeAni'][a0['eventName']["toString"]()]=function(a1) {
                                var fY=fX; a0["emitHandler"](a1);
                            };
                        }, Z=0x0; Z<this["handlers"]["length"]; Z++)Y();
                    }
                }, W["onAnimationFinished"]=function(X) {
                    var fZ=fQ; for(var Y=0x0; Y<this["onFinished"]['length']; Y++) {
                        this["onFinished"][Y]["emit"]([]);
                    }
                }, V;
            }(y))["prototype"], "aniType", [B],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var g0=fM; return z["SkeletalAnimation"];
                }
            }), L=f(J['prototype'], "skeAni", [C],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new v();
                }
            }), M=f(J["prototype"], "ani", [D],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), O=f(J["prototype"], "onFinished", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), P=f(J["prototype"], "handlers", [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), I=J))||I)), m["_RF"]["pop"]();
        }
    };
});
