(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return m}));var r=t(2),a=t(9),o=(t(0),t(283)),i={id:"condition",title:"Condition",sidebar_label:"Condition"},c={id:"usages/mapping-configuration/for-member/condition",isDocsHomePage:!1,title:"Condition",description:"condition() takes in a predicateFn that receives source and needs to return a boolean value. If the predicateFn returns",source:"@site/docs/usages/mapping-configuration/for-member/condition.md",permalink:"/docs/next/usages/mapping-configuration/for-member/condition",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/mapping-configuration/for-member/condition.md",version:"next",sidebar_label:"Condition",sidebar:"docs",previous:{title:"MapFrom",permalink:"/docs/next/usages/mapping-configuration/for-member/map-from"},next:{title:"FromValue",permalink:"/docs/next/usages/mapping-configuration/for-member/from-value"},latestVersionMainDocPermalink:"/docs/introduction/why"},p=[],l={rightToc:p};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"condition()")," takes in a ",Object(o.b)("inlineCode",{parentName:"p"},"predicateFn")," that receives ",Object(o.b)("inlineCode",{parentName:"p"},"source")," and needs to return a ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," value. If the ",Object(o.b)("inlineCode",{parentName:"p"},"predicateFn")," returns\n",Object(o.b)("em",{parentName:"p"},"truthy"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will try to map ",Object(o.b)("inlineCode",{parentName:"p"},"source.<some_member>")," to ",Object(o.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," with ",Object(o.b)("inlineCode",{parentName:"p"},"<some_member>")," is the ",Object(o.b)("inlineCode",{parentName:"p"},"member"),"\nbeing configured with ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm).forMember(\n  dest => dest.fullName,\n  condition(src => src.age > 10)\n);\n")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"src.age > 10")," returns ",Object(o.b)("em",{parentName:"p"},"truthy"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"src.fullName")," will be mapped to ",Object(o.b)("inlineCode",{parentName:"p"},"dest.fullName"),". ",Object(o.b)("inlineCode",{parentName:"p"},"dest.fullName")," will receive a ",Object(o.b)("inlineCode",{parentName:"p"},"null")," value if ",Object(o.b)("inlineCode",{parentName:"p"},"src.fullName")," is ",Object(o.b)("inlineCode",{parentName:"p"},"undefined/null")," OR ",Object(o.b)("inlineCode",{parentName:"p"},"src.age <= 10"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"condition()")," also takes in an optional second argument which is the ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," that will be used to map to ",Object(o.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," for when the ",Object(o.b)("inlineCode",{parentName:"p"},"src.<some_member>")," is ",Object(o.b)("em",{parentName:"p"},"falsy")," OR the ",Object(o.b)("inlineCode",{parentName:"p"},"predicateFn")," returns ",Object(o.b)("em",{parentName:"p"},"falsy")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const user = new User();\nuser.firstName = 'John';\nuser.lastName = 'Doe';\nuser.age = 9;\nuser.bio = 'Developer';\n\nconst vm = Mapper.map(user, UserVm);\n/**\n * UserVm { firstName: 'John', lastName: 'Doe', ..., fullName: null, ... }\n */\n\nMapper.createMap(User, UserVm).forMember(\n  dest => dest.fullname,\n  condition(src => src.age > 10, 'default value')\n);\nconst vm2 = Mapper.map(user, UserVm);\n/**\n * UserVm { firstName: 'John', lastName: 'Doe', ..., fullName: 'default value', ... }\n */\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"condition()")," will set the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Condition"),"."))}m.isMDXComponent=!0},283:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),m=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=m(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(t),u=r,d=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);