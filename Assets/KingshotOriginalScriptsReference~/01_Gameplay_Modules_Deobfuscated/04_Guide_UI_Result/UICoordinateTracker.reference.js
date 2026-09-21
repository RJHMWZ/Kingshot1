// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/UICoordinateTracker.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(d) {
    var f, g, h, j, k, m, p, q, v, w; return {
        'setters':[function(x) {
            var z4=b; f=x['applyDecoratedDescriptor'], g=x['inheritsLoose'], h=x["initializerDefineProperty"], j=x["assertThisInitialized"];
        }, function(x) {
            var z5=b; k=x["cclegacy"], m=x["_decorator"], p=x["Node"], q=x["Camera"], v=x['Vec3'], w=x["Component"];
        }], 'execute':function() {
            var z6=b, x, z, A, B, C, D, E, F, G; k["_RF"]["push"]( {
            }, "b92a7b3vbRLYoJvi+pc15sr", 'UICoordinateTracker', void 0x0); var H=m["ccclass"], I=m["property"]; d('UICoordinateTracker', (x=H("UICoordinateTracker"), z=I(p), A=I(q), x((D=f((C=function(J) {
                var z8=z6; function K() {
                    var z7=b; for(var M, N=arguments["length"], O=new Array(N), P=0x0; P<N; P++)O[P]=arguments[P]; return M=J["call"]["apply"](J, [this]["concat"](O))||this, h(M, "target", D, j(M)), h(M, "camera", E, j(M)), h(M, 'bUseScale', F, j(M)), h(M, "distance", G, j(M)), M['_lastWPos']=new v(), M["_pos"]=new v(), M;
                }g(K, J); var L=K["prototype"]; return L["update"]=function() {
                    var z9=z8; this["updateRender"]();
                }, L["updateRender"]=function() {
                    var za=z8, M=this["target"]["worldPosition"]; this['_lastWPos']["set"](M); var N=this["camera"]; if(N["_camera"]["update"](), N["convertToUINode"](M, this["node"]["parent"], this['_pos']), this["node"]["setPosition"](this["_pos"]), this['bUseScale']) {
                        v['transformMat4'](this["_pos"], this["target"]["worldPosition"], N["_camera"]["matView"]); var O=this["distance"]/Math['abs'](this["_pos"]['z']), P=Math["floor"](0x64*O)/0x64; this["node"]["setScale"](P, P, 0x1);
                    }
                }, K;
            }(w))['prototype'], "target", [z],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), E=f(C["prototype"], "camera", [A],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), F=f(C["prototype"], 'bUseScale', [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), G=f(C['prototype'], "distance", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), B=C))||B)), k["_RF"]["pop"]();
        }
    };
});
