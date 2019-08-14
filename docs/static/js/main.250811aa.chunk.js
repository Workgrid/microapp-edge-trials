(window["webpackJsonp@workgrid/microapp-edge-trials"]=window["webpackJsonp@workgrid/microapp-edge-trials"]||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),o=a.n(i),r=(a(25),a(17)),l=a(6),u=a(5),s=a(7),m=a.n(s),p=function(){var e=Object(n.useState)("Constructed"),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"}));Object(n.useEffect)(function(){console.log("Initalizing Workgrid in useEffect"),o.current.initialize(),i("Initialized")},[]);var r=function(e){o.current.showDetail({url:"".concat(window.location.origin).concat(window.location.pathname,"#/").concat(e),title:"Edge Microapp"})};return c.a.createElement("div",null,c.a.createElement("h1",null,"Edge Microapp"),c.a.createElement("p",null,'This is the "edgy" microapp.'),c.a.createElement("p",null,a),c.a.createElement("div",{className:"action-block vertical"},c.a.createElement("button",{className:"secondary",onClick:function(){return r("iframe")}},"Inner iFrame"),c.a.createElement("button",{className:"primary",onClick:function(){return r("geolocation")}},"Geolocation")))},d=(a(14),function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"})),t=Object(n.useState)(5),a=Object(u.a)(t,2),i=a[0],o=a[1],r=Object(n.useState)(""),l=Object(u.a)(r,2),s=l[0],p=l[1],d=Object(n.useRef)();return Object(n.useEffect)(function(){e.current.initialize(),d.current=setInterval(function(){o(function(e){return e-1})},1e3)},[]),Object(n.useEffect)(function(){i<=0&&(p("https://www.catapultsgame.com/app"),clearInterval(d.current))},[i]),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"IFrame Detail"),c.a.createElement("p",null,'Tests an inner iFrame. This is a typical use case for "wrapping" an existing app in a MicroApp.'),c.a.createElement("div",{className:"exampleBlock"},c.a.createElement("p",null,"Showing iFrame in ",i,"s"),c.a.createElement("iframe",{style:{width:"100%",borderWidth:1},title:"Example Iframe",src:s})))}),f=function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"})),t=Object(n.useState)("geolocation"in navigator),a=Object(u.a)(t,1)[0],i=Object(n.useState)(),o=Object(u.a)(i,2),r=o[0],l=o[1];Object(n.useEffect)(function(){e.current.initialize()},[]);return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Geolocation Detail"),c.a.createElement("p",null,"This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app."),c.a.createElement("div",{className:"example-block"},c.a.createElement("p",null,"GeoLocation is available: ",JSON.stringify(a)),c.a.createElement("pre",null,r)),c.a.createElement("div",{className:"action-block"},c.a.createElement("button",{className:"primary",onClick:function(){if(a){console.log("Getting location data");try{navigator.geolocation.getCurrentPosition(function(e){console.log("Got location data ",e),l(JSON.stringify(e,null,2))})}catch(e){console.log(e),l("Error fetching location data")}}else l("Geolocation is not available")}},"Get Location")))},g=function(){return c.a.createElement(r.a,{basename:window.location.pathname},c.a.createElement(l.a,{path:"/",exact:!0,component:p}),c.a.createElement(l.a,{path:"/iframe",component:d}),c.a.createElement(l.a,{path:"/geolocation",component:f}))};o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.250811aa.chunk.js.map