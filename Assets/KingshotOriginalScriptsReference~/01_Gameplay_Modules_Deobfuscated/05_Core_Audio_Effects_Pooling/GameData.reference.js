// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/GameData.ts", ['cc'], function(c) {
    var d; return {
        'setters':[function(f) {
            var lj=b; d=f["cclegacy"];
        }], 'execute':function() {
            var lk=b; d["_RF"]['push']( {
            }, "63275y+eMRPX7wb1UXs9OjH", "GameData", void 0x0), c("default", new function() {
                var ll=lk; this["game_unit_data"]= {
                    'coins_unit':0x1
                }, this["game_limit_data"]= {
                    'max_coins':0x3c, 'enemy_end_time':0x4, 'drop_area_max':0x14, 'barrack_delay_jump':4.7
                }, this["camera_data"]= {
                    'camera_vert_ortho':0x19, 'camera_horizon_ortho':0x14
                }, this["door_data"]= {
                    'hp_1':0xbe, 'hp_2':0x1068, 'hp_3':0x1068, 'hp_4':0x5dc
                }, this["player_data"]= {
                    'coins':0x3, 'coins_mag_range_min':0x0, 'coins_mag_range_max':0x11, 'coins_suck_speed':0.45, 'hp':0x64, 'move_speed':0xc, 'move_speed_a':0.5, 'move_stop_time':0.2, 'atk':0x5, 'atk_range':0x12, 'atk_rotate_speed':0.1, 'atk_trajectory_speed':0x64, 'atk_back_dis':0x2, 'atk_cd':0.25, 'drop_area_sub':0.008, 'drop_area_time':0.24, 'carry_coin_max':0x64, 'atk_speed':0x1
                }, this["castle_data"]= {
                    'hp':0x2fa8
                }, this["gold_mine_data"]= {
                    'init_coin_num':0x0, 'production_num_limit':0x12c, 'get_coin_cd':0.2, 'gold_mine_data_1': {
                        'production_time':1.5, 'production_num':0x6, 'coin_fly_time':0.3, 'worker_mining_speed':0x2, 'worker_mining_cd':0x2, 'worker_mining_num':0x6, 'coin_fly_cd':0.1
                    }, 'gold_mine_data_2': {
                        'production_time':1.5, 'production_num':0x6, 'coin_fly_time':0.3, 'worker_mining_speed':1.2, 'worker_mining_cd':0.5, 'worker_mining_num':0x6, 'coin_fly_cd':0.1
                    }, 'gold_mine_data_3': {
                        'production_time':0.5, 'production_num':0x18, 'coin_fly_time':0.2, 'worker_mining_speed':2.4, 'worker_mining_cd':0.2, 'worker_mining_num':0x18, 'coin_fly_cd':0.1
                    }
                }, this["enemy_queue_data"]= {
                    'queue_1':[ {
                        'queueIdx':0x1, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0xa, 'enemyDataIndex':0x1, 'pathIndex':0x3, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x1, 'startTime':1.2, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x1, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x1, 'startTime':1.2, 'gapTime':0x6, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x2, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x1, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x2, 'startTime':0x0, 'gapTime':0x6, 'enemyType':0x2, 'enemyCount':0x4, 'enemyDataIndex':0x8, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x2, 'startTime':0x1e, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x1, 'group': {
                            'num':0x2, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x3, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x2, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x3, 'startTime':0x0, 'gapTime':0x6, 'enemyType':0x2, 'enemyCount':0x4, 'enemyDataIndex':0x8, 'pathIndex':0x2
                    },  {
                        'queueIdx':0x3, 'startTime':0x1e, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x2, 'group': {
                            'num':0x2, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x4, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x1, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x4, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x1, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x4, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x2, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x4, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x2, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x9, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x1, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x9, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x1, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x9, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x2, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x9, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x8, 'pathIndex':0x2, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x5, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x1, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x5, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x9, 'pathIndex':0x1, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x5, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x1, 'pathIndex':0x2, 'group': {
                            'num':0x5, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x5, 'startTime':0x0, 'gapTime':0x3, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0xa, 'pathIndex':0x2, 'group': {
                            'num':0x3, 'gapTime':0.36
                        }
                    },  {
                        'queueIdx':0x6, 'startTime':0x0, 'gapTime':0.2, 'enemyType':0x3, 'enemyCount':0x2710, 'enemyDataIndex':0x4, 'pathIndex':0x5
                    },  {
                        'queueIdx':0x7, 'startTime':0x0, 'gapTime':0.2, 'enemyType':0x3, 'enemyCount':0x2710, 'enemyDataIndex':0x4, 'pathIndex':0x6
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':0.36, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x2, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x8, 'startTime':0x1, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x8, 'startTime':0x2, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':0.36, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x2, 'pathIndex':0x2
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0x8, 'startTime':0x1, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0x8, 'startTime':0x2, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0x8, 'startTime':0x1, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0x8, 'startTime':0x2, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0x8, 'startTime':0x0, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    },  {
                        'queueIdx':0x8, 'startTime':0x1, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    },  {
                        'queueIdx':0x8, 'startTime':0x2, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':0.36, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x2, 'pathIndex':0x1
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0xa, 'startTime':0x1, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0xa, 'startTime':0x2, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x1
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':0.36, 'enemyType':0x1, 'enemyCount':0x2710, 'enemyDataIndex':0x2, 'pathIndex':0x2
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0xa, 'startTime':0x1, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0xa, 'startTime':0x2, 'gapTime':4.2, 'enemyType':0x2, 'enemyCount':0x2710, 'enemyDataIndex':0x7, 'pathIndex':0x2
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0xa, 'startTime':0x1, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0xa, 'startTime':0x2, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x3
                    },  {
                        'queueIdx':0xa, 'startTime':0x0, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    },  {
                        'queueIdx':0xa, 'startTime':0x1, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    },  {
                        'queueIdx':0xa, 'startTime':0x2, 'gapTime':0x0, 'enemyType':0x2, 'enemyCount':0x1, 'enemyDataIndex':0x7, 'pathIndex':0x4
                    }]
                }, this["enemy_init_data"]= {
                    'hp':0x5, 'move_speed':0x8, 'atk':0x1e, 'coins':[0x1, 0x1]
                }, this["enemy_init_data_2"]= {
                    'hp':0x5, 'move_speed':0x8, 'atk':0x1e, 'coins':[0x1, 0x1]
                }, this["enemy_data"]=[ {
                    'hp':0x5, 'move_speed':0x8, 'atk':0x1e, 'coins':[0x0, 0x2]
                },  {
                    'hp':0x5, 'move_speed':5.5, 'atk':0x1e, 'coins':[0x0, 0x2]
                },  {
                    'hp':0x28, 'move_speed':4.5, 'atk':0xc8, 'coins':[0x1, 0x1]
                },  {
                    'hp':0x64, 'move_speed':14.5, 'atk':0x190, 'coins':[0x1, 0x1]
                },  {
                    'hp':0xa0, 'move_speed':6.5, 'atk':0xc8, 'coins':[0x1, 0x1]
                },  {
                    'hp':0xb4, 'move_speed':6.5, 'atk':0xc8, 'coins':[0x1, 0x1]
                },  {
                    'hp':0x190, 'move_speed':6.5, 'atk':0x12c, 'coins':[0x1, 0x1]
                },  {
                    'hp':0x28, 'move_speed':0x8, 'atk':0x28, 'coins':[0x1, 0x1]
                },  {
                    'hp':0x50, 'move_speed':0x8, 'atk':0x64, 'coins':[0x1, 0x1]
                },  {
                    'hp':0x78, 'move_speed':0x8, 'atk':0x50, 'coins':[0x1, 0x1]
                }], this["queue_data"]=[[ {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':-0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x0
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x0
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x0
                }], [ {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':-0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x1
                }], [ {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':-0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x2
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x2
                },  {
                    'soldierType':0x5, 'dataIndex':0x0, 'queueIdx':0x2
                }], [ {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':-0x1
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x3
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x3
                },  {
                    'soldierType':0x5, 'dataIndex':0x2, 'queueIdx':0x3
                }]], this['infantry_data']=[ {
                    'hp':0xa, 'move_speed':0xd, 'atk':0xa, 'atk_speed':0x4, 'atk_range':0x12, 'atk_trajectory_speed':0x64, 'atk_aoe':0x1, 'atk_aoe_range':0x3, 'atk_back_dis':0x2
                },  {
                    'hp':0xa, 'move_speed':0xd, 'atk':0xa, 'atk_speed':0x4, 'atk_range':0xa, 'atk_trajectory_speed':0x64, 'atk_aoe':0x1, 'atk_aoe_range':0x3, 'atk_back_dis':0x2
                },  {
                    'hp':0xa, 'move_speed':0xd, 'atk':0xa, 'atk_speed':4.2, 'atk_range':0x12, 'atk_trajectory_speed':0x140, 'atk_aoe':0x2, 'atk_aoe_range':0x3, 'atk_back_dis':0x2
                },  {
                    'hp':0xa, 'move_speed':0xd, 'atk':0xa, 'atk_speed':4.2, 'atk_range':0x12, 'atk_trajectory_speed':0x140, 'atk_aoe':0x2, 'atk_aoe_range':0x3, 'atk_back_dis':0x2
                }], this["area_data"]= {
                    'area_show':[0x1], 'area_data_arr':[ {
                        'demand':0xa, 'unlock_area':[0x2], 'unlock_tower':[ {
                            'towerIdx':0x1, 'archerNum':0x1, 'isBarracks':!0x1
                        }], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x2, 0x3], 'lock_queue':[0x1], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0xf, 'unlock_area':[0x3, 0x6, 0x7], 'unlock_tower':[ {
                            'towerIdx':0x2, 'archerNum':0x1, 'isBarracks':!0x1
                        }], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[0x0], 'unlock_fense':[0x1, 0x2, 0x6], 'unlock_gold_mine':[], 'bTransfer':!0x1, 'camera_height_add':0x3
                    },  {
                        'demand':0xa, 'unlock_area':[0x4], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[0x2], 'unlock_fense':[0x3], 'unlock_gold_mine':[0x2], 'bTransfer':!0x1, 'camera_height_add':0x2
                    },  {
                        'demand':0xa, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[0x1], 'bTransfer':!0x1
                    },  {
                    },  {
                        'demand':0x2d, 'unlock_area':[], 'unlock_tower':[ {
                            'towerIdx':0x3, 'archerNum':0x1, 'isBarracks':!0x1
                        }], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x4], 'lock_queue':[0x2, 0x3, 0x9], 'lock_fense':[], 'unlock_fense':[0x7], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0x2d, 'unlock_area':[], 'unlock_tower':[ {
                            'towerIdx':0x4, 'archerNum':0x1, 'isBarracks':!0x1
                        }], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x9], 'lock_queue':[0x2, 0x3, 0x4], 'lock_fense':[], 'unlock_fense':[0x8], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0x96, 'unlock_area':[0x9], 'unlock_tower':[ {
                            'towerIdx':0x1, 'archerNum':0x2, 'isBarracks':!0x0
                        },  {
                            'towerIdx':0x2, 'archerNum':0x2, 'isBarracks':!0x0
                        },  {
                            'towerIdx':0x3, 'archerNum':0x2, 'isBarracks':!0x0
                        },  {
                            'towerIdx':0x4, 'archerNum':0x2, 'isBarracks':!0x0
                        }], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x5], 'lock_queue':[0x4, 0x9], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0x2d, 'unlock_area':[0x11, 0x12], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[0x2, 0x3, 0x6], 'unlock_fense':[0x5], 'unlock_gold_mine':[], 'bTransfer':!0x1, 'camera_height_add':0x3
                    },  {
                        'demand':0x145, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0x5f, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x7, 0x8], 'lock_queue':[0xa], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1, 'bBarrack':[0x1]
                    },  {
                        'demand':0x5f, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[0x6, 0xa], 'lock_queue':[0x8], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1, 'bBarrack':[0x2]
                    },  {
                        'demand':0x78, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[0x3], 'bTransfer':!0x1, 'isExpand':!0x0
                    },  {
                        'demand':0xff, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    },  {
                        'demand':0xc8, 'unlock_area':[], 'unlock_tower':[], 'unlock_road':[], 'lock_road':[], 'unlock_queue':[], 'lock_queue':[], 'lock_fense':[], 'unlock_fense':[], 'unlock_gold_mine':[], 'bTransfer':!0x1
                    }]
                }, this["area_limit_data"]= {
                    'area_item_drop_limit':0x1e
                };
            }()), d["_RF"]['pop']();
        }
    };
});
