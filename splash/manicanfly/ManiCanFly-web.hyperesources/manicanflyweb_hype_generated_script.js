//	HYPE.documents["ManiCanFly-web"]

(function(){(function k(){var h="ManiCanFly-web.hyperesources",e="ManiCanFly-web",d="manicanflyweb_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("manicanflyweb_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&null==window.HYPE_344)null==window.HYPE_dtl_344?(window.HYPE_dtl_344=[],window.HYPE_dtl_344.push(k),e=document.getElementsByTagName("head")[0],d=document.createElement("script"),
b=navigator.userAgent.match(/MSIE (\d+\.\d+)/),b=parseFloat(b&&b[1])||null,d.type="text/javascript",d.src=h+"/"+(null!=b&&10>b?"HYPE.ie.js":"HYPE.js")+"?hype_version=344",e.appendChild(d)):window.HYPE_dtl_344.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=
d;a=!0;break}if(!1==a)return}for(var a=new HYPE_344,c=[],c=[{name:"toggleFilghtPack",source:"function(hypeDocument, element, event) {\n\tvar flightPackTimelines = ['wings','rocket'];\n\tvar timelineDirection;\n\tvar timelineCurrentTime;\n\tvar timelineIsTarget;\n\t\n\tfor(index in flightPackTimelines){\n\t\ttimeline = flightPackTimelines[index];\n\t\ttimelineDirection = null;\n\t\ttimelineIsTarget = element.id.indexOf(timeline) >= 0 ? true : false;\n\t\ttimelineCurrentTime = hypeDocument.currentTimeInTimelineNamed(timeline);\n\t\t\n\t\tif (timelineIsTarget){ \n\t\t\ttimelineDirection = timelineCurrentTime >= 1 ? hypeDocument.kDirectionReverse : hypeDocument.kDirectionForward;\n\t\t}else if(timelineCurrentTime != 0){\n\t\t\ttimelineDirection = timelineCurrentTime >= 1 ? hypeDocument.kDirectionForward : hypeDocument.kDirectionReverse;\n\t\t}\n\t\t\n\t\tif (timelineDirection != null){\n\t\t\thypeDocument.continueTimelineNamed(timeline, timelineDirection);\n\t\t}\n\t\t// console.log(\"HYPE timeline : '\"+timeline+\"' - time:\"+timelineCurrentTime+\"s - isTarget:\"+timelineIsTarget+\" - direction:\"+timelineDirection);\n\t}\n\t\n}",identifier:"109"},{name:"relayout",source:"function(hypeDocument, element, event) {\thypeDocument.relayoutIfNecessary()\n}",identifier:"111"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({R:5,S:0,aI:0,T:0,bG:3,aJ:0,bH:2,aK:0,X:0,bI:3,aL:0,Y:1,bJ:3,bK:3,bL:3,a:0,b:0,c:0,d:0,aS:0,e:3,bQ:0,aT:0,f:2,g:5,bR:2,aU:0,bS:"NumberValueTransformer",aV:0,aW:3,A:5,l:2,aX:0,B:5,m:5,C:5,aY:2,n:5,D:5,E:0,aZ:0,G:5,t:0,bA:5,RotationAngle:2,tX:4,bB:0,M:0,N:0,bC:0,tY:4,O:0,P:0,Q:0});a.z_b({"3":{n:"ManiCanFly-bg.jpg",g:"122",t:"@1x"},"4":{n:"ManiCanFly-mani-with-rocket.png",g:"101",t:"@1x"},"0":{n:"ManiCanFly-tree.png",g:"84",t:"@1x"},"5":{n:"ManiCanFly-mani-with-wings.png",g:"102",t:"@1x"},"1":{n:"ManiCanFly-wings-button.png",g:"46",t:"@1x"},"6":{n:"ManiCanFly-mani.png",g:"4",t:"@1x"},"2":{n:"ManiCanFly-rocket-button.png",g:"44",t:"@1x"}});a.z_c([]);a.z_d([{x:0,p:"600px",c:"#0386FC",A:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false}]},v:{"103":{h:"102",p:"no-repeat",tY:"0%",a:-415,q:"100% 100%",bS:"119",j:"absolute",r:"inline",c:829,k:"div",z:"22",d:410,bF:"48",x:"visible",e:"0.000000",b:0,tX:"0%"},"80":{aJ:"50%",S:0,c:38,bS:"119",d:38,I:"None",J:"None",K:"None",g:"#DDEEFF",L:"None",M:0,bF:"82",aI:"50%",A:"#A0A0A0",j:"absolute",N:0,k:"div",O:0,x:"visible",B:"#A0A0A0",Q:20,z:"2",D:"#A0A0A0",R:"#5E5E5E",P:0,C:"#A0A0A0",aK:"50%",a:-64,aL:"50%",T:0,b:-2},"117":{x:"visible",i:"hype-manicanfly-buttongroup",a:0,bS:"79",j:"absolute",r:"inline",c:1140,k:"div",z:"30",d:161,b:389,e:"0.000000",bD:"none"},"79":{b:-76,z:"3",K:"None",c:233,L:"None",d:83,M:0,N:0,bS:"119",O:0,g:"#DDEEFF",P:0,bF:"82",Q:20,R:"#5E5E5E",j:"absolute",S:0,aI:"50%",k:"div",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#A0A0A0",Y:"22px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",F:"center",w:"<div><br></div>Yes I really am hanging from<div>&nbsp;this tree on a doggy leash.</div>",x:"visible",I:"None",a:-197,J:"None"},"123":{x:"visible",tY:"0%",i:"hype-manicanfly-manigroup",a:0,j:"absolute",bS:"119",c:1140,k:"div",z:"11",d:550,b:0,tX:"0%"},"85":{w:"",h:"84",p:"no-repeat",a:0,bS:"34",q:"100% 100%",x:"visible",j:"absolute",r:"inline",c:1140,k:"div",z:"9",d:288,i:"hype-manicanfly-tree",b:0,e:"0.000000"},"81":{aJ:"50%",S:0,c:24,bS:"119",d:24,r:"inline",I:"None",J:"None",K:"None",g:"#DDEEFF",L:"None",M:0,bF:"82",aI:"50%",A:"#A0A0A0",j:"absolute",N:0,k:"div",O:0,x:"visible",B:"#A0A0A0",Q:20,z:"1",D:"#A0A0A0",R:"#5E5E5E",P:0,C:"#A0A0A0",aK:"50%",a:-37,aL:"50%",T:0,b:25},"121":{p:"no-repeat",bJ:"1.000000",c:153,q:"100% 100%",bS:"94",d:105,r:"inline",bK:"1.000000",e:"0.800000",bL:"0.000000",bD:"none",t:0,f:"0deg",aX:0,aP:"pointer",h:"44",aY:"0deg",w:"",bF:"117",j:"absolute",aA:{a:[{p:4,h:"109"}]},x:"visible",k:"div",bG:"0.000000",i:"manicanfly-rocket-btn",z:"4",aC:{a:[{b:"116",p:9,i:0}]},bI:"0.000000",a:11,aD:{a:[{b:"116",p:9,i:1}]},b:51},"48":{tY:"100%",b:-495,c:2,bJ:"1.000000",bS:"181",d:2,r:"inline",bK:"1.000000",e:"0.000000",bL:"0.000000",f:"0deg",aY:"0deg",bF:"123",i:"hype-manicanfly-maniswing",j:"absolute",x:"visible",k:"div",bG:"0.000000",z:"1",bH:"0deg",tX:"100%",bI:"1.000000",a:615,bR:"0deg"},"104":{h:"101",p:"no-repeat",tY:"0%",a:-415,q:"100% 100%",bS:"119",j:"absolute",r:"inline",c:829,k:"div",z:"21",d:410,bF:"48",x:"visible",e:"0.000000",b:0,tX:"0%"},"82":{tY:"0%",a:-144,bS:"119",x:"visible",j:"absolute",bF:"48",aA:{a:[{b:"83",p:8,z:false}]},k:"div",c:104,d:112,z:"23",i:"manicanfly-speech-btn",aP:"pointer",e:"0.000000",b:241,tX:"0%"},"107":{p:"no-repeat",bJ:"0.000000",c:162,q:"100% 100%",bS:"91",d:105,r:"inline",bK:"1.000000",e:"0.000000",bL:"3.747971",bD:"none",t:0,f:"0deg",g:"",aX:0,aP:"auto",h:"46",aY:"0deg",w:"",bF:"117",j:"absolute",x:"visible",k:"div",bG:"0.000000",Q:0,z:"1",R:"#000000",bI:"0.000000",a:970,S:0,T:0,b:51},"105":{w:"",h:"4",p:"no-repeat",tY:"0%",a:-415,q:"100% 100%",bS:"119",j:"absolute",r:"inline",c:829,k:"div",z:"20",d:410,bF:"48",x:"visible",e:"1.000000",b:0,tX:"0%"},"52":{p:"no-repeat",bJ:"0.000000",c:153,q:"100% 100%",bS:"94",d:105,r:"inline",bK:"1.000000",e:"0.000000",bL:"3.747971",bD:"none",t:0,f:"0deg",aX:0,aP:"auto",h:"44",aY:"0deg",w:"",bF:"117",j:"absolute",x:"visible",k:"div",bG:"0.000000",z:"3",bI:"0.000000",a:11,b:51},"120":{b:51,z:"2",aD:{a:[{b:"116",p:9,i:2}]},c:162,d:105,e:"0.800000",bD:"none",f:"0deg",bS:"91",g:"",h:"46",bF:"117",Q:0,i:"manicanfly-wings-btn",R:"#000000",j:"absolute",bG:"0.000000",S:0,k:"div",T:0,aX:0,bI:"0.000000",aY:"0deg",bJ:"1.000000",p:"no-repeat",bK:"1.000000",q:"100% 100%",r:"inline",bL:"0.000000",t:0,aA:{a:[{p:4,h:"109"}]},aP:"pointer",w:"",x:"visible",aC:{a:[{b:"116",p:9,i:0}]},a:970}},n:"splash",T:{"77_pressed":{i:"77_pressed",n:"77_pressed",z:0,a:[],f:30},"24_pressed":{i:"24_pressed",n:"24_pressed",z:0,a:[],f:30},"59_pressed":{i:"59_pressed",n:"59_pressed",z:0,a:[],f:30},"65_pressed":{i:"65_pressed",n:"65_pressed",z:0,a:[],f:30},"75_pressed":{i:"75_pressed",n:"75_pressed",z:0,a:[],f:30},"106":{i:"106",n:"Mani Swing",z:30.01,a:[{f:"4",y:0,z:2,i:"f",e:"-5deg",r:1,s:"0deg",o:"48"},{f:"4",y:0,z:16,i:"aY",e:"-10deg",r:1,s:"0deg",o:"48"},{f:"2",p:2,y:0,z:30.01,i:"ActionHandler",e:{a:[{b:"106",p:9,i:0}]},s:{a:[{b:"106",p:8,z:false}]},o:"106"},{f:"2",y:2,z:5.15,i:"f",e:"10deg",s:"-5deg",o:"48"},{f:"2",y:7.15,z:8.15,i:"f",e:"-10deg",s:"10deg",o:"48"},{f:"2",y:16,z:14,i:"aY",e:"0deg",s:"-10deg",o:"48"},{f:"2",y:16,z:9,i:"f",e:"10deg",s:"-10deg",o:"48"},{f:"2",y:25,z:5,i:"f",e:"0deg",s:"10deg",o:"48"},{y:30,i:"aY",s:"0deg",z:0,o:"48",f:"1"},{y:30,i:"f",s:"0deg",z:0,o:"48",f:"1"},{f:"2",p:2,y:30.01,z:0,i:"ActionHandler",s:{a:[{b:"106",p:9,i:0}]},o:"106"}],f:30},"54":{i:"54",n:"wings",z:2,a:[{f:"2",y:0,z:1,i:"e",e:"1.000000",r:1,s:"-1.000000",o:"103"},{f:"2",p:2,y:0,z:1,i:"ActionHandler",e:{a:[{b:"54",p:7}]},s:{a:[{b:"54",p:7}]},o:"54"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",r:1,s:"0.000000",o:"120"},{f:"2",y:0,z:1,i:"e",e:"1.300000",r:1,s:"0.800000",o:"120"},{f:"2",p:2,y:1,z:1,i:"ActionHandler",e:{a:[{b:"54",p:9,i:0},{b:"54",p:7}]},s:{a:[{b:"54",p:7}]},o:"54"},{f:"2",y:1,z:1,i:"bI",e:"0.000000",s:"1.000000",o:"120"},{f:"2",y:1,z:1,i:"e",e:"0.000000",s:"1.000000",o:"103"},{f:"2",y:1,z:1,i:"e",e:"0.800000",s:"1.300000",o:"120"},{f:"2",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{b:"54",p:9,i:0}]},o:"54"},{y:2,i:"bI",s:"0.000000",z:0,o:"120",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"103",f:"2"},{y:2,i:"e",s:"0.800000",z:0,o:"120",f:"2"}],f:30},"25_pressed":{i:"25_pressed",n:"25_pressed",z:0,a:[],f:30},"74_pressed":{i:"74_pressed",n:"74_pressed",z:0,a:[],f:30},"55":{i:"55",n:"rocket",z:2,a:[{f:"4",y:0,z:1,i:"e",e:"1.000000",r:1,s:"-1.000000",o:"104"},{f:"2",p:2,y:0,z:1,i:"ActionHandler",e:{a:[{b:"55",p:7}]},s:{a:[{b:"55",p:7}]},o:"55"},{f:"2",y:0,z:1,i:"bI",e:"3.419846",r:1,s:"0.000000",o:"121"},{f:"2",y:0,z:1,i:"e",e:"1.300000",r:1,s:"0.800000",o:"121"},{f:"2",p:2,y:1,z:1,i:"ActionHandler",e:{a:[{b:"55",p:9,i:0},{b:"55",p:7}]},s:{a:[{b:"55",p:7}]},o:"55"},{f:"2",y:1,z:1,i:"bI",e:"0.000000",s:"3.419846",o:"121"},{f:"2",y:1,z:1,i:"e",e:"0.000000",s:"1.000000",o:"104"},{f:"2",y:1,z:1,i:"e",e:"0.800000",s:"1.300000",o:"121"},{f:"2",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{b:"55",p:9,i:0}]},o:"55"},{y:2,i:"bI",s:"0.000000",z:0,o:"121",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"104",f:"2"},{y:2,i:"e",s:"0.800000",z:0,o:"121",f:"2"}],f:30},"88_pressed":{i:"88_pressed",n:"88_pressed",z:0,a:[],f:30},"56_pressed":{i:"56_pressed",n:"56_pressed",z:0,a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:30,a:[{f:"2",y:0,z:1,i:"e",e:"1.000000",s:"0.000000",o:"85"},{f:"2",y:0.22,z:0.08,i:"e",e:"1.000000",s:"0.000000",o:"48"},{f:"3",y:1,z:0.23,i:"b",e:95,s:-495,o:"48"},{y:1,i:"e",s:"1.000000",z:0,o:"48",f:"0"},{y:1,i:"e",s:"1.000000",z:0,o:"85",f:"2"},{f:"5",y:1.23,z:0.04,i:"b",e:73,s:95,o:"48"},{f:"5",y:1.23,z:0.07,i:"e",e:"1.000000",s:"0.000000",o:"117"},{f:"5",y:1.27,z:0.03,i:"b",e:95,s:73,o:"48"},{f:"2",p:2,y:2,z:28,i:"ActionHandler",e:{a:[]},s:{a:[{b:"106",p:3,z:false},{b:"54",p:3,z:false},{b:"55",p:3,z:false}]},o:"kTimelineDefaultIdentifier"},{y:2,i:"b",s:95,z:0,o:"48",f:"5"},{y:2,i:"e",s:"1.000000",z:0,o:"117",f:"5"},{f:"3",p:2,y:30,z:0,i:"ActionHandler",s:{a:[]},o:"kTimelineDefaultIdentifier"}],f:30},"83":{i:"83",n:"Speech Bubble",z:5.15,a:[{f:"1",y:0,z:0.15,i:"e",e:"1.000000",r:1,s:"-1.000000",o:"82"},{f:"1",y:0.15,z:4.15,i:"e",e:"1.000000",s:"1.000000",o:"82"},{f:"1",y:5,z:0.15,i:"e",e:"-1.000000",s:"1.000000",o:"82"},{y:5.15,i:"e",s:"-1.000000",z:0,o:"82",f:"1"}],f:30},"116":{i:"116",n:"button hover",z:3,a:[{f:"2",y:0,z:1,i:"e",e:"0.500000",r:1,s:"0.000000",o:"52"},{f:"2",y:1,z:1,i:"e",e:"0.500000",r:1,s:"0.000000",o:"107"},{f:"2",y:1,z:1,i:"e",e:"0.000000",s:"0.500000",o:"52"},{f:"2",y:2,z:1,i:"e",e:"0.000000",s:"0.500000",o:"107"},{y:2,i:"e",s:"0.000000",z:0,o:"52",f:"2"},{y:3,i:"e",s:"0.000000",z:0,o:"107",f:"2"}],f:30},"26_pressed":{i:"26_pressed",n:"26_pressed",z:0,a:[],f:30},"42_pressed":{i:"42_pressed",n:"42_pressed",z:0,a:[],f:30}},o:"1"}]);a.z_q(1140,550);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);
a.z_i(0);a.z_j(true);a.z_k(false);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();
