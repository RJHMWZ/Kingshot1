// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/ThreeFreeLookCamera.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./VectorTool.ts", "./Quaternion.ts", './FitScreenConst.ts', './ThirdPersonCameraType.ts', "./CoreEventManager.ts", "./JoyStickConst.ts", './CoreEventName.ts'], function(j) {
    var k, q, x, z, A, B, C, D, F, G, H, I, J, K, L, N, P, Q, R, U, V, W, X, Y, Z, a0; return {
        'setters':[function(a1) {
            var xi=b; k=a1["applyDecoratedDescriptor"], q=a1["inheritsLoose"], x=a1["initializerDefineProperty"], z=a1["assertThisInitialized"];
        }, function(a1) {
            var xj=b; A=a1['cclegacy'], B=a1['_decorator'], C=a1["Node"], D=a1["Enum"], F=a1["Vec3"], G=a1["input"], H=a1["Input"], I=a1['v3'], J=a1["Camera"], K=a1["Tween"], L=a1["tween"], N=a1["clamp"], P=a1["Quat"], Q=a1["Component"];
        }, function(a1) {
            var xk=b; R=a1["VectorTool"];
        }, function(a1) {
            U=a1['default'];
        }, function(a1) {
            var xl=b; V=a1["SCREEN_DIR"], W=a1["SCREEN_DIRCTION"];
        }, function(a1) {
            var xm=b; X=a1["ThirdPersonCameraType"];
        }, function(a1) {
            var xn=b; Y=a1["default"];
        }, function(a1) {
            var xo=b; Z=a1["JoyStickEvent"];
        }, function(a1) {
            var xp=b; a0=a1["CoreEventName"];
        }], 'execute':function() {
            var xq=b, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj; A["_RF"]["push"]( {
            }, "58299y0/BFKAYO6P/9+XTgd", "ThreeFreeLookCamera", void 0x0); var ak=B["ccclass"], al=B["property"]; j('ThirdFreeLookCamera', (a1=ak("ThirdFreeLookCamera"), a2=al(C), a3=al(C), a4=al( {
                'type':D(X), 'tooltip':"相机类型"
            }), a5=al( {
                'tooltip':"相机距离目标的距离缩放", 'visible':function() {
                    return this['cameraType']==X['Follow'];
                }
            }), a6=al( {
                'tooltip':"针对竖屏视角，对应的横屏缩放比例", 'visible':function() {
                    var xr=xq; return this["cameraType"]==X["Follow"];
                }
            }), a1((a9=k((a8=function(am) {
                var xt=xq; function an() {
                    var xs=b; for(var ap, aq=arguments["length"], ar=new Array(aq), as=0x0; as<aq; as++)ar[as]=arguments[as]; return ap=am["call"]["apply"](am, [this]["concat"](ar))||this, x(ap, 'target', a9, z(ap)), x(ap, "lookAt", aa, z(ap)), x(ap, "moveSmooth", ab, z(ap)), x(ap, "rotateSmooth", ac, z(ap)), x(ap, "cameraType", ad, z(ap)), x(ap, "pos_offset_vertical", ae, z(ap)), x(ap, "euler_offset_vertical", af, z(ap)), x(ap, "pos_offset_horizontal", ag, z(ap)), x(ap, "euler_offset_horizontal", ah, z(ap)), x(ap, "baseScale", ai, z(ap)), x(ap, "horizontalScale", aj, z(ap)), ap["MouseX"]=0x0, ap['MouseY']=0x0, ap["_forward"]=new F(), ap["_right"]=new F(), ap["_up"]=new F(), ap["angle"]=null, ap["_positionOffset"]=new F(0x0, 0x0, 0x0), ap['_eulerAngleOffset']=new F(0x0, 0x0, 0x0), ap['isDown']=!0x1, ap["_lookAtPosInit"]=null, ap["velocity"]=new F(), ap["forwardView"]=new F(), ap;
                }q(an, am); var ao=an["prototype"]; return ao['onLoad']=function() {
                }, ao["start"]=function() {
                    var xu=xt; G['on'](H['EventType']['MOUSE_DOWN'], this["MouseDown"], this), G['on'](H['EventType']["MOUSE_MOVE"], this["MouseMove"], this), G['on'](H['EventType']["MOUSE_UP"], this["MouseUp"], this), this["target"]&&this["cameraType"]==X["Follow"]&&this["node"]["lookAt"](I(this["target"]['worldPosition']['x'], this["target"]["worldPosition"]['y'], this["target"]["worldPosition"]['z'])), this["updateCamOffsetByScreen"]();
                }, ao["onEnable"]=function() {
                    var xv=xt; Y['on'](a0["SCREEN_CHANGE"], this["onScreenChange"], this), Y['on'](Z["MOVEMENT_START"], this["onMovementStart"], this), Y['on'](Z["MOVEMENT_STOP"], this['onMovementStop'], this);
                }, ao["onDisable"]=function() {
                    var xw=xt; Y["off"](a0["SCREEN_CHANGE"], this["onScreenChange"], this), Y["off"](Z["MOVEMENT_START"], this['onMovementStart'], this), Y['off'](Z["MOVEMENT_STOP"], this["onMovementStop"], this);
                }, ao["onMovementStart"]=function() {
                    var xx=xt; this["updateCameraFov"](!0x0);
                }, ao["onMovementStop"]=function() {
                    var xy=xt; this["updateCameraFov"](!0x1);
                }, ao["updateCameraFov"]=function(ap) {
                    var xz=xt, aq=this["node"]["getComponent"](J); K["stopAllByTarget"](aq), ap?L(aq)['to'](0.2,  {
                        'fov':0x21
                    })['start']():L(aq)['to'](0.2,  {
                        'fov':0x23
                    })["start"]();
                }, ao['MouseDown']=function(ap) {
                    var xA=xt; this["isDown"]=!0x0;
                }, ao["MouseMove"]=function(ap) {
                    var xB=xt; this["cameraType"]==X["FollowIndependentRotation"]&&this["SetIndependentRotation"](ap);
                }, ao["MouseUp"]=function(ap) {
                    var xC=xt; this["isDown"]=!0x1;
                }, ao["update"]=function(ap) {
                    var xD=xt; if(this["target"])switch(this['cameraType']) {
                        case X['Follow']:this["SetFollow"](ap); break; case X['FollowTrackRotation']:this["SetFollowTrackRotation"](); break; case X["FollowIndependentRotation"]:this["SetMove"]();
                    }
                }, ao['SetFollow']=function(ap) {
                    var xE=xt; this["_lookAtPosInit"]||(this["_lookAtPosInit"]=this["lookAt"]["position"]["clone"](), F["subtract"](this["_positionOffset"], this["_positionOffset"]["clone"](), this["_lookAtPosInit"])); var aq=new F(); F["add"](aq, this["lookAt"]["worldPosition"], new F(this["_positionOffset"]['x'], this["_positionOffset"]['y'], this["_positionOffset"]['z'])); var ar=ap/(0x1/0x3c), as=this["moveSmooth"]*ar; as=N(as, 0x0, 0x1), this["node"]["position"]=this['node']["position"]["lerp"](aq, as), this["node"]["eulerAngles"]=I(this["_eulerAngleOffset"]['x'], this["_eulerAngleOffset"]['y'], this["_eulerAngleOffset"]['z']);
                }, ao['SetFollowTrackRotation']=function() {
                    var xF=xt, ap=F["multiplyScalar"](new F(), F['UP'], this['_positionOffset']['y']), aq=F['multiplyScalar'](new F(), this["target"]['forward'], this["_positionOffset"]['z']), ar=F["add"](new F(), this["target"]["position"], ap); F["add"](ar, ar, aq), this["node"]["position"]=R["SmoothDampV3"](this["node"]["position"], ar, this['velocity'], this["moveSmooth"], 0x186a0, 0.02), this['forwardView']=F['subtract'](this["forwardView"], this["node"]['position'], this['target']["getWorldPosition"]()), this["node"]["lookAt"](this['target']["worldPosition"]);
                }, ao['SetMove']=function() {
                    var xG=xt; this["_forward"]=new F(), this["_right"]=new F(), this["_up"]=new F(), F["transformQuat"](this["_forward"], F["FORWARD"], this["node"]["rotation"]), this["_forward"]["multiplyScalar"](this['_positionOffset']['z']); var ap=new F(); ap=ap["add"](this["lookAt"]["worldPosition"])["subtract"](this["_forward"])["add"](this["_right"])["add"](this["_up"]), this['node']["position"]=this["node"]["position"]["lerp"](ap, this['moveSmooth']);
                }, ao["SetIndependentRotation"]=function(ap) {
                    var xH=xt, aq=-ap["movementX"], ar=-ap['movementY'], as=new P(), at=F['transformQuat'](this["_right"], F["RIGHT"], this['node']["rotation"]); as=U['RotationAroundNode'](this["node"], this["target"]['position'], at, ar), this['angle']=U["GetEulerFromQuat"](as), this["angle"]['x']=this["angle"]['x']>0x0?this["Clamp"](this['angle']['x'], 0x78, 0xb4):this["Clamp"](this["angle"]['x'], -0xb4, -0xaa), P["fromEuler"](as, this["angle"]['x'], this["angle"]['y'], this["angle"]['z']), this["node"]['setWorldRotation'](as), as=U["RotationAroundNode"](this["node"], this["target"]["position"], F['UP'], aq), this["node"]['setWorldRotation'](as), this["angle"]=U['GetEulerFromQuat'](as), this["MouseX"]=this['angle']['y'], this["MouseY"]=this["angle"]['x'];
                }, ao["Clamp"]=function(ap, aq, ar) {
                    return ap<=aq?ap=aq:ap>=ar&&(ap=ar), ap;
                }, ao["GetType"]=function() {
                    var xI=xt; return this["cameraType"];
                }, ao["onScreenChange"]=function() {
                    var xJ=xt; this["updateCamOffsetByScreen"]();
                }, ao["updateCamOffsetByScreen"]=function() {
                    var xK=xt; V["DIR"]==W["HORIZONTAL"]?(this["_positionOffset"]=this["pos_offset_horizontal"]["clone"](), this['_eulerAngleOffset']=this["euler_offset_horizontal"]["clone"](), this["moveSmooth"]=0x1, this['rotateSmooth']=0x1, this["_positionOffset"]["multiplyScalar"](this["horizontalScale"]*this['baseScale'])):(this["_positionOffset"]=this["pos_offset_vertical"]["clone"](), this["_eulerAngleOffset"]=this['euler_offset_vertical']["clone"](), this["moveSmooth"]=0x1, this["rotateSmooth"]=0x1, this["_positionOffset"]["multiplyScalar"](this["baseScale"])), this["_lookAtPosInit"]&&F["subtract"](this["_positionOffset"], this["_positionOffset"]['clone'](), this['_lookAtPosInit']);
                }, an;
            }(Q))["prototype"], "target", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), aa=k(a8["prototype"], 'lookAt', [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ab=k(a8["prototype"], "moveSmooth", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0.02;
                }
            }), ac=k(a8["prototype"], "rotateSmooth", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0.03;
                }
            }), ad=k(a8["prototype"], "cameraType", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var xL=xq; return X["Follow"];
                }
            }), ae=k(a8['prototype'], "pos_offset_vertical", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), af=k(a8["prototype"], "euler_offset_vertical", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ag=k(a8["prototype"], "pos_offset_horizontal", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ah=k(a8['prototype'], "euler_offset_horizontal", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), ai=k(a8["prototype"], "baseScale", [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), aj=k(a8['prototype'], "horizontalScale", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1;
                }
            }), a7=a8))||a7)), A["_RF"]["pop"]();
        }
    };
});
