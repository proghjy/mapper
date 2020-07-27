(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(9),a=(t(0),t(283)),i={id:"ignore",title:"Ignore",sidebar_label:"Ignore"},c={id:"usages/mapping-configuration/for-member/ignore",isDocsHomePage:!1,title:"Ignore",description:"When you want to completely ignore a destination. and to avoid the Unampped Error, you can call ignore()",source:"@site/docs/usages/mapping-configuration/for-member/ignore.md",permalink:"/docs/next/usages/mapping-configuration/for-member/ignore",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/mapping-configuration/for-member/ignore.md",version:"next",sidebar_label:"Ignore",sidebar:"docs",previous:{title:"Null Substitution",permalink:"/docs/next/usages/mapping-configuration/for-member/null-substitution"},next:{title:"PreCondition",permalink:"/docs/next/usages/mapping-configuration/for-member/pre-condition"},latestVersionMainDocPermalink:"/docs/introduction/why"},p=[],u={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you want to completely ignore a ",Object(a.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," and to avoid the ",Object(a.b)("inlineCode",{parentName:"p"},"Unampped Error"),", you can call ",Object(a.b)("inlineCode",{parentName:"p"},"ignore()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination).forMember(\n  dest => dest.someMember,\n  ignore()\n);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Destination.someMember")," will be set to ",Object(a.b)("inlineCode",{parentName:"p"},"null")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ignored")," by the ",Object(a.b)("inlineCode",{parentName:"p"},"Unmapped Error"),". ",Object(a.b)("inlineCode",{parentName:"p"},"ignore()")," will set the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(a.b)("inlineCode",{parentName:"p"},"Ignore")))}l.isMDXComponent=!0},283:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),b=r,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);