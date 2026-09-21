// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/FirstPersonCamera.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./Quaternion.ts"], function(d) {
    var f, g, h, j, k, m, q, v, w, x, y; return {
        'setters':[function(z) {
            var kR=b; f=z["applyDecoratedDescriptor"], g=z['inheritsLoose'], h=z['initializerDefineProperty'], j=z["assertThisInitialized"];
        }, function(z) {
            var kS=b; k=z["cclegacy"], m=z["_decorator"], q=z["input"], v=z["Input"], w=z['Vec3'], x=z['Component'];
        }, function(z) {
            var kT=b; y=z["default"];
        }], 'execute':function() {
            var kU=b, z, A, B, C; k["_RF"]["push"]( {
            }, '7e1fb8aTTJKG4E9BjBvsKY4', "FirstPersonCamera", void 0x0); var D=m["ccclass"], E=m["property"]; d("FirstPersonCamera", D("FirstPersonCamera")((B=f((A=function(F) {
                var kW=kU; function G() {
                    var kV=b; for(var I, J=arguments["length"], K=new Array(J), L=0x0; L<J; L++)K[L]=arguments[L]; return I=F['call']["apply"](F, [this]["concat"](K))||this, h(I, "xAxisMin", B, j(I)), h(I, "xAxisMax", C, j(I)), I["angleX"]=0x0, I['angleY']=0x0, I;
                }g(G, F); var H=G["prototype"]; return H['start']=function() {
                    var kX=kW; q['on'](v["EventType"]["MOUSE_MOVE"], this["MouseMove"], this);
                }, H['MouseMove']=function(I) {
                    var kY=kW; this["angleX"]+=-I["movementX"], this["angleY"]+=-I["movementY"], this["angleY"]=this['Clamp'](this["angleY"], this["xAxisMin"], this['xAxisMax']), this['node']["rotation"]=y["GetQuatFromAngle"](new w(this["angleY"], this['angleX'], 0x0));
                }, H["Clamp"]=function(I, J, K) {
                    return I<=J&&(I=J), I>=K&&(I=K), I;
                }, G;
            }(x))["prototype"], "xAxisMin", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x8c;
                }
            }), C=f(A["prototype"], "xAxisMax", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0xd2;
                }
            }), z=A))||z), k['_RF']["pop"]();
        }
    };
});
