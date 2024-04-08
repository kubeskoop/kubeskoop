"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[6725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="\u6293\u5305",p={unversionedId:"guide/packet-capturing",id:"guide/packet-capturing",title:"\u6293\u5305",description:"\u4f60\u9700\u8981\u5728Web\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528\u8be5\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/packet-capturing.md",sourceDirName:"guide",slug:"/guide/packet-capturing",permalink:"/zh/docs/guide/packet-capturing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u94fe\u8def\u56fe",permalink:"/zh/docs/guide/network-graph"},next:{title:"\u5ef6\u8fdf\u63a2\u6d4b",permalink:"/zh/docs/guide/latency-detection"}},l={},c=[{value:"\u53d1\u8d77\u6293\u5305\u4efb\u52a1",id:"\u53d1\u8d77\u6293\u5305\u4efb\u52a1",level:2},{value:"\u6dfb\u52a0\u76ee\u6807",id:"\u6dfb\u52a0\u76ee\u6807",level:3},{value:"\u8fc7\u6ee4\u5305",id:"\u8fc7\u6ee4\u5305",level:3},{value:"\u4e0b\u8f7d\u6293\u5305\u7ed3\u679c",id:"\u4e0b\u8f7d\u6293\u5305\u7ed3\u679c",level:2}],u={toc:c},d="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6293\u5305"},"\u6293\u5305"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/guide/web-console"},"Web\u63a7\u5236\u53f0"),"\u4e2d\u4f7f\u7528\u8be5\u529f\u80fd\u3002")),(0,a.kt)("p",null,"KubeSkoop\u63d0\u4f9b\u4e86\u5206\u5e03\u5f0f\u6293\u5305\u529f\u80fd\uff0c\u901a\u8fc7\u90e8\u7f72\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684KubeSkoop Agent\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u540c\u65f6\u5bf9\u591a\u4e2aPod/Node\u8fdb\u884c\u6293\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Packet Capturing",src:n(6769).Z,width:"3596",height:"1478"})),(0,a.kt)("h2",{id:"\u53d1\u8d77\u6293\u5305\u4efb\u52a1"},"\u53d1\u8d77\u6293\u5305\u4efb\u52a1"),(0,a.kt)("p",null,"\u53d1\u8d77\u6293\u5305\u4efb\u52a1\uff0c\u9700\u8981\u586b\u5199\u6293\u5305\u7684\u76ee\u6807\u3001\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u3001\u6293\u5305\u65f6\u95f4\u4fe1\u606f\u3002\u5728\u586b\u5199\u597d\u76f8\u5e94\u7684\u4fe1\u606f\u540e\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"Submit Task"),"\u6309\u94ae\uff0c\u53d1\u8d77\u6293\u5305\u4efb\u52a1\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u76ee\u6807"},"\u6dfb\u52a0\u76ee\u6807"),(0,a.kt)("p",null,"\u901a\u8fc7\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"Targets"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Add"),"\u6309\u94ae\uff0c\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u5668\u6dfb\u52a0\u6293\u5305\u76ee\u6807\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Targets",src:n(8196).Z,width:"1080",height:"806"})),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Add Target"),"\u7a97\u53e3\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u8282\u70b9\u6216\u8005Pod\u4f5c\u4e3a\u6293\u5305\u76ee\u6807\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u547d\u540d\u7a7a\u95f4&\u540d\u79f0\u9009\u62e9\u5355\u4e2aPod/Node\uff0c\u6216\u662f\u6839\u636e\u6807\u7b7e\u540c\u65f6\u9009\u62e9\u591a\u4e2a\u3002"),(0,a.kt)("p",null,"\u5728\u9009\u62e9Pod\u4f5c\u4e3a\u76ee\u6807\u65f6\uff0c\u901a\u8fc7\u52fe\u9009",(0,a.kt)("inlineCode",{parentName:"p"},"Also capture node packets"),"\uff0c\u4f1a\u540c\u65f6\u5c06Pod\u6240\u5728\u7684Node\u6dfb\u52a0\u81f3\u6293\u5305\u76ee\u6807\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u8fc7\u6ee4\u5305"},"\u8fc7\u6ee4\u5305"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u5bf9\u6293\u5305\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\u3002\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"tcpdump"),"\u4e00\u81f4\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/manpages/pcap-filter.7.html"},"Pcap filter"),"\u8bed\u6cd5\u3002\u4f8b\u5982\uff0c\u60f3\u8981\u6293\u53d6\u4e0eIP\u5730\u5740",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.1.0"),"\u4e4b\u95f4\u7684\u901a\u4fe1\u6d41\u91cf\uff0c\u53ef\u4ee5\u5c06\u8868\u8fbe\u5f0f\u5199\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"host 10.0.1.0\n")),(0,a.kt)("p",null,"\u82e5\u65e0\u9700\u8fc7\u6ee4\uff0c\u8bf7\u5c06\u8868\u8fbe\u5f0f\u7559\u7a7a\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u6293\u5305\u7ed3\u679c"},"\u4e0b\u8f7d\u6293\u5305\u7ed3\u679c"),(0,a.kt)("p",null,"\u5728\u6293\u5305\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u901a\u8fc7\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"\u5217\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Download"),"\u6309\u94ae\uff0c\u4e0b\u8f7d\u6293\u5305\u7ed3\u679c\u81f3\u672c\u5730\uff0c\u5e76\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://www.wireshark.org/"},"Wireshark"),"\u7b49\u7f51\u7edc\u5206\u6790\u5de5\u5177\u8fdb\u884c\u67e5\u770b\u3002"))}s.isMDXComponent=!0},8196:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/packet-capturing-add-targets-e707783c137857b3a44d7975d09a9c14.jpg"},6769:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/packet_capturing-12c1d0d715095aab928f1c50547b75d6.jpg"}}]);