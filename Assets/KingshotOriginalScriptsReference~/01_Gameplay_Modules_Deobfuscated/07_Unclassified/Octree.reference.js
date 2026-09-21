// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Octree.ts", ['cc', './Math.ts'], function(c) {
    var d, f, g; return {
        'setters':[function(h) {
            var ti=b; d=h["cclegacy"];
        }, function(h) {
            var tj=b; f=h['RaycastBox'], g=h["RaycastAABB"];
        }], 'execute':function() {
            var tk=b; d['_RF']["push"]( {
            }, '928b47Rf65PSabv7P1m7VaY', "Octree", void 0x0), (c("GetMaxLevel", function(j, k, l) {
                var tl=tk; void 0x0===l&&(l=0x1); var m=k["object_level"]>>0x8; if(l<=0x0)return j['maxLevel']=m, m; var p=j['bound'], q=k["bound"], u=0x2*(q[0x3]+q[0x4]+q[0x5]), v=p[0x3]-p[0x0]+(p[0x4]-p[0x1])+(p[0x5]-p[0x2]); return m=~~Math["log2"](u/(v*l)), j['maxLevel']=m, m;
            }), c('Octree', function() {
                var tn=tk; function h(k, l, m, o, p) {
                    var tm=b; void 0x0===k&&(k=[]), void 0x0===l&&(l=0x804), void 0x0===m&&(m=0x0), void 0x0===o&&(o=null), void 0x0===p&&(p=0x0), this['id']=0x0, this["idxs"]=0x0, this["level"]=0x0, this["parent"]=null, this["bound"]=[], this["nodes"]=[], this["objects"]=[], this["object_level"]=0x804, this['id']=p, this["idxs"]=0x0, this["nodes"]=[], this["objects"]=[], this["bound"]=k, this["level"]=m, this["parent"]=o, this['object_level']=l;
                }var j=h["prototype"]; return j["split"]=function() {
                    var to=tn, k=this["level"], m=this["object_level"]-0x1, p=this["nodes"], q=this["bound"], u=q[0x0], w=q[0x1], x=q[0x2], y=0.5*q[0x3], z=0.5*q[0x4], A=0.5*q[0x5]; p[0x0]=new h([u+y, w-z, x-A, y, z, A], m, k+0x1, this, 0x0), p[0x1]=new h([u-y, w-z, x-A, y, z, A], m, k+0x1, this, 0x1), p[0x2]=new h([u-y, w+z, x-A, y, z, A], m, k+0x1, this, 0x2), p[0x3]=new h([u+y, w+z, x-A, y, z, A], m, k+0x1, this, 0x3), p[0x4]=new h([u+y, w-z, x+A, y, z, A], m, k+0x1, this, 0x4), p[0x5]=new h([u-y, w-z, x+A, y, z, A], m, k+0x1, this, 0x5), p[0x6]=new h([u-y, w+z, x+A, y, z, A], m, k+0x1, this, 0x6), p[0x7]=new h([u+y, w+z, x+A, y, z, A], m, k+0x1, this, 0x7);
                }, j["getIndex"]=function(k) {
                    var tp=tn, m=0x0, p=this["bound"], q=p[0x0], w=p[0x1], x=p[0x2], y=k[0x0]<q, z=k[0x3]>=q, A=k[0x1]<w, B=k[0x4]>=w, C=k[0x2]<x, D=k[0x5]>=x; return z&&A&&(C&&(m=0x1), D&&(m|=0x10000)), y&&A&&(C&&(m|=0x10), D&&(m|=0x1<<0x14)), y&&B&&(C&&(m|=0x100), D&&(m|=0x1<<0x18)), z&&B&&(C&&(m|=0x1000), D&&(m|=0x1<<0x1c)), m;
                }, j['remove']=function(k) {
                    var tq=tn; for(var l=k['targets'], m=l["length"]-0x1; m>=0x0; m--) {
                        var p=l[m], q=p["objects"], u=q["indexOf"](k); if(-0x1!=u) {
                            var v=q["length"]-0x1; for(q[u]=q[v], q['length']=v; 0x0==v&&0x0==p["idxs"]&&(p["reset"](), p=p['parent']); )v=p["objects"]["length"], p["idxs"]&=~(0x1<<0x4*p['id']);
                        }
                    }l['length']=0x0;
                }, j["insert"]=function(k) {
                    var tr=tn, m=this["level"], p=this['nodes'], q=this["objects"], w=this["object_level"]; if(p['length']) {
                        if(k["maxLevel"]!=m) {
                            var x=0x0, y=this["getIndex"](k["bound"]); for(this["idxs"]|=y; y; )0xf&y&&p[x]['insert'](k), y>>=0x4, x++;
                        }else q["push"](k), k["insert"](this);
                    }else {
                        if(q["push"](k), k['insert'](this), q['length']>w>>0x8&&0xff&w) {
                            this["split"](); for(var z=0x0, A=q['length'], B=0x0; B<A; B++) {
                                var C=q[B]; if(C["maxLevel"]!=m) {
                                    C['remove'](this); var D=0x0, E=this["getIndex"](C["bound"]); for(this['idxs']|=E; E; )0xf&E&&p[D]["insert"](C), E>>=0x4, D++;
                                }else q[z++]=q[B];
                            }q['length']=z;
                        }
                    }
                }, j["retrieve"]=function(k, m, p, q) {
                    var ts=tn; void 0x0===q&&(q=0xffffffff); for(var w=0x0, x=k, y=[this]; w>=0x0; ) {
                        for(var z=y[w--], A=z["idxs"], B=z["nodes"], C=z["objects"], D=0x0, E=C["length"]; D<E; D++) {
                            var F=C[D], G=F["bound"]; F['flag']<m&&(F['flag']=m, q&F['group']&&(G[0x0]>x[0x3]||x[0x0]>G[0x3]||G[0x1]>x[0x4]||x[0x1]>G[0x4]||G[0x2]>x[0x5]||x[0x2]>G[0x5]||p["push"](F)));
                        }if(A) {
                            A&=z["getIndex"](x); for(var H=0x0; 0x0!=A; A>>=0x4, H++)0xf&A&&(y[++w]=B[H]);
                        }
                    }
                }, j['rayCast']=function(k, q, w, y) {
                    var tt=tn; void 0x0===y&&(y=0xffffffff); for(var z=k[0x6], A=[k[0x0], k[0x1], k[0x2]], B=[k[0x3], k[0x4], k[0x5]], C=0x0, D=[this]; C>=0x0; ) {
                        var E=D[C--]; if(null!=f(A, B, E["bound"], z)) {
                            for(var F=E['idxs'], G=E["nodes"], H=E["objects"], I=0x0, J=H["length"]; I<J; I++) {
                                var K=H[I], L=K["bound"]; if(K["flag"]<q&&(K['flag']=q, y&K["group"])) {
                                    var M=g(A, B, L, z); null!=M&&(K['rayDist']=M, w['push'](K));
                                }
                            }for(var N=0x0; 0x0!=F; F>>=0x4, N++)0xf&F&&(D[++C]=G[N]);
                        }
                    }
                }, j['reset']=function() {
                    var tu=tn; for(var k=this["nodes"], l=k["length"]-0x1; l>=0x0; l--) {
                        var m=k[l]; m&&(m['clear'](), k[l]=null);
                    }this["idxs"]=0x0, this["nodes"]=[], this['objects']=[];
                }, j["clear"]=function() {
                    var tv=tn; for(var k=this["nodes"], l=k["length"]-0x1; l>=0x0; l--) {
                        var m=k[l]; m&&(m["clear"](), k[l]=null);
                    }this["nodes"]=null, this["bound"]=null, this["objects"]=null;
                }, h;
            }())), d["_RF"]["pop"]();
        }
    };
});
