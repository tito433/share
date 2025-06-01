(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},bs=[],wn=()=>{},n1=()=>!1,Ja=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ou=t=>t.startsWith("onUpdate:"),st=Object.assign,Vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r1=Object.prototype.hasOwnProperty,De=(t,e)=>r1.call(t,e),de=Array.isArray,Rs=t=>Za(t)==="[object Map]",Xg=t=>Za(t)==="[object Set]",me=t=>typeof t=="function",ze=t=>typeof t=="string",kr=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Yg=t=>(Fe(t)||me(t))&&me(t.then)&&me(t.catch),Jg=Object.prototype.toString,Za=t=>Jg.call(t),s1=t=>Za(t).slice(8,-1),Zg=t=>Za(t)==="[object Object]",Mu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},i1=/-(\w)/g,tn=ec(t=>t.replace(i1,(e,n)=>n?n.toUpperCase():"")),o1=/\B([A-Z])/g,es=ec(t=>t.replace(o1,"-$1").toLowerCase()),tc=ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),rl=ec(t=>t?`on${tc(t)}`:""),mr=(t,e)=>!Object.is(t,e),sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},em=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e},a1=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let tf;const nc=()=>tf||(tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?h1(r):Lu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Fe(t))return t}const c1=/;(?![^(]*\))/g,l1=/:([^]+)/,u1=/\/\*[^]*?\*\//g;function h1(t){const e={};return t.replace(u1,"").split(c1).forEach(n=>{if(n){const r=n.split(l1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lo(t){let e="";if(ze(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=lo(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f1=xu(d1);function tm(t){return!!t||t===""}const nm=t=>!!(t&&t.__v_isRef===!0),Tn=t=>ze(t)?t:t==null?"":de(t)||Fe(t)&&(t.toString===Jg||!me(t.toString))?nm(t)?Tn(t.value):JSON.stringify(t,rm,2):String(t),rm=(t,e)=>nm(e)?rm(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[sl(r,i)+" =>"]=s,n),{})}:Xg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sl(n))}:kr(e)?sl(e):Fe(e)&&!de(e)&&!Zg(e)?String(e):e,sl=(t,e="")=>{var n;return kr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class p1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function g1(){return Vt}let Me;const il=new WeakSet;class sm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,il.has(this)&&(il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||om(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nf(this),am(this);const e=Me,n=on;Me=this,on=!0;try{return this.fn()}finally{cm(this),Me=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let im=0,Ai,bi;function om(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Ai,Ai=t}function Uu(){im++}function Fu(){if(--im>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ai;){let e=Ai;for(Ai=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function am(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bu(r),m1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bi)||(t.globalVersion=Bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Vl(t))))return;t.flags|=2;const e=t.dep,n=Me,r=on;Me=t,on=!0;try{am(t);const s=t.fn(t._value);(e.version===0||mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,on=r,cm(t),t.flags&=-3}}function Bu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function m1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const um=[];function Bn(){um.push(on),on=!1}function $n(){const t=um.pop();on=t===void 0?!0:t}function nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Bi=0;class _1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $u{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!on||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new _1(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,hm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Bi++,this.notify(e)}notify(e){Uu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fu()}}}function hm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)hm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ml=new WeakMap,qr=Symbol(""),Ll=Symbol(""),$i=Symbol("");function It(t,e,n){if(on&&Me){let r=Ml.get(t);r||Ml.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $u),s.map=r,s.key=n),s.track()}}function On(t,e,n,r,s,i){const o=Ml.get(t);if(!o){Bi++;return}const c=l=>{l&&l.trigger()};if(Uu(),e==="clear")o.forEach(c);else{const l=de(t),u=l&&Mu(n);if(l&&n==="length"){const d=Number(r);o.forEach((f,g)=>{(g==="length"||g===$i||!kr(g)&&g>=d)&&c(f)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get($i)),e){case"add":l?u&&c(o.get("length")):(c(o.get(qr)),Rs(t)&&c(o.get(Ll)));break;case"delete":l||(c(o.get(qr)),Rs(t)&&c(o.get(Ll)));break;case"set":Rs(t)&&c(o.get(qr));break}}Fu()}function us(t){const e=Pe(t);return e===t?e:(It(e,"iterate",$i),en(t)?e:e.map(ft))}function rc(t){return It(t=Pe(t),"iterate",$i),t}const y1={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,ft)},concat(...t){return us(this).concat(...t.map(e=>de(e)?us(e):e))},entries(){return ol(this,"entries",t=>(t[1]=ft(t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(ft),arguments)},find(t,e){return Dn(this,"find",t,e,ft,arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,ft,arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return al(this,"includes",t)},indexOf(...t){return al(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return al(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return rf(this,"reduce",t,e)},reduceRight(t,...e){return rf(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return ol(this,"values",ft)}};function ol(t,e,n){const r=rc(t),s=r[e]();return r!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const v1=Array.prototype;function Dn(t,e,n,r,s,i){const o=rc(t),c=o!==t&&!en(t),l=o[e];if(l!==v1[e]){const f=l.apply(t,i);return c?ft(f):f}let u=n;o!==t&&(c?u=function(f,g){return n.call(this,ft(f),g,t)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function rf(t,e,n,r){const s=rc(t);let i=n;return s!==t&&(en(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ft(c),l,t)}),s[e](i,...r)}function al(t,e,n){const r=Pe(t);It(r,"iterate",$i);const s=r[e](...n);return(s===-1||s===!1)&&Hu(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function fi(t,e,n=[]){Bn(),Uu();const r=Pe(t)[e].apply(t,n);return Fu(),$n(),r}const T1=xu("__proto__,__v_isRef,__isVue"),dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kr));function E1(t){kr(t)||(t=String(t));const e=Pe(this);return It(e,"has",t),e.hasOwnProperty(t)}class fm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?D1:_m:i?mm:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let l;if(o&&(l=y1[n]))return l;if(n==="hasOwnProperty")return E1}const c=Reflect.get(e,n,bt(e)?e:r);return(kr(n)?dm.has(n):T1(n))||(s||It(e,"get",n),i)?c:bt(c)?o&&Mu(n)?c:c.value:Fe(c)?s?vm(c):zs(c):c}}class pm extends fm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=wr(i);if(!en(r)&&!wr(r)&&(i=Pe(i),r=Pe(r)),!de(e)&&bt(i)&&!bt(r))return l?!1:(i.value=r,!0)}const o=de(e)&&Mu(n)?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,bt(e)?e:s);return e===Pe(s)&&(o?mr(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kr(n)||!dm.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",de(e)?"length":qr),Reflect.ownKeys(e)}}class w1 extends fm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const I1=new pm,A1=new w1,b1=new pm(!0);const Ul=t=>t,qo=t=>Reflect.getPrototypeOf(t);function R1(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Rs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Ul:e?Ia:ft;return!e&&It(i,"iterate",l?Ll:qr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:c?[d(f[0]),d(f[1])]:d(f),done:g}},[Symbol.iterator](){return this}}}}function Ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function S1(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),c=Pe(s);t||(mr(s,c)&&It(o,"get",s),It(o,"get",c));const{has:l}=qo(o),u=e?Ul:t?Ia:ft;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(Pe(s),"iterate",qr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),c=Pe(s);return t||(mr(s,c)&&It(o,"has",s),It(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Pe(c),u=e?Ul:t?Ia:ft;return!t&&It(l,"iterate",qr),c.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return st(n,t?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){!e&&!en(s)&&!wr(s)&&(s=Pe(s));const i=Pe(this);return qo(i).has.call(i,s)||(i.add(s),On(i,"add",s,s)),this},set(s,i){!e&&!en(i)&&!wr(i)&&(i=Pe(i));const o=Pe(this),{has:c,get:l}=qo(o);let u=c.call(o,s);u||(s=Pe(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?mr(i,d)&&On(o,"set",s,i):On(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:c}=qo(i);let l=o.call(i,s);l||(s=Pe(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&On(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&On(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=R1(s,t,e)}),n}function ju(t,e){const n=S1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const C1={get:ju(!1,!1)},P1={get:ju(!1,!0)},k1={get:ju(!0,!1)};const gm=new WeakMap,mm=new WeakMap,_m=new WeakMap,D1=new WeakMap;function N1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x1(t){return t.__v_skip||!Object.isExtensible(t)?0:N1(s1(t))}function zs(t){return wr(t)?t:qu(t,!1,I1,C1,gm)}function ym(t){return qu(t,!1,b1,P1,mm)}function vm(t){return qu(t,!0,A1,k1,_m)}function qu(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=x1(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ss(t){return wr(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function Hu(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function O1(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&em(t,"__v_skip",!0),t}const ft=t=>Fe(t)?zs(t):t,Ia=t=>Fe(t)?vm(t):t;function bt(t){return t?t.__v_isRef===!0:!1}function at(t){return Tm(t,!1)}function V1(t){return Tm(t,!0)}function Tm(t,e){return bt(t)?t:new M1(t,e)}class M1{constructor(e,n){this.dep=new $u,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||en(e)||wr(e);e=r?e:Pe(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:ft(e),this.dep.trigger())}}function ce(t){return bt(t)?t.value:t}const L1={get:(t,e,n)=>e==="__v_raw"?t:ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Em(t){return Ss(t)?t:new Proxy(t,L1)}class U1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $u(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return om(this,!0),!0}get value(){const e=this.dep.track();return lm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function F1(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new U1(r,s,n)}const zo={},Aa=new WeakMap;let Br;function B1(t,e=!1,n=Br){if(n){let r=Aa.get(n);r||Aa.set(n,r=[]),r.push(t)}}function $1(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=L=>s?L:en(L)||s===!1||s===0?Vn(L,1):Vn(L);let d,f,g,m,R=!1,P=!1;if(bt(t)?(f=()=>t.value,R=en(t)):Ss(t)?(f=()=>u(t),R=!0):de(t)?(P=!0,R=t.some(L=>Ss(L)||en(L)),f=()=>t.map(L=>{if(bt(L))return L.value;if(Ss(L))return u(L);if(me(L))return l?l(L,2):L()})):me(t)?e?f=l?()=>l(t,2):t:f=()=>{if(g){Bn();try{g()}finally{$n()}}const L=Br;Br=d;try{return l?l(t,3,[m]):t(m)}finally{Br=L}}:f=wn,e&&s){const L=f,ne=s===!0?1/0:s;f=()=>Vn(L(),ne)}const C=g1(),V=()=>{d.stop(),C&&C.active&&Vu(C.effects,d)};if(i&&e){const L=e;e=(...ne)=>{L(...ne),V()}}let M=P?new Array(t.length).fill(zo):zo;const O=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const ne=d.run();if(s||R||(P?ne.some((J,b)=>mr(J,M[b])):mr(ne,M))){g&&g();const J=Br;Br=d;try{const b=[ne,M===zo?void 0:P&&M[0]===zo?[]:M,m];M=ne,l?l(e,3,b):e(...b)}finally{Br=J}}}else d.run()};return c&&c(O),d=new sm(f),d.scheduler=o?()=>o(O,!1):O,m=L=>B1(L,!1,d),g=d.onStop=()=>{const L=Aa.get(d);if(L){if(l)l(L,4);else for(const ne of L)ne();Aa.delete(d)}},e?r?O(!0):M=d.run():o?o(O.bind(null,!0),!0):d.run(),V.pause=d.pause.bind(d),V.resume=d.resume.bind(d),V.stop=V,V}function Vn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,bt(t))Vn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(Xg(t)||Rs(t))t.forEach(r=>{Vn(r,e,n)});else if(Zg(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(t,e,n,r){try{return r?t(...r):t()}catch(s){sc(s,e,n)}}function un(t,e,n,r){if(me(t)){const s=uo(t,e,n,r);return s&&Yg(s)&&s.catch(i=>{sc(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function sc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,l,u)===!1)return}c=c.parent}if(i){Bn(),uo(i,null,10,[t,l,u]),$n();return}}j1(t,n,s,r,o)}function j1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let _n=-1;const Cs=[];let or=null,fs=0;const wm=Promise.resolve();let ba=null;function Im(t){const e=ba||wm;return t?e.then(this?t.bind(this):t):e}function q1(t){let e=_n+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=ji(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zu(t){if(!(t.flags&1)){const e=ji(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=ji(n)?Dt.push(t):Dt.splice(q1(e),0,t),t.flags|=1,Am()}}function Am(){ba||(ba=wm.then(Rm))}function H1(t){de(t)?Cs.push(...t):or&&t.id===-1?or.splice(fs+1,0,t):t.flags&1||(Cs.push(t),t.flags|=1),Am()}function sf(t,e,n=_n+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bm(t){if(Cs.length){const e=[...new Set(Cs)].sort((n,r)=>ji(n)-ji(r));if(Cs.length=0,or){or.push(...e);return}for(or=e,fs=0;fs<or.length;fs++){const n=or[fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}or=null,fs=0}}const ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rm(t){try{for(_n=0;_n<Dt.length;_n++){const e=Dt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Dt.length;_n++){const e=Dt[_n];e&&(e.flags&=-2)}_n=-1,Dt.length=0,bm(),ba=null,(Dt.length||Cs.length)&&Rm()}}let Bt=null,Sm=null;function Ra(t){const e=Bt;return Bt=t,Sm=t&&t.type.__scopeId||null,e}function Gr(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yf(-1);const i=Ra(e);let o;try{o=t(...s)}finally{Ra(i),r._d&&yf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function z1(t,e){if(Bt===null)return t;const n=uc(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),un(l,n,8,[t.el,c,t,e]),$n())}}const Cm=Symbol("_vte"),G1=t=>t.__isTeleport,Ri=t=>t&&(t.disabled||t.disabled===""),of=t=>t&&(t.defer||t.defer===""),af=t=>typeof SVGElement<"u"&&t instanceof SVGElement,cf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Fl=(t,e)=>{const n=t&&t.to;return ze(n)?e?e(n):null:n},Pm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:f,pbc:g,o:{insert:m,querySelector:R,createText:P,createComment:C}}=u,V=Ri(e.props);let{shapeFlag:M,children:O,dynamicChildren:L}=e;if(t==null){const ne=e.el=P(""),J=e.anchor=P("");m(ne,n,r),m(J,n,r);const b=(y,I)=>{M&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),d(O,y,I,s,i,o,c,l))},v=()=>{const y=e.target=Fl(e.props,R),I=km(y,e,P,m);y&&(o!=="svg"&&af(y)?o="svg":o!=="mathml"&&cf(y)&&(o="mathml"),V||(b(y,I),ia(e,!1)))};V&&(b(n,J),ia(e,!0)),of(e.props)?(e.el.__isMounted=!1,kt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(of(e.props)&&t.el.__isMounted===!1){kt(()=>{Pm.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ne=e.anchor=t.anchor,J=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=Ri(t.props),y=v?n:J,I=v?ne:b;if(o==="svg"||af(J)?o="svg":(o==="mathml"||cf(J))&&(o="mathml"),L?(g(t.dynamicChildren,L,y,s,i,o,c),Qu(t,e,!0)):l||f(t,e,y,I,s,i,o,c,!1),V)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Go(e,n,ne,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const S=e.target=Fl(e.props,R);S&&Go(e,S,null,u,0)}else v&&Go(e,J,b,u,1);ia(e,V)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:d,target:f,props:g}=t;if(f&&(s(u),s(d)),i&&s(l),o&16){const m=i||!Ri(g);for(let R=0;R<c.length;R++){const P=c[R];r(P,e,n,m,!!P.dynamicChildren)}}},move:Go,hydrate:W1};function Go(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,f=i===2;if(f&&r(o,e,n),(!f||Ri(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);f&&r(c,e,n)}function W1(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:d}},f){const g=e.target=Fl(e.props,l);if(g){const m=Ri(e.props),R=g._lpa||g.firstChild;if(e.shapeFlag&16)if(m)e.anchor=f(o(t),e,c(t),n,r,s,i),e.targetStart=R,e.targetAnchor=R&&o(R);else{e.anchor=o(t);let P=R;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")e.targetStart=P;else if(P.data==="teleport anchor"){e.targetAnchor=P,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}P=o(P)}e.targetAnchor||km(g,e,d,u),f(R&&o(R),e,g,n,r,s,i)}ia(e,m)}return e.anchor&&o(e.anchor)}const K1=Pm;function ia(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function km(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Cm]=i,t&&(r(s,t),r(i,t)),i}const hs=Symbol("_leaveCb"),Wo=Symbol("_enterCb");function Q1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gu(()=>{t.isMounted=!0}),Mm(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],X1={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt};function Y1(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Bl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:g,onLeave:m,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:C,onAppear:V,onAfterAppear:M,onAppearCancelled:O}=e,L=String(t.key),ne=Y1(n,t),J=(y,I)=>{y&&un(y,r,9,I)},b=(y,I)=>{const S=I[1];J(y,I),de(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:c,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=C||l;else return;y[hs]&&y[hs](!0);const S=ne[L];S&&ps(t,S)&&S.el[hs]&&S.el[hs](),J(I,[y])},enter(y){let I=u,S=d,A=f;if(!n.isMounted)if(i)I=V||u,S=M||d,A=O||f;else return;let T=!1;const Ne=y[Wo]=Ze=>{T||(T=!0,Ze?J(A,[y]):J(S,[y]),v.delayedLeave&&v.delayedLeave(),y[Wo]=void 0)};I?b(I,[y,Ne]):Ne()},leave(y,I){const S=String(t.key);if(y[Wo]&&y[Wo](!0),n.isUnmounting)return I();J(g,[y]);let A=!1;const T=y[hs]=Ne=>{A||(A=!0,I(),Ne?J(P,[y]):J(R,[y]),y[hs]=void 0,ne[S]===t&&delete ne[S])};ne[S]=t,m?b(m,[y,T]):T()},clone(y){return Bl(y,e,n,r)}};return v}function qi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ue?(o.patchFlag&128&&s++,r=r.concat(Dm(o.children,e,c))):(e||o.type!==jn)&&r.push(c!=null?Wr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function fn(t,e){return me(t)?st({name:t.name},e,{setup:t}):t}function Nm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sa(t,e,n,r,s=!1){if(de(t)){t.forEach((R,P)=>Sa(R,e&&(de(e)?e[P]:e),n,r,s));return}if(Si(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?uc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Ve?c.refs={}:c.refs,f=c.setupState,g=Pe(f),m=f===Ve?()=>!1:R=>De(g,R);if(u!=null&&u!==l&&(ze(u)?(d[u]=null,m(u)&&(f[u]=null)):bt(u)&&(u.value=null)),me(l))uo(l,c,12,[o,d]);else{const R=ze(l),P=bt(l);if(R||P){const C=()=>{if(t.f){const V=R?m(l)?f[l]:d[l]:l.value;s?de(V)&&Vu(V,i):de(V)?V.includes(i)||V.push(i):R?(d[l]=[i],m(l)&&(f[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else R?(d[l]=o,m(l)&&(f[l]=o)):P&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,kt(C,n)):C()}}}nc().requestIdleCallback;nc().cancelIdleCallback;const Si=t=>!!t.type.__asyncLoader,xm=t=>t.type.__isKeepAlive;function J1(t,e){Om(t,"a",e)}function Z1(t,e){Om(t,"da",e)}function Om(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xm(s.parent.vnode)&&eT(r,e,n,s),s=s.parent}}function eT(t,e,n,r){const s=ic(e,t,r,!0);Lm(()=>{Vu(r[e],s)},n)}function ic(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=fo(n),l=un(e,n,t,o);return c(),$n(),l});return r?s.unshift(i):s.push(i),i}}const Qn=t=>(e,n=pt)=>{(!zi||t==="sp")&&ic(t,(...r)=>e(...r),n)},tT=Qn("bm"),Gu=Qn("m"),nT=Qn("bu"),Vm=Qn("u"),Mm=Qn("bum"),Lm=Qn("um"),rT=Qn("sp"),sT=Qn("rtg"),iT=Qn("rtc");function oT(t,e=pt){ic("ec",t,e)}const Um="components";function oc(t,e){return $m(Um,t,!0,e)||t}const Fm=Symbol.for("v-ndc");function Bm(t){return ze(t)?$m(Um,t,!1)||t:t||Fm}function $m(t,e,n=!0,r=!1){const s=Bt||pt;if(s){const i=s.type;{const c=WT(i,!1);if(c&&(c===e||c===tn(e)||c===tc(tn(e))))return i}const o=lf(s[t]||i[t],e)||lf(s.appContext[t],e);return!o&&r?i:o}}function lf(t,e){return t&&(t[e]||t[tn(e)]||t[tc(tn(e))])}function ho(t,e,n,r){let s;const i=n,o=de(t);if(o||ze(t)){const c=o&&Ss(t);let l=!1,u=!1;c&&(l=!en(t),u=wr(t),t=rc(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(l?u?Ia(ft(t[d])):ft(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const $l=t=>t?o_(t)?uc(t):$l(t.parent):null,Ci=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$l(t.parent),$root:t=>$l(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qm(t),$forceUpdate:t=>t.f||(t.f=()=>{zu(t.update)}),$nextTick:t=>t.n||(t.n=Im.bind(t.proxy)),$watch:t=>ST.bind(t)}),cl=(t,e)=>t!==Ve&&!t.__isScriptSetup&&De(t,e),aT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cl(r,e))return o[e]=1,r[e];if(s!==Ve&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Ve&&De(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const d=Ci[e];let f,g;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ve&&De(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,De(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cl(s,e)?(s[e]=n,!0):r!==Ve&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&De(t,o)||cl(e,o)||(c=i[0])&&De(c,o)||De(r,o)||De(Ci,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uf(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jl=!0;function cT(t){const e=qm(t),n=t.proxy,r=t.ctx;jl=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:g,beforeUpdate:m,updated:R,activated:P,deactivated:C,beforeDestroy:V,beforeUnmount:M,destroyed:O,unmounted:L,render:ne,renderTracked:J,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:S,components:A,directives:T,filters:Ne}=e;if(u&&lT(u,r,null),o)for(const Ie in o){const Te=o[Ie];me(Te)&&(r[Ie]=Te.bind(n))}if(s){const Ie=s.call(n,n);Fe(Ie)&&(t.data=zs(Ie))}if(jl=!0,i)for(const Ie in i){const Te=i[Ie],jt=me(Te)?Te.bind(n,n):me(Te.get)?Te.get.bind(n,n):wn,nn=!me(Te)&&me(Te.set)?Te.set.bind(n):wn,Qt=Qe({get:jt,set:nn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:qe=>Qt.value=qe})}if(c)for(const Ie in c)jm(c[Ie],r,n,Ie);if(l){const Ie=me(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(Te=>{oa(Te,Ie[Te])})}d&&hf(d,t,"c");function je(Ie,Te){de(Te)?Te.forEach(jt=>Ie(jt.bind(n))):Te&&Ie(Te.bind(n))}if(je(tT,f),je(Gu,g),je(nT,m),je(Vm,R),je(J1,P),je(Z1,C),je(oT,v),je(iT,J),je(sT,b),je(Mm,M),je(Lm,L),je(rT,y),de(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(Te=>{Object.defineProperty(Ie,Te,{get:()=>n[Te],set:jt=>n[Te]=jt})})}else t.exposed||(t.exposed={});ne&&t.render===wn&&(t.render=ne),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T),y&&Nm(t)}function lT(t,e,n=wn){de(t)&&(t=ql(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hf(t,e,n){un(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jm(t,e,n,r){let s=r.includes(".")?t_(n,r):()=>n[r];if(ze(t)){const i=e[t];me(i)&&Pi(s,i)}else if(me(t))Pi(s,t.bind(n));else if(Fe(t))if(de(t))t.forEach(i=>jm(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Pi(s,i,t)}}function qm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ca(l,u,o,!0)),Ca(l,e,o)),Fe(e)&&i.set(e,l),l}function Ca(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ca(t,i,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=uT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const uT={data:df,props:ff,emits:ff,methods:_i,computed:_i,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:_i,directives:_i,watch:dT,provide:df,inject:hT};function df(t,e){return e?t?function(){return st(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function hT(t,e){return _i(ql(t),ql(e))}function ql(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?st(Object.create(null),t,e):e}function ff(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:st(Object.create(null),uf(t),uf(e??{})):e}function dT(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Hm(){return{app:null,config:{isNativeTag:n1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fT=0;function pT(t,e){return function(r,s=null){me(r)||(r=st({},r)),s!=null&&!Fe(s)&&(s=null);const i=Hm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:fT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:QT,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(u,...f)):me(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,g){if(!l){const m=u._ceVNode||ye(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,d,g),l=!0,u._container=d,d.__vue_app__=u,uc(m.component)}},onUnmount(d){c.push(d)},unmount(){l&&(un(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=Ps;Ps=u;try{return d()}finally{Ps=f}}};return u}}let Ps=null;function oa(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=pt||Bt;if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const zm={},Gm=()=>Object.create(zm),Wm=t=>Object.getPrototypeOf(t)===zm;function gT(t,e,n,r=!1){const s={},i=Gm();t.propsDefaults=Object.create(null),Km(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ym(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Pe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let g=d[f];if(ac(t.emitsOptions,g))continue;const m=e[g];if(l)if(De(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const R=tn(g);s[R]=Hl(l,c,R,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{Km(t,e,s,i)&&(u=!0);let d;for(const f in c)(!e||!De(e,f)&&((d=es(f))===f||!De(e,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Hl(l,c,f,void 0,t,!0)):delete s[f]);if(i!==c)for(const f in i)(!e||!De(e,f))&&(delete i[f],u=!0)}u&&On(t.attrs,"set","")}function Km(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ii(l))continue;const u=e[l];let d;s&&De(s,d=tn(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:ac(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Pe(n),u=c||Ve;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Hl(s,l,f,u[f],t,!De(u,f))}}return o}function Hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=De(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=fo(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}const _T=new WeakMap;function Qm(t,e,n=!1){const r=n?_T:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!me(t)){const d=f=>{l=!0;const[g,m]=Qm(f,e,!0);st(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Fe(t)&&r.set(t,bs),bs;if(de(i))for(let d=0;d<i.length;d++){const f=tn(i[d]);pf(f)&&(o[f]=Ve)}else if(i)for(const d in i){const f=tn(d);if(pf(f)){const g=i[d],m=o[f]=de(g)||me(g)?{type:g}:st({},g),R=m.type;let P=!1,C=!0;if(de(R))for(let V=0;V<R.length;++V){const M=R[V],O=me(M)&&M.name;if(O==="Boolean"){P=!0;break}else O==="String"&&(C=!1)}else P=me(R)&&R.name==="Boolean";m[0]=P,m[1]=C,(P||De(m,"default"))&&c.push(f)}}const u=[o,c];return Fe(t)&&r.set(t,u),u}function pf(t){return t[0]!=="$"&&!Ii(t)}const Wu=t=>t[0]==="_"||t==="$stable",Ku=t=>de(t)?t.map(vn):[vn(t)],yT=(t,e,n)=>{if(e._n)return e;const r=Gr((...s)=>Ku(e(...s)),n);return r._c=!1,r},Xm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wu(s))continue;const i=t[s];if(me(i))e[s]=yT(s,i,r);else if(i!=null){const o=Ku(i);e[s]=()=>o}}},Ym=(t,e)=>{const n=Ku(e);t.slots.default=()=>n},Jm=(t,e,n)=>{for(const r in e)(n||!Wu(r))&&(t[r]=e[r])},vT=(t,e,n)=>{const r=t.slots=Gm();if(t.vnode.shapeFlag&32){const s=e._;s?(Jm(r,e,n),n&&em(r,"_",s,!0)):Xm(e,r)}else e&&Ym(t,e)},TT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Jm(s,e,n):(i=!e.$stable,Xm(e,s)),o=e}else e&&(Ym(t,e),o={default:1});if(i)for(const c in s)!Wu(c)&&o[c]==null&&delete s[c]},kt=OT;function ET(t){return wT(t)}function wT(t,e){const n=nc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:g,setScopeId:m=wn,insertStaticContent:R}=t,P=(E,w,k,F=null,j=null,B=null,X=void 0,G=null,H=!!w.dynamicChildren)=>{if(E===w)return;E&&!ps(E,w)&&(F=U(E),qe(E,j,B,!0),E=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Q}=w;switch(q){case cc:C(E,w,k,F);break;case jn:V(E,w,k,F);break;case aa:E==null&&M(w,k,F,X);break;case Ue:A(E,w,k,F,j,B,X,G,H);break;default:Q&1?ne(E,w,k,F,j,B,X,G,H):Q&6?T(E,w,k,F,j,B,X,G,H):(Q&64||Q&128)&&q.process(E,w,k,F,j,B,X,G,H,re)}oe!=null&&j&&Sa(oe,E&&E.ref,B,w||E,!w)},C=(E,w,k,F)=>{if(E==null)r(w.el=c(w.children),k,F);else{const j=w.el=E.el;w.children!==E.children&&u(j,w.children)}},V=(E,w,k,F)=>{E==null?r(w.el=l(w.children||""),k,F):w.el=E.el},M=(E,w,k,F)=>{[E.el,E.anchor]=R(E.children,w,k,F,E.el,E.anchor)},O=({el:E,anchor:w},k,F)=>{let j;for(;E&&E!==w;)j=g(E),r(E,k,F),E=j;r(w,k,F)},L=({el:E,anchor:w})=>{let k;for(;E&&E!==w;)k=g(E),s(E),E=k;s(w)},ne=(E,w,k,F,j,B,X,G,H)=>{w.type==="svg"?X="svg":w.type==="math"&&(X="mathml"),E==null?J(w,k,F,j,B,X,G,H):y(E,w,j,B,X,G,H)},J=(E,w,k,F,j,B,X,G)=>{let H,q;const{props:oe,shapeFlag:Q,transition:se,dirs:fe}=E;if(H=E.el=o(E.type,B,oe&&oe.is,oe),Q&8?d(H,E.children):Q&16&&v(E.children,H,null,F,j,ll(E,B),X,G),fe&&Lr(E,null,F,"created"),b(H,E,E.scopeId,X,F),oe){for(const _e in oe)_e!=="value"&&!Ii(_e)&&i(H,_e,null,oe[_e],B,F);"value"in oe&&i(H,"value",null,oe.value,B),(q=oe.onVnodeBeforeMount)&&gn(q,F,E)}fe&&Lr(E,null,F,"beforeMount");const le=IT(j,se);le&&se.beforeEnter(H),r(H,w,k),((q=oe&&oe.onVnodeMounted)||le||fe)&&kt(()=>{q&&gn(q,F,E),le&&se.enter(H),fe&&Lr(E,null,F,"mounted")},j)},b=(E,w,k,F,j)=>{if(k&&m(E,k),F)for(let B=0;B<F.length;B++)m(E,F[B]);if(j){let B=j.subTree;if(w===B||r_(B.type)&&(B.ssContent===w||B.ssFallback===w)){const X=j.vnode;b(E,X,X.scopeId,X.slotScopeIds,j.parent)}}},v=(E,w,k,F,j,B,X,G,H=0)=>{for(let q=H;q<E.length;q++){const oe=E[q]=G?ar(E[q]):vn(E[q]);P(null,oe,w,k,F,j,B,X,G)}},y=(E,w,k,F,j,B,X)=>{const G=w.el=E.el;let{patchFlag:H,dynamicChildren:q,dirs:oe}=w;H|=E.patchFlag&16;const Q=E.props||Ve,se=w.props||Ve;let fe;if(k&&Ur(k,!1),(fe=se.onVnodeBeforeUpdate)&&gn(fe,k,w,E),oe&&Lr(w,E,k,"beforeUpdate"),k&&Ur(k,!0),(Q.innerHTML&&se.innerHTML==null||Q.textContent&&se.textContent==null)&&d(G,""),q?I(E.dynamicChildren,q,G,k,F,ll(w,j),B):X||Te(E,w,G,null,k,F,ll(w,j),B,!1),H>0){if(H&16)S(G,Q,se,k,j);else if(H&2&&Q.class!==se.class&&i(G,"class",null,se.class,j),H&4&&i(G,"style",Q.style,se.style,j),H&8){const le=w.dynamicProps;for(let _e=0;_e<le.length;_e++){const Ae=le[_e],_t=Q[Ae],ct=se[Ae];(ct!==_t||Ae==="value")&&i(G,Ae,_t,ct,j,k)}}H&1&&E.children!==w.children&&d(G,w.children)}else!X&&q==null&&S(G,Q,se,k,j);((fe=se.onVnodeUpdated)||oe)&&kt(()=>{fe&&gn(fe,k,w,E),oe&&Lr(w,E,k,"updated")},F)},I=(E,w,k,F,j,B,X)=>{for(let G=0;G<w.length;G++){const H=E[G],q=w[G],oe=H.el&&(H.type===Ue||!ps(H,q)||H.shapeFlag&198)?f(H.el):k;P(H,q,oe,null,F,j,B,X,!0)}},S=(E,w,k,F,j)=>{if(w!==k){if(w!==Ve)for(const B in w)!Ii(B)&&!(B in k)&&i(E,B,w[B],null,j,F);for(const B in k){if(Ii(B))continue;const X=k[B],G=w[B];X!==G&&B!=="value"&&i(E,B,G,X,j,F)}"value"in k&&i(E,"value",w.value,k.value,j)}},A=(E,w,k,F,j,B,X,G,H)=>{const q=w.el=E?E.el:c(""),oe=w.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:se,slotScopeIds:fe}=w;fe&&(G=G?G.concat(fe):fe),E==null?(r(q,k,F),r(oe,k,F),v(w.children||[],k,oe,j,B,X,G,H)):Q>0&&Q&64&&se&&E.dynamicChildren?(I(E.dynamicChildren,se,k,j,B,X,G),(w.key!=null||j&&w===j.subTree)&&Qu(E,w,!0)):Te(E,w,k,oe,j,B,X,G,H)},T=(E,w,k,F,j,B,X,G,H)=>{w.slotScopeIds=G,E==null?w.shapeFlag&512?j.ctx.activate(w,k,F,X,H):Ne(w,k,F,j,B,X,H):Ze(E,w,H)},Ne=(E,w,k,F,j,B,X)=>{const G=E.component=$T(E,F,j);if(xm(E)&&(G.ctx.renderer=re),qT(G,!1,X),G.asyncDep){if(j&&j.registerDep(G,je,X),!E.el){const H=G.subTree=ye(jn);V(null,H,w,k)}}else je(G,E,w,k,j,B,X)},Ze=(E,w,k)=>{const F=w.component=E.component;if(NT(E,w,k))if(F.asyncDep&&!F.asyncResolved){Ie(F,w,k);return}else F.next=w,F.update();else w.el=E.el,F.vnode=w},je=(E,w,k,F,j,B,X)=>{const G=()=>{if(E.isMounted){let{next:Q,bu:se,u:fe,parent:le,vnode:_e}=E;{const yt=Zm(E);if(yt){Q&&(Q.el=_e.el,Ie(E,Q,X)),yt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ae=Q,_t;Ur(E,!1),Q?(Q.el=_e.el,Ie(E,Q,X)):Q=_e,se&&sa(se),(_t=Q.props&&Q.props.onVnodeBeforeUpdate)&&gn(_t,le,Q,_e),Ur(E,!0);const ct=mf(E),Xt=E.subTree;E.subTree=ct,P(Xt,ct,f(Xt.el),U(Xt),E,j,B),Q.el=ct.el,Ae===null&&xT(E,ct.el),fe&&kt(fe,j),(_t=Q.props&&Q.props.onVnodeUpdated)&&kt(()=>gn(_t,le,Q,_e),j)}else{let Q;const{el:se,props:fe}=w,{bm:le,m:_e,parent:Ae,root:_t,type:ct}=E,Xt=Si(w);Ur(E,!1),le&&sa(le),!Xt&&(Q=fe&&fe.onVnodeBeforeMount)&&gn(Q,Ae,w),Ur(E,!0);{_t.ce&&_t.ce._injectChildStyle(ct);const yt=E.subTree=mf(E);P(null,yt,k,F,E,j,B),w.el=yt.el}if(_e&&kt(_e,j),!Xt&&(Q=fe&&fe.onVnodeMounted)){const yt=w;kt(()=>gn(Q,Ae,yt),j)}(w.shapeFlag&256||Ae&&Si(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&kt(E.a,j),E.isMounted=!0,w=k=F=null}};E.scope.on();const H=E.effect=new sm(G);E.scope.off();const q=E.update=H.run.bind(H),oe=E.job=H.runIfDirty.bind(H);oe.i=E,oe.id=E.uid,H.scheduler=()=>zu(oe),Ur(E,!0),q()},Ie=(E,w,k)=>{w.component=E;const F=E.vnode.props;E.vnode=w,E.next=null,mT(E,w.props,F,k),TT(E,w.children,k),Bn(),sf(E),$n()},Te=(E,w,k,F,j,B,X,G,H=!1)=>{const q=E&&E.children,oe=E?E.shapeFlag:0,Q=w.children,{patchFlag:se,shapeFlag:fe}=w;if(se>0){if(se&128){nn(q,Q,k,F,j,B,X,G,H);return}else if(se&256){jt(q,Q,k,F,j,B,X,G,H);return}}fe&8?(oe&16&&Ot(q,j,B),Q!==q&&d(k,Q)):oe&16?fe&16?nn(q,Q,k,F,j,B,X,G,H):Ot(q,j,B,!0):(oe&8&&d(k,""),fe&16&&v(Q,k,F,j,B,X,G,H))},jt=(E,w,k,F,j,B,X,G,H)=>{E=E||bs,w=w||bs;const q=E.length,oe=w.length,Q=Math.min(q,oe);let se;for(se=0;se<Q;se++){const fe=w[se]=H?ar(w[se]):vn(w[se]);P(E[se],fe,k,null,j,B,X,G,H)}q>oe?Ot(E,j,B,!0,!1,Q):v(w,k,F,j,B,X,G,H,Q)},nn=(E,w,k,F,j,B,X,G,H)=>{let q=0;const oe=w.length;let Q=E.length-1,se=oe-1;for(;q<=Q&&q<=se;){const fe=E[q],le=w[q]=H?ar(w[q]):vn(w[q]);if(ps(fe,le))P(fe,le,k,null,j,B,X,G,H);else break;q++}for(;q<=Q&&q<=se;){const fe=E[Q],le=w[se]=H?ar(w[se]):vn(w[se]);if(ps(fe,le))P(fe,le,k,null,j,B,X,G,H);else break;Q--,se--}if(q>Q){if(q<=se){const fe=se+1,le=fe<oe?w[fe].el:F;for(;q<=se;)P(null,w[q]=H?ar(w[q]):vn(w[q]),k,le,j,B,X,G,H),q++}}else if(q>se)for(;q<=Q;)qe(E[q],j,B,!0),q++;else{const fe=q,le=q,_e=new Map;for(q=le;q<=se;q++){const lt=w[q]=H?ar(w[q]):vn(w[q]);lt.key!=null&&_e.set(lt.key,q)}let Ae,_t=0;const ct=se-le+1;let Xt=!1,yt=0;const Jn=new Array(ct);for(q=0;q<ct;q++)Jn[q]=0;for(q=fe;q<=Q;q++){const lt=E[q];if(_t>=ct){qe(lt,j,B,!0);continue}let Yt;if(lt.key!=null)Yt=_e.get(lt.key);else for(Ae=le;Ae<=se;Ae++)if(Jn[Ae-le]===0&&ps(lt,w[Ae])){Yt=Ae;break}Yt===void 0?qe(lt,j,B,!0):(Jn[Yt-le]=q+1,Yt>=yt?yt=Yt:Xt=!0,P(lt,w[Yt],k,null,j,B,X,G,H),_t++)}const ei=Xt?AT(Jn):bs;for(Ae=ei.length-1,q=ct-1;q>=0;q--){const lt=le+q,Yt=w[lt],So=lt+1<oe?w[lt+1].el:F;Jn[q]===0?P(null,Yt,k,So,j,B,X,G,H):Xt&&(Ae<0||q!==ei[Ae]?Qt(Yt,k,So,2):Ae--)}}},Qt=(E,w,k,F,j=null)=>{const{el:B,type:X,transition:G,children:H,shapeFlag:q}=E;if(q&6){Qt(E.component.subTree,w,k,F);return}if(q&128){E.suspense.move(w,k,F);return}if(q&64){X.move(E,w,k,re);return}if(X===Ue){r(B,w,k);for(let Q=0;Q<H.length;Q++)Qt(H[Q],w,k,F);r(E.anchor,w,k);return}if(X===aa){O(E,w,k);return}if(F!==2&&q&1&&G)if(F===0)G.beforeEnter(B),r(B,w,k),kt(()=>G.enter(B),j);else{const{leave:Q,delayLeave:se,afterLeave:fe}=G,le=()=>{E.ctx.isUnmounted?s(B):r(B,w,k)},_e=()=>{Q(B,()=>{le(),fe&&fe()})};se?se(B,le,_e):_e()}else r(B,w,k)},qe=(E,w,k,F=!1,j=!1)=>{const{type:B,props:X,ref:G,children:H,dynamicChildren:q,shapeFlag:oe,patchFlag:Q,dirs:se,cacheIndex:fe}=E;if(Q===-2&&(j=!1),G!=null&&(Bn(),Sa(G,null,k,E,!0),$n()),fe!=null&&(w.renderCache[fe]=void 0),oe&256){w.ctx.deactivate(E);return}const le=oe&1&&se,_e=!Si(E);let Ae;if(_e&&(Ae=X&&X.onVnodeBeforeUnmount)&&gn(Ae,w,E),oe&6)pn(E.component,k,F);else{if(oe&128){E.suspense.unmount(k,F);return}le&&Lr(E,null,w,"beforeUnmount"),oe&64?E.type.remove(E,w,k,re,F):q&&!q.hasOnce&&(B!==Ue||Q>0&&Q&64)?Ot(q,w,k,!1,!0):(B===Ue&&Q&384||!j&&oe&16)&&Ot(H,w,k),F&&He(E)}(_e&&(Ae=X&&X.onVnodeUnmounted)||le)&&kt(()=>{Ae&&gn(Ae,w,E),le&&Lr(E,null,w,"unmounted")},k)},He=E=>{const{type:w,el:k,anchor:F,transition:j}=E;if(w===Ue){Yn(k,F);return}if(w===aa){L(E);return}const B=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:X,delayLeave:G}=j,H=()=>X(k,B);G?G(E.el,B,H):H()}else B()},Yn=(E,w)=>{let k;for(;E!==w;)k=g(E),s(E),E=k;s(w)},pn=(E,w,k)=>{const{bum:F,scope:j,job:B,subTree:X,um:G,m:H,a:q,parent:oe,slots:{__:Q}}=E;gf(H),gf(q),F&&sa(F),oe&&de(Q)&&Q.forEach(se=>{oe.renderCache[se]=void 0}),j.stop(),B&&(B.flags|=8,qe(X,E,w,k)),G&&kt(G,w),kt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ot=(E,w,k,F=!1,j=!1,B=0)=>{for(let X=B;X<E.length;X++)qe(E[X],w,k,F,j)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),k=w&&w[Cm];return k?g(k):w};let Z=!1;const Y=(E,w,k)=>{E==null?w._vnode&&qe(w._vnode,null,null,!0):P(w._vnode||null,E,w,null,null,null,k),w._vnode=E,Z||(Z=!0,sf(),bm(),Z=!1)},re={p:P,um:qe,m:Qt,r:He,mt:Ne,mc:v,pc:Te,pbc:I,n:U,o:t};return{render:Y,hydrate:void 0,createApp:pT(Y)}}function ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function IT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qu(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ar(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qu(o,c)),c.type===cc&&(c.el=o.el),c.type===jn&&!c.el&&(c.el=o.el)}}function AT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Zm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zm(e)}function gf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bT=Symbol.for("v-scx"),RT=()=>an(bT);function Pi(t,e,n){return e_(t,e,n)}function e_(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=st({},n),l=e&&r||!e&&i!=="post";let u;if(zi){if(i==="sync"){const m=RT();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=wn,m.resume=wn,m.pause=wn,m}}const d=pt;c.call=(m,R,P)=>un(m,d,R,P);let f=!1;i==="post"?c.scheduler=m=>{kt(m,d&&d.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(m,R)=>{R?m():zu(m)}),c.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const g=$1(t,e,c);return zi&&(u?u.push(g):l&&g()),g}function ST(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?t_(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=fo(this),c=e_(s,i.bind(r),n);return o(),c}function t_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const CT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${es(e)}Modifiers`];function PT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&CT(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>ze(d)?d.trim():d)),o.number&&(s=n.map(Ol)));let c,l=r[c=rl(e)]||r[c=rl(tn(e))];!l&&i&&(l=r[c=rl(es(e))]),l&&un(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,un(u,t,6,s)}}function n_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!me(t)){const l=u=>{const d=n_(u,e,!0);d&&(c=!0,st(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Fe(t)&&r.set(t,null),null):(de(i)?i.forEach(l=>o[l]=null):st(o,i),Fe(t)&&r.set(t,o),o)}function ac(t,e){return!t||!Ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,es(e))||De(t,e))}function mf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:f,data:g,setupState:m,ctx:R,inheritAttrs:P}=t,C=Ra(t);let V,M;try{if(n.shapeFlag&4){const L=s||r,ne=L;V=vn(u.call(ne,L,d,f,m,g,R)),M=c}else{const L=e;V=vn(L.length>1?L(f,{attrs:c,slots:o,emit:l}):L(f,null)),M=e.props?c:kT(c)}}catch(L){ki.length=0,sc(L,t,1),V=ye(jn)}let O=V;if(M&&P!==!1){const L=Object.keys(M),{shapeFlag:ne}=O;L.length&&ne&7&&(i&&L.some(Ou)&&(M=DT(M,i)),O=Wr(O,M,!1,!0))}return n.dirs&&(O=Wr(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&qi(O,n.transition),V=O,Ra(C),V}const kT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ja(n))&&((e||(e={}))[n]=t[n]);return e},DT=(t,e)=>{const n={};for(const r in t)(!Ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function NT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_f(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const g=d[f];if(o[g]!==r[g]&&!ac(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_f(r,o,u):!0:!!o;return!1}function _f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ac(n,i))return!0}return!1}function xT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const r_=t=>t.__isSuspense;function OT(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):H1(t)}const Ue=Symbol.for("v-fgt"),cc=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),ki=[];let Ht=null;function te(t=!1){ki.push(Ht=t?null:[])}function VT(){ki.pop(),Ht=ki[ki.length-1]||null}let Hi=1;function yf(t,e=!1){Hi+=t,t<0&&Ht&&e&&(Ht.hasOnce=!0)}function s_(t){return t.dynamicChildren=Hi>0?Ht||bs:null,VT(),Hi>0&&Ht&&Ht.push(t),t}function ue(t,e,n,r,s,i){return s_(z(t,e,n,r,s,i,!0))}function Ut(t,e,n,r,s){return s_(ye(t,e,n,r,s,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const i_=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||bt(t)||me(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&i_(e),ref:e&&ca(e),scopeId:Sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return c?(Xu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),Hi>0&&!o&&Ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ht.push(l),l}const ye=MT;function MT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fm)&&(t=jn),Pa(t)){const c=Wr(t,e,!0);return n&&Xu(c,n),Hi>0&&!i&&Ht&&(c.shapeFlag&6?Ht[Ht.indexOf(t)]=c:Ht.push(c)),c.patchFlag=-2,c}if(KT(t)&&(t=t.__vccOpts),e){e=LT(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=lo(c)),Fe(l)&&(Hu(l)&&!de(l)&&(l=st({},l)),e.style=Lu(l))}const o=ze(t)?1:r_(t)?128:G1(t)?64:Fe(t)?4:me(t)?2:0;return z(t,e,n,r,s,o,i,!0)}function LT(t){return t?Hu(t)||Wm(t)?st({},t):t:null}function Wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?UT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&i_(u),ref:e&&e.ref?n&&i?de(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wr(t.ssContent),ssFallback:t.ssFallback&&Wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&qi(d,l.clone(d)),d}function At(t=" ",e=0){return ye(cc,null,t,e)}function lc(t,e){const n=ye(aa,null,t);return n.staticCount=e,n}function cn(t="",e=!1){return e?(te(),Ut(jn,null,t)):ye(jn,null,t)}function vn(t){return t==null||typeof t=="boolean"?ye(jn):de(t)?ye(Ue,null,t.slice()):Pa(t)?ar(t):ye(cc,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wr(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wm(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[At(e)]):n=8);t.children=e,t.shapeFlag|=n}function UT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lo([e.class,r.class]));else if(s==="style")e.style=Lu([e.style,r.style]);else if(Ja(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){un(t,e,7,[n,r])}const FT=Hm();let BT=0;function $T(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||FT,i={uid:BT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new p1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qm(r,s),emitsOptions:n_(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=PT.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const jT=()=>pt||Bt;let ka,zl;{const t=nc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),zl=e("__VUE_SSR_SETTERS__",n=>zi=n)}const fo=t=>{const e=pt;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},vf=()=>{pt&&pt.scope.off(),ka(null)};function o_(t){return t.vnode.shapeFlag&4}let zi=!1;function qT(t,e=!1,n=!1){e&&zl(e);const{props:r,children:s}=t.vnode,i=o_(t);gT(t,r,i,e),vT(t,s,n||e);const o=i?HT(t,e):void 0;return e&&zl(!1),o}function HT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,aT);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?GT(t):null,i=fo(t),o=uo(r,t,0,[t.props,s]),c=Yg(o);if($n(),i(),(c||t.sp)&&!Si(t)&&Nm(t),c){if(o.then(vf,vf),e)return o.then(l=>{Tf(t,l)}).catch(l=>{sc(l,t,0)});t.asyncDep=o}else Tf(t,o)}else a_(t)}function Tf(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Em(e)),a_(t)}function a_(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=fo(t);Bn();try{cT(t)}finally{$n(),s()}}}const zT={get(t,e){return It(t,"get",""),t[e]}};function GT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zT),slots:t.slots,emit:t.emit,expose:e}}function uc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Em(O1(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ci)return Ci[n](t)},has(e,n){return n in e||n in Ci}})):t.proxy}function WT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function KT(t){return me(t)&&"__vccOpts"in t}const Qe=(t,e)=>F1(t,e,zi);function c_(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!de(e)?Pa(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pa(n)&&(n=[n]),ye(t,e,n))}const QT="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const Ef=typeof window<"u"&&window.trustedTypes;if(Ef)try{Gl=Ef.createPolicy("vue",{createHTML:t=>t})}catch{}const l_=Gl?t=>Gl.createHTML(t):t=>t,XT="http://www.w3.org/2000/svg",YT="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,wf=xn&&xn.createElement("template"),JT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?xn.createElementNS(XT,t):e==="mathml"?xn.createElementNS(YT,t):n?xn.createElement(t,{is:n}):xn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wf.innerHTML=l_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=wf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",pi="animation",Vs=Symbol("_vtc"),u_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ZT=st({},X1,u_),Fr=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},If=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function eE(t){const e={};for(const A in t)A in u_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,R=tE(s),P=R&&R[0],C=R&&R[1],{onBeforeEnter:V,onEnter:M,onEnterCancelled:O,onLeave:L,onLeaveCancelled:ne,onBeforeAppear:J=V,onAppear:b=M,onAppearCancelled:v=O}=e,y=(A,T,Ne,Ze)=>{A._enterCancelled=Ze,ir(A,T?d:c),ir(A,T?u:o),Ne&&Ne()},I=(A,T)=>{A._isLeaving=!1,ir(A,f),ir(A,m),ir(A,g),T&&T()},S=A=>(T,Ne)=>{const Ze=A?b:M,je=()=>y(T,A,Ne);Fr(Ze,[T,je]),Af(()=>{ir(T,A?l:i),mn(T,A?d:c),If(Ze)||bf(T,r,P,je)})};return st(e,{onBeforeEnter(A){Fr(V,[A]),mn(A,i),mn(A,o)},onBeforeAppear(A){Fr(J,[A]),mn(A,l),mn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const Ne=()=>I(A,T);mn(A,f),A._enterCancelled?(mn(A,g),Wl()):(Wl(),mn(A,g)),Af(()=>{A._isLeaving&&(ir(A,f),mn(A,m),If(L)||bf(A,r,C,Ne))}),Fr(L,[A,Ne])},onEnterCancelled(A){y(A,!1,void 0,!0),Fr(O,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Fr(v,[A])},onLeaveCancelled(A){I(A),Fr(ne,[A])}})}function tE(t){if(t==null)return null;if(Fe(t))return[ul(t.enter),ul(t.leave)];{const e=ul(t);return[e,e]}}function ul(t){return a1(t)}function mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vs]||(t[Vs]=new Set)).add(e)}function ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Vs];n&&(n.delete(e),n.size||(t[Vs]=void 0))}function Af(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nE=0;function bf(t,e,n,r){const s=t._endId=++nE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=h_(t,e);if(!o)return r();const u=o+"end";let d=0;const f=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},c+1),t.addEventListener(u,g)}function h_(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${nr}Delay`),i=r(`${nr}Duration`),o=Rf(s,i),c=r(`${pi}Delay`),l=r(`${pi}Duration`),u=Rf(c,l);let d=null,f=0,g=0;e===nr?o>0&&(d=nr,f=o,g=i.length):e===pi?u>0&&(d=pi,f=u,g=l.length):(f=Math.max(o,u),d=f>0?o>u?nr:pi:null,g=d?d===nr?i.length:l.length:0);const m=d===nr&&/\b(transform|all)(,|$)/.test(r(`${nr}Property`).toString());return{type:d,timeout:f,propCount:g,hasTransform:m}}function Rf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Sf(n)+Sf(t[r])))}function Sf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Wl(){return document.body.offsetHeight}function rE(t,e,n){const r=t[Vs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cf=Symbol("_vod"),sE=Symbol("_vsh"),iE=Symbol(""),oE=/(^|;)\s*display\s*:/;function aE(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&la(r,c,"")}else for(const o in e)n[o]==null&&la(r,o,"");for(const o in n)o==="display"&&(i=!0),la(r,o,n[o])}else if(s){if(e!==n){const o=r[iE];o&&(n+=";"+o),r.cssText=n,i=oE.test(n)}}else e&&t.removeAttribute("style");Cf in t&&(t[Cf]=i?r.display:"",t[sE]&&(r.display="none"))}const Pf=/\s*!important$/;function la(t,e,n){if(de(n))n.forEach(r=>la(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cE(t,e);Pf.test(n)?t.setProperty(es(r),n.replace(Pf,""),"important"):t[r]=n}}const kf=["Webkit","Moz","ms"],hl={};function cE(t,e){const n=hl[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return hl[e]=r;r=tc(r);for(let s=0;s<kf.length;s++){const i=kf[s]+r;if(i in t)return hl[e]=i}return e}const Df="http://www.w3.org/1999/xlink";function Nf(t,e,n,r,s,i=f1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Df,e.slice(6,e.length)):t.setAttributeNS(Df,e,n):n==null||i&&!tm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kr(n)?String(n):n)}function xf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?l_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gs(t,e,n,r){t.addEventListener(e,n,r)}function lE(t,e,n,r){t.removeEventListener(e,n,r)}const Of=Symbol("_vei");function uE(t,e,n,r,s=null){const i=t[Of]||(t[Of]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=hE(e);if(r){const u=i[e]=pE(r,s);gs(t,c,u,l)}else o&&(lE(t,c,o,l),i[e]=void 0)}}const Vf=/(?:Once|Passive|Capture)$/;function hE(t){let e;if(Vf.test(t)){e={};let r;for(;r=t.match(Vf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let dl=0;const dE=Promise.resolve(),fE=()=>dl||(dE.then(()=>dl=0),dl=Date.now());function pE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(gE(r,n.value),e,5,[r])};return n.value=t,n.attached=fE(),n}function gE(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rE(t,r,o):e==="style"?aE(t,n,r):Ja(e)?Ou(e)||uE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_E(t,e,r,o))?(xf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?xf(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nf(t,e,r,o))};function _E(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mf(e)&&ze(n)?!1:e in t}const d_=new WeakMap,f_=new WeakMap,Da=Symbol("_moveCb"),Lf=Symbol("_enterCb"),yE=t=>(delete t.props.mode,t),vE=yE({name:"TransitionGroup",props:st({},ZT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=jT(),r=Q1();let s,i;return Vm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!AE(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(EE),s.forEach(wE);const c=s.filter(IE);Wl(),c.forEach(l=>{const u=l.el,d=u.style;mn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Da]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",f),u[Da]=null,ir(u,o))};u.addEventListener("transitionend",f)}),s=[]}),()=>{const o=Pe(t),c=eE(o);let l=o.tag||Ue;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),qi(d,Bl(d,c,r,n)),d_.set(d,d.el.getBoundingClientRect()))}i=e.default?Dm(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&qi(d,Bl(d,c,r,n))}return ye(l,null,i)}}}),TE=vE;function EE(t){const e=t.el;e[Da]&&e[Da](),e[Lf]&&e[Lf]()}function wE(t){f_.set(t,t.el.getBoundingClientRect())}function IE(t){const e=d_.get(t),n=f_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function AE(t,e,n){const r=t.cloneNode(),s=t[Vs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=h_(r);return i.removeChild(r),o}const Uf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>sa(e,n):e};function bE(t){t.target.composing=!0}function Ff(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fl=Symbol("_assign"),RE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fl]=Uf(s);const i=r||s.props&&s.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ol(c)),t[fl](c)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",bE),gs(t,"compositionend",Ff),gs(t,"change",Ff))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fl]=Uf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ol(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},SE=st({patchProp:mE},JT);let Bf;function CE(){return Bf||(Bf=ET(SE))}const p_=(...t)=>{const e=CE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kE(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,PE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function PE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kE(t){return ze(t)?document.querySelector(t):t}const xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},DE={};function NE(t,e){const n=oc("router-view");return te(),Ut(n)}const xE=xt(DE,[["render",NE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof document<"u";function g_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function OE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&g_(t.default)}const ke=Object.assign;function pl(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const Di=()=>{},hn=Array.isArray,m_=/#/g,VE=/&/g,ME=/\//g,LE=/=/g,UE=/\?/g,__=/\+/g,FE=/%5B/g,BE=/%5D/g,y_=/%5E/g,$E=/%60/g,v_=/%7B/g,jE=/%7C/g,T_=/%7D/g,qE=/%20/g;function Yu(t){return encodeURI(""+t).replace(jE,"|").replace(FE,"[").replace(BE,"]")}function HE(t){return Yu(t).replace(v_,"{").replace(T_,"}").replace(y_,"^")}function Kl(t){return Yu(t).replace(__,"%2B").replace(qE,"+").replace(m_,"%23").replace(VE,"%26").replace($E,"`").replace(v_,"{").replace(T_,"}").replace(y_,"^")}function zE(t){return Kl(t).replace(LE,"%3D")}function GE(t){return Yu(t).replace(m_,"%23").replace(UE,"%3F")}function WE(t){return t==null?"":GE(t).replace(ME,"%2F")}function Gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const KE=/\/$/,QE=t=>t.replace(KE,"");function gl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ZE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Gi(o)}}function XE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ms(e.matched[r],n.matched[s])&&E_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JE(t[n],e[n]))return!1;return!0}function JE(t,e){return hn(t)?jf(t,e):hn(e)?jf(e,t):t===e}function jf(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ni||(Ni={}));function ew(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QE(t)}const tw=/^[^#]+#/;function nw(t,e){return t.replace(tw,"#")+e}function rw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hc=()=>({left:window.scrollX,top:window.scrollY});function sw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qf(t,e){return(history.state?history.state.position-e:-1)+t}const Ql=new Map;function iw(t,e){Ql.set(t,e)}function ow(t){const e=Ql.get(t);return Ql.delete(t),e}let aw=()=>location.protocol+"//"+location.host;function w_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),$f(l,"")}return $f(n,t)+r+s}function cw(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=w_(t,location),R=n.value,P=e.value;let C=0;if(g){if(n.value=m,e.value=g,o&&o===R){o=null;return}C=P?g.position-P.position:0}else r(m);s.forEach(V=>{V(n.value,R,{delta:C,type:Wi.pop,direction:C?C>0?Ni.forward:Ni.back:Ni.unknown})})};function l(){o=n.value}function u(g){s.push(g);const m=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(m),m}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:hc()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Hf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hc():null}}function lw(t){const{history:e,location:n}=window,r={value:w_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:aw()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](g)}}function o(l,u){const d=ke({},e.state,Hf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=ke({},s.value,e.state,{forward:l,scroll:hc()});i(d.current,d,!0);const f=ke({},Hf(r.value,l,null),{position:d.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function uw(t){t=ew(t);const e=lw(t),n=cw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:nw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hw(t){return typeof t=="string"||t&&typeof t=="object"}function I_(t){return typeof t=="string"||typeof t=="symbol"}const A_=Symbol("");var zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zf||(zf={}));function Ls(t,e){return ke(new Error,{type:t,[A_]:!0},e)}function Nn(t,e){return t instanceof Error&&A_ in t&&(e==null||!!(t.type&e))}const Gf="[^/]+?",dw={sensitive:!1,strict:!1,start:!0,end:!0},fw=/[.+*?^${}()[\]/\\]/g;function pw(t,e){const n=ke({},dw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(n.sensitive?.25:0);if(g.type===0)f||(s+="/"),s+=g.value.replace(fw,"\\$&"),m+=40;else if(g.type===1){const{value:R,repeatable:P,optional:C,regexp:V}=g;i.push({name:R,repeatable:P,optional:C});const M=V||Gf;if(M!==Gf){m+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${R}" (${M}): `+L.message)}}let O=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(O=C&&u.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,m+=20,C&&(m+=-8),P&&(m+=-20),M===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),f={};if(!d)return null;for(let g=1;g<d.length;g++){const m=d[g]||"",R=i[g-1];f[R.name]=m&&R.repeatable?m.split("/"):m}return f}function l(u){let d="",f=!1;for(const g of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of g)if(m.type===0)d+=m.value;else if(m.type===1){const{value:R,repeatable:P,optional:C}=m,V=R in u?u[R]:"";if(hn(V)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const M=hn(V)?V.join("/"):V;if(!M)if(C)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function gw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function b_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wf(r))return 1;if(Wf(s))return-1}return s.length-r.length}function Wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mw={type:0,value:""},_w=/[a-zA-Z0-9_]/;function yw(t){if(!t)return[[]];if(t==="/")return[[mw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:_w.test(l)?g():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function vw(t,e,n){const r=pw(yw(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tw(t,e){const n=[],r=new Map;e=Yf({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,g,m){const R=!m,P=Qf(f);P.aliasOf=m&&m.record;const C=Yf(e,f),V=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const ne of L)V.push(Qf(ke({},P,{components:m?m.record.components:P.components,path:ne,aliasOf:m?m.record:P})))}let M,O;for(const L of V){const{path:ne}=L;if(g&&ne[0]!=="/"){const J=g.record.path,b=J[J.length-1]==="/"?"":"/";L.path=g.record.path+(ne&&b+ne)}if(M=vw(L,g,C),m?m.alias.push(M):(O=O||M,O!==M&&O.alias.push(M),R&&f.name&&!Xf(M)&&o(f.name)),R_(M)&&l(M),P.children){const J=P.children;for(let b=0;b<J.length;b++)i(J[b],M,m&&m.children[b])}m=m||M}return O?()=>{o(O)}:Di}function o(f){if(I_(f)){const g=r.get(f);g&&(r.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function l(f){const g=Iw(f,n);n.splice(g,0,f),f.record.name&&!Xf(f)&&r.set(f.record.name,f)}function u(f,g){let m,R={},P,C;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Ls(1,{location:f});C=m.record.name,R=ke(Kf(g.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Kf(f.params,m.keys.map(O=>O.name))),P=m.stringify(R)}else if(f.path!=null)P=f.path,m=n.find(O=>O.re.test(P)),m&&(R=m.parse(P),C=m.record.name);else{if(m=g.name?r.get(g.name):n.find(O=>O.re.test(g.path)),!m)throw Ls(1,{location:f,currentLocation:g});C=m.record.name,R=ke({},g.params,f.params),P=m.stringify(R)}const V=[];let M=m;for(;M;)V.unshift(M.record),M=M.parent;return{name:C,path:P,params:R,matched:V,meta:ww(V)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Kf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ew(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ew(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ww(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Iw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;b_(t,e[i])<0?r=i:n=i+1}const s=Aw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Aw(t){let e=t;for(;e=e.parent;)if(R_(e)&&b_(t,e)===0)return e}function R_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(__," "),o=i.indexOf("="),c=Gi(o<0?i:i.slice(0,o)),l=o<0?null:Gi(i.slice(o+1));if(c in e){let u=e[c];hn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Jf(t){let e="";for(let n in t){const r=t[n];if(n=zE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&Kl(i)):[r&&Kl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Sw=Symbol(""),Zf=Symbol(""),dc=Symbol(""),Ju=Symbol(""),Xl=Symbol("");function gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ls(4,{from:n,to:e})):g instanceof Error?l(g):hw(g)?l(Ls(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(g=>l(g))})}function ml(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(g_(l)){const d=(l.__vccOpts||l)[e];d&&i.push(cr(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const f=OE(d)?d.default:d;o.mods[c]=d,o.components[c]=f;const m=(f.__vccOpts||f)[e];return m&&cr(m,n,r,o,c,s)()}))}}return i}function ep(t){const e=an(dc),n=an(Ju),r=Qe(()=>{const l=ce(t.to);return e.resolve(l)}),s=Qe(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const g=f.findIndex(Ms.bind(null,d));if(g>-1)return g;const m=tp(l[u-2]);return u>1&&tp(d)===m&&f[f.length-1].path!==m?f.findIndex(Ms.bind(null,l[u-2])):g}),i=Qe(()=>s.value>-1&&Nw(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&E_(n.params,r.value.params));function c(l={}){if(Dw(l)){const u=e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Cw(t){return t.length===1?t[0]:t}const Pw=fn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ep,setup(t,{slots:e}){const n=zs(ep(t)),{options:r}=an(dc),s=Qe(()=>({[np(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[np(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Cw(e.default(n));return t.custom?i:c_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kw=Pw;function Dw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const np=(t,e,n)=>t??e??n,xw=fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Xl),s=Qe(()=>t.route||r.value),i=an(Zf,0),o=Qe(()=>{let u=ce(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),c=Qe(()=>s.value.matched[o.value]);oa(Zf,Qe(()=>o.value+1)),oa(Sw,c),oa(Xl,s);const l=at();return Pi(()=>[l.value,c.value,t.name],([u,d,f],[g,m,R])=>{d&&(d.instances[f]=u,m&&m!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Ms(d,m)||!g)&&(d.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=c.value,g=f&&f.components[d];if(!g)return rp(n.default,{Component:g,route:u});const m=f.props[d],R=m?m===!0?u.params:typeof m=="function"?m(u):m:null,C=c_(g,ke({},R,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return rp(n.default,{Component:C,route:u})||C}}});function rp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ow=xw;function Vw(t){const e=Tw(t.routes,t),n=t.parseQuery||bw,r=t.stringifyQuery||Jf,s=t.history,i=gi(),o=gi(),c=gi(),l=V1(rr);let u=rr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=pl.bind(null,U=>""+U),f=pl.bind(null,WE),g=pl.bind(null,Gi);function m(U,Z){let Y,re;return I_(U)?(Y=e.getRecordMatcher(U),re=Z):re=U,e.addRoute(re,Y)}function R(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function P(){return e.getRoutes().map(U=>U.record)}function C(U){return!!e.getRecordMatcher(U)}function V(U,Z){if(Z=ke({},Z||l.value),typeof U=="string"){const k=gl(n,U,Z.path),F=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return ke(k,F,{params:g(F.params),hash:Gi(k.hash),redirectedFrom:void 0,href:j})}let Y;if(U.path!=null)Y=ke({},U,{path:gl(n,U.path,Z.path).path});else{const k=ke({},U.params);for(const F in k)k[F]==null&&delete k[F];Y=ke({},U,{params:f(k)}),Z.params=f(Z.params)}const re=e.resolve(Y,Z),Se=U.hash||"";re.params=d(g(re.params));const E=XE(r,ke({},U,{hash:HE(Se),path:re.path})),w=s.createHref(E);return ke({fullPath:E,hash:Se,query:r===Jf?Rw(U.query):U.query||{}},re,{redirectedFrom:void 0,href:w})}function M(U){return typeof U=="string"?gl(n,U,l.value.path):ke({},U)}function O(U,Z){if(u!==U)return Ls(8,{from:Z,to:U})}function L(U){return b(U)}function ne(U){return L(ke(M(U),{replace:!0}))}function J(U){const Z=U.matched[U.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let re=typeof Y=="function"?Y(U):Y;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),ke({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function b(U,Z){const Y=u=V(U),re=l.value,Se=U.state,E=U.force,w=U.replace===!0,k=J(Y);if(k)return b(ke(M(k),{state:typeof k=="object"?ke({},Se,k.state):Se,force:E,replace:w}),Z||Y);const F=Y;F.redirectedFrom=Z;let j;return!E&&YE(r,re,Y)&&(j=Ls(16,{to:F,from:re}),Qt(re,re,!0,!1)),(j?Promise.resolve(j):I(F,re)).catch(B=>Nn(B)?Nn(B,2)?B:nn(B):Te(B,F,re)).then(B=>{if(B){if(Nn(B,2))return b(ke({replace:w},M(B.to),{state:typeof B.to=="object"?ke({},Se,B.to.state):Se,force:E}),Z||F)}else B=A(F,re,!0,w,Se);return S(F,re,B),B})}function v(U,Z){const Y=O(U,Z);return Y?Promise.reject(Y):Promise.resolve()}function y(U){const Z=Yn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function I(U,Z){let Y;const[re,Se,E]=Mw(U,Z);Y=ml(re.reverse(),"beforeRouteLeave",U,Z);for(const k of re)k.leaveGuards.forEach(F=>{Y.push(cr(F,U,Z))});const w=v.bind(null,U,Z);return Y.push(w),Ot(Y).then(()=>{Y=[];for(const k of i.list())Y.push(cr(k,U,Z));return Y.push(w),Ot(Y)}).then(()=>{Y=ml(Se,"beforeRouteUpdate",U,Z);for(const k of Se)k.updateGuards.forEach(F=>{Y.push(cr(F,U,Z))});return Y.push(w),Ot(Y)}).then(()=>{Y=[];for(const k of E)if(k.beforeEnter)if(hn(k.beforeEnter))for(const F of k.beforeEnter)Y.push(cr(F,U,Z));else Y.push(cr(k.beforeEnter,U,Z));return Y.push(w),Ot(Y)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),Y=ml(E,"beforeRouteEnter",U,Z,y),Y.push(w),Ot(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(cr(k,U,Z));return Y.push(w),Ot(Y)}).catch(k=>Nn(k,8)?k:Promise.reject(k))}function S(U,Z,Y){c.list().forEach(re=>y(()=>re(U,Z,Y)))}function A(U,Z,Y,re,Se){const E=O(U,Z);if(E)return E;const w=Z===rr,k=ms?history.state:{};Y&&(re||w?s.replace(U.fullPath,ke({scroll:w&&k&&k.scroll},Se)):s.push(U.fullPath,Se)),l.value=U,Qt(U,Z,Y,w),nn()}let T;function Ne(){T||(T=s.listen((U,Z,Y)=>{if(!pn.listening)return;const re=V(U),Se=J(re);if(Se){b(ke(Se,{replace:!0,force:!0}),re).catch(Di);return}u=re;const E=l.value;ms&&iw(qf(E.fullPath,Y.delta),hc()),I(re,E).catch(w=>Nn(w,12)?w:Nn(w,2)?(b(ke(M(w.to),{force:!0}),re).then(k=>{Nn(k,20)&&!Y.delta&&Y.type===Wi.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Te(w,re,E))).then(w=>{w=w||A(re,E,!1),w&&(Y.delta&&!Nn(w,8)?s.go(-Y.delta,!1):Y.type===Wi.pop&&Nn(w,20)&&s.go(-1,!1)),S(re,E,w)}).catch(Di)}))}let Ze=gi(),je=gi(),Ie;function Te(U,Z,Y){nn(U);const re=je.list();return re.length?re.forEach(Se=>Se(U,Z,Y)):console.error(U),Promise.reject(U)}function jt(){return Ie&&l.value!==rr?Promise.resolve():new Promise((U,Z)=>{Ze.add([U,Z])})}function nn(U){return Ie||(Ie=!U,Ne(),Ze.list().forEach(([Z,Y])=>U?Y(U):Z()),Ze.reset()),U}function Qt(U,Z,Y,re){const{scrollBehavior:Se}=t;if(!ms||!Se)return Promise.resolve();const E=!Y&&ow(qf(U.fullPath,0))||(re||!Y)&&history.state&&history.state.scroll||null;return Im().then(()=>Se(U,Z,E)).then(w=>w&&sw(w)).catch(w=>Te(w,U,Z))}const qe=U=>s.go(U);let He;const Yn=new Set,pn={currentRoute:l,listening:!0,addRoute:m,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:P,resolve:V,options:t,push:L,replace:ne,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:jt,install(U){const Z=this;U.component("RouterLink",kw),U.component("RouterView",Ow),U.config.globalProperties.$router=Z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(l)}),ms&&!He&&l.value===rr&&(He=!0,L(s.location).catch(Se=>{}));const Y={};for(const Se in rr)Object.defineProperty(Y,Se,{get:()=>l.value[Se],enumerable:!0});U.provide(dc,Z),U.provide(Ju,ym(Y)),U.provide(Xl,l);const re=U.unmount;Yn.add(U),U.unmount=function(){Yn.delete(U),Yn.size<1&&(u=rr,T&&T(),T=null,l.value=rr,He=!1,Ie=!1),re()}}};function Ot(U){return U.reduce((Z,Y)=>Z.then(()=>y(Y)),Promise.resolve())}return pn}function Mw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ms(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ms(u,l))||s.push(l))}return[n,r,s]}function Lw(){return an(dc)}function Uw(t){return an(Ju)}const Fw=()=>{};var sp={};/**
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
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[d],n[f],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||f==null)throw new $w;const g=i<<2|c>>4;if(r.push(g),u!==64){const m=c<<4&240|u>>2;if(r.push(m),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jw=function(t){const e=S_(t);return Zu.encodeByteArray(e,!0)},Na=function(t){return jw(t).replace(/\./g,"")},C_=function(t){try{return Zu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qw=()=>P_().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof sp>"u")return;const t=sp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&C_(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return Fw()||qw()||Hw()||zw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k_=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},D_=t=>{const e=k_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N_=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},x_=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ts(t){return t.endsWith(".cloudworkstations.dev")}async function eh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function O_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Na(JSON.stringify(n)),Na(JSON.stringify(o)),""].join(".")}const xi={};function Gw(){const t={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?t.emulator.push(e):t.prod.push(e);return t}function Ww(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ip=!1;function th(t,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||xi[t]===e||xi[t]||ip)return;xi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Gw().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ip=!0,o()},g}function d(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=Ww(r),m=n("text"),R=document.getElementById(m)||document.createElement("span"),P=n("learnmore"),C=document.getElementById(P)||document.createElement("a"),V=n("preprendIcon"),M=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const O=g.element;c(O),d(C,P);const L=u();l(M,V),O.append(M,R,C,L),document.body.appendChild(O)}i?(R.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function Qw(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zw(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eI(){return!Qw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nh(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const nI="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nI,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Cn(s,c,r)}}function rI(t,e){return t.replace(sI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sI=/\{\$([^}]+)}/g;function iI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(op(i)&&op(o)){if(!Kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function op(t){return t!==null&&typeof t=="object"}/**
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
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oI(t,e){const n=new aI(t,e);return n.subscribe.bind(n)}class aI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_l),s.error===void 0&&(s.error=_l),s.complete===void 0&&(s.complete=_l);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _l(){}/**
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
 */const lI=1e3,uI=2,hI=4*60*60*1e3,dI=.5;function fI(t,e=lI,n=uI){const r=e*Math.pow(n,t),s=Math.round(dI*r*(Math.random()-.5)*2);return Math.min(hI,r+s)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class pI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ki;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mI(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gI(t){return t===$r?void 0:t}function mI(t){return t.instantiationMode==="EAGER"}/**
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
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const yI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},vI=Ee.INFO,TI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},EI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=TI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=vI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const wI=(t,e)=>e.some(n=>t instanceof n);let ap,cp;function II(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return cp||(cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,Yl=new WeakMap,M_=new WeakMap,yl=new WeakMap,rh=new WeakMap;function bI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),rh.set(e,t),e}function RI(t){if(Yl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yl.set(t,e)}let Jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SI(t){Jl=t(Jl)}function CI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vl(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),_r(r)}:AI().includes(t)?function(...e){return t.apply(vl(this),e),_r(V_.get(this))}:function(...e){return _r(t.apply(vl(this),e))}}function PI(t){return typeof t=="function"?CI(t):(t instanceof IDBTransaction&&RI(t),wI(t,II())?new Proxy(t,Jl):t)}function _r(t){if(t instanceof IDBRequest)return bI(t);if(yl.has(t))return yl.get(t);const e=PI(t);return e!==t&&(yl.set(t,e),rh.set(e,t)),e}const vl=t=>rh.get(t);function kI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const DI=["get","getKey","getAll","getAllKeys","count"],NI=["put","add","delete","clear"],Tl=new Map;function lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tl.get(e))return Tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=NI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Tl.set(e,i),i}SI(t=>({...t,get:(e,n,r)=>lp(e,n)||t.get(e,n,r),has:(e,n)=>!!lp(e,n)||t.has(e,n)}));/**
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
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zl="@firebase/app",up="0.13.0";/**
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
 */const qn=new pc("@firebase/app"),VI="@firebase/app-compat",MI="@firebase/analytics-compat",LI="@firebase/analytics",UI="@firebase/app-check-compat",FI="@firebase/app-check",BI="@firebase/auth",$I="@firebase/auth-compat",jI="@firebase/database",qI="@firebase/data-connect",HI="@firebase/database-compat",zI="@firebase/functions",GI="@firebase/functions-compat",WI="@firebase/installations",KI="@firebase/installations-compat",QI="@firebase/messaging",XI="@firebase/messaging-compat",YI="@firebase/performance",JI="@firebase/performance-compat",ZI="@firebase/remote-config",eA="@firebase/remote-config-compat",tA="@firebase/storage",nA="@firebase/storage-compat",rA="@firebase/firestore",sA="@firebase/ai",iA="@firebase/firestore-compat",oA="firebase",aA="11.8.0";/**
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
 */const eu="[DEFAULT]",cA={[Zl]:"fire-core",[VI]:"fire-core-compat",[LI]:"fire-analytics",[MI]:"fire-analytics-compat",[FI]:"fire-app-check",[UI]:"fire-app-check-compat",[BI]:"fire-auth",[$I]:"fire-auth-compat",[jI]:"fire-rtdb",[qI]:"fire-data-connect",[HI]:"fire-rtdb-compat",[zI]:"fire-fn",[GI]:"fire-fn-compat",[WI]:"fire-iid",[KI]:"fire-iid-compat",[QI]:"fire-fcm",[XI]:"fire-fcm-compat",[YI]:"fire-perf",[JI]:"fire-perf-compat",[ZI]:"fire-rc",[eA]:"fire-rc-compat",[tA]:"fire-gcs",[nA]:"fire-gcs-compat",[rA]:"fire-fst",[iA]:"fire-fst-compat",[sA]:"fire-vertex","fire-js":"fire-js",[oA]:"fire-js-all"};/**
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
 */const xa=new Map,lA=new Map,tu=new Map;function hp(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(tu.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,t);for(const n of xa.values())hp(n,t);for(const n of lA.values())hp(n,t);return!0}function Ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Gs("app","Firebase",uA);/**
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
 */class hA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=aA;function L_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=N_()),!n)throw yr.create("no-options");const i=xa.get(s);if(i){if(Kr(n,i.options)&&Kr(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new _I(s);for(const l of tu.values())o.addComponent(l);const c=new hA(n,r,o);return xa.set(s,c),c}function gc(t=eu){const e=xa.get(t);if(!e&&t===eu&&N_())return L_();if(!e)throw yr.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=cA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(c.join(" "));return}Hn(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dA="firebase-heartbeat-database",fA=1,Qi="firebase-heartbeat-store";let El=null;function U_(){return El||(El=kI(dA,fA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),El}async function pA(t){try{const n=(await U_()).transaction(Qi),r=await n.objectStore(Qi).get(F_(t));return await n.done,r}catch(e){if(e instanceof Cn)qn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function dp(t,e){try{const r=(await U_()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,F_(t)),await r.done}catch(n){if(n instanceof Cn)qn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function F_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gA=1024,mA=30;class _A{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mA){const o=TA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fp(),{heartbeatsToSend:r,unsentEntries:s}=yA(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function fp(){return new Date().toISOString().substring(0,10)}function yA(t,e=gA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nh()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pp(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}function TA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EA(t){Hn(new Rn("platform-logger",e=>new xI(e),"PRIVATE")),Hn(new Rn("heartbeat",e=>new _A(e),"PRIVATE")),ln(Zl,up,t),ln(Zl,up,"esm2017"),ln("fire-js","")}EA("");var wA="firebase",IA="11.8.1";/**
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
 */ln(wA,IA,"app");function sh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AA=B_,$_=new Gs("auth","Firebase",B_());/**
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
 */const Oa=new pc("@firebase/auth");function bA(t,...e){Oa.logLevel<=Ee.WARN&&Oa.warn(`Auth (${ns}): ${t}`,...e)}function ua(t,...e){Oa.logLevel<=Ee.ERROR&&Oa.error(`Auth (${ns}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw ih(t,...e)}function In(t,...e){return ih(t,...e)}function j_(t,e,n){const r=Object.assign(Object.assign({},AA()),{[e]:n});return new Gs("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return j_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $_.create(t,...e)}function pe(t,e,...n){if(!t)throw ih(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function Gn(t,e){t||Mn(e)}/**
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
 */function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RA(){return gp()==="http:"||gp()==="https:"}function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RA()||Yw()||"connection"in navigator)?navigator.onLine:!0}function CA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kw()||Jw()}get(){return SA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oh(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DA=new go(3e4,6e4);function mc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ks(t,e,n,r,s={}){return H_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=po(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Xw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ts(t.emulatorConfig.host)&&(u.credentials="include"),q_.fetch()(await G_(t,t.config.apiHost,n,c),u)})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PA),e);try{const s=new NA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ko(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw j_(t,d,u);zn(t,d)}}catch(s){if(s instanceof Cn)throw s;zn(t,"network-request-failed",{message:String(s)})}}async function z_(t,e,n,r,s={}){const i=await Ks(t,e,n,r,s);return"mfaPendingCredential"in i&&zn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function G_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?oh(t.config,s):`${t.config.apiScheme}://${s}`;return kA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class NA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),DA.get())})}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function xA(t,e){return Ks(t,"POST","/v1/accounts:delete",e)}async function Va(t,e){return Ks(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OA(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=ah(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oi(wl(s.auth_time)),issuedAtTime:Oi(wl(s.iat)),expirationTime:Oi(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=C_(n);return s?JSON.parse(s):(ua("Failed to decode base64 JWT payload"),null)}catch(s){return ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mp(t){const e=ah(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&VA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xi(t,Va(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?W_(i.providerUserInfo):[],c=UA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function LA(t){const e=$e(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function W_(t){return t.map(e=>{var{providerId:n}=e,r=sh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FA(t,e){const n=await H_(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await G_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BA(t,e){return Ks(t,"POST","/v2/accounts:revokeToken",mc(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=mp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ks;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OA(this,e)}reload(){return LA(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Xi(this,xA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:L,isAnonymous:ne,providerData:J,stsTokenManager:b}=n;pe(O&&b,e,"internal-error");const v=ks.fromJSON(this.name,b);pe(typeof O=="string",e,"internal-error"),sr(f,e.name),sr(g,e.name),pe(typeof L=="boolean",e,"internal-error"),pe(typeof ne=="boolean",e,"internal-error"),sr(m,e.name),sr(R,e.name),sr(P,e.name),sr(C,e.name),sr(V,e.name),sr(M,e.name);const y=new sn({uid:O,auth:e,email:g,emailVerified:L,displayName:f,isAnonymous:ne,photoURL:R,phoneNumber:m,tenantId:P,stsTokenManager:v,createdAt:V,lastLoginAt:M});return J&&Array.isArray(J)&&(y.providerData=J.map(I=>Object.assign({},I))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ks;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?W_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ks;c.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ru(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const _p=new Map;function Ln(t){Gn(t instanceof Function,"Expected a class definition");let e=_p.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_p.set(t,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K_.type="NONE";const yp=K_;/**
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
 */function ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ha(this.userKey,s.apiKey,i),this.fullPersistenceKey=ha("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Va(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Ln(yp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(yp);const o=ha(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const g=await Va(e,{idToken:d}).catch(()=>{});if(!g)break;f=await sn._fromGetAccountInfoResponse(e,g,d)}else f=sn._fromJSON(e,d);u!==i&&(c=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ds(i,e,r))}}/**
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
 */function vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ey(e))return"Blackberry";if(ty(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(Z_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q_(t=Rt()){return/firefox\//i.test(t)}function X_(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=Rt()){return/crios\//i.test(t)}function J_(t=Rt()){return/iemobile/i.test(t)}function Z_(t=Rt()){return/android/i.test(t)}function ey(t=Rt()){return/blackberry/i.test(t)}function ty(t=Rt()){return/webos/i.test(t)}function ch(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $A(t=Rt()){var e;return ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jA(){return Zw()&&document.documentMode===10}function ny(t=Rt()){return ch(t)||Z_(t)||ty(t)||ey(t)||/windows phone/i.test(t)||J_(t)}/**
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
 */function ry(t,e=[]){let n;switch(t){case"Browser":n=vp(Rt());break;case"Worker":n=`${vp(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
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
 */class qA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HA(t,e={}){return Ks(t,"GET","/v2/passwordPolicy",mc(t,e))}/**
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
 */const zA=6;class GA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class WA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tp(this),this.idTokenSubscription=new Tp(this),this.beforeStateQueue=new qA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Va(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(vr(this));const n=e?$e(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HA(this),n=new GA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _c(t){return $e(t)}class Tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KA(t){lh=t}function QA(t){return lh.loadJS(t)}function XA(){return lh.gapiScript}function YA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function JA(t,e){const n=Ws(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Kr(i,e??{}))return s;zn(s,"already-initialized")}return n.initialize({options:e})}function ZA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eb(t,e,n){const r=_c(t);pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sy(e),{host:o,port:c}=tb(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pe(Kr(u,r.config.emulator)&&Kr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ts(o)?(eh(`${i}//${o}${l}`),th("Auth",!0)):nb()}function sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tb(t){const e=sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ep(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ep(o)}}}function Ep(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function Ns(t,e){return z_(t,"POST","/v1/accounts:signInWithIdp",mc(t,e))}/**
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
 */const rb="http://localhost";class Qr extends iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=sh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
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
 */class oy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends mo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class hr extends mo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends mo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function sb(t,e){return z_(t,"POST","/v1/accounts:signUp",mc(t,e))}/**
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
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=wp(r);return new Ir({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wp(r);return new Ir({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function ay(t){var e;if(Zt(t.app))return Promise.reject(vr(t));const n=_c(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ir({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await sb(n,{returnSecureToken:!0}),s=await Ir._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class La extends Cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function ib(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
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
 */async function ob(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await Xi(t,cy(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=ah(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),Ir._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),i}}/**
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
 */async function ab(t,e,n=!1){if(Zt(t.app))return Promise.reject(vr(t));const r="signIn",s=await cy(t,r,e),i=await Ir._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function cb(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function lb(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function ub(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function hb(t){return $e(t).signOut()}const Ua="__sak";/**
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
 */class ly{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const db=1e3,fb=10;class uy extends ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ny(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uy.type="LOCAL";const pb=uy;/**
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
 */class hy extends ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hy.type="SESSION";const dy=hy;/**
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
 */function gb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await gb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=uh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function An(){return window}function _b(t){An().location.href=t}/**
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
 */function fy(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function yb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return fy()?self:null}/**
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
 */const py="firebaseLocalStorageDb",Eb=1,Fa="firebaseLocalStorage",gy="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function wb(){const t=indexedDB.deleteDatabase(py);return new _o(t).toPromise()}function su(){const t=indexedDB.open(py,Eb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:gy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await wb(),e(await su()))})})}async function Ip(t,e,n){const r=vc(t,!0).put({[gy]:e,value:n});return new _o(r).toPromise()}async function Ib(t,e){const n=vc(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Ap(t,e){const n=vc(t,!0).delete(e);return new _o(n).toPromise()}const Ab=800,bb=3;class my{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await Ip(e,Ua,"1"),await Ap(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ib(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vc(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}my.type="LOCAL";const Rb=my;new go(3e4,6e4);/**
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
 */function Sb(t,e){return e?Ln(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hh extends iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cb(t){return ab(t.auth,new hh(t),t.bypassAuthState)}function Pb(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),ob(n,new hh(t),t.bypassAuthState)}async function kb(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),ib(n,new hh(t),t.bypassAuthState)}/**
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
 */class _y{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return kb;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:zn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Db=new go(2e3,1e4);class ws extends _y{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}ws.currentPopupAction=null;/**
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
 */const Nb="pendingRedirect",da=new Map;class xb extends _y{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(t,e){const n=Lb(e),r=Mb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vb(t,e){da.set(t._key(),e)}function Mb(t){return Ln(t._redirectPersistence)}function Lb(t){return ha(Nb,t.config.apiKey,t.name)}async function Ub(t,e,n=!1){if(Zt(t.app))return Promise.reject(vr(t));const r=_c(t),s=Sb(r,e),o=await new xb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Fb=10*60*1e3;class Bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(bp(e))}saveEventToCache(e){this.cachedEventUids.add(bp(e)),this.lastProcessedEventTime=Date.now()}}function bp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yy(t);default:return!1}}/**
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
 */async function jb(t,e={}){return Ks(t,"GET","/v1/projects",e)}/**
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
 */const qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function zb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jb(t);for(const n of e)try{if(Gb(n))return}catch{}zn(t,"unauthorized-domain")}function Gb(t){const e=nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hb.test(n))return!1;if(qb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Wb=new go(3e4,6e4);function Rp(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kb(t){return new Promise((e,n)=>{var r,s,i;function o(){Rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rp(),n(In(t,"network-request-failed"))},timeout:Wb.get()})}if(!((s=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=An().gapi)===null||i===void 0)&&i.load)o();else{const c=YA("iframefcb");return An()[c]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},QA(`${XA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw fa=null,e})}let fa=null;function Qb(t){return fa=fa||Kb(t),fa}/**
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
 */const Xb=new go(5e3,15e3),Yb="__/auth/iframe",Jb="emulator/auth/iframe",Zb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tR(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oh(e,Jb):`https://${t.config.authDomain}/${Yb}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=eR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${po(r).slice(1)}`}async function nR(t){const e=await Qb(t),n=An().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:tR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),c=An().setTimeout(()=>{i(o)},Xb.get());function l(){An().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const rR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,oR="_blank",aR="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(t,e,n,r=sR,s=iR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},rR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Rt().toLowerCase();n&&(c=Y_(u)?oR:n),Q_(u)&&(e=e||aR,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[m,R])=>`${g}${m}=${R},`,"");if($A(u)&&c!=="_self")return lR(e||"",c),new Sp(null);const f=window.open(e||"",c,d);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new Sp(f)}function lR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uR="__/auth/handler",hR="emulator/auth/handler",dR=encodeURIComponent("fac");async function Cp(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof oy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof mo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${dR}=${encodeURIComponent(l)}`:"";return`${fR(t)}?${po(c).slice(1)}${u}`}function fR({config:t}){return t.emulator?oh(t,hR):`https://${t.authDomain}/${uR}`}/**
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
 */const Il="webStorageSupport";class pR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dy,this._completeRedirectFn=Ub,this._overrideRedirectResult=Vb}async _openPopup(e,n,r,s){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cp(e,n,r,nu(),s);return cR(e,o,uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cp(e,n,r,nu(),s);return _b(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nR(e),r=new Bb(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Il];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ny()||X_()||ch()}}const gR=pR;var Pp="@firebase/auth",kp="1.10.6";/**
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
 */class mR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _R(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yR(t){Hn(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(t)},u=new WA(r,s,i,l);return ZA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new Rn("auth-internal",e=>{const n=_c(e.getProvider("auth").getImmediate());return(r=>new mR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Pp,kp,_R(t)),ln(Pp,kp,"esm2017")}/**
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
 */const vR=5*60,TR=x_("authIdTokenMaxAge")||vR;let Dp=null;const ER=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TR)return;const s=n==null?void 0:n.token;Dp!==s&&(Dp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wR(t=gc()){const e=Ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JA(t,{popupRedirectResolver:gR,persistence:[Rb,pb,dy]}),r=x_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ER(i.toString());lb(n,o,()=>o(n.currentUser)),cb(n,c=>o(c))}}const s=k_("auth");return s&&eb(n,`http://${s}`),n}function IR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",IR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yR("Browser");var Np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,vy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,S,A){for(var T=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)T[Ne-2]=arguments[Ne];return v.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)I[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],S=b.g[2];var A=b.g[3],T=v+(A^y&(S^A))+I[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[3]+3250441966&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[7]+4249261313&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[11]+2304563134&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[15]+1236535329&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(S^A&(y^S))+I[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[0]+3921069994&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[4]+3889429448&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[8]+1163531501&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[12]+2368359562&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(y^S^A)+I[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[14]+4259657740&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[10]+3200236656&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[6]+76029189&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[2]+3299628645&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(S^(y|~A))+I[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[5]+4237533241&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[1]+2240044497&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[13]+1309151649&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,I=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(I[S++]=b.charCodeAt(A++),S==this.blockSize){s(this,I),S=0;break}}else for(;A<v;)if(I[S++]=b[A++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)b[y++]=this.g[v]>>>I&255;return b};function i(b,v){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],I=!0,S=b.length-1;0<=S;S--){var A=b[S]|0;I&&A==v||(y[S]=A,I=!1)}this.g=y}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return C(u(-b));for(var v=[],y=1,I=0;b>=y;I++)v[I]=b/y|0,y*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return C(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=f,S=0;S<b.length;S+=8){var A=Math.min(8,b.length-S),T=parseInt(b.substring(S,S+A),v);8>A?(A=u(Math.pow(v,A)),I=I.j(A).add(u(T))):(I=I.j(y),I=I.add(u(T)))}return I}var f=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(P(this))return"-"+C(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,I="";;){var S=L(y,v).g;y=V(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=S,R(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=V(this,b),P(b)?-1:R(b)?0:1};function C(b){for(var v=b.g.length,y=[],I=0;I<v;I++)y[I]=~b.g[I];return new o(y,~b.h).add(g)}t.abs=function(){return P(this)?C(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0,S=0;S<=v;S++){var A=I+(this.i(S)&65535)+(b.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);I=T>>>16,A&=65535,T&=65535,y[S]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function V(b,v){return b.add(C(v))}t.j=function(b){if(R(this)||R(b))return f;if(P(this))return P(b)?C(this).j(C(b)):C(C(this).j(b));if(P(b))return C(this.j(C(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<b.g.length;S++){var A=this.i(I)>>>16,T=this.i(I)&65535,Ne=b.i(S)>>>16,Ze=b.i(S)&65535;y[2*I+2*S]+=T*Ze,M(y,2*I+2*S),y[2*I+2*S+1]+=A*Ze,M(y,2*I+2*S+1),y[2*I+2*S+1]+=T*Ne,M(y,2*I+2*S+1),y[2*I+2*S+2]+=A*Ne,M(y,2*I+2*S+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function M(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function O(b,v){this.g=b,this.h=v}function L(b,v){if(R(v))throw Error("division by zero");if(R(b))return new O(f,f);if(P(b))return v=L(C(b),v),new O(C(v.g),C(v.h));if(P(v))return v=L(b,C(v)),new O(C(v.g),v.h);if(30<b.g.length){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(b);)y=ne(y),I=ne(I);var S=J(y,1),A=J(I,1);for(I=J(I,2),y=J(y,2);!R(I);){var T=A.add(I);0>=T.l(b)&&(S=S.add(y),A=T),I=J(I,1),y=J(y,1)}return v=V(b,S.j(v)),new O(S,v)}for(S=f;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),T=A.j(v);P(T)||0<T.l(b);)y-=I,A=u(y),T=A.j(v);R(A)&&(A=g),S=S.add(A),b=V(b,T)}return new O(S,b)}t.A=function(b){return L(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function ne(b){for(var v=b.g.length+1,y=[],I=0;I<v;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function J(b,v){var y=v>>5;v%=32;for(var I=b.g.length-y,S=[],A=0;A<I;A++)S[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Tr=o}).apply(typeof Np<"u"?Np:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ty,yi,Ey,pa,iu,wy,Iy,Ay;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function m(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,N){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[D].apply(_,W)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function C(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const D=a.length||0,N=_.length||0;a.length=D+N;for(let W=0;W<N;W++)a[D+W]=_[W]}else a.push(_)}}class V{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var ne=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function J(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function b(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let N=0;N<y.length;N++)p=y[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function S(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function A(a){c.setTimeout(()=>{throw a},0)}function T(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ne{constructor(){this.h=this.g=null}add(h,p){const _=Ze.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Ze=new V(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Te=!1,jt=new Ne,nn=()=>{const a=c.Promise.resolve(void 0);Ie=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){A(p)}var h=Ze;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function pn(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ne){e:{try{L(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}R(pn,He);var Ot={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,p,_,D){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=w(a,h,_,D);return-1<W?(h=a[W],p||(h.fa=!1)):(h=new Y(h,this.src,N,!!_,D),h.fa=p,a.push(h)),h};function E(a,h){var p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=D)&&Array.prototype.splice.call(_,D,1),N&&(re(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,h,p,_){for(var D=0;D<a.length;++D){var N=a[D];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==_)return D}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function j(a,h,p,_,D){if(Array.isArray(h)){for(var N=0;N<h.length;N++)j(a,h[N],p,_,D);return null}return p=fe(p),a&&a[U]?a.K(h,p,u(_)?!!_.capture:!1,D):B(a,h,p,!1,_,D)}function B(a,h,p,_,D,N){if(!h)throw Error("Invalid event type");var W=u(D)?!!D.capture:!!D,Oe=Q(a);if(Oe||(a[k]=Oe=new Se(a)),p=Oe.add(h,p,_,W,N),p.proxy)return p;if(_=X(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Yn||(D=W),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(q(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function X(){function a(p){return h.call(a.src,a.listener,p)}const h=oe;return a}function G(a,h,p,_,D){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],p,_,D);else _=u(_)?!!_.capture:!!_,p=fe(p),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=w(N,p,_,D),-1<p&&(re(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,p,_,D)),(p=-1<a?h[a]:null)&&H(p))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])E(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(q(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Q(h))?(E(p,a),p.h==0&&(p.src=null,h[k]=null)):re(a)}}}function q(a){return a in F?F[a]:F[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new pn(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&H(a),a=p.call(_,h)}return a}function Q(a){return a=a[k],a instanceof Se?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function le(){qe.call(this),this.i=new Se(this),this.M=this,this.F=null}R(le,qe),le.prototype[U]=!0,le.prototype.removeEventListener=function(a,h,p,_){G(this,a,h,p,_)};function _e(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var D=h;h=new He(_,a),I(h,D)}if(D=!0,p)for(var N=p.length-1;0<=N;N--){var W=h.g=p[N];D=Ae(W,_,!0,h)&&D}if(W=h.g=a,D=Ae(W,_,!0,h)&&D,D=Ae(W,_,!1,h)&&D,p)for(N=0;N<p.length;N++)W=h.g=p[N],D=Ae(W,_,!1,h)&&D}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)re(p[_]);delete a.g[h],a.h--}}this.F=null},le.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},le.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Ae(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==p){var Oe=W.listener,ut=W.ha||W.src;W.fa&&E(a.i,W),D=Oe.call(ut,_)!==!1&&D}}return D&&!_.defaultPrevented}function _t(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ct(a){a.g=_t(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Xt extends qe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(a){qe.call(this),this.h=a,this.g={}}R(yt,qe);var Jn=[];function ei(a){J(a.g,function(h,p){this.g.hasOwnProperty(p)&&H(h)},a),a.g={}}yt.prototype.N=function(){yt.aa.N.call(this),ei(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=c.JSON.stringify,Yt=c.JSON.parse,So=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function jc(){}jc.prototype.h=null;function ud(a){return a.h||(a.h=a.i())}function hd(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qc(){He.call(this,"d")}R(qc,He);function Hc(){He.call(this,"c")}R(Hc,He);var xr={},dd=null;function Co(){return dd=dd||new le}xr.La="serverreachability";function fd(a){He.call(this,xr.La,a)}R(fd,He);function ni(a){const h=Co();_e(h,new fd(h))}xr.STAT_EVENT="statevent";function pd(a,h){He.call(this,xr.STAT_EVENT,a),this.stat=h}R(pd,He);function St(a){const h=Co();_e(h,new pd(h,a))}xr.Ma="timingevent";function gd(a,h){He.call(this,xr.Ma,a),this.size=h}R(gd,He);function ri(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function si(){this.g=!0}si.prototype.xa=function(){this.g=!1};function x0(a,h,p,_,D,N){a.info(function(){if(a.g)if(N)for(var W="",Oe=N.split("&"),ut=0;ut<Oe.length;ut++){var Ce=Oe[ut].split("=");if(1<Ce.length){var vt=Ce[0];Ce=Ce[1];var Tt=vt.split("_");W=2<=Tt.length&&Tt[1]=="type"?W+(vt+"="+Ce+"&"):W+(vt+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+W})}function O0(a,h,p,_,D,N,W){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+N+" "+W})}function os(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+M0(a,p)+(_?" "+_:"")})}function V0(a,h){a.info(function(){return"TIMEOUT: "+h})}si.prototype.info=function(){};function M0(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var N=D[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return lt(p)}catch{return h}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},md={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zc;function ko(){}R(ko,jc),ko.prototype.g=function(){return new XMLHttpRequest},ko.prototype.i=function(){return{}},zc=new ko;function Zn(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _d}function _d(){this.i=null,this.g="",this.h=!1}var yd={},Gc={};function Wc(a,h,p){a.L=1,a.v=Oo(Pn(h)),a.m=p,a.P=!0,vd(a,null)}function vd(a,h){a.F=Date.now(),Do(a),a.A=Pn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),xd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new _d,a.g=Yd(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Xt(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Jn[0]=D.toString()),D=Jn);for(var N=0;N<D.length;N++){var W=j(p,D[N],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ni(),x0(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=kn(this.g);var h=this.g.Ba();const ls=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Bd(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=ls?ni(3):ni(2)),Kc(this);var p=this.g.Z();this.X=p;t:if(Td(this)){var _=Bd(this.g);a="";var D=_.length,N=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),ii(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,O0(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ut=this.g;if((Oe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Oe)){var Ce=Oe;break t}}Ce=null}if(p=Ce)os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qc(this,p);else{this.o=!1,this.s=3,St(12),Or(this),ii(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<W.length;)if(rn=L0(this,W),rn==Gc){Tt==4&&(this.s=4,St(14),p=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==yd){this.s=4,St(15),os(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else os(this.i,this.l,rn,null),Qc(this,rn);if(Td(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||W.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)os(this.i,this.l,W,"[Invalid Chunked Response]"),Or(this),ii(this);else if(0<W.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),tl(vt),vt.M=!0,St(11))}}else os(this.i,this.l,W,null),Qc(this,W);Tt==4&&Or(this),this.o&&!this.J&&(Tt==4?Wd(this.j,this):(this.o=!1,Do(this)))}else e1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Or(this),ii(this)}}}catch{}finally{}};function Td(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function L0(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?Gc:(p=Number(h.substring(p,_)),isNaN(p)?yd:(_+=1,_+p>h.length?Gc:(h=h.slice(_,_+p),a.C=_+p,h)))}Zn.prototype.cancel=function(){this.J=!0,Or(this)};function Do(a){a.S=Date.now()+a.I,Ed(a,a.I)}function Ed(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ri(g(a.ba,a),h)}function Kc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(V0(this.i,this.A),this.L!=2&&(ni(),St(17)),Or(this),this.s=2,ii(this)):Ed(this,this.S-a)};function ii(a){a.j.G==0||a.J||Wd(a.j,a)}function Or(a){Kc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ei(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Qc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Xc(p.h,a))){if(!a.K&&Xc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Bo(p),Uo(p);else break e;el(p),St(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=ri(g(p.Za,p),6e3));if(1>=Ad(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Mr(p,11)}else if((a.K||p.g==a)&&Bo(p),!M(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let Ce=D[h];if(p.T=Ce[0],Ce=Ce[1],p.G==2)if(Ce[0]=="c"){p.K=Ce[1],p.ia=Ce[2];const vt=Ce[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const Tt=Ce[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const ls=Ce[5];ls!=null&&typeof ls=="number"&&0<ls&&(_=1.5*ls,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const rn=a.g;if(rn){const jo=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jo){var N=_.h;N.g||jo.indexOf("spdy")==-1&&jo.indexOf("quic")==-1&&jo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Yc(N,N.h),N.h=null))}if(_.D){const nl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(_.ya=nl,Le(_.I,_.D,nl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=a;if(_.qa=Xd(_,_.J?_.ia:null,_.W),W.K){bd(_.h,W);var Oe=W,ut=_.L;ut&&(Oe.I=ut),Oe.B&&(Kc(Oe),Do(Oe)),_.g=W}else zd(_);0<p.i.length&&Fo(p)}else Ce[0]!="stop"&&Ce[0]!="close"||Mr(p,7);else p.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Mr(p,7):Zc(p):Ce[0]!="noop"&&p.l&&p.l.ta(Ce),p.v=0)}}ni(4)}catch{}}var U0=class{constructor(a,h){this.g=a,this.map=h}};function wd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Id(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ad(a){return a.h?1:a.g?a.g.size:0}function Xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Yc(a,h){a.g?a.g.add(h):a.h=h}function bd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wd.prototype.cancel=function(){if(this.i=Rd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function F0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function B0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Sd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=B0(a),_=F0(a),D=_.length,N=0;N<D;N++)h.call(void 0,_[N],p&&p[N],a)}var Cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $0(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var N=a[p].substring(0,_);D=a[p].substring(_+1)}else N=a[p];h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,No(this,a.j),this.o=a.o,this.g=a.g,xo(this,a.s),this.l=a.l;var h=a.i,p=new ci;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Pd(this,p),this.m=a.m}else a&&(h=String(a).match(Cd))?(this.h=!1,No(this,h[1]||"",!0),this.o=oi(h[2]||""),this.g=oi(h[3]||"",!0),xo(this,h[4]),this.l=oi(h[5]||"",!0),Pd(this,h[6]||"",!0),this.m=oi(h[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ai(h,kd,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ai(h,kd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ai(p,p.charAt(0)=="/"?H0:q0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ai(p,G0)),a.join("")};function Pn(a){return new Vr(a)}function No(a,h,p){a.j=p?oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function xo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Pd(a,h,p){h instanceof ci?(a.i=h,W0(a.i,a.h)):(p||(h=ai(h,z0)),a.i=new ci(h,a.h))}function Le(a,h,p){a.i.set(h,p)}function Oo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,j0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function j0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kd=/[#\/\?@]/g,q0=/[#\?:]/g,H0=/[#\?]/g,z0=/[#\?@]/g,G0=/#/g;function ci(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&$0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ci.prototype,t.add=function(a,h){er(this),this.i=null,a=as(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Dd(a,h){er(a),h=as(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Nd(a,h){return er(a),h=as(a,h),a.g.has(h)}t.forEach=function(a,h){er(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=a[_];for(let N=0;N<D.length;N++)p.push(h[_])}return p},t.V=function(a){er(this);let h=[];if(typeof a=="string")Nd(this,a)&&(h=h.concat(this.g.get(as(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return er(this),this.i=null,a=as(this,a),Nd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function xd(a,h,p){Dd(a,h),0<p.length&&(a.i=null,a.g.set(as(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const N=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var D=N;W[_]!==""&&(D+="="+encodeURIComponent(String(W[_]))),a.push(D)}}return this.i=a.join("&")};function as(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function W0(a,h){h&&!a.j&&(er(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(Dd(this,_),xd(this,D,p))},a)),a.j=h}function K0(a,h){const p=new si;if(c.Image){const _=new Image;_.onload=m(tr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=m(tr,p,"TestLoadImage: error",!1,h,_),_.onabort=m(tr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=m(tr,p,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Q0(a,h){const p=new si,_=new AbortController,D=setTimeout(()=>{_.abort(),tr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(D),N.ok?tr(p,"TestPingServer: ok",!0,h):tr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),tr(p,"TestPingServer: error",!1,h)})}function tr(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function X0(){this.g=new So}function Y0(a,h,p){const _=p||"";try{Sd(a,function(D,N){let W=D;u(D)&&(W=lt(D)),h.push(_+N+"="+encodeURIComponent(W))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function Vo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Vo,jc),Vo.prototype.g=function(){return new Mo(this.l,this.j)},Vo.prototype.i=function(a){return function(){return a}}({});function Mo(a,h){le.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Mo,le),t=Mo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Od(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Od(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?li(this):ui(this),this.readyState==3&&Od(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,li(this))},t.Qa=function(a){this.g&&(this.response=a,li(this))},t.ga=function(){this.g&&li(this)};function li(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ui(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vd(a){let h="";return J(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Jc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Vd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Le(a,h,p))}function Ke(a){le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ke,le);var J0=/^https?$/i,Z0=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zc.g(),this.v=this.o?ud(this.o):ud(zc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Md(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Z0,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of p)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Md(this,N)}};function Md(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ld(a),Lo(a)}function Ld(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ud(this):this.bb())},t.bb=function(){Ud(this)};function Ud(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)_t(a.Ea,0,a);else if(_e(a,"readystatechange"),kn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=W===0){var D=String(a.D).match(Cd)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),_=!J0.test(D?D.toLowerCase():"")}p=_}if(p)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var N=2<kn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Ld(a)}}finally{Lo(a)}}}}function Lo(a,h){if(a.g){Fd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{p.onreadystatechange=_}catch{}}}function Fd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yt(h)}};function Bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function e1(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(M(a[_]))continue;var p=S(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[D]||[];h[D]=N,N.push(p)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function $d(a){this.Aa=0,this.i=[],this.j=new si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,a),this.cb=hi("retryDelaySeedMs",1e4,a),this.Wa=hi("forwardChannelMaxRetries",2,a),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wd(a&&a.concurrentRequestLimit),this.Da=new X0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$d.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){St(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Xd(this,null,this.W),Fo(this)};function Zc(a){if(jd(a),a.G==3){var h=a.U++,p=Pn(a.I);if(Le(p,"SID",a.K),Le(p,"RID",h),Le(p,"TYPE","terminate"),di(a,p),h=new Zn(a,a.j,h),h.L=2,h.v=Oo(Pn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Yd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Do(h)}Qd(a)}function Uo(a){a.g&&(tl(a),a.g.cancel(),a.g=null)}function jd(a){Uo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Id(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||nn(),Te||(Ie(),Te=!0),jt.add(h,a),a.B=0}}function t1(a,h){return Ad(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ri(g(a.Ga,a,h),Kd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Zn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(D.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hd(this,D,h),p=Pn(this.I),Le(p,"RID",a),Le(p,"CVER",22),this.D&&Le(p,"X-HTTP-Session-Id",this.D),di(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Vd(N)))+"&"+h:this.m&&Jc(p,this.m,N)),Yc(this.h,D),this.Ua&&Le(p,"TYPE","init"),this.P?(Le(p,"$req",h),Le(p,"SID","null"),D.T=!0,Wc(D,p,null)):Wc(D,p,h),this.G=2}}else this.G==3&&(a?qd(this,a):this.i.length==0||Id(this.h)||qd(this))};function qd(a,h){var p;h?p=h.l:p=a.U++;const _=Pn(a.I);Le(_,"SID",a.K),Le(_,"RID",p),Le(_,"AID",a.T),di(a,_),a.m&&a.o&&Jc(_,a.m,a.o),p=new Zn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yc(a.h,p),Wc(p,_,h)}function di(a,h){a.H&&J(a.H,function(p,_){Le(h,_,p)}),a.l&&Sd({},function(p,_){Le(h,_,p)})}function Hd(a,h,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let N=-1;for(;;){const W=["count="+p];N==-1?0<p?(N=D[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Oe=!0;for(let ut=0;ut<p;ut++){let Ce=D[ut].g;const vt=D[ut].map;if(Ce-=N,0>Ce)N=Math.max(0,D[ut].g-100),Oe=!1;else try{Y0(vt,W,"req"+Ce+"_")}catch{_&&_(vt)}}if(Oe){_=W.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function zd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||nn(),Te||(Ie(),Te=!0),jt.add(h,a),a.v=0}}function el(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ri(g(a.Fa,a),Kd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ri(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Uo(this),Gd(this))};function tl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Gd(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),di(a,h),a.m&&a.o&&Jc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Oo(Pn(h)),p.m=null,p.P=!0,vd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Uo(this),el(this),St(19))};function Bo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Wd(a,h){var p=null;if(a.g==h){Bo(a),tl(a),a.g=null;var _=2}else if(Xc(a.h,h))p=h.D,bd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=Co(),_e(_,new gd(_,p)),Fo(a)}else zd(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&t1(a,h)||_==2&&el(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Kd(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),_=a.Xa;const D=!_;_=new Vr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||No(_,"https"),Oo(_),D?K0(_.toString(),p):Q0(_.toString(),p)}else St(2);a.G=0,a.l&&a.l.sa(h),Qd(a),jd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Qd(a){if(a.G=0,a.ka=[],a.l){const h=Rd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Xd(a,h,p){var _=p instanceof Vr?Pn(p):new Vr(p);if(_.g!="")h&&(_.g=h+"."+_.g),xo(_,_.s);else{var D=c.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var N=new Vr(null);_&&No(N,_),h&&(N.g=h),D&&xo(N,D),p&&(N.l=p),_=N}return p=a.D,h=a.ya,p&&h&&Le(_,p,h),Le(_,"VER",a.la),di(a,_),_}function Yd(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new Vo({eb:p})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jd(){}t=Jd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){le.call(this),this.g=new $d(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cs(this)}R(qt,le),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Zc(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=lt(a),a=p);h.i.push(new U0(h.Ya++,a)),h.G==3&&Fo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,Zc(this.g),delete this.g,qt.aa.N.call(this)};function Zd(a){qc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Zd,qc);function ef(){Hc.call(this),this.status=1}R(ef,Hc);function cs(a){this.g=a}R(cs,Jd),cs.prototype.ua=function(){_e(this.g,"a")},cs.prototype.ta=function(a){_e(this.g,new Zd(a))},cs.prototype.sa=function(a){_e(this.g,new ef)},cs.prototype.ra=function(){_e(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Ay=function(){return new $o},Iy=function(){return Co()},wy=xr,iu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,pa=Po,md.COMPLETE="complete",Ey=md,hd.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",le.prototype.listen=le.prototype.K,yi=hd,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Ty=Ke}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const xp="@firebase/firestore",Op="4.7.16";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let Qs="11.8.1";/**
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
 */const Xr=new pc("@firebase/firestore");function _s(){return Xr.logLevel}function ee(t,...e){if(Xr.logLevel<=Ee.DEBUG){const n=e.map(dh);Xr.debug(`Firestore (${Qs}): ${t}`,...n)}}function Wn(t,...e){if(Xr.logLevel<=Ee.ERROR){const n=e.map(dh);Xr.error(`Firestore (${Qs}): ${t}`,...n)}}function Us(t,...e){if(Xr.logLevel<=Ee.WARN){const n=e.map(dh);Xr.warn(`Firestore (${Qs}): ${t}`,...n)}}function dh(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,by(t,r,n)}function by(t,e,n){let r=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Wn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||by(e,s,r)}function ge(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ry{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RR{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Ry(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class SR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new SR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Sy(){return new TextEncoder}/**
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
 */class Cy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ou(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=Sy(),o=DR(i.encode(Mp(t,n)),i.encode(Mp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Mp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function DR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Fs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Lp=-62135596800,Up=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Up);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Lp)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Up}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Lp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new tt(0,0))}static max(){return new he(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fp="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):ou(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class xe extends yn{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const NR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends yn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return NR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fp}static keyField(){return new gt([Fp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new K(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(xe.fromString(e))}static fromName(e){return new ie(xe.fromString(e).popFirst(5))}static empty(){return new ie(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new xe(e.slice()))}}/**
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
 */const Yi=-1;function xR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Ar(s,ie.empty(),e)}function OR(t){return new Ar(t.readTime,t.key,Yi)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(he.min(),ie.empty(),Yi)}static max(){return new Ar(he.max(),ie.empty(),Yi)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const MR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xs(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==MR)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function UR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Tc.le=-1;/**
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
 */const fh=-1;function yo(t){return t==null}function Ba(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Py="";function BR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bp(e)),e=$R(t.get(n),e);return Bp(e)}function $R(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Py:n+="";break;default:n+=i}}return n}function Bp(t){return t+Py+""}/**
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
 */function $p(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jp(this.data.getIterator())}getIteratorFrom(e){return new jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class jp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new nt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Dy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dy("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const jR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=jR.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */const Ny="server_timestamp",xy="__type__",Oy="__previous_value__",Vy="__local_write_time__";function Ec(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[xy])===null||n===void 0?void 0:n.stringValue)===Ny}function wc(t){const e=t.mapValue.fields[Oy];return Ec(e)?wc(e):e}function Ji(t){const e=br(t.mapValue.fields[Vy].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class qR{constructor(e,n,r,s,i,o,c,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const au="(default)";class Zi{constructor(e,n){this.projectId=e,this.database=n||au}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database===au}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const My="__type__",HR="__max__",Yo={mapValue:{}},Ly="__vector__",$a="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ec(t)?4:GR(t)?9007199254740991:zR(t)?10:11:ae(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=br(s.timestampValue),c=br(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),c=Xe(i.doubleValue);return o===c?Ba(o)===Ba(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($p(o)!==$p(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Sn(o[l],c[l])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function eo(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Xe(i.integerValue||i.doubleValue),l=Xe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(Ji(t),Ji(e));case 5:return ou(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Rr(i),l=Rr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=ve(c[u],l[u]);if(d!==0)return d}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(Xe(i.latitude),Xe(o.latitude));return c!==0?c:ve(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const f=i.fields||{},g=o.fields||{},m=(c=f[$a])===null||c===void 0?void 0:c.arrayValue,R=(l=g[$a])===null||l===void 0?void 0:l.arrayValue,P=ve(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Hp(m,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yo.mapValue&&o===Yo.mapValue)return 0;if(i===Yo.mapValue)return 1;if(o===Yo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const g=ou(l[f],d[f]);if(g!==0)return g;const m=Bs(c[l[f]],u[d[f]]);if(m!==0)return m}return ve(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{Pe:n})}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=br(t),r=br(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Hp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function $s(t){return cu(t)}function cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=cu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cu(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function ga(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wc(t);return e?16+ga(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ga(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Dr(r.fields,(i,o)=>{s+=i.length+ga(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function ja(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lu(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function zp(t){return!!t&&"nullValue"in t}function Gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ma(t){return!!t&&"mapValue"in t}function zR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[My])===null||n===void 0?void 0:n.stringValue)===Ly}function Vi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HR}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Vi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ma(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Vi(this.value))}}function Uy(t){const e=[];return Dr(t.fields,(n,r)=>{const s=new gt([n]);if(ma(r)){const i=Uy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
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
 */class ot{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ot(e,0,he.min(),he.min(),he.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new ot(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ot(e,2,n,he.min(),he.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,he.min(),he.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class js{constructor(e,n){this.position=e,this.inclusive=n}}function Wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function WR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fy{}class Je extends Fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QR(e,n,r):n==="array-contains"?new JR(e,r):n==="in"?new ZR(e,r):n==="not-in"?new e2(e,r):n==="array-contains-any"?new t2(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XR(e,r):new YR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bs(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Fy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new dn(e,n)}matches(e){return By(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function By(t){return t.op==="and"}function $y(t){return KR(t)&&By(t)}function KR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function uu(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+$s(t.value);if($y(t))return t.filters.map(e=>uu(e)).join(",");{const e=t.filters.map(n=>uu(n)).join(",");return`${t.op}(${e})`}}function jy(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Sn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&jy(o,s.filters[c]),!0):!1}(t,e):void ae(19439)}function qy(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(qy).join(" ,")+"}"}(t):"Filter"}class QR extends Je{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class XR extends Je{constructor(e,n){super(e,"in",n),this.keys=Hy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YR extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Hy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class JR extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&eo(n.arrayValue,this.value)}}class ZR extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}}class e2 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!eo(this.value.arrayValue,n)}}class t2 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}/**
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
 */class n2{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Qp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new n2(t,e,n,r,s,i,o)}function gh(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>uu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$s(r)).join(",")),e.Ie=n}return e.Ie}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kp(t.startAt,e.startAt)&&Kp(t.endAt,e.endAt)}function hu(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class rs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function r2(t,e,n,r,s,i,o,c){return new rs(t,e,n,r,s,i,o,c)}function zy(t){return new rs(t)}function Xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _h(t){return t.collectionGroup!==null}function xs(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(gt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new to(i,r))}),n.has(gt.keyField().canonicalString())||e.Ee.push(new to(gt.keyField(),r))}return e.Ee}function bn(t){const e=ge(t);return e.de||(e.de=s2(e,xs(t))),e.de}function s2(t,e){if(t.limitType==="F")return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new to(s.field,i)});const n=t.endAt?new js(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new js(t.startAt.position,t.startAt.inclusive):null;return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function du(t,e){const n=t.filters.concat([e]);return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qa(t,e,n){return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return mh(bn(t),bn(e))&&t.limitType===e.limitType}function Gy(t){return`${gh(bn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qy(s)).join(", ")}]`),yo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>$s(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>$s(s)).join(",")),`Target(${r})`}(bn(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Wp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,xs(r),s)||r.endAt&&!function(o,c,l){const u=Wp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,xs(r),s))}(t,e)}function i2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wy(t){return(e,n)=>{let r=!1;for(const s of xs(t)){const i=o2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function o2(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Bs(l,u):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
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
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ky(this.inner)}size(){return this.innerSize}}/**
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
 */const a2=new Ge(ie.comparator);function Kn(){return a2}const Ky=new Ge(ie.comparator);function vi(...t){let e=Ky;for(const n of t)e=e.insert(n.key,n);return e}function Qy(t){let e=Ky;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Mi()}function Xy(){return Mi()}function Mi(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const c2=new Ge(ie.comparator),l2=new nt(ie.comparator);function we(...t){let e=l2;for(const n of t)e=e.add(n);return e}const u2=new nt(ve);function h2(){return u2}/**
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
 */function yh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(e)?"-0":e}}function Yy(t){return{integerValue:""+t}}function Jy(t,e){return FR(e)?Yy(e):yh(t,e)}/**
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
 */class bc{constructor(){this._=void 0}}function d2(t,e,n){return t instanceof Ha?function(s,i){const o={fields:{[xy]:{stringValue:Ny},[Vy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ec(i)&&(i=wc(i)),i&&(o.fields[Oy]=i),{mapValue:o}}(n,e):t instanceof no?ev(t,e):t instanceof ro?tv(t,e):function(s,i){const o=Zy(s,i),c=Yp(o)+Yp(s.Re);return lu(o)&&lu(s.Re)?Yy(c):yh(s.serializer,c)}(t,e)}function f2(t,e,n){return t instanceof no?ev(t,e):t instanceof ro?tv(t,e):n}function Zy(t,e){return t instanceof so?function(r){return lu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ha extends bc{}class no extends bc{constructor(e){super(),this.elements=e}}function ev(t,e){const n=nv(e);for(const r of t.elements)n.some(s=>Sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends bc{constructor(e){super(),this.elements=e}}function tv(t,e){let n=nv(e);for(const r of t.elements)n=n.filter(s=>!Sn(s,r));return{arrayValue:{values:n}}}class so extends bc{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Yp(t){return Xe(t.integerValue||t.doubleValue)}function nv(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class p2{constructor(e,n){this.field=e,this.transform=n}}function g2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof no&&s instanceof no||r instanceof ro&&s instanceof ro?Fs(r.elements,s.elements,Sn):r instanceof so&&s instanceof so?Sn(r.Re,s.Re):r instanceof Ha&&s instanceof Ha}(t.transform,e.transform)}class m2{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function rv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vh(t.key,Ft.none()):new vo(t.key,t.data,Ft.none());{const n=t.data,r=Nt.empty();let s=new nt(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nr(t.key,r,new zt(s.toArray()),Ft.none())}}function _2(t,e,n){t instanceof vo?function(s,i,o){const c=s.value.clone(),l=Zp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(s,i,o){if(!_a(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Zp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(sv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Li(t,e,n,r){return t instanceof vo?function(i,o,c,l){if(!_a(i.precondition,o))return c;const u=i.value.clone(),d=eg(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,o,c,l){if(!_a(i.precondition,o))return c;const u=eg(i.fieldTransforms,l,o),d=o.data;return d.setAll(sv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,c){return _a(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function y2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zy(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function Jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fs(r,s,(i,o)=>g2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends Rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends Rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zp(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,f2(o,c,n[s]))}return r}function eg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,d2(i,o,e))}return r}class vh extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iv extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class v2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=rv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>Jp(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>Jp(n,r))}}class Th{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return c2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Th(e,n,r,s)}}/**
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
 */class T2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,be;function ov(t){switch(t){case x.OK:return ae(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function av(t){if(t===void 0)return Wn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ye.OK:return x.OK;case Ye.CANCELLED:return x.CANCELLED;case Ye.UNKNOWN:return x.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return x.INTERNAL;case Ye.UNAVAILABLE:return x.UNAVAILABLE;case Ye.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ye.NOT_FOUND:return x.NOT_FOUND;case Ye.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ye.ABORTED:return x.ABORTED;case Ye.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ye.DATA_LOSS:return x.DATA_LOSS;default:return ae(39323,{code:t})}}(be=Ye||(Ye={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const w2=new Tr([4294967295,4294967295],0);function tg(t){const e=Sy().encode(t),n=new vy;return n.update(e),new Uint8Array(n.digest())}function ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ti(`Invalid padding: ${n}`);if(r<0)throw new Ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Tr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(w2)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=tg(e),[r,s]=ng(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=tg(e),[r,s]=ng(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sc(he.min(),s,new Ge(ve),Kn(),we())}}class To{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new To(r,n,we(),we(),we())}}/**
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
 */class ya{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class cv{constructor(e,n){this.targetId=e,this.Ce=n}}class lv{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rg{constructor(){this.Fe=0,this.Me=sg(),this.xe=mt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=we(),n=we(),r=we();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new To(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=sg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Re(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class I2{constructor(e){this.ze=e,this.je=new Map,this.He=Kn(),this.Je=Jo(),this.Ye=Jo(),this.Ze=new Ge(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(hu(i))if(r===0){const o=new ie(i.path);this.tt(n,o,ot.newNoDocument(o,he.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Rr(r).toUint8Array()}catch(l){if(l instanceof Dy)return Us("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Eh(o,s,i)}catch(l){return Us(l instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&hu(c.target)){const l=new ie(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,ot.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=we();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this._t(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Sc(e,n,this.Ze,this.He,r);return this.He=Kn(),this.Je=Jo(),this.Ye=Jo(),this.Ze=new Ge(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new rg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new nt(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new rg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Jo(){return new Ge(ie.comparator)}function sg(){return new Ge(ie.comparator)}const A2={asc:"ASCENDING",desc:"DESCENDING"},b2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class S2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fu(t,e){return t.useProto3Json||yo(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function C2(t,e){return za(t,e.toTimestamp())}function Wt(t){return Re(!!t,49232),he.fromTimestamp(function(n){const r=br(n);return new tt(r.seconds,r.nanos)}(t))}function wh(t,e){return pu(t,e).canonicalString()}function pu(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hv(t){const e=xe.fromString(t);return Re(_v(e),10190,{key:e.toString()}),e}function Ga(t,e){return wh(t.databaseId,e.path)}function Ui(t,e){const n=hv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(fv(n))}function dv(t,e){return wh(t.databaseId,e)}function P2(t){const e=hv(t);return e.length===4?xe.emptyPath():fv(e)}function gu(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fv(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ig(t,e,n){return{name:Ga(t,e),fields:n.value.mapValue.fields}}function k2(t,e){return"found"in e?function(r,s){Re(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ui(r,s.found.name),o=Wt(s.found.updateTime),c=s.found.createTime?Wt(s.found.createTime):he.min(),l=new Nt({mapValue:{fields:s.found.fields}});return ot.newFoundDocument(i,o,c,l)}(t,e):"missing"in e?function(r,s){Re(!!s.missing,3894),Re(!!s.readTime,22933);const i=Ui(r,s.missing),o=Wt(s.readTime);return ot.newNoDocument(i,o)}(t,e):ae(7234,{result:e})}function D2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Re(d===void 0||typeof d=="string",58123),mt.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?x.UNKNOWN:av(u.code);return new K(d,u.message||"")}(o);n=new lv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ui(t,r.document.name),i=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):he.min(),c=new Nt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ya(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ui(t,r.document),i=r.readTime?Wt(r.readTime):he.min(),o=ot.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ya([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ui(t,r.document),i=r.removedTargetIds||[];n=new ya([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new E2(s,i),c=r.targetId;n=new cv(c,o)}}return n}function pv(t,e){let n;if(e instanceof vo)n={update:ig(t,e.key,e.value)};else if(e instanceof vh)n={delete:Ga(t,e.key)};else if(e instanceof Nr)n={update:ig(t,e.key,e.data),updateMask:B2(e.fieldMask)};else{if(!(e instanceof iv))return ae(16599,{ft:e.type});n={verify:Ga(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof so)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:C2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function N2(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Wt(s.updateTime):Wt(i);return o.isEqual(he.min())&&(o=Wt(i)),new m2(o,s.transformResults||[])}(n,e))):[]}function x2(t,e){return{documents:[dv(t,e.path)]}}function O2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dv(t,s);const i=function(u){if(u.length!==0)return mv(dn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:vs(g.field),direction:L2(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=fu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function V2(t){let e=P2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const g=gv(f);return g instanceof dn&&$y(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(R){return new to(Ts(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(f){let g;return g=typeof f=="object"?f.value:f,yo(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(f){const g=!!f.before,m=f.values||[];return new js(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new js(m,g)}(n.endAt)),r2(e,s,o,i,c,"F",l,u)}function M2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ts(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>gv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function L2(t){return A2[t]}function U2(t){return b2[t]}function F2(t){return R2[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Ts(t){return gt.fromServerFormat(t.fieldPath)}function mv(t){return t instanceof Je?function(n){if(n.op==="=="){if(Gp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(zp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(zp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:U2(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>mv(s));return r.length===1?r[0]:{compositeFilter:{op:F2(n.op),filters:r}}}(t):ae(54877,{filter:t})}function B2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _v(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class pr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $2{constructor(e){this.wt=e}}function j2(t){const e=V2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qa(e,e.limit,"L"):e}/**
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
 */class q2{constructor(){this.Cn=new H2}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ar.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class H2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(xe.comparator)).toArray()}}/**
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
 */const og={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yv=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(yv,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
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
 */class qs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new qs(0)}static lr(){return new qs(-1)}}/**
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
 */const ag="LruGarbageCollector",z2=1048576;function cg([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class G2{constructor(e){this.Er=e,this.buffer=new nt(cg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class W2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ee(ag,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ys(n)?ee(ag,"Ignoring IndexedDB error during garbage collection: ",n):await Xs(n)}await this.mr(3e5)})}}class K2{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Tc.le);const r=new G2(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(og)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),og):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),_s()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Q2(t,e){return new K2(t,e)}/**
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
 */class X2{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Y2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class J2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Li(r.mutation,s,zt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=vi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Kn();const o=Mi(),c=function(){return Mi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Nr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Li(d.mutation,u,d.mutation.getFieldMask(),tt.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return c.set(u,new Y2(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Mi();let s=new Ge((o,c)=>o-c),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||zt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const f=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,f)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,f=Xy();d.forEach(g=>{if(!i.has(g)){const m=rv(n.get(g),r.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_h(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(jr());let c=Yi,l=i;return o.next(u=>$.forEach(u,(d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,we())).next(d=>({batchId:c,changes:Qy(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vi();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(f,g){return new rs(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ot.newInvalidDocument(d)))});let c=vi();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Li(d.mutation,u,zt.empty(),tt.now()),Ac(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class Z2{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return $.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:j2(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),$.resolve()}}/**
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
 */class eS{constructor(){this.overlays=new Ge(ie.comparator),this.Qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=jr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return $.resolve(c)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new T2(n,r));let i=this.Qr.get(n);i===void 0&&(i=we(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class tS{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Ih{constructor(){this.$r=new nt(it.Ur),this.Kr=new nt(it.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new it(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new it(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new ie(new xe([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ie(new xe([])),r=new it(n,e),s=new it(n,e+1);let i=we();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ie.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||ie.comparator(e.key,n.key)}}/**
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
 */class nS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new nt(it.Ur)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new v2(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Xr=this.Xr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?fh:this.nr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const c=this.ei(o.Zr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ve);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],c=>{r=r.add(c.Zr)})}),$.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new it(new ie(i),0);let c=new nt(ve);return this.Xr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Zr)),!0)},o),$.resolve(this.ni(c))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return $.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new it(n,0),s=this.Xr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rS{constructor(e){this.ii=e,this.docs=function(){return new Ge(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||VR(OR(d),r)<=0||(s.has(d.key)||Ac(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}si(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sS(this)}getSize(e){return $.resolve(this.size)}}class sS extends X2{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class iS{constructor(e){this.persistence=e,this.oi=new ss(n=>gh(n),mh),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this._i=0,this.ai=new Ih,this.targetCount=0,this.ui=qs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),$.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new qs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Tr(n),$.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.ai.containsKey(n))}}/**
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
 */class vv{constructor(e,n){this.ci={},this.overlays={},this.li=new Tc(0),this.hi=!1,this.hi=!0,this.Pi=new tS,this.referenceDelegate=e(this),this.Ti=new iS(this),this.indexManager=new q2,this.remoteDocumentCache=function(s){return new rS(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new $2(n),this.Ei=new Z2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new nS(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new oS(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return $.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class oS extends LR{constructor(e){super(),this.currentSequenceNumber=e}}class Ah{constructor(e){this.persistence=e,this.Vi=new Ih,this.mi=null}static fi(e){return new Ah(e)}get gi(){if(this.mi)return this.mi;throw ae(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,r=>{const s=ie.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return $.or([()=>$.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Wa{constructor(e,n){this.persistence=e,this.yi=new ss(r=>BR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Q2(this,n)}static fi(e,n){return new Wa(e,n)}di(){}Ai(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return $.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),$.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ga(e.data.value)),n}Dr(e,n,r){return $.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bh(e,n.fromCache,r,s)}}/**
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
 */class aS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return eI()?8:UR(Rt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aS;return this.bs(e,n,o).next(c=>{if(i.result=c,this.fs)return this.Ds(e,n,o,c.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(_s()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(_s()<=Ee.DEBUG&&ee("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(_s()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):$.resolve())}ws(e,n){if(Xp(n))return $.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qa(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.ys.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.vs(n,c);return this.Cs(n,u,o,l.readTime)?this.ws(e,qa(n,null,"F")):this.Fs(e,u,n,l)}))})))}Ss(e,n,r,s){return Xp(n)||s.isEqual(he.min())?$.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(_s()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.Fs(e,o,n,xR(s,Yi)).next(c=>c))})}vs(e,n){let r=new nt(Wy(e));return n.forEach((s,i)=>{Ac(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return _s()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ys(n)),this.ys.getDocumentsMatchingQuery(e,n,Ar.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Rh="LocalStore",lS=3e8;class uS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ge(ve),this.Os=new ss(i=>gh(i),mh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J2(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function hS(t,e,n,r){return new uS(t,e,n,r)}async function Tv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=we();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:c}))})})}function dS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const f=u.batch,g=f.keys();let m=$.resolve();return g.forEach(R=>{m=m.next(()=>d.getEntry(l,R)).next(P=>{const C=u.docVersions.get(R);Re(C!==null,48541),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),m.next(()=>c.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=we();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ev(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function fS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const c=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;c.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(mt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,r)),s=s.insert(f,m),function(P,C,V){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=lS?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,m,d)&&c.push(n.Ti.updateTargetData(i,m))});let l=Kn(),u=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(pS(i,o,e.documentUpdates).next(d=>{l=d.qs,u=d.Qs})),!r.isEqual(he.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(f=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.xs=s,i))}function pS(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(Rh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{qs:o,Qs:s}})}function gS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mS(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function mu(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ys(o))throw o;ee(Rh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function lg(t,e,n){const r=ge(t);let s=he.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=ge(l),g=f.Os.get(d);return g!==void 0?$.resolve(f.xs.get(g)):f.Ti.getTargetData(u,d)}(r,o,bn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:we())).next(c=>(_S(r,i2(e),c),{documents:c,$s:i})))}function _S(t,e,n){let r=t.Ns.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class ug{constructor(){this.activeTargetIds=h2()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yS{constructor(){this.xo=new ug,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ug,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vS{No(e){}shutdown(){}}/**
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
 */const hg="ConnectivityMonitor";class dg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ee(hg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ee(hg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zo=null;function _u(){return Zo===null?Zo=function(){return 268435456+Math.round(2147483648*Math.random())}():Zo++,"0x"+Zo.toString(16)}/**
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
 */const Al="RestConnection",TS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ES{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===au?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=_u(),c=this.jo(e,n.toUriEncodedString());ee(Al,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,s,i);const{host:u}=new URL(c),d=ts(u);return this.Jo(e,c,l,r,d).then(f=>(ee(Al,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Us(Al,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",r),f})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=TS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class wS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Et="WebChannelConnection";class IS extends ES{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=_u();return new Promise((c,l)=>{const u=new Ty;u.setWithCredentials(!0),u.listenOnce(Ey.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pa.NO_ERROR:const f=u.getResponseJson();ee(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case pa.TIMEOUT:ee(Et,`RPC '${e}' ${o} timed out`),l(new K(x.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const g=u.getStatus();if(ee(Et,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const R=m==null?void 0:m.error;if(R&&R.status&&R.message){const P=function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(M)>=0?M:x.UNKNOWN}(R.status);l(new K(P,R.message))}else l(new K(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(x.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(Et,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);ee(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=_u(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ay(),c=Iy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ee(Et,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);let g=!1,m=!1;const R=new wS({Zo:C=>{m?ee(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(ee(Et,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),ee(Et,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},Xo:()=>f.close()}),P=(C,V,M)=>{C.listen(V,O=>{try{M(O)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,yi.EventType.OPEN,()=>{m||(ee(Et,`RPC '${e}' stream ${s} transport opened.`),R.__())}),P(f,yi.EventType.CLOSE,()=>{m||(m=!0,ee(Et,`RPC '${e}' stream ${s} transport closed`),R.u_())}),P(f,yi.EventType.ERROR,C=>{m||(m=!0,Us(Et,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),R.u_(new K(x.UNAVAILABLE,"The operation could not be completed")))}),P(f,yi.EventType.MESSAGE,C=>{var V;if(!m){const M=C.data[0];Re(!!M,16349);const O=M,L=(O==null?void 0:O.error)||((V=O[0])===null||V===void 0?void 0:V.error);if(L){ee(Et,`RPC '${e}' stream ${s} received error:`,L);const ne=L.status;let J=function(y){const I=Ye[y];if(I!==void 0)return av(I)}(ne),b=L.message;J===void 0&&(J=x.INTERNAL,b="Unknown error status: "+ne+" with message "+L.message),m=!0,R.u_(new K(J,b)),f.close()}else ee(Et,`RPC '${e}' stream ${s} received:`,M),R.c_(M)}}),P(c,wy.STAT_EVENT,C=>{C.stat===iu.PROXY?ee(Et,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===iu.NOPROXY&&ee(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function bl(){return typeof document<"u"?document:null}/**
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
 */function Cc(t){return new S2(t,!0)}/**
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
 */class Sh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const fg="PersistentStream";class wv{constructor(e,n,r,s,i,o,c,l){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Sh(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new K(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ee(fg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(ee(fg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends wv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=D2(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?Wt(o.readTime):he.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=gu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=hu(l)?{documents:x2(i,l)}:{query:O2(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=uv(i,o.resumeToken);const u=fu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=za(i,o.snapshotVersion.toTimestamp());const u=fu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=M2(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=gu(this.serializer),n.removeTarget=e,this.L_(n)}}class bS extends wv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=N2(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=gu(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pv(this.serializer,r))};this.L_(n)}}/**
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
 */class RS{}class SS extends RS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,pu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(x.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Yo(e,pu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(x.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class CS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Wn(n),this.oa=!1):ee("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Yr="RemoteStore";class PS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{is(this)&&(ee(Yr,"Restarting streams for network reachability change."),await async function(l){const u=ge(l);u.Ta.add(4),await Eo(u),u.da.set("Unknown"),u.Ta.delete(4),await Pc(u)}(this))})}),this.da=new CS(r,s)}}async function Pc(t){if(is(t))for(const e of t.Ia)await e(!0)}async function Eo(t){for(const e of t.Ia)await e(!1)}function Iv(t,e){const n=ge(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Dh(n)?kh(n):Js(n).M_()&&Ph(n,e))}function Ch(t,e){const n=ge(t),r=Js(n);n.Pa.delete(e),r.M_()&&Av(n,e),n.Pa.size===0&&(r.M_()?r.N_():is(n)&&n.da.set("Unknown"))}function Ph(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Js(t).H_(e)}function Av(t,e){t.Aa.Ke(e),Js(t).J_(e)}function kh(t){t.Aa=new I2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Js(t).start(),t.da._a()}function Dh(t){return is(t)&&!Js(t).F_()&&t.Pa.size>0}function is(t){return ge(t).Ta.size===0}function bv(t){t.Aa=void 0}async function kS(t){t.da.set("Online")}async function DS(t){t.Pa.forEach((e,n)=>{Ph(t,e)})}async function NS(t,e){bv(t),Dh(t)?(t.da.ca(e),kh(t)):t.da.set("Unknown")}async function xS(t,e,n){if(t.da.set("Online"),e instanceof lv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Pa.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Pa.delete(c),s.Aa.removeTarget(c))}(t,e)}catch(r){ee(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof ya?t.Aa.Xe(e):e instanceof cv?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(he.min()))try{const r=await Ev(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Aa.It(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.Pa.get(l);if(!d)return;i.Pa.set(l,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),Av(i,l);const f=new pr(d.target,l,u,d.sequenceNumber);Ph(i,f)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(Yr,"Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!Ys(e))throw e;t.Ta.add(1),await Eo(t),t.da.set("Offline"),n||(n=()=>Ev(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Yr,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Pc(t)})}function Rv(t,e){return e().catch(n=>Ka(t,n,e))}async function kc(t){const e=ge(t),n=Cr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:fh;for(;OS(e);)try{const s=await gS(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,VS(e,s)}catch(s){await Ka(e,s)}Sv(e)&&Cv(e)}function OS(t){return is(t)&&t.ha.length<10}function VS(t,e){t.ha.push(e);const n=Cr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Sv(t){return is(t)&&!Cr(t).F_()&&t.ha.length>0}function Cv(t){Cr(t).start()}async function MS(t){Cr(t).ta()}async function LS(t){const e=Cr(t);for(const n of t.ha)e.Z_(n.mutations)}async function US(t,e,n){const r=t.ha.shift(),s=Th.from(r,e,n);await Rv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kc(t)}async function FS(t,e){e&&Cr(t).Y_&&await async function(r,s){if(function(o){return ov(o)&&o!==x.ABORTED}(s.code)){const i=r.ha.shift();Cr(r).O_(),await Rv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kc(r)}}(t,e),Sv(t)&&Cv(t)}async function pg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(Yr,"RemoteStore received new credentials");const r=is(n);n.Ta.add(3),await Eo(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Pc(n)}async function BS(t,e){const n=ge(t);e?(n.Ta.delete(2),await Pc(n)):e||(n.Ta.add(2),await Eo(n),n.da.set("Unknown"))}function Js(t){return t.Ra||(t.Ra=function(n,r,s){const i=ge(n);return i.ra(),new AS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:kS.bind(null,t),n_:DS.bind(null,t),i_:NS.bind(null,t),j_:xS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Dh(t)?kh(t):t.da.set("Unknown")):(await t.Ra.stop(),bv(t))})),t.Ra}function Cr(t){return t.Va||(t.Va=function(n,r,s){const i=ge(n);return i.ra(),new bS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:MS.bind(null,t),i_:FS.bind(null,t),X_:LS.bind(null,t),ea:US.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await kc(t)):(await t.Va.stop(),t.ha.length>0&&(ee(Yr,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class Nh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Nh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xh(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Ys(t))return new K(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{static emptySet(e){return new Os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=vi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class gg{constructor(){this.ma=new Ge(ie.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Hs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class $S{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class jS{constructor(){this.queries=mg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=mg(),i.forEach((o,c)=>{for(const l of c.ya)l.onError(r)})})(this,new K(x.ABORTED,"Firestore shutting down"))}}function mg(){return new ss(t=>Gy(t),Ic)}async function qS(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new $S,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=xh(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&Oh(n)}async function HS(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ya)c.va(s)&&(r=!0);o.pa=s}}r&&Oh(n)}function GS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function Oh(t){t.ba.forEach(e=>{e.next()})}var yu,_g;(_g=yu||(yu={})).Ca="default",_g.Cache="cache";class WS{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==yu.Cache}}/**
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
 */class Pv{constructor(e){this.key=e}}class kv{constructor(e){this.key=e}}class KS{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=we(),this.mutatedKeys=we(),this.Ha=Wy(e),this.Ja=new Os(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new gg,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),m=Ac(this.query,f)?f:null,R=!!g&&this.mutatedKeys.has(g.key),P=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;g&&m?g.data.isEqual(m.data)?R!==P&&(r.track({type:3,doc:m}),C=!0):this.eu(g,m)||(r.track({type:2,doc:m}),C=!0,(l&&this.Ha(m,l)>0||u&&this.Ha(m,u)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),C=!0):g&&!m&&(r.track({type:1,doc:g}),C=!0,(l||u)&&(c=!0)),C&&(m?(o=o.add(m),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:c,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,f)=>function(m,R){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:C})}};return P(m)-P(R)}(d.type,f.type)||this.Ha(d.doc,f.doc)),this.tu(r),s=s!=null&&s;const c=n&&!s?this.nu():[],l=this.ja.size===0&&this.current&&!s?1:0,u=l!==this.za;return this.za=l,o.length!==0||u?{snapshot:new Hs(this.query,e.Ja,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new gg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=we(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new kv(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new Pv(r))}),n}su(e){this.Ga=e.$s,this.ja=we();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Hs.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Vh="SyncEngine";class QS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XS{constructor(e){this.key=e,this._u=!1}}class YS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new ss(c=>Gy(c),Ic),this.cu=new Map,this.lu=new Set,this.hu=new Ge(ie.comparator),this.Pu=new Map,this.Tu=new Ih,this.Iu={},this.Eu=new Map,this.du=qs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function JS(t,e,n=!0){const r=Mv(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Dv(r,e,n,!0),s}async function ZS(t,e){const n=Mv(t);await Dv(n,e,!0,!1)}async function Dv(t,e,n,r){const s=await mS(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await eC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Iv(t.remoteStore,s),c}async function eC(t,e,n,r,s){t.Ru=(f,g,m)=>async function(P,C,V,M){let O=C.view.Za(V);O.Cs&&(O=await lg(P.localStore,C.query,!1).then(({documents:b})=>C.view.Za(b,O)));const L=M&&M.targetChanges.get(C.targetId),ne=M&&M.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(O,P.isPrimaryClient,L,ne);return vg(P,C.targetId,J.ru),J.snapshot}(t,f,g,m);const i=await lg(t.localStore,e,!0),o=new KS(e,i.$s),c=o.Za(i.documents),l=To.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);vg(t,n,u.ru);const d=new QS(e,n,o);return t.uu.set(e,d),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),u.snapshot}async function tC(t,e,n){const r=ge(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!Ic(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ch(r.remoteStore,s.targetId),vu(r,s.targetId)}).catch(Xs)):(vu(r,s.targetId),await mu(r.localStore,s.targetId,!0))}async function nC(t,e){const n=ge(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ch(n.remoteStore,r.targetId))}async function rC(t,e,n){const r=uC(t);try{const s=await function(o,c){const l=ge(o),u=tt.now(),d=c.reduce((m,R)=>m.add(R.key),we());let f,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let R=Kn(),P=we();return l.Bs.getEntries(m,d).next(C=>{R=C,R.forEach((V,M)=>{M.isValidDocument()||(P=P.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,R)).next(C=>{f=C;const V=[];for(const M of c){const O=y2(M,f.get(M.key).overlayedDocument);O!=null&&V.push(new Nr(M.key,O,Uy(O.value.mapValue),Ft.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,V,c)}).next(C=>{g=C;const V=C.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(m,C.batchId,V)})}).then(()=>({batchId:g.batchId,changes:Qy(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Iu[o.currentUser.toKey()];u||(u=new Ge(ve)),u=u.insert(c,l),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,n),await wo(r,s.changes),await kc(r.remoteStore)}catch(s){const i=xh(s,"Failed to persist write");n.reject(i)}}async function Nv(t,e){const n=ge(t);try{const r=await fS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Re(o._u,14607):s.removedDocuments.size>0&&(Re(o._u,42227),o._u=!1))}),await wo(n,r,e)}catch(r){await Xs(r)}}function yg(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const c=o.view.Da(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ge(o);l.onlineState=c;let u=!1;l.queries.forEach((d,f)=>{for(const g of f.ya)g.Da(c)&&(u=!0)}),u&&Oh(l)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sC(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Ge(ie.comparator);o=o.insert(i,ot.newNoDocument(i,he.min()));const c=we().add(i),l=new Sc(he.min(),new Map,new Ge(ve),o,c);await Nv(r,l),r.hu=r.hu.remove(i),r.Pu.delete(e),Mh(r)}else await mu(r.localStore,e,!1).then(()=>vu(r,e,n)).catch(Xs)}async function iC(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await dS(n.localStore,e);Ov(n,r,null),xv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wo(n,s)}catch(s){await Xs(s)}}async function oC(t,e,n){const r=ge(t);try{const s=await function(o,c){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(f=>(Re(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Ov(r,e,n),xv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wo(r,s)}catch(s){await Xs(s)}}function xv(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Ov(t,e,n){const r=ge(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||Vv(t,r)})}function Vv(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Ch(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Mh(t))}function vg(t,e,n){for(const r of n)r instanceof Pv?(t.Tu.addReference(r.key,e),aC(t,r)):r instanceof kv?(ee(Vh,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||Vv(t,r.key)):ae(19791,{mu:r})}function aC(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(ee(Vh,"New document in limbo: "+n),t.lu.add(r),Mh(t))}function Mh(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new ie(xe.fromString(e)),r=t.du.next();t.Pu.set(r,new XS(n)),t.hu=t.hu.insert(n,r),Iv(t.remoteStore,new pr(bn(zy(n.path)),r,"TargetPurposeLimboResolution",Tc.le))}}async function wo(t,e,n){const r=ge(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((c,l)=>{o.push(r.Ru(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=bh.Rs(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.au.j_(s),await async function(l,u){const d=ge(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,g=>$.forEach(g.ds,m=>d.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>$.forEach(g.As,m=>d.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Ys(f))throw f;ee(Rh,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=d.xs.get(g),R=m.snapshotVersion,P=m.withLastLimboFreeSnapshotVersion(R);d.xs=d.xs.insert(g,P)}}}(r.localStore,i))}async function cC(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(Vh,"User change. New user:",e.toKey());const r=await Tv(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(c=>{c.forEach(l=>{l.reject(new K(x.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wo(n,r.ks)}}function lC(t,e){const n=ge(t),r=n.Pu.get(e);if(r&&r._u)return we().add(r.key);{let s=we();const i=n.cu.get(e);if(!i)return s;for(const o of i){const c=n.uu.get(o);s=s.unionWith(c.view.Ya)}return s}}function Mv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sC.bind(null,e),e.au.j_=zS.bind(null,e.eventManager),e.au.Vu=GS.bind(null,e.eventManager),e}function uC(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oC.bind(null,e),e}class Qa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return hS(this.persistence,new cS,e.initialUser,this.serializer)}yu(e){return new vv(Ah.fi,this.serializer)}pu(e){return new yS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qa.provider={build:()=>new Qa};class hC extends Qa{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Re(this.persistence.referenceDelegate instanceof Wa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new W2(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new vv(r=>Wa.fi(r,n),this.serializer)}}class Tu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cC.bind(null,this.syncEngine),await BS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jS}()}createDatastore(e){const n=Cc(e.databaseInfo.databaseId),r=function(i){return new IS(i)}(e.databaseInfo);return function(i,o,c,l){return new SS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new PS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>yg(this.syncEngine,n,0),function(){return dg.C()?new dg:new vS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const f=new YS(s,i,o,c,l,u);return d&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ee(Yr,"RemoteStore shutting down."),i.Ta.add(5),await Eo(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Tu.provider={build:()=>new Tu};/**
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
 */class dC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class fC{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=ge(s),c={documents:i.map(f=>Ga(o.serializer,f))},l=await o.Yo("BatchGetDocuments",o.serializer.databaseId,xe.emptyPath(),c,i.length),u=new Map;l.forEach(f=>{const g=k2(o.serializer,f);u.set(g.key.toString(),g)});const d=[];return i.forEach(f=>{const g=u.get(f.toString());Re(!!g,55234,{key:f}),d.push(g)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new vh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=ie.fromPath(r);this.mutations.push(new iv(s,this.precondition(s)))}),await async function(r,s){const i=ge(r),o={writes:s.map(c=>pv(i.serializer,c))};await i.zo("Commit",i.serializer.databaseId,xe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ae(50498,{qu:e.constructor.name});n=he.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(he.min())?Ft.exists(!1):Ft.updateTime(n):Ft.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(he.min()))throw new K(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ft.updateTime(n)}return Ft.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class pC{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new Sh(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new fC(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!yo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ov(n)}return!1}}/**
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
 */const Pr="FirestoreClient";class gC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Cy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mC(t);ee(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pg(e.remoteStore,s)),t._onlineComponents=e}async function mC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Pr,"Using user provided OfflineComponentProvider");try{await Rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await Rl(t,new Qa)}}else ee(Pr,"Using default OfflineComponentProvider"),await Rl(t,new hC(void 0));return t._offlineComponents}async function Lh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Pr,"Using user provided OnlineComponentProvider"),await Tg(t,t._uninitializedComponentsProvider._online)):(ee(Pr,"Using default OnlineComponentProvider"),await Tg(t,new Tu))),t._onlineComponents}function _C(t){return Lh(t).then(e=>e.syncEngine)}function yC(t){return Lh(t).then(e=>e.datastore)}async function vC(t){const e=await Lh(t),n=e.eventManager;return n.onListen=JS.bind(null,e.syncEngine),n.onUnlisten=tC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nC.bind(null,e.syncEngine),n}function TC(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new dC({next:g=>{d.Cu(),o.enqueueAndForget(()=>HS(i,f)),g.fromCache&&l.source==="server"?u.reject(new K(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new WS(c,d,{includeMetadataChanges:!0,La:!0});return qS(i,f)}(await vC(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Lv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Eg=new Map;/**
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
 */function Uv(t,e,n){if(!n)throw new K(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EC(t,e,n,r){if(e===!0&&r===!0)throw new K(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(!ie.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ig(t){if(ie.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function io(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new K(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Fv="firestore.googleapis.com",Ag=!0;class bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fv,this.ssl=Ag}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ag;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<z2)throw new K(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AR;switch(r.type){case"firstParty":return new CR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Eg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Eg.delete(n),r.terminate())}(this),Promise.resolve()}}function wC(t,e,n,r={}){var s;t=io(t,Nc);const i=ts(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(eh(`https://${l}`),th("Firestore",!0)),o.host!==Fv&&o.host!==l&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Kr(u,c)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=wt.MOCK_USER;else{d=O_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new wt(g)}t._authCredentials=new bR(new Ry(d,f))}}/**
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
 */class Xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Er extends Xn{constructor(e,n,r){super(e,n,zy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new ie(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function va(t,e,...n){if(t=$e(t),Uv("collection","path",e),t instanceof Nc){const r=xe.fromString(e,...n);return Ig(r),new Er(t,null,r)}{if(!(t instanceof Kt||t instanceof Er))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Ig(r),new Er(t.firestore,null,r)}}function Eu(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Cy.newId()),Uv("doc","path",e),t instanceof Nc){const r=xe.fromString(e,...n);return wg(r),new Kt(t,null,new ie(r))}{if(!(t instanceof Kt||t instanceof Er))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return wg(r),new Kt(t.firestore,t instanceof Er?t.converter:null,new ie(r))}}/**
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
 */const Rg="AsyncQueue";class Sg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Sh(this,"async_queue_retry"),this.ec=()=>{const r=bl();r&&ee(Rg,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=bl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Un;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Ys(e))throw e;ee(Rg,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Wn("INTERNAL UNHANDLED ERROR: ",Cg(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=Nh.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ae(47125,{_c:Cg(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Cg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xc extends Nc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sg(e),this._firestoreClient=void 0,await e}}}function IC(t,e){const n=typeof t=="object"?t:gc(),r=typeof t=="string"?t:e,s=Ws(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=D_("firestore");i&&wC(s,...i)}return s}function Uh(t){if(t._terminated)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AC(t),t._firestoreClient}function AC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new qR(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new gC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(mt.fromBase64String(e))}catch(n){throw new K(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vc{constructor(e){this._methodName=e}}/**
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
 */class Fh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Bh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const bC=/^__.*__$/;class RC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}class Bv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{hc:t})}}class $h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new $h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Xa(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if($v(this.hc)&&bC.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class SC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cc(e)}gc(e,n,r,s=!1){return new $h({hc:e,methodName:n,fc:r,path:gt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=Cc(t._databaseId);return new SC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jv(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);qh("Data must be an object, but it was:",o,r);const c=Hv(r,o);let l,u;if(i.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const g=wu(e,f,n);if(!o.contains(g))throw new K(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gv(d,g)||d.push(g)}l=new zt(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new RC(new Nt(c),l,u)}class Lc extends Vc{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lc}}class jh extends Vc{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new so(e.serializer,Jy(e.serializer,this.wc));return new p2(e.path,n)}isEqual(e){return e instanceof jh&&this.wc===e.wc}}function CC(t,e,n,r){const s=t.gc(1,e,n);qh("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Dr(r,(l,u)=>{const d=Hh(e,l,n);u=$e(u);const f=s.Ac(d);if(u instanceof Lc)i.push(d);else{const g=Io(u,f);g!=null&&(i.push(d),o.set(d,g))}});const c=new zt(i);return new Bv(o,c,s.fieldTransforms)}function PC(t,e,n,r,s,i){const o=t.gc(1,e,n),c=[wu(e,r,n)],l=[s];if(i.length%2!=0)throw new K(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(wu(e,i[g])),l.push(i[g+1]);const u=[],d=Nt.empty();for(let g=c.length-1;g>=0;--g)if(!Gv(u,c[g])){const m=c[g];let R=l[g];R=$e(R);const P=o.Ac(m);if(R instanceof Lc)u.push(m);else{const C=Io(R,P);C!=null&&(u.push(m),d.set(m,C))}}const f=new zt(u);return new Bv(d,f,o.fieldTransforms)}function qv(t,e,n,r=!1){return Io(n,t.gc(r?4:3,e))}function Io(t,e){if(zv(t=$e(t)))return qh("Unsupported field value:",e,t),Hv(t,e);if(t instanceof Vc)return function(r,s){if(!$v(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Io(c,s.Rc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:za(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:za(s.serializer,i)}}if(r instanceof Fh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:uv(s.serializer,r._byteString)};if(r instanceof Kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bh)return function(o,c){return{mapValue:{fields:{[My]:{stringValue:Ly},[$a]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Vc("VectorValues must only contain numeric values.");return yh(c.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Dc(r)}`)}(t,e)}function Hv(t,e){const n={};return ky(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,s)=>{const i=Io(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Fh||t instanceof Jr||t instanceof Kt||t instanceof Vc||t instanceof Bh)}function qh(t,e,n){if(!zv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Dc(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function wu(t,e,n){if((e=$e(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return Hh(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const kC=new RegExp("[~\\*/\\[\\]]");function Hh(t,e,n){if(e.search(kC)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oc(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(x.INVALID_ARGUMENT,c+t+l)}function Gv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oo{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DC extends oo{data(){return super.data()}}function zh(t,e){return typeof e=="string"?Hh(t,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}/**
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
 */function NC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gh{}class Uc extends Gh{}function Pg(t,e,...n){let r=[];e instanceof Gh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Kh).length,c=i.filter(l=>l instanceof Wh).length;if(o>1||o>0&&c>0)throw new K(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Wh extends Uc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){const n=this._parse(e);return Wv(e._query,n),new Xn(e.firestore,e.converter,du(e._query,n))}_parse(e){const n=Mc(e.firestore);return function(i,o,c,l,u,d,f){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){xg(f,d);const R=[];for(const P of f)R.push(Ng(l,i,P));g={arrayValue:{values:R}}}else g=Ng(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||xg(f,d),g=qv(c,o,f,d==="in"||d==="not-in");return Je.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Kh extends Gh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Kh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Wv(o,l),o=du(o,l)}(e._query,n),new Xn(e.firestore,e.converter,du(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qh extends Uc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new to(i,o)}(e._query,this._field,this._direction);return new Xn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new rs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function kg(t,e="asc"){const n=e,r=zh("orderBy",t);return Qh._create(r,n)}class Xh extends Uc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){return new Xn(e.firestore,e.converter,qa(e._query,this._limit,this._limitType))}}function Dg(t){return Xh._create("limit",t,"F")}class Yh extends Uc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){const n=OC(e,this.type,this._docOrFields,this._inclusive);return new Xn(e.firestore,e.converter,function(s,i){return new rs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function xC(...t){return Yh._create("startAfter",t,!1)}function OC(t,e,n,r){if(n[0]=$e(n[0]),n[0]instanceof oo)return function(i,o,c,l,u){if(!l)throw new K(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const f of xs(i))if(f.field.isKeyField())d.push(ja(o,l.key));else{const g=l.data.field(f.field);if(Ec(g))throw new K(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const m=f.field.canonicalString();throw new K(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}d.push(g)}return new js(d,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Mc(t.firestore);return function(o,c,l,u,d,f){const g=o.explicitOrderBy;if(d.length>g.length)throw new K(x.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let R=0;R<d.length;R++){const P=d[R];if(g[R].field.isKeyField()){if(typeof P!="string")throw new K(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof P}`);if(!_h(o)&&P.indexOf("/")!==-1)throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${P}' contains a slash.`);const C=o.path.child(xe.fromString(P));if(!ie.isDocumentKey(C))throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const V=new ie(C);m.push(ja(c,V))}else{const C=qv(l,u,P);m.push(C)}}return new js(m,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Ng(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new K(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_h(e)&&n.indexOf("/")!==-1)throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!ie.isDocumentKey(r))throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ja(t,new ie(r))}if(n instanceof Kt)return ja(t,n._key);throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(n)}.`)}function xg(t,e){if(!Array.isArray(t)||t.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wv(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Kv{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[$a].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new Bh(i)}convertGeoPoint(e){return new Fh(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=br(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Re(_v(r),9688,{name:e});const s=new Zi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Qv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class VC extends Kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}/**
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
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xv extends oo{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends Xv{data(e={}){return super.data(e)}}class MC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:LC(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}class Yv extends Kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function Og(t){t=io(t,Xn);const e=io(t.firestore,xc),n=Uh(e),r=new Yv(e);return NC(t._query),TC(n,t._query).then(s=>new MC(e,r,t,s))}function UC(t,e){const n=io(t.firestore,xc),r=Eu(t),s=Qv(t.converter,e);return FC(n,[jv(Mc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ft.exists(!1))]).then(()=>r)}function FC(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>rC(await _C(r),s,i)),i.promise}(Uh(t),e)}/**
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
 */const BC={maxAttempts:5};function wi(t,e){if((t=$e(t)).firestore!==e)throw new K(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class $C{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Mc(e)}get(e){const n=wi(e,this._firestore),r=new VC(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return ae(24041);const i=s[0];if(i.isFoundDocument())return new oo(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new oo(this._firestore,r,n._key,null,n.converter);throw ae(18433,{doc:i})})}set(e,n,r){const s=wi(e,this._firestore),i=Qv(s.converter,n,r),o=jv(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=wi(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof Oc?PC(this._dataReader,"Transaction.update",i._key,n,r,s):CC(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=wi(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class jC extends $C{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=wi(e,this._firestore),r=new Yv(this._firestore);return super.get(e).then(s=>new Xv(this._firestore,r,n._key,s._document,new Ei(!1,!1),n.converter))}}function qC(t,e,n){t=io(t,xc);const r=Object.assign(Object.assign({},BC),n);return function(i){if(i.maxAttempts<1)throw new K(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,c){const l=new Un;return i.asyncQueue.enqueueAndForget(async()=>{const u=await yC(i);new pC(i.asyncQueue,u,c,o,l).$u()}),l.promise}(Uh(t),s=>e(new jC(t,s)),r)}function Vg(t){return new jh("increment",t)}(function(e,n=!0){(function(s){Qs=s})(ns),Hn(new Rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new xc(new RR(r.getProvider("auth-internal")),new PR(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ln(xp,Op,e),ln(xp,Op,"esm2017")})();/**
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
 */const Jv="firebasestorage.googleapis.com",Zv="storageBucket",HC=2*60*1e3,zC=10*60*1e3,GC=1e3;/**
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
 */class We extends Cn{constructor(e,n,r=0){super(Sl(e),`Firebase Storage: ${n} (${Sl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function Sl(t){return"storage/"+t}function Jh(){const t="An unknown error occurred, please check the error payload for server response.";return new We(Be.UNKNOWN,t)}function WC(t){return new We(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function KC(t){return new We(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(Be.UNAUTHENTICATED,t)}function XC(){return new We(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YC(t){return new We(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function e0(){return new We(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function t0(){return new We(Be.CANCELED,"User canceled the upload/download.")}function JC(t){return new We(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function ZC(t){return new We(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eP(){return new We(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zv+"' property when initializing the app?")}function n0(){return new We(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tP(){return new We(Be.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function nP(){return new We(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rP(t){return new We(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Iu(t){return new We(Be.INVALID_ARGUMENT,t)}function r0(){return new We(Be.APP_DELETED,"The Firebase app was deleted.")}function sP(t){return new We(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fi(t,e){return new We(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function mi(t){throw new We(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw ZC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${d}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},P=n===Jv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",V=new RegExp(`^https?://${P}/${s}/${C}`,"i"),O=[{regex:c,indices:l,postModify:i},{regex:m,indices:R,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<O.length;L++){const ne=O[L],J=ne.regex.exec(e);if(J){const b=J[ne.indices.bucket];let v=J[ne.indices.path];v||(v=""),r=new Gt(b,v),ne.postModify(r);break}}if(r==null)throw JC(e);return r}}class iP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function f(C){s=setTimeout(()=>{s=null,t(m,l())},C)}function g(){i&&clearTimeout(i)}function m(C,...V){if(u){g();return}if(C){g(),d.call(null,C,...V);return}if(l()||o){g(),d.call(null,C,...V);return}r<64&&(r*=2);let O;c===1?(c=2,O=0):O=(r+Math.random())*1e3,f(O)}let R=!1;function P(C){R||(R=!0,g(),!u&&(s!==null?(C||(c=2),clearTimeout(s),f(0)):C||(c=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function aP(t){t(!1)}/**
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
 */function cP(t){return t!==void 0}function lP(t){return typeof t=="function"}function uP(t){return typeof t=="object"&&!Array.isArray(t)}function Fc(t){return typeof t=="string"||t instanceof String}function Mg(t){return Zh()&&t instanceof Blob}function Zh(){return typeof Blob<"u"}function Lg(t,e,n,r){if(r<e)throw Iu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Iu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ao(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function s0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
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
 */function i0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class hP{constructor(e,n,r,s,i,o,c,l,u,d,f,g=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ea(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Hr.NO_ERROR,l=i.getStatus();if(!c||i0(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Hr.ABORT;r(!1,new ea(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ea(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());cP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Jh();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?r0():t0();o(l)}else{const l=e0();o(l)}};this.canceled_?n(!1,new ea(!1,null,!0)):this.backoffId_=oP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ea{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,r,s,i,o=!0,c=!1){const l=s0(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return pP(d,e),dP(d,n),fP(d,i),gP(d,r),new hP(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
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
 */function _P(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yP(...t){const e=_P();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zh())return new Blob(t);throw new We(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function TP(t){if(typeof atob>"u")throw rP("base-64");return atob(t)}/**
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
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cl{constructor(e,n){this.data=e,this.contentType=n||null}}function EP(t,e){switch(t){case En.RAW:return new Cl(o0(e));case En.BASE64:case En.BASE64URL:return new Cl(a0(t,e));case En.DATA_URL:return new Cl(IP(e),AP(e))}throw Jh()}function o0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wP(t){let e;try{e=decodeURIComponent(t)}catch{throw Fi(En.DATA_URL,"Malformed data URL.")}return o0(e)}function a0(t,e){switch(t){case En.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Fi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Fi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=TP(e)}catch(s){throw s.message.includes("polyfill")?s:Fi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class c0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fi(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=bP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new c0(t);return e.base64?a0(En.BASE64,e.rest):wP(e.rest)}function AP(t){return new c0(t).contentType}function bP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,s="";Mg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mg(this.data_)){const r=this.data_,s=vP(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(Zh()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(yP.apply(null,n))}else{const n=e.map(o=>Fc(o)?EP(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function l0(t){let e;try{e=JSON.parse(t)}catch{return null}return uP(e)?e:null}/**
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
 */function RP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function u0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CP(t,e){return e}class Ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||CP}}let ta=null;function PP(t){return!Fc(t)||t.length<2?t:u0(t)}function h0(){if(ta)return ta;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(i,o){return PP(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ct("size");return s.xform=r,t.push(s),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),ta=t,ta}function kP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function DP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return kP(r,t),r}function d0(t,e,n){const r=l0(e);return r===null?null:DP(t,r,n)}function NP(t,e,n,r){const s=l0(e);if(s===null||!Fc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,g="/b/"+o(d)+"/o/"+o(f),m=Ao(g,n,r),R=s0({alt:"media",token:u});return m+R})[0]}function f0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Zs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Fn(t){if(!t)throw Jh()}function ed(t,e){function n(r,s){const i=d0(t,s,e);return Fn(i!==null),i}return n}function xP(t,e){function n(r,s){const i=d0(t,s,e);return Fn(i!==null),NP(i,s,t.host,t._protocol)}return n}function bo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=XC():s=QC():n.getStatus()===402?s=KC(t.bucket):n.getStatus()===403?s=YC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function p0(t){const e=bo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=WC(t.path)),i.serverResponse=s.serverResponse,i}return n}function OP(t,e,n){const r=e.fullServerUrl(),s=Ao(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Zs(s,i,ed(t,n),o);return c.errorHandler=p0(e),c}function VP(t,e,n){const r=e.fullServerUrl(),s=Ao(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Zs(s,i,xP(t,n),o);return c.errorHandler=p0(e),c}function MP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function g0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=MP(null,e)),r}function LP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let O="";for(let L=0;L<2;L++)O=O+Math.random().toString().slice(2);return O}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=g0(e,r,s),d=f0(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",m=fr.getBlob(f,r,g);if(m===null)throw n0();const R={name:u.fullPath},P=Ao(i,t.host,t._protocol),C="POST",V=t.maxUploadRetryTime,M=new Zs(P,C,ed(t,n),V);return M.urlParams=R,M.headers=o,M.body=m.uploadData(),M.errorHandler=bo(e),M}class Ya{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function td(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Fn(!1)}return Fn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function UP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=g0(e,r,s),c={name:o.fullPath},l=Ao(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=f0(o,n),g=t.maxUploadRetryTime;function m(P){td(P);let C;try{C=P.getResponseHeader("X-Goog-Upload-URL")}catch{Fn(!1)}return Fn(Fc(C)),C}const R=new Zs(l,u,m,g);return R.urlParams=c,R.headers=d,R.body=f,R.errorHandler=bo(e),R}function FP(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=td(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Fn(!1)}f||Fn(!1);const g=Number(f);return Fn(!isNaN(g)),new Ya(g,r.size(),d==="final")}const o="POST",c=t.maxUploadRetryTime,l=new Zs(n,o,i,c);return l.headers=s,l.errorHandler=bo(e),l}const Ug=256*1024;function BP(t,e,n,r,s,i,o,c){const l=new Ya(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw tP();const u=l.total-l.current;let d=u;s>0&&(d=Math.min(d,s));const f=l.current,g=f+d;let m="";d===0?m="finalize":u===d?m="upload, finalize":m="upload";const R={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(f,g);if(P===null)throw n0();function C(L,ne){const J=td(L,["active","final"]),b=l.current+d,v=r.size();let y;return J==="final"?y=ed(e,i)(L,ne):y=null,new Ya(b,v,J==="final",y)}const V="POST",M=e.maxUploadRetryTime,O=new Zs(n,V,C,M);return O.headers=R,O.body=P.uploadData(),O.progressCallback=c||null,O.errorHandler=bo(t),O}const Lt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Pl(t){switch(t){case"running":case"pausing":case"canceling":return Lt.RUNNING;case"paused":return Lt.PAUSED;case"success":return Lt.SUCCESS;case"canceled":return Lt.CANCELED;case"error":return Lt.ERROR;default:return Lt.ERROR}}/**
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
 */class $P{constructor(e,n,r){if(lP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function ds(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class jP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw mi("cannot .send() more than once");if(ts(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qP extends jP{initXhr(){this.xhr_.responseType="text"}}function Es(){return new qP}/**
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
 */class HP{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=h0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Be.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(i0(s.status,[]))if(i)s=e0();else{this.sleepTime=Math.max(this.sleepTime*2,GC),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Be.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=UP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Es,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=FP(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Es,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ug*this._chunkMultiplier,n=new Ya(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=BP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(o,Es,s,i,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ug*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=OP(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Es,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=LP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Es,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=t0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Pl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new $P(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Pl(this._state)){case Lt.SUCCESS:ds(this._resolve.bind(null,this.snapshot))();break;case Lt.CANCELED:case Lt.ERROR:const n=this._reject;ds(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Pl(this._state)){case Lt.RUNNING:case Lt.PAUSED:e.next&&ds(e.next.bind(e,this.snapshot))();break;case Lt.SUCCESS:e.complete&&ds(e.complete.bind(e))();break;case Lt.CANCELED:case Lt.ERROR:e.error&&ds(e.error.bind(e,this._error))();break;default:e.error&&ds(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Zr{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return u0(this._location.path)}get storage(){return this._service}get parent(){const e=RP(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sP(e)}}function zP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new HP(t,new fr(e),n)}function GP(t){t._throwIfRoot("getDownloadURL");const e=VP(t.storage,t._location,h0());return t.storage.makeRequestWithTokens(e,Es).then(n=>{if(n===null)throw nP();return n})}function WP(t,e){const n=SP(t._location.path,e),r=new Gt(t._location.bucket,n);return new Zr(t.storage,r)}/**
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
 */function KP(t){return/^[A-Za-z]+:\/\//.test(t)}function QP(t,e){return new Zr(t,e)}function m0(t,e){if(t instanceof nd){const n=t;if(n._bucket==null)throw eP();const r=new Zr(n,n._bucket);return e!=null?m0(r,e):r}else return e!==void 0?WP(t,e):t}function XP(t,e){if(e&&KP(e)){if(t instanceof nd)return QP(t,e);throw Iu("To use ref(service, url), the first argument must be a Storage instance.")}else return m0(t,e)}function Fg(t,e){const n=e==null?void 0:e[Zv];return n==null?null:Gt.makeFromBucketSpec(n,t)}function YP(t,e,n,r={}){t.host=`${e}:${n}`;const s=ts(e);s&&(eh(`https://${t.host}`),th("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:O_(i,t.app.options.projectId))}class nd{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Jv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HC,this._maxUploadRetryTime=zC,this._requests=new Set,s!=null?this._bucket=Gt.makeFromBucketSpec(s,this._host):this._bucket=Fg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=Fg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new iP(r0());{const o=mP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Bg="@firebase/storage",$g="0.13.12";/**
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
 */const _0="storage";function JP(t,e,n){return t=$e(t),zP(t,e,n)}function ZP(t){return t=$e(t),GP(t)}function ek(t,e){return t=$e(t),XP(t,e)}function tk(t=gc(),e){t=$e(t);const r=Ws(t,_0).getImmediate({identifier:e}),s=D_("storage");return s&&nk(r,...s),r}function nk(t,e,n,r={}){YP(t,e,n,r)}function rk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nd(n,r,s,e,ns)}function sk(){Hn(new Rn(_0,rk,"PUBLIC").setMultipleInstances(!0)),ln(Bg,$g,""),ln(Bg,$g,"esm2017")}sk();/**
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
 */const Au=new Map,y0={activated:!1,tokenObservers:[]},ik={initialized:!1,enabled:!1};function rt(t){return Au.get(t)||Object.assign({},y0)}function ok(t,e){return Au.set(t,e),Au.get(t)}function Bc(){return ik}/**
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
 */const v0="https://content-firebaseappcheck.googleapis.com/v1",ak="exchangeRecaptchaV3Token",ck="exchangeDebugToken",jg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},lk=24*60*60*1e3;/**
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
 */class uk{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ki,this.pending.promise.catch(n=>{}),await hk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ki,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function hk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const dk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},$t=new Gs("appCheck","AppCheck",dk);/**
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
 */function qg(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function rd(t){if(!rt(t).activated)throw $t.create("use-before-activation",{appName:t.name})}function T0(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=na(n)+"d:"),r&&(o+=na(r)+"h:"),o+=na(s)+"m:"+na(i)+"s",o}function na(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function sd({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(f){throw $t.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw $t.create("fetch-status-error",{httpStatus:o.status});let c;try{c=await o.json()}catch(f){throw $t.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const l=c.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw $t.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const u=Number(l[1])*1e3,d=Date.now();return{token:c.token,expireTimeMillis:d+u,issuedAtTimeMillis:d}}function fk(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${v0}/projects/${n}/apps/${r}:${ak}?key=${s}`,body:{recaptcha_v3_token:e}}}function E0(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${v0}/projects/${n}/apps/${r}:${ck}?key=${s}`,body:{debug_token:e}}}/**
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
 */const pk="firebase-app-check-database",gk=1,ao="firebase-app-check-store",w0="debug-token";let ra=null;function I0(){return ra||(ra=new Promise((t,e)=>{try{const n=indexedDB.open(pk,gk);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e($t.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(ao,{keyPath:"compositeKey"})}}}catch(n){e($t.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ra)}function mk(t){return b0(R0(t))}function _k(t,e){return A0(R0(t),e)}function yk(t){return A0(w0,t)}function vk(){return b0(w0)}async function A0(t,e){const r=(await I0()).transaction(ao,"readwrite"),i=r.objectStore(ao).put({compositeKey:t,value:e});return new Promise((o,c)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;c($t.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}async function b0(t){const n=(await I0()).transaction(ao,"readonly"),s=n.objectStore(ao).get(t);return new Promise((i,o)=>{s.onsuccess=c=>{const l=c.target.result;i(l?l.value:void 0)},n.onerror=c=>{var l;o($t.create("storage-get",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function R0(t){return`${t.options.appId}-${t.name}`}/**
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
 */const gr=new pc("@firebase/app-check");/**
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
 */async function Tk(t){if(nh()){let e;try{e=await mk(t)}catch(n){gr.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function kl(t,e){return nh()?_k(t,e).catch(n=>{gr.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Ek(){let t;try{t=await vk()}catch{}if(t)return t;{const e=crypto.randomUUID();return yk(e).catch(n=>gr.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function id(){return Bc().enabled}async function od(){const t=Bc();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function wk(){const t=P_(),e=Bc();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ki;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Ek())}/**
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
 */const Ik={error:"UNKNOWN_ERROR"};function Ak(t){return Zu.encodeString(JSON.stringify(t),!1)}async function bu(t,e=!1,n=!1){const r=t.app;rd(r);const s=rt(r);let i=s.token,o;if(i&&!Is(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Is(u)?i=u:await kl(r,void 0))}if(!e&&i&&Is(i))return{token:i.token};let c=!1;if(id())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=sd(E0(r,await od()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),c=!0);const u=await s.exchangeTokenPromise;return await kl(r,u),s.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?gr.warn(u.message):n&&gr.error(u),Dl(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),c=!0),i=await rt(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?gr.warn(u.message):n&&gr.error(u),o=u}let l;return i?o?Is(i)?l={token:i.token,internalError:o}:l=Dl(o):(l={token:i.token},s.token=i,await kl(r,i)):l=Dl(o),c&&P0(r,l),l}async function bk(t){const e=t.app;rd(e);const{provider:n}=rt(e);if(id()){const r=await od(),{token:s}=await sd(E0(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function S0(t,e,n,r){const{app:s}=t,i=rt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Is(i.token)){const c=i.token;Promise.resolve().then(()=>{n({token:c.token}),Hg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Hg(t))}function C0(t,e){const n=rt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Hg(t){const{app:e}=t,n=rt(e);let r=n.tokenRefresher;r||(r=Rk(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Rk(t){const{app:e}=t;return new uk(async()=>{const n=rt(e);let r;if(n.token?r=await bu(t,!0):r=await bu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=rt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},jg.RETRIAL_MIN_WAIT,jg.RETRIAL_MAX_WAIT)}function P0(t,e){const n=rt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Is(t){return t.expireTimeMillis-Date.now()>0}function Dl(t){return{token:Ak(Ik),error:t}}/**
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
 */class Sk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rt(this.app);for(const n of e)C0(this.app,n.next);return Promise.resolve()}}function Ck(t,e){return new Sk(t,e)}function Pk(t){return{getToken:e=>bu(t,e),getLimitedUseToken:()=>bk(t),addTokenListener:e=>S0(t,"INTERNAL",e),removeTokenListener:e=>C0(t.app,e)}}const kk="@firebase/app-check",Dk="0.10.0";/**
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
 */const Nk="https://www.google.com/recaptcha/api.js";function xk(t,e){const n=new Ki,r=rt(t);r.reCAPTCHAState={initialized:n};const s=Ok(t),i=qg(!1);return i?zg(t,e,i,s,n):Lk(()=>{const o=qg(!1);if(!o)throw new Error("no recaptcha");zg(t,e,o,s,n)}),n.promise}function zg(t,e,n,r,s){n.ready(()=>{Mk(t,e,n,r),s.resolve(n)})}function Ok(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Vk(t){rd(t);const n=await rt(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=rt(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function Mk(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{rt(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{rt(t).reCAPTCHAState.succeeded=!1}}),i=rt(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function Lk(t){const e=document.createElement("script");e.src=Nk,e.onload=t,document.head.appendChild(e)}/**
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
 */class ad{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;Fk(this._throttleData);const s=await Vk(this._app).catch(o=>{throw $t.create("recaptcha-error")});if(!(!((e=rt(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw $t.create("recaptcha-error");let i;try{i=await sd(fk(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=Uk(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),$t.create("initial-throttle",{time:T0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=Ws(e,"heartbeat"),xk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ad?this._siteKey===e._siteKey:!1}}function Uk(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+lk,httpStatus:t};{const n=e?e.backoffCount:0,r=fI(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Fk(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw $t.create("throttled",{time:T0(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function Bk(t=gc(),e){t=$e(t);const n=Ws(t,"app-check");if(Bc().initialized||wk(),id()&&od().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw $t.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return $k(t,e.provider,e.isTokenAutoRefreshEnabled),rt(t).isTokenAutoRefreshEnabled&&S0(r,"INTERNAL",()=>{}),r}function $k(t,e,n=!1){const r=ok(t,Object.assign({},y0));r.activated=!0,r.provider=e,r.cachedTokenPromise=Tk(t).then(s=>(s&&Is(s)&&(r.token=s,P0(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&gr.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const jk="app-check",Gg="app-check-internal";function qk(){Hn(new Rn(jk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ck(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Gg).initialize()})),Hn(new Rn(Gg,t=>{const e=t.getProvider("app-check").getImmediate();return Pk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ln(kk,Dk)}qk();const Hk={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},$c=L_(Hk),zr=IC($c,"bha-brother-shout-433"),co=wR($c),zk=tk($c);Bk($c,{provider:new ad("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const cd=at(null),k0=Qe(()=>{var t;return(t=cd.value)==null?void 0:t.uid}),Gk=Qe(()=>D0(k0.value)),D0=t=>t?"Guest "+t.slice(-3):null;ub(co,t=>{cd.value=t});function Ro(){return{userId:k0,currentUser:cd,userName:Gk,getUserName:D0,signInAnonymously:()=>ay(co),logout:()=>hb(co)}}const Ru=at(0),Ea=zs([]);let Wk=0;function As(t,e="info",n=5e3){const r=Wk++;Ea.push({id:r,message:t,type:e}),n&&setTimeout(()=>{const s=Ea.findIndex(i=>i.id===r);s!==-1&&Ea.splice(s,1)},n)}const ht=[];for(let t=0;t<256;++t)ht.push((t+256).toString(16).slice(1));function Kk(t,e=0){return(ht[t[e+0]]+ht[t[e+1]]+ht[t[e+2]]+ht[t[e+3]]+"-"+ht[t[e+4]]+ht[t[e+5]]+"-"+ht[t[e+6]]+ht[t[e+7]]+"-"+ht[t[e+8]]+ht[t[e+9]]+"-"+ht[t[e+10]]+ht[t[e+11]]+ht[t[e+12]]+ht[t[e+13]]+ht[t[e+14]]+ht[t[e+15]]).toLowerCase()}let Nl;const Qk=new Uint8Array(16);function Xk(){if(!Nl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Nl=crypto.getRandomValues.bind(crypto)}return Nl(Qk)}const Yk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wg={randomUUID:Yk};function Jk(t,e,n){var s;if(Wg.randomUUID&&!t)return Wg.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??Xk();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Kk(r)}const Zk={class:"photo-gallery"},e4={class:"photo-gallery__photos"},t4={class:"photo-gallery__photos__item add-image"},n4={class:"aspect-wide"},r4={class:"aspect-wide__wrap flex"},s4={class:"uploader"},i4={class:"aspect-wide"},o4=["progress"],a4=["src"],c4=fn({__name:"PhotoUploader",emits:["change"],setup(t,{emit:e}){const n=e,{currentUser:r,signInAnonymously:s}=Ro(),i=at(4),o=at([]),c=Qe(()=>o.value.slice(0,i.value-1)),l=Qe(()=>o.value.length>c.value.length),u=async f=>{var R;if(!r.value)try{await s()}catch(P){console.error(P),As("Can not get private ID","error")}if(!r.value){As("Please sign in to upload files","error");return}const g=((R=r.value)==null?void 0:R.uid)||"anonymous",m=f.target.files;m&&Array.from(m).forEach(P=>{const C=zs({progress:0,url:null});o.value.push(C);const V=Jk(),M=ek(zk,`userId/${g}/${V}_${P.name}`),O=JP(M,P);O.on("state_changed",L=>{C.progress=Math.round(L.bytesTransferred/L.totalBytes*100)},L=>{As(`Upload failed for ${P.name}:`,"error")},async()=>{C.url=await ZP(O.snapshot.ref),n("change",o.value.map(L=>L.url))})})},d=()=>{l.value=!0,As("Preview opened","info")};return(f,g)=>(te(),ue("div",Zk,[z("div",e4,[z("div",t4,[z("div",n4,[z("div",r4,[z("label",s4,[g[0]||(g[0]=z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24"},[z("path",{fill:"currentColor",d:"m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"}),z("path",{fill:"currentColor",d:"M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"}),z("path",{fill:"currentColor",d:"m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"})],-1)),g[1]||(g[1]=At(" যোগ করুন ")),z("input",{type:"file",multiple:"",onChange:u},null,32)])])])]),(te(!0),ue(Ue,null,ho(c.value,(m,R)=>(te(),ue("div",{key:R,class:"photo-gallery__photos__item"},[z("div",i4,[z("div",{class:lo(["aspect-wide__wrap",{skeleton:m.progress<100}]),progress:m.progress},[m.url?(te(),ue("img",{key:0,src:m.url,alt:"Uploaded file",class:"photo-image"},null,8,a4)):cn("",!0),l.value&&c.value.length-1==R?(te(),ue("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:d},[z("i",null,"+"+Tn(o.value.length-c.value.length+1),1)])):cn("",!0)],10,o4)])]))),128))])]))}}),l4=xt(c4,[["__scopeId","data-v-9b912d5d"]]),u4={class:"post-add flex flex-col flex-center"},h4={key:0,class:"post-add__form flex flex-col"},d4={class:"header"},f4=["disabled"],p4={key:0,width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},g4={key:1,class:"animate-spin",fill:"none",viewBox:"0 0 24 24"},m4={class:"body flex flex-col flex-grow"},_4={class:"post-add__ctrl flex-center"},y4=fn({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=Ro(),r=at(!1),s=at(!1),i=at([]),o=at(""),c=Qe(()=>!s.value&&(o.value.trim()!==""||i.value.length>0)),l=async()=>{o.value.trim()&&await d(o.value.trim())},u=()=>{r.value=!1,o.value="",s.value=!1},d=async g=>{if(s.value=!0,!e.value)try{await n()}catch(m){console.error(m),As("Can not get private ID","error")}UC(va(zr,"shouts"),{text:g,timestamp:new Date,userId:e.value.uid,files:i.value}),u(),Ru.value=Ru.value+1},f=g=>{i.value=[...g]};return(g,m)=>(te(),ue("section",u4,[r.value?(te(),ue("div",h4,[z("div",d4,[z("div",{class:"flex flex-center gap-1"},[z("button",{class:"btn",onClick:u},m[2]||(m[2]=[z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[z("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),m[3]||(m[3]=z("h2",null,"নতুন পোস্ট",-1))]),z("button",{onClick:l,class:"btn btn__primary",disabled:!c.value},[s.value?(te(),ue("svg",g4,m[5]||(m[5]=[z("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10","stroke-width":"4"},null,-1),z("path",{class:"opacity-75",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"},null,-1)]))):(te(),ue("svg",p4,m[4]||(m[4]=[z("path",{d:"M3 20v-6l8-2l-8-2V4l19 8z"},null,-1)])))],8,f4)]),z("div",m4,[z1(z("textarea",{"onUpdate:modelValue":m[0]||(m[0]=R=>o.value=R),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[RE,o.value]]),ye(l4,{onChange:f})])])):cn("",!0),z("div",_4,[z("button",{class:"btn btn__primary",onClick:m[1]||(m[1]=R=>r.value=!0)},m[6]||(m[6]=[z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[z("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),v4={class:"right flex flex-center gap-1"},T4=fn({__name:"AppHeader",setup(t){return(e,n)=>{const r=oc("router-link");return te(),ue("header",null,[ye(r,{class:"brand",to:{name:"home"}},{default:Gr(()=>n[0]||(n[0]=[z("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[z("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),z("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),z("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),z("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),z("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),z("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),z("div",v4,[ye(y4)])])}}}),E4=xt(T4,[["__scopeId","data-v-98e63b3d"]]),w4={};function I4(t,e){const n=oc("RouterLink");return te(),ue("footer",null,[ye(n,{to:"/terms"},{default:Gr(()=>e[0]||(e[0]=[At("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=At(" | ")),ye(n,{to:"/privacy"},{default:Gr(()=>e[1]||(e[1]=[At("Privacy Policy")])),_:1,__:[1]})])}const A4=xt(w4,[["render",I4],["__scopeId","data-v-9677e4fd"]]),b4={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=oc("router-view");return te(),ue(Ue,null,[ye(E4),z("main",null,[ye(r)]),ye(A4)],64)}}},R4=xt(b4,[["__scopeId","data-v-b21eda16"]]),S4={};function C4(t,e){return te(),ue("section",null,e[0]||(e[0]=[z("h2",null,"About",-1),z("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const P4=xt(S4,[["render",C4]]),k4={},D4={class:"loader"};function N4(t,e){return te(),ue("div",D4)}const x4=xt(k4,[["render",N4]]);var O4=["second","minute","hour","day","week","month","year"];function V4(t,e){if(e===0)return["just now","right now"];var n=O4[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var M4=["秒","分钟","小时","天","周","个月","年"];function L4(t,e){if(e===0)return["刚刚","片刻后"];var n=M4[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var Su={},N0=function(t,e){Su[t]=e},U4=function(t){return Su[t]||Su.en_US},xl=[60,60,24,7,365/7/12,12];function Kg(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function F4(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=xl[s]&&s<xl.length;s++)t/=xl[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function B4(t,e){var n=e?Kg(e):new Date;return(+n-+Kg(t))/1e3}var $4=function(t,e,n){var r=B4(t,n&&n.relativeDate);return F4(r,U4(e))};N0("en_US",V4);N0("zh_CN",L4);const j4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function q4(t,e){return te(),ue("svg",j4,e[0]||(e[0]=[z("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const H4={render:q4},z4={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function G4(t,e){return te(),ue("svg",z4,e[0]||(e[0]=[lc('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const Cu={render:G4},W4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function K4(t,e){return te(),ue("svg",W4,e[0]||(e[0]=[z("g",{fill:"none"},[z("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),z("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),z("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Pu={render:K4},Q4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function X4(t,e){return te(),ue("svg",Q4,e[0]||(e[0]=[z("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const wa={render:X4},Y4={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function J4(t,e){return te(),ue("svg",Y4,e[0]||(e[0]=[lc('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const ku={render:J4},Z4={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function e6(t,e){return te(),ue("svg",Z4,[(te(),Ut(Bm("style"),null,{default:Gr(()=>e[0]||(e[0]=[At(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=lc('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const Du={render:e6},t6={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function n6(t,e){return te(),ue("svg",t6,[(te(),Ut(Bm("style"),null,{default:Gr(()=>e[0]||(e[0]=[At(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=lc('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Nu={render:n6};var et=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(et||{});const r6={key:0,class:"reaction-panel"},s6={class:"wrap flex flex-center"},i6=fn({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=Ro(),s=at(!1),i=at(null),o=at(e.value||null),c=Qe(()=>{var P;return(P=n.value)==null?void 0:P.uid}),l=()=>{m()||(s.value=!0)},u=()=>{s.value=!1},d=()=>{m()&&(i.value=setTimeout(()=>{s.value=!0},500))},f=()=>{clearTimeout(i.value)},g=async P=>{s.value=!1,o.value=P,await R(P)};function m(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const R=async P=>{const C=e.postId;c.value||await r();const V=Eu(zr,"shouts",C),M=Eu(zr,`shouts/${C}/reactions`,c.value);await qC(zr,async O=>{const L=await O.get(M),ne=await O.get(V);if(!ne.exists())throw new Error("Shout not found");ne.data().reactionSummary;let J=null;if(L.exists()&&(J=L.data().type),J===P)return;O.set(M,{type:P,timestamp:new Date});const b={[`reactionSummary.${P}`]:Vg(1)};J&&(b[`reactionSummary.${J}`]=Vg(-1)),O.update(V,b)})};return(P,C)=>(te(),ue("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:l,onMouseleave:u,onTouchstart:d,onTouchend:f},[z("button",{onClick:C[0]||(C[0]=V=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===ce(et).Like?(te(),ue(Ue,{key:1},[ye(ce(wa),{width:"18",height:"20",fill:"#1E90FF"}),C[8]||(C[8]=z("span",{class:"color-blue"},"Like",-1))],64)):o.value===ce(et).Haha?(te(),ue(Ue,{key:2},[ye(ce(Du),{width:"22",height:"22"}),C[9]||(C[9]=z("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===ce(et).Love?(te(),ue(Ue,{key:3},[ye(ce(Pu),{width:"22",height:"22"}),C[10]||(C[10]=At()),C[11]||(C[11]=z("span",{class:"color-red"},"Love",-1))],64)):o.value===ce(et).Wow?(te(),ue(Ue,{key:4},[ye(ce(Nu),{width:"22",height:"22"}),C[12]||(C[12]=At()),C[13]||(C[13]=z("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===ce(et).Sad?(te(),ue(Ue,{key:5},[ye(ce(ku),{width:"22",height:"22"}),C[14]||(C[14]=At()),C[15]||(C[15]=z("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===ce(et).Angry?(te(),ue(Ue,{key:6},[ye(ce(Cu),{width:"22",height:"22"}),C[16]||(C[16]=At()),C[17]||(C[17]=z("span",{class:"color-red"},"Angry",-1))],64)):cn("",!0):(te(),ue(Ue,{key:0},[ye(ce(wa),{width:"18",height:"18"}),C[7]||(C[7]=At(" Like "))],64))]),s.value?(te(),ue("div",r6,[z("div",s6,[z("button",{onClick:C[1]||(C[1]=V=>g(ce(et).Like))},[ye(ce(wa),{width:"20",height:"20",fill:"#1E90FF"})]),z("button",{onClick:C[2]||(C[2]=V=>g(ce(et).Haha))},[ye(ce(Du),{width:"24",height:"24"})]),z("button",{onClick:C[3]||(C[3]=V=>g(ce(et).Love))},[ye(ce(Pu),{width:"30",height:"30"})]),z("button",{onClick:C[4]||(C[4]=V=>g(ce(et).Wow))},[ye(ce(Nu),{width:"24",height:"24"})]),z("button",{onClick:C[5]||(C[5]=V=>g(ce(et).Sad))},[ye(ce(ku),{width:"28",height:"28"})]),z("button",{onClick:C[6]||(C[6]=V=>g(ce(et).Angry))},[ye(ce(Cu),{width:"26",height:"26"})])])])):cn("",!0)],32))}}),o6=xt(i6,[["__scopeId","data-v-97eabf84"]]),a6={class:"photo-gallery"},c6={class:"photo-gallery__photos"},l6={key:0,class:"photo-gallery__photos__item full-size"},u6=["src"],h6={class:"aspect-wide"},d6={class:"aspect-wide__wrap"},f6=["src"],p6=fn({__name:"PhotoGallery",props:{files:{}},setup(t){const e=t,n=at(4),r=Qe(()=>{var o;return((o=e.files)==null?void 0:o.slice(0,n.value))??[]}),s=Qe(()=>{var o;return((o=e.files)==null?void 0:o.length)>r.value.length}),i=()=>{As("Preview opened","info")};return(o,c)=>(te(),ue("div",a6,[z("div",c6,[o.files.length===1?(te(),ue("div",l6,[z("img",{src:o.files[0],alt:"Picture"},null,8,u6)])):(te(!0),ue(Ue,{key:1},ho(r.value,(l,u)=>(te(),ue("div",{key:u,class:"photo-gallery__photos__item"},[z("div",h6,[z("div",d6,[l?(te(),ue("img",{key:0,src:l,alt:"Picture"},null,8,f6)):cn("",!0),s.value&&r.value.length-1==u?(te(),ue("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:i},[z("i",null,"+"+Tn(o.files.length-r.value.length+1),1)])):cn("",!0)])])]))),128))])]))}}),g6=xt(p6,[["__scopeId","data-v-1b06c2d1"]]),m6={class:"post"},_6={class:"head flex"},y6={class:"author flex"},v6={class:"body flex flex-col gap-1"},T6={class:"flex flex-center gap-1 summary"},E6={key:0,class:"flex flex-center reactions-count"},w6={class:"footer flex"},I6=fn({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=Ro(),s=e.item.id,i=Qe(()=>{if(r.value&&e.item.reactions){const l=e.item.reactions.find(u=>u.id===r.value);if(l)return l.type}return null}),o=Qe(()=>{var l;return(l=e.item.reactions)==null?void 0:l.reduce((u,d)=>u+1,0)}),c=Qe(()=>{const l=e.item.reactions,u={like:0,haha:0,love:0,wow:0,sad:0,poop:0,angry:0};for(const{type:f}of l)u[f]++;const d=Math.max(...Object.values(u));return Object.entries(u).filter(([,f])=>f===d).map(([f])=>f)});return(l,u)=>(te(),ue("div",m6,[z("div",_6,[ye(ce(H4),{width:"48",height:"48"}),z("div",y6,[z("span",null,Tn(ce(n)(l.item.userId)),1),z("i",null,Tn(ce($4)(new Date(l.item.timestamp.seconds*1e3))),1)])]),z("div",v6,[At(Tn(l.item.text)+" ",1),l.item.files&&l.item.files.length>0?(te(),Ut(g6,{key:0,files:l.item.files},null,8,["files"])):cn("",!0)]),z("div",T6,[o.value>0?(te(),ue("span",E6,[(te(!0),ue(Ue,null,ho(c.value,(d,f)=>(te(),ue(Ue,{key:f},[d===ce(et).Like?(te(),Ut(ce(wa),{key:0,fill:"#1E90FF"})):d===ce(et).Haha?(te(),Ut(ce(Du),{key:1})):d===ce(et).Love?(te(),Ut(ce(Pu),{key:2})):d===ce(et).Wow?(te(),Ut(ce(Nu),{key:3})):d===ce(et).Sad?(te(),Ut(ce(ku),{key:4})):d===ce(et).Angry?(te(),Ut(ce(Cu),{key:5})):cn("",!0)],64))),128)),At(" "+Tn(o.value),1)])):cn("",!0)]),u[0]||(u[0]=z("div",{class:"border-top"},null,-1)),z("div",w6,[ye(o6,{"post-id":ce(s),value:i.value},null,8,["post-id","value"])])]))}}),A6=xt(I6,[["__scopeId","data-v-a8555399"]]),b6={key:1,class:"masonry"},Qg=10,R6=fn({__name:"HomePage",setup(t){Uw();const e=at(!1),n=at([]),r=at(null),s=async()=>{let o;e.value=!0,r.value?o=Pg(va(zr,"shouts"),kg("timestamp","desc"),xC(r.value),Dg(Qg)):o=Pg(va(zr,"shouts"),kg("timestamp","desc"),Dg(Qg));const c=await Og(o),l=[];for(const u of c.docs){const d=u.data(),f=u.id,m=(await Og(va(zr,"shouts",f,"reactions"))).docs.map(R=>({id:R.id,...R.data()}));l.push({id:f,...d,reactions:m})}c.empty||(r.value=c.docs[c.docs.length-1]),n.value.push(...l),e.value=!1};return Gu(s),Pi(Ru,async()=>{n.value=[],r.value=null,await s()}),(o,c)=>e.value?(te(),Ut(x4,{key:0})):(te(),ue("div",b6,[(te(!0),ue(Ue,null,ho(n.value,l=>(te(),Ut(A6,{key:l.id,item:l,class:"masonry-item"},null,8,["item"]))),128))]))}}),S6=xt(R6,[["__scopeId","data-v-88c2aff5"]]),C6={};function P6(t,e){return te(),ue("section",null,e[0]||(e[0]=[z("h2",null,"Privacy Policy",-1),z("p",null,"Privacy Policy content goes here...",-1)]))}const k6=xt(C6,[["render",P6]]),D6={};function N6(t,e){return te(),ue("section",null,e[0]||(e[0]=[z("h2",null,"Terms and Conditions",-1),z("p",null,"Terms and Conditions content goes here...",-1)]))}const x6=xt(D6,[["render",N6]]),O6={class:"container"},V6={key:0,class:"identity"},M6={class:"signin"},L6=["disabled"],U6=["disabled"],F6=fn({__name:"UserPage",setup(t){const e=Lw(),{userId:n,userName:r}=Ro(),s=at(!1),i=at(!1),o=async()=>{s.value=!0;try{const l=await ay(co);s.value=!1}catch(l){console.error("Anonymous sign-in error:",l),alert("Failed to sign in: "+l.message)}},c=async()=>{i.value=!0;try{await co.signOut(),i.value=!1,e.replace({name:"home"})}catch(l){console.error("Sign-out error:",l),alert("Failed to sign out: "+l.message)}};return(l,u)=>(te(),ue("section",O6,[u[1]||(u[1]=z("h2",null,"About you",-1)),ce(n)?(te(),ue("div",V6,[At(Tn(ce(r)),1),u[0]||(u[0]=z("br",null,null,-1)),At("ID: "+Tn(ce(n)),1)])):cn("",!0),u[2]||(u[2]=z("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),z("div",M6,[ce(n)?(te(),ue("button",{key:1,onClick:c,class:"btn btn__primary",disabled:i.value}," Sign out ",8,U6)):(te(),ue("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,L6))])]))}}),B6=xt(F6,[["__scopeId","data-v-922e1ab5"]]),$6=[{path:"/",component:R4,children:[{path:"",name:"home",component:S6},{path:"about",name:"about",component:P4},{path:"terms",name:"terms",component:x6},{path:"privacy",name:"privacy",component:k6},{path:"user",name:"UserPage",component:B6}]}],j6=Vw({history:uw("/"),routes:$6}),q6={class:"fixed bottom-4 left-4 space-y-2 z-50 flex flex-col-reverse"},H6=fn({__name:"Notifications",setup(t){const e={success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600",warning:"bg-yellow-500 text-black"};return(n,r)=>(te(),Ut(K1,{to:"body"},[z("div",q6,[ye(TE,{name:"fade",tag:"div",class:"flex flex-col gap-1"},{default:Gr(()=>[(te(!0),ue(Ue,null,ho(ce(Ea),s=>(te(),ue("div",{key:s.id,class:lo(["min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left",e[s.type]])},Tn(s.message),3))),128))]),_:1})])]))}}),z6=xt(H6,[["__scopeId","data-v-16f73697"]]),G6={install(t){const e=document.createElement("div");document.body.appendChild(e),p_(z6).mount(e)}},ld=p_(xE);ld.use(j6);ld.use(G6);ld.mount("#app");
