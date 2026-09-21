// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/GuideArrow.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GuideArrowConst.ts", "./PlayableChannel.ts", "./playable_controller.ts"], function(j) {
    var k, m, q, x, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T; return {
        'setters':[function(U) {
            var nH=b; k=U["applyDecoratedDescriptor"], m=U["inheritsLoose"], q=U["initializerDefineProperty"], x=U["assertThisInitialized"], B=U["createClass"];
        }, function(U) {
            var nI=b; C=U["cclegacy"], D=U["_decorator"], E=U["Enum"], F=U["MeshRenderer"], G=U['Sprite'], H=U["Material"], I=U["SpriteFrame"], J=U["isValid"], K=U["Tween"], L=U["Vec3"], M=U['v3'], N=U["UIOpacity"], O=U["tween"], P=U["easing"], Q=U["Component"];
        }, function(U) {
            var nJ=b; R=U["GuideArrowColor"];
        }, function(U) {
            var nK=b; S=U["PlayableChannel"];
        }, function(U) {
            T=U['default'];
        }], 'execute':function() {
            var nL=b, U, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa; C["_RF"]['push']( {
            }, 'e36f5Uxhi9ET4P0CHuNMu2W', 'GuideArrow', void 0x0); var ab=D['ccclass'], ac=D["property"]; j("GuideArrow", (U=ab("GuideArrow"), X=ac( {
                'type':E(R), 'tooltip':"引导箭头 颜色"
            }), Y=ac( {
                'type':F, 'tooltip':"引导箭头 网格"
            }), Z=ac( {
                'type':G, 'tooltip':'引导箭头\x20网格'
            }), a0=ac( {
                'type':[H], 'tooltip':"垂直箭头材质数组"
            }), a1=ac( {
                'type':[I], 'tooltip':"水平箭头纹理数组"
            }), a2=ac( {
                'displayName':"两种箭头是否同时出现"
            }), U((a5=k((a4=function(ad) {
                var nN=nL; function ae() {
                    var nM=b; for(var ag, ah=arguments["length"], ai=new Array(ah), aj=0x0; aj<ah; aj++)ai[aj]=arguments[aj]; return ag=ad["call"]["apply"](ad, [this]["concat"](ai))||this, q(ag, "guideArrowColor", a5, x(ag)), q(ag, 'guideArrowMeshRender', a6, x(ag)), q(ag, "guideArrowSpr", a7, x(ag)), q(ag, "guideArrowMats", a8, x(ag)), q(ag, "guideArrowSprs", a9, x(ag)), q(ag, "bTwoArrows", aa, x(ag)), ag["_target"]=null, ag['_starter']=null, ag["_arrowVert"]=null, ag["_arrowHorizon"]=null, ag["_followNode"]=null, ag['__horizonArrorHideDis']=0x0, ag["_horizonArrorRadius"]=0.5, ag["_vertArrowHeight"]=0x0, ag['_isShowVerAni']=!0x1, ag;
                }m(ae, ad); var af=ae["prototype"]; return af["onLoad"]=function() {
                    var nO=nN; this["_arrowVert"]=this["node"]["getChildByName"]("arrow_vert"), this['_arrowHorizon']=this["node"]["getChildByName"]("arrow_horizon");
                }, af["start"]=function() {
                    var nP=nN; this["initGuideArrowColor"]();
                }, af["update"]=function(ag) {
                    var nQ=nN; this["checkArrow"]();
                }, af["initGuideArrowColor"]=function() {
                    var nR=nN; switch(T['isChannel'](S["Google"])&&(this["guideArrowColor"]=R["Color_Yellow"]), this["guideArrowColor"]) {
                        case R["Color_Green"]:this["guideArrowMeshRender"]['material']=this['guideArrowMats'][0x0], this["guideArrowSpr"]["spriteFrame"]=this["guideArrowSprs"][0x0]; break; case R["Color_Yellow"]:this["guideArrowMeshRender"]["material"]=this['guideArrowMats'][0x1], this["guideArrowSpr"]["spriteFrame"]=this["guideArrowSprs"][0x1];
                    }
                }, af["guideStart"]=function(ag, ah, ai, aj, ak, al) {
                    var nS=nN; if(void 0x0===ai&&(ai=0x1), void 0x0===aj&&(aj=0x1), void 0x0===ak&&(ak=0x2), void 0x0===al&&(al=null), J(ag)&&J(ah)) {
                        var am=this["target"]&&this["target"]['uuid']!=ah["uuid"]; this['_target']&&!am||(this["_starter"]=ag, this["_target"]=ah, this["__horizonArrorHideDis"]=ai, this["_horizonArrorRadius"]=aj, this["_vertArrowHeight"]=ak, this["_followNode"]=al, am&&this["_updateVertArrow"](!0x1), this["_updateVertArrow"](!0x0), this["_updateHorizonArrow"](!0x0));
                    }
                }, af['guideStop']=function() {
                    var nT=nN; this["_starter"]=null, this["_target"]=null, this["__horizonArrorHideDis"]=0x0, this["_vertArrowHeight"]=0x0, K["stopAllByTarget"](this["_arrowVert"]), this["_arrowVert"]['setRotationFromEuler'](L["ZERO"]), this["_arrowVert"]["setPosition"](L["ZERO"]), this["_updateVertArrow"](!0x1), this["_updateHorizonArrow"](!0x1);
                }, af["guideStopByTarget"]=function(ag) {
                    var nU=nN; J(this['_target'])&&J(ag)&&this["target"]["uuid"]==ag["uuid"]&&this["guideStop"]();
                }, af["checkArrow"]=function() {
                    var nV=nN; this['_target']&&(this["bTwoArrows"]?(this["_updateHorizonArrowView"](), this['_arrowVert']["worldPosition"]=M(this["_target"]["getWorldPosition"]()['x'], this['_target']['getWorldPosition']()['y']+this["_vertArrowHeight"]+this["getTargetTop"](), this['_target']["getWorldPosition"]()['z'])):this['_updateVertArrow'](!0x0));
                }, af["_updateHorizonArrowView"]=function() {
                    var nW=nN; if(this["_arrowHorizon"]['active']) {
                        var ag=L['distance'](M(this["_starter"]["worldPosition"]['x'], 0x0, this['_starter']["worldPosition"]['z']), M(this["_target"]["worldPosition"]['x'], 0x0, this["_target"]["worldPosition"]['z'])), ah=this['_starter']["worldPosition"], ai=this["_target"]["worldPosition"], aj=this["getAngle"](ah, ai), ak=this["getV3MoveTo"](ah, aj, this["_horizonArrorRadius"]); this["_arrowHorizon"]["setRotationFromEuler"](M(0x0, 0x168-aj-0x5a, 0x0)), this['_arrowHorizon']["setWorldPosition"](ak); var al=ag/this["__horizonArrorHideDis"], am=0xff*al>0xff?0xff:0xff*al, an=al>0x1?0x1:al; this['_arrowHorizon']["setScale"](M(an, 0x1, an)), this["_arrowHorizon"]["getChildByName"]("texture")["getComponent"](N)["opacity"]=am;
                    }
                }, af["_updateVertArrow"]=function(ag) {
                    var nX=nN, ah=this; ag?(this["_isShowVerAni"]||(this["_arrowVert"]["active"]=!0x0, this["_arrowVert"]['eulerAngles']=L["ZERO"], this['_arrowVert']['setScale'](L["ZERO"]), O(this["_arrowVert"])['to'](0.5,  {
                        'scale':L["ONE"]
                    },  {
                        'easing':P['backOut']
                    })["call"](function() {
                        var nY=nX; T["isChannel"](S["Google"])||ah['updateVertArrowAni'](!0x0);
                    })["start"]()), this['_arrowVert']["worldPosition"]=M(this["_target"]['getWorldPosition']()['x'], this["_target"]['getWorldPosition']()['y']+this["_vertArrowHeight"]+this["getTargetTop"](), this["_target"]['getWorldPosition']()['z'])):ag||(this["updateVertArrowAni"](!0x1), this["_arrowVert"]["setRotationFromEuler"](L["ZERO"]), this["_arrowVert"]["setPosition"](L["ZERO"]), this['_arrowVert']["setScale"](L["ZERO"]));
                }, af["_updateHorizonArrow"]=function(ag) {
                    var nZ=nN; ag?this["_arrowHorizon"]["active"]||(this['_arrowHorizon']["setScale"](M(0x1, 0x1, 0x0)), this["_arrowHorizon"]['active']=!0x0):this["_arrowHorizon"]["active"]&&(this['_arrowHorizon']["active"]=!0x1);
                }, af["updateVertArrowAni"]=function(ag, ah, ai) {
                    var o0=nN, aj=this; if(void 0x0===ah&&(ah=0.6), void 0x0===ai&&(ai=0.7), K["stopAllByTarget"](this['_arrowVert']), !this['_isShowVerAni']&&ag) {
                        var ak=O()["call"](function() {
                            var o1=o0; aj['_followNode']&&(aj["_arrowVert"]["worldPosition"]=M(aj["_target"]["getWorldPosition"]()['x'], aj['_target']['getWorldPosition']()['y']+aj['_vertArrowHeight']+aj['getTargetTop'](), aj["_target"]["getWorldPosition"]()['z']));
                        }), al=O()['by'](ah,  {
                            'position':M(0x0, -ai, 0x0)
                        }), am=O()['by'](ah,  {
                            'position':M(0x0, ai, 0x0)
                        }), an=O(this["_arrowVert"])['by'](0x2*ah,  {
                            'eulerAngles':M(0x0, -0x168, 0x0)
                        },  {
                            'easing':P['quadOut']
                        }), ao=O(this['_arrowVert'])["sequence"](al, am, ak)["repeatForever"]()["start"](); an["repeatForever"]()["start"](), ao["start"]();
                    }else ag||(K["stopAllByTarget"](this['_arrowVert']), this["_arrowVert"]["active"]=!0x1); this["_isShowVerAni"]=ag;
                }, af["getAngle"]=function(ag, ah) {
                    var o2=nN, ai=ah['x']-ag['x'], aj=ah['z']-ag['z']; return Math["atan2"](aj, ai)*(0xb4/Math['PI'])+0x168;
                }, af["getV3MoveTo"]=function(ag, ah, ai) {
                    void 0x0===ai&&(ai=0xa); var aj=ag['x']+Math['cos'](0x2*Math['PI']/0x168*ah)*ai, ak=ag['z']+Math['sin'](0x2*Math['PI']/0x168*ah)*ai; return M(aj, 0x1, ak);
                }, af["getTargetTop"]=function() {
                    var o3=nN; if(this["_target"]&&this['_followNode']) {
                        var ag=0x0; return this["_followNode"]["children"]["length"]>0x0&&(ag=this["_followNode"]['children'][this["_followNode"]["children"]["length"]-0x1]["getWorldPosition"]()['y']), ag;
                    }return 0x0;
                }, B(ae, [ {
                    'key':"target", 'get':function() {
                        var o4=nN; return this["_target"];
                    }, 'set':function(ag) {
                        this['_target']=ag;
                    }
                },  {
                    'key':'starter', 'get':function() {
                        var o5=nN; return this["_starter"];
                    }, 'set':function(ag) {
                        var o6=nN; this["_starter"]=ag;
                    }
                }]), ae;
            }(Q))["prototype"], 'guideArrowColor', [X],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var o7=nL; return R["Color_Green"];
                }
            }), a6=k(a4["prototype"], "guideArrowMeshRender", [Y],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a7=k(a4["prototype"], "guideArrowSpr", [Z],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), a8=k(a4["prototype"], "guideArrowMats", [a0],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), a9=k(a4["prototype"], 'guideArrowSprs', [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), aa=k(a4["prototype"], "bTwoArrows", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), a3=a4))||a3)), C['_RF']["pop"]();
        }
    };
});
