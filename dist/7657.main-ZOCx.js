"use strict";(self.webpackChunkborder=self.webpackChunkborder||[]).push([[7657],{57657:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});var t=r(25108);function a(e,n,r,t,a,u,c){try{var i=e[u](c),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var c=e.apply(n,r);function i(e){a(c,t,u,i,s,"next",e)}function s(e){a(c,t,u,i,s,"throw",e)}i(void 0)}))}}function c(e){return i.apply(this,arguments)}function i(){return i=u(regeneratorRuntime.mark((function e(n){var a,c,i,s,o,p,f,l,A,g,h,w,d,m,v,x,b,k,y,R,C,L,X,B,D,P,N,J,q,M,O,T,S,V,j,K;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K=function(){return(K=u(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==v.length){e.next=3;break}return e.next=3,X();case 3:return e.prev=3,e.next=6,d.signPersonalMessage(v[0],n.data);case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)},j=function(e){return K.apply(this,arguments)},V=function(){return(V=u(regeneratorRuntime.mark((function e(n){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==v.length){e.next=3;break}return e.next=3,X();case 3:return r=new i.Transaction(n,{chain:h(f)}),e.prev=4,e.next=7,d.signTransaction(v[0],r);case 7:return t=e.sent,e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 11:throw e.prev=11,e.t0=e.catch(4),e.t0;case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)},S=function(e){return V.apply(this,arguments)},T=function(e){return new Promise((function(n,r){k.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&r(e);var a=t&&t.result;n(null!=a?new g(a).toString(10):null)}))}))},O=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var n=u(regeneratorRuntime.mark((function n(r){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e);case 2:t=n.sent,r({address:e,balance:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})))},M=function(){return(M=u(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(v.length>0)||n){e.next=4;break}return e.abrupt("return",v);case 4:return e.prev=4,e.next=7,d.addAccounts();case 7:v=e.sent,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:return e.abrupt("return",v);case 14:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)},q=function(e){return M.apply(this,arguments)},J=function(){return(J=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.warn("Lattice only supports one exported account per wallet. Checking for new wallet."),e.next=4,q(!0);case 4:return n=e.sent,e.abrupt("return",n&&O(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},N=function(){return J.apply(this,arguments)},P=function(){return x?B()[0]:void 0},D=function(){},B=function(){return v},X=function(){return x=!0,q()},L=function(){return b},C=function(){return(C=u(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===p){e.next=2;break}throw new Error("Lattice only supports standard path: m/44'/0'/0'/0/x");case 2:return b=!1,m=n,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},R=function(e){return C.apply(this,arguments)},y=function(){m="",x=!1,k.stop()},e.next=20,Promise.all([r.e(8198),r.e(536),r.e(6614),r.e(2480)]).then(r.t.bind(r,2480,23));case 20:return a=e.sent,c=a.default,e.next=24,r.e(6614).then(r.bind(r,66614));case 24:return i=e.sent,e.next=27,Promise.all([r.e(7807),r.e(9342)]).then(r.bind(r,37807));case 27:return s=e.sent,o=s.default,p="m/44'/60'/0'/0",f=n.networkId,l=n.appName,A=n.rpcUrl,g=n.BigNumber,h=n.networkName,w={name:l,network:h(f)},d=new c(w),m="",v=Array.from([]),x=!1,b=!1,(k=o({getAccounts:function(e){q().then((function(n){return e(null,n)})).catch((function(n){return e(n,null)}))},signTransaction:function(e,n){S(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processMessage:function(e,n){j(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processPersonalMessage:function(e,n){j(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signMessage:function(e,n){j(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signPersonalMessage:function(e,n){j(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},rpcUrl:A})).setPath=R,k.dPath=m,k.enable=X,k.setPrimaryAccount=D,k.getPrimaryAddress=P,k.getAccounts=q,k.getMoreAccounts=N,k.getBalance=T,k.getBalances=O,k.send=k.sendAsync,k.disconnect=y,k.isCustomPath=L,e.abrupt("return",k);case 51:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}const s=function(e){var n,r=e.appName,t=e.rpcUrl,a=e.networkId,i=e.preferred,s=e.label,o=e.iconSrc;return{name:s||"Lattice",svg:e.svg||'\n  <svg width="41px" height="41px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">\n  \x3c!-- Generated by Pixelmator Pro 1.8 --\x3e\n  <defs>\n    <image id="image" width="41px" height="41px" xlink:href="data:image/png;base64,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"/>\n  </defs>\n  <use id="image-1" xlink:href="#image" x="0px" y="0px" width="41px" height="41px"/>\n  </svg>\n',iconSrc:o,wallet:(n=u(regeneratorRuntime.mark((function e(n){var i,s,o,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.BigNumber,s=n.networkName,o=n.resetWalletState,e.next=3,c({appName:r,rpcUrl:t,networkId:a,BigNumber:i,networkName:s,resetWalletState:o});case 3:return p=e.sent,e.abrupt("return",{provider:p,interface:{name:"Lattice",connect:p.enable,disconnect:p.disconnect,address:{get:function(){var e=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.getPrimaryAddress(),e.abrupt("return",n&&p.getBalance(n));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:i}}}}]);