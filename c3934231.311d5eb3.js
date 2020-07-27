(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{243:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(9),o=(t(0),t(283)),i={id:"add-profile",title:"Profile",sidebar_label:"Profile"},p={id:"version-6.0.0/usages/init/add-profile",isDocsHomePage:!1,title:"Profile",description:"Profile is generally a good way (and recommended) to organize your Mapping. This helps you to separate your concern by providing you a way to group related Mappings for a certain Domain Model.",source:"@site/versioned_docs/version-6.0.0/usages/init/add-profile.md",permalink:"/docs/usages/init/add-profile",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/init/add-profile.md",version:"6.0.0",sidebar_label:"Profile",sidebar:"version-6.0.0/docs",previous:{title:"CreateMap",permalink:"/docs/usages/init/create-map"},next:{title:"Global Settings",permalink:"/docs/usages/init/with-global-settings"}},c=[],l={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Profile")," is generally a good way (and recommended) to organize your ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping"),". This helps you to separate your concern by providing you a way to group related ",Object(o.b)("inlineCode",{parentName:"p"},"Mappings")," for a certain ",Object(o.b)("strong",{parentName:"p"},"Domain Model"),"."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," needs to inherit from ",Object(o.b)("inlineCode",{parentName:"p"},"ProfileBase")," and the configuration will be put in the ",Object(o.b)("inlineCode",{parentName:"p"},"constructor")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { AutoMapper, ProfileBase } from '@nartc/automapper';\n\nexport class SourceProfile extends ProfileBase {\n  constructor(mapper: AutoMapper) {\n    super();\n    mapper.createMap(Source, DestinationOne);\n    mapper.createMap(Source, DestinationTwo);\n  }\n}\n")),Object(o.b)("p",null,"After you configure a ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),", call the instance method ",Object(o.b)("inlineCode",{parentName:"p"},"addProfile()")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance and pass in the ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.addProfile(SourceProfile);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"addProfile()"),", upon called, will first instantiate an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and pass in the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance from which ",Object(o.b)("inlineCode",{parentName:"p"},"addProfile()")," is invoked.\nHence, ",Object(o.b)("inlineCode",{parentName:"p"},"SourceProfile.constructor")," will be called with ",Object(o.b)("inlineCode",{parentName:"p"},"Mapper")," as its argument. ",Object(o.b)("inlineCode",{parentName:"p"},"super()"),", which is ",Object(o.b)("inlineCode",{parentName:"p"},"ProfileBase.constructor"),", is also get called and the ",Object(o.b)("inlineCode",{parentName:"p"},"profileName")," will be set to ",Object(o.b)("inlineCode",{parentName:"p"},"SourceProfile"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Each ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," added to the ",Object(o.b)("inlineCode",{parentName:"p"},"Mapper")," is ",Object(o.b)("strong",{parentName:"p"},"unique")," and is tracked by ",Object(o.b)("inlineCode",{parentName:"p"},"profileName"),". ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will throw an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," if you're trying to add the same ",Object(o.b)("inlineCode",{parentName:"p"},"profileName")," twice.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"addProfile()")," returns the same ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance that calls it so it can be ",Object(o.b)("strong",{parentName:"p"},"chained")," when you want to add multiple ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.addProfile(SourceProfile)\n  .addProfile(OtherSourceProfile)\n  .addProfile(SomeOtherSourceProfile);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"addProfile()")," returns the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance but ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"CreateMapFluentFunction")," to configure the ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," further. Hence, you can only ",Object(o.b)("strong",{parentName:"p"},"chain")," ",Object(o.b)("inlineCode",{parentName:"p"},"addProfile()")," and not ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()"))))}b.isMDXComponent=!0},283:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(t),s=r,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return t?a.a.createElement(m,p(p({ref:n},l),{},{components:t})):a.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);