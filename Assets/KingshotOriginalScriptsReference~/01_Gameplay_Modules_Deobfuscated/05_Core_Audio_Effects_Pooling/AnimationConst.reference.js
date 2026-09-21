// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/AnimationConst.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, h, j, k, m; return {
        'setters':[function(p) {
            var bC=b; d=p["applyDecoratedDescriptor"], f=p['initializerDefineProperty'];
        }, function(p) {
            var bD=b; g=p["cclegacy"], h=p["_decorator"], j=p["Enum"], k=p["EventHandler"], m=p["Animation"];
        }], 'execute':function() {
            var bE=b, q, B, C, F, G, I, J, M, O, P, Q, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4; g["_RF"]['push']( {
            }, '3fe84qplRZKbqO72mgblBJK', "AnimationConst", void 0x0); var a5=h["ccclass"], a6=h['property'], a7=c('AnimationType', function(a8) {
                var bF=bE; return a8[a8["SkeletalAnimation"]=0x0]="SkeletalAnimation", a8[a8["Animation"]=0x1]="Animation", a8;
            }( {
            })); j(a7), (c("SKE_EVENTHANDLER", (q=a5("SKE_EVENTHANDLER"), B=a6( {
                'tooltip':"动画事件名称,需要与配置的事件名称一致"
            }), C=a6( {
                'type':[k]
            }), q((I=d((G=function() {
                var bH=bE; function a8() {
                    var bG=b; f(this, "eventName", I, this), f(this, "eventHandler", J, this);
                }return a8["prototype"]["emitHandler"]=function() {
                    var bI=bH; for(var a9=this, aa=arguments["length"], ab=new Array(aa), ac=0x0; ac<aa; ac++)ab[ac]=arguments[ac]; this["eventHandler"]['forEach'](function(ad) {
                        var bJ=bI; ad["emit"]([a9["eventName"]]['concat'](ab));
                    });
                }, a8;
            }())["prototype"], "eventName", [B],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), J=d(G["prototype"], "eventHandler", [C],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), F=G))||F)), c("SKE_ELEMENT", (M=a5("SKE_ELEMENT"), O=a6( {
                'displayName':"动画索引"
            }), P=a6( {
                'displayName':"动画名称"
            }), M((U=d((T=function(a8, a9) {
                var bK=bE; f(this, "idxSke", U, this), f(this, "idxName", V, this), this["idxName"]=a9, this['idxSke']=a8;
            })["prototype"], "idxSke", [O],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), V=d(T["prototype"], 'idxName', [P],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var bL=bE; return "idle";
                }
            }), Q=T))||Q)), c("AnimationHandlers", (W=a5("AnimationHandlers"), X=a6( {
                'type':m, 'displayName':"动画状态"
            }), Y=a6( {
                'displayName':"动画事件名称", 'tooltip':"需要与配置的事件名称一致"
            }), Z=a6( {
                'type':[k], 'displayName':"事件处理函数"
            }), W((a2=d((a1=function() {
                var bO=bE; function a8(a9, aa) {
                    var bM=b, ab=this; f(this, "itemAni", a2, this), f(this, "eventName", a3, this), f(this, 'handler', a4, this), this['eventName']=a9, this["itemAni"]&&(this['itemAni']=aa, this["itemAni"][a9]=function(ac) {
                        var bN=bM; ab["emitHandler"](ac);
                    });
                }return a8["prototype"]["emitHandler"]=function() {
                    var bP=bO; for(var a9=this, aa=arguments["length"], ab=new Array(aa), ac=0x0; ac<aa; ac++)ab[ac]=arguments[ac]; this["handler"]["forEach"](function(ad) {
                        var bQ=bP; ad["emit"]([a9["eventName"]]["concat"](ab));
                    });
                }, a8;
            }())["prototype"], 'itemAni', [X],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), a3=d(a1["prototype"], "eventName", [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), a4=d(a1["prototype"], "handler", [Z],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), a0=a1))||a0))), g["_RF"]["pop"]();
        }
    };
});
