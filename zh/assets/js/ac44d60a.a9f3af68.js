"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[4300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,m=s["".concat(p,".").concat(c)]||s[c]||k[c]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0},l="\u7b80\u4ecb",i={unversionedId:"guide/monitoring/intro",id:"guide/monitoring/intro",title:"\u7b80\u4ecb",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/monitoring/intro.md",sourceDirName:"guide/monitoring",slug:"/guide/monitoring/intro",permalink:"/zh/docs/guide/monitoring/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/zh/docs/category/monitoring"},next:{title:"\u53ef\u89c6\u5316\u914d\u7f6e",permalink:"/zh/docs/guide/monitoring/visualization"}},p={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6838\u5fc3\u539f\u7406",id:"\u6838\u5fc3\u539f\u7406",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:3},{value:"\u4fe1\u606f\u91c7\u96c6",id:"\u4fe1\u606f\u91c7\u96c6",level:3},{value:"\u805a\u5408\u5206\u6790",id:"\u805a\u5408\u5206\u6790",level:3},{value:"\u6307\u6807",id:"\u6307\u6807",level:2},{value:"\u5f02\u5e38\u4e8b\u4ef6",id:"\u5f02\u5e38\u4e8b\u4ef6",level:2}],d={toc:u},s="wrapper";function k(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"KubeSkoop\u7f51\u7edc\u76d1\u63a7\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9Pod\u7ea7\u522b\u7684\u7f51\u7edc\u76d1\u63a7\uff0c\u5305\u62ec\u6d41\u91cf\uff0c\u5e94\u7528\u5c42\u8fde\u63a5\u4fe1\u606f\uff0csocket\u5185\u5b58\u5206\u914d\u72b6\u6001\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9Pod\u7ea7\u522b\u7684\u7f51\u7edc\u5f02\u5e38\u72b6\u6001\u7684\u6307\u6807\u76d1\u63a7\uff0c\u4f8b\u5982Pod\u5185\u8fdb\u7a0b\u5bf9socket\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u7684\u7b49\u5f85\u65f6\u95f4\u8d85\u8fc7100ms\u7684\u6b21\u6570\uff0cPod\u53d1\u51faTCP rst\u62a5\u6587\u7684\u6b21\u6570\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9Pod\u7ea7\u522b\u7684\u7f51\u7edc\u5f02\u5e38\u4e8b\u4ef6\u7684\u73b0\u573a\uff0c\u63d0\u4f9b\u4e8b\u4ef6\u53d1\u751f\u7684\u8be6\u7ec6\u4fe1\u606f\u7684\u89c2\u6d4b\uff0c\u4f8b\u5982\u5185\u6838\u7f51\u7edc\u8f6f\u4e2d\u65ad\u8c03\u5ea6\u7b49\u5f85\u8fc7\u4e45\uff0cUDP\u51fa\u73b0socket\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u7684\u6ea2\u51fa\u7b49")),(0,a.kt)("p",null,"\u4e0e\u5e38\u89c1\u7684Kubernetes\u76d1\u63a7\u548c\u53ef\u89c2\u6d4b\u6027\u5de5\u5177\u7684\u4e3b\u8981\u533a\u522b\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"Prometheus Node exporter"),(0,a.kt)("th",{parentName:"tr",align:null},"cAdvisor/Metric API"),(0,a.kt)("th",{parentName:"tr",align:null},"KubeSkoop"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6309\u7167Pod\u533a\u5206"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u72b6\u6001\u76d1\u63a7"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5f02\u5e38\u4e8b\u4ef6\u7684\u73b0\u573a\u6355\u83b7"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u6838\u7f51\u7edc\u9ad8\u9636\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h2",{id:"\u6838\u5fc3\u539f\u7406"},"\u6838\u5fc3\u539f\u7406"),(0,a.kt)("h3",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubeskoop-monitoring-structure",src:n(6213).Z,width:"1311",height:"921"})),(0,a.kt)("h3",{id:"\u4fe1\u606f\u91c7\u96c6"},"\u4fe1\u606f\u91c7\u96c6"),(0,a.kt)("p",null,"KubeSkoop\u63d0\u4f9b\u4e86\u9002\u914d\u4e8eKubernetes\u7f51\u7edc\u76d1\u63a7\u529f\u80fd\uff0c\u5728\u8282\u70b9\u4e0a\uff0cKubeSkoop\u91c7\u96c6\u5e76\u5f52\u7c7b\u4e86\u7f51\u7edc\u76f8\u5173\u7684\u5927\u91cf\u6570\u636e\uff0c\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u7684\u6838\u5fc3\u539f\u7406\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7CRI\u63a5\u53e3\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"Linux /proc/"),"\u83b7\u53d6\u8282\u70b9\u5185\u7684\u7f51\u7edc\u9694\u79bb\u72b6\u6001\u53ca\u5176\u4e0ePod\u7684\u5173\u8054\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"Linux /proc/"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Linux netlink"),"\u548ceBPF\u83b7\u53d6\u7f51\u7edc\u76d1\u63a7\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7eBPF\u83b7\u53d6\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u5728\u7f51\u7edc\u5f02\u5e38\u4e8b\u4ef6\u53d1\u751f\u65f6\u7684\u4e0a\u4e0b\u6587\u72b6\u6001")),(0,a.kt)("h3",{id:"\u805a\u5408\u5206\u6790"},"\u805a\u5408\u5206\u6790"),(0,a.kt)("p",null,"KubeSkoop\u91c7\u96c6\u7684\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u83b7\u53d6\uff0c\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7Prometheus\u83b7\u53d6\u76d1\u63a7\u4fe1\u606f\uff0c\u5e76\u4f7f\u7528Grafana\u8fdb\u884c\u53ef\u89c6\u5316\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6eGrafana Loki\u63a5\u6536KubeSkoop\u7684\u4e8b\u4ef6\u63a8\u9001\uff0c\u5e76\u4f7f\u7528Grafana\u8fdb\u884c\u53ef\u89c6\u5316\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528kubeskoop inspector\u547d\u4ee4\u884c\u5de5\u5177\u89c2\u5bdf\u76d1\u63a7\u4fe1\u606f")),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5c06\u76d1\u63a7\u6570\u636e\u8fdb\u884c\u53ef\u89c6\u5316\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/zh/docs/guide/monitoring/visualization"},"\u53ef\u89c6\u5316\u914d\u7f6e"))),(0,a.kt)("h2",{id:"\u6307\u6807"},"\u6307\u6807"),(0,a.kt)("p",null,"KubeSkoop\u63d0\u4f9bPod\u7ea7\u522b\u7684\u6307\u6807\u4fe1\u606f\uff0c\u53cd\u5e94\u5b9e\u4f8b\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7684\u73af\u5883\u53d8\u5316\uff0c\u901a\u8fc7Prometheus metrics\u66b4\u9732\u3002"),(0,a.kt)("h2",{id:"\u5f02\u5e38\u4e8b\u4ef6"},"\u5f02\u5e38\u4e8b\u4ef6"),(0,a.kt)("p",null,"KubeSkoop\u63d0\u4f9b\u8282\u70b9\u4e0a\u53d1\u751f\u7684\u7f51\u7edc\u76f8\u5173\u7684\u5f02\u5e38\u4e8b\u4ef6\uff0c\u6839\u636e\u5728\u957f\u671f\u5904\u7406\u7f51\u7edc\u95ee\u9898\u4e2d\u7684\u7ecf\u9a8c\uff0c\u6211\u4eec\u5f52\u7eb3\u4e86\u51e0\u79cd\u5e38\u89c1\u7684\u7f51\u7edc\u7591\u96be\u95ee\u9898\uff0c\u4ed6\u4eec\u5f80\u5f80\u5728\u96c6\u7fa4\u4e2d\u4ee5\u65e0\u6cd5\u590d\u73b0\uff0c\u5076\u7136\u53d1\u751f\u7684\u65b9\u5f0f\u5e72\u6270\u6b63\u5e38\u7684\u4e1a\u52a1\uff0c\u7f3a\u4e4f\u6709\u6548\u7684\u5b9a\u4f4d\u624b\u6bb5\uff0c\u5176\u4e2d\u90e8\u5206\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u6570\u636e\u62a5\u6587\u88ab\u4e22\u5f03\u5f15\u53d1\u7684\u8fde\u63a5\u5931\u8d25\uff0c\u54cd\u5e94\u8d85\u65f6\u7b49\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u6570\u636e\u5904\u7406\u8017\u65f6\u4e45\u5f15\u53d1\u7684\u5076\u53d1\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"TCP\uff0cconntrack\u7b49\u72b6\u6001\u673a\u5236\u5f02\u5e38\u5f15\u53d1\u7684\u4e1a\u52a1\u5f02\u5e38\u95ee\u9898\u3002")),(0,a.kt)("p",null,"\u9488\u5bf9\u65e0\u6cd5\u5feb\u901f\u590d\u73b0\u548c\u96be\u4ee5\u83b7\u53d6\u73b0\u573a\u7684\u7f51\u7edc\u95ee\u9898\uff0cKubeSkoop\u63d0\u4f9b\u4e86\u57fa\u4e8eeBPF\u7684\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u4e0a\u4e0b\u6587\u89c2\u6d4b\u80fd\u529b\uff0c\u5728\u95ee\u9898\u53d1\u751f\u7684\u73b0\u573a\u6355\u83b7\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b9e\u65f6\u72b6\u6001\uff0c\u4ee5\u4e8b\u4ef6\u65e5\u5fd7\u7684\u65b9\u5f0f\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u5728\u4e8b\u4ef6\u65e5\u5fd7\u7684\u4fe1\u606f\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u4e8b\u4ef6\u73b0\u573a\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u4ee5",(0,a.kt)("strong",{parentName:"p"},"tcp_reset"),"\u63a2\u9488\u4e3a\u4f8b\uff0c\u5f53\u51fa\u73b0\u6709Pod\u6536\u5230\u4e86\u4e00\u4e2a\u8bbf\u95ee\u4e3a\u6b62\u7aef\u53e3\u7684\u6b63\u5e38\u62a5\u6587\u65f6\uff0cKubeSkoop\u4f1a\u6355\u83b7\u4ee5\u4e0b\u4e8b\u4ef6\u4fe1\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"type=TCPRESET_NOSOCK pod=storage-monitor-5775dfdc77-fj767 namespace=kube-system protocol=TCP saddr=100.103.42.233 sport=443 daddr=10.1.17.188 dport=33488\n")),(0,a.kt)("p",null,"\u4e8b\u4ef6\u4e2d\u7684\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"type\u8868\u660e\u51fa\u73b0\u4e86\u4e00\u6b21TCPRESET_NOSOCK\u7c7b\u578b\u7684\u4e8b\u4ef6\uff0c\u8fd9\u662f",(0,a.kt)("strong",{parentName:"li"},"tcpreset"),"\u63a2\u9488\u6355\u83b7\u7684\u4e00\u79cd\u4e8b\u4ef6\uff0c\u4ed6\u8868\u660e\u6709\u8bbf\u95ee\u4e3a\u6b62\u7aef\u53e3\u7684\u62a5\u6587\u88ab\u672c\u5730\u53d1\u9001RST\u62a5\u6587\u62d2\u7edd\uff0c\u62d2\u7edd\u7684\u539f\u56e0\u662f\u6ca1\u6709\u6839\u636e\u62a5\u6587\u627e\u5230\u76f8\u5e94\u7684socket\uff0c\u901a\u5e38\u5728NAT\u5931\u6548\uff0c\u5982ipvs\u5b9a\u65f6\u5668\u8d85\u65f6\u7b49\u539f\u56e0\u53d1\u751f\u540e\uff0c\u4f1a\u4f34\u968f\u8fd9\u4e2a\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"pod/namespace\u662fKubeSkoop\u6839\u636e\u53d1\u9001\u62a5\u6587\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0cip\u5730\u5740\u548c\u7f51\u7edc\u8bbe\u5907\u5e8f\u53f7\u8fdb\u884c\u5339\u914d\u540e\u5173\u8054\u7ed9\u4e8b\u4ef6\u7684Pod\u5143\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ol"},"saddr/sport/daddr/dport\u662fKubeSkoop\u5728\u5185\u6838\u83b7\u53d6\u5230\u7684\u5f02\u5e38\u62a5\u6587\u7684\u4fe1\u606f\uff0c\u968f\u7740\u4e8b\u4ef6\u7684\u4e0d\u540c\uff0c\u8fd9\u90e8\u5206\u4fe1\u606f\u4e5f\u4f1a\u6709\u5dee\u5f02\uff0c\u4f8b\u5982",(0,a.kt)("strong",{parentName:"li"},"net_softirq"),"\u63a2\u9488\u7684\u4e8b\u4ef6\u4fe1\u606f\u4e2d\u6ca1\u6709ip\u5730\u5740\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4e2d\u65ad\u53d1\u751f\u7684CPU\u5e8f\u53f7\uff0c\u4ea7\u751f\u7684\u5ef6\u8fdf\u65f6\u957f\u7b49\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u6709\u6548\u7684\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u5806\u6808\u4fe1\u606f\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5f00\u5173\u6765\u989d\u5916\u83b7\u53d6\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u7684\u534f\u8bae\u6808\u4fe1\u606f\uff0c\u8fd9\u4f1a\u589e\u52a0\u4e00\u5b9a\u7684\u6d88\u8017\uff0c\u4ece\u800c\u83b7\u53d6\u5230\u66f4\u52a0\u7cbe\u51c6\u7684\u73b0\u8c61\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"type=PACKETLOSS pod=hostNetwork namespace=hostNetwork protocol=TCP saddr=10.1.17.172 sport=6443 daddr=10.1.17.176 dport=43018  stacktrace:skb_release_data+0xA3 __kfree_skb+0xE tcp_recvmsg+0x61D inet_recvmsg+0x58 sock_read_iter+0x92 new_sync_read+0xE8 vfs_read+0x89 ksys_read+0x5A\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u652f\u6301\u7684\u63a2\u9488\u3001\u6307\u6807\u548c\u4e8b\u4ef6\u7684\u5217\u8868\uff0c\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/reference/monitoring/probes-metrics-events"},"\u63a2\u9488\uff0c\u6307\u6807\u548c\u4e8b\u4ef6"),"\u3002")))}k.isMDXComponent=!0},6213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubeskoop-arch-382f6d0bfe689987681ccdb744c69f17.jpg"}}]);