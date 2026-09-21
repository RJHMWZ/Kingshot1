// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/JoyStick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JoyStickUI.ts', "./JoyStickConst.ts", "./CoreEventManager.ts"], function(d) {
    var f, g, j, k, l, m, p, q, v, w; return {
        'setters':[function(x) {
            var q1=b; f=x["inheritsLoose"];
        }, function(x) {
            var q2=b; g=x['cclegacy'], j=x['_decorator'], k=x["UITransform"], l=x["Input"], m=x["input"], p=x['Component'];
        }, function(x) {
            var q3=b; q=x["JoyStickUI"];
        }, function(x) {
            v=x['JoyStickEvent'];
        }, function(x) {
            var q4=b; w=x["default"];
        }], 'execute':function() {
            var q5=b, x; g['_RF']["push"]( {
            }, "64e34lmbNdN55Sgg7HKkBLm", "JoyStick", void 0x0); var y=j['ccclass']; j["property"], d("JoyStick", y("JoyStick")(x=function(z) {
                var q7=q5; function A() {
                    var q6=b; for(var C, D=arguments['length'], E=new Array(D), F=0x0; F<D; F++)E[F]=arguments[F]; return(C=z["call"]["apply"](z, [this]["concat"](E))||this)["_ctrlRoot"]=null, C['_buttons']=null, C['_key2buttonMap']= {
                    }, C["_isEnable"]=!0x1, C['mJoyStickUI']=void 0x0, C;
                }f(A, z); var B=A["prototype"]; return B["onEnable"]=function() {
                    var q8=q7; w['on'](v["TOUCH_ENABLE"], this["onTouchEnable"], this), this["_ctrlRoot"]=this["node"]['getChildByName']("ctrl")["getComponent"](k); var C=this["node"]["getChildByName"]("checker_movement")["getComponent"](k); C["node"]['on'](l["EventType"]["TOUCH_START"], this["onTouchStart_Movement"], this), C["node"]['on'](l["EventType"]['TOUCH_MOVE'], this["onTouchMove_Movement"], this), C["node"]['on'](l["EventType"]["TOUCH_END"], this['onTouchUp_Movement'], this), C["node"]['on'](l['EventType']["TOUCH_CANCEL"], this["onTouchUp_Movement"], this), this["mJoyStickUI"]=new q(C, this["_ctrlRoot"]), this["mJoyStickUI"]["onHideStickUI"](), m['on'](l["EventType"]["MOUSE_WHEEL"], this["onMouseWheel"], this);
                }, B['onDestroy']=function() {
                    var q9=q7; m["off"](l["EventType"]["MOUSE_WHEEL"], this["onMouseWheel"], this);
                }, B["bindKeyToButton"]=function(C, D) {
                    this['_key2buttonMap'][C]=D;
                }, B["setButtonVisible"]=function(C, D) {
                    var qa=q7, E, F=null==(E=this["_buttons"])?void 0x0:E['getChildByName'](C); F&&(F["active"]=D);
                }, B["getButtonByName"]=function(C) {
                    var qb=q7; return this["_buttons"]['getChildByName'](C);
                }, B['onTouchStart_Movement']=function(C) {
                    var qc=q7; if(!this["_isEnable"]) {
                        var D=C["touch"]; this["mJoyStickUI"]['onShowStickUI'](), this["mJoyStickUI"]["onUpdateStickUI"](D["getUILocationX"](), D["getUILocationY"]()), w["dispatchEvent"](v["MOVEMENT_START"]);
                    }
                }, B["onTouchMove_Movement"]=function(C) {
                    var qd=q7; if(!this["_isEnable"]) {
                        var D=C["touch"]; if(this['mJoyStickUI']["onUpdatePointer"](D["getUILocationX"](), D["getUILocationY"]()), !(this["mJoyStickUI"]["onGetDistance"](D["getUILocationX"](), D["getUILocationY"]())<=0x0)) {
                            var E=this['mJoyStickUI']["getAngle"](); w['dispatchEvent'](v["MOVEMENT"], E);
                        }
                    }
                }, B['onTouchUp_Movement']=function(C) {
                    var qe=q7, D=C["touch"]; this["mJoyStickUI"]["onHideStickUI"](), this['mJoyStickUI']['onUpdateStickUI'](D["getUILocationX"](), D["getUILocationY"]()), w["dispatchEvent"](v['MOVEMENT_STOP']);
                }, B['onMouseWheel']=function(C) {
                    var qf=q7, D=0.1*C["getScrollY"](); w["dispatchEvent"](v['CAMERA_ZOOM'], D);
                }, B["onButtonSlot"]=function(C) {
                    var qg=q7, D=C['target']["name"]; w['dispatchEvent'](v['BUTTON'], D);
                }, B['onTouchEnable']=function(C) {
                    var qh=q7; C?this["disableJoyStick"]():this["enableJoyStick"]();
                }, B['disableJoyStick']=function() {
                    var qi=q7; this['_isEnable']=!0x0, this['_ctrlRoot']["node"]["active"]=!0x1, w["dispatchEvent"](v['MOVEMENT_STOP']);
                }, B["enableJoyStick"]=function() {
                    var qj=q7; this["_isEnable"]=!0x1;
                }, A;
            }(p))||x), g["_RF"]['pop']();
        }
    };
});
