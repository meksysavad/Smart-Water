(function(e){function t(t){for(var o,a,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={1:0},r={1:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"f0deb0a7",3:"50e73f1d",4:"d3f370e1",5:"ecc7e1c8",6:"4f00f1dd",7:"7d00fa93",8:"caadf668",9:"d304c89d",10:"0efdde0d",11:"4ce1f735",12:"a8968eb6",13:"b7af0542",14:"7b0ea2de",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0"}[e]+".css",r=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],m=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(m===o||m===r))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],m=c.getAttribute("data-href");if(m===o||m===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var u=document.getElementsByTagName("head")[0];u.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var c,m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=s(e);var p=new Error;c=function(t){m.onerror=m.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:m})}),12e4);m.onerror=m.onload=c,document.head.appendChild(m)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],m=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=m;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("0ca9"),n("5b0d");var o=n("2b0e"),a=n("1f91"),r=n("42d2"),i=n("b05d"),s=n("18d6");o["a"].use(i["a"],{config:{brand:{primary:"#027BE3",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}},lang:a["a"],iconSet:r["a"],plugins:{LocalStorage:s["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],m={name:"App"},p=m,d=n("2877"),u=Object(d["a"])(p,l,c,!1,null,null,null),f=u.exports,h=n("2f62");const g={tab:{tabIndex:1},token:localStorage.getItem("user-token")||"",status:""},b={setTab(e,t){e.tab.tabIndex=t}},y={getTab:e=>e.tab,isAuthenticated:e=>!!e.token,authStatus:e=>e.status},w={setTab({commit:e},t){e("setTab",t)}};var v={namespaced:!1,state:g,mutations:b,getters:y,actions:w};const S={app:{m:0,y:0,thisMonth:5,thisYear:2021,monthToShow:5,yearToShow:2021,minYear:2018,chartMode:!0,type:"Bình thường"},CustomerInfo:{name:"Vo Quang Duy",meterID:"123456",phone:"0985617832",meterStatus:!0},thisMonth:{water:33.33,money:123.456},Chart:{options:{title:{text:"Lượng nước sử dụng (m3)",align:"left",margin:30,style:{fontSize:"14px",fontWeight:"500",fontFamily:"Helvetica, Arial, sans-serif",color:"#397CBD"}},stroke:{curve:"smooth",width:3,colors:"#42A3FD"},chart:{type:"line",id:"vuechart-example",toolbar:{show:!1}},xaxis:{show:!0,categories:[1,5,10,15,20,25,30],labels:{show:!0,style:{colors:["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400,cssClass:"apexcharts-xaxis-label"}},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:["#fff"],fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400,cssClass:"apexcharts-yaxis-label"}}},grid:{show:!0,borderColor:"#42A3FD"}},y_Showing:null,m_Showing:null,month:[[{name:"month 5",data:[.75,.8,1.5,.8,1.1,1,1.7]}],[{name:"month 4",data:[1,2,3,.8,1,1,1.7]}],[{name:"month 3",data:[.5,.4,.3,.8,1.1,2.5,2]}],[{name:"month 2",data:[3,2,1,.5,1,2,3]}],[{name:"month 1",data:[.5,1,2,3,2,1,.5]}]],year:[[{name:"year 2021",data:[1,2,3,4,5,6,5,4,3,2,1,.5]}],[{name:"year 2020",data:[6,5,4,3,2,1,6,5,4,3,2,1]}],[{name:"year 2019",data:[5,4,3,2,1,6,5,4,3,2,1,6]}],[{name:"year 2018",data:[4,3,2,1,6,5,4,3,2,1,6,5]}]]}},P={home_getCustomer:e=>e.CustomerInfo,getWater_Bill:e=>S.thisMonth,getApp:e=>e.app,getChart:e=>e.Chart,getSerie_y:e=>e.Chart.y_Showing,getSerie_m:e=>e.Chart.m_Showing,getChart_Mode:e=>e.app.chartMode},T={monthIncrement(e){e.app.monthToShow<e.app.thisMonth&&(e.app.monthToShow++,e.app.m--)},monthDecrement(e){e.app.monthToShow>1&&(e.app.monthToShow--,e.app.m++)},yearIncrement(e){e.app.yearToShow<e.app.thisYear&&(e.app.yearToShow++,e.app.y--)},yearDecrement(e){e.app.yearToShow>e.app.minYear&&(e.app.yearToShow--,e.app.y++)},setChart_Mode(e,t){e.app.chartMode=t},setSerie(e){e.Chart.m_Showing=e.Chart.month[e.app.m],e.Chart.y_Showing=e.Chart.year[e.app.y]},setOption(e,t){e.Chart.options.xaxis.categories=t}},C={monthIncrement(e){e.commit("monthIncrement")},monthDecrement(e){e.commit("monthDecrement")},yearIncrement(e){e.commit("yearIncrement")},yearDecrement(e){e.commit("yearDecrement")},setChart_Mode({commit:e},t){e("setChart_Mode",t)},setSerie({commit:e}){e("setSerie")},setOption({commit:e},t){e("setOption",t)}};var x={namespaced:!1,state:S,mutations:T,getters:P,actions:C},D=n("889e");const I="USER_REQUEST";var H=n("bc3a"),_=n.n(H);o["a"].prototype.$axios=_.a;const O=_.a.create({baseURL:"https://api.example.com"});o["a"].prototype.$api=O;const L={app:{rememberMe:!1},login:{username:"meksss",password:""}},A={getUsername:e=>e.login.username,getPassword:e=>e.login.password,getRemember:e=>e.app.rememberMe},E={setUsername(e,t){e.login.username=t},setPassword(e,t){e.login.password=t},setRemember(e,t){e.app.rememberMe=t}},M={setUsername({commit:e},t){e("setUsername",t)},setRemember({commit:e},t){e("setRemember",t)},login(e){},[D["c"]]:({commit:e,dispatch:t},n)=>new Promise(((o,a)=>{e(D["c"]),(void 0)({url:"auth",data:n,method:"POST"}).then((n=>{localStorage.setItem("user-token",n.token),e(D["d"],n),t(I),o(n)})).catch((t=>{e(D["a"],t),localStorage.removeItem("user-token"),a(t)}))})),[D["b"]]:({commit:e})=>new Promise((t=>{e(D["b"]),localStorage.removeItem("user-token"),t()}))};var R={namespaced:!1,state:L,mutations:E,getters:A,actions:M};const k={app:{},reportList:{report001:{reportHead:"Báo cáo sử dụng nước ngày 29/5/2020",reportDetail:"Lượng sử dụng nước trong ngày: 0.15 m3...",reportTime:"6:30:23 - 30/5/2020"},report002:{reportHead:"Báo cáo sử dụng nước ngày 28/5/2020",reportDetail:"Lượng sử dụng nước trong ngày: 0.15 m3...",reportTime:"6:30:23 - 29/5/2020"},report003:{reportHead:"Báo cáo sử dụng nước ngày 27/5/2020",reportDetail:"Lượng sử dụng nước trong ngày: 0.15 m3...",reportTime:"6:30:23 - 28/5/2020"},report004:{reportHead:"Báo cáo sử dụng nước ngày 26/5/2020",reportDetail:"Lượng sử dụng nước trong ngày: 0.15 m3...",reportTime:"6:30:23 - 27/5/2020"}}},B={getReports:e=>e.reportList},U={},j={};var N={namespaced:!1,state:k,mutations:U,getters:B,actions:j};const q={app:{rememberMe:!1},notificationsList:{notify001:{notificationsHead:"Yêu cầu thanh toán hóa đơn tiền nước",notificationsDetail:"Hóa đơn tiền nước tháng 5/2020 của bạn...",notificationsTime:"6:30:23 - 30/5/2020",notificationsType:1,notificationsRead:!1},notify002:{notificationsHead:"Hóa đơn tiền nước định kỳ",notificationsDetail:"Hóa đơn tiền nước tháng 5/2020 của bạn...",notificationsTime:"6:30:23 - 30/5/2020",notificationsType:1,notificationsRead:!1},notify003:{notificationsHead:"Thông báo cúp nước",notificationsDetail:"Lịch cúp nước ngày 29/5/2020",notificationsTime:"6:30:23 - 28/5/2020",notificationsType:2,notificationsRead:!0}}},F={getNotifications:e=>e.notificationsList},V={},Q={};var Y={namespaced:!1,state:q,mutations:V,getters:F,actions:Q};const $={app:{},customerInfo:{name:"Vo Quang Duy",username:"duyvq9090",phone:"90909090",dateOfBirth:"06/09/1969",address:"Thứa Thiên - Huế"},meterInfo:{meterID:"123456",meterStatus:!1,lastReport:"18:30:29 - 30/05/2020"}},W={profile_getCustomer:e=>e.customerInfo,getMeter:e=>e.meterInfo},z={},J={};var G={namespaced:!1,state:$,mutations:z,getters:W,actions:J};const K={app:{},reportInfo:{meterID:"123456",consumeValue:2.5,intensity:-87,meterStatus:1,reportDate:"06:30 - 30/05/2020",consumedDate:"29/05/2020"},period:[{time:"0:00 - 1:00",consumed:.12},{time:"1:00 - 2:00",consumed:.12},{time:"2:00 - 3:00",consumed:.12},{time:"3:00 - 4:00",consumed:.12},{time:"4:00 - 5:00",consumed:.12},{time:"5:00 - 6:00",consumed:.12},{time:"6:00 - 7:00",consumed:.12},{time:"7:00 - 8:00",consumed:.12}]},X={getReport:e=>e.reportInfo,getPeriod:e=>e.period},Z={},ee={};var te={namespaced:!1,state:K,mutations:Z,getters:X,actions:ee};const ne={app:{},bills:{bill001:{billHead:"Hóa đơn tiền nước tháng 5/2020",billDetail:"Hóa đơn tháng 5/2020",billID:"1190508",paid:!1,money:245485},bill002:{billHead:"Hóa đơn tiền nước tháng 4/2020",billDetail:"Hóa đơn tháng 4/2020",billID:"1190508",paid:!0,money:245485},bill003:{billHead:"Hóa đơn tiền nước tháng 3/2020",billDetail:"Hóa đơn tháng 3/2020",billID:"1190508",paid:!0,money:245485},bill004:{billHead:"Hóa đơn tiền nước tháng 2/2020",billDetail:"Hóa đơn tháng 2/2020",billID:"1190508",paid:!0,money:245485},bill005:{billHead:"Hóa đơn tiền nước tháng 1/2020",billDetail:"Hóa đơn tháng 1/2020",billID:"1190508",paid:!0,money:245485}}},oe={getBills:e=>e.bills},ae={},re={};var ie={namespaced:!1,state:ne,mutations:ae,getters:oe,actions:re};const se={app:{},billInfo:{paid:!0,customerName:"Vo Quang Duy",meterID:"123456",calculationMethod:"No data yet",total:2e5,paidDateTime:"18:50:23 - 30/05/2020",meterStart:{date:"01/05/2020",value:300},meterEnd:{date:"30/05/2020",value:600}}},le={getBillIfo:e=>e.billInfo},ce={},me={};var pe={namespaced:!1,state:se,mutations:ce,getters:le,actions:me};const de={app:{},password:{oldPassword:"",newPassword:"",confirmPassword:""}},ue={getOld:e=>e.password.oldPassword,getNew:e=>e.password.newPassword,getConfirm:e=>e.password.confirmPassword},fe={setOld(e,t){e.password.oldPassword=t},setNew(e,t){e.password.newPassword=t},setConfirm(e,t){e.password.confirmPassword=t}},he={setOld({commit:e},t){e("setOld",t)},setNew({commit:e},t){e("setNew",t)},setConfirm({commit:e},t){e("setConfirm",t)}};var ge={namespaced:!1,state:de,mutations:fe,getters:ue,actions:he};const be={app:{},notify:{head:"Lorem ipsum",message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.",date:"8/3/2021"}},ye={getNotify:e=>e.notify},we={},ve={};var Se={namespaced:!1,state:be,mutations:we,getters:ye,actions:ve};o["a"].use(h["a"]);var Pe=function(){const e=new h["a"].Store({modules:{appStore:v,home:x,login:R,reports:N,notifications:Y,profile:G,report:te,bills:ie,bill:pe,pass:ge,notify:Se},strict:!1});return e},Te=n("8c4f");const Ce=[{path:"/",component:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"6c09")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"dc84")),name:"start"},{path:"login",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"fff6")),name:"login"},{path:"report-read/:reportId",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"95bb")),name:"report-read"},{path:"notify-read/:notifyId",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"f645")),name:"notify-read"},{path:"bill/:billId",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"7bda")),name:"bill"},{path:"bill-list/:year",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"52bc")),name:"bill-list"},{path:"change-password",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"e742")),name:"change-password"},{path:"xxx",component:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"35ad")),name:"xxx"}]},{path:"/main/",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"713b")),children:[{path:"home",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"48f7")),name:"home"},{path:"reports",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"514f")),name:"reports"},{path:"notifications",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"ea08")),name:"notifications"},{path:"profile",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"b835")),name:"profile"},{path:"yyy",component:()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"a667")),name:"yyy"}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"e51e"))}];var xe=Ce;o["a"].use(Te["a"]);var De=function(){const e=new Te["a"]({scrollBehavior:()=>({x:0,y:0}),routes:xe,mode:"hash",base:""});return e},Ie=async function(){const e="function"===typeof Pe?await Pe({Vue:o["a"]}):Pe,t="function"===typeof De?await De({Vue:o["a"],store:e}):De;e.$router=t;const n={router:t,store:e,render:e=>e(f),el:"#q-app"};return{app:n,store:e,router:t}},He=n("1321"),_e=n.n(He);o["a"].component("apexchart",_e.a),o["a"].use(Te["a"]);const Oe="";async function Le(){const{app:e,store:t,router:n}=await Ie();let a=!1;const r=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0,void 0,void 0];for(let c=0;!1===a&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:r,urlPath:i,publicPath:Oe})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&document.addEventListener("deviceready",(()=>{o["a"].prototype.$q.cordova=window.cordova,new o["a"](e)}),!1)}Le()},"5b0d":function(e,t,n){},"889e":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const o="AUTH_REQUEST",a="AUTH_SUCCESS",r="AUTH_ERROR",i="AUTH_LOGOUT"}});