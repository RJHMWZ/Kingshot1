// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(f) {
    var j, k, q, v, w, x, y, z, A, B, D, E, F, G, H, I, J; return {
        'setters':[function(K) {
            var i3=b; j=K["applyDecoratedDescriptor"], k=K["inheritsLoose"], q=K["initializerDefineProperty"], v=K["assertThisInitialized"];
        }, function(K) {
            var i4=b; w=K["cclegacy"], x=K["_decorator"], y=K["Node"], z=K["Color"], A=K["Canvas"], B=K['UITransform'], D=K["instantiate"], E=K['Label'], F=K["RichText"], G=K["Toggle"], H=K["Button"], I=K["director"], J=K["Component"];
        }], 'execute':function() {
            var i5=b, K, N, O, P, Q, R, U, V, W; w["_RF"]["push"]( {
            }, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0x0); var X=x["ccclass"], Y=x["property"]; f("DebugViewRuntimeControl", (K=X("internal.DebugViewRuntimeControl"), N=Y(y), O=Y(y), P=Y(y), K((U=j((R=function(Z) {
                var i7=i5; function a0() {
                    var i6=b; for(var a2, a3=arguments["length"], a4=new Array(a3), a5=0x0; a5<a3; a5++)a4[a5]=arguments[a5]; return a2=Z["call"]['apply'](Z, [this]["concat"](a4))||this, q(a2, "compositeModeToggle", U, v(a2)), q(a2, 'singleModeToggle', V, v(a2)), q(a2, "EnableAllCompositeModeButton", W, v(a2)), a2["_single"]=0x0, a2["strSingle"]=['No\x20Single\x20Debug', "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", 'Vertex\x20Mirror', 'Face\x20Side', "UV0", "UV1", "UV Lightmap", 'Project\x20Depth', "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", 'Diffuse\x20Color', 'Specular\x20Color', "Transparency", "Metallic", "Roughness", "Specular Intensity", 'IOR', "Direct Diffuse", "Direct Specular", 'Direct\x20All', "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", 'AO', "Fresnel", 'Direct\x20Transmit\x20Diffuse', "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct Internal Specular", "Env Internal Specular", 'Internal\x20All', "Fog"], a2["strComposite"]=["Direct Diffuse", 'Direct\x20Specular', "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", 'AO', "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "Internal Specular", 'TT'], a2['strMisc']=['CSM\x20Layer\x20Coloration', "Lighting With Albedo"], a2["compositeModeToggleList"]=[], a2['singleModeToggleList']=[], a2["miscModeToggleList"]=[], a2['textComponentList']=[], a2["labelComponentList"]=[], a2["textContentList"]=[], a2['hideButtonLabel']=void 0x0, a2['_currentColorIndex']=0x0, a2["strColor"]=["<color=#ffffff>", '<color=#000000>', "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], a2["color"]=[z["WHITE"], z["BLACK"], z["RED"], z["GREEN"], z["BLUE"]], a2;
                }k(a0, Z); var a1=a0["prototype"]; return a1["start"]=function() {
                    var i8=i7; if(this["node"]["parent"]["getComponent"](A)) {
                        var a2=this["node"]['parent']["getComponent"](B), a3=0.5*a2["width"], a4=0.5*a2["height"], a5=0.1*a3-a3, a6=a4-0.1*a4, a7=this["node"]['getChildByName']('MiscMode'), a8=D(a7); a8["parent"]=this["node"], a8["name"]="Buttons"; var a9=D(a7); a9['parent']=this["node"], a9["name"]="Titles"; for(var aa=0x0; aa<0x2; aa++) {
                            var ab=D(this["EnableAllCompositeModeButton"]["getChildByName"]('Label')); ab["setPosition"](a5+(aa>0x0?0x1c2:0x96), a6, 0x0), ab["setScale"](0.75, 0.75, 0.75), ab['parent']=a9; var ac=ab["getComponent"](E); ac["string"]=aa?"----------Composite Mode----------":"----------Single Mode----------", ac["color"]=z["WHITE"], ac["overflow"]=0x0, this["labelComponentList"][this["labelComponentList"]["length"]]=ac;
                        }a6-=0x14; for(var ad=0x0, ae=0x0; ae<this["strSingle"]["length"]; ae++, ad++) {
                            ae===this["strSingle"]["length"]>>0x1&&(a5+=0xc8, ad=0x0); var af=ae?D(this["singleModeToggle"]):this['singleModeToggle']; af["setPosition"](a5, a6-0x14*ad, 0x0), af["setScale"](0.5, 0.5, 0.5), af['parent']=this['singleModeToggle']['parent']; var ag=af["getComponentInChildren"](F); ag['string']=this["strSingle"][ae], this['textComponentList'][this["textComponentList"]["length"]]=ag, this['textContentList'][this["textContentList"]["length"]]=ag["string"], af['on'](G["EventType"]["TOGGLE"], this["toggleSingleMode"], this), this["singleModeToggleList"][ae]=af;
                        }a5+=0xc8, this["EnableAllCompositeModeButton"]["setPosition"](a5+0xf, a6, 0x0), this["EnableAllCompositeModeButton"]["setScale"](0.5, 0.5, 0.5), this["EnableAllCompositeModeButton"]['on'](H["EventType"]["CLICK"], this["enableAllCompositeMode"], this), this["EnableAllCompositeModeButton"]["parent"]=a8; var ah=this['EnableAllCompositeModeButton']["getComponentInChildren"](E); this["labelComponentList"][this["labelComponentList"]["length"]]=ah; var ai=D(this['EnableAllCompositeModeButton']); ai['setPosition'](a5+0x5a, a6, 0x0), ai['setScale'](0.5, 0.5, 0.5), ai['on'](H['EventType']['CLICK'], this["changeTextColor"], this), ai["parent"]=a8, (ah=ai['getComponentInChildren'](E))["string"]="TextColor", this['labelComponentList'][this["labelComponentList"]["length"]]=ah; var aj=D(this["EnableAllCompositeModeButton"]); aj["setPosition"](a5+0xc8, a6, 0x0), aj["setScale"](0.5, 0.5, 0.5), aj['on'](H["EventType"]['CLICK'], this["hideUI"], this), aj["parent"]=this["node"]['parent'], (ah=aj["getComponentInChildren"](E))["string"]="Hide UI", this["labelComponentList"][this["labelComponentList"]["length"]]=ah, this["hideButtonLabel"]=ah, a6-=0x28; for(var ak=0x0; ak<this['strMisc']['length']; ak++) {
                            var al=D(this["compositeModeToggle"]); al["setPosition"](a5, a6-0x14*ak, 0x0), al["setScale"](0.5, 0.5, 0.5), al["parent"]=a7; var am=al['getComponentInChildren'](F); am["string"]=this['strMisc'][ak], this["textComponentList"][this["textComponentList"]["length"]]=am, this["textContentList"][this["textContentList"]["length"]]=am["string"], al["getComponent"](G)['isChecked']=!!ak, al['on'](G["EventType"]["TOGGLE"], ak?this["toggleLightingWithAlbedo"]:this['toggleCSMColoration'], this), this['miscModeToggleList'][ak]=al;
                        }a6-=0x96; for(var an=0x0; an<this['strComposite']["length"]; an++) {
                            var ao=an?D(this["compositeModeToggle"]):this['compositeModeToggle']; ao['setPosition'](a5, a6-0x14*an, 0x0), ao["setScale"](0.5, 0.5, 0.5), ao["parent"]=this["compositeModeToggle"]["parent"]; var ap=ao["getComponentInChildren"](F); ap['string']=this['strComposite'][an], this['textComponentList'][this["textComponentList"]["length"]]=ap, this["textContentList"][this["textContentList"]["length"]]=ap["string"], ao['on'](G['EventType']["TOGGLE"], this["toggleCompositeMode"], this), this["compositeModeToggleList"][an]=ao;
                        }
                    }else console["error"]('debug-view-runtime-control\x20should\x20be\x20child\x20of\x20Canvas');
                }, a1["isTextMatched"]=function(a2, a3) {
                    var i9=i7, a4=new String(a2), a5=a4["search"]('>'); return-0x1===a5?a2===a3:(a4=(a4=a4['substr'](a5+0x1))['substr'](0x0, a4["search"]('<')))===a3;
                }, a1["toggleSingleMode"]=function(a2) {
                    var ia=i7; for(var a3=I["root"]["debugView"], a4=a2["getComponentInChildren"](F), a5=0x0; a5<this["strSingle"]['length']; a5++)this["isTextMatched"](a4["string"], this["strSingle"][a5])&&(a3["singleMode"]=a5);
                }, a1["toggleCompositeMode"]=function(a2) {
                    var ib=i7; for(var a3=I['root']["debugView"], a4=a2['getComponentInChildren'](F), a5=0x0; a5<this['strComposite']['length']; a5++)this["isTextMatched"](a4["string"], this['strComposite'][a5])&&a3["enableCompositeMode"](a5, a2["isChecked"]);
                }, a1["toggleLightingWithAlbedo"]=function(a2) {
                    var ic=i7; I["root"]["debugView"]["lightingWithAlbedo"]=a2["isChecked"];
                }, a1['toggleCSMColoration']=function(a2) {
                    var id=i7; I["root"]["debugView"]["csmLayerColoration"]=a2["isChecked"];
                }, a1["enableAllCompositeMode"]=function(a2) {
                    var ie=i7, a3=I['root']["debugView"]; a3['enableAllCompositeMode'](!0x0); for(var a4=0x0; a4<this["compositeModeToggleList"]['length']; a4++) {
                        this["compositeModeToggleList"][a4]["getComponent"](G)["isChecked"]=!0x0;
                    }var a5=this["miscModeToggleList"][0x0]["getComponent"](G); a5["isChecked"]=!0x1, a3["csmLayerColoration"]=!0x1, (a5=this["miscModeToggleList"][0x1]["getComponent"](G))["isChecked"]=!0x0, a3['lightingWithAlbedo']=!0x0;
                }, a1['hideUI']=function(a2) {
                    var ig=i7, a3=this["node"]["getChildByName"]("Titles"), a4=!a3["active"]; this["singleModeToggleList"][0x0]["parent"]["active"]=a4, this["miscModeToggleList"][0x0]["parent"]["active"]=a4, this['compositeModeToggleList'][0x0]["parent"]['active']=a4, this['EnableAllCompositeModeButton']["parent"]["active"]=a4, a3['active']=a4, this["hideButtonLabel"]["string"]=a4?'Hide\x20UI':"Show UI";
                }, a1["changeTextColor"]=function(a2) {
                    var ih=i7; this['_currentColorIndex']++, this["_currentColorIndex"]>=this["strColor"]["length"]&&(this["_currentColorIndex"]=0x0); for(var a3=0x0; a3<this["textComponentList"]["length"]; a3++)this["textComponentList"][a3]['string']=this["strColor"][this["_currentColorIndex"]]+this['textContentList'][a3]+"</color>"; for(var a4=0x0; a4<this["labelComponentList"]['length']; a4++)this['labelComponentList'][a4]["color"]=this["color"][this["_currentColorIndex"]];
                }, a1["onLoad"]=function() {
                }, a1["update"]=function(a2) {
                }, a0;
            }(J))['prototype'], "compositeModeToggle", [N],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), V=j(R["prototype"], "singleModeToggle", [O],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), W=j(R["prototype"], 'EnableAllCompositeModeButton', [P],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Q=R))||Q)), w["_RF"]['pop']();
        }
    };
});
