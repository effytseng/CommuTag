!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/production",a(a.s=99)}({0:function(t,e,a){"use strict";function i(t,e,a,i,n,r,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}a.d(e,"a",(function(){return i}))},1:function(t,e,a){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}t[e]=a}return t[e]}}(),s={};function o(t,e,a){for(var i=0;i<e.length;i++){var n={css:e[i][1],media:e[i][2],sourceMap:e[i][3]};s[t][i]?s[t][i](n):s[t].push(p(n,a))}}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=a.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function d(t,e,a,i){var n=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var r=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function h(t,e,a){var i=a.css,n=a.media,r=a.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var g=null,m=0;function p(t,e){var a,i,n;if(e.singleton){var r=m++;a=g||(g=l(e)),i=d.bind(null,a,r,!1),n=d.bind(null,a,r,!0)}else a=l(e),i=h.bind(null,a,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(a)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e,a){return(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=n()),t=a.base?t+a.base:t,e=e||[],s[t]||(s[t]=[]),o(t,e,a),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){s[t]||(s[t]=[]),o(t,e,a);for(var i=e.length;i<s[t].length;i++)s[t][i]();s[t].length=e.length,0===s[t].length&&delete s[t]}}}},100:function(t,e,a){"use strict";var i=a(56);a.n(i).a},101:function(t,e,a){(e=a(2)(!1)).push([t.i,".statistic-graph{width:100%;height:100%}.statistic-graph .graph-container{width:100%;height:350px;position:relative}.statistic-graph .graph-container .graph{width:100%;height:100%}.statistic-graph .graph-container .option-panel{width:100%;height:100%;position:absolute;top:0px;left:0px;padding:20px;background-color:rgba(100,100,100,0.8);color:white;overflow:auto}\n",""]),t.exports=e},102:function(t,e,a){"use strict";var i=a(57);a.n(i).a},103:function(t,e,a){(e=a(2)(!1)).push([t.i,".statistic-map{width:100%;height:100%;position:relative}.statistic-map .map{width:100%;height:100%}.statistic-map .option-panel{width:100%;padding:20px;background-color:rgba(100,100,100,0.8);color:white;overflow:auto}.statistic-map .popup-image{width:150px;object-fit:contain}\n",""]),t.exports=e},104:function(t,e,a){"use strict";var i=a(58);a.n(i).a},105:function(t,e,a){(e=a(2)(!1)).push([t.i,".dataset-statistic{width:100%;height:100%}\n",""]),t.exports=e},107:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"dataset-statistic bg-grey-1 shadow-2",attrs:{view:"lHh lpr lFf",container:""}},[a("q-header",[a("topbar",{attrs:{user:t.user}})],1),t._v(" "),a("q-page-container",[a("q-page",{staticClass:"bg-grey-1"},[a("q-tab-panels",{staticClass:"absolute fit",attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"graph"}},[a("statistic-graph",{ref:"statisticGraph"})],1),t._v(" "),a("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"map"}},[a("statistic-map",{ref:"statisticMap"})],1)],1)],1)],1),t._v(" "),a("q-footer",[a("q-tabs",{staticClass:"bg-grey-8 text-white",attrs:{"inline-label":"",align:"justify","active-bg-color":"grey-7"},on:{input:function(e){return t.InitTabContent()}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"graph",icon:"bar_chart",label:"統計圖"}}),t._v(" "),t.info&&t.info.enableGPS?a("q-tab",{attrs:{name:"map",icon:"place",label:"地圖"}}):t._e(),t._v(" "),a("q-tab",{attrs:{name:"home",icon:"folder",label:"回資料集"},on:{click:function(e){return t.GoToDataset()}}})],1)],1)],1)};i._withStripped=!0;var n=a(3),r=(a(15),a(11)),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataset&&t.imageArr?a("div",{staticClass:"statistic-graph"},[a("div",{staticClass:"row items-center q-col-gutter-md q-pa-md"},[a("div",{staticClass:"col-12 col-sm-6 column"},[a("div",{staticClass:"text-h6"},[t._v("標註標籤比例")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"tagRatio",staticClass:"graph"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.openTagFilter,expression:"openTagFilter"}],staticClass:"option-panel column"},[a("div",{staticClass:"text-subtitle2 q-mb-lg"},[t._v("時間篩選")]),t._v(" "),a("q-range",{attrs:{min:t.dataTime.rangeMin,max:t.dataTime.rangeMax,step:1,"left-label-value":t.minTimeLabel,"right-label-value":t.maxTimeLabel,"left-label-color":"grey-8","right-label-color":"grey-8",color:"white","label-always":""},on:{change:function(e){return t.UpdateGraphTag()}},model:{value:t.tagFilter.time,callback:function(e){t.$set(t.tagFilter,"time",e)},expression:"tagFilter.time"}}),t._v(" "),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t地點篩選\n\t\t\t\t\t\t"),a("q-btn",{staticClass:"bg-grey-8 text-white q-ma-sm",attrs:{label:"選擇範圍"},on:{click:function(e){return t.OpenRangeSelect(t.tagFilter.location)}}})],1),t._v(" "),a("div",{staticClass:"text-subtitle2"},[t._v("備註篩選")]),t._v(" "),a("q-input",{staticClass:"q-ma-sm",attrs:{dense:"",dark:"",color:"white"},on:{input:function(e){return t.UpdateGraphTag()}},model:{value:t.tagFilter.keyword,callback:function(e){t.$set(t.tagFilter,"keyword",e)},expression:"tagFilter.keyword"}}),t._v(" "),a("q-space"),t._v(" "),a("div",{staticClass:"row justify-center"},[a("q-btn",{staticClass:"bg-grey-8",attrs:{label:"確定"},on:{click:function(e){t.openTagFilter=!1}}})],1)],1)]),t._v(" "),a("q-btn",{staticClass:"bg-grey-6 text-white q-my-sm",attrs:{dense:"",label:"篩選"},on:{click:function(e){return t.OpenTagFilter()}}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-6 column"},[a("div",{staticClass:"text-h6"},[t._v("資料時間分佈")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"timeline",staticClass:"graph"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.openTimelineFilter,expression:"openTimelineFilter"}],staticClass:"option-panel column"},[a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t顯示類型\n\t\t\t\t\t\t"),a("q-select",{attrs:{dense:"",dark:"",color:"white",options:t.typeOption,"option-value":"value","option-label":"label","emit-value":"","map-options":""},on:{input:function(e){return t.UpdateGraphTimeline()}},model:{value:t.timelineFilter.type,callback:function(e){t.$set(t.timelineFilter,"type",e)},expression:"timelineFilter.type"}})],1),t._v(" "),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t地點篩選\n\t\t\t\t\t\t"),a("q-btn",{staticClass:"bg-grey-8 text-white q-ma-sm",attrs:{label:"選擇範圍"},on:{click:function(e){return t.OpenRangeSelect(t.timelineFilter.location)}}})],1),t._v(" "),a("div",{staticClass:"text-subtitle2"},[t._v("備註篩選")]),t._v(" "),a("q-input",{staticClass:"q-ma-sm",attrs:{dense:"",dark:"",color:"white"},on:{input:function(e){return t.UpdateGraphTimeline()}},model:{value:t.timelineFilter.keyword,callback:function(e){t.$set(t.timelineFilter,"keyword",e)},expression:"timelineFilter.keyword"}}),t._v(" "),a("q-space"),t._v(" "),a("div",{staticClass:"row justify-center"},[a("q-btn",{staticClass:"bg-grey-8",attrs:{label:"確定"},on:{click:function(e){t.openTimelineFilter=!1}}})],1)],1)]),t._v(" "),a("q-btn",{staticClass:"bg-grey-6 text-white q-my-sm",attrs:{dense:"",label:"篩選"},on:{click:function(e){return t.OpenTimelineFilter()}}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"text-h6"},[t._v("驗證認同率分佈")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"agreeRate",staticClass:"graph"})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"text-h6"},[t._v("上傳排行榜")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"uploadRank",staticClass:"graph"})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"text-h6"},[t._v("標註排行榜")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"annotateRank",staticClass:"graph"})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"text-h6"},[t._v("驗證排行榜")]),t._v(" "),a("div",{staticClass:"graph-container bg-grey-1"},[a("div",{ref:"verifyRank",staticClass:"graph"})])]),t._v(" "),t.rangeTarget?a("q-dialog",{model:{value:t.openRangeSelect,callback:function(e){t.openRangeSelect=e},expression:"openRangeSelect"}},[a("q-card",{staticClass:"full-width q-pa-sm"},[a("div",{staticClass:"text-h6"},[t._v("選擇範圍")]),t._v(" "),a("q-toggle",{attrs:{"left-label":"",label:"啟用範圍篩選"},on:{input:function(e){return t.UpdateRangeSelectMap()}},model:{value:t.rangeTarget.enable,callback:function(e){t.$set(t.rangeTarget,"enable",e)},expression:"rangeTarget.enable"}}),t._v(" "),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t半徑(公里)\n\t\t\t\t\t"),a("q-slider",{attrs:{label:"",min:10,max:400},on:{change:function(e){return t.UpdateRangeSelectMap()}},model:{value:t.rangeTarget.range,callback:function(e){t.$set(t.rangeTarget,"range",e)},expression:"rangeTarget.range"}})],1),t._v(" "),a("location-select",{ref:"locationSelect",attrs:{mode:"selectRange"},on:{change:function(e){return t.UpdateLoc()}}}),t._v(" "),t.$refs.locationSelect?a("div",{staticClass:"text-center"},[t._v(t._s(t.$refs.locationSelect.status))]):t._e(),t._v(" "),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{flat:"",label:"確定"},on:{click:function(e){t.openRangeSelect=!1,t.UpdateGraph()}}})],1)],1)],1):t._e()],1)]):t._e()};s._withStripped=!0;var o={name:"statistic-graph",props:{},components:{"location-select":a(12).a},data:function(){return{dataset:null,imageArr:[],openTagFilter:!1,dataTime:{min:null,max:null,rangeMin:0,rangeMax:0},tagFilter:{location:{enable:!1,lat:null,lng:null,range:50},time:{min:null,max:null},keyword:""},openTimelineFilter:!1,typeOption:[{label:"時間分佈",value:"time"},{label:"小時變化",value:"hour"},{label:"月份變化",value:"month"}],timelineFilter:{type:"time",location:{enable:!1,lat:null,lng:null,range:50},keyword:""},openRangeSelect:!1,rangeTarget:null}},mounted:function(){},methods:{OpenTagFilter:function(){this.openTagFilter=!0},OpenTimelineFilter:function(){this.openTimelineFilter=!0},OpenRangeSelect:function(t){this.openRangeSelect=!0,Vue.set(this,"rangeTarget",t),Vue.nextTick(function(){this.$refs.locationSelect.range=this.rangeTarget.range,this.UpdateRangeSelectMap()}.bind(this))},UpdateRangeSelectMap:function(){if(this.rangeTarget){var t=this.$refs.locationSelect;t.range=this.rangeTarget.range,this.rangeTarget.enable?(this.rangeTarget.lat&&this.rangeTarget.lng||t.GetGPS(),t.SetRange(this.rangeTarget.lat,this.rangeTarget.lng,this.rangeTarget.range)):t.RemoveMarker(),this.UpdateGraph()}},UpdateLoc(){if(this.rangeTarget){this.rangeTarget.enable=!0;var t=this.$refs.locationSelect.loc;this.rangeTarget.lat=t.lat,this.rangeTarget.lng=t.lng,this.UpdateGraph()}},InitTimeSelect:function(){for(var t=spacetime().name,e=0;e<this.imageArr.length;e++){var a=spacetime(this.imageArr[e].dataTime).goto(t);this.dataTime.min&&!this.dataTime.min.isAfter(a)||(this.dataTime.min=a.clone().last("day")),this.dataTime.max&&!this.dataTime.max.isBefore(a)||(this.dataTime.max=a.clone().next("day"))}this.dataTime.min&&this.dataTime.max&&(this.dataTime.rangeMin=0,this.dataTime.rangeMax=this.dataTime.min.diff(this.dataTime.max,"day")+1,this.tagFilter.time.min=this.dataTime.rangeMin,this.tagFilter.time.max=this.dataTime.rangeMax)},SetGraphData:function(t,e){this.dataset=t,this.imageArr=e,this.InitTimeSelect(),Vue.nextTick(function(){this.UpdateGraph()}.bind(this))},UpdateGraph:function(){this.UpdateGraphTag(),this.UpdateGraphTimeline(),this.UpdateGraphUploadRank(),this.UpdateGraphAgreeRate(),this.UpdateGraphAnnotateRank(),this.UpdateGraphVerifyRank()},UpdateGraphTag:function(){var t=this.imageArr;this.tagFilter.location.enable&&(t=t.filter(function(t){var e=this.tagFilter.location,a=e.range/111,i=t.lat-e.lat,n=t.lng-e.lng;return i*i+n*n<=a*a}.bind(this)));var e=spacetime().name;t=(t=t.filter(function(t){var a=spacetime(t.dataTime).goto(e),i=this.dataTime.min.add(this.tagFilter.time.min,"day"),n=this.dataTime.min.add(this.tagFilter.time.max,"day");return a.isAfter(i)&&a.isBefore(n)}.bind(this))).filter(function(t){return""==this.tagFilter.keyword||!!t.remark&&-1!=t.remark.indexOf(this.tagFilter.keyword)}.bind(this));var a={};switch(this.dataset.annotationType){case"image":for(var i=0;i<t.length;i++){var n="";n=(r=t[i]).annotation?r.annotation.annotation:"未標註",a[n]?a[n].value++:a[n]={name:n,value:1}}break;case"bbox":for(i=0;i<t.length;i++){var r,s=[];s=(r=t[i]).annotation?r.annotation.annotation:[{tag:"未標註"}];for(var o=0;o<s.length;o++){n=s[o].tag;a[n]?a[n].value++:a[n]={name:n,value:1}}}}var l=Object.keys(a).sort((function(t,e){return a[t].value-a[e].value}));if(0==l.length)return Plotly.purge(this.$refs.tagRatio);var c={values:l.map((function(t){return a[t].value})),labels:l,type:"pie"};Plotly.newPlot(this.$refs.tagRatio,[c],{paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:40,r:40,b:40,t:40}},{displayModeBar:!1})},UpdateGraphTimeline:function(){var t=this.imageArr;this.timelineFilter.location.enable&&(t=t.filter(function(t){var e=this.timelineFilter.location,a=e.range/111,i=t.lat-e.lat,n=t.lng-e.lng;return i*i+n*n<=a*a}.bind(this))),t=t.filter(function(t){return""==this.timelineFilter.keyword||!!t.remark&&-1!=t.remark.indexOf(this.timelineFilter.keyword)}.bind(this));var e=spacetime().name,a={},i="",r={fixedrange:!0};switch(this.timelineFilter.type){case"time":i="yyyy-MM-dd",r.tickformat="%Y-%m-%d";break;case"hour":i="HH",r.title="小時變化",r.tickformat=".0f";break;case"month":i="MM",r.title="月份變化",r.tickformat=".0f"}switch(this.dataset.annotationType){case"image":for(var s=0;s<t.length;s++){var o="";o=(c=t[s]).annotation?c.annotation.annotation:"未標註";var l=spacetime(c.dataTime).goto(e).unixFmt(i);a[o]||(a[o]={}),a[o][l]?a[o][l].value++:a[o][l]={key:l,value:1}}break;case"bbox":for(s=0;s<t.length;s++){var c,u=[];u=(c=t[s]).annotation?c.annotation.annotation:[{tag:"未標註"}];l=spacetime(c.dataTime).goto(e).unixFmt(i);for(var d=0;d<u.length;d++){a[o=u[d].tag]||(a[o]={}),a[o][l]?a[o][l].value++:a[o][l]={key:l,value:1}}}}for(var o in a)switch(this.timelineFilter.type){case"time":for(var h=this.dataTime.min;h.isBefore(this.dataTime.max);){var g=h.unixFmt(i);a[o][g]||(a[o][g]={key:g,value:0}),h=h.add(1,"day")}break;case"hour":for(s=0;s<24;s++){g=n.a.PadLeft(s,2);a[o][g]||(a[o][g]={key:g,value:0})}break;case"month":for(s=1;s<=12;s++){g=n.a.PadLeft(s,2);a[o][g]||(a[o][g]={key:g,value:0})}}var m=Object.keys(a);if(0==m.length)return Plotly.purge(this.$refs.timeline);var p=[];for(s=0;s<m.length;s++){var f=a[m[s]],v=Object.keys(f).sort((function(t,e){return t<e?-1:t>e?1:0})),b={x:v,y:v.map((function(t){return f[t].value})),name:m[s],type:"scatter"};p.push(b)}var y={hovermode:"closest",xaxis:r,yaxis:{fixedrange:!0,title:"標籤數"},paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:60,r:40,b:60,t:40}};Plotly.newPlot(this.$refs.timeline,p,y,{displayModeBar:!1})},UpdateGraphAgreeRate:function(){for(var t=[],e=0;e<=1;e+=.1)t.push({x:e,y:0});for(e=0;e<this.imageArr.length;e++){var a=this.imageArr[e];if(a.verification.length>0){for(var i=0,n=0;n<a.verification.length;n++)"1"==a.verification[n].agree&&(i+=1);i/=a.verification.length,t[parseInt(10*i)].y++}}var r={type:"bar",x:t.map((function(t){return t.x})),y:t.map((function(t){return t.y}))};Plotly.newPlot(this.$refs.agreeRate,[r],{xaxis:{tickformat:"%",fixedrange:!0,title:"認同率"},yaxis:{fixedrange:!0,title:"影像數"},paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:80,r:40,b:80,t:40}},{displayModeBar:!1})},UpdateGraphUploadRank:function(){for(var t={},e=0;e<this.imageArr.length;e++){var a=this.imageArr[e];a.uploader&&"user"==a.uploadFrom&&(t[a.uploader]?t[a.uploader].value++:t[a.uploader]={value:1})}var i=Object.keys(t).sort((function(e,a){return t[e].value-t[a].value})).slice(0,10);$.get("/user/list-name?id="+i.join(","),function(e){if("ok"==e.status){for(var a=0;a<e.data.length;a++){var n=e.data[a];t[n._id].name=n.name}var r={type:"bar",x:i.map((function(e){return t[e].value})),y:i.map((function(e){return t[e].name})),orientation:"h"};Plotly.newPlot(this.$refs.uploadRank,[r],{xaxis:{fixedrange:!0,title:"影像數"},yaxis:{fixedrange:!0,title:""},paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:80,r:40,b:80,t:40}},{displayModeBar:!1})}}.bind(this))},UpdateGraphAnnotateRank:function(){for(var t={},e=0;e<this.imageArr.length;e++){var a=this.imageArr[e];if(a.annotation){var i=a.annotation.user;t[i]?t[i].value++:t[i]={value:1}}}var n=Object.keys(t).sort((function(e,a){return t[e].value-t[a].value})).slice(0,10);$.get("/user/list-name?id="+n.join(","),function(e){if("ok"==e.status){for(var a=0;a<e.data.length;a++){var i=e.data[a];t[i._id].name=i.name}var r={type:"bar",x:n.map((function(e){return t[e].value})),y:n.map((function(e){return t[e].name})),orientation:"h"};Plotly.newPlot(this.$refs.annotateRank,[r],{xaxis:{fixedrange:!0,title:"影像數"},yaxis:{fixedrange:!0,title:""},paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:80,r:40,b:80,t:40}},{displayModeBar:!1})}}.bind(this))},UpdateGraphVerifyRank:function(){for(var t={},e=0;e<this.imageArr.length;e++){var a=this.imageArr[e];if(a.verification.length>0)for(var i=0;i<a.verification.length;i++){var n=a.verification[i].user;t[n]?t[n].value++:t[n]={value:1}}}var r=Object.keys(t).sort((function(e,a){return t[e].value-t[a].value})).slice(0,10);$.get("/user/list-name?id="+r.join(","),function(e){if("ok"==e.status){for(var a=0;a<e.data.length;a++){var i=e.data[a];t[i._id].name=i.name}var n={type:"bar",x:r.map((function(e){return t[e].value})),y:r.map((function(e){return t[e].name})),orientation:"h"};Plotly.newPlot(this.$refs.verifyRank,[n],{xaxis:{fixedrange:!0,title:"影像數"},yaxis:{fixedrange:!0,title:""},paper_bgcolor:"rgba(250,250,250,1)",plot_bgcolor:"rgba(250,250,250,1)",margin:{l:80,r:40,b:80,t:40}},{displayModeBar:!1})}}.bind(this))}},computed:{minTimeLabel:function(){return this.dataTime.min?this.dataTime.min.add(this.tagFilter.time.min,"day").unixFmt("yyyy-MM-dd"):""},maxTimeLabel:function(){return this.dataTime.min?this.dataTime.min.add(this.tagFilter.time.max,"day").unixFmt("yyyy-MM-dd"):""}}},l=(a(100),a(0)),c=Object(l.a)(o,s,[],!1,null,null,null);c.options.__file="src/vue/statistic-graph.vue";var u=c.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"statistic-map"},[a("div",{ref:"map",staticClass:"map"}),t._v(" "),a("q-page-sticky",{staticClass:"z-top",attrs:{position:"bottom-left",offset:[18,18]}},[a("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",round:"",size:"md",icon:"insert_chart"},on:{click:function(e){t.openFilterPanel=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-primary"}},[t._v("資料篩選")])],1)],1),t._v(" "),t.dataset&&t.imageArr?a("q-dialog",{model:{value:t.openFilterPanel,callback:function(e){t.openFilterPanel=e},expression:"openFilterPanel"}},[a("q-card",{staticClass:"full-width q-px-md"},[a("q-card-section",{staticClass:"column"},[a("div",{staticClass:"text-h6 text-center"},[t._v("資料篩選")]),t._v(" "),a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-shrink text-subtitle2 q-ma-md"},[t._v("標籤")]),t._v(" "),a("q-checkbox",{attrs:{label:"全選"},on:{input:function(e){return t.ToggleTagSelectAll()}},model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}}),t._v(" "),t._l(t.locFilter.tagSelect,(function(e){return a("q-checkbox",{key:e.name,attrs:{label:e.name},on:{input:function(e){return t.UpdateMap()}},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"tag.value"}})}))],2),t._v(" "),a("div",{staticClass:"row items-center q-mt-lg"},[a("div",{staticClass:"col-shrink text-subtitle2 q-mx-md"},[t._v("時間")]),t._v(" "),a("q-range",{staticClass:"col",attrs:{min:t.dataTime.rangeMin,max:t.dataTime.rangeMax,step:1,"left-label-value":t.minTimeLabel,"right-label-value":t.maxTimeLabel,"label-always":""},on:{change:function(e){return t.UpdateMap()}},model:{value:t.locFilter.time,callback:function(e){t.$set(t.locFilter,"time",e)},expression:"locFilter.time"}})],1),t._v(" "),a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-shrink text-subtitle2 q-ma-md"},[t._v("備註")]),t._v(" "),a("q-input",{staticClass:"col q-ma-sm",attrs:{dense:""},on:{input:function(e){return t.UpdateMap()}},model:{value:t.locFilter.keyword,callback:function(e){t.$set(t.locFilter,"keyword",e)},expression:"locFilter.keyword"}})],1)]),t._v(" "),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{flat:"",label:"確定"},on:{click:function(e){t.openFilterPanel=!1}}})],1)],1)],1):t._e()],1)};d._withStripped=!0;var h={name:"statistic-map",props:{},components:{},data:function(){return{dataset:null,imageArr:[],openFilterPanel:!1,markerGroup:null,selectAll:!0,dataTime:{min:null,max:null,rangeMin:0,rangeMax:0},locFilter:{tagSelect:[],time:{min:null,max:null},keyword:""}}},created:function(){Vue.nextTick(function(){this.InitMap()}.bind(this))},methods:{InitMap:function(){this.map=L.map(this.$refs.map).setView([23.682094,120.7764642],7),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a href="https://www.openstreetmap.org/">OSM</a>',maxZoom:18}).addTo(this.map),this.markerGroup=L.markerClusterGroup(),this.map.addLayer(this.markerGroup)},InitTimeSelect:function(){for(var t=spacetime.now(),e=0;e<this.imageArr.length;e++){var a=spacetime(this.imageArr[e].dataTime,t.timezone().name);this.dataTime.min&&!this.dataTime.min.isAfter(a)||(this.dataTime.min=a.clone().last("day")),this.dataTime.max&&!this.dataTime.max.isBefore(a)||(this.dataTime.max=a.clone().next("day"))}this.dataTime.rangeMin=0,this.dataTime.rangeMax=this.dataTime.min.diff(this.dataTime.max,"day")+1,this.locFilter.time.min=this.dataTime.rangeMin,this.locFilter.time.max=this.dataTime.rangeMax},InitTagSelect:function(){this.locFilter.tagSelect=[];for(var t=0;t<this.dataset.tagArr.length;t++){var e=this.dataset.tagArr[t];this.locFilter.tagSelect.push({name:e,value:!0})}},ToggleTagSelectAll:function(){for(var t=0;t<this.locFilter.tagSelect.length;t++){this.locFilter.tagSelect[t].value=this.selectAll}this.UpdateMap()},SetGraphData:function(t,e){this.dataset=t,this.imageArr=e,this.InitTimeSelect(),this.InitTagSelect(),Vue.nextTick(function(){this.UpdateMap()}.bind(this))},UpdateMap:function(){this.ClearMarker();for(var t=this.imageArr,e={},a=0;a<this.locFilter.tagSelect.length;a++){var i=this.locFilter.tagSelect[a];e[i.name]=i.value}t=t.filter(function(t){if(!t.annotation)return!1;switch(this.dataset.annotationType){case"image":var a=t.annotation.annotation;if(e[a])return!0;break;case"bbox":for(var i=t.annotation.annotation,n=0;n<i.length;n++){a=i[n].tag;if(e[a])return!0}}return!1}.bind(this));var n=spacetime.now();t=(t=t.filter(function(t){var e=spacetime(t.dataTime,n.timezone().name),a=this.dataTime.min.add(this.locFilter.time.min,"day"),i=this.dataTime.min.add(this.locFilter.time.max,"day");return e.isAfter(a)&&e.isBefore(i)}.bind(this))).filter(function(t){return""==this.locFilter.keyword||!!t.remark&&-1!=t.remark.indexOf(this.locFilter.keyword)}.bind(this));for(a=0;a<t.length;a++){var r=t[a];if(r.lat&&r.lng){var s="";switch(this.dataset.annotationType){case"image":s=i=r.annotation.annotation;break;case"bbox":var o=r.annotation.annotation,l={};for(a=0;a<o.length;a++){i=o[a].tag;l[i]?l[i]++:l[i]=1}s=Object.keys(l).map((function(t){return t+":"+l[t]})).join("<br>")}var c="<img src='"+r.url+"' class='popup-image' />";c+="<div>"+s+"</div>";var u=L.marker({lat:r.lat,lng:r.lng}).bindPopup(c);this.markerGroup.addLayer(u)}}},ClearMarker:function(){this.markerGroup.clearLayers()}},computed:{minTimeLabel:function(){return this.dataTime.min.add(this.locFilter.time.min,"day").unixFmt("yyyy-MM-dd")},maxTimeLabel:function(){return this.dataTime.min.add(this.locFilter.time.max,"day").unixFmt("yyyy-MM-dd")}}},g=(a(102),Object(l.a)(h,d,[],!1,null,null,null));g.options.__file="src/vue/statistic-map.vue";var m=g.exports,p={name:"dataset-statistic",components:{topbar:r.a,"statistic-graph":u,"statistic-map":m},data:function(){return{tab:"graph",user:null,datasetID:null,info:null,imageArr:[]}},created:function(){var t=n.a.GetUrlParameter();this.datasetID=t.id;var e=n.a.GetUrlHash();e.tab&&(this.tab=e.tab),$.get("/user/info",function(t){"ok"==t.status&&(this.user=t.data)}.bind(this)),$.get("/dataset/view-dataset?id="+t.id,function(e){if("ok"!=e.status)return window.location.href="/?message="+encodeURIComponent("無法取得資料集資訊");this.info=e.data,$.get("/dataset/list-image?all=1&dataset="+t.id,function(e){if("ok"!=e.status)return window.location.href="/?message="+encodeURIComponent("無法取得影像資訊");this.imageArr=e.data;for(var a=0;a<this.imageArr.length;a++){var i=this.imageArr[a];i.url="/static/upload/dataset/"+t.id+"/image/"+i._id+".jpg"}this.InitTabContent()}.bind(this))}.bind(this))},methods:{GoToDataset:function(){window.location.href="/view?id="+this.datasetID},InitTabContent:function(){Vue.nextTick(function(){switch(window.location.hash="#tab="+this.tab,this.tab){case"graph":this.$refs.statisticGraph.SetGraphData(this.info,this.imageArr);break;case"map":this.$refs.statisticMap.SetGraphData(this.info,this.imageArr)}}.bind(this))}}},f=(a(104),Object(l.a)(p,i,[],!1,null,null,null));f.options.__file="src/vue/dataset-statistic.vue";var v=f.exports;new Vue({el:"#statisticApp",components:{"dataset-statistic":v}})},11:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-grey-8 text-white"},[a("q-toolbar",{staticClass:"q-px-md",attrs:{square:""}},[t.useMenu?a("q-btn",{attrs:{flat:"",round:"",icon:"menu"},on:{click:function(e){return t.ToggleMenu()}}}):t._e(),t._v(" "),a("a",{attrs:{href:"/"}},[a("q-btn",{attrs:{flat:""}},[a("q-avatar",{attrs:{size:"md",square:""}},[a("img",{attrs:{src:"/static/image/logo.png"}})]),t._v(" "),a("q-toolbar-title",{staticClass:"text-white"},[t._v(t._s(t.title))])],1)],1),t._v(" "),a("q-space"),t._v(" "),t.user?a("q-item",{attrs:{clickable:"",tag:"a",href:"/account"}},[a("q-avatar",{attrs:{size:"lg"}},[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.user.icon}})]),t._v(" "),a("q-item-section",{staticClass:"q-px-sm"},[a("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.user.name))])],1)],1):a("q-item",{attrs:{clickable:"",tag:"a",href:"/login"}},[a("q-icon",{attrs:{size:"md",name:"account_box"}}),t._v(" "),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[t._v("登入")])],1)],1)],1)],1)};i._withStripped=!0;var n={name:"topbar",props:{user:Object,useMenu:Boolean},data:function(){return{title:"群眾標註"}},created:function(){},methods:{ToggleMenu:function(){this.$emit("toggleMenu")}}},r=(a(30),a(0)),s=Object(r.a)(n,i,[],!1,null,null,null);s.options.__file="src/vue/topbar.vue";e.a=s.exports},12:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"location-select"},[e("div",{ref:"map",staticClass:"map"})])};i._withStripped=!0;var n={name:"location-select",props:{mode:String,initLoc:Object},components:{},data:function(){return{loc:null,status:"",OnGPSReady:null,map:null,locMarker:null,rangeMarker:null,range:10}},mounted:function(){this.InitMap()},methods:{InitMap:function(){switch(this.map=L.map(this.$refs.map).setView([23.682094,120.7764642],7),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a href="https://www.openstreetmap.org/">OSM</a>',maxZoom:18}).addTo(this.map),this.mode){case"selectLoc":this.map.on("click",function(t){var e=t.latlng;this.SetPosition(e.lat,e.lng)}.bind(this));break;case"selectRange":this.map.on("click",function(t){var e=t.latlng;this.SetRange(e.lat,e.lng,this.range)}.bind(this))}},SetPosition:function(t,e){t&&e&&(this.loc={lat:t,lng:e},this.status="座標: "+t.toFixed(5)+" "+e.toFixed(5),this.locMarker?this.locMarker.setLatLng(this.loc,{draggable:"selectLoc"==this.mode}).bindPopup(this.status).update():(this.locMarker=L.marker(this.loc,{draggable:"selectLoc"==this.mode}),this.locMarker.on("dragend",function(t){var e=this.locMarker.getLatLng();this.SetPosition(e.lat,e.lng)}.bind(this)),this.locMarker.addTo(this.map)),this.$emit("change"))},SetRange:function(t,e,a){t&&e&&(this.range=a,this.loc={lat:t,lng:e},this.status="座標: "+t.toFixed(5)+" "+e.toFixed(5),this.rangeMarker?(this.rangeMarker.setLatLng(this.loc),this.rangeMarker.setRadius(1e3*this.range)):(this.rangeMarker=L.circle(this.loc,{weight:1,color:"#ff0000",fillColor:"#ff3333",fillOpacity:.3,radius:1e3*this.range}),this.rangeMarker.addTo(this.map)),this.locMarker?this.locMarker.setLatLng(this.loc,{draggable:"selectRange"==this.mode}).bindPopup(this.status).update():(this.locMarker=L.marker(this.loc,{draggable:"selectRange"==this.mode}),this.locMarker.on("drag",function(t){var e=t.target.getLatLng();this.rangeMarker.setLatLng(e)}.bind(this)),this.locMarker.on("dragend",function(t){var e=this.locMarker.getLatLng();this.rangeMarker.setLatLng(e),this.loc={lat:e.lat,lng:e.lng},this.$emit("change")}.bind(this)),this.locMarker.addTo(this.map)),this.$emit("change"))},GetGPS:function(){this.status="無GPS-請點選位置",navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){switch(this.mode){case"selectLoc":this.SetPosition(t.coords.latitude,t.coords.longitude);break;case"selectRange":this.SetRange(t.coords.latitude,t.coords.longitude,this.range)}this.OnGPSReady&&this.OnGPSReady()}.bind(this),function(t){this.status="讀取GPS失敗-請點選位置"}.bind(this)):this.status="瀏覽器不支援GPS-請點選位置"},RemoveMarker:function(){this.locMarker&&(this.map.removeLayer(this.locMarker),this.locMarker=null),this.rangeMarker&&(this.map.removeLayer(this.rangeMarker),this.rangeMarker=null)}}},r=(a(43),a(0)),s=Object(r.a)(n,i,[],!1,null,null,null);s.options.__file="src/vue/location-select.vue";e.a=s.exports},15:function(t,e,a){var i=a(1),n=a(16);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},16:function(t,e,a){(e=a(2)(!1)).push([t.i,'html,body{height:100%;margin:0;padding:0;background-color:#edffef}*{box-sizing:border-box;font-family:"微軟正黑體", "Microsoft JhengHei"}\n',""]),t.exports=e},2:function(t,e,a){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a=t[1]||"",i=t[3];if(!i)return a;if(e&&"function"==typeof btoa){var n=(s=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[a].concat(r).concat([n]).join("\n")}var s,o,l;return[a].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var i=0;i<t.length;i++){var n=[].concat(t[i]);a&&(n[2]?n[2]="".concat(a," and ").concat(n[2]):n[2]=a),e.push(n)}},e}},3:function(t,e,a){"use strict";var i={GetUrlParameter:function(){for(var t=window.location.search.substring(1).split("&"),e={},a=0;a<t.length;a++){var i=t[a].split("=");e[i[0]]=i[1]}return e},GetUrlHash:function(){for(var t=window.location.hash.substr(1).split("&"),e={},a=0;a<t.length;a++){var i=t[a].split("=");e[i[0]]=i[1]}return e},ValidateEmail:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},PadLeft:function(t,e,a){var i=e-String(t).length+1;return i>0?new Array(i).join(a||"0")+t:t}};e.a=i},30:function(t,e,a){"use strict";var i=a(4);a.n(i).a},31:function(t,e,a){(e=a(2)(!1)).push([t.i,".topbar{width:100%}.topbar a{text-decoration:none}\n",""]),t.exports=e},4:function(t,e,a){var i=a(1),n=a(31);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},43:function(t,e,a){"use strict";var i=a(9);a.n(i).a},44:function(t,e,a){(e=a(2)(!1)).push([t.i,".location-select{width:100%}.location-select .map{width:100%;height:300px}\n",""]),t.exports=e},56:function(t,e,a){var i=a(1),n=a(101);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},57:function(t,e,a){var i=a(1),n=a(103);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},58:function(t,e,a){var i=a(1),n=a(105);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},9:function(t,e,a){var i=a(1),n=a(44);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},99:function(t,e,a){t.exports=a(107)}});