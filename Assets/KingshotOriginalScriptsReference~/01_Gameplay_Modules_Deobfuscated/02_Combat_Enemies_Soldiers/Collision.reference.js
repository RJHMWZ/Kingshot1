// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Collision.ts', ['cc'], function(c) {
    var d, f; return {
        'setters':[function(g) {
            var hI=b; d=g["cclegacy"], f=g["Vec3"];
        }], 'execute':function() {
            var hJ=b; d["_RF"]['push']( {
            }, '2506eo28/1BB4Prm7+EAWJo', "Collision", void 0x0); var g=c('ShapeType', function(j) {
                var hK=hJ; return j[j['Box']=0x0]="Box", j[j["Sphere"]=0x1]="Sphere", j[j['Capsule']=0x2]="Capsule", j;
            }( {
            })), h=[]; h[g['Box']]=function(j) {
                return j[0x0]=j[0x0]>0x0?0.5:-0.5, j[0x1]=j[0x1]>0x0?0.5:-0.5, j[0x2]=j[0x2]>0x0?0.5:-0.5, j;
            }, h[g['Sphere']]=function(j) {
                var k=j[0x0], l=j[0x1], m=j[0x2], n=k*k+l*l+m*m; return n=0.5*(n>0x0?0x1/Math['sqrt'](n):0x0), j[0x0]=k*n, j[0x1]=l*n, j[0x2]=m*n, j;
            }, h[g["Capsule"]]=function(j) {
                var k=j[0x0], l=j[0x1], m=j[0x2], n=k*k+l*l+m*m; return n=0.5*(n>0x0?0x1/Math['sqrt'](n):0x0), j[0x0]=k*n, j[0x1]=l*n, j[0x2]=m*n, j[0x1]+=l>0x0?0.5:-0.5, j;
            }, c("Collision", function() {
                var hM=hJ; function j(l, m, o) {
                    var hL=b; void 0x0===l&&(l=0x10), void 0x0===m&&(m=0x10), void 0x0===o&&(o=0.00001), this["MAX_GJK_TIMES"]=0x10, this["MAX_EPA_TIMES"]=0x10, this["MAX_EPSILON"]=0.00001, this['slength']=0x0, this["simplex"]=[], this["flength"]=0x0, this["simplexFaces"]=[ {
                        'a':0x0, 'b':0x1, 'c':0x2, 'nx':0x0, 'ny':0x0, 'nz':0x0, 'dist':0x0
                    },  {
                        'a':0x0, 'b':0x1, 'c':0x3, 'nx':0x0, 'ny':0x0, 'nz':0x0, 'dist':0x0
                    },  {
                        'a':0x0, 'b':0x2, 'c':0x3, 'nx':0x0, 'ny':0x0, 'nz':0x0, 'dist':0x0
                    },  {
                        'a':0x1, 'b':0x2, 'c':0x3, 'nx':0x0, 'ny':0x0, 'nz':0x0, 'dist':0x0
                    }], this['a0']=new f(), this['b0']=new f(), this['ab']=new f(), this['ac']=new f(), this['ad']=new f(), this['bc']=new f(), this['ba']=new f(), this['bd']=new f(), this['dir']=new f(), this['pA']=[0x0, 0x0, 0x0], this['pB']=[0x0, 0x0, 0x0], this['eData']=new Array(0x40), this["eflag"]=new Array(0x400), this["closest"]=null, this['MAX_GJK_TIMES']=l, this["MAX_EPA_TIMES"]=m, this['MAX_EPSILON']=o, this["slength"]=0x0; for(var p=(l>m?l:m)+0x8, q=0x0; q<p; q++)this["simplex"][q]=new f(); for(var u=0x0; u<0x400; u++)this["eflag"][u]=0x0;
                }var k=j["prototype"]; return k["EPA"]=function(m, p, q) {
                    var hN=hM; this["flength"]=0x4; var u=this["MAX_EPSILON"], v=this['simplexFaces']; v[0x0]['a']=0x0, v[0x0]['b']=0x1, v[0x0]['c']=0x2, v[0x1]['a']=0x0, v[0x1]['b']=0x1, v[0x1]['c']=0x3, v[0x2]['a']=0x0, v[0x2]['b']=0x2, v[0x2]['c']=0x3, v[0x3]['a']=0x1, v[0x3]['b']=0x2, v[0x3]['c']=0x3; var w=this["dir"]; this['closest']=null, this['getClosestFace'](q, v); for(var x=0x0; x<this["MAX_EPA_TIMES"]; x++) {
                        var y=this["closest"]; w['x']=y['nx'], w['y']=y['ny'], w['z']=y['nz']; var z=this['support'](m, p, w), A=z["dot"](w); if(A-y["dist"]<u)return {
                            'dist':A+u, 'dir':w['negative']()
                        }; this['expand'](q, v, z);
                    }var B=this["closest"]; return w['x']=B['nx'], w['y']=B['ny'], w['z']=B['nz'],  {
                        'dist':this["support"](m, p, w)["dot"](w)+u, 'dir':w['negative']()
                    };
                }, k["GJK"]=function(m, p, q) {
                    var hO=hM; void 0x0===q&&(q=!0x0), this['slength']=0x0; var w=null, x=this["simplex"], y=h[m["getColliderShape"]()], z=h[p['getColliderShape']()], A=f["subtract"](this["dir"], m['getWorldCenter'](), p["getWorldCenter"]()), B= {
                        'center':m['center'], 'm':m['getWorldMatrix'](), 'verts':m["getVertices"](), 'support':y
                    }, C= {
                        'center':p["center"], 'm':p['getWorldMatrix'](), 'verts':p['getVertices'](), 'support':z
                    }; this["support"](B, C, A), A["negative"](); for(var D=0x0; D<this['MAX_GJK_TIMES']; D++) {
                        if(this['support'](B, C, A)["dot"](A)<=0x0) {
                            w=!0x1; break;
                        }if(this["getChangeDir"](x, A)) {
                            if(q)return this["EPA"](B, C, x); w=!0x0; break;
                        }
                    }return w;
                }, k["expand"]=function(m, q, w) {
                    var hP=hM; for(var x=new Set(), y=Number["MAX_VALUE"], z=w['x'], A=w['y'], B=w['z'], C=this["flength"], D=C-0x1; D>=0x0; D--) {
                        var E=q[D], F=E['dist']; if(z*E['nx']+A*E['ny']+B*E['nz']-F>0x0) {
                            var G=E['a']<<0x10|E['b'], H=E['a']<<0x10|E['c'], I=E['b']<<0x10|E['c']; x["delete"](G)||x["add"](G), x["delete"](H)||x['add'](H), x["delete"](I)||x["add"](I), q[D]=q[--C], q[C]=E;
                        }else F<y&&(this["closest"]=E, y=F);
                    }var J=C, K=this['slength']-0x1; x["forEach"](function(L) {
                        var hQ=hP; if(C>=q['length'])q["push"]( {
                            'a':L>>0x10, 'b':0xffff&L, 'c':K, 'nx':0x0, 'ny':0x0, 'nz':0x0
                        }); else {
                            var M=q[C]; M['a']=L>>0x10, M['b']=0xffff&L, M['c']=K;
                        }C++;
                    }), x['clear'](), this["flength"]=C, this["getClosestFace"](m, q, J, y);
                }, k['getClosestFace']=function(q, w, B, C) {
                    var hR=hM; void 0x0===B&&(B=0x0), void 0x0===C&&(C=Number["MAX_VALUE"]); for(var D=this["flength"], E=B; E<D; E++) {
                        var F=w[E], G=q[F['a']], H=q[F['b']], I=q[F['c']], J=G['x'], K=G['y'], L=G['z'], N=H['x']-J, O=H['y']-K, P=H['z']-L, Q=I['x']-J, R=I['y']-K, S=I['z']-L, T=O*S-P*R, U=P*Q-N*S, V=N*R-O*Q, W=T*T+U*U+V*V; W>0x0&&(T*=W=0x1/Math['sqrt'](W), U*=W, V*=W); var X=J*T+K*U+L*V; X<=0x0&&(T=-T, U=-U, V=-V, X=-X), F['nx']=T, F['ny']=U, F['nz']=V, F["dist"]=X, X<C&&(this["closest"]=F, C=X);
                    }
                }, k["getChangeDir"]=function(m, q) {
                    var hS=hM; switch(this["slength"]) {
                        case 0x2:var w=f["subtract"](this['ab'], m[0x1], m[0x0]), x=f['negate'](this['a0'], m[0x0]), y=f["cross"](this['b0'], w, x); return f["cross"](q, y, w), !0x1; case 0x3:var z=f["subtract"](this['ab'], m[0x1], m[0x0]), A=f['subtract'](this['ac'], m[0x2], m[0x0]); return f["cross"](q, z, A), f["negate"](this['b0'], m[0x0])["dot"](q)<0x0&&q["negative"](), !0x1; case 0x4:var B=f["subtract"](this['ab'], m[0x1], m[0x0]), C=f["subtract"](this['ac'], m[0x2], m[0x0]); f["cross"](q, B, C)["normalize"](); var D=f['subtract'](this['ad'], m[0x3], m[0x0]); D["dot"](q)>0x0&&q['negative'](); var E=f["negate"](this['b0'], m[0x0]); if(E["dot"](q)>0x0)return this["slength"]=0x3, !0x1; if(f["cross"](q, B, D)["normalize"](), C["dot"](q)>0x0&&q["negative"](), E["dot"](q)>0x0) {
                            var F=m[0x2]; return m[0x2]=m[0x3], m[0x3]=F, this["slength"]=0x3, !0x1;
                        }if(f["cross"](q, C, D)['normalize'](), B['dot'](q)>0x0&&q["negative"](), E["dot"](q)>0x0) {
                            var G=m[0x1]; return m[0x1]=m[0x2], m[0x2]=m[0x3], m[0x3]=G, this["slength"]=0x3, !0x1;
                        }var H=f["subtract"](this['bc'], m[0x2], m[0x1]), I=f["subtract"](this['bd'], m[0x3], m[0x1]); if(f['cross'](q, H, I)["normalize"](), f["subtract"](this['ba'], m[0x0], m[0x1])["dot"](q)>0x0&&q["negative"](), f["negate"](this['b0'], m[0x1])["dot"](q)>0x0) {
                            var J=m[0x0]; return m[0x0]=m[0x1], m[0x1]=m[0x2], m[0x2]=m[0x3], m[0x3]=J, this['slength']=0x3, !0x1;
                        }return!0x0;
                    }
                }, k['support']=function(l, m, o) {
                    var p=this['getPointInDirection'](l, o, this['pA']); o['negative'](); var q=this['getPointInDirection'](m, o, this['pB']); o['negative'](); var u=this['simplex'][this['slength']++]; return u['x']=p[0x0]-q[0x0], u['y']=p[0x1]-q[0x1], u['z']=p[0x2]-q[0x2], u;
                }, k["getPointInDirection"]=function(q, w, x) {
                    var hT=hM, y=q['m'], z=q["verts"], A=q['center'], B=q["support"], C=w['x'], D=w['y'], E=w['z'], F=C*y['m00']+D*y["m01"]+E*y["m02"], G=C*y["m04"]+D*y["m05"]+E*y["m06"], H=C*y["m08"]+D*y["m09"]+E*y['m10']; if(null!=B)x[0x0]=F, x[0x1]=G, x[0x2]=H, B(x), C=x[0x0], D=x[0x1], E=x[0x2]; else {
                        for(var I=0x0, J=z["length"]/0x3, K=-Number["MAX_VALUE"], L=A['x']*F+A['y']*G+A['z']*H, M=0x0; M<J; M++) {
                            var N=z[0x3*M]*F+z[0x3*M+0x1]*G+z[0x3*M+0x2]*H; N-L>K&&(K=N-L, I=M);
                        }C=z[0x3*I], D=z[0x3*I+0x1], E=z[0x3*I+0x2];
                    }return x[0x0]=y["m00"]*C+y["m04"]*D+y["m08"]*E+y["m12"], x[0x1]=y["m01"]*C+y["m05"]*D+y["m09"]*E+y["m13"], x[0x2]=y['m02']*C+y["m06"]*D+y["m10"]*E+y['m14'], x;
                }, j;
            }()), d['_RF']["pop"]();
        }
    };
});
