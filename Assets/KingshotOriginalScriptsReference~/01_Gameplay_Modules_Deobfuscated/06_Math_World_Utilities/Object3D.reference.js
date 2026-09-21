// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Object3D.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./Collision.ts", './ObjNode.ts', "./Kdtree.ts", "./Math.ts", './Debug.ts'], function(j) {
    var k, q, z, A, D, E, F, G, H, I, J, K, L, N, O, P, Q, R, S, T, U, V, W, X, Y; return {
        'setters':[function(Z) {
            var sl=b; k=Z["applyDecoratedDescriptor"], q=Z['inheritsLoose'], z=Z["initializerDefineProperty"], A=Z["assertThisInitialized"];
        }, function(Z) {
            var sm=b; D=Z["cclegacy"], E=Z["_decorator"], F=Z["Enum"], G=Z["utils"], H=Z["primitives"], I=Z["Mesh"], J=Z["PhysicsSystem"], K=Z['CCInteger'], L=Z['Vec3'], N=Z["Mat4"], O=Z['MeshRenderer'], P=Z["Color"], Q=Z["Component"];
        }, function(Z) {
            R=Z['ShapeType'];
        }, function(Z) {
            S=Z['ObjNode'];
        }, function(Z) {
            var sn=b; T=Z["Kdtree"];
        }, function(Z) {
            var so=b; U=Z["CapsuleTriangle"], V=Z["SphereTriangle"], W=Z["AABBTriangle"], X=Z["RaycastTriangle"];
        }, function(Z) {
            var sp=b; Y=Z["Debug"];
        }], 'execute':function() {
            var sq=b, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae; D['_RF']["push"]( {
            }, "3cab69xftRP95i6Mq1JslSh", "Object3D", void 0x0); var af=E["ccclass"], ag=E["property"], ah=F(R), ai=[G["MeshUtils"]['createMesh'](H["box"]()), G["MeshUtils"]["createMesh"](H["sphere"](0.5,  {
                'segments':0xc
            })), G["MeshUtils"]["createMesh"](H['capsule'](0.5, 0.5, 0x2,  {
                'sides':0xc, 'heightSegments':0xc
            }))]; j("Object3D", (Z=af("Object3D"), a0=ag( {
                'type':I, 'displayName':"Collider"
            }), a1=ag( {
                'type':ah, 'displayName':'Bound'
            }), a2=ag( {
                'type':J["PhysicsGroup"]
            }), a3=ag( {
                'group':"Kdtree", 'visible':function() {
                    var sr=sq; return this["useTriangle"];
                }
            }), a4=ag( {
                'type':K, 'group':'Kdtree', 'step':0x1, 'min':0x9, 'max':0x19, 'visible':function() {
                    var ss=sq; return this["useTriangle"];
                }
            }), a5=ag( {
                'type':K, 'group':"Kdtree", 'step':0x1, 'min':0x1, 'max':0x8, 'visible':function() {
                    var st=sq; return this["useTriangle"];
                }
            }), Z((a8=k((a7=function(aj) {
                var sv=sq; function ak() {
                    var su=b; for(var am, an=arguments["length"], ao=new Array(an), ap=0x0; ap<an; ap++)ao[ap]=arguments[ap]; return am=aj['call']["apply"](aj, [this]["concat"](ao))||this, z(am, "meshCollider", a8, A(am)), z(am, "fastBound", a9, A(am)), z(am, "group", aa, A(am)), z(am, 'useTriangle', ab, A(am)), z(am, "debug", ac, A(am)), z(am, "maxLevels", ad, A(am)), z(am, "maxObjects", ae, A(am)), am['id']=0x0, am["flag"]=0x0, am['mask']=0xffffffff, am["isDirty"]=0xffffffff, am["useBoundShape"]=!0x1, am['bound']=[], am['center']=new L(), am["worldBounds"]=[], am["kdtree"]=null, am["indices"]=[], am['vertices']=[], am['objNodes']=[], am["_mat4"]=new N(), am['_inv4']=new N(), am["_verts"]=[], am["_normal"]=new L(), am['_center']=new L(), am["_worldBound"]=[], am;
                }q(ak, aj); var al=ak['prototype']; return al["onLoad"]=function() {
                    var sw=sv; if(!this['meshCollider']) {
                        var am=this["node"]["getComponent"](O); am?this["meshCollider"]=am["mesh"]:(this["useTriangle"]=!0x1, this['useBoundShape']=!0x0, this["meshCollider"]=ai[this["fastBound"]]);
                    }this["preBuild"](), this['mask']=J["instance"]['collisionMatrix'][this["group"]];
                }, al['setScale']=function(am) {
                    var sx=sv; return this["isDirty"]|=0x9, this["node"]["scale"]=am, am;
                }, al["getScale"]=function() {
                    var sy=sv; return this["node"]["scale"];
                }, al["setRotation"]=function(am) {
                    var sz=sv; return this['isDirty']|=0xa, this["node"]['rotation']=am, am;
                }, al["getRotation"]=function() {
                    var sA=sv; return this["node"]['rotation'];
                }, al['setPosition']=function(am) {
                    var sB=sv; return this["isDirty"]|=0xc, this["node"]['position']=am, am;
                }, al["getPosition"]=function() {
                    var sC=sv; return this['node']["position"];
                }, al['getWorldScale']=function() {
                    var sD=sv; return this['node']["scale"];
                }, al['getWorldPosition']=function() {
                    var sE=sv; return this["node"]['worldPosition'];
                }, al["getWorldRotation"]=function() {
                    var sF=sv; return this["node"]['worldRotation'];
                }, al["getWorldMatrix"]=function() {
                    var sG=sv; return this["node"]['worldMatrix'];
                }, al["getWorldMatrixInvert"]=function() {
                    var sH=sv; return 0xf&this["isDirty"]&&(this["isDirty"]&=-0x10, N["invert"](this['_inv4'], this["node"]["worldMatrix"])), this["_inv4"];
                }, al["getWorldCenter"]=function() {
                    var sI=sv; return L["transformMat4"](this["_center"], this["center"], this["getWorldMatrix"]());
                }, al["getColliderShape"]=function() {
                    var sJ=sv; return this["useBoundShape"]?this["fastBound"]:-0x1;
                }, al["preBuild"]=function() {
                    var sK=sv, am=this["meshCollider"]["struct"], an=am["minPosition"], ao=am["maxPosition"]; this['bound']=[an['x'], an['y'], an['z'], ao['x'], ao['y'], ao['z']], this["center"]["set"](0.5*(an['x']+ao['x']), 0.5*(an['y']+ao['y']), 0.5*(an['z']+ao['z'])); for(var ap=[], aq=this['meshCollider']["renderingSubMeshes"], ar=0x0; ar<aq["length"]; ar++) {
                        var as=aq[ar]["geometricInfo"], at=as["positions"], au=as["indices"]; if(this["vertices"]["push"](at), this["indices"]["push"](au), this["worldBounds"]["push"]([]), this["useTriangle"]&&au["length"]>0x0)for(var av=au["length"]/0x3, aw=0x0; aw<av; aw++) {
                            var ax=au[0x3*aw], ay=au[0x3*aw+0x1], az=au[0x3*aw+0x2], aA=[at[0x3*ax], at[0x3*ax+0x1], at[0x3*ax+0x2], at[0x3*ay], at[0x3*ay+0x1], at[0x3*ay+0x2], at[0x3*az], at[0x3*az+0x1], at[0x3*az+0x2]], aB=Math["min"](aA[0x0], aA[0x3], aA[0x6]), aC=Math["min"](aA[0x1], aA[0x4], aA[0x7]), aD=Math["min"](aA[0x2], aA[0x5], aA[0x8]), aE=Math["max"](aA[0x0], aA[0x3], aA[0x6]), aF=Math['max'](aA[0x1], aA[0x4], aA[0x7]), aG=Math["max"](aA[0x2], aA[0x5], aA[0x8]); ap["push"](new S(this, ar, aw, [aB, aC, aD, aE, aF, aG], aA));
                        }
                    }this["useTriangle"]&&(this["kdtree"]=new T(ap, 0x0, ap['length']-0x1, this["bound"], 0x1, this["maxObjects"]<<0x8|this["maxLevels"])), this['updateBounds'](!0x0);
                }, al["getVertices"]=function(am) {
                    var sL=sv; return void 0x0===am&&(am=0x0), this["vertices"][am];
                }, al["getWorldBound"]=function(am) {
                    var sM=sv; return void 0x0===am&&(am=-0x1), this["updateBounds"](), am>=0x0?this["worldBounds"][am]:this["_worldBound"];
                }, al["calculateBound"]=function(am, an, ao) {
                    var sN=sv, ap=0.5*(an[0x3]+an[0x0]), aq=0.5*(an[0x4]+an[0x1]), ar=0.5*(an[0x5]+an[0x2]), as=0.5*(an[0x3]-an[0x0]), at=0.5*(an[0x4]-an[0x1]), au=0.5*(an[0x5]-an[0x2]), av=ao["m00"]*ap+ao["m04"]*aq+ao["m08"]*ar+ao["m12"], aw=ao['m01']*ap+ao['m05']*aq+ao["m09"]*ar+ao["m13"], ax=ao['m02']*ap+ao['m06']*aq+ao["m10"]*ar+ao['m14'], ay=as*ao["m00"], az=as*ao["m01"], aA=as*ao['m02'], aB=at*ao["m04"], aC=at*ao["m05"], aD=at*ao["m06"], aE=au*ao["m08"], aF=au*ao["m09"], aG=au*ao["m10"]; return as=(ay>=0x0?ay:-ay)+(aB>=0x0?aB:-aB)+(aE>=0x0?aE:-aE), at=(az>=0x0?az:-az)+(aC>=0x0?aC:-aC)+(aF>=0x0?aF:-aF), au=(aA>=0x0?aA:-aA)+(aD>=0x0?aD:-aD)+(aG>=0x0?aG:-aG), am[0x0]=av-as, am[0x1]=aw-at, am[0x2]=ax-au, am[0x3]=av+as, am[0x4]=aw+at, am[0x5]=ax+au, am;
                }, al["updateBounds"]=function(am) {
                    var sO=sv; if(void 0x0===am&&(am=!0x1), (0x8&this["isDirty"]||am)&&this["worldBounds"]["length"]) {
                        for(var an=this["getWorldMatrix"](), ao=this["meshCollider"]['renderingSubMeshes'], ap=0x0; ap<ao['length']; ap++) {
                            var aq=ao[ap]["geometricInfo"], ar=aq["boundingBox"]["min"], as=aq["boundingBox"]["max"], at=this["worldBounds"][ap]; at[0x0]=ar['x'], at[0x1]=ar['y'], at[0x2]=ar['z'], at[0x3]=as['x'], at[0x4]=as['y'], at[0x5]=as['z'], this["calculateBound"](at, at, an);
                        }ao["length"]<=0x1?this["_worldBound"]=this["worldBounds"][0x0]:this["calculateBound"](this['_worldBound'], this["bound"], an), this["isDirty"]&=-0x9;
                    }return this["worldBounds"];
                }, al["boundCulling"]=function(am) {
                    var sP=sv; if(am['isBox'])return!0x1; for(var an=this['_verts'], ao=this["bound"], ap=am['getVertices'](), aq=N["multiply"](this["_mat4"], this["getWorldMatrixInvert"](), am["getWorldMatrix"]()), ar=0x0, as=ap['length']/0x3; ar<as; ar++) {
                        var at=ap[0x3*ar], au=ap[0x3*ar+0x1], av=ap[0x3*ar+0x2]; an[0x3*ar]=aq["m00"]*at+aq["m04"]*au+aq["m08"]*av+aq["m12"], an[0x3*ar+0x1]=aq["m01"]*at+aq['m05']*au+aq["m09"]*av+aq['m13'], an[0x3*ar+0x2]=aq["m02"]*at+aq["m06"]*au+aq["m10"]*av+aq["m14"];
                    }switch(this['fastBound']) {
                        case ah["Box"]:return!W(ao, an); case ah["Sphere"]:return!V([0x0, 0x0, 0x0], 0.5, an); case ah["Capsule"]:return!U([0x0, 0x1, 0x0], [0x0, -0x1, 0x0], 0.5, an);
                    }return!0x1;
                }, al["boundTriangles"]=function(am, an) {
                    var sQ=sv; void 0x0===an&&(an=null); var ao=[], ap=[]; if(this['useTriangle']) {
                        var aq=this["getWorldMatrixInvert"](); if(an&&(aq=N["multiply"](this['_mat4'], aq, an)), this["calculateBound"](ap, am, aq), this["kdtree"]["retrieve"](ap, ao), this['debug'])for(var ar=0x0; ar<ao["length"]; ar++) {
                            var as=ao[ar]; Y["addTriangle"](as["getVertices"](), as["getWorldMatrix"](), P["BLUE"]);
                        }
                    }return ao;
                }, al["boundObject"]=function(am) {
                    var sR=sv, an=am["bound"], ao=am["fastBound"], ap=am['getWorldMatrix'](), aq=this["boundTriangles"](an, ap); if(aq['length']) {
                        for(var ar=0x0, as=this['_verts'], at=aq["length"], au=N["multiply"](this["_mat4"], am["getWorldMatrixInvert"](), this['getWorldMatrix']()), av=[au["m00"], au["m04"], au["m08"], au["m12"], au["m01"], au["m05"], au["m09"], au["m13"], au['m02'], au["m06"], au["m10"], au['m14']], aw=0x0; aw<at; aw++) {
                            for(var ax=aq[aw], ay=ax["getVertices"](), az=0x0; az<0x3; az++) {
                                var aA=ay[0x3*az], aB=ay[0x3*az+0x1], aC=ay[0x3*az+0x2]; as[0x3*az]=av[0x0]*aA+av[0x1]*aB+av[0x2]*aC+av[0x3], as[0x3*az+0x1]=av[0x4]*aA+av[0x5]*aB+av[0x6]*aC+av[0x7], as[0x3*az+0x2]=av[0x8]*aA+av[0x9]*aB+av[0xa]*aC+av[0xb];
                            }var aD=!0x1; switch(ao) {
                                case ah["Box"]:aD=W(an, as); break; case ah["Sphere"]:aD=V([0x0, 0x0, 0x0], 0.5, as); break; case ah["Capsule"]:aD=U([0x0, 0x1, 0x0], [0x0, -0x1, 0x0], 0.5, as);
                            }aD&&(ar<aw&&(aq[ar]=aq[aw]), ar++, this["debug"]&&Y["addTriangle"](ax['getVertices'](), ax["getWorldMatrix"](), P["RED"]));
                        }aq["length"]=ar;
                    }return aq;
                }, al['rayCast']=function(am, an) {
                    var sS=sv, ao=this["_normal"], ap=!0x1, aq=[], ar=this["getWorldMatrixInvert"](), as=[am[0x3]*ar['m00']+am[0x4]*ar['m04']+am[0x5]*ar["m08"], am[0x3]*ar['m01']+am[0x4]*ar["m05"]+am[0x5]*ar["m09"], am[0x3]*ar["m02"]+am[0x4]*ar["m06"]+am[0x5]*ar["m10"]], at=Math["sqrt"](as[0x0]*as[0x0]+as[0x1]*as[0x1]+as[0x2]*as[0x2]), au=am[0x6]*at, av=at>0x0?0x1/at:0x0; as[0x0]*=av, as[0x1]*=av, as[0x2]*=av; var aw=[am[0x0]*ar["m00"]+am[0x1]*ar["m04"]+am[0x2]*ar["m08"]+ar["m12"], am[0x0]*ar['m01']+am[0x1]*ar["m05"]+am[0x2]*ar["m09"]+ar["m13"], am[0x0]*ar["m02"]+am[0x1]*ar["m06"]+am[0x2]*ar["m10"]+ar["m14"]]; if(this["useTriangle"]) {
                        var ax=Number["POSITIVE_INFINITY"]; this["kdtree"]["rayCast"]([aw[0x0], aw[0x1], aw[0x2], as[0x0], as[0x1], as[0x2], au], function(aW) {
                            var sT=sS, aX=aW["rayDist"]; if(aX<0x0||au>aX) {
                                var aY=X(aw, as, aW["getVertices"](), au); if(aY>=0x0&&au>aY)return ao["set"](aW["normal"]), ap=!0x0, au=aY;
                            }return ax;
                        });
                    }else {
                        for(var ay=this["indices"][an], az=this["vertices"][an], aA=0x0, aB=this["_verts"], aC=ay["length"]/0x3, aD=0x0; aD<aC; aD++) {
                            var aE=ay[0x3*aD], aF=ay[0x3*aD+0x1], aG=ay[0x3*aD+0x2]; aB[0x0]=az[0x3*aE], aB[0x1]=az[0x3*aE+0x1], aB[0x2]=az[0x3*aE+0x2], aB[0x3]=az[0x3*aF], aB[0x4]=az[0x3*aF+0x1], aB[0x5]=az[0x3*aF+0x2], aB[0x6]=az[0x3*aG], aB[0x7]=az[0x3*aG+0x1], aB[0x8]=az[0x3*aG+0x2]; var aH=X(aw, as, aB, au); aH>=0x0&&au>aH&&(ap=!0x0, au=aH, aA=aD);
                        }if(ap) {
                            var aI=ay[0x3*aA], aJ=ay[0x3*aA+0x1], aK=ay[0x3*aA+0x2]; aB[0x0]=az[0x3*aI], aB[0x1]=az[0x3*aI+0x1], aB[0x2]=az[0x3*aI+0x2], aB[0x3]=az[0x3*aJ], aB[0x4]=az[0x3*aJ+0x1], aB[0x5]=az[0x3*aJ+0x2], aB[0x6]=az[0x3*aK], aB[0x7]=az[0x3*aK+0x1], aB[0x8]=az[0x3*aK+0x2]; var aL=aB[0x3]-aB[0x0], aM=aB[0x4]-aB[0x1], aN=aB[0x5]-aB[0x2], aO=aB[0x6]-aB[0x0], aP=aB[0x7]-aB[0x1], aQ=aB[0x8]-aB[0x2]; ao['x']=aM*aQ-aN*aP, ao['y']=aN*aO-aL*aQ, ao['z']=aL*aP-aM*aO;
                        }
                    }if(ap) {
                        var aR=this["getWorldMatrix"](), aS=ao['x'], aT=ao['y'], aU=ao['z']; ao['x']=aS*aR["m00"]+aT*aR["m04"]+aU*aR['m08'], ao['y']=aS*aR["m01"]+aT*aR['m05']+aU*aR['m09'], ao['z']=aS*aR["m02"]+aT*aR["m06"]+aU*aR['m10'], ao["normalize"](); var aV=au/at; return aq[0x0]=am[0x0]+am[0x3]*aV, aq[0x1]=am[0x1]+am[0x4]*aV, aq[0x2]=am[0x2]+am[0x5]*aV, aq[0x3]=ao['x'], aq[0x4]=ao['y'], aq[0x5]=ao['z'], aq[0x6]=aV, aq;
                    }return null;
                }, al["getGroup"]=function() {
                    var sU=sv; return this["group"];
                }, al["setGroup"]=function(am) {
                    var sV=sv; this["group"]=am;
                }, al["addGroup"]=function(am) {
                    var sW=sv; this["group"]|=am;
                }, al["removeGroup"]=function(am) {
                    var sX=sv; this["group"]&=~am;
                }, al["getMask"]=function() {
                    var sY=sv; return this["mask"];
                }, al['setMask']=function(am) {
                    var sZ=sv; this["mask"]=am;
                }, al['addMask']=function(am) {
                    this['mask']|=am;
                }, al["removeMask"]=function(am) {
                    this['mask']&=~am;
                }, al["clear"]=function() {
                    var t0=sv; if(this["kdtree"]&&(this["kdtree"]["clear"](), this["kdtree"]=null), this["objNodes"]) {
                        for(var am=this["objNodes"]["length"], an=0x0; an<am; an++)this['objNodes'][an]["clear"]();
                    }this["bound"]=[], this["indices"]=[], this["vertices"]=[], this["objNodes"]=[], this['worldBounds']=[];
                }, ak;
            }(Q))["prototype"], "meshCollider", [a0],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a9=k(a7['prototype'], 'fastBound', [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return ah['Box'];
                }
            }), aa=k(a7["prototype"], "group", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var t1=sq; return J['PhysicsGroup']["DEFAULT"];
                }
            }), ab=k(a7["prototype"], "useTriangle", [ag],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), ac=k(a7["prototype"], 'debug', [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), ad=k(a7["prototype"], "maxLevels", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x10;
                }
            }), ae=k(a7["prototype"], "maxObjects", [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), a6=a7))||a6)), D["_RF"]["pop"]();
        }
    };
});
