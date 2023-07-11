(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function w(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ya=b.prototype}
function wa(){this.T=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.A=this.j=null}
function xa(a){if(a.T)throw new TypeError("Generator is already running");a.T=!0}
wa.prototype.ka=function(a){this.i=a};
function ya(a,b){a.j={exception:b,od:!0};a.h=a.s||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){a.A=[a.j];a.s=0;a.m=0}
function Ea(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.od?a.h=a.s||a.m:void 0!=b.v&&a.m<b.v?(a.h=b.v,a.j=null):a.h=a.m:a.h=0}
function Fa(a){this.h=new wa;this.i=a}
function Ga(a,b){xa(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.T=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.T=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.T=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.od)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){xa(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.ka):(a.h.ka(b),b=Ia(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.ka):(ya(a.h,b),b=Ia(a));return b};
this.return=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Fa(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.T=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.X),reject:g(this.m)}};
b.prototype.X=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.s(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.s(g)};
b.prototype.m=function(g){this.ka(2,g)};
b.prototype.s=function(g){this.ka(1,g)};
b.prototype.ka=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.aa();this.A()};
b.prototype.aa=function(){var g=this;e(function(){if(g.M()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.M=function(){if(this.T)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ba=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.T=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Xb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&la(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.j=a===zb&&b||""}
yb.prototype.i=!0;yb.prototype.h=function(){return this.j};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");var Bb={};function Cb(a){this.j=a;this.i=!0}
Cb.prototype.toString=function(){return this.j.toString()};
Cb.prototype.h=function(){return this.j.toString()};function Db(a){this.j=a}
Db.prototype.toString=function(){return this.j+""};
Db.prototype.i=!0;Db.prototype.h=function(){return this.j.toString()};
function Eb(a){if(a instanceof Db&&a.constructor===Db)return a.j;Oa(a);return"type_error:TrustedResourceUrl"}
var Fb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Fb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ib(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Jb(a,b){return a<b?-1:a>b?1:0}
;function Kb(a){this.j=a}
Kb.prototype.toString=function(){return this.j.toString()};
Kb.prototype.i=!0;Kb.prototype.h=function(){return this.j.toString()};
function Lb(a){if(a instanceof Kb&&a.constructor===Kb)return a.j;Oa(a);return"type_error:SafeUrl"}
var Mb;try{new URL("s://g"),Mb=!0}catch(a){Mb=!1}var Nb=Mb;function Ob(a){if(a instanceof Kb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Nb){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Kb(a,Pb)}
var Pb={},Qb=new Kb("about:invalid#zClosurez",Pb);var Rb,Sb=E("CLOSURE_FLAGS"),Tb=Sb&&Sb[610401301];Rb=null!=Tb?Tb:!1;function Ub(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Vb,Wb=C.navigator;Vb=Wb?Wb.userAgentData||null:null;function Xb(a){return Rb?Vb?Vb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Ub().indexOf(a)}
;function Yb(){return Rb?!!Vb&&0<Vb.brands.length:!1}
function Zb(){return Yb()?!1:F("Opera")}
function $b(){return Yb()?!1:F("Trident")||F("MSIE")}
function ac(){return Yb()?!1:F("Edge")}
function bc(){return Yb()?Xb("Microsoft Edge"):F("Edg/")}
function cc(){return F("Firefox")||F("FxiOS")}
function dc(){return F("Safari")&&!(ec()||(Yb()?0:F("Coast"))||Zb()||ac()||bc()||(Yb()?Xb("Opera"):F("OPR"))||cc()||F("Silk")||F("Android"))}
function ec(){return Yb()?Xb("Chromium"):(F("Chrome")||F("CriOS"))&&!ac()||F("Silk")}
function fc(){return F("Android")&&!(ec()||cc()||Zb()||F("Silk"))}
function hc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ic(a){var b=Ub();if("Internet Explorer"===a){if($b())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=hc(c);
switch(a){case "Opera":if(Zb())return b(["Version","Opera"]);if(Yb()?Xb("Opera"):F("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(ac())return b(["Edge"]);if(bc())return b(["Edg"]);break;case "Chromium":if(ec())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&cc()||"Safari"===a&&dc()||"Android Browser"===a&&fc()||"Silk"===a&&F("Silk")?(b=c[2])&&b[1]||"":""}
function jc(a){if(Yb()&&"Silk"!==a){var b=Vb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=ic(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;function kc(a){this.j=a;this.i=!0}
kc.prototype.h=function(){return this.j.toString()};
kc.prototype.toString=function(){return this.j.toString()};function lc(a,b){b=b instanceof Kb?b:Ob(b);a.href=Lb(b)}
function mc(a,b){a.rel="stylesheet";Ib("stylesheet","stylesheet")?(a.href=Eb(b).toString(),(b=nc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Db?Eb(b).toString():b instanceof Kb?Lb(b):Lb(Ob(b))}
function oc(){return nc("script[nonce]")}
var pc=/^[\w+/_-]+[=]{0,2}$/;function nc(a,b){b=(b||C).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&pc.test(a)?a:"":""}
;function qc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sc(a){return a?decodeURI(a):a}
function tc(a,b){return b.match(rc)[a]||null}
function uc(a){return sc(tc(3,a))}
function vc(a){var b=a.match(rc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function wc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function xc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function yc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)yc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function zc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)yc(a[b],a[b+1],c);return c.join("&")}
function Ac(a){var b=[],c;for(c in a)yc(c,a[c],b);return b.join("&")}
function Bc(a,b){var c=2==arguments.length?zc(arguments[1],0):zc(arguments,1);return xc(a,c)}
function Cc(a,b){b=Ac(b);return xc(a,b)}
function Dc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return xc(a,b+c)}
function Ec(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Fc=/#|$/,Gc=/[?&]($|#)/;function Hc(a,b){for(var c=a.search(Fc),d=0,e,f=[];0<=(e=Ec(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Gc,"$1")}
;function Ic(a){C.setTimeout(function(){throw a;},0)}
;function Jc(){return Rb?!!Vb&&!!Vb.platform:!1}
function Kc(){return Jc()?"Android"===Vb.platform:F("Android")}
function Lc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
function Mc(){return Lc()||F("iPad")||F("iPod")}
function Nc(){return Jc()?"macOS"===Vb.platform:F("Macintosh")}
function Oc(){return Jc()?"Windows"===Vb.platform:F("Windows")}
function Pc(){return Jc()?"Chrome OS"===Vb.platform:F("CrOS")}
function Qc(){var a=Ub(),b="";Oc()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Mc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Nc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Ib(Ub(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Kc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):Pc()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Hb(String(b||"")).split(".");for(var c=
Hb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Jb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Jb(0==f[2].length,0==g[2].length)||Jb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Rc(a){Rc[" "](a);return a}
Rc[" "]=function(){};var Sc=Zb(),Tc=$b(),Uc=F("Edge"),Vc=F("Gecko")&&!(Ib(Ub(),"WebKit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Wc=Ib(Ub(),"WebKit")&&!F("Edge");Wc&&F("Mobile");Nc();Oc();(Jc()?"Linux"===Vb.platform:F("Linux"))||Pc();var Xc=C.navigator||null;Xc&&(Xc.appVersion||"").indexOf("X11");var Yc=Kc();Lc();F("iPad");F("iPod");Mc();Ib(Ub(),"KaiOS");function Zc(){var a=C.document;return a?a.documentMode:void 0}
var $c;a:{var ad="",bd=function(){var a=Ub();if(Vc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Uc)return/Edge\/([\d\.]+)/.exec(a);if(Tc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wc)return/WebKit\/(\S+)/.exec(a);if(Sc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
bd&&(ad=bd?bd[1]:"");if(Tc){var cd=Zc();if(null!=cd&&cd>parseFloat(ad)){$c=String(cd);break a}}$c=ad}var dd=$c,ed;if(C.document&&Tc){var fd=Zc();ed=fd?fd:parseInt(dd,10)||void 0}else ed=void 0;var gd=ed;cc();var hd=Lc()||F("iPod"),id=F("iPad");fc();ec();var jd=dc()&&!Mc();var kd={},ld=null;function md(a,b){Pa(a);void 0===b&&(b=0);nd();b=kd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function od(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;pd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function pd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=ld[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
nd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function nd(){if(!ld){ld={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));kd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ld[f]&&(ld[f]=e)}}}}
;var qd="undefined"!==typeof Uint8Array,rd=!Tc&&"function"===typeof btoa;function sd(a){if(!rd)return md(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var td=/[-_.]/g,ud={"-":"+",_:"/",".":"="};function vd(a){return ud[a]||""}
function wd(a){return qd&&null!=a&&a instanceof Uint8Array}
var xd={};var yd;function zd(a){if(a!==xd)throw Error("illegal external caller");}
function Ad(a,b){zd(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ad.prototype.isEmpty=function(){return null==this.h};
Ad.prototype.sizeBytes=function(){zd(xd);var a=this.h;if(null!=a&&!wd(a))if("string"===typeof a)if(rd){td.test(a)&&(a=a.replace(td,vd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=od(a);else Oa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Bd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ja(Object.values({xf:1,wf:2,vf:4,zf:8,yf:16,mf:32,Af:64,tf:128,sf:256,uf:512})));function Cd(a,b){Bd?a[Bd]|=b:void 0!==a.Ga?a.Ga|=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Dd(a){var b=G(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Ed(a,b|1));return a}
function G(a){var b;Bd?b=a[Bd]:b=a.Ga;return b|0}
function Ed(a,b){Bd?a[Bd]=b:void 0!==a.Ga?a.Ga=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Fd(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Ed(a,b);return a}
function Gd(a){Cd(a,1);return a}
function Hd(a,b){Ed(b,(a|0)&-51)}
function Id(a,b){Ed(b,(a|18)&-41)}
function Jd(a){a=a>>10&1023;return 0===a?536870912:a}
;var Kd={};function Ld(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Md,Nd=Object.freeze(Ed([],23));function Od(a){if(a&2)throw Error();}
;function Pd(a){return a.displayName||a.name||"unknown type name"}
function Qd(a){return null==a?a:!!a}
function Rd(a){Oa(a);return a}
function Sd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Pd(b)+" but got "+(a&&Pd(a.constructor)));}
function Td(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jc===Kd)return a;if(d){var e=d=G(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Ed(a,e);return new b(a)}}
;function Ud(a,b){a=a.V;return Vd(a,G(a),b)}
function Vd(a,b,c,d){if(-1===c)return null;if(c>=Jd(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+(((b&256)>>8)-1);if(b<e)return a[b]}}
function K(a,b,c,d){var e=a.V,f=G(e);Od(f);Wd(e,f,b,c,d);return a}
function Wd(a,b,c,d,e){var f=Jd(b);if(c>=f||e){e=b;if(b&128)f=a[a.length-1];else{if(null==d)return;f=a[f+(((b&256)>>8)-1)]={};e|=128}f[c]=d;e&=-513;e!==b&&Ed(a,e)}else a[c+(((b&256)>>8)-1)]=d,b&128&&(d=a[a.length-1],c in d&&delete d[c]),b&512&&Ed(a,b&-513)}
function Xd(a){return void 0!==Yd(a,Zd,11,!1)}
function $d(a,b,c,d){a=a.V;var e=G(a);Od(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Vd(a,e,h)&&(0!==f&&Wd(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Wd(a,e,c);Wd(a,e,b,d)}
function Yd(a,b,c,d){a=a.V;var e=G(a),f=Vd(a,e,c,d);b=Td(f,b,e);b!==f&&null!=b&&Wd(a,e,c,b,d);return b}
function ae(a,b,c,d){d=void 0===d?!1:d;b=Yd(a,b,c,d);if(null==b)return b;a=a.V;var e=G(a);if(!(e&2)){var f=be(b);f!==b&&(b=f,Wd(a,e,c,b,d))}return b}
function ce(a,b,c,d){null!=d?Sd(d,b):d=void 0;return K(a,c,d)}
function de(a,b,c,d){var e=a.V,f=G(e);Od(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Sd(k,b);g=g&&!(G(k.V)&2)}b=G(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=Fd(d,h))}null==d&&(d=void 0);Wd(e,f,c,d);return a}
function ee(){var a=new fe;return K(a,1,1)}
;var ge;function he(a,b){return ie(b)}
function ie(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(wd(a))return sd(a);if(a instanceof Ad){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=sd(b)}}}return a}
;function je(a,b){var c=a.V,d=Array.prototype.slice.call(c),e=G(c),f=d.length;c=e&128?d[f-1]:void 0;f+=c?-1:0;for(e=e&256?1:0;e<f;e++)d[e]=b(d[e]);if(c){e=d[e]={};for(var g in c)e[g]=b(c[g])}b=a.constructor;Cd(d,16);G(d);ge=d;d=new b(d);ge=void 0;a.nd&&(d.nd=a.nd.slice());return d}
function ke(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&G(a)&1?void 0:f&&G(a)&2?a:le(a,b,c,void 0!==d,e,f);else if(Ld(a)){var g={},h;for(h in a)g[h]=ke(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function le(a,b,c,d,e,f){var g=d||c?G(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ke(a[h],b,c,d,e,f);c&&c(g,a);return a}
function me(a){return a.Jc===Kd?a.toJSON():ie(a)}
;function ne(a,b,c){c=void 0===c?Id:c;if(null!=a){if(qd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Ed(a,d|18),a;a=le(a,ne,d&4?Id:c,!0,!1,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}a.Jc===Kd&&(G(a.V)&2||(a=oe(a,!0),Cd(a.V,18)));return a}}
function oe(a,b){var c=G(a.V),d=b||c&2?Id:Hd,e=!!(c&16);return je(a,function(f){return ne(f,e,d)})}
function be(a){if(!(G(a.V)&2))return a;var b=oe(a,!1);b.h=a;Cd(b.V,512);return b}
;function M(a,b,c){null==a&&(a=ge);ge=void 0;if(null==a){var d=48;c?(a=[c],d|=256):a=[]}else{if(!Array.isArray(a))throw Error();d=G(a)|32;if(c&&(d|=256,c!==a[0]))throw Error();}this.V=a;a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Ld(g)){d|=128;b=((d&256)>>8)-1;e=f-b;if(1024<=e){for(var h=e=1023;h<=f;h++){var k=c[h];null!=k&&(g[h-b]=k)}c.length=1024;c[e]=g}d=d&-1047553|(e&1023)<<10;break a}}b&&(c=Math.max(b,e-(((d&256)>>8)-1)),1024<c&&(c=536870912),d=d&-1047553|(c&1023)<<10)}Ed(a,d)}
m=M.prototype;m.toJSON=function(){if(Md)var a=pe(this,this.V,!1);else a=le(this.V,me,void 0,void 0,!1,!1),a=pe(this,a,!0);return a};
m.serialize=function(){Md=!0;try{return JSON.stringify(this.toJSON(),he)}finally{Md=!1}};
m.clone=function(){return oe(this,!1)};
m.Jc=Kd;m.toString=function(){return pe(this,this.V,!1).toString()};
function pe(a,b,c){var d=a.constructor.Va,e=G(c?a.V:b);e=Jd(e);if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&Ld(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}f=b;c=!c;e=G(a.V);a=Jd(e);e=((e&256)>>8)-1;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<a){k+=e;var l=f[k];null==l?f[k]=c?Nd:Gd([]):c&&l!==Nd&&Dd(l)}else h||(l=void 0,f.length&&Ld(l=f[f.length-1])?h=l:f.push(h={})),l=h[k],null==h[k]?h[k]=c?Nd:Gd([]):c&&l!==Nd&&Dd(l)}}return b}
;function qe(a){this.cd=a}
;function re(a,b,c){this.i=a;this.l=b;this.h=c||[];this.sb=new Map}
m=re.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.zc(b);c?c.push(new qe(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.hd(B.apply(1,arguments));this.sb.set(b,[new qe(a)])};
m.zc=function(){var a=this.hd(B.apply(0,arguments));return this.sb.has(a)?this.sb.get(a):void 0};
m.ge=function(){var a=this.zc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.sb.clear()};
m.hd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function se(a,b){re.call(this,a,3,b)}
w(se,re);se.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ge(b);d&&(c=d.cd);this.Bd(c+a,b)};function te(a,b){re.call(this,a,2,b)}
w(te,re);te.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function ue(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ve(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?ve.apply(null,d):ue(d)}}
;function N(){this.ka=this.ka;this.T=this.T}
N.prototype.ka=!1;N.prototype.h=function(){return this.ka};
N.prototype.dispose=function(){this.ka||(this.ka=!0,this.K())};
function we(a,b){xe(a,Xa(ue,b))}
function xe(a,b){a.ka?b():(a.T||(a.T=[]),a.T.push(b))}
N.prototype.K=function(){if(this.T)for(;this.T.length;)this.T.shift()()};function ye(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ye.prototype.stopPropagation=function(){this.j=!0};
ye.prototype.preventDefault=function(){this.defaultPrevented=!0};function ze(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ae(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Be[c])c=Be[c];else{c=String(c);if(!Be[c]){var f=/function\s+([^\(]+)/m.exec(c);Be[c]=f?f[1]:"[Anonymous]"}c=Be[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ae(a,b){b||(b={});b[Ce(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ce(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ae(a,b));return c}
function Ce(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Be={};var De=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ee(a,b){ye.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Ee,ye);var Fe={2:"touch",3:"pen",4:"mouse"};
Ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Vc){a:{try{Rc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Fe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ee.ya.preventDefault.call(this)};
Ee.prototype.stopPropagation=function(){Ee.ya.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ee.prototype.preventDefault=function(){Ee.ya.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(1E6*Math.random()|0);var He=0;function Ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++He;this.Ob=this.Wb=!1}
function Je(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function Ke(a){this.src=a;this.listeners={};this.h=0}
Ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Le(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new Ie(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
Ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Le(e,b,c,d);return-1<b?(Je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Me(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var Ne="closure_lm_"+(1E6*Math.random()|0),Oe={},Pe=0;function Qe(a,b,c,d,e){if(d&&d.once)Re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!1,d,e)}
function Te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ue(a);h||(a[Ne]=h=new Ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)De||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(We(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pe++}}
function Ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xe;return a}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.l.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!0,d,e)}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Se(c),a&&a[Ge])?a.l.remove(String(b),c,d,e):a&&(a=Ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ze(c))}
function Ze(a){if("number"!==typeof a&&a&&!a.Ob){var b=a.src;if(b&&b[Ge])Me(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(We(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pe--;(c=Ue(b))?(Me(c,a),0==c.h&&(c.src=null,b[Ne]=null)):Je(a)}}}
function We(a){return a in Oe?Oe[a]:Oe[a]="on"+a}
function Xe(a,b){if(a.Ob)a=!0;else{b=new Ee(b,this);var c=a.listener,d=a.cc||a.src;a.Wb&&Ze(a);a=c.call(d,b)}return a}
function Ue(a){a=a[Ne];return a instanceof Ke?a:null}
var $e="__closure_events_fn_"+(1E9*Math.random()>>>0);function Se(a){if("function"===typeof a)return a;a[$e]||(a[$e]=function(b){return a.handleEvent(b)});
return a[$e]}
;function af(){N.call(this);this.l=new Ke(this);this.pc=this;this.Ca=null}
Ya(af,N);af.prototype[Ge]=!0;m=af.prototype;m.addEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
function bf(a,b){var c=a.Ca;if(c){var d=[];for(var e=1;c;c=c.Ca)d.push(c),++e}a=a.pc;c=b.type||b;"string"===typeof b?b=new ye(b,a):b instanceof ye?b.target=b.target||a:(e=b,b=new ye(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=cf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=cf(g,c,!0,b)&&e,b.j||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=cf(g,c,!1,b)&&e}
m.K=function(){af.ya.K.call(this);this.removeAllListeners();this.Ca=null};
m.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Je(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function cf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Wb&&Me(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
df.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ef(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function ff(a,b){return a+Math.random()*(b-a)}
;function gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=gf.prototype;m.clone=function(){return new gf(this.x,this.y)};
m.equals=function(a){return a instanceof gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function hf(a,b){this.width=a;this.height=b}
m=hf.prototype;m.clone=function(){return new hf(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var mf;function nf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!$b()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function of(){this.i=this.h=null}
of.prototype.add=function(a,b){var c=pf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
of.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var pf=new df(function(){return new qf},function(a){return a.reset()});
function qf(){this.next=this.scope=this.fn=null}
qf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
qf.prototype.reset=function(){this.next=this.scope=this.fn=null};var rf,sf=!1,tf=new of;function uf(a,b){rf||vf();sf||(rf(),sf=!0);tf.add(a,b)}
function vf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);rf=function(){a.then(wf)}}else rf=function(){var b=wf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!ac()&&C.Window.prototype.setImmediate==C.setImmediate?(mf||(mf=nf()),mf(b)):C.setImmediate(b)}}
function wf(){for(var a;a=tf.remove();){try{a.fn.call(a.scope)}catch(b){Ic(b)}ef(pf,a)}sf=!1}
;function xf(a){this.h=0;this.T=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){yf(b,2,c)},function(c){yf(b,3,c)})}catch(c){yf(this,3,c)}}
function zf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
zf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Af=new df(function(){return new zf},function(a){a.reset()});
function Bf(a,b,c){var d=Af.get();d.i=a;d.h=b;d.context=c;return d}
function Cf(a){if(a instanceof xf)return a;var b=new xf(bb);yf(b,2,a);return b}
function Df(a){return new xf(function(b,c){c(a)})}
function Ef(a,b,c){Ff(a,b,c,null)||uf(Xa(b,a))}
function Gf(a){return new xf(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Ef(g,Xa(e,f,!0),Xa(e,f,!1));
else b(d)})}
xf.prototype.then=function(a,b,c){return Hf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
xf.prototype.$goog_Thenable=!0;m=xf.prototype;m.nc=function(a,b){return Hf(this,null,a,b)};
m.catch=xf.prototype.nc;m.cancel=function(a){if(0==this.h){var b=new If(a);uf(function(){Jf(this,b)},this)}};
function Jf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Jf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Kf(c),Lf(c,e,3,b)))}a.j=null}else yf(a,3,b)}
function Mf(a,b){a.i||2!=a.h&&3!=a.h||Nf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Hf(a,b,c,d){var e=Bf(null,null,null);e.child=new xf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof If?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Mf(a,e);return e.child}
m.Xe=function(a){this.h=0;yf(this,2,a)};
m.Ye=function(a){this.h=0;yf(this,3,a)};
function yf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Ff(c,a.Xe,a.Ye,a)||(a.T=c,a.h=b,a.j=null,Nf(a),3!=b||c instanceof If||Of(a,c)))}
function Ff(a,b,c,d){if(a instanceof xf)return Mf(a,Bf(b||bb,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Qa(a))try{var f=a.then;if("function"===typeof f)return Pf(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Pf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nf(a){a.s||(a.s=!0,uf(a.ae,a))}
function Kf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ae=function(){for(var a;a=Kf(this);)Lf(this,a,this.h,this.T);this.s=!1};
function Lf(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,Qf(b,c,d);else try{b.j?b.i.call(b.context):Qf(b,c,d)}catch(e){Rf.call(null,e)}ef(Af,b)}
function Qf(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Of(a,b){a.m=!0;uf(function(){a.m&&Rf.call(null,b)})}
var Rf=Ic;function If(a){$a.call(this,a)}
Ya(If,$a);If.prototype.name="cancel";function Sf(a,b){af.call(this);this.j=a||1;this.i=b||C;this.m=Wa(this.We,this);this.s=Date.now()}
Ya(Sf,af);m=Sf.prototype;m.enabled=!1;m.Ba=null;m.setInterval=function(a){this.j=a;this.Ba&&this.enabled?(this.stop(),this.start()):this.Ba&&this.stop()};
m.We=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Ba=this.i.setTimeout(this.m,this.j-a):(this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null),bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ba||(this.Ba=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
m.stop=function(){this.enabled=!1;this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null)};
m.K=function(){Sf.ya.K.call(this);this.stop();delete this.i};
function Tf(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function Uf(a){N.call(this);this.M=a;this.j=new Map;this.A=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new Sf(this.flushInterval);this.i.listen("tick",this.pb,!1,this);we(this,this.i);this.s=!1}
w(Uf,N);m=Uf.prototype;m.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function Vf(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.pb()}
m.pb=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.sb.size});
a.length&&this.M.flush(a,this.s);Wf(a);this.l=0;this.i.enabled&&this.i.stop()};
m.Wc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new se(a,b))};
m.Xc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new te(a,b))};
function Xf(a,b){return a.A.has(b)?void 0:a.j.get(b)}
m.oc=function(a){this.Nd.apply(this,[a,1].concat(ja(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=Xf(this,a);d&&d instanceof se&&(d.j(b,c),Vf(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Xf(this,a);d&&d instanceof te&&(d.record(b,c),Vf(this))};
function Wf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Yf(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{vb:3,ub:"rk"},{vb:2,ub:"ec"},{vb:3,ub:"em"})}
function Zf(a,b,c,d){a.h.oc("/client_streamz/bg/fiec",b,c,d)}
function $f(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{vb:3,ub:"rk"})}
$f.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function ag(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{vb:3,ub:"rk"})}
function bg(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{vb:3,ub:"rk"})}
bg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var cg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function dg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=eg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=fg(a,h),d+=fg(a,h+4),e+=fg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return cg.toString(e)}
function eg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function fg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function gg(a){M.call(this,a)}
w(gg,M);var hg=[1,2,3];function ig(a){M.call(this,a)}
w(ig,M);var jg=[1,2,3];function kg(a){M.call(this,a)}
w(kg,M);kg.Va=[1];function lg(a){M.call(this,a)}
w(lg,M);lg.Va=[3,6,4];function mg(a){M.call(this,a)}
w(mg,M);mg.Va=[1];function ng(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function og(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var J=z^x&(y^z);var L=1518500249}else J=x^y^z,L=1859775393;else 60>r?(J=x&y|z&(x|y),L=2400959708):(J=x^y^z,L=3395469782);J=((p<<5|p>>>27)&4294967295)+J+H+L+t[r]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=J}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function pg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,qg(ng(d),a,c||null)].join(" "):null}
function qg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),rg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=rg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function rg(a){var b=og();b.update(a);return b.Wd().toLowerCase()}
;var sg={};function tg(a){this.h=a||{cookie:""}}
m=tg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Cc=function(){return ug(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=ug(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ug(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var vg=new tg("undefined"==typeof document?null:document);function wg(a){return!!sg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function xg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;wg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new tg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");wg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function yg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new tg(document)).get(b));return a?pg(a,c,d):null}
function zg(a,b){b=void 0===b?!1:b;var c=ng(String(C.location.href)),d=[];if(xg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new tg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?pg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&wg(b)&&((b=yg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=yg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Ag(a){M.call(this,a)}
w(Ag,M);Ag.Va=[2];function Cg(a){this.h=this.i=this.j=a}
Cg.prototype.reset=function(){this.h=this.i=this.j};
Cg.prototype.getValue=function(){return this.i};function Dg(){}
Dg.prototype.serialize=function(a){var b=[];Eg(this,a,b);return b.join("")};
function Eg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Eg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Fg(d,c),c.push(":"),Eg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fg(a,b){b.push('"',a.replace(Hg,function(c){var d=Gg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Gg[c]=d);return d}),'"')}
;function Ig(){}
Ig.prototype.h=null;Ig.prototype.getOptions=function(){var a;(a=this.h)||(a={},Jg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Kg;function Lg(){}
Ya(Lg,Ig);function Mg(a){return(a=Jg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Jg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Kg=new Lg;function Ng(a){af.call(this);this.headers=new Map;this.X=a||null;this.i=!1;this.W=this.G=null;this.m=this.ea="";this.j=this.ba=this.A=this.aa=!1;this.s=0;this.M=null;this.Da="";this.la=this.qa=!1}
Ya(Ng,af);var Og=/^https?$/i,Pg=["POST","PUT"],Qg=[];function Rg(a,b,c,d,e,f,g){var h=new Ng;Qg.push(h);b&&h.listen("complete",b);h.l.add("ready",h.Vd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
m=Ng.prototype;m.Vd=function(){this.dispose();jb(Qg,this)};
m.send=function(a,b,c,d){if(this.G)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.m="";this.aa=!1;this.i=!0;this.G=this.X?Mg(this.X):Mg(Kg);this.W=this.X?this.X.getOptions():Kg.getOptions();this.G.onreadystatechange=Wa(this.sd,this);try{this.getStatus(),this.ba=!0,this.G.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Sg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=db(Pg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.G.setRequestHeader(d,c);this.Da&&(this.G.responseType=this.Da);"withCredentials"in this.G&&this.G.withCredentials!==this.qa&&(this.G.withCredentials=this.qa);try{Tg(this),0<this.s&&(this.la=Ug(this.G),this.getStatus(),this.la?(this.G.timeout=this.s,this.G.ontimeout=Wa(this.Gd,
this)):this.M=Tf(this.Gd,this.s,this)),this.getStatus(),this.A=!0,this.G.send(a),this.A=!1}catch(g){this.getStatus(),Sg(this,g)}};
function Ug(a){return Tc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Na&&this.G&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Sg(a,b){a.i=!1;a.G&&(a.j=!0,a.G.abort(),a.j=!1);a.m=b;Vg(a);Wg(a)}
function Vg(a){a.aa||(a.aa=!0,bf(a,"complete"),bf(a,"error"))}
m.abort=function(){this.G&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.G.abort(),this.j=!1,bf(this,"complete"),bf(this,"abort"),Wg(this))};
m.K=function(){this.G&&(this.i&&(this.i=!1,this.j=!0,this.G.abort(),this.j=!1),Wg(this,!0));Ng.ya.K.call(this)};
m.sd=function(){this.h()||(this.ba||this.A||this.j?Xg(this):this.ze())};
m.ze=function(){Xg(this)};
function Xg(a){if(a.i&&"undefined"!=typeof Na)if(a.W[1]&&4==Yg(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Yg(a))Tf(a.sd,0,a);else if(bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Zg(a))bf(a,"complete"),bf(a,"success");else{try{var b=2<Yg(a)?a.G.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Vg(a)}}finally{Wg(a)}}}
function Wg(a,b){if(a.G){Tg(a);var c=a.G,d=a.W[0]?function(){}:null;
a.G=null;a.W=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Tg(a){a.G&&a.la&&(a.G.ontimeout=null);a.M&&(C.clearTimeout(a.M),a.M=null)}
m.isActive=function(){return!!this.G};
m.isComplete=function(){return 4==Yg(this)};
function Zg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=tc(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Og.test(a?a.toLowerCase():"");c=b}return c}
function Yg(a){return a.G?a.G.readyState:0}
m.getStatus=function(){try{return 2<Yg(this)?this.G.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function $g(a){M.call(this,a)}
w($g,M);function ah(a){M.call(this,a)}
w(ah,M);ah.Va=[1];function Zd(a){M.call(this,a)}
w(Zd,M);var bh=["platform","platformVersion","architecture","model","uaFullVersion"];new ah;function fe(a){M.call(this,a)}
w(fe,M);function ch(a){M.call(this,a,33)}
w(ch,M);ch.Va=[3,20,27];function dh(a){M.call(this,a,19)}
w(dh,M);dh.Va=[3,5];function eh(a){M.call(this,a,6)}
w(eh,M);eh.Va=[5];function fh(a){M.call(this,a)}
w(fh,M);var gh;gh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=ae;this.defaultValue=void 0}(175237375,{Jf:0},fh);function hh(a,b,c,d,e,f,g,h,k,l,n){af.call(this);var p=this;this.componentId="";this.j=[];this.Ib="";this.Tb=this.la=-1;this.Da=!1;this.W=this.experimentIds=null;this.A=this.M=0;this.Od=1;this.timeoutMillis=0;this.ea=!1;af.call(this);this.logSource=a;this.qb=b||function(){};
this.m=new ih(a,f);this.qc=d;this.network=n;this.bufferSize=1E3;this.Pd=Xa(ff,0,1);this.aa=e||null;this.sessionIndex=c||null;this.ba=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.qa=f||!1;!this.qa&&(65<=jc("Chromium")||45<=jc("Firefox")||12<=jc("Safari")||Mc()&&Qc());a=ee();jh(this.m,a);this.s=new Cg(1E4);this.i=new Sf(this.s.getValue());we(this,this.i);l=kh(this,l);Qe(this.i,"tick",l,!1,this);this.X=new Sf(6E5);we(this,this.X);Qe(this.X,"tick",l,!1,this);this.ba||this.X.start();
this.qa||(Qe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&p.xc()}),Qe(document,"pagehide",this.xc,!1,this))}
w(hh,af);function kh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=hh.prototype;m.K=function(){this.xc();af.prototype.K.call(this)};
function lh(a){a.aa||(a.aa=.01>a.Pd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.aa}
function mh(a,b){a.s=new Cg(1>b?1:b);a.i.setInterval(a.s.getValue())}
m.log=function(a){a=a.clone();var b=this.Od++;a=K(a,21,b);this.componentId&&K(a,26,this.componentId);if(!Ud(a,1)){b=a;var c=Date.now().toString();K(b,1,c)}null==Ud(a,15)&&K(a,15,60*(new Date).getTimezoneOffset());this.experimentIds&&(b=this.experimentIds.clone(),ce(a,Ag,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.M;this.j.push(a);bf(this,new nh(a));this.ba||this.i.enabled||this.i.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ea)oh(this.m,3),ph(this);else{var d=Date.now();if(this.Tb>d&&this.la<d)b&&b("throttled");else{oh(this.m,1);var e=qh(this.m,this.j,this.M,this.A);d={};var f=this.qb();f&&(d.Authorization=f);var g=lh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Dc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Dc(g,"pageId",this.pageId));if(f&&this.Ib===f)b&&b("stale-auth-token");else{this.j=
[];this.i.enabled&&this.i.stop();this.M=0;var h=e.serialize(),k;this.W&&this.W.isSupported(h.length)&&(k=this.W.compress(h));var l={url:g,body:h,Td:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.s.reset();c.i.setInterval(c.s.getValue());if(r){var x=null;try{var y=JSON.parse(r.replace(")]}'\n",""));x=new eh(y)}catch(H){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var z=Ud(x,1);r=r(null==z?y:z);0<r&&(c.la=Date.now(),c.Tb=c.la+r);if(r=gh.ctor?
gh.i(x,gh.ctor,gh.h,!0):gh.isRepeated?gh.i(x,gh.h,!0):gh.i(x,gh.h,gh.defaultValue,!0)){x=-1;x=void 0===x?0:x;a:if(r=Ud(r,1),null!=r){switch(typeof r){case "string":r=+r;break a;case "number":break a}r=void 0}x=null==r?x:r;-1!==x&&(c.Da||mh(c,x))}}}a&&a();c.A=0},p=function(r,x){var y=e.V,z=G(y),H=!!(z&2);
var J=H?1:2,L=!!(z&2),I=z&2;var O=Vd(y,z,3);Array.isArray(O)||(O=Nd);var X=G(O);X&1||Gd(O);I?X&2||Cd(O,18):X&16&&!(X&2)&&(I=O,Bd?I[Bd]&&(I[Bd]&=-17):void 0!==I.Ga&&(I.Ga&=-17));if(O!==Nd&&G(O)&4)3===J||L||(L=Object.isFrozen(O),1===J?L||Object.freeze(O):(J=G(O),I=J&-19,L&&(O=Array.prototype.slice.call(O),J=0,Wd(y,z,3,O)),J!==I&&Ed(O,I))),y=O;else{I=O;L=!!(z&2);var ba=!!(G(I)&2);O=I;!L&&ba&&(I=Array.prototype.slice.call(I));X=z|(ba?2:0);ba=ba||void 0;for(var da=0,pa=0;da<I.length;da++){var na=Td(I[da],
ch,X);void 0!==na&&(ba=ba||G(na.V)&2,I[pa++]=na)}pa<da&&(I.length=pa);ba=!ba;X=G(I);da=X|5;ba=ba?da|8:da&-9;X!=ba&&(I=Fd(I,ba));O!==I&&Wd(y,z,3,I);(L&&2!==J||1===J)&&Object.freeze(I);y=I}if(!(H||G(y)&8)){for(H=0;H<y.length;H++)z=y[H],J=be(z),z!==J&&(y[H]=J);Cd(y,8)}H=c.s;H.h=Math.min(3E5,2*H.h);H.i=Math.min(3E5,H.h+Math.round(.2*(Math.random()-.5)*H.h));c.i.setInterval(c.s.getValue());401===r&&f&&(c.Ib=f);void 0===x&&(x=c.isRetryable(r));x&&(c.j=y.concat(c.j),c.ba||c.i.enabled||c.i.start());b&&b("net-send-failed",
r);++c.A},t=function(){c.network?c.network.send(l,n,p):c.qc(l,n,p)};
k?k.then(function(r){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.xc=function(){rh(this.m,!0);this.flush();rh(this.m,!1)};
function ph(a){sh(a,function(b,c){b=Dc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.ea&&!d&&(a.ea=!1);return d})}
function sh(a,b){if(0!==a.j.length){var c=Hc(lh(a),"format");c=Bc(c,"auth",a.qb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=qh(a.m,e,a.M,a.A);if(!b(c,f)){++a.A;break}a.M=0;a.A=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function nh(){ye.call(this,"event-logged",void 0)}
w(nh,ye);function ih(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new dh;K(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));jh(this,new fe)}
function jh(a,b){ce(a.h,fe,1,b);var c=Ud(b,1);(null==c?c:c)||K(b,1,1);a.i||(b=th(a),Ud(b,5)||K(b,5,a.locale));a.uach&&(b=th(a),ae(b,ah,9)||ce(b,ah,9,a.uach))}
function oh(a,b){Xd(ae(a.h,fe,1))&&(a=uh(a),K(a,1,b))}
function rh(a,b){Xd(ae(a.h,fe,1))&&(a=uh(a),K(a,2,Qd(b)))}
function vh(a,b){var c=void 0===c?bh:c;b(window,c).then(function(d){a.uach=d;d=th(a);ce(d,ah,9,a.uach);return!0}).catch(function(){return!1})}
function th(a){a=ae(a.h,fe,1);var b=ae(a,Zd,11);b||(b=new Zd,ce(a,Zd,11,b));return b}
function uh(a){a=th(a);var b=ae(a,$g,10);b||(b=new $g,K(b,2,Qd(!1)),ce(a,$g,10,b));return b}
function qh(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(Xd(ae(a.h,fe,1))){var e=uh(a);K(e,3,Rd(d))}a=a.h.clone();d=Date.now().toString();a=K(a,4,d);b=de(a,ch,3,b);c&&K(b,14,c);return b}
;function wh(a,b,c){Rg(a.url,function(d){d=d.target;if(Zg(d)){try{var e=d.G?d.G.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)}
;function xh(a,b){N.call(this);this.s=a;this.la=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.ba=wh;this.i=""}
Ya(xh,N);function yh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;N.call(this);f?a=f:(a=new xh(a,"0"),a.i=b,we(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new hh(a.s,a.X?a.X:zg,a.la,a.ba,a.l,a.m,!1,a.Da,void 0,void 0,a.ea?a.ea:void 0),we(a,b),a.M&&jh(b.m,a.M),a.j&&(c=a.j,d=th(b.m),K(d,7,c)),a.aa&&(b.W=a.aa),a.i&&(b.componentId=a.i),a.A&&((c=a.A)?(b.experimentIds||(b.experimentIds=new Ag),c=c.serialize(),K(b.experimentIds,4,c)):b.experimentIds&&
K(b.experimentIds,4,void 0,!1)),a.Ca&&(e=a.Ca,b.experimentIds||(b.experimentIds=new Ag),c=b.experimentIds.V,d=G(c),Od(d),e=null==e?Nd:Dd(e),Wd(c,d,2,e)),a.W&&(c=a.W,b.Da=!0,mh(b,c)),a.qa&&vh(b.m,a.qa),a=b);this.i=a}
w(yh,N);
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new mg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new lg;g=K(g,1,f.i);for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].ub);h=g.V;l=G(h);Od(l);if(null==k)Wd(h,l,3);else{var n=G(k);if(!(n&4)){if(n&2||Object.isFrozen(k))k=Array.prototype.slice.call(k);for(var p=0;p<k.length;p++)k[p]=k[p];Ed(k,n|5)}Wd(h,l,3,k)}k=[];h=[];l=v(f.sb.keys());for(n=l.next();!n.done;n=l.next())h.push(n.value.split(","));for(l=0;l<h.length;l++){n=h[l];p=
f.l;for(var t=f.zc(n)||[],r=[],x=0;x<t.length;x++){var y=t[x],z=y&&y.cd;y=new ig;switch(p){case 3:$d(y,1,jg,Number(z));break;case 2:var H=y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof z+": "+z);$d(H,2,jg,z)}r.push(y)}p=r;for(t=0;t<p.length;t++){r=p[t];x=new kg;r=ce(x,ig,2,r);x=n;y=[];H=f;z=[];for(var J=0;J<H.h.length;J++)z.push(H.h[J].vb);H=z;for(z=0;z<H.length;z++){J=H[z];var L=x[z],I=new gg;switch(J){case 3:$d(I,
1,hg,String(L));break;case 2:$d(I,2,hg,Rd(Number(L)));break;case 1:$d(I,3,hg,Qd("true"==L))}y.push(I)}de(r,gg,1,y);k.push(r)}}de(g,kg,4,k);c.push(g);e.clear()}de(a,lg,1,c);b=this.i;a instanceof ch?b.log(a):(c=new ch,a=a.serialize(),a=K(c,8,a),b.log(a));this.i.flush()}};function zh(a){this.T=Ah();this.m=new yh(1828);this.h=new Uf(this.m);this.s=new $f(this.h);this.j=new ag(this.h);this.l=new bg(this.h);this.i=new Yf(this.h);this.Pa=dg(a)}
function Ah(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Bh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ch(a){function b(r,x){Promise.resolve().then(function(){var y;null!=(y=c.sa)&&y.s.record(Ah()-y.T,y.Pa);g.resolve({Rd:r,Se:x})})}
var c=this;this.i=!1;var d=a.program;var e=a.je;if(a.Ce){var f;this.sa=null!=(f=a.sa)?f:new zh(e)}var g=new Bh;this.j=g.promise;if(!C[e]){var h;null!=(h=this.sa)&&Zf(h.i,h.Pa,1,"");var k;null!=(k=this.sa)&&k.h.pb()}else if(!C[e].a){var l;null!=(l=this.sa)&&Zf(l.i,l.Pa,2,"");var n;null!=(n=this.sa)&&n.h.pb()}try{this.l=v((0,C[e].a)(d,b,!0)).next().value,this.Re=g.promise.then(function(){})}catch(r){var p;
null!=(p=this.sa)&&Zf(p.i,p.Pa,4,r.message);var t;null!=(t=this.sa)&&t.h.pb();throw r;}}
Ch.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Ah(),d;null!=(d=this.sa)&&d.j.h.oc("/client_streamz/bg/fsc",d.Pa);return this.j.then(function(e){var f=e.Rd;return new Promise(function(g){f(function(h){var k;null!=(k=b.sa)&&k.l.record(Ah()-c,k.Pa);g(h)},[a.dd,
a.Te])})})};
Ch.prototype.Dd=function(a){if(this.i)throw Error("Already disposed");var b=Ah(),c;null!=(c=this.sa)&&c.j.h.oc("/client_streamz/bg/fsc",c.Pa);a=this.l([a.dd,a.Te]);var d;null!=(d=this.sa)&&d.l.record(Ah()-b,d.Pa);return a};
Ch.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.h.pb();this.i=!0;this.j.then(function(b){(b=b.Se)&&b()})};
Ch.prototype.h=function(){return this.i};var Dh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Eh;try{new URL("s://g"),Eh=!0}catch(a){Eh=!1}var Fh=Eh;function Gh(a){if(a instanceof Kb)a=Lb(a);else{b:if(Fh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Hh={};function Ih(){}
function Jh(a){this.h=a}
w(Jh,Ih);Jh.prototype.toString=function(){return this.h};function Kh(a){var b="true".toString(),c=[new Jh(Lh[0].toLowerCase(),Hh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Jh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Mh(){throw Error("unknown trace type");}
;function Nh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Oh(a,b){a.src=Eb(b);Nh(a)}
;(function(){return""}).toString().indexOf("`");function Ph(a){this.re=a}
function Qh(a){return new Ph(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Rh=[Qh("data"),Qh("http"),Qh("https"),Qh("mailto"),Qh("ftp"),new Ph(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Sh(a){var b=Th;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Uh(){var a=[];Sh(function(b){a.push(b)});
return a}
var Th={af:"allow-forms",bf:"allow-modals",cf:"allow-orientation-lock",df:"allow-pointer-lock",ef:"allow-popups",ff:"allow-popups-to-escape-sandbox",gf:"allow-presentation",hf:"allow-same-origin",jf:"allow-scripts",kf:"allow-top-navigation",lf:"allow-top-navigation-by-user-activation"},Vh=cb(function(){return Uh()});
function Wh(){var a=Xh(),b={};eb(Vh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Xh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Yh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zh=(new Date).getTime();var $h="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja($h),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var ai="undefined"!==typeof TextEncoder?new TextEncoder:null,bi=ai?function(a){return ai.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ci(a){af.call(this);var b=this;this.A=this.j=0;this.Aa=null!=a?a:{ma:function(e,f){return setTimeout(e,f)},
Fa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return A(function(e){return e.yield(di(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||ei(this)}
w(ci,af);function fi(){var a=gi;ci.h||(ci.h=new ci(a));return ci.h}
ci.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Aa.Fa(this.A);delete ci.h};
ci.prototype.ta=function(){return this.i};
function ei(a){a.A=a.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(di(a),3):c.yield(di(a),3);ei(a);c.h=0})},3E4)}
function di(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Aa.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.Aa.Fa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);Ea(h);break;case 2:Ba(h),g=!1,h.v(3)}})})}
;function hi(){this.data_=[];this.h=-1}
hi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
hi.prototype.get=function(a){return!!this.data_[a]};
function ii(a){-1===a.h&&(a.h=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ji(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ji.prototype[Symbol.iterator]=function(){return this};
ji.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ki(a,b){return new ji(a,b)}
;function li(){this.blockSize=-1}
;function mi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(mi,li);mi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ni(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
mi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ni(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ni(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ni(this,e);f=0;break}}this.i=f;this.l+=b}};
mi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ni(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function oi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function pi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function qi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:oi(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function ri(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):qi(a,"inverted-hdpi")&&pi(a,Array.prototype.filter.call(a.classList?a.classList:oi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function si(){}
si.prototype.next=function(){return ti};
var ti={done:!0,value:void 0};function ui(a){return{value:a,done:!1}}
si.prototype.Ea=function(){return this};function vi(a){if(a instanceof wi||a instanceof xi||a instanceof yi)return a;if("function"==typeof a.next)return new wi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new wi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ea)return new wi(function(){return a.Ea()});
throw Error("Not an iterator or iterable.");}
function wi(a){this.i=a}
wi.prototype.Ea=function(){return new xi(this.i())};
wi.prototype[Symbol.iterator]=function(){return new yi(this.i())};
wi.prototype.h=function(){return new yi(this.i())};
function xi(a){this.i=a}
w(xi,si);xi.prototype.next=function(){return this.i.next()};
xi.prototype[Symbol.iterator]=function(){return new yi(this.i)};
xi.prototype.h=function(){return new yi(this.i)};
function yi(a){wi.call(this,function(){return a});
this.j=a}
w(yi,wi);yi.prototype.next=function(){return this.j.next()};function zi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof zi)for(c=a.Cc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=zi.prototype;m.Cc=function(){Ai(this);return this.h.concat()};
m.has=function(a){return Bi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ci;Ai(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ci(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Bi(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ai(this),!0):!1};
function Ai(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Bi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Bi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Bi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Bi(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Cc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new zi(this)};
m.keys=function(){return vi(this.Ea(!0)).h()};
m.values=function(){return vi(this.Ea(!1)).h()};
m.entries=function(){var a=this;return ki(this.keys(),function(b){return[b,a.get(b)]})};
m.Ea=function(a){Ai(this);var b=0,c=this.Xa,d=this,e=new si;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ti;var f=d.h[b++];return ui(a?f:d.i[f])};
return e};
function Bi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function P(a){N.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Ya(P,N);m=P.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Di(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Hb(b)}}
m.Hb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Ei(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Hb(c)}}return 0!=e}return!1};
function Ei(a,b,c){uf(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Hb,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.K=function(){P.ya.K.call(this);this.clear();this.l.length=0};function Fi(a){this.h=a}
Fi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Dg).serialize(b))};
Fi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Fi.prototype.remove=function(a){this.h.remove(a)};function Gi(a){this.h=a}
Ya(Gi,Fi);function Hi(a){this.data=a}
function Ii(a){return void 0===a||a instanceof Hi?a:new Hi(a)}
Gi.prototype.set=function(a,b){Gi.ya.set.call(this,a,Ii(b))};
Gi.prototype.i=function(a){a=Gi.ya.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Gi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ji(a){this.h=a}
Ya(Ji,Gi);Ji.prototype.set=function(a,b,c){if(b=Ii(b)){if(c){if(c<Date.now()){Ji.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ji.ya.set.call(this,a,b)};
Ji.prototype.i=function(a){var b=Ji.ya.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ji.prototype.remove.call(this,a);else return b}};function Ki(){}
;function Li(){}
Ya(Li,Ki);Li.prototype[Symbol.iterator]=function(){return vi(this.Ea(!0)).h()};
Li.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Mi(a){this.h=a}
Ya(Mi,Li);m=Mi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ea=function(a){var b=0,c=this.h,d=new si;d.next=function(){if(b>=c.length)return ti;var e=c.key(b++);if(a)return ui(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ui(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ni(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Ya(Ni,Mi);function Oi(a,b){this.i=a;this.h=null;var c;if(c=Tc)c=!(9<=Number(gd));if(c){Pi||(Pi=new zi);this.h=Pi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Pi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(Oi,Li);var Qi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Pi=null;function Ri(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Qi[b]})}
m=Oi.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ri(a),b);Si(this)};
m.get=function(a){a=this.h.getAttribute(Ri(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ri(a));Si(this)};
m.Ea=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new si;d.next=function(){if(b>=c.length)return ti;var e=c[b++];if(a)return ui(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ui(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Si(this)};
function Si(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ti(a,b){this.i=a;this.h=b+"::"}
Ya(Ti,Li);Ti.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ti.prototype.get=function(a){return this.i.get(this.h+a)};
Ti.prototype.remove=function(a){this.i.remove(this.h+a)};
Ti.prototype.Ea=function(a){var b=this.i[Symbol.iterator](),c=this,d=new si;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return ui(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var R={},Ui="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;R.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
R.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Vi={rb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Wi={rb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
R.Qe=function(){Ui?(R.ob=Uint8Array,R.Ia=Uint16Array,R.Md=Int32Array,R.assign(R,Vi)):(R.ob=Array,R.Ia=Array,R.Md=Array,R.assign(R,Wi))};
R.Qe();var Xi=!0;try{new Uint8Array(1)}catch(a){Xi=!1}
function Yi(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new R.ob(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Zi={};Zi=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var $i={},aj,bj=[],cj=0;256>cj;cj++){aj=cj;for(var dj=0;8>dj;dj++)aj=aj&1?3988292384^aj>>>1:aj>>>1;bj[cj]=aj}$i=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^bj[(a^b[d])&255];return a^-1};var ej={};ej={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function fj(a){for(var b=a.length;0<=--b;)a[b]=0}
var gj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],hj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ij=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],jj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],kj=Array(576);fj(kj);var lj=Array(60);fj(lj);var mj=Array(512);fj(mj);var nj=Array(256);fj(nj);var oj=Array(29);fj(oj);var pj=Array(30);fj(pj);function qj(a,b,c,d,e){this.Ed=a;this.ce=b;this.be=c;this.Xd=d;this.we=e;this.ld=a&&a.length}
var rj,sj,tj;function uj(a,b){this.ed=a;this.Ab=0;this.Wa=b}
function vj(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function wj(a,b,c){a.da>16-c?(a.ja|=b<<a.da&65535,vj(a,a.ja),a.ja=b>>16-a.da,a.da+=c-16):(a.ja|=b<<a.da&65535,a.da+=c)}
function xj(a,b,c){wj(a,c[2*b],c[2*b+1])}
function yj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function zj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=yj(d[e]++,e))}
function Aj(a){var b;for(b=0;286>b;b++)a.na[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.fa[2*b]=0;a.na[512]=1;a.Oa=a.Db=0;a.wa=a.matches=0}
function Bj(a){8<a.da?vj(a,a.ja):0<a.da&&(a.S[a.pending++]=a.ja);a.ja=0;a.da=0}
function Cj(a,b,c){Bj(a);vj(a,c);vj(a,~c);R.rb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Dj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ej(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Dj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Dj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Fj(a,b,c){var d=0;if(0!==a.wa){do{var e=a.S[a.Kb+2*d]<<8|a.S[a.Kb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)xj(a,f,b);else{var g=nj[f];xj(a,g+256+1,b);var h=gj[g];0!==h&&(f-=oj[g],wj(a,f,h));e--;g=256>e?mj[e]:mj[256+(e>>>7)];xj(a,g,c);h=hj[g];0!==h&&(e-=pj[g],wj(a,e,h))}}while(d<a.wa)}xj(a,256,b)}
function Gj(a,b){var c=b.ed,d=b.Wa.Ed,e=b.Wa.ld,f=b.Wa.Xd,g,h=-1;a.Ma=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.U[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.Db-=d[2*k+1])}b.Ab=h;for(g=a.Ma>>1;1<=g;g--)Ej(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ma--],Ej(a,c,1),d=a.U[1],a.U[--a.xb]=g,a.U[--a.xb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,Ej(a,c,1);while(2<=a.Ma);a.U[--a.xb]=
a.U[1];g=b.ed;k=b.Ab;d=b.Wa.Ed;e=b.Wa.ld;f=b.Wa.ce;var l=b.Wa.be,n=b.Wa.we,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.U[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var r=a.U[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Oa+=y*(p+x);e&&(a.Db+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.U[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}zj(c,h,a.Ja)}
function Hj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.fa[2*l]+=g:0!==l?(l!==e&&a.fa[2*l]++,a.fa[32]++):10>=g?a.fa[34]++:a.fa[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Ij(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do xj(a,l,a.fa);while(0!==--g)}else 0!==l?(l!==e&&(xj(a,l,a.fa),g--),xj(a,16,a.fa),wj(a,g-3,2)):10>=g?(xj(a,17,a.fa),wj(a,g-3,3)):(xj(a,18,a.fa),wj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Jj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.na[2*c])return 0;if(0!==a.na[18]||0!==a.na[20]||0!==a.na[26])return 1;for(c=32;256>c;c++)if(0!==a.na[2*c])return 1;return 0}
var Kj=!1;function Lj(a,b,c){a.S[a.Kb+2*a.wa]=b>>>8&255;a.S[a.Kb+2*a.wa+1]=b&255;a.S[a.Gc+a.wa]=c&255;a.wa++;0===b?a.na[2*c]++:(a.matches++,b--,a.na[2*(nj[c]+256+1)]++,a.eb[2*(256>b?mj[b]:mj[256+(b>>>7)])]++);return a.wa===a.Mb-1}
;function Mj(a,b){a.msg=ej[b];return b}
function Nj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Oj(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(R.rb(a.output,b.S,b.Nb,c,a.Bb),a.Bb+=c,b.Nb+=c,a.Rc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Nb=0))}
function Pj(a,b){var c=0<=a.ra?a.ra:-1,d=a.o-a.ra,e=0;if(0<a.level){2===a.F.wc&&(a.F.wc=Jj(a));Gj(a,a.ec);Gj(a,a.Zb);Hj(a,a.na,a.ec.Ab);Hj(a,a.eb,a.Zb.Ab);Gj(a,a.Yc);for(e=18;3<=e&&0===a.fa[2*jj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)wj(a,b?1:0,3),Cj(a,c,d);else if(4===a.strategy||g===f)wj(a,2+(b?1:0),3),Fj(a,kj,lj);else{wj(a,4+(b?1:0),3);c=a.ec.Ab+1;d=a.Zb.Ab+1;e+=1;wj(a,c-257,5);wj(a,d-1,5);wj(a,e-4,4);for(f=0;f<e;f++)wj(a,a.fa[2*
jj[f]+1],3);Ij(a,a.na,c-1);Ij(a,a.eb,d-1);Fj(a,a.na,a.eb)}Aj(a);b&&Bj(a);a.ra=a.o;Oj(a.F)}
function S(a,b){a.S[a.pending++]=b}
function Qj(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function Rj(a,b){var c=a.pd,d=a.o,e=a.va,f=a.rd,g=a.o>a.ha-262?a.o-(a.ha-262):0,h=a.window,k=a.Ya,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.va>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.zb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Sj(a){var b=a.ha,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){R.rb(a.window,a.window,b,b,0);a.zb-=b;a.o-=b;a.ra-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.ia)break;e=a.F;c=a.window;f=a.o+a.u;var g=e.ia;g>d&&(g=d);0===g?c=0:(e.ia-=g,R.rb(c,e.input,e.hb,g,f),1===e.state.wrap?e.D=Zi(e.D,c,g,f):2===e.state.wrap&&(e.D=$i(e.D,c,g,f)),e.hb+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.oa)for(d=a.o-a.oa,a.H=a.window[d],
a.H=(a.H<<a.La^a.window[d+1])&a.Ka;a.oa&&!(a.H=(a.H<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Ya]=a.head[a.H],a.head[a.H]=d,d++,a.oa--,3>a.u+a.oa););}while(262>a.u&&0!==a.F.ia)}
function Tj(a,b){for(var c;;){if(262>a.u){Sj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.ha-262&&(a.J=Rj(a,c));if(3<=a.J)if(c=Lj(a,a.o-a.zb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.H=a.window[a.o],a.H=(a.H<<a.La^a.window[a.o+1])&a.Ka;else c=Lj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Pj(a,!1),0===a.F.I))return 1}a.oa=2>a.o?a.o:2;return 4===b?(Pj(a,!0),0===a.F.I?3:4):a.wa&&(Pj(a,!1),0===a.F.I)?1:2}
function Uj(a,b){for(var c,d;;){if(262>a.u){Sj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);a.va=a.J;a.ud=a.zb;a.J=2;0!==c&&a.va<a.Hc&&a.o-c<=a.ha-262&&(a.J=Rj(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.zb)&&(a.J=2));if(3<=a.va&&a.J<=a.va){d=a.o+a.u-3;c=Lj(a,a.o-1-a.ud,a.va-3);a.u-=a.va-1;a.va-=2;do++a.o<=d&&(a.H=(a.H<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.va);a.fb=0;a.J=2;a.o++;if(c&&(Pj(a,!1),0===a.F.I))return 1}else if(a.fb){if((c=Lj(a,0,a.window[a.o-1]))&&Pj(a,!1),a.o++,a.u--,0===a.F.I)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(Lj(a,0,a.window[a.o-1]),a.fb=0);a.oa=2>a.o?a.o:2;return 4===b?(Pj(a,!0),0===a.F.I?3:4):a.wa&&(Pj(a,!1),0===a.F.I)?1:2}
function Vj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Sj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Lj(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Lj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Pj(a,!1),0===a.F.I))return 1}a.oa=0;return 4===b?(Pj(a,!0),0===a.F.I?3:4):
a.wa&&(Pj(a,!1),0===a.F.I)?1:2}
function Wj(a,b){for(var c;;){if(0===a.u&&(Sj(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Lj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Pj(a,!1),0===a.F.I))return 1}a.oa=0;return 4===b?(Pj(a,!0),0===a.F.I?3:4):a.wa&&(Pj(a,!1),0===a.F.I)?1:2}
function Xj(a,b,c,d,e){this.ke=a;this.ue=b;this.ye=c;this.te=d;this.ee=e}
var Yj;Yj=[new Xj(0,0,0,0,function(a,b){var c=65535;for(c>a.xa-5&&(c=a.xa-5);;){if(1>=a.u){Sj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ra+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Pj(a,!1),0===a.F.I)return 1;if(a.o-a.ra>=a.ha-262&&(Pj(a,!1),0===a.F.I))return 1}a.oa=0;if(4===b)return Pj(a,!0),0===a.F.I?3:4;a.o>a.ra&&Pj(a,!1);return 1}),
new Xj(4,4,8,4,Tj),new Xj(4,5,16,8,Tj),new Xj(4,6,32,32,Tj),new Xj(4,4,16,16,Uj),new Xj(8,16,32,32,Uj),new Xj(8,16,128,128,Uj),new Xj(8,32,128,256,Uj),new Xj(32,128,258,1024,Uj),new Xj(32,258,258,4096,Uj)];
function Zj(){this.F=null;this.status=0;this.S=null;this.wrap=this.pending=this.Nb=this.xa=0;this.B=null;this.za=0;this.method=8;this.yb=-1;this.Ya=this.Tc=this.ha=0;this.window=null;this.Kd=0;this.head=this.Ha=null;this.rd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.va=this.u=this.zb=this.o=this.fb=this.ud=this.J=this.ra=this.La=this.Ka=this.Dc=this.dc=this.H=0;this.na=new R.Ia(1146);this.eb=new R.Ia(122);this.fa=new R.Ia(78);Nj(this.na);Nj(this.eb);Nj(this.fa);this.Yc=this.Zb=this.ec=
null;this.Ja=new R.Ia(16);this.U=new R.Ia(573);Nj(this.U);this.xb=this.Ma=0;this.depth=new R.Ia(573);Nj(this.depth);this.da=this.ja=this.oa=this.matches=this.Db=this.Oa=this.Kb=this.wa=this.Mb=this.Gc=0}
function ak(a,b){if(!a||!a.state||5<b||0>b)return a?Mj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ia||666===c.status&&4!==b)return Mj(a,0===a.I?-5:-2);c.F=a;var d=c.yb;c.yb=b;if(42===c.status)if(2===c.wrap)a.D=0,S(c,31),S(c,139),S(c,8),c.B?(S(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),S(c,c.B.time&255),S(c,c.B.time>>8&255),S(c,c.B.time>>16&255),S(c,c.B.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&
(S(c,c.B.Sa.length&255),S(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.D=$i(a.D,c.S,c.pending,0)),c.za=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Qj(c,e+(31-e%31));0!==c.o&&(Qj(c,a.D>>>16),Qj(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.za<(c.B.Sa.length&65535)&&(c.pending!==c.xa||(c.B.Ta&&
c.pending>e&&(a.D=$i(a.D,c.S,c.pending-e,e)),Oj(a),e=c.pending,c.pending!==c.xa));)S(c,c.B.Sa[c.za]&255),c.za++;c.B.Ta&&c.pending>e&&(a.D=$i(a.D,c.S,c.pending-e,e));c.za===c.B.Sa.length&&(c.za=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ta&&c.pending>e&&(a.D=$i(a.D,c.S,c.pending-e,e)),Oj(a),e=c.pending,c.pending===c.xa)){var f=1;break}f=c.za<c.B.name.length?c.B.name.charCodeAt(c.za++)&255:0;S(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.D=$i(a.D,
c.S,c.pending-e,e));0===f&&(c.za=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ta&&c.pending>e&&(a.D=$i(a.D,c.S,c.pending-e,e)),Oj(a),e=c.pending,c.pending===c.xa)){f=1;break}f=c.za<c.B.comment.length?c.B.comment.charCodeAt(c.za++)&255:0;S(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.D=$i(a.D,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.xa&&Oj(a),c.pending+2<=c.xa&&(S(c,a.D&255),S(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(Oj(a),0===a.I)return c.yb=-1,0}else if(0===a.ia&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Mj(a,-5);if(666===c.status&&0!==a.ia)return Mj(a,-5);if(0!==a.ia||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Wj(c,b):3===c.strategy?Vj(c,b):Yj[c.level].ee(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.yb=-1),0;if(2===d&&(1===b?(wj(c,2,3),xj(c,256,kj),16===c.da?(vj(c,c.ja),c.ja=0,c.da=0):8<=c.da&&(c.S[c.pending++]=
c.ja&255,c.ja>>=8,c.da-=8)):5!==b&&(wj(c,0,3),Cj(c,0,0),3===b&&(Nj(c.head),0===c.u&&(c.o=0,c.ra=0,c.oa=0))),Oj(a),0===a.I))return c.yb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.D&255),S(c,a.D>>8&255),S(c,a.D>>16&255),S(c,a.D>>24&255),S(c,a.lb&255),S(c,a.lb>>8&255),S(c,a.lb>>16&255),S(c,a.lb>>24&255)):(Qj(c,a.D>>>16),Qj(c,a.D&65535));Oj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var bk={};bk=function(){this.input=null;this.lb=this.ia=this.hb=0;this.output=null;this.Rc=this.I=this.Bb=0;this.msg="";this.state=null;this.wc=2;this.D=0};var ck=Object.prototype.toString;
function dk(a){if(!(this instanceof dk))return new dk(a);a=this.options=R.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new bk;this.F.I=0;var b=this.F;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Mj(b,-2);else{8===e&&(e=9);var k=new Zj;b.state=k;k.F=b;k.wrap=h;k.B=null;k.Tc=e;k.ha=1<<k.Tc;k.Ya=k.ha-1;k.Dc=f+7;k.dc=1<<k.Dc;k.Ka=k.dc-1;k.La=~~((k.Dc+3-1)/3);k.window=new R.ob(2*k.ha);k.head=new R.Ia(k.dc);k.Ha=new R.Ia(k.ha);k.Mb=1<<f+6;k.xa=4*k.Mb;k.S=new R.ob(k.xa);k.Kb=1*k.Mb;k.Gc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Rc=0;b.wc=2;c=b.state;c.pending=0;c.Nb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.yb=0;if(!Kj){d=Array(16);for(f=g=0;28>f;f++)for(oj[f]=g,e=0;e<1<<gj[f];e++)nj[g++]=f;nj[g-1]=f;for(f=g=0;16>f;f++)for(pj[f]=g,e=0;e<1<<hj[f];e++)mj[g++]=f;for(g>>=7;30>f;f++)for(pj[f]=g<<7,e=0;e<1<<hj[f]-7;e++)mj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)kj[2*e+1]=8,e++,d[8]++;for(;255>=e;)kj[2*e+1]=9,e++,d[9]++;for(;279>=e;)kj[2*e+1]=7,e++,d[7]++;for(;287>=e;)kj[2*e+1]=8,e++,d[8]++;zj(kj,287,d);for(e=0;30>e;e++)lj[2*e+1]=5,lj[2*e]=yj(e,5);rj=new qj(kj,gj,257,286,15);sj=new qj(lj,
hj,0,30,15);tj=new qj([],ij,0,19,7);Kj=!0}c.ec=new uj(c.na,rj);c.Zb=new uj(c.eb,sj);c.Yc=new uj(c.fa,tj);c.ja=0;c.da=0;Aj(c);c=0}else c=Mj(b,-2);0===c&&(b=b.state,b.Kd=2*b.ha,Nj(b.head),b.Hc=Yj[b.level].ue,b.kd=Yj[b.level].ke,b.rd=Yj[b.level].ye,b.pd=Yj[b.level].te,b.o=0,b.ra=0,b.u=0,b.oa=0,b.J=b.va=2,b.fb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(ej[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Yi(a.dictionary):
"[object ArrayBuffer]"===ck.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.F;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.D=Zi(a.D,f,g,0));l.wrap=0;g>=l.ha&&(0===b&&(Nj(l.head),l.o=0,l.ra=0,l.oa=0),c=new R.ob(l.ha),R.rb(c,f,g-l.ha,l.ha,0),f=c,g=l.ha);c=a.ia;d=a.hb;e=a.input;a.ia=g;a.hb=0;a.input=f;for(Sj(l);3<=l.u;){f=l.o;g=l.u-2;do l.H=(l.H<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Ya]=l.head[l.H],l.head[l.H]=f,f++;while(--g);
l.o=f;l.u=2;Sj(l)}l.o+=l.u;l.ra=l.o;l.oa=l.u;l.u=0;l.J=l.va=2;l.fb=0;a.hb=d;a.input=e;a.ia=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ej[b]);this.Bf=!0}}
dk.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Yi(a):"[object ArrayBuffer]"===ck.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ia=c.input.length;do{0===c.I&&(c.output=new R.ob(d),c.Bb=0,c.I=d);a=ak(c,e);if(1!==a&&0!==a)return ek(this,a),this.ended=!0,!1;if(0===c.I||0===c.ia&&(4===e||2===e))if("string"===this.options.to){var f=R.Qc(c.output,c.Bb);b=f;f=f.length;if(65537>f&&(b.subarray&&Xi||!b.subarray))b=
String.fromCharCode.apply(null,R.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=R.Qc(c.output,c.Bb),this.chunks.push(b)}while((0<c.ia||0===c.I)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Mj(c,-2):(c.state=null,a=113===d?Mj(c,-3):0)):a=-2,ek(this,a),this.ended=!0,0===a;2===e&&(ek(this,0),c.I=0);return!0};
function ek(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):R.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
function fk(a,b){b=b||{};b.gzip=!0;b=new dk(b);b.push(a,!0);if(b.err)throw b.msg||ej[b.err];return b.result}
;function gk(a){return Gb(null===a?"null":void 0===a?"undefined":a)}
;function hk(a){this.name=a}
;var ik=new hk("rawColdConfigGroup");var jk=new hk("rawHotConfigGroup");var kk=new hk("commandExecutorCommand");function lk(a){M.call(this,a)}
w(lk,M);var mk=new hk("continuationCommand");var nk=new hk("signalAction");var ok=new hk("webCommandMetadata");var pk=new hk("signalServiceEndpoint");var qk={rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",nf:"EMBEDDED_PLAYER_MODE_DEFAULT",qf:"EMBEDDED_PLAYER_MODE_PFP",pf:"EMBEDDED_PLAYER_MODE_PFL"};var rk=new hk("feedbackEndpoint");function sk(a){M.call(this,a)}
w(sk,M);var tk=new hk("webPlayerShareEntityServiceEndpoint");var uk=new hk("playlistEditEndpoint");var vk=new hk("modifyChannelNotificationPreferenceEndpoint");var wk=new hk("unsubscribeEndpoint");var xk=new hk("subscribeEndpoint");function yk(){var a=zk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Ak(a){D("yt.ads.biscotti.lastId_",a)}
;function Bk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ck=C.window,Dk,Ek,Fk=(null==Ck?void 0:null==(Dk=Ck.yt)?void 0:Dk.config_)||(null==Ck?void 0:null==(Ek=Ck.ytcfg)?void 0:Ek.data_)||{};D("yt.config_",Fk);function Gk(){Bk(Fk,arguments)}
function T(a,b){return a in Fk?Fk[a]:b}
;var Hk=[];function Ik(a){Hk.forEach(function(b){return b(a)})}
function Jk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kk(b)}}:a}
function Kk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Gk("ERRORS",b));Ik(a)}
function Lk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Gk("ERRORS",f))}
;var Mk=/^[\w.]*$/,Nk={q:!0,search_query:!0};function Ok(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Pk(f[0]||""),h=Pk(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Ok);k.args=[{key:l,value:f[1],query:a,method:Qk==n?"unchanged":n}];Nk.hasOwnProperty(l)||Lk(k)}}return c}
var Qk=String(Ok);function Rk(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Sk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ok(a,"&")}
function Tk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Sk(1<a.length?a[1]:a[0])):{}}
function Uk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Sk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Cc(a,e)+d}
function Vk(a){if(!b)var b=window.location.href;var c=tc(1,a),d=uc(a);c&&d?(a=a.match(rc),b=b.match(rc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?uc(b)==d&&(Number(tc(4,b))||null)==(Number(tc(4,a))||null):!0;return a}
function Pk(a){return a&&a.match(Mk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Wk(a){var b=Xk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Dh:g;try{var h=g.history.length}catch(Da){h=0}e.u_his=h;var k;e.u_h=null==(k=Dh.screen)?void 0:k.height;var l;e.u_w=null==(l=Dh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Dh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Dh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Dh.screen)?void 0:t.colorDepth}catch(Da){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(Da){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Da){}try{var H=h.innerWidth;var J=h.innerHeight}catch(Da){}try{var L=h.screenLeft;var I=h.screenTop}catch(Da){}try{H=h.innerWidth,J=h.innerHeight}catch(Da){}try{var O=h.screen.availWidth;var X=h.screen.availTop}catch(Da){}r=[L,I,r,x,O,X,y,z,H,J];try{var ba=(b.h.top||window).document,da="CSS1Compat"==
ba.compatMode?ba.documentElement:ba.body;var pa=(new hf(da.clientWidth,da.clientHeight)).round()}catch(Da){pa=new hf(-12245933,-12245933)}ba=pa;pa={};var na=void 0===na?C:na;da=new hi;"SVGElement"in na&&"createElementNS"in na.document&&da.set(0);x=Wh();x["allow-top-navigation-by-user-activation"]&&da.set(1);x["allow-popups-to-escape-sandbox"]&&da.set(2);na.crypto&&na.crypto.subtle&&da.set(3);"TextDecoder"in na&&"TextEncoder"in na&&da.set(4);na=ii(da);pa.bc=na;pa.bih=ba.height;pa.biw=ba.width;pa.brdim=
r.join();b=b.i;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!Dh.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Xk=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Rk(Wk(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function U(a){a=Yk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Zk(a,b){a=Yk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Yk(a){var b=T("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:T("EXPERIMENT_FLAGS",{})[a]}
function $k(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var al="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function bl(){if(!al)return null;var a=al();return"open"in a?a:null}
function cl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function dl(a,b){"function"===typeof a&&(a=Jk(a));return window.setTimeout(a,b)}
;var el={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},fl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja($h)),gl=!1;
function hl(a,b){b=void 0===b?{}:b;var c=Vk(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in el){var f=T(el[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&uc(a)||d&&void 0!==b[e]||(!U("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!uc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!uc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&uc(a)||(b["X-YouTube-Ad-Signals"]=Rk(Wk()));return b}
function il(a){var b=window.location.search,c=uc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Vk(a)&&(c=document.location.hostname);var d=sc(tc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Sk(b),f={};eb(fl,function(g){e[g]&&(f[g]=e[g])});
return Uk(a,f||{},!1)}
function jl(a,b){var c=b.format||"JSON";a=kl(a,b);var d=ll(a,b),e=!1,f=ml(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=cl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=nl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=dl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function kl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Uk(a,b||{},!0);return a}
function ll(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||uc(a)&&!b.withCredentials&&uc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Sk(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Ac(e));f=e||f&&!ob(f);!gl&&f&&"POST"!=b.method&&(gl=!0,Kk(Error("AJAX request with postData should use POST")));return e}
function nl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Lk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ol(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=pl(g)})}d&&ql(e);
return e}
function ql(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new kc(d)}else ql(a[b])}}
function ol(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function pl(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function rl(a,b){b.method="POST";b.postParams||(b.postParams={});return jl(a,b)}
function ml(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Jk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=bl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=il(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=hl(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var sl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ul={Ua:[],Ra:[{callback:tl,weight:500}]};function tl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function vl(){this.Ra=[];this.Ua=[]}
var wl;function xl(){if(!wl){var a=wl=new vl;a.Ua.length=0;a.Ra.length=0;ul.Ua&&a.Ua.push.apply(a.Ua,ul.Ua);ul.Ra&&a.Ra.push.apply(a.Ra,ul.Ra)}return wl}
;var yl=new P;function zl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Al(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Al(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Al(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Al(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Bl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Cl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=zl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Cl(e+".ve",f,g,h):0;d+=g;d+=Cl(e,a[e],b,c);if(500<d)break}}else c[b]=Dl(a),d+=c[b].length;else c[b]=Dl(a),d+=c[b].length;return d}
function Cl(a,b,c,d){c+="."+a;a=Dl(b);d[c]=a;return c.length+a.length}
function Dl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function El(){this.Ue=!0}
function Fl(){El.h||(El.h=new El);return El.h}
function Gl(a,b){a={};var c=zg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Fk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Fk&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID")));return a}
;var Hl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Il(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Jl(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Kl(a,b,c,d,e){vg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ll(a){return vg.get(""+a,void 0)}
function Ml(a,b,c){vg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Nl(){if(!vg.isEnabled())return!1;if(!vg.isEmpty())return!0;vg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==vg.get("TESTCOOKIESENABLED"))return!1;vg.remove("TESTCOOKIESENABLED");return!0}
;var Ol=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Ol);function Pl(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ll(this.h);a&&this.parse(a)}
var Ql;function Rl(){Ql||(Ql=new Pl);return Ql}
m=Pl.prototype;m.get=function(a,b){Sl(a);Tl(a);a=void 0!==Ol[a]?Ol[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Sl(a);Tl(a);if(null==b)throw Error("ExpectedNotNull");Ol[a]=b.toString()};
function Ul(a){return!!((Vl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Sl(a);Tl(a);delete Ol[a]};
m.clear=function(){for(var a in Ol)delete Ol[a]};
function Tl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Vl(a){a=void 0!==Ol[a]?Ol[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ol[d]=c.toString())}};var Wl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Xl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Yl(){var a=C.navigator;return a?a.connection:void 0}
function Zl(){var a=Yl();if(a){var b=Wl[a.type||"unknown"]||"CONN_UNKNOWN";a=Wl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function $l(){var a=Yl();if(null!=a&&a.effectiveType)return Xl.hasOwnProperty(a.effectiveType)?Xl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function am(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
w(am,Error);function bm(){try{return cm(),!0}catch(a){return!1}}
function cm(a){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new am("Datasync ID not set",void 0===a?"unknown":a);}
;function dm(){}
function em(a,b){return fm(a,0,b)}
dm.prototype.ma=function(a,b){return fm(a,1,b)};
function gm(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function hm(){dm.apply(this,arguments)}
w(hm,dm);function im(){hm.h||(hm.h=new hm);return hm.h}
function fm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):dl(a,c||0)}
hm.prototype.Fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
hm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
hm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var gi=im();function jm(a){var b=new Ni;(b=b.isAvailable()?a?new Ti(b,a):b:null)||(a=new Oi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ji(a):null;this.i=document.domain||window.location.hostname}
jm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Dg).serialize(b))}catch(f){return}else e=escape(b);Kl(a,e,c,this.i)};
jm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ll(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jm.prototype.remove=function(a){this.h&&this.h.remove(a);Ml(a,"/",this.i)};var km=function(){var a;return function(){a||(a=new jm("ytidb"));return a}}();
function lm(){var a;return null==(a=km())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mm=[],nm,om=!1;function pm(){var a={};for(nm=new qm(void 0===a.handleError?rm:a.handleError,void 0===a.logEvent?sm:a.logEvent);0<mm.length;)switch(a=mm.shift(),a.type){case "ERROR":nm.handleError(a.payload);break;case "EVENT":nm.logEvent(a.eventType,a.payload)}}
function tm(a){om||(nm?nm.handleError(a):(mm.push({type:"ERROR",payload:a}),10<mm.length&&mm.shift()))}
function um(a,b){om||(nm?nm.logEvent(a,b):(mm.push({type:"EVENT",eventType:a,payload:b}),10<mm.length&&mm.shift()))}
;function wm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function xm(a){return a.substr(0,a.indexOf(":"))||a}
;var ym=hd||id;function zm(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Am={},Bm=(Am.AUTH_INVALID="No user identifier specified.",Am.EXPLICIT_ABORT="Transaction was explicitly aborted.",Am.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Am.MISSING_INDEX="Index not created.",Am.MISSING_OBJECT_STORES="Object stores not created.",Am.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Am.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Am.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Am.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Am.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Am.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Am.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Am),Cm={},Dm=(Cm.AUTH_INVALID="ERROR",Cm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Cm.EXPLICIT_ABORT="IGNORED",Cm.IDB_NOT_SUPPORTED="ERROR",Cm.MISSING_INDEX=
"WARNING",Cm.MISSING_OBJECT_STORES="ERROR",Cm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Cm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Cm.QUOTA_EXCEEDED="WARNING",Cm.QUOTA_MAYBE_EXCEEDED="WARNING",Cm.UNKNOWN_ABORT="WARNING",Cm.INCOMPATIBLE_DB_VERSION="WARNING",Cm),Em={},Fm=(Em.AUTH_INVALID=!1,Em.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Em.EXPLICIT_ABORT=!1,Em.IDB_NOT_SUPPORTED=!1,Em.MISSING_INDEX=!1,Em.MISSING_OBJECT_STORES=!1,Em.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Em.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Em.QUOTA_EXCEEDED=!1,Em.QUOTA_MAYBE_EXCEEDED=!0,Em.UNKNOWN_ABORT=!0,Em.INCOMPATIBLE_DB_VERSION=!1,Em);function Gm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bm[a]:c;d=void 0===d?Dm[a]:d;e=void 0===e?Fm[a]:e;am.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Gm.prototype)}
w(Gm,am);function Hm(a,b){Gm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Hm.prototype)}
w(Hm,Gm);function Im(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Im.prototype)}
w(Im,Error);var Jm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Km(a,b,c,d){b=xm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Gm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Gm("QUOTA_EXCEEDED",a);if(jd&&"UnknownError"===e.name)return new Gm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Im)return new Gm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Jm.some(function(f){return e.message.includes(f)}))return new Gm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Gm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Lm(a,b,c){var d=lm();return new Gm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Mm(a){if(!a)throw Error();throw a;}
function Nm(a){return a}
function Om(a){this.h=a}
function Pm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Pm.all=function(a){return new Pm(new Om(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={mb:0};f.mb<a.length;f={mb:f.mb},++f.mb)Pm.resolve(a[f.mb]).then(function(g){return function(h){d[g.mb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Pm.resolve=function(a){return new Pm(new Om(function(b,c){a instanceof Pm?a.then(b,c):b(a)}))};
Pm.reject=function(a){return new Pm(new Om(function(b,c){c(a)}))};
Pm.prototype.then=function(a,b){var c=this,d=null!=a?a:Nm,e=null!=b?b:Mm;return new Pm(new Om(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Qm(c,c,d,f,g)}),c.i.push(function(){Rm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qm(c,c,d,f,g):"REJECTED"===c.state.status&&Rm(c,c,e,f,g)}))};
Pm.prototype.catch=function(a){return this.then(void 0,a)};
function Qm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Pm?Sm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Um(a){return new Promise(function(b,c){Tm(a,b,c)})}
function Vm(a){return new Pm(new Om(function(b,c){Tm(a,b,c)}))}
;function Wm(a,b){return new Pm(new Om(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Xm=window,V=Xm.ytcsi&&Xm.ytcsi.now?Xm.ytcsi.now:Xm.performance&&Xm.performance.timing&&Xm.performance.now&&Xm.performance.timing.navigationStart?function(){return Xm.performance.timing.navigationStart+Xm.performance.now()}:function(){return(new Date).getTime()};function Ym(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=Ym.prototype;m.add=function(a,b,c){return Zm(this,[a],{mode:"readwrite",ga:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Zm(this,[a],{mode:"readwrite",ga:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Zm(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).count(b)})};
function $m(a,b,c){a=a.h.createObjectStore(b,c);return new an(a)}
m.delete=function(a,b){return Zm(this,[a],{mode:"readwrite",ga:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Zm(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).get(b)})};
function bn(a,b,c){return Zm(a,[b],{mode:"readwrite",ga:!0},function(d){d=d.objectStore(b);return Vm(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Zm(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ga:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ga?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(V());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var J=new cn(l);J=dn(J,d);return H.call(z,J,7);case 7:return n=z.i,p=Math.round(V()),en(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(V());x=Km(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof Gm&&!x.h)||g>=f)en(a,k,r,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function en(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Gm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&um("QUOTA_EXCEEDED",{dbName:xm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Gm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),um("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),fn(a,!1,d,f,b,g.tag),tm(e)):fn(a,!0,d,f,b,g.tag)}
function fn(a,b,c,d,e,f){um("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function an(a){this.h=a}
m=an.prototype;m.add=function(a,b){return Vm(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Vm(this.h.clear()).then(function(){})};
function gn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Vm(this.h.count(a))};
function hn(a,b){return jn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?hn(this,a):Vm(this.h.delete(a))};
m.get=function(a){return Vm(this.h.get(a))};
m.index=function(a){try{return new kn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Im(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function jn(a,b,c){a=a.h.openCursor(b.query,b.direction);return ln(a).then(function(d){return Wm(d,c)})}
function cn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Gm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function dn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
cn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Gm("EXPLICIT_ABORT");};
cn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new an(a),this.i.set(a,b));return b};
function kn(a){this.h=a}
m=kn.prototype;m.count=function(a){return Vm(this.h.count(a))};
m.delete=function(a){return mn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Vm(this.h.get(a))};
m.getKey=function(a){return Vm(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function mn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ln(a).then(function(d){return Wm(d,c)})}
function nn(a,b){this.request=a;this.cursor=b}
function ln(a){return Vm(a).then(function(b){return b?new nn(a,b):null})}
m=nn.prototype;m.advance=function(a){this.cursor.advance(a);return ln(this.request)};
m.continue=function(a){this.cursor.continue(a);return ln(this.request)};
m.delete=function(){return Vm(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Vm(this.cursor.update(a))};function on(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Ym(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.Ve,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&um("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:xm(a)});var x=f(),y=new cn(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){um("IDB_UNEXPECTEDLY_CLOSED",{dbName:xm(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function pn(a,b,c){c=void 0===c?{}:c;return on(a,b,c)}
function qn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Um(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Km(f,a,"",-1);})}
;function rn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
rn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return pn(a,b,c)};
rn.prototype.delete=function(a){a=void 0===a?{}:a;return qn(this.name,a)};
function sn(a,b){return new Gm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function tn(a,b){if(!b)throw Lm("openWithToken",xm(a.name));return a.open()}
rn.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],J=v(Object.keys(z.Cb)),L=J.next();!L.done;L=J.next()){L=L.value;var I=z.Cb[L],O=void 0===I.De?Number.MAX_VALUE:I.De;!(h.h.version>=I.Jb)||h.h.version>=O||h.h.objectStoreNames.contains(L)||H.push(L)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Cb);n=h.objectStoreNames();
if(c.m<Zk("ytidb_reopen_db_retries",0))return c.m++,h.close(),tm(new Gm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<Zk("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return tm(new Gm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Hm(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,sn(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Km(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw sn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ve:b,upgrade:this.options.upgrade};return this.h=d=a()};var un=new rn("YtIdbMeta",{Cb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&$m(a,"databases",{keyPath:"actualName"})}});
function vn(a,b){var c;return A(function(d){if(1==d.h)return d.yield(tn(un,b),2);c=d.i;return d.return(Zm(c,["databases"],{ga:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vm(f.h.put(a,void 0)).then(function(){})})}))})}
function wn(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(tn(un,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function xn(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(tn(un,b),2)):3!=e.h?(d=e.i,e.yield(Zm(d,["databases"],{ga:!0,mode:"readonly"},function(f){c.length=0;return jn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function yn(a){return xn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function zn(a,b,c){return xn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function An(a){var b,c;return A(function(d){if(1==d.h)return b=cm("YtIdbMeta hasAnyMeta other"),d.yield(xn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Bn,Cn=new function(){}(new function(){});
function Dn(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=lm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ym)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Uc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(vn(d,Cn),4);case 4:return e.yield(wn("yt-idb-test-do-not-use",Cn),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function En(){if(void 0!==Bn)return Bn;om=!0;return Bn=Dn().then(function(a){om=!1;var b;if(null!=(b=km())&&b.h){var c;b={hasSucceededOnce:(null==(c=lm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=km())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Fn(){return E("ytglobal.idbToken_")||void 0}
function Gn(){var a=Fn();return a?Promise.resolve(a):En().then(function(b){(b=b?Cn:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Hn=0;function In(a,b){Hn||(Hn=gi.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Gn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(zn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(qn(f.actualName),7);case 7:return h.yield(wn(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),tm(g),d=!1;case 4:gi.Fa(Hn),Hn=0,d&&In(a,b),h.h=0}})}))}
function Jn(){var a;return A(function(b){return 1==b.h?b.yield(Gn(),2):(a=b.i)?b.return(An(a)):b.return(!1)})}
new Bh;function Kn(a){if(!bm())throw a=new Gm("AUTH_INVALID",{dbName:a}),tm(a),a;var b=cm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ln(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Gn(),2);case 2:g=n.i;if(!g)throw h=Lm("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),tm(h),h;wm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Kn(a);za(n,3);return n.yield(vn(k,g),5);case 5:return n.yield(pn(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),za(n,7),n.yield(wn(k.actualName,
g),9);case 9:Aa(n,8);break;case 7:Ba(n);case 8:throw l;}})}
function Mn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!1,c)}
function Nn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!0,c)}
function On(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Gn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();wm(a);d=Kn(a);return e.yield(qn(d.actualName,b),3)}return e.yield(wn(d.actualName,c),0)})}
function Pn(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(qn(d.actualName,b),2):e.yield(wn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qn(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Gn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();wm("LogsDatabaseV2");return d.yield(yn(b),3)}c=d.i;return d.yield(Pn(c,a,b),0)})}
function Rn(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Gn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();wm(a);return d.yield(qn(a,b),3)}return d.yield(wn(a,c),0)})}
;function Sn(a,b){rn.call(this,a,b);this.options=b;wm(a)}
w(Sn,rn);function Tn(a,b){var c;return function(){c||(c=new Sn(a,b));return c}}
Sn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.mc?Nn:Mn)(a,b,Object.assign({},c))};
Sn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.mc?Rn:On)(this.name,a)};
function Un(a,b){return Tn(a,b)}
;var Vn={},Wn=Un("ytGcfConfig",{Cb:(Vn.coldConfigStore={Jb:1},Vn.hotConfigStore={Jb:1},Vn),mc:!1,upgrade:function(a,b){b(1)&&(gn($m(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),gn($m(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Xn(a){return tn(Wn(),a)}
function Yn(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Xn(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(bn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Zn(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Xn(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(bn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function $n(a){var b,c;return A(function(d){return 1==d.h?d.yield(Xn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Zm(b,["coldConfigStore"],{mode:"readwrite",ga:!0},function(e){return mn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function ao(a){var b,c;return A(function(d){return 1==d.h?d.yield(Xn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Zm(b,["hotConfigStore"],{mode:"readwrite",ga:!0},function(e){return mn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function bo(){N.apply(this,arguments);this.i=[]}
w(bo,N);bo.prototype.K=function(){this.i.length=0;N.prototype.K.call(this)};function co(){this.h=0;this.i=new bo}
function eo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("update_log_event_config")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;D("yt.gcf.config.hotHashData",a.hotHashData||null);d=Fn();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(ao(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Yn(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.i),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function fo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!U("update_log_event_config"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Fn())?c?h.v(4):h.yield($n(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Zn(c,b,g,d),0)})}
;function go(){return"INNERTUBE_API_KEY"in Fk&&"INNERTUBE_API_VERSION"in Fk}
function ho(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),le:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),If:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),ne:T("INNERTUBE_CONTEXT_HL"),me:T("INNERTUBE_CONTEXT_GL"),oe:T("INNERTUBE_HOST_OVERRIDE")||"",qe:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pe:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function io(a){var b={client:{hl:a.ne,gl:a.me,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.le}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=$k();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Jl()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Zl())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&(a=$l())&&
b&&(b.client.effectiveConnectionType=a);U("start_sending_config_hash")&&(co.h||(a=new co,co.h=a),a=co.h,f=V()-a.h,0!==a.h&&f<Zk("send_config_hash_timer")?a=void 0:(f=E("yt.gcf.config.coldConfigData"),e=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData"),f&&e&&d&&(a.h=V()),a={coldConfigData:f,hotHashData:e,coldHashData:d}),e=a)&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=
f,b.client.configInfo.hotHashData=e));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Sk(T("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=
h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function jo(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Cf:(a=Gl(Fl()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function ko(a,b){this.version=a;this.args=b}
ko.prototype.serialize=function(){return{version:this.version,args:this.args}};function lo(a,b){this.topic=a;this.h=b}
lo.prototype.toString=function(){return this.topic};var mo=E("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Hb;P.prototype.publish=P.prototype.cb;P.prototype.clear=P.prototype.clear;D("ytPubsub2Pubsub2Instance",mo);var no=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",no);var oo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",oo);var po=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",po);
D("ytPubsub2Pubsub2SkipSubKey",null);function qo(a,b){var c=ro();c&&c.publish.call(c,a.toString(),a,b)}
function so(a){var b=to,c=ro();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(no[d])try{if(f&&b instanceof lo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Kk(z)}},po[b.toString()]?E("yt.scheduler.instance")?gi.ma(g):dl(g,0):g())});
no[d]=!0;oo[b.toString()]||(oo[b.toString()]=[]);oo[b.toString()].push(d);return d}
function uo(){var a=vo,b=so(function(c){a.apply(void 0,arguments);wo(b)});
return b}
function wo(a){var b=ro();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete no[c]}))}
function ro(){return E("ytPubsub2Pubsub2Instance")}
;function xo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&qo("meta_logging_csi_event",{timerName:a,Xf:b})}
;var yo=Zk("max_body_size_to_compress",5E5),zo=Zk("min_body_size_to_compress",500),Ao=!0,Bo=0,Co=0,Do=Zk("compression_performance_threshold",250),Eo=Zk("slow_compressions_before_abandon_count",4);
function Fo(a,b,c,d){var e=V(),f={startTime:e,ticks:{},infos:{}};if(Ao)try{var g=Go(b);if(null==g||!(g>yo||g<zo)){var h=fk(bi(b)),k=V();f.ticks.gelc=k;Co++;U("disable_compression_due_to_performance_degredation")&&k-e>=Do&&(Bo++,U("abandon_compression_after_N_slow_zips")?Co===Zk("compression_disable_point")&&Bo>Eo&&(Ao=!1):Ao=!1);Ho(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Lk(l),d(a,c)}else d(a,c)}
function Io(a){var b=void 0===b?!1:b;var c=V(),d={startTime:c,ticks:{},infos:{}};if(Ao){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=Go(e);if(null!=f&&(f>yo||f<zo))return a;var g=fk(bi(e),b?{level:1}:void 0),h=V();d.ticks.gelc=h;if(b){Co++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&h-c>=Do)if(Bo++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=
Bo/Co;var k=Eo/Zk("compression_disable_point");0<Co&&0===Co%Zk("compression_disable_point")&&b>=k&&(Ao=!1)}else Ao=!1;Ho(d)}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(l){return Lk(l),a}}else return a}
function Go(a){try{return(new Blob(a.split(""))).size}catch(b){return Lk(b),null}}
function Ho(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||xo("gel_compression",a,{sampleRate:.1})}
;function Jo(a){a=Object.assign({},a);delete a.Authorization;var b=zg();if(b){var c=new mi;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=md(c.digest(),3)}return a}
;var Ko;function Lo(){Ko||(Ko=new jm("yt.innertube"));return Ko}
function Mo(a,b,c,d){if(d)return null;d=Lo().get("nextId",!0)||1;var e=Lo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Jo(c),requestTime:Math.round(V())};Lo().set("nextId",d+1,86400,!0);Lo().set("requests",e,86400,!0);return d}
function No(a){var b=Lo().get("requests",!0)||{};delete b[a];Lo().set("requests",b,86400,!0)}
function Oo(a){var b=Lo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Jo(jo(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Po(a,d.method,e,{}));delete b[c]}}Lo().set("requests",b,86400,!0)}}
;function Qo(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.ic=null!=(k=a.ic)?k:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Lb&&(this.Lb=a.Lb);a.Vb&&(this.Vb=a.Vb);this.R=a.R;this.Aa=a.Aa;this.Z=a.Z;this.Y=a.Y;this.Qa=a.Qa;this.Lc=
a.Lc;this.Kc=a.Kc;Ro(this)&&(!this.R||this.R("networkless_logging"))&&So(this)}
function So(a){Ro(a)&&!a.Lb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.Z.Ud(a.P),To(a),a.Y.ta()&&a.Pb(),a.Y.listen(a.Lc,a.Pb.bind(a)),a.Y.listen(a.Kc,a.Zc.bind(a)))}
m=Qo.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Ro(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z.set(d,this.P).then(function(e){d.id=e;c.Y.ta()&&Uo(c,d)}).catch(function(e){Uo(c,d);
Vo(c,e)})}else this.Qa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Ro(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.R&&this.R("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ta()||this.R&&this.R("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.Z.set(e,d.P).catch(function(l){Vo(d,l)}),2);
f(g,h);k.h=0})}}this.Qa(a,b,e.skipRetry)}else this.Z.set(e,this.P).catch(function(g){d.Qa(a,b,e.skipRetry);
Vo(d,g)})}else this.Qa(a,b,this.R&&this.R("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Ro(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Z.tb(d.id,c.P):e=!0;c.Y.gb&&c.R&&c.R("vss_network_hint")&&c.Y.gb(!0);f(g,h)};
this.Qa(d.url,d.options);this.Z.set(d,this.P).then(function(g){d.id=g;e&&c.Z.tb(d.id,c.P)}).catch(function(g){Vo(c,g)})}else this.Qa(a,b)};
m.Pb=function(){var a=this;if(!Ro(this))throw Lm("throttleSend");this.i||(this.i=this.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.Z.jd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?c.yield(Uo(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Fd))};
m.Zc=function(){this.Aa.Fa(this.i);this.i=0};
function Uo(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!Ro(a))throw c=Lm("immediateSend"),c;if(void 0===b.id){e.v(2);break}return e.yield(a.Z.se(b.id,a.P),3);case 3:(d=e.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(Wo(a,b,a.xd)){e.v(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return e.yield(a.Z.tb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Xo(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return e.yield(a.Z.tb(b.id,a.P),8);case 8:a.Qa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Xo(a,b){if(!Ro(a))throw Lm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Yo(f);(h=Zo(f))&&a.R&&a.R("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.R&&a.R("nwl_consider_error_code")&&g||a.R&&!a.R("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){n.v(2);break}if(!a.Y.lc){n.v(3);break}return n.yield(a.Y.lc(),3);case 3:if(a.Y.ta()){n.v(2);break}c(e,f);if(!a.R||!a.R("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.Z.Oc(b.id,a.P,!1),6);case 6:return n.return();case 2:if(a.R&&a.R("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.zd?n.yield(a.Z.Oc(b.id,a.P,!0,h?!1:void 0),12):n.yield(a.Z.tb(b.id,a.P),8);case 12:a.Aa.ma(function(){a.Y.ta()&&a.Pb()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.Z.tb(b.id,a.P),2);a.Y.gb&&a.R&&a.R("vss_network_hint")&&a.Y.gb(!0);d(e,f);h.h=0})};
return b}
function Wo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function To(a){if(!Ro(a))throw Lm("retryQueuedRequests");a.Z.jd("QUEUED",a.P).then(function(b){b&&!Wo(a,b,a.vd)?a.Aa.ma(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.Z.Oc(b.id,a.P),2);To(a);c.h=0})}):a.Y.ta()&&a.Pb()})}
function Vo(a,b){a.Ld&&!a.Y.ta()?a.Ld(b):a.handleError(b)}
function Ro(a){return!!a.P||a.Vb}
function Yo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Zo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var $o;
function ap(){if($o)return $o();var a={};$o=Un("LogsDatabaseV2",{Cb:(a.LogsRequestsStore={Jb:2},a),mc:!1,upgrade:function(b,c,d){c(2)&&$m(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),gn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return $o()}
;function bp(a){return tn(ap(),a)}
function cp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(bp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(bn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();dp(c);return g.return(f)})}
function ep(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(bp(b),2);if(3!=l.h)return d=l.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Zm(d,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(n){return mn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();dp(c);return l.return(k)})}
function fp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(bp(b),2);c=d.i;return d.return(Zm(c,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vm(f.h.put(g,void 0)).then(function(){return g})})}))})}
function gp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(bp(b),2);e=f.i;return f.return(Zm(e,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Vm(h.h.put(k,void 0)).then(function(){return k})):Pm.resolve(void 0)})}))})}
function hp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(bp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function ip(a){var b,c;return A(function(d){if(1==d.h)return d.yield(bp(a),2);b=d.i;c=V()-2592E6;return d.yield(Zm(b,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){return jn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function jp(){A(function(a){return a.yield(Qn(),0)})}
function dp(a){U("nwl_csi_killswitch")||xo("networkless_performance",a,{sampleRate:1})}
;var kp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};var lp={},mp=Un("ServiceWorkerLogsDatabase",{Cb:(lp.SWHealthLog={Jb:1},lp),mc:!0,upgrade:function(a,b){b(1)&&gn($m(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function np(a){return tn(mp(),a)}
function op(a){var b,c;A(function(d){if(1==d.h)return d.yield(np(a),2);b=d.i;c=V()-2592E6;return d.yield(Zm(b,["SWHealthLog"],{mode:"readwrite",ga:!0},function(e){return jn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function pp(a){var b;return A(function(c){if(1==c.h)return c.yield(np(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var qp={},rp=0;function sp(a){var b=new Image,c=""+rp++;qp[c]=b;b.onload=b.onerror=function(){delete qp[c]};
b.src=a}
;function tp(){this.h=new Map;this.i=!1}
function up(){if(!tp.h){var a=E("yt.networkRequestMonitor.instance")||new tp;D("yt.networkRequestMonitor.instance",a);tp.h=a}return tp.h}
tp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
tp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
tp.prototype.removeParams=function(a){return a.split("?")[0]};
tp.prototype.removeParams=tp.prototype.removeParams;tp.prototype.isEndpointCFR=tp.prototype.isEndpointCFR;tp.prototype.requestComplete=tp.prototype.requestComplete;tp.getInstance=up;var vp;function wp(){vp||(vp=new jm("yt.offline"));return vp}
function xp(a){if(U("offline_error_handling")){var b=wp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);wp().set("errors",b,2592E3,!0)}}
;function yp(){af.call(this);var a=this;this.j=!1;this.i=fi();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=wp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new am(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Kk(d)}wp().set("errors",{},2592E3,!0)}}})}
w(yp,af);function zp(){if(!yp.h){var a=E("yt.networkStatusManager.instance")||new yp;D("yt.networkStatusManager.instance",a);yp.h=a}return yp.h}
m=yp.prototype;m.ta=function(){return this.i.ta()};
m.gb=function(a){this.i.i=a};
m.he=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Yd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.lc=function(a){a=di(this.i,a);a.then(function(b){U("use_cfr_monitor")&&up().requestComplete("generate_204",b)});
return a};
yp.prototype.sendNetworkCheckRequest=yp.prototype.lc;yp.prototype.listen=yp.prototype.listen;yp.prototype.enableErrorFlushing=yp.prototype.Yd;yp.prototype.getWindowStatus=yp.prototype.he;yp.prototype.networkStatusHint=yp.prototype.gb;yp.prototype.isNetworkAvailable=yp.prototype.ta;yp.getInstance=zp;function Ap(a){a=void 0===a?{}:a;af.call(this);var b=this;this.i=this.s=0;this.j=zp();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.kc?(this.kc=a.kc,c("networkstatus-online",function(){Bp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Bp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bf(b,"publicytnetworkstatus-offline")})))}
w(Ap,af);Ap.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Ap.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Ap.prototype.lc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&up().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Bp(a,b){a.kc?a.i?(gi.Fa(a.s),a.s=gi.ma(function(){a.m!==b&&(bf(a,b),a.m=b,a.i=V())},a.kc-(V()-a.i))):(bf(a,b),a.m=b,a.i=V()):bf(a,b)}
;var Cp;function Dp(){var a=Qo.call;Cp||(Cp=new Ap({Nf:!0,Gf:!0}));a.call(Qo,this,{Z:{Ud:ip,tb:hp,jd:ep,se:fp,Oc:gp,set:cp},Y:Cp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Lk(new am(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Kk(b)},
wb:Lk,Qa:Ep,now:V,Ld:xp,Aa:im(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,ic:Zk("potential_esf_error_limit",10),R:U,Lb:!(bm()&&Fp())});this.j=new Bh;U("networkless_immediately_drop_all_requests")&&jp();Rn("LogsDatabaseV2")}
w(Dp,Qo);function Gp(){var a=E("yt.networklessRequestController.instance");a||(a=new Dp,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&Gn().then(function(b){a.P=b;So(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.P&&op(a.P);U("networkless_immediately_drop_sw_health_store")&&Hp(a)}));
return a}
Dp.prototype.writeThenSend=function(a,b){b||(b={});bm()||(this.h=!1);Qo.prototype.writeThenSend.call(this,a,b)};
Dp.prototype.sendThenWrite=function(a,b,c){b||(b={});bm()||(this.h=!1);Qo.prototype.sendThenWrite.call(this,a,b,c)};
Dp.prototype.sendAndWrite=function(a,b){b||(b={});bm()||(this.h=!1);Qo.prototype.sendAndWrite.call(this,a,b)};
Dp.prototype.awaitInitialization=function(){return this.j.promise};
function Hp(a){var b;A(function(c){if(!a.P)throw b=Lm("clearSWHealthLogsDb"),b;return c.return(pp(a.P).catch(function(d){a.handleError(d)}))})}
function Ep(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Ip(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)ml(a,void 0,"POST",e);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ml(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new ab({url:a});if(g.j&&g.i||g.l){var h=sc(tc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Fc),n=Ec(a,0,"ri",l);if(0>n)var p=null;else{var t=a.indexOf("&",n);if(0>t||t>l)t=l;p=decodeURIComponent(a.slice(n+3,-1!==t?t:0).replace(/\+/g," "))}k="1"!==p}var r=!k;break b}}catch(y){}r=!1}if(r){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(y){}x=!1}c=x?!0:!1}else c=!1;c||sp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&
(b.postBody=JSON.stringify(b.postBody)),Fo(a,b.postBody,b,jl)):Fo(a,JSON.stringify(b.postParams),b,rl):jl(a,b)}
function Ip(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){up().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){up().requestComplete(a,!0);d(e,f)}}
function Fp(){return"www.youtube-nocookie.com"!==uc(document.location.toString())}
;var Jp=!1,Kp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Jp};D("ytNetworklessLoggingInitializationOptions",Kp);function Lp(){var a;A(function(b){if(1==b.h)return b.yield(Gn(),2);a=b.i;if(!a||!bm()&&!U("nwl_init_require_datasync_id_killswitch")||!Fp())return b.v(0);Jp=!0;Kp.isNwlInitialized=Jp;return b.yield(Gp().awaitInitialization(),0)})}
;function Mp(a){var b=this;this.config_=null;a?this.config_=a:go()&&(this.config_=ho());em(function(){Oo(b)},5E3)}
Mp.prototype.isReady=function(){!this.config_&&go()&&(this.config_=ho());return!!this.config_};
function Po(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Mo(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(L,I){No(y);z(L,I)};
c.onFetchSuccess=function(L,I){No(y);H(L,I)}}try{if(x&&d.retry&&!d.qd.bypassNetworkless)g.method="POST",d.qd.writeThenSend?Gp().writeThenSend(r,g):Gp().sendAndWrite(r,g);
else if(d.compress)if(g.postBody){var J=g.postBody;"string"!==typeof J&&(J=JSON.stringify(g.postBody));Fo(r,J,g,jl)}else Fo(r,JSON.stringify(g.postParams),g,rl);else U("web_all_payloads_via_jspb")?jl(r,g):rl(r,g)}catch(L){if("InvalidAccessError"==L.name)y&&(No(y),y=0),Lk(Error("An extension is blocking network request."));else throw L;}y&&em(function(){Oo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Lk(new am("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new am("innertube xhrclient not ready",b,c,d);Kk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.oe)&&(h=f);var k=a.config_.qe||!1,l=jo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.pe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=Uk(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Kp.isNwlInitialized:Jp)?En().then(function(x){e(x)}):e(!1)}
;var Np=0,Op=Wc?"webkit":Vc?"moz":Tc?"ms":Sc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Np});var Pp={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Qp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Pp||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Rp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Qp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",nb);var Sp=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Sp);
function Tp(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Up=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Vp(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Tp(a,b,c,d);if(e)return e;e=++Sp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Qp(h);if(!lf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Qp(h);
h.currentTarget=a;return c.call(a,h)};
g=Jk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Up()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Wp(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Up()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function Xp(a){this.M=a;this.i=null;this.m=0;this.A=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.X=Vp(window,"mousemove",Wa(this.aa,this));a=Wa(this.W,this);"function"===typeof a&&(a=Jk(a));this.ba=window.setInterval(a,25)}
Ya(Xp,N);Xp.prototype.aa=function(a){void 0===a.h&&Rp(a);var b=a.h;void 0===a.i&&Rp(a);this.i=new gf(b,a.i)};
Xp.prototype.W=function(){if(this.i){var a=V();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.M();this.s=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Xp.prototype.K=function(){window.clearInterval(this.ba);Wp(this.X)};var Yp=new Set([174,173,175]),Zp={};
function $p(a){var b=void 0===a?{}:a;a=void 0===b.Ae?!1:b.Ae;b=void 0===b.Zd?!0:b.Zd;if(null==E("_lact",window)){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&aq();Vp(document,"keydown",aq);Vp(document,"keyup",aq);Vp(document,"mousedown",aq);Vp(document,"mouseup",aq);a?Vp(window,"touchmove",function(){bq("touchmove",200)},{passive:!0}):(Vp(window,"resize",function(){bq("resize",200)}),b&&Vp(window,"scroll",function(){bq("scroll",
200)}));
new Xp(function(){bq("mouse",100)});
Vp(document,"touchstart",aq,{passive:!0});Vp(document,"touchend",aq,{passive:!0})}}
function bq(a,b){Zp[a]||(Zp[a]=!0,gi.ma(function(){aq();Zp[a]=!1},b))}
function aq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Yp.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&$p(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function cq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var dq=C.ytPubsubPubsubInstance||new P,eq=C.ytPubsubPubsubSubscribedKeys||{},fq=C.ytPubsubPubsubTopicToKeys||{},gq=C.ytPubsubPubsubIsSynchronous||{};function kq(a,b){var c=lq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){eq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{gq[a]?f():dl(f,0)}catch(g){Kk(g)}},void 0);
eq[d]=!0;fq[a]||(fq[a]=[]);fq[a].push(d);return d}return 0}
function mq(a){var b=lq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete eq[c]}))}
function nq(a,b){var c=lq();c&&c.publish.apply(c,arguments)}
function oq(a){var b=lq();if(b)if(b.clear(a),a)pq(a);else for(var c in fq)pq(c)}
function lq(){return C.ytPubsubPubsubInstance}
function pq(a){fq[a]&&(a=fq[a],eb(a,function(b){eq[b]&&delete eq[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Hb;P.prototype.publish=P.prototype.cb;P.prototype.clear=P.prototype.clear;D("ytPubsubPubsubInstance",dq);D("ytPubsubPubsubTopicToKeys",fq);D("ytPubsubPubsubIsSynchronous",gq);D("ytPubsubPubsubSubscribedKeys",eq);var qq=Symbol("injectionDeps");function rq(a){this.name=a}
rq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function sq(a){this.key=a}
function tq(){this.h=new Map;this.i=new Map}
tq.prototype.resolve=function(a){return a instanceof sq?uq(this,a.key,[],!0):uq(this,a,[])};
function uq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.Ze)e=d[qq]?vq(a,d[qq],c):[],e=d.Ze.apply(d,ja(e));else if(d.Hd){e=d.Hd;var f=e[qq]?vq(a,e[qq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vf||a.i.set(b,e);return e}
function vq(a,b,c){return b?b.map(function(d){return d instanceof sq?uq(a,d.key,c,!0):uq(a,d,c)}):[]}
;var wq;function xq(){wq||(wq=new tq);return wq}
;function yq(){this.store={};this.h={}}
yq.prototype.storePayload=function(a,b){a=zq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
yq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Aq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
yq.prototype.extractMatchingEntries=function(a){a=Aq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
yq.prototype.getSequenceCount=function(a){a=Aq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Aq(a,b){var c=zq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&zq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Bq(b.auth,g[0])){var h=b.isJspb;Bq(void 0===h?"undefined":h?"true":"false",g[1])&&Bq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Bq(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Bq(a,b){return void 0===a||"undefined"===a?!0:a===b}
yq.prototype.getSequenceCount=yq.prototype.getSequenceCount;yq.prototype.extractMatchingEntries=yq.prototype.extractMatchingEntries;yq.prototype.smartExtractMatchingEntries=yq.prototype.smartExtractMatchingEntries;yq.prototype.storePayload=yq.prototype.storePayload;function zq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Cq(a,b){if(a)return a[b.name]}
;var Dq=Zk("initial_gel_batch_timeout",2E3),Eq=Zk("gel_queue_timeout_max_ms",6E4),Fq=Math.pow(2,16)-1,Gq=void 0;function Hq(){this.j=this.h=this.i=0}
var Iq=new Hq,Jq=new Hq,Kq=new Hq,Lq=new Hq,Mq,Nq=!0,Oq=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Oq);var Pq={};function Qq(){var a=E("yt.logging.ims");a||(a=new yq,D("yt.logging.ims",a));return a}
function Rq(a,b){if("log_event"===a.endpoint){var c=Sq(a);a:{var d=Object.keys(a.payload);d=v(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,kp[e]){d=e;break a}d=void 0}var f;a:if(U("enable_web_tiered_gel")){d=kp[d||""];var g;if(null==xq().resolve(new sq(co)))var h=void 0;else e=null!=(h=E("yt.gcf.config.hotConfigGroup"))?h:null,h=null==e?void 0:null==(f=e.loggingHotConfig)?void 0:null==(g=f.eventLoggingConfig)?void 0:g.payloadPolicies;if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===
d){f=f[g].tier;break a}f=200}else f=void 0;400===f?Tq(a,b):(Pq[c]=!0,f={cttAuthInfo:c,isJspb:!1,tier:f},Qq().storePayload(f,a.payload),Uq(b,c,f))}}
function Uq(a,b,c){function d(){Vq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,e,c.tier)}
var e=!1;e=void 0===e?!1:e;a&&(Gq=new a);a=Wq();var f=V(),g=Xq(e,c.tier),h=g.j,k=0;c&&(k=Qq().getSequenceCount(c));1E3<=k&&U("web_logging_max_batch_hard_limit")?d():k>=a?Mq||(Mq=Yq(function(){d();Mq=void 0},0)):10<=f-h&&(Zq(e,c.tier),g.j=f)}
function Tq(a,b){if("log_event"===a.endpoint){var c=Sq(a),d=new Map;d.set(c,[a.payload]);b&&(Gq=new b);return new xf(function(e,f){Gq&&Gq.isReady()?$q(d,Gq,e,f,{bypassNetworkless:!0},!0):e()})}}
function Sq(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Oq[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Vq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new xf(function(e,f){var g=Xq(c,d);ar(g.i);ar(g.h);g.h=0;Gq&&Gq.isReady()?void 0===d&&U("enable_web_tiered_gel")?(br(e,f,a,b,c,300),br(e,f,a,b,c,200)):br(e,f,a,b,c,d):(Zq(c,d),e())})}
function br(a,b,c,d,e,f){var g=Gq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map;var k={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=U("enable_web_tiered_gel")?Qq().smartExtractMatchingEntries({keys:[k,e],sizeLimit:Wq()}):Qq().extractMatchingEntries(e),h.set(d,f);else for(d=v(Object.keys(Pq)),k=d.next();!k.done;k=d.next())k=k.value,e=U("enable_web_tiered_gel")?Qq().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:k,tier:f},{isJspb:!1,cttAuthInfo:k}],
sizeLimit:Wq()}):Qq().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<e.length&&h.set(k,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Pq[k];$q(h,g,a,b,c)}
function Zq(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Xq(a,b),d=c===Lq||c===Kq?5E3:Eq;U("web_gel_timeout_cap")&&!c.h&&(d=Yq(function(){Vq({writeThenSend:!0},void 0,a,b)},d),c.h=d);
ar(c.i);d=T("LOGGING_BATCH_TIMEOUT",Zk("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Nq&&(d=Dq);d=Yq(function(){Vq({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function $q(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(V()),h=a.size,k={};a=v(a);for(var l=a.next();!l.done;k={Qb:k.Qb,Za:k.Za,Fb:k.Fb,Sb:k.Sb,Rb:k.Rb},l=a.next()){var n=v(l.value);l=n.next().value;n=n.next().value;k.Za=tb({context:io(b.config_||ho())});if(!Pa(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Za.events=n;(n=Oq[l])&&cr(k.Za,l,n);delete Oq[l];k.Fb="visitorOnlyApprovedKey"===l;dr(k.Za,g,k.Fb);U("always_send_and_write")&&(e.writeThenSend=!1);k.Sb=function(p){U("update_log_event_config")&&
gi.ma(function(){return A(function(t){return t.yield(er(p),0)})});
h--;h||c()};
k.Qb=0;k.Rb=function(p){return function(){p.Qb++;if(e.bypassNetworkless&&1===p.Qb)try{Po(b,"log_event",p.Za,fr({writeThenSend:!0},p.Fb,p.Sb,p.Rb,f)),Nq=!1}catch(t){Kk(t),d()}h--;h||c()}}(k);
try{Po(b,"log_event",k.Za,fr(e,k.Fb,k.Sb,k.Rb,f)),Nq=!1}catch(p){Kk(p),d()}}}
function fr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,qd:a,dangerousLogToVisitorSession:b,Df:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};gr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function dr(a,b,c){gr()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Fq/2)),c++,c>Fq&&(c=1),Gk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function cr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gr(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Yq(a,b){return U("transport_use_scheduler")?em(a,b):dl(a,b)}
function ar(a){U("transport_use_scheduler")?gi.Fa(a):window.clearTimeout(a)}
function er(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Cq(d,jk),g=null==(f=d)?void 0:f.hotHashData,h=Cq(d,ik),l=null==(k=d)?void 0:k.coldHashData,(n=xq().resolve(new sq(co)))?g?e?p.yield(eo(n,g,e),2):p.yield(eo(n,g),2):p.v(2):p.return()):l?h?p.yield(fo(n,l,h),0):p.yield(fo(n,l),0):p.v(0)})}
function Xq(a,b){b=void 0===b?200:b;return a?300===b?Lq:Jq:300===b?Kq:Iq}
function Wq(){return Zk("tvhtml5_logging_max_batch_ads_fork")||Zk("web_logging_max_batch")||100}
;var hr=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",hr);
function ir(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=cq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,hr[b]=b in hr?hr[b]+1:0,a.sequence={index:hr[b],groupKey:b},d.endOfSequence&&delete hr[d.sequenceGroup]);(d.sendIsolatedPayload?Tq:Rq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function sm(a,b,c){c=void 0===c?{}:c;var d=Mp;T("ytLoggingEventsDefaultDisabled",!1)&&Mp===Mp&&(d=null);U("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=cq(),c.timestamp=V());ir(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var jr=new Set,kr=0,lr=0,mr=0,nr=[],or=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rm(a){pr(a)}
function qr(a){pr(a,"WARNING")}
function pr(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=kr))){d=nr;var k=ze(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Bl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Dl(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Dl(r)}if(d.length)for(t=0;t<d.length&&!(p=Bl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=xl();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Of)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(sl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=v(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Ic(f);break}t.params||(t.params={});a=xl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!jr.has(t.message)){if(g&&U("web_enable_error_204"))rr(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(yl.cb("handleError",t),U("record_app_crashed_web")&&0===mr&&1===t.sampleWeight&&(mr++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),sm("appCrashed",g)),lr++):"WARNING"===b&&yl.cb("handleWarning",t);if(U("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(or);for(c=a.next();!c.done;c=a.next())if(zm(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");e=Fk.EXPERIMENT_FLAGS;if((!e||!e.web_disable_gel_stp_ecatcher_killswitch)&&d)for(f=v(Object.keys(d)),e=f.next();!e.done;e=f.next())e=e.value,h.kvPairs.push({key:e,value:String(d[e])});if(d=t.params)for(f=v(Object.keys(d)),
e=f.next();!e.done;e=f.next())e=e.value,h.kvPairs.push({key:"client."+e,value:String(d[e])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(sm("clientError",h),("ERROR"===g||U("errors_flush_gel_always_killswitch"))&&Vq(void 0,void 0,!1))}U("suppress_error_204_logging")||rr(b,t)}try{jr.add(t.message)}catch(z){}kr++}}}
function rr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}jl(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function sr(){this.register=new Map}
function tr(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Qf("ABORTED")}
sr.prototype.clear=function(){tr(this);this.register.clear()};
var ur=new sr;var vr=Date.now().toString();
function wr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(vr)for(a=1,b=0;b<vr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^vr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var xr,yr=C.ytLoggingDocDocumentNonce_;yr||(yr=wr(),D("ytLoggingDocDocumentNonce_",yr));xr=yr;function zr(a){this.h=a}
zr.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
zr.prototype.getAsJspb=function(){var a=new sk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Ad(b,xd):yd||(yd=new Ad(null,xd));else if(b.constructor!==Ad)if(wd(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Ad(new Uint8Array(b),xd):yd||(yd=new Ad(null,xd));else throw Error();K(a,1,b)}else void 0!==this.h.veType&&K(a,2,Rd(this.h.veType)),void 0!==this.h.veCounter&&K(a,6,Rd(this.h.veCounter)),void 0!==this.h.elementIndex&&K(a,3,
Rd(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,Qd(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),ce(a,sk,7,b));void 0!==this.h.youtubeData&&ce(a,lk,8,this.h.jspbYoutubeData);return a};
zr.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
zr.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Ar(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Br(a){a=void 0===a?0:a;return U("new_csn_storage_design")?T("client-screen-nonce-store",{})[a]:T(Ar(a))}
function Cr(a,b){b=void 0===b?0:b;if(U("new_csn_storage_design")){var c=T("client-screen-nonce-store");c||(c={},Gk("client-screen-nonce-store",c));c[b]=a}Gk(Ar(b),a)}
function Dr(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Er(a){return T(Dr(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Er);function Fr(){var a=T("csn-to-ctt-auth-info");a||(a={},Gk("csn-to-ctt-auth-info",a));return a}
function Gr(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Hr(a){a=Br(void 0===a?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Hr);function Ir(a,b,c){var d=Fr();(c=Hr(c))&&delete d[c];b&&(d[a]=b)}
function Jr(a){return Fr()[a]}
D("yt_logging_screen.getCttAuthInfo",Jr);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Br(c)||b!==T(Dr(c)))if(Ir(a,d,c),Cr(a,c),Gk(Dr(c),b),b=function(){setTimeout(function(){a&&sm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xr,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Kr=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Kr);function Lr(a){Bk(Kr,arguments)}
;function Mr(){var a=sb(Nr),b;return(new xf(function(c,d){a.onSuccess=function(e){cl(e)?c(new Or(e)):d(new Pr("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Pr("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Pr("Request timed out","net.timeout",e))};
b=jl("//googleads.g.doubleclick.net/pagead/id",a)})).nc(function(c){c instanceof If&&b.abort();
return Df(c)})}
function Pr(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Pr,$a);function Or(a){this.xhr=a}
;function Qr(){this.h=0;this.i=null}
Qr.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Rr(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Sr(a):this};
Qr.prototype.getValue=function(){return this.i};
Qr.prototype.isRejected=function(){return 2==this.h};
Qr.prototype.$goog_Thenable=!0;function Sr(a){var b=new Qr;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Rr(a){var b=new Qr;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Tr(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Vk(a)?"same-origin":"cors",credentials:Vk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ur(){return xg()||(hd||id)&&zm("applewebkit")&&!zm("version")&&(!zm("safari")||zm("gsa/"))||Yc&&zm("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function Vr(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in qk)if(qk[d]==c.embeddedPlayerMode){b=qk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Wr(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xr;this.isTimeout=a instanceof Pr&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof If}
w(Wr,$a);Wr.prototype.name="BiscottiError";function Xr(){$a.call(this,"Biscotti ID is missing from server")}
w(Xr,$a);Xr.prototype.name="BiscottiMissingError";var Nr={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yr=null;function Zr(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ur())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(Vr(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function zk(){var a=Zr();if(void 0!==a)return Df(a);Yr||(Yr=Mr().then($r).nc(function(b){return as(2,b)}));
return Yr}
function $r(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xr;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xr;a=a.id;Ak(a);Yr=Rr(a);bs(18E5,2);return a}
function as(a,b){b=new Wr(b);Ak("");Yr=Sr(b);0<a&&bs(12E4,a-1);throw b;}
function bs(a,b){dl(function(){Mr().then($r,function(c){return as(b,c)}).nc(bb)},a)}
function cs(){try{var a=E("yt.ads.biscotti.getId_");return a?a():zk()}catch(b){return Df(b)}}
;function ds(a){if("1"!=qb(T("PLAYER_VARS",{}))){a&&yk();try{cs().then(function(){},function(){}),dl(ds,18E5)}catch(b){Kk(b)}}}
;function es(){var a=Rl(),b=Ul(119),c=1<window.devicePixelRatio;if(document.body&&qi(document.body,"exp-invert-logo"))if(c&&!qi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!qi(d,"inverted-hdpi")){var e=oi(d);pi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&qi(document.body,"inverted-hdpi")&&ri();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Vl(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Ol[b]:(c=d.toString(16),Ol[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Ol)Ol.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Ol[f])));var f=d.join("&");Kl(b,f,63072E3,a.i,c)}}
;var gs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function hs(){var a=void 0===a?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;sc(tc(5,a));try{var b=Tk(a).theme;return gs.get(b)||null}catch(c){}return null}
;function is(){this.h={};if(this.i=Nl()){var a=Ll("CONSISTENCY");a&&js(this,{encryptedTokenJarContents:a})}}
is.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];js(this,a)}};
function js(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Kl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ks=window.location.hostname.split(".").slice(-2).join(".");function ls(){var a=T("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===T("INNERTUBE_CLIENT_NAME")&&(this.h=ms(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ns;function ps(){ns=E("yt.clientLocationService.instance");ns||(ns=new ls,D("yt.clientLocationService.instance",ns));return ns}
m=ls.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===T("INNERTUBE_CLIENT_NAME")?(this.h=ms(this))&&this.h.set("yt-location-playability-token",a,15552E3):Kl("YT_CL",JSON.stringify({loctok:a}),15552E3,ks,!0))};
function ms(a){return void 0===a.h?new jm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=ms(this))&&this.h.remove("yt-location-playability-token"):Ml("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===T("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function qs(a,b){if(!a)return!1;var c,d=null==(c=Cq(a,pk))?void 0:c.signal;if(d&&b.kb)return!!b.kb[d];var e;if((c=null==(e=Cq(a,mk))?void 0:e.request)&&b.vc)return!!b.vc[c];for(var f in a)if(b.uc[f])return!0;return!1}
function rs(a,b){var c,d=null==(c=Cq(a,pk))?void 0:c.signal;if(d&&b.kb&&(c=b.kb[d]))return c();var e;if((c=null==(e=Cq(a,mk))?void 0:e.request)&&b.vc&&(e=b.vc[c]))return e();for(var f in a)if(b.uc[f]&&(a=b.uc[f]))return a()}
;function ss(a){return function(){return new a}}
;var ts={},us=(ts.WEB_UNPLUGGED="^unplugged/",ts.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ts.WEB_UNPLUGGED_OPS="^unplugged/",ts.WEB_UNPLUGGED_PUBLIC="^unplugged/",ts.WEB_CREATOR="^creator/",ts.WEB_KIDS="^kids/",ts.WEB_EXPERIMENTS="^experiments/",ts.WEB_MUSIC="^music/",ts.WEB_REMIX="^music/",ts.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ts.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ts);
function vs(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=us[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(us).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function ws(){}
ws.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Hl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=T("INNERTUBE_CONTEXT");if(g){g=tb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Rl();var l="USER_INTERFACE_THEME_LIGHT";Ul(165)?l="USER_INTERFACE_THEME_DARK":Ul(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:hs()||l;h.userInterfaceTheme=k;if(!f){if(k=Zl())h.connectionType=
k;U("web_log_effective_connection_type")&&(k=$l())&&(g.client.effectiveConnectionType=k)}var n;if(U("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}p=Tk(C.location.href);!U("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&Il.h&&
(p=Il.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Jl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!U("web_lr_app_quality_killswitch")&&(p=T("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));
if(!U("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(X){}t=void 0}t&&(h.timeZone=t)}(t=T("EXPERIMENTS_TOKEN",""))?h.experimentsToken=t:delete h.experimentsToken;t=$k();is.h||(is.h=new is);h=is.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!U("web_prequest_context_killswitch")&&(r=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=r);t=Rl();r=Ul(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);U("warm_op_csn_cleanup")?e&&(f=Hr())&&(g.clientScreenNonce=f):!f&&(f=Hr())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;ps().setLocationOnInnerTubeContext(g);try{var x=Wk(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));
for(var H=z.next();!H.done;H=z.next()){var J=v(H.value),L=J.next().value,I=J.next().value;x=L;y=I;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(X){pr(X)}z=g}else pr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var O;b="/youtubei/v1/"+vs(this.j());(H=null==(O=Cq(a.commandMetadata,ok))?void 0:O.apiUrl)&&(b=H);O=b;(b=T("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(vc(O)));b={};b.key=T("INNERTUBE_API_KEY");
U("json_condensed_response")&&(b.prettyPrint="false");O=Uk(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,ib:Tr(O),Na:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}pr(new am("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(ws.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function xs(){}
w(xs,ws);xs.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:Tr("/getDatasyncIdsEndpoint","GET"),Na:{}}};
xs.prototype.j=function(){return[]};
xs.prototype.h=function(){};
xs.prototype.i=function(){};var ys={},zs=(ys.GET_DATASYNC_IDS=ss(xs),ys);function As(a,b){var c=void 0===c?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=uc(window.location.href);e&&d.push(e);e=uc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),lc(d,a),a=d.href)if(a=vc(a),a=wc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Hr()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Bs(a,b,f)}else Bs(a,b)}
function Bs(a,b,c){a="ST-"+qc(a).toString(36);b=b?Ac(b):"";c=c||5;Ur()&&Kl(a,b,c)}
;function Cs(){try{return!!self.localStorage}catch(a){return!1}}
;function Ds(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Es(a){if(Cs()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ds(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Fs(){if(!Cs())return!1;var a=cm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Ds(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Gs(a){if(xg()){var b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=uc(window.location.href);c&&b.push(c);c=uc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=vc(a),(b=wc(b))?(b="ST-"+qc(b).toString(36),b=(b=Ll(b)||null)?Sk(b):{}):b=null):b=null;null==b&&(b={});c=T("LOGIN_INFO");U("copy_login_info_to_st_cookie")&&c&&(b.session_logininfo=c);As(a,b)}}
;function Hs(a){var b=B.apply(1,arguments);if(!Is(a)||b.some(function(d){return!Is(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Js(a,c.value);return a}
function Js(a,b){for(var c in b)if(Is(b[c])){if(c in a&&!Is(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Js(a[c],b[c])}else if(Ks(b[c])){if(c in a&&!Ks(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ls(a[c],b[c])}else a[c]=b[c];return a}
function Ls(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Is(c)?a.push(Js({},c)):Ks(c)?a.push(Ls([],c)):a.push(c);return a}
function Is(a){return"object"===typeof a&&!Array.isArray(a)}
function Ks(a){return"object"===typeof a&&Array.isArray(a)}
;function Ms(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ns(){var a=Ms();a.info||(a.info={});return a.info}
function Os(a){a=Ms(a);a.metadata||(a.metadata={});return a.metadata}
function Ps(a){a=Ms(a);a.tick||(a.tick={});return a.tick}
function Qs(a){a=Ms(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Rs(a){a=Qs(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ss(a){var b=Ms(a).nonce;b||(b=wr(),Ms(a).nonce=b);return b}
;function Ts(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Us(a){a=a||"";var b=E("ytcsi.reference");b||(Ts(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Ts(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Vs=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",
W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),Y={},Ws=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",
Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",
Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Xs="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ys={},Zs=(Ys.ccs="CANARY_STATE_",
Ys.mver="MEASUREMENT_VERSION_",Ys.pis="PLAYER_INITIALIZED_STATE_",Ys.yt_pt="LATENCY_PLAYER_",Ys.pa="LATENCY_ACTION_",Ys.ctop="TOP_ENTITY_TYPE_",Ys.yt_vst="VIDEO_STREAM_TYPE_",Ys),$s="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function at(a,b,c){c=Qs(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ws){c=Ws[a];0<=db(Xs,c)&&(b=!!b);a in Zs&&"string"===typeof b&&(b=Zs[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Hs({},d)}0<=db($s,a)||qr(new am("Unknown label logged with GEL CSI",a))}
;function bt(a,b){ko.call(this,1,arguments);this.timer=b}
w(bt,ko);var ct=new lo("aft-recorded",bt);var dt=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",dt);function et(){this.h=0}
function ft(){et.h||(et.h=new et);return et.h}
et.prototype.tick=function(a,b,c,d){gt(this,"tick_"+a+"_"+b)||sm("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
et.prototype.info=function(a,b,c){var d=Object.keys(a).join("");gt(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sm("latencyActionInfo",a,{cttAuthInfo:c}))};
et.prototype.jspbInfo=function(){};
et.prototype.span=function(a,b,c){var d=Object.keys(a).join("");gt(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,sm("latencyActionSpan",a,{cttAuthInfo:c}))};
function gt(a,b){dt[b]=dt[b]||{count:0};var c=dt[b];c.count++;c.time=V();a.h||(a.h=em(function(){var d=V(),e;for(e in dt)dt[e]&&6E4<d-dt[e].time&&delete dt[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new am("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||qr(c)),!0):!1}
;var ht=window;function jt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function kt(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=lt(e.requestStart),e.responseEnd=lt(e.responseEnd),e.redirectStart=lt(e.redirectStart),e.redirectEnd=lt(e.redirectEnd),e.domainLookupEnd=lt(e.domainLookupEnd),e.connectStart=lt(e.connectStart),e.connectEnd=
lt(e.connectEnd),e.responseStart=lt(e.responseStart),e.secureConnectionStart=lt(e.secureConnectionStart),e.domainLookupStart=lt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function lt(a){return Math.round(mt()+a)}
function mt(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=ht.performance||ht.mozPerformance||ht.msPerformance||ht.webkitPerformance||new jt;var nt=!1,ot={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||bb,Z);function pt(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Os(c).loadType=d}(a=at(a,b,c))&&qt(a,c)}}
function qt(a,b){var c=Us(b||"");Hs(c.info,a);a.loadType&&(c=a.loadType,Os(b).loadType=c);Hs(Rs(b),a);c=Ss(b);b=Ms(b).cttAuthInfo;ft().info(a,c,b)}
function rt(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=Us(c||"");d.tick[a]=b||V();if(d.callback&&d.callback[a]){d=v(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Qs(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Ps(c);d=b||V();U("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Ss(c);var f=Ms(c).cttAuthInfo;"_start"===a?(a=ft(),gt(a,"baseline_"+e)||sm("latencyActionBaselined",{clientActionNonce:e},{timestamp:b,
cttAuthInfo:f})):ft().tick(a,e,b,f);st(c);return d}
function tt(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Op+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function ut(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oc()&&a.setAttribute("nonce",oc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=mt(),rt("rsf_"+b,c+Math.round(a.fetchStart)),rt("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function vt(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(rt("wffs",lt(b.startTime)),rt("wffe",lt(b.responseEnd)))}
function wt(a){var b=xt("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=xt(b[d],a);if(e)return e}return NaN}
function xt(a,b){if(a=Ps(b)[a])return"number"===typeof a?a:a[a.length-1]}
function st(a){var b=xt("_start",a),c=wt(a);b&&c&&!nt&&(qo(ct,new bt(Math.round(c-b),a)),nt=!0)}
function zt(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!zt(a[d],b[d]))return!1;return!0}
function At(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return lt(a.startTime)}a=Z.timing;
return a.xe?Math.max(0,a.xe):0}
;function Bt(a,b){Jk(function(){Us("").info.actionType=a;b&&Gk("TIMING_AFT_KEYS",b);Gk("TIMING_ACTION",a);var c=T("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&pt(d,c[d]);c={isNavigation:!0,actionType:Vs[T("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=T("PREVIOUS_ACTION"))c.previousAction=Vs[d]||"LATENCY_ACTION_UNKNOWN";if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Hr())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=tt();if(1===d||-1===d)c.isVisible=
!0;Os();Ns();c.loadType="cold";d=Ns();var e=kt(),f=mt(),g=T("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(rt("srt",e.responseStart),1!==d.prerender&&rt("_start",f,void 0));d=At();0<d&&rt("fpt",d);d=kt();d.isPerformanceNavigationTiming&&qt({performanceNavigationTiming:!0});rt("nreqs",d.requestStart,void 0);rt("nress",d.responseStart,void 0);rt("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(rt("nrs",d.redirectStart,void 0),rt("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(rt("ndnss",d.domainLookupStart,void 0),rt("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(rt("ntcps",d.connectStart,void 0),rt("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=mt()&&0<d.connectEnd-d.secureConnectionStart&&(rt("nstcps",d.secureConnectionStart,void 0),rt("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&vt();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in ot)ot.hasOwnProperty(h)&&
(e=ot[h],ut(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});qt(c);c=Ns();h=Rs();if("cold"===Os().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Ps();e=Qs();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])rt(k,xt(k));else if(U("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,rt(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=at(f,c[f]))&&!zt(Rs(),f)&&(Hs(h,f),Hs(k,f),d=!0);d&&qt(k)}D("ytglobal.timingready_",!0);k=T("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Ct()&&wt()&&st()})()}
function Dt(a,b,c,d){Jk(pt)(a,b,c,d)}
function Et(a,b,c){return Jk(rt)(a,b,c)}
function Ct(){return Jk(function(){return"_start"in Ps()})()}
function Ft(){Jk(function(){var a=Ss();requestAnimationFrame(function(){setTimeout(function(){a===Ss()&&Et("ol",void 0,void 0)},0)})})()}
var Gt=window;Gt.ytcsi&&(Gt.ytcsi.info=Dt,Gt.ytcsi.tick=Et);var Ht="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),It=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Jt(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.kb||(a.kb={});a.kb=Object.assign({},zs,a.kb)}
function Kt(a,b,c,d){if(void 0!==Jt.h){if(d=Jt.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new am("InnerTubeTransportService is already initialized",a);
}else Jt.h=new Jt(a,b,c,d)}
function Lt(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Hl:c;var d=rs(b,a.j);if(!d)return Df(new am("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Gs(e.input),new xf(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.m.Ue){var n=e.config,p;n=null==n?void 0:null==(p=n.Ub)?void 0:p.sessionIndex;p=Gl(0,{sessionIndex:n});k=Object.assign({},Mt(h),p);return l.v(2)}return l.yield(Nt(e.config,
h),3)}2!=l.h&&(k=l.i);f(Ot(a,e,k));l.h=0})})):Df(new am("Error: Failed to build request for command.",b))}
function Pt(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Sf)?0:d.Wf)&&a.l){d=v(Ht);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Ot(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,H,J,L,I,O,X,ba,da,pa,na,Da,Bg,hq,iq,jq;return A(function(ka){switch(ka.h){case 1:ka.v(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ka.v(4);break}g=b.Na.context;ka.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ka.v(4);break}l=k.value;return ka.yield(l.Pf(g),8);case 8:k=h.next();ka.v(7);break;case 4:if(null==(n=a.i)||!n.Tf(b.input,b.Na)){ka.v(11);
break}return ka.yield(a.i.Mf(b.input,b.Na),12);case 12:return p=ka.i,U("kevlar_process_local_innertube_responses_killswitch")||Pt(a,p,b),ka.return(p);case 11:return(x=null==(r=b.config)?void 0:r.Pa)&&a.h.has(x)&&U("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Na),J=null!=(H=null==(z=b.ib)?void 0:z.headers)?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},J,c)}),L=Object.assign({},b.ib),"POST"===b.ib.method&&(L=Object.assign({},L,{body:y})),(null==(I=b.config)?0:I.Ee)&&
Et(b.config.Ee),O=function(){return a.Y.fetch(b.input,L,b.config)},t=O(),x&&a.h.set(x,t)),ka.yield(t,13);
case 13:if((X=ka.i)&&"error"in X&&(null==(ba=X)?0:null==(da=ba.error)?0:da.details))for(pa=X.error.details,na=v(pa),Da=na.next();!Da.done;Da=na.next())Bg=Da.value,(hq=Bg["@type"])&&-1<It.indexOf(hq)&&(delete Bg["@type"],X=Bg);x&&a.h.has(x)&&a.h.delete(x);(null==(iq=b.config)?0:iq.Fe)&&Et(b.config.Fe);if(X||null==(jq=a.i)||!jq.Ef(b.input,b.Na)){ka.v(14);break}return ka.yield(a.i.Lf(b.input,b.Na),15);case 15:X=ka.i;case 14:return Pt(a,X,b),ka.return(X||void 0)}})}
function Nt(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=Cf(Gl(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Mt(b),f)))})}
function Mt(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);"cors"!==a&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Qt=new rq("INNERTUBE_TRANSPORT_TOKEN");var Rt=["share/get_web_player_share_panel"],St=["feedback"],Tt=["notification/modify_channel_preference"],Ut=["browse/edit_playlist"],Vt=["subscription/subscribe"],Wt=["subscription/unsubscribe"];function Xt(){}
w(Xt,ws);Xt.prototype.j=function(){return Vt};
Xt.prototype.h=function(a){return Cq(a,xk)||void 0};
Xt.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Xt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Yt(){}
w(Yt,ws);Yt.prototype.j=function(){return Wt};
Yt.prototype.h=function(a){return Cq(a,wk)||void 0};
Yt.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Yt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Zt(){}
w(Zt,ws);Zt.prototype.j=function(){return St};
Zt.prototype.h=function(a){return Cq(a,rk)||void 0};
Zt.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Zt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function $t(){}
w($t,ws);$t.prototype.j=function(){return Tt};
$t.prototype.h=function(a){return Cq(a,vk)||void 0};
$t.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function au(){}
w(au,ws);au.prototype.j=function(){return Ut};
au.prototype.h=function(a){return Cq(a,uk)||void 0};
au.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function bu(){}
w(bu,ws);bu.prototype.j=function(){return Rt};
bu.prototype.h=function(a){return Cq(a,tk)};
bu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var cu=new rq("NETWORK_SLI_TOKEN");function du(a){this.h=a}
du.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=sc(tc(5,Hc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;U("wug_networking_gzip_request")&&(e=Io(b));f=new window.Request(a,e);return U("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){qr(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){qr(h)}))})};
du.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Hf(),b=b.then(function(c){qr(new am("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
du[qq]=[new sq(cu)];var eu=new rq("NETWORK_MANAGER_TOKEN");var fu;function gu(){var a=hu,b=iu,c=ju;this.l=ku;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function lu(a,b,c){if(mu(b))nu(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.sc)d.sc=c.sc;0===d.type?a.navigate?ou(d.command)?pu(a,d.command)||(b=a.navigate(d)||[],Gf(b).then(function(){a.h.delete(d.command)})):pr(Error("Error: Command handler page requests need to specify a url.")):pr(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?pu(a,d.command)||(b=a.i(d),Gf(b).then(function(){a.h.delete(d.command)})):pr(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):pr(Error("Error: Command handler send action was called but not set.")))}}
function pu(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function mu(a){var b=!!Cq(a,kk),c;a="CLIENT_SIGNAL"===(null==(c=Cq(a,pk))?void 0:c.signal);return b||a}
function nu(a,b,c){var d=Cq(b,kk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=Cq(b,pk))?void 0:f.signal)){var g;e=(null==(g=Cq(b,pk))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{lu(a,e,c)}catch(h){h instanceof Error&&pr(h)}}else pr(Error("Could not handle the meta command."))}
function ou(a){var b;return!(null==(b=Cq(null==a?void 0:a.commandMetadata,ok))||!b.url)}
;function qu(){var a,b,c;return A(function(d){if(1==d.h)return a=xq().resolve(Qt),a?d.yield(Lt(a),2):(qr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return qr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Ff;return d.return(c)}qr(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var ru=C.caches,su;function tu(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function uu(){return A(function(a){if(void 0!==su)return a.return(su);su=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(ru.open("test-only"),4);case 4:return d.yield(ru.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(su)})}
function vu(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(uu(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(ru.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=tu(f),h=g.datasyncId,!h||a.includes(h)||b.push(ru.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function wu(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(uu(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=cm("cache contains other");return h.yield(ru.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=tu(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function xu(){qu().then(function(a){a&&(In(a),vu(a),Es(a))})}
function yu(){var a=new Ap;gi.ma(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=cm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];In(g);vu(g);Es(g);return f.return()}c=Fs();return f.yield(wu(),3);case 3:return d=f.i,f.yield(Jn(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ta()?xu():a.l.add("publicytnetworkstatus-online",xu,!0,void 0,void 0),f.h=0}})})}
;var Lh=ia(["data-"]);function zu(a){a&&(a.dataset?a.dataset[Au("loaded")]="true":Kh(a))}
function Bu(a,b){return a?a.dataset?a.dataset[Au(b)]:a.getAttribute("data-"+b):null}
var Cu={};function Au(a){return Cu[a]||(Cu[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Du=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Eu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Fu(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Du,""),c=c.replace(Eu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gu(a,b,c)}
function Gu(a,b,c){c=void 0===c?null:c;var d=Hu(a),e=document.getElementById(d),f=e&&Bu(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=kq(d,b),b=""+Ra(b),Iu[b]=f),g||(e=Ju(a,d,function(){if(!Bu(e,"loaded")){zu(e);nq(d);var h=Xa(oq,d);dl(h,0)}},c)))}
function Ju(a,b,c,d){d=void 0===d?null:d;var e=kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oh(e,gk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Ku(a){a=Hu(a);var b=document.getElementById(a);b&&(oq(a),b.parentNode.removeChild(b))}
function Lu(a,b){a&&b&&(a=""+Ra(b),(a=Iu[a])&&mq(a))}
function Hu(a){var b=document.createElement("a");lc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+qc(a)}
var Iu={};var Mu=[],Nu=!1;function Ou(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ur()){var a=T("PLAYER_VARS",{});if("1"!=qb(a)&&!Vr(a)){var b=function(){Nu=!0;"google_ad_status"in window?Gk("DCLKSTAT",1):Gk("DCLKSTAT",2)};
try{Fu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Mu.push(gi.ma(function(){if(!(Nu||"google_ad_status"in window)){try{Lu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Nu=!0;Gk("DCLKSTAT",3)}},5E3))}}}
function Pu(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;var Qu=window;function Ru(){var a,b;return"h5vcc"in Qu&&(null==(a=Qu.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Qu.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Qu&&Qu.performance.mark&&Qu.performance.measure?2:0}
function Su(a){switch(Ru()){case 1:Qu.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Qu.performance.mark(a+"-start");break;case 0:break;default:Mh()}}
function Tu(a){switch(Ru()){case 1:Qu.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Qu.performance.mark(c);Qu.performance.measure(a,b,c);break;case 0:break;default:Mh()}}
;var Uu=U("web_enable_lifecycle_monitoring")&&0!==Ru();function Vu(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?im():d;this.j=c;this.scheduler=d;this.i=new Bh;this.h=a;for(a={ab:0};a.ab<this.h.length;a={Gb:a.Gb,ab:a.ab},a.ab++)a.Gb=this.h[a.ab],c=function(e){return function(){e.Gb.Fc();b.h[e.ab].jc=!0;b.h.every(function(f){return!0===f.jc})&&b.i.resolve()}}(a),d=this.getPriority(a.Gb),d=fm(c,d),this.h[a.ab]=Object.assign({},a.Gb,{Fc:c,
jobId:d})}
function Wu(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.jc||(a.scheduler.Fa(c.jobId),fm(c.Fc,10))}
Vu.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.jc||this.scheduler.Fa(b.jobId),b.jc=!0;this.i.resolve()};
Vu.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Xu(a){this.state=a;this.plugins=[];this.s=void 0;this.T={};Uu&&Su(this.state)}
m=Xu.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Uu&&Tu(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Wu(this.j),this.j=void 0);Yu(this,a,b);this.state=a;Uu&&Su(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Zu(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Zu(a,b){var c=b.filter(function(e){return 10===$u(a,e)}),d=b.filter(function(e){return 10!==$u(a,e)});
return a.T.Uf?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ge.apply(a,[c].concat(ja(e))),2);a.Cd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.He.apply(a,[c].concat(ja(e)));a.Cd.apply(a,[d].concat(ja(e)))}}
m.He=function(a){var b=B.apply(1,arguments);im();for(var c={},d=v(a),e=d.next();!e.done;c={nb:c.nb},e=d.next())c.nb=e.value,gm(function(f){return function(){av(f.nb.name);f.nb.callback.apply(f.nb,ja(b));bv(f.nb.name)}}(c))};
m.Ge=function(a){var b=B.apply(1,arguments),c,d,e,f;return A(function(g){1==g.h&&(im(),c={},d=v(a),e=d.next());if(3!=g.h){if(e.done)return g.v(0);c.bb=e.value;c.Eb=void 0;f=function(h){return function(){av(h.bb.name);var k=h.bb.callback.apply(h.bb,ja(b));"function"===typeof(null==k?void 0:k.then)?h.Eb=k.then(function(){bv(h.bb.name)}):bv(h.bb.name)}}(c);
gm(f);return c.Eb?g.yield(c.Eb,3):g.v(3)}c={bb:c.bb,Eb:c.Eb};e=d.next();return g.v(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){av(e.name);e.callback.apply(e,ja(b));bv(e.name)},
priority:$u(c,e)}});
d.length&&(this.j=new Vu(d))};
function $u(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function av(a){Uu&&a&&Su(a)}
function bv(a){Uu&&a&&Tu(a)}
function Yu(a,b,c){Uu&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Xu.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function cv(a){Xu.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ka},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(cv,Xu);cv.prototype.ka=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
cv.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
cv.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
cv.prototype.i=function(){this.h=new Map};function dv(a){Xu.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(dv,Xu);dv.prototype.i=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
dv.prototype.h=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
dv.prototype.l=function(a,b){a(null==b?void 0:b.event)};
dv.prototype.m=function(a,b){a(null==b?void 0:b.event)};function ev(){this.l=new cv;this.m=new dv}
ev.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function fv(a){ko.call(this,1,arguments);this.csn=a}
w(fv,ko);var to=new lo("screen-created",fv),gv=[],hv=0;function iv(a,b,c,d){var e=d.filter(function(h){h.csn!==b?(h.csn=b,h=!0):h=!1;return h}),f={cttAuthInfo:Jr(b)||void 0,
sequenceGroup:b};d=v(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&qr(Error("Child VE logged with no data"));c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(h){return h.getAsJson()})};
"UNDEFINED_CSN"===b?jv("visualElementAttached",f,c):a?ir("visualElementAttached",c,a,f):sm("visualElementAttached",c,f)}
function jv(a,b,c){gv.push({payloadName:a,payload:c,Kf:void 0,options:b});hv||(hv=uo())}
function vo(a){if(gv){for(var b=v(gv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,sm(c.payloadName,c.payload,c.options));gv.length=0}hv=0}
;function kv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
kv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Hr(void 0===c?0:c)){a=this.client;var e=new zr({trackingParams:d});d={cttAuthInfo:Jr(c)||void 0,sequenceGroup:c};e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};b&&(e.clientData=b);"UNDEFINED_CSN"===c?jv("visualElementGestured",d,e):a?ir("visualElementGestured",e,a,d):sm("visualElementGestured",e,d);b=!0}else b=!1;else b=!1;return b};
kv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Hr(d);a||(a=(a=Er(void 0===d?0:d))?new zr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d={cttAuthInfo:Jr(c)||void 0,sequenceGroup:c},b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?jv("visualElementStateChanged",d,b):a?ir("visualElementStateChanged",b,a,d):sm("visualElementStateChanged",b,d))}};
function lv(a,b){if(void 0===b)for(var c=Gr(),d=0;d<c.length;d++)void 0!==c[d]&&lv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&iv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function mv(){ev.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(mv,ev);mv.prototype.j=function(){sm("finalPayload",{csn:Hr()})};
mv.prototype.h=function(){tr(ur)};
mv.prototype.i=function(){var a=lv;kv.h||(kv.h=new kv);a(kv.h)};function nv(){}
function ov(){var a=E("ytglobal.storage_");a||(a=new nv,D("ytglobal.storage_",a));return a}
nv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(pv()):d.return()})};
function pv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",nv);function qm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Zk("ytidb_transaction_ended_event_rate_limit_session",.2)}
qm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":qv(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Zk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function qv(a,b){ov().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:rv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:rv(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function rv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function sv(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var tv=new Map;function uv(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function vv(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function wv(a,b){b=new sv(b);vv(a,"yt-action",b);return b.returnValue}
function xv(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=uv(e,"action")||uv(e,"command")||uv(e,"endpoint");if(f){var g="yt"+f;var h=tv.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),tv.set(g,f),g=f);Cq(e,nk)&&(g+="-"+Cq(e,nk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(U("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&U("use_source_element_if_present_for_actions")?yv(c,[e]):
yv(a,[e]):wv(a,[e,c,d]))})}
function yv(a,b){var c=[a];b&&c.push.apply(c,b);b=wv(a,c);return 0<b.length&&(b=b[0],vv(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){vv(a,"yt-service-request-completed",d)},function(d){vv(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Cf()}
;function ku(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=Cq(a.commandMetadata,ok))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(U("kevlar_service_command_check")){if(c=xq().resolve(Qt),qs(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=Cq(a.commandMetadata,ok))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function iu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[yv(b,[a.command,c,a.sc])]}return[]}
function ju(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&xv(b,[a.command],b,c)}}
;function zv(a,b,c){N.call(this);var d=this;c=c||T("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=db(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.A)}
w(zv,N);zv.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Lk(d)}}};
zv.prototype.K=function(){window.removeEventListener("message",this.A);N.prototype.K.call(this)};function Av(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new zv(!!T("WIDGET_ID_ENFORCE")),b=this.Be.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=T("WIDGET_ID"))this.h.sessionId=a}
m=Av.prototype;m.Be=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.yc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.yc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.de=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Bc());this.sendMessage("onReady");eb(this.i,this.Ad,this);this.i=[]};
m.Bc=function(){return null};
function Bv(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Cv={},Dv=(Cv["api.invalidparam"]=2,Cv.auth=150,Cv["drm.auth"]=150,Cv["heartbeat.net"]=150,Cv["heartbeat.servererror"]=150,Cv["heartbeat.stop"]=150,Cv["html5.unsupportedads"]=5,Cv["fmt.noneavailable"]=5,Cv["fmt.decode"]=5,Cv["fmt.unplayable"]=5,Cv["html5.missingapi"]=5,Cv["html5.unsupportedlive"]=5,Cv["drm.unavailable"]=5,Cv["mrm.blocked"]=151,Cv);var Ev=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Fv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Gv(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Ev);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Hv(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Iv(a){Av.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ne.bind(this));this.addEventListener("onVolumeChange",this.Oe.bind(this));this.addEventListener("onApiChange",this.Ie.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ke.bind(this));this.addEventListener("onPlaybackRateChange",this.Le.bind(this));this.addEventListener("onStateChange",this.Me.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Pe.bind(this))}
w(Iv,Av);m=Iv.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Fv(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Gv(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Gv(e);break;case "loadPlaylist":case "cuePlaylist":e=Hv(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Fv(a)&&Bv(this,this.Bc())}};
m.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Av.prototype.Ec.call(this,a,b)};
m.yc=function(a,b){var c=this,d=Av.prototype.yc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.de.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Dv[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Bc=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Me=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Bv(this,a)};
m.Ke=function(a){Bv(this,{playbackQuality:a})};
m.Le=function(a){Bv(this,{playbackRate:a})};
m.Ie=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Oe=function(){Bv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ne=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Bv(this,a)};
m.Pe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Bv(this,a)};
m.dispose=function(){Av.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Jv(a){N.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Jv,N);m=Jv.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Kv(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Lv(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Je.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Je=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.Ac(a,b))};
m.Ac=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.K=function(){var a=this.connection;a.h()||Di(a.i,"command",this.wd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);N.prototype.K.call(this)};function Mv(a,b){Jv.call(this,b);this.api=a;this.start()}
w(Mv,Jv);Mv.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Mv.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Kv(a,b){switch(a){case "loadVideoById":return a=Gv(b),[a];case "cueVideoById":return a=Gv(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Hv(b),[a];case "cuePlaylist":return a=Hv(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Lv(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Mv.prototype.Ac=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Jv.prototype.Ac.call(this,a,b)};
Mv.prototype.K=function(){Jv.prototype.K.call(this);delete this.api};function Nv(a){a=void 0===a?!1:a;N.call(this);this.i=new P(a);we(this,this.i)}
Ya(Nv,N);Nv.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Nv.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function Ov(a,b,c){Nv.call(this);this.l=a;this.j=b;this.id=c}
w(Ov,Nv);Ov.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
Ov.prototype.K=function(){this.j=this.l=null;Nv.prototype.K.call(this)};function Pv(a,b,c){N.call(this);this.i=a;this.origin=c;this.j=Vp(window,"message",this.l.bind(this));this.connection=new Ov(this,a,b);we(this,this.connection)}
w(Pv,N);Pv.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Pv.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Pv.prototype.K=function(){Wp(this.j);this.i=null;N.prototype.K.call(this)};function Qv(){this.state=1;this.h=null}
m=Qv.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=xb();d=f?f.createScript(d):d;d=new Cb(d,Bb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Ab("From proto message. b/166824318"),e=Gb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Rv(this,d,e,a.program,b,c)}else qr(Error("Cannot initialize botguard without program"))};
function Rv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Fu(c,function(){window[g]?Sv(a,d,g,e):(a.state=3,Ku(c),qr(new am("Unable to load Botguard","from "+c)))},f)):b?(f=kf("SCRIPT"),b instanceof Cb?(b instanceof Cb&&b.constructor===Cb?b=b.j:(Oa(b),b="type_error:SafeScript"),f.textContent=b,Nh(f)):f.textContent=b,f.nonce=oc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Sv(a,d,g,e):(a.state=4,qr(new am("Unable to load Botguard from JS")))):qr(new am("Unable to load VM; no url or JS provided"))}
function Sv(a,b,c,d){a.state=5;try{var e=new Ch({program:b,je:c,Ce:U("att_web_record_metrics")});e.Re.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&qr(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Jd({dd:a}):null};
m.dispose=function(){this.Vc()};
m.Vc=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Pc=function(a){ue(this.h);this.h=a};function Tv(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Uv(){Qv.apply(this,arguments)}
w(Uv,Qv);Uv.prototype.Vc=function(){this.state=8};
Uv.prototype.Pc=function(a){var b;null==(b=Tv())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Uv.prototype.Sc=function(){return!!Tv()};
Uv.prototype.Jd=function(a){return Tv().bgvmc(a)};var Vv=new Uv;function Wv(){return Vv.Sc()}
function Xv(a){a=void 0===a?{}:a;return Vv.invoke(a)}
;function Yv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yv.prototype.clone=function(){var a=new Yv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=sb(c):a[b]=c}return a};var Zv=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $v(a){a=a||"";if(window.spf){var b=a.match(Zv);spf.style.load(a,b?b[1]:"",void 0)}else aw(a)}
function aw(a){var b=bw(a),c=document.getElementById(b),d=c&&Bu(c,"loaded");d||c&&!d||(c=cw(a,b,function(){if(!Bu(c,"loaded")){zu(c);nq(b);var e=Xa(oq,b);dl(e,0)}}))}
function cw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gk(a);mc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bw(a){var b=kf("A");lc(b,new Kb(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+qc(a)}
;function dw(){N.call(this);this.i=[]}
w(dw,N);dw.prototype.K=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}N.prototype.K.call(this)};function ew(){dw.apply(this,arguments)}
w(ew,dw);function fw(a,b,c,d,e){N.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Tb=e;this.Da=!1;this.api={};this.Ca=this.s=null;this.X=new P;this.i={};this.ba=this.la=this.elementId=this.qb=this.config=null;this.aa=!1;this.l=this.M=null;this.qa={};this.pc=["onReady"];this.lastError=null;this.Ib=NaN;this.W={};this.qc=new ew(this);this.ea=0;this.j=this.m=a;we(this,this.X);gw(this);hw(this);we(this,this.qc);c?this.ea=dl(function(){f.loadNewVideoConfig(c)},0):d&&(iw(this),jw(this))}
w(fw,N);m=fw.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.h()){this.ea&&(window.clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Yv||(b=new Yv(b));this.config=b;this.setConfig(a);jw(this);this.isReady()&&kw(this)}};
function iw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.qb=a;this.config=lw(a);iw(this);if(!this.la){var b;this.la=mw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Yh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Yh(Number(a)||a))};
function kw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nw(a){var b=!0,c=ow(a);c&&a.config&&(a=pw(a),b=Bu(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function jw(a){if(!a.h()&&!a.aa){var b=nw(a);if(b&&"html5"===(ow(a)?"html5":null))a.ba="html5",a.isReady()||qw(a);else if(rw(a),a.ba="html5",b&&a.l&&a.m)a.m.appendChild(a.l),qw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.M=function(){c=!0;var d=sw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?lw(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Tb);qw(a)};
a.aa=!0;b?a.M():(Fu(pw(a),a.M),(b=tw(a))&&$v(b),uw(a)&&!c&&D("yt.player.Application.create",null))}}}
function ow(a){var b=jf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function qw(a){if(!a.h()){var b=ow(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!sw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vw(a)}else a.Ib=dl(function(){qw(a)},50)}}
function vw(a){gw(a);a.Da=!0;var b=ow(a);if(b){a.s=ww(a,b,"addEventListener");a.Ca=ww(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ww(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);kw(a);a.la&&a.la(a.api);a.X.cb("onReady",a.api)}
function ww(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,qr(f))}}}
function gw(a){a.Da=!1;if(a.Ca)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Ca(b,a.i[b]);for(var c in a.W)a.W.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.W={};a.s=null;a.Ca=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Da};
function hw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){nq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){nq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=mw(this,b);d&&(0<=db(this.pc,a)||this.i[a]||(b=xw(this,a),this.s&&this.s(a,b)),this.X.subscribe(a,d),"onReady"===a&&this.isReady()&&dl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=mw(this,b))&&Di(this.X,a,b)};
function mw(a,b){var c=b;if("string"===typeof b){if(a.qa[b])return a.qa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){pr(f)}};
a.qa[b]=c}return c?c:null}
function xw(a,b){var c="ytPlayer"+b+a.A;a.i[b]=c;C[c]=function(d){var e=dl(function(){if(!a.h()){try{a.X.cb(b,null!=d?d:void 0)}catch(h){qr(new am("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.W,g=String(e);g in f&&delete f[g]}},0);
pb(a.W,String(e))};
return c}
m.getPlayerType=function(){return this.ba||(ow(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function rw(a){a.cancel();gw(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=ow(a);b&&(nw(a)||!uw(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.M&&Lu(pw(this),this.M);window.clearTimeout(this.Ib);this.aa=!1};
m.K=function(){rw(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){pr(b)}this.qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(C[this.i[a]]=null);this.qb=this.config=this.api=null;delete this.m;delete this.j;N.prototype.K.call(this)};
function uw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function pw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Ok(c||"","&")[b]}
function lw(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var yw={},zw="player_uid_"+(1E9*Math.random()>>>0);function Aw(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?jf(c):c;var e=zw+"_"+Ra(c),f=yw[e];if(f&&d)return Bw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new fw(c,e,a,b,void 0);yw[e]=f;nq("player-added",f.api);xe(f,function(){delete yw[f.getId()]});
return f.api}
function Bw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cw=null,Dw=null,Ew=null;function Fw(){Gw()}
function Hw(){Gw()}
function Gw(){var a=Cw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function hu(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Gh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Iw(){Cw&&Cw.sendAbandonmentPing&&Cw.sendAbandonmentPing();T("PL_ATT")&&Vv.dispose();for(var a=gi,b=0,c=Mu.length;b<c;b++)a.Fa(Mu[b]);Mu.length=0;Ku("//static.doubleclick.net/instream/ad_status.js");Nu=!1;Gk("DCLKSTAT",0);ve(Ew,Dw);Cw&&(Cw.removeEventListener("onVideoDataChange",Fw),Cw.destroy())}
;function Jw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&As(a,b);if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;b=g.location;a=Cc(a,e)+f;var h=void 0===h?Rh:h;a:{h=void 0===h?Rh:h;for(e=0;e<h.length;++e)if(f=h[e],f instanceof Ph&&f.re(a)){h=new Kb(a,Pb);break a}h=void 0}h=Gh(h||Qb);void 0!==h&&(b.href=h)}return!0}
;D("yt.setConfig",Gk);D("yt.config.set",Gk);D("yt.setMsg",Lr);D("yt.msgs.set",Lr);D("yt.logging.errors.log",pr);
D("writeEmbed",function(){var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}ds(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=T("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Bt("embed",["ol"]);c=T("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Tk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Bt("watch",["pbs","pbu","pbp"]);Cw=Aw(a,c);U("embeds_enable_server_driven_watch_again_on_youtube")&&!gu.h&&(gu.h=new gu);Cw.addEventListener("onVideoDataChange",Fw);Cw.addEventListener("onReady",Hw);U("embeds_enable_server_driven_watch_again_on_youtube")&&Cw.addEventListener("innertubeCommand",function(f){lu(gu.h,f)});
a=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?Ew=new Iv(Cw):T("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Dw=new Pv(window.parent,a,b),Ew=new Mv(Cw,Dw.connection));Ou();U("ytidb_create_logger_embed_killswitch")||pm();a={};mv.h||(mv.h=new mv);mv.h.install((a.flush_logs={callback:function(){Vq()}},a));
Lp();U("ytidb_clear_embedded_player")&&gi.ma(function(){var f,g;if(!fu){var h=xq(),k={Mc:eu,Hd:du};h.h.set(k.Mc,k);k={uc:{feedbackEndpoint:ss(Zt),modifyChannelNotificationPreferenceEndpoint:ss($t),playlistEditEndpoint:ss(au),subscribeEndpoint:ss(Xt),unsubscribeEndpoint:ss(Yt),webPlayerShareEntityServiceEndpoint:ss(bu)}};var l=ps(),n={};l&&(n.client_location=l);void 0===f&&(f=Fl());void 0===g&&(g=h.resolve(eu));Kt(k,g,f,n);f={Mc:Qt,Id:Jt.h};h.h.set(f.Mc,f);fu=h.resolve(Qt)}yu()})});
var Kw=Jk(function(){Ft();es()}),Lw=Jk(function(a){a.persisted||(Ft(),es())}),Mw=Jk(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Iw():a.persisted||Iw()}),Nw=Jk(Iw);
window.addEventListener?(window.addEventListener("load",Kw),window.addEventListener("pageshow",Lw),window.addEventListener("pagehide",Mw)):window.attachEvent&&(window.attachEvent("onload",Kw),window.attachEvent("onunload",Nw));D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Wv);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Xv);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Pu);
D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Jw);D("yt.util.activity.init",E("yt.util.activity.init")||$p);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||cq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||aq);}).call(this);
