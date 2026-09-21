// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']("chunks:///_virtual/EnemyQueue.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./GameConfig.ts", "./EasyPoolName.ts", "./Enemy.ts", "./CharacterType.ts", './GameData.ts'], function(c) {
    var d, f, g, j, k, m, p, q, v, w; return {
        'setters':[function(x) {
            var kn=b; d=x["inheritsLoose"], f=x["createClass"];
        }, function(x) {
            var ko=b; g=x["cclegacy"], j=x["_decorator"], k=x["Component"];
        }, function(x) {
            var kp=b; m=x["default"];
        }, function(x) {
            p=x['EASY_POOL_NAME'];
        }, function(x) {
            var kq=b; q=x["Enemy"];
        }, function(x) {
            var kr=b; v=x["CharacterType"];
        }, function(x) {
            var ks=b; w=x["default"];
        }], 'execute':function() {
            var kt=b, x; g["_RF"]['push']( {
            }, "f99756fTiJJArc+qKSy8c48", "EnemyQueue", void 0x0); var z=j["ccclass"]; j['property'], c("EnemyQueue", z("EnemyQueue")(x=function(A) {
                var kv=kt; function B() {
                    var ku=b; for(var D, E=arguments["length"], F=new Array(E), G=0x0; G<E; G++)F[G]=arguments[G]; return(D=A["call"]["apply"](A, [this]["concat"](F))||this)['queueData']=null, D["_timeStart"]=0x0, D["_timeInterval"]=0x0, D['_enemyType']=0x0, D['_enemyTotal']=0x0, D["_enemyCount"]=0x0, D["_timeCount"]=0x0, D["_queueIndex"]=0x0, D['_isMultiplePath']=!0x1, D["_enemyData"]=null, D['isFinishQueue']=!0x1, D["_playerSoldierRandom"]=0x0, D["pathIdx"]=0x0, D;
                }d(B, A); var C=B["prototype"]; return C["init"]=function(D) {
                    var kw=kv; this["queueData"]=D, this["_timeStart"]=this["queueData"]["startTime"], this["_timeInterval"]=this["queueData"]['gapTime'], this["_enemyType"]=this["queueData"]["enemyType"], this['_enemyTotal']=this["queueData"]["enemyCount"], this["_queueIndex"]=this["queueData"]["queueIdx"], this["_isMultiplePath"]=this['queueData']["isMultiplePath"], this["_enemyData"]=w["enemy_data"][this["queueData"]["enemyDataIndex"]-0x1];
                }, C["createEnemy"]=function() {
                    var ky=kv, D=this, E=null, F=function() {
                        var kx=b; D['_enemyType']==v["CharacterType_PlayerSoldier"]&&(D["_playerSoldierRandom"]&&(D["_playerSoldierRandom"]=0x0), G=D['_playerSoldierRandom']), D["_enemyType"]==v["CharacterType_EnemySoldier"]?E=m["EASY_POOL"]["get"](p["ENEMY_SOLDIER"]):D["_enemyType"]==v["CharacterType_EnemySoldierElite"]?E=m["EASY_POOL"]["get"](p["ENEMY_SOLDIER_ELITE"]):D["_enemyType"]==v["CharacterType_PlayerSoldier"]&&(E=m['EASY_POOL']['get'](p["PLAYER_SOLDIER"])), E&&(D["queueData"]["born"]["addChild"](E), E["getComponent"](q)['init'](D["queueData"]["path"]["children"][G], D['queueData']["bornPos"]["getWorldPosition"](), D['_enemyData'], D['_queueIndex']), D["_enemyCount"]++, D['_enemyCount']>=D["_enemyTotal"]&&(D['isFinishQueue']=!0x0));
                    }, G=0x0; if(this["_isMultiplePath"])G=this['pathIdx']%this["queueData"]["path"]["children"]["length"], this["pathIdx"]++, F(), G=this["pathIdx"]%this["queueData"]["path"]["children"]['length'], F(), this['pathIdx']++; else {
                        var H=this["queueData"]["group"]; H&&H['num']>0x0?this["schedule"](function() {
                            F();
                        }, H["gapTime"], H["num"]-0x1):F();
                    }
                }, C["getQueueIndex"]=function() {
                    var kz=kv; return this["_queueIndex"];
                }, C["getEnemyType"]=function() {
                    var kA=kv; return this["_enemyType"];
                }, f(B, [ {
                    'key':"timeStart", 'get':function() {
                        var kB=kv; return this["_timeStart"];
                    }
                },  {
                    'key':'timeInterval', 'get':function() {
                        return this['_timeInterval'];
                    }, 'set':function(D) {
                        var kC=kv; this["_timeInterval"]=D;
                    }
                },  {
                    'key':"timeCount", 'get':function() {
                        var kD=kv; return this["_timeCount"];
                    }, 'set':function(D) {
                        var kE=kv; this["_timeCount"]=D;
                    }
                }]), B;
            }(k))||x), g["_RF"]["pop"]();
        }
    };
});
