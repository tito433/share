(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},Rs=[],En=()=>{},a1=()=>!1,Za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uu=t=>t.startsWith("onUpdate:"),it=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l1=Object.prototype.hasOwnProperty,De=(t,e)=>l1.call(t,e),fe=Array.isArray,Ss=t=>el(t)==="[object Map]",Jg=t=>el(t)==="[object Set]",_e=t=>typeof t=="function",We=t=>typeof t=="string",Xn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Zg=t=>($e(t)||_e(t))&&_e(t.then)&&_e(t.catch),em=Object.prototype.toString,el=t=>em.call(t),c1=t=>el(t).slice(8,-1),tm=t=>el(t)==="[object Object]",$u=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u1=/-(\w)/g,rn=tl(t=>t.replace(u1,(e,n)=>n?n.toUpperCase():"")),h1=/\B([A-Z])/g,ts=tl(t=>t.replace(h1,"-$1").toLowerCase()),nl=tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),ic=tl(t=>t?`on${nl(t)}`:""),yr=(t,e)=>!Object.is(t,e),oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},nm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},d1=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let sf;const rl=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?m1(r):sl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||$e(t))return t}const f1=/;(?![^(]*\))/g,p1=/:([^]+)/,g1=/\/\*[^]*?\*\//g;function m1(t){const e={};return t.replace(g1,"").split(f1).forEach(n=>{if(n){const r=n.split(p1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nr(t){let e="";if(We(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Nr(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",y1=Lu(_1);function rm(t){return!!t||t===""}const sm=t=>!!(t&&t.__v_isRef===!0),Tn=t=>We(t)?t:t==null?"":fe(t)||$e(t)&&(t.toString===em||!_e(t.toString))?sm(t)?Tn(t.value):JSON.stringify(t,im,2):String(t),im=(t,e)=>sm(e)?im(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[oc(r,i)+" =>"]=s,n),{})}:Jg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oc(n))}:Xn(e)?oc(e):$e(e)&&!fe(e)&&!tm(e)?String(e):e,oc=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class v1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function E1(){return Ft}let Ue;const ac=new WeakSet;class om{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ac.has(this)&&(ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),cm(this);const e=Ue,n=ln;Ue=this,ln=!0;try{return this.fn()}finally{um(this),Ue=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qu(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lc(this)&&this.run()}get dirty(){return Lc(this)}}let am=0,Ci,Pi;function lm(t,e=!1){if(t.flags|=8,e){t.next=Pi,Pi=t;return}t.next=Ci,Ci=t}function Bu(){am++}function ju(){if(--am>0)return;if(Pi){let e=Pi;for(Pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ci;){let e=Ci;for(Ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function cm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function um(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qu(r),T1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ji)||(t.globalVersion=ji,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=ln;Ue=t,ln=!0;try{cm(t);const s=t.fn(t._value);(e.version===0||yr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,ln=r,um(t),t.flags&=-3}}function qu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function T1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const dm=[];function jn(){dm.push(ln),ln=!1}function qn(){const t=dm.pop();ln=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let ji=0;class w1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!ln||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new w1(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,fm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,ji++,this.notify(e)}notify(e){Bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ju()}}}function fm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uc=new WeakMap,zr=Symbol(""),Fc=Symbol(""),qi=Symbol("");function Rt(t,e,n){if(ln&&Ue){let r=Uc.get(t);r||Uc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Hu),s.map=r,s.key=n),s.track()}}function Mn(t,e,n,r,s,i){const o=Uc.get(t);if(!o){ji++;return}const l=c=>{c&&c.trigger()};if(Bu(),e==="clear")o.forEach(l);else{const c=fe(t),u=c&&$u(n);if(c&&n==="length"){const d=Number(r);o.forEach((f,g)=>{(g==="length"||g===qi||!Xn(g)&&g>=d)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(zr)),Ss(t)&&l(o.get(Fc)));break;case"delete":c||(l(o.get(zr)),Ss(t)&&l(o.get(Fc)));break;case"set":Ss(t)&&l(o.get(zr));break}}ju()}function hs(t){const e=Pe(t);return e===t?e:(Rt(e,"iterate",qi),nn(t)?e:e.map(gt))}function il(t){return Rt(t=Pe(t),"iterate",qi),t}const I1={__proto__:null,[Symbol.iterator](){return lc(this,Symbol.iterator,gt)},concat(...t){return hs(this).concat(...t.map(e=>fe(e)?hs(e):e))},entries(){return lc(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return xn(this,"every",t,e,void 0,arguments)},filter(t,e){return xn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return xn(this,"find",t,e,gt,arguments)},findIndex(t,e){return xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return cc(this,"includes",t)},indexOf(...t){return cc(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return cc(this,"lastIndexOf",t)},map(t,e){return xn(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return xn(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return lc(this,"values",gt)}};function lc(t,e,n){const r=il(t),s=r[e]();return r!==t&&!nn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const A1=Array.prototype;function xn(t,e,n,r,s,i){const o=il(t),l=o!==t&&!nn(t),c=o[e];if(c!==A1[e]){const f=c.apply(t,i);return l?gt(f):f}let u=n;o!==t&&(l?u=function(f,g){return n.call(this,gt(f),g,t)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function af(t,e,n,r){const s=il(t);let i=n;return s!==t&&(nn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,gt(l),c,t)}),s[e](i,...r)}function cc(t,e,n){const r=Pe(t);Rt(r,"iterate",qi);const s=r[e](...n);return(s===-1||s===!1)&&Wu(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function _i(t,e,n=[]){jn(),Bu();const r=Pe(t)[e].apply(t,n);return ju(),qn(),r}const b1=Lu("__proto__,__v_isRef,__isVue"),pm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function R1(t){Xn(t)||(t=String(t));const e=Pe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class gm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?M1:vm:i?ym:_m).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=I1[n]))return c;if(n==="hasOwnProperty")return R1}const l=Reflect.get(e,n,St(e)?e:r);return(Xn(n)?pm.has(n):b1(n))||(s||Rt(e,"get",n),i)?l:St(l)?o&&$u(n)?l:l.value:$e(l)?s?Tm(l):Ks(l):l}}class mm extends gm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ar(i);if(!nn(r)&&!Ar(r)&&(i=Pe(i),r=Pe(r)),!fe(e)&&St(i)&&!St(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&$u(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,St(e)?e:s);return e===Pe(s)&&(o?yr(r,i)&&Mn(e,"set",n,r):Mn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xn(n)||!pm.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",fe(e)?"length":zr),Reflect.ownKeys(e)}}class S1 extends gm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const C1=new mm,P1=new S1,k1=new mm(!0);const $c=t=>t,zo=t=>Reflect.getPrototypeOf(t);function D1(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Ss(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?$c:e?Aa:gt;return!e&&Rt(i,"iterate",c?Fc:zr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:l?[d(f[0]),d(f[1])]:d(f),done:g}},[Symbol.iterator](){return this}}}}function Go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function N1(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(yr(s,l)&&Rt(o,"get",s),Rt(o,"get",l));const{has:c}=zo(o),u=e?$c:t?Aa:gt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(Pe(s),"iterate",zr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(yr(s,l)&&Rt(o,"has",s),Rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),u=e?$c:t?Aa:gt;return!t&&Rt(c,"iterate",zr),l.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return it(n,t?{add:Go("add"),set:Go("set"),delete:Go("delete"),clear:Go("clear")}:{add(s){!e&&!nn(s)&&!Ar(s)&&(s=Pe(s));const i=Pe(this);return zo(i).has.call(i,s)||(i.add(s),Mn(i,"add",s,s)),this},set(s,i){!e&&!nn(i)&&!Ar(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=zo(o);let u=l.call(o,s);u||(s=Pe(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?yr(i,d)&&Mn(o,"set",s,i):Mn(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=zo(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Mn(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=D1(s,t,e)}),n}function zu(t,e){const n=N1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const x1={get:zu(!1,!1)},O1={get:zu(!1,!0)},V1={get:zu(!0,!1)};const _m=new WeakMap,ym=new WeakMap,vm=new WeakMap,M1=new WeakMap;function L1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U1(t){return t.__v_skip||!Object.isExtensible(t)?0:L1(c1(t))}function Ks(t){return Ar(t)?t:Gu(t,!1,C1,x1,_m)}function Em(t){return Gu(t,!1,k1,O1,ym)}function Tm(t){return Gu(t,!0,P1,V1,vm)}function Gu(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=U1(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Cs(t){return Ar(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ar(t){return!!(t&&t.__v_isReadonly)}function nn(t){return!!(t&&t.__v_isShallow)}function Wu(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function F1(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&nm(t,"__v_skip",!0),t}const gt=t=>$e(t)?Ks(t):t,Aa=t=>$e(t)?Tm(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Le(t){return wm(t,!1)}function $1(t){return wm(t,!0)}function wm(t,e){return St(t)?t:new B1(t,e)}class B1{constructor(e,n){this.dep=new Hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||nn(e)||Ar(e);e=r?e:Pe(e),yr(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function ce(t){return St(t)?t.value:t}const j1={get:(t,e,n)=>e==="__v_raw"?t:ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Im(t){return Cs(t)?t:new Proxy(t,j1)}class q1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ji-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return lm(this,!0),!0}get value(){const e=this.dep.track();return hm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function H1(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new q1(r,s,n)}const Wo={},ba=new WeakMap;let jr;function z1(t,e=!1,n=jr){if(n){let r=ba.get(n);r||ba.set(n,r=[]),r.push(t)}}function G1(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=L=>s?L:nn(L)||s===!1||s===0?Ln(L,1):Ln(L);let d,f,g,m,S=!1,P=!1;if(St(t)?(f=()=>t.value,S=nn(t)):Cs(t)?(f=()=>u(t),S=!0):fe(t)?(P=!0,S=t.some(L=>Cs(L)||nn(L)),f=()=>t.map(L=>{if(St(L))return L.value;if(Cs(L))return u(L);if(_e(L))return c?c(L,2):L()})):_e(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){jn();try{g()}finally{qn()}}const L=jr;jr=d;try{return c?c(t,3,[m]):t(m)}finally{jr=L}}:f=En,e&&s){const L=f,ne=s===!0?1/0:s;f=()=>Ln(L(),ne)}const b=E1(),x=()=>{d.stop(),b&&b.active&&Fu(b.effects,d)};if(i&&e){const L=e;e=(...ne)=>{L(...ne),x()}}let O=P?new Array(t.length).fill(Wo):Wo;const M=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const ne=d.run();if(s||S||(P?ne.some((Z,R)=>yr(Z,O[R])):yr(ne,O))){g&&g();const Z=jr;jr=d;try{const R=[ne,O===Wo?void 0:P&&O[0]===Wo?[]:O,m];O=ne,c?c(e,3,R):e(...R)}finally{jr=Z}}}else d.run()};return l&&l(M),d=new om(f),d.scheduler=o?()=>o(M,!1):M,m=L=>z1(L,!1,d),g=d.onStop=()=>{const L=ba.get(d);if(L){if(c)c(L,4);else for(const ne of L)ne();ba.delete(d)}},e?r?M(!0):O=d.run():o?o(M.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Ln(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))Ln(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(Jg(t)||Ss(t))t.forEach(r=>{Ln(r,e,n)});else if(tm(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t,e,n,r){try{return r?t(...r):t()}catch(s){ol(s,e,n)}}function un(t,e,n,r){if(_e(t)){const s=fo(t,e,n,r);return s&&Zg(s)&&s.catch(i=>{ol(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function ol(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,c,u)===!1)return}l=l.parent}if(i){jn(),fo(i,null,10,[t,c,u]),qn();return}}W1(t,n,s,r,o)}function W1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let mn=-1;const Ps=[];let lr=null,ps=0;const Am=Promise.resolve();let Ra=null;function Ku(t){const e=Ra||Am;return t?e.then(this?t.bind(this):t):e}function K1(t){let e=mn+1,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=Hi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Qu(t){if(!(t.flags&1)){const e=Hi(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=Hi(n)?xt.push(t):xt.splice(K1(e),0,t),t.flags|=1,bm()}}function bm(){Ra||(Ra=Am.then(Sm))}function Q1(t){fe(t)?Ps.push(...t):lr&&t.id===-1?lr.splice(ps+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),bm()}function lf(t,e,n=mn+1){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rm(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>Hi(n)-Hi(r));if(Ps.length=0,lr){lr.push(...e);return}for(lr=e,ps=0;ps<lr.length;ps++){const n=lr[ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,ps=0}}const Hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sm(t){try{for(mn=0;mn<xt.length;mn++){const e=xt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<xt.length;mn++){const e=xt[mn];e&&(e.flags&=-2)}mn=-1,xt.length=0,Rm(),Ra=null,(xt.length||Ps.length)&&Sm()}}let lt=null,Cm=null;function Sa(t){const e=lt;return lt=t,Cm=t&&t.type.__scopeId||null,e}function Rn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Tf(-1);const i=Sa(e);let o;try{o=t(...s)}finally{Sa(i),r._d&&Tf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function X1(t,e){if(lt===null)return t;const n=dl(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(jn(),un(c,n,8,[t.el,l,t,e]),qn())}}const Pm=Symbol("_vte"),Y1=t=>t.__isTeleport,ki=t=>t&&(t.disabled||t.disabled===""),cf=t=>t&&(t.defer||t.defer===""),uf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,hf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Bc=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},km={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:d,pc:f,pbc:g,o:{insert:m,querySelector:S,createText:P,createComment:b}}=u,x=ki(e.props);let{shapeFlag:O,children:M,dynamicChildren:L}=e;if(t==null){const ne=e.el=P(""),Z=e.anchor=P("");m(ne,n,r),m(Z,n,r);const R=(y,I)=>{O&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),d(M,y,I,s,i,o,l,c))},v=()=>{const y=e.target=Bc(e.props,S),I=Nm(y,e,P,m);y&&(o!=="svg"&&uf(y)?o="svg":o!=="mathml"&&hf(y)&&(o="mathml"),x||(R(y,I),aa(e,!1)))};x&&(R(n,Z),aa(e,!0)),cf(e.props)?(e.el.__isMounted=!1,Nt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(cf(e.props)&&t.el.__isMounted===!1){Nt(()=>{km.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ne=e.anchor=t.anchor,Z=e.target=t.target,R=e.targetAnchor=t.targetAnchor,v=ki(t.props),y=v?n:Z,I=v?ne:R;if(o==="svg"||uf(Z)?o="svg":(o==="mathml"||hf(Z))&&(o="mathml"),L?(g(t.dynamicChildren,L,y,s,i,o,l),Zu(t,e,!0)):c||f(t,e,y,I,s,i,o,l,!1),x)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ko(e,n,ne,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=Bc(e.props,S);C&&Ko(e,C,null,u,0)}else v&&Ko(e,Z,R,u,1);aa(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:d,target:f,props:g}=t;if(f&&(s(u),s(d)),i&&s(c),o&16){const m=i||!ki(g);for(let S=0;S<l.length;S++){const P=l[S];r(P,e,n,m,!!P.dynamicChildren)}}},move:Ko,hydrate:J1};function Ko(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:d}=t,f=i===2;if(f&&r(o,e,n),(!f||ki(d))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);f&&r(l,e,n)}function J1(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:d}},f){const g=e.target=Bc(e.props,c);if(g){const m=ki(e.props),S=g._lpa||g.firstChild;if(e.shapeFlag&16)if(m)e.anchor=f(o(t),e,l(t),n,r,s,i),e.targetStart=S,e.targetAnchor=S&&o(S);else{e.anchor=o(t);let P=S;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")e.targetStart=P;else if(P.data==="teleport anchor"){e.targetAnchor=P,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}P=o(P)}e.targetAnchor||Nm(g,e,d,u),f(S&&o(S),e,g,n,r,s,i)}aa(e,m)}return e.anchor&&o(e.anchor)}const Dm=km;function aa(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Nm(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Pm]=i,t&&(r(s,t),r(i,t)),i}const ds=Symbol("_leaveCb"),Qo=Symbol("_enterCb");function Z1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po(()=>{t.isMounted=!0}),Xu(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],eE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en};function tE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function jc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:g,onLeave:m,onAfterLeave:S,onLeaveCancelled:P,onBeforeAppear:b,onAppear:x,onAfterAppear:O,onAppearCancelled:M}=e,L=String(t.key),ne=tE(n,t),Z=(y,I)=>{y&&un(y,r,9,I)},R=(y,I)=>{const C=I[1];Z(y,I),fe(y)?y.every(A=>A.length<=1)&&C():y.length<=1&&C()},v={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=b||c;else return;y[ds]&&y[ds](!0);const C=ne[L];C&&gs(t,C)&&C.el[ds]&&C.el[ds](),Z(I,[y])},enter(y){let I=u,C=d,A=f;if(!n.isMounted)if(i)I=x||u,C=O||d,A=M||f;else return;let E=!1;const xe=y[Qo]=et=>{E||(E=!0,et?Z(A,[y]):Z(C,[y]),v.delayedLeave&&v.delayedLeave(),y[Qo]=void 0)};I?R(I,[y,xe]):xe()},leave(y,I){const C=String(t.key);if(y[Qo]&&y[Qo](!0),n.isUnmounting)return I();Z(g,[y]);let A=!1;const E=y[ds]=xe=>{A||(A=!0,I(),xe?Z(P,[y]):Z(S,[y]),y[ds]=void 0,ne[C]===t&&delete ne[C])};ne[C]=t,m?R(m,[y,E]):E()},clone(y){return jc(y,e,n,r)}};return v}function zi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(xm(o.children,e,l))):(e||o.type!==Sn)&&r.push(l!=null?Kr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Lt(t,e){return _e(t)?it({name:t.name},e,{setup:t}):t}function Om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ca(t,e,n,r,s=!1){if(fe(t)){t.forEach((S,P)=>Ca(S,e&&(fe(e)?e[P]:e),n,r,s));return}if(ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ca(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?dl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,f=l.setupState,g=Pe(f),m=f===Me?()=>!1:S=>De(g,S);if(u!=null&&u!==c&&(We(u)?(d[u]=null,m(u)&&(f[u]=null)):St(u)&&(u.value=null)),_e(c))fo(c,l,12,[o,d]);else{const S=We(c),P=St(c);if(S||P){const b=()=>{if(t.f){const x=S?m(c)?f[c]:d[c]:c.value;s?fe(x)&&Fu(x,i):fe(x)?x.includes(i)||x.push(i):S?(d[c]=[i],m(c)&&(f[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,m(c)&&(f[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};o?(b.id=-1,Nt(b,n)):b()}}}rl().requestIdleCallback;rl().cancelIdleCallback;const ks=t=>!!t.type.__asyncLoader,Vm=t=>t.type.__isKeepAlive;function nE(t,e){Mm(t,"a",e)}function rE(t,e){Mm(t,"da",e)}function Mm(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(al(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vm(s.parent.vnode)&&sE(r,e,n,s),s=s.parent}}function sE(t,e,n,r){const s=al(e,t,r,!0);Um(()=>{Fu(r[e],s)},n)}function al(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{jn();const l=go(n),c=un(e,n,t,o);return l(),qn(),c});return r?s.unshift(i):s.push(i),i}}const Yn=t=>(e,n=_t)=>{(!Ki||t==="sp")&&al(t,(...r)=>e(...r),n)},iE=Yn("bm"),po=Yn("m"),oE=Yn("bu"),Lm=Yn("u"),Xu=Yn("bum"),Um=Yn("um"),aE=Yn("sp"),lE=Yn("rtg"),cE=Yn("rtc");function uE(t,e=_t){al("ec",t,e)}const Fm="components";function ll(t,e){return jm(Fm,t,!0,e)||t}const $m=Symbol.for("v-ndc");function Bm(t){return We(t)?jm(Fm,t,!1)||t:t||$m}function jm(t,e,n=!0,r=!1){const s=lt||_t;if(s){const i=s.type;{const l=YE(i,!1);if(l&&(l===e||l===rn(e)||l===nl(rn(e))))return i}const o=df(s[t]||i[t],e)||df(s.appContext[t],e);return!o&&r?i:o}}function df(t,e){return t&&(t[e]||t[rn(e)]||t[nl(rn(e))])}function Qs(t,e,n,r){let s;const i=n,o=fe(t);if(o||We(t)){const l=o&&Cs(t);let c=!1,u=!1;l&&(c=!nn(t),u=Ar(t),t=il(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(c?u?Aa(gt(t[d])):gt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function qc(t,e,n={},r,s){if(lt.ce||lt.parent&&ks(lt.parent)&&lt.parent.ce)return e!=="default"&&(n.name=e),Y(),mt(Ne,null,[he("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),Y();const o=i&&qm(i(n)),l=n.key||o&&o.key,c=mt(Ne,{key:(l&&!Xn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function qm(t){return t.some(e=>Wi(e)?!(e.type===Sn||e.type===Ne&&!qm(e.children)):!0)?t:null}const Hc=t=>t?l_(t)?dl(t):Hc(t.parent):null,Di=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hc(t.parent),$root:t=>Hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zm(t),$forceUpdate:t=>t.f||(t.f=()=>{Qu(t.update)}),$nextTick:t=>t.n||(t.n=Ku.bind(t.proxy)),$watch:t=>DE.bind(t)}),uc=(t,e)=>t!==Me&&!t.__isScriptSetup&&De(t,e),hE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(uc(r,e))return o[e]=1,r[e];if(s!==Me&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Me&&De(n,e))return o[e]=4,n[e];zc&&(o[e]=0)}}const d=Di[e];let f,g;if(d)return e==="$attrs"&&Rt(t.attrs,"get",""),d(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Me&&De(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,De(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return uc(s,e)?(s[e]=n,!0):r!==Me&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&De(t,o)||uc(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(Di,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ff(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zc=!0;function dE(t){const e=zm(t),n=t.proxy,r=t.ctx;zc=!1,e.beforeCreate&&pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:g,beforeUpdate:m,updated:S,activated:P,deactivated:b,beforeDestroy:x,beforeUnmount:O,destroyed:M,unmounted:L,render:ne,renderTracked:Z,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:C,components:A,directives:E,filters:xe}=e;if(u&&fE(u,r,null),o)for(const Ie in o){const Ee=o[Ie];_e(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);$e(Ie)&&(t.data=Ks(Ie))}if(zc=!0,i)for(const Ie in i){const Ee=i[Ie],Ht=_e(Ee)?Ee.bind(n,n):_e(Ee.get)?Ee.get.bind(n,n):En,sn=!_e(Ee)&&_e(Ee.set)?Ee.set.bind(n):En,Yt=je({get:Ht,set:sn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:ze=>Yt.value=ze})}if(l)for(const Ie in l)Hm(l[Ie],r,n,Ie);if(c){const Ie=_e(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{la(Ee,Ie[Ee])})}d&&pf(d,t,"c");function He(Ie,Ee){fe(Ee)?Ee.forEach(Ht=>Ie(Ht.bind(n))):Ee&&Ie(Ee.bind(n))}if(He(iE,f),He(po,g),He(oE,m),He(Lm,S),He(nE,P),He(rE,b),He(uE,v),He(cE,Z),He(lE,R),He(Xu,O),He(Um,L),He(aE,y),fe(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:Ht=>n[Ee]=Ht})})}else t.exposed||(t.exposed={});ne&&t.render===En&&(t.render=ne),C!=null&&(t.inheritAttrs=C),A&&(t.components=A),E&&(t.directives=E),y&&Om(t)}function fE(t,e,n=En){fe(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=wn(s.from||r,s.default,!0):i=wn(s.from||r):i=wn(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pf(t,e,n){un(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hm(t,e,n,r){let s=r.includes(".")?r_(n,r):()=>n[r];if(We(t)){const i=e[t];_e(i)&&Ns(s,i)}else if(_e(t))Ns(s,t.bind(n));else if($e(t))if(fe(t))t.forEach(i=>Hm(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Ns(s,i,t)}}function zm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Pa(c,u,o,!0)),Pa(c,e,o)),$e(e)&&i.set(e,c),c}function Pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pa(t,i,n,!0),s&&s.forEach(o=>Pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=pE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const pE={data:gf,props:mf,emits:mf,methods:Ti,computed:Ti,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ti,directives:Ti,watch:mE,provide:gf,inject:gE};function gf(t,e){return e?t?function(){return it(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function gE(t,e){return Ti(Gc(t),Gc(e))}function Gc(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ti(t,e){return t?it(Object.create(null),t,e):e}function mf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:it(Object.create(null),ff(t),ff(e??{})):e}function mE(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function Gm(){return{app:null,config:{isNativeTag:a1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _E=0;function yE(t,e){return function(r,s=null){_e(r)||(r=it({},r)),s!=null&&!$e(s)&&(s=null);const i=Gm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:_E++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ZE,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...f)):_e(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,g){if(!c){const m=u._ceVNode||he(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,d,g),c=!0,u._container=d,d.__vue_app__=u,dl(m.component)}},onUnmount(d){l.push(d)},unmount(){c&&(un(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=Ds;Ds=u;try{return d()}finally{Ds=f}}};return u}}let Ds=null;function la(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function wn(t,e,n=!1){const r=_t||lt;if(r||Ds){let s=Ds?Ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const Wm={},Km=()=>Object.create(Wm),Qm=t=>Object.getPrototypeOf(t)===Wm;function vE(t,e,n,r=!1){const s={},i=Km();t.propsDefaults=Object.create(null),Xm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Em(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function EE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let g=d[f];if(cl(t.emitsOptions,g))continue;const m=e[g];if(c)if(De(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const S=rn(g);s[S]=Wc(c,l,S,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{Xm(t,e,s,i)&&(u=!0);let d;for(const f in l)(!e||!De(e,f)&&((d=ts(f))===f||!De(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Wc(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!De(e,f))&&(delete i[f],u=!0)}u&&Mn(t.attrs,"set","")}function Xm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Si(c))continue;const u=e[c];let d;s&&De(s,d=rn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:cl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=l||Me;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Wc(s,c,f,u[f],t,!De(u,f))}}return o}function Wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=go(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ts(n))&&(r=!0))}return r}const TE=new WeakMap;function Ym(t,e,n=!1){const r=n?TE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=f=>{c=!0;const[g,m]=Ym(f,e,!0);it(o,g),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return $e(t)&&r.set(t,Rs),Rs;if(fe(i))for(let d=0;d<i.length;d++){const f=rn(i[d]);_f(f)&&(o[f]=Me)}else if(i)for(const d in i){const f=rn(d);if(_f(f)){const g=i[d],m=o[f]=fe(g)||_e(g)?{type:g}:it({},g),S=m.type;let P=!1,b=!0;if(fe(S))for(let x=0;x<S.length;++x){const O=S[x],M=_e(O)&&O.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(b=!1)}else P=_e(S)&&S.name==="Boolean";m[0]=P,m[1]=b,(P||De(m,"default"))&&l.push(f)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function _f(t){return t[0]!=="$"&&!Si(t)}const Yu=t=>t[0]==="_"||t==="$stable",Ju=t=>fe(t)?t.map(yn):[yn(t)],wE=(t,e,n)=>{if(e._n)return e;const r=Rn((...s)=>Ju(e(...s)),n);return r._c=!1,r},Jm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yu(s))continue;const i=t[s];if(_e(i))e[s]=wE(s,i,r);else if(i!=null){const o=Ju(i);e[s]=()=>o}}},Zm=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},e_=(t,e,n)=>{for(const r in e)(n||!Yu(r))&&(t[r]=e[r])},IE=(t,e,n)=>{const r=t.slots=Km();if(t.vnode.shapeFlag&32){const s=e._;s?(e_(r,e,n),n&&nm(r,"_",s,!0)):Jm(e,r)}else e&&Zm(t,e)},AE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:e_(s,e,n):(i=!e.$stable,Jm(e,s)),o=e}else e&&(Zm(t,e),o={default:1});if(i)for(const l in s)!Yu(l)&&o[l]==null&&delete s[l]},Nt=UE;function bE(t){return RE(t)}function RE(t,e){const n=rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:g,setScopeId:m=En,insertStaticContent:S}=t,P=(T,w,k,F=null,j=null,$=null,X=void 0,G=null,z=!!w.dynamicChildren)=>{if(T===w)return;T&&!gs(T,w)&&(F=U(T),ze(T,j,$,!0),T=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:H,ref:ae,shapeFlag:Q}=w;switch(H){case ul:b(T,w,k,F);break;case Sn:x(T,w,k,F);break;case ca:T==null&&O(w,k,F,X);break;case Ne:A(T,w,k,F,j,$,X,G,z);break;default:Q&1?ne(T,w,k,F,j,$,X,G,z):Q&6?E(T,w,k,F,j,$,X,G,z):(Q&64||Q&128)&&H.process(T,w,k,F,j,$,X,G,z,re)}ae!=null&&j&&Ca(ae,T&&T.ref,$,w||T,!w)},b=(T,w,k,F)=>{if(T==null)r(w.el=l(w.children),k,F);else{const j=w.el=T.el;w.children!==T.children&&u(j,w.children)}},x=(T,w,k,F)=>{T==null?r(w.el=c(w.children||""),k,F):w.el=T.el},O=(T,w,k,F)=>{[T.el,T.anchor]=S(T.children,w,k,F,T.el,T.anchor)},M=({el:T,anchor:w},k,F)=>{let j;for(;T&&T!==w;)j=g(T),r(T,k,F),T=j;r(w,k,F)},L=({el:T,anchor:w})=>{let k;for(;T&&T!==w;)k=g(T),s(T),T=k;s(w)},ne=(T,w,k,F,j,$,X,G,z)=>{w.type==="svg"?X="svg":w.type==="math"&&(X="mathml"),T==null?Z(w,k,F,j,$,X,G,z):y(T,w,j,$,X,G,z)},Z=(T,w,k,F,j,$,X,G)=>{let z,H;const{props:ae,shapeFlag:Q,transition:se,dirs:pe}=T;if(z=T.el=o(T.type,$,ae&&ae.is,ae),Q&8?d(z,T.children):Q&16&&v(T.children,z,null,F,j,hc(T,$),X,G),pe&&Fr(T,null,F,"created"),R(z,T,T.scopeId,X,F),ae){for(const ye in ae)ye!=="value"&&!Si(ye)&&i(z,ye,null,ae[ye],$,F);"value"in ae&&i(z,"value",null,ae.value,$),(H=ae.onVnodeBeforeMount)&&pn(H,F,T)}pe&&Fr(T,null,F,"beforeMount");const ue=SE(j,se);ue&&se.beforeEnter(z),r(z,w,k),((H=ae&&ae.onVnodeMounted)||ue||pe)&&Nt(()=>{H&&pn(H,F,T),ue&&se.enter(z),pe&&Fr(T,null,F,"mounted")},j)},R=(T,w,k,F,j)=>{if(k&&m(T,k),F)for(let $=0;$<F.length;$++)m(T,F[$]);if(j){let $=j.subTree;if(w===$||i_($.type)&&($.ssContent===w||$.ssFallback===w)){const X=j.vnode;R(T,X,X.scopeId,X.slotScopeIds,j.parent)}}},v=(T,w,k,F,j,$,X,G,z=0)=>{for(let H=z;H<T.length;H++){const ae=T[H]=G?cr(T[H]):yn(T[H]);P(null,ae,w,k,F,j,$,X,G)}},y=(T,w,k,F,j,$,X)=>{const G=w.el=T.el;let{patchFlag:z,dynamicChildren:H,dirs:ae}=w;z|=T.patchFlag&16;const Q=T.props||Me,se=w.props||Me;let pe;if(k&&$r(k,!1),(pe=se.onVnodeBeforeUpdate)&&pn(pe,k,w,T),ae&&Fr(w,T,k,"beforeUpdate"),k&&$r(k,!0),(Q.innerHTML&&se.innerHTML==null||Q.textContent&&se.textContent==null)&&d(G,""),H?I(T.dynamicChildren,H,G,k,F,hc(w,j),$):X||Ee(T,w,G,null,k,F,hc(w,j),$,!1),z>0){if(z&16)C(G,Q,se,k,j);else if(z&2&&Q.class!==se.class&&i(G,"class",null,se.class,j),z&4&&i(G,"style",Q.style,se.style,j),z&8){const ue=w.dynamicProps;for(let ye=0;ye<ue.length;ye++){const Ae=ue[ye],Et=Q[Ae],ut=se[Ae];(ut!==Et||Ae==="value")&&i(G,Ae,Et,ut,j,k)}}z&1&&T.children!==w.children&&d(G,w.children)}else!X&&H==null&&C(G,Q,se,k,j);((pe=se.onVnodeUpdated)||ae)&&Nt(()=>{pe&&pn(pe,k,w,T),ae&&Fr(w,T,k,"updated")},F)},I=(T,w,k,F,j,$,X)=>{for(let G=0;G<w.length;G++){const z=T[G],H=w[G],ae=z.el&&(z.type===Ne||!gs(z,H)||z.shapeFlag&198)?f(z.el):k;P(z,H,ae,null,F,j,$,X,!0)}},C=(T,w,k,F,j)=>{if(w!==k){if(w!==Me)for(const $ in w)!Si($)&&!($ in k)&&i(T,$,w[$],null,j,F);for(const $ in k){if(Si($))continue;const X=k[$],G=w[$];X!==G&&$!=="value"&&i(T,$,G,X,j,F)}"value"in k&&i(T,"value",w.value,k.value,j)}},A=(T,w,k,F,j,$,X,G,z)=>{const H=w.el=T?T.el:l(""),ae=w.anchor=T?T.anchor:l("");let{patchFlag:Q,dynamicChildren:se,slotScopeIds:pe}=w;pe&&(G=G?G.concat(pe):pe),T==null?(r(H,k,F),r(ae,k,F),v(w.children||[],k,ae,j,$,X,G,z)):Q>0&&Q&64&&se&&T.dynamicChildren?(I(T.dynamicChildren,se,k,j,$,X,G),(w.key!=null||j&&w===j.subTree)&&Zu(T,w,!0)):Ee(T,w,k,ae,j,$,X,G,z)},E=(T,w,k,F,j,$,X,G,z)=>{w.slotScopeIds=G,T==null?w.shapeFlag&512?j.ctx.activate(w,k,F,X,z):xe(w,k,F,j,$,X,z):et(T,w,z)},xe=(T,w,k,F,j,$,X)=>{const G=T.component=zE(T,F,j);if(Vm(T)&&(G.ctx.renderer=re),WE(G,!1,X),G.asyncDep){if(j&&j.registerDep(G,He,X),!T.el){const z=G.subTree=he(Sn);x(null,z,w,k)}}else He(G,T,w,k,j,$,X)},et=(T,w,k)=>{const F=w.component=T.component;if(ME(T,w,k))if(F.asyncDep&&!F.asyncResolved){Ie(F,w,k);return}else F.next=w,F.update();else w.el=T.el,F.vnode=w},He=(T,w,k,F,j,$,X)=>{const G=()=>{if(T.isMounted){let{next:Q,bu:se,u:pe,parent:ue,vnode:ye}=T;{const Tt=t_(T);if(Tt){Q&&(Q.el=ye.el,Ie(T,Q,X)),Tt.asyncDep.then(()=>{T.isUnmounted||G()});return}}let Ae=Q,Et;$r(T,!1),Q?(Q.el=ye.el,Ie(T,Q,X)):Q=ye,se&&oa(se),(Et=Q.props&&Q.props.onVnodeBeforeUpdate)&&pn(Et,ue,Q,ye),$r(T,!0);const ut=vf(T),Jt=T.subTree;T.subTree=ut,P(Jt,ut,f(Jt.el),U(Jt),T,j,$),Q.el=ut.el,Ae===null&&LE(T,ut.el),pe&&Nt(pe,j),(Et=Q.props&&Q.props.onVnodeUpdated)&&Nt(()=>pn(Et,ue,Q,ye),j)}else{let Q;const{el:se,props:pe}=w,{bm:ue,m:ye,parent:Ae,root:Et,type:ut}=T,Jt=ks(w);$r(T,!1),ue&&oa(ue),!Jt&&(Q=pe&&pe.onVnodeBeforeMount)&&pn(Q,Ae,w),$r(T,!0);{Et.ce&&Et.ce._injectChildStyle(ut);const Tt=T.subTree=vf(T);P(null,Tt,k,F,T,j,$),w.el=Tt.el}if(ye&&Nt(ye,j),!Jt&&(Q=pe&&pe.onVnodeMounted)){const Tt=w;Nt(()=>pn(Q,Ae,Tt),j)}(w.shapeFlag&256||Ae&&ks(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&T.a&&Nt(T.a,j),T.isMounted=!0,w=k=F=null}};T.scope.on();const z=T.effect=new om(G);T.scope.off();const H=T.update=z.run.bind(z),ae=T.job=z.runIfDirty.bind(z);ae.i=T,ae.id=T.uid,z.scheduler=()=>Qu(ae),$r(T,!0),H()},Ie=(T,w,k)=>{w.component=T;const F=T.vnode.props;T.vnode=w,T.next=null,EE(T,w.props,F,k),AE(T,w.children,k),jn(),lf(T),qn()},Ee=(T,w,k,F,j,$,X,G,z=!1)=>{const H=T&&T.children,ae=T?T.shapeFlag:0,Q=w.children,{patchFlag:se,shapeFlag:pe}=w;if(se>0){if(se&128){sn(H,Q,k,F,j,$,X,G,z);return}else if(se&256){Ht(H,Q,k,F,j,$,X,G,z);return}}pe&8?(ae&16&&Ut(H,j,$),Q!==H&&d(k,Q)):ae&16?pe&16?sn(H,Q,k,F,j,$,X,G,z):Ut(H,j,$,!0):(ae&8&&d(k,""),pe&16&&v(Q,k,F,j,$,X,G,z))},Ht=(T,w,k,F,j,$,X,G,z)=>{T=T||Rs,w=w||Rs;const H=T.length,ae=w.length,Q=Math.min(H,ae);let se;for(se=0;se<Q;se++){const pe=w[se]=z?cr(w[se]):yn(w[se]);P(T[se],pe,k,null,j,$,X,G,z)}H>ae?Ut(T,j,$,!0,!1,Q):v(w,k,F,j,$,X,G,z,Q)},sn=(T,w,k,F,j,$,X,G,z)=>{let H=0;const ae=w.length;let Q=T.length-1,se=ae-1;for(;H<=Q&&H<=se;){const pe=T[H],ue=w[H]=z?cr(w[H]):yn(w[H]);if(gs(pe,ue))P(pe,ue,k,null,j,$,X,G,z);else break;H++}for(;H<=Q&&H<=se;){const pe=T[Q],ue=w[se]=z?cr(w[se]):yn(w[se]);if(gs(pe,ue))P(pe,ue,k,null,j,$,X,G,z);else break;Q--,se--}if(H>Q){if(H<=se){const pe=se+1,ue=pe<ae?w[pe].el:F;for(;H<=se;)P(null,w[H]=z?cr(w[H]):yn(w[H]),k,ue,j,$,X,G,z),H++}}else if(H>se)for(;H<=Q;)ze(T[H],j,$,!0),H++;else{const pe=H,ue=H,ye=new Map;for(H=ue;H<=se;H++){const ht=w[H]=z?cr(w[H]):yn(w[H]);ht.key!=null&&ye.set(ht.key,H)}let Ae,Et=0;const ut=se-ue+1;let Jt=!1,Tt=0;const er=new Array(ut);for(H=0;H<ut;H++)er[H]=0;for(H=pe;H<=Q;H++){const ht=T[H];if(Et>=ut){ze(ht,j,$,!0);continue}let Zt;if(ht.key!=null)Zt=ye.get(ht.key);else for(Ae=ue;Ae<=se;Ae++)if(er[Ae-ue]===0&&gs(ht,w[Ae])){Zt=Ae;break}Zt===void 0?ze(ht,j,$,!0):(er[Zt-ue]=H+1,Zt>=Tt?Tt=Zt:Jt=!0,P(ht,w[Zt],k,null,j,$,X,G,z),Et++)}const si=Jt?CE(er):Rs;for(Ae=si.length-1,H=ut-1;H>=0;H--){const ht=ue+H,Zt=w[ht],Po=ht+1<ae?w[ht+1].el:F;er[H]===0?P(null,Zt,k,Po,j,$,X,G,z):Jt&&(Ae<0||H!==si[Ae]?Yt(Zt,k,Po,2):Ae--)}}},Yt=(T,w,k,F,j=null)=>{const{el:$,type:X,transition:G,children:z,shapeFlag:H}=T;if(H&6){Yt(T.component.subTree,w,k,F);return}if(H&128){T.suspense.move(w,k,F);return}if(H&64){X.move(T,w,k,re);return}if(X===Ne){r($,w,k);for(let Q=0;Q<z.length;Q++)Yt(z[Q],w,k,F);r(T.anchor,w,k);return}if(X===ca){M(T,w,k);return}if(F!==2&&H&1&&G)if(F===0)G.beforeEnter($),r($,w,k),Nt(()=>G.enter($),j);else{const{leave:Q,delayLeave:se,afterLeave:pe}=G,ue=()=>{T.ctx.isUnmounted?s($):r($,w,k)},ye=()=>{Q($,()=>{ue(),pe&&pe()})};se?se($,ue,ye):ye()}else r($,w,k)},ze=(T,w,k,F=!1,j=!1)=>{const{type:$,props:X,ref:G,children:z,dynamicChildren:H,shapeFlag:ae,patchFlag:Q,dirs:se,cacheIndex:pe}=T;if(Q===-2&&(j=!1),G!=null&&(jn(),Ca(G,null,k,T,!0),qn()),pe!=null&&(w.renderCache[pe]=void 0),ae&256){w.ctx.deactivate(T);return}const ue=ae&1&&se,ye=!ks(T);let Ae;if(ye&&(Ae=X&&X.onVnodeBeforeUnmount)&&pn(Ae,w,T),ae&6)fn(T.component,k,F);else{if(ae&128){T.suspense.unmount(k,F);return}ue&&Fr(T,null,w,"beforeUnmount"),ae&64?T.type.remove(T,w,k,re,F):H&&!H.hasOnce&&($!==Ne||Q>0&&Q&64)?Ut(H,w,k,!1,!0):($===Ne&&Q&384||!j&&ae&16)&&Ut(z,w,k),F&&Ge(T)}(ye&&(Ae=X&&X.onVnodeUnmounted)||ue)&&Nt(()=>{Ae&&pn(Ae,w,T),ue&&Fr(T,null,w,"unmounted")},k)},Ge=T=>{const{type:w,el:k,anchor:F,transition:j}=T;if(w===Ne){Zn(k,F);return}if(w===ca){L(T);return}const $=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:X,delayLeave:G}=j,z=()=>X(k,$);G?G(T.el,$,z):z()}else $()},Zn=(T,w)=>{let k;for(;T!==w;)k=g(T),s(T),T=k;s(w)},fn=(T,w,k)=>{const{bum:F,scope:j,job:$,subTree:X,um:G,m:z,a:H,parent:ae,slots:{__:Q}}=T;yf(z),yf(H),F&&oa(F),ae&&fe(Q)&&Q.forEach(se=>{ae.renderCache[se]=void 0}),j.stop(),$&&($.flags|=8,ze(X,T,w,k)),G&&Nt(G,w),Nt(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ut=(T,w,k,F=!1,j=!1,$=0)=>{for(let X=$;X<T.length;X++)ze(T[X],w,k,F,j)},U=T=>{if(T.shapeFlag&6)return U(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=g(T.anchor||T.el),k=w&&w[Pm];return k?g(k):w};let ee=!1;const J=(T,w,k)=>{T==null?w._vnode&&ze(w._vnode,null,null,!0):P(w._vnode||null,T,w,null,null,null,k),w._vnode=T,ee||(ee=!0,lf(),Rm(),ee=!1)},re={p:P,um:ze,m:Yt,r:Ge,mt:xe,mc:v,pc:Ee,pbc:I,n:U,o:t};return{render:J,hydrate:void 0,createApp:yE(J)}}function hc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function SE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zu(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Zu(o,l)),l.type===ul&&(l.el=o.el),l.type===Sn&&!l.el&&(l.el=o.el)}}function CE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function t_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:t_(e)}function yf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const PE=Symbol.for("v-scx"),kE=()=>wn(PE);function Ns(t,e,n){return n_(t,e,n)}function n_(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=it({},n),c=e&&r||!e&&i!=="post";let u;if(Ki){if(i==="sync"){const m=kE();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=En,m.resume=En,m.pause=En,m}}const d=_t;l.call=(m,S,P)=>un(m,d,S,P);let f=!1;i==="post"?l.scheduler=m=>{Nt(m,d&&d.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(m,S)=>{S?m():Qu(m)}),l.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const g=G1(t,e,l);return Ki&&(u?u.push(g):c&&g()),g}function DE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?r_(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=go(this),l=n_(s,i.bind(r),n);return o(),l}function r_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const NE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function xE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&NE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>We(d)?d.trim():d)),o.number&&(s=n.map(Mc)));let l,c=r[l=ic(e)]||r[l=ic(rn(e))];!c&&i&&(c=r[l=ic(ts(e))]),c&&un(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,un(u,t,6,s)}}function s_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=s_(u,e,!0);d&&(l=!0,it(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):it(o,i),$e(t)&&r.set(t,o),o)}function cl(t,e){return!t||!Za(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,ts(e))||De(t,e))}function vf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:f,data:g,setupState:m,ctx:S,inheritAttrs:P}=t,b=Sa(t);let x,O;try{if(n.shapeFlag&4){const L=s||r,ne=L;x=yn(u.call(ne,L,d,f,m,g,S)),O=l}else{const L=e;x=yn(L.length>1?L(f,{attrs:l,slots:o,emit:c}):L(f,null)),O=e.props?l:OE(l)}}catch(L){Ni.length=0,ol(L,t,1),x=he(Sn)}let M=x;if(O&&P!==!1){const L=Object.keys(O),{shapeFlag:ne}=M;L.length&&ne&7&&(i&&L.some(Uu)&&(O=VE(O,i)),M=Kr(M,O,!1,!0))}return n.dirs&&(M=Kr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&zi(M,n.transition),x=M,Sa(b),x}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Za(n))&&((e||(e={}))[n]=t[n]);return e},VE=(t,e)=>{const n={};for(const r in t)(!Uu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ME(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ef(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const g=d[f];if(o[g]!==r[g]&&!cl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ef(r,o,u):!0:!!o;return!1}function Ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cl(n,i))return!0}return!1}function LE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const i_=t=>t.__isSuspense;function UE(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):Q1(t)}const Ne=Symbol.for("v-fgt"),ul=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),ca=Symbol.for("v-stc"),Ni=[];let Gt=null;function Y(t=!1){Ni.push(Gt=t?null:[])}function FE(){Ni.pop(),Gt=Ni[Ni.length-1]||null}let Gi=1;function Tf(t,e=!1){Gi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function o_(t){return t.dynamicChildren=Gi>0?Gt||Rs:null,FE(),Gi>0&&Gt&&Gt.push(t),t}function ie(t,e,n,r,s,i){return o_(q(t,e,n,r,s,i,!0))}function mt(t,e,n,r,s){return o_(he(t,e,n,r,s,!0))}function Wi(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const a_=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||St(t)||_e(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&a_(e),ref:e&&ua(e),scopeId:Cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(eh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Gi>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const he=$E;function $E(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$m)&&(t=Sn),Wi(t)){const l=Kr(t,e,!0);return n&&eh(l,n),Gi>0&&!i&&Gt&&(l.shapeFlag&6?Gt[Gt.indexOf(t)]=l:Gt.push(l)),l.patchFlag=-2,l}if(JE(t)&&(t=t.__vccOpts),e){e=BE(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=Nr(l)),$e(c)&&(Wu(c)&&!fe(c)&&(c=it({},c)),e.style=sl(c))}const o=We(t)?1:i_(t)?128:Y1(t)?64:$e(t)?4:_e(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function BE(t){return t?Wu(t)||Qm(t)?it({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?jE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&a_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(ua(e)):[i,ua(e)]:ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&zi(d,c.clone(d)),d}function Ot(t=" ",e=0){return he(ul,null,t,e)}function hl(t,e){const n=he(ca,null,t);return n.staticCount=e,n}function Mt(t="",e=!1){return e?(Y(),mt(Sn,null,t)):he(Sn,null,t)}function yn(t){return t==null||typeof t=="boolean"?he(Sn):fe(t)?he(Ne,null,t.slice()):Wi(t)?cr(t):he(ul,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function eh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),eh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qm(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function jE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nr([e.class,r.class]));else if(s==="style")e.style=sl([e.style,r.style]);else if(Za(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){un(t,e,7,[n,r])}const qE=Gm();let HE=0;function zE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qE,i={uid:HE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new v1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ym(r,s),emitsOptions:s_(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xE.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const GE=()=>_t||lt;let ka,Kc;{const t=rl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),Kc=e("__VUE_SSR_SETTERS__",n=>Ki=n)}const go=t=>{const e=_t;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},wf=()=>{_t&&_t.scope.off(),ka(null)};function l_(t){return t.vnode.shapeFlag&4}let Ki=!1;function WE(t,e=!1,n=!1){e&&Kc(e);const{props:r,children:s}=t.vnode,i=l_(t);vE(t,r,i,e),IE(t,s,n||e);const o=i?KE(t,e):void 0;return e&&Kc(!1),o}function KE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hE);const{setup:r}=n;if(r){jn();const s=t.setupContext=r.length>1?XE(t):null,i=go(t),o=fo(r,t,0,[t.props,s]),l=Zg(o);if(qn(),i(),(l||t.sp)&&!ks(t)&&Om(t),l){if(o.then(wf,wf),e)return o.then(c=>{If(t,c)}).catch(c=>{ol(c,t,0)});t.asyncDep=o}else If(t,o)}else c_(t)}function If(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=Im(e)),c_(t)}function c_(t,e,n){const r=t.type;t.render||(t.render=r.render||En);{const s=go(t);jn();try{dE(t)}finally{qn(),s()}}}const QE={get(t,e){return Rt(t,"get",""),t[e]}};function XE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,QE),slots:t.slots,emit:t.emit,expose:e}}function dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Im(F1(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function YE(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function JE(t){return _e(t)&&"__vccOpts"in t}const je=(t,e)=>H1(t,e,Ki);function u_(t,e,n){const r=arguments.length;return r===2?$e(e)&&!fe(e)?Wi(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wi(n)&&(n=[n]),he(t,e,n))}const ZE="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qc;const Af=typeof window<"u"&&window.trustedTypes;if(Af)try{Qc=Af.createPolicy("vue",{createHTML:t=>t})}catch{}const h_=Qc?t=>Qc.createHTML(t):t=>t,eT="http://www.w3.org/2000/svg",tT="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,bf=Vn&&Vn.createElement("template"),nT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Vn.createElementNS(eT,t):e==="mathml"?Vn.createElementNS(tT,t):n?Vn.createElement(t,{is:n}):Vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bf.innerHTML=h_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sr="transition",yi="animation",Us=Symbol("_vtc"),d_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rT=it({},eE,d_),Br=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function sT(t){const e={};for(const A in t)A in d_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,S=iT(s),P=S&&S[0],b=S&&S[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:M,onLeave:L,onLeaveCancelled:ne,onBeforeAppear:Z=x,onAppear:R=O,onAppearCancelled:v=M}=e,y=(A,E,xe,et)=>{A._enterCancelled=et,ar(A,E?d:l),ar(A,E?u:o),xe&&xe()},I=(A,E)=>{A._isLeaving=!1,ar(A,f),ar(A,m),ar(A,g),E&&E()},C=A=>(E,xe)=>{const et=A?R:O,He=()=>y(E,A,xe);Br(et,[E,He]),Sf(()=>{ar(E,A?c:i),gn(E,A?d:l),Rf(et)||Cf(E,r,P,He)})};return it(e,{onBeforeEnter(A){Br(x,[A]),gn(A,i),gn(A,o)},onBeforeAppear(A){Br(Z,[A]),gn(A,c),gn(A,u)},onEnter:C(!1),onAppear:C(!0),onLeave(A,E){A._isLeaving=!0;const xe=()=>I(A,E);gn(A,f),A._enterCancelled?(gn(A,g),Xc()):(Xc(),gn(A,g)),Sf(()=>{A._isLeaving&&(ar(A,f),gn(A,m),Rf(L)||Cf(A,r,b,xe))}),Br(L,[A,xe])},onEnterCancelled(A){y(A,!1,void 0,!0),Br(M,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Br(v,[A])},onLeaveCancelled(A){I(A),Br(ne,[A])}})}function iT(t){if(t==null)return null;if($e(t))return[dc(t.enter),dc(t.leave)];{const e=dc(t);return[e,e]}}function dc(t){return d1(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function Sf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let oT=0;function Cf(t,e,n,r){const s=t._endId=++oT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=f_(t,e);if(!o)return r();const u=o+"end";let d=0;const f=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),t.addEventListener(u,g)}function f_(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${sr}Delay`),i=r(`${sr}Duration`),o=Pf(s,i),l=r(`${yi}Delay`),c=r(`${yi}Duration`),u=Pf(l,c);let d=null,f=0,g=0;e===sr?o>0&&(d=sr,f=o,g=i.length):e===yi?u>0&&(d=yi,f=u,g=c.length):(f=Math.max(o,u),d=f>0?o>u?sr:yi:null,g=d?d===sr?i.length:c.length:0);const m=d===sr&&/\b(transform|all)(,|$)/.test(r(`${sr}Property`).toString());return{type:d,timeout:f,propCount:g,hasTransform:m}}function Pf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>kf(n)+kf(t[r])))}function kf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xc(){return document.body.offsetHeight}function aT(t,e,n){const r=t[Us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Df=Symbol("_vod"),lT=Symbol("_vsh"),cT=Symbol(""),uT=/(^|;)\s*display\s*:/;function hT(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ha(r,l,"")}else for(const o in e)n[o]==null&&ha(r,o,"");for(const o in n)o==="display"&&(i=!0),ha(r,o,n[o])}else if(s){if(e!==n){const o=r[cT];o&&(n+=";"+o),r.cssText=n,i=uT.test(n)}}else e&&t.removeAttribute("style");Df in t&&(t[Df]=i?r.display:"",t[lT]&&(r.display="none"))}const Nf=/\s*!important$/;function ha(t,e,n){if(fe(n))n.forEach(r=>ha(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dT(t,e);Nf.test(n)?t.setProperty(ts(r),n.replace(Nf,""),"important"):t[r]=n}}const xf=["Webkit","Moz","ms"],fc={};function dT(t,e){const n=fc[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return fc[e]=r;r=nl(r);for(let s=0;s<xf.length;s++){const i=xf[s]+r;if(i in t)return fc[e]=i}return e}const Of="http://www.w3.org/1999/xlink";function Vf(t,e,n,r,s,i=y1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Of,e.slice(6,e.length)):t.setAttributeNS(Of,e,n):n==null||i&&!rm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Xn(n)?String(n):n)}function Mf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?h_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=rm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ms(t,e,n,r){t.addEventListener(e,n,r)}function fT(t,e,n,r){t.removeEventListener(e,n,r)}const Lf=Symbol("_vei");function pT(t,e,n,r,s=null){const i=t[Lf]||(t[Lf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=gT(e);if(r){const u=i[e]=yT(r,s);ms(t,l,u,c)}else o&&(fT(t,l,o,c),i[e]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function gT(t){let e;if(Uf.test(t)){e={};let r;for(;r=t.match(Uf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let pc=0;const mT=Promise.resolve(),_T=()=>pc||(mT.then(()=>pc=0),pc=Date.now());function yT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(vT(r,n.value),e,5,[r])};return n.value=t,n.attached=_T(),n}function vT(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ff=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ET=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?aT(t,r,o):e==="style"?hT(t,n,r):Za(e)?Uu(e)||pT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TT(t,e,r,o))?(Mf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Mf(t,rn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vf(t,e,r,o))};function TT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ff(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ff(e)&&We(n)?!1:e in t}const p_=new WeakMap,g_=new WeakMap,Da=Symbol("_moveCb"),$f=Symbol("_enterCb"),wT=t=>(delete t.props.mode,t),IT=wT({name:"TransitionGroup",props:it({},rT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=GE(),r=Z1();let s,i;return Lm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!CT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(bT),s.forEach(RT);const l=s.filter(ST);Xc(),l.forEach(c=>{const u=c.el,d=u.style;gn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Da]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",f),u[Da]=null,ar(u,o))};u.addEventListener("transitionend",f)}),s=[]}),()=>{const o=Pe(t),l=sT(o);let c=o.tag||Ne;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),zi(d,jc(d,l,r,n)),p_.set(d,d.el.getBoundingClientRect()))}i=e.default?xm(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&zi(d,jc(d,l,r,n))}return he(c,null,i)}}}),AT=IT;function bT(t){const e=t.el;e[Da]&&e[Da](),e[$f]&&e[$f]()}function RT(t){g_.set(t,t.el.getBoundingClientRect())}function ST(t){const e=p_.get(t),n=g_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function CT(t,e,n){const r=t.cloneNode(),s=t[Us];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=f_(r);return i.removeChild(r),o}const Bf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>oa(e,n):e};function PT(t){t.target.composing=!0}function jf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gc=Symbol("_assign"),kT={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[gc]=Bf(s);const i=r||s.props&&s.props.type==="number";ms(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Mc(l)),t[gc](l)}),n&&ms(t,"change",()=>{t.value=t.value.trim()}),e||(ms(t,"compositionstart",PT),ms(t,"compositionend",jf),ms(t,"change",jf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[gc]=Bf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Mc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},DT=it({patchProp:ET},nT);let qf;function NT(){return qf||(qf=bE(DT))}const m_=(...t)=>{const e=NT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=OT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function OT(t){return We(t)?document.querySelector(t):t}const ct=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},VT={};function MT(t,e){const n=ll("router-view");return Y(),mt(n)}const LT=ct(VT,[["render",MT]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof document<"u";function __(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function UT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&__(t.default)}const ke=Object.assign;function mc(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const xi=()=>{},hn=Array.isArray,y_=/#/g,FT=/&/g,$T=/\//g,BT=/=/g,jT=/\?/g,v_=/\+/g,qT=/%5B/g,HT=/%5D/g,E_=/%5E/g,zT=/%60/g,T_=/%7B/g,GT=/%7C/g,w_=/%7D/g,WT=/%20/g;function th(t){return encodeURI(""+t).replace(GT,"|").replace(qT,"[").replace(HT,"]")}function KT(t){return th(t).replace(T_,"{").replace(w_,"}").replace(E_,"^")}function Yc(t){return th(t).replace(v_,"%2B").replace(WT,"+").replace(y_,"%23").replace(FT,"%26").replace(zT,"`").replace(T_,"{").replace(w_,"}").replace(E_,"^")}function QT(t){return Yc(t).replace(BT,"%3D")}function XT(t){return th(t).replace(y_,"%23").replace(jT,"%3F")}function YT(t){return t==null?"":XT(t).replace($T,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JT=/\/$/,ZT=t=>t.replace(JT,"");function _c(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Qi(o)}}function ew(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fs(e.matched[r],n.matched[s])&&I_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nw(t[n],e[n]))return!1;return!0}function nw(t,e){return hn(t)?zf(t,e):hn(e)?zf(e,t):t===e}function zf(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xi;(function(t){t.pop="pop",t.push="push"})(Xi||(Xi={}));var Oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Oi||(Oi={}));function sw(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZT(t)}const iw=/^[^#]+#/;function ow(t,e){return t.replace(iw,"#")+e}function aw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fl=()=>({left:window.scrollX,top:window.scrollY});function lw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gf(t,e){return(history.state?history.state.position-e:-1)+t}const Jc=new Map;function cw(t,e){Jc.set(t,e)}function uw(t){const e=Jc.get(t);return Jc.delete(t),e}let hw=()=>location.protocol+"//"+location.host;function A_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Hf(c,"")}return Hf(n,t)+r+s}function dw(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const m=A_(t,location),S=n.value,P=e.value;let b=0;if(g){if(n.value=m,e.value=g,o&&o===S){o=null;return}b=P?g.position-P.position:0}else r(m);s.forEach(x=>{x(n.value,S,{delta:b,type:Xi.pop,direction:b?b>0?Oi.forward:Oi.back:Oi.unknown})})};function c(){o=n.value}function u(g){s.push(g);const m=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(m),m}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:fl()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Wf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fl():null}}function fw(t){const{history:e,location:n}=window,r={value:A_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:hw()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](g)}}function o(c,u){const d=ke({},e.state,Wf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ke({},s.value,e.state,{forward:c,scroll:fl()});i(d.current,d,!0);const f=ke({},Wf(r.value,c,null),{position:d.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pw(t){t=sw(t);const e=fw(t),n=dw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:ow.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gw(t){return typeof t=="string"||t&&typeof t=="object"}function b_(t){return typeof t=="string"||typeof t=="symbol"}const R_=Symbol("");var Kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kf||(Kf={}));function $s(t,e){return ke(new Error,{type:t,[R_]:!0},e)}function On(t,e){return t instanceof Error&&R_ in t&&(e==null||!!(t.type&e))}const Qf="[^/]+?",mw={sensitive:!1,strict:!1,start:!0,end:!0},_w=/[.+*?^${}()[\]/\\]/g;function yw(t,e){const n=ke({},mw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(n.sensitive?.25:0);if(g.type===0)f||(s+="/"),s+=g.value.replace(_w,"\\$&"),m+=40;else if(g.type===1){const{value:S,repeatable:P,optional:b,regexp:x}=g;i.push({name:S,repeatable:P,optional:b});const O=x||Qf;if(O!==Qf){m+=10;try{new RegExp(`(${O})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+L.message)}}let M=P?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(M=b&&u.length<2?`(?:/${M})`:"/"+M),b&&(M+="?"),s+=M,m+=20,b&&(m+=-8),P&&(m+=-20),O===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),f={};if(!d)return null;for(let g=1;g<d.length;g++){const m=d[g]||"",S=i[g-1];f[S.name]=m&&S.repeatable?m.split("/"):m}return f}function c(u){let d="",f=!1;for(const g of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of g)if(m.type===0)d+=m.value;else if(m.type===1){const{value:S,repeatable:P,optional:b}=m,x=S in u?u[S]:"";if(hn(x)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=hn(x)?x.join("/"):x;if(!O)if(b)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);d+=O}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function S_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xf(r))return 1;if(Xf(s))return-1}return s.length-r.length}function Xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ew={type:0,value:""},Tw=/[a-zA-Z0-9_]/;function ww(t){if(!t)return[[]];if(t==="/")return[[Ew]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Tw.test(c)?g():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Iw(t,e,n){const r=yw(ww(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Aw(t,e){const n=[],r=new Map;e=ep({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,g,m){const S=!m,P=Jf(f);P.aliasOf=m&&m.record;const b=ep(e,f),x=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const ne of L)x.push(Jf(ke({},P,{components:m?m.record.components:P.components,path:ne,aliasOf:m?m.record:P})))}let O,M;for(const L of x){const{path:ne}=L;if(g&&ne[0]!=="/"){const Z=g.record.path,R=Z[Z.length-1]==="/"?"":"/";L.path=g.record.path+(ne&&R+ne)}if(O=Iw(L,g,b),m?m.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),S&&f.name&&!Zf(O)&&o(f.name)),C_(O)&&c(O),P.children){const Z=P.children;for(let R=0;R<Z.length;R++)i(Z[R],O,m&&m.children[R])}m=m||O}return M?()=>{o(M)}:xi}function o(f){if(b_(f)){const g=r.get(f);g&&(r.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const g=Sw(f,n);n.splice(g,0,f),f.record.name&&!Zf(f)&&r.set(f.record.name,f)}function u(f,g){let m,S={},P,b;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw $s(1,{location:f});b=m.record.name,S=ke(Yf(g.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Yf(f.params,m.keys.map(M=>M.name))),P=m.stringify(S)}else if(f.path!=null)P=f.path,m=n.find(M=>M.re.test(P)),m&&(S=m.parse(P),b=m.record.name);else{if(m=g.name?r.get(g.name):n.find(M=>M.re.test(g.path)),!m)throw $s(1,{location:f,currentLocation:g});b=m.record.name,S=ke({},g.params,f.params),P=m.stringify(S)}const x=[];let O=m;for(;O;)x.unshift(O.record),O=O.parent;return{name:b,path:P,params:S,matched:x,meta:Rw(x)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Yf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rw(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function ep(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;S_(t,e[i])<0?r=i:n=i+1}const s=Cw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cw(t){let e=t;for(;e=e.parent;)if(C_(e)&&S_(t,e)===0)return e}function C_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Pw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(v_," "),o=i.indexOf("="),l=Qi(o<0?i:i.slice(0,o)),c=o<0?null:Qi(i.slice(o+1));if(l in e){let u=e[l];hn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function tp(t){let e="";for(let n in t){const r=t[n];if(n=QT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&Yc(i)):[r&&Yc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Dw=Symbol(""),np=Symbol(""),pl=Symbol(""),P_=Symbol(""),Zc=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c($s(4,{from:n,to:e})):g instanceof Error?c(g):gw(g)?c($s(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function yc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(__(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ur(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=UT(d)?d.default:d;o.mods[l]=d,o.components[l]=f;const m=(f.__vccOpts||f)[e];return m&&ur(m,n,r,o,l,s)()}))}}return i}function rp(t){const e=wn(pl),n=wn(P_),r=je(()=>{const c=ce(t.to);return e.resolve(c)}),s=je(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const g=f.findIndex(Fs.bind(null,d));if(g>-1)return g;const m=sp(c[u-2]);return u>1&&sp(d)===m&&f[f.length-1].path!==m?f.findIndex(Fs.bind(null,c[u-2])):g}),i=je(()=>s.value>-1&&Mw(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&I_(n.params,r.value.params));function l(c={}){if(Vw(c)){const u=e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(xi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Nw(t){return t.length===1?t[0]:t}const xw=Lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:rp,setup(t,{slots:e}){const n=Ks(rp(t)),{options:r}=wn(pl),s=je(()=>({[ip(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ip(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Nw(e.default(n));return t.custom?i:u_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ow=xw;function Vw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ip=(t,e,n)=>t??e??n,Lw=Lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=wn(Zc),s=je(()=>t.route||r.value),i=wn(np,0),o=je(()=>{let u=ce(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=je(()=>s.value.matched[o.value]);la(np,je(()=>o.value+1)),la(Dw,l),la(Zc,s);const c=Le();return Ns(()=>[c.value,l.value,t.name],([u,d,f],[g,m,S])=>{d&&(d.instances[f]=u,m&&m!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Fs(d,m)||!g)&&(d.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=l.value,g=f&&f.components[d];if(!g)return op(n.default,{Component:g,route:u});const m=f.props[d],S=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=u_(g,ke({},S,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return op(n.default,{Component:b,route:u})||b}}});function op(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Uw=Lw;function Fw(t){const e=Aw(t.routes,t),n=t.parseQuery||Pw,r=t.stringifyQuery||tp,s=t.history,i=vi(),o=vi(),l=vi(),c=$1(ir);let u=ir;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=mc.bind(null,U=>""+U),f=mc.bind(null,YT),g=mc.bind(null,Qi);function m(U,ee){let J,re;return b_(U)?(J=e.getRecordMatcher(U),re=ee):re=U,e.addRoute(re,J)}function S(U){const ee=e.getRecordMatcher(U);ee&&e.removeRoute(ee)}function P(){return e.getRoutes().map(U=>U.record)}function b(U){return!!e.getRecordMatcher(U)}function x(U,ee){if(ee=ke({},ee||c.value),typeof U=="string"){const k=_c(n,U,ee.path),F=e.resolve({path:k.path},ee),j=s.createHref(k.fullPath);return ke(k,F,{params:g(F.params),hash:Qi(k.hash),redirectedFrom:void 0,href:j})}let J;if(U.path!=null)J=ke({},U,{path:_c(n,U.path,ee.path).path});else{const k=ke({},U.params);for(const F in k)k[F]==null&&delete k[F];J=ke({},U,{params:f(k)}),ee.params=f(ee.params)}const re=e.resolve(J,ee),Se=U.hash||"";re.params=d(g(re.params));const T=ew(r,ke({},U,{hash:KT(Se),path:re.path})),w=s.createHref(T);return ke({fullPath:T,hash:Se,query:r===tp?kw(U.query):U.query||{}},re,{redirectedFrom:void 0,href:w})}function O(U){return typeof U=="string"?_c(n,U,c.value.path):ke({},U)}function M(U,ee){if(u!==U)return $s(8,{from:ee,to:U})}function L(U){return R(U)}function ne(U){return L(ke(O(U),{replace:!0}))}function Z(U){const ee=U.matched[U.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let re=typeof J=="function"?J(U):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=O(re):{path:re},re.params={}),ke({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function R(U,ee){const J=u=x(U),re=c.value,Se=U.state,T=U.force,w=U.replace===!0,k=Z(J);if(k)return R(ke(O(k),{state:typeof k=="object"?ke({},Se,k.state):Se,force:T,replace:w}),ee||J);const F=J;F.redirectedFrom=ee;let j;return!T&&tw(r,re,J)&&(j=$s(16,{to:F,from:re}),Yt(re,re,!0,!1)),(j?Promise.resolve(j):I(F,re)).catch($=>On($)?On($,2)?$:sn($):Ee($,F,re)).then($=>{if($){if(On($,2))return R(ke({replace:w},O($.to),{state:typeof $.to=="object"?ke({},Se,$.to.state):Se,force:T}),ee||F)}else $=A(F,re,!0,w,Se);return C(F,re,$),$})}function v(U,ee){const J=M(U,ee);return J?Promise.reject(J):Promise.resolve()}function y(U){const ee=Zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(U):U()}function I(U,ee){let J;const[re,Se,T]=$w(U,ee);J=yc(re.reverse(),"beforeRouteLeave",U,ee);for(const k of re)k.leaveGuards.forEach(F=>{J.push(ur(F,U,ee))});const w=v.bind(null,U,ee);return J.push(w),Ut(J).then(()=>{J=[];for(const k of i.list())J.push(ur(k,U,ee));return J.push(w),Ut(J)}).then(()=>{J=yc(Se,"beforeRouteUpdate",U,ee);for(const k of Se)k.updateGuards.forEach(F=>{J.push(ur(F,U,ee))});return J.push(w),Ut(J)}).then(()=>{J=[];for(const k of T)if(k.beforeEnter)if(hn(k.beforeEnter))for(const F of k.beforeEnter)J.push(ur(F,U,ee));else J.push(ur(k.beforeEnter,U,ee));return J.push(w),Ut(J)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),J=yc(T,"beforeRouteEnter",U,ee,y),J.push(w),Ut(J))).then(()=>{J=[];for(const k of o.list())J.push(ur(k,U,ee));return J.push(w),Ut(J)}).catch(k=>On(k,8)?k:Promise.reject(k))}function C(U,ee,J){l.list().forEach(re=>y(()=>re(U,ee,J)))}function A(U,ee,J,re,Se){const T=M(U,ee);if(T)return T;const w=ee===ir,k=_s?history.state:{};J&&(re||w?s.replace(U.fullPath,ke({scroll:w&&k&&k.scroll},Se)):s.push(U.fullPath,Se)),c.value=U,Yt(U,ee,J,w),sn()}let E;function xe(){E||(E=s.listen((U,ee,J)=>{if(!fn.listening)return;const re=x(U),Se=Z(re);if(Se){R(ke(Se,{replace:!0,force:!0}),re).catch(xi);return}u=re;const T=c.value;_s&&cw(Gf(T.fullPath,J.delta),fl()),I(re,T).catch(w=>On(w,12)?w:On(w,2)?(R(ke(O(w.to),{force:!0}),re).then(k=>{On(k,20)&&!J.delta&&J.type===Xi.pop&&s.go(-1,!1)}).catch(xi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Ee(w,re,T))).then(w=>{w=w||A(re,T,!1),w&&(J.delta&&!On(w,8)?s.go(-J.delta,!1):J.type===Xi.pop&&On(w,20)&&s.go(-1,!1)),C(re,T,w)}).catch(xi)}))}let et=vi(),He=vi(),Ie;function Ee(U,ee,J){sn(U);const re=He.list();return re.length?re.forEach(Se=>Se(U,ee,J)):console.error(U),Promise.reject(U)}function Ht(){return Ie&&c.value!==ir?Promise.resolve():new Promise((U,ee)=>{et.add([U,ee])})}function sn(U){return Ie||(Ie=!U,xe(),et.list().forEach(([ee,J])=>U?J(U):ee()),et.reset()),U}function Yt(U,ee,J,re){const{scrollBehavior:Se}=t;if(!_s||!Se)return Promise.resolve();const T=!J&&uw(Gf(U.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return Ku().then(()=>Se(U,ee,T)).then(w=>w&&lw(w)).catch(w=>Ee(w,U,ee))}const ze=U=>s.go(U);let Ge;const Zn=new Set,fn={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:P,resolve:x,options:t,push:L,replace:ne,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:He.add,isReady:Ht,install(U){const ee=this;U.component("RouterLink",Ow),U.component("RouterView",Uw),U.config.globalProperties.$router=ee,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(c)}),_s&&!Ge&&c.value===ir&&(Ge=!0,L(s.location).catch(Se=>{}));const J={};for(const Se in ir)Object.defineProperty(J,Se,{get:()=>c.value[Se],enumerable:!0});U.provide(pl,ee),U.provide(P_,Em(J)),U.provide(Zc,c);const re=U.unmount;Zn.add(U),U.unmount=function(){Zn.delete(U),Zn.size<1&&(u=ir,E&&E(),E=null,c.value=ir,Ge=!1,Ie=!1),re()}}};function Ut(U){return U.reduce((ee,J)=>ee.then(()=>y(J)),Promise.resolve())}return fn}function $w(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Fs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Fs(u,c))||s.push(c))}return[n,r,s]}function Bw(){return wn(pl)}const jw=()=>{};var ap={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),r.push(n[d],n[f],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new Hw;const g=i<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),f!==64){const S=u<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zw=function(t){const e=k_(t);return nh.encodeByteArray(e,!0)},Na=function(t){return zw(t).replace(/\./g,"")},D_=function(t){try{return nh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=()=>N_().__FIREBASE_DEFAULTS__,Ww=()=>{if(typeof process>"u"||typeof ap>"u")return;const t=ap.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D_(t[1]);return e&&JSON.parse(e)},gl=()=>{try{return jw()||Gw()||Ww()||Kw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=t=>{var e,n;return(n=(e=gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},O_=t=>{const e=x_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},V_=()=>{var t;return(t=gl())===null||t===void 0?void 0:t.config},M_=t=>{var e;return(e=gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){return t.endsWith(".cloudworkstations.dev")}async function rh(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Na(JSON.stringify(n)),Na(JSON.stringify(o)),""].join(".")}const Vi={};function Qw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?t.emulator.push(e):t.prod.push(e);return t}function Xw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let lp=!1;function sh(t,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||Vi[t]===e||Vi[t]||lp)return;Vi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Qw().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{lp=!0,o()},g}function d(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=Xw(r),m=n("text"),S=document.getElementById(m)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),x=n("preprendIcon"),O=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const M=g.element;l(M),d(b,P);const L=u();c(O,x),M.append(O,S,b,L),document.body.appendChild(M)}i?(S.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Jw(){var t;const e=(t=gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nI(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rI(){return!Jw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ih(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new kn(s,l,r)}}function oI(t,e){return t.replace(aI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aI=/\{\$([^}]+)}/g;function lI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cp(i)&&cp(o)){if(!Qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cI(t,e){const n=new uI(t,e);return n.subscribe.bind(n)}class uI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vc),s.error===void 0&&(s.error=vc),s.complete===void 0&&(s.complete=vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=1e3,fI=2,pI=4*60*60*1e3,gI=.5;function mI(t,e=dI,n=fI){const r=e*Math.pow(n,t),s=Math.round(gI*r*(Math.random()-.5)*2);return Math.min(pI,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===qr?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const TI={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},wI=Te.INFO,II={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},AI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=II[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=wI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const bI=(t,e)=>e.some(n=>t instanceof n);let up,hp;function RI(){return up||(up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return hp||(hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,eu=new WeakMap,F_=new WeakMap,Ec=new WeakMap,oh=new WeakMap;function CI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U_.set(n,t)}).catch(()=>{}),oh.set(e,t),e}function PI(t){if(eu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});eu.set(t,e)}let tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kI(t){tu=t(tu)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return F_.set(r,e.sort?e.sort():[e]),vr(r)}:SI().includes(t)?function(...e){return t.apply(Tc(this),e),vr(U_.get(this))}:function(...e){return vr(t.apply(Tc(this),e))}}function NI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&PI(t),bI(t,RI())?new Proxy(t,tu):t)}function vr(t){if(t instanceof IDBRequest)return CI(t);if(Ec.has(t))return Ec.get(t);const e=NI(t);return e!==t&&(Ec.set(t,e),oh.set(e,t)),e}const Tc=t=>oh.get(t);function xI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const OI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],wc=new Map;function dp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||OI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return wc.set(e,i),i}kI(t=>({...t,get:(e,n,r)=>dp(e,n)||t.get(e,n,r),has:(e,n)=>!!dp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nu="@firebase/app",fp="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new ml("@firebase/app"),UI="@firebase/app-compat",FI="@firebase/analytics-compat",$I="@firebase/analytics",BI="@firebase/app-check-compat",jI="@firebase/app-check",qI="@firebase/auth",HI="@firebase/auth-compat",zI="@firebase/database",GI="@firebase/data-connect",WI="@firebase/database-compat",KI="@firebase/functions",QI="@firebase/functions-compat",XI="@firebase/installations",YI="@firebase/installations-compat",JI="@firebase/messaging",ZI="@firebase/messaging-compat",eA="@firebase/performance",tA="@firebase/performance-compat",nA="@firebase/remote-config",rA="@firebase/remote-config-compat",sA="@firebase/storage",iA="@firebase/storage-compat",oA="@firebase/firestore",aA="@firebase/ai",lA="@firebase/firestore-compat",cA="firebase",uA="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",hA={[nu]:"fire-core",[UI]:"fire-core-compat",[$I]:"fire-analytics",[FI]:"fire-analytics-compat",[jI]:"fire-app-check",[BI]:"fire-app-check-compat",[qI]:"fire-auth",[HI]:"fire-auth-compat",[zI]:"fire-rtdb",[GI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[KI]:"fire-fn",[QI]:"fire-fn-compat",[XI]:"fire-iid",[YI]:"fire-iid-compat",[JI]:"fire-fcm",[ZI]:"fire-fcm-compat",[eA]:"fire-perf",[tA]:"fire-perf-compat",[nA]:"fire-rc",[rA]:"fire-rc-compat",[sA]:"fire-gcs",[iA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat",[aA]:"fire-vertex","fire-js":"fire-js",[cA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Map,dA=new Map,su=new Map;function pp(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(su.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,t);for(const n of xa.values())pp(n,t);for(const n of dA.values())pp(n,t);return!0}function Ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new Xs("app","Firebase",fA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=uA;function $_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=V_()),!n)throw Er.create("no-options");const i=xa.get(s);if(i){if(Qr(n,i.options)&&Qr(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new EI(s);for(const c of su.values())o.addComponent(c);const l=new pA(n,r,o);return xa.set(s,l),l}function _l(t=ru){const e=xa.get(t);if(!e&&t===ru&&V_())return $_();if(!e)throw Er.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let s=(r=hA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(l.join(" "));return}zn(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="firebase-heartbeat-database",mA=1,Ji="firebase-heartbeat-store";let Ic=null;function B_(){return Ic||(Ic=xI(gA,mA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function _A(t){try{const n=(await B_()).transaction(Ji),r=await n.objectStore(Ji).get(j_(t));return await n.done,r}catch(e){if(e instanceof kn)Hn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function gp(t,e){try{const r=(await B_()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,j_(t)),await r.done}catch(n){if(n instanceof kn)Hn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function j_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=1024,vA=30;class EA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>vA){const o=IA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mp(),{heartbeatsToSend:r,unsentEntries:s}=TA(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Hn.warn(n),""}}}function mp(){return new Date().toISOString().substring(0,10)}function TA(t,e=yA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_p(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ih()?sI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _A(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _p(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}function IA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){zn(new Cn("platform-logger",e=>new MI(e),"PRIVATE")),zn(new Cn("heartbeat",e=>new EA(e),"PRIVATE")),cn(nu,fp,t),cn(nu,fp,"esm2017"),cn("fire-js","")}AA("");var bA="firebase",RA="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(bA,RA,"app");function ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SA=q_,H_=new Xs("auth","Firebase",q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new ml("@firebase/auth");function CA(t,...e){Oa.logLevel<=Te.WARN&&Oa.warn(`Auth (${rs}): ${t}`,...e)}function da(t,...e){Oa.logLevel<=Te.ERROR&&Oa.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,...e){throw lh(t,...e)}function In(t,...e){return lh(t,...e)}function z_(t,e,n){const r=Object.assign(Object.assign({},SA()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return z_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H_.create(t,...e)}function ge(t,e,...n){if(!t)throw lh(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function Wn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PA(){return yp()==="http:"||yp()==="https:"}function yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PA()||eI()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yw()||tI()}get(){return kA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OA=new _o(3e4,6e4);function yl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,r,s={}){return W_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Zw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ns(t.emulatorConfig.host)&&(u.credentials="include"),G_.fetch()(await Q_(t,t.config.apiHost,n,l),u)})}async function W_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NA),e);try{const s=new VA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw z_(t,d,u);Gn(t,d)}}catch(s){if(s instanceof kn)throw s;Gn(t,"network-request-failed",{message:String(s)})}}async function K_(t,e,n,r,s={}){const i=await Js(t,e,n,r,s);return"mfaPendingCredential"in i&&Gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ch(t.config,s):`${t.config.apiScheme}://${s}`;return xA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class VA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),OA.get())})}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function Va(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LA(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=uh(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(Ac(s.auth_time)),issuedAtTime:Mi(Ac(s.iat)),expirationTime:Mi(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function uh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=D_(n);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vp(t){const e=uh(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&UA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zi(t,Va(n,{idToken:r}));ge(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?X_(i.providerUserInfo):[],l=BA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ou(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function $A(t){const e=qe(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function X_(t){return t.map(e=>{var{providerId:n}=e,r=ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){const n=await W_(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",G_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qA(t,e){return Js(t,"POST","/v2/accounts:revokeToken",yl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ou(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LA(this,e)}reload(){return $A(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Zi(this,MA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:L,isAnonymous:ne,providerData:Z,stsTokenManager:R}=n;ge(M&&R,e,"internal-error");const v=xs.fromJSON(this.name,R);ge(typeof M=="string",e,"internal-error"),or(f,e.name),or(g,e.name),ge(typeof L=="boolean",e,"internal-error"),ge(typeof ne=="boolean",e,"internal-error"),or(m,e.name),or(S,e.name),or(P,e.name),or(b,e.name),or(x,e.name),or(O,e.name);const y=new an({uid:M,auth:e,email:g,emailVerified:L,displayName:f,isAnonymous:ne,photoURL:S,phoneNumber:m,tenantId:P,stsTokenManager:v,createdAt:x,lastLoginAt:O});return Z&&Array.isArray(Z)&&(y.providerData=Z.map(I=>Object.assign({},I))),b&&(y._redirectEventId=b),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?X_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xs;l.updateFromIdToken(r);const c=new an({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ou(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;function Fn(t){Wn(t instanceof Function,"Expected a class definition");let e=Ep.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ep.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y_.type="NONE";const Tp=Y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=fa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Va(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(Fn(Tp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(Tp);const o=fa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const g=await Va(e,{idToken:d}).catch(()=>{});if(!g)break;f=await an._fromGetAccountInfoResponse(e,g,d)}else f=an._fromJSON(e,d);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J_(t=Ct()){return/firefox\//i.test(t)}function Z_(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=Ct()){return/crios\//i.test(t)}function ty(t=Ct()){return/iemobile/i.test(t)}function ny(t=Ct()){return/android/i.test(t)}function ry(t=Ct()){return/blackberry/i.test(t)}function sy(t=Ct()){return/webos/i.test(t)}function hh(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HA(t=Ct()){var e;return hh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zA(){return nI()&&document.documentMode===10}function iy(t=Ct()){return hh(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=wp(Ct());break;case"Worker":n=`${wp(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e={}){return Js(t,"GET","/v2/passwordPolicy",yl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=6;class QA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new GA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Va(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Tr(this));const n=e?qe(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WA(this),n=new QA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vl(t){return qe(t)}class Ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=cI(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YA(t){dh=t}function JA(t){return dh.loadJS(t)}function ZA(){return dh.gapiScript}function eb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){const n=Ys(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qr(i,e??{}))return s;Gn(s,"already-initialized")}return n.initialize({options:e})}function nb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rb(t,e,n){const r=vl(t);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ay(e),{host:o,port:l}=sb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge(Qr(u,r.config.emulator)&&Qr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ns(o)?(rh(`${i}//${o}${c}`),sh("Auth",!0)):ib()}function ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sb(t){const e=ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ap(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ap(o)}}}function Ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ib(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return K_(t,"POST","/v1/accounts:signInWithIdp",yl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="http://localhost";class Xr extends ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:ob,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends cy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends yo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends yo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends yo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e){return K_(t,"POST","/v1/accounts:signUp",yl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=bp(r);return new br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bp(r);return new br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t){var e;if(tn(t.app))return Promise.reject(Tr(t));const n=vl(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ab(n,{returnSecureToken:!0}),s=await br._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function hy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function lb(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await Zi(t,hy(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=uh(i.idToken);ge(o,r,"internal-error");const{sub:l}=o;return ge(t.uid===l,r,"user-mismatch"),br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e,n=!1){if(tn(t.app))return Promise.reject(Tr(t));const r="signIn",s=await hy(t,r,e),i=await br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function hb(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function db(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function pb(t){return qe(t).signOut()}const Ua="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1e3,mb=10;class fy extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fy.type="LOCAL";const _b=fy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}py.type="SESSION";const gy=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await yb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=fh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function Eb(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function Tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ib(){return my()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firebaseLocalStorageDb",Ab=1,Fa="firebaseLocalStorage",yy="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function bb(){const t=indexedDB.deleteDatabase(_y);return new vo(t).toPromise()}function au(){const t=indexedDB.open(_y,Ab);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:yy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await bb(),e(await au()))})})}async function Rp(t,e,n){const r=Tl(t,!0).put({[yy]:e,value:n});return new vo(r).toPromise()}async function Rb(t,e){const n=Tl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Sp(t,e){const n=Tl(t,!0).delete(e);return new vo(n).toPromise()}const Sb=800,Cb=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(Ib()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tb(),!this.activeServiceWorker)return;this.sender=new vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await au();return await Rp(e,Ua,"1"),await Sp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tl(s,!1).getAll();return new vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const Pb=vy;new _o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e){return e?Fn(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends ly{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Db(t){return ub(t.auth,new ph(t),t.bypassAuthState)}function Nb(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),cb(n,new ph(t),t.bypassAuthState)}async function xb(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),lb(n,new ph(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Db;case"linkViaPopup":case"linkViaRedirect":return xb;case"reauthViaPopup":case"reauthViaRedirect":return Nb;default:Gn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new _o(2e3,1e4);class Is extends Ey{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ob.get())};e()}}Is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="pendingRedirect",pa=new Map;class Mb extends Ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await Lb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lb(t,e){const n=$b(e),r=Fb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ub(t,e){pa.set(t._key(),e)}function Fb(t){return Fn(t._redirectPersistence)}function $b(t){return fa(Vb,t.config.apiKey,t.name)}async function Bb(t,e,n=!1){if(tn(t.app))return Promise.reject(Tr(t));const r=vl(t),s=kb(r,e),o=await new Mb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=10*60*1e3;class qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ty(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cp(e))}saveEventToCache(e){this.cachedEventUids.add(Cp(e)),this.lastProcessedEventTime=Date.now()}}function Cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wb=/^https?/;async function Kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zb(t);for(const n of e)try{if(Qb(n))return}catch{}Gn(t,"unauthorized-domain")}function Qb(t){const e=iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wb.test(n))return!1;if(Gb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new _o(3e4,6e4);function Pp(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yb(t){return new Promise((e,n)=>{var r,s,i;function o(){Pp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pp(),n(In(t,"network-request-failed"))},timeout:Xb.get()})}if(!((s=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=An().gapi)===null||i===void 0)&&i.load)o();else{const l=eb("iframefcb");return An()[l]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},JA(`${ZA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ga=null,e})}let ga=null;function Jb(t){return ga=ga||Yb(t),ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new _o(5e3,15e3),eR="__/auth/iframe",tR="emulator/auth/iframe",nR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sR(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ch(e,tR):`https://${t.config.authDomain}/${eR}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=rR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mo(r).slice(1)}`}async function iR(t){const e=await Jb(t),n=An().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:sR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),l=An().setTimeout(()=>{i(o)},Zb.get());function c(){An().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aR=500,lR=600,cR="_blank",uR="http://localhost";class kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hR(t,e,n,r=aR,s=lR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},oR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ct().toLowerCase();n&&(l=ey(u)?cR:n),J_(u)&&(e=e||uR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[m,S])=>`${g}${m}=${S},`,"");if(HA(u)&&l!=="_self")return dR(e||"",l),new kp(null);const f=window.open(e||"",l,d);ge(f,t,"popup-blocked");try{f.focus()}catch{}return new kp(f)}function dR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="__/auth/handler",pR="emulator/auth/handler",gR=encodeURIComponent("fac");async function Dp(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof cy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof yo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${gR}=${encodeURIComponent(c)}`:"";return`${mR(t)}?${mo(l).slice(1)}${u}`}function mR({config:t}){return t.emulator?ch(t,pR):`https://${t.authDomain}/${fR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="webStorageSupport";class _R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=Bb,this._overrideRedirectResult=Ub}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dp(e,n,r,iu(),s);return hR(e,o,fh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Dp(e,n,r,iu(),s);return Eb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iR(e),r=new qb(e);return n.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bc];o!==void 0&&n(!!o),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||hh()}}const yR=_R;var Np="@firebase/auth",xp="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(t){zn(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new XA(r,s,i,c);return nb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new Cn("auth-internal",e=>{const n=vl(e.getProvider("auth").getImmediate());return(r=>new vR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Np,xp,ER(t)),cn(Np,xp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=5*60,IR=M_("authIdTokenMaxAge")||wR;let Op=null;const AR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IR)return;const s=n==null?void 0:n.token;Op!==s&&(Op=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bR(t=_l()){const e=Ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tb(t,{popupRedirectResolver:yR,persistence:[Pb,_b,gy]}),r=M_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=AR(i.toString());db(n,o,()=>o(n.currentUser)),hb(n,l=>o(l))}}const s=x_("auth");return s&&rb(n,`http://${s}`),n}function RR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");var Vp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,wy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(I,C,A){for(var E=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)E[xe-2]=arguments[xe];return v.prototype[C].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(C=0;16>C;++C)I[C]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],C=R.g[2];var A=R.g[3],E=v+(A^y&(C^A))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(C^v&(y^C))+I[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=C+(y^A&(v^y))+I[2]+606105819&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(v^C&(A^v))+I[3]+3250441966&4294967295,y=C+(E<<22&4294967295|E>>>10),E=v+(A^y&(C^A))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(C^v&(y^C))+I[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=C+(y^A&(v^y))+I[6]+2821735955&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(v^C&(A^v))+I[7]+4249261313&4294967295,y=C+(E<<22&4294967295|E>>>10),E=v+(A^y&(C^A))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(C^v&(y^C))+I[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=C+(y^A&(v^y))+I[10]+4294925233&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(v^C&(A^v))+I[11]+2304563134&4294967295,y=C+(E<<22&4294967295|E>>>10),E=v+(A^y&(C^A))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(C^v&(y^C))+I[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=C+(y^A&(v^y))+I[14]+2792965006&4294967295,C=A+(E<<17&4294967295|E>>>15),E=y+(v^C&(A^v))+I[15]+1236535329&4294967295,y=C+(E<<22&4294967295|E>>>10),E=v+(C^A&(y^C))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(v^y))+I[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=C+(v^y&(A^v))+I[11]+643717713&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(C^A))+I[0]+3921069994&4294967295,y=C+(E<<20&4294967295|E>>>12),E=v+(C^A&(y^C))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(v^y))+I[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=C+(v^y&(A^v))+I[15]+3634488961&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(C^A))+I[4]+3889429448&4294967295,y=C+(E<<20&4294967295|E>>>12),E=v+(C^A&(y^C))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(v^y))+I[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=C+(v^y&(A^v))+I[3]+4107603335&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(C^A))+I[8]+1163531501&4294967295,y=C+(E<<20&4294967295|E>>>12),E=v+(C^A&(y^C))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^C&(v^y))+I[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=C+(v^y&(A^v))+I[7]+1735328473&4294967295,C=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(C^A))+I[12]+2368359562&4294967295,y=C+(E<<20&4294967295|E>>>12),E=v+(y^C^A)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^C)+I[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=C+(A^v^y)+I[11]+1839030562&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^v)+I[14]+4259657740&4294967295,y=C+(E<<23&4294967295|E>>>9),E=v+(y^C^A)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^C)+I[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=C+(A^v^y)+I[7]+4139469664&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^v)+I[10]+3200236656&4294967295,y=C+(E<<23&4294967295|E>>>9),E=v+(y^C^A)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^C)+I[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=C+(A^v^y)+I[3]+3572445317&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^v)+I[6]+76029189&4294967295,y=C+(E<<23&4294967295|E>>>9),E=v+(y^C^A)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^C)+I[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=C+(A^v^y)+I[15]+530742520&4294967295,C=A+(E<<16&4294967295|E>>>16),E=y+(C^A^v)+I[2]+3299628645&4294967295,y=C+(E<<23&4294967295|E>>>9),E=v+(C^(y|~A))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~C))+I[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=C+(v^(A|~y))+I[14]+2878612391&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~v))+I[5]+4237533241&4294967295,y=C+(E<<21&4294967295|E>>>11),E=v+(C^(y|~A))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~C))+I[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=C+(v^(A|~y))+I[10]+4293915773&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~v))+I[1]+2240044497&4294967295,y=C+(E<<21&4294967295|E>>>11),E=v+(C^(y|~A))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~C))+I[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=C+(v^(A|~y))+I[6]+2734768916&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~v))+I[13]+1309151649&4294967295,y=C+(E<<21&4294967295|E>>>11),E=v+(C^(y|~A))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~C))+I[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=C+(v^(A|~y))+I[2]+718787259&4294967295,C=A+(E<<15&4294967295|E>>>17),E=y+(A^(C|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+A&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,I=this.B,C=this.h,A=0;A<v;){if(C==0)for(;A<=y;)s(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<v;)if(I[C++]=R.charCodeAt(A++),C==this.blockSize){s(this,I),C=0;break}}else for(;A<v;)if(I[C++]=R[A++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)R[y++]=this.g[v]>>>I&255;return R};function i(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],I=!0,C=R.length-1;0<=C;C--){var A=R[C]|0;I&&A==v||(y[C]=A,I=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return b(u(-R));for(var v=[],y=1,I=0;R>=y;I++)v[I]=R/y|0,y*=4294967296;return new o(v,0)}function d(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return b(d(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=f,C=0;C<R.length;C+=8){var A=Math.min(8,R.length-C),E=parseInt(R.substring(C,C+A),v);8>A?(A=u(Math.pow(v,A)),I=I.j(A).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var f=c(0),g=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(P(this))return"-"+b(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,I="";;){var C=L(y,v).g;y=x(y,C.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=C,S(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function P(R){return R.h==-1}t.l=function(R){return R=x(this,R),P(R)?-1:S(R)?0:1};function b(R){for(var v=R.g.length,y=[],I=0;I<v;I++)y[I]=~R.g[I];return new o(y,~R.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0,C=0;C<=v;C++){var A=I+(this.i(C)&65535)+(R.i(C)&65535),E=(A>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);I=E>>>16,A&=65535,E&=65535,y[C]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function x(R,v){return R.add(b(v))}t.j=function(R){if(S(this)||S(R))return f;if(P(this))return P(R)?b(this).j(b(R)):b(b(this).j(R));if(P(R))return b(this.j(b(R)));if(0>this.l(m)&&0>R.l(m))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<R.g.length;C++){var A=this.i(I)>>>16,E=this.i(I)&65535,xe=R.i(C)>>>16,et=R.i(C)&65535;y[2*I+2*C]+=E*et,O(y,2*I+2*C),y[2*I+2*C+1]+=A*et,O(y,2*I+2*C+1),y[2*I+2*C+1]+=E*xe,O(y,2*I+2*C+1),y[2*I+2*C+2]+=A*xe,O(y,2*I+2*C+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function O(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function M(R,v){this.g=R,this.h=v}function L(R,v){if(S(v))throw Error("division by zero");if(S(R))return new M(f,f);if(P(R))return v=L(b(R),v),new M(b(v.g),b(v.h));if(P(v))return v=L(R,b(v)),new M(b(v.g),v.h);if(30<R.g.length){if(P(R)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(R);)y=ne(y),I=ne(I);var C=Z(y,1),A=Z(I,1);for(I=Z(I,2),y=Z(y,2);!S(I);){var E=A.add(I);0>=E.l(R)&&(C=C.add(y),A=E),I=Z(I,1),y=Z(y,1)}return v=x(R,C.j(v)),new M(C,v)}for(C=f;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),E=A.j(v);P(E)||0<E.l(R);)y-=I,A=u(y),E=A.j(v);S(A)&&(A=g),C=C.add(A),R=x(R,E)}return new M(C,R)}t.A=function(R){return L(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&R.i(I);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|R.i(I);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^R.i(I);return new o(y,this.h^R.h)};function ne(R){for(var v=R.g.length+1,y=[],I=0;I<v;I++)y[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(y,R.h)}function Z(R,v){var y=v>>5;v%=32;for(var I=R.g.length-y,C=[],A=0;A<I;A++)C[A]=0<v?R.i(A+y)>>>v|R.i(A+y+1)<<32-v:R.i(A+y);return new o(C,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,wr=o}).apply(typeof Vp<"u"?Vp:typeof self<"u"?self:typeof window<"u"?window:{});var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iy,wi,Ay,ma,lu,by,Ry,Sy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yo=="object"&&Yo];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function m(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,N){for(var W=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)W[Ve-2]=arguments[Ve];return h.prototype[D].apply(_,W)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const D=a.length||0,N=_.length||0;a.length=D+N;for(let W=0;W<N;W++)a[D+W]=_[W]}else a.push(_)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var ne=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Z(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function R(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let N=0;N<y.length;N++)p=y[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xe{constructor(){this.h=this.g=null}add(h,p){const _=et.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var et=new x(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Ht=new xe,sn=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(Yt)}};var Yt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){A(p)}var h=et;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function fn(a,h){if(Ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ne){e:{try{L(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}S(fn,Ge);var Ut={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++ee,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,p,_,D){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=w(a,h,_,D);return-1<W?(h=a[W],p||(h.fa=!1)):(h=new J(h,this.src,N,!!_,D),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=D)&&Array.prototype.splice.call(_,D,1),N&&(re(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,h,p,_){for(var D=0;D<a.length;++D){var N=a[D];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==_)return D}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function j(a,h,p,_,D){if(Array.isArray(h)){for(var N=0;N<h.length;N++)j(a,h[N],p,_,D);return null}return p=pe(p),a&&a[U]?a.K(h,p,u(_)?!!_.capture:!1,D):$(a,h,p,!1,_,D)}function $(a,h,p,_,D,N){if(!h)throw Error("Invalid event type");var W=u(D)?!!D.capture:!!D,Ve=Q(a);if(Ve||(a[k]=Ve=new Se(a)),p=Ve.add(h,p,_,W,N),p.proxy)return p;if(_=X(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Zn||(D=W),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(H(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function X(){function a(p){return h.call(a.src,a.listener,p)}const h=ae;return a}function G(a,h,p,_,D){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],p,_,D);else _=u(_)?!!_.capture:!!_,p=pe(p),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=w(N,p,_,D),-1<p&&(re(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,p,_,D)),(p=-1<a?h[a]:null)&&z(p))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])T(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(H(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Q(h))?(T(p,a),p.h==0&&(p.src=null,h[k]=null)):re(a)}}}function H(a){return a in F?F[a]:F[a]="on"+a}function ae(a,h){if(a.da)a=!0;else{h=new fn(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&z(a),a=p.call(_,h)}return a}function Q(a){return a=a[k],a instanceof Se?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ue(){ze.call(this),this.i=new Se(this),this.M=this,this.F=null}S(ue,ze),ue.prototype[U]=!0,ue.prototype.removeEventListener=function(a,h,p,_){G(this,a,h,p,_)};function ye(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ge(h,a);else if(h instanceof Ge)h.target=h.target||a;else{var D=h;h=new Ge(_,a),I(h,D)}if(D=!0,p)for(var N=p.length-1;0<=N;N--){var W=h.g=p[N];D=Ae(W,_,!0,h)&&D}if(W=h.g=a,D=Ae(W,_,!0,h)&&D,D=Ae(W,_,!1,h)&&D,p)for(N=0;N<p.length;N++)W=h.g=p[N],D=Ae(W,_,!1,h)&&D}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)re(p[_]);delete a.g[h],a.h--}}this.F=null},ue.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},ue.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Ae(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==p){var Ve=W.listener,dt=W.ha||W.src;W.fa&&T(a.i,W),D=Ve.call(dt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Et(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ut(a){a.g=Et(()=>{a.g=null,a.i&&(a.i=!1,ut(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends ze{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(a){ze.call(this),this.h=a,this.g={}}S(Tt,ze);var er=[];function si(a){Z(a.g,function(h,p){this.g.hasOwnProperty(p)&&z(h)},a),a.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),si(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=l.JSON.stringify,Zt=l.JSON.parse,Po=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Hl(){}Hl.prototype.h=null;function fd(a){return a.h||(a.h=a.i())}function pd(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zl(){Ge.call(this,"d")}S(zl,Ge);function Gl(){Ge.call(this,"c")}S(Gl,Ge);var Vr={},gd=null;function ko(){return gd=gd||new ue}Vr.La="serverreachability";function md(a){Ge.call(this,Vr.La,a)}S(md,Ge);function oi(a){const h=ko();ye(h,new md(h))}Vr.STAT_EVENT="statevent";function _d(a,h){Ge.call(this,Vr.STAT_EVENT,a),this.stat=h}S(_d,Ge);function Pt(a){const h=ko();ye(h,new _d(h,a))}Vr.Ma="timingevent";function yd(a,h){Ge.call(this,Vr.Ma,a),this.size=h}S(yd,Ge);function ai(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function U0(a,h,p,_,D,N){a.info(function(){if(a.g)if(N)for(var W="",Ve=N.split("&"),dt=0;dt<Ve.length;dt++){var Ce=Ve[dt].split("=");if(1<Ce.length){var wt=Ce[0];Ce=Ce[1];var It=wt.split("_");W=2<=It.length&&It[1]=="type"?W+(wt+"="+Ce+"&"):W+(wt+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+W})}function F0(a,h,p,_,D,N,W){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+N+" "+W})}function as(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+B0(a,p)+(_?" "+_:"")})}function $0(a,h){a.info(function(){return"TIMEOUT: "+h})}li.prototype.info=function(){};function B0(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var N=D[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return ht(p)}catch{return h}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wl;function No(){}S(No,Hl),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},Wl=new No;function tr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ed}function Ed(){this.i=null,this.g="",this.h=!1}var Td={},Kl={};function Ql(a,h,p){a.L=1,a.v=Mo(Dn(h)),a.m=p,a.P=!0,wd(a,null)}function wd(a,h){a.F=Date.now(),xo(a),a.A=Dn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Md(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Ed,a.g=ef(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Jt(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(er[0]=D.toString()),D=er);for(var N=0;N<D.length;N++){var W=j(p,D[N],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),oi(),U0(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const It=Nn(this.g);var h=this.g.Ba();const us=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||qd(this.g)))){this.J||It!=4||h==7||(h==8||0>=us?oi(3):oi(2)),Xl(this);var p=this.g.Z();this.X=p;t:if(Id(this)){var _=qd(this.g);a="";var D=_.length,N=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),ci(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,F0(this.i,this.u,this.A,this.l,this.R,It,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,dt=this.g;if((Ve=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ve)){var Ce=Ve;break t}}Ce=null}if(p=Ce)as(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yl(this,p);else{this.o=!1,this.s=3,Pt(12),Mr(this),ci(this);break e}}if(this.P){p=!0;let on;for(;!this.J&&this.C<W.length;)if(on=j0(this,W),on==Kl){It==4&&(this.s=4,Pt(14),p=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Td){this.s=4,Pt(15),as(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else as(this.i,this.l,on,null),Yl(this,on);if(Id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||W.length!=0||this.h.h||(this.s=1,Pt(16),p=!1),this.o=this.o&&p,!p)as(this.i,this.l,W,"[Invalid Chunked Response]"),Mr(this),ci(this);else if(0<W.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),rc(wt),wt.M=!0,Pt(11))}}else as(this.i,this.l,W,null),Yl(this,W);It==4&&Mr(this),this.o&&!this.J&&(It==4?Xd(this.j,this):(this.o=!1,xo(this)))}else i1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Mr(this),ci(this)}}}catch{}finally{}};function Id(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function j0(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?Kl:(p=Number(h.substring(p,_)),isNaN(p)?Td:(_+=1,_+p>h.length?Kl:(h=h.slice(_,_+p),a.C=_+p,h)))}tr.prototype.cancel=function(){this.J=!0,Mr(this)};function xo(a){a.S=Date.now()+a.I,Ad(a,a.I)}function Ad(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ai(g(a.ba,a),h)}function Xl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($0(this.i,this.A),this.L!=2&&(oi(),Pt(17)),Mr(this),this.s=2,ci(this)):Ad(this,this.S-a)};function ci(a){a.j.G==0||a.J||Xd(a.j,a)}function Mr(a){Xl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,si(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yl(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Jl(p.h,a))){if(!a.K&&Jl(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)jo(p),$o(p);else break e;nc(p),Pt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=ai(g(p.Za,p),6e3));if(1>=Sd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ur(p,11)}else if((a.K||p.g==a)&&jo(p),!O(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let Ce=D[h];if(p.T=Ce[0],Ce=Ce[1],p.G==2)if(Ce[0]=="c"){p.K=Ce[1],p.ia=Ce[2];const wt=Ce[3];wt!=null&&(p.la=wt,p.j.info("VER="+p.la));const It=Ce[4];It!=null&&(p.Aa=It,p.j.info("SVER="+p.Aa));const us=Ce[5];us!=null&&typeof us=="number"&&0<us&&(_=1.5*us,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const on=a.g;if(on){const Ho=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var N=_.h;N.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Zl(N,N.h),N.h=null))}if(_.D){const sc=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(_.ya=sc,Fe(_.I,_.D,sc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=a;if(_.qa=Zd(_,_.J?_.ia:null,_.W),W.K){Cd(_.h,W);var Ve=W,dt=_.L;dt&&(Ve.I=dt),Ve.B&&(Xl(Ve),xo(Ve)),_.g=W}else Kd(_);0<p.i.length&&Bo(p)}else Ce[0]!="stop"&&Ce[0]!="close"||Ur(p,7);else p.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Ur(p,7):tc(p):Ce[0]!="noop"&&p.l&&p.l.ta(Ce),p.v=0)}}oi(4)}catch{}}var q0=class{constructor(a,h){this.g=a,this.map=h}};function bd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sd(a){return a.h?1:a.g?a.g.size:0}function Jl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Zl(a,h){a.g?a.g.add(h):a.h=h}function Cd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}bd.prototype.cancel=function(){if(this.i=Pd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function H0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function z0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function kd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=z0(a),_=H0(a),D=_.length,N=0;N<D;N++)h.call(void 0,_[N],p&&p[N],a)}var Dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G0(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var N=a[p].substring(0,_);D=a[p].substring(_+1)}else N=a[p];h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Oo(this,a.j),this.o=a.o,this.g=a.g,Vo(this,a.s),this.l=a.l;var h=a.i,p=new di;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Nd(this,p),this.m=a.m}else a&&(h=String(a).match(Dd))?(this.h=!1,Oo(this,h[1]||"",!0),this.o=ui(h[2]||""),this.g=ui(h[3]||"",!0),Vo(this,h[4]),this.l=ui(h[5]||"",!0),Nd(this,h[6]||"",!0),this.m=ui(h[7]||"")):(this.h=!1,this.i=new di(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(hi(h,xd,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(hi(h,xd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(hi(p,p.charAt(0)=="/"?Q0:K0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",hi(p,Y0)),a.join("")};function Dn(a){return new Lr(a)}function Oo(a,h,p){a.j=p?ui(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Vo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Nd(a,h,p){h instanceof di?(a.i=h,J0(a.i,a.h)):(p||(h=hi(h,X0)),a.i=new di(h,a.h))}function Fe(a,h,p){a.i.set(h,p)}function Mo(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ui(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,W0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function W0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xd=/[#\/\?@]/g,K0=/[#\?:]/g,Q0=/[#\?]/g,X0=/[#\?@]/g,Y0=/#/g;function di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&G0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=di.prototype,t.add=function(a,h){nr(this),this.i=null,a=ls(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Od(a,h){nr(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vd(a,h){return nr(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=a[_];for(let N=0;N<D.length;N++)p.push(h[_])}return p},t.V=function(a){nr(this);let h=[];if(typeof a=="string")Vd(this,a)&&(h=h.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return nr(this),this.i=null,a=ls(this,a),Vd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Md(a,h,p){Od(a,h),0<p.length&&(a.i=null,a.g.set(ls(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const N=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var D=N;W[_]!==""&&(D+="="+encodeURIComponent(String(W[_]))),a.push(D)}}return this.i=a.join("&")};function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function J0(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(Od(this,_),Md(this,D,p))},a)),a.j=h}function Z0(a,h){const p=new li;if(l.Image){const _=new Image;_.onload=m(rr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=m(rr,p,"TestLoadImage: error",!1,h,_),_.onabort=m(rr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=m(rr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function e1(a,h){const p=new li,_=new AbortController,D=setTimeout(()=>{_.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(D),N.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),rr(p,"TestPingServer: error",!1,h)})}function rr(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function t1(){this.g=new Po}function n1(a,h,p){const _=p||"";try{kd(a,function(D,N){let W=D;u(D)&&(W=ht(D)),h.push(_+N+"="+encodeURIComponent(W))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function Lo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Lo,Hl),Lo.prototype.g=function(){return new Uo(this.l,this.j)},Lo.prototype.i=function(a){return function(){return a}}({});function Uo(a,h){ue.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Uo,ue),t=Uo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ld(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ld(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?fi(this):pi(this),this.readyState==3&&Ld(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,fi(this))},t.Qa=function(a){this.g&&(this.response=a,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ud(a){let h="";return Z(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function ec(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Ud(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Fe(a,h,p))}function Xe(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Xe,ue);var r1=/^https?$/i,s1=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wl.g(),this.v=this.o?fd(this.o):fd(Wl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Fd(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(s1,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of p)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Fd(this,N)}};function Fd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,$d(a),Fo(a)}function $d(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fo(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bd(this):this.bb())},t.bb=function(){Bd(this)};function Bd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Et(a.Ea,0,a);else if(ye(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=W===0){var D=String(a.D).match(Dd)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!r1.test(D?D.toLowerCase():"")}p=_}if(p)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var N=2<Nn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",$d(a)}}finally{Fo(a)}}}}function Fo(a,h){if(a.g){jd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{p.onreadystatechange=_}catch{}}}function jd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Zt(h)}};function qd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i1(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(O(a[_]))continue;var p=C(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[D]||[];h[D]=N,N.push(p)}R(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Hd(a){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,a),this.cb=gi("retryDelaySeedMs",1e4,a),this.Wa=gi("forwardChannelMaxRetries",2,a),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(a&&a.concurrentRequestLimit),this.Da=new t1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hd.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){Pt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Zd(this,null,this.W),Bo(this)};function tc(a){if(zd(a),a.G==3){var h=a.U++,p=Dn(a.I);if(Fe(p,"SID",a.K),Fe(p,"RID",h),Fe(p,"TYPE","terminate"),mi(a,p),h=new tr(a,a.j,h),h.L=2,h.v=Mo(Dn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=ef(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xo(h)}Jd(a)}function $o(a){a.g&&(rc(a),a.g.cancel(),a.g=null)}function zd(a){$o(a),a.u&&(l.clearTimeout(a.u),a.u=null),jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bo(a){if(!Rd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||sn(),Ee||(Ie(),Ee=!0),Ht.add(h,a),a.B=0}}function o1(a,h){return Sd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ai(g(a.Ga,a,h),Yd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new tr(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(D.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wd(this,D,h),p=Dn(this.I),Fe(p,"RID",a),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),mi(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Ud(N)))+"&"+h:this.m&&ec(p,this.m,N)),Zl(this.h,D),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",h),Fe(p,"SID","null"),D.T=!0,Ql(D,p,null)):Ql(D,p,h),this.G=2}}else this.G==3&&(a?Gd(this,a):this.i.length==0||Rd(this.h)||Gd(this))};function Gd(a,h){var p;h?p=h.l:p=a.U++;const _=Dn(a.I);Fe(_,"SID",a.K),Fe(_,"RID",p),Fe(_,"AID",a.T),mi(a,_),a.m&&a.o&&ec(_,a.m,a.o),p=new tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Zl(a.h,p),Ql(p,_,h)}function mi(a,h){a.H&&Z(a.H,function(p,_){Fe(h,_,p)}),a.l&&kd({},function(p,_){Fe(h,_,p)})}function Wd(a,h,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let N=-1;for(;;){const W=["count="+p];N==-1?0<p?(N=D[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Ve=!0;for(let dt=0;dt<p;dt++){let Ce=D[dt].g;const wt=D[dt].map;if(Ce-=N,0>Ce)N=Math.max(0,D[dt].g-100),Ve=!1;else try{n1(wt,W,"req"+Ce+"_")}catch{_&&_(wt)}}if(Ve){_=W.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function Kd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||sn(),Ee||(Ie(),Ee=!0),Ht.add(h,a),a.v=0}}function nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ai(g(a.Fa,a),Yd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Qd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ai(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),$o(this),Qd(this))};function rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Qd(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Dn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),mi(a,h),a.m&&a.o&&ec(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Mo(Dn(h)),p.m=null,p.P=!0,wd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,$o(this),nc(this),Pt(19))};function jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Xd(a,h){var p=null;if(a.g==h){jo(a),rc(a),a.g=null;var _=2}else if(Jl(a.h,h))p=h.D,Cd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=ko(),ye(_,new yd(_,p)),Bo(a)}else Kd(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&o1(a,h)||_==2&&nc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Yd(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),_=a.Xa;const D=!_;_=new Lr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oo(_,"https"),Mo(_),D?Z0(_.toString(),p):e1(_.toString(),p)}else Pt(2);a.G=0,a.l&&a.l.sa(h),Jd(a),zd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Jd(a){if(a.G=0,a.ka=[],a.l){const h=Pd(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Zd(a,h,p){var _=p instanceof Lr?Dn(p):new Lr(p);if(_.g!="")h&&(_.g=h+"."+_.g),Vo(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var N=new Lr(null);_&&Oo(N,_),h&&(N.g=h),D&&Vo(N,D),p&&(N.l=p),_=N}return p=a.D,h=a.ya,p&&h&&Fe(_,p,h),Fe(_,"VER",a.la),mi(a,_),_}function ef(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new Lo({eb:p})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}t=tf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qo(){}qo.prototype.g=function(a,h){return new zt(a,h)};function zt(a,h){ue.call(this),this.g=new Hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cs(this)}S(zt,ue),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){tc(this.g)},zt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ht(a),a=p);h.i.push(new q0(h.Ya++,a)),h.G==3&&Bo(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,tc(this.g),delete this.g,zt.aa.N.call(this)};function nf(a){zl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(nf,zl);function rf(){Gl.call(this),this.status=1}S(rf,Gl);function cs(a){this.g=a}S(cs,tf),cs.prototype.ua=function(){ye(this.g,"a")},cs.prototype.ta=function(a){ye(this.g,new nf(a))},cs.prototype.sa=function(a){ye(this.g,new rf)},cs.prototype.ra=function(){ye(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Sy=function(){return new qo},Ry=function(){return ko()},by=Vr,lu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,ma=Do,vd.COMPLETE="complete",Ay=vd,pd.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",ue.prototype.listen=ue.prototype.K,wi=pd,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Iy=Xe}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});const Mp="@firebase/firestore",Lp="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new ml("@firebase/firestore");function ys(){return Yr.logLevel}function te(t,...e){if(Yr.logLevel<=Te.DEBUG){const n=e.map(gh);Yr.debug(`Firestore (${Zs}): ${t}`,...n)}}function Kn(t,...e){if(Yr.logLevel<=Te.ERROR){const n=e.map(gh);Yr.error(`Firestore (${Zs}): ${t}`,...n)}}function Bs(t,...e){if(Yr.logLevel<=Te.WARN){const n=e.map(gh);Yr.warn(`Firestore (${Zs}): ${t}`,...n)}}function gh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cy(t,r,n)}function Cy(t,e,n){let r=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Cy(e,s,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class CR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PR{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Py(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class kR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Up{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Up(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Up(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=xR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function cu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=ky(),o=OR(i.encode(Fp(t,n)),i.encode(Fp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Fp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function OR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=-62135596800,Bp=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Bp);return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$p)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$p;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new nt(0,0))}static max(){return new de(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):cu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class Oe extends _n{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const VR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends _n{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return VR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jp}static keyField(){return new yt([jp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Oe.fromString(e))}static fromName(e){return new oe(Oe.fromString(e).popFirst(5))}static empty(){return new oe(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=-1;function MR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Rr(s,oe.empty(),e)}function LR(t){return new Rr(t.readTime,t.key,eo)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(de.min(),oe.empty(),eo)}static max(){return new Rr(de.max(),oe.empty(),eo)}}function UR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==FR)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function BR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}wl.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=-1;function Eo(t){return t==null}function $a(t){return t===0&&1/t==-1/0}function jR(t){return typeof t=="number"&&Number.isInteger(t)&&!$a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="";function qR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qp(e)),e=HR(t.get(n),e);return qp(e)}function HR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ny:n+="";break;default:n+=i}}return n}function qp(t){return t+Ny+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zp(this.data.getIterator())}getIteratorFrom(e){return new zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new rt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Oy("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const zR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=zR.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="server_timestamp",My="__type__",Ly="__previous_value__",Uy="__local_write_time__";function Il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[My])===null||n===void 0?void 0:n.stringValue)===Vy}function Al(t){const e=t.mapValue.fields[Ly];return Il(e)?Al(e):e}function to(t){const e=Sr(t.mapValue.fields[Uy].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const uu="(default)";class no{constructor(e,n){this.projectId=e,this.database=n||uu}static empty(){return new no("","")}get isDefaultDatabase(){return this.database===uu}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="__type__",WR="__max__",Zo={mapValue:{}},$y="__vector__",Ba="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Il(t)?4:QR(t)?9007199254740991:KR(t)?10:11:le(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cr(s.bytesValue).isEqual(Cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?$a(o)===$a(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Hp(o)!==Hp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Pn(o[c],l[c])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function ro(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Gp(t.timestampValue,e.timestampValue);case 4:return Gp(to(t),to(e));case 5:return cu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Cr(i),c=Cr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ve(l[u],c[u]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(Ye(i.latitude),Ye(o.latitude));return l!==0?l:ve(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const f=i.fields||{},g=o.fields||{},m=(l=f[Ba])===null||l===void 0?void 0:l.arrayValue,S=(c=g[Ba])===null||c===void 0?void 0:c.arrayValue,P=ve(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Wp(m,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zo.mapValue&&o===Zo.mapValue)return 0;if(i===Zo.mapValue)return 1;if(o===Zo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=cu(c[f],d[f]);if(g!==0)return g;const m=qs(l[c[f]],u[d[f]]);if(m!==0)return m}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw le(23264,{Pe:n})}}function Gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Sr(t),r=Sr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Wp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Hs(t){return hu(t)}function hu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hu(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function _a(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Al(t);return e?16+_a(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_a(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return xr(r.fields,(i,o)=>{s+=i.length+_a(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function ja(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function du(t){return!!t&&"integerValue"in t}function _h(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function Qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ya(t){return!!t&&"mapValue"in t}function KR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fy])===null||n===void 0?void 0:n.stringValue)===$y}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Li(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ya(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Li(this.value))}}function By(t){const e=[];return xr(t.fields,(n,r)=>{const s=new yt([n]);if(ya(r)){const i=By(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,de.min(),de.min(),de.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,de.min(),de.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,de.min(),de.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.position=e,this.inclusive=n}}function Xp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function XR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{}class Ze extends jy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JR(e,n,r):n==="array-contains"?new t2(e,r):n==="in"?new n2(e,r):n==="not-in"?new r2(e,r):n==="array-contains-any"?new s2(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZR(e,r):new e2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends jy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new dn(e,n)}matches(e){return qy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function qy(t){return t.op==="and"}function Hy(t){return YR(t)&&qy(t)}function YR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function fu(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(Hy(t))return t.filters.map(e=>fu(e)).join(",");{const e=t.filters.map(n=>fu(n)).join(",");return`${t.op}(${e})`}}function zy(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&zy(o,s.filters[l]),!0):!1}(t,e):void le(19439)}function Gy(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Gy).join(" ,")+"}"}(t):"Filter"}class JR extends Ze{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZR extends Ze{constructor(e,n){super(e,"in",n),this.keys=Wy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class e2 extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Wy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class t2 extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _h(n)&&ro(n.arrayValue,this.value)}}class n2 extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class r2 extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ro(this.value.arrayValue,n)}}class s2 extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Jp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new i2(t,e,n,r,s,i,o)}function yh(t){const e=me(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.Ie=n}return e.Ie}function vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yp(t.startAt,e.startAt)&&Yp(t.endAt,e.endAt)}function pu(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function o2(t,e,n,r,s,i,o,l){return new ss(t,e,n,r,s,i,o,l)}function Ky(t){return new ss(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Eh(t){return t.collectionGroup!==null}function Ms(t){const e=me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new so(i,r))}),n.has(yt.keyField().canonicalString())||e.Ee.push(new so(yt.keyField(),r))}return e.Ee}function bn(t){const e=me(t);return e.de||(e.de=a2(e,Ms(t))),e.de}function a2(t,e){if(t.limitType==="F")return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)});const n=t.endAt?new zs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zs(t.startAt.position,t.startAt.inclusive):null;return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gu(t,e){const n=t.filters.concat([e]);return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qa(t,e,n){return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bl(t,e){return vh(bn(t),bn(e))&&t.limitType===e.limitType}function Qy(t){return`${yh(bn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gy(s)).join(", ")}]`),Eo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hs(s)).join(",")),`Target(${r})`}(bn(t))}; limitType=${t.limitType})`}function Rl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Xp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ms(r),s)||r.endAt&&!function(o,l,c){const u=Xp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ms(r),s))}(t,e)}function l2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xy(t){return(e,n)=>{let r=!1;for(const s of Ms(t)){const i=c2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function c2(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?qs(c,u):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=new Ke(oe.comparator);function Qn(){return u2}const Yy=new Ke(oe.comparator);function Ii(...t){let e=Yy;for(const n of t)e=e.insert(n.key,n);return e}function Jy(t){let e=Yy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return Ui()}function Zy(){return Ui()}function Ui(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const h2=new Ke(oe.comparator),d2=new rt(oe.comparator);function we(...t){let e=d2;for(const n of t)e=e.add(n);return e}const f2=new rt(ve);function p2(){return f2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function ev(t){return{integerValue:""+t}}function tv(t,e){return jR(e)?ev(e):Th(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this._=void 0}}function g2(t,e,n){return t instanceof Ha?function(s,i){const o={fields:{[My]:{stringValue:Vy},[Uy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Il(i)&&(i=Al(i)),i&&(o.fields[Ly]=i),{mapValue:o}}(n,e):t instanceof io?rv(t,e):t instanceof oo?sv(t,e):function(s,i){const o=nv(s,i),l=eg(o)+eg(s.Re);return du(o)&&du(s.Re)?ev(l):Th(s.serializer,l)}(t,e)}function m2(t,e,n){return t instanceof io?rv(t,e):t instanceof oo?sv(t,e):n}function nv(t,e){return t instanceof ao?function(r){return du(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ha extends Sl{}class io extends Sl{constructor(e){super(),this.elements=e}}function rv(t,e){const n=iv(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends Sl{constructor(e){super(),this.elements=e}}function sv(t,e){let n=iv(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class ao extends Sl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function eg(t){return Ye(t.integerValue||t.doubleValue)}function iv(t){return _h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n){this.field=e,this.transform=n}}function y2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof io&&s instanceof io||r instanceof oo&&s instanceof oo?js(r.elements,s.elements,Pn):r instanceof ao&&s instanceof ao?Pn(r.Re,s.Re):r instanceof Ha&&s instanceof Ha}(t.transform,e.transform)}class v2{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function ov(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wh(t.key,jt.none()):new To(t.key,t.data,jt.none());{const n=t.data,r=Vt.empty();let s=new rt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Or(t.key,r,new Wt(s.toArray()),jt.none())}}function E2(t,e,n){t instanceof To?function(s,i,o){const l=s.value.clone(),c=ng(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(s,i,o){if(!va(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ng(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(av(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fi(t,e,n,r){return t instanceof To?function(i,o,l,c){if(!va(i.precondition,o))return l;const u=i.value.clone(),d=rg(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,o,l,c){if(!va(i.precondition,o))return l;const u=rg(i.fieldTransforms,c,o),d=o.data;return d.setAll(av(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return va(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function T2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nv(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&js(r,s,(i,o)=>y2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends Cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends Cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function av(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ng(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,m2(o,l,n[s]))}return r}function rg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,g2(i,o,e))}return r}class wh extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lv extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&E2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ov(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,r)=>tg(n,r))&&js(this.baseMutations,e.baseMutations,(n,r)=>tg(n,r))}}class Ih{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return h2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ih(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,be;function cv(t){switch(t){case V.OK:return le(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function uv(t){if(t===void 0)return Kn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Je.OK:return V.OK;case Je.CANCELLED:return V.CANCELLED;case Je.UNKNOWN:return V.UNKNOWN;case Je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Je.INTERNAL:return V.INTERNAL;case Je.UNAVAILABLE:return V.UNAVAILABLE;case Je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Je.NOT_FOUND:return V.NOT_FOUND;case Je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Je.ABORTED:return V.ABORTED;case Je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Je.DATA_LOSS:return V.DATA_LOSS;default:return le(39323,{code:t})}}(be=Je||(Je={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=new wr([4294967295,4294967295],0);function sg(t){const e=ky().encode(t),n=new wy;return n.update(e),new Uint8Array(n.digest())}function ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class Ah{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ai(`Invalid padding: ${n}`);if(r<0)throw new Ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ai(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=wr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(b2)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=sg(e),[r,s]=ig(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ah(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=sg(e),[r,s]=ig(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pl(de.min(),s,new Ke(ve),Qn(),we())}}class wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wo(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class hv{constructor(e,n){this.targetId=e,this.Ce=n}}class dv{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class og{constructor(){this.Fe=0,this.Me=ag(),this.xe=vt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=we(),n=we(),r=we();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new wo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=ag()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Re(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class R2{constructor(e){this.ze=e,this.je=new Map,this.He=Qn(),this.Je=ea(),this.Ye=ea(),this.Ze=new Ke(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(pu(i))if(r===0){const o=new oe(i.path);this.tt(n,o,at.newNoDocument(o,de.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(c){if(c instanceof Oy)return Bs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ah(o,s,i)}catch(c){return Bs(c instanceof Ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&pu(l.target)){const c=new oe(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,at.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=we();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Pl(e,n,this.Ze,this.He,r);return this.He=Qn(),this.Je=ea(),this.Ye=ea(),this.Ze=new Ke(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new og,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new rt(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new rt(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new og),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ea(){return new Ke(oe.comparator)}function ag(){return new Ke(oe.comparator)}const S2={asc:"ASCENDING",desc:"DESCENDING"},C2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P2={and:"AND",or:"OR"};class k2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mu(t,e){return t.useProto3Json||Eo(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function D2(t,e){return za(t,e.toTimestamp())}function Qt(t){return Re(!!t,49232),de.fromTimestamp(function(n){const r=Sr(n);return new nt(r.seconds,r.nanos)}(t))}function bh(t,e){return _u(t,e).canonicalString()}function _u(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pv(t){const e=Oe.fromString(t);return Re(Ev(e),10190,{key:e.toString()}),e}function Ga(t,e){return bh(t.databaseId,e.path)}function $i(t,e){const n=pv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(mv(n))}function gv(t,e){return bh(t.databaseId,e)}function N2(t){const e=pv(t);return e.length===4?Oe.emptyPath():mv(e)}function yu(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mv(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function lg(t,e,n){return{name:Ga(t,e),fields:n.value.mapValue.fields}}function x2(t,e){return"found"in e?function(r,s){Re(!!s.found,43571),s.found.name,s.found.updateTime;const i=$i(r,s.found.name),o=Qt(s.found.updateTime),l=s.found.createTime?Qt(s.found.createTime):de.min(),c=new Vt({mapValue:{fields:s.found.fields}});return at.newFoundDocument(i,o,l,c)}(t,e):"missing"in e?function(r,s){Re(!!s.missing,3894),Re(!!s.readTime,22933);const i=$i(r,s.missing),o=Qt(s.readTime);return at.newNoDocument(i,o)}(t,e):le(7234,{result:e})}function O2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Re(d===void 0||typeof d=="string",58123),vt.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?V.UNKNOWN:uv(u.code);return new K(d,u.message||"")}(o);n=new dv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$i(t,r.document.name),i=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):de.min(),l=new Vt({mapValue:{fields:r.document.fields}}),c=at.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ea(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$i(t,r.document),i=r.readTime?Qt(r.readTime):de.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ea([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$i(t,r.document),i=r.removedTargetIds||[];n=new Ea([],i,s,null)}else{if(!("filter"in e))return le(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new A2(s,i),l=r.targetId;n=new hv(l,o)}}return n}function _v(t,e){let n;if(e instanceof To)n={update:lg(t,e.key,e.value)};else if(e instanceof wh)n={delete:Ga(t,e.key)};else if(e instanceof Or)n={update:lg(t,e.key,e.data),updateMask:q2(e.fieldMask)};else{if(!(e instanceof lv))return le(16599,{ft:e.type});n={verify:Ga(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:D2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function V2(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Qt(s.updateTime):Qt(i);return o.isEqual(de.min())&&(o=Qt(i)),new v2(o,s.transformResults||[])}(n,e))):[]}function M2(t,e){return{documents:[gv(t,e.path)]}}function L2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gv(t,s);const i=function(u){if(u.length!==0)return vv(dn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Es(g.field),direction:$2(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function U2(t){let e=N2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const g=yv(f);return g instanceof dn&&Hy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(S){return new so(Ts(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(f){let g;return g=typeof f=="object"?f.value:f,Eo(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new zs(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new zs(m,g)}(n.endAt)),o2(e,s,o,i,l,"F",c,u)}function F2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ts(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>yv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function $2(t){return S2[t]}function B2(t){return C2[t]}function j2(t){return P2[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return yt.fromServerFormat(t.fieldPath)}function vv(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Qp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(Kp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(Kp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:B2(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>vv(s));return r.length===1?r[0]:{compositeFilter:{op:j2(n.op),filters:r}}}(t):le(54877,{filter:t})}function q2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ev(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.wt=e}}function z2(t){const e=U2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.Cn=new W2}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Rr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class W2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Tv=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(Tv,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Gs(0)}static lr(){return new Gs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="LruGarbageCollector",K2=1048576;function hg([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class Q2{constructor(e){this.Er=e,this.buffer=new rt(hg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();hg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class X2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te(ug,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?te(ug,"Ignoring IndexedDB error during garbage collection: ",n):await ei(n)}await this.mr(3e5)})}}class Y2{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(wl.le);const r=new Q2(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(cg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cg):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),ys()<=Te.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function J2(t,e){return new Y2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fi(r.mutation,s,Wt.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ii();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=Ui(),l=function(){return Ui()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Or)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Fi(d.mutation,u,d.mutation.getFieldMask(),nt.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return l.set(u,new eS(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ui();let s=new Ke((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=Zy();d.forEach(g=>{if(!i.has(g)){const m=ov(n.get(g),r.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Hr());let l=eo,c=i;return o.next(u=>B.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(d=>({batchId:l,changes:Jy(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=Ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ii();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(f,g){return new ss(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,at.newInvalidDocument(d)))});let l=Ii();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Fi(d.mutation,u,Wt.empty(),nt.now()),Rl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return B.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:z2(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.overlays=new Ke(oe.comparator),this.Qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Hr(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Hr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return B.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new I2(n,r));let i=this.Qr.get(n);i===void 0&&(i=we(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.$r=new rt(ot.Ur),this.Kr=new rt(ot.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ot(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ot(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new oe(new Oe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new oe(new Oe([])),r=new ot(n,e),s=new ot(n,e+1);let i=we();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return oe.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new rt(ot.Ur)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?mh:this.nr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ve);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),B.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new ot(new oe(i),0);let l=new rt(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),B.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return B.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ot(n,0),s=this.Xr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.ii=e,this.docs=function(){return new Ke(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||UR(LR(d),r)<=0||(s.has(d.key)||Rl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}si(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aS(this)}getSize(e){return B.resolve(this.size)}}class aS extends Z2{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.persistence=e,this.oi=new is(n=>yh(n),vh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Rh,this.targetCount=0,this.ui=Gs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),B.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Tr(n),B.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.ci={},this.overlays={},this.li=new wl(0),this.hi=!1,this.hi=!0,this.Pi=new sS,this.referenceDelegate=e(this),this.Ti=new lS(this),this.indexManager=new G2,this.remoteDocumentCache=function(s){return new oS(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new H2(n),this.Ei=new nS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new iS(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new cS(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return B.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class cS extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class Sh{constructor(e){this.persistence=e,this.Vi=new Rh,this.mi=null}static fi(e){return new Sh(e)}get gi(){if(this.mi)return this.mi;throw le(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.gi,r=>{const s=oe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return B.or([()=>B.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Wa{constructor(e,n){this.persistence=e,this.yi=new is(r=>qR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=J2(this,n)}static fi(e,n){return new Wa(e,n)}di(){}Ai(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return B.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),B.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_a(e.data.value)),n}Dr(e,n,r){return B.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ch(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return rI()?8:BR(Ct())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uS;return this.bs(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ys()<=Te.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),B.resolve()):(ys()<=Te.DEBUG&&te("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ys()<=Te.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):B.resolve())}ws(e,n){if(Zp(n))return B.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qa(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,qa(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return Zp(n)||s.isEqual(de.min())?B.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(ys()<=Te.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.Fs(e,o,n,MR(s,eo)).next(l=>l))})}vs(e,n){let r=new rt(Xy(e));return n.forEach((s,i)=>{Rl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return ys()<=Te.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",vs(n)),this.ys.getDocumentsMatchingQuery(e,n,Rr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="LocalStore",dS=3e8;class fS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ke(ve),this.Os=new is(i=>yh(i),vh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function pS(t,e,n,r){return new fS(t,e,n,r)}async function Iv(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function gS(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,g=f.keys();let m=B.resolve();return g.forEach(S=>{m=m.next(()=>d.getEntry(c,S)).next(P=>{const b=u.docVersions.get(S);Re(b!==null,48541),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),m.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Av(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function mS(t,e){const n=me(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(vt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,r)),s=s.insert(f,m),function(P,b,x){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=dS?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,m,d)&&l.push(n.Ti.updateTargetData(i,m))});let c=Qn(),u=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(_S(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(de.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(f=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function _S(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Ph,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function yS(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=mh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vS(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function vu(t,e,n){const r=me(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ti(o))throw o;te(Ph,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function dg(t,e,n){const r=me(t);let s=de.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=me(c),g=f.Os.get(d);return g!==void 0?B.resolve(f.xs.get(g)):f.Ti.getTargetData(u,d)}(r,o,bn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:we())).next(l=>(ES(r,l2(e),l),{documents:l,$s:i})))}function ES(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class fg{constructor(){this.activeTargetIds=p2()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TS{constructor(){this.xo=new fg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="ConnectivityMonitor";class gg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(pg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(pg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=null;function Eu(){return ta===null?ta=function(){return 268435456+Math.round(2147483648*Math.random())}():ta++,"0x"+ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="RestConnection",IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===uu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Eu(),l=this.jo(e,n.toUriEncodedString());te(Rc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=ns(u);return this.Jo(e,l,c,r,d).then(f=>(te(Rc,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Bs(Rc,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=IS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class RS extends AS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Eu();return new Promise((l,c)=>{const u=new Iy;u.setWithCredentials(!0),u.listenOnce(Ay.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ma.NO_ERROR:const f=u.getResponseJson();te(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case ma.TIMEOUT:te(At,`RPC '${e}' ${o} timed out`),c(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case ma.HTTP_ERROR:const g=u.getStatus();if(te(At,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const P=function(x){const O=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(S.status);c(new K(P,S.message))}else c(new K(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new K(V.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(At,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);te(At,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Eu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sy(),l=Ry(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(At,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let g=!1,m=!1;const S=new bS({Zo:b=>{m?te(At,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(g||(te(At,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),te(At,`RPC '${e}' stream ${s} sending:`,b),f.send(b))},Xo:()=>f.close()}),P=(b,x,O)=>{b.listen(x,M=>{try{O(M)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,wi.EventType.OPEN,()=>{m||(te(At,`RPC '${e}' stream ${s} transport opened.`),S.__())}),P(f,wi.EventType.CLOSE,()=>{m||(m=!0,te(At,`RPC '${e}' stream ${s} transport closed`),S.u_())}),P(f,wi.EventType.ERROR,b=>{m||(m=!0,Bs(At,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),S.u_(new K(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,wi.EventType.MESSAGE,b=>{var x;if(!m){const O=b.data[0];Re(!!O,16349);const M=O,L=(M==null?void 0:M.error)||((x=M[0])===null||x===void 0?void 0:x.error);if(L){te(At,`RPC '${e}' stream ${s} received error:`,L);const ne=L.status;let Z=function(y){const I=Je[y];if(I!==void 0)return uv(I)}(ne),R=L.message;Z===void 0&&(Z=V.INTERNAL,R="Unknown error status: "+ne+" with message "+L.message),m=!0,S.u_(new K(Z,R)),f.close()}else te(At,`RPC '${e}' stream ${s} received:`,O),S.c_(O)}}),P(l,by.STAT_EVENT,b=>{b.stat===lu.PROXY?te(At,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===lu.NOPROXY&&te(At,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return new k2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="PersistentStream";class bv{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new kh(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return te(mg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(te(mg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SS extends bv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=O2(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Qt(o.readTime):de.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=yu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=pu(c)?{documents:M2(i,c)}:{query:L2(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fv(i,o.resumeToken);const u=mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=za(i,o.snapshotVersion.toTimestamp());const u=mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=F2(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=yu(this.serializer),n.removeTarget=e,this.L_(n)}}class CS extends bv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=V2(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=yu(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_v(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{}class kS extends PS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,_u(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(V.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,_u(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(V.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class DS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Kn(n),this.oa=!1):te("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class NS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{os(this)&&(te(Jr,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.Ta.add(4),await Io(u),u.da.set("Unknown"),u.Ta.delete(4),await Dl(u)}(this))})}),this.da=new DS(r,s)}}async function Dl(t){if(os(t))for(const e of t.Ia)await e(!0)}async function Io(t){for(const e of t.Ia)await e(!1)}function Rv(t,e){const n=me(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Oh(n)?xh(n):ni(n).M_()&&Nh(n,e))}function Dh(t,e){const n=me(t),r=ni(n);n.Pa.delete(e),r.M_()&&Sv(n,e),n.Pa.size===0&&(r.M_()?r.N_():os(n)&&n.da.set("Unknown"))}function Nh(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ni(t).H_(e)}function Sv(t,e){t.Aa.Ke(e),ni(t).J_(e)}function xh(t){t.Aa=new R2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ni(t).start(),t.da._a()}function Oh(t){return os(t)&&!ni(t).F_()&&t.Pa.size>0}function os(t){return me(t).Ta.size===0}function Cv(t){t.Aa=void 0}async function xS(t){t.da.set("Online")}async function OS(t){t.Pa.forEach((e,n)=>{Nh(t,e)})}async function VS(t,e){Cv(t),Oh(t)?(t.da.ca(e),xh(t)):t.da.set("Unknown")}async function MS(t,e,n){if(t.da.set("Online"),e instanceof dv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(t,e)}catch(r){te(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof Ea?t.Aa.Xe(e):e instanceof hv?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(de.min()))try{const r=await Av(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),Sv(i,c);const f=new mr(d.target,c,u,d.sequenceNumber);Nh(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te(Jr,"Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!ti(e))throw e;t.Ta.add(1),await Io(t),t.da.set("Offline"),n||(n=()=>Av(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Jr,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Dl(t)})}function Pv(t,e){return e().catch(n=>Ka(t,n,e))}async function Nl(t){const e=me(t),n=kr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:mh;for(;LS(e);)try{const s=await yS(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,US(e,s)}catch(s){await Ka(e,s)}kv(e)&&Dv(e)}function LS(t){return os(t)&&t.ha.length<10}function US(t,e){t.ha.push(e);const n=kr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function kv(t){return os(t)&&!kr(t).F_()&&t.ha.length>0}function Dv(t){kr(t).start()}async function FS(t){kr(t).ta()}async function $S(t){const e=kr(t);for(const n of t.ha)e.Z_(n.mutations)}async function BS(t,e,n){const r=t.ha.shift(),s=Ih.from(r,e,n);await Pv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nl(t)}async function jS(t,e){e&&kr(t).Y_&&await async function(r,s){if(function(o){return cv(o)&&o!==V.ABORTED}(s.code)){const i=r.ha.shift();kr(r).O_(),await Pv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nl(r)}}(t,e),kv(t)&&Dv(t)}async function _g(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),te(Jr,"RemoteStore received new credentials");const r=os(n);n.Ta.add(3),await Io(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Dl(n)}async function qS(t,e){const n=me(t);e?(n.Ta.delete(2),await Dl(n)):e||(n.Ta.add(2),await Io(n),n.da.set("Unknown"))}function ni(t){return t.Ra||(t.Ra=function(n,r,s){const i=me(n);return i.ra(),new SS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:xS.bind(null,t),n_:OS.bind(null,t),i_:VS.bind(null,t),j_:MS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Oh(t)?xh(t):t.da.set("Unknown")):(await t.Ra.stop(),Cv(t))})),t.Ra}function kr(t){return t.Va||(t.Va=function(n,r,s){const i=me(n);return i.ra(),new CS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:FS.bind(null,t),i_:jS.bind(null,t),X_:$S.bind(null,t),ea:BS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Nl(t)):(await t.Va.stop(),t.ha.length>0&&(te(Jr,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Vh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mh(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),ti(t))return new K(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ii(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.ma=new Ke(oe.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):le(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ws(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class zS{constructor(){this.queries=vg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=vg(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function vg(){return new is(t=>Qy(t),bl)}async function GS(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new HS,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Mh(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&Lh(n)}async function WS(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function KS(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&Lh(n)}function QS(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function Lh(t){t.ba.forEach(e=>{e.next()})}var Tu,Eg;(Eg=Tu||(Tu={})).Ca="default",Eg.Cache="cache";class XS{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Tu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.key=e}}class xv{constructor(e){this.key=e}}class YS{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=we(),this.mutatedKeys=we(),this.Ha=Xy(e),this.Ja=new Ls(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new yg,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),m=Rl(this.query,f)?f:null,S=!!g&&this.mutatedKeys.has(g.key),P=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;g&&m?g.data.isEqual(m.data)?S!==P&&(r.track({type:3,doc:m}),b=!0):this.eu(g,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.Ha(m,c)>0||u&&this.Ha(m,u)<0)&&(l=!0)):!g&&m?(r.track({type:0,doc:m}),b=!0):g&&!m&&(r.track({type:1,doc:g}),b=!0,(c||u)&&(l=!0)),b&&(m?(o=o.add(m),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,f)=>function(m,S){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Vt:b})}};return P(m)-P(S)}(d.type,f.type)||this.Ha(d.doc,f.doc)),this.tu(r),s=s!=null&&s;const l=n&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Ws(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new yg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=we(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new xv(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new Nv(r))}),n}su(e){this.Ga=e.$s,this.ja=we();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Ws.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Uh="SyncEngine";class JS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZS{constructor(e){this.key=e,this._u=!1}}class eC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new is(l=>Qy(l),bl),this.cu=new Map,this.lu=new Set,this.hu=new Ke(oe.comparator),this.Pu=new Map,this.Tu=new Rh,this.Iu={},this.Eu=new Map,this.du=Gs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function tC(t,e,n=!0){const r=Fv(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Ov(r,e,n,!0),s}async function nC(t,e){const n=Fv(t);await Ov(n,e,!0,!1)}async function Ov(t,e,n,r){const s=await vS(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await rC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Rv(t.remoteStore,s),l}async function rC(t,e,n,r,s){t.Ru=(f,g,m)=>async function(P,b,x,O){let M=b.view.Za(x);M.Cs&&(M=await dg(P.localStore,b.query,!1).then(({documents:R})=>b.view.Za(R,M)));const L=O&&O.targetChanges.get(b.targetId),ne=O&&O.targetMismatches.get(b.targetId)!=null,Z=b.view.applyChanges(M,P.isPrimaryClient,L,ne);return wg(P,b.targetId,Z.ru),Z.snapshot}(t,f,g,m);const i=await dg(t.localStore,e,!0),o=new YS(e,i.$s),l=o.Za(i.documents),c=wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);wg(t,n,u.ru);const d=new JS(e,n,o);return t.uu.set(e,d),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),u.snapshot}async function sC(t,e,n){const r=me(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!bl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dh(r.remoteStore,s.targetId),wu(r,s.targetId)}).catch(ei)):(wu(r,s.targetId),await vu(r.localStore,s.targetId,!0))}async function iC(t,e){const n=me(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dh(n.remoteStore,r.targetId))}async function oC(t,e,n){const r=fC(t);try{const s=await function(o,l){const c=me(o),u=nt.now(),d=l.reduce((m,S)=>m.add(S.key),we());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let S=Qn(),P=we();return c.Bs.getEntries(m,d).next(b=>{S=b,S.forEach((x,O)=>{O.isValidDocument()||(P=P.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,S)).next(b=>{f=b;const x=[];for(const O of l){const M=T2(O,f.get(O.key).overlayedDocument);M!=null&&x.push(new Or(O.key,M,By(M.value.mapValue),jt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,x,l)}).next(b=>{g=b;const x=b.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(m,b.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Jy(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Ke(ve)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ao(r,s.changes),await Nl(r.remoteStore)}catch(s){const i=Mh(s,"Failed to persist write");n.reject(i)}}async function Vv(t,e){const n=me(t);try{const r=await mS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Re(o._u,14607):s.removedDocuments.size>0&&(Re(o._u,42227),o._u=!1))}),await Ao(n,r,e)}catch(r){await ei(r)}}function Tg(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.ya)g.Da(l)&&(u=!0)}),u&&Lh(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aC(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Ke(oe.comparator);o=o.insert(i,at.newNoDocument(i,de.min()));const l=we().add(i),c=new Pl(de.min(),new Map,new Ke(ve),o,l);await Vv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Fh(r)}else await vu(r.localStore,e,!1).then(()=>wu(r,e,n)).catch(ei)}async function lC(t,e){const n=me(t),r=e.batch.batchId;try{const s=await gS(n.localStore,e);Lv(n,r,null),Mv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,s)}catch(s){await ei(s)}}async function cC(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Re(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Lv(r,e,n),Mv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,s)}catch(s){await ei(s)}}function Mv(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Lv(t,e,n){const r=me(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function wu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||Uv(t,r)})}function Uv(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Dh(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Fh(t))}function wg(t,e,n){for(const r of n)r instanceof Nv?(t.Tu.addReference(r.key,e),uC(t,r)):r instanceof xv?(te(Uh,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||Uv(t,r.key)):le(19791,{mu:r})}function uC(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(te(Uh,"New document in limbo: "+n),t.lu.add(r),Fh(t))}function Fh(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new oe(Oe.fromString(e)),r=t.du.next();t.Pu.set(r,new ZS(n)),t.hu=t.hu.insert(n,r),Rv(t.remoteStore,new mr(bn(Ky(n.path)),r,"TargetPurposeLimboResolution",wl.le))}}async function Ao(t,e,n){const r=me(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ch.Rs(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,g=>B.forEach(g.ds,m=>d.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>B.forEach(g.As,m=>d.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!ti(f))throw f;te(Ph,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=d.xs.get(g),S=m.snapshotVersion,P=m.withLastLimboFreeSnapshotVersion(S);d.xs=d.xs.insert(g,P)}}}(r.localStore,i))}async function hC(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){te(Uh,"User change. New user:",e.toKey());const r=await Iv(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new K(V.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.ks)}}function dC(t,e){const n=me(t),r=n.Pu.get(e);if(r&&r._u)return we().add(r.key);{let s=we();const i=n.cu.get(e);if(!i)return s;for(const o of i){const l=n.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Fv(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aC.bind(null,e),e.au.j_=KS.bind(null,e.eventManager),e.au.Vu=QS.bind(null,e.eventManager),e}function fC(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cC.bind(null,e),e}class Qa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return pS(this.persistence,new hS,e.initialUser,this.serializer)}yu(e){return new wv(Sh.fi,this.serializer)}pu(e){return new TS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qa.provider={build:()=>new Qa};class pC extends Qa{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Re(this.persistence.referenceDelegate instanceof Wa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new X2(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new wv(r=>Wa.fi(r,n),this.serializer)}}class Iu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hC.bind(null,this.syncEngine),await qS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zS}()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),r=function(i){return new RS(i)}(e.databaseInfo);return function(i,o,l,c){return new kS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new NS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tg(this.syncEngine,n,0),function(){return gg.C()?new gg:new wS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const f=new eC(s,i,o,l,c,u);return d&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);te(Jr,"RemoteStore shutting down."),i.Ta.add(5),await Io(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Iu.provider={build:()=>new Iu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=me(s),l={documents:i.map(f=>Ga(o.serializer,f))},c=await o.Yo("BatchGetDocuments",o.serializer.databaseId,Oe.emptyPath(),l,i.length),u=new Map;c.forEach(f=>{const g=x2(o.serializer,f);u.set(g.key.toString(),g)});const d=[];return i.forEach(f=>{const g=u.get(f.toString());Re(!!g,55234,{key:f}),d.push(g)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=oe.fromPath(r);this.mutations.push(new lv(s,this.precondition(s)))}),await async function(r,s){const i=me(r),o={writes:s.map(l=>_v(i.serializer,l))};await i.zo("Commit",i.serializer.databaseId,Oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw le(50498,{qu:e.constructor.name});n=de.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(de.min())?jt.exists(!1):jt.updateTime(n):jt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(de.min()))throw new K(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return jt.updateTime(n)}return jt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new kh(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new mC(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!Eo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!cv(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirestoreClient";class yC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=Dy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),te(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Iv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ig(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vC(t);te(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_g(e.remoteStore,s)),t._onlineComponents=e}async function vC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Dr,"Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new Qa)}}else te(Dr,"Using default OfflineComponentProvider"),await Cc(t,new pC(void 0));return t._offlineComponents}async function $h(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Dr,"Using user provided OnlineComponentProvider"),await Ig(t,t._uninitializedComponentsProvider._online)):(te(Dr,"Using default OnlineComponentProvider"),await Ig(t,new Iu))),t._onlineComponents}function EC(t){return $h(t).then(e=>e.syncEngine)}function TC(t){return $h(t).then(e=>e.datastore)}async function wC(t){const e=await $h(t),n=e.eventManager;return n.onListen=tC.bind(null,e.syncEngine),n.onUnlisten=sC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iC.bind(null,e.syncEngine),n}function IC(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new gC({next:g=>{d.Cu(),o.enqueueAndForget(()=>WS(i,f)),g.fromCache&&c.source==="server"?u.reject(new K(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new XS(l,d,{includeMetadataChanges:!0,La:!0});return GS(i,f)}(await wC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e,n){if(!n)throw new K(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AC(t,e,n,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bg(t){if(!oe.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(oe.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firestore.googleapis.com",Sg=!0;class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jv,this.ssl=Sg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Sg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Tv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<K2)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$v((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SR;switch(r.type){case"firstParty":return new DR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(te("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function bC(t,e,n,r={}){var s;t=lo(t,Ol);const i=ns(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(rh(`https://${c}`),sh("Firestore",!0)),o.host!==jv&&o.host!==c&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Qr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=bt.MOCK_USER;else{d=L_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new bt(g)}t._authCredentials=new CR(new Py(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class Xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Ir extends Jn{constructor(e,n,r){super(e,n,Ky(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new oe(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Xa(t,e,...n){if(t=qe(t),Bv("collection","path",e),t instanceof Ol){const r=Oe.fromString(e,...n);return Rg(r),new Ir(t,null,r)}{if(!(t instanceof Xt||t instanceof Ir))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Rg(r),new Ir(t.firestore,null,r)}}function Au(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Dy.newId()),Bv("doc","path",e),t instanceof Ol){const r=Oe.fromString(e,...n);return bg(r),new Xt(t,null,new oe(r))}{if(!(t instanceof Xt||t instanceof Ir))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return bg(r),new Xt(t.firestore,t instanceof Ir?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="AsyncQueue";class kg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new kh(this,"async_queue_retry"),this.ec=()=>{const r=Sc();r&&te(Pg,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new $n;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ti(e))throw e;te(Pg,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Kn("INTERNAL UNHANDLED ERROR: ",Dg(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=Vh.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&le(47125,{_c:Dg(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Dg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Vl extends Ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new kg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kg(e),this._firestoreClient=void 0,await e}}}function RC(t,e){const n=typeof t=="object"?t:_l(),r=typeof t=="string"?t:e,s=Ys(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=O_("firestore");i&&bC(s,...i)}return s}function Bh(t){if(t._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SC(t),t._firestoreClient}function SC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new GR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,$v(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(vt.fromBase64String(e))}catch(n){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=/^__.*__$/;class PC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}class qv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{hc:t})}}class Hh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Ya(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Hv(this.hc)&&CC.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class kC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kl(e)}gc(e,n,r,s=!1){return new Hh({hc:e,methodName:n,fc:r,path:yt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ul(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new kC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zv(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);Gh("Data must be an object, but it was:",o,r);const l=Wv(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const g=bu(e,f,n);if(!o.contains(g))throw new K(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Qv(d,g)||d.push(g)}c=new Wt(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new PC(new Vt(l),c,u)}class Fl extends Ll{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fl}}class zh extends Ll{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new ao(e.serializer,tv(e.serializer,this.wc));return new _2(e.path,n)}isEqual(e){return e instanceof zh&&this.wc===e.wc}}function DC(t,e,n,r){const s=t.gc(1,e,n);Gh("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();xr(r,(c,u)=>{const d=Wh(e,c,n);u=qe(u);const f=s.Ac(d);if(u instanceof Fl)i.push(d);else{const g=bo(u,f);g!=null&&(i.push(d),o.set(d,g))}});const l=new Wt(i);return new qv(o,l,s.fieldTransforms)}function NC(t,e,n,r,s,i){const o=t.gc(1,e,n),l=[bu(e,r,n)],c=[s];if(i.length%2!=0)throw new K(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(bu(e,i[g])),c.push(i[g+1]);const u=[],d=Vt.empty();for(let g=l.length-1;g>=0;--g)if(!Qv(u,l[g])){const m=l[g];let S=c[g];S=qe(S);const P=o.Ac(m);if(S instanceof Fl)u.push(m);else{const b=bo(S,P);b!=null&&(u.push(m),d.set(m,b))}}const f=new Wt(u);return new qv(d,f,o.fieldTransforms)}function Gv(t,e,n,r=!1){return bo(n,t.gc(r?4:3,e))}function bo(t,e){if(Kv(t=qe(t)))return Gh("Unsupported field value:",e,t),Wv(t,e);if(t instanceof Ll)return function(r,s){if(!Hv(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=bo(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:za(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:za(s.serializer,i)}}if(r instanceof jh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:fv(s.serializer,r._byteString)};if(r instanceof Xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qh)return function(o,l){return{mapValue:{fields:{[Fy]:{stringValue:$y},[Ba]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Th(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${xl(r)}`)}(t,e)}function Wv(t,e){const n={};return xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,s)=>{const i=bo(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Kv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof jh||t instanceof Zr||t instanceof Xt||t instanceof Ll||t instanceof qh)}function Gh(t,e,n){if(!Kv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xl(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function bu(t,e,n){if((e=qe(e))instanceof Ml)return e._internalPath;if(typeof e=="string")return Wh(t,e);throw Ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const xC=new RegExp("[~\\*/\\[\\]]");function Wh(t,e,n){if(e.search(xC)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ml(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(V.INVALID_ARGUMENT,l+t+c)}function Qv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OC extends co{data(){return super.data()}}function Kh(t,e){return typeof e=="string"?Wh(t,e):e instanceof Ml?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qh{}class $l extends Qh{}function Ng(t,e,...n){let r=[];e instanceof Qh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Yh).length,l=i.filter(c=>c instanceof Xh).length;if(o>1||o>0&&l>0)throw new K(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xh extends $l{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){const n=this._parse(e);return Xv(e._query,n),new Jn(e.firestore,e.converter,gu(e._query,n))}_parse(e){const n=Ul(e.firestore);return function(i,o,l,c,u,d,f){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mg(f,d);const S=[];for(const P of f)S.push(Vg(c,i,P));g={arrayValue:{values:S}}}else g=Vg(c,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mg(f,d),g=Gv(l,o,f,d==="in"||d==="not-in");return Ze.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Yh extends Qh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Xv(o,c),o=gu(o,c)}(e._query,n),new Jn(e.firestore,e.converter,gu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jh extends $l{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Jh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new so(i,o)}(e._query,this._field,this._direction);return new Jn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ss(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function xg(t,e="asc"){const n=e,r=Kh("orderBy",t);return Jh._create(r,n)}class Zh extends $l{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Zh(e,n,r)}_apply(e){return new Jn(e.firestore,e.converter,qa(e._query,this._limit,this._limitType))}}function Og(t){return Zh._create("limit",t,"F")}class ed extends $l{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ed(e,n,r)}_apply(e){const n=LC(e,this.type,this._docOrFields,this._inclusive);return new Jn(e.firestore,e.converter,function(s,i){return new ss(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function MC(...t){return ed._create("startAfter",t,!1)}function LC(t,e,n,r){if(n[0]=qe(n[0]),n[0]instanceof co)return function(i,o,l,c,u){if(!c)throw new K(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const f of Ms(i))if(f.field.isKeyField())d.push(ja(o,c.key));else{const g=c.data.field(f.field);if(Il(g))throw new K(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const m=f.field.canonicalString();throw new K(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}d.push(g)}return new zs(d,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Ul(t.firestore);return function(o,l,c,u,d,f){const g=o.explicitOrderBy;if(d.length>g.length)throw new K(V.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let S=0;S<d.length;S++){const P=d[S];if(g[S].field.isKeyField()){if(typeof P!="string")throw new K(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof P}`);if(!Eh(o)&&P.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${P}' contains a slash.`);const b=o.path.child(Oe.fromString(P));if(!oe.isDocumentKey(b))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const x=new oe(b);m.push(ja(l,x))}else{const b=Gv(c,u,P);m.push(b)}}return new zs(m,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Vg(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new K(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eh(e)&&n.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!oe.isDocumentKey(r))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ja(t,new oe(r))}if(n instanceof Xt)return ja(t,n._key);throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xl(n)}.`)}function Mg(t,e){if(!Array.isArray(t)||t.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Yv{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ba].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new qh(i)}convertGeoPoint(e){return new jh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Al(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Re(Ev(r),9688,{name:e});const s=new no(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class UC extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zv extends co{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends Zv{data(e={}){return super.data(e)}}class FC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:$C(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $C(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}class e0 extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function t0(t){t=lo(t,Jn);const e=lo(t.firestore,Vl),n=Bh(e),r=new e0(e);return VC(t._query),IC(n,t._query).then(s=>new FC(e,r,t,s))}function BC(t,e){const n=lo(t.firestore,Vl),r=Au(t),s=Jv(t.converter,e);return jC(n,[zv(Ul(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function jC(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>oC(await EC(r),s,i)),i.promise}(Bh(t),e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC={maxAttempts:5};function Ri(t,e){if((t=qe(t)).firestore!==e)throw new K(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ul(e)}get(e){const n=Ri(e,this._firestore),r=new UC(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return le(24041);const i=s[0];if(i.isFoundDocument())return new co(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new co(this._firestore,r,n._key,null,n.converter);throw le(18433,{doc:i})})}set(e,n,r){const s=Ri(e,this._firestore),i=Jv(s.converter,n,r),o=zv(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Ri(e,this._firestore);let o;return o=typeof(n=qe(n))=="string"||n instanceof Ml?NC(this._dataReader,"Transaction.update",i._key,n,r,s):DC(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Ri(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC extends HC{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ri(e,this._firestore),r=new e0(this._firestore);return super.get(e).then(s=>new Zv(this._firestore,r,n._key,s._document,new bi(!1,!1),n.converter))}}function GC(t,e,n){t=lo(t,Vl);const r=Object.assign(Object.assign({},qC),n);return function(i){if(i.maxAttempts<1)throw new K(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,l){const c=new $n;return i.asyncQueue.enqueueAndForget(async()=>{const u=await TC(i);new _C(i.asyncQueue,u,l,o,c).$u()}),c.promise}(Bh(t),s=>e(new zC(t,s)),r)}function Lg(t){return new zh("increment",t)}(function(e,n=!0){(function(s){Zs=s})(rs),zn(new Cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vl(new PR(r.getProvider("auth-internal")),new NR(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cn(Mp,Lp,e),cn(Mp,Lp,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firebasestorage.googleapis.com",r0="storageBucket",WC=2*60*1e3,KC=10*60*1e3,QC=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends kn{constructor(e,n,r=0){super(Pc(e),`Firebase Storage: ${n} (${Pc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function Pc(t){return"storage/"+t}function td(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(Be.UNKNOWN,t)}function XC(t){return new Qe(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function YC(t){return new Qe(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(Be.UNAUTHENTICATED,t)}function ZC(){return new Qe(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eP(t){return new Qe(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function s0(){return new Qe(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function i0(){return new Qe(Be.CANCELED,"User canceled the upload/download.")}function tP(t){return new Qe(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function nP(t){return new Qe(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rP(){return new Qe(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+r0+"' property when initializing the app?")}function o0(){return new Qe(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sP(){return new Qe(Be.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iP(){return new Qe(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oP(t){return new Qe(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ru(t){return new Qe(Be.INVALID_ARGUMENT,t)}function a0(){return new Qe(Be.APP_DELETED,"The Firebase app was deleted.")}function aP(t){return new Qe(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bi(t,e){return new Qe(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ei(t){throw new Qe(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw nP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${d}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},P=n===n0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",x=new RegExp(`^https?://${P}/${s}/${b}`,"i"),M=[{regex:l,indices:c,postModify:i},{regex:m,indices:S,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<M.length;L++){const ne=M[L],Z=ne.regex.exec(e);if(Z){const R=Z[ne.indices.bucket];let v=Z[ne.indices.path];v||(v=""),r=new Kt(R,v),ne.postModify(r);break}}if(r==null)throw tP(e);return r}}class lP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...b){u||(u=!0,e.apply(null,b))}function f(b){s=setTimeout(()=>{s=null,t(m,c())},b)}function g(){i&&clearTimeout(i)}function m(b,...x){if(u){g();return}if(b){g(),d.call(null,b,...x);return}if(c()||o){g(),d.call(null,b,...x);return}r<64&&(r*=2);let M;l===1?(l=2,M=0):M=(r+Math.random())*1e3,f(M)}let S=!1;function P(b){S||(S=!0,g(),!u&&(s!==null?(b||(l=2),clearTimeout(s),f(0)):b||(l=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function uP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return t!==void 0}function dP(t){return typeof t=="function"}function fP(t){return typeof t=="object"&&!Array.isArray(t)}function Bl(t){return typeof t=="string"||t instanceof String}function Ug(t){return nd()&&t instanceof Blob}function nd(){return typeof Blob<"u"}function Fg(t,e,n,r){if(r<e)throw Ru(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ru(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function l0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,s,i,o,l,c,u,d,f,g=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new na(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Gr.NO_ERROR,c=i.getStatus();if(!l||c0(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Gr.ABORT;r(!1,new na(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new na(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());hP(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=td();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?a0():i0();o(c)}else{const c=s0();o(c)}};this.canceled_?n(!1,new na(!1,null,!0)):this.backoffId_=cP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class na{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vP(t,e,n,r,s,i,o=!0,l=!1){const c=l0(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return _P(d,e),gP(d,n),mP(d,i),yP(d,r),new pP(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TP(...t){const e=EP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(nd())return new Blob(t);throw new Qe(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){if(typeof atob>"u")throw oP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kc{constructor(e,n){this.data=e,this.contentType=n||null}}function AP(t,e){switch(t){case vn.RAW:return new kc(u0(e));case vn.BASE64:case vn.BASE64URL:return new kc(h0(t,e));case vn.DATA_URL:return new kc(RP(e),SP(e))}throw td()}function u0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bP(t){let e;try{e=decodeURIComponent(t)}catch{throw Bi(vn.DATA_URL,"Malformed data URL.")}return u0(e)}function h0(t,e){switch(t){case vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Bi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Bi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IP(e)}catch(s){throw s.message.includes("polyfill")?s:Bi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class d0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bi(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=CP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RP(t){const e=new d0(t);return e.base64?h0(vn.BASE64,e.rest):bP(e.rest)}function SP(t){return new d0(t).contentType}function CP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){let r=0,s="";Ug(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ug(this.data_)){const r=this.data_,s=wP(r,e,n);return s===null?null:new gr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gr(r,!0)}}static getBlob(...e){if(nd()){const n=e.map(r=>r instanceof gr?r.data_:r);return new gr(TP.apply(null,n))}else{const n=e.map(o=>Bl(o)?AP(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new gr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){let e;try{e=JSON.parse(t)}catch{return null}return fP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function p0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e){return e}class kt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||DP}}let ra=null;function NP(t){return!Bl(t)||t.length<2?t:p0(t)}function g0(){if(ra)return ra;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(i,o){return NP(o)}const n=new kt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new kt("size");return s.xform=r,t.push(s),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),ra=t,ra}function xP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function OP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return xP(r,t),r}function m0(t,e,n){const r=f0(e);return r===null?null:OP(t,r,n)}function VP(t,e,n,r){const s=f0(e);if(s===null||!Bl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,g="/b/"+o(d)+"/o/"+o(f),m=Ro(g,n,r),S=l0({alt:"media",token:u});return m+S})[0]}function _0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ri{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(!t)throw td()}function rd(t,e){function n(r,s){const i=m0(t,s,e);return Bn(i!==null),i}return n}function MP(t,e){function n(r,s){const i=m0(t,s,e);return Bn(i!==null),VP(i,s,t.host,t._protocol)}return n}function So(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ZC():s=JC():n.getStatus()===402?s=YC(t.bucket):n.getStatus()===403?s=eP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function y0(t){const e=So(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=XC(t.path)),i.serverResponse=s.serverResponse,i}return n}function LP(t,e,n){const r=e.fullServerUrl(),s=Ro(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ri(s,i,rd(t,n),o);return l.errorHandler=y0(e),l}function UP(t,e,n){const r=e.fullServerUrl(),s=Ro(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ri(s,i,MP(t,n),o);return l.errorHandler=y0(e),l}function FP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function v0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=FP(null,e)),r}function $P(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let M="";for(let L=0;L<2;L++)M=M+Math.random().toString().slice(2);return M}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=v0(e,r,s),d=_0(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",m=gr.getBlob(f,r,g);if(m===null)throw o0();const S={name:u.fullPath},P=Ro(i,t.host,t._protocol),b="POST",x=t.maxUploadRetryTime,O=new ri(P,b,rd(t,n),x);return O.urlParams=S,O.headers=o,O.body=m.uploadData(),O.errorHandler=So(e),O}class Ja{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function sd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Bn(!1)}return Bn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function BP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=v0(e,r,s),l={name:o.fullPath},c=Ro(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=_0(o,n),g=t.maxUploadRetryTime;function m(P){sd(P);let b;try{b=P.getResponseHeader("X-Goog-Upload-URL")}catch{Bn(!1)}return Bn(Bl(b)),b}const S=new ri(c,u,m,g);return S.urlParams=l,S.headers=d,S.body=f,S.errorHandler=So(e),S}function jP(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=sd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Bn(!1)}f||Bn(!1);const g=Number(f);return Bn(!isNaN(g)),new Ja(g,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,c=new ri(n,o,i,l);return c.headers=s,c.errorHandler=So(e),c}const $g=256*1024;function qP(t,e,n,r,s,i,o,l){const c=new Ja(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw sP();const u=c.total-c.current;let d=u;s>0&&(d=Math.min(d,s));const f=c.current,g=f+d;let m="";d===0?m="finalize":u===d?m="upload, finalize":m="upload";const S={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},P=r.slice(f,g);if(P===null)throw o0();function b(L,ne){const Z=sd(L,["active","final"]),R=c.current+d,v=r.size();let y;return Z==="final"?y=rd(e,i)(L,ne):y=null,new Ja(R,v,Z==="final",y)}const x="POST",O=e.maxUploadRetryTime,M=new ri(n,x,b,O);return M.headers=S,M.body=P.uploadData(),M.progressCallback=l||null,M.errorHandler=So(t),M}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Dc(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r){if(dP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class zP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ei("cannot .send() more than once");if(ns(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ei("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ei("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ei("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ei("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GP extends zP{initXhr(){this.xhr_.responseType="text"}}function ws(){return new GP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=g0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Be.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(c0(s.status,[]))if(i)s=s0();else{this.sleepTime=Math.max(this.sleepTime*2,QC),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Be.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=BP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ws,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=jP(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ws,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=$g*this._chunkMultiplier,n=new Ja(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=qP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,ws,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){$g*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=LP(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ws,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=$P(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ws,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=i0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Dc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new HP(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Dc(this._state)){case Bt.SUCCESS:fs(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;fs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Dc(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&fs(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&fs(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&fs(e.error.bind(e,this._error))();break;default:e.error&&fs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new es(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return p0(this._location.path)}get storage(){return this._service}get parent(){const e=PP(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aP(e)}}function KP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new WP(t,new gr(e),n)}function QP(t){t._throwIfRoot("getDownloadURL");const e=UP(t.storage,t._location,g0());return t.storage.makeRequestWithTokens(e,ws).then(n=>{if(n===null)throw iP();return n})}function XP(t,e){const n=kP(t._location.path,e),r=new Kt(t._location.bucket,n);return new es(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){return/^[A-Za-z]+:\/\//.test(t)}function JP(t,e){return new es(t,e)}function E0(t,e){if(t instanceof id){const n=t;if(n._bucket==null)throw rP();const r=new es(n,n._bucket);return e!=null?E0(r,e):r}else return e!==void 0?XP(t,e):t}function ZP(t,e){if(e&&YP(e)){if(t instanceof id)return JP(t,e);throw Ru("To use ref(service, url), the first argument must be a Storage instance.")}else return E0(t,e)}function Bg(t,e){const n=e==null?void 0:e[r0];return n==null?null:Kt.makeFromBucketSpec(n,t)}function ek(t,e,n,r={}){t.host=`${e}:${n}`;const s=ns(e);s&&(rh(`https://${t.host}`),sh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:L_(i,t.app.options.projectId))}class id{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=n0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WC,this._maxUploadRetryTime=KC,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=Bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new es(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new lP(a0());{const o=vP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const jg="@firebase/storage",qg="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="storage";function tk(t,e,n){return t=qe(t),KP(t,e,n)}function nk(t){return t=qe(t),QP(t)}function rk(t,e){return t=qe(t),ZP(t,e)}function sk(t=_l(),e){t=qe(t);const r=Ys(t,T0).getImmediate({identifier:e}),s=O_("storage");return s&&ik(r,...s),r}function ik(t,e,n,r={}){ek(t,e,n,r)}function ok(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new id(n,r,s,e,rs)}function ak(){zn(new Cn(T0,ok,"PUBLIC").setMultipleInstances(!0)),cn(jg,qg,""),cn(jg,qg,"esm2017")}ak();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map,w0={activated:!1,tokenObservers:[]},lk={initialized:!1,enabled:!1};function st(t){return Su.get(t)||Object.assign({},w0)}function ck(t,e){return Su.set(t,e),Su.get(t)}function jl(){return lk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="https://content-firebaseappcheck.googleapis.com/v1",uk="exchangeRecaptchaV3Token",hk="exchangeDebugToken",Hg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},dk=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Yi,this.pending.promise.catch(n=>{}),await pk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Yi,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function pk(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},qt=new Xs("appCheck","AppCheck",gk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function od(t){if(!st(t).activated)throw qt.create("use-before-activation",{appName:t.name})}function A0(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=sa(n)+"d:"),r&&(o+=sa(r)+"h:"),o+=sa(s)+"m:"+sa(i)+"s",o}function sa(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(f){throw qt.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw qt.create("fetch-status-error",{httpStatus:o.status});let l;try{l=await o.json()}catch(f){throw qt.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const c=l.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw qt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const u=Number(c[1])*1e3,d=Date.now();return{token:l.token,expireTimeMillis:d+u,issuedAtTimeMillis:d}}function mk(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${I0}/projects/${n}/apps/${r}:${uk}?key=${s}`,body:{recaptcha_v3_token:e}}}function b0(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${I0}/projects/${n}/apps/${r}:${hk}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="firebase-app-check-database",yk=1,uo="firebase-app-check-store",R0="debug-token";let ia=null;function S0(){return ia||(ia=new Promise((t,e)=>{try{const n=indexedDB.open(_k,yk);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(qt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(uo,{keyPath:"compositeKey"})}}}catch(n){e(qt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ia)}function vk(t){return P0(k0(t))}function Ek(t,e){return C0(k0(t),e)}function Tk(t){return C0(R0,t)}function wk(){return P0(R0)}async function C0(t,e){const r=(await S0()).transaction(uo,"readwrite"),i=r.objectStore(uo).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(qt.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function P0(t){const n=(await S0()).transaction(uo,"readonly"),s=n.objectStore(uo).get(t);return new Promise((i,o)=>{s.onsuccess=l=>{const c=l.target.result;i(c?c.value:void 0)},n.onerror=l=>{var c;o(qt.create("storage-get",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function k0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new ml("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t){if(ih()){let e;try{e=await vk(t)}catch(n){_r.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Nc(t,e){return ih()?Ek(t,e).catch(n=>{_r.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Ak(){let t;try{t=await wk()}catch{}if(t)return t;{const e=crypto.randomUUID();return Tk(e).catch(n=>_r.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return jl().enabled}async function cd(){const t=jl();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function bk(){const t=N_(),e=jl();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Yi;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Ak())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={error:"UNKNOWN_ERROR"};function Sk(t){return nh.encodeString(JSON.stringify(t),!1)}async function Cu(t,e=!1,n=!1){const r=t.app;od(r);const s=st(r);let i=s.token,o;if(i&&!As(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(As(u)?i=u:await Nc(r,void 0))}if(!e&&i&&As(i))return{token:i.token};let l=!1;if(ld())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=ad(b0(r,await cd()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),l=!0);const u=await s.exchangeTokenPromise;return await Nc(r,u),s.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?_r.warn(u.message):n&&_r.error(u),xc(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await st(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?_r.warn(u.message):n&&_r.error(u),o=u}let c;return i?o?As(i)?c={token:i.token,internalError:o}:c=xc(o):(c={token:i.token},s.token=i,await Nc(r,i)):c=xc(o),l&&x0(r,c),c}async function Ck(t){const e=t.app;od(e);const{provider:n}=st(e);if(ld()){const r=await cd(),{token:s}=await ad(b0(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function D0(t,e,n,r){const{app:s}=t,i=st(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&As(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Gg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Gg(t))}function N0(t,e){const n=st(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Gg(t){const{app:e}=t,n=st(e);let r=n.tokenRefresher;r||(r=Pk(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Pk(t){const{app:e}=t;return new fk(async()=>{const n=st(e);let r;if(n.token?r=await Cu(t,!0):r=await Cu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=st(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Hg.RETRIAL_MIN_WAIT,Hg.RETRIAL_MAX_WAIT)}function x0(t,e){const n=st(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function As(t){return t.expireTimeMillis-Date.now()>0}function xc(t){return{token:Sk(Rk),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=st(this.app);for(const n of e)N0(this.app,n.next);return Promise.resolve()}}function Dk(t,e){return new kk(t,e)}function Nk(t){return{getToken:e=>Cu(t,e),getLimitedUseToken:()=>Ck(t),addTokenListener:e=>D0(t,"INTERNAL",e),removeTokenListener:e=>N0(t.app,e)}}const xk="@firebase/app-check",Ok="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="https://www.google.com/recaptcha/api.js";function Mk(t,e){const n=new Yi,r=st(t);r.reCAPTCHAState={initialized:n};const s=Lk(t),i=zg(!1);return i?Wg(t,e,i,s,n):$k(()=>{const o=zg(!1);if(!o)throw new Error("no recaptcha");Wg(t,e,o,s,n)}),n.promise}function Wg(t,e,n,r,s){n.ready(()=>{Fk(t,e,n,r),s.resolve(n)})}function Lk(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Uk(t){od(t);const n=await st(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=st(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function Fk(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{st(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{st(t).reCAPTCHAState.succeeded=!1}}),i=st(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function $k(t){const e=document.createElement("script");e.src=Vk,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;jk(this._throttleData);const s=await Uk(this._app).catch(o=>{throw qt.create("recaptcha-error")});if(!(!((e=st(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw qt.create("recaptcha-error");let i;try{i=await ad(mk(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=Bk(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),qt.create("initial-throttle",{time:A0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=Ys(e,"heartbeat"),Mk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ud?this._siteKey===e._siteKey:!1}}function Bk(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+dk,httpStatus:t};{const n=e?e.backoffCount:0,r=mI(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function jk(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw qt.create("throttled",{time:A0(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t=_l(),e){t=qe(t);const n=Ys(t,"app-check");if(jl().initialized||bk(),ld()&&cd().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw qt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return Hk(t,e.provider,e.isTokenAutoRefreshEnabled),st(t).isTokenAutoRefreshEnabled&&D0(r,"INTERNAL",()=>{}),r}function Hk(t,e,n=!1){const r=ck(t,Object.assign({},w0));r.activated=!0,r.provider=e,r.cachedTokenPromise=Ik(t).then(s=>(s&&As(s)&&(r.token=s,x0(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&_r.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const zk="app-check",Kg="app-check-internal";function Gk(){zn(new Cn(zk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Dk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Kg).initialize()})),zn(new Cn(Kg,t=>{const e=t.getProvider("app-check").getImmediate();return Nk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),cn(xk,Ok)}Gk();const Wk={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},ql=$_(Wk),Wr=RC(ql,"bha-brother-shout-433"),ho=bR(ql),Kk=sk(ql);qk(ql,{provider:new ud("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const hd=Le(null),O0=je(()=>{var t;return(t=hd.value)==null?void 0:t.uid}),Qk=je(()=>V0(O0.value)),V0=t=>t?"Bhai "+t.slice(-3):null;fb(ho,t=>{hd.value=t});function Co(){return{userId:O0,currentUser:hd,userName:Qk,getUserName:V0,signInAnonymously:()=>uy(ho),logout:()=>pb(ho)}}const Pu=Le(0),wa=Ks([]);let Xk=0;function bs(t,e="info",n=5e3){const r=Xk++;wa.push({id:r,message:t,type:e}),n&&setTimeout(()=>{const s=wa.findIndex(i=>i.id===r);s!==-1&&wa.splice(s,1)},n)}const ft=[];for(let t=0;t<256;++t)ft.push((t+256).toString(16).slice(1));function Yk(t,e=0){return(ft[t[e+0]]+ft[t[e+1]]+ft[t[e+2]]+ft[t[e+3]]+"-"+ft[t[e+4]]+ft[t[e+5]]+"-"+ft[t[e+6]]+ft[t[e+7]]+"-"+ft[t[e+8]]+ft[t[e+9]]+"-"+ft[t[e+10]]+ft[t[e+11]]+ft[t[e+12]]+ft[t[e+13]]+ft[t[e+14]]+ft[t[e+15]]).toLowerCase()}let Oc;const Jk=new Uint8Array(16);function Zk(){if(!Oc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Oc=crypto.getRandomValues.bind(crypto)}return Oc(Jk)}const e4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Qg={randomUUID:e4};function t4(t,e,n){var s;if(Qg.randomUUID&&!t)return Qg.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??Zk();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Yk(r)}const n4={class:"photo-gallery"},r4={class:"photo-gallery__photos"},s4={class:"photo-gallery__photos__item add-image"},i4={class:"aspect-wide"},o4={class:"aspect-wide__wrap flex"},a4={class:"uploader"},l4={class:"aspect-wide"},c4=["progress"],u4=["src"],h4=Lt({__name:"PhotoUploader",emits:["change"],setup(t,{emit:e}){const n=e,{currentUser:r,signInAnonymously:s}=Co(),i=Le(4),o=Le([]),l=je(()=>o.value.slice(0,i.value-1)),c=je(()=>o.value.length>l.value.length),u=async f=>{var S;if(!r.value)try{await s()}catch(P){console.error(P),bs("Can not get private ID","error")}if(!r.value){bs("Please sign in to upload files","error");return}const g=((S=r.value)==null?void 0:S.uid)||"anonymous",m=f.target.files;m&&Array.from(m).forEach(P=>{const b=Ks({progress:0,url:null});o.value.push(b);const x=t4(),O=rk(Kk,`userId/${g}/${x}_${P.name}`),M=tk(O,P);M.on("state_changed",L=>{b.progress=Math.round(L.bytesTransferred/L.totalBytes*100)},L=>{bs(`Upload failed for ${P.name}:`,"error")},async()=>{b.url=await nk(M.snapshot.ref),n("change",o.value.map(L=>L.url))})})},d=()=>{c.value=!0,bs("Preview opened","info")};return(f,g)=>(Y(),ie("div",n4,[q("div",r4,[q("div",s4,[q("div",i4,[q("div",o4,[q("label",a4,[g[0]||(g[0]=q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24"},[q("path",{fill:"currentColor",d:"m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"}),q("path",{fill:"currentColor",d:"M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"}),q("path",{fill:"currentColor",d:"m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"})],-1)),g[1]||(g[1]=Ot(" যোগ করুন ")),q("input",{type:"file",multiple:"",onChange:u},null,32)])])])]),(Y(!0),ie(Ne,null,Qs(l.value,(m,S)=>(Y(),ie("div",{key:S,class:"photo-gallery__photos__item"},[q("div",l4,[q("div",{class:Nr(["aspect-wide__wrap",{skeleton:m.progress<100}]),progress:m.progress},[m.url?(Y(),ie("img",{key:0,src:m.url,alt:"Uploaded file",class:"photo-image"},null,8,u4)):Mt("",!0),c.value&&l.value.length-1==S?(Y(),ie("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:d},[q("i",null,"+"+Tn(o.value.length-l.value.length+1),1)])):Mt("",!0)],10,c4)])]))),128))])]))}}),d4=ct(h4,[["__scopeId","data-v-9b912d5d"]]),f4={class:"post-add flex flex-col flex-center"},p4={key:0,class:"post-add__form flex flex-col"},g4={class:"header"},m4=["disabled"],_4={key:0,width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},y4={key:1,class:"animate-spin",fill:"none",viewBox:"0 0 24 24"},v4={class:"body flex flex-col flex-grow"},E4={class:"post-add__ctrl flex-center"},T4=Lt({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=Co(),r=Le(!1),s=Le(!1),i=Le([]),o=Le(""),l=je(()=>!s.value&&(o.value.trim()!==""||i.value.length>0)),c=async()=>{await d(o.value.trim())},u=()=>{r.value=!1,o.value="",s.value=!1},d=async g=>{if(s.value=!0,!e.value)try{await n()}catch(m){console.error(m),bs("Can not get private ID","error")}BC(Xa(Wr,"shouts"),{text:g,timestamp:new Date,userId:e.value.uid,files:i.value}),u(),Pu.value=Pu.value+1},f=g=>{i.value=[...g]};return(g,m)=>(Y(),ie("section",f4,[r.value?(Y(),ie("div",p4,[q("div",g4,[q("div",{class:"flex flex-center gap-1"},[q("button",{class:"btn",onClick:u},m[2]||(m[2]=[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[q("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),m[3]||(m[3]=q("h2",null,"নতুন পোস্ট",-1))]),q("button",{onClick:c,class:"btn btn__primary",disabled:!l.value},[s.value?(Y(),ie("svg",y4,m[5]||(m[5]=[q("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10","stroke-width":"4"},null,-1),q("path",{class:"opacity-75",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"},null,-1)]))):(Y(),ie("svg",_4,m[4]||(m[4]=[q("path",{d:"M3 20v-6l8-2l-8-2V4l19 8z"},null,-1)])))],8,m4)]),q("div",v4,[X1(q("textarea",{autofocus:"",tabindex:"0","onUpdate:modelValue":m[0]||(m[0]=S=>o.value=S),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[kT,o.value]]),he(d4,{onChange:f})])])):Mt("",!0),q("div",E4,[q("button",{class:"btn btn__primary",onClick:m[1]||(m[1]=S=>r.value=!0)},m[6]||(m[6]=[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[q("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),w4={class:"right flex flex-center gap-1"},I4=Lt({__name:"AppHeader",setup(t){return(e,n)=>{const r=ll("router-link");return Y(),ie("header",null,[he(r,{class:"brand",to:{name:"home"}},{default:Rn(()=>n[0]||(n[0]=[q("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[q("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),q("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),q("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),q("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),q("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),q("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),q("div",w4,[he(T4)])])}}}),A4=ct(I4,[["__scopeId","data-v-98e63b3d"]]),b4={};function R4(t,e){const n=ll("RouterLink");return Y(),ie("footer",null,[he(n,{to:"/terms"},{default:Rn(()=>e[0]||(e[0]=[Ot("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=Ot(" | ")),he(n,{to:"/privacy"},{default:Rn(()=>e[1]||(e[1]=[Ot("Privacy Policy")])),_:1,__:[1]})])}const S4=ct(b4,[["render",R4],["__scopeId","data-v-9677e4fd"]]),C4={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=ll("router-view");return Y(),ie(Ne,null,[he(A4),q("main",null,[he(r)]),he(S4)],64)}}},P4=ct(C4,[["__scopeId","data-v-b21eda16"]]),k4={};function D4(t,e){return Y(),ie("section",null,e[0]||(e[0]=[q("h2",null,"About",-1),q("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const N4=ct(k4,[["render",D4]]),x4={},O4={class:"loader"};function V4(t,e){return Y(),ie("div",O4)}const M4=ct(x4,[["render",V4]]),L4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function U4(t,e){return Y(),ie("svg",L4,e[0]||(e[0]=[q("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const F4={render:U4},$4={class:"relative w-full h-full overflow-hidden"},B4={key:0,class:"absolute w-full h-full animate-shimmer rounded"},j4=["src","alt"],ku=Lt({__name:"ImageLoader",props:{src:{},alt:{}},setup(t){const e=t,n=Le(!1);function r(){n.value=!0}return Ns(()=>e.src,(s,i)=>{s!==i&&(n.value=!1)}),(s,i)=>(Y(),ie("div",$4,[n.value?Mt("",!0):(Y(),ie("div",B4)),q("img",{src:s.src,alt:s.alt,onLoad:r,class:Nr(["transition-opacity duration-700 ease-in-out w-full h-full object-cover",n.value?"opacity-100":"opacity-0"])},null,42,j4)]))}}),q4={key:0,class:"modal fixed inset-0 z-50 flex items-center justify-center"},H4={__name:"modal",props:{show:Boolean},emits:["close"],setup(t,{emit:e}){const n=e,r=Le(null),s=()=>n("close"),i=l=>{r.value&&!r.value.contains(l.target)&&s()},o=l=>{l.key==="Escape"&&s()};return po(()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",o)}),Xu(()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",o)}),(l,c)=>(Y(),mt(Dm,{to:"body"},[t.show?(Y(),ie("div",q4,[q("div",{class:"absolute backrdop w-full h-full",onClick:s}),q("button",{onClick:s,class:"absolute btn-close"},c[0]||(c[0]=[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[q("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),q("div",{ref_key:"modalRef",ref:r,class:"relative z-10 max-w-md w-full"},[qc(l.$slots,"default")],512)])):Mt("",!0)]))}},z4={class:"w-full relative"},G4={__name:"ImageSlider",props:{images:{type:Array,required:!0}},setup(t){const e=t,n=je(()=>e.images.length>1&&s.value>0),r=je(()=>e.images.length>1&&s.value<e.images.length-1),s=Le(0),i=()=>{s.value=(s.value-1+e.images.length)%e.images.length},o=()=>{s.value=(s.value+1)%e.images.length};return(l,c)=>(Y(),ie("div",z4,[he(ku,{src:t.images[s.value],alt:"image",class:"w-full object-contain rounded"},null,8,["src"]),n.value?(Y(),ie("button",{key:0,onClick:i,class:"absolute rounded left"},c[0]||(c[0]=[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[q("path",{d:"m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"})],-1)]))):Mt("",!0),r.value?(Y(),ie("button",{key:1,onClick:o,class:"absolute rounded right"},c[1]||(c[1]=[q("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[q("path",{d:"M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"})],-1)]))):Mt("",!0)]))}},W4=ct(G4,[["__scopeId","data-v-46569096"]]),K4={class:"photo-gallery"},Q4={class:"photo-gallery__photos"},X4={class:"aspect-wide"},Y4={class:"aspect-wide__wrap"},J4={class:"aspect-wide"},Z4={class:"aspect-wide__wrap"},e6=Lt({__name:"PhotoGallery",props:{files:{}},setup(t){const e=Le(!1),n=t,r=Le(4),s=je(()=>{var l;return((l=n.files)==null?void 0:l.slice(0,r.value))??[]}),i=je(()=>{var l;return((l=n.files)==null?void 0:l.length)>s.value.length}),o=()=>{bs("Preview opened","info")};return(l,c)=>(Y(),ie(Ne,null,[q("div",K4,[q("div",Q4,[l.files.length===1?(Y(),ie("div",{key:0,onClick:c[0]||(c[0]=u=>e.value=!0),class:"photo-gallery__photos__item full-size"},[q("div",X4,[q("div",Y4,[he(ku,{src:l.files[0],alt:"Picture"},null,8,["src"])])])])):(Y(!0),ie(Ne,{key:1},Qs(s.value,(u,d)=>(Y(),ie("div",{key:d,class:"photo-gallery__photos__item",onClick:c[1]||(c[1]=f=>e.value=!0)},[q("div",J4,[q("div",Z4,[he(ku,{src:u,alt:"Picture"},null,8,["src"]),i.value&&s.value.length-1==d?(Y(),ie("div",{key:0,class:"photo-gallery__photos__blury__counter",onClick:o},[q("i",null,"+"+Tn(l.files.length-s.value.length+1),1)])):Mt("",!0)])])]))),128))])]),he(H4,{show:e.value,onClose:c[2]||(c[2]=u=>e.value=!1)},{default:Rn(()=>[he(W4,{images:n.files},null,8,["images"])]),_:1},8,["show"])],64))}}),t6=ct(e6,[["__scopeId","data-v-1c7ee3d6"]]),n6={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function r6(t,e){return Y(),ie("svg",n6,e[0]||(e[0]=[hl('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const Du={render:r6},s6={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function i6(t,e){return Y(),ie("svg",s6,e[0]||(e[0]=[q("g",{fill:"none"},[q("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),q("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),q("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Nu={render:i6},o6={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function a6(t,e){return Y(),ie("svg",o6,e[0]||(e[0]=[q("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const Ia={render:a6},l6={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function c6(t,e){return Y(),ie("svg",l6,e[0]||(e[0]=[hl('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const xu={render:c6},u6={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function h6(t,e){return Y(),ie("svg",u6,[(Y(),mt(Bm("style"),null,{default:Rn(()=>e[0]||(e[0]=[Ot(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=hl('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const Ou={render:h6},d6={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function f6(t,e){return Y(),ie("svg",d6,[(Y(),mt(Bm("style"),null,{default:Rn(()=>e[0]||(e[0]=[Ot(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=hl('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Vu={render:f6};var tt=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(tt||{});const p6={key:0,class:"reaction-panel"},g6={class:"wrap flex flex-center"},m6=Lt({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=Co(),s=Le(!1),i=Le(null),o=Le(e.value||null),l=je(()=>{var P;return(P=n.value)==null?void 0:P.uid}),c=()=>{m()||(s.value=!0)},u=()=>{s.value=!1},d=()=>{m()&&(i.value=setTimeout(()=>{s.value=!0},500))},f=()=>{clearTimeout(i.value)},g=async P=>{s.value=!1,o.value=P,await S(P)};function m(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const S=async P=>{const b=e.postId;l.value||await r();const x=Au(Wr,"shouts",b),O=Au(Wr,`shouts/${b}/reactions`,l.value);await GC(Wr,async M=>{const L=await M.get(O),ne=await M.get(x);if(!ne.exists())throw new Error("Shout not found");ne.data().reactionSummary;let Z=null;if(L.exists()&&(Z=L.data().type),Z===P)return;M.set(O,{type:P,timestamp:new Date});const R={[`reactionSummary.${P}`]:Lg(1)};Z&&(R[`reactionSummary.${Z}`]=Lg(-1)),M.update(x,R)})};return(P,b)=>(Y(),ie("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:c,onMouseleave:u,onTouchstart:d,onTouchend:f},[q("button",{onClick:b[0]||(b[0]=x=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===ce(tt).Like?(Y(),ie(Ne,{key:1},[he(ce(Ia),{width:"18",height:"20",fill:"#1E90FF"}),b[8]||(b[8]=q("span",{class:"color-blue"},"Like",-1))],64)):o.value===ce(tt).Haha?(Y(),ie(Ne,{key:2},[he(ce(Ou),{width:"22",height:"22"}),b[9]||(b[9]=q("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===ce(tt).Love?(Y(),ie(Ne,{key:3},[he(ce(Nu),{width:"22",height:"22"}),b[10]||(b[10]=Ot()),b[11]||(b[11]=q("span",{class:"color-red"},"Love",-1))],64)):o.value===ce(tt).Wow?(Y(),ie(Ne,{key:4},[he(ce(Vu),{width:"22",height:"22"}),b[12]||(b[12]=Ot()),b[13]||(b[13]=q("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===ce(tt).Sad?(Y(),ie(Ne,{key:5},[he(ce(xu),{width:"22",height:"22"}),b[14]||(b[14]=Ot()),b[15]||(b[15]=q("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===ce(tt).Angry?(Y(),ie(Ne,{key:6},[he(ce(Du),{width:"22",height:"22"}),b[16]||(b[16]=Ot()),b[17]||(b[17]=q("span",{class:"color-red"},"Angry",-1))],64)):Mt("",!0):(Y(),ie(Ne,{key:0},[he(ce(Ia),{width:"18",height:"18"}),b[7]||(b[7]=Ot(" Like "))],64))]),s.value?(Y(),ie("div",p6,[q("div",g6,[q("button",{onClick:b[1]||(b[1]=x=>g(ce(tt).Like))},[he(ce(Ia),{width:"20",height:"20",fill:"#1E90FF"})]),q("button",{onClick:b[2]||(b[2]=x=>g(ce(tt).Haha))},[he(ce(Ou),{width:"24",height:"24"})]),q("button",{onClick:b[3]||(b[3]=x=>g(ce(tt).Love))},[he(ce(Nu),{width:"30",height:"30"})]),q("button",{onClick:b[4]||(b[4]=x=>g(ce(tt).Wow))},[he(ce(Vu),{width:"24",height:"24"})]),q("button",{onClick:b[5]||(b[5]=x=>g(ce(tt).Sad))},[he(ce(xu),{width:"28",height:"28"})]),q("button",{onClick:b[6]||(b[6]=x=>g(ce(tt).Angry))},[he(ce(Du),{width:"26",height:"26"})])])])):Mt("",!0)],32))}}),_6=ct(m6,[["__scopeId","data-v-2568d41f"]]),y6={key:0,class:"reactions-count"},v6=Lt({__name:"top",props:{totalReactions:{},topReactions:{}},setup(t){return(e,n)=>e.totalReactions>0?(Y(),ie("div",y6,[q("span",null,[(Y(!0),ie(Ne,null,Qs(e.topReactions,(r,s)=>(Y(),ie(Ne,{key:s},[r===ce(tt).Like?(Y(),mt(ce(Ia),{key:0,fill:"#1E90FF"})):r===ce(tt).Haha?(Y(),mt(ce(Ou),{key:1})):r===ce(tt).Love?(Y(),mt(ce(Nu),{key:2})):r===ce(tt).Wow?(Y(),mt(ce(Vu),{key:3})):r===ce(tt).Sad?(Y(),mt(ce(xu),{key:4})):r===ce(tt).Angry?(Y(),mt(ce(Du),{key:5})):Mt("",!0)],64))),128))]),Ot(" "+Tn(e.totalReactions),1)])):Mt("",!0)}}),E6=ct(v6,[["__scopeId","data-v-47ff09c1"]]),T6=Lt({__name:"item",props:{variant:{},width:{},height:{},borderRadius:{}},setup(t){return(e,n)=>(Y(),ie("div",{class:Nr(["animate-shimmer",`skeleton-${e.variant}`]),style:sl({width:e.width,height:e.height,borderRadius:e.borderRadius})},null,6))}}),M0=ct(T6,[["__scopeId","data-v-0366e7df"]]),w6=Lt({__name:"index",props:{loading:{type:Boolean}},setup(t){return(e,n)=>e.loading?qc(e.$slots,"template",{key:0},()=>[(Y(),ie(Ne,null,Qs(3,r=>he(M0,{key:r})),64))]):qc(e.$slots,"default",{key:1})}});var I6=["second","minute","hour","day","week","month","year"];function A6(t,e){if(e===0)return["just now","right now"];var n=I6[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var b6=["秒","分钟","小时","天","周","个月","年"];function R6(t,e){if(e===0)return["刚刚","片刻后"];var n=b6[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var Mu={},L0=function(t,e){Mu[t]=e},S6=function(t){return Mu[t]||Mu.en_US},Vc=[60,60,24,7,365/7/12,12];function Xg(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function C6(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=Vc[s]&&s<Vc.length;s++)t/=Vc[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function P6(t,e){var n=e?Xg(e):new Date;return(+n-+Xg(t))/1e3}var k6=function(t,e,n){var r=P6(t,n&&n.relativeDate);return C6(r,S6(e))};L0("en_US",A6);L0("zh_CN",R6);const D6={class:"post"},N6={class:"head flex"},x6={class:"author flex"},O6={class:"body flex flex-col gap-1"},V6={class:"flex flex-center gap-1 summary"},M6={class:"footer flex"},L6=Lt({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=Co(),s=e.item.id,i=Le([]),o=Le(!1),l=je(()=>{if(r.value&&i.value.length>0){const b=i.value.find(x=>x.id===r.value);if(b)return b.type}return null}),c=je(()=>i.value.reduce((b,x)=>b+1,0)||0),u=je(()=>{const b={like:0,haha:0,love:0,wow:0,sad:0,poop:0,angry:0};for(const{type:O}of i.value)b[O]++;const x=Math.max(...Object.values(b));return Object.entries(b).filter(([,O])=>O===x).map(([O])=>O)}),d=Le(null),f=Le(!1),g=Le(!1),m=()=>{const b=d.value;b&&(f.value=b.scrollHeight>b.clientHeight)},S=()=>{g.value=!g.value},P=async()=>{o.value=!0;try{const b=await t0(Xa(Wr,"shouts",s,"reactions"));i.value=b.docs.map(x=>({id:x.id,...x.data()}))}catch(b){console.error("Error fetching reactions:",b)}o.value=!1};return po(()=>{P(),Ku(m),window.addEventListener("resize",m)}),(b,x)=>(Y(),ie("div",D6,[q("div",N6,[he(ce(F4),{width:"48",height:"48"}),q("div",x6,[q("span",null,Tn(ce(n)(b.item.userId)),1),q("i",null,Tn(ce(k6)(new Date(b.item.timestamp.seconds*1e3))),1)])]),q("div",O6,[q("div",null,[q("div",{ref_key:"textRef",ref:d,class:Nr(["text-container",{expanded:g.value}])},Tn(b.item.text),3),f.value&&!g.value?(Y(),ie("button",{key:0,onClick:S,class:"readmore"}," আরও পড়ুন ")):Mt("",!0)]),b.item.files&&b.item.files.length>0?(Y(),mt(t6,{key:0,files:b.item.files},null,8,["files"])):Mt("",!0)]),q("div",V6,[he(w6,{loading:o.value},{template:Rn(()=>[he(M0,{variant:"text",width:"2rem",height:"1.5rem"})]),default:Rn(()=>[he(E6,{class:"flex flex-center","total-reactions":c.value,"top-reactions":u.value},null,8,["total-reactions","top-reactions"])]),_:1},8,["loading"])]),x[0]||(x[0]=q("div",{class:"border-top"},null,-1)),q("div",M6,[he(_6,{"post-id":ce(s),value:l.value},null,8,["post-id","value"])])]))}}),U6=ct(L6,[["__scopeId","data-v-bc5dbf2a"]]),F6={key:1,class:"masonry"},Yg=10,$6=Lt({__name:"HomePage",setup(t){const e=Le(!1),n=Le([]),r=Le(null),s=async()=>{let o;e.value=!0,r.value?o=Ng(Xa(Wr,"shouts"),xg("timestamp","desc"),MC(r.value),Og(Yg)):o=Ng(Xa(Wr,"shouts"),xg("timestamp","desc"),Og(Yg));const l=await t0(o),c=[];for(const u of l.docs){const d=u.data();c.push({id:u.id,...d})}l.empty||(r.value=l.docs[l.docs.length-1]),n.value.push(...c),e.value=!1};return po(s),Ns(Pu,async()=>{n.value=[],r.value=null,await s()}),(o,l)=>e.value?(Y(),mt(M4,{key:0})):(Y(),ie("div",F6,[(Y(!0),ie(Ne,null,Qs(n.value,c=>(Y(),mt(U6,{key:c.id,item:c,class:"masonry-item"},null,8,["item"]))),128))]))}}),B6=ct($6,[["__scopeId","data-v-70a3c46a"]]),j6={};function q6(t,e){return Y(),ie("section",null,e[0]||(e[0]=[q("h2",null,"Privacy Policy",-1),q("p",null,"Privacy Policy content goes here...",-1)]))}const H6=ct(j6,[["render",q6]]),z6={};function G6(t,e){return Y(),ie("section",null,e[0]||(e[0]=[q("h2",null,"Terms and Conditions",-1),q("p",null,"Terms and Conditions content goes here...",-1)]))}const W6=ct(z6,[["render",G6]]),K6={class:"container"},Q6={key:0,class:"identity"},X6={class:"signin"},Y6=["disabled"],J6=["disabled"],Z6=Lt({__name:"UserPage",setup(t){const e=Bw(),{userId:n,userName:r}=Co(),s=Le(!1),i=Le(!1),o=async()=>{s.value=!0;try{const c=await uy(ho);s.value=!1}catch(c){console.error("Anonymous sign-in error:",c),alert("Failed to sign in: "+c.message)}},l=async()=>{i.value=!0;try{await ho.signOut(),i.value=!1,e.replace({name:"home"})}catch(c){console.error("Sign-out error:",c),alert("Failed to sign out: "+c.message)}};return(c,u)=>(Y(),ie("section",K6,[u[1]||(u[1]=q("h2",null,"About you",-1)),ce(n)?(Y(),ie("div",Q6,[Ot(Tn(ce(r)),1),u[0]||(u[0]=q("br",null,null,-1)),Ot("ID: "+Tn(ce(n)),1)])):Mt("",!0),u[2]||(u[2]=q("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),q("div",X6,[ce(n)?(Y(),ie("button",{key:1,onClick:l,class:"btn btn__primary",disabled:i.value}," Sign out ",8,J6)):(Y(),ie("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,Y6))])]))}}),e3=ct(Z6,[["__scopeId","data-v-922e1ab5"]]),t3=[{path:"/",component:P4,children:[{path:"",name:"home",component:B6},{path:"about",name:"about",component:N4},{path:"terms",name:"terms",component:W6},{path:"privacy",name:"privacy",component:H6},{path:"user",name:"UserPage",component:e3}]}],n3=Fw({history:pw("/"),routes:t3}),r3={class:"fixed bottom-4 left-4 space-y-2 z-50 flex flex-col-reverse"},s3=Lt({__name:"Notifications",setup(t){const e={success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600",warning:"bg-yellow-500 text-black"};return(n,r)=>(Y(),mt(Dm,{to:"body"},[q("div",r3,[he(AT,{name:"fade",tag:"div",class:"flex flex-col gap-1"},{default:Rn(()=>[(Y(!0),ie(Ne,null,Qs(ce(wa),s=>(Y(),ie("div",{key:s.id,class:Nr(["min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left",e[s.type]])},Tn(s.message),3))),128))]),_:1})])]))}}),i3=ct(s3,[["__scopeId","data-v-16f73697"]]),o3={install(t){const e=document.createElement("div");document.body.appendChild(e),m_(i3).mount(e)}},dd=m_(LT);dd.use(n3);dd.use(o3);dd.mount("#app");
