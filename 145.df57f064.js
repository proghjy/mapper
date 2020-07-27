/*! For license information please see 145.df57f064.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[145,146],{281:function(e,t,n){"use strict";n.r(t);n(31),n(21),n(22),n(62),n(327);var r=n(0),o=n.n(r),a=n(283),i=n(284),s=n(67),c=n(288),l=n(2),u=n(9),f=(n(331),n(287)),p=n(299),d=n(306),h=n(307),m=n(308),y=n(305),b=n(285),g=n(289),v=n(154),k=n.n(v);var E=function e(t,n){return"link"===t.type?(r=t.href,o=n,(a=function(e){return e.endsWith("/")?e:e+"/"})(r)===a(o)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var r,o,a};function w(e){var t,n,a,i=e.item,s=e.onItemClick,c=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=i.items,m=i.label,y=E(i,p),b=(n=y,a=Object(r.useRef)(n),Object(r.useEffect)((function(){a.current=n}),[n]),a.current),g=Object(r.useState)((function(){return!!c&&(!y&&i.collapsed)})),v=g[0],w=g[1];Object(r.useEffect)((function(){y&&!b&&v&&w(!1)}),[y,b,v]);var O=Object(r.useCallback)((function(e){e.preventDefault(),w((function(e){return!e}))}),[w]);return 0===h.length?null:o.a.createElement("li",{className:Object(f.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:m},o.a.createElement("a",Object(l.a)({className:Object(f.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&y},t[k.a.menuLinkText]=!c,t)),onClick:c?O:void 0,href:c?"#!":void 0},d),m),o.a.createElement("ul",{className:"menu__list"},h.map((function(e){return o.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:s,collapsible:c,activePath:p})}))))}function O(e){var t=e.item,n=e.onItemClick,r=e.activePath,a=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,s=t.label,c=E(t,r);return o.a.createElement("li",{className:"menu__list-item",key:s},o.a.createElement(b.a,Object(l.a)({className:Object(f.a)("menu__link",{"menu__link--active":c}),to:i},Object(g.a)(i)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},a),s))}function x(e){switch(e.item.type){case"category":return o.a.createElement(w,e);case"link":default:return o.a.createElement(O,e)}}var j=function(e){var t,n,a=Object(r.useState)(!1),s=a[0],c=a[1],u=Object(i.a)(),g=u.siteConfig,v=(g=void 0===g?{}:g).themeConfig.navbar,E=(v=void 0===v?{}:v).title,w=v.hideOnScroll,O=void 0!==w&&w,j=u.isClient,S=Object(m.a)(),T=S.logoLink,_=S.logoLinkProps,C=S.logoImageUrl,P=S.logoAlt,A=Object(p.a)().isAnnouncementBarClosed,N=Object(y.a)().scrollY,L=e.docsSidebars,M=e.path,I=e.sidebar,F=e.sidebarCollapsible;Object(d.a)(s);var R=Object(h.a)();if(Object(r.useEffect)((function(){R===h.b.desktop&&c(!1)}),[R]),!I)return null;var D=L[I];if(!D)throw new Error('Cannot find the sidebar "'+I+'" in the sidebar config!');return o.a.createElement("div",{className:Object(f.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=O,t))},O&&o.a.createElement(b.a,Object(l.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:T},_),null!=C&&o.a.createElement("img",{key:j,src:C,alt:P}),null!=E&&o.a.createElement("strong",null,E)),o.a.createElement("div",{className:Object(f.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":s},n[k.a.menuWithAnnouncementBar]=!A&&0===N,n))},o.a.createElement("button",{"aria-label":s?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!s)}},s?o.a.createElement("span",{className:Object(f.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement("ul",{className:"menu__list"},D.map((function(e){return o.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:F,activePath:M})})))))},S=(n(309),n(310),n(332)),T=(n(156),n(157)),_=n.n(T),C=function(e){return function(t){var n,r=t.id,a=Object(u.a)(t,["id"]),s=Object(i.a)().siteConfig,c=(s=void 0===s?{}:s).themeConfig,l=(c=void 0===c?{}:c).navbar,p=(l=void 0===l?{}:l).hideOnScroll,d=void 0!==p&&p;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(f.a)("anchor",(n={},n[_.a.enhancedAnchor]=!d,n)),id:r}),a.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,a)}},P=n(158),A=n.n(P),N={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(S.a,e):o.a.createElement("code",e):t},a:function(e){return/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(b.a,e)},pre:function(e){return o.a.createElement("div",Object(l.a)({className:A.a.mdxCodeBlock},e))},h1:C("h1"),h2:C("h2"),h3:C("h3"),h4:C("h4"),h5:C("h5"),h6:C("h6")},L=n(295),M=n(304),I=n(159),F=n.n(I);t.default=function(e){var t=e.route,n=e.docsMetadata,r=e.location,l=t.routes.find((function(e){return Object(M.a)(r.pathname,e)}))||{},u=n.permalinkToSidebar,f=n.docsSidebars,p=n.version,d=u[l.path],h=Object(i.a)(),m=h.siteConfig,y=(m=void 0===m?{}:m).themeConfig,b=void 0===y?{}:y,g=h.isClient,v=b.sidebarCollapsible,k=void 0===v||v;return 0===Object.keys(l).length?o.a.createElement(L.default,e):o.a.createElement(c.a,{version:p,key:g},o.a.createElement("div",{className:F.a.docPage},d&&o.a.createElement("div",{className:F.a.docSidebarContainer,role:"complementary"},o.a.createElement(j,{docsSidebars:f,path:l.path,sidebar:d,sidebarCollapsible:k})),o.a.createElement("main",{className:F.a.docMainContainer},o.a.createElement(a.a,{components:N},Object(s.a)(t.routes)))))}},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,h=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},295:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(288);t.default=function(){return o.a.createElement(a.a,{title:"Page Not Found"},o.a.createElement("div",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},"Page Not Found"),o.a.createElement("p",null,"We could not find what you were looking for."),o.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},309:function(e,t,n){"use strict";var r=n(12),o=n(84)(!0);r(r.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(79)("includes")},310:function(e,t,n){"use strict";var r=n(12),o=n(291);r(r.P+r.F*n(292)("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},327:function(e,t,n){"use strict";var r=n(12),o=n(328)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(79)("find")},328:function(e,t,n){var r=n(28),o=n(57),a=n(29),i=n(25),s=n(329);e.exports=function(e,t){var n=1==e,c=2==e,l=3==e,u=4==e,f=6==e,p=5==e||f,d=t||s;return function(t,s,h){for(var m,y,b=a(t),g=o(b),v=r(s,h,3),k=i(g.length),E=0,w=n?d(t,k):c?d(t,0):void 0;k>E;E++)if((p||E in g)&&(y=v(m=g[E],E,b),e))if(n)w[E]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return E;case 2:w.push(m)}else if(u)return!1;return f?-1:l||u?u:w}}},329:function(e,t,n){var r=n(330);e.exports=function(e,t){return new(r(e))(t)}},330:function(e,t,n){var r=n(13),o=n(302),a=n(3)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},331:function(e,t,n){"use strict";var r=n(12),o=n(25),a=n(291),i="".endsWith;r(r.P+r.F*n(292)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),s=void 0===n?r:Math.min(o(n),r),c=String(e);return i?i.call(t,c,s):t.slice(s-c.length,s)===c}})},333:function(e,t,n){"use strict";var r=n(8),o=n(25),a=n(59),i=n(60);n(61)("match",1,(function(e,t,n,s){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=s(n,e,this);if(t.done)return t.value;var c=r(e),l=String(this);if(!c.global)return i(c,l);var u=c.unicode;c.lastIndex=0;for(var f,p=[],d=0;null!==(f=i(c,l));){var h=String(f[0]);p[d]=h,""===h&&(c.lastIndex=a(l,o(c.lastIndex),u)),d++}return 0===d?null:p}]}))},334:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var a=0,i=r.length;a<i;a++)r[a].fn!==t&&r[a].fn._!==t&&o.push(r[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var i=a.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,a)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),l=n.n(c),u=n(2),f=n.n(u),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return m("action",e)}},{key:"defaultTarget",value:function(e){var t=m("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return m("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(l.a);function m(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=h}]).default},e.exports=r()},335:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var a=[],i=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=i);for(var s=n;s!=o;s+=i)a.push(s);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},336:function(e,t){!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,n){return"(?:"+t[+n]+")"}))}function n(e,n,r){return RegExp(t(e,n),r||"")}function r(e,t){for(var n=0;n<t;n++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",a="class enum interface struct",i="add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var l=c(a),u=RegExp(c(o+" "+a+" "+i+" "+s)),f=c(a+" "+i+" "+s),p=c(o+" "+a+" "+s),d=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=r(/\((?:[^()]|<<self>>)*\)/.source,2),m=/@?\b[A-Za-z_]\w*\b/.source,y=t(/<<0>>(?:\s*<<1>>)?/.source,[m,d]),b=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[f,y]),g=/\[\s*(?:,\s*)*\]/.source,v=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[d,h,g]),k=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[v]),E=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[k,b,g]),w={keyword:u,punctuation:/[<>()?,.:[\]]/},O=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,x=/"(?:\\.|[^\\"\r\n])*"/.source,j=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[j]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[x]),lookbehind:!0,greedy:!0},{pattern:RegExp(O),greedy:!0,alias:"character"}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,E]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[l,y]),lookbehind:!0,inside:w},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:n(/(\b(?:is|as)\s+)<<0>>/.source,[E]),lookbehind:!0,inside:w},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+in))/.source,[E,p,m]),inside:w}],keyword:u,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:w},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[E,b]),inside:w,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[E]),lookbehind:!0,inside:w,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,d]),inside:{function:n(/^<<0>>/.source,[m]),generic:{pattern:RegExp(d),alias:"class-name",inside:w}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,y,m,E,u.source]),lookbehind:!0,inside:{keyword:u,"class-name":{pattern:RegExp(E),greedy:!0,inside:w},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var S=x+"|"+O,T=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*[\s\S]*?\*\/|<<0>>/.source,[S]),_=r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),C=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,P=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[b,_]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[C,P]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[C]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[_]),inside:e.languages.csharp},"class-name":{pattern:RegExp(b),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=/:[^}\r\n]+/.source,N=r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),L=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[N,A]),M=r(t(/[^"'/()]|\/(?!\*)|\/\*.*?\*\/|<<0>>|\(<<self>>*\)/.source,[S]),2),I=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[M,A]);function F(t,r){return{interpolation:{pattern:n(/([^{](?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[r,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[L]),lookbehind:!0,greedy:!0,inside:F(L,N)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[I]),lookbehind:!0,greedy:!0,inside:F(I,M)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp},337:function(e,t,n){"use strict";t.a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},338:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(54),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:r.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=c({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=c({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=r[i]++)<o[i];){var p=void 0,d=t[i],h=n[i][a];if("string"==typeof h?(d=i>0?d:["plain"],p=h):(d=f(d,h.type),h.alias&&(d=f(d,h.alias)),p=h.content),"string"==typeof p){var m=p.split(l),y=m.length;s.push({types:d,content:m[0]});for(var b=1;b<y;b++)u(s),c.push(s=[]),s.push({types:d,content:m[b]})}else i++,t.push(d),n.push(p),r.push(0),o.push(p.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return u(s),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=h}}]);