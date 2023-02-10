"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,k=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Intro",l={unversionedId:"intro",id:"intro",title:"Intro",description:"Overview",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"One-Shot Diagnose",id:"one-shot-diagnose",level:3},{value:"In-Depth Kernel Monitor",id:"in-depth-kernel-monitor",level:3},{value:"Network Anomaly Event",id:"network-anomaly-event",level:3}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:n(9659).Z,width:"2421",height:"959"}),"\nKubeSkoop is a kubernetes networking diagnose tool for different CNI plug-ins and IAAS providers.\nKubeSkoop automatic construct network traffic graph of Pod in the Kubernetes cluster,\nmonitoring and analysis of the kernel's critical path by eBPF, to resolve most of Kubernetes cluster network problems.\nSignificantly simplifies the difficulty of diagnosing Kubernetes networking issues."),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("h3",{id:"one-shot-diagnose"},"One-Shot Diagnose"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Diagnose in-cluster traffic between Pod,Service,Node and Ingress/Egress Traffic."),(0,o.kt)("li",{parentName:"ul"},"Cover whole linux network stack: Socket,Bridge,Veth,Netfilter,sysctls\u2026"),(0,o.kt)("li",{parentName:"ul"},"Support IAAS network probe for cloud providers.")),(0,o.kt)("h3",{id:"in-depth-kernel-monitor"},"In-Depth Kernel Monitor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"eBPF seamless kernel monitor"),(0,o.kt)("li",{parentName:"ul"},"CO-RE scripts on series kernel by BTF"),(0,o.kt)("li",{parentName:"ul"},"export metrics to standard Prometheus metric API")),(0,o.kt)("h3",{id:"network-anomaly-event"},"Network Anomaly Event"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"support dozens of anomy scenes recognition"),(0,o.kt)("li",{parentName:"ul"},"export anomy event to Grafana Loki")),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Feel free to open issues and pull requests. Any feedback is much appreciated!"),(0,o.kt)("h1",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DingTalk Group ID(26720020148)")),(0,o.kt)("h1",{id:"license"},"License"),(0,o.kt)("p",null,"Most source code in KubeSkoop which running on userspace are licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md"},"Apache License, Version 2.0"),".\nThe BPF code in ",(0,o.kt)("inlineCode",{parentName:"p"},"/bpf")," directory are licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING"},"GPL v2.0")," to compat with Linux kernel helper functions."))}p.isMDXComponent=!0},9659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubeskoop_features-0027a105a1f976386c8837d8dfb278a3.png"}}]);