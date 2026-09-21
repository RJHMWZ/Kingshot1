// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]("chunks:///_virtual/JoyStickUI.ts", ["./rollupPluginModLoBabelHelpers.js", 'cc'], function(c) {
    var d, f, g, j, k; return {
        'setters':[function(l) {
            d=l['createClass'];
        }, function(l) {
            var qB=b; f=l['cclegacy'], g=l["Tween"], j=l['v3'], k=l["Vec3"];
        }], 'execute':function() {
            var qC=b; f["_RF"]["push"]( {
            }, "578a9smbsFPMacvj/HS+Mf/", "JoyStickUI", void 0x0), c("JoyStickUI", function() {
                var qE=qC; function l(o, p) {
                    var qD=b; this["mStickChecker"]=void 0x0, this["mCtrl"]=void 0x0, this['mCtrlBg']=void 0x0, this['mCtrlPointer']=void 0x0, this["nAngle"]=0x0, this["mStickChecker"]=o, this['mCtrl']=p, this["mCtrlBg"]=p["node"]["getChildByName"]('bg'), this["mCtrlPointer"]=p["node"]['getChildByName']("pointer");
                }var m=l["prototype"]; return m["initJoyStickUI"]=function() {
                    var qF=qE; this["mCtrl"]["node"]['active']=!0x1;
                }, m["onShowStickUI"]=function() {
                    var qG=qE; this["mCtrl"]["node"]['active']=!0x0;
                }, m["onHideStickUI"]=function() {
                    var qH=qE; this["mCtrl"]['node']['active']=!0x1;
                }, m['onUpdateStickUI']=function(o, p) {
                    var qI=qE; o-=this["halfCheckerWidth"], p-=this["halfCheckerHeight"], g["stopAllByTarget"](this["mCtrl"]["node"]), this["mCtrl"]["node"]['setPosition'](j(o, p, 0x0)), this['mCtrlPointer']["setPosition"](j(0x0, 0x0, 0x0));
                }, m["onGetDistance"]=function(o, p) {
                    var qJ=qE, q=this['mCtrl']['node']["position"]; return o-=this['halfCheckerWidth'], p-=this["halfCheckerHeight"], k["distance"](q, j(o, p, q['z']));
                }, m["onUpdatePointer"]=function(p, q) {
                    var qK=qE, s=this["mCtrl"]['node']['position']; p-=this['halfCheckerWidth']+s['x'], q-=this["halfCheckerHeight"]+s['y']; var u=Math["sqrt"](p*p+q*q), v=p/u, w=q/u; u>this['halfCtrlWidth']&&(p=v*(u=this["halfCtrlWidth"]), q=w*u), this["mCtrlPointer"]["setPosition"](j(p, q, 0x0)), this["setAngle"](p, q);
                }, m["getRadian"]=function(o, p) {
                    var q=o, s=p; return Math['atan2'](s, q);
                }, m["setAngle"]=function(o, p) {
                    var qL=qE, q=this["getRadian"](o, p)*(0xb4/Math['PI']); this['nAngle']=this["normalizeAngle360"](q);
                }, m["normalizeAngle360"]=function(o) {
                    return(o%=0x168)<0x0&&(o+=0x168), o;
                }, m["getAngle"]=function() {
                    return this['nAngle'];
                }, d(l, [ {
                    'key':"halfCheckerWidth", 'get':function() {
                        return this['mStickChecker']['width']/0x2;
                    }
                },  {
                    'key':"halfCheckerHeight", 'get':function() {
                        var qM=qE; return this["mStickChecker"]['height']/0x2;
                    }
                },  {
                    'key':"halfCtrlWidth", 'get':function() {
                        var qN=qE; return this["mCtrl"]["width"]/0x2;
                    }
                },  {
                    'key':"halfCtrlHeight", 'get':function() {
                        var qO=qE; return this["mCtrl"]['height']/0x2;
                    }
                }]), l;
            }()), f["_RF"]['pop']();
        }
    };
});
