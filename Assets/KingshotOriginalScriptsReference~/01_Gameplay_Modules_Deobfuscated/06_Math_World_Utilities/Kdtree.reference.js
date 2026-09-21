// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/Kdtree.ts', ['cc', "./Math.ts"], function(c) {
    var d, e; return {
        'setters':[function(f) {
            var qP=b; d=f["cclegacy"];
        }, function(f) {
            var qQ=b; e=f["RaycastAABB"];
        }], 'execute':function() {
            var qR=b; d["_RF"]["push"]( {
            }, "d7062zYN/hMmYlor9mT05w1", "Kdtree", void 0x0), c("Kdtree", function() {
                var qT=qR; function f(h, j, k, l, m, o) {
                    var qS=b; void 0x0===o&&(o=0x110), this['l']=0x0, this['r']=0x0, this["left"]=null, this["right"]=null, this["isLeaf"]=!0x1, this["objects"]=[], this["axis"]=0x0, this["middle"]=0x0, this["bound"]=null, this["bounds"]=[], this["object_level"]=0x110, this['l']=j, this['r']=k, this["bound"]=l, this["objects"]=h, this['object_level']=o, !(k-j+0x1<=o>>0x8)&&0xff&o?(this["axis"]=m%0x3, this["split"](j, k)):this["isLeaf"]=!0x0;
                }var g=f["prototype"]; return g['split']=function(j, k) {
                    var qU=qT, l=this["axis"], m=this["bounds"], p=this["object_level"], q=this["getSide"](j, k, l), v=this["findMid"](j, k, q); this['middle']=v['bound'][q]; var w=this["partion"](j, k, this["middle"], q); this["right"]=new f(this["objects"], w, k, m[0x0], l+0x1, p-0x1), this["left"]=new f(this["objects"], j, w-0x1, m[0x1], l+0x1, p-0x1);
                }, g["getSide"]=function(j, k, m) {
                    var qV=qT; for(var p=this['objects'], q=0x0, v=0x0, w=this["bound"][m], x=this["bound"][m+0x3], y=j; y<=k; y++) {
                        var z=p[y]["bound"], A=z[m]-w, B=z[m+0x3]-x; q+=A*A, v+=B*B;
                    }return q>=v?m:m+0x3;
                }, g["partion"]=function(j, k, m, p) {
                    var qW=qT; for(var q=j, v=k, w=this['objects']; q<=v; q++) {
                        var x=w[q]; x['bound'][p]>=m&&(w[q]=w[v], w[v]=x, v--, q--);
                    }var y=q; q>=k?y=k:q==j&&(y=q+0x1); var z=Number["NEGATIVE_INFINITY"], A=Number['POSITIVE_INFINITY'], B=this["bounds"][0x0]=[A, A, A, z, z, z], C=this['bounds'][0x1]=[A, A, A, z, z, z]; for(q=j; q<=k; q++) {
                        var D=w[q]["bound"]; q<y?(C[0x0]>D[0x0]&&(C[0x0]=D[0x0]), C[0x1]>D[0x1]&&(C[0x1]=D[0x1]), C[0x2]>D[0x2]&&(C[0x2]=D[0x2]), C[0x3]<D[0x3]&&(C[0x3]=D[0x3]), C[0x4]<D[0x4]&&(C[0x4]=D[0x4]), C[0x5]<D[0x5]&&(C[0x5]=D[0x5])):(B[0x0]>D[0x0]&&(B[0x0]=D[0x0]), B[0x1]>D[0x1]&&(B[0x1]=D[0x1]), B[0x2]>D[0x2]&&(B[0x2]=D[0x2]), B[0x3]<D[0x3]&&(B[0x3]=D[0x3]), B[0x4]<D[0x4]&&(B[0x4]=D[0x4]), B[0x5]<D[0x5]&&(B[0x5]=D[0x5]));
                    }return y;
                }, g["insertSort"]=function(j, k, l) {
                    var qX=qT; for(var m=this["objects"], p=j+0x1; p<=k; p++) {
                        for(var q=m[p], u=p, v=q["bound"][l]; u>j&&m[u-0x1]["bound"][l]>v; )m[u]=m[u-0x1], u--; u!=p&&(m[u]=q);
                    }
                }, g['findMid']=function(j, k, m) {
                    var qY=qT, p=this['objects']; if(j==k)return p[j]; var q=0x0, v=0x0; for(q=j; q<k-0x5; q+=0x5) {
                        this["insertSort"](q, q+0x4, m); var w=~~((v=q-j)/0x5), x=p[j+w]; p[j+w]=p[q+0x2], p[q+0x2]=x;
                    }var y=k-q+0x1; if(y>0x0) {
                        this['insertSort'](q, q+y-0x1, m); var z=~~((v=q-j)/0x5), A=~~(y/0x2), B=p[j+z]; p[j+z]=p[q+A], p[q+A]=B;
                    }return(v=~~(v/0x5))==j?p[j]:this['findMid'](j, j+v, m);
                }, g["retrieve"]=function(j, k) {
                    var qZ=qT; for(var m=0x0, p=j, q=this['objects'], v=[this]; m>=0x0; ) {
                        var w=v[m--], x=w["axis"], y=w['bounds']; if(w["isLeaf"])for(var z=w['l'], A=w['r'], B=z; B<=A; B++) {
                            var C=q[B], D=C["bound"]; D[0x0]>p[0x3]||p[0x0]>D[0x3]||D[0x1]>p[0x4]||p[0x1]>D[0x4]||D[0x2]>p[0x5]||p[0x2]>D[0x5]||k['push'](C);
                        }else p[x+0x3]<y[0x1][x]||p[x]>y[0x1][x+0x3]||(v[++m]=w["left"]), p[x+0x3]<y[0x0][x]||p[x]>y[0x0][x+0x3]||(v[++m]=w['right']);
                    }
                }, g["rayCast"]=function(k, q) {
                    var r0=qT; for(var w=k[0x6], x=[k[0x0], k[0x1], k[0x2]], y=[k[0x3], k[0x4], k[0x5]], z=0x0, A=e, B=this["objects"], C=[this]; z>=0x0; ) {
                        var D=C[z--], E=D["bound"]; if(D["isLeaf"])for(var F=D['l'], G=D['r'], H=F; H<=G; H++) {
                            var I=B[H], J=A(x, y, I["bound"], w); null!=J&&(I["rayDist"]=J, (J=q(I))<w&&(w=J));
                        }else {
                            var K=0x1, L=0x1; if(x[D["axis"]]<=D['middle']?K=0x2:L=0x2, x[0x0]<E[0x0]||x[0x0]>E[0x3]||x[0x1]<E[0x1]||x[0x1]>E[0x4]||x[0x2]<E[0x2]||x[0x2]>E[0x5]) {
                                var M=A(x, y, E, w); null!=M&&M>=0x0&&(C[z+L]=D["right"], C[z+K]=D['left'], z+=0x2);
                            }else C[z+L]=D["right"], C[z+K]=D['left'], z+=0x2;
                        }
                    }
                }, g['clear']=function() {
                    var r1=qT; this['left']&&this['left']['clear'](), this["right"]&&this["right"]["clear"](), this["left"]=null, this["right"]=null, this["bound"]=null, this["bounds"]=null, this["objects"]=null;
                }, f;
            }()), d["_RF"]["pop"]();
        }
    };
});
