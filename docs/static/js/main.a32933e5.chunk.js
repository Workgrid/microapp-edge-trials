(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),o=a.n(i),l=(a(26),a(18)),r=a(6),u=a(5),s=a(7),m=a.n(s),p=function(){var e=Object(n.useState)("Constructed"),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"}));Object(n.useEffect)(function(){console.log("Initalizing Workgrid in useEffect"),o.current.initialize(),i("Initialized")},[]);var l=function(e){o.current.showDetail({url:"".concat(window.location.origin).concat(window.location.pathname,"#/").concat(e),title:"Edge Microapp"})};return c.a.createElement("div",null,c.a.createElement("h1",null,"Edge Microapp"),c.a.createElement("p",null,'This is the "edgy" microapp.'),c.a.createElement("p",null,a),c.a.createElement("div",{className:"action-block vertical"},c.a.createElement("button",{className:"secondary",onClick:function(){return l("iframe")}},"Inner iFrame"),c.a.createElement("button",{className:"primary",onClick:function(){return l("geolocation")}},"Geolocation")))},f=(a(15),function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"})),t=Object(n.useState)(5),a=Object(u.a)(t,2),i=a[0],o=a[1],l=Object(n.useState)(""),r=Object(u.a)(l,2),s=r[0],p=r[1],f=Object(n.useRef)();return Object(n.useEffect)(function(){e.current.initialize(),f.current=setInterval(function(){o(function(e){return e-1})},1e3)},[]),Object(n.useEffect)(function(){i<=0&&(p("https://www.catapultsgame.com/app"),clearInterval(f.current))},[i]),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"IFrame Detail"),c.a.createElement("p",null,'Tests an inner iFrame. This is a typical use case for "wrapping" an existing app in a MicroApp.'),c.a.createElement("div",{className:"exampleBlock"},c.a.createElement("p",null,"Showing iFrame in ",i,"s"),c.a.createElement("iframe",{style:{width:"100%",borderWidth:1},title:"Example Iframe",src:s})))}),d=function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"})),t=Object(n.useState)("geolocation"in navigator),a=Object(u.a)(t,1)[0],i=Object(n.useState)(),o=Object(u.a)(i,2),l=o[0],r=o[1];Object(n.useEffect)(function(){e.current.initialize()},[]);return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Geolocation Detail"),c.a.createElement("p",null,"This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app."),c.a.createElement("div",{className:"example-block"},c.a.createElement("p",null,"GeoLocation is available: ",JSON.stringify(a)),c.a.createElement("pre",null,l)),c.a.createElement("div",{className:"action-block"},c.a.createElement("button",{className:"primary",onClick:function(){if(a){console.log("Getting location data");try{navigator.geolocation.getCurrentPosition(function(e){console.log("Got location data ",e),r(JSON.stringify(e,null,2))})}catch(e){console.log(e),r("Error fetching location data")}}else r("Geolocation is not available")}},"Get Location")))},E=function(){return c.a.createElement(l.a,{basename:window.location.pathname},c.a.createElement(r.a,{path:"/",exact:!0,component:p}),c.a.createElement(r.a,{path:"/iframe",component:f}),c.a.createElement(r.a,{path:"/geolocation",component:d}))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a32933e5.chunk.js.map