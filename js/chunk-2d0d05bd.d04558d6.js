(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d05bd"],{6849:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"",color:"white"}},[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",{attrs:{link:"",to:"/personal/ingresos"}},[t._v("Ingresos")]),n("v-tab",{attrs:{link:"",to:"/personal/pagos"}},[t._v("Pagos")])],1),n("v-menu",{attrs:{"offset-y":"",left:"","offset-overflow":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",[t._v("mdi-bell")])],1)]}}])},[n("v-sheet",{staticClass:"d-flex justify-center align-center",attrs:{height:"250",width:"400"}},[n("v-sheet",{attrs:{height:"90%",width:"95%"}},[n("v-sheet",{attrs:{height:"10%"}},[n("div",{staticClass:"text-body-1 font-weight-bold"},[t._v("Anuncios")])]),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{height:"90%"}},t._l(t.anuncios,(function(e,a){return n("v-alert",{key:a,staticClass:"text-body-1",attrs:{border:"left","colored-border":"",color:"primary",elevation:"1"}},[t._v(" "+t._s(e.mensaje)+" ")])})),1)],1)],1)],1),n("v-btn",{attrs:{icon:""},on:{click:t.onLogout}},[n("v-icon",[t._v("mdi-exit-to-app")])],1)],1),n("router-view")],1)},r=[],o=(n("4de4"),n("96cf"),n("1da1")),s=n("bc3a"),i=n.n(s),c={name:"Personal",data:function(){return{anuncios:[]}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(t.host+"anuncios");case 3:n=e.sent,t.anuncios=n.data.filter((function(t){return"personal"==t.destinatario||"todos"==t.destinatario})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{onLogout:function(){this.$store.dispatch("doLogout"),this.$router.push("/")}},computed:{host:function(){return this.$store.state.host}}},u=c,l=n("2877"),d=n("6544"),v=n.n(d),h=n("0798"),f=n("40dc"),p=n("8336"),b=n("132d"),g=n("e449"),w=n("8dd9"),_=n("71a3"),m=n("fe57"),k=Object(l["a"])(u,a,r,!1,null,null,null);e["default"]=k.exports;v()(k,{VAlert:h["a"],VAppBar:f["a"],VBtn:p["a"],VIcon:b["a"],VMenu:g["a"],VSheet:w["a"],VTab:_["a"],VTabs:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0d05bd.d04558d6.js.map