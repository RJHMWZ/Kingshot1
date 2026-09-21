// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/AutoAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(d) {
    var f, g, h, j, k, l, m, q, v, w; return {
        'setters':[function(x) {
            var eu=b; f=x['applyDecoratedDescriptor'], g=x["inheritsLoose"], h=x["initializerDefineProperty"], j=x["assertThisInitialized"];
        }, function(x) {
            var ev=b; k=x["cclegacy"], l=x["_decorator"], m=x["Enum"], q=x["Widget"], v=x["UITransform"], w=x["Component"];
        }], 'execute':function() {
            var ew=b, x, y, z, B; k['_RF']['push']( {
            }, "c39c3UCjfJMSLfNsZMNABOn", 'AutoAdapter', void 0x0); var C=l["ccclass"], D=l["property"], E=d("ADAPTER_TYPE", function(F) {
                var ex=ew; return F[F["NON"]=0x0]="NON", F[F["SAFEAREA"]=0x1]="SAFEAREA", F[F["MENUBUTTON"]=0x2]="MENUBUTTON", F;
            }( {
            })); m(E), d("AutoAdapter", (x=D( {
                'type':E
            }), C((B=f((z=function(F) {
                var ez=ew; function G() {
                    var ey=b; for(var I, J=arguments['length'], K=new Array(J), L=0x0; L<J; L++)K[L]=arguments[L]; return I=F['call']["apply"](F, [this]['concat'](K))||this, h(I, "adapterType", B, j(I)), I;
                }g(G, F); var H=G["prototype"]; return H['onLoad']=function() {
                    var eA=ez, I=this; DDSTL["MinGameAdapter"]["getInstance"]()["getPlatform"]()!=DDSTL["MINIGAME_PLATFORM"]['NON']&&DDSTL['MinGameAdapter']["getInstance"]()["getSafeAreaSync"]()["then"](function(J) {
                        var eB=eA; I["initWidght"](J);
                    });
                }, H["initWidght"]=function(I) {
                    var eC=ez; switch(this["adapterType"]) {
                        case E["SAFEAREA"]:this["udpateWidghtTop"](I); break; case E["MENUBUTTON"]:this["udpateWidghtTop"](I, !0x0);
                    }
                }, H['udpateWidghtTop']=function(I, J) {
                    var eD=ez; if(void 0x0===J&&(J=!0x1), I) {
                        var K=this["node"]['getComponent'](q); K||(K=this["node"]["addComponent"](q)); var L=0x0, M=this['getComponent'](v); J&&M&&(L=M["height"]*(0x1-M["anchorPoint"]['y'])); var N=I["top"]||0x0; K['top']=K["top"]+N-L*M["anchorPoint"]['y'], K["updateAlignment"]();
                    }
                }, G;
            }(w))['prototype'], "adapterType", [x],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return E['SAFEAREA'];
                }
            }), y=z))||y)), k['_RF']["pop"]();
        }
    };
});
