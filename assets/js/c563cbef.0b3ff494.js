"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[6477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,b=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Web UI",s={unversionedId:"guide/diagnose/web-ui",id:"guide/diagnose/web-ui",title:"Web UI",description:"Use Web UI to view diagnose result interactively.",source:"@site/docs/guide/diagnose/web-ui.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/web-ui",permalink:"/docs/guide/diagnose/web-ui",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Output Format",permalink:"/docs/guide/diagnose/output-format"},next:{title:"Command line arguments",permalink:"/docs/guide/diagnose/command-line-arguments"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web-ui"},"Web UI"),(0,i.kt)("p",null,"Use Web UI to view diagnose result interactively."),(0,i.kt)("p",null,"Web UI are provided to view diagnose result interactivity, by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--http")," argument to enable it. When diagnose finished, it will start an HTTP server on the specifed address, by using ",(0,i.kt)("inlineCode",{parentName:"p"},"--http-address")," argument. Default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"--http-address")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubeskoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service\nI0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output\n")),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")," in browser, you can see the diagnose result:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagnose_web",src:n(7530).Z,width:"1509",height:"888"})))}d.isMDXComponent=!0},7530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro_diagnose_web-bc9d4978510205180b22f33a57cd0e09.jpg"}}]);