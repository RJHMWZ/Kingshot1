// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/BezierAction.ts', ['cc', "./BezierUtil.ts"], function(d) {
    var f, g, h, j, k, l, m; return {
        'setters':[function(p) {
            var eN=b; f=p["cclegacy"], g=p["_decorator"], h=p["Vec3"], j=p["easing"], k=p['v3'], l=p['tween'];
        }, function(p) {
            var eO=b; m=p["BezierUtil"];
        }], 'execute':function() {
            var eP=b; f["_RF"]["push"]( {
            }, 'd69a71rQ4NN/ZYGJbtqy940', "BezierAction", void 0x0), (g["ccclass"], g['property'], d("BezierAction", function() {
                var eQ=eP; function p() {
                }return p["bezierWpsMove"]=function(q, w, x, A, B, C) {
                    var eS=eQ, D; function E() {
                        var eR=b; D="function"==typeof A?A():A;
                    }void 0x0===B&&(B=h["ZERO"]), void 0x0===C&&(C=j["linear"]), E(); var F=x["clone"]()['lerp'](D, 0.5), G=x['y']>D['y']?x['y']:D['y']; return F=k(F['x']+=B['x'], G+=B['y'], F['z']+=B['z']), l(q)['to'](w,  {
                    },  {
                        'onUpdate':function(H, I) {
                            var eT=eS; E(), I=C(I); var J=m["bezierMove"](I, x, D, F); q["setWorldPosition"](J);
                        }
                    });
                }, p["bezierLocalMove"]=function(q, w, x, A, B, C) {
                    var eV=eQ, D; function E() {
                        var eU=b; D="function"==typeof A?A():A;
                    }void 0x0===B&&(B=h['ZERO']), void 0x0===C&&(C=j['linear']), E(); var F=x['clone']()["lerp"](D, 0.5), G=x['y']>D['y']?x['y']:D['y']; return F=k(F['x']+=B['x'], G+=B['y'], F['z']+=B['z']), l(q)['to'](w,  {
                    },  {
                        'onUpdate':function(H, I) {
                            var eW=eV; E(), I=C(I); var J=m["bezierMove"](I, x, D, F); q['setPosition'](J);
                        }
                    });
                }, p;
            }())), f["_RF"]["pop"]();
        }
    };
});
