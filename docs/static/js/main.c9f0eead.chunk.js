(this["webpackJsonp@workgrid/microapp-edge-trials"]=this["webpackJsonp@workgrid/microapp-edge-trials"]||[]).push([[0],{252:function(e){e.exports=JSON.parse('{"a":"0.2.8"}')},258:function(e,t,a){e.exports=a(569)},462:function(e,t,a){},463:function(e,t,a){},468:function(e,t){},470:function(e,t){},507:function(e,t){},508:function(e,t){},564:function(e,t,a){},569:function(e,t,a){"use strict";a.r(t);a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(93),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(300),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(329),a(330),a(331),a(332),a(333),a(334),a(336),a(338),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(355),a(356),a(357),a(358),a(359),a(361),a(362),a(365),a(366),a(367),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(194),a(381),a(382),a(383),a(384),a(385),a(386),a(387),a(195),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(399),a(400),a(401),a(402),a(403),a(404),a(405),a(406),a(407),a(408),a(409),a(410),a(411),a(412),a(413),a(415),a(416),a(417),a(418),a(419),a(420),a(421),a(422),a(423),a(424),a(425),a(426),a(427),a(428),a(429),a(430),a(431),a(432),a(433),a(434),a(435),a(436),a(437),a(438),a(439),a(440),a(441),a(442),a(443),a(444),a(445),a(446),a(447),a(448),a(449),a(450),a(451),a(452),a(453),a(454),a(457),a(203);var n=a(1),c=a.n(n),l=a(251),i=a.n(l),r=(a(462),a(255)),o=a(53),s=a(112),m=a.n(s),u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn secondary",onClick:function(){return window.location.reload(!0)}},"Refresh"))},d=(a(463),a(252)),p=a(156),f=a.n(p),E=a(253),g=a(159),b=a(61),h=a(254),v=[{name:"Token"},{name:"Title"},{name:"Show",inDetail:!1},{name:"Hide"}],k=function(e){var t=e.microapp,a=e.panel,l=void 0===a?"summary":a,i=e.className,r=e.style,o=Object(n.useState)(v.map((function(e){return Object(g.a)({inSummary:!0,inDetail:!0,loading:!1,result:!1},e)}))),s=Object(b.a)(o,2),m=s[0],u=s[1],d=Object(n.useRef)({});Object(n.useEffect)((function(){d.current.Token=k,d.current.Title=w,d.current.Show=N,d.current.Hide=y}));var p=function(e,t){u((function(a){return a.map((function(a){return a.name===e?Object(g.a)({},a,{},t):a}))}))},k=function(){t&&(p("Token",{loading:!0,result:!1}),setTimeout(Object(E.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getToken();case 2:a=e.sent,"edge-microapp"===(n=Object(h.decode)(a)).aud?p("Token",{loading:!1,result:!0}):(p("Token",{loading:!1,result:!1}),console.warn("Invalid token: ".concat(n.aud," !== ").concat("edge-microapp")));case 5:case"end":return e.stop()}}),e)}))),500))},w=function(){p("Title",{result:!1}),t.updateTitle("Title Change: ".concat(Math.floor(500*Math.random()))),p("Title",{result:!0})},N=function(){p("Show",{result:!1}),t.showDetail({url:"".concat(window.location.origin).concat(window.location.pathname,"#/tests")}),p("Show",{result:!0})},y=function(){p("Hide",{result:!1}),t.hideDetail(),p("Hide",{result:!0})};return c.a.createElement("div",{className:"container "+i,style:r},c.a.createElement("strong",null,"Tests:"),m.filter((function(e){return"summary"===l&&e.inSummary||"detail"===l&&e.inDetail})).map((function(e){return c.a.createElement("div",{className:"checklist",key:e.name},e.loading?c.a.createElement("span",{"aria-label":"loading",role:"img",className:"pass"},"\ud83e\udd14"):c.a.createElement(c.a.Fragment,null,e.result?c.a.createElement("span",{"aria-label":"pass",role:"img",className:"pass"},"\u2705"):c.a.createElement("span",{"aria-label":"fail",role:"img",className:"pass"},"\u274c")),c.a.createElement("div",{className:"item"},e.name),c.a.createElement("div",{className:"item"},c.a.createElement("button",{className:"btn small action-small",onClick:(t=e.name,function(){d.current[t]()})},"Run")));var t})),c.a.createElement("div",{className:"checklist"},c.a.createElement("a",{href:"./test-internal.html"},"Internal Link")),c.a.createElement("div",{className:"checklist"},c.a.createElement("a",{href:"https://www.bing.com?q=external",target:"_blank"},"External Link")),c.a.createElement("div",{className:"checklist"},c.a.createElement("a",{href:"tel:1-562-867-5309"},"Tel Link")),c.a.createElement("div",{className:"checklist"},c.a.createElement("a",{href:"mailto:support@workgrid.com"},"Mailto Link")))},w=function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp-local",audience:"edge-microapp"}));Object(n.useEffect)((function(){e.current.initialize()}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Edge MicroUI"),c.a.createElement("p",null,'This is the "edgy" microapp v',d.a),c.a.createElement("section",{className:"section"},c.a.createElement("form",null,c.a.createElement(k,{style:{marginBottom:"1rem"},panel:"summary",microapp:e.current}),c.a.createElement("label",{htmlFor:"test-input"},"Test Input:"),c.a.createElement("input",{id:"test-input",type:"text",style:{marginTop:".4rem"},className:"form-control",placeholder:"Input Test"}))),c.a.createElement("div",{className:"action-block vertical"},c.a.createElement(u,null),c.a.createElement("button",{className:"btn primary",onClick:function(){return t="featurepolicy",void e.current.showDetail({url:"".concat(window.location.origin).concat(window.location.pathname,"#/").concat(t),title:"Edge Microapp"});var t}},"Feature Policy")))},N=(a(564),function(){var e=Object(n.useRef)(new m.a({id:"edge-microapp",audience:"edge-microapp"})),t=Object(n.useState)("geolocation"in navigator),a=Object(b.a)(t,1)[0],l=Object(n.useState)(!!navigator.mediaDevices),i=Object(b.a)(l,1)[0],r=Object(n.useState)("Get location data >>"),o=Object(b.a)(r,2),s=o[0],u=o[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),f=p[0],E=p[1];Object(n.useEffect)((function(){e.current.initialize()}),[]);return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Feature Policy Detail"),c.a.createElement("p",null,"This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app."),c.a.createElement("div",{className:"example-block"},c.a.createElement("p",null,"GeoLocation is available: ",JSON.stringify(a)),c.a.createElement("div",{className:"feature-block"},c.a.createElement("pre",null,s),c.a.createElement("div",{tabIndex:"0",className:"feature-icon",onClick:function(){if(a){u("Getting location data");try{navigator.geolocation.getCurrentPosition((function(e){u("lat: ".concat(e.coords.latitude,", lon: ").concat(e.coords.longitude))}))}catch(e){u("Error fetching location data")}}else u("Geolocation is not available")}},c.a.createElement("span",{role:"img","aria-label":"position"},"\ud83e\udded"))),c.a.createElement("p",null,"Media is available: ",JSON.stringify(i)),c.a.createElement("div",{className:"feature-block"},i&&c.a.createElement("div",{tabIndex:"1",className:"feature-icon",onClick:function(){return E((function(e){return!e}))}},c.a.createElement("span",{role:"img","aria-label":"mic",className:f?"on":"off"},"\ud83c\udf99\ufe0f")))))}),y=function(){return c.a.createElement("div",{className:"workgrid"},c.a.createElement(r.a,{basename:window.location.pathname},c.a.createElement(o.a,{path:"/",exact:!0,component:w}),c.a.createElement(o.a,{path:"/featurepolicy",component:N})))};i.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.c9f0eead.chunk.js.map