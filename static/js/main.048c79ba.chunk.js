(this["webpackJsonpeditorial-data-viz-template"]=this["webpackJsonpeditorial-data-viz-template"]||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var i=n(5),o=n.n(i),a=n(40),r=n(29),s=n(12),c=n(9),l=n(20),d={"@font-face":[]},h={"@global":{html:{position:"fixed"},canvas:{verticalAlign:"bottom"},body:{margin:0,boxSizing:"border-box",position:"fixed",width:"100%"},"h1, h2, h3, h4, h5, h6":{fontFamily:"serif"},h1:{fontSize:"calc(44px + 2vmin)"},p:{fontFamily:"sans-serif",fontSize:"20px"}}},u={"@global":{body:{margin:0,boxSizing:"border-box"},"h1, h2, h3, h4, h5, h6":{fontFamily:"serif"},h1:{fontSize:"calc(44px + 2vmin)"},p:{fontFamily:"sans-serif",fontSize:"20px"}}},b=n(8),j=Object(c.a)(Object(c.a)(Object(c.a)({},d),u),{},{app:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",minHeight:"100vh",padding:"3rem 2rem",textAlign:"left",boxSizing:"border-box"}}),m=Object(l.a)(j)((function(e){var t=e.classes;return Object(b.jsx)("main",{className:t.app,children:Object(b.jsx)("nav",{children:Object.values(V.slice(1,V.length)).map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.b,{to:e.path,children:Object(b.jsx)("h2",{children:e.name})},t),Object(b.jsx)("p",{children:e.description})]})}))})})})),p=n(11),f=Object(l.a)({cursor:{position:"absolute",borderRadius:"50%",backgroundColor:"hotpink",transition:"width 0.2s ease-in-out, height 0.2s ease-in-out",zIndex:10}})((function(e){var t=e.classes,n=e.size,i=e.position;return Object(b.jsx)("div",{className:t.cursor,style:{width:"".concat(n,"px"),height:"".concat(n,"px"),left:"".concat(i[0]-n/2,"px"),top:"".concat(i[1]-n/2,"px")}})})),g=n.p+"static/media/pattern.45550f3b.svg",x=Object(c.a)(Object(c.a)(Object(c.a)({},d),u),{},{container:{position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",height:"100vh",padding:"3rem 2rem",textAlign:"left",boxSizing:"border-box",cursor:"none"},canvas:{width:"100%",height:"100%",position:"absolute",top:0,left:0,mixBlendMode:"lighten"},pattern:{position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:"yellow",backgroundImage:"url(".concat(g,")"),backgroundSize:"450px 450px"}}),O=Object(l.a)(x)((function(e){var t=e.classes,n=Object(i.useRef)(null),o=Object(i.useState)(20),a=Object(p.a)(o,2),r=a[0],s=a[1],c=Object(i.useState)([0,0]),l=Object(p.a)(c,2),d=l[0],h=l[1],u=Object(i.useRef)(!1),j=function(e){u.current=e},m=function(){s(40),j(!0)},g=function(){s(20),j(!1)},x=function(e){var t=[e.pageX,e.pageY];h(t),u.current&&function(e,t,n){var i=e.getContext("2d"),o=Object(p.a)(t,2),a=o[0],r=o[1];i.moveTo(a,r),i.beginPath(),i.lineTo(a,r),i.stroke()}(n.current,t)},O=function(){var e=n.current;e&&function(e){var t=window.innerWidth,n=window.innerHeight,i=window.devicePixelRatio;e.width=t*i,e.height=n*i,e.style.width="".concat(t,"px"),e.style.height="".concat(n,"px");var o=e.getContext("2d");o.scale(i,i),o.fillStyle="white",o.strokeStyle="black",o.lineWidth=50,o.lineCap="round",o.lineJoin="round",o.rect(0,0,t,n),o.fill()}(e)};return Object(i.useEffect)((function(){return O(),window.addEventListener("mousedown",m),window.addEventListener("mouseup",g),window.addEventListener("mousemove",x),window.addEventListener("resize",O),function(){window.removeEventListener("mousedown",m),window.removeEventListener("mouseup",g),window.removeEventListener("mousemove",x),window.removeEventListener("resize",O)}}),[]),Object(b.jsxs)("main",{className:t.container,children:[Object(b.jsx)("div",{className:t.pattern}),Object(b.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(b.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(b.jsx)(f,{size:r,position:d}),Object(b.jsx)("canvas",{className:t.canvas,ref:n})]})})),w=Object(l.a)({cursor:{position:"absolute",borderRadius:"50%",backgroundColor:"hotpink",transition:"width 0.2s ease-in-out, height 0.2s ease-in-out",zIndex:10}})((function(e){var t=e.classes,n=e.size,i=e.position;return Object(b.jsx)("div",{className:t.cursor,style:{width:"".concat(n,"px"),height:"".concat(n,"px"),left:"".concat(i[0]-n/2,"px"),top:"".concat(i[1]-n/2,"px")}})})),v=function(e,t){var n=window.innerWidth,i=window.innerHeight,o=window.devicePixelRatio;e.width=n*o,e.height=i*o,e.style.width="".concat(n,"px"),e.style.height="".concat(i,"px");var a=e.getContext("2d");a.scale(o,o),"in"===t?(a.fillStyle="black",a.strokeStyle="white"):(a.fillStyle="white",a.strokeStyle="black"),a.lineWidth=50,a.lineCap="round",a.lineJoin="round",a.shadowBlur=10,a.shadowColor=a.strokeStyle,a.rect(0,0,n,i),a.fill()},y=function(e,t){var n=e.getContext("2d"),i=Object(p.a)(t,2),o=i[0],a=i[1];n.moveTo(o,a),n.beginPath(),n.lineTo(o,a),n.stroke()},k=Object(c.a)(Object(c.a)(Object(c.a)({},d),u),{},{container:{position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",height:"100vh",padding:"3rem 2rem",textAlign:"left",boxSizing:"border-box",cursor:"none"},scratchIn:{},scratchOut:{mixBlendMode:"darken"},canvas:{width:"100%",height:"100%",position:"absolute",top:0,left:0,mixBlendMode:"lighten"},pattern:{position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:"yellow",backgroundImage:"url(".concat(g,")"),backgroundSize:"450px 450px"},imgContainer:{backgroundColor:"purple",position:"absolute",top:0,left:0,width:"100%",height:"100%"},img:{width:"100%",height:"100%",objectFit:"cover"}}),S=Object(l.a)(k)((function(e){var t=e.classes,n=Object(i.useRef)(null),o=Object(i.useRef)(null),a=Object(i.useState)(20),r=Object(p.a)(a,2),s=r[0],c=r[1],l=Object(i.useState)([0,0]),d=Object(p.a)(l,2),h=d[0],u=d[1],j=Object(i.useRef)(!1),m=function(e){j.current=e},f=function(){c(40),m(!0)},g=function(){c(20),m(!1)},x=function(e){var t=[e.pageX,e.pageY];u(t),j.current&&(y(n.current,t),y(o.current,t))},O=function(){var e=n.current,t=o.current;e&&t&&(v(e,"in"),v(t,"out"))};return Object(i.useEffect)((function(){return O(),window.addEventListener("mousedown",f),window.addEventListener("mouseup",g),window.addEventListener("mousemove",x),window.addEventListener("resize",O),function(){window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",g),window.removeEventListener("mousemove",x),window.removeEventListener("resize",O)}}),[]),Object(b.jsxs)("main",{className:t.container,children:[Object(b.jsxs)("section",{className:t.scratchIn,children:[Object(b.jsx)("div",{className:t.pattern}),Object(b.jsx)("canvas",{className:t.canvas,ref:n})]}),Object(b.jsxs)("section",{className:t.scratchOut,children:[Object(b.jsx)("div",{className:t.imgContainer,children:Object(b.jsx)("img",{className:t.img,src:"https://images.unsplash.com/photo-1647869349875-54fad783e873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",alt:"placeholder"})}),Object(b.jsx)("canvas",{className:t.canvas,ref:o})]}),Object(b.jsx)(w,{size:s,position:h})]})})),L=n(17),I=function(e,t,n){var i={isStatic:!0,render:{fillStyle:"white"}},o=100,a=L.Bodies.rectangle(e/2,t+50,e+100,o,i),r=L.Bodies.rectangle(e/2,-50,e+100,o,i),s=L.Bodies.rectangle(-50,t/2,o,t+100,i),c=L.Bodies.rectangle(e+50,t/2,o,t+100,i);L.World.add(n.world,[a,r,s,c])},z=function(e,t,n){var i=L.Bodies.circle(e/2,t/2,250,{isStatic:!0,render:{fillStyle:"white"}});L.World.add(n.world,[i])},C=function(e,t){var n=L.MouseConstraint.create(t,{element:e,constraint:{render:{visible:!1}}});L.World.add(t.world,[n])},E=function(e,t){return L.Bodies.circle(e,t,20,{render:{}})},M=Object(c.a)(Object(c.a)(Object(c.a)({},d),u),{},{container:{position:"relative",width:"100%",height:"100vh",boxSizing:"border-box"}}),R=Object(l.a)(M)((function(e){var t=e.classes,n=Object(i.useRef)(),o=Object(i.useRef)(L.Engine.create());Object(i.useEffect)((function(){!function(e,t){var n=e.current,i=t.current,o=window.innerHeight,a=window.innerWidth,r=window.devicePixelRatio;if(i){var s=L.Render.create({element:n,engine:i,options:{height:o,width:a,pixelRatio:r,background:"black",wireframes:!1}});L.Runner.run(i),L.Render.run(s),I(a,o,i),z(a,o,i),C(n,i);var c=L.Composites.stack(50,50,15,5,40,40,(function(e,t){return E(e,t)}));L.World.add(i.world,[c])}}(n,o)}),[]);return Object(b.jsx)("section",{className:t.container,ref:n,onClick:function(e){var t=e.pageX,n=e.pageY,i=E(t,n);L.World.add(o.current.world,[i])}})})),N=n(18),P=n(15),B={black:"#000000",white:"#ffffff",red:"#ae2012"},A=function(e){if("#"===e[0]){var t=e.split("#");return parseInt("0x".concat(t[1]),16)}return e},D=function(e){var t=e.position,n=Object(i.useRef)(null);return Object(P.b)((function(){n.current.rotation.x+=.005})),Object(b.jsxs)("mesh",{position:t,ref:n,children:[Object(b.jsx)("coneGeometry",{}),Object(b.jsx)("meshLambertMaterial",{color:A(B.white),emissive:A(B.red)})]})},W=function(){return Object(b.jsx)("directionalLight",{color:"red",position:[0,0,5]})},F=Object(c.a)(Object(c.a)(Object(c.a)({},d),h),{},{container:{position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",height:"100vh",textAlign:"left",boxSizing:"border-box"}}),T=function(){var e=Object(P.d)().viewport,t=Object(i.useState)([]),n=Object(p.a)(t,2),o=n[0],a=n[1],r=Object(i.useState)(!1),s=Object(p.a)(r,2),c=s[0],l=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("mesh",{onPointerMove:function(e){var t=e.point;c&&a((function(e){return[].concat(Object(N.a)(e),[[t.x,t.y,t.z]])}))},onPointerDown:function(){return l(!0)},onPointerUp:function(){return l(!1)},children:[Object(b.jsx)("planeBufferGeometry",{args:[e.width,e.height]}),Object(b.jsx)("meshBasicMaterial",{visible:!1})]}),Object(b.jsx)(W,{}),o.map((function(e,t){return Object(b.jsx)(D,{position:e},t)}))]})},H=Object(l.a)(F)((function(e){var t=e.classes;return Object(b.jsx)("div",{className:t.container,children:Object(b.jsx)(P.a,{dpr:window.devicePixelRatio,children:Object(b.jsx)(T,{})})})})),_=n(63),J=n(62);function G(e){var t=Object.assign({},e),n=Object(i.useRef)(),o=Object(J.a)("/shoe-draco.glb"),a=o.nodes,r=o.materials;return Object(P.b)((function(e){var t=e.clock.getElapsedTime();n.current.rotation.z=-.2-(1+Math.sin(t/1.5))/20,n.current.rotation.x=Math.cos(t/4)/8,n.current.rotation.y=Math.sin(t/4)/8,n.current.position.y=(1+Math.sin(t/1.5))/10})),Object(b.jsxs)("group",Object(c.a)(Object(c.a)({ref:n},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:a.shoe.geometry,material:r.laces}),Object(b.jsx)("mesh",{geometry:a.shoe_1.geometry,material:r.mesh}),Object(b.jsx)("mesh",{geometry:a.shoe_2.geometry,material:r.caps}),Object(b.jsx)("mesh",{geometry:a.shoe_3.geometry,material:r.inner}),Object(b.jsx)("mesh",{geometry:a.shoe_4.geometry,material:r.sole}),Object(b.jsx)("mesh",{geometry:a.shoe_5.geometry,material:r.stripes}),Object(b.jsx)("mesh",{geometry:a.shoe_6.geometry,material:r.band}),Object(b.jsx)("mesh",{geometry:a.shoe_7.geometry,material:r.patch})]}))}J.a.preload("/shoe-draco.glb");var Y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{intensity:1}),Object(b.jsx)("spotLight",{intensity:.5,angle:.1,penumbra:1,position:[10,15,10],castShadow:!0})]})},X=Object(c.a)(Object(c.a)(Object(c.a)({},d),h),{},{container:{position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",height:"100vh",textAlign:"left",boxSizing:"border-box"}}),q=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y,{}),Object(b.jsx)(i.Suspense,{fallback:null,children:Object(b.jsx)(G,{})}),Object(b.jsx)(_.a,{minPolarAngle:Math.PI/2,maxPolarAngle:Math.PI/2,enableZoom:!1,enablePan:!1})]})},U=Object(l.a)(X)((function(e){var t=e.classes;return Object(b.jsx)("div",{className:t.container,children:Object(b.jsx)(P.a,{dpr:window.devicePixelRatio,children:Object(b.jsx)(q,{})})})})),V=[{name:"Home",description:"",path:"/",page:Object(b.jsx)(m,{})},{name:"Scratch In",description:"Solid color on top, scratch to reveal pattern",path:"scratch-in",page:Object(b.jsx)(O,{})},{name:"Scratch In + Scratch Out",description:"Two layers, 1st layer on top that scratches to a transparent scratch. 2nd layer in the background that scratches to an image / text.",path:"scratch-in-out",page:Object(b.jsx)(S,{})},{name:"2D Collision",description:"using Matter.js, 2D physics engine. Click to create new balls that'll collide with the world objects.",path:"2d-collision",page:Object(b.jsx)(R,{})},{name:"ThreeJS basics",description:"using Three.js, 3D physics engine. Click and drag mouse to create chain of rotating cones.",path:"three-js",page:Object(b.jsx)(H,{})},{name:"ThreeJS Load Models",description:"Loading external models into three.js. Click and drag the shoe to rotate it.",path:"poly",page:Object(b.jsx)(U,{})}];Object(a.render)(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(s.c,{children:V.map((function(e,t){var n=e.path,i=e.page;return Object(b.jsx)(s.a,{path:n,element:i},t)}))})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.048c79ba.chunk.js.map