// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/GoodsStack.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(j) {
    var k, m, q, v, w, x, z, A, B, C, D, E, F, H, I, J, K, L, M; return {
        'setters':[function(N) {
            var mx=b; k=N["applyDecoratedDescriptor"], m=N["createClass"], q=N['inheritsLoose'], v=N["initializerDefineProperty"], w=N["assertThisInitialized"];
        }, function(N) {
            var my=b; x=N["cclegacy"], z=N['_decorator'], A=N['Enum'], B=N["Prefab"], C=N['Node'], D=N['v3'], E=N['Tween'], F=N['tween'], H=N["easing"], I=N["MeshRenderer"], J=N['v4'], K=N["instantiate"], L=N["Component"], M=N["NodePool"];
        }], 'execute':function() {
            var mz=b, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF; x["_RF"]["push"]( {
            }, "1034c0HJadJe5tahx4TsWVA", "GoodsStack", void 0x0); var aG=z["ccclass"], aH=z['property'], aI=z["executeInEditMode"], aJ=j("GOODS_ASIX", function(aM) {
                var mA=mz; return aM[aM["HORIZONTAL"]=0x0]="HORIZONTAL", aM[aM["VERTICAL"]=0x1]='VERTICAL', aM;
            }( {
            })), aK=j("GOODS_DIRECTION", function(aM) {
                var mB=mz; return aM[aM["HORIZONTAL"]=0x0]="HORIZONTAL", aM[aM["VERTICAL"]=0x1]="VERTICAL", aM;
            }( {
            })); A(aJ), A(aK); var aL=j("GoodsList", (a0=aG("GoodsList"), a1=aH( {
                'type':aJ, 'tooltip':'排列方式'
            }), a2=aH( {
                'type':aK, 'tooltip':"排列方向"
            }), a3=aH( {
                'tooltip':'堆放起点'
            }), a4=aH( {
                'tooltip':"限制排版"
            }), a5=aH( {
                'tooltip':"物品大小"
            }), a6=aH( {
                'tooltip':"物品偏移"
            }), a7=aH( {
                'tooltip':"物品最大数量"
            }), a8=aH( {
                'tooltip':"是否播放添加动画"
            }), a9=aH( {
                'tooltip':"是否超过个数透明"
            }), aa=aH( {
                'tooltip':"非透明数量", 'visible':function() {
                    var mC=mz; return this["isOverMaxAlpha"];
                }
            }), ab=aH( {
                'tooltip':'非透明颜色', 'slide':!0x0, 'range':[0x0, 0x1], 'step':0.1, 'visible':function() {
                    return this['isOverMaxAlpha'];
                }
            }), a0((ae=k((ad=function() {
                var mE=mz; function aM() {
                    var mD=b; v(this, "nAsix", ae, this), v(this, "nDirection", af, this), v(this, 'startPos', ag, this), v(this, "MAX_SIZE", ah, this), v(this, "sizeGoods", ai, this), v(this, 'offsetGoods', aj, this), v(this, "nGoodsMax", ak, this), v(this, 'isEffect', al, this), v(this, "_isOverMaxAlpha", am, this), v(this, "nOverMaxAlpha", an, this), v(this, "colorOverMaxAlpha", ap, this), this["_nodePool"]=new M(), this['_lstGoods']=[], this["_goodsPrefab"]=void 0x0, this["_nGoods"]=0x0, this['_nodeGoods']=null;
                }var aN=aM['prototype']; return aN["onLoad"]=function() {
                }, aN['onEnable']=function() {
                }, aN["isNullGoods"]=function() {
                    var mF=mE; return this["_nGoods"]<=0x0;
                }, aN["appendGoods"]=function() {
                    var mG=mE, aO=this["onCreateGoods"](); if(this['nodeGoods']) {
                        this["_lstGoods"]["push"](aO), this["_nGoods"]++; var aP=this["getGoodsItemPos"](this["_nGoods"]); aO["setPosition"](aP), aO['setParent'](this["nodeGoods"]), this["onUpdateAlpha"](aO), this["isEffect"]?(aO["setScale"](D(0x0, 0x0, 0x0)), E["stopAllByTarget"](aO), F(aO)['to'](0.2,  {
                            'scale':this["sizeGoods"]
                        },  {
                            'easing':H["circOut"]
                        })['start']()):aO["setScale"](this["sizeGoods"]);
                    }
                }, aN["onUpdateAlpha"]=function(aO) {
                    var mH=mE; if(this["isOverMaxAlpha"]) {
                        var aP=aO["children"][0x0]['getComponent'](I)["materials"][0x0], aQ=this['nGoods']>this['nOverMaxAlpha']?this["colorOverMaxAlpha"]:0x1; aP['setProperty']('mainColor', J(0x1, 0x1, 0x1, aQ), 0x0);
                    }
                }, aN["popGoods"]=function() {
                    var mI=mE; if(this['_nGoods']<=0x0)return this["onCreateGoods"](); var aO=this["_lstGoods"]["pop"](); return this['_nGoods']--, aO;
                }, aN["onCreateGoods"]=function(aO) {
                    var mJ=mE; void 0x0===aO&&(aO=!0x1); var aP=this['_nodePool']['get'](); if(aP||(aP=K(this["goodsPrefab"])), !aO)return aP; var aQ=this["getGoodsItemPos"](this["_nGoods"]+0x1); return aP["active"]=!0x1, aP["setParent"](this["nodeGoods"]), aP["setPosition"](aQ), aP;
                }, aN["onRecycleGoods"]=function(aO) {
                    var mK=mE; aO&&this['_nodePool']["put"](aO);
                }, aN['onClearGoods']=function() {
                    var mL=mE; for(var aO=0x0; aO<this["nodeGoods"]["children"]["length"]; aO++) {
                        var aP=this["nodeGoods"]["children"][aO]; this["_nodePool"]["put"](aP);
                    }this["nodeGoods"]["removeAllChildren"](), this["_lstGoods"]["length"]=0x0, this["_nGoods"]=0x0;
                }, aN["getGoodsItemPos"]=function(aO) {
                    var mM=mE, aP=this["MAX_SIZE"]['x']*this["MAX_SIZE"]['z'], aQ=aO-0x1, aR=0x0, aS=0x0, aT=0x0; return this['nAsix']==aJ['HORIZONTAL']?aR=aQ-(aT=Math["floor"](aQ/aP))*aP-(aS=Math["floor"]((aQ-aT*aP)/this['MAX_SIZE']['x']))*this["MAX_SIZE"]['x']:(aT=Math["floor"](aQ%this["MAX_SIZE"]['y']), aR=Math['floor'](aQ/this["MAX_SIZE"]['y'])), this["sortGoods"](aT, aS, aR);
                }, aN["sortGoods"]=function(aO, aP, aQ) {
                    var mN=mE; void 0x0===aO&&(aO=-0x1), void 0x0===aP&&(aP=-0x1), void 0x0===aQ&&(aQ=-0x1); var aR=D(0x0, 0x0, 0x0); return this["nDirection"]==aK["HORIZONTAL"]?(aR['x']=this["startPos"]['x']+aP*this["offsetGoods"]['x'], aR['y']=this["startPos"]['y']+aO*this['offsetGoods']['y'], aR['z']=this['startPos']['z']+aQ*this["offsetGoods"]['z']):(aR['x']=this["startPos"]['x']+aQ*this["offsetGoods"]['x'], aR['y']=this["startPos"]['y']+aO*this["offsetGoods"]['y'], aR['z']=this["startPos"]['z']+aP*this['offsetGoods']['z']), aR;
                }, m(aM, [ {
                    'key':"isOverMaxAlpha", 'get':function() {
                        var mO=mE; return this["_isOverMaxAlpha"];
                    }, 'set':function(aO) {
                        var mP=mE; this["_isOverMaxAlpha"]=aO;
                    }
                },  {
                    'key':"nodeGoods", 'get':function() {
                        var mQ=mE; return this["_nodeGoods"];
                    }, 'set':function(aO) {
                        this['_nodeGoods']=aO;
                    }
                },  {
                    'key':"goodsPrefab", 'get':function() {
                        var mR=mE; return this["_goodsPrefab"];
                    }, 'set':function(aO) {
                        var mS=mE; this["_goodsPrefab"]=aO;
                    }
                },  {
                    'key':'nGoods', 'get':function() {
                        var mT=mE; return this["_nGoods"];
                    }
                }]), aM;
            }())["prototype"], 'nAsix', [a1],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var mU=mz; return aJ["HORIZONTAL"];
                }
            }), af=k(ad['prototype'], "nDirection", [a2],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var mV=mz; return aK["HORIZONTAL"];
                }
            }), ag=k(ad["prototype"], "startPos", [a3],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return D(0x0, 0x0, 0x0);
                }
            }), ah=k(ad["prototype"], "MAX_SIZE", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return D(0x1, 0x1, 0x1);
                }
            }), ai=k(ad['prototype'], 'sizeGoods', [a5],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return D(0x1, 0x1, 0x1);
                }
            }), aj=k(ad["prototype"], "offsetGoods", [a6],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return D(0x1, 0x1, 0x1);
                }
            }), ak=k(ad["prototype"], 'nGoodsMax', [a7],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x1e;
                }
            }), al=k(ad["prototype"], "isEffect", [a8],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x0;
                }
            }), am=k(ad["prototype"], "_isOverMaxAlpha", [a9],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return!0x1;
                }
            }), k(ad["prototype"], "isOverMaxAlpha", [aH], Object['getOwnPropertyDescriptor'](ad['prototype'], "isOverMaxAlpha"), ad["prototype"]), an=k(ad["prototype"], "nOverMaxAlpha", [aa],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x5;
                }
            }), ap=k(ad["prototype"], 'colorOverMaxAlpha', [ab],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), ac=ad))||ac)); j('GoodsStack', (aq=aG('GoodsStack'), ar=aI(!0x0), as=aH( {
                'tooltip':"物品标签"
            }), at=aH(B), au=aH( {
                'type':aL, 'tooltip':'物品列表', 'group':"物品列表"
            }), av=aH( {
                'tooltip':"物品最大数量"
            }), aw=aH( {
                'type':C, 'tooltip':"物品父容器"
            }), ax=aH( {
                'tooltip':'刷新', 'group':"物品列表"
            }), ay=aH( {
                'tooltip':'清除', 'group':"物品列表"
            }), aq(az=ar((aB=k((aA=function(aM) {
                var mX=mz; function aN() {
                    var mW=b; for(var aP, aQ=arguments["length"], aR=new Array(aQ), aS=0x0; aS<aQ; aS++)aR[aS]=arguments[aS]; return aP=aM["call"]["apply"](aM, [this]["concat"](aR))||this, v(aP, 'goodsTag', aB, w(aP)), v(aP, 'goodsPrefab', aC, w(aP)), v(aP, "goodsList", aD, w(aP)), v(aP, 'nGoods', aE, w(aP)), v(aP, "nodeGoods", aF, w(aP)), aP['_isUpdate']=!0x1, aP["_isClear"]=!0x1, aP;
                }q(aN, aM); var aO=aN['prototype']; return aO["onEnable"]=function() {
                    var mY=mX; this['goodsList']['nodeGoods']=this["nodeGoods"]||this["node"], this["goodsList"]['goodsPrefab']=this["goodsPrefab"];
                }, aO["onClearGoodsList"]=function() {
                    var mZ=mX; this["goodsList"]["onClearGoods"]();
                }, aO['onCreateGoodsList']=function() {
                    var n0=mX; for(var aP=0x0; aP<this["nGoods"]; aP++)this["goodsList"]["appendGoods"]();
                }, aO["onCreateGoods"]=function() {
                    var n1=mX; return this["goodsList"]['onCreateGoods'](!0x0);
                }, aO["isNullGoods"]=function() {
                    var n2=mX; return this['goodsList']["isNullGoods"]();
                }, aO["appendGoods"]=function() {
                    this['goodsList']['appendGoods']();
                }, aO["popGoods"]=function() {
                    var n3=mX; return this["goodsList"]['popGoods']();
                }, aO["onRecycleGoods"]=function(aP) {
                    var n4=mX; this['goodsList']["onRecycleGoods"](aP);
                }, m(aN, [ {
                    'key':"isUpdate", 'get':function() {
                        var n5=mX; return this["_isUpdate"];
                    }, 'set':function(aP) {
                        var n6=mX; this["_isUpdate"]=aP, this["_isUpdate"]&&(this["_isUpdate"]&&(this["onClearGoodsList"](), this["onCreateGoodsList"]()), this["isUpdate"]=!0x1);
                    }
                },  {
                    'key':"isClear", 'get':function() {
                        var n7=mX; return this["_isClear"];
                    }, 'set':function(aP) {
                        var n8=mX; this["_isClear"]=aP, this["_isClear"]&&(this["_isClear"]&&this['onClearGoodsList'](), this['_isClear']=!0x1);
                    }
                }]), aN;
            }(L))['prototype'], "goodsTag", [as],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var n9=mz; return "default";
                }
            }), aC=k(aA['prototype'], "goodsPrefab", [at],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), aD=k(aA["prototype"], 'goodsList', [au],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return new aL();
                }
            }), aE=k(aA["prototype"], 'nGoods', [av],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), aF=k(aA["prototype"], "nodeGoods", [aw],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), k(aA["prototype"], "isUpdate", [ax], Object["getOwnPropertyDescriptor"](aA['prototype'], "isUpdate"), aA["prototype"]), k(aA["prototype"], "isClear", [ay], Object["getOwnPropertyDescriptor"](aA['prototype'], 'isClear'), aA["prototype"]), az=aA))||az)||az)), x["_RF"]["pop"]();
        }
    };
});
