(function(e){function n(n){for(var c,r,o=n[0],i=n[1],f=n[2],l=0,h=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c7818ec":"330ab308","chunk-21ad30c6":"90908b32","chunk-2d217eac":"2977a7b7","chunk-7ffc1e3c":"5a2edc7b","chunk-ac91e0f0":"4a8bf2a7","chunk-0df9e668":"b54323ac","chunk-19cef4eb":"6ccb973a","chunk-7d639a00":"002450b3","chunk-a5a5bc22":"1f311140","chunk-f47606c0":"50722d4d","chunk-0c2631c4":"f67c1ce7","chunk-98bfcf20":"a707afdb","chunk-fe01916e":"1499c371"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0c7818ec":1,"chunk-21ad30c6":1,"chunk-7ffc1e3c":1,"chunk-0df9e668":1,"chunk-19cef4eb":1,"chunk-7d639a00":1,"chunk-a5a5bc22":1,"chunk-0c2631c4":1,"chunk-98bfcf20":1,"chunk-fe01916e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0c7818ec":"1426755e","chunk-21ad30c6":"3b7d0381","chunk-2d217eac":"31d6cfe0","chunk-7ffc1e3c":"ad943716","chunk-ac91e0f0":"31d6cfe0","chunk-0df9e668":"9ca93f88","chunk-19cef4eb":"bfe3516e","chunk-7d639a00":"9f69e618","chunk-a5a5bc22":"9dc3f6eb","chunk-f47606c0":"31d6cfe0","chunk-0c2631c4":"7928a8f5","chunk-98bfcf20":"66224801","chunk-fe01916e":"d1cb0bc7"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===c||l===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){f=h[o],l=f.getAttribute("data-href");if(l===c||l===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],s.parentNode.removeChild(s),t(u)},s.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var h=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var s=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("caad"),t("c975"),t("a434"),t("2532");var c=t("2b0e"),r=t("2f62"),a=t("5d2d");c["a"].use(r["a"]),n["a"]=new r["a"].Store({state:{user:Object(a["a"])("token"),cacheName:["LayoutIndex"]},mutations:{saveToken:function(e,n){e.user=n,Object(a["b"])("token",e.user)},addCache:function(e,n){e.cacheName.includes(n)||e.cacheName.push(n)},removeCache:function(e,n){var t=e.cacheName.indexOf(n);-1!==t&&e.cacheName.splice(t,1)}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.cacheName}},[t("router-view")],1)],1)},a=[],u=t("5530"),o=t("2f62"),i={name:"App",computed:Object(u["a"])({},Object(o["b"])(["cacheName"]))},f=i,l=t("2877"),h=Object(l["a"])(f,r,a,!1,null,null,null),s=h.exports,d=t("a18c"),p=t("4360"),m=t("b970"),b=(t("157a"),t("8e1f"),t("5cfb"),t("4de4"),t("5a0c")),k=t.n(b),v=(t("a471"),t("4208")),g=t.n(v);k.a.extend(g.a),k.a.locale("zh-cn"),c["a"].filter("relativeTime",(function(e){return k()().to(k()(e))})),c["a"].use(m["a"]),c["a"].config.productionTip=!1,new c["a"]({router:d["a"],store:p["a"],render:function(e){return e(s)}}).$mount("#app")},"5d2d":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var c=t("53ca"),r=function(e,n){"object"===Object(c["a"])(n)&&(n=JSON.stringify(n)),window.localStorage.setItem(e,n)},a=function(e){var n=window.localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return n}}},"8e1f":function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7"),t("ac1f"),t("5319");var c=t("2b0e"),r=t("8c4f"),a=t("4360");c["a"].use(r["a"]);var u=[{path:"/login",name:"/login",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-7d639a00")]).then(t.bind(null,"ede4"))},meta:{isUser:!1}},{path:"/",component:function(){return t.e("chunk-21ad30c6").then(t.bind(null,"162e"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-f47606c0"),t.e("chunk-98bfcf20")]).then(t.bind(null,"7abe"))},meta:{isUser:!1}},{path:"/qa",component:function(){return t.e("chunk-2d217eac").then(t.bind(null,"c988"))},meta:{isUser:!1}},{path:"/video",component:function(){return t.e("chunk-7ffc1e3c").then(t.bind(null,"007b"))},meta:{isUser:!1}},{path:"/my",name:"/my",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-0df9e668")]).then(t.bind(null,"9639"))},meta:{isUser:!1}}]},{path:"/search",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-f47606c0"),t.e("chunk-0c2631c4")]).then(t.bind(null,"efe3"))},meta:{isUser:!1}},{path:"/article/:articleid",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-fe01916e")]).then(t.bind(null,"230c"))},props:!0,meta:{isUser:!1}},{path:"/user/editinfo",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-19cef4eb")]).then(t.bind(null,"bf47"))},meta:{isUser:!0}},{path:"/user/collectHistory/:num",component:function(){return Promise.all([t.e("chunk-ac91e0f0"),t.e("chunk-a5a5bc22")]).then(t.bind(null,"e8c6"))},props:!0,meta:{isUser:!0}},{path:"/user/robot",component:function(){return t.e("chunk-0c7818ec").then(t.bind(null,"2157"))},meta:{isUser:!0}}],o=new r["a"]({routes:u});o.beforeEach((function(e,n,t){if(e.meta.isUser){if(a["a"].state.user)return t();o.replace({name:"/login",query:{redirect:o.currentRoute.fullPath}})}else t()})),n["a"]=o}});
//# sourceMappingURL=app.a50a0342.js.map