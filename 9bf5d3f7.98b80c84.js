(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(9),o=(t(0),t(283)),i={id:"map-defer",title:"MapDefer",sidebar_label:"MapDefer"},p={id:"version-6.0.0/usages/mapping-configuration/map-defer",isDocsHomePage:!1,title:"MapDefer",description:"mapDefer() is a special type of MemberMapFunction. As the name suggests, you can use mapDefer() if you want to have",source:"@site/versioned_docs/version-6.0.0/usages/mapping-configuration/map-defer.md",permalink:"/docs/usages/mapping-configuration/map-defer",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/mapping-configuration/map-defer.md",version:"6.0.0",sidebar_label:"MapDefer",sidebar:"version-6.0.0/docs",previous:{title:"PreCondition",permalink:"/docs/usages/mapping-configuration/pre-condition"},next:{title:"Nested Model",permalink:"/docs/usages/features/nested-model"}},c=[],s={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapDefer()")," is a special type of ",Object(o.b)("inlineCode",{parentName:"p"},"MemberMapFunction"),". As the name suggests, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"mapDefer()")," if you want to have\nadditional logic before you return an actual ",Object(o.b)("inlineCode",{parentName:"p"},"MemberMapFunction")," in ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"forPath()")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapDefer()")," takes in a ",Object(o.b)("inlineCode",{parentName:"p"},"deferFunction")," and this ",Object(o.b)("inlineCode",{parentName:"p"},"deferFunction")," will be executed with the ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," object and the ",Object(o.b)("inlineCode",{parentName:"p"},"SourceMemberPath"),"\nthat are being mapped."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination).forMember(\n  dest => dest.foo,\n  mapDefer((source, sourceMemberPath) => {\n    // sourceMemberPath is a computed value from `dest.foo` selector. In this case, it is \"foo\"\n    if (source.someFlag) {\n      return fromValue('value for foo');\n    }\n\n    return mapFrom(src => src.fooValue);\n  }\n);\n")),Object(o.b)("p",null,'The above snippet shows that you can "defer" the ',Object(o.b)("inlineCode",{parentName:"p"},"MemberMapFunction")," to be ",Object(o.b)("inlineCode",{parentName:"p"},"fromValue()")," if a flag returns truthy, else it will be ",Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()"),".\nThis is to help with complex mapping configurations that might need to return different ",Object(o.b)("inlineCode",{parentName:"p"},"MemberMapFunction")," based on different situations."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"mapDefer")," will set the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"MapDefer")))}u.isMDXComponent=!0},283:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,f=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return t?a.a.createElement(f,p(p({ref:n},s),{},{components:t})):a.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);