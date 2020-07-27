(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(283)),p={id:"nest",title:"NestJS Integration",sidebar_label:"NestJS"},i={id:"nest",isDocsHomePage:!1,title:"NestJS Integration",description:"@nartc/automapper can be integrated with NestJS by leveraging a separate library published under the name: nestjsx-automapper",source:"@site/docs/nest.md",permalink:"/docs/next/nest",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/nest.md",version:"next",sidebar_label:"NestJS",sidebar:"docs",previous:{title:"Map Callbacks",permalink:"/docs/next/usages/features/callbacks"},next:{title:"Transformer Plugin",permalink:"/docs/next/plugin"},latestVersionMainDocPermalink:"/docs/introduction/why"},l=[{value:"Installation",id:"installation",children:[]},{value:"Setup",id:"setup",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can be integrated with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nestjs.com"}),"NestJS")," by leveraging a separate library published under the name: ",Object(o.b)("inlineCode",{parentName:"p"},"nestjsx-automapper")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nestjsx/automapper"}),"Github")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/nestjsx-automapper"}),"NPM"))),Object(o.b)("a",{href:"https://badgen.net/travis/nestjsx/automapper"},Object(o.b)("img",{src:"https://badgen.net/travis/nestjsx/automapper",alt:"travis"})),Object(o.b)("a",{href:"https://badgen.net/npm/v/nestjsx-automapper"},Object(o.b)("img",{src:"https://badgen.net/npm/v/nestjsx-automapper",alt:"npm"})),Object(o.b)("a",{href:"https://badgen.net/npm/dt/nestjsx-automapper"},Object(o.b)("img",{src:"https://badgen.net/npm/dt/nestjsx-automapper",alt:"downloads"})),Object(o.b)("a",{href:"https://badgen.net/bundlephobia/minzip/nestjsx-automapper"},Object(o.b)("img",{src:"https://badgen.net/bundlephobia/minzip/nestjsx-automapper",alt:"bundlephobia"})),Object(o.b)("a",{href:"https://badgen.net/github/license/nestjsx/automapper"},Object(o.b)("img",{src:"https://badgen.net/github/license/nestjsx/automapper",alt:"license"})),Object(o.b)("a",{href:"https://coveralls.io/repos/github/nestjsx/automapper/badge.svg?branch=master"},Object(o.b)("img",{src:"https://coveralls.io/repos/github/nestjsx/automapper/badge.svg?branch=master",alt:"coveralls"})),Object(o.b)("a",{href:"https://greenkeeper.io/"},Object(o.b)("img",{src:"https://badges.greenkeeper.io/nestjsx/automapper.svg",alt:"Greenkeeper"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i nestjsx-automapper\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add nestjsx-automapper\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"nestjsx-automapper")," lists ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," as its ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies"),". Installing ",Object(o.b)("inlineCode",{parentName:"p"},"nestjsx-automapper")," will also install ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),".")),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Import ",Object(o.b)("inlineCode",{parentName:"li"},"AutomapperModule")," in ",Object(o.b)("inlineCode",{parentName:"li"},"AppModule")," and call ",Object(o.b)("inlineCode",{parentName:"li"},".forRoot()")," method")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Module({\n  imports: [AutomapperModule.forRoot()],\n})\nexport class AppModule {}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AutomapperModule.forRoot()")," method takes in an ",Object(o.b)("inlineCode",{parentName:"p"},"AutomapperModuleRootOptions")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface AutomapperModuleRootOptions {\n  name?: string;\n  config?: (cfg: AutoMapperConfiguration) => void;\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),": Name of the ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," instance being created with ",Object(o.b)("inlineCode",{parentName:"li"},"forRoot()"),". Default to ",Object(o.b)("inlineCode",{parentName:"li"},'"default"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config"),": A configuration function that will get called automatically.")),Object(o.b)("p",null,"When you call ",Object(o.b)("inlineCode",{parentName:"p"},"AutomapperModule.forRoot()"),", a new instance of ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," will be created with ",Object(o.b)("inlineCode",{parentName:"p"},"AutomapperModuleRootOptions.name"),". Both options are optional.\nIf you pass in ",Object(o.b)("inlineCode",{parentName:"p"},"AutomapperModuleRootOptions.config")," and configure the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance in ",Object(o.b)("inlineCode",{parentName:"p"},"forRoot()"),", that is totally fine, but the following approach is recommended. Refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../usages/init/add-profile.md"}),"Add Profile")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"nestjsx-automapper")," exposes a ",Object(o.b)("inlineCode",{parentName:"li"},"@Profile()")," decorator to decorate your ",Object(o.b)("inlineCode",{parentName:"li"},"Profile")," classes.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Profile()\nclass UserProfile extends MappingProfileBase {}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@Profile()")," takes in an optional ",Object(o.b)("inlineCode",{parentName:"p"},"name")," argument. This is the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," if the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance you use to create the instance with ",Object(o.b)("inlineCode",{parentName:"p"},"forRoot()"),". Default to ",Object(o.b)("inlineCode",{parentName:"p"},'"default"')),Object(o.b)("p",null,"Usually, ",Object(o.b)("inlineCode",{parentName:"p"},"NestJS")," will have many ",Object(o.b)("strong",{parentName:"p"},"Feature Modules")," for each of the ",Object(o.b)("strong",{parentName:"p"},"Domain Models"),". Hence, a ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," should stay in close to where the ",Object(o.b)("strong",{parentName:"p"},"feature module")," is.\nIf you want to separate ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," out to a separate file, then you need to make sure that file gets executed by importing it somewhere (again, the module is a good place)."),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Inject the ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," instance in your ",Object(o.b)("inlineCode",{parentName:"li"},"Injectable"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Injectable()\nexport class UserService {\n  constructor(@InjectMapper() private readonly mapper: AutoMapper) {}\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@InjectMapper()")," takes in an optional ",Object(o.b)("inlineCode",{parentName:"p"},"name")," argument which will tell the decorator which ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance to inject. Default to ",Object(o.b)("inlineCode",{parentName:"p"},'"default"')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"InjectMapper")," is imported from ",Object(o.b)("inlineCode",{parentName:"p"},"nestjsx-automapper"),". ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," is imported from ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper"))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," on your models")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nconst result = await newUser.save();\nreturn this.mapper.map(result.toJSON(), UserVm, User);\n")))}b.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);