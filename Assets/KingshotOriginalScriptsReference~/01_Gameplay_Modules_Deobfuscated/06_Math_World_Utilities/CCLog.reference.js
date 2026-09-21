// Reference-only module extracted from the original Cocos Creator playable.
// Do not compile or copy directly into Unity C#.

System["register"]('chunks:///_virtual/CCLog.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(c) {
    var d, f; return {
        'setters':[function(g) {
            d=g['createClass'];
        }, function(g) {
            var gr=b; f=g["cclegacy"];
        }], 'execute':function() {
            var gs=b; f["_RF"]["push"]( {
            }, "aa3d5N8okFPQ6ta5ct2Gix4", "CCLog", void 0x0), c("default", new(function() {
                var gu=gs; function g() {
                    var gt=b; this["_enabled"]=!0x0, this["_isDebug"]=!0x0, this["_filterTags"]=[], this["_isDebug"]=!window["super_html_channel"]||'common'==window["super_html_channel"];
                }var h=g["prototype"]; return h["setEnable"]=function(i) {
                    var gv=gu; this["_enabled"]=i;
                }, h["registerTags"]=function() {
                    var gw=gu; for(var i=arguments["length"], j=new Array(i), k=0x0; k<i; k++)j[k]=arguments[k]; this['_filterTags']=this["_filterTags"]['concat'](j);
                }, h['clearTags']=function() {
                    var gx=gu; this["_filterTags"]=[];
                }, h["logTable"]=function(i, j) {
                    var gy=gu, k; if((0x0==this["_filterTags"]['length']||-0x1!=this["_filterTags"]['indexOf'](i))&&this["isConsole"]) {
                        console["log"]('#==========[%s]==========#', i); for(var l=arguments['length'], m=new Array(l>0x2?l-0x2:0x0), p=0x2; p<l; p++)m[p-0x2]=arguments[p]; (k=console)['log']["apply"](k, [j]['concat'](m));
                    }
                }, h["warnTable"]=function(i, j) {
                    var gz=gu, k; if((0x0==this["_filterTags"]["length"]||-0x1!=this['_filterTags']["indexOf"](i))&&this["isConsole"]) {
                        console["log"]("#==========[%s]==========#", i); for(var l=arguments["length"], m=new Array(l>0x2?l-0x2:0x0), p=0x2; p<l; p++)m[p-0x2]=arguments[p]; (k=console)["warn"]["apply"](k, [j]["concat"](m));
                    }
                }, h["errorTable"]=function(i, j) {
                    var gA=gu, k; if((0x0==this["_filterTags"]['length']||-0x1!=this["_filterTags"]['indexOf'](i))&&this["isConsole"]) {
                        console['log']("#==========[%s]==========#", i); for(var l=arguments["length"], m=new Array(l>0x2?l-0x2:0x0), p=0x2; p<l; p++)m[p-0x2]=arguments[p]; (k=console)["error"]["apply"](k, [j]['concat'](m));
                    }
                }, h["log"]=function(i) {
                    var gB=gu, j; if(this["isConsole"]) {
                        for(var k=arguments["length"], l=new Array(k>0x1?k-0x1:0x0), m=0x1; m<k; m++)l[m-0x1]=arguments[m]; (j=console)["log"]["apply"](j, [i]["concat"](l));
                    }
                }, h["warn"]=function(i) {
                    var gC=gu, j; if(this["isConsole"]) {
                        for(var k=arguments["length"], l=new Array(k>0x1?k-0x1:0x0), m=0x1; m<k; m++)l[m-0x1]=arguments[m]; (j=console)["warn"]["apply"](j, [i]["concat"](l));
                    }
                }, h["error"]=function(i) {
                    var gD=gu, j; if(this["isConsole"]) {
                        for(var k=arguments["length"], l=new Array(k>0x1?k-0x1:0x0), m=0x1; m<k; m++)l[m-0x1]=arguments[m]; (j=console)["error"]["apply"](j, [i]['concat'](l));
                    }
                }, d(g, [ {
                    'key':'isDebug', 'get':function() {
                        var gE=gu; return this["_isDebug"];
                    }
                },  {
                    'key':"isEnable", 'get':function() {
                        return this['_enabled'];
                    }
                },  {
                    'key':"isConsole", 'get':function() {
                        var gF=gu; return this["_isDebug"]&&this['_enabled'];
                    }
                }]), g;
            }())()), f["_RF"]['pop']();
        }
    };
});
