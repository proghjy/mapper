(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),i=(n(0),n(283)),a={id:"null-substitution",title:"Null Substitution",sidebar_label:"Null Substitution"},u={id:"version-5.0.12/usages/mapping-configuration/for-member/null-substitution",isDocsHomePage:!1,title:"Null Substitution",description:"nullSubstitution() takes in a raw value to map to destination. when source. is null. When you pass in an object to nullSubstitution(),",source:"@site/versioned_docs/version-5.0.12/usages/mapping-configuration/for-member/null-substitution.md",permalink:"/docs/5.0.12/usages/mapping-configuration/for-member/null-substitution",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.0.12/usages/mapping-configuration/for-member/null-substitution.md",version:"5.0.12",sidebar_label:"Null Substitution",sidebar:"version-5.0.12/docs",previous:{title:"Value Resolver",permalink:"/docs/5.0.12/usages/mapping-configuration/for-member/resolver"},next:{title:"Ignore",permalink:"/docs/5.0.12/usages/mapping-configuration/for-member/ignore"},latestVersionMainDocPermalink:"/docs/introduction/why"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"nullSubstitution()")," takes in a ",Object(i.b)("strong",{parentName:"p"},"raw value")," to map to ",Object(i.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," when ",Object(i.b)("inlineCode",{parentName:"p"},"source.<some_member>")," is ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". When you pass in an ",Object(i.b)("inlineCode",{parentName:"p"},"object")," to ",Object(i.b)("inlineCode",{parentName:"p"},"nullSubstitution()"),",\nsame rule for ",Object(i.b)("inlineCode",{parentName:"p"},"fromValue()")," applies meaning that ",Object(i.b)("inlineCode",{parentName:"p"},"object")," will be mapped ",Object(i.b)("strong",{parentName:"p"},"without")," any ",Object(i.b)("inlineCode",{parentName:"p"},"Mapping")," consideration. The expected value is strong-typed to the ",Object(i.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," type"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm).forMember(\n  dest => dest.shouldBeSubstituted,\n  opts => opts.nullSubstitution('substituted')\n);\n\nconst user = new User();\nuser.firstName = 'John';\nuser.lastName = 'Doe';\n\n// Case 1: do not assign to user.shouldBeSubstituted\n\nconst vm = Mapper.map(user, UserVm);\nassert(vm.shouldBeSubstituted === 'substituted');\n\n// Case 2: Assign value to user.shouldBeSubstituted\nuser.shouldBeSubstituted = 'initial value';\nconst vm = Mapper.map(user, UserVm);\nassert(vm.shouldBeSubstituted === 'initial value');\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"nullSubstitution()")," will set the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/5.0.12/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(i.b)("inlineCode",{parentName:"p"},"NullSubstitution"),"."))}l.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,d=c["".concat(a,".").concat(m)]||c[m]||b[m]||i;return n?o.a.createElement(d,u(u({ref:t},p),{},{components:n})):o.a.createElement(d,u({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);