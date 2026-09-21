// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/GoodsStack2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', "./GameConfig.ts", "./AudioMgr.ts", "./AudioName.ts"], function(j) {
    var k, q, w, x, z, A, B, C, D, E, F, H, I, J, K, L, M, N, O, P, Q; return {
        'setters':[function(R) {
            var na=b; k=R["applyDecoratedDescriptor"], q=R["inheritsLoose"], w=R["initializerDefineProperty"], x=R['assertThisInitialized'], z=R["createClass"];
        }, function(R) {
            var nb=b; A=R["cclegacy"], B=R["_decorator"], C=R["Enum"], D=R["Vec3"], E=R['Vec2'], F=R["CCInteger"], H=R["ParticleSystem"], I=R['v3'], J=R["Tween"], K=R['tween'], L=R['easing'], M=R["Component"], N=R['v2'];
        }, function(R) {
            var nc=b; O=R["default"];
        }, function(R) {
            var nd=b; P=R["default"];
        }, function(R) {
            Q=R['AudioName'];
        }], 'execute':function() {
            var ne=b, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao; A['_RF']["push"]( {
            }, "b6763hg+atEuYc7F39uuQih", "GoodsStack", void 0x0); var ap=B["ccclass"], aq=B["property"], ar=B["executeInEditMode"], as=j("SORT_TYPE", function(at) {
                var nf=ne; return at[at['VER']=0x0]="VER", at[at['HOR']=0x1]="HOR", at;
            }( {
            })); C(as), j("GoodsStack", (Z=ap("GoodsStack"), a0=ar(!0x0), a1=aq( {
                'type':as
            }), a2=aq(String), a3=aq(D), a4=aq(D), a5=aq(D), a6=aq(D), a7=aq(E), a8=aq(F), a9=aq(F), aa=aq(H), ab=aq( {
                'tooltip':'刷新'
            }), ac=aq( {
                'tooltip':'刷新'
            }), Z(ad=a0((af=k((ae=function(at) {
                var nh=ne; function au() {
                    var ng=b; for(var aw, ax=arguments["length"], ay=new Array(ax), az=0x0; az<ax; az++)ay[az]=arguments[az]; return aw=at['call']["apply"](at, [this]["concat"](ay))||this, w(aw, 'nSort', af, x(aw)), w(aw, "itemTypeName", ag, x(aw)), w(aw, "v3Offset", ah, x(aw)), w(aw, "v3Scale", ai, x(aw)), w(aw, 'v3Rotation', aj, x(aw)), w(aw, "v3Start", ak, x(aw)), w(aw, "v2LineMax", al, x(aw)), w(aw, 'nMax', am, x(aw)), w(aw, "nCount", an, x(aw)), w(aw, "effect", ao, x(aw)), aw["_isUpdate"]=!0x1, aw["_isClear"]=!0x1, aw['_lstGoods']=[], aw["_nLineMax"]=0x0, aw["_nCache"]=0x0, aw["_lNextUpDateGoodsTime"]=0x0, aw['_nOffsetUpDateTime']=0xa, aw["_nGoods"]=0x0, aw["_isSound"]=!0x0, aw["isSchedule"]=!0x1, aw;
                }q(au, at); var av=au["prototype"]; return av['updateSoundOn']=function(aw) {
                    var ni=nh; this["_isSound"]=aw;
                }, av["getSound"]=function() {
                    var nj=nh; return this["_isSound"];
                }, av["onLoad"]=function() {
                    this['onCreateGoods']();
                }, av["onEnable"]=function() {
                }, av['onDisable']=function() {
                }, av['init']=function() {
                    var nk=nh; this['_lstGoods']=[], this["_nCache"]=0x0, this["_nLineMax"]=0x0, this["onCreateGoods"]();
                }, av["isMax"]=function() {
                    var nl=nh; return this['_lstGoods']['length']>=this["nMax"];
                }, av["isNull"]=function() {
                    var nm=nh; return this["_lstGoods"]["length"]<=0x0;
                }, av["onGetGoodsVal"]=function() {
                    var nn=nh; return this["_lstGoods"]["length"];
                }, av['onPutGoodsItem']=function(aw) {
                    var no=nh; O["EASY_POOL"]['put'](aw);
                }, av["onGetGoodsItem"]=function(aw) {
                    var np=nh, ax=O['EASY_POOL']["get"](this["itemTypeName"]); return ax["setParent"](aw), ax["active"]=!0x0, ax;
                }, av["onCreateGoodsItem"]=function() {
                    var nq=nh; return this["createGoodsItem"]();
                }, av["onGetNextWordPos"]=function() {
                    var nr=nh; return this["onGetNextWordPosByIdx"](this["_lstGoods"]['length']);
                }, av["onGetNextWordPosByIdx"]=function(aw) {
                    var ns=nh, ax=this["getGoodsItemPos"](aw), ay=this["node"]['getWorldPosition'](), az=I(0x0); return D['add'](az, ay, ax), az;
                }, av["getGoodsItemByTop"]=function() {
                    var nt=nh, aw=this["_lstGoods"]["pop"](); if(this['_lstGoods']["length"]<=0x0) {
                        if(!this['effect'])return aw; this["effect"]["node"]['active']&&(this["effect"]["node"]["active"]=!0x1);
                    }return this['updateEffect'](), aw;
                }, av["updateEffect"]=function() {
                    var nu=nh; if(this["effect"]&&this['effect']["node"]["active"]&&!(this["_lstGoods"]['length']<=0x0)) {
                        var aw=this["effect"]["node"]["children"][0x0]["getComponent"](H), ax=this["_lstGoods"][this['_lstGoods']["length"]-0x1], ay=Math["floor"](ax["getWorldPosition"]()['y']), az=0xa*ay; aw['capacity']=az, aw['shapeModule']["length"]=ay;
                    }
                }, av["createGoodsItem"]=function() {
                    var nv=nh, aw=O["EASY_POOL"]["get"](this["itemTypeName"]); return aw['setParent'](this["node"]), aw;
                }, av['onCreateItems']=function() {
                }, av["onCreateGoods"]=function() {
                    var nw=nh; this["_nLineMax"]=this["v2LineMax"]['x']*this["v2LineMax"]['y']; for(var aw=0x0; aw<this["nCount"]; aw++) {
                        var ax=this['onCreateGoodsItem'](); this["addGoodsItem"](ax);
                    }
                }, av["onClearGoods"]=function() {
                    var nx=nh; this["node"]["removeAllChildren"](), this["_lstGoods"]=[];
                }, av["getGoodsItemPos"]=function(aw) {
                    var ny=nh, ax=Math["floor"]((aw-0x1)/this['_nLineMax']), ay=aw-ax*this['_nLineMax'], az=0x0, aA=0x0; this["nSort"]==as["VER"]?(az=Math["floor"]((ay-0x1)%this["v2LineMax"]['y']), aA=Math["floor"]((ay-0x1)/this["v2LineMax"]['y'])):(aA=Math["floor"]((ay-0x1)%this['v2LineMax']['x']), az=Math["floor"]((ay-0x1)/this['v2LineMax']['x'])); var aB=this["v3Start"]['x']+az*this["v3Offset"]['x'], aC=this['v3Start']['z']+aA*this["v3Offset"]['z'], aD=this["v3Start"]['y']+ax*this['v3Offset']['y']; return I(aB, aD, aC);
                }, av["update"]=function(aw) {
                    var nz=nh; if(!(Date["now"]()<=this["_lNextUpDateGoodsTime"])) {
                        if(this['_lNextUpDateGoodsTime']=Date["now"]()+this["_nOffsetUpDateTime"], this["_nCache"]<=0x0)this['_nCache']=0x0; else {
                            if(this["_nCache"]-=0x1, this['_isSound']&&P["playShotSound"](Q["COIN_DROP"], 0.5, 0x64), !(this["_lstGoods"]["length"]>=this["nMax"])) {
                                var ax=this["onCreateGoodsItem"](); ax["setScale"](I(I(0x0, 0x0, 0x0))), this["addGoodsItem"](ax, !0x0);
                            }
                        }
                    }
                }, av['onAddCacheGoods']=function(aw) {
                    var nA=nh; this["_nCache"]+=aw;
                }, av["addGoodsItem"]=function(aw, ax) {
                    var nB=nh, ay=this; void 0x0===ax&&(ax=!0x1), this["_lstGoods"]["push"](aw); var az=this['getGoodsItemPos'](this["_lstGoods"]['length']); aw['active']=!0x0, aw["setRotationFromEuler"](this["v3Rotation"]), aw["setPosition"](az), ax?(J["stopAllByTarget"](aw), K(aw)['to'](0.2,  {
                        'scale':I(this["v3Scale"])
                    },  {
                        'easing':L["backOut"]
                    })["call"](function() {
                        var nC=nB; aw["setScale"](ay["v3Scale"]), ay['effect']&&(ay['effect']['node']["active"]||(ay["effect"]['node']["active"]=!0x0), ay['updateEffect']());
                    })['start']()):aw["setScale"](I(this["v3Scale"]));
                }, av["onRank"]=function() {
                    var nD=nh, aw=this; if(!this['isSchedule']) {
                        this["isSchedule"]=!0x0, this["scheduleOnce"](function() {
                            aw['isSchedule']=!0x1;
                        }, 0.5); for(var ax=0x0; ax<this["_lstGoods"]["length"]; ax++) {
                            var ay=this["getGoodsItemPos"](ax+0x1); this['_lstGoods'][ax]["setPosition"](ay);
                        }
                    }
                }, z(au, [ {
                    'key':"isUpdate", 'get':function() {
                        return this['_isUpdate'];
                    }, 'set':function(aw) {
                        var nE=nh; this['_isUpdate']=aw, this['_isUpdate']&&(this["_isUpdate"]&&(this["onClearGoods"](), this["onCreateItems"]()), this['isUpdate']=!0x1);
                    }
                },  {
                    'key':'isClear', 'get':function() {
                        var nF=nh; return this["_isClear"];
                    }, 'set':function(aw) {
                        var nG=nh; this["_isClear"]=aw, this["_isClear"]&&(this["_isClear"]&&this["onClearGoods"](), this["_isClear"]=!0x1);
                    }
                }]), au;
            }(M))["prototype"], "nSort", [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return as['VER'];
                }
            }), ag=k(ae["prototype"], "itemTypeName", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return'';
                }
            }), ah=k(ae["prototype"], "v3Offset", [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return I(0x0);
                }
            }), ai=k(ae["prototype"], "v3Scale", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return I(0x1, 0x1, 0x1);
                }
            }), aj=k(ae["prototype"], 'v3Rotation', [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return I(0x0, 0x0, 0x0);
                }
            }), ak=k(ae["prototype"], "v3Start", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return I(0x0);
                }
            }), al=k(ae['prototype'], "v2LineMax", [a7],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return N(0x2, 0xa);
                }
            }), am=k(ae["prototype"], "nMax", [a8],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1e;
                }
            }), an=k(ae['prototype'], "nCount", [a9],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1e;
                }
            }), ao=k(ae["prototype"], 'effect', [aa],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), k(ae["prototype"], "isUpdate", [ab], Object["getOwnPropertyDescriptor"](ae["prototype"], "isUpdate"), ae["prototype"]), k(ae["prototype"], "isClear", [ac], Object["getOwnPropertyDescriptor"](ae['prototype'], "isClear"), ae['prototype']), ad=ae))||ad)||ad)), A['_RF']["pop"]();
        }
    };
});
