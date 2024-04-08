"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0},a="Intro",l={unversionedId:"intro",id:"intro",title:"Intro",description:"KubeSkoop is a network diagnosis and monitoring suite for Kubernetes, and supports multiple CNI plugins and IaaS cloud providers.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},s={},u=[{value:"Key Features",id:"key-features",level:2},{value:"One-Shot Diagnose For Network Broken",id:"one-shot-diagnose-for-network-broken",level:3},{value:"In-Depth Kernel Monitor",id:"in-depth-kernel-monitor",level:3},{value:"Network Anomaly Event",id:"network-anomaly-event",level:3},{value:"User-friendly Web Console",id:"user-friendly-web-console",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Contact",id:"contact",level:2},{value:"License",id:"license",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"KubeSkoop is a ",(0,o.kt)("strong",{parentName:"p"},"network diagnosis and monitoring suite for Kubernetes"),", and supports multiple CNI plugins and IaaS cloud providers."),(0,o.kt)("p",null,"It is designed to help users quickly diagnose and troubleshoot container network problems, and provide the ability to locate and track network events."),(0,o.kt)("p",null,"For different network plugins and IaaS providers, KubeSkoop automatically builds network links in Kubernetes clusters, combined with eBPF's in-depth monitoring of the kernel's critical paths, to analyze common Kubernetes cluster network problems."),(0,o.kt)("p",null,"By analyzing link configurations and backtracking historical network anomalies, it can significantly simplify the difficulty and time consuming of diagnosing Kubernetes network problems."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:n(1884).Z,width:"2421",height:"959"})),(0,o.kt)("p",null,"You can view ",(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," to get started with KubeSkoop, or ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/installation"},"Installation")," to deploy a production-ready KubeSkoop instance."),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("h3",{id:"one-shot-diagnose-for-network-broken"},"One-Shot Diagnose For Network Broken"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Diagnose in-cluster traffic between Pod,Service,Node and Ingress/Egress Traffic."),(0,o.kt)("li",{parentName:"ul"},"Cover whole linux network stack: Socket,Bridge,Veth,Netfilter,sysctls\u2026"),(0,o.kt)("li",{parentName:"ul"},"Support IaaS network probe for cloud providers.")),(0,o.kt)("h3",{id:"in-depth-kernel-monitor"},"In-Depth Kernel Monitor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"eBPF seamless kernel monitor"),(0,o.kt)("li",{parentName:"ul"},"CO-RE scripts on series kernel by BTF"),(0,o.kt)("li",{parentName:"ul"},"export metrics to standard Prometheus metric API")),(0,o.kt)("h3",{id:"network-anomaly-event"},"Network Anomaly Event"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"support dozens of anomy scenes recognition"),(0,o.kt)("li",{parentName:"ul"},"export anomy event to Grafana Loki or Web Console")),(0,o.kt)("h3",{id:"user-friendly-web-console"},"User-friendly Web Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrating all capabilities of KubeSkoop, provides network diagnosis, event monitoring, packet capturing, latency detection, etc.")),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Feel free to open issues and pull requests. Any feedback is much appreciated!"),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DingTalk Group ID(26720020148)")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"Most source code in KubeSkoop which running on userspace are licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md"},"Apache License, Version 2.0"),".\nThe BPF code in ",(0,o.kt)("inlineCode",{parentName:"p"},"/bpf")," directory are licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING"},"GPL v2.0")," to compact with Linux kernel helper functions."))}d.isMDXComponent=!0},1884:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubeskoop_features-013c259a250e57a27c4de7601bb1c4b7.jpg"}}]);