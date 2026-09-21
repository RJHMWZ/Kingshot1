// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System['register']('chunks:///_virtual/Archer.ts', ["./rollupPluginModLoBabelHelpers.js", 'cc', "./EasyPoolName.ts", "./Object3D.ts", "./GameData.ts", "./GameConfig.ts", './LocationUtil.ts', "./TimerAction.ts", "./Enemy.ts", './TowerWeaponArrow.ts', './Soldier.ts', './SkelAniName.ts', './AudioMgr.ts', "./AudioName.ts"], function(j) {
    var k, q, x, z, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U; return {
        'setters':[function(V) {
            var bR=b; k=V["applyDecoratedDescriptor"], q=V["inheritsLoose"], x=V['initializerDefineProperty'], z=V['assertThisInitialized'];
        }, function(V) {
            var bS=b; B=V["cclegacy"], C=V["_decorator"], D=V["Node"], F=V["isValid"], G=V["Vec3"], H=V['v3'], I=V['Component'];
        }, function(V) {
            J=V['EASY_POOL_NAME'];
        }, function(V) {
            K=V['Object3D'];
        }, function(V) {
            var bT=b; L=V["default"];
        }, function(V) {
            var bU=b; M=V["default"];
        }, function(V) {
            var bV=b; N=V["LocationUtil3D"];
        }, function(V) {
            var bW=b; O=V["TimerAction"];
        }, function(V) {
            P=V['Enemy'];
        }, function(V) {
            Q=V['TowerWeaponArrow'];
        }, function(V) {
            var bX=b; R=V["Soldier"];
        }, function(V) {
            var bY=b; S=V["SkelAniName"];
        }, function(V) {
            var bZ=b; T=V["default"];
        }, function(V) {
            var c0=b; U=V["AudioName"];
        }], 'execute':function() {
            var c1=b, V, W, X, Y, Z, a0, a1, a2; B["_RF"]['push']( {
            }, 'b0c8fAWvu1PwqJiBN7T7RE+', "Archer", void 0x0); var a3=C["ccclass"], a4=C["property"]; j("Archer", (V=a3('Archer'), W=a4(D), X=a4(D), V((a0=k((Z=function(a5) {
                var c3=c1; function a6() {
                    var c2=b; for(var a8, a9=arguments["length"], aa=new Array(a9), ab=0x0; ab<a9; ab++)aa[ab]=arguments[ab]; return a8=a5["call"]["apply"](a5, [this]["concat"](aa))||this, x(a8, "towerIndex", a0, z(a8)), x(a8, "bowArrowBorn", a1, z(a8)), x(a8, "bowSocket", a2, z(a8)), a8["enemyInfantryBorn"]=null, a8["enemyCavalryBorn"]=null, a8["weapon"]=null, a8['isActive']=!0x1, a8["_enemyBornArr"]=[], a8['_curEnemyArr']=[], a8["timeAddPhysics"]=new O(z(a8), 0x1f4, a8["onUpdatePhysics"]), a8["timeSearchEnemy"]=new O(z(a8), 0xc8, a8["searchingEnemy"]), a8['_soldierData']=null, a8['soldier']=null, a8["towerId"]=0x0, a8["nEnemyIdx"]=0x0, a8["nEnemyFrame"]=0x64, a8["_isInPlayAtk"]=!0x1, a8;
                }q(a6, a5); var a7=a6['prototype']; return a7["onLoad"]=function() {
                    var c4=c3; this["initData"]();
                }, a7["start"]=function() {
                }, a7["update"]=function(a8) {
                    var c5=c3; this['isActive']&&(this['timeSearchEnemy']["update"](a8), this["updateAtkEnemy"](a8));
                }, a7["setTowerId"]=function(a8) {
                    var c6=c3; this["towerId"]=a8;
                }, a7["initData"]=function() {
                    var c7=c3; this["weapon"]=this['node']["getChildByName"]("tower_bow"), this["enemyInfantryBorn"]=M['LAYER_GAME']["getChildByName"]('enemy_controller')["getChildByName"]("enemy_infantry_born"), this['enemyCavalryBorn']=M["LAYER_GAME"]["getChildByName"]("enemy_controller")["getChildByName"]("enemy_cavalry_born");
                }, a7["active"]=function() {
                    var c8=c3; T['playShotSound'](U['ARCHER_UP_TOWER']), this['soldier']=this["node"]["getComponent"](R), this["_soldierData"]=JSON["parse"](JSON["stringify"](L['infantry_data'][0x0])), this['isActive']=!0x0, this["searchingEnemy"](), this["timeSearchEnemy"]['reset']();
                }, a7["onUpdatePhysics"]=function() {
                    var c9=c3; N['getDistanceHorizontal'](this["node"], M["PLAYER"]["node"])<=0x5||this["addPhysics"]();
                }, a7["addPhysics"]=function() {
                    var ca=c3, a8=this["node"]["getChildByName"]("tower"), a9=a8['getComponent'](K); a9||(a9=a8["addComponent"](K)), M["WORLD"]["insert"](a8["getComponent"](K)), this["timeAddPhysics"]["stop"]();
                }, a7["searchingEnemy"]=function() {
                    var cb=c3; this['_curEnemyArr']["length"]||this["updateSearchEnemy"]();
                }, a7["updateShow"]=function() {
                    var cc=c3; this["active"]();
                }, a7["onSearchEnemyByFrame"]=function() {
                    var cd=c3; this["_enemyBornArr"]=M["ENEMY_CTRL"]["getAllEnemy"](0x19), this["_curEnemyArr"]=[]; for(var a8=this["nEnemyIdx"]+this["nEnemyFrame"], a9=this['nEnemyIdx']; a9<a8; a9++) {
                        if(a9<0x0||a9>=this["_enemyBornArr"]["length"]) {
                            this["nEnemyIdx"]=0x0; break;
                        }var aa=this["_enemyBornArr"][a9], ab=F(aa), ac=aa["getComponent"](P)["isDeadPre"](), ad=aa["getComponent"](P)["isRecycle"]; if(!ab||ac||ad) {
                            if(this['_curEnemyArr']["length"]>=this["_soldierData"]["atk_aoe"])break;
                        }else {
                            if(N['getDistanceHorizontal'](this["node"]["parent"]['children'][0x0], aa)>this["_soldierData"]["atk_range"]) {
                                if(this["_curEnemyArr"]["length"]>=this["_soldierData"]["atk_aoe"])break;
                            }else {
                                if(!this['_curEnemyArr']["length"]) {
                                    this['_curEnemyArr']["push"](aa); break;
                                }if(N["getDistanceHorizontal"](this['_curEnemyArr'][0x0], aa)<this["_soldierData"]["atk_aoe_range"]&&this['_curEnemyArr']["push"](aa), this["_curEnemyArr"]["length"]>=this['_soldierData']["atk_aoe"])break;
                            }
                        }
                    }
                }, a7["updateSearchEnemy"]=function() {
                    var ce=c3; this['isActive']&&this["onSearchEnemyByFrame"]();
                }, a7["updateLookAtEnemy"]=function(a8) {
                    var cf=c3; if(this['_curEnemyArr'][0x0]) {
                        var a9=new G(); if(G["subtract"](a9, this["node"]["worldPosition"], this["_curEnemyArr"][0x0]["worldPosition"]), !a9)return; this["node"]['forward']=this["node"]["forward"]['lerp'](H(-a9['x'], 0x0, -a9['z']), 0x4*a8);
                    }
                }, a7["onWeaponFinish"]=function() {
                    this['playAtk']();
                }, a7["updateAtkEnemy"]=function(a8) {
                    var cg=c3; this["isActive"]&&(this["_curEnemyArr"]["length"]&&!M["GAME_OVER"]?(this['updateLookAtEnemy'](a8), this['soldier']["updateAniState"](S['COMMON_ANI_ATK'], this["_soldierData"]["atk_speed"])):this["soldier"]["updateAniState"](S['COMMON_ANI_IDLE']));
                }, a7["playAtk"]=function() {
                    var ch=c3; this["updateSearchEnemy"](); for(var a8=0x0; a8<this["_curEnemyArr"]["length"]; a8++) {
                        this["_curEnemyArr"][a8]["getComponent"](P)['onDamagePre'](this['_soldierData']["atk"]);
                    }var a9=this["_curEnemyArr"]["slice"](); this["shootArrow"](a9), this["updateSearchEnemy"](), this['_curEnemyArr']["length"]||this["searchingEnemy"]();
                }, a7['shootArrow']=function(a8) {
                    var ci=c3; for(var a9=a8["length"]-0x1; -0x1!=a9; a9--)(!F(a8[a9])||a8[a9]["getComponent"](P)["isDead"]()||a8[a9]["getComponent"](P)["isRecycle"])&&a8["splice"](a9, 0x1); if(a8["length"]) {
                        T['playShotSound'](U["ARCHER_ATK"], 0.3, 0x64); var aa=M['EASY_POOL']["get"](J["TOWER_BOW_ARROW"]); M["Canvas_3d"]["addChild"](aa), aa["active"]=!0x1, aa['worldPosition']=this['bowArrowBorn']["getWorldPosition"](), aa["active"]=!0x0, aa['getComponent'](Q)["init"](this["bowArrowBorn"], a8, this['_soldierData']);
                    }
                }, a6;
            }(I))["prototype"], "towerIndex", [a4],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return 0x0;
                }
            }), a1=k(Z["prototype"], 'bowArrowBorn', [W],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':null
            }), a2=k(Z["prototype"], "bowSocket", [X],  {
                'configurable':!0x0, 'enumerable':!0x0, 'writable':!0x0, 'initializer':function() {
                    return null;
                }
            }), Y=Z))||Y)), B["_RF"]['pop']();
        }
    };
});
