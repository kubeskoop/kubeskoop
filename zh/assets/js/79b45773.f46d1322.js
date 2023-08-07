"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[4457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),k=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=k(r),s=a,c=d["".concat(i,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(c,o(o({ref:t},u),{},{components:r})):n.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var k=2;k<l;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=r(7462),a=(r(7294),r(3905));const l={},o="\u5b89\u88c5 KubeSkoop exporter",p={unversionedId:"guide/exporter/exporter_installation",id:"guide/exporter/exporter_installation",title:"\u5b89\u88c5 KubeSkoop exporter",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/exporter/exporter_installation.md",sourceDirName:"guide/exporter",slug:"/guide/exporter/exporter_installation",permalink:"/zh/docs/guide/exporter/exporter_installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KubeSkoop exporter \u53ef\u89c6\u5316\u914d\u7f6e",permalink:"/zh/docs/guide/exporter/exporter-visualization-guide"},next:{title:"\u4f7f\u7528sidecar\u6a21\u5f0f\u8fd0\u884cKubeSkoop exporter",permalink:"/zh/docs/guide/exporter/running-in-sidecar"}},i={},k=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5feb\u901f\u5b89\u88c5",id:"\u5feb\u901f\u5b89\u88c5",level:2},{value:"\u5feb\u901f\u4f53\u9a8cKubeSkoop exporter\u529f\u80fd",id:"\u5feb\u901f\u4f53\u9a8ckubeskoop-exporter\u529f\u80fd",level:3},{value:"\u4ec5\u5b89\u88c5KubeSkoop exporter",id:"\u4ec5\u5b89\u88c5kubeskoop-exporter",level:3},{value:"\u4f7f\u7528Helm\u5b89\u88c5",id:"\u4f7f\u7528helm\u5b89\u88c5",level:2},{value:"Helm\u914d\u7f6e",id:"helm\u914d\u7f6e",level:3},{value:"\u5b89\u88c5\u5b8c\u6210\u6821\u9a8c",id:"\u5b89\u88c5\u5b8c\u6210\u6821\u9a8c",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],u={toc:k},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5-kubeskoop-exporter"},"\u5b89\u88c5 KubeSkoop exporter"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux kernel >= 4.9.17 \uff08\u5728\u4f4e\u7248\u672c\u5185\u6838\u4e0a\u53ef\u4ee5\u652f\u6301\u90e8\u5206\u529f\u80fd\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8eDocker/Containerd/Pouch\u7684\u5bb9\u5668\u8fd0\u884c\u65f6")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5b89\u88c5"},"\u5feb\u901f\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u5feb\u901f\u4f53\u9a8ckubeskoop-exporter\u529f\u80fd"},"\u5feb\u901f\u4f53\u9a8cKubeSkoop exporter\u529f\u80fd"),(0,a.kt)("p",null,"KubeSkoop exporter\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u90e8\u7f72\u7684\u914d\u7f6e\uff0c\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KubeSkoop exporter\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u526f\u672c\u7684Prometheus\u7ec4\u4ef6\u4e0eGrafana\u7ec4\u4ef6\uff0cGrafana Loki\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"Prometheus\u548cGrafana\u7684NodePort\u670d\u52a1\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5728Kubernetes\u96c6\u7fa4\u4e2d\u5feb\u901f\u90e8\u7f72KubeSkoop exporter\u53ca\u5176\u4e0ePrometheus\uff0cGrafana\u548cLoki\u6784\u6210\u7684\u53ef\u89c2\u6d4b\u6027\u7ec4\u5408\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u786e\u8ba4\u5b89\u88c5\u5b8c\u6210\u4ee5\u53ca\u83b7\u53d6\u8bbf\u95ee\u5165\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770bSkoop exporter\u7684\u8fd0\u884c\u72b6\u6001\nkubectl get pod -n kubeskoop -l app=skoop-exporter -o wide\n\n# \u67e5\u770bProbe\u91c7\u96c6\u63a2\u9488\u7684\u8fd0\u884c\u72b6\u6001\nkubectl get --raw /api/v1/namespaces/{{skoop-exporter\u7684pod namespace}}/pods/{{skoop-exporter\u7684pod name}}:9102/proxy/status |jq .\n\n# \u83b7\u53d6Prometheus\u670d\u52a1\u7684\u5165\u53e3\nkubectl get service -n kubeskoop prometheus-service -o wide\n\n# \u83b7\u53d6Grafana\u63a7\u5236\u53f0\u7684\u8bbf\u95ee\u5165\u53e3\nkubectl get service -n kubeskoop grafana -o wide\n")),(0,a.kt)("h3",{id:"\u4ec5\u5b89\u88c5kubeskoop-exporter"},"\u4ec5\u5b89\u88c5KubeSkoop exporter"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5728Kubernetes\u96c6\u7fa4\u4e2d\u5feb\u901f\u90e8\u7f72KubeSkoop exporter\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://github.com/alibaba/kubeskoop/deploy/kubeskoopexporter.yaml\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528helm\u5b89\u88c5"},"\u4f7f\u7528Helm\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6dfb\u52a0skoop charts repo\nhelm repo add kubeskoop https://github.com/alibaba/kubeskoop/charts\n\n# \u9996\u6b21\u6267\u884c\u65f6\uff0c\u9700\u8981\u66f4\u65b0helm repo\u7f13\u5b58\nhelm repo update\n\n# \u5b89\u88c5skoop exporter\nhelm install skoop-exporter kubeskoop/skoop-exporter\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u8c03\u8bd5Helm Charts\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u83b7\u53d6skoop exporter\u4ee3\u7801\u4ed3\u5e93\ngit clone https://github.com/alibaba/kubeskoop.git\n\n# \u8fdb\u884c\u672c\u5730\u5b89\u88c5\nhelm install --set namespace=kube-system skoop-exporter ./kubeskoop/deploy/skoop-exporter-0.1.0.tgz --debug\n")),(0,a.kt)("p",null,"Skoop-exporter\u4ee5DaemonSet\u65b9\u5f0f\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u9a8c\u8bc1\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770bSkoop exporter\u7684\u8fd0\u884c\u72b6\u6001\nkubectl get pod -n skoop -l app=skoop-exporter -o wide\n\n# \u83b7\u53d6\u5230pod\u7684\u4fe1\u606f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7apiserver\u67e5\u770bProbe\u91c7\u96c6\u63a2\u9488\u7684\u8fd0\u884c\u72b6\u6001\nkubectl get --raw /api/v1/namespaces/{{skoop-exporter\u7684pod namespace}}/pods/{{skoop-exporter\u7684pod name}}:9102/proxy/status |jq .\n\n# \u5982\u679c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95eeskoop-exporter\u5b9e\u4f8b\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u67e5\u770bProbe\u7684\u8fd0\u884c\u72b6\u6001\ncurl {{skoop-exporter\u7684pod ip}}:9102/status |jq .\n")),(0,a.kt)("h3",{id:"helm\u914d\u7f6e"},"Helm\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7helm\u5b89\u88c5KubeSkoop exporter\u65f6\uff0c\u53ef\u4ee5\u914d\u7f6e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u914d\u7f6e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"KubeSkoop exporter\u7684\u7ec4\u4ef6\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"skoop-exporter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"KubeSkoop exporter\u7684\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"kubeskoop"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"debugmode"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u8bd5\u6a21\u5f0f\u7684\u5f00\u5173\uff0c\u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\u540e\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7\u4ee5\u53ca\u5f00\u542fpprof\u548cgops\u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.enableEventServer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u91c7\u96c6\u670d\u52a1\u7684\u5f00\u5173"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.enableMetricServer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6307\u6807\u670d\u52a1\u7684\u5f00\u5173"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.remoteLokiAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u4e8b\u4ef6\u91c7\u96c6\u670d\u52a1\u540e\uff0c\u901a\u8fc7\u8fd9\u4e2a\u9009\u9879\u914d\u7f6e\u9700\u8981\u63a8\u9001\u4e8b\u4ef6\u7684Grafana Loki\u670d\u52a1\u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},"``")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.metricLabelVerbose"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u66f4\u52a0\u8be6\u7ec6\u7684\u76d1\u63a7\u6307\u6807\u6807\u7b7e\uff0c\u5305\u62ecPod\u7684app\u6807\u7b7e\uff0cip\u5730\u5740\u7b49"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.metricServerPort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6307\u6807\u670d\u52a1\u7684\u7aef\u53e3\uff0c\u63d0\u4f9bhttp\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"9102")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.eventServerPort"),(0,a.kt)("td",{parentName:"tr",align:null},"KubeSkoop exporter\u7684GRPC\u670d\u52a1\u7aef\u53e3\uff0c\u63d0\u4f9b\u4e8b\u4ef6\u6d41\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"19102")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.metricProbes"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5f00\u542f\u7684\u76d1\u63a7\u6307\u6807\u63a2\u9488"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.eventProbes"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5f00\u542f\u7684\u4e8b\u4ef6\u91c7\u96c6\u63a2\u9488"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.metricCacheInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6307\u6807\u7684\u91c7\u96c6\u7f13\u5b58\u5468\u671f\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,a.kt)("td",{parentName:"tr",align:null},"15")))),(0,a.kt)("h3",{id:"\u5b89\u88c5\u5b8c\u6210\u6821\u9a8c"},"\u5b89\u88c5\u5b8c\u6210\u6821\u9a8c"),(0,a.kt)("p",null,"\u901a\u8fc7helm\u65b9\u5f0f\u5b8c\u6210KubeSkoop exporter\u7684\u5b89\u88c5\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u9a8c\u8bc1\u662f\u5426\u6b63\u5e38\u8fd0\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770bProbe\u91c7\u96c6\u63a2\u9488\u7684\u8fd0\u884c\u72b6\u6001\nkubectl get --raw /api/v1/namespaces/{{KubeSkoop exporter\u7684pod namespace}}/pods/{{KubeSkoop exporter\u7684pod name}}:9102/proxy/status |jq .\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"KubeSkoop exporter\u7684\u914d\u7f6e\u662f\u9ed8\u8ba4\u7531\u4e0eworkload\u76f8\u540c\u547d\u540d\u7a7a\u95f4\u4e0b\u7684ConfigMap\u5bf9\u8c61inspector-config\u8fdb\u884c\u7ba1\u7406\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4fee\u6539\u547d\u540d\u7a7a\u95f4\u4e3a\u5b9e\u9645\u751f\u6548\u7684\u547d\u540d\u7a7a\u95f4\nkubectl edit cm -n kubeskoop inspector-config\n")),(0,a.kt)("p",null,"KubeSkoop exporter\u652f\u6301\u7684\u914d\u7f6e\u9879\u5982\u4e0b:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"debugmode"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u8bd5\u6a21\u5f0f\u7684\u5f00\u5173\uff0c\u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\u540e\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7\u4ee5\u53ca\u5f00\u542fpprof\u548cgops\u63a5\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event_config.loki_enable"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u91c7\u96c6\u670d\u52a1\u63a8\u5411\u7ed9Grafana Loki\u7684\u5f00\u5173"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event_config.loki_address"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u4e8b\u4ef6\u91c7\u96c6\u670d\u52a1\u540e\uff0c\u901a\u8fc7\u8fd9\u4e2a\u9009\u9879\u914d\u7f6e\u9700\u8981\u63a8\u9001\u4e8b\u4ef6\u7684Grafana Loki\u670d\u52a1\u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},"``")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event_config.probes"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5f00\u542f\u7684\u4e8b\u4ef6\u91c7\u96c6\u63a2\u9488"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event_config.port"),(0,a.kt)("td",{parentName:"tr",align:null},"KubeSkoop exporter\u7684GRPC\u670d\u52a1\u7aef\u53e3\uff0c\u63d0\u4f9b\u4e8b\u4ef6\u6d41\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"19102")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric_config.verbose"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u66f4\u52a0\u8be6\u7ec6\u7684\u76d1\u63a7\u6307\u6807\u6807\u7b7e\uff0c\u5305\u62ecPod\u7684app\u6807\u7b7e\uff0cip\u5730\u5740\u7b49"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric_config.port"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6307\u6807\u670d\u52a1\u7684\u7aef\u53e3\uff0c\u63d0\u4f9bhttp\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"9102")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric_config.probes"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5f00\u542f\u7684\u76d1\u63a7\u6307\u6807\u63a2\u9488"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric_config.interval"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6307\u6807\u7684\u91c7\u96c6\u7f13\u5b58\u5468\u671f\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,a.kt)("td",{parentName:"tr",align:null},"15")))),(0,a.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u914d\u7f6e\u7684\u63a2\u9488\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/zh/docs/guide/exporter/exporter-description"},"KubeSkoop exporter \u529f\u80fd\u7b80\u4ecb\n"))))}m.isMDXComponent=!0}}]);