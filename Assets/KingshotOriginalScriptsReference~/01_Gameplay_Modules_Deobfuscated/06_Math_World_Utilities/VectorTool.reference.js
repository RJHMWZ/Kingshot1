// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/VectorTool.ts", ['cc'], function(c) {
    var d, e; return {
        'setters':[function(f) {
            var zn=b; d=f["cclegacy"], e=f["Vec3"];
        }], 'execute':function() {
            var zo=b; d["_RF"]['push']( {
            }, "e9b87na0gFERIeksZ3gdqrn", "VectorTool", void 0x0), c('VectorTool', function() {
                var zq=zo; function f() {
                }return f['SmoothDampV3']=function(j, k, q, w, A, B) {
                    var zp=b, C=0x0, D=0x0, E=0x0, G=0x2/(w=Math["max"](0.0001, w)), H=G*B, I=0x1/(0x1+H+0.48*H*H+0.235*H*H*H), J=j['x']-k['x'], K=j['y']-k['y'], L=j['z']-k['z'], N=k, O=A*w, P=O*O, Q=J*J+K*K+L*L; if(Q>P) {
                        var U=Math["sqrt"](Q); J=J/U*P, K=K/U*P, L=L/U*P;
                    }k['x']=j['x']-J, k['y']=j['y']-K, k['z']=j['z']-L; var W=(q['x']+G*J)*B, X=(q['y']+G*K)*B, Y=(q['z']+G*L)*B; q['x']=(q['x']-G*W)*I, q['y']=(q['y']-G*X)*I, q['z']=(q['z']-G*Y)*I, C=k['x']+(J+W)*I, D=k['y']+(K+X)*I, E=k['z']+(L+Y)*I; var Z=N['x']-j['x'], a0=N['y']-j['y'], a1=N['z']-j['z']; return Z*(C-N['x'])+a0*(D-N['y'])+a1*(E-N['z'])>0x0&&(C=N['x'], D=N['y'], E=N['z'], q['x']=(C-N['x'])/B, q['y']=(D-N['y'])/B, q['z']=(E-N['z'])/B), new e(C, D, E);
                }, f["SmoothDamp"]=function(g, h, j, k, l, p) {
                    var zr=zq, q=0x2/(k=Math["max"](0.0001, k)), v=q*p, w=0x1/(0x1+v+0.48*v*v+0.235*v*v*v), A=g-h, B=h, C=l*k, D=(j+q*(A=f["Clamp"](A, -C, C)))*p; j=(j-q*D)*w; var E=(h=g-A)+(A+D)*w; return B-g>0x0==E>B&&(j=((E=B)-B)/p), E;
                }, f["Clamp"]=function(g, h, i) {
                    return g<=h&&(g=h), g>=i&&(g=i), g;
                }, f;
            }()), d["_RF"]["pop"]();
        }
    };
});
