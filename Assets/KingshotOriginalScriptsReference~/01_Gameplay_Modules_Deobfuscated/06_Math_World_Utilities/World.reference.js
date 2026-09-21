// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/World.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', "./Object3D.ts", "./ObjNode.ts", './Octree.ts', "./Debug.ts", "./Collision.ts", "./GameConfig.ts"], function(j) {
    var k, m, q, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L; return {
        'setters':[function(M) {
            var zs=b; k=M["applyDecoratedDescriptor"], m=M["inheritsLoose"], q=M['initializerDefineProperty'], w=M['assertThisInitialized'];
        }, function(M) {
            var zt=b; x=M["cclegacy"], z=M["_decorator"], A=M['CCInteger'], B=M["Vec3"], C=M["Mat4"], D=M["Color"], E=M["Component"];
        }, function(M) {
            var zu=b; F=M["Object3D"];
        }, function(M) {
            var zv=b; G=M["ObjNode"];
        }, function(M) {
            var zw=b; H=M["Octree"], I=M["GetMaxLevel"];
        }, function(M) {
            var zx=b; J=M["Debug"];
        }, function(M) {
            var zy=b; K=M["Collision"];
        }, function(M) {
            var zz=b; L=M["default"];
        }], 'execute':function() {
            var zA=b, M, P, Q, R, U, V, W, X, Y, Z, a0, a1, a2; x["_RF"]["push"]( {
            }, 'bf5738octtPDbdSZNvYfHq0', "World", void 0x0); var a3=z["ccclass"], a4=z["property"]; j("World", (M=a3('World'), P=a4( {
                'group':"Octree"
            }), Q=a4( {
                'type':A, 'group':"Octree", 'step':0x1, 'min':0x1, 'max':0x6
            }), R=a4( {
                'type':A, 'group':'Octree', 'step':0x1, 'min':0x1, 'max':0x10
            }), U=a4( {
                'group':'Octree'
            }), V=a4( {
                'group':"Octree"
            }), M((Y=k((X=function(a5) {
                var zC=zA; function a6() {
                    var zB=b; for(var a8, a9=arguments['length'], aa=new Array(a9), ab=0x0; ab<a9; ab++)aa[ab]=arguments[ab]; return a8=a5["call"]["apply"](a5, [this]["concat"](aa))||this, q(a8, "debug", Y, w(a8)), q(a8, "maxLevels", Z, w(a8)), q(a8, "maxObjects", a0, w(a8)), q(a8, "center", a1, w(a8)), q(a8, 'halfSize', a2, w(a8)), a8['octree']=void 0x0, a8['flag']=0x0, a8["result"]=[], a8['objects']=[], a8['collision']=new K(), a8;
                }m(a6, a5); var a7=a6["prototype"]; return a7['onLoad']=function() {
                    var zD=zC; J['camera']=L["CAMERA_3D"];
                }, a7["start"]=function() {
                    var zE=zC; this["preBuild"]();
                }, a7["preBuild"]=function() {
                    var zF=zC, a8=this['center'], a9=this["halfSize"]; B["max"](a9, a9, B['ONE']); var aa=[a8['x'], a8['y'], a8['z'], a9['x'], a9['y'], a9['z']]; this["octree"]=new H(aa, this['maxObjects']<<0x8|this["maxLevels"]); for(var ab=this["node"]['getComponentsInChildren'](F), ac=0x0; ac<ab['length']; ac++)this["insert"](ab[ac]);
                }, a7["insert"]=function(a8) {
                    var zG=zC, a9=a8["updateBounds"](!0x0); if(a9["length"]) {
                        this["objects"]["push"](a8); var aa=a8["objNodes"]; if(aa&&aa['length']>0x0) {
                            for(var ab=0x0; ab<aa["length"]; ab++)this["octree"]['insert'](aa[ab]); return;
                        }for(var ac=a9["length"]-0x1; ac>=0x0; ac--) {
                            var ad=new G(a8, a8['id'], ac, a9[ac]); I(ad, this["octree"], 0x1), this["octree"]["insert"](ad), aa["push"](ad);
                        }
                    }
                }, a7["remove"]=function(a8, a9) {
                    var zH=zC; void 0x0===a9&&(a9=!0x0); var aa=this["objects"], ab=aa["indexOf"](a8); if(-0x1!=ab) {
                        var ac=a8["objNodes"]; if(ac) {
                            for(var ad=0x0; ad<ac['length']; ad++)this['octree']["remove"](ac[ad]);
                        }var ae=aa['length']-0x1; aa[ab]=aa[ae], aa['length']=ae;
                    }a9&&a8["clear"]();
                }, a7['aabbQuery']=function(a8, a9, aa) {
                    var zI=zC; if(void 0x0===a9&&(a9=!0x1), void 0x0===aa&&(aa=0xffffffff), this["result"]["length"]=0x0, this["octree"]["retrieve"](a8, ++this["flag"], this["result"], aa), a9)for(var ab=this["result"], ac=ab["length"], ad=0x0; ad<ac; ad++) {
                        var ae=ab[ad]["obj3D"]; if(ae['useTriangle']) {
                            var af=ae["boundTriangles"](a8); this["result"]['splice'](ad, 0x1); for(var ag=af["length"]-0x1; ag>=0x0; ag--)this["result"]["push"](af[ag]); af["length"]=0x0, ac--, ad--;
                        }
                    }return this['result'];
                }, a7["objectQuery"]=function(a8, a9) {
                    var zJ=zC; void 0x0===a9&&(a9=!0x1), this["result"]["length"]=0x0; var aa=a8["getWorldBound"](); if(this["octree"]["retrieve"](aa, ++this["flag"], this["result"], a8["mask"]), a9) {
                        for(var ab=this['result'], ac=ab['length'], ad=ac-0x1; ad>=0x0; ad--) {
                            var ae=ab[ad]["obj3D"]; if(ae["useTriangle"]) {
                                for(var af=ae['boundObject'](a8), ag=0x0; ag<af['length']; ag++)ab[ac++]=af[ag]; ab[ad]=ab[--ac];
                            }
                        }ab["length"]=ac;
                    }return this['result'];
                }, a7["rayCast"]=function(a8, a9, aa) {
                    var zK=zC; void 0x0===a9&&(a9=0xffffffff), void 0x0===aa&&(aa=!0x1); var ab=a8[0x6], ac=[], ad= {
                        'objs':ac, 'hit':null
                    }; if(this['octree']["rayCast"](a8, ++this["flag"], ac, a9), ac["sort"](function(an, ao) {
                        var zL=zK; return an["rayDist"]-ao['rayDist'];
                    }), aa) {
                        for(var ae=0x0, af=ac["length"]; ae<af; ae++) {
                            var ag=ac[ae], ah=ag['obj3D'], ai=ag["rayDist"]; if(ai<0x0||ai<ab) {
                                var aj=ah["rayCast"](a8, ag['id1']); aj&&ab>=aj[0x6]&&(ab=aj[0x6], ac[0x0]=ag, ad["hit"]=aj);
                            }
                        }if(this['debug']&&ad["hit"]) {
                            var ak=ad["hit"], al=(ad["objs"][0x0], new B(a8[0x0], a8[0x1], a8[0x2])), am=new B(ak[0x0], ak[0x1], ak[0x2]); J['addLine'](al, am, C["IDENTITY"], D["GREEN"]);
                        }
                    }return ad;
                }, a7["clear"]=function() {
                    var zM=zC; for(var a8=0x0; a8<this["objects"]["length"]; a8++)this["objects"][a8]["clear"](); this['objects']["length"]=0x0, this["octree"]['clear'](), this["octree"]=null;
                }, a6;
            }(E))["prototype"], "debug", [P],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), Z=k(X['prototype'], "maxLevels", [Q],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x4;
                }
            }), a0=k(X['prototype'], "maxObjects", [R],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x8;
                }
            }), a1=k(X['prototype'], 'center', [U],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new B();
                }
            }), a2=k(X["prototype"], "halfSize", [V],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new B(0x32, 0x32, 0x32);
                }
            }), W=X))||W)), x["_RF"]["pop"]();
        }
    };
});
