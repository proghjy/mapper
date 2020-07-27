(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(9),i=(t(0),t(283)),o={id:"callbacks",title:"Map Callbacks",sidebar_label:"Map Callbacks"},c={id:"version-5.0.12/usages/features/callbacks",isDocsHomePage:!1,title:"Map Callbacks",description:"@nartc/automapper provides beforeMap and afterMap callbacks which will be executed before and/or after a mapping operation occurs, if said callbacks are provided.",source:"@site/versioned_docs/version-5.0.12/usages/features/callbacks.md",permalink:"/docs/5.0.12/usages/features/callbacks",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.0.12/usages/features/callbacks.md",version:"5.0.12",sidebar_label:"Map Callbacks",sidebar:"version-5.0.12/docs",previous:{title:"Handle DateTime objects",permalink:"/docs/5.0.12/usages/features/date-time"},next:{title:"NestJS Integration",permalink:"/docs/5.0.12/nest"},latestVersionMainDocPermalink:"/docs/introduction/why"},l=[{value:"Map level",id:"map-level",children:[]},{value:"Mapping level",id:"mapping-level",children:[]},{value:"Notes",id:"notes",children:[]}],p={rightToc:l};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," provides ",Object(i.b)("inlineCode",{parentName:"p"},"beforeMap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterMap")," callbacks which will be executed ",Object(i.b)("strong",{parentName:"p"},"before")," and/or ",Object(i.b)("strong",{parentName:"p"},"after")," a mapping operation occurs, if said callbacks are provided.\nYou can provide ",Object(i.b)("inlineCode",{parentName:"p"},"callbacks")," at two different levels: ",Object(i.b)("strong",{parentName:"p"},"Map")," and ",Object(i.b)("strong",{parentName:"p"},"Mapping"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/5.0.12/guides/basic-concept"}),"Basic concepts"))),Object(i.b)("h3",{id:"map-level"},"Map level"),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," methods have an optional argument (usually the last argument) which is a ",Object(i.b)("inlineCode",{parentName:"p"},"MapActionOptions: { beforeMap: Function, afterMap: Function }"),". If any of the callbacks is provided, it will be called in correct chronological order."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const userVm = Mapper.map(user, UserVm, {\n  beforeMap: (source, destination, mapping) => {},\n  afterMap: (source, destination, mapping) => {},\n});\n")),Object(i.b)("h3",{id:"mapping-level"},"Mapping level"),Object(i.b)("p",null,"Callbacks on ",Object(i.b)("strong",{parentName:"p"},"Mapping")," will be called for ",Object(i.b)("strong",{parentName:"p"},"ALL")," map operations that occur between the two models unless you provide ",Object(i.b)("strong",{parentName:"p"},"Map level")," callbacks when you invoke a certain ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," operation."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination)\n  .beforeMap((source, destination, mapping) => {})\n  .afterMap((source, destination, mapping) => {});\n")),Object(i.b)("h3",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"callbacks")," are called with ",Object(i.b)("inlineCode",{parentName:"li"},"source"),", ",Object(i.b)("inlineCode",{parentName:"li"},"destination"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"mapping")," values. ",Object(i.b)("strong",{parentName:"li"},"ANYTHING")," you do to the ",Object(i.b)("inlineCode",{parentName:"li"},"source")," and ",Object(i.b)("inlineCode",{parentName:"li"},"destination")," will be carried over to the ",Object(i.b)("inlineCode",{parentName:"li"},"source")," and ",Object(i.b)("inlineCode",{parentName:"li"},"destination"),"\nbeing mapped (",Object(i.b)("strong",{parentName:"li"},"mutation"),") so please be cautious. Mutability in this case might be handy and dangerous at the same time given the dynamic characteristic of ",Object(i.b)("strong",{parentName:"li"},"JavaScript"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Map level")," callbacks will override ",Object(i.b)("strong",{parentName:"li"},"Mapping level")," callbacks if both are provided."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mapArray()")," will ignore ",Object(i.b)("strong",{parentName:"li"},"Mapping level")," callbacks because it would be a performance issue if callbacks were to be called on every single item in an array. Provide ",Object(i.b)("strong",{parentName:"li"},"Map level")," callbacks instead.")))}s.isMDXComponent=!0},283:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=s(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(m,c(c({ref:a},p),{},{components:t})):r.a.createElement(m,c({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);