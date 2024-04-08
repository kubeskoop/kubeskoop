"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[4497],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(y,a(a({ref:n},s),{},{components:t})):r.createElement(y,a({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="\u7f51\u7edc\u63d2\u4ef6",c={unversionedId:"reference/connectivity-diagnosis/network-plugins",id:"reference/connectivity-diagnosis/network-plugins",title:"\u7f51\u7edc\u63d2\u4ef6",description:"KubeSkoop\u8fde\u901a\u6027\u8bca\u65ad\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7f51\u7edc\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/connectivity-diagnosis/network-plugins.md",sourceDirName:"reference/connectivity-diagnosis",slug:"/reference/connectivity-diagnosis/network-plugins",permalink:"/zh/docs/reference/connectivity-diagnosis/network-plugins",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Connectivity Diagnosis",permalink:"/zh/docs/category/connectivity-diagnosis-1"},next:{title:"\u4e91\u4f9b\u5e94\u5546",permalink:"/zh/docs/reference/connectivity-diagnosis/cloud-providers"}},l={},p=[{value:"Flannel",id:"flannel",level:2},{value:"Calico",id:"calico",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7f51\u7edc\u63d2\u4ef6"},"\u7f51\u7edc\u63d2\u4ef6"),(0,o.kt)("p",null,"KubeSkoop\u8fde\u901a\u6027\u8bca\u65ad\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7f51\u7edc\u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"flannel"},"Flannel"),(0,o.kt)("p",null,"\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},"host-gw"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"vxlan"),"\u6a21\u5f0f\u7684\u8fde\u901a\u6027\u8bca\u65ad\uff0c\u4f1a\u5728\u8fd0\u884c\u65f6\u81ea\u52a8\u68c0\u6d4b\u6240\u4f7f\u7528\u7684\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"calico"},"Calico"),(0,o.kt)("p",null,"\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},"BGP"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"IPIP"),"\u6a21\u5f0f\u7684\u8fde\u901a\u6027\u8bca\u65ad\uff0c\u4f1a\u5728\u8fd0\u884c\u65f6\u81ea\u52a8\u68c0\u6d4b\u6240\u4f7f\u7528\u7684\u7c7b\u578b\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Calico\u8bca\u65ad\u5c06\u4f1a\u4f18\u5148\u4f7f\u7528projectcalico.org/v3\u3002",(0,o.kt)("strong",{parentName:"p"},"Calico API Server"),"\u7ec4\u4ef6\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/maintenance/install-apiserver"},"Calico\u6587\u6863"),"\u3002")))}d.isMDXComponent=!0}}]);