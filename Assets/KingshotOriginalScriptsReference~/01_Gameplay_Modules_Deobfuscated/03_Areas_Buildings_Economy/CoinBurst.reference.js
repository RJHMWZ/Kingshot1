// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CoinBurst.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(d) {
    var f, g, h, j, k, m, q, v, w, x, y; return {
        'setters':[function(z) {
            var hv=b; f=z["inheritsLoose"];
        }, function(z) {
            var hw=b; g=z["cclegacy"], h=z["_decorator"], j=z["math"], k=z["Tween"], m=z['v3'], q=z['UIOpacity'], v=z["Vec3"], w=z["tween"], x=z['easing'], y=z['Component'];
        }], 'execute':function() {
            var hx=b, z; g["_RF"]["push"]( {
            }, '6e8625laMZO8awtCahJeazB', 'CoinBurst', void 0x0); var A=h['ccclass']; h["property"], d('CoinBurst', A("CoinBurst")(z=function(B) {
                var hz=hx; function C() {
                    var hy=b; for(var E, F=arguments['length'], G=new Array(F), H=0x0; H<F; H++)G[H]=arguments[H]; return(E=B['call']['apply'](B, [this]["concat"](G))||this)['_isEnableShow']=!0x0, E;
                }f(C, B); var D=C['prototype']; return D['start']=function() {
                }, D["update"]=function(E) {
                }, D["showCoinBurst"]=function() {
                    var hA=hz, E=this; if(this["_isEnableShow"]) {
                        this["_isEnableShow"]=!0x1; for(var F=this['node']['getChildByName']("ball_out"), G=this["node"]['getChildByName']('ball_inside'), H=[0.05, 0.2], I=[-0x46, 0x46], J=[-0x1e, 0x1e], K=[0.3, 0.5], L=[0.5, 0.7], M=0x0; M<F['children']["length"]; M++) {
                            var N=j["randomRange"](K[0x0], K[0x1]), O=F['children'][M]; k["stopAllByTarget"](O), O["position"]=m(j['randomRange'](I[0x0], I[0x1]), j["randomRange"](I[0x0], I[0x1]), 0x0), O["getComponent"](q)["opacity"]=0x0, O['setScale'](v["ZERO"]); var P=O["getComponent"](q); w(O)['to'](N,  {
                                'position':v["ZERO"]
                            },  {
                                'easing':x["backIn"]
                            })["start"](); var Q=j["randomRange"](H[0x0], H[0x1]); w(O)["sequence"](w(O)['to'](N/0x2,  {
                                'scale':m(Q, Q, 0x1)
                            }), w(O)["delay"](0.8*N), w(O)['to'](0.2*N,  {
                                'scale':v["ZERO"]
                            }))["start"](), w(P)["sequence"](w(P)['to'](N/0x5,  {
                                'opacity':0xff
                            }), w(P)["delay"](0.8*N)['to'](0.2*N,  {
                                'opacity':0x0
                            }))['start']();
                        }this["scheduleOnce"](function() {
                            var hB=hA; for(var S=0x0; S<G["children"]["length"]; S++) {
                                var T=j['randomRange'](L[0x0], L[0x1]), U=G["children"][S]; k["stopAllByTarget"](U), U['position']=v["ZERO"], U["getComponent"](q)["opacity"]=0x0, U["setScale"](v["ZERO"]); var V=U["getComponent"](q); w(U)['to'](T,  {
                                    'position':m(j['randomRange'](J[0x0], J[0x1]), j["randomRange"](J[0x0], J[0x1]), 0x0)
                                },  {
                                    'easing':x["quartInOut"]
                                })['start'](); var W=j["randomRange"](H[0x0], H[0x1]); w(U)["sequence"](w(U)['to'](T/0x2,  {
                                    'scale':m(W, W, 0x1)
                                }), w(U)["delay"](0.8*T), w(U)['to'](0.2*T,  {
                                    'scale':v['ZERO']
                                }))["start"](), w(V)["sequence"](w(V)['to'](T/0x5,  {
                                    'opacity':0xff
                                }), w(V)["delay"](0.8*T)['to'](0.2*T,  {
                                    'opacity':0x0
                                })['call'](function() {
                                    var hC=hB; E["_isEnableShow"]=!0x0;
                                }))["start"]();
                            }
                        }, K[0x0]/0x2);
                    }
                }, C;
            }(y))||z), g["_RF"]["pop"]();
        }
    };
});
