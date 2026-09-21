// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CCAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AnimationConst.ts", "./CCAnimationHandler.ts"], function(d) {
    var f, g, h, j, k, m, q, v, w, x, y; return {
        'setters':[function(z) {
            var fs=b; f=z['applyDecoratedDescriptor'], g=z["inheritsLoose"], h=z["initializerDefineProperty"], j=z['assertThisInitialized'], k=z["createClass"];
        }, function(z) {
            var ft=b; m=z["cclegacy"], q=z["_decorator"], v=z["SkeletalAnimation"], w=z['Component'];
        }, function(z) {
            var fu=b; x=z["SKE_ELEMENT"];
        }, function(z) {
            y=z['CCAnimationHandler'];
        }], 'execute':function() {
            var fv=b, z, B, D, F, G, H, J, K, L, M, O, P, Q, R, T, V; m["_RF"]["push"]( {
            }, '91414uhKM5LM6zqcX5rBUi8', "CCAnimation", void 0x0); var W=q["ccclass"], X=q["property"], Y=q["executeInEditMode"]; d('CCAnimation', (z=W("CCAnimation"), B=Y(!0x0), D=X( {
                'type':v, 'displayName':"角色动画"
            }), F=X( {
                'type':[x], 'displayName':"动画列表", 'group':'列表'
            }), G=X( {
                'displayName':"加载后播放"
            }), H=X( {
                'displayName':'播放速度'
            }), J=X( {
                'displayName':"当前播放索引"
            }), K=X( {
                'displayName':"当前动画"
            }), L=X( {
                'displayName':'刷新'
            }), z(M=B((P=f((O=function(Z) {
                var fx=fv; function a0() {
                    var fw=b; for(var a2, a3=arguments["length"], a4=new Array(a3), a5=0x0; a5<a3; a5++)a4[a5]=arguments[a5]; return a2=Z["call"]["apply"](Z, [this]['concat'](a4))||this, h(a2, 'skeletonAnimation', P, j(a2)), h(a2, "skeAnis", Q, j(a2)), h(a2, "playAwake", R, j(a2)), h(a2, "playSpeed", T, j(a2)), h(a2, "_curAniIdx", V, j(a2)), a2["_isUpdate"]=!0x1, a2["nSkeAnis"]=new Map(), a2['mCurAnimation']=void 0x0, a2["mHandler"]=void 0x0, a2;
                }g(a0, Z); var a1=a0["prototype"]; return a1["onLoad"]=function() {
                    var fy=fx; this["mHandler"]=this["node"]['getComponent'](y);
                }, a1["onEnable"]=function() {
                    var fz=fx; this['updateClips'](), this["onPlayAwake"](), this["updateEvents"]();
                }, a1["updateClips"]=function() {
                    var fA=fx, a2=this; this["skeletonAnimation"]&&(this['nSkeAnis']['clear'](), this['skeAnis']=[], this["skeletonAnimation"]["clips"]['forEach'](function(a3, a4) {
                        var fB=fA, a5=new x(a4, a3["name"]), a6=a2["skeletonAnimation"]['getState'](a3["name"]); a6&&(a6["speed"]=a2["playSpeed"], a2["skeAnis"]["push"](a5), a2["nSkeAnis"]["set"](a4, a3['name']));
                    }), this["mCurAnimation"]=this["skeAnis"][this['_curAniIdx']]);
                }, a1["updateEvents"]=function() {
                    var fC=fx; this["skeletonAnimation"]&&this["mHandler"]&&this["mHandler"]['updateHandlers']();
                }, a1["onPlayAwake"]=function() {
                    var fD=fx; this['mCurAnimation']&&(this["playAwake"]?this["play"]():this['skeletonAnimation']["stop"]());
                }, a1["playAni"]=function(a2) {
                    var fE=fx; this["mCurAnimation"]&&this['skeletonAnimation']&&(this["_curAniIdx"]=a2, this['mCurAnimation']=this['skeAnis'][a2], this["play"]());
                }, a1['setSpeed']=function(a2) {
                    this['playSpeed']=a2;
                }, a1["play"]=function() {
                    var fF=fx; this["mCurAnimation"]&&(this["skeletonAnimation"]&&(this["skeletonAnimation"]['getState'](this["mCurAnimation"]['idxName'])["speed"]=this["playSpeed"], this["skeletonAnimation"]['play'](this["mCurAnimation"]["idxName"])));
                }, a1['stop']=function() {
                    var fG=fx; this["skeletonAnimation"]["stop"]();
                }, k(a0, [ {
                    'key':"curAniIdx", 'get':function() {
                        return this['_curAniIdx'];
                    }, 'set':function(a2) {
                        var fH=fx; this["_curAniIdx"]=a2;
                    }
                },  {
                    'key':"isUpdate", 'get':function() {
                        return this['_isUpdate'];
                    }, 'set':function(a2) {
                        var fI=fx; this['_isUpdate']=a2, this["_isUpdate"]&&(this["_isUpdate"]&&(this["updateClips"](), this["onPlayAwake"](), this["updateEvents"]()), this['_isUpdate']=!0x1);
                    }
                }]), a0;
            }(w))["prototype"], "skeletonAnimation", [D],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Q=f(O['prototype'], 'skeAnis', [F],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), R=f(O['prototype'], "playAwake", [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), T=f(O["prototype"], "playSpeed", [H],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), V=f(O["prototype"], '_curAniIdx', [J],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), f(O['prototype'], "curAniIdx", [K], Object["getOwnPropertyDescriptor"](O['prototype'], "curAniIdx"), O["prototype"]), f(O["prototype"], "isUpdate", [L], Object["getOwnPropertyDescriptor"](O["prototype"], "isUpdate"), O["prototype"]), M=O))||M)||M)), m["_RF"]["pop"]();
        }
    };
});
