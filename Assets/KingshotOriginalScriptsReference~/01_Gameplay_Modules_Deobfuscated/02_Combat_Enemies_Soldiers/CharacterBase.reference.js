// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CharacterBase.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts", "./EasyPoolName.ts", "./LocationUtil.ts", "./CharacterType.ts"], function(j) {
    var k, m, q, v, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M; return {
        'setters':[function(N) {
            var gQ=b; k=N["applyDecoratedDescriptor"], m=N['inheritsLoose'], q=N["initializerDefineProperty"], v=N['assertThisInitialized'];
        }, function(N) {
            var gR=b; x=N["cclegacy"], z=N['_decorator'], A=N["Enum"], B=N["ParticleSystem"], C=N["Vec3"], D=N['v3'], E=N["Tween"], F=N['tween'], G=N["easing"], H=N["isValid"], I=N["Component"];
        }, function(N) {
            J=N['default'];
        }, function(N) {
            K=N['EASY_POOL_NAME'];
        }, function(N) {
            var gS=b; L=N["LocationUtil3D"];
        }, function(N) {
            var gT=b; M=N["CharacterType"];
        }], 'execute':function() {
            var gU=b, N, O, Q, R, U; x["_RF"]["push"]( {
            }, "360d4dk5vhKZZu2O5Gb3sf+", 'CharacterBase', void 0x0); var V=z["ccclass"], W=z["property"]; j("CharacterBase", (N=V("CharacterBase"), O=W( {
                'type':A(M), 'tooltip':"角色类型"
            }), N((U=k((R=function(X) {
                var gW=gU; function Y() {
                    var gV=b; for(var a0, a1=arguments["length"], a2=new Array(a1), a3=0x0; a3<a1; a3++)a2[a3]=arguments[a3]; return a0=X["call"]['apply'](X, [this]['concat'](a2))||this, q(a0, "characterType", U, v(a0)), a0["atkStarter"]=null, a0['hp']=0x64, a0["hpPre"]=0x64, a0["hpMax"]=0x64, a0["_arrowsArr"]=[], a0;
                }m(Y, X); var Z=Y["prototype"]; return Z["onDamagePre"]=function(a0) {
                    var gX=gW; this['hpPre']&&(this["hpPre"]-=a0, this["hpPre"]<=0x0&&(this['hpPre']=0x0));
                }, Z['playDmgVfx']=function() {
                    var gY=gW, a0=this["node"]["getChildByName"]("vfx_dmg_born"); a0=a0||this["node"]; var a1=J['EASY_POOL']['get'](K['VFX_DMG']); J["Canvas_3d"]['addChild'](a1), a1["setWorldPosition"](a0["getWorldPosition"]()); for(var a2=a1["getComponentsInChildren"](B), a3=0x0; a3<a2["length"]; a3++)a2[a3]["stop"](), a2[a3]["play"](); this['scheduleOnce'](function() {
                        var gZ=gY; for(var a4=0x0; a4<a2["length"]; a4++)a2[a4]['stop'](); J["EASY_POOL"]["put"](a1);
                    }, 0x1);
                }, Z['atkBack']=function(a0) {
                    var h0=gW; if(void 0x0===a0&&(a0=null), this['characterType']==M["CharacterType_EnemySoldier"]) {
                        var a1=new C(); C['subtract'](a1, this["node"]["worldPosition"], D(this["atkStarter"]['worldPosition']['x'], this["node"]['worldPosition']['y'], this["atkStarter"]['worldPosition']['z'])), a1["normalize"](), (E["stopAllByTarget"](this["node"]), L["lookAtByHorizontal"](this["node"], this["atkStarter"]), F(this["node"])['to'](0.2,  {
                            'worldPosition':D(this["node"]["worldPosition"]['x']+0x0*a1['x'], this["node"]['worldPosition']['y']+0x1, this['node']['worldPosition']['z']+0x0*a1['z'])
                        },  {
                            'easing':G['backOut']
                        })["delay"](0.5)["call"](function() {
                            a0&&a0();
                        })['start']());
                    }
                }, Z["isDead"]=function() {
                    return this['hp']<=0x0;
                }, Z["isDeadPre"]=function() {
                    var h1=gW; return this["hpPre"]<=0x0;
                }, Z["pushArrow"]=function(a0) {
                    var h2=gW; this["_arrowsArr"]["push"](a0);
                }, Z["clearArrow"]=function() {
                    var h3=gW; for(var a0=0x0; a0<this["_arrowsArr"]["length"]; a0++) {
                        var a1=this["_arrowsArr"][a0]; H(a1)&&J["EASY_POOL"]["destroyItem"](a1);
                    }this["_arrowsArr"]=[];
                }, Z["isEnemyInfantry"]=function() {
                    var h4=gW; return this["characterType"]==M["CharacterType_EnemySoldier"];
                }, Z['isPlayerInfantry']=function() {
                    return this['characterType']==M['CharacterType_PlayerSoldier'];
                }, Z['isEnemyElite']=function() {
                    var h5=gW; return this["characterType"]==M["CharacterType_EnemySoldierElite"];
                }, Z['die']=function() {
                }, Y;
            }(I))["prototype"], "characterType", [O],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    var h6=gU; return M["CharacterType_Player"];
                }
            }), Q=R))||Q)), x['_RF']["pop"]();
        }
    };
});
