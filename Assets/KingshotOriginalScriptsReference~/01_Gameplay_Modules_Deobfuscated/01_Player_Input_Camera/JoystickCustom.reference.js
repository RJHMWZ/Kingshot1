// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/JoystickCustom.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AudioMgr.ts", './AudioName.ts', "./GameConfig.ts"], function(g) {
    var j, k, m, q, w, x, z, A, B, C, D, E, F, G, H, I; return {
        'setters':[function(J) {
            var qm=b; j=J["applyDecoratedDescriptor"], k=J["inheritsLoose"], m=J["initializerDefineProperty"], q=J["assertThisInitialized"];
        }, function(J) {
            var qn=b; w=J["cclegacy"], x=J["_decorator"], z=J["Node"], A=J["UITransform"], B=J["Vec3"], C=J["toRadian"], D=J['v3'], E=J["Input"], F=J["Component"];
        }, function(J) {
            var qo=b; G=J["default"];
        }, function(J) {
            H=J['AudioName'];
        }, function(J) {
            var qp=b; I=J["default"];
        }], 'execute':function() {
            var qq=b, J, K, L, M, N, O, P, Q, S, V, W; w['_RF']["push"]( {
            }, '69083fUaChAwY0BY0dL7eJL', 'JoystickCustom', void 0x0); var X=x['ccclass'], Y=x["property"]; g("JoystickCustom", (J=X('JoystickCustom'), K=Y(z), L=Y(z), J((O=j((N=function(Z) {
                var qs=qq; function a0() {
                    var qr=b; for(var a2, a3=arguments["length"], a4=new Array(a3), a5=0x0; a5<a3; a5++)a4[a5]=arguments[a5]; return a2=Z["call"]["apply"](Z, [this]["concat"](a4))||this, m(a2, "round", O, q(a2)), m(a2, 'inner', P, q(a2)), m(a2, "isStatic", Q, q(a2)), m(a2, "isDiretion", S, q(a2)), m(a2, "maxRadius", V, q(a2)), m(a2, "activeRange", W, q(a2)), a2["joystickCB"]=null, a2["touchID"]=-0x1, a2;
                }k(a0, Z); var a1=a0["prototype"]; return a1["onLoad"]=function() {
                    var qt=qs; this["show"](!0x1), this['isStatic']&&(this["round"]['on'](z["EventType"]["TOUCH_START"], this["touchStart"], this), this["round"]['on'](z["EventType"]["TOUCH_MOVE"], this['touchMove'], this), this["round"]['on'](z["EventType"]["TOUCH_END"], this["touchEnd"], this), this["round"]['on'](z["EventType"]["TOUCH_CANCEL"], this["touchEnd"], this), this['node']['on'](z["EventType"]["TOUCH_START"], this['panelTouchStart'], this), this["node"]['on'](z["EventType"]["TOUCH_MOVE"], this['panelTouchMove'], this), this["node"]['on'](z["EventType"]["TOUCH_END"], this['panelTouchEnd'], this), this["node"]['on'](z["EventType"]["TOUCH_CANCEL"], this["panelTouchEnd"], this));
                }, a1["init"]=function(a2) {
                    var qu=qs; this["joystickCB"]=a2;
                }, a1["show"]=function(a2) {
                    this['round']['active']=a2;
                }, a1['innerPosition']=function(a2) {
                    var qv=qs, a3= {
                        'type':null, 'active':!0x0, 'angle':0x0, 'ratio':0x0
                    }, a4=this['round']["getComponent"](A)['convertToNodeSpaceAR'](new B(a2['x'], a2['y'])); if(a4['z']=0x0, a4['length']()<=this["maxRadius"]*this['activeRange'])return this['inner']["position"]=new B(), a3["active"]=!0x1, a3; (a4['length']()>this["maxRadius"]||this["isDiretion"])&&(a4=(a4=a4["normalize"]())["multiplyScalar"](this["maxRadius"])), this["inner"]["position"]=new B(a4), a3["active"]=!0x0; var a5=C(I["CAMERA_3D"]["node"]['eulerAngles']['y']); return a3["angle"]=Math['atan2'](a4['y'], a4['x'])+a5, a3["ratio"]=a4['length']()/this["maxRadius"], a3;
                }, a1["panelTouchStart"]=function(a2) {
                    var qw=qs; this["show"](!0x0); var a3=a2['getUILocation'](), a4=new B(); this['node']["parent"]["getComponent"](A)["convertToNodeSpaceAR"](D(a3['x'], a3['y'], 0x0), a4), this["round"]["position"]=a4, this['touchStart'](a2);
                }, a1["panelTouchMove"]=function(a2) {
                    this['touchMove'](a2);
                }, a1["panelTouchEnd"]=function(a2) {
                    var qx=qs; this["touchEnd"](a2), this["show"](!0x1);
                }, a1["touchStart"]=function(a2) {
                    var qy=qs; if(G["isPlay"]||(G['isPlay']=!0x0, G['playMusic'](H["BGM"], !0x0, 0.6)), -0x1==this["touchID"]&&(this["touchID"]=a2["getID"]()), this["touchID"]!=a2['getID']())return!0x1; var a3=this["innerPosition"](a2["getUILocation"]()); return a3["type"]=E["EventType"]['TOUCH_START'], this['joystickCB']&&this["joystickCB"](a3), !0x0;
                }, a1["touchMove"]=function(a2) {
                    var qz=qs; if(this["touchID"]!=a2['getID']())return!0x1; var a3=this['innerPosition'](a2["getUILocation"]()); return a3["type"]=E["EventType"]['TOUCH_MOVE'], this['joystickCB']&&this["joystickCB"](a3), !0x0;
                }, a1["touchEnd"]=function(a2) {
                    var qA=qs; if(this["touchID"]!=a2["getID"]())return!0x1; this['touchID']=-0x1, this["show"](!0x1), this["inner"]["position"]=new B(); var a3= {
                        'type':E["EventType"]["TOUCH_END"], 'active':!0x1, 'angle':0x0, 'ratio':0x0
                    }; return this["joystickCB"]&&this["joystickCB"](a3), !0x0;
                }, a0;
            }(F))["prototype"], "round", [K],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), P=j(N["prototype"], "inner", [L],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), Q=j(N["prototype"], "isStatic", [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), S=j(N["prototype"], 'isDiretion', [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), V=j(N['prototype'], 'maxRadius', [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x80;
                }
            }), W=j(N["prototype"], "activeRange", [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0.1;
                }
            }), M=N))||M)), w["_RF"]["pop"]();
        }
    };
});
