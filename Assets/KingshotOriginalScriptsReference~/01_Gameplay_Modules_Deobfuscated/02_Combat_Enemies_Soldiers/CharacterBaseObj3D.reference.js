// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/CharacterBaseObj3D.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc', "./Object3D.ts"], function(d) {
    var f, g, h, i; return {
        'setters':[function(j) {
            var h7=b; f=j["inheritsLoose"];
        }, function(j) {
            var h8=b; g=j['cclegacy'], h=j["_decorator"];
        }, function(j) {
            var h9=b; i=j["Object3D"];
        }], 'execute':function() {
            var ha=b, j; g['_RF']["push"]( {
            }, '69934h0YZ1BP6r5fcmQ2siH', "CharacterBaseObj3D", void 0x0); var k=h["ccclass"]; h['property'], d("CharacterBaseObj3D", k("CharacterBaseObj3D")(j=function(l) {
                var hc=ha; function m() {
                    var hb=b; for(var q, s=arguments["length"], u=new Array(s), v=0x0; v<s; v++)u[v]=arguments[v]; return(q=l['call']["apply"](l, [this]["concat"](u))||this)["atkStarter"]=null, q['hp']=0x64, q["hpPre"]=0x64, q["hpMax"]=0x64, q;
                }f(m, l); var p=m['prototype']; return p["start"]=function() {
                }, p['update']=function(q) {
                }, p["die"]=function() {
                }, m;
            }(i))||j), g["_RF"]['pop']();
        }
    };
});
