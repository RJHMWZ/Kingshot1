// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/MountMgr.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, h, j, k, m, p; return {
        'setters':[function(q) {
            var s0=b; d=q["applyDecoratedDescriptor"], f=q['initializerDefineProperty'], g=q["inheritsLoose"], h=q["assertThisInitialized"];
        }, function(q) {
            var s1=b; j=q["cclegacy"], k=q["_decorator"], m=q["Node"], p=q["Component"];
        }], 'execute':function() {
            var s2=b, q, x, A, B, C, D, E, F, G, H, I, J, L, O; j["_RF"]["push"]( {
            }, 'dc41fQsvxtLgKIpRzO9cUvw', "MountMgr", void 0x0); var P=k["ccclass"], Q=k["property"], R=(q=P('MountNode'), x=Q( {
                'tooltip':'描述'
            }), A=Q( {
                'type':m, 'tooltip':"挂载节点"
            }), B=Q( {
                'tooltip':"挂载节点用来引用的Key"
            }), q((E=d((D=function() {
                var s3=s2; f(this, "desc", E, this), f(this, "node", F, this), f(this, "nodeKey", G, this);
            })["prototype"], "desc", [x],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'none';
                }
            }), F=d(D["prototype"], "node", [A],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), G=d(D['prototype'], "nodeKey", [B],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var s4=s2; return "node's key";
                }
            }), C=D))||C); c("MountMgr", (H=P("MountMgr"), I=Q([R]), H((O=d((L=function(S) {
                var s6=s2; function T() {
                    var s5=b; for(var U, V=arguments["length"], W=new Array(V), X=0x0; X<V; X++)W[X]=arguments[X]; return U=S["call"]['apply'](S, [this]['concat'](W))||this, f(U, "mountNodes", O, h(U)), U;
                }return g(T, S), T["prototype"]["getNode"]=function(U) {
                    var s7=s6; for(var V=null, W=0x0; W<this["mountNodes"]['length']; W++)if(U===this["mountNodes"][W]["nodeKey"]) {
                        V=this["mountNodes"][W]["node"]; break;
                    }return V||console["warn"]("# 没查询到对应key下的挂载节点 "+U+'\x20#'), V;
                }, T;
            }(p))["prototype"], "mountNodes", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), J=L))||J)), j["_RF"]["pop"]();
        }
    };
});
