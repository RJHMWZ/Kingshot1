// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/Arrow.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameData.ts", "./AudioMgr.ts", './AudioName.ts', './GameConfig.ts', "./Enemy.ts"], function(f) {
    var j, k, q, v, w, x, z, A, B, C, D, E, F, G, H, I, J; return {
        'setters':[function(K) {
            var dF=b; j=K["inheritsLoose"];
        }, function(K) {
            var dG=b; k=K["cclegacy"], q=K["_decorator"], v=K["isValid"], w=K["Vec2"], x=K['v2'], z=K['v3'], A=K["tween"], B=K["easing"], C=K['Vec3'], D=K["Tween"], E=K['Component'];
        }, function(K) {
            var dH=b; F=K["default"];
        }, function(K) {
            G=K['default'];
        }, function(K) {
            H=K['AudioName'];
        }, function(K) {
            var dI=b; I=K["default"];
        }, function(K) {
            var dJ=b; J=K["Enemy"];
        }], 'execute':function() {
            var dK=b, K; k["_RF"]["push"]( {
            }, "da7a8BFSOBL2onyM7YRaxYq", "Arrow", void 0x0); var L=q["ccclass"]; q["property"], f("Arrow", L("Arrow")(K=function(M) {
                var dM=dK; function N() {
                    var dL=b; for(var P, Q=arguments["length"], R=new Array(Q), S=0x0; S<Q; S++)R[S]=arguments[S]; return(P=M['call']['apply'](M, [this]["concat"](R))||this)["_startTarget"]=void 0x0, P["_enemyTarget"]=void 0x0, P["_enemyWps"]=void 0x0, P["_enemyWpsLast"]=void 0x0, P["_shootData"]=null, P;
                }j(N, M); var O=N["prototype"]; return O["start"]=function() {
                }, O['update']=function(P) {
                }, O['init']=function(P, Q, R) {
                    var dN=dM, S=this; if(void 0x0===R&&(R=null), this["_shootData"]=Q, this["_startTarget"]=P, this['_enemyTarget']=Q["arrowTarget"], v(this["_enemyTarget"])&&v(this["_startTarget"])) {
                        this["_enemyWps"]=this["_enemyTarget"]["worldPosition"], this["node"]['worldPosition']=this['_startTarget']["getWorldPosition"](); var U=w["distance"](x(this["node"]['worldPosition']['x'], this["node"]['worldPosition']['z']), x(this["_enemyWps"]['x'], this["_enemyWps"]['z']))/F["player_data"]['atk_trajectory_speed'], V=z(0x0, 0x0, 0x0), W=this, X=!0x0; this["updateLookAt"](), v(this['_enemyTarget'])?A(this['node'])['to'](U,  {
                            'worldPosition':this['_enemyWps']
                        },  {
                            'onUpdate':function(Y, Z) {
                                var dO=dN; if(Z=B['sineOut'](Z), I["ENEMY_CTRL"]["isEnemyValid"](W['_enemyTarget'])&&X)W["updateLookAt"](), C["lerp"](V, Y["getWorldPosition"](), W["_enemyTarget"]["getWorldPosition"](), Z), Y["setWorldPosition"](V), W["checkRecycleByDis"](W['node']['worldPosition'], W["_enemyTarget"]["worldPosition"], R); else {
                                    X=!0x1; var a0=W['_enemyTarget']["getComponent"](J)["getRecycleWps"](); C["lerp"](V, Y["getWorldPosition"](), a0, Z), Y["setWorldPosition"](V), W['checkRecycleByDis'](W['node']["worldPosition"], a0, R);
                                }
                            }
                        })["call"](function() {
                            var dP=dN; S["shootDone"](R);
                        })["start"]():(this["node"]["position"]=z(0x0, 0x0, 0x0), this["node"]["eulerAngles"]=z(0x0, 0x0, 0x0), I['EASY_POOL']["put"](this["node"]));
                    }else I['EASY_POOL']["put"](this['node']);
                }, O["updateLookAt"]=function() {
                    var dQ=dM; this["node"]["lookAt"](this['_enemyTarget']["worldPosition"]);
                }, O["checkRecycleByDis"]=function(P, Q, R) {
                    var dR=dM; void 0x0===R&&(R=null), C["distance"](z(P['x'], 0x0, P['z']), z(Q['x'], 0x0, Q['z']))<0x3&&this["shootDone"](R);
                }, O["shootDone"]=function(P) {
                    var dS=dM; void 0x0===P&&(P=null), G["playShotSound"](H['ENEMY_ATK_BY_KING'], 0.5, 0x64), I['ENEMY_CTRL']['isEnemyValid'](this["_enemyTarget"])&&this['_enemyTarget']["getComponent"](J)["onDamage"](this['_shootData']["arrowAtk"], this["_startTarget"]), P&&P(), D['stopAllByTarget'](this["node"]), this['node']["position"]=z(0x0, 0x0, 0x0), this["node"]["eulerAngles"]=z(0x0, 0x0, 0x0), I["EASY_POOL"]['put'](this["node"]);
                }, N;
            }(E))||K), k["_RF"]["pop"]();
        }
    };
});
