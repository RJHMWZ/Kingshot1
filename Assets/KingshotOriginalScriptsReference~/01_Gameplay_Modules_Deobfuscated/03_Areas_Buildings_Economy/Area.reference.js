// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Area.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameData.ts", './AreaType.ts', './CCLog.ts'], function(j) {
    var k, q, v, w, x, z, B, C, D, E, F, G, H, I, J, K, L, M, N; return {
        'setters':[function(O) {
            var cj=b; k=O["applyDecoratedDescriptor"], q=O['initializerDefineProperty'], v=O["inheritsLoose"], w=O['assertThisInitialized'];
        }, function(O) {
            var ck=b; x=O["cclegacy"], z=O["_decorator"], B=O['Node'], C=O["Sprite"], D=O["Label"], E=O["Component"], F=O["Enum"], G=O["BoxCollider"], H=O["EventHandler"], I=O["tween"], J=O['v3'], K=O["easing"];
        }, function(O) {
            var cl=b; L=O["default"];
        }, function(O) {
            var cm=b; M=O["AreaType"];
        }, function(O) {
            var cn=b; N=O["default"];
        }], 'execute':function() {
            var co=b, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at; x["_RF"]["push"]( {
            }, "3b20brkTABNW4UjRDLEUHJa", "Area", void 0x0); var au=z['ccclass'], av=z["property"], aw=(a0=au('AreaDemandData'), a1=av( {
                'type':B, 'tooltip':"需求需要哪个父节点下的资源"
            }), a2=av( {
                'type':C, 'tooltip':"进度Sprite"
            }), a3=av( {
                'type':D, 'tooltip':"需求Label"
            }), a4=av( {
                'type':E["EventHandler"], 'tooltip':"需求进入事件"
            }), a5=av( {
                'type':E["EventHandler"], 'tooltip':"需求离开事件"
            }), a6=av( {
                'type':E["EventHandler"], 'tooltip':'需求进度事件'
            }), a7=av( {
                'type':E['EventHandler'], 'tooltip':"需求完成事件"
            }), a0((aa=k((a9=function() {
                var cp=co; q(this, "demandLinkNode", aa, this), q(this, "demandFillSp", ab, this), q(this, "demandLbl", ac, this), q(this, "demandEnterHandler", ad, this), q(this, "demandExitHandler", ae, this), q(this, 'demandFillHandler', af, this), q(this, "demandDoneHandler", ag, this), this["drop_limit_count"]=0x3e7, this["demandPre"]=0x0, this['demand']=0x0, this["demandMax"]=0x32, this["bDone"]=!0x1, this["dropAreaCount"]=0x0;
            })["prototype"], "demandLinkNode", [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ab=k(a9["prototype"], "demandFillSp", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ac=k(a9["prototype"], "demandLbl", [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), ad=k(a9["prototype"], "demandEnterHandler", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new H();
                }
            }), ae=k(a9["prototype"], "demandExitHandler", [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new H();
                }
            }), af=k(a9["prototype"], "demandFillHandler", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new H();
                }
            }), ag=k(a9["prototype"], "demandDoneHandler", [a7],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new H();
                }
            }), a8=a9))||a8); j("Area", (ah=au("Area"), ai=av( {
                'type':B, 'tooltip':'地贴UI'
            }), aj=av( {
                'type':F(M), 'tooltip':"地贴类型 在Area.ts中自己配置"
            }), ak=av( {
                'type':G, 'tooltip':"地贴碰撞体"
            }), al=av( {
                'type':[aw], 'tooltip':'地贴配置数组\x20配置需求数量'
            }), am=av( {
                'type':[B], 'tooltip':"地贴交互节点数组 要带Collider的目标节点才行"
            }), ah((ap=k((ao=function(ax) {
                var cr=co; function ay() {
                    var cq=b; for(var aA, aB=arguments["length"], aC=new Array(aB), aD=0x0; aD<aB; aD++)aC[aD]=arguments[aD]; return aA=ax["call"]["apply"](ax, [this]['concat'](aC))||this, q(aA, "areaUi", ap, w(aA)), q(aA, 'areaType', aq, w(aA)), q(aA, "areaCollider", ar, w(aA)), q(aA, "areaDemandArr", as, w(aA)), q(aA, "areaTargetArr", at, w(aA)), aA["_demandDoneCount"]=0x0, aA;
                }v(ay, ax); var az=ay["prototype"]; return az["onLoad"]=function() {
                    this['initData']();
                }, az['onEnable']=function() {
                    var cs=cr; this['areaCollider']['on']("onTriggerEnter", this["onAreaColliderTriggerEnter"], this), this["areaCollider"]['on']("onTriggerStay", this["onAreaColliderTriggerStay"], this), this['areaCollider']['on']("onTriggerExit", this["onAreaColliderTriggerExit"], this);
                }, az['onDisable']=function() {
                    var ct=cr; this["areaCollider"]["off"]("onTriggerEnter", this["onAreaColliderTriggerEnter"], this), this["areaCollider"]["off"]("onTriggerStay", this['onAreaColliderTriggerStay'], this), this["areaCollider"]["off"]("onTriggerExit", this["onAreaColliderTriggerExit"], this);
                }, az["start"]=function() {
                    var cu=cr; this["initView"]();
                }, az["onAreaColliderTriggerEnter"]=function(aA) {
                    var cv=cr, aB=aA["otherCollider"]["node"]; this["isColliderTarget"](aB)&&(N["log"]("onAreaColliderTriggerEnter"), this["areaEnterHandler"]());
                }, az["onAreaColliderTriggerStay"]=function(aA) {
                }, az["onAreaColliderTriggerExit"]=function(aA) {
                    var cw=cr, aB=aA["otherCollider"]["node"]; this['isColliderTarget'](aB)&&(N["log"]('onAreaColliderTriggerExit'), this['areaExitHandler']());
                }, az["initData"]=function() {
                    var cx=cr; for(var aA=L["area_data"]["area_"+(this["areaType"]-0x1)], aB=0x0; aB<aA["length"]; aB++) {
                        var aC=aA[aB]; this["areaDemandArr"][aB]['demand']=0x0, this["areaDemandArr"][aB]["demandPre"]=0x0, this['areaDemandArr'][aB]["demandMax"]=aC["demand"], this["areaDemandArr"][aB]["drop_limit_count"]=aC["drop_limit_count"];
                    }
                }, az['initView']=function() {
                    var cy=cr; for(var aA=0x0; aA<this["areaDemandArr"]["length"]; aA++) {
                        var aB=this["areaDemandArr"][aA]; aB['demandLbl']["string"]=''+aB['demandMax'];
                    }
                }, az['isColliderTarget']=function(aA) {
                    var cz=cr; for(var aB=!0x1, aC=0x0; aC<this['areaTargetArr']["length"]; aC++)if(aA['uuid']==this["areaTargetArr"][aC]["uuid"]) {
                        aB=!0x0; break;
                    }return aB;
                }, az['areaEnterHandler']=function() {
                    var cA=cr; for(var aA=0x0; aA<this["areaDemandArr"]["length"]; aA++) {
                        var aB=this["areaDemandArr"][aA]; aB['demandEnterHandler']["emit"]([aB["demandEnterHandler"]["customEventData"], this["areaDemandArr"], this['node']]);
                    }var aC=this["areaUi"]['getChildByName']('area_outside'); I(aC)['to'](0.35,  {
                        'scale':J(0.012, 0.012, 0x1)
                    },  {
                        'easing':K['backOut']
                    })['start']();
                }, az["areaExitHandler"]=function() {
                    var cB=cr; for(var aA=0x0; aA<this["areaDemandArr"]["length"]; aA++) {
                        var aB=this["areaDemandArr"][aA]; aB['demandExitHandler']["emit"]([aB["demandExitHandler"]["customEventData"]]);
                    }var aC=this["areaUi"]["getChildByName"]("area_outside"); I(aC)['to'](0.1,  {
                        'scale':J(0.01, 0.01, 0x1)
                    })["start"]();
                }, az["areaDemandFillHandler"]=function(aA) {
                    var cC=cr, aB=0x0, aC=0x0; aA['demand']++, aA["demand"]>=aA["demandMax"]&&(aA["demand"]=aA["demandMax"]), aA["demandLbl"]["string"]=''+(aA["demandMax"]-aA["demand"]); for(var aD=0x0; aD<this['areaDemandArr']['length']; aD++)aC+=this["areaDemandArr"][aD]["demandMax"], aB+=this["areaDemandArr"][aD]['demand']; aA["demand"]>=aA["demandMax"]&&aA["demandDoneHandler"]["emit"](null), aA['demandFillSp']["fillRange"]=aB/aC;
                }, az["areaDemandDone"]=function() {
                    var cD=cr; if(this["_demandDoneCount"]++, N["log"]('地贴:'+this["areaType"]+" 单一需求达成"), this["_demandDoneCount"]==this["areaDemandArr"]["length"])switch(N["log"]('地贴:'+this["areaType"]+'\x20全部需求达成'), this['areaType']) {
                        case M["Area_1"]:case M["Area_2"]:this['node']["active"]=!0x1;
                    }
                }, az["isAreaDone"]=function(aA) {
                    var cE=cr; return!(aA['demandPre']<aA["demandMax"]);
                }, az["isAllAreaDone"]=function() {
                    var cF=cr; for(var aA=0x0, aB=0x0; aB<this["areaDemandArr"]["length"]; aB++) {
                        var aC=this["areaDemandArr"][aB]; aC['demandPre']>=aC["demandMax"]&&aA++;
                    }return aA==this["areaDemandArr"]["length"];
                }, az['resetAreaDropCount']=function() {
                    var cG=cr; for(var aA=0x0; aA<this["areaDemandArr"]["length"]; aA++) {
                        var aB=this["areaDemandArr"][aA]; aB['dropAreaCount']=0x1; var aC=aB["demandLinkNode"]; aC['children']['length']>aB['drop_limit_count']&&(aB['dropAreaCount']=Math["ceil"](aC['children']["length"]/aB["drop_limit_count"]));
                    }
                }, az["getRestByAreaData"]=function(aA) {
                    var cH=cr; return aA["demandMax"]-aA['demandPre'];
                }, ay;
            }(E))["prototype"], 'areaUi', [ai],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), aq=k(ao["prototype"], "areaType", [aj],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var cI=co; return M["Area_1"];
                }
            }), ar=k(ao["prototype"], "areaCollider", [ak],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), as=k(ao["prototype"], "areaDemandArr", [al],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), at=k(ao["prototype"], "areaTargetArr", [am],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return[];
                }
            }), an=ao))||an)), x["_RF"]["pop"]();
        }
    };
});
