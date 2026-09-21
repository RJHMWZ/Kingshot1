// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/Hp.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./AudioMgr.ts", "./AudioName.ts"], function(d) {
    var g, j, k, m, q, v, w, x, y, z, A, B, C; return {
        'setters':[function(D) {
            var oH=b; g=D['applyDecoratedDescriptor'], j=D["inheritsLoose"], k=D["initializerDefineProperty"], m=D["assertThisInitialized"];
        }, function(D) {
            var oI=b; q=D['cclegacy'], v=D["_decorator"], w=D["Sprite"], x=D['v3'], y=D["Color"], z=D['lerp'], A=D["Component"];
        }, function(D) {
            var oJ=b; B=D["default"];
        }, function(D) {
            var oK=b; C=D["AudioName"];
        }], 'execute':function() {
            var oL=b, D, E, F, G, I, J, K; q["_RF"]['push']( {
            }, "286b2aGZ6JNi75/d5YFXAGU", 'Hp', void 0x0); var L=v['ccclass'], M=v["property"]; d('Hp', (D=L('Hp'), E=M(w), F=M(w), D((J=g((I=function(N) {
                var oN=oL; function O() {
                    var oM=b; for(var Q, T=arguments["length"], U=new Array(T), V=0x0; V<T; V++)U[V]=arguments[V]; return Q=N['call']["apply"](N, [this]["concat"](U))||this, k(Q, "fillSp", J, m(Q)), k(Q, "followSp", K, m(Q)), Q['hp']=0x0, Q["hpMax"]=0x0, Q;
                }j(O, N); var P=O["prototype"]; return P["start"]=function() {
                    var oO=oN; this["updateHp"]();
                }, P["update"]=function(Q) {
                    var oP=oN; this["updateHpFollow"](Q);
                }, P["init"]=function(Q) {
                    this['hp']=Q, this['hpMax']=Q;
                }, P['onDamage']=function(Q) {
                    var oQ=oN, T=this; if(this['hp'])return this["node"]['active']||(this["node"]["setScale"](x(0x0, 0x0, 0x1)), this["node"]["active"]=!0x0, setTimeout(function() {
                        var oR=oQ; T['node']["setScale"](x(0x1, 0x1, 0x1));
                    }, 0x0)), B["playShotSound"](C['CATLE_ON_DAMAGE'], 0x1, 0x12c), this['hp']-=Q, this['hp']<=0x0&&(this['hp']=0x0, this['node']["active"]=!0x1), this["updateHp"](), this['hp'];
                }, P['updateHp']=function() {
                    var oS=oN; this["fillSp"]["fillRange"]=this['hp']/this["hpMax"], this['fillSp']['fillRange']>=0.5?this['fillSp']["color"]=y['GREEN']:this["fillSp"]['color']=y["RED"];
                }, P['updateHpFollow']=function(Q) {
                    var oT=oN; this["followSp"]['fillRange']=z(this["followSp"]['fillRange'], this["fillSp"]["fillRange"], 0.1);
                }, O;
            }(A))["prototype"], "fillSp", [E],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), K=g(I['prototype'], "followSp", [F],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), G=I))||G)), q['_RF']["pop"]();
        }
    };
});
