(this["webpackJsonpclass-profile"]=this["webpackJsonpclass-profile"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},78:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(45),r=c.n(s),j=(c(55),c(56),c(47)),i=c(4),x=c(6),u=c(3),b=c(2);var d=function(e){var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{height:300,width:300,onMouseLeave:function(){return s([])},children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.e,{data:e.data,onNearestX:function(t,c){var a=c.index;return s([{x:e.data.map((function(e){return e.x}))[a],y:e.data.map((function(e){return e.y}))[a]}])}}),Object(b.jsx)(u.a,{values:n})]})})};var l=function(e){var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{height:300,width:300,xType:"ordinal",onMouseLeave:function(){return s([])},children:[Object(b.jsx)(u.c,{}),Object(b.jsx)(u.i,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.h,{data:e.data,onNearestX:function(t,c){var a=c.index;return s([{x:e.data.map((function(e){return e.x}))[a],y:e.data.map((function(e){return e.y}))[a]}])}}),Object(b.jsx)(u.a,{values:n})]})})};var o=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{height:300,width:300,yType:"ordinal",children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.b,{data:e.data})]})})};var O=function(e){var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{width:300,height:300,stackBy:"y",xType:"ordinal",children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.h,{data:e.data[0],onNearestX:function(t,c){var a=c.index;return s(e.data.map((function(e){return e[a]})))}}),Object(b.jsx)(u.h,{data:e.data[1]}),Object(b.jsx)(u.a,{values:n})]})})};var h=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{width:300,height:300,stackBy:"x",yType:"ordinal",children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.b,{data:e.data[0]}),Object(b.jsx)(u.b,{data:e.data[1]})]})})};var y=function(e){var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{width:300,height:300,children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.f,{className:"weighted-scatterplot",opacity:"0.6",sizeRange:[5,15],data:e.data,onNearestX:function(t,c){var a=c.index;return s([{x:e.data.map((function(e){return e.x}))[a],y:e.data.map((function(e){return e.y}))[a]}])}}),Object(b.jsx)(u.a,{values:n})]})})};var v=function(e){for(var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1],r=e.data,j=r.length,i=0,d=0;d<j;d++)i+=r[d].y;for(var l=i/50,o=[],O=[],h=0,y=0;y<j;y++){var v=h+r[y].y;o.push({x0:h,x:v,y0:0,y:10}),O.push({x:(h+v)/2,y:-2,label:r[y].x,style:{fontSize:10}}),h=v+l}var f=o;return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{height:150,width:450,onMouseLeave:function(){return s([])},children:[Object(b.jsx)(u.d,{data:O,labelAnchorX:"middle"}),Object(b.jsx)(u.j,{data:f,onNearestX:function(e,t){var c=t.index;return s([{x:O.map((function(e){return e.label}))[c],y:r.map((function(e){return e.y}))[c]}])}}),Object(b.jsx)(u.a,{values:n})]})})};var f=function(e){for(var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1],r=e.data,j=r.length,i=3.5,d=i/3,l=0,o=d,O=[],h=[],y=[],v=[],f=0;f<j;f++){var m=o+i,g=r[f].y.sort((function(e,t){return e-t})),p=g.length,N=p/2;if(N%2!=0)var S=N-.5,w=N+.5;else S=N,w=N;var D=g.slice(0,S+1),k=g.slice(w,p);function P(e){var t=e.length/2;if(t%1!=0)var c=e[t-.5];else c=(e[t-1]+e[t])/2;return c}var z=P(D),A=P(k),C=g[0],E=g[p-1],M=(C+E)/2,B=2*(M-C);E>l&&(l=E);var X=P(g);O.push({x0:o,x:m,y0:z,y:A}),h.push({x:(o+m)/2,y:M,yVariance:B}),y.push({x0:o,x:m,y0:X-.1,y:X+.1,median:X}),v.push({x:(o+m)/2,y:-5.5,label:r[f].x,style:{fontSize:10}}),o=m+d}return Object(b.jsx)("div",{children:Object(b.jsxs)(u.m,{height:300,width:57.75*j,xDomain:[0,j*(1.35*i)+1.1*d],yDomain:[0,1.1*l],onMouseLeave:function(){return s([])},children:[Object(b.jsx)(u.i,{}),Object(b.jsx)(u.c,{}),Object(b.jsx)(u.l,{hideTicks:!0}),Object(b.jsx)(u.n,{}),Object(b.jsx)(u.d,{data:v,labelAnchorX:"middle"}),Object(b.jsx)(u.j,{data:O,onNearestX:function(e,t){var c=t.index;return s([{x:v.map((function(e){return e.label}))[c],y:y.map((function(e){return e.median}))[c]}])}}),Object(b.jsx)(u.j,{color:"#164b80",data:y}),Object(b.jsx)(u.k,{className:"whisker-series-example",data:h,color:"#164b80"}),Object(b.jsx)(u.a,{values:n})]})})};var m=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(u.g,{data:e.data,width:300,height:300,className:!0})})},g=[{x:0,y:8},{x:1,y:5},{x:2,y:4},{x:3,y:9},{x:4,y:1},{x:5,y:7},{x:6,y:6},{x:7,y:3},{x:8,y:2},{x:9,y:0}],p=[{x:1,y:10,size:15},{x:1.7,y:12,size:10},{x:2,y:5,size:1},{x:3,y:15,size:12},{x:2.5,y:10,size:2},{x:3.5,y:7,size:4},{x:4.5,y:8,size:25},{x:5.5,y:7,size:23}],N=[{x:1,y:10},{x:2,y:5},{x:3,y:15}],S=[{y:1,x:3},{y:2,x:7},{y:3,x:10},{y:4,x:9},{y:5,x:15}],w=[[{x:1,y:10},{x:2,y:5},{x:3,y:15}],[{x:1,y:12},{x:2,y:2},{x:3,y:11}]],D=[[{y:1,x:10},{y:2,x:5},{y:3,x:15}],[{y:1,x:12},{y:2,x:2},{y:3,x:11}]],k=[{x:"Blue",y:10},{x:"Grey",y:20},{x:"Red",y:30}],P=[{x:"Blue",y:[5,10,32,17,18,20,16]},{x:"Grey",y:[3,8,12,29,34,42,43,50,61,75]},{x:"Blue",y:[5,10,16,17,18,20,32]},{x:"Blue",y:[5,10,16,17,18,20,32]}],z=[{angle:1,className:"Example1",label:"Example1"},{angle:5,className:"Example2",label:"Example2"},{angle:2,className:"Example3",label:"Example3"}];var A=function(){return Object(b.jsxs)("div",{children:["About Page",Object(b.jsx)("p",{children:"UW SE 26 Class Profile"}),Object(b.jsx)(d,{data:g}),Object(b.jsx)(l,{data:N}),Object(b.jsx)(o,{data:S}),Object(b.jsx)(O,{data:w}),Object(b.jsx)(h,{data:D}),Object(b.jsx)(y,{data:p}),Object(b.jsx)(v,{data:k}),Object(b.jsx)(f,{data:P}),Object(b.jsx)(m,{data:z})]})};var C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Academics Page"})})};var E=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Demographics Page"})})};var M=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Sex/Drugs Page"})})};var B=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Housing Page"})})};var X=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Miscellaneous Page"}),"Data that doesn't really fit into the other categories will go here."]})};c(78);var T=function(e){var t=function(t){return t===e.activePage&&"active"};return Object(b.jsx)("div",{children:Object(b.jsxs)("header",{className:"main_header",children:[Object(b.jsx)("h3",{children:"SE 2026 Profile"}),Object(b.jsx)("div",{class:"spacer"}),Object(b.jsx)("button",{onClick:e.setAbout,className:t("about"),children:"About"}),Object(b.jsx)("button",{onClick:e.setDemographics,className:t("demographics"),children:"Demographics"}),Object(b.jsx)("button",{onClick:e.setAcademics,className:t("academics"),children:"Academics"}),Object(b.jsx)("button",{onClick:e.setHousing,className:t("housing"),children:"Housing"}),Object(b.jsx)("button",{onClick:e.setSexDrugs,className:t("sexDrugs"),children:"Sex/Drugs"}),Object(b.jsx)("button",{onClick:e.setMisc,className:t("misc"),children:" Misc"})]})})};var L=function(){var e=Object(a.useState)("about"),t=Object(x.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(T,{setAbout:function(){return n("about")},setAcademics:function(){return n("academics")},setDemographics:function(){return n("demographics")},setSexDrugs:function(){return n("sexDrugs")},setHousing:function(){return n("housing")},setMisc:function(){return n("misc")},activePage:c}),function(){switch(c){case"academics":return Object(b.jsx)(C,{});case"demographics":return Object(b.jsx)(E,{});case"sexDrugs":return Object(b.jsx)(M,{});case"housing":return Object(b.jsx)(B,{});case"misc":return Object(b.jsx)(X,{});default:return Object(b.jsx)(A,{})}}()]})};var F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{exact:!0,path:"/class-profile",children:Object(b.jsx)(L,{})})})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),H()}},[[81,1,2]]]);
//# sourceMappingURL=main.29726e80.chunk.js.map