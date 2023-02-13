"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,k=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(k,s(s({ref:t},c),{},{components:n})):o.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="Intro",a={unversionedId:"guide/diagnose/intro",id:"guide/diagnose/intro",title:"Intro",description:"A brief introduction to KubeSkoop connectivity diagnosis.",source:"@site/docs/guide/diagnose/intro.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/intro",permalink:"/docs/guide/diagnose/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connectivity diagnosis",permalink:"/docs/category/connectivity-diagnosis"},next:{title:"Supported Network Plugins",permalink:"/docs/guide/diagnose/network-plugins"}},l={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Install KubeSkoop command",id:"install-kubeskoop-command",level:3},{value:"One-Shot Diagnose",id:"one-shot-diagnose",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"Limitations",id:"limitations",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro"},"Intro"),(0,r.kt)("p",null,"A brief introduction to KubeSkoop connectivity diagnosis."),(0,r.kt)("p",null,"KubeSkoop connectivity diagnosis provides one-shot diagnose for persistent network failure. It can detect network misconfiguration(",(0,r.kt)("strong",{parentName:"p"},"network device status, iptables rules, VM security group rules, and more"),") for various endpoint types and links(Pod, Service, Node, Ingress/Egress traffic) in Kubernetes cluster. It also supports detecting IaaS misconfiguration for various cloud providers."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"install-kubeskoop-command"},"Install KubeSkoop command"),(0,r.kt)("p",null,"Through ",(0,r.kt)("inlineCode",{parentName:"p"},"go install")," to install KubeSkoop CLI\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/alibaba/kubeskoop/cmd/kubeskoop\n")),(0,r.kt)("h3",{id:"one-shot-diagnose"},"One-Shot Diagnose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubeskoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service\nI0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output\n")),(0,r.kt)("p",null,"And then, you can open ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")," to view the dianosis result through browser."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"When run KubeSkoop connectivity diagnosis, it generates traffic graph from source address to destination address by the network plugin and cloud provider of your cluster. Then, it collects network stack information (iptables rules, network device info, sysctls, etc.) on nodes."),(0,r.kt)("p",null,"When build traffic links, it will evaluate links and edges in the graph to check whether it works as expceted. If not, it will be consiered as a misconfiguration."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"KubeSkoop connectivity diagnosis now only supports diagnosis for implemented network plugins. For more information, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/diagnose/network-plugins"},"Network plugins")))}d.isMDXComponent=!0}}]);