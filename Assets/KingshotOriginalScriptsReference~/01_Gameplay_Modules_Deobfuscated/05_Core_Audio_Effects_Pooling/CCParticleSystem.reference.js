// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CCParticleSystem.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, h, j; return {
        'setters':[function(k) {
            var gG=b; d=k["inheritsLoose"];
        }, function(k) {
            var gH=b; f=k["cclegacy"], g=k['_decorator'], h=k["ParticleSystem"], j=k["Component"];
        }], 'execute':function() {
            var gI=b, k; f["_RF"]["push"]( {
            }, "5e062qTM8xH6IRRDA1krfwB", "CCParticleSystem", void 0x0); var m=g["ccclass"]; g['property'], g["executeInEditMode"], c('CCParticleSystem', m('CCParticleSystem')(k=function(o) {
                var gK=gI; function p() {
                    var gJ=b; for(var u, v=arguments["length"], w=new Array(v), x=0x0; x<v; x++)w[x]=arguments[x]; return(u=o["call"]["apply"](o, [this]['concat'](w))||this)["mParticles"]=[], u['mTimerCall']=void 0x0, u["mIsPlaying"]=!0x1, u;
                }d(p, o); var q=p["prototype"]; return q["onLoad"]=function() {
                    var gL=gK; this["TraversalParticle"](this["node"]);
                }, q["setTimerCall"]=function(u) {
                    this['mTimerCall']=u;
                }, q["getIsPlaying"]=function() {
                    return this['mIsPlaying'];
                }, q["TraversalParticle"]=function(u) {
                    var gM=gK, v=u["getComponent"](h); v&&(v["playOnAwake"]=!0x1, this["mParticles"]["push"](v)); for(var w=0x0; w<u['children']["length"]; ++w) {
                        var x=u["children"][w]; this['TraversalParticle'](x);
                    }
                }, q["Play"]=function(u, v) {
                    var gN=gK, w=this; void 0x0===u&&(u=0x3e8), this['mIsPlaying']=!0x0; for(var x=0x0; x<this["mParticles"]["length"]; ++x) {
                        this["mParticles"][x]["stop"](), this['mParticles'][x]['play']();
                    }if(0x0!=u) {
                        var y=u/0x3e8; this["scheduleOnce"](function() {
                            var gO=gN; w["Stop"]();
                        }, y);
                    }
                }, q["Stop"]=function(u) {
                    var gP=gK; void 0x0===u&&(u=null), this["mIsPlaying"]=!0x1; for(var v=0x0; v<this['mParticles']["length"]; ++v)this["mParticles"][v]["stop"](); this['mTimerCall']&&this["mTimerCall"](), u&&u();
                }, p;
            }(j))||k), f["_RF"]['pop']();
        }
    };
});
