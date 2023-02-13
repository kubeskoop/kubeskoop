"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[2152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="Output Format",p={unversionedId:"guide/diagnose/output-format",id:"guide/diagnose/output-format",title:"Output Format",description:"KubeSkoop connectivity diagnose supports multiple output formats.",source:"@site/docs/guide/diagnose/output-format.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/output-format",permalink:"/docs/guide/diagnose/output-format",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cloud Providers",permalink:"/docs/guide/diagnose/cloud-providers"},next:{title:"Web UI",permalink:"/docs/guide/diagnose/web-ui"}},u={},s=[{value:"dot",id:"dot",level:2},{value:"svg",id:"svg",level:2},{value:"json",id:"json",level:2}],l={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"output-format"},"Output Format"),(0,r.kt)("p",null,"KubeSkoop connectivity diagnose supports multiple output formats."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," are supported as output format, by using ",(0,r.kt)("inlineCode",{parentName:"p"},"--format")," to specify which one you want to use. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"--output")," to specify output filename. When set output filename to ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", it will print the result to standard output."),(0,r.kt)("p",null,"If none of them is specified, diagnose will print simple link info and diagnose result to standard output."),(0,r.kt)("h2",{id:"dot"},"dot"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"dot")," as the output format. For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"dot")," syntax, please see ",(0,r.kt)("a",{parentName:"p",href:"https://graphviz.org/doc/info/lang.html"},"documentation"),". "),(0,r.kt)("p",null,"This format only contains link graph, and will not contain diagnose result."),(0,r.kt)("h2",{id:"svg"},"svg"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," as the output format. ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," are generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"graphviz")," via dot file."),(0,r.kt)("p",null,"This format only contains link graph, and will not contain diagnose result."),(0,r.kt)("h2",{id:"json"},"json"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," as the output format. It contains details about nodes and edges in link graph, and also contains diagnose result on them."))}c.isMDXComponent=!0}}]);