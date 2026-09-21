// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/NavLineComp.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(c) {
    var f, g, j, k, m, q, v, w, x, y, z, A; return {
        'setters':[function(B) {
            var s8=b; f=B['applyDecoratedDescriptor'], g=B["inheritsLoose"], j=B["initializerDefineProperty"], k=B["assertThisInitialized"];
        }, function(B) {
            var s9=b; m=B["cclegacy"], q=B["_decorator"], v=B["Vec3"], w=B['Vec2'], x=B["Color"], y=B["MeshRenderer"], z=B['v3'], A=B['Component'];
        }], 'execute':function() {
            var sa=b, B, E, F, G, H, I, J, K, O, Q, U, V, W, X, Y; m["_RF"]['push']( {
            }, "d7907JbKTJPcbiqQwnDrwpr", "NavLineComp", void 0x0); var Z=q["ccclass"], a0=q["property"], a1=(new v(), new v(), new v(0x1, 0x1, 0x1)), a2=(new v(0x0, 0x0, 0x0), new w(0x1, 0x1)), a3=new x(0xff, 0xff, 0xff, 0xff); c("NavLineComp", (B=Z("导航线组件"), E=a0( {
                'type':y, 'displayName':'箭头Mesh', 'tooltip':"拖MeshRenderer组件到这里"
            }), F=a0( {
                'displayName':'执行间隔', 'tooltip':"多少帧执行一次 建议3-5", 'min':0x1
            }), G=a0( {
                'displayName':"箭头速度", 'tooltip':"控制材质texture位移,在代码里设置x轴向或者y轴移动", 'min':0.1
            }), H=a0( {
                'displayName':'箭头密度', 'tooltip':"控制箭头的密度", 'min':0.1
            }), I=a0( {
                'displayName':'角度变化', 'tooltip':"箭头是否有x欧拉角度变化 不勾选性能好点喽"
            }), J=a0( {
                'displayName':"长度变化固定倍数", 'tooltip':"长度对应不上时调整这个参数"
            }), B((Q=f((O=function(a4) {
                var sc=sa; function a5() {
                    var sb=b; for(var a7, a8=arguments["length"], a9=new Array(a8), aa=0x0; aa<a8; aa++)a9[aa]=arguments[aa]; return a7=a4['call']["apply"](a4, [this]["concat"](a9))||this, j(a7, "lineMesh", Q, k(a7)), j(a7, "dtFrame", U, k(a7)), j(a7, "moveSpeed", V, k(a7)), j(a7, "density", W, k(a7)), j(a7, "xEuler", X, k(a7)), j(a7, "disRatio", Y, k(a7)), a7["mat"]=void 0x0, a7["inited"]=!0x1, a7['desLen']=0x0, a7['dt']=0x0, a7["angle"]=0x0, a7["_startTarget"]=null, a7['_desTarget']=null, a7;
                }g(a5, a4); var a6=a5['prototype']; return a6["onLoad"]=function() {
                    var sd=sc; this['mat']=this['lineMesh']["material"], this["navStop"]();
                }, a6["start"]=function() {
                    var se=sc, a7=new w(0x0, 0x0); a7['y']=this["moveSpeed"], this["mat"]["setProperty"]('textureMoveSpeed', a7);
                }, a6["navStart"]=function(a7, a8) {
                    var sf=sc; this["_startTarget"]=a7, this['_desTarget']=a8, this['dt']=0x0, this['inited']=!0x0, this["mat"]["setProperty"]('mainColor', a3), this["setDis"]();
                }, a6["navStop"]=function() {
                    var sg=sc; this["inited"]=!0x1, this["mat"]["setProperty"]("mainColor", x["TRANSPARENT"]);
                }, a6['isActive']=function() {
                    var sh=sc; return this["inited"];
                }, a6["setDis"]=function() {
                    var si=sc, a7=this["_startTarget"]["getWorldPosition"](), a8=z(this["_desTarget"]["worldPosition"]['x'], a7['y'], this["_desTarget"]["worldPosition"]['z']); this['desLen']=v['distance'](a7, a8)*this["disRatio"], a1['z']=this["desLen"], this["node"]["setScale"](a1), a2['y']=this['desLen']*this["density"], this["mat"]["setProperty"]("tilingOffset", a2), this["xEuler"]&&this["rotateLine"](a7, a8);
                }, a6["rotateLine"]=function(a7, a8) {
                    var sj=sc; this["node"]["lookAt"](z(this['_desTarget']["worldPosition"]['x'], this["_startTarget"]["worldPosition"]['y'], this['_desTarget']["worldPosition"]['z']));
                }, a6["update"]=function() {
                    var sk=sc; if(this["inited"]) {
                        this['dt']++; var a7=this["_startTarget"]["getWorldPosition"](); this["node"]['setWorldPosition'](a7['x'], a7['y']+0.1, a7['z']), this['dt']>=this['dtFrame']&&(this["setDis"](), this['dt']=0x0);
                    }
                }, a5;
            }(A))['prototype'], "lineMesh", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), U=f(O["prototype"], 'dtFrame', [F],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x4;
                }
            }), V=f(O["prototype"], "moveSpeed", [G],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x2;
                }
            }), W=f(O["prototype"], "density", [H],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), X=f(O['prototype'], "xEuler", [I],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), Y=f(O['prototype'], "disRatio", [J],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), K=O))||K)), m["_RF"]['pop']();
        }
    };
});
