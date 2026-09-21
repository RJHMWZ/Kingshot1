// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']('chunks:///_virtual/LocationUtil.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Quaternion.ts'], function(d) {
    var f, g, h, j, k, m, p, q, u; return {
        'setters':[function(v) {
            f=v['inheritsLoose'];
        }, function(v) {
            var rd=b; g=v['cclegacy'], h=v["Vec3"], j=v['v3'], k=v["Mat4"], m=v["Quat"], p=v["easing"], q=v["tween"];
        }, function(v) {
            var re=b; u=v["default"];
        }], 'execute':function() {
            var rf=b; g["_RF"]["push"]( {
            }, 'd96c2e/vetIioF6KXEd1k5l', "LocationUtil", void 0x0); var v=d("LocationUtil", function() {
                var rg=rf; function w() {
                }return w["addChildToOtherWorld"]=function(x, y) {
                    var rh=rg, z=x["getWorldPosition"](); x["setParent"](y), x["setWorldPosition"](z);
                }, w;
            }()); d("LocationUtil3D", function(w) {
                var ri=rf; function x() {
                    return w['apply'](this, arguments)||this;
                }return f(x, w), x["getDistanceHorizontal"]=function(y, z) {
                    var rj=ri; return h["distance"](j(y["worldPosition"]['x'], 0x0, y["worldPosition"]['z']), j(z["worldPosition"]['x'], 0x0, z["worldPosition"]['z']));
                }, x['getWorldRotationByParent']=function(y, z) {
                    var rk=ri; if(null!=z) {
                        var A=z["getWorldMatrix"]()["invert"](), B=new k(); return k["transform"](B, A, y), B["getRotation"](new m());
                    }console["error"]("AddChildToOtherWorld err");
                }, x['getPosInOtherParent']=function(y, z) {
                    var rl=ri; if(null!=z) {
                        var A=z["getWorldMatrix"]()['invert'](), B=new k(); return k["transform"](B, A, y['worldPosition']['clone']()), B["getTranslation"](new h());
                    }console['error']("AddChildToOtherWorld err");
                }, x["getWorldScaleByParent"]=function(y, z) {
                    var rm=ri; if(null!=z) {
                        var A=z["getWorldMatrix"]()['invert'](), B=new k(); return k["transform"](B, A, y), B["getScale"](new h());
                    }console["error"]("AddChildToOtherWorld err");
                }, x["lookAtByHorizontal"]=function(y, z) {
                    var rn=ri; y["lookAt"](j(z["worldPosition"]['x'], y["worldPosition"]['y'], z["worldPosition"]['z']));
                }, x["sectorCheck"]=function(y, z, A, B) {
                    var ro=ri, C=new h(); h['subtract'](C, z["worldPosition"], y["worldPosition"]); var D=0x168/(0x2*Math['PI']); return Math["acos"](h['dot'](C["normalize"](), y["forward"]))*D<0.5*A&&C["length"]()<B;
                }, x["rectangleCheck"]=function(y, z, A, B) {
                    var rp=ri, C=new h(); if(h['subtract'](C, z["worldPosition"], y["worldPosition"]), h["dot"](y["forward"], C)<0x0)return!0x1; var D=new h(); if(h["project"](D, C, y["forward"])["length"](), D>B)return!0x1; var E=new h(), F=h['project'](E, C, y['right'])["length"](); return Math["abs"](F)<=0.5*A;
                }, x["getTargetWpsPosByRowCol"]=function(y, z, A, B, C, D, E) {
                    var rq=ri, F=y["getWorldPosition"](), G=void 0x0===E?y["children"]["length"]:E; return j(F['x']+B*(G%A), F['y']+D*Math["floor"](G/(A*z)), F['z']+C*(Math["floor"](G/A)%z));
                }, x["getTargetLocalPosByRowCol"]=function(y, z, A, B, C, D, E) {
                    var rr=ri, F=y["getPosition"](), G=void 0x0===E?y["children"]["length"]:E; return j(F['x']+B*(G%A), F['y']+D*Math['floor'](G/(A*z)), F['z']+C*(Math['floor'](G/A)%z));
                }, x["getMovingBezEndFunc"]=function(y, z, A, B, C, D, E) {
                    var F=this; return function() {
                        return F['getTargetWpsPosByRowCol'](y, z, A, B, C, D, E);
                    };
                }, x["rotateToTarget"]=function(y, z, A, B, C, D) {
                    var rs=ri; if(void 0x0===C&&(C=p['linear']), void 0x0===D&&(D=null), A&&B) {
                        var E=new h(A['x']-B['x'], A['y']-B['y'], A['z']-B['z']); E["normalize"](); var F=u["LookRotation"](E, h['UP']), G=z['getRotation'](); q(z)['to'](y,  {
                        },  {
                            'onUpdate':function(H, I) {
                                var rt=rs; I=C(I); var J=new m(); m["slerp"](J, G, F, I), H['setRotation'](J);
                            }
                        })["call"](function() {
                            D&&D();
                        })["start"]();
                    }else console["error"]('initWps\x20or\x20targetWps\x20is\x20null!');
                }, x;
            }(v)), d('LocationUtil2D', function(w) {
                function x() {
                    var ru=b; return w["apply"](this, arguments)||this;
                }return f(x, w), x;
            }(v)), g["_RF"]["pop"]();
        }
    };
});
