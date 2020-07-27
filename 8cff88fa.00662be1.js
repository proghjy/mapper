(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),i=(n(0),n(283)),o={id:"basic-concept",title:"Basic concepts",sidebar_label:"Basic concepts"},p={id:"guides/basic-concept",isDocsHomePage:!1,title:"Basic concepts",description:"As mentioned in Problems with TypeScript section, @nartc/automapper needs to do a little extra work to be able to function properly.",source:"@site/docs/guides/basic-concept.md",permalink:"/docs/next/guides/basic-concept",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/guides/basic-concept.md",version:"next",sidebar_label:"Basic concepts",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/next/guides/getting-started"},next:{title:"CreateMap",permalink:"/docs/next/usages/init/create-map"},latestVersionMainDocPermalink:"/docs/introduction/why"},b=[{value:"AutoMap",id:"automap",children:[]},{value:"Constructible",id:"constructible",children:[]},{value:"AutoMapper",id:"automapper",children:[]},{value:"<code>const</code> Mapper",id:"const-mapper",children:[]},{value:"Mapping",id:"mapping",children:[]},{value:"MappingProperty",id:"mappingproperty",children:[]},{value:"MappingTransformation",id:"mappingtransformation",children:[]}],c={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As mentioned in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/introduction/problems-with-typescript"}),"Problems with TypeScript")," section, ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," needs to do a little extra work to be able to function properly.\nIn other words, ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," utilizes ",Object(i.b)("inlineCode",{parentName:"p"},"PropertyDecorator")," to have form of some ",Object(i.b)("strong",{parentName:"p"},"Reflection")," for a class's properties. Here, you'll learn about some basic concepts that are in ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),".\nThese are all ",Object(i.b)("inlineCode",{parentName:"p"},"internal")," to ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," except for the ",Object(i.b)("inlineCode",{parentName:"p"},"AutoMap")," decorator but it helps to understand the terminology that the library is using."),Object(i.b)("h3",{id:"automap"},"AutoMap"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"PropertyDecorator")," is applied on each properties of a class like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n  @AutoMap() firstName: string;\n  @AutoMap() lastName: string;\n  @AutoMap() age: number;\n}\n\nclass UserVm {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap()\n  fullName: string;\n  @AutoMap()\n  isAdult: number;\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@AutoMap()")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"PropertyDecorator")," and will be executed first when a ",Object(i.b)("strong",{parentName:"p"},"TypeScript")," runs. This ",Object(i.b)("inlineCode",{parentName:"p"},"decorator"),"'s job is to keep track of the ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," on a class as ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," so these ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," will be available at runtime.\nA ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," will include: ",Object(i.b)("inlineCode",{parentName:"p"},"propertyName")," and its ",Object(i.b)("inlineCode",{parentName:"p"},"type")," so ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," knows how to map properly for each data type."),Object(i.b)("h3",{id:"constructible"},"Constructible"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Constructible")," is a model. It is, in fact, an ",Object(i.b)("inlineCode",{parentName:"p"},"internal type")," that ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," makes use of to support its type-definitions. From the snippet above, ",Object(i.b)("inlineCode",{parentName:"p"},"User")," (the class itself) would be a ",Object(i.b)("inlineCode",{parentName:"p"},"Constructible")," and ",Object(i.b)("inlineCode",{parentName:"p"},"new User()")," would be an ",Object(i.b)("strong",{parentName:"p"},"instance"),"."),Object(i.b)("h3",{id:"automapper"},"AutoMapper"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AutoMapper")," is the first-class citizen in ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),". It is, along with its ",Object(i.b)("strong",{parentName:"p"},"instance methods"),", exposed as ",Object(i.b)("strong",{parentName:"p"},"public API")," by ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")),Object(i.b)("h3",{id:"const-mapper"},Object(i.b)("inlineCode",{parentName:"h3"},"const")," Mapper"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," exposes a ",Object(i.b)("strong",{parentName:"p"},"singleton")," as a variable named ",Object(i.b)("inlineCode",{parentName:"p"},"Mapper")," which is an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"AutoMapper"),". However, you can always create your own instance of ",Object(i.b)("inlineCode",{parentName:"p"},"AutoMapper")," if you so desire.\nEach instance of ",Object(i.b)("inlineCode",{parentName:"p"},"AutoMapper")," will have their own set of ",Object(i.b)("em",{parentName:"p"},"not-shared")," ",Object(i.b)("inlineCode",{parentName:"p"},"Mappings"),". The documentations will use the ",Object(i.b)("strong",{parentName:"p"},"singleton")," ",Object(i.b)("inlineCode",{parentName:"p"},"Mapper")," from start to end."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Mapper } from '@nartc/automapper';\n")),Object(i.b)("h3",{id:"mapping"},"Mapping"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Mapping")," is a record that acts as a configuration between a ",Object(i.b)("inlineCode",{parentName:"p"},"Source")," model (",Object(i.b)("inlineCode",{parentName:"p"},"User"),") and a ",Object(i.b)("inlineCode",{parentName:"p"},"Destination")," model (",Object(i.b)("inlineCode",{parentName:"p"},"UserVm"),") which holds many different information relating to the ",Object(i.b)("inlineCode",{parentName:"p"},"Source")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"Destination"),".\nThe ",Object(i.b)("strong",{parentName:"p"},"three")," most important information are: ",Object(i.b)("inlineCode",{parentName:"p"},"source"),", ",Object(i.b)("inlineCode",{parentName:"p"},"destination")," and ",Object(i.b)("inlineCode",{parentName:"p"},"properties"),". The other information is also important but we will learn about those in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/init/create-map"}),"Usages")," section."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"source"),": a ",Object(i.b)("inlineCode",{parentName:"li"},"Constructible")," of ",Object(i.b)("inlineCode",{parentName:"li"},"Source")," model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination"),": a ",Object(i.b)("inlineCode",{parentName:"li"},"Constructible")," of ",Object(i.b)("inlineCode",{parentName:"li"},"Destination")," model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"properties"),": a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),"Map")," that holds information about all ",Object(i.b)("strong",{parentName:"li"},"auto-configured")," and ",Object(i.b)("strong",{parentName:"li"},"custom-configured")," properties and their individual ",Object(i.b)("inlineCode",{parentName:"li"},"MappingProperty"),".")),Object(i.b)("p",null,"Not to be confused with ",Object(i.b)("inlineCode",{parentName:"p"},"Map operation"),", sometimes you will see ",Object(i.b)("inlineCode",{parentName:"p"},"Map operation")," in the documentations, that is referring to the actual ",Object(i.b)("inlineCode",{parentName:"p"},"mapping operation")," that will happen by invoking ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," method on the ",Object(i.b)("strong",{parentName:"p"},"AutoMapper")," instance."),Object(i.b)("h3",{id:"mappingproperty"},"MappingProperty"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"MappingProperty")," is an instruction to show ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," how to map a particular ",Object(i.b)("inlineCode",{parentName:"p"},"member")," (",Object(i.b)("inlineCode",{parentName:"p"},"property"),") of the ",Object(i.b)("inlineCode",{parentName:"p"},"Destination")," based on some ",Object(i.b)("inlineCode",{parentName:"p"},"member")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"Source"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"MappingProperty")," has information about the ",Object(i.b)("inlineCode",{parentName:"p"},"destinationMemberPath")," (eg: ",Object(i.b)("inlineCode",{parentName:"p"},"user.company.name"),", this is a ",Object(i.b)("inlineCode",{parentName:"p"},"path"),") and its ",Object(i.b)("inlineCode",{parentName:"p"},"MappingTransformation")," instruction."),Object(i.b)("h3",{id:"mappingtransformation"},"MappingTransformation"),Object(i.b)("p",null,"For each ",Object(i.b)("inlineCode",{parentName:"p"},"MappingProperty"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will try to apply the ",Object(i.b)("inlineCode",{parentName:"p"},"MappingTransformation")," on that ",Object(i.b)("inlineCode",{parentName:"p"},"MappingProperty")," with its ",Object(i.b)("inlineCode",{parentName:"p"},"destinationMemberPath"),". A ",Object(i.b)("inlineCode",{parentName:"p"},"MappingTransformation")," contains\nall information that is needed to determine how a ",Object(i.b)("inlineCode",{parentName:"p"},"member")," should be mapped. When consuming ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),", you will actually configure the ",Object(i.b)("inlineCode",{parentName:"p"},"MappingTransformation"),". There are currently 8 ",Object(i.b)("inlineCode",{parentName:"p"},"TransformationType"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"TransformationType"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ignore"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ignore a ",Object(i.b)("inlineCode",{parentName:"td"},"member")," on the ",Object(i.b)("inlineCode",{parentName:"td"},"Destination"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MapFrom"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Custom mapping instruction for a ",Object(i.b)("inlineCode",{parentName:"td"},"member"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Condition"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Conditionally mapping a ",Object(i.b)("em",{parentName:"td"},"conventionally matching")," ",Object(i.b)("inlineCode",{parentName:"td"},"member"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FromValue"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Map a raw value to a ",Object(i.b)("inlineCode",{parentName:"td"},"member"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MapWith"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Map nested ",Object(i.b)("inlineCode",{parentName:"td"},"model")," for a ",Object(i.b)("inlineCode",{parentName:"td"},"member")," where ",Object(i.b)("strong",{parentName:"td"},"auto-configuration")," does not work")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ConvertUsing"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Map a ",Object(i.b)("inlineCode",{parentName:"td"},"member")," using a ",Object(i.b)("inlineCode",{parentName:"td"},"Converter"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MapInitialize"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"auto-configured")," mapping instruction for a ",Object(i.b)("inlineCode",{parentName:"td"},"member")," that is added by ",Object(i.b)("inlineCode",{parentName:"td"},"@nartc/automapper"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NullSubstitution"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Substitute a null value on the ",Object(i.b)("inlineCode",{parentName:"td"},"Source.member")," for ",Object(i.b)("inlineCode",{parentName:"td"},"Destination.member"))))),Object(i.b)("p",null,"There is ",Object(i.b)("strong",{parentName:"p"},"one")," other type which is ",Object(i.b)("inlineCode",{parentName:"p"},"PreCondition")," that can be combined with any of the other ",Object(i.b)("inlineCode",{parentName:"p"},"TransformationType")," except for ",Object(i.b)("inlineCode",{parentName:"p"},"MapInitialize"),". We will explore each of the ",Object(i.b)("inlineCode",{parentName:"p"},"TransformationType")," in more details later."))}l.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?r.a.createElement(u,p(p({ref:t},c),{},{components:n})):r.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);