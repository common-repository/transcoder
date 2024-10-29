!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){var n;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(t){return function(t,e){var r,n,a,u,c,s,l,f,p,h=1,d=t.length,y="";for(n=0;n<d;n++)if("string"==typeof t[n])y+=t[n];else if("object"==typeof t[n]){if((u=t[n]).keys)for(r=e[h],a=0;a<u.keys.length;a++){if(null==r)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',u.keys[a],u.keys[a-1]));r=r[u.keys[a]]}else r=u.param_no?e[u.param_no]:e[h++];if(o.not_type.test(u.type)&&o.not_primitive.test(u.type)&&r instanceof Function&&(r=r()),o.numeric_arg.test(u.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(i("[sprintf] expecting number but found %T",r));switch(o.number.test(u.type)&&(f=r>=0),u.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,u.width?parseInt(u.width):0);break;case"e":r=u.precision?parseFloat(r).toExponential(u.precision):parseFloat(r).toExponential();break;case"f":r=u.precision?parseFloat(r).toFixed(u.precision):parseFloat(r);break;case"g":r=u.precision?String(Number(r.toPrecision(u.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=u.precision?r.substring(0,u.precision):r;break;case"t":r=String(!!r),r=u.precision?r.substring(0,u.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=u.precision?r.substring(0,u.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=u.precision?r.substring(0,u.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}o.json.test(u.type)?y+=r:(!o.number.test(u.type)||f&&!u.sign?p="":(p=f?"+":"-",r=r.toString().replace(o.sign,"")),s=u.pad_char?"0"===u.pad_char?"0":u.pad_char.charAt(1):" ",l=u.width-(p+r).length,c=u.width&&l>0?s.repeat(l):"",y+=u.align?p+r+c:"0"===s?p+c+r:c+p+r)}return y}(function(t){if(u[t])return u[t];for(var e,r=t,n=[],i=0;r;){if(null!==(e=o.text.exec(r)))n.push(e[0]);else if(null!==(e=o.modulo.exec(r)))n.push("%");else{if(null===(e=o.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(e[2]){i|=1;var a=[],c=e[2],s=[];if(null===(s=o.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(s[1]);""!==(c=c.substring(s[0].length));)if(null!==(s=o.key_access.exec(c)))a.push(s[1]);else{if(null===(s=o.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(s[1])}e[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:e[0],param_no:e[1],keys:e[2],sign:e[3],pad_char:e[4],align:e[5],width:e[6],precision:e[7],type:e[8]})}r=r.substring(e[0].length)}return u[t]=n}(t),arguments)}function a(t,e){return i.apply(null,[t].concat(e||[]))}var u=Object.create(null);e.sprintf=i,e.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(n=function(){return{sprintf:i,vsprintf:a}}.call(e,r,e,t))||(t.exports=n))}()},function(t,e,r){var n=r(5)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){t.exports=function(t,e){var r,n,o=0;function i(){var i,a,u=r,c=arguments.length;t:for(;u;){if(u.args.length===arguments.length){for(a=0;a<c;a++)if(u.args[a]!==arguments[a]){u=u.next;continue t}return u!==r&&(u===n&&(n=u.prev),u.prev.next=u.next,u.next&&(u.next.prev=u.prev),u.next=r,u.prev=null,r.prev=u,r=u),u.val}u=u.next}for(i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return u={args:i,val:t.apply(null,i)},r?(r.prev=u,u.next=r):n=u,o===e.maxSize?(n=n.prev).next=null:o++,r=u,u.val}return e=e||{},i.clear=function(){r=null,n=null,o=0},i}},,function(t,e,r){t.exports=r(7)},function(t,e,r){var n=r(6).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new L(n||[]);return u(i,"_invoke",{value:P(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="executing",g="completed",m={};function b(){}function x(){}function w(){}var _={};p(_,s,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(I([])));j&&j!==i&&a.call(j,s)&&(_=j);var k=w.prototype=b.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(o,i,u,c){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function P(t,r,n){var o=y;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=E(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?g:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function E(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=w,u(k,"constructor",{value:w,configurable:!0}),u(w,"constructor",{value:x,configurable:!0}),x.displayName=p(w,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,p(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},S(A.prototype),p(A.prototype,l,(function(){return this})),r.AsyncIterator=A,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new A(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(k),p(k,f,"Generator"),p(k,s,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e);if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach((function(e){o(t,e,r[e])}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.r(e);var u,c,s,l,f=r(2),p=r.n(f);r(0),p()(console.error),u={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},c=["(","?"],s={")":["("],":":["?","?:"]},l=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var h={"!":function(t){return!t},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"+":function(t,e){return t+e},"-":function(t,e){return t-e},"<":function(t,e){return t<e},"<=":function(t,e){return t<=e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"==":function(t,e){return t===e},"!=":function(t,e){return t!==e},"&&":function(t,e){return t&&e},"||":function(t,e){return t||e},"?:":function(t,e,r){if(t)throw e;return r}};var d={contextDelimiter:"",onMissingKey:null};function y(t,e){var r;for(r in this.data=t,this.pluralForms={},this.options={},d)this.options[r]=void 0!==e&&r in e?e[r]:d[r]}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}y.prototype.getPluralForm=function(t,e){var r,n,o,i,a=this.pluralForms[t];return a||("function"!=typeof(o=(r=this.data[t][""])["Plural-Forms"]||r["plural-forms"]||r.plural_forms)&&(n=function(t){var e,r,n;for(e=t.split(";"),r=0;r<e.length;r++)if(0===(n=e[r].trim()).indexOf("plural="))return n.substr(7)}(r["Plural-Forms"]||r["plural-forms"]||r.plural_forms),i=function(t){var e=function(t){for(var e,r,n,o,i=[],a=[];e=t.match(l);){for(r=e[0],(n=t.substr(0,e.index).trim())&&i.push(n);o=a.pop();){if(s[r]){if(s[r][0]===o){r=s[r][1]||r;break}}else if(c.indexOf(o)>=0||u[o]<u[r]){a.push(o);break}i.push(o)}s[r]||a.push(r),t=t.substr(e.index+r.length)}return(t=t.trim())&&i.push(t),i.concat(a.reverse())}(t);return function(t){return function(t,e){var r,n,o,i,a,u,c=[];for(r=0;r<t.length;r++){if(a=t[r],i=h[a]){for(n=i.length,o=Array(n);n--;)o[n]=c.pop();try{u=i.apply(null,o)}catch(t){return t}}else u=e.hasOwnProperty(a)?e[a]:+a;c.push(u)}return c[0]}(e,t)}}(n),o=function(t){return+i({n:t})}),a=this.pluralForms[t]=o),a(e)},y.prototype.dcnpgettext=function(t,e,r,n,o){var i,a,u;return i=void 0===o?0:this.getPluralForm(t,o),a=r,e&&(a=e+this.options.contextDelimiter+r),(u=this.data[t][a])&&u[i]?u[i]:(this.options.onMissingKey&&this.options.onMissingKey(r,t),0===i?r:n)};var m={"":{plural_forms:function(t){return 1===t?0:1}}},b=/^i18n\.(n?gettext|has_translation)(_|$)/,x=function(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)},w=function(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)},_=function(t,e){return function(r,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=t[e];if(w(r)&&x(n))if("function"==typeof o)if("number"==typeof i){var u={callback:o,priority:i,namespace:n};if(a[r]){var c,s=a[r].handlers;for(c=s.length;c>0&&!(i>=s[c-1].priority);c--);c===s.length?s[c]=u:s.splice(c,0,u),a.__current.forEach((function(t){t.name===r&&t.currentIndex>=c&&t.currentIndex++}))}else a[r]={handlers:[u],runs:0};"hookAdded"!==r&&t.doAction("hookAdded",r,n,o,i)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}},O=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n,o){var i=t[e];if(w(n)&&(r||x(o))){if(!i[n])return 0;var a=0;if(r)a=i[n].handlers.length,i[n]={runs:i[n].runs,handlers:[]};else for(var u=i[n].handlers,c=function(t){u[t].namespace===o&&(u.splice(t,1),a++,i.__current.forEach((function(e){e.name===n&&e.currentIndex>=t&&e.currentIndex--})))},s=u.length-1;s>=0;s--)c(s);return"hookRemoved"!==n&&t.doAction("hookRemoved",n,o),a}}},j=function(t,e){return function(r,n){var o=t[e];return void 0!==n?r in o&&o[r].handlers.some((function(t){return t.namespace===n})):r in o}};function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var S=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){var o=t[e];o[n]||(o[n]={handlers:[],runs:0}),o[n].runs++;for(var i=o[n].handlers,a=arguments.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=arguments[c];if(!i||!i.length)return r?u[0]:void 0;var s={name:n,currentIndex:0};for(o.__current.push(s);s.currentIndex<i.length;){var l=i[s.currentIndex].callback.apply(null,u);r&&(u[0]=l),s.currentIndex++}return o.__current.pop(),r?u[0]:void 0}},A=function(t,e){return function(){var r,n,o=t[e];return null!==(r=null===(n=o.__current[o.__current.length-1])||void 0===n?void 0:n.name)&&void 0!==r?r:null}},P=function(t,e){return function(r){var n=t[e];return void 0===r?void 0!==n.__current[0]:!!n.__current[0]&&r===n.__current[0].name}},E=function(t,e){return function(r){var n=t[e];if(w(r))return n[r]&&n[r].runs?n[r].runs:0}},F=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=_(this,"actions"),this.addFilter=_(this,"filters"),this.removeAction=O(this,"actions"),this.removeFilter=O(this,"filters"),this.hasAction=j(this,"actions"),this.hasFilter=j(this,"filters"),this.removeAllActions=O(this,"actions",!0),this.removeAllFilters=O(this,"filters",!0),this.doAction=S(this,"actions"),this.applyFilters=S(this,"filters",!0),this.currentAction=A(this,"actions"),this.currentFilter=A(this,"filters"),this.doingAction=P(this,"actions"),this.doingFilter=P(this,"filters"),this.didAction=E(this,"actions"),this.didFilter=E(this,"filters")},T=(F.addAction,F.addFilter,F.removeAction,F.removeFilter,F.hasAction,F.hasFilter,F.removeAllActions,F.removeAllFilters,F.doAction,F.applyFilters,F.currentAction,F.currentFilter,F.doingAction,F.doingFilter,F.didAction,F.didFilter,F.actions,F.filters,function(t,e,r){var n=new y({}),o=new Set,i=function(){o.forEach((function(t){return t()}))},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";n.data[e]=g(g(g({},m),n.data[e]),t),n.data[e][""]=g(g({},m[""]),n.data[e][""])},u=function(t,e){a(t,e),i()},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return n.data[t]||a(void 0,t),n.dcnpgettext(t,e,r,o,i)},s=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default"},l=function(t,e,n){var o=c(n,e,t);return r?(o=r.applyFilters("i18n.gettext_with_context",o,t,e,n),r.applyFilters("i18n.gettext_with_context_"+s(n),o,t,e,n)):o};if(r){var f=function(t){b.test(t)&&i()};r.addAction("hookAdded","core/i18n",f),r.addAction("hookRemoved","core/i18n",f)}return{getLocaleData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return n.data[t]},setLocaleData:u,resetLocaleData:function(t,e){n.data={},n.pluralForms={},u(t,e)},subscribe:function(t){return o.add(t),function(){return o.delete(t)}},__:function(t,e){var n=c(e,void 0,t);return r?(n=r.applyFilters("i18n.gettext",n,t,e),r.applyFilters("i18n.gettext_"+s(e),n,t,e)):n},_x:l,_n:function(t,e,n,o){var i=c(o,void 0,t,e,n);return r?(i=r.applyFilters("i18n.ngettext",i,t,e,n,o),r.applyFilters("i18n.ngettext_"+s(o),i,t,e,n,o)):i},_nx:function(t,e,n,o,i){var a=c(i,o,t,e,n);return r?(a=r.applyFilters("i18n.ngettext_with_context",a,t,e,n,o,i),r.applyFilters("i18n.ngettext_with_context_"+s(i),a,t,e,n,o,i)):a},isRTL:function(){return"rtl"===l("ltr","text direction")},hasTranslation:function(t,e,o){var i,a,u=e?e+""+t:t,c=!(null===(i=n.data)||void 0===i||null===(a=i[null!=o?o:"default"])||void 0===a||!a[u]);return r&&(c=r.applyFilters("i18n.has_translation",c,t,e,o),c=r.applyFilters("i18n.has_translation_"+s(o),c,t,e,o)),c}}}(0,0,F)),L=(T.getLocaleData.bind(T),T.setLocaleData.bind(T),T.resetLocaleData.bind(T),T.subscribe.bind(T),T.__.bind(T));T._x.bind(T),T._n.bind(T),T._nx.bind(T),T.isRTL.bind(T),T.hasTranslation.bind(T);var I=function(t,e){var r,n,o=t.path;return"string"==typeof t.namespace&&"string"==typeof t.endpoint&&(r=t.namespace.replace(/^\/|\/$/g,""),o=(n=t.endpoint.replace(/^\//,""))?r+"/"+n:r),delete t.namespace,delete t.endpoint,e(i({},t,{path:o}))},M=r(1),N=r.n(M);function D(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t){return(function(t){var e;try{e=new URL(t,"http://example.com").search.substring(1)}catch(t){}if(e)return e}(t)||"").replace(/\+/g,"%20").split("&").reduce((function(t,e){var r=C(e.split("=").filter(Boolean).map(decodeURIComponent),2),n=r[0],o=r[1],i=void 0===o?"":o;return n&&function(t,e,r){for(var n=e.length,o=n-1,i=0;i<n;i++){var a=e[i];!a&&Array.isArray(t)&&(a=t.length.toString());var u=!isNaN(Number(e[i+1]));t[a]=i===o?r:t[a]||(u?[]:{}),Array.isArray(t[a])&&!u&&(t[a]=G({},t[a])),t=t[a]}}(t,n.replace(/\]/g,"").split("["),i),t}),{})}function z(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return $(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(!e||!Object.keys(e).length)return t;var r=t,n=t.indexOf("?");return-1!==n&&(e=Object.assign(U(t),e),r=r.substr(0,n)),r+"?"+function(t){for(var e,r="",n=Object.entries(t);e=n.shift();){var o=C(e,2),i=o[0],a=o[1];if(Array.isArray(a)||a&&a.constructor===Object){var u,c=z(Object.entries(a).reverse());try{for(c.s();!(u=c.n()).done;){var s=C(u.value,2),l=s[0],f=s[1];n.unshift(["".concat(i,"[").concat(l,"]"),f])}}catch(t){c.e(t)}finally{c.f()}}else void 0!==a&&(null===a&&(a=""),r+="&"+[i,a].map(encodeURIComponent).join("="))}return r.substr(1)}(e)}var W=function(t){return t.json?t.json():Promise.reject(t)},Z=function(t){return function(t){if(!t)return{};var e=t.match(/<([^>]+)>; rel="next"/);return e?{next:e[1]}:{}}(t.headers.get("link")).next},B=function(t){var e=t.path&&-1!==t.path.indexOf("per_page=-1"),r=t.url&&-1!==t.url.indexOf("per_page=-1");return e||r},H=function(){var t,e=(t=N.a.mark((function t(e,r){var n,o,u,c,s,l;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==e.parse){t.next=2;break}return t.abrupt("return",r(e));case 2:if(B(e)){t.next=4;break}return t.abrupt("return",r(e));case 4:return t.next=6,r(i({},(p={per_page:100},h=(f=e).path,d=f.url,i({},a(f,["path","url"]),{url:d&&X(d,p),path:h&&X(h,p)})),{parse:!1}));case 6:return n=t.sent,t.next=9,W(n);case 9:if(o=t.sent,Array.isArray(o)){t.next=12;break}return t.abrupt("return",o);case 12:if(u=Z(n)){t.next=15;break}return t.abrupt("return",o);case 15:c=[].concat(o);case 16:if(!u){t.next=27;break}return t.next=19,r(i({},e,{path:void 0,url:u,parse:!1}));case 19:return s=t.sent,t.next=22,W(s);case 22:l=t.sent,c=c.concat(l),u=Z(s),t.next=16;break;case 27:return t.abrupt("return",c);case 28:case"end":return t.stop()}var f,p,h,d}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){D(i,n,o,a,u,"next",t)}function u(t){D(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}(),J=new Set(["PATCH","PUT","DELETE"]);function K(t,e){return void 0!==function(t,e){return U(t)[e]}(t,e)}var Y={Accept:"application/json, */*;q=0.1"},q={credentials:"include"},Q=[function(t,e){return"string"!=typeof t.url||K(t.url,"_locale")||(t.url=X(t.url,{_locale:"user"})),"string"!=typeof t.path||K(t.path,"_locale")||(t.path=X(t.path,{_locale:"user"})),e(t,e)},I,function(t,e){var r=t.method,n=void 0===r?"GET":r;return J.has(n.toUpperCase())&&(t=i({},t,{headers:i({},t.headers,{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),e(t,e)},H],V=function(t){if(t.status>=200&&t.status<300)return t;throw t},tt=function(t){var e=t.url,r=t.path,n=t.data,o=t.parse,u=void 0===o||o,c=a(t,["url","path","data","parse"]),s=t.body,l=t.headers;return l=i({},Y,l),n&&(s=JSON.stringify(n),l["Content-Type"]="application/json"),window.fetch(e||r,i({},q,c,{body:s,headers:l})).then(V).then((function(t){return u?204===t.status?null:t.json?t.json():Promise.reject(t):t})).catch((function(t){if(!u)throw t;var e={code:"invalid_json",message:L("The response is not a valid JSON response.")};if(!t||!t.json)throw e;return t.json().catch((function(){throw e})).then((function(t){var e={code:"unknown_error",message:L("An unknown error occurred.")};throw t||e}))}))};function et(t){var e=[].concat(Q,[tt]);return new Promise((function(r,n){(function t(r){return function(n){var o=e[r];return r===e.length-1?o(n):o(n,t(r+1))}})(0)(t).then(r).catch((function(e){if("rest_cookie_invalid_nonce"!==e.code)return n(e);window.fetch(et.nonceEndpoint).then(V).then((function(t){return t.text()})).then((function(e){et.nonceMiddleware.nonce=e,et(t).then(r).catch(n)})).catch(n)}))}))}et.use=function(t){Q.unshift(t)},et.setFetchHandler=function(t){tt=t},et.createNonceMiddleware=function(t){function e(t,r){var n=t.headers,o=void 0===n?{}:n;for(var a in o)if("x-wp-nonce"===a.toLowerCase())return r(t);return r(i({},t,{headers:i({},o,{"X-WP-Nonce":e.nonce})}))}return e.nonce=t,e},et.createPreloadingMiddleware=function(t){return function(e,r){var n=e.parse,o=void 0===n||n;if("string"==typeof e.path){var i=e.method||"GET",a=function(t){var e=t.split("?"),r=e[1],n=e[0];return r?n+"?"+r.split("&").map((function(t){return t.split("=")})).sort((function(t,e){return t[0].localeCompare(e[0])})).map((function(t){return t.join("=")})).join("&"):n}(e.path);if(o&&"GET"===i&&t[a])return Promise.resolve(t[a].body);if("OPTIONS"===i&&t[i]&&t[i][a])return Promise.resolve(t[i][a])}return r(e)}},et.createRootURLMiddleware=function(t){return function(e,r){return I(e,(function(e){var n,o=e.url,a=e.path;return"string"==typeof a&&(n=t,-1!==t.indexOf("?")&&(a=a.replace("?","&")),a=a.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(a=a.replace("?","&")),o=n+a),r(i({},e,{url:o}))}))}},et.fetchAllMiddleware=H;var rt=et,nt=window.rtTranscoderBlockEditorSupport;wp.hooks.addFilter("editor.BlockEdit","rt-transcoder-amp/set-media-attributes",(function(t){return function(e){var r=e.attributes,n="amp/amp-story-page"===e.name,o="core/video"===e.name,i=n?r.mediaId:r.id;return void 0!==i&&(void 0===r.poster?n&&void 0!==r.mediaType&&"video"===r.mediaType&&!r.mediaUrl.endsWith("mp4")?e.setAttributes({poster:nt.amp_story_fallback_poster}):o&&void 0!==r.src&&0!==r.src.indexOf("blob:")&&!r.src.endsWith("mp4")&&e.setAttributes({poster:nt.amp_video_fallback_poster}):r.poster.endsWith("-fallback-poster.png")&&rt({path:"/wp-json/transcoder/v1/amp-media / "+i}).then((function(t){!1!==t&&null!==t&&t.poster.length&&t.transcodedMedia.length&&(n&&void 0!==r.mediaType&&"video"===r.mediaType?e.setAttributes({poster:t.poster,mediaUrl:t.transcodedMedia}):o&&e.setAttributes({poster:t.poster,src:t.transcodedMedia}))}))),wp.element.createElement(t,e)}}))}]);