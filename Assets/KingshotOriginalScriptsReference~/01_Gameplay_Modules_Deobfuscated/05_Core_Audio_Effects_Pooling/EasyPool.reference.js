// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/EasyPool.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, g, h, j, k, m, q, v, w, x, y; return {
        'setters':[function(z) {
            var iQ=b; d=z["applyDecoratedDescriptor"], g=z['initializerDefineProperty'], h=z["inheritsLoose"], j=z["assertThisInitialized"];
        }, function(z) {
            var iR=b; k=z["cclegacy"], m=z["_decorator"], q=z["Prefab"], v=z["NodePool"], w=z["instantiate"], x=z["Tween"], y=z['Component'];
        }], 'execute':function() {
            var iS=b, B, C, G, H, I, J, L, O, Q, R, S, T, U, V, W, X; k["_RF"]['push']( {
            }, 'b441fwWJhlJX58XPPjGt1cp', "EasyPool", void 0x0); var Y=m["ccclass"], Z=m["property"], a0=(B=Y("EasyPoolArr"), C=Z( {
                'displayName':'预制索引Key'
            }), G=Z( {
                'displayName':'预制', 'type':q
            }), H=Z( {
                'displayName':'上限'
            }), I=Z( {
                'displayName':'提前创建'
            }), B((O=d((L=function() {
                var iT=iS; g(this, "prefabKey", O, this), g(this, "prefab", Q, this), g(this, "limit", R, this), g(this, "prebuild", S, this);
            })["prototype"], "prefabKey", [C],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), Q=d(L["prototype"], 'prefab', [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), R=d(L['prototype'], "limit", [H],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x14;
                }
            }), S=d(L["prototype"], "prebuild", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), J=L))||J); c('EasyPool', (T=Y("EasyPool"), U=Z( {
                'type':[a0], 'displayName':"对象池数组", 'tooltip':"配置对象池数组"
            }), T((X=d((W=function(a1) {
                var iV=iS; function a2() {
                    var iU=b; for(var a4, a5=arguments["length"], a6=new Array(a5), a7=0x0; a7<a5; a7++)a6[a7]=arguments[a7]; return a4=a1["call"]["apply"](a1, [this]["concat"](a6))||this, g(a4, "poolArr", X, j(a4)), a4["poolMap"]=new Map(), a4;
                }h(a2, a1); var a3=a2["prototype"]; return a3['onLoad']=function() {
                    var iW=iV; this["initPoolMap"]();
                }, a3['initPoolMap']=function() {
                    var iX=iV; for(var a4=0x0; a4<this['poolArr']["length"]; a4++) {
                        var a5=this["poolArr"][a4]; if(this["poolMap"][a5["prefabKey"]]=new v(), a5['prebuild'])for(var a6=this['poolMap'][a5["prefabKey"]], a7=0x0; a7<a5['limit']; a7++) {
                            var a8=w(a5['prefab']); a6["put"](a8);
                        }
                    }
                }, a3["get"]=function(a4) {
                    var iY=iV, a5=this['poolMap'][a4]; if(a5) {
                        var a6=a5["get"](); if(a6)return a6; for(var a7=0x0; a7<this["poolArr"]['length']; a7++) {
                            var a8=this["poolArr"][a7]; if(a8["prefabKey"]==a4)return w(a8['prefab']);
                        }
                    }
                }, a3["put"]=function(a4) {
                    var iZ=iV; x["stopAllByTarget"](a4), a4["removeFromParent"](); for(var a5=0x0; a5<this['poolArr']['length']; a5++) {
                        var a6=this["poolArr"][a5]; if(a6['prefab']["name"]==a4['name']) {
                            var a7=this["poolMap"][a6["prefabKey"]]; a7["size"]()<a6['limit']?a7["put"](a4):a4['destroy'](); break;
                        }
                    }
                }, a3["destroyItem"]=function(a4) {
                    var j0=iV; a4["destroy"]();
                }, a3["releaseAllPool"]=function() {
                    var j1=iV; for(var a4 in this["poolMap"]) {
                        this["poolMap"][a4]['clear']();
                    }
                }, a2;
            }(y))["prototype"], "poolArr", [U],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), V=W))||V)), k["_RF"]["pop"]();
        }
    };
});
