(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(283)),i={id:"async",title:"Async Support",sidebar_label:"Async Support"},p={id:"introduction/async",isDocsHomePage:!1,title:"Async Support",description:'"Fake" Async',source:"@site/docs/introduction/async.md",permalink:"/docs/next/introduction/async",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/introduction/async.md",version:"next",sidebar_label:"Async Support",sidebar:"docs",previous:{title:"Problems with TypeScript",permalink:"/docs/next/introduction/problems-with-typescript"},next:{title:"Getting started",permalink:"/docs/next/guides/getting-started"},latestVersionMainDocPermalink:"/docs/introduction/why"},c=[{value:"&quot;Fake&quot; Async",id:"fake-async",children:[]},{value:"Why not &quot;real&quot;?",id:"why-not-real",children:[]},{value:"Help needed",id:"help-needed",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"fake-async"},'"Fake" Async'),Object(o.b)("p",null,"You will probably run into some ",Object(o.b)("strong",{parentName:"p"},"async")," variations like ",Object(o.b)("inlineCode",{parentName:"p"},"mapAsync()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mapArrayAsync()"),". I'm going to go straight to the point: Those are ",Object(o.b)("em",{parentName:"p"},"fake async"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"mapAsync()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mapArrayAsync()")," are wrapped inside of a ",Object(o.b)("inlineCode",{parentName:"p"},"resolved Promise")," so that if you ever need an async version (maybe some of your APIs need to expect ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),"), you'll have those to use."),Object(o.b)("p",null,"Let's look at the following snippet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"mapAsync(...args: any[]) { // simplified for brevity\n    return Promise.resolve().then(() => map(...args));\n}\n\nmapArrayAsync(...args: any[]) {\n    return Promise.resolve().then(() => mapArray(...args));\n}\n")),Object(o.b)("p",null,"Those are the exact implementations of ",Object(o.b)("inlineCode",{parentName:"p"},"mapAsync")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mapArrayAsync")),Object(o.b)("h3",{id:"why-not-real"},'Why not "real"?'),Object(o.b)("p",null,"Real async support can be provided by utilizing ",Object(o.b)("strong",{parentName:"p"},"Worker")," aka ",Object(o.b)("strong",{parentName:"p"},"Worker Thread")," for ",Object(o.b)("inlineCode",{parentName:"p"},"NodeJS")," and ",Object(o.b)("strong",{parentName:"p"},"Web Worker")," for ",Object(o.b)("inlineCode",{parentName:"p"},"Browser"),". However, the core concept of ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," is\nto operate on ",Object(o.b)("strong",{parentName:"p"},"Classes")," and ",Object(o.b)("strong",{parentName:"p"},"Classes")," cannot (yet?) be serializable to be transfer to the ",Object(o.b)("strong",{parentName:"p"},"Worker Thread"),"."),Object(o.b)("p",null,"I have thought a lot about supporting ",Object(o.b)("strong",{parentName:"p"},"Worker")," and I have been running into the rabbit hole of trying to come up with a ",Object(o.b)("em",{parentName:"p"},"serializable")," structure to send down to the ",Object(o.b)("strong",{parentName:"p"},"Worker"),"\nwhile still trying to reuse as much of ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," as possible."),Object(o.b)("h3",{id:"help-needed"},"Help needed"),Object(o.b)("p",null,"As things stand right now, I will halt the effort on getting ",Object(o.b)("strong",{parentName:"p"},"Worker")," to work with ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper"),". Maybe ",Object(o.b)("strong",{parentName:"p"},"Worker")," will improve in the future, maybe there's another runtime (",Object(o.b)("inlineCode",{parentName:"p"},"Deno"),"?!),\nor maybe there's someone that can come up with a brilliant idea, then I'll come back to getting ",Object(o.b)("strong",{parentName:"p"},"Worker")," supported."))}l.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);