// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/AudioMgr.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(f) {
    var g, h, j, k, m, p, q, v, w, x, y; return {
        'setters':[function(z) {
            var dU=b; g=z["createClass"], h=z['asyncToGenerator'], j=z['regeneratorRuntime'];
        }, function(z) {
            var dV=b; k=z["cclegacy"], m=z["Node"], p=z['AudioSource'], q=z['director'], v=z["clamp01"], w=z["isValid"], x=z["resources"], y=z["AudioClip"];
        }], 'execute':function() {
            var dW=b; k["_RF"]["push"]( {
            }, "c8ccdlUg9FD05/ogjqgnkL/", 'AudioMgr', void 0x0); var z=f('AudioMgr', function() {
                var dY=dW; function A() {
                    var dX=b; this["_aduioMusic"]=void 0x0, this['_audioSound']=void 0x0, this["_isPlay"]=!0x1, this["mLastSoundPlay"]=new Map(), this['mAudioAllRes']=new Map(), this["loadAllAudioRes"](), this["_initMusicAudio"](), this['_initSoundAudio']();
                }var B=A["prototype"]; return B['_initMusicAudio']=function() {
                    var dZ=dY, C=new m(); C["name"]="_audio_music", C["addComponent"](p), q["addPersistRootNode"](C), this["_aduioMusic"]=C["getComponent"](p);
                }, B["_initSoundAudio"]=function() {
                    var e0=dY; this["_audioSound"]=new m(), this["_audioSound"]['name']="_audio_sound", q["addPersistRootNode"](this["_audioSound"]);
                }, B["getClip"]=function() {
                    var C=h(j()['mark'](function D(E) {
                        var e1=b; return j()["wrap"](function(F) {
                            var e2=e1; for(; ; )switch(F["prev"]=F["next"]) {
                                case 0x0:return F["abrupt"]("return", new Promise(function(G, H) {
                                    var e3=e2; x["load"]("audio/"+E, y, function(I, J) {
                                        return null!=I?H():G(J);
                                    });
                                })); case 0x1:case "end":return F["stop"]();
                            }
                        }, D);
                    })); return function(E) {
                        return C['apply'](this, arguments);
                    };
                }(), B['loadAllAudioRes']=function() {
                    var C=h(j()['mark'](function D() {
                        var e4=b, E=this; return j()["wrap"](function(F) {
                            var e5=e4; for(; ; )switch(F["prev"]=F["next"]) {
                                case 0x0:return F["abrupt"]("return", new Promise(function(G, H) {
                                    var e6=e5; x["loadDir"]('audio', y, function(I, J) {
                                        var e7=e6; if(null!=I)return H(); for(var K=0x0; K<J["length"]; K++) {
                                            var L=J[K]; E["mAudioAllRes"]["set"](L["name"], L);
                                        }return G(null);
                                    });
                                })); case 0x1:case "end":return F["stop"]();
                            }
                        }, D);
                    })); return function() {
                        var e8=b; return C["apply"](this, arguments);
                    };
                }(), B["init"]=function(C) {
                    var e9=dY; C&&(this["_aduioMusic"]=C);
                }, B['setMusicVolume']=function(C) {
                    var ea=dY; this["_aduioMusic"]&&this['_aduioMusic']["clip"]&&(C=v(C), this['_aduioMusic']["volume"]=C);
                }, B["playMusic"]=function(C, D, E) {
                    var eb=dY, F=this; void 0x0===E&&(E=0x1), this["getClip"](C)['then'](function(G) {
                        var ec=eb; F['_aduioMusic']["playing"]&&F["_aduioMusic"]["stop"](), F["_aduioMusic"]["clip"]=G, F["_aduioMusic"]["loop"]=D, F["_aduioMusic"]["volume"]=E, F["_aduioMusic"]["play"]();
                    });
                }, B['stopMusic']=function() {
                    var ed=dY; this["_aduioMusic"]["stop"]();
                }, B['_putSoundNode']=function(C) {
                    var ee=dY; C&&(C["getComponent"](p)["stop"](), C["getComponent"](p)["clip"]=null, C["removeFromParent"]());
                }, B["_getAudioSource"]=function() {
                    var ef=dY, C=h(j()["mark"](function D(E) {
                        var eg=ef, F=this; return j()["wrap"](function(G) {
                            var eh=eg; for(; ; )switch(G["prev"]=G["next"]) {
                                case 0x0:return G["abrupt"]("return", new Promise(function(H, I) {
                                    var ei=eh; if(F["mAudioAllRes"]["has"](E)) {
                                        var J=new m(); return J['addComponent'](p), F["_audioSound"]["addChild"](J), J['getComponent'](p)["clip"]=F["mAudioAllRes"]["get"](E), H(J);
                                    }F["getClip"](E)['then'](function(K) {
                                        var ej=ei, L=new m(); return L["addComponent"](p), F['_audioSound']["addChild"](L), L["getComponent"](p)["clip"]=K, H(L);
                                    });
                                })); case 0x1:case "end":return G["stop"]();
                            }
                        }, D);
                    })); return function(E) {
                        var ek=ef; return C["apply"](this, arguments);
                    };
                }(), B['playSound']=function(C, D, E) {
                    var el=dY, F=this; void 0x0===D&&(D=0x1), void 0x0===E&&(E=!0x1), this["isPlay"]&&this['_getAudioSource'](C)["then"](function(G) {
                        var em=el; G["getComponent"](p)["stop"](), G["getComponent"](p)['loop']=E, G["getComponent"](p)['volume']=D, G["getComponent"](p)["play"](); var H=G["getComponent"](p)['clip']['getDuration'](); if(!E) {
                            var I=G['uuid']; setTimeout(function() {
                                var en=em; F["stopSoundByUuid"](I);
                            }, 0x3e8*H);
                        }
                    });
                }, B["stopSound"]=function(C) {
                    var eo=dY; for(var D=this["_audioSound"]["children"]["length"]-0x1; -0x1!=D; D--) {
                        var E=this["_audioSound"]["children"][D], F=E["getComponent"](p); w(E)&&w(F)&&w(F["clip"])&&F["clip"]['name']==C&&(F["stop"](), F['clip']=null, E["destroy"]());
                    }
                }, B["stopSoundByUuid"]=function(C) {
                    var ep=dY; for(var D=this["_audioSound"]["children"]['length']-0x1; -0x1!=D; D--) {
                        var E=this["_audioSound"]["children"][D]; if(w(E)&&E['uuid']==C) {
                            var F=E["getComponent"](p); F["stop"](), F["clip"]=null, E["destroy"]();
                        }
                    }
                }, B["playShotSound"]=function(C, D, E) {
                    var eq=dY, F=this; if(void 0x0===D&&(D=0x1), void 0x0===E&&(E=0x14), this["isPlay"]) {
                        var G=this["mLastSoundPlay"]["get"](C)||0x0; Date["now"]()-G<E||(this["mLastSoundPlay"]["set"](C, Date['now']()), this["getClip"](C)["then"](function(H) {
                            var er=eq, I=new m(); F["_audioSound"]["addChild"](I); var J=I["getComponent"](p); J||(J=I['addComponent'](p)), I["active"]=!0x0, J["playOneShot"](H, D); var K=H["getDuration"](); setTimeout(function() {
                                var es=er; F["stopSoundByUuid"](I['uuid']);
                            }, K);
                        }));
                    }
                }, g(A, [ {
                    'key':'isPlay', 'get':function() {
                        return this['_isPlay'];
                    }, 'set':function(C) {
                        this['_isPlay']=C;
                    }
                }]), A;
            }()); f("default", new z()), k['_RF']['pop']();
        }
    };
});
