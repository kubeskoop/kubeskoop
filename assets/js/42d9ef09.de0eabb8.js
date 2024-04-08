"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[9125],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),k=r,g=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5},i="Packet Capturing",p={unversionedId:"guide/packet-capturing",id:"guide/packet-capturing",title:"Packet Capturing",description:"You need to use this feature in Web Console.",source:"@site/docs/guide/packet-capturing.md",sourceDirName:"guide",slug:"/guide/packet-capturing",permalink:"/docs/guide/packet-capturing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Network Graph",permalink:"/docs/guide/network-graph"},next:{title:"Latency Detection",permalink:"/docs/guide/latency-detection"}},c={},l=[{value:"Perform a packet capture",id:"perform-a-packet-capture",level:2},{value:"Add Targets",id:"add-targets",level:3},{value:"Filtering Packets",id:"filtering-packets",level:3},{value:"Download Task Result",id:"download-task-result",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packet-capturing"},"Packet Capturing"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You need to use this feature in ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/web-console"},"Web Console"),".")),(0,r.kt)("p",null,"KubeSkoop provides distributed packet capturing feature. Via KubeSkoop Agent deployed on your nodes, it allows you to capture packets for multiple Pods/Nodes at the same time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Packet Capturing",src:a(6769).Z,width:"3596",height:"1478"})),(0,r.kt)("h2",{id:"perform-a-packet-capture"},"Perform a packet capture"),(0,r.kt)("p",null,"To start a packet capturing task, you need to provide the target, filter expression, and packet capturing duration, and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit Task")," button."),(0,r.kt)("h3",{id:"add-targets"},"Add Targets"),(0,r.kt)("p",null,"By clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button of ",(0,r.kt)("inlineCode",{parentName:"p"},"Targets"),", you can add packet capturing targets via the target selector."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Targets",src:a(8196).Z,width:"1080",height:"806"})),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Target")," window, you can add Node or Pod as the target. You can add single Pod/Node by its namespace & name,\nor add multiple targets by label selector."),(0,r.kt)("p",null,"When selecting Pod as target(s), by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"Also capture node packets"),", the Node where the Pod is running on will be added to the packet capturing target at the same time."),(0,r.kt)("h3",{id:"filtering-packets"},"Filtering Packets"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter"),", you can add filter expressions to filter packet capturing results. Filter expressions are in the same form as ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump")," to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/manpages/pcap-filter.7.html"},"Pcap filter")," syntax. For example, if you want to capture traffic to and from IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.0"),", you can write the expression as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"host 10.0.10.0\n")),(0,r.kt)("p",null,"If there is no need to filter packets, you can leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," field empty."),(0,r.kt)("h2",{id:"download-task-result"},"Download Task Result"),(0,r.kt)("p",null,"When task is completed, you can download the result to your local computer by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Download")," button in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," column of ",(0,r.kt)("inlineCode",{parentName:"p"},"History"),".\nYou can view the packet capturing file using network analysis tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.wireshark.org/"},"Wireshark"),"."))}d.isMDXComponent=!0},8196:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packet-capturing-add-targets-e707783c137857b3a44d7975d09a9c14.jpg"},6769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packet_capturing-12c1d0d715095aab928f1c50547b75d6.jpg"}}]);